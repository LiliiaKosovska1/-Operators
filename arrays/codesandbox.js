// // const items = [
// //     { a: 1, b: 3 },
// //     { a: 3, b: 3 },
// //     { a: 6, b: 3 },
// //     { a: 10, b: 10 },
// //   ];

// // const filtered = items.reduce((acc, item) => {
// //     if (item.a >= 3) {
// //       acc.push({
// //         ...item,
// //         sum: item.a + item.b,
// //       })
// //     }
// //     return acc;
// //   }, []);
   
// //   console.log('filtered array ', filtered);

// // function buildStringUsingIndex(array, index) {
// //     let res = ""; 
// //     for (let i = 0; i < array.length; i++) { 
// //       if (index >= array[i].length) { 
// //         res += " ";
// //       } 
// //       res += array[i].charAt(index); 
// //     } 
// //     return console.log(res);
// //   }
// const array = ["osmos ", "uterque ", "water ", "crop", "&", "swap", "cat", "brew", "Esmeralda"]

// let changed = [];
//   for (let i = 0; i < array.length; i++) {
//     changed += array[i].toUpperCase();
//   };

// //console.log(changed);

// const paragraph = 'Thr5e quic9k bro1wn fo1x jumps o1ver the la1zy dog. It ba1rked.';
// const regex = /[1-9]/;
// const found = paragraph.match(regex);
 
// console.log(found);
const letter = 'a';
const string = 'The quick brown fox jumps over the lazy dog. It barked.';
//function calculateLetters(string) {
const regex = /[t]/g;
const found = string.match(regex);
//console.log(found);
let amount = found.length + 1;
//return amount;
//}
console.log(amount);