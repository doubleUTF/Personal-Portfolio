import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../../anon-forum.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private afService:AnonForumService) { }

  threadForm=new FormGroup({
    text:new FormControl('',Validators.required),
    delete_password:new FormControl('',Validators.required)
  })
  ngOnInit() {
    this.afService.appState.next('new-thread')
  }

}
