import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ApiApp} from '../api.model';
@Component({
  selector: 'app-metric-converter',
  templateUrl: './metric-converter.component.html',
  styleUrls: ['./metric-converter.component.css']
})
export class MetricConverterComponent implements OnInit {

  constructor(
    private apiService:ApiService
  ) { }
  appName='Metric Converter'
  metricApp:ApiApp;
  ngOnInit() {
    this.metricApp=this.apiService.getApi(this.appName);
  }

}
