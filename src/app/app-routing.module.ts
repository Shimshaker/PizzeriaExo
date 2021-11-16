import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {CommanderComponent} from "./commander/commander.component";
import {PanierComponent} from "./panier/panier.component";
import {LoggedGuard} from "./guards/logged.guard";
import {ContactComponent} from "./contact/contact.component";


const routes : Routes = [
  {
    path: '', component: AcceuilComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'commander', component: CommanderComponent, canActivate: [LoggedGuard]
  },
  {
    path:'panier', component: PanierComponent
  },
  {
    path:'contact', component: ContactComponent, canActivate: [LoggedGuard]
  },
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})

export class AppRoutingModule { }
