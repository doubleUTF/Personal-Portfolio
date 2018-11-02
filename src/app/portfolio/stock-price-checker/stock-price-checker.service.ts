import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockPriceCheckerService {

  constructor(private http:HttpClient) { }
  URL=  environment.production ? 'https://www.davidlau.xyz/api/stock-prices' : 'http://localhost:3000/api/stock-prices'
  getStocks(stock1:string, stock2?:string, like?:string){
    let params
    if (stock2) { // Multiple stocks
      params= new HttpParams().set('stock',stock1).append('stock',stock2).set('like',like)
    } else { // One stock
      params= new HttpParams().set('stock',stock1).set('like',like)
    }
    return this.http.get(this.URL,{params})
  }
  
  }
