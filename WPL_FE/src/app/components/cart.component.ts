import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Http, RequestOptions, Headers} from "@angular/http";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-cart',
  templateUrl: `
<nav-bar-after></nav-bar-after>
<br/><br/><h1>Cart</h1>
<table>
<tr>
<th>Product Name</th>
<th>Price</th>
<th>Remove</th>
</tr>
<tbody [innerHTML]="safeHTML"></tbody>
</table>
<form (submit)="buyCart($event)">Buy Now
  <input type="submit" class="btn btn-success" value="Purchase Items">
</form>
`
})
export class CartComponent implements OnInit {
@Input() tableHTML: String;
@Input() safeHTML: SafeHtml;

  constructor(private http: Http,
              private router: Router,
              private _cookieService:CookieService,
              private _sanitizer: DomSanitizer
  ) {

  }

  // public removeFromCart(event, id) {
  //   event.preventDefault();
  //   console.log("removed " + id);
  // }

  public buyCart(event) {
    event.preventDefault();
    console.log("buyCart");
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU='
    });
    let options = new RequestOptions({ headers: headers });
    if (this._cookieService.get("cart") == null) {
      return;
    }
    this.tableHTML = "";
    this.safeHTML = this._sanitizer.bypassSecurityTrustHtml(this.tableHTML.toString());
    let products = this._cookieService.get("cart").split(",");
    console.log(this._cookieService.get("cart"));
    console.log(products);
    products.forEach((product) => {
      if (product.length > 0) {

        this.http.get('https://localhost:9000/api/products/' + product, options)
          .toPromise()
          .then((productResponse) => {
            let quantity = 1;
            console.log("where things go to hell?");
            console.log(productResponse.json());
            console.log(this._cookieService.get("userID"));
            let buyerId = this._cookieService.get("userID")[0];
            let sellerId = productResponse.json().sellerId;
            console.log("sellerId: " + sellerId);
            let productId = product;
            let body = JSON.stringify( {
              quantity, buyerId, sellerId, productId
            });
            this.http.post('https://localhost:9000/api/orders', body, options)
              .toPromise()
              .then((orderResponse) => {
                console.log("order submitted");
            });
          });
      }

      this._cookieService.remove("cart");
    });
  }

  public removeFromCart(event) {
    event.preventDefault();
    console.log("removeFromCart");
  }
  updateCart() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU='
    });
    let options = new RequestOptions({ headers: headers });
    if (this._cookieService.get("cart") == null) {
      return;
    }
    this.tableHTML = "";
    this.safeHTML = this._sanitizer.bypassSecurityTrustHtml(this.tableHTML.toString());
    let products = this._cookieService.get("cart").split(",");
    console.log(this._cookieService.get("cart"));
    console.log(products);
    products.forEach((product) => {
      if (product.length > 0) {
        this.http.get('https://localhost:9000/api/products/' + product, options)
          .toPromise()
          .then((productResponse) => {
            this.tableHTML += "" +
              "<tr><td>" + productResponse.json().productName + "</td>" +
              "<td>" + productResponse.json().price + "</td>" +
                `<td><form (submit)="removeFromCart()"><input type="submit" value="X"></form></td>` +
            "</tr>";
          this.safeHTML = this._sanitizer.bypassSecurityTrustHtml(this.tableHTML.toString());

            // <br /><form (submit)=\"removeFromCart($event)" + //, "+productResponse.json().productId +
            // "\">" +
            // "<input type=\"submit\" class=\"btn btn-success\" value=\"X\">" +
            // "</form>
            console.log(this.tableHTML);
          });
      }
    });

  }

  ngOnInit() {
    this.tableHTML = "";
    this.updateCart();
  }
}
