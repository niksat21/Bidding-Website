/**
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/2/2016.
 */
import {Component, NgModule} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({


  selector: 'logout',
  template : `
   
            <div id="navbar" class="navbar-collapse collapse nav navbar-nav">
                  <button type="submit" class="btn btn-success my_littlepad" (click)="logout($event)">LogOut</button>
             </div>
  

`





})

// @NgModule({
//
//   imports : [Router]
// })
export class LogoutComponent {



  constructor(public http : Http,private router:Router,private _cookieService:CookieService) {
  }

  logout(event) {


    this._cookieService.removeAll();
    this.router.navigateByUrl('/');
    // event.preventDefault();
    //
    //
    // let headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Basic YWRtaW46MTIzNDU='
    // });
    // let options = new RequestOptions({ headers: headers });
    // let body = JSON.stringify({});
    // this.http.post('http://localhost:9000/api/auth/logout',body,options)
    //   .subscribe(
    //     response => {
    //       localStorage.setItem('id_token', response.json().id_token);
    //       this.router.navigateByUrl('/');
    //
    //     },
    //     error => {
    //       this.router.navigateByUrl('/error')
    //       console.log(error.text());
    //     }
    //   );
  }


}
