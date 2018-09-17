import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ApiApp} from '../api.model';
import {WhitespaceToUnderscorePipe} from '../../../pipes/whitespace-to-underscore.pipe';
import {ApiService} from '../api.service';
import {Input} from '@angular/core';

@Component({
  selector: 'app-api-content',
  templateUrl: './api-content.component.html',
  styleUrls: ['./api-content.component.css'],
})
export class ApiContentComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private wsPipe:WhitespaceToUnderscorePipe,
    private apiService:ApiService
  ) { }

  @Input() apiApp:ApiApp;

  ngOnInit() {
    if (!this.apiApp){
      this.route.params.subscribe((params)=>{
        this.apiApp=this.apiService.getApi(this.wsPipe.transform(params.appName,true))
      })
    }
    console.log(this.apiApp.frontEndURL)
  }

  getBadgeClass(method){
    let classMap={'GET':'badge-success','POST':'badge-primary',
      'PUT':'badge-info','DELETE':'badge-danger'}
    return classMap[method];
  }

  apiURL='https://www.davidlau.xyz/api'
}
