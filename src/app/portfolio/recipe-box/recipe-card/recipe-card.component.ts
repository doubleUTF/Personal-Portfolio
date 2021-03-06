import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() recipe:Recipe
  @Input() id:number;

  defaultImg='../../../../assets/img/recipe-box/utensils.png'
}
