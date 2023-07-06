// 거울: 거울냥이의 하단, 냥이가 죽어도 거울은 남음, 거울 있으면 빔 통과하지 못함
// (1,1)부터 시작
// 빔은 상하좌우 발사
// 거울냥이가 사라지면 자기 차례와도 빔 쏘지 못함

// 입력값: 거울냥이 마릿수, 빔 쏘는 순서대로 거울냥이 위치
// 출력값: 살아남은 거울냥이 갯수

//! 다른 코드
let [n, ...cats] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let [n, ...cats] = `7\n1 2\n2 1\n2 3\n2 5\n3 4\n4 1\n4 2`.split('\n'); // [ '1 2', '2 1', '2 3', '2 5', '3 4', '4 1', '4 2' ]
n = Number(n);
cats = cats.map((el) => el.split(' ')).map((el) => el.map(Number));

let aliveCatCount = 0;
const map = {};
// 키: 행, 값: [열, false(거울냥이) 또는 true(거울)]
for (let [y, x] of cats) {
  // 거울냥이
  if (map[y] === undefined) map[y] = [];
  // 거울
  if (map[y + 1] === undefined) map[y + 1] = [];

  map[y].push([x, false]);
  map[y + 1].push([x, true]);
}

let shouldKill = false;

for (let y in map) {
  shouldKill = false;
  map[y].sort((a, b) => a[0] - b[0]);

  for (let [x, isMirror] of map[y]) {
    // 리셋
    if (isMirror) {
      shouldKill = false;
      continue;
    }
    // 거울 이후 첫 번째로 만난 거울냥이++ or 거울냥이
    if (shouldKill === false) {
      shouldKill = true;
      aliveCatCount += 1;
    }
  }
}

console.log(aliveCatCount);
