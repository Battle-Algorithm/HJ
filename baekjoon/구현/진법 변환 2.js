// 출력값: 10진법 수인 n을 B진법으로

const [n, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

console.log(n.toString(b).toUpperCase());
