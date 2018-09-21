import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IssueTrackerService} from '../issue-tracker.service';
import {sortBy} from 'lodash';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css', '../issue-tracker.component.css']
})
export class IssueListComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private itService:IssueTrackerService
  ) { }
  project;
  issueList;
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.project=params.project;
      this.itService.getIssues(params.project).subscribe((issues)=>{
        this.issueList=sortBy(issues,['open','updated_on']).reverse()
        console.log(this.issueList)
      });
    })
  }

}
