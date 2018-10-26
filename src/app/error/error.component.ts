import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

 @Input() errorMsg: string;
  @Input() displayError: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
