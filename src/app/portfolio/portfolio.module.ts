import { NgModule } from '@angular/core';
import {PortfolioRoutes} from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import {MarkdownPreviewerComponent} from './markdown-previewer/markdown-previewer.component';
import {CamperLeaderboardComponent} from './camper-leaderboard/camper-leaderboard.component';
import {ProjectThumbnailComponent} from './project-thumbnail/project-thumbnail.component';
import {MarkdownPipe} from './markdown-previewer/markdown.pipe';
import {SharedModule} from '../shared/shared.module';
import { StockPriceCheckerComponent } from './stock-price-checker/stock-price-checker.component';

@NgModule({
  imports: [
    PortfolioRoutes,
    SharedModule,
  ],
  declarations: [
    PortfolioComponent,
    MarkdownPreviewerComponent,
    CamperLeaderboardComponent,
    ProjectThumbnailComponent,
    MarkdownPipe,
    StockPriceCheckerComponent,
  ],
})
export class PortfolioModule { }
