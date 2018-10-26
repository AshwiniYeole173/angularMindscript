import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Router ,ParamMap} from '../../../node_modules/@angular/router';
import { AppRoutingModule} from '../app-routing.module';
// import { ShareDataService } from '../sharedataservice.service';
import { WebService } from '../service/web.service';
import {ErrorComponent} from '../error/error.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({

  providers:[ErrorComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username;
  message;
  query;
  heroes = [{name:'Windstorm',id:'1', branch:'Computer'},{name:'Bombasto',id:'2',branch:'IT'}, {name:'Magneta', id:'3', branch:'Intrumentation'},{name:'Tornad', id:'4',branch:'electrical'}];
  apiresponse;
  error;
  showLoader : boolean = true;
  showTable : boolean = true;
  constructor(private route : ActivatedRoute,private webservice: WebService) {
  
    
     this.username=this.route.snapshot.queryParams.getVal;
}

  
  ngOnInit() {

    setTimeout(() => {
      
   
    this.webservice.getFromServer("http://jsonplaceholder.typicode.com/users").subscribe(response => {
      if(response && response != undefined){
        this.showLoader = false;
        this.apiresponse=response;
      }
     } )
    },4000);
  }
  
}
