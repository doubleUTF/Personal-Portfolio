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
    this.itService.snackBarSubject.subscribe((data:any)=>{
      if (data.method=='save'){
        this.snackBar.open(data.message,null,{
          duration:3000,
          panelClass:'snack-save'
        })
      } else {
        this.snackBar.open(data.message,null,{
          duration:3000,
          panelClass:'snack-delete'
        })
      }
    })
  }

}
