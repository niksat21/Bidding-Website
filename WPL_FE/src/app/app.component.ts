import {Component} from '@angular/core';

import {User} from "./services/user";
import {Login} from "./services/Login/login"
import {Logout} from "./services/Logout/logout"

// Add the RxJS Observable operators.
import './rxjs-operators';
import {UserService} from "./services/user.service";
import {LoginService} from "./services/Login/longin.service";
import {LogoutService} from "./services/Logout/logout.service";

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService,LogoutService,LoginService]
})
export class AppComponent {
  login : Login
  user : User
  logout : Logout

}
