import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {IssueTrackerComponent} from './issue-tracker.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {IssueListComponent} from './issue-list/issue-list.component';
import {IssueComponent} from './issue/issue.component';
import {IssueGuard} from './issue.guard';
const issueTrackerRoutes:Routes=[
  {path:'',component:IssueTrackerComponent, children:[
    {path:'',component:ProjectListComponent},
    {path:':project',component:IssueListComponent},
    {path:':project/new',component:IssueComponent},
    {path:':project/:objectId', component:IssueComponent, canActivate:[IssueGuard]}
  ]}
]

@NgModule({
  imports:[RouterModule.forChild(issueTrackerRoutes)],
  exports:[RouterModule]
})

export class IssueTrackerRouting{}
