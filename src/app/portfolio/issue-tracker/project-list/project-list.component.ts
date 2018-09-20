import { Component, OnInit } from '@angular/core';
import {IssueTrackerService} from '../issue-tracker.service';
import {sortBy} from 'lodash';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(
    private itService:IssueTrackerService
  ) { }

  projectList;

  ngOnInit() {
    this.itService.getProjects().subscribe((data:Array<any>)=>{
      let projects=data.map((obj)=>{
        return this.renameProp('_id','project',obj)
      });
      this.projectList=sortBy(projects,['latest','open']).reverse()
    })
  }

  renameProp = (oldProp,newProp,{ [oldProp]: old, ...others }) => ({
    [newProp]: old,
    ...others
})
}
