/**
 * Created by niksat21 on 12/3/2016.
 */
/**
 * Created by niksat21 on 12/3/2016.
 */

/**
 * Created by niksat21 on 12/2/2016.
 */
import {Component, NgModule} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Component({


  selector: 'app-root',
  template : `
            <nav-bar-before></nav-bar-before>
            <br/><br/>
            <h1>Please login again</h1>
            <div><img src = "../../assets/images/loginerror.png"/></div>
`

})

export class ErrorLoginComponent {


}
