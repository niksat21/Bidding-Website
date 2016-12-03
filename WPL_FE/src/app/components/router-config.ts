
/**
 * Created by niksat21 on 12/3/2016.
 */
import {NgModule} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import {homeComponent} from "./home.component";
import {registerComponent} from "./register.component";


export const routeConfig = [
  {
    path : '' , pathMatch : 'full' , redirectTo : 'home'
  },
  {
    path : 'home',
    component : homeComponent
  },
  {
    path : 'register',
    component : registerComponent
  }

];

@NgModule({

  imports : [RouterModule.forRoot(routeConfig)],
  exports : [RouterModule]

})

export class routingConfigModule{}

export const routingComps = [homeComponent,registerComponent]
