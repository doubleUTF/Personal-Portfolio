'use strict';

var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');
const {populateBoard,populateThread, populateReply,threadOneId, clearTest}=require('./tests/seed');

const anonForum=(app)=>{

  //For FCC testing purposes
  fccTestingRoutes(app);

  //Routing for API
  apiRoutes(app);

  // Start our server and tests!
  // console.log('Running Tests...');
  // setTimeout(function () {
  //   try {
  //     runner.run();
  //   } catch(e) {
  //     var error = e;
  //       console.log('Tests are not valid:');
  //       console.log(error);
  //   }
  // }, 3000);

  // Seed some dummy data, delete after first run
  clearTest()
  populateBoard()
  populateThread()
  populateReply()
}

module.exports = anonForum; //for testing
