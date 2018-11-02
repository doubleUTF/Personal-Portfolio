import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {trigger, style, animate,transition} from '@angular/animations';
import {StockPriceCheckerService} from './stock-price-checker.service';

@Component({
  selector: 'app-stock-price-checker',
  templateUrl: './stock-price-checker.component.html',
  styleUrls: ['./stock-price-checker.component.css'],
  providers:[StockPriceCheckerService],
  animations:[
    trigger('enterLeave',[
      transition(':enter',[
        style({
          transform:'translateX(50%)',
          opacity:0,
        }),
        animate('.5s ease-out', style({
          transform:'translateX(0)',
          opacity:1,
        }))
      ]),
      transition(':leave',[
        animate('.5s ease-out', style({
          opacity:0,
          transform:'translateX(-50%)'
        }))
      ])
    ]),
    trigger('stocksAnimation',[
      transition(':enter',[
        style({
          transform:'translateX(50%)',
          opacity:0,
        }),
        animate('.5s ease-out', style({
          transform:'translateX(0)',
          opacity:1,
        }))
      ]),
      transition(':leave',[
        animate('.5s ease-out', style({
          opacity:0,
          transform:'translateX(-50%)'
        }))
      ])
    ]),
    trigger('dummy',[
      transition(':enter',[])
    ])
  ]
})

export class StockPriceCheckerComponent implements OnInit {

  constructor(
    private spcs:StockPriceCheckerService
  ) { }

  stockForm = new FormGroup({
    stock1: new FormControl('',Validators.required),
    stock2: new FormControl(''),
    like: new FormControl()
  });

  stocks;
  stock;
  error;
  ngOnInit() {
  }

  newStock=true; // Flag to control display of new stock form
  stocksReady=false;

  getErrorMessage(){
    return this.stockForm.controls.stock1.hasError('required') ? 'Please enter a valid stock ticker' : ''
  }

  getStocks(){
    this.newStock=!this.newStock;
    this.spcs.getStocks(this.stockForm.controls.stock1.value,this.stockForm.controls.stock2.value,this.stockForm.controls.like.value)
    .subscribe((data:any)=>{
      if (data.stock1){
        this.stocks=data
      } else {
        this.stock=data
      }
    }, error=>{
      this.error=error.error;
    })
  }

  showStocks(event){
    if (event.fromState!='void'){
      this.stocksReady=true;
    }
  }

  newQuery(){
    this.error=null;
    this.stocks=null;
    this.stock=null;
    this.stocksReady=false;
    this.stockForm.reset()
  }

  showNewQuery(event){
    if (event.fromState!='void'){
      this.newStock=true;
    }
  }

}
