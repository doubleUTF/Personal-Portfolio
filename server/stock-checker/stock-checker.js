'use strict';

var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');

let stockChecker= (app)=>{

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API
apiRoutes(app);

// Start our server and tests! Comment out to disable

// console.log('Running Tests...');
// setTimeout(function () {
//   try {
//     runner.run();
//   } catch(e) {
//     var error = e;
//       console.log('Tests are not valid:');
//       console.log(error);
//     }
//   }, 4000);
//
}


module.exports = stockChecker; //for testing
