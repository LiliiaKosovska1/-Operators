let emptyArray = [];

const numsArray = [1, 2, 3, 4];

const nums = new Array();
nums.push(1);
nums.push(2);
nums.push(3);
nums.push(4);


const strArray = ['a', 'b', 'c'];

function swap(arr, i, j) {
    // change places of array elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
   
  swap(strArray, 2,0);

  console.log(strArray);

nums[4] = 100;
nums[0] = 0;

delete nums[3];

nums.push({b : 10});

nums[nums.length] = 7;
//console.log(nums);
//console.log(nums.length);

nums.pop(); //видаляє з кінця
//console.log(nums);

nums.unshift('hello');
//console.log(nums);
 const firstEl = nums.shift();

 //console.log(firstEl);

//console.log(nums);

 const ar1 = [1, 2];
 const ar2 = [3, 4];
 const result = ar1.concat(ar2);
 //console.log(result);
 const extraFirstNums = [101, 100, 1, 2, 3, 4];
 extraFirstNums.unshift();
 extraFirstNums.unshift();
 //console.log(extraFirstNums);

 const extraLastNums = [1, 2, 3, 4, 100, 101];
 // write code just down below
 extraLastNums.pop();
 extraLastNums.pop();
 //console.log(extraLastNums);
