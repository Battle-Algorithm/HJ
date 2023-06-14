// 자심을 제외한 모든 약수들의 합과 같을 때 완전수

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.pop();

// 1. 약수 구하기
for (let i = 0; i < input.length; i++) {
  let arr = [];
  for (let j = 1; j <= input[i]; j++) {
    if (input[i] % j === 0) arr.push(j);
  }

  let criteria = arr.pop();
  // 2. 자신을 제외하고 모든 약수 더하기
  let sum = arr.reduce((acc, cur) => acc + cur);
  // 3. 자신과 2의 값이 같은지 확인
  if (criteria === sum) {
    let string = '';
    for (let k = 0; k < arr.length; k++) {
      if (k === arr.length - 1) string += arr[k];
      else string += arr[k] + ' + ';
    }
    console.log(sum + ' = ' + string);
  } else console.log(criteria + ' is NOT perfect.');
}
