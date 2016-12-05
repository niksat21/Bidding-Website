import {Component, OnInit, Input} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
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
            <form>Place bid USD: <input type="number" ><br /></form>
            <input type="submit" class="btn btn-success" value="Place_Bid">
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

  constructor(private http: Http,
              private router: Router,
              private _cookieService:CookieService
  ) {
    this.url = "https://localhost:9000/api/products"
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
      }).catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }
}
