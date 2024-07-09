import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourriersRecusComponent } from './courriers-recus/courriers-recus.component';
import { CourriersImputesComponent } from './courriers-imputes/courriers-imputes.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ImputationComponent } from './imputation/imputation.component';
import { AddCourrierComponent } from './add-courrier/add-courrier.component';
import { ParameterHomeComponent } from './parameter-home/parameter-home.component';
import { DirectionsComponent } from './organisations/directions/directions.component';
import { ServiceOrgComponent } from './organisations/service-org/service-org.component';
import { UtilisateursComponent } from './organisations/utilisateurs/utilisateurs.component';
import { RecommandationComponent } from './recommandation/recommandation.component';
/* import { NotFoundComponent } from './not-found/not-found.component'; */

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'add-courrier', component: AddCourrierComponent},
  // { path: '**', component: NotFoundComponent},
  { path: 'courriers-recus', component: CourriersRecusComponent},
  { path: 'courriers-imputes', component: CourriersImputesComponent},
  { path: 'imputationCourrier', component: ImputationComponent},
  { path: 'parameter/home', component:ParameterHomeComponent},
  { path: 'parameter/directions', component:DirectionsComponent},
  { path: 'parameter/services', component:ServiceOrgComponent},
  { path: 'parameter/users', component:UtilisateursComponent },
  { path: 'parameter/recommandation', component:RecommandationComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
