import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

const url=environment.production ? 'https://www.davidlau.xyz.com/api/convert' : 'http://localhost:3000/api/convert';
@Injectable()
export class MetricConverterService {

  constructor(
    private http:HttpClient
  ) {}

  convertRequest(input:string){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      }),
      params:new HttpParams().set('input',input)
    }
    return this.http.get(url,httpOptions)
  }
}
