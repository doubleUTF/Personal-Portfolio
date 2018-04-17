import { Component, OnInit } from '@angular/core';
import {fadeIn} from './stage.animations';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css'],
  animations:[fadeIn]
})

export class StageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
