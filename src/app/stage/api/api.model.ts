// Backend app, can contain multiple API routes
export class ApiApp{
constructor(
  public name:string,
  public description:string,
  public apiList: Array<ApiRoute>,
  public frontEndURL?:string
){}
}

// Individual API route, can contain multiple params
export class ApiRoute{
  constructor(
    public method:string,
    public url:string,
    public params?:Array<ParamObj>,
    public queryParams?:Array<ParamObj>,
    public bodyParams?:Array<ParamObj>,
    public exampleRequest?:string,
    public exampleResponse?:string,
  ) {}
}

export class ParamObj{
  constructor(
    public name:string,
    public type:string,
    public required:boolean,
    public description:string,
    public exampleRequest?:string,
    public exampleResponse?:string
  ){}
}
