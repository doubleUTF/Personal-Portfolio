import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap';
import {ProgressbarModule} from 'ngx-bootstrap'
@NgModule({
  imports:[
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  exports:[
    CollapseModule,
    BsDropdownModule,
    ModalModule,
    ProgressbarModule
  ]
})
export class BootstrapModule { }
