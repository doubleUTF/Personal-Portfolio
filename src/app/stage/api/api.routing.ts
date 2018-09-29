import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApiComponent} from './api.component';
import {ApiContentComponent} from './api-content/api-content.component';
import {ApiLandingComponent} from './api-landing/api-landing.component';
import {ExerciseTrackerComponent} from './exercise-tracker/exercise-tracker.component';
import {FileMetadataComponent} from './file-metadata/file-metadata.component';
import {MetricConverterComponent} from './metric-converter/metric-converter.component';
const apiRoutes:Routes=[
  {path:'',component:ApiComponent,children:[
    {path:'',component:ApiLandingComponent},
    {path:'Exercise_Tracker',component:ExerciseTrackerComponent},
    {path:'File_Metadata',component:FileMetadataComponent},
    {path:'Metric_Converter',component:MetricConverterComponent},
    {path:':appName', component:ApiContentComponent},
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(apiRoutes)],
  exports:[RouterModule]
})

export class ApiRoutes{}
