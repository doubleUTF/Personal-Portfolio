'use strict';
const https=require('https');
const querystring=require('querystring');
const mysql= require('mysql');

const connectionObject={
host:process.env.MYSQL_HOST,
user:process.env.MYSQL_USER,
password:process.env.MYSQL_PASSWORD,
database:process.env.MYSQL_USER
}

let imageSearch=(app)=>{
  app.route('/api/image-search')
    .get((req,res)=>{
      const googURL='https://www.googleapis.com/customsearch/v1';
      const cx='013439926645284855395:pscgjpfr23e';
      let searchQuery=req.query.q;
      let offset=req.query.offset ? req.query.offset : 1;
      let qString=querystring.stringify({q:searchQuery,cx,key:process.env.GOOGLE_CSE_API_KEY, start:offset})
      let URL=googURL+'?'+qString;
      https.get(URL,(response)=>{
        let body='';
        response.on('data',(data)=>{
          body+=data;
        })
        response.on('end',()=>{
          const parsedData= JSON.parse(body);
          let transformed=extractGCE(parsedData)
          res.json(transformed);
        })
      })
      const connection=mysql.createConnection(connectionObject)
      connection.connect();
      connection.query(`INSERT INTO ImageSearch VALUES (${connection.escape(searchQuery)},
      '${new Date().toISOString().slice(0,19)}')`,
      (error,results,fields)=>{
        if (error) {
          res.json(error)
        };
      })
      connection.end();
  })

  app.route('/api/image-search/latest')
    .get((req,res)=>{
      const connection=mysql.createConnection(connectionObject)
      connection.connect();
      connection.query(`select * from ImageSearch order by 'timestamp' desc LIMIT 10`,(error,results,fields)=>{
        if (error) {
          res.json(error)
        };
        res.json(results)
      })
      connection.end();
  })
}

function extractGCE(json){
  let result= json.items.map(obj=>{
    let imgSrc= obj.pagemap ? (obj.pagemap.cse_image ? obj.pagemap.cse_image[0].src : null) : null;
    let thumbnail= obj.pagemap ? (obj.pagemap.cse_thumbnail ? obj.pagemap.cse_thumbnail[0].src : null) : null ;
    let context= obj.title ? obj.title : 'none';
    return {imgSrc,thumbnail,context}
  })
  return result;
}

module.exports=imageSearch;
