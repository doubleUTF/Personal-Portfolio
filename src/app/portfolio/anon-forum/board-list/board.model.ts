export interface Board{
  _id:string,
  title:string,
  bumped_on:Date,
  description?:string,
  threads?:Array<any>
}
