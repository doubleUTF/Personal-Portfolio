import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StageComponent } from './stage/stage.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './stage/portfolio/portfolio.component';
import { AboutComponent } from './stage/about/about.component';
import { ErrorComponent } from './stage/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StageComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, BootstrapModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
