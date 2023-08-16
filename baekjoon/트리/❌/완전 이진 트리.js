// 깊이(N), 노드개수(2의 N제곱 - 1)
// 방문한 빌딩의 번호 순서대로(input)
// 왼 노드 오

//! 다른 코드
let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = [];

input = input.split(' ').map(Number);
N = Number(N);

for (let i = 0; i < N; i++) {
  answer.push([]);
}

function makeTree(arr, level) {
  if (arr.length === 1) {
    answer[level].push(arr[0]);
    return;
  }
  const center = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, center);
  const rightArr = arr.slice(center + 1, arr.length);

  answer[level].push(arr[center]);
  makeTree(leftArr, level + 1);
  makeTree(rightArr, level + 1);
  return;
}

makeTree(input, 0);

console.log(answer.map((v) => v.join(' ')).join('\n'));
