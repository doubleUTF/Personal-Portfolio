import {API} from './api.model'

export class ApiService {
  api_list:API[]=[
    new API('Timestamp','GET','Basic timestamp microservice.',
    '/timestamp/:date_string?',[{millisecond:1035848596111,result:`{
    "unix": 1035848596111,
    "utc": "Mon, 28 Oct 2002 23:43:16 GMT"
}`},{dateString:'2018-8-20',result:`{
    "unix": 1534748400000,
    "utc": "Mon, 20 Aug 2018 07:00:00 GMT"
}`}]),
    new API('Whoami', 'GET', 'Retrieve header information from requesting client',
  '/whoami',[{none:`{"ipaddress":"24.6.96.32","language":"en-US,en;q=0.9,zh-HK;q=0.8,zh;q=0.7",
  "software":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"}`}])
  ];

  getApis(){
    return this.api_list;
  }
  constructor() { }
}
