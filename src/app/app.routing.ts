import { RouterModule, Routes } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { PortfolioComponent } from './stage/portfolio/portfolio.component';
import { AboutComponent} from './stage/about/about.component';
import {ErrorComponent} from './stage/error/error.component';
import {MarkdownPreviewerComponent} from './stage/portfolio/markdown-previewer/markdown-previewer.component';
import {ProjectComponent} from './stage/portfolio/project/project.component';
import {CamperLeaderboardComponent} from './stage/portfolio/camper-leaderboard/camper-leaderboard.component';
import {RecipeBoxComponent} from './stage/portfolio/recipe-box/recipe-box.component';

const appRoutes: Routes=[
  {path:'',component:StageComponent, data:{animation:'Stage'}},
  {path:'portfolio', children:[
    {path:'',component: PortfolioComponent, data:{animation:'Portfolio'}},
    {path:'markdown-previewer',component:MarkdownPreviewerComponent,
      data:{animation:'Markdown',hideBars:true}},
    {path:'camper-leaderboard',component:CamperLeaderboardComponent,
      data:{animation:'Camper',hideBars:true}},
    {path:'recipe-box',component:RecipeBoxComponent,
      data:{animation:'Recipe',hideBars:true}}
  ]},
  {path:'about', component: AboutComponent, data:{animation:'About'}},
  {path:'error',component:ErrorComponent, data:{animation:'Error'} },
  {path:'**', redirectTo:'/error'}
]

export const routing= RouterModule.forRoot(appRoutes);
