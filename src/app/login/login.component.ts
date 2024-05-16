import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string = "";
  successMessage: string = "";
  //add constructor
  constructor(private router: Router) { }
  //add login function


  login(loginform: any): void {
    this.errorMessage = '';
    this.successMessage = '';
    if (loginform.value.username == "admin" && loginform.value.password == "admin") {
      //navigate to home page
      this.successMessage = "Login Success";
      this.router.navigate(["/Home"]);

      console.log("Login Success");

    }
    else {
      this.errorMessage = "Invalid Username or Password";
    }
  }


}
