export class API{
  constructor(
    public name: string,
    public method:string,
    public description: string,
    public url:string,
    public results:Array<object>
  ) {}
}
