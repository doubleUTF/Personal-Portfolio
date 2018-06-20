import { Component, OnInit, OnDestroy } from '@angular/core';
import {RecipeBoxService} from './recipe-box.service';
@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css'],
  providers:[RecipeBoxService]
})
export class RecipeBoxComponent implements OnInit, OnDestroy{

  constructor(
    private recipeService:RecipeBoxService
  ) { }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.recipeService.recipeSubject.unsubscribe()
  }
}
