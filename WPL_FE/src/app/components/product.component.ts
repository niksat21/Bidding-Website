import {Component, OnInit, Input} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Router, ActivatedRoute} from "@angular/router";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `      
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
            <form (submit)="placeBid($event, amount.value)">Place bid USD: <input #amount id="amount" type="number" ><br />
              <input type="submit" class="btn btn-success" value="Place_Bid">
            </form>
          </table>
        </div>
       </td>
     </tr>
  </tbody>
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

  private sub: any;

  constructor(private http: Http,
              private router: Router,
              private _cookieService:CookieService,
              private route: ActivatedRoute
  ) {
    this.productId = "5838ba59ac06afd79db43c9f";
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      if (params.hasOwnProperty('productId')) {
        this.productId = params['productId'];
      }
    });
    this.url = "https://localhost:9000/api/products"
  }

  public placeBid(event, bidAmount) {
    event.preventDefault();
    console.log(bidAmount);
    let productId = this.productId;
    let userId = "5844dc59157b7c5a65990eb4";
    let sellerId = "5844dc59157b7c5a65990eb4";
    let bidDate = console.time();
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU=',
      "Access-Control-Allow-Origin": "*",
      'Content-Encoding': 'gzip'
    });
    let options = new RequestOptions({ headers: headers });
    let bidUrl = "https://localhost:9000/api/bids";
    let body = JSON.stringify( {
      bidAmount, userId, productId, sellerId, bidDate
    });
    this.http.post(bidUrl, body, options)
      .toPromise()
      .then((response) => {
        // route?
      }).catch(this.handleError);
  }

  ngOnInit() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU=',
      'Content-Encoding': 'gzip'
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(this.url + "/" + this.productId, options)
      .toPromise()
      .then((response) => {
        let json = response.json();
        this.productId = json.productId;
        this.sellerId = json.sellerId;
        this.productName = json.productName;
        this.productCategory = json.productCategory;
        this.price = json.price;
        this.specifications = json.specifications;
      }).catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }
}
