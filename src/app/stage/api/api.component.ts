import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {API} from './api.model';
import {sortBy} from 'lodash';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ApiService]
})

export class ApiComponent implements OnInit {
  constructor(private apiService:ApiService) { }
  apiList:API[];
  ngOnInit() {
    let list=this.apiService.getApis();
    this.apiList=sortBy(list,(api)=>api.name);
  }

  getBadgeClass(method){
    let classMap={'GET':'badge-success','POST':'badge-primary',
      'PUT':'badge-info','DELETE':'badge-danger'}
    return classMap[method];
  }
}
