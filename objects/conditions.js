//square of triangle
const a = 5;
const b = 10;

let result;

result = a > 0 && b > 0
    ? (a * b) / 2
    : "it's not a triangle";
console.log(result);

//Switch case
const color = 5;
switch (color){
    case 1: {
         console.log('Red');
    }
    break;
    case 2: {
        console.log('Blue')
    }
    break;
    case 3: {
         console.log('Yellow');
    }
    break;
    case 4: {
        console.log('Green')
    }
    break;
    default:{
        console.error('Wrong color!')
    }
}

