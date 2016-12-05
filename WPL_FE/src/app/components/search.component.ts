import {Component, OnInit, Input} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
<form (submit)="searchForProduct($event, searchBox.value)">
  <input type="text" #searchBox id="searchBox">
  <input type="submit">
</form>
<table>
    <tr>
      <th>Product Id</th>
      <th>Product Name</th>
      <th>Category</th>
      <th>Price</th>
    </tr>
<span [innerHTML]="tableHTML"></span>
</table>
`
})

export class SearchComponent implements OnInit {
  @Input() private tableHTML: String;
  private prodId;

  constructor(private http:Http,private router:Router,private _cookieService:CookieService){
    this.tableHTML = `    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>`;
  }

  public searchForProduct(event, searchText) {
    event.preventDefault();
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU=',

    });
    let options = new RequestOptions({ headers: headers });
    let url = "https://localhost:9000/api/products/search/" + searchText;

    this.http.get(url, options)
      .toPromise()
      .then((response) => {
        this.tableHTML = "";
        response.json().forEach(product => {
          console.log(product);
          this.prodId = product.productId;
          this.tableHTML += "<div><tr>(click)=clicked()" +
      "<td>"+product.productId+"</td>"+
            "<td>"+product.productName+"</td>"+
            "<td>"+product.productCategory+"</td>"+
            "<td>"+product.price+"</td>"+
            "<td>"+"<span>"+"<button [id]=prodId (click)='goToProduct()'/>"+"BuyBid"+"</span>"+"</td>"+
    "</tr></div>";

          this._cookieService.put("ProductID",product.productId);
          this._cookieService.put("sellerID",product.sellerId);

        //  <div style="padding-left:110px">
         // <input type="submit" value="Submit" class="btn btn-primary"/>
           // </div>
        });
      });
  }

  ngOnInit() {

  }
}
