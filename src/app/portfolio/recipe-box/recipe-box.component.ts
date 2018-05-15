import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeBoxService} from './recipe-box.service';

@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css'],
  providers:[RecipeBoxService]
})
export class RecipeBoxComponent implements OnInit {

  constructor(
    public recipeService:RecipeBoxService
  ) { }

  ngOnInit() {
    // Check browser for web storage support
    if (typeof(Storage) !=="undefined"){
      if (!localStorage.recipes){
        localStorage.setItem('recipes',JSON.stringify(this.recipeService.getRecipes()))
      }
        this.recipes=JSON.parse(localStorage.getItem('recipes'))
    } else {
        this.recipes=this.recipeService.getRecipes();
    }
  }

  recipes:Recipe[]
}
