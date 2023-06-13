// nCk(이항 계수)
// k < 0: 0
// k > n: 0
// 0 <= k <= n: n!/(k!(n-k)!)

const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 팩토리얼을 구하는 함수
function factorial(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
  }
  return answer;
}

// 이항 계수를 구하는 함수
function main(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
console.log(main(n, k));
