// 가장 많이 사용된 알파벳 대문자로 출력
// 가장 많이 사용된 알파벳이 여러개인 경우 ? 출력
// 대소문자 구분 X

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const upperInput = input[0].toUpperCase();
let max = 0;
let result;
let obj = {};

// 단어를 키로 횟수를 값으로 가지는 객체 생성
for (let i = 0; i < upperInput.length; i++) {
  if (!obj[upperInput[i]]) obj[upperInput[i]] = 1;
  else obj[upperInput[i]] += 1;
}

for (let key in obj) {
  const value = obj[key];
  if (value > max) {
    max = value;
    result = key;
  } else if (value === max) result = '?';
}

console.log(result);
