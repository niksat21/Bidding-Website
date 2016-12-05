/**
 * Created by niksat21 on 12/2/2016.
 */
import {Component, NgModule, Input} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {NavBarRegComponent} from "./navbar-reg.component";

import {CookieService} from 'angular2-cookie/core';



@Component({


  selector: 'login',
  template : `
  <form class="navbar-form" role="form" (submit)="login($event, username.value, password.value)">
        <div class="form-group">
            
            <input  class="form-control" type="text" #username  id="username" placeholder="Username">
        </div>
        <div class="form-group">
            
            <input type="password" #password class="form-control my_littlepad" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-success my_littlepad">Submit</button>
        <li><a href="/register">Register</a></li>
    </form>
`

})

// @NgModule({
//
//   imports : [Router]
// })
export class LoginComponent {


  constructor(public http : Http, private router : Router,private _cookieService:CookieService) {
  }

  login(event, userName, password) {

    console.log(userName,password);
    event.preventDefault();
    let body = JSON.stringify({userName,password });
    console.log('json stringify body posted: ',body);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:9000/api/auth/login', body,options)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigateByUrl('/dash');
          console.log('user logged in : ',JSON.stringify(response.json()));
          let output = JSON.stringify(response.json());

           let userID = JSON.stringify(response.json()).split(",")[0].split(":")[1];
          let userName = JSON.stringify(response.json()).split(",")[1].split(":")[1];
          let firstName = JSON.stringify(response.json()).split(",")[2].split(":")[1];
          let lastName = JSON.stringify(response.json()).split(",")[3].split(":")[1];
          let email = JSON.stringify(response.json()).split(",")[4].split(":")[1];
          let lastLogin = JSON.stringify(response.json()).split(",")[6].split(":")[1];
           console.log( "Pleas print me.........",JSON.stringify(response.json()).split(",")[2].split(":")[1]);
          this.setcookie("userID",userID);
          this.setcookie("userName",userName);
          this.setcookie("firstName",firstName);
          this.setcookie("lastName",lastName);
          this.setcookie("email",email);
          this.setcookie("lastLogin",lastLogin);

        },
        error => {
          //alert(error.text());
          console.log(error.text());
          this.router.navigateByUrl('/login-error');
        }
      );
  }




  getcookie(key : string){

    this._cookieService.get(key);

  }

  setcookie(key :string,value:string){
    this._cookieService.put(key,value);
  }


}

