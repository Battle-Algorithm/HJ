// 출력값: 어떤 수를 다른 수 2개의 합으로 나태낼 수 있는 수의 개수

//! 다른 코드
//* 두 포인터(left, right)를 사용하여 접근하는 것이 포인트
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = parseInt(input[0]);
const num = input[1].split(' ').map(Number);
let answer = 0;

// 정렬
num.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  // 초기화
  let left = 0;
  let right = n - 1;
  const key = num[i];

  while (left < right) {
    // left는 index 값이 될 수 없다.
    if (left === i) left++;
    // right는 index 값이 될 수 없다.
    else if (right === i) right--;
    // 합 증가시키기
    else if (key > num[left] + num[right]) left++;
    else if (key === num[left] + num[right]) {
      answer++;
      break;
    }
    // key < num[left] + num[right] => 합 줄이기
    else right--;
  }
}
console.log(answer);
