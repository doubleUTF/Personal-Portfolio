import { Component, OnInit, OnDestroy } from '@angular/core';
import {AnonForumService} from '../anon-forum.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // Navbar will react to this flag, possible states are 'board-list',
  // 'thread-list', 'thread', and 'new-thread'
  appState:string;
  boardName:string;
  constructor(private afService:AnonForumService) { }

  ngOnInit() {
    this.afService.appState.subscribe((state:string)=>{
      this.appState=state
    })
    this.afService.boardState.subscribe((board:string)=>this.boardName=board)
  }

  ngOnDestroy(){
    this.afService.appState.unsubscribe();
    this.afService.boardState.unsubscribe();
  }
}
