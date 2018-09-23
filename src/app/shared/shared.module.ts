import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ClickOutsideModule} from 'ng-click-outside';
@NgModule({
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    BootstrapModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    ClickOutsideModule,
  ],
  declarations:[
  ]
})
export class SharedModule { }
