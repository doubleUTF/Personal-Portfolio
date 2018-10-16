import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Thread} from './thread/thread.model';
import {formatDate} from '@angular/common';
import {AnonForumService} from '../anon-forum.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

  constructor(private route:ActivatedRoute,
  private afService: AnonForumService) { }

  threads:Thread[];
  boardName:string;
  ngOnInit() {
    this.route.data.subscribe((data)=>{
      this.threads=data.threads;
    })
    this.route.params.subscribe((params)=>{
      this.boardName=params.board;
      this.afService.boardState.next(this.boardName);
    })
    this.afService.appState.next('thread-list');
  }

  getTimeString(thread:Thread){
    if (thread.bumped_on==thread.created_on){
      return `Created ${formatDate(thread.created_on,'short','en-US')}`
    }
    return `Updated ${formatDate(thread.bumped_on,'short','en-US')}`
  }
}
