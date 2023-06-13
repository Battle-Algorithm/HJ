// 5개의 단어 생성, 각각의 글자수는 다를 수 있음
// 세로로 읽기
// 빈 글자가 있다면 넘기기

// 출력값: 세로로 읽은 순서대로 공백없이

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const maxLength = Math.max(...input.map((i) => i.length));
let arr = [];
let answer = '';

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(''));
}

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j][i]) answer += arr[j][i];
  }
}
console.log(answer.trim());
