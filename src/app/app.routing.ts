import { RouterModule, Routes } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { PortfolioComponent } from './stage/portfolio/portfolio.component';
import { AboutComponent} from './stage/about/about.component';
import {ErrorComponent} from './stage/error/error.component';
import {MarkdownPreviewerComponent} from './stage/portfolio/markdown-previewer/markdown-previewer.component';

const appRoutes: Routes=[
  {path:'',component:StageComponent, data:{animation:'Stage'}},
  {path:'portfolio', children:[
    {path:'',component: PortfolioComponent, data:{animation:'Portfolio'}},
    {path:'markdown-previewer',component:MarkdownPreviewerComponent, data:{animation:'Markdown'}}
  ]},
  {path:'about', component: AboutComponent, data:{animation:'About'}},
  {path:'error',component:ErrorComponent, data:{animation:'Error'} },
  {path:'**', redirectTo:'/error'}
]

export const routing= RouterModule.forRoot(appRoutes);
