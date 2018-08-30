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
    public url:string,
    public queryParams?:Array<paramObj>,
    public bodyParams?:Array<paramObj>,
    public exampleResponse?:string
  ) {}
}

// Backend app, can contain multiple APIs
export class apiApp{
  constructor(
    public name:string,
    public description:string,
    public apiList: Array<API>,
  ){}
}
