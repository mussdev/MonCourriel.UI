import { Component } from '@angular/core';
import { PopServiceService } from '../pop-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private popServices: PopServiceService, private dialog: MatDialog){}
  displayComponentNouveauCourrier: boolean = false;
  displayComponentListeCourriers: boolean = false;
  displayComponentCourriersImputes: boolean = false;

  showComponent(componentName: string): void {
    // Réinitialisation de toutes les variables booléennes à false
    this.displayComponentNouveauCourrier = false;
    this.displayComponentListeCourriers = false;
    this.displayComponentCourriersImputes = false;

    // Affichage du composant approprié
   /*  if (componentName === 'nouveauCourrier') {
      this.displayComponentNouveauCourrier = true;
    } else  */
    if (componentName === 'listeCourriers') {
      this.displayComponentListeCourriers = true;
    } else if (componentName === 'courriersImputes') {
      this.displayComponentCourriersImputes = true;
    }
  }



  callPopNewCourrier(): void{
    this.popServices.openDialogSaisiCourrier();
  }
}
