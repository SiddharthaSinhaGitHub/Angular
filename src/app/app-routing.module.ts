import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import componenet
import { HomeComponent } from './home/home.component';

import {CreateNewAccountComponent} from './create-new-account/create-new-account.component'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  //add path for home component
  { path: "Account", component: AppComponent },
  { path: "Home", component: HomeComponent },
  
  {path:'CreateNewAccount',component:CreateNewAccountComponent},
  
  {path:"login",component:LoginComponent},
  //redirect login
  {path:"", redirectTo:"/login", pathMatch:'full'}
  
  
  
  
  
  

  //add path for app component
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
