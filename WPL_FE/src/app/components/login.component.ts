/**
 * Created by niksat21 on 12/2/2016.
 */
import {Component} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';



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
        
    </form>
`

})
export class LoginComponent {



  constructor() {
  }

  login(event, username, password) {

    console.log(username,password);
    // event.preventDefault();
    // let body = JSON.stringify({ username, password });
    // this.http.post('http://localhost:3001/sessions/create', body)
    //   .subscribe(
    //     response => {
    //       localStorage.setItem('id_token', response.json().id_token);
    //       this.router.navigate(['home']);
    //     },
    //     error => {
    //       alert(error.text());
    //       console.log(error.text());
    //     }
    //   );
  }


}
