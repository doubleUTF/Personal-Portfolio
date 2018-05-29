import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipeBoxComponent} from './recipe-box.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeThumbnailsComponent} from './recipe-thumbnails/recipe-thumbnails.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const recipeRoutes:Routes=[
  {path:'',component:RecipeBoxComponent,children:[
    {path:'',component:RecipeThumbnailsComponent, data:{navButtons:['add']}},
    {path:':id', component:RecipeDetailComponent, data:{navButtons:['edit']}},
    {path:':id/edit', component:RecipeEditComponent, data:{navButtons:['cancel','save']}}
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(recipeRoutes)],
  exports:[RouterModule]
})

export class RecipeRoutesModule{}
