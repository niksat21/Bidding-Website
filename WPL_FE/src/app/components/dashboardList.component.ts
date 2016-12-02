/**
 * Created by niksat21 on 12/2/2016.
 */

/**
 * Created by niksat21 on 12/2/2016.
 */



import {Component} from '@angular/core';


@Component({


  selector: 'dashboardlist',
  template : `
     <h2>New Arrivals</h2>
  <div class="album text-muted">
    <div class="container">

      <div class="row">
        <div class="card">
          <img src="./assets/images/products/bose_headphone.jpg" alt="Card image cap" style="width:200px;height:250px;">
          <p class="card-text">BOSE headphones</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/nike.jpg" alt="Card image cap" style="width:200px;height:250px;">
          <p class="card-text">Nike shoes</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/ford_mustang.jpg" alt="Card image cap" style="width:200px;height:250px;">
          <p class="card-text">Ford mustang</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>

        <div class="card">
          <img src="./assets/images/products/jbl_headphones.jpg" alt="Card image cap" style="width:200px;height:250px;">
          <p class="card-text">JBL Headphones</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/rog.jpg" alt="Card image cap" style="width:200px;height:250px;">
          <p class="card-text">ASUS ROG</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/puma.jpg" alt="Card image cap" style="width:200px;height:250px;">
          <p class="card-text">Puma shoes</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>


      </div>
</div>
    </div>
  
`

})
export class dashboardListComponent {


}
