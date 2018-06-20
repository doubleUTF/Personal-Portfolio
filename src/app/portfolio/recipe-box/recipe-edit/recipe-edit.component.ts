import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';
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
    private recipeService:RecipeBoxService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe((newRecipe)=>{
      this.newRecipe=newRecipe.new;
      // Edit mode
      if (!this.newRecipe){
        this.route.params.subscribe((data)=>{
          this.currentRecipe=this.recipeService.getRecipe(data.id);
          this.recipeId=data.id;
          let ingredients=new FormArray([], Validators.required);
          let directions=new FormArray([], Validators.required);

          this.currentRecipe.ingredients.forEach((ingredient)=>{
            ingredients.push(new FormGroup({
              name:new FormControl(ingredient.name, Validators.required),
              quantity:new FormControl(ingredient.quantity, Validators.required)
            }))
          })

          this.currentRecipe.directions.forEach((direction)=>{
            directions.push(new FormControl(direction,Validators.required))
          })

          this.recipeForm=new FormGroup({
            name:new FormControl(this.currentRecipe.name, Validators.required),
            description:new FormControl(this.currentRecipe.description, Validators.required),
            cookingTime:new FormControl(this.currentRecipe.cookingTime, [Validators.required]),
            ingredients:ingredients,
            directions: directions,
            imageURL:new FormControl(this.currentRecipe.imageURL),
            imgLgURL:new FormControl(this.currentRecipe.imgLgURL)
          })
        })
        // console.log(this.recipeForm)
        // console.log(this.recipeForm.get('directions'))
        console.log(this.recipeForm)
      }
    })
  }

  newRecipe:boolean;
  currentRecipe:Recipe;
  recipeForm:FormGroup;
  recipeId:number;

  addDirection(){
    if (this.recipeForm.get('directions').valid){
      (<FormArray>this.recipeForm.get('directions')).push(
        new FormControl(null,Validators.required))
    }
  }

  removeDirection(id:number){
    (<FormArray>this.recipeForm.get('directions')).removeAt(id)
    this.recipeForm.markAsDirty();
  }

  addIngredient(){
    if (this.recipeForm.get('ingredients').valid){
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          name:new FormControl(null, Validators.required),
          quantity: new FormControl(null, Validators.required)
        })
      )
    }
  }

  removeIngredient(id:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(id);
    this.recipeForm.markAsDirty();
  }

  saveRecipe(){
    this.recipeService.saveRecipe(this.recipeForm.value, this.recipeId);
    this.router.navigate(['..'], {relativeTo:this.route})
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['portfolio','recipe-box'])
  }
}
