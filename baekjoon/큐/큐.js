let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let queue = [];
//* 각각의 경우마다 consol.log를 출력하는 경우 시간 초과 오류남
let answer = '';

input = input.map((el) => el.split(' '));

for (let i = 0; i < input.length; i++) {
  let el = input[i][0];

  if (el === 'push') {
    queue.push(input[i][1]);
  } else if (el === 'pop') {
    if (queue.length > 0) answer += queue.shift() + '\n';
    else answer += -1 + '\n';
  } else if (el === 'size') {
    answer += queue.length + '\n';
  } else if (el === 'empty') {
    if (queue.length > 0) answer += 0 + '\n';
    else answer += 1 + '\n';
  } else if (el === 'front') {
    if (queue.length > 0) answer += queue[0] + '\n';
    else answer += -1 + '\n';
  } else if (el === 'back') {
    if (queue.length > 0) answer += queue[queue.length - 1] + '\n';
    else answer += -1 + '\n';
  }
}
console.log(answer);
