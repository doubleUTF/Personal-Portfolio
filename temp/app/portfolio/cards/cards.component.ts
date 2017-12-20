import { Component, OnInit, ViewChild,
HostListener, HostBinding} from '@angular/core';
import {CardService} from './card.service';
import {Card} from './card/card';

@Component({
  selector: 'pp-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers:[
    CardService,
  ]
})

export class CardsComponent implements OnInit {

  constructor(private cardService:CardService) { }

  cards=this.cardService.getCards();

  ngOnInit() {
  }

}
