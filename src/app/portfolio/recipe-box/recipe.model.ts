import {Ingredient} from './ingredient.model';

export class Recipe {
  constructor(
    public name:string,
    public description:string,
    public ingredients:Ingredient[],
    public cookingTime:number,
    public directions:string,
    public imageURL?:string
  ){}
}
