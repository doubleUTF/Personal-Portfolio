import { RouterModule, Routes } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { PortfolioComponent } from './stage/portfolio/portfolio.component';
import { AboutComponent} from './stage/about/about.component';

const appRoutes: Routes=[
  {path:'',component:StageComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'about', component: AboutComponent}
]

export const routing= RouterModule.forRoot(appRoutes);
