/**
 * Created by niksat21 on 12/4/2016.
 */

import {Component, NgModule, OnInit, enableProdMode, Input} from '@angular/core';
enableProdMode();
import {LoginComponent} from './login.component';
import {Router, Route} from '@angular/router'
import {NavBarRegComponent} from "./navbar-reg.component";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Component({


  selector: 'app-root',
  template :
    `
    <nav-bar-after></nav-bar-after>
 <table>
	<tbody>
	 <tr>
     <td style="font-size:21px;" >Upload Product image</td>

      <td style="font-size:21px;"> Fill the description</td>
    </tr>
    <tr>
			<td><br><input type="file" accept="image/*" onchange="loadFile(event)">
        <img id="output" class="thumbnail" width="250px" height="200px"/>
        <script>
            var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
</script>
            
      </td>
			<td> <br> 
            
       </tr>     
     <form name="htmlform" method="post" >
        <table width="450px">
    
                
<tr>
 <td valign="top">
  <label class="post_formpad" for="product_name">Product Name *</label>
 </td>
 <td valign="top">
  <input  type="text" name="product_name" maxlength="50" size="28" required>
 </td>
</tr>
 

<tr>
 <td valign="top">
  <label class="post_formpad" for="initial_bid">initial bid(USD) *</label>
 </td>
 <td valign="top">
  <input  type="number" name="initial_bid" maxlength="50" size="20" required>
 </td>
</tr>
                

<tr>
 <td valign="top">
  <label for="category">Category </label>
 </td>
 <td valign="top">
  <textarea  name="category" maxlength="50" cols="30" rows="2" ></textarea>
 </td>

<tr>
 <td valign="top">
  <label for="description">Description *</label>
 </td>
 <td valign="top">
  <textarea  name="description" maxlength="1000" cols="30" rows="4" required></textarea>
 </td>
 
</tr>
<tr>
 <td colspan="2" style="text-align:center">
  <input type="submit" class="btn btn-success" value="Submit">
  <button type="reset" class="btn btn-success" value="Reset">Reset</button>

 </td>
</tr>
</table>
</form>

	</tbody>
</table>    
       

`

})
export class prevBidsComponent{





}
