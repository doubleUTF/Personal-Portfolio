import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../anon-forum.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Navbar will react to this flag, possible states are 'board-list',
  // 'thread-list', and 'thread'
  appState:string;

  constructor(private afService:AnonForumService) { }

  ngOnInit() {
    this.afService.appState.subscribe((state:string)=>{
      this.appState=state
    })
  }

}
