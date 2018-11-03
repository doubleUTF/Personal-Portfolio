import {NgModule} from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { AboutComponent} from './stage/about/about.component';
import {ErrorComponent} from './stage/error/error.component';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';

const appRoutes: Routes=[
  {path:'',component:StageComponent, data:{animation:'Stage'}},
  {path:'portfolio', loadChildren:'./portfolio/portfolio.module#PortfolioModule', data:{preload:true}},
  {path:'docs',loadChildren:'./stage/api/api.module#ApiModule', data:{preload:true}},
  {path:'about', component: AboutComponent, data:{animation:'About'}},
  {path:'error',component:ErrorComponent, data:{animation:'Error'} },
  {path:'**', redirectTo:'/error'}
]


@NgModule({
  imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:SelectivePreloadingStrategyService})],
  exports:[RouterModule],
})
export class AppRoutingModule{};
