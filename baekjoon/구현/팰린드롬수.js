// 각 줄마다 주어진 수가 뒤에서 읽어도 똑같으면 yes, 아니면 no

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let el = input[i];
  if (el.split('').reverse().join('') === el) console.log('yes');
  else console.log('no');
}
