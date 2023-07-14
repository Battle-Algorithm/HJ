// 출력값: 비밀번호를 찾으려는 사이트 주소의 비밀번호

let [numbers, ...list] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let hashTable = {};
// 저장된 사이트 주소 수, 비밀번호를 찾으려는 사이트 주소 수
const [n, m] = numbers.split(' ').map(Number);
// [[주소, 비밀번호], ...]
list = list.map((el) => el.split(' '));

for (let i = 0; i < n; i++) {
  const el = list[i];
  hashTable[el[0]] = el[1];
}

for (let i = n; i < n + m; i++) {
  const findAddress = hashTable[list[i]];
  if (findAddress) console.log(findAddress);
}
