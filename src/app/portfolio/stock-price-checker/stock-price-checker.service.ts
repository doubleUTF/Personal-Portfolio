import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockPriceCheckerService {

  constructor() { }

  getDummyStocks(stock1:string, stock2?:string):Promise<Object>{
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        res({stock1:{name:stock1, price:1232.12, rel_likes:5}, stock2:{name:stock2,price:321.06,rel_likes:-5}})
      },1000)
    })
    }
  }
