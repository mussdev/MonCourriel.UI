import { Component, OnInit } from '@angular/core';
import { Courrier } from '../models/Courrier';
import { CourriersService } from '../services/courriers.service';
import { MatDialog } from '@angular/material/dialog';
import { ModifierCourriersComponent } from '../modifier-courriers/modifier-courriers.component';
import { ImputationComponent } from '../imputation/imputation.component';

@Component({
  selector: 'app-courriers-recus',
  templateUrl: './courriers-recus.component.html',
  styleUrls: ['./courriers-recus.component.css']
})
export class CourriersRecusComponent implements OnInit{

  courriers! : Array<Courrier>;

  constructor(private courrierService: CourriersService, private dialogRef:MatDialog){}

  ngOnInit(): void {
      this.courrierService.getAllCourriers()
      .subscribe({
        next: (data) =>{
          this.courriers = data;
          //console.log(this.courriers);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  openModifyCourrierPopup(data: any){
    this.dialogRef.open(ModifierCourriersComponent, {
      data,
    });
  }

  openPopupImputationCourrier(){
    this.dialogRef.open(ImputationComponent, {});
  }

}
