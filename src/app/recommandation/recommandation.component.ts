import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recommandation } from '../models/Recommandation';
import { RecommandationService } from '../services/recommandation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.scss'],
})
export class RecommandationComponent  implements OnInit, OnDestroy {

  form!: FormGroup
  recommandation!: Recommandation[]
  recommandationService = inject(RecommandationService)
  recommandationFormSubcription!: Subscription;

  constructor(private fb : FormBuilder) { }


  ngOnDestroy(): void {
    if(this.recommandationFormSubcription){
      this.recommandationFormSubcription.unsubscribe();
    }
  }

  ngOnInit() {

    // Récuperation de toutes les directions
    this.recommandationService.getAllRecommandation().subscribe( data => {
      this.recommandation = data;
    })

    // création de formulaire grâce à formBuilder
    this.form = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required], 
    })

  }

  onSubmit(){
    this.recommandationFormSubcription=this.recommandationService.addRecommandation(this.form.value).subscribe({
      next: (response)=>{
        window.location.reload();
       // console.log(response);
      },
      error: (err)=>{
        console.log(err);
      }
    })

    // Réinitialiser le formulaire
    this.form.controls['code'].reset(); this.form.controls['description'].reset();
  }

}
