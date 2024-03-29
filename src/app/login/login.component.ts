import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {}
  
  // Pour utiliser ReactiveFormModule on va déclarer un objet
  // userFormGroup!: FormGroup;

  goToPageHome():void{
    this.router.navigateByUrl('/home')
  }

}
