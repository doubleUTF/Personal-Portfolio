'use strict';
const https=require('https');
const querystring=require('querystring');
const mysql= require('mysql');

let imageSearch=(app)=>{
  app.route('/api/image-search')
    .get((req,res)=>{
      const googURL='https://www.googleapis.com/customsearch/v1';
      const cx='013439926645284855395:pscgjpfr23e';
      let searchQuery=req.query.q;
      let qString=querystring.stringify({q:searchQuery,cx,key:process.env.GOOGLE_CSE_API_KEY})
      let URL=googURL+'?'+qString;
      // https.get(URL,(response)=>{
      //   let body='';
      //   response.on('data',(data)=>{
      //     body+=data;
      //   })
      //   response.on('end',()=>{
      //     const parsedData= JSON.parse(body);
      //     res.json(parsedData)
      //   })
      // })
      const connection=mysql.createConnection({
        host:process.env.MYSQL_HOST,
        user:process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_USER
      })
      connection.connect();
      connection.query(`INSERT INTO ImageSearch VALUES (${connection.escape(searchQuery)},
      '${new Date().toISOString().slice(0,19)}')`,
      (error,results,fields)=>{
        if (error) {
          res.json(error)
          throw error;
        };
        res.json(results)
      })
      connection.end();
  })

  app.route('/api/image-search/latest')
    .get((req,res)=>{
  })
}

module.exports=imageSearch;
