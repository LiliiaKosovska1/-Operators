// // const words = [];
// // let alfabet = '';



const obj = {
    one : '1',
    two: '2',
    three: '3',
};
let str = '';

for (let key in obj){
    console.log(key);
    str += obj [key]+ ';';
}

//console.log( str);

// let n = 0;
// let sum = 0;
// while (n <=3){
//     sum +=n;
//     n++;
// }
// console.log({n, sum});

//FOR

let sum = 0;

for (let i = 0; i <=10; i++){
    sum = sum +1;
}
console.log("FOR: sum from 1 to 10: ", sum);

//FOR WITH ARRAY

const nums =[1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < nums.length; i++){
    sum1 = sum1 + nums[i];
}
console.log("For with arr: sum : ", sum1);

//FOR WITH ARRAY

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
let sentence = '';
for (let i = words.length - 1; i >= 0; i--) {
//for (let i = 0; i < words.length; i++) {
  sentence += words[i] + ' ';
}

console.log("For with arr: ", sentence);

//WHILE

let n = 0;
let sum2 = 0;

while (n <= 3){
  console.log(n);
  sum2 += n;
  n++;
}
console.log("While: ", { n, sum2 });

// MATRIX

const matrix = [
[1, 2, 3],
[1, 2, 3],
[1, 2, 3],
]
for ( let i = 0; i < matrix.length; i++){
  for (let j = 0; j< matrix[i].length; j++){
    //console.log(matrix[i][j]);
  }
}

const nums1 = [1, 2, 3];
let n1 = 0;
let sum3 = 0;

while (n1 < nums1.length){
  sum3 += n1;
  n1++;
}
console.log("WHILE sum", sum);

//WHILE WITH ARRAY
const words1 = ['May', 'the', 'Force', 'be', 'with', 'you'];
let sentence1 = '';
let n2 = 0;

while (n2 < words1.length) {
  sentence1 += words1[n2] + ' ';
  n2++;
}
console.log(sentence1);

// WHILE FACTORIAL
let counter1 = 5;
let factorial1 = 1;
while (counter1 > 1) {
  factorial1 *= counter1;
  counter1--;
}
console.log ("!5 = " ,factorial1);

//DO WHILE
let counter = 5;
let factorial = 1;

do {
  factorial *= counter;
  counter--;
} while (counter >= 1)

console.log ("!5 = " ,factorial);

//WHILE 
const species= [
  {animal : 'dog'},
  {animal : 'cat'},
  {animal : 'parrot'}
];
const data = [
  {name : 'Rex'},
  {name : 'Sam'},
  {name : 'Kesha'}
];

function greating( name, animal){
  return "Hello, " + name + " you are a good " + animal + "!" ;
}

for (let i = 0; i < data.length; i++){
  for(let j = 0; j < species.length; j++){
    if (i == j){
      console.log(greating(data[i].name, species[j].animal));
    }
  }
};


