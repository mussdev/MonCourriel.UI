import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaisiCourrierComponent } from './saisi-courrier/saisi-courrier.component';
import { CourriersRecusComponent } from './courriers-recus/courriers-recus.component';
import { CourriersImputesComponent } from './courriers-imputes/courriers-imputes.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ImputationComponent } from './imputation/imputation.component';
/* import { NotFoundComponent } from './not-found/not-found.component'; */

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  // { path: '**', component: NotFoundComponent},
  { path: 'saisi-courrier', component: SaisiCourrierComponent},
  { path: 'courriers-recus', component: CourriersRecusComponent},
  { path: 'courriers-imputes', component: CourriersImputesComponent},
  { path: 'imputationCourrier', component: ImputationComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
