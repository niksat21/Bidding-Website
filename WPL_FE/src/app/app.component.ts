import {Component} from '@angular/core';
import {LoginService} from "./services/Login/longin.service";
import {User} from "./services/user";
import {Login} from "./services/Login/login"

// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  login : Login


}
