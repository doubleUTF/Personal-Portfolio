import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {WhitespaceToUnderscorePipe} from '../../pipes/whitespace-to-underscore.pipe';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ApiService,WhitespaceToUnderscorePipe]
})

export class ApiComponent implements OnInit {
  constructor(
    private apiService:ApiService,
    private wsPipe:WhitespaceToUnderscorePipe,
  ) { }
  apiList:string[];
  apiParam;
  ngOnInit() {
    this.apiList=this.apiService.getApiNames()
  }

  getBadgeClass(method){
    let classMap={'GET':'badge-success','POST':'badge-primary',
      'PUT':'badge-info','DELETE':'badge-danger'}
    return classMap[method];
  }


  apiURL='https://www.davidlau.xyz/api'
}
