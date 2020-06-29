
console.log("Hello NodeJ5");


var name = "Christian";
var lastName = "Mercado-Astarita";
var age = 29;
var found = false;
var average = 12.3211;


// print numbers from 3 to 12, except the 9
for(let i=3; i < 13; i++){
    console.log(i);
    if(i !=9){
        console.log(i);
    }
};


// arrays
var names = [];
names.push("Terri");
names.push("Jonathan");
names.push("Christian");
names.push("Nora");
names.push("Briun");
names.push("Shay");

console.log(names[0]); // first element

for(var j = names.length; j >= 0; j--){
    console.log(names[j]);
}


// terminal
// node filename | node server.js
// win: clear
// win: cls
// win:CMDER

