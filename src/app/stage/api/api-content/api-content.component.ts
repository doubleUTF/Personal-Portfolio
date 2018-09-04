import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router'
import {map} from 'rxjs/operators';
import {ApiApp} from '../api.model';
import {WhitespaceToUnderscorePipe} from '../../../pipes/whitespace-to-underscore.pipe';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-api-content',
  templateUrl: './api-content.component.html',
  styleUrls: ['./api-content.component.css']
})
export class ApiContentComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private wsPipe:WhitespaceToUnderscorePipe,
    private apiService:ApiService
  ) { }

  apiApp:ApiApp;

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.apiApp=this.apiService.getApi(this.wsPipe.transform(params.appName,true))
      console.log(this.apiApp);
    })
  }

}
