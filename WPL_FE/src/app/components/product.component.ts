import {Component, OnInit, Input} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
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
<table width="50%">
  <tbody>
    <tr>
      <td>
        <div id="mywidth" class="thumbnail" width="250px" height="200px">
        </div>
      </td>
      <td>
        <div class="wrapper">
          <table id="userdata">
            <tbody>
              <tr><td>{{productName}}</td></tr>
              <tr><td>{{productCategory}}</td></tr>
              <tr><td> Initial Bid USD:  {{price}}</td></tr>
              <tr><td> Descriptions:  {{productName}}</td></tr>
            </tbody>
            <form (submit)="placeBid($event, amount.value)">Place Bid USD: <input #amount id="amount" type="number"><br />
              <input type="submit" class="btn btn-success" value="Place_Bid">
            </form>
            <form (submit)="addToCart($event)">Buy Now
              <input type="submit" class="btn btn-success" value="Place in Cart">
            </form>
          </table>
        </div>
       </td>
     </tr>
  </tbody>
</table>
<table class="sortable"  border="1">
    <tr>
      <th>Product Id</th>
      <th>Bid Id</th>
      <th>Seller Id</th>
      <th>Bid Amount</th>
    </tr>
<tbody [innerHTML]="tableHTML"></tbody>
</table>
`
})
export class ProductComponent implements OnInit {
  @Input() private url: String;
  @Input() private productId: String;
  @Input() private sellerId: String;
  @Input() private productName: String;
  @Input() private productCategory: String;
  @Input() private price: Number;
  @Input() private specifications: String;
  @Input() private tableHTML: String;

  constructor(private http: Http,
              private router: Router,
              private _cookieService:CookieService
  ) {
    this.url = "https://localhost:9000/api/products";
    this.tableHTML = "";
  }

  public placeBid(event, bidAmount) {
    event.preventDefault();
    console.log(bidAmount);
    let productId = "5838ba59ac06afd79db43c9f";
    let userId = "5844dc59157b7c5a65990eb4";
    let sellerId = "5844dc59157b7c5a65990eb4";
    let bidDate = console.time();
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU=',

    });
    let options = new RequestOptions({ headers: headers });
    let bidUrl = "https://localhost:9000/api/bids";
    let body = JSON.stringify( {
      bidAmount, userId, productId, sellerId, bidDate
    });
    this.http.post(bidUrl, body, options)
      .toPromise()
      .then((response) => {
        this.updateTable(options);
      }).catch(this.handleError);
  }

  public addToCart(event) {
    event.preventDefault();
    let productsToBuy = "";
    if (this._cookieService.get("cart") != null) {
      productsToBuy = this._cookieService.get("cart") + ",";
    }
    if (!productsToBuy.includes(this.productId.toString())) {
      productsToBuy += this.productId;
    }

    this._cookieService.put("cart", productsToBuy);
  }

  ngOnInit() {
    let productID = "5838ba59ac06afd79db43c9f";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU='
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(this.url + "/" + productID, options)
      .toPromise()
      .then((response) => {
        let json = response.json();
        this.productId = json.productId;
        this.sellerId = json.sellerId;
        this.productName = json.productName;
        this.productCategory = json.productCategory;
        this.price = json.price;
        this.specifications = json.specifications;

        this.updateTable(options);
      }).catch(this.handleError);
  }

  updateTable(options: RequestOptions) {
    this.http.get('https://localhost:9000/api/bids/product/' + this.productId, options)
      .toPromise()
      .then((bidResponse) => {
        this.tableHTML = "";
        bidResponse.json().forEach(bid => {
          if (this.tableHTML.length > 0) {
            this.tableHTML += ""
          }
          this.tableHTML += "" +
            "<tr><td>"+bid.productId+"</td>"+
            "<td>"+bid.bidId+"</td>"+
            "<td>"+bid.sellerId+"</td>"+
            "<td>"+bid.bidAmount+"</td>"+
            "</tr>";
        });
      });
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }
}
