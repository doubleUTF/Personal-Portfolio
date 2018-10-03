import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../anon-forum.service';
import {Board} from './board.model';
import {sortBy} from 'lodash';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  constructor(private afService:AnonForumService) { }

  boardList:Board[];
  ngOnInit() {
    this.afService.getBoards().subscribe((resp:Board[])=>{
      this.boardList=sortBy(resp,['bumped_on']).reverse();
    })
  }

}
