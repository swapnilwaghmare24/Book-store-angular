import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OrderplacedComponent } from './component/orderplaced/orderplaced.component';
import { OrdersummaryComponent } from './component/ordersummary/ordersummary.component';
import { RegisterComponent } from './component/register/register.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';

const routes: Routes = [
 { 
  path:"",
  component:HomeComponent,
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"register",
  component:RegisterComponent
},
{path:"home/:token",component:HomeComponent},
{
  path:"cart",
  component:CartComponent
},
{path:"cart/:token",component:CartComponent},
{path:"update/:token",component:UserdetailsComponent},
{path:"update/:useremail",component:UserdetailsComponent},
{path:"update",component:UserdetailsComponent},
{path:"ordersummery/:token",component:OrdersummaryComponent},
{path:"orderplaced/:token",component:OrderplacedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
