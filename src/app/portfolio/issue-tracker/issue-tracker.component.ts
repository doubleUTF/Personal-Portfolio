import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {IssueTrackerService} from './issue-tracker.service';

@Component({
  selector: 'app-issue-tracker',
  templateUrl: './issue-tracker.component.html',
  styleUrls: ['./issue-tracker.component.css']
})
export class IssueTrackerComponent implements OnInit {

  constructor(
    public snackBar:MatSnackBar,
    private itService:IssueTrackerService
  ) { }

  ngOnInit() {
    this.itService.snackBarSubject.subscribe((string)=>{
      this.snackBar.open(string,null,{duration:2000})
    })
  }

}
