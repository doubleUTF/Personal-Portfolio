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
  searchInput:string;
  ngOnInit() {
    this.itService.getProjects().subscribe((data:Array<any>)=>{
      let projects=data.map((obj)=>{
        return this.renameProp('_id','name',obj)
      });
      this.projectList=sortBy(projects,['latest','open']).reverse()

      this.itService.searchSubject.subscribe((searchString)=>{
        this.searchInput=searchString;
        let stringReg=new RegExp(searchString,'i');
        let filtered= projects.filter((project)=>{
          return stringReg.test(project['name'])
        })
        this.projectList=sortBy(filtered,['latest','open']).reverse();
      })
    })
  }

  renameProp = (oldProp,newProp,{ [oldProp]: old, ...others }) => ({
    [newProp]: old,
    ...others
  })

  clearSearch(){
    this.itService.clearSubject.next(true);
  }

}
