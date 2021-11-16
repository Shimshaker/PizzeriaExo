import { Injectable } from '@angular/core';
import {Pizza} from "../pizza.model";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  pizzas: Pizza[] = [
    {
      id: 1,
      photo: "/assets/img/pizzamargherita.jpg",
      nom: "Tia Margherita -- Dis la marguerite",
      description: "Il simplissimo pizza bolognese, mozarella, bassilica ",
      ingredients: "Sauce Bolognèse, mozzarella, bassilic",
      prix: 12
    },
    {
      id: 2,
      photo: "/assets/img/pizzajambon.jpg",
      nom: "Tia Jamon -- Dis la pizza jambon",
      description: "Il pizza jambon,  bolognese, mozarella, jambon,  bassilica ",
      ingredients: "Sauce Bolognèse, mozzarella, jambon,  bassilic",
      prix: 14
    },
    {
      id: 3,
      photo: "/assets/img/pizzareine.jpg",
      nom: "Tia Reina -- Dis la pizza reine",
      description: "Il pizza reine, bolognese, mozarella, jambon,  bassilica, champigna, oliva, aunerginas ",
      ingredients: "Sauce Bolognèse, mozzarella, jambon,  bassilic, olive noir, aubergines, champignons",
      prix: 16
    },
    {
      id: 4,
      photo: "/assets/img/pizzadamarino.jpg",
      nom: "Tia marino -- Dis la pizza marine",
      description: "Il pizza marino, bolognèse, mozarella, anchois, sardine, sauge, oliva ",
      ingredients: "Sauce Bolognèse, mozzarella, anchois, sardine, sauge, olive",
      prix: 18
    },
    {
      id: 5,
      photo: '/assets/img/pizzadiavola.jpg',
      nom: "Tia diavola diabolica -- Dis la pizza diavola picante",
      description: "Il pizza diavola, bolognese, mozarella, chorizo, bassilica, piment vert, oignons ",
      ingredients: "Sauce Bolognèse, mozzarella, chorizo, bassilic, piment vert, oignons",
      prix: 18
    },
  ];

  listPanier = [{produit: this.pizzas[0], qteAch: 0},
    {produit: this.pizzas[1], qteAch: 0},
    {produit: this.pizzas[2], qteAch: 0},
    {produit: this.pizzas[3], qteAch: 0},
    {produit: this.pizzas[4], qteAch: 0}
  ]

  constructor() { }

  lstAchat: { pizzaChoix: Pizza; qteAch: number }[] = [];

  getlistPanier(){
    return this.listPanier;
  }

  getlistAchat(){
    return this.lstAchat;
  }

  ajouter(index: number) {

    let qteToAdd = this.listPanier[index].qteAch;
    let PizzaToAdd: Pizza = this.pizzas[index];

    this.lstAchat.push({pizzaChoix: PizzaToAdd, qteAch: qteToAdd});

  }

  delPizza(index: number) {
    this.lstAchat.splice(index, 1);

  }

  montantTotal(){
    let montant: number = 0;

    this.lstAchat.map(e => e.pizzaChoix.prix * e.qteAch).forEach(e => montant+=e)

    return montant;

  }

  viderPanier(){

    this.lstAchat = [];
  }





}
