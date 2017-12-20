import { Component, ViewChild, HostBinding, HostListener, Input } from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'pp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],

})
export class CardComponent {
  constructor() { }

  @Input() card:Card;

  // @HostListener('mouseenter') mouseover(){
  //   this.boundImage.nativeElement.style.opacity='0.5'
  //   this.boundText.nativeElement.style.opacity='1.0'
  // }
  //
  // @HostListener('mouseleave') mouseleave(){
  //   this.boundImage.nativeElement.style.opacity='1.0'
  //   this.boundText.nativeElement.style.opacity='0'
  // }
  //
  // @ViewChild('image')
  // boundImage:any;
  //
  //
  // @ViewChild('text')
  // boundText:any;

  // ngOnInit() {
  //   this.boundText.nativeElement.style.opacity='0';
  // }

}
