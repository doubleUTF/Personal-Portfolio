import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BootstrapModule } from '../bootstrap/bootstrap.module';

@NgModule({
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    BootstrapModule,
  ]
})
export class SharedModule { }
