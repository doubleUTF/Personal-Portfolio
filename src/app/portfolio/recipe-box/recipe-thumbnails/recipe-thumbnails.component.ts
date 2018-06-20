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
    this.recipes=this.recipeService.getRecipes();
    this.recipeService.recipeSubject.subscribe((recipes:Recipe[])=>{
      this.recipes=recipes;
    })
  }

  recipes:Recipe[]

}
