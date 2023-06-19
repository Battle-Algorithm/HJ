// 출력값: 가장 술 소비가 많은 학교 이름
// 입력값: 테스트 케이스 숫자, 학교 숫자, 학교 이름이랑 소비한 술 양

const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 1;
let obj = {};

for (let i = 0; i < input.length; i++) {
  let el = input[i];

  if (!isNaN(el)) {
    count = Number(el);
    obj = {};
  } else {
    let [name, amount] = el.split(' ');
    obj[name] = amount;
  }

  if (Object.keys(obj).length === count) {
    let max = Math.max(...Object.values(obj).map(Number)).toString();
    console.log(Object.keys(obj).find((key) => obj[key] === max));
  }
}
