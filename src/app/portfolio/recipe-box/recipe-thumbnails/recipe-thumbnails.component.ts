import { Component, OnInit } from '@angular/core';
import {RecipeBoxService} from '../recipe-box.service';
import {Recipe} from '../recipe.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-recipe-thumbnails',
  templateUrl: './recipe-thumbnails.component.html',
  styleUrls: ['./recipe-thumbnails.component.css'],
})
export class RecipeThumbnailsComponent implements OnInit {

  constructor(
    public recipeService:RecipeBoxService
  ) { }

  ngOnInit() {
    // Check browser for web storage support
    this.recipes=this.recipeService.getRecipes();
    this.recipeService.recipeSubject.subscribe((recipes:Recipe[])=>{
      console.log('new recipes', recipes)
      this.recipes=recipes;
    })
    console.log(this.recipeService.recipeSubject)
  }

  recipes:Recipe[]

}
