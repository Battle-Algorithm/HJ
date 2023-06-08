// A * B * C 결과에 0 ~ 9까지 몇번씩 쓰였는지

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c] = input;
const multi = String(a * b * c);
// 0을 값으로 가지는 길이 10의 배열 생성
let arr = new Array(10).fill(0);

for (let i = 0; i < multi.length; i++) {
  const el = multi[i];
  arr[el] += 1;
}

for (let i = 0; i < 10; i++) {
  console.log(arr[i]);
}
