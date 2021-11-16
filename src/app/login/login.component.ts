import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {
    email: '',
    password: ''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {

    console.log(this.formData);

    if (this.formData.email == "email" && this.formData.password == "pass"){

      sessionStorage.setItem('connectedUser', this.formData.email);
      this.router.navigateByUrl('/commander');

    }else {
      alert('identifiants invalides');
    }

  }
}
