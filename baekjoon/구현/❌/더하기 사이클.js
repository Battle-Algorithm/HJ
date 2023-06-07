// 원래 수로 돌아오기 위한 사이클 길이

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const target = num;
let cycle = 0;

// num이 출력될 때까지 반복한다.
while (num !== target || cycle === 0) {
  // 각 자릿수를 더한 결과값
  let sum = Math.floor(num / 10) + (num % 10);
  // 2번째 자릿수의 값 + 더한 결과값의 마지막 수
  num = (num % 10) * 10 + (sum % 10);
  cycle++;
}
console.log(cycle);
