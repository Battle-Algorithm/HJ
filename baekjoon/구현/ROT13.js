// 알파벳만 변환 가능
// 출력값: 암호화한 내용

const input = require('fs').readFileSync('/dev/stdin').toString().split('');
let answer = '';

// 해당 값의 아스키코드 + 13 (A: 65, Z: 90, a: 97, z: 122)
for (let i = 0; i < input.length; i++) {
  let el = input[i];
  let before = el.charCodeAt();
  let after = before + 13;
  let upperCase = before >= 65 && before <= 90;
  let lowerCase = before >= 97 && before <= 122;

  // 숫자이거나 공백이면 그대로 출력
  if (el === ' ' || !isNaN(el)) answer += el;
  // 그 외는 모두 변환
  else if ((upperCase && after <= 90) || (lowerCase && after <= 122)) {
    answer += String.fromCharCode(after);
  } else answer += String.fromCharCode(after - 26);
}
console.log(answer);
