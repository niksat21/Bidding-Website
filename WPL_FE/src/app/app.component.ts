import {Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./services/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  user: User;
  title: string;

  constructor(private userService:UserService) {
    this.userService.GetUser("5838afa6ac06afad585d59ef")
      .then((response) => {
        this.user = this.userService.loggedInUser;
        this.title = this.user.firstName;
      });
  }
}
