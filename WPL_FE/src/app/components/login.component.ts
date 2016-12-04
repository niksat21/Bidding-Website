/**
 * Created by niksat21 on 12/2/2016.
 */
import {Component, NgModule, Input} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {NavBarRegComponent} from "./navbar-reg.component";




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
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

   private _name;
  private resp;

  constructor(public http : Http, private router : Router) {
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

           this._name = JSON.stringify(response.json()).split(",")[2].split(":")[1];
           console.log( "Pleas print me.........",JSON.stringify(response.json()).split(",")[2].split(":")[1]);
            this.setJSONResp(JSON.stringify(response.json()));

        },
        error => {
          //alert(error.text());
          console.log(error.text());
          this.router.navigateByUrl('/login-error');
        }
      );
  }

  public setJSONResp(s2: string) {
    this.resp = s2;
  }
  public getJSONResp(){
    return this.resp;
  }




}

