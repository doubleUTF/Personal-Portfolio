import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipeBoxComponent} from './recipe-box.component';

const recipeRoutes:Routes=[
  {path:'',component:RecipeBoxComponent}
]

@NgModule({
  imports:[RouterModule.forChild(recipeRoutes)],
  exports:[RouterModule]
})

export class RecipeRoutesModule{}
