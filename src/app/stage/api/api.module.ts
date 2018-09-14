import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiComponent} from './api.component';
import {ApiRoutes} from './api.routing';
import { ApiContentComponent } from './api-content/api-content.component';
import { ApiLandingComponent } from './api-landing/api-landing.component';
import {SharedModule} from '../../shared/shared.module';
import { ExerciseTrackerComponent } from './exercise-tracker/exercise-tracker.component';
import { FileMetadataComponent } from './file-metadata/file-metadata.component';
import { MetricConverterComponent } from './metric-converter/metric-converter.component';
@NgModule({
  imports: [
    CommonModule,
    ApiRoutes,
    SharedModule
  ],
  declarations: [
    ApiComponent,
    ApiContentComponent,
    ApiLandingComponent,
    ExerciseTrackerComponent,
    FileMetadataComponent,
    MetricConverterComponent
  ]
})

export class ApiModule { }
