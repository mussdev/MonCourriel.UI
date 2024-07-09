import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourrierComponent } from 'src/app/add-courrier/add-courrier.component';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent {
  constructor(private dialogRef: MatDialog){}  

  openAddCourrierPopup(event: Event){
    event.preventDefault()
    this.dialogRef.open(AddCourrierComponent);
  }

}
