import {ApiRoute, ParamObj, ApiApp} from './api.model'
import * as _ from 'lodash';
import {environment} from '../../../environments/environment';

export class ApiService {
 rootPath='https://www.davidlau.xyz/api'
 // rootPathPortfolio= environment.production? 'https://www.davidlau.xyz/portfolio' : 'http://localhost:3000/portfolio'
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
[new ApiRoute('GET','/whoami',null,null,null,null,`
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
  new ApiRoute('POST','/exercise/add',null,null,[
    new ParamObj('userId','string',true,'User ID obtained from creating new user',),
    new ParamObj('description','string',true,'Details of exercise.'),
    new ParamObj('duration', 'number',true, 'Minutes'),
    new ParamObj('date','date string',false, 'MM-DD-YYYY format')
  ],'(Full HTTP Body not shown) userId=CQ1zLRW&description=Running&duration=30&date=08-04-2018',
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
  new ApiRoute('GET','/log', null,[
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
  'POST','/file_metadata',null, null,[
    new ParamObj('upfile','File',true, 'Keyname of file in multipart/form-data post request.')
  ],'https://www.davidlau.xyz/api/file_metadata (multipart body not shown)','{"type":"application/octet-stream","filename":"BaseEngine.ini","size":103054}'
)]),
new ApiApp('Metric Converter','Converts units between metric and imperial system.',  [new ApiRoute(
  'GET', '/convert', null,[new ParamObj('input', 'string', true, `Number and unit to convert from, will return an object with corresponding number and unit.
  Accepts decimal and fractional values. Allowed units are ['gal', 'l', 'lbs', 'kg', 'mi','km']`)],null,
  'https://www.davidlau.xyz/api/convert?input=24.61gal', `{
    "initNum": 24.61,
    "initUnit": "gal",
    "returnNum": 93.15894,
    "returnUnit": "l",
    "string": "24.61 gal converts to 93.15894 l"
}`)]
),
new ApiApp('Issue Tracker', 'View, create, edit, and delete issue tickets.',[new ApiRoute('GET',
'/issues/:project/issue',null,[new ParamObj('id', 'ObjectID', true, 'MongoDB Object ID')],null,
`${this.rootPath}/issues/networking/issueid=5ba08ab6f33f041830c1ebda`,`{
    "assigned_to": "",
    "status_text": "",
    "open": false,
    "_id": "5ba08bc9046e9a1f58de73f1",
    "project": "test",
    "issue_title": "Need more cowbell",
    "issue_text": "We gotta have more cowbell!",
    "created_by": "Bruce Dickenson",
    "created_on": "2018-09-18T05:23:21.820Z",
    "updated_on": "2018-09-18T05:23:21.820Z"
}`),
// new ApiRoute('GET', '/issues', null,null,null,''),
new ApiRoute('GET',
'/issues/:project', null,[new ParamObj('issue_title','String',false, 'Query filter property.'),
new ParamObj('issue_text','String',false,'Query filter property.'),
new ParamObj('created_by','String',false,'Query filter property'),
new ParamObj('assigned_to','String',false,'Query filter property'),
new ParamObj('status_text','String',false,'Query filter property'),
new ParamObj('created_on','Date',false,'Query filter property'),
new ParamObj('updated_on','Date',false,'Query filter property'),
new ParamObj('open','Boolean',false,'Query filter property'),],null,
'https://www.davidlau.xyz/api/issues/test/?created_by=LIL JON&open=true&assigned_to=Chai and Mocha',
`[
    {
        "assigned_to": "Chai and Mocha",
        "status_text": "In QA",
        "open": true,
        "_id": "5b9f5919ad6fcf50bc1f0661",
        "project": "test",
        "issue_title": "Title",
        "issue_text": "text",
        "created_by": "LIL JON",
        "created_on": "2018-09-17T07:34:49.089Z",
        "updated_on": "2018-09-17T07:34:49.147Z",
        "__v": 0
    },
    {
        "assigned_to": "Chai and Mocha",
        "status_text": "In QA",
        "open": true,
        "_id": "5b9f594d29db175528431e56",
        "project": "test",
        "issue_title": "Title",
        "issue_text": "text",
        "created_by": "LIL JON",
        "created_on": "2018-09-17T07:35:41.136Z",
        "updated_on": "2018-09-17T07:35:41.187Z",
        "__v": 0
    }]`
), new ApiRoute('POST','/issues/:project',null,null,[
  new ParamObj('issue_title','string',true,'Title of issue'),
  new ParamObj('issue_text','string',true,'Text content of issue'),
  new ParamObj('created_by','string',true,'Creator name'),
  new ParamObj('assigned_to','string',false,'Assignee name'),
  new ParamObj('status_text','string',false,'Issue status')
],`(Full HTTP body not shown) https://www.davidlau.xyz/api/issues/networking {issue_title:Connection issues
issue_text:Experiencing intermittent connections, requesting technical assistance
created_by:Elliot Alderson
assignedTo:Tyrell Wellick
status_text:Unresolved}`,`
{
    "assigned_to": "",
    "status_text": "Unresolved",
    "open": true,
    "_id": "5b9ffe82a8097c2bf492c364",
    "project": "networking",
    "issue_title": "Connection issues",
    "issue_text": "Experiencing intermittent connections, requesting technical assistance",
    "created_by": "Elliot Alderson",
    "created_on": "2018-09-17T19:20:34.279Z",
    "updated_on": "2018-09-17T19:20:34.279Z",
    "__v": 0
}`), new ApiRoute('PUT','/issues/:project',null,null,[
  new ParamObj('assigned_to', 'string', false, 'Update assigned_to property'),
  new ParamObj('issue_title', 'string', false, 'Update issue_title property'),
  new ParamObj('issue_text', 'string', false, 'Update issue_text property'),
  new ParamObj('created_by', 'string', false, 'Update creadted_by property'),
  new ParamObj('status_text', 'string', false, 'Update status_text property'),
  new ParamObj('open','boolean',false,'Update open property')
],`(Full HTTP body not shown) https://www.davidlau.xyz/api/issues/test {_id:5b9f53c45608ba3c641a507f
created_by:Mr. Robot}`,`{
    "message": "successfully updated"
}`),
new ApiRoute('DELETE','/issues/:project',null,[
  new ParamObj('_id', 'string', true, 'Delete an issue with ObjectId string')
], null, `https://www.davidlau.xyz/api/issues/networking?_id=5b9ffe82a8097c2bf492c364`,
`{"message": "success: deleted 5b9ffe82a8097c2bf492c364"}`)
], 'portfolio/issue-tracker'),
new ApiApp('Personal Library','Create, comment, and delete individual books.',[
  new ApiRoute('GET','/books',[
  new ParamObj('id','Object Id', false, 'Retrieve details of individual book',
  '5bad2c143805922bc41eb1f9',`{
    "comments": [],
    "_id": "5bad2c143805922bc41eb1f9",
    "title": "Harry Potter"
}`),
  new ParamObj('', 'null', false, 'Retreive details of all books',
  null,`[{
          "_id": "5bad2c143805922bc41eb1f9",
          "title": "Harry Potter",
          "commentcount": 0
      },
      {
          "_id": "5bad2c2c3805922bc41eb1fa",
          "title": "Holy Bible",
          "commentcount": 0
      },
      {
          "_id": "5bad2c673805922bc41eb1fb",
          "title": "Night",
          "commentcount": 0
      }
  ]`
)
],null,null),
  new ApiRoute('POST', '/books', null, null, [
    new ParamObj('title', 'string', true, 'Title of book',null,`{
    "comments": [],
    "_id": "5bad2c673805922bc41eb1fb",
    "title": "Night",
    "__v": 0
}`),
]),
  new ApiRoute('POST','/books/:id',null,null,
  [new ParamObj('comment','string',true,
  'Comment, pushed to comments array of book object.')]),
  new ApiRoute('DELETE','/books',[
  new ParamObj('id','string',false,'Delete individual book with id')],
  null,null,'https://www.davidlau.xyz/api/books/5bad2c143805922bc41eb1f9',`{message:"delete successful"}`),
])
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
