export class Exercise{
  constructor(
    public userId:string,
    public description:string,
    public duration:number,
    public date?:string,
  ){}
}
