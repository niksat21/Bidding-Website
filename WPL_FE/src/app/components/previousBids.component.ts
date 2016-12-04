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
  template : `
       

`

})
export class profileComponent implements OnInit{
  @Input()  private url: String;
  @Input()  private output;
  @Input() private firstName;
  @Input() private split;
  @Input() private lastName;
  @Input() private userName;
  @Input() private password;
  @Input() private email;

  private first;
  constructor(private http : Http,private router : Router){this.url = "http://localhost:9000/api/users";}



  ngOnInit(): void {

    this.http.get(this.url + "/58422a804a3b14187c96ead0")
      .toPromise()
      .then((response) => {
        console.log(response.json());

        this.output =  JSON.stringify(response.json());

        console.log(this.output);
        this.split = this.output.split(",");
        console.log('firstname : ',this.split[2].split(":")[1]);
        this.firstName = this.split[2].split(":")[1].replace(/"/g,'');
        this.lastName = this.split[3].split(":")[1].replace(/"/g,'');
        this.userName = this.split[1].split(":")[1].replace(/"/g,'');
        this.password = this.split[5].split(":")[1].replace(/"/g,'');
        this.email = this.split[4].split(":")[1].replace(/"/g,'');
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('Server error');
  }

  saveChanges(){


    let firstName = this.firstName;
    let lastName = this.lastName;
    let userName = this.userName;
    let password = this.password;
    let email = this.email;
    let body = JSON.stringify({userName,firstName,lastName,email,password});
    console.log('json stringify body posted: ',body);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:9000/api/users', body,options)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigateByUrl('/profile');

        },
        error => {
          //alert(error.text());
          console.log(error.text());
          this.router.navigateByUrl('/login-error');
        }
      );

  }

  cancel(){

    this.router.navigateByUrl('/dash');
  }




}
