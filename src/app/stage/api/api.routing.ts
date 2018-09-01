import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApiComponent} from './api.component';
import {ApiContentComponent} from './api-content/api-content.component';

const apiRoutes:Routes=[
  {path:'',component:ApiComponent,children:[
    {path:':appName', component:ApiContentComponent},
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(apiRoutes)],
  exports:[RouterModule]
})

export class ApiRoutes{}
