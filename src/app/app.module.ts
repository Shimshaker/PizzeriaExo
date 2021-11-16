import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CommanderComponent } from './commander/commander.component';
import { PanierComponent } from './panier/panier.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { ComComponent } from './com/com.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    CommanderComponent,
    PanierComponent,
    ContactComponent,
    ComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
