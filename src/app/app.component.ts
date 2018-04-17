import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeIn} from './stage/stage.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeIn]
})

export class AppComponent implements OnInit {
  constructor(){}
  title = 'app';

  ngOnInit(){
  }

}
