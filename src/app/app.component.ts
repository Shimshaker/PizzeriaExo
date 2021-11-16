import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizzeria';

  constructor(private router: Router) {
  }
  logout() {
    alert('Vous êtes déconnecté');
    sessionStorage.removeItem('connectedUser');
    this.router.navigateByUrl("");
  }

  isConnected() {
    return sessionStorage.getItem('connectedUser');
  }
}
