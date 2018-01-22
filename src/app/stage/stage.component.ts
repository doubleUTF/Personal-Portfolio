import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css'],
  animations:[
    trigger('backgroundState', [
      state('inactive', style({
        opacity:0
      })),
      state('active', style({
        opacity:1
      })),
      transition('inactive=>active', animate('800ms'))
    ])
  ]
})

export class StageComponent implements OnInit {

  constructor() { }

  state:string='inactive'

  ngOnInit() {
    setTimeout(()=>{this.state='active'})

  }

}
