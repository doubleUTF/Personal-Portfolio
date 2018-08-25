import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StageComponent } from './stage/stage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './stage/about/about.component';
import { ErrorComponent } from './stage/error/error.component';
import { UnlessDirective } from './directives/unless.directive';
import {SharedModule} from './shared/shared.module';
import { ApiComponent } from './stage/api/api.component';
import {WhitespaceToUnderscorePipe} from './pipes/whitespace-to-underscore.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StageComponent,
    FooterComponent,
    AboutComponent,
    ErrorComponent,
    UnlessDirective,
    ApiComponent,
    WhitespaceToUnderscorePipe
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, routing, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
