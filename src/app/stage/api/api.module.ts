import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiComponent} from './api.component';
import {ApiRoutes} from './api.routing';
import { ApiContentComponent } from './api-content/api-content.component';

@NgModule({
  imports: [
    CommonModule,
    ApiRoutes
  ],
  declarations: [
    ApiComponent,
    ApiContentComponent
  ]
})

export class ApiModule { }
