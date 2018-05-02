import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeIn} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeIn]
})

export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(){
  }

  getComponentName(outlet:RouterOutlet){
    const routeData=outlet.activatedRouteData['animation'];
    if (!routeData){
      return 'Stage'
    }
    return routeData
  }

  shouldHideBars(outlet:RouterOutlet):boolean{
    const bool= outlet.activatedRouteData['hideBars'];
    if (bool==true) return true
  }
}
