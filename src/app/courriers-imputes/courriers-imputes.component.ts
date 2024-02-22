import { Component } from '@angular/core';
import { PopServiceService } from '../pop-service.service';

@Component({
  selector: 'app-courriers-imputes',
  templateUrl: './courriers-imputes.component.html',
  styleUrls: ['./courriers-imputes.component.css']
})
export class CourriersImputesComponent {

  constructor(private popServices: PopServiceService){}

  // Method to edit courriel
  openFanModifierCourrier():void{
    this.popServices.openDialogEditerCourrier();
  }

  // Method to impute courriel
  openFanImputationCourrier():void{
    this.popServices.openOverlay();
  }

}
