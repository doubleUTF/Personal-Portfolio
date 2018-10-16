import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Thread} from '../thread/thread.model';
import {formatDate} from '@angular/common';
import {ActivatedRoute,Router} from '@angular/router';
import {AnonForumService} from '../../anon-forum.service';
import {FormControl,Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'af-thread-item',
  templateUrl: './thread-item.component.html',
  styleUrls: ['./thread-item.component.css']
})
export class ThreadItemComponent implements OnInit {
  @Input() thread:Thread;
  @Input() threadIndex:number;
  @Output() onDelete=new EventEmitter();
  showDelete=false;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private afService:AnonForumService,
    public snackBar:MatSnackBar
  ) { }

  ngOnInit() {
  }

  deletePassword=new FormControl('',Validators.required);

  getTimeString(thread:Thread){
    if (thread.bumped_on==thread.created_on){
      return `Created ${formatDate(thread.created_on,'short','en-US')}`
    }
    return `Updated ${formatDate(thread.bumped_on,'short','en-US')}`
  }

  reply(event:Event){
    event.stopPropagation();
    this.router.navigate(['.',this.thread._id],{fragment:'replyHeader',relativeTo:this.route})
  }

  report(event:Event){
    event.stopPropagation();
    this.afService.reportThread(this.thread._id).subscribe(
      ()=>this.thread.reported=true,
      (error)=>console.log(error)
    )
  }

  delete(event:Event){
    event.stopPropagation();
    this.showDelete=!this.showDelete;
  }

  deleteThread(){
    this.afService.deleteThread(this.thread._id, this.deletePassword.value).subscribe(
      ()=>{
        this.onDelete.emit(this.threadIndex);
        this.snackBar.open('Thread deleted',null,{duration:3000,panelClass:'snack-delete'})
      },
      ()=>this.snackBar.open('Incorrect password',null,{duration:3000,panelClass:'snack-delete'})

    )
  }

  stopProp(event:Event){
    event.stopPropagation();
  }
}
