import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Feature modules
// import { Bootstrap4Module} from './bootstrap4module/bootstrap4.module';
// import { BandComponent } from './band/band.component';
// import { StartupComponent } from './startup/startup.component';
import { PortfolioModule} from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
    // BandComponent,
    // StartupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Bootstrap4Module,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
