/**
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/1/2016.
 */
import {Component} from '@angular/core';
import {LoginComponent} from './login.component';
import {Router} from '@angular/router'

@Component({


  selector: 'nav-bar-reg',
  template : `
  <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/home">forever Shopping</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/home">HOME</a></li>
                </ul>

            </div>
        </div>
</nav>

`

})
export class NavBarRegComponent {



}
