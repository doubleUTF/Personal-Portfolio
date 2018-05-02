import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RecipeBoxComponent} from './recipe-box.component';
import {RecipeRoutesModule} from './recipe-box.routing';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutesModule
  ],
  declarations: [RecipeBoxComponent],
})
export class RecipeBoxModule { }
