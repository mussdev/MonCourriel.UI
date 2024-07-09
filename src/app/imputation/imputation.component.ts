import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceDepService } from '../services/service-dep.service';
import { DirectionService } from '../services/direction.service';
import { Direction } from '../models/Direction';
import { Service } from '../models/Service';
import { Recommandation } from '../models/Recommandation';
import { RecommandationService } from '../services/recommandation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imputation',
  templateUrl: './imputation.component.html',
  styleUrls: ['./imputation.component.css']
})
export class ImputationComponent implements OnInit{

  //servServiceDep= inject(ServiceDepService)
  dirService= inject(DirectionService)
  recommandService =inject(RecommandationService)
  listDirServ: Direction[]=[]
  listService: Service[]=[]
  listRecommandation: Recommandation[]=[]
  form!: FormGroup
  tableauImputCourrier: any[] = []
  colHide = false

  constructor(private dialogRef: MatDialogRef<ImputationComponent>, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      departementImpute: ['', Validators.required],
      recommandationAFaire: ['', Validators.required],
    })
  } 

  ngOnInit(): void {
    this.dirService.getAllDirectionAndService().subscribe(data =>{
      this.listDirServ = data;
    })

    this.recommandService.getAllRecommandation().subscribe(data =>{
      this.listRecommandation = data;
    })

    this.hideTableCol()
  }

  cancel(){
    this.dialogRef.close();
  }

  addItem(){
    const departementImpute = this.form.get('departementImpute')?.value ;
    const recommandationAFaire = this.form.get('recommandationAFaire')?.value ;
    const newItem = {departementImpute: departementImpute, recommandationAFaire: recommandationAFaire}
    this.tableauImputCourrier.push(newItem);
    this.form.reset();
  }

  hideTableCol(){
    this.colHide = true
  }

  deleteRow(index: number){
    this.tableauImputCourrier.splice(index, 1)
  }

}
