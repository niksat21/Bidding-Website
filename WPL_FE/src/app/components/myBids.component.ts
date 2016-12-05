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
 <script src="../../assets/scripts/sorttable.js"></script>
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
<table class="sortable"  border="1">
    <tr>
      <th>Product Id</th>
      <th>Bid Id</th>
      <th>Seller Id</th>
      <th>Bid Amount</th>
    </tr>
<span [innerHTML]="tableHTML"></span>
</table>
       

`

})
export class myBidsComponent implements OnInit{
  private userID;
  private output;
  @Input() private tableHTML: String;

  constructor(private http:Http,private _cookieService:CookieService,private router:Router){
    this.tableHTML = `    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>`;
  }

  ngOnInit(): void {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU=',
      'Content-Encoding': 'gzip'
    });
    let options = new RequestOptions({ headers: headers });
    this.userID=this._cookieService.get("userID");
    this.http.get('https://localhost:9000/api/bids/user/'+this.userID,options)
      .toPromise()
      .then((response) => {
        console.log(response.json());

        this.output =  JSON.stringify(response.json());
        console.log('response.json().........',response.json());
        console.log('output.....',this.output);


        this.tableHTML = "";
        response.json().forEach(product => {
          console.log(product);
          this.tableHTML += "<div><tr>" +
            "<td>"+product.productId+"</td>"+
            "<td>"+product.bidId+"</td>"+
            "<td>"+product.sellerId+"</td>"+
            "<td>"+product.bidAmount+"</td>"+
            "</tr></div>";
        });
//



      })
      .catch(this.handleError);





  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }








}
