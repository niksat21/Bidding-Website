import {Component,NgModule } from '@angular/core';
import { NavBarComponent } from './components/navbar.component'


import {User} from "./services/user";
import {Login} from "./services/Login/login"
import {Logout} from "./services/Logout/logout"

// Add the RxJS Observable operators.
// import './rxjs-operators';
import {UserService} from "./services/user.service";
import {LoginService} from "./services/Login/longin.service";
import {LogoutService} from "./services/Logout/logout.service";
import {NgModel} from "@angular/forms";

@Component({

  selector: 'app-root',
  template : `
          <h1>hello</h1>
          <nav-bar></nav-bar>
        `
    ,
})

@NgModule({

  declarations: [AppComponent,NavBarComponent],
  bootstrap : [AppComponent]

})


export class AppComponent {}
