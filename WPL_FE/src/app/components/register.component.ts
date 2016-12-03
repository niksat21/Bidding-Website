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
import {Component} from '@angular/core';
import {LoginComponent} from './login.component';
import {Router} from '@angular/router'

@Component({


  selector: 'app-root',
  template : `
        <!--<nav-bar-Reg></nav-bar-Reg>-->
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
					<input type="text" class="form-control" id="firstname"  placeholder="First Name">
				</div>
			</div>


			<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Last Name</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" id="lastname" placeholder="Last Name">
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
					<input type="text" class="form-control" id="userid" placeholder="email ID">
				</div>
			</div>



		</fieldset>

			<!--  address -->

		<fieldset>

		<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Password</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" id="pwd" placeholder="password">
				</div>
			</div>



		</fieldset>



		  <!-- submit -->
        <div class="form-group">
            <div class="col-xs-offset-2 col-xs-10">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>

    </form>
	</fieldset>
</div>

        
 

`

})
export class registerComponent {



}
