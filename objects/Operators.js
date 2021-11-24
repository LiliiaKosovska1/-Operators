let a = 10;
const b = 5;
const sum = a + b;

console.log(a + b);
console.log("a + b= ", sum);
 
a += b;
console.log(a);

a-=b;
console.log(a);

a*=b;
console.log(a);

a/=b;
console.log(a);

a%=b;
console.log('a%=b ',a);

a**=b;
console.log('a**=b ',a);

console.log("a == 0",a == 0);
console.log(a > 9);
console.log(a >= 10);
console.log(a < 100);
console.log(a !== 0);

//ternary

const MATH_PI = 3.14;
const radius = 10;

let result;

result = radius !== 0 
    ? MATH_PI * (radius * radius)
    :"radius can not be equal to zero";

console.log(result);

const userName ="Mark";

const discount = userName === "Mark"
    ? "30%"
    :"0%";

console.log("Your discount is " + discount);

const res = radius !== 0 && MATH_PI === 3.14
    ? MATH_PI * (radius * radius)
    :"Radius can not be equal to zero and MATH_PI should be correct";
console.log(res);
const checkRadius = radius >=10 || radius <100 ?"Ok" :"Not Ok";

console.log(checkRadius);

// IF ELSE
const c = 10;
const d = 20;
const e = 25;

if (c === 10){
    console.log('c is equal 10');
}
if (d > 19){
    console.log("d is bigger than 19");
} else {
    console.log("d is smaller than 19");
}
if (e > 1){
    console.log("e is bigger than 1");
} else if (e == 20){
    console.log("e is equal 20");
}else {
    console.log('e is smaller than 1');
}

//Switch case
const day = 5;
switch (day){
    case 1: {
         console.log('Monday');
    }
    break;
    case 2: {
        console.log('Tuesday')
    }
    break;
    case 3: {
        console.log('Wednesday');
   }
   break;
   case 4: {
         console.log('Thursday');
    }
    break;
    case 5: {
        console.log('Friday');
   }
   break;
   case 6: {
    console.log('Saturday');
    }
    break;
    case 7: {
        console.log('Sunday');
    }
    break;
    default:{
        console.error('Wrong number!')
    }
}
