import { Component, OnInit } from '@angular/core';
import {PanierService} from "../services/panier.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {of} from "rxjs";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  coordClientForm: FormGroup;

  constructor(private _servicePanier: PanierService, formBuilder: FormBuilder) {
    this.coordClientForm = formBuilder.group({
      'nom': new FormControl(null, [Validators.required]),
      'prenom': new FormControl(null,[Validators.required]),
      'iban': new FormControl(null, [Validators.minLength(16), Validators.maxLength(32), Validators.required]),
      'rue': new FormControl(null, [Validators.required]),
      'numero': new FormControl(null, [Validators.required, Validators.min(1)]),
      'cp': new FormControl(null, [Validators.required]),
      'ville': new FormControl(null, [Validators.required]),
      'telephone': new FormControl(null, [Validators.pattern("0[0-9]{8,9}"), Validators.required])
    })


  }

  isformValid(){
    if (!this.coordClientForm.valid){
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

  delPizza(index: number) {

    this._servicePanier.delPizza(index);

  }

  montantTotal(){

    return this._servicePanier.montantTotal()

  }

  getlistAchat() {
    return this._servicePanier.getlistAchat();
  }

  onSubmit() {

    alert("Merçi pour votre achat...!")
    this.coordClientForm.reset();
    this._servicePanier.viderPanier();

  }
}
