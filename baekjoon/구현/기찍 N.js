const input = require('fs').readFileSync('/dev/stdin').toString();

const N = Number(input);

let str = '';
for (let i = N; i >= 1; i--) {
  str += i + '\n';
}
console.log(str);
