// 출력값: list로 주어진 값들이 cards에 있는지, 있다면 1, 아니면 0

let [n, cards, m, list] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let answer = '';
let table = {};

n = Number(n);
m = Number(m);
cards = cards.split(' ').map(Number);
list = list.split(' ').map(Number);

for (let i = 0; i < n; i++) {
  table[cards[i]] = true;
}

for (let i = 0; i < m; i++) {
  if (table[list[i]]) answer += '1 ';
  else answer += '0 ';
}
console.log(answer.trim());
