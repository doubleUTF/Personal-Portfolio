import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';

@Injectable()
export class RecipeBoxService {
  defaultRecipes:Recipe[]=[
    new Recipe('Fresh Salmon',
    'A simple dish of fresh salmon. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    [new Ingredient('Sliced Salmon','1'), new Ingredient('Lemon', '1')],
    5,
    ['Cut salmon into fine slices.','Season with lemon',
    '*Optional: Dip with soy sauce and wasabe',],
    new Date(),
    '../../../../assets/img/recipe-box/salmon.jpg'
  )
  ]

  getRecipes(){
    return this.defaultRecipes.slice();
  }

  constructor() { }

}
