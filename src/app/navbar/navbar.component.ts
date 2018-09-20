import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed:boolean= true;

  constructor(public router:Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((e)=> e instanceof NavigationEnd)
    ).subscribe(()=>{
      this.isCollapsed=true
    })
  }

}
