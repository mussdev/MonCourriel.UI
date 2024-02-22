import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImputationComponent } from './imputation/imputation.component';
import { SaisiCourrierComponent } from './saisi-courrier/saisi-courrier.component';
import { ModifierCourriersComponent } from './modifier-courriers/modifier-courriers.component';

@Injectable({
  providedIn: 'root'
})
export class PopServiceService {

  constructor(private dialog: MatDialog) { }

  /** Methode pour ouvrir la fenêtre imputation de courrier */
  openOverlay() {
     this.dialog.open(ImputationComponent, {
      // Autres options de configuration
    });
  }

   /** Methode pour ouvrir la fenêtre nouveau courrier */
   openDialogSaisiCourrier() {
    this.dialog.open(SaisiCourrierComponent, {
     // Autres options de configuration
   });     
  }

  // Method to call modifcation fan
  openDialogEditerCourrier() {
    this.dialog.open(ModifierCourriersComponent, {
     // Autres options de configuration
   });     
  }
}
