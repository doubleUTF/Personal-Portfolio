import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipeBoxComponent} from './recipe-box.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeThumbnailsComponent} from './recipe-thumbnails/recipe-thumbnails.component';

const recipeRoutes:Routes=[
  {path:'',component:RecipeBoxComponent,children:[
    {path:'',component:RecipeThumbnailsComponent},
    {path:':id', component:RecipeDetailComponent}
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(recipeRoutes)],
  exports:[RouterModule]
})

export class RecipeRoutesModule{}
