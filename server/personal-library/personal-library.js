'use strict';

var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');

let personalLibrary=(app)=>{
  //For FCC testing purposes
  fccTestingRoutes(app);

  //Routing for API
  apiRoutes(app);

  // Comment out tests during production
  console.log('Running Tests...');
  setTimeout(function () {
    try {
      runner.run();
    } catch(e) {
      var error = e;
        console.log('Tests are not valid:');
        console.log(error);
    }
    }, 1500);
}

module.exports = personalLibrary; //for unit/functional testing
