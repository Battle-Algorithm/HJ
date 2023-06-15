// k층 n호: k-1층 1호 ~ n호까지 모두 더한 값 or k-1층 n호 + k층 n-1호

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); // ['2', '1', '3', '2', '3']
const T = Number(input.shift()); // 2

for (let i = 0; i < T; i++) {
  const k = Number(input.shift()); // 1
  const n = Number(input.shift()); // 3

  // 각 방당 인원수를 저장할 2차원 배열 선언
  const house = Array.from(Array(k + 1), () => Array(n).fill(0));
  // 0층 (0층의 i호에는 i명이 산다.)
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  // 1 ~ k층 (k층 n호에는 k-1층 n호 + k층 n-1호만큼 산다.)
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }

  // k층 n호의 인원수 출력
  console.log(house[k][n]);
}
