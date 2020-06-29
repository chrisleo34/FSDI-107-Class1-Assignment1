// import the module into the file
var mathLib = require('./myMath');

function init(){
    console.log("Intro");
    
    
    var res = mathLib.sum(21, 21);
    console.log("Result: " +res);
}



init();