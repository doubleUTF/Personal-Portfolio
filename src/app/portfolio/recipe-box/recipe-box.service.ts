import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeBoxService{
  defaultRecipes:Recipe[]=[
    new Recipe('Fresh Salmon',
    'A simple dish of fresh salmon.',
    [new Ingredient('Sliced Salmon','1'), new Ingredient('Lemon', '1')],
    5,
    ['Cut salmon into fine slices.','Season with lemon',
    '*Optional: Dip with soy sauce and wasabe',],
    '../../../../assets/img/recipe-box/salmon.jpg',
    '../../../../assets/img/recipe-box/salmon_high.jpg'
    ),
    new Recipe('Grilled Ribeye Steak',
    'A tasty, juicy, filling entree for meatlovers. Enjoy moderately!',
    [new Ingredient('Ribeye steak', '1'), new Ingredient('Rosemary', '1 sprig'),
    new Ingredient('Salt','3 tablespoons'),new Ingredient('Butter','1 stick'),
    new Ingredient('Cooking oil', '2 Tablespoons')],
    40,
    ['Season the slab of meat with salt, oil, and rosemary.'],
    '../../../../assets/img/recipe-box/ribeye.jpg',
    '../../../../assets/img/recipe-box/ribeye_high.jpg'),
    new Recipe('BBQ Ribs',
    'Good ol\' mouth-watering barbeque pork ribs.',
    [new Ingredient('Pork Ribs', '2 lbs'), new Ingredient('BBQ Marinade', '4 cups'),
    new Ingredient('BBQ Sauce', '2 cups')],
    240,
    ['Marinade Pork Ribs for 3 hours', 'Preheat oven to 350 degrees F.',
    'Place ribs into oven for 45 minutes'],
    '../../../../assets/img/recipe-box/bbq_ribs.jpg',
    '../../../../assets/img/recipe-box/bbq_ribs_high.jpg'
    )
    ]
    currentRecipes:Recipe[];
    recipeSubject= new Subject<Recipe[]>();

  getDefaultRecipes(){
    return this.defaultRecipes.slice();
  }

  getRecipe(id:number){
    return this.currentRecipes.slice()[id];
  }

  getRecipes(){
    return this.currentRecipes.slice();
  }

  saveRecipe(recipe:Recipe, id:number){
    this.currentRecipes[id]=recipe;
    this.save();
  }

  saveNewRecipe(recipe:Recipe){
    this.currentRecipes.push(recipe);
    this.save();
  }

  resetRecipes(){
    this.currentRecipes=this.getDefaultRecipes();
    this.save();
  }

  deleteRecipe(id:number){
    this.currentRecipes.splice(id,1);
    this.save();
  }

  save(){
    this.recipeSubject.next(this.currentRecipes);
    localStorage.setItem('recipes',JSON.stringify(this.getRecipes()))
  }

  constructor() {
    if (typeof(Storage) !=="undefined"){
      // Local storage available
      if (!localStorage.recipes){
      // No recipe entry found in localStorage
        localStorage.setItem('recipes',JSON.stringify(this.getDefaultRecipes()))
      }
      // Recipe found in local storage
        this.currentRecipes=JSON.parse(localStorage.getItem('recipes'))
    } else {
      // No local storage
      this.currentRecipes=this.getDefaultRecipes();
    }}
}
