const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let star = '';
  for (let j = 1; j <= N - i; j++) {
    star += ' ';
  }
  for (let k = 1; k <= i; k++) {
    star += '*';
  }
  console.log(star);
}
