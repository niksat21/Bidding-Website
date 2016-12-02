/**
 * Created by niksat21 on 12/2/2016.
 */
/**
 * Created by niksat21 on 12/1/2016.
 */
import {Component} from '@angular/core';


@Component({


  selector: 'carousel',
  template : `
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>

  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img class="first-slide" src="./assets/images/landing page/carouselimage.jpg" alt="First slide" style="width:500px;height:550px;">
      <div class="container">
        <div class="carousel-caption">
          <h1>Always in style!</h1>
          <p>Makes you feel like shopping</p>
        </div>
      </div>
    </div>

  </div><!-- /.carousel -->
</div>
`

})
export class carouselComponent {


}
