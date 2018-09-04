import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {WhitespaceToUnderscorePipe} from '../../pipes/whitespace-to-underscore.pipe';
import {fadeIn} from '../../app.animations';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ApiService,WhitespaceToUnderscorePipe],
  animations:[fadeIn]
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

}
