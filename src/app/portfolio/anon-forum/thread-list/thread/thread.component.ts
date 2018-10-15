import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../../anon-forum.service';
import {ActivatedRoute} from '@angular/router';
import {Thread} from './thread.model';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {Reply} from './reply.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(
    private afService: AnonForumService,
    private route:ActivatedRoute,
    public snackBar:MatSnackBar
  ) { }

  ReplyForm=new FormGroup({
    text:new FormControl('', Validators.required),
    delete_password:new FormControl('',Validators.required)
  });
  thread:Thread;
  threadId:string;
  boardName:string;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.boardName=params.board;
      this.threadId=params._id;
      this.afService.getThread(params._id).subscribe((thread:Thread)=>{
        this.thread=thread;
      })
    })
    this.afService.appState.next('thread');
  }

  submitReply(threadId,formData){
    this.afService.addReply(threadId,formData.text,formData.delete_password)
    .subscribe((response:Reply)=>{
      this.thread.replies.push(response);
      this.ReplyForm.reset();
      this.snackBar.open('Reply added',null, {duration:3000,panelClass:'snack-save'});
    })
  }
}
