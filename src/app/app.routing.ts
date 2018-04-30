import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { AboutComponent} from './stage/about/about.component';
import {ErrorComponent} from './stage/error/error.component';

const appRoutes: Routes=[
  {path:'',component:StageComponent, data:{animation:'Stage'}},
  {path:'portfolio', loadChildren:'./portfolio/portfolio.module#PortfolioModule'},
  {path:'about', component: AboutComponent, data:{animation:'About'}},
  {path:'error',component:ErrorComponent, data:{animation:'Error'} },
  {path:'**', redirectTo:'/error'}
]

export const routing= RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules});
