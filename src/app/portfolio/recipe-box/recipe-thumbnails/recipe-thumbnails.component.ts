import { Component, OnInit } from '@angular/core';
import {RecipeBoxService} from '../recipe-box.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-thumbnails',
  templateUrl: './recipe-thumbnails.component.html',
  styleUrls: ['./recipe-thumbnails.component.css'],
  providers:[RecipeBoxService]
})
export class RecipeThumbnailsComponent implements OnInit {

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
