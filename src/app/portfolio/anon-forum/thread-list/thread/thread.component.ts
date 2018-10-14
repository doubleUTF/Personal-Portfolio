import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../../anon-forum.service';
import {ActivatedRoute} from '@angular/router';
import {Thread} from './thread.model';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(
    private afService: AnonForumService,
    private route:ActivatedRoute) { }

  ReplyForm=new FormGroup({
    text:new FormControl('', Validators.required),
    delete_password:new FormControl('',Validators.required)
  });
  thread:Thread;
  boardName:string;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.boardName=params.board;
      this.afService.getThread(params._id).subscribe((thread:Thread)=>{
        this.thread=thread;
      })
    })
    this.afService.appState.next('thread');
  }

}
