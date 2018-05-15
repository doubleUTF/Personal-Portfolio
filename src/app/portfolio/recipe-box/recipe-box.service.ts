import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';

@Injectable()
export class RecipeBoxService {
  defaultRecipes:Recipe[]=[
    new Recipe('Fresh Salmon',
    'A simple dish of fresh salmon.',
    [new Ingredient('Sliced Salmon','1'), new Ingredient('Lemon', '1')],
    5,
    ['Cut salmon into fine slices.','Season with lemon',
    '*Optional: Dip with soy sauce and wasabe',],
    new Date(),
    '../../../../assets/img/recipe-box/salmon.jpg'
    ),
    new Recipe('Grilled Ribeye Steak',
    'A tasty, juicy, filling entree for meatlovers. Enjoy moderately!',
    [new Ingredient('Ribeye steak', '1'), new Ingredient('Rosemary', '1 sprig'),
    new Ingredient('Salt','3 tablespoons'),new Ingredient('Butter','1 stick'),
    new Ingredient('Cooking oil', '2 Tablespoons')],
    40,
    ['Season the slab of meat with salt, oil, and rosemary.'],
    new Date(),
    '../../../../assets/img/recipe-box/ribeye.jpg'),
    new Recipe('BBQ Ribs',
    'Good ol\' mouth-watering barbeque pork ribs.',
    [new Ingredient('Pork Ribs', '2 lbs'), new Ingredient('BBQ Marinade', '4 cups'),
    new Ingredient('BBQ Sauce', '2 cups')],
    240,
    ['Marinade Pork Ribs for 3 hours', 'Preheat oven to 350 degrees F.',
    'Place ribs into oven for 45 minutes'],
    new Date(),
    '../../../../assets/img/recipe-box/bbq_ribs.jpg'
    )
    ]

  getRecipes(){
    return this.defaultRecipes.slice();
  }

  constructor() { }

}
