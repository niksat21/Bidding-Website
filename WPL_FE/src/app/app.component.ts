import {Component,NgModule } from '@angular/core';
import { NavBarBeforeComponent } from './components/navbarBefore.component'
import {LoginComponent} from './components/login.component'
import { carouselComponent } from './components/carousel.component'

import {ReactiveFormsModule,FormGroup, FormControl ,FormBuilder,Validators } from '@angular/forms';
import {DataTableModule} from "angular2-datatable";
import { BrowserModule } from '@angular/platform-browser';
import {Router,RouterModule} from '@angular/router';
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
import { beforeLoginComponent} from "./components/beforeLogin.component";
import {afterLoginComponent} from "./components/afterLogin.component";
import { afterNavBarComponent} from "./components/navbarAfter.component";
import {LogoutComponent} from "./components/logout.component";
import {NavBarRegComponent} from "./components/navbar-reg.component";
import {afterlogindashboardComponent} from "./components/afterlogindashboard.component";
import {ErrorLoginComponent} from "./components/LoginError.component";
import {profileComponent} from "./components/profile.component";


@Component({

  selector: 'app-root',
  template : `
          <!--<after-login></after-login>-->
          <!--<before-login></before-login>-->
            
            <div><router-outlet></router-outlet></div>
               `
    ,
})

@NgModule({

  declarations: [AppComponent,NavBarBeforeComponent,LoginComponent,
    carouselComponent,fluidComponent,dashboardListComponent,beforeLoginComponent,afterLoginComponent,afterNavBarComponent,
    LogoutComponent,NavBarRegComponent,afterlogindashboardComponent,ErrorLoginComponent,profileComponent],
  bootstrap : [AppComponent],
  imports : [ReactiveFormsModule,BrowserModule,FormGroup,FormControl,FormBuilder,Validators,DataTableModule]

})



export class AppComponent {

}
