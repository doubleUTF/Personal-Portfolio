export class paramObj{
  constructor(
    public name:string,
    public type:string,
    public description:string,
    public exampleRequest:string,
    public exampleResponse:string
  ){}
}

export class API{
  constructor(
    public name: string,
    public method:string,
    public description: string,
    public url:string,
    public params?:Array<paramObj>,
    public exampleResponse?:string
  ) {}
}
