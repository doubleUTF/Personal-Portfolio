import {ApiRoute, ParamObj, ApiApp} from './api.model'
import * as _ from 'lodash';

export class ApiService {
 rootPath='https://www.davidlau.xyz/api'
 apiList:ApiApp[]=[
   new ApiApp('Timestamp','Basic timestamp microservice. Returns a data object containing Unix and UTC time representations.',
   [new ApiRoute(
     'GET','/timestamp',
    [new ParamObj('milliseconds','number', false,'Integer in milliseconds',
        '1035848596111',`{
         "unix": 1035848596111,
         "utc": "Mon, 28 Oct 2002 23:43:16 GMT"}`),
        new ParamObj('dateString','date string', false, 'ISO-8601 Compliant date string',
      '2018-8-20', `{
          "unix": 1534748400000,
          "utc": "Mon, 20 Aug 2018 07:00:00 GMT"
      }`),
    new ParamObj('','string', false,'No parameter; returns the current time.','',`
    {
        "unix": 1534901307250,
        "utc": "Wed, 22 Aug 2018 01:28:27 GMT"
    }`)
    ])
  ]),
  new ApiApp('Whoami','Retrieve header information from requesting client.',
[new ApiRoute('GET','/whoami',null,null,null,`
{"ipaddress":"192.68.1.1","language":"en-US,en;q=0.9,zh-HK;q=0.8,zh;q=0.7",
"software":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"}`
)]),
new ApiApp('URL Shortener', 'Enter a lengthy URL and returns a shortened version. Expires in 24 hours.',
[new ApiRoute('GET','/shorturl/new', [new ParamObj('URL','string',true,'Pass in a full URL string and creates an object containing original URL and a randomly generated six digit alphanumeric character string representing the shortened URL. Expires in 24 hours.',
'http://www.google.com',`{
  "originalUrl":"http://www.google.com",
  "shortUrl":"ZT2a5p"
}`)]),
new ApiRoute('GET','/shorturl',[new ParamObj('shortURL','string',true,'Six digit alphanumeric characters derived from /new/:URL query. Will fail if short URL is does not exist in database.',
'ZT2a5p','Redirects to http://www.google.com')])
]),
new ApiApp('Exercise Tracker','Save and retreive personal exercise events.', [
  new ApiRoute('POST','/exercise/new-user',[new ParamObj('username','string',true,'Desired username.', 'george',`{
    "username": "george",
    "_id": "CQ1zLRW"
}`)]),
  new ApiRoute('POST','/exercise/add',null,[
    new ParamObj('userId','string',true,'User ID obtained from creating new user',),
    new ParamObj('description','string',true,'Details of exercise.'),
    new ParamObj('duration', 'number',true, 'Minutes'),
    new ParamObj('date','date string',false, 'MM-DD-YYYY format')
  ],'userId=CQ1zLRW&description=Running&duration=30&date=08-04-2018',
  `{
    "message": "saved",
    "data": {
        "userId": "CQ1zLRW",
        "description": "Running",
        "duration": "30 minutes",
        "date": "08-04-2018"
    }
}`
),
  new ApiRoute('GET','/log',[
    new ParamObj('userId','string',true,'User Id'),
    new ParamObj('from','string',false,'Earliest date query in "MM-DD-YYYY" format'),
    new ParamObj('to','string',false,'Latest date query in "MM-DD-YYYY" format'),
    new ParamObj('limit','number',false,'Maximum number of results to return. Default no limit.')
  ], null,
  'https://www.davidlau.xyz/api/log/?userId=CQ1zLRW&from=08-01-2018&to=09-09-2018&limit=5',
  `[
    {
        "userId": "CQ1zLRW",
        "description": "Running",
        "duration": 30,
        "date": "2018-08-04T07:00:00.000Z"
    },
    {
        "userId": "CQ1zLRW",
        "description": "Cycling",
        "duration": 35,
        "date": "2018-08-14T07:00:00.000Z"
    },
    {
        "userId": "CQ1zLRW",
        "description": "Swimming",
        "duration": 40,
        "date": "2018-08-18T07:00:00.000Z"
    },
    {
        "userId": "CQ1zLRW",
        "description": "Weight lifting",
        "duration": 45,
        "date": "2018-09-04T07:00:00.000Z"
    },
    {
        "userId": "CQ1zLRW",
        "description": "Rowing",
        "duration": 60,
        "date": "2018-09-05T07:00:00.000Z"
    }
]`
  )
]),
new ApiApp('File Metadata','Upload a file and receive its name, size, and type.',[new ApiRoute(
  'POST','/file_metadata',null,[
    new ParamObj('upfile','File',true, 'Keyname of file in multipart/form-data post request.')
  ],'https://www.davidlau.xyz/api/file_metadata (multipart body not shown)','{"type":"application/octet-stream","filename":"BaseEngine.ini","size":103054}'
)])
]

getApiNames(){
  return this.apiList.map((api:ApiApp)=>{
    return api.name
  })
}

getApi(name:string){
  return _.find(this.apiList,(o)=>o.name==name);
}


constructor() { }
}
