import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeBoxService {
  defaultRecipes:Recipe[]=[
    // new Recipe('Fresh Salmon',)
  ]
  constructor() { }

}
