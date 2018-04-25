import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StageComponent } from './stage/stage.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './stage/portfolio/portfolio.component';
import { AboutComponent } from './stage/about/about.component';
import { ErrorComponent } from './stage/error/error.component';
import { ProjectComponent } from './stage/portfolio/project/project.component';
import { MarkdownPreviewerComponent } from './stage/portfolio/markdown-previewer/markdown-previewer.component';
import { ProjectThumbnailComponent } from './stage/portfolio/project-thumbnail/project-thumbnail.component';
import { MarkdownPipe } from './stage/portfolio/markdown-previewer/markdown.pipe';
import { CamperLeaderboardComponent } from './stage/portfolio/camper-leaderboard/camper-leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StageComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ErrorComponent,
    ProjectComponent,
    MarkdownPreviewerComponent,
    ProjectThumbnailComponent,
    MarkdownPipe,
    CamperLeaderboardComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, BootstrapModule, routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
