import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {IssueTrackerComponent} from './issue-tracker.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {IssueListComponent} from './issue-list/issue-list.component';
import {IssueComponent} from './issue/issue.component';
import {IssueResolver} from './issue/issue.resolver';
import {IssueListResolver} from './issue-list/issue-list.resolver';

const issueTrackerRoutes:Routes=[
  {path:'',component:IssueTrackerComponent, children:[
    {path:'',component:ProjectListComponent},
    {path:':project',component:IssueListComponent, resolve:{issueList:IssueListResolver}},
    {path:':project/issue', component:IssueComponent, resolve:{issue:IssueResolver}},
  ]}
]

@NgModule({
  imports:[RouterModule.forChild(issueTrackerRoutes)],
  exports:[RouterModule],
  providers:[IssueResolver, IssueListResolver]
})

export class IssueTrackerRouting{}
