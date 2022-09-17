// Arrays
var array = new Array
array[0] = "User";
array[1] = 2;
array[2] = function name {
    console.log ("Hello" + name)
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = ["User", "Ikuerowo", "Kemi"];
//console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log ("Hello" + names[i]);
}
names [100] = "Kemi";
for (var i = 0; i < names.length; i++){
    console.log ("Hello "+ names [i]);
}
var name2 = ["User", "Ikuerowo", "Kemi"];

var myObj = {
    name: "User",
    course: "HTML/CSS/JS"
    platform:"Practice 7"
};
for (var prop in myObj){
    console.log (prop + ":" + myObj[[prop]]);
}


for (var name in name2){
    console.log ("Hello" + names2[name]);
}
names2.greeting = "HI!";
for (var name in names2 ){
    console.log ("Hello" + names2[name]);
}
