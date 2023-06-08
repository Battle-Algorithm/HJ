// 문제를 맞은 경우 연속된 O의 개수를 더한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  let result = 0;
  let count = 0; // 0이 연속해서 나온 횟수
  for (let j = 0; j < input[i].length; j++) {
    const el = input[i][j];
    let before = true; // 이전 값이 0인 경우
    if (el === 'O') {
      count += 1;
      result += count;
    } else {
      before = false;
      count = 0;
    }
  }
  console.log(result);
}
