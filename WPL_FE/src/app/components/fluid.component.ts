/**
 * Created by niksat21 on 12/2/2016.
 */



import {Component} from '@angular/core';


@Component({


  selector: 'fluid',
  template : `
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span10 offset1">
        <div ng-view></div>
      </div>
    </div>
  </div>

  <!--<script src="https://code.angularjs.org/1.3.15/angular.js"></script>-->
  <!--<script src="https://code.angularjs.org/1.3.15/angular-route.min.js"></script>-->


`

})
export class fluidComponent {


}
