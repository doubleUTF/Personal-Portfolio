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
          transform:'translateX(100%)',
          opacity:0,
        }),
        animate('.8s ease-out', style({
          transform:'translateX(0)',
          opacity:1,
        }))
      ]),
      transition(':leave',[
        animate('.8s ease-out', style({
          opacity:0,
          transform:'translateX(-100%)'
        }))
      ])
    ]),
    trigger('newEnterLeave',[
      transition(':enter',[
        style({
          transform:'translateX(100%)',
          opacity:0
        }),
        animate('.8s ease-out', style({
          transform:'translateX(0)',
          opacity:1
        }))
      ]),
      transition(':leave',[
        animate('.8s ease-out', style({
          transform:'translateX(-100%)',
          opacity:0
        }))
      ])
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
  ngOnInit() {
  }
  newStock:boolean=true; // Flag to control display of new stock form

  getErrorMessage(){
    return this.stockForm.controls.stock1.hasError('required') ? 'Please enter a valid stock ticker' : ''
  }

  getStocks(){
    this.newStock=!this.newStock;
    this.spcs.getDummyStocks(this.stockForm.value.stock1,this.stockForm.value.stock2).then(data=>{
      this.stocks=data;
      console.log(data)
    })
  }

  newQuery(){
    this.newStock=true;
    this.stocks=null;
    this.stockForm.reset()
  }
}
