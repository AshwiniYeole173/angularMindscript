import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import { AppRoutingModule} from '../app-routing.module';
import { Router } from '../../../node_modules/@angular/router';
import {ErrorComponent} from '../error/error.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;
  error;
  constructor(private router:Router) {

  }     

  ngOnInit() {
  }
  routeToDashboard()
    {
      this.router.navigate(['dashboard'],{queryParams:{getVal:this.username}});
   }
}
