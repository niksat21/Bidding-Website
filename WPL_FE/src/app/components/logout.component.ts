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

@Component({


  selector: 'logout',
  template : `
   
      
             
           
            <div id="navbar" class="navbar-collapse collapse nav navbar-nav">
                  <li><a href="#">Log Out</a></li>
             </div>
  





`





})

// @NgModule({
//
//   imports : [Router]
// })
export class LogoutComponent {



  constructor(public http : Http) {
  }

  login(event) {


    event.preventDefault();


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:9000/api/auth/logout',options)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          // this.router.navigateByUrl('/');

        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }


}
