import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  imports:[
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports:[
    CollapseModule,
    BsDropdownModule
  ]
})
export class BootstrapModule { }
