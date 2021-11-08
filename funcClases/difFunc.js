const square = (a) => a * a;

function square2(a){
    return a * a;
}
//3 
const square3 = function(a){
    return a * a;
}
//
const square4 = function(cb){
    return cb(a);
}
console.log(square3 (10));