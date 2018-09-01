import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {sortBy} from 'lodash';
import {ViewportScroller} from '@angular/common';
import {WhitespaceToUnderscorePipe} from '../../pipes/whitespace-to-underscore.pipe';
import {ActivatedRoute,ParamMap} from '@angular/router'
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ApiService,WhitespaceToUnderscorePipe]
})

export class ApiComponent implements OnInit {
  constructor(
    private apiService:ApiService,
    private vpScroller:ViewportScroller,
    private wsPipe:WhitespaceToUnderscorePipe,
    private route:ActivatedRoute
  ) { }
  // apiList:API[];
  apiParam;
  ngOnInit() {
    this.route.params.subscribe((params:ParamMap)=>{
      console.log(params)
    })
    this.route.paramMap.pipe(
      map((params:ParamMap)=>{
        console.log(params.get('appName'))
      })
    )
    // let list=this.apiService.getApis();
    // this.apiList=sortBy(list,(api)=>api.name);
  }

  getBadgeClass(method){
    let classMap={'GET':'badge-success','POST':'badge-primary',
      'PUT':'badge-info','DELETE':'badge-danger'}
    return classMap[method];
  }

  goToAnchor(id){
    this.vpScroller.scrollToAnchor(this.wsPipe.transform(id))
  }
  apiURL='https://www.davidlau.xyz/api'
}
