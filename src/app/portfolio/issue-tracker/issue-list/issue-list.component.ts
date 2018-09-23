import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IssueTrackerService} from '../issue-tracker.service';
import {sortBy} from 'lodash';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css', '../issue-tracker.component.css']
})
export class IssueListComponent implements OnInit, OnDestroy {

  constructor(
    private route:ActivatedRoute,
    private itService:IssueTrackerService,
  ) { }
  project;
  issueList;
  currentSearchInput;
  ngOnInit() {
    // this.route.data.subscribe((data)=>{
    //   this.issueList=sortBy(data.issueList)
    //   console.log(data)
    // })
    this.itService.searchMode.next('issue');
    this.route.params.subscribe((params)=>{
      this.project=params.project;
      this.route.data.subscribe((data)=>{
        this.issueList=sortBy(data.issueList,['open','updated_on']).reverse();
        this.itService.issueSearchSubject.subscribe((searchInput)=>{
          this.currentSearchInput=searchInput;
          let searchReg=new RegExp(searchInput,'i');
          let tempIssues=data.issueList.filter((issue)=>{
            return searchReg.test(issue['issue_title'])
          })
          this.issueList=sortBy(tempIssues,['open','updated_on']).reverse()
        })
      });
    })
  }

  ngOnDestroy(){
    this.itService.clearSubject.next(true)
  }
  clearSearch(){
    this.itService.clearSubject.next(true);
  }
}
