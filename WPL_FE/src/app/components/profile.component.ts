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
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/1/2016.
 */
import {Component, NgModule, OnInit, enableProdMode, Input} from '@angular/core';
enableProdMode();
import {LoginComponent} from './login.component';
import {Router} from '@angular/router'
import {NavBarRegComponent} from "./navbar-reg.component";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Component({


  selector: 'app-root',
  template : `
        <nav-bar-after></nav-bar-after>
        <div >
    <h1 class="my_margin_form">My Profile</h1>
	<fieldset name="Contact Details:">
				<legend class="titlefeel"></legend>


   <form class="form-horizontal formstyle">

		<fieldset name="Contact Details:">
				<legend>Personal details:</legend>

			<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2" >First Name</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" id="firstname"  [value]=firstName >
				</div>
			</div>


			<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Last Name</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" id="lastname" [value]=lastName>
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
					<input type="text" class="form-control" id="userid" [value]=email>
				</div>
			</div>



		</fieldset>

			<!--  address -->

		<fieldset>

		<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Password</label>
				<div class="col-xs-5">
					<input type="password" class="form-control" id="pwd" [value]=password>
				</div>
			</div>



		</fieldset>



		  <!-- submit -->
        <div class="form-group">
            <div class="col-xs-offset-2 col-xs-10">
                <span><button type="submit" class="btn btn-primary">SaveChanges</button></span>
                <span><button type="submit" class="btn btn-primary">Cancel</button></span>
            </div>
        </div>

    </form>
	</fieldset>
</div>

        
 

`

})
export class profileComponent implements OnInit{
@Input()  private url: String;
  @Input()  private output;
  @Input() private firstName;
  @Input() private split;
  @Input() private lastName;
  @Input() private userName;
  @Input() private password;
  @Input() private email;
  constructor(private http : Http){this.url = "http://localhost:9000/api/users";}



  ngOnInit(): void {

    this.http.get(this.url + "/58422a804a3b14187c96ead0")
      .toPromise()
      .then((response) => {
        console.log(response.json());

        this.output =  JSON.stringify(response.json());

        console.log(this.output);
        this.split = this.output.split(",");
        console.log('firstname : ',this.split[2].split(":")[1]);
        this.firstName = this.split[2].split(":")[1].replace(/"/g,'');
        this.lastName = this.split[3].split(":")[1].replace(/"/g,'');
        this.userName = this.split[1].split(":")[1].replace(/"/g,'');
        this.password = this.split[5].split(":")[1].replace(/"/g,'');
        this.email = this.split[4].split(":")[1].replace(/"/g,'');
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }







}
