import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../../anon-forum.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private afService:AnonForumService,
  private route:ActivatedRoute,
  public snackBar:MatSnackBar,
  private router:Router
) { }

  boardName:string;
  threadForm=new FormGroup({
    text:new FormControl('',Validators.required),
    delete_password:new FormControl('',Validators.required)
  })
  ngOnInit() {
    this.afService.appState.next('new-thread')
    this.route.params.subscribe(params=>this.boardName=params.board)
  }
  addThread(){
    this.afService.addThread(this.threadForm.value.text,this.threadForm.value.delete_password,this.boardName)
    .subscribe(()=>{
      this.snackBar.open('Thread created', null, {duration:3000,panelClass:'snack-save'})
      this.router.navigate(['..'],{relativeTo:this.route})
    },()=>{
      this.snackBar.open('Error',null,{duration:3000,panelClass:'snack-delete'})
    })
  }
}
