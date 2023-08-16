//! 다른 코드
let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let tree = {};
let result = '';

n = Number(n);

for (let i = 0; i < n; i++) {
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

// 전위순회 (루트 => 왼 => 오)
function preOrder(node) {
  if (node === '.') return;
  const [l, r] = tree[node];
  result += node;
  preOrder(l);
  preOrder(r);
}

// 중위순회 (왼 => 루트 => 오)
function inOrder(node) {
  if (node === '.') return;
  const [l, r] = tree[node];
  inOrder(l);
  result += node;
  inOrder(r);
}

// 후위순회 (왼 => 오 => 루트)
function postOrder(node) {
  if (node === '.') return;
  const [l, r] = tree[node];
  postOrder(l);
  postOrder(r);
  result += node;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
postOrder('A');

console.log(result);
