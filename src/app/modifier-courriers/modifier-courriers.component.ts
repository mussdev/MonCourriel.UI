import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourriersService } from '../services/courriers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ImputationComponent } from '../imputation/imputation.component';


@Component({
  selector: 'app-modifier-courriers',
  templateUrl: './modifier-courriers.component.html',
  styleUrls: ['./modifier-courriers.component.css']
})


export class ModifierCourriersComponent implements OnInit{

  form!:FormGroup;

  constructor(private matDialog:MatDialog, private dialogRef:MatDialogRef<ModifierCourriersComponent>, private servCourrier:CourriersService,
     private fb:FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data:any){

      this.form = this.fb.group({
        expediteur:['', Validators.required],
        mailCourrier: ['', Validators.required],
        adresse:[''],
        contact:[''],
        codeCourrier:['', Validators.required],
        dateCourrier:['', Validators.required],
        obejt:['', Validators.required],
        note: [''],
        statut:['', Validators.required],
      })

     }
  
  ngOnInit(): void {
    this.form.patchValue({
      expediteur: this.data.expediteur,
      mailCourrier: this.data.mailCourrier,
      adresse: this.data.adresse,
      contact: this.data.contact,
      codeCourrier: this.data.codeCourrier,
      dateCourrier: formatDate(this.data.dateCourrier, 'yyyy-MM-dd','en'),
      obejt: this.data.obejt,
      note: this.data.note,
      statut: this.data.statut,
    })
  }

  cancel(){
    this.dialogRef.close();
  }

  updCourrier(){
    this.servCourrier.updateCourrier(this.data.id, this.form.value).subscribe({
      next: (response) => {
       this.dialogRef.close();
        // Recharger la page
       window.location.reload();
      }
    });
  }

  openFanImputationCourrier(){
    this.matDialog.open(ImputationComponent, {});
  }


}


