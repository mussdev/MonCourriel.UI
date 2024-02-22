import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-imputation',
  templateUrl: './imputation.component.html',
  styleUrls: ['./imputation.component.css']
})
export class ImputationComponent {
  constructor(private matDialogRef: MatDialogRef<ImputationComponent>) {} 

  // Method to close the fan
  cancelFanImp(){
    this.matDialogRef.close(ImputationComponent);
  }
}
