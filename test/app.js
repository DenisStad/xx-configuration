var xerxes = require('xerxes');
var App = xerxes();

App.load('configuration/load');

if (App.configuration.test.test !== "successful") {
  throw new Error("Configuration test failed");
}
console.log(App.configuration);
console.log("Configuration Test OK");
