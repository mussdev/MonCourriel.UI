import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourriersRecusComponent } from './courriers-recus/courriers-recus.component';
import { CourriersImputesComponent } from './courriers-imputes/courriers-imputes.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menus/menu/menu.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ImputationComponent } from './imputation/imputation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifierCourriersComponent } from './modifier-courriers/modifier-courriers.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuVerticalComponent } from './menus/menu-vertical/menu-vertical.component';
import { IonicModule } from '@ionic/angular';
import { AddCourrierComponent } from './add-courrier/add-courrier.component';
import { ParameterHomeComponent } from './parameter-home/parameter-home.component';
import { ParameterMenuComponent } from './menus/parameter-menu/parameter-menu.component';
import { DirectionsComponent } from './organisations/directions/directions.component';
import { ServiceOrgComponent } from './organisations/service-org/service-org.component';
import { UtilisateursComponent } from './organisations/utilisateurs/utilisateurs.component';
import { RecommandationComponent } from './recommandation/recommandation.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCourrierComponent,
    CourriersRecusComponent,
    CourriersImputesComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    FooterPageComponent,
    ImputationComponent,
    ModifierCourriersComponent,
    MenuVerticalComponent,
    ParameterHomeComponent,
    ParameterMenuComponent,
    DirectionsComponent,
    ServiceOrgComponent,
    UtilisateursComponent,
    RecommandationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot({})
  ],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
