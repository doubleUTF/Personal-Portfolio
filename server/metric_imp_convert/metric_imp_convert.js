var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var expect      = require('chai').expect;
var runner            = require('./test-runner');


module.exports=(app)=>{


  //For FCC testing purposes
  fccTestingRoutes(app);

  //Routing for API
  apiRoutes(app);

  // Comment out to disable test
  // console.log('Running Tests...');
  // setTimeout(function () {
  //   try {
  //     runner.run();
  //   } catch(e) {
  //     var error = e;
  //       console.log('Tests are not valid:');
  //       console.log(error);
  //   }
  // }, 1500);

}
