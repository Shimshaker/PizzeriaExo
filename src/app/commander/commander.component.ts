import {Component, NgModule, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Pizza} from "../pizza.model";
import {every, from, reduce} from "rxjs";
import {newArray} from "@angular/compiler/src/util";
import {PanierService} from "../services/panier.service";
import {PanierComponent} from "../panier/panier.component";

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {



  constructor(private _servicePanier: PanierService, private _router: Router ) { }

  ngOnInit(): void {

  }

  ajouter(index: number) {

    this._servicePanier.ajouter(index);

  }

  delPizza(index: number) {

    this._servicePanier.delPizza(index);

  }

  montantTotal(){

   return this._servicePanier.montantTotal()

  }

  getlistPanier() {
    return this._servicePanier.getlistPanier();
  }

  getlistAchat() {
    return this._servicePanier.getlistAchat();
  }

  goToPanier() {
    this._router.navigate(['/', 'panier']);
  }
}
