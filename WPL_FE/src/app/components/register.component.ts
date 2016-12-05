/**
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/1/2016.
 */
import {Component, NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {Router} from '@angular/router'
import {NavBarRegComponent} from "./navbar-reg.component";
import {Headers, RequestOptions, Http} from "@angular/http";



@Component({


  selector: 'app-root',
  template : `
        <nav-bar-reg></nav-bar-reg>
        <div >
    <h1 class="my_margin_form">Need a account?</h1>
	<fieldset name="Contact Details:">
				<legend class="titlefeel"></legend>


   <form class="form-horizontal formstyle">

		<fieldset name="Contact Details:">
				<legend>Personal details:</legend>

			<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">First Name</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" #firstName id="firstname"  placeholder="First Name">
				</div>
			</div>


			<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Last Name</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" #lastName id="lastname" placeholder="Last Name">
				</div>
			</div>
		</fieldset>

			<!-- -->



		<!-- contact person-->
		<fieldset name="Contact Details:">
			<legend>Contact Details:</legend>
			<div class="form-group">
				<label for="Contactname" class="control-label col-xs-2">Email ID</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" #email id="userid" placeholder="email ID">
				</div>
			</div>



		</fieldset>
		
		<fieldset>
			<legend>Account Details:</legend>
			<div class="form-group">
				<label for="Contactname" class="control-label col-xs-2">UserName</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" #userName id="userid" placeholder="userName">
				</div>
			</div>



		</fieldset>

			<!--  address -->

		<fieldset>

		<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Password</label>
				<div class="col-xs-5">
					<input type="password" class="form-control" #password id="pwd" placeholder="password">
				</div>
			</div>



		</fieldset>



		  <!-- submit -->
        <div class="form-group">
            <div class="col-xs-offset-2 col-xs-10">
                <button type="submit" class="btn btn-primary" (click)="createUser(firstName.value,lastName.value,
                email.value,password.value,userName.value)">Submit</button>
            </div>
        </div>

    </form>
	</fieldset>
</div>

        
 

`

})
export class registerComponent {
constructor(private http:Http , private router:Router){}

createUser(firstName,lastName,userName,email,password) {
  console.log(firstName,lastName,userName,email,password);
  event.preventDefault();
  let body = JSON.stringify({userName,firstName,lastName,password,email});
  console.log('json stringify body posted: ',body);

  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });

  this.http.post('http://localhost:9000/api/users/', body,options)
    .subscribe(
      response => {
        localStorage.setItem('id_token', response.json().id_token);
        this.router.navigateByUrl('/dash');
        console.log('user created   : ',JSON.stringify(response.json()));

      },
      error => {
        //alert(error.text());
        console.log(error.text());
        this.router.navigateByUrl('/error');
      }
    );
}





}
