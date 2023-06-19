// 출력값: 가장 큰 오르막길 크기, 오르막길이 없는 경우 0
//* 반례를 모르겠다.. => 4 \n 10 15 14 30

const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[0].split(' ').map(Number);
let start = arr[0];
let next = arr[1];
let answer = [];

for (let i = 1; i < Number(n); i++) {
  next = arr[i];
  // 평지인 경우
  if (next === arr[i - 1] || next < arr[i - 1]) {
    start = next;
    continue;
  }
  // 현재값이 다음값보다 작을 때: 아래 경우가 될 때까지 다음값을 찾기
  if (start < next) answer.push(next - start);
  // 현재값이 다음값보다 클 때
  else start = next;
}

// console.log(answer);
answer.length === 0 ? console.log(0) : console.log(Math.max(...answer));
