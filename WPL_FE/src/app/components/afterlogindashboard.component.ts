
import {Component, NgModule, Input} from '@angular/core';

import {LoginComponent} from './login.component';
import {Router} from '@angular/router'
import {NavBarRegComponent} from "./navbar-reg.component";

@NgModule({

  declarations: [LoginComponent],

})

@Component({


  selector: 'app-root',
  template : `
        <nav-bar-after></nav-bar-after>
        
    <h1 class="my_margin_form">Hi, {{ans}}</h1>
    <nav-bar-bid></nav-bar-bid>
    
   


`,



})
export class afterlogindashboardComponent {

  loginRef : LoginComponent;

  private resp;private ans;

  constructor(){

    this.resp = this.loginRef.getJSONResp();
    this.ans =this.resp.split(",")[2].split(":")[1];
    console.log("on dashbaord ..........",this.ans);

  }



}
