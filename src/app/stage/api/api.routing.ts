import {NgModule} from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ApiComponent} from './api.component';
import {TimestampComponent} from './timestamp/timestamp.component';
import {ApiLandingComponent} from './api-landing/api-landing.component';

const apiRoutes:Routes=[
  {path:'',component:ApiComponent,children:[
    {path:'', component:ApiLandingComponent},
    {path:'ts',component:TimestampComponent}
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(apiRoutes)],
  exports:[RouterModule]
})

export class ApiRoutes{}
