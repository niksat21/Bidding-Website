 /**
 * Created by niksat21 on 12/1/2016.
 */
import {Component, NgModule} from '@angular/core';
import { NavBarRegComponent} from './navbar-reg.component'
import {LoginComponent} from './login.component';
import {Router} from '@angular/router'


@Component({


  selector: 'nav-bar-before',
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
                <a class="navbar-brand" href="#">forever Shopping</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a routerlink="/home">HOME</a></li>
                    

                    
                    
                    <li><a routerlink="/mycart">my cart</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">My Account</li>
                            <div id="navbar1" class="navbar-collapse collapse">
                                <login></login>
             
                            </div>

                        </ul>
                    </li>
                </ul>

            </div>
        </div>
</nav>

`

})
export class NavBarBeforeComponent {



}
