import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import {MarkdownPreviewerComponent} from './markdown-previewer/markdown-previewer.component';
import {CamperLeaderboardComponent} from './camper-leaderboard/camper-leaderboard.component';

const routes:Routes=[
  {path:'',component: PortfolioComponent, data:{animation:'Portfolio'}},
  {path:'markdown-previewer',component:MarkdownPreviewerComponent,
    data:{animation:'Markdown',hideBars:false}},
  {path:'camper-leaderboard',component:CamperLeaderboardComponent,
    data:{animation:'Camper',hideBars:false}},
  {path:'recipe-box',loadChildren:'./recipe-box/recipe-box.module#RecipeBoxModule',
    data:{animation:'Recipe',hideBars:true}},
    {path:'issue-tracker',loadChildren:'./issue-tracker/issue-tracker.module#IssueTrackerModule',
  data:{animation:'Issue Tracker', hideBars:true}},
  {path:'fitness-tracker',loadChildren:'./fitness-tracker/fitness-tracker.module#FitnessTrackerModule',
data:{animation:'Fitness Tracker',hideBars:true}},
{path:'anon-forum',loadChildren:'./anon-forum/anon-forum.module#AnonForumModule',
data:{hideBars:true}},

]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PortfolioRoutes{}
