import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import { NavBarBeforeComponent} from './components/navbarBefore.component';
import {LoginComponent} from './components/login.component'
import {ReactiveFormsModule,FormGroup, FormControl ,FormBuilder,Validators } from '@angular/forms';
import {carouselComponent} from "./components/carousel.component";
import {fluidComponent} from "./components/fluid.component";
import {dashboardListComponent} from "./components/dashboardList.component";
import {RouterModule, Routes} from '@angular/router'
import {beforeLoginComponent} from "./components/beforeLogin.component";
import {afterLoginComponent} from "./components/afterLogin.component";
import {afterNavBarComponent} from "./components/navbarAfter.component";
import {LogoutComponent} from "./components/logout.component";
import {NavBarRegComponent} from "./components/navbar-reg.component";
import {routingConfigModule, routingComps} from "./components/router-config";
import {afterlogindashboardComponent} from "./components/afterlogindashboard.component";
import {ErrorLoginComponent} from "./components/LoginError.component";
import {profileComponent} from "./components/profile.component";
import {prevBidsComponent} from "./components/previousBids.component";
import {NavBarBidComponent} from "./components/navBarBid.component";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {ErrorComponent} from "./components/error.component";
import {postProductComponent} from "./components/postProducts.component";



@NgModule({
  declarations: [
    AppComponent,NavBarBeforeComponent,LoginComponent,carouselComponent,
    fluidComponent,dashboardListComponent,beforeLoginComponent,afterLoginComponent,afterNavBarComponent,
    LogoutComponent,NavBarRegComponent,routingComps,NavBarRegComponent,afterlogindashboardComponent,ErrorLoginComponent,
    profileComponent,prevBidsComponent,NavBarBidComponent,ErrorComponent,postProductComponent
  ],
  providers: [ CookieService ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    ReactiveFormsModule,
    DataTableModule,
    routingConfigModule


  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}
