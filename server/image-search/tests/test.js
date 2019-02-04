var chai = require('chai');
var chaiHttp= require('chai-http');
var assert=chai.assert;
var expect=chai.expect;

const rootPath='http://localhost:3000';
const imgSearchURL='/api/image-search';
const resultsURL='/api/image-search/latest';
const cx='013439926645284855395:pscgjpfr23e';

chai.use(chaiHttp);

suite('Functional Tests',()=>{
  test('Image search endpoint', (done)=>{
    chai.request(rootPath)
      .get(imgSearchURL)
      .query({q:'cat', key:process.env.GOOGLE_CSE_API_KEY, })
      .end((err,res)=>{
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        console.log(res)
        assert.isArray(res)
        assert.lengthOf(res,10,'array has a length of 10')
        done();
      })
  })
})

// Latest 10 results endpoint
