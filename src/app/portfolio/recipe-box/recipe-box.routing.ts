import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipeBoxComponent} from './recipe-box.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeThumbnailsComponent} from './recipe-thumbnails/recipe-thumbnails.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const recipeRoutes:Routes=[
  {path:'',component:RecipeBoxComponent,children:[
    {path:'',component:RecipeThumbnailsComponent},
    {path:'new', component:RecipeEditComponent, data:{new:true}},
    {path:':id', component:RecipeDetailComponent},
    {path:':id/edit', component:RecipeEditComponent, data:{new:false}},
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(recipeRoutes)],
  exports:[RouterModule]
})

export class RecipeRoutesModule{}
