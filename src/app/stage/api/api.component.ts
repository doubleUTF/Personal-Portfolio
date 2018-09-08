import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {WhitespaceToUnderscorePipe} from '../../pipes/whitespace-to-underscore.pipe';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ApiService,WhitespaceToUnderscorePipe],
})

export class ApiComponent implements OnInit {
  constructor(
    private apiService:ApiService,
    private wsPipe:WhitespaceToUnderscorePipe,
  ) {}
  apiList:string[];

  ngOnInit() {
    this.apiList=this.apiService.getApiNames()
  }

}
