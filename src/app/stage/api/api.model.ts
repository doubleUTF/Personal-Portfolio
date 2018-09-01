// Backend app, can contain multiple API routes
export class apiApp{
constructor(
  public name:string,
  public description:string,
  public apiList: Array<apiRoute>,
){}
}

// Individual API route, can contain multiple params
export class apiRoute{
  constructor(
    public method:string,
    public url:string,
    public queryParams?:Array<paramObj>,
    public bodyParams?:Array<paramObj>,
    public exampleResponse?:string
  ) {}
}

export class paramObj{
  constructor(
    public name:string,
    public type:string,
    public required:boolean,
    public description:string,
    public exampleRequest:string,
    public exampleResponse:string
  ){}
}
