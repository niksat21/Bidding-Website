import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import {NavBarComponent} from './components/navbar.component';
import {LoginComponent} from './components/login.component'
import {ReactiveFormsModule,FormGroup, FormControl ,FormBuilder,Validators } from '@angular/forms';
import {carouselComponent} from "./components/carousel.component";
import {fluidComponent} from "./components/fluid.component";
import {dashboardListComponent} from "./components/dashboardList.component";
import {SortableTableComponent} from "./components/sortableTable.component";


@NgModule({
  declarations: [
    AppComponent,NavBarComponent,LoginComponent,carouselComponent,fluidComponent,dashboardListComponent,SortableTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    ReactiveFormsModule,
    DataTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
