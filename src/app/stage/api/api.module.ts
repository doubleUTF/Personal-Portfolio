import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimestampComponent } from './timestamp/timestamp.component';
import {ApiComponent} from './api.component';
import {ApiRoutes} from './api.routing';
import { ApiLandingComponent } from './api-landing/api-landing.component';

@NgModule({
  imports: [
    CommonModule,
    ApiRoutes
  ],
  declarations: [
    ApiComponent,
    TimestampComponent,
    ApiLandingComponent
  ]
})

export class ApiModule { }
