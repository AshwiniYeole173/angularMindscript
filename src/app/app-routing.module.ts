import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';




const appRoutes: Routes = [
  
  { path: '', component: HeaderComponent },
  
  { path:'dashboard', component:DashboardComponent},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)],

   exports: [RouterModule] ,

  declarations: []
})
export class AppRoutingModule { }
