import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Direction } from 'src/app/models/Direction';
import { DirectionService } from 'src/app/services/direction.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent  implements OnInit {

  direction!: Direction[];
  form!: FormGroup;
  directionService = inject(DirectionService);
  directionFormSubcription!: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Récuperation de toutes les directions
    this.directionService.getAllDirection().subscribe({
      next: (data)=>{
        this.direction = data
        //console.log(this.direction);
      },
      error: (err)=>{
        console.log(err);
      }
    })

    // création de formulaire grâce à formBuilder
    this.form = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required], 
    })
    
  }
  
  ngOnDestroy(): void {
    if(this.directionFormSubcription){
      this.directionFormSubcription.unsubscribe();
    }
  }

  onSubmit(){
    this.directionFormSubcription=this.directionService.addDirection(this.form.value).subscribe({
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
