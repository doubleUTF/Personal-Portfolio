export class Project{
  constructor(
    public name:string,
    public date:Date,
    public description:string,
    public imagePath:string,
    public link?:string,
    public internalLink?:string
  ){}
}
