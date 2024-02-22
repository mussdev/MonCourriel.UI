import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaisiCourrierComponent } from './saisi-courrier/saisi-courrier.component';
import { CourriersRecusComponent } from './courriers-recus/courriers-recus.component';
import { CourriersImputesComponent } from './courriers-imputes/courriers-imputes.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ImputationComponent } from './imputation/imputation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifierCourriersComponent } from './modifier-courriers/modifier-courriers.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SaisiCourrierComponent,
    CourriersRecusComponent,
    CourriersImputesComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    FooterPageComponent,
    ImputationComponent,
    ModifierCourriersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
