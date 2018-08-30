import {API, paramObj, apiApp} from './api.model'

export class ApiService {
//   api_list:API[]=[
//     new API('Timestamp','GET','Basic timestamp microservice.',
//     '/timestamp',[
//       new paramObj('milliseconds','number', 'Integer in milliseconds',
//     '1035848596111',`{
//      "unix": 1035848596111,
//      "utc": "Mon, 28 Oct 2002 23:43:16 GMT"}`),
//     new paramObj('dateString','date string',  'ISO-8601 Compliant date string',
//   '2018-8-20', `{
//       "unix": 1534748400000,
//       "utc": "Mon, 20 Aug 2018 07:00:00 GMT"
//   }`),
// new paramObj('/','string','No parameter; returns the current time.','',`
// {
//     "unix": 1534901307250,
//     "utc": "Wed, 22 Aug 2018 01:28:27 GMT"
// }`)
//   ]),
//     new API('Whoami', 'GET', 'Retrieve header information from requesting client.',
//   '/whoami',null,null,`
//   {"ipaddress":"192.68.1.1","language":"en-US,en;q=0.9,zh-HK;q=0.8,zh;q=0.7",
//   "software":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"}`
// ),
// new API('URL Shortener','GET', 'Enter a lengthy URL and returns a shortened version. Expires in 24 hours.',
// '/shorturl',[
//   new paramObj('/new/:URL', 'URL String', 'Pass in a full URL string and returns an object containing original URL and a randomly generated six digit alphanumeric character string representing the shortened URL. Expires in 24 hours.',
//   'new/http://www.google.com', `{
//     "originalUrl": "http://www.google.com",
//     "shortUrl": "ZT2a5p"
// }`), new paramObj(':shortURL', 'String', 'Six digit alphanumeric characters derived from /new/:URL query. Will fail if short URL is does not exist in database.',
// 'ZT2a5p', 'Redirects to http://www.google.com')
// ])
//   ];
//
//   getApis(){
//     return this.api_list;
//   }
  constructor() { }
}
