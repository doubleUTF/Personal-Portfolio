import { Component, OnInit } from '@angular/core';
import {RecipeBoxService} from '../recipe-box.service';

@Component({
  selector: 'app-recipe-nav',
  templateUrl: './recipe-nav.component.html',
  styleUrls: ['./recipe-nav.component.css']
})
export class RecipeNavComponent implements OnInit {

  constructor(
    private recipeService:RecipeBoxService
  ) { }

  ngOnInit() {
  }

}
