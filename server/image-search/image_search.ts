'use strict';
const https=require('https');
const querystring=require('querystring');

let imageSearch=(app)=>{
  app.route('/api/image-search')
    .get((req,res)=>{
      const googURL='https://www.googleapis.com/customsearch/v1';
      const cx='013439926645284855395:pscgjpfr23e';
      let searchQuery=req.query.q;
      let qString=querystring.stringify({q:searchQuery,cx,key:process.env.GOOGLE_CSE_API_KEY})
      let URL=googURL+'?'+qString;
      console.log(URL);
      https.get(URL,(response)=>{
        let body='';
        response.on('data',(data)=>{
          body+=data;
        })
        response.on('end',()=>{
          const parsedData= JSON.parse(body);
          res.json(parsedData)
        })
      })
  })

  app.route('/api/image-search/latest')
    .get((req,res)=>{

  })
}

module.exports=imageSearch;
