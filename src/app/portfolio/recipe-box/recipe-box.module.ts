import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RecipeBoxComponent} from './recipe-box.component';
import {RecipeRoutesModule} from './recipe-box.routing';
import { RecipeNavComponent } from './recipe-nav/recipe-nav.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutesModule
  ],
  declarations: [RecipeBoxComponent, RecipeNavComponent, RecipeCardComponent],
})
export class RecipeBoxModule { }
