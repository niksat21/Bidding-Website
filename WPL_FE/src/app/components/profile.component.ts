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
import {Component, NgModule, OnInit, enableProdMode, Input, Output} from '@angular/core';
enableProdMode();
import {LoginComponent} from './login.component';
import {Router, Route} from '@angular/router'
import {NavBarRegComponent} from "./navbar-reg.component";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({


  selector: 'app-root',
  template : `
        <nav-bar-after></nav-bar-after>
        <div >
    <h1 class="my_margin_form">My Profile</h1>
	<fieldset name="Contact Details:">
				<legend class="titlefeel"></legend>


   <form class="form-horizontal formstyle" #form="ngForm" (ngSubmit)="saveChanges(firstName.value,lastName.value
   ,password.value,email.value)">

		<fieldset name="Contact Details:">
				<legend>Personal details:</legend>

			<div class="form-group">
				<label for="ServiceName"  class="control-label col-xs-2" >First Name</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" id="firstname" #firstName name="first" [ngModel]="first">
				</div>
			</div>


			<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Last Name</label>
				<div class="col-xs-5">
					<input type="text" class="form-control" #lastName name = "lastName" id="lastname" [ngModel]="last" >
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
					<input type="text" class="form-control" #email name ="email" id="userid" [ngModel]="em">
				</div>
			</div>



		</fieldset>

			<!--  address -->

		<fieldset>

		<div class="form-group">
				<label for="ServiceName" class="control-label col-xs-2">Password</label>
				<div class="col-xs-5">
					<input type="password" class="form-control" #password name="password" id="pwd" [ngModel]="pass">
				</div>
			</div>



		</fieldset>



		  <!-- submit -->
        <div class="form-group">
            <div class="col-xs-offset-2 col-xs-10">
                <span><button type="submit" class="btn btn-primary"  >SaveChanges</button></span>
                <span><button type="submit" class="btn btn-primary" (click)="cancel()" >Cancel</button></span>
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
  @Input() private first;
  @Input() private split;
  @Input() private last;
  @Input() private user;
  @Input() private pass;
  @Input() private em;
  @Input() private userId;


  // private url: String;
  // private output;
  // private firstName;
  // private split;
  // private lastName;
  //  private userName;
  // private password;
  //  private email;
  //  private userId;

private userID;

  constructor(private http : Http,private router : Router,private _cookieService:CookieService)
  {this.url = "https://localhost:9000/api/users";}



  ngOnInit(): void {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU=',
      // "Access-Control-Allow-Origin" : "*"
    });
    let options = new RequestOptions({ headers: headers });
    this.userID=this._cookieService.get("userID");
    let id = this.userID;
    console.log("id.......",id);
    console.log("url.........",this.url + "/"+ id);
    this.http.get(this.url + "/"+ id ,options)
      .toPromise()
      .then((response) => {


        this.output =  JSON.stringify(response.json());
        // console.log(response.json().firstName);
        console.log(this.output);
        this.split = this.output.split(",");
        this.first = this.split[2].split(":")[1].replace(/"/g,'');
        this.last = this.split[3].split(":")[1].replace(/"/g,'');
        this.user = this.split[1].split(":")[1].replace(/"/g,'');
        this.pass = this.split[5].split(":")[1].replace(/"/g,'');
        this.em = this.split[4].split(":")[1].replace(/"/g,'');
        this.userId =this.split[0].split(":")[1].replace(/"/g,'');
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }

  saveChanges(firstName,lastName,password,email){


    let userId = this.userId;
    let userName = this.user;
    let body = JSON.stringify({userId,userName,firstName,lastName,password,email});
    console.log('json stringify body posted: ',body);

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU='
    });
    let options = new RequestOptions({ headers: headers });

    console.log('update val : ',body);

    this.http.post('https://localhost:9000/api/users/update/', body,options)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigateByUrl('/profile');

        },
        error => {
          //alert(error.text());
          console.log(error.text());
          this.router.navigateByUrl('/error');
        }
      );

  }

  cancel(){

    this.router.navigateByUrl('/dash');
  }




}
