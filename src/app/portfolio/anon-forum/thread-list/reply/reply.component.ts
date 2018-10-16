import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Reply} from './reply.model';
import {FormControl,Validators} from '@angular/forms';
import {AnonForumService} from '../../anon-forum.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'anon-forum-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  constructor(
    private afService:AnonForumService,
    private snackBar:MatSnackBar
  ) { }
  @Input() reply:Reply;
  @Input() replyIndex:number;
  @Output() onDelete=new EventEmitter();
  ngOnInit() {
  }
  showDelete=false;

  deletePassword=new FormControl('',Validators.required)
  deleteReply(){
    this.afService.deleteReply(this.reply._id,this.deletePassword.value)
    .subscribe(()=>{
        this.snackBar.open('Reply deleted', null, {panelClass:'snack-delete',duration:3000})
        this.onDelete.emit(this.replyIndex)
    },()=>{
      this.snackBar.open('Incorrect password',null,{panelClass:'snack-delete',duration:3000})
    })
  }

  report(){
    this.afService.reportReply(this.reply._id).subscribe(
      ()=>{
        this.reply.reported=true;
      },
      (error)=>{console.log(error)},
    );
  }
}
