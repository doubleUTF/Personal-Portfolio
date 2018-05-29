import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RecipeBoxComponent} from './recipe-box.component';
import {RecipeRoutesModule} from './recipe-box.routing';
import { RecipeNavComponent } from './recipe-nav/recipe-nav.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeThumbnailsComponent } from './recipe-thumbnails/recipe-thumbnails.component';
import {RecipeBoxService} from './recipe-box.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutesModule
  ],
  declarations: [RecipeBoxComponent, RecipeNavComponent, RecipeCardComponent, RecipeDetailComponent, RecipeThumbnailsComponent, RecipeEditComponent],
  providers:[RecipeBoxService]
})
export class RecipeBoxModule { }
