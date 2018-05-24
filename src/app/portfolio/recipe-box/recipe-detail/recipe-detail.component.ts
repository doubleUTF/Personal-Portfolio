import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeBoxService} from '../recipe-box.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private recipeService:RecipeBoxService
  ) { }

  ngOnInit() {
    this.recipe=this.recipeService.getRecipe(this.route.snapshot.params['id'])
    console.log(this.recipe)
  }
  recipe:Recipe;

  getImage(){
    return `url(${this.recipe.imgLgURL})`
  }
}
