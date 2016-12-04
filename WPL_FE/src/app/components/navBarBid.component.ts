/**
 * Created by niksat21 on 12/4/2016.
 */

/**
 * Created by niksat21 on 12/1/2016.
 */
import {Component, NgModule} from '@angular/core';
import { NavBarRegComponent} from './navbar-reg.component'
import {LoginComponent} from './login.component';
import {Router} from '@angular/router'


@Component({


  selector: 'nav-bar-bid',
  template : `
  <nav>
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!--<a class="navbar-brand" href="#">forever Shopping</a>-->
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/prevbids">PreviousBids</a></li>
                    

                    
                    
                    <li><a href="/buy">Buy</a></li>
                    <li><a href="/sell">Sell</a></li>
                    <li><a href="/mybids">MyBids</a></li>
                    
                </ul>

            </div>
        </div>
</nav>

`

})
export class NavBarBidComponent {



}
