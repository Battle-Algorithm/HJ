// 중간에 버섯 먹는걸 중단했으면 이후에 나온 버섯은 모두 먹을 수 없음
// 최대한 100에 점수를 가깝게 만드는 것이 목표
// 10개의 줄에 각각의 버섯 점수 주어짐
// 만약 100에 가까운 수가 2개면 큰 값 선택

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let answer = 0;
let beforeValue = 0;

for (let i = 0; i < input.length; i++) {
  answer += input[i];
  if (answer >= 100) {
    beforeValue = input[i];
    break;
  }
}

// 두 값이 같으면 큰 수 출력
if (Math.abs(answer - 100) > Math.abs(answer - beforeValue - 100)) {
  console.log(answer - beforeValue);
} else console.log(answer);
