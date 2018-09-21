import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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

  ngOnInit() {
    this.itService.searchMode.next('none')
    this.route.params.subscribe((params)=>{
      // New issue
      if (!params.objectId){

      }
    })
  }

}
