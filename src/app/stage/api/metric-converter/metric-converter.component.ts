import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ApiApp} from '../api.model';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {MetricConverterService} from './metric-converter.service';
@Component({
  selector: 'app-metric-converter',
  templateUrl: './metric-converter.component.html',
  styleUrls: ['./metric-converter.component.css'],
  providers:[MetricConverterService]
})
export class MetricConverterComponent implements OnInit {

  constructor(
    private apiService:ApiService,
    private mcService:MetricConverterService
  ) { }

  metricForm=new FormGroup({
    number:new FormControl(''),
    unit:new FormControl('Choose a unit',[Validators.maxLength(4)])
  })

  unitMapping={
    Liter:'l',
    Gallon:'gal',
    Kilogram:'kg',
    Mile:'mi',
    Kilometer:'km',
    Pound:'lbs'
  }
  appName='Metric Converter'
  metricApp:ApiApp;
  ngOnInit() {
    this.metricApp=this.apiService.getApi(this.appName);
  }

  metResponse:string;

  getUnitKeys(){
    return Object.keys(this.unitMapping)
  }

  currentInput:string;
  submitForm(){
    const input=String(this.metricForm.value['number'])+this.metricForm.value['unit']
    if (input==this.currentInput) return;
    this.currentInput=input;
    this.mcService.convertRequest(input).subscribe((data)=>{
      this.metResponse=JSON.stringify(data,null,4);
    },
    (error)=>this.metResponse=JSON.stringify(error.error,null,4))
  }
}
