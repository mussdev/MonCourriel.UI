import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CourriersService } from '../services/courriers.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { Service } from '../models/Service';
import { Recommandation } from '../models/Recommandation';
import { DirectionService } from '../services/direction.service';
import { RecommandationService } from '../services/recommandation.service';
import { Direction } from '../models/Direction';

@Component({
  selector: 'app-add-courrier',
  templateUrl: './add-courrier.component.html',
  styleUrls: ['./add-courrier.component.scss'],
})
export class AddCourrierComponent  implements OnInit, OnDestroy {
  
  form!:FormGroup;
  courrierFormSubscription!:Subscription;
  courrierService = inject(CourriersService);
  selectedImages: File[] = [];
  listDirServ: Direction[]=[]
  listRecommandation: Recommandation[]=[]
  //servServiceDep= inject(ServiceDepService)
  dirService= inject(DirectionService)
  recommandService =inject(RecommandationService)

  constructor(private fb:FormBuilder, private router: Router, private dialogRef: MatDialogRef<AddCourrierComponent>) { }

  ngOnDestroy(): void {
    if(this.courrierFormSubscription){
      this.courrierFormSubscription.unsubscribe();
    }
  }

  ngOnInit(): void  {
    this.form = this.fb.group({
      expediteur:['', Validators.required],
      mailCourrier: ['', Validators.required],
      adresse:[],
      contact:[],
      codeCourrier:['', Validators.required],
      dateCourrier:['', Validators.required],
      obejt:['', Validators.required],
      note: [],
      statut:['Nouveau'],
      files: [null],
    })

    this.dirService.getAllDirectionAndService().subscribe(data =>{
      this.listDirServ = data;
    })

    this.recommandService.getAllRecommandation().subscribe(data =>{
      this.listRecommandation = data;
    })
  }

  onImageSelected(event: any): void {
    this.selectedImages = Array.from(event.target.files);
  }

  onSubmit(){
    
    if(this.form.invalid){
      return;
    }

    const formData = new FormData();

    for(const key of Object.keys(this.form.value)){
      formData.append(key, this.form.value[key]);
    }

    for(const file of this.selectedImages){
      formData.append('files', file);
    }

    try {
      this.courrierService.addCourriers(formData);
      console.log('Courrier créé avec succès');
    } catch (error) {
      console.error('Erreur lors de la création du courrier : ', error);
    }

    // Réinitialiser le formulaire
    this.form.controls['expediteur'].reset();this.form.controls['mailCourrier'].reset();this.form.controls['adresse'].reset();
    this.form.controls['contact'].reset(); this.form.controls['codeCourrier'].reset(); this.form.controls['dateCourrier'].reset();
    this.form.controls['obejt'].reset();this.form.controls['note'].reset();
  }

  cancel(){
    this.dialogRef.close();
  }

}
