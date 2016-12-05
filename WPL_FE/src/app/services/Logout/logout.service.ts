/**
 * Created by niksat21 on 12/1/2016.
 */
import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Logout} from './logout';

import 'rxjs/Rx';
import {Configuration} from "../../Configuration";
import {Observable} from "rxjs";

@Injectable()
export class LogoutService {

  private url: String;
  private headers: Headers;
  private http: Http;


  constructor(@Inject(Http) _http: Http) {

    this.url = "https://localhost:9000/api/auth/logout";
    this.http = _http;

    this.headers = new Headers();
    this.headers.append('Content-type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  public logout(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(String(this.url), {
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
