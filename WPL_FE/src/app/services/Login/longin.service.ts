import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Login} from './login';

import 'rxjs/Rx';
import {Configuration} from "../../Configuration";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  private url: String;
  private headers: Headers;
  private http: Http;


  constructor(@Inject(Http) _http: Http) {

    this.url = "https://localhost:9000/api/auth/login";
    this.http = _http;

    this.headers = new Headers();
    this.headers.append('Content-type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  public authenticate(username,password){
    console.log("came here in authenticate")
    console.log(username,password);

    let creds = JSON.stringify({ username: username.value, password: password.value });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(String(this.url), creds, {
      headers: headers

    })
      .subscribe(
        data => {
          console.log(data.json().id_token);
        },
        err => this.handleError(err.json().message),
        () => console.log('Authentication Complete')
      );

  }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }
}
