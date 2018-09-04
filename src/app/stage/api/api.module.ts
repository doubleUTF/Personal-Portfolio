import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiComponent} from './api.component';
import {ApiRoutes} from './api.routing';
import { ApiContentComponent } from './api-content/api-content.component';
import { ApiLandingComponent } from './api-landing/api-landing.component';
import {SharedModule} from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    ApiRoutes,
    SharedModule
  ],
  declarations: [
    ApiComponent,
    ApiContentComponent,
    ApiLandingComponent
  ]
})

export class ApiModule { }
