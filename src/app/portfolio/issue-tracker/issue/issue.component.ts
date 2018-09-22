import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Data} from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {IssueTrackerService} from '../issue-tracker.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private itService:IssueTrackerService
  ) { }
  issue;
  issueForm:FormGroup;
  ngOnInit() {
    this.issueForm=new FormGroup({
      assigned_to:new FormControl(),
      created_by:new FormControl(),
      issue_text:new FormControl(),
      issue_title:new FormControl(),
      open:new FormControl(),
      project:new FormControl(),
      status_text:new FormControl(),
      created_on:new FormControl(),
      updated_on:new FormControl(),
      _id:new FormControl()
    });
    this.itService.searchMode.next('none')
    this.route.data.subscribe((data:Data)=>{
      let issue=data.issue;
      if (!issue){
        // New issue
        console.log('new issue')
      } else {
      this.issueForm.setValue(issue)
      console.log(this.issueForm)
    }
    })
  }
  test(){
    // console.log(this.issueForm.get('issue_title'))
    // console.log(event)
  }
}
