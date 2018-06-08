import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute} from '@angular/router';
import {RecipeBoxService} from '../recipe-box.service';
import {FormGroup,FormControl,FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private recipeService:RecipeBoxService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((newRecipe)=>{
      this.newRecipe=newRecipe.new;
      // Edit mode
      if (!this.newRecipe){
        this.route.params.subscribe((data)=>{
          this.currentRecipe=this.recipeService.getRecipe(data.id);

          this.recipeForm=new FormGroup({
            name:new FormControl(this.currentRecipe.name, Validators.required),
            description:new FormControl(this.currentRecipe.description, Validators.required),
            ingredients:new FormArray([], Validators.required),
            cookingTime:new FormControl('', [Validators.required]),
            directions: new FormArray([]),
            imageURL:new FormControl(''),
            imgLgURL:new FormControl('')
          })
        })
      }
    })
  }

  newRecipe:boolean;
  currentRecipe:Recipe;
  recipeForm:FormGroup;
}
