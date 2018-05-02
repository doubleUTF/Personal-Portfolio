import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import {MarkdownPreviewerComponent} from './markdown-previewer/markdown-previewer.component';
import {CamperLeaderboardComponent} from './camper-leaderboard/camper-leaderboard.component';
// import {RecipeBoxComponent} from './recipe-box/recipe-box.component';

const routes:Routes=[
  {path:'',component: PortfolioComponent, data:{animation:'Portfolio'}},
  {path:'markdown-previewer',component:MarkdownPreviewerComponent,
    data:{animation:'Markdown',hideBars:true}},
  {path:'camper-leaderboard',component:CamperLeaderboardComponent,
    data:{animation:'Camper',hideBars:true}},
  {path:'recipe-box',loadChildren:'./recipe-box/recipe-box.module#RecipeBoxModule',
    data:{animation:'Recipe',hideBars:true}}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PortfolioRoutes{}
