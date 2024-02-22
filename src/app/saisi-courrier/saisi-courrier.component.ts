import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { PopServiceService } from '../pop-service.service';

@Component({
  selector: 'app-saisi-courrier',
  templateUrl: './saisi-courrier.component.html',
  styleUrls: ['./saisi-courrier.component.css']
})
export class SaisiCourrierComponent implements OnInit {

  constructor(private popServices: PopServiceService, private matDialogRef: MatDialogRef<SaisiCourrierComponent>){}

  ngOnInit(): void {
      
  }

  // Method to close the dialog
  cancel(){
    this.matDialogRef.close(SaisiCourrierComponent)
  }

  // Method to call the imputation fan
  ImputationFan(): void{
    this.popServices.openOverlay();
  }

}
