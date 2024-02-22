import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { PopServiceService } from '../pop-service.service';

@Component({
  selector: 'app-modifier-courriers',
  templateUrl: './modifier-courriers.component.html',
  styleUrls: ['./modifier-courriers.component.css']
})
export class ModifierCourriersComponent {

  constructor(private matdialogref: MatDialogRef<ModifierCourriersComponent>, private popService:PopServiceService){}

  // Method to close the dialog
  cancelFanEditCourrier(){
    this.matdialogref.close(ModifierCourriersComponent)
  }

  // Method to edit imputation of e-mail
  EditImputationFan(): void{
    this.popService.openOverlay()
  }

}
