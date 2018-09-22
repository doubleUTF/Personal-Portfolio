import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Data, Router} from '@angular/router';
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
    private itService:IssueTrackerService,
    private router:Router
  ) {}
  project:string;
  newIssue:boolean;
  issueForm:FormGroup;
  ngOnInit() {
    this.issueForm=new FormGroup({
      assigned_to:new FormControl(''),
      created_by:new FormControl('',Validators.required),
      issue_text:new FormControl('',Validators.required),
      issue_title:new FormControl('',Validators.required),
      open:new FormControl(true),
      project:new FormControl('', Validators.required),
      status_text:new FormControl(),
      created_on:new FormControl(),
      updated_on:new FormControl(),
      _id:new FormControl()
    });
    this.route.params.subscribe((params)=>{
      this.project=params.project
    })
    this.route.queryParams.subscribe((params)=>{
      this.issueForm.patchValue({issue_title:params.title})
    })
    this.itService.searchMode.next('none')
    this.route.data.subscribe((data:Data)=>{
      let issue=data.issue;
      if (!issue){
        this.newIssue=true;
        this.issueForm.patchValue({project:this.project})
      } else {
        this.newIssue=false;
      this.issueForm.setValue(issue)
    }
    })
  }

  deleteIssue(){
    this.itService.deleteIssue(this.issueForm.get('_id').value,
      this.issueForm.get('project').value).subscribe((response)=>{
        let message;
        if (response['message']){
          message=`${this.issueForm.get('issue_title').value} deleted`
        } else {
          message=response
        }
        this.itService.snackBarSubject.next(message)
        this.router.navigate(['..'],{relativeTo:this.route})
  })
  }

  saveIssue(){
    if (this.newIssue){
    } else {      
    }
  }

}
