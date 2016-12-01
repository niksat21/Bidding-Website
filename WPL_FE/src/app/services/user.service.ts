import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {User} from './user';

import 'rxjs/Rx';
import {Configuration} from "../Configuration";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private url: String;
  private headers: Headers;
  private http: Http;
  public loggedInUser: User;

  constructor(@Inject(Http) _http: Http) {

    this.url = "http://localhost:9000/api/users";
    this.http = _http;

    this.headers = new Headers();
    this.headers.append('Content-type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  // public GetUser = (id: string): Observable<User> => {
  //   console.log("TEST");
  //   return this.http.get(this.url + "/" + id)
  //     .map((response: Response) => {
  //       console.log("This is testing");
  //       return <User>response.json().data;
  //     })
  //     .catch(this.handleError);
  // };

  public GetUser(id: string): Promise<User> {
    return this.http.get(this.url + "/" + id)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.loggedInUser = response.json();
      })
      .catch(this.handleError);
  }

  public getAllUser(): Promise<User> {

    return this.http.get(this.url + "/")
      .toPromise()
      .then((response) => {
          console.log(response);
          this.loggedInUser = response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }
}
