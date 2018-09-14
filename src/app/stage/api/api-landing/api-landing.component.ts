import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {WhitespaceToUnderscorePipe} from '../../../pipes/whitespace-to-underscore.pipe';

@Component({
  selector: 'app-api-landing',
  templateUrl: './api-landing.component.html',
  styleUrls: ['./api-landing.component.css']
})
export class ApiLandingComponent implements OnInit {

  constructor(
    private apiService:ApiService,
    private wsPipe:WhitespaceToUnderscorePipe
  ) { }

  apiList:string[];
  ngOnInit() {
    this.apiList=this.apiService.getApiNames().sort()
  }

}
