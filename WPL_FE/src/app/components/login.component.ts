/**
 * Created by niksat21 on 12/2/2016.
 */
import {Component} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';


@Component({


  selector: 'login',
  template : `
  <form [formGroup]="loginForm" (ngSubmit)="doLogin($event)">
    <input [formControl]="username" type="username" placeholder="Your username">
    <input [formControl]="password" type="password" placeholder="Your password">
    <button type="submit">Log in</button>
  </form>
`

})
export class LoginComponent {

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) {
  }

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value.password,this.loginForm.value.password);
    let usernameRcvd = this.loginForm.controls.valueOf.arguments.username;
    let passwordRcvd = this.loginForm.controls.valueOf.arguments.password;
    console.log(usernameRcvd, passwordRcvd);


  }
}
