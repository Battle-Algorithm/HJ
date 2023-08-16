// 이미 방문한 국가 거쳐가도 됨
// 출력값: 모든 국가(N개)를 여행하기 위해 타야하는 비행기 종류의 최소 개수 === N - 1

//* 문제 이해가 안된다..

//! 다른 코드
const [T, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
let result = [];

for (let i = 0; i < T; i++) {
  let N = input[0][0]; // 국가 수
  let M = input[0][1]; // 비행기 종류
  input.shift();

  for (let j = 0; j < M; j++) input.shift();

  result.push(N - 1);
}

console.log(result.join('\n'));
