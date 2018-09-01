import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router'
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-api-content',
  templateUrl: './api-content.component.html',
  styleUrls: ['./api-content.component.css']
})
export class ApiContentComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:ParamMap)=>{
      console.log(params);
    })
  }

}
