import {Ingredient} from './ingredient.model';

export class Recipe{
  name:string;
  description:string;
  ingredients:Ingredient[];
  cookingTime:number;
  directions:string;
  imageURL?:string;
}
