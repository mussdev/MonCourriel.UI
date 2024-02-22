import { Component, OnInit } from '@angular/core';
import { PopServiceService } from '../pop-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Courrier } from '../models/Courrier';
import { CourriersService } from '../services/courriers.service';

@Component({
  selector: 'app-courriers-recus',
  templateUrl: './courriers-recus.component.html',
  styleUrls: ['./courriers-recus.component.css']
})
export class CourriersRecusComponent implements OnInit{

  courriers! : Array<Courrier>;

  constructor(private popServices: PopServiceService, private dialog: MatDialog, private courrierService: CourriersService){}

  ngOnInit(): void {
      this.courrierService.getAllCourriers()
      .subscribe({
        next: (data) =>{
          this.courriers = data;
          console.log(this.courriers);
        },
        error: (response) => {
          console.log(response);
        }
      })
  }

  callPopFan(): void{
    this.popServices.openOverlay()
  }

  openFanImputationCourrierR():void{
    this.popServices.openOverlay();
  }

  openFanModifierCourrierR():void{
    this.popServices.openDialogEditerCourrier();
  }
}
