import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css']
})
export class RecipeBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Check browser for web storage support
    if (typeof(Storage) !=="undefined"){
      if (!localStorage.recipes){

      }
    } else {
      console.log("No Web Storage support.")
    }
  }

  readonly recipes:Recipe[]
}
