import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {trigger, state, style, animate,transition} from '@angular/animations';

@Component({
  selector: 'app-stock-price-checker',
  templateUrl: './stock-price-checker.component.html',
  styleUrls: ['./stock-price-checker.component.css'],
  animations:[
    state('open',style({
      transform:'translateX(0)',
      opacity:1
    })),
    state('closed',style({
      transform:'translateX(-300px)',
      opacity:0
    })),
    transition('open=>closed',[
      animate('1s')
    ])
  ]
})
export class StockPriceCheckerComponent implements OnInit {

  constructor() { }

  stockForm = new FormGroup({
    stock1: new FormControl('',Validators.required),
    stock2: new FormControl(''),
    like: new FormControl()
  });

  ngOnInit() {
  }
  newStock:boolean=true; // Flag to control display of new stock form

  getErrorMessage(){
    return this.stockForm.controls.stock1.hasError('required') ? 'Please enter a valid stock ticker' : ''
  }

  getStocks(){
    this.newStock=false;
  }
}
