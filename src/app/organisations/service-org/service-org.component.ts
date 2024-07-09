import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Direction } from 'src/app/models/Direction';
import { Service } from 'src/app/models/Service';
import { DirectionService } from 'src/app/services/direction.service';
import { ServiceDepService } from 'src/app/services/service-dep.service';

@Component({
  selector: 'app-service-org',
  templateUrl: './service-org.component.html',
  styleUrls: ['./service-org.component.scss'],
})
export class ServiceOrgComponent  implements OnInit, OnDestroy {

  service!: Service[];
  directionList!: Direction[];
  form!: FormGroup;
  serviceDep = inject(ServiceDepService);
  directionService = inject(DirectionService);
  serviceFormSubcription!: Subscription;
  
  constructor(private fb: FormBuilder) { }

  ngOnDestroy(): void {
    if(this.serviceFormSubcription){
      this.serviceFormSubcription.unsubscribe();
    }
  }

  ngOnInit() {
    // Récuperation de toutes les directions
    this.serviceDep.getAllService().subscribe( data =>{
      this.service = data;
    })

    // création de formulaire grâce à formBuilder
    this.form = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required], 
      directionId: ['', Validators.required],
    })

    // Get list of direction to fill in select field
    this.directionService.getAllDirection().subscribe(data=>{
      this.directionList = data;
    });
  }


  onSubmit(){
    console.log("test.................")
    this.serviceFormSubcription=this.serviceDep.addService(this.form.value).subscribe({
      next: (response)=>{
        window.location.reload();
        console.log(response);
      },
      error: (err)=>{
        console.log(err);
      }
    })
    console.log("test 2 .................")
    // Réinitialiser le formulaire
    this.form.controls['code'].reset(); this.form.controls['description'].reset(); this.form.controls['directionId'].reset();
  }

}
