// 출력값: (역순 + 역순) 한 값을 역순

const [x, y] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let reverseX = Number(x.split('').reverse().join(''));
let reverseY = Number(y.split('').reverse().join(''));
let sum = reverseX + reverseY + '';

console.log(Number(sum.split('').reverse().join('')));
