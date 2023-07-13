// 스택에 push하는 순서는 반드시 오름차순(작 => 큰)
// push는 +, pop은 -
// 불가능한 경우 NO
// 출력값: 입력된 수열을 만들기 위해 필요한 연산

//* 문제가 이해가 안돼... => 오름차순에 초점두기! 순열이랑은 상관없다.. 여기서 순열은 순차적인 수를 뜻하는 듯 하다
//! 다른 코드
/* 
let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
n = Number(n);
let arr = [];
let stack = [];
let answer = '';

// arr에 1부터 n까지 추가
for (let i = 0; i < n; i++) {
  arr[i] = i + 1 + '';
}

for (let i = 0; i < n; i++) {
  let count = 1;

  // stack의 마지막 값이 input[i]와 같지 않을 때
  while (count <= n && stack[stack.length - 1] !== input[i]) {
    // stack에 arr의 첫 번째 값 추가
    stack.push(arr.shift());
    answer += '+\n';
    count++;
  }

  // stack의 마지막 값이 input[i]와 같을 때
  if (stack[stack.length - 1] === input[i]) {
    // stack 마지막 값 제거
    stack.pop();
    answer += '-\n';
  }
  // stack의 마지막 값이 input[i]와 같지 않을 때
  else {
    answer = 'NO';
    break;
  }
}
console.log(answer);
*/

let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let stack = [];
let count = 1;
let answer = '';

n = Number(n);
input = input.map(Number);

for (let i = 0; i < n; i++) {
  // 1부터 n까지의 수를 스택에 push => 오름차순 지키기
  while (count <= input[i]) {
    stack.push(count);
    count++;
    answer += '+\n';
  }

  // 입력값이 count보다 작을 때 stack의 마지막 값 pop
  const popItem = stack.pop();
  // stack의 마지막 값이 입력값과 다를 때
  if (popItem !== input[i]) {
    answer = 'NO';
    break;
  }
  // stack의 마지막 값이 입력값과 같을 때
  answer += '-\n';
}
console.log(answer);
