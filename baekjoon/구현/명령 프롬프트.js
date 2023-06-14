// 출력값: 패턴

const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[0].split('');

if (n === 1) return console.log(input[0]);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] !== arr[j]) arr[j] = '?';
  }
}

console.log(arr.join(''));
