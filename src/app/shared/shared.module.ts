import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    BootstrapModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
