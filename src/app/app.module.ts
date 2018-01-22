import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StageComponent } from './stage/stage.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './stage/portfolio/portfolio.component';
import { AboutComponent } from './stage/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StageComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
