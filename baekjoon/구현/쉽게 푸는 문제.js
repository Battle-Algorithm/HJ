// 출력값: start번째 값 ~ end번째 값까지 더하기

const [start, end] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let arr = [];

for (let i = 1; i <= end; i++) {
  for (let j = 1; j <= i; j++) {
    arr.push(i);
    if (arr.length >= end) break;
  }
  if (arr.length >= end) break;
}

arr = arr.slice(start - 1, end);
console.log(arr.reduce((acc, cur) => acc + cur));
