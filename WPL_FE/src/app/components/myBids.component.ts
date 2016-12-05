/**
 * Created by niksat21 on 12/4/2016.
 */

/**
 * Created by niksat21 on 12/4/2016.
 */

import {Component, NgModule, OnInit, enableProdMode, Input} from '@angular/core';
enableProdMode();
import {LoginComponent} from './login.component';
import {Router, Route} from '@angular/router'
import {NavBarRegComponent} from "./navbar-reg.component";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({


  selector: 'app-root',
  template :
    `
    <nav-bar-after></nav-bar-after>
    <br/><br/><br/>
 
       

`

})
export class myBidsComponent implements OnInit{
  private userID;
  private output;
  private productID;
  private outputProd;
  private sellerID;
  constructor(private http:Http,private _cookieService:CookieService,private router:Router){}

  ngOnInit(): void {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU='
    });
    let options = new RequestOptions({ headers: headers });
    this.userID=this._cookieService.get("userID");
    this.http.get('https://localhost:9000/api/bids/user/' + this.userID,options)
      .toPromise()
      .then((response) => {
        console.log(response.json());

        this.output =  JSON.stringify(response.json());
        console.log('output.....',this.output);
        // [{"bidId":"5844f07977a2bc27b0887362","productId":"5844efe377a2bc27b0887361","userId":"58422a804a3b14187c96ead0","bidDate":null}]

        this.productID = this.output.split(",")[1].split(":")[1].replace(/"/g,"");
      })
      .catch(this.handleError);


    this.http.get('https://localhost:9000/api/products/' + this.productID,options)
      .toPromise()
      .then((response) => {
        console.log(response.json());

        this.outputProd =  JSON.stringify(response.json());
        console.log('output.....',this.outputProd);
        // [{"bidId":"5844f07977a2bc27b0887362","productId":"5844efe377a2bc27b0887361","userId":"58422a804a3b14187c96ead0","bidDate":null}]

        this.sellerID = this.outputProd.split(",")[1].split(":")[1].replace(/"/g,"");
      })
      .catch(this.handleError);


  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }









}
