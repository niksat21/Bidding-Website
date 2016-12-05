
import {Component, NgModule, Input} from '@angular/core';

import {LoginComponent} from './login.component';
import {Router} from '@angular/router'
import {NavBarRegComponent} from "./navbar-reg.component";
import {CookieService} from "angular2-cookie/services/cookies.service";

@NgModule({

  declarations: [LoginComponent],

})

@Component({


  selector: 'app-root',
  template : `
        <nav-bar-after></nav-bar-after>
        
    <h1 class="my_margin_form">Hi, {{firstName}}</h1>
    <p >Last Logged in at : {{lastLoginDate}} (location: ) {{lastLoginLocation}}</p>
    <nav-bar-bid></nav-bar-bid>
    
   


`,



})
export class afterlogindashboardComponent {
  private firstName;
  private lastLogin;

  private lastLoginDate;
  private lastLoginLocation;




  constructor(private _cookieService:CookieService){



    //   let first= this._cookieService.put("firstName");
    // this.firstName=first;
    // console.log("why me............",first);
    // // if(this.firstName==null)
    // //   this.firstName="unkonwn"
    // this.lastLogin = this.getCookie("lastLogin");

  this.getDetails();

  }

  getDetails(){

    if (this._cookieService != null) {


      this.firstName = this._cookieService.get("firstName").replace(/"/g, '');
      // if(this.firstName.isEmpty)
      //   this.firstName = this._cookieService.get("userName").replace(/"/g,'');
      this.lastLogin = this._cookieService.get("lastLogin").replace(/"/g, '');
      this.lastLoginLocation = this._cookieService.get("lastLoginLocation") != null
        ? this._cookieService.get("lastLoginLocation").replace(/"/g, '') : "";
      console.log(this.lastLogin);
      let temp = parseInt(this.lastLogin);
      let date = new Date(temp).toDateString();
      this.lastLoginDate = date
    }
  }




}
