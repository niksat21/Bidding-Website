import {Component,NgModule } from '@angular/core';
import { NavBarComponent } from './components/navbar.component'
import {LoginComponent} from './components/login.component'
import { carouselComponent } from './components/carousel.component'

import {ReactiveFormsModule,FormGroup, FormControl ,FormBuilder,Validators } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import {User} from "./services/user";
import {Login} from "./services/Login/login"
import {Logout} from "./services/Logout/logout"

// Add the RxJS Observable operators.
// import './rxjs-operators';
import {UserService} from "./services/user.service";
import {LoginService} from "./services/Login/longin.service";
import {LogoutService} from "./services/Logout/logout.service";
import {NgModel} from "@angular/forms";
import {fluidComponent} from "./components/fluid.component";
import {dashboardListComponent} from "./components/dashboardList.component";


@Component({

  selector: 'app-root',
  template : `
          
          <nav-bar></nav-bar>
          <carousel></carousel>
        <fluid></fluid>
        <dashboardlist></dashboardlist>
        `
    ,
})

@NgModule({

  declarations: [AppComponent,NavBarComponent,LoginComponent,carouselComponent,fluidComponent,dashboardListComponent],
  bootstrap : [AppComponent],
  imports : [ReactiveFormsModule,BrowserModule,FormGroup,FormControl,FormBuilder,Validators]

})


export class AppComponent {}
