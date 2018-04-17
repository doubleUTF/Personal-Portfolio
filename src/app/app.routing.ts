import { RouterModule, Routes } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { PortfolioComponent } from './stage/portfolio/portfolio.component';
import { AboutComponent} from './stage/about/about.component';
import {ErrorComponent} from './stage/error/error.component';

const appRoutes: Routes=[
  {path:'',component:StageComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'about', component: AboutComponent},
  {path:'error',component:ErrorComponent },
  {path:'**', redirectTo:'/error'}
]

export const routing= RouterModule.forRoot(appRoutes);
