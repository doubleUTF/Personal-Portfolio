import { Injectable } from '@angular/core';
import { Card } from './card/card';

@Injectable()
export class CardService {
  private cards:Card[]=[
    new Card('Quick Claim', `Chrome extension
    to quickly fill medical claims`, '../../../assets/img/portfolio/quick-claim.jpg',
    'https://github.com/doubleUTF/Quick_Claim'),
    new Card('Aculau Acupuncture', `Aculau Acupuncture clinic website`,
    '../../../assets/img/portfolio/aculau.jpg','aculau.com'),
    new Card ('Fifteen Puzzle',`Python course puzzle project based on assertions
    and optimization.`, '../../../assets/img/portfolio/fifteen.jpg',
    'http://www.codeskulptor.org/#user41_xgKw1wSt6T_115.py')
  ]

  getCards(){
    return this.cards;
  }

  constructor() { }
}
