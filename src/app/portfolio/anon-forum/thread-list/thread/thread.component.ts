import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../../anon-forum.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Thread} from './thread.model';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {Reply} from '../reply/reply.model';
import {MatSnackBar} from '@angular/material';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(
    private afService: AnonForumService,
    private route:ActivatedRoute,
    public snackBar:MatSnackBar,
    private vpScroller:ViewportScroller,
    private router:Router
  ) { }

  ReplyForm=new FormGroup({
    text:new FormControl('', Validators.required),
    delete_password:new FormControl('',Validators.required)
  });

  thread:Thread;
  threadId:string;
  threadPassword=new FormControl('',Validators.required);
  boardName:string;
  showDelete=false;
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

  delete(index){
    this.thread.replies.splice(index,1);
  }

  scrollToReply(id){
    this.vpScroller.scrollToAnchor(id);
  }

  reportThread(){
    this.afService.reportThread(this.threadId).subscribe(
      ()=>this.thread.reported=true
    )
  }

  deleteThread(){
    this.afService.deleteThread(this.threadId,this.threadPassword.value).subscribe(
      ()=>{
        this.router.navigate(['..'],{relativeTo:this.route})
        this.snackBar.open('Thread deleted', null, {duration:3000,panelClass:'snack-delete'})
      },
      ()=>this.snackBar.open('Incorrect password',null,{duration:3000,panelClass:'snack-delete'})
    )
  }
}
