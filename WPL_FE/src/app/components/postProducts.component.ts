/**
 * Created by niksat21 on 12/4/2016.
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
             <br/><br/><br/>
            <nav-bar-after></nav-bar-after>
            <br/><br/>
            <h1>Post Product you want</h1>
             <table>
<tbody>
        <tr>
      <td style="font-size:21px;" >Upload Product image 
      </td>

      <td style="font-size:21px;"> Fill the description
</td>
    </tr>
<td><br>
            <input type="file" accept="image/*" onchange="loadFile(event)">
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
       
            
            <form name="htmlform" method="post" >
<table width="450px">

                
<tr>
 <td valign="top">
  <label class="post_formpad" for="product_name">Product Name *</label>
 </td>
 <td valign="top">
  <input  type="text" name="product_name" #productName maxlength="50" size="28" required>
 </td>
</tr>
 

<tr>
 <td valign="top">
  <label class="post_formpad" for="initial_bid">initial bid(USD) *</label>
 </td>
 <td valign="top">
  <input  type="number" name="initial_bid" #initialBid maxlength="50" size="20" required>
 </td>
</tr>
                

<tr>
 <td valign="top">
  <label for="category">Category </label>
 </td>
 <td valign="top">
  <textarea  name="category" maxlength="50" #category cols="30" rows="2" ></textarea>
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="description">Description *</label>
 </td>
 <td valign="top">
  <textarea  name="description" #description maxlength="1000" cols="30" rows="4" required></textarea>
 </td>
 
</tr>
<tr>
 <td colspan="2" style="text-align:center">
  <input type="submit" class="btn btn-success" value="Submit" (click)="saveProduct($event,productName.value,
  initialBid.value,category.value,description.value)">
  <button type="reset" class="btn btn-success" value="Reset" (click)=form.reset()>Reset</button>

 </td>
</tr>
</table>
</form>
</td>
</tbody>
</table>
          

            
            
`

})

export class postProductComponent {

  constructor(private http:Http,private router:Router){

  }

  saveProduct(event,productName,initialBid,category,description){

    event.preventDefault();

    let body = JSON.stringify({productName,initialBid,category,description });
    console.log('json stringify body posted: ',body);

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46MTIzNDU='
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post('https://localhost:9000/api/products', body,options)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigateByUrl('/dash');
          console.log('user logged in : ',JSON.stringify(response.json()));
          let output = JSON.stringify(response.json());


        },
        error => {
          //alert(error.text());
          console.log(error.text());
          this.router.navigateByUrl('/login-error');
        }
      );


  }



}
