// 출력값: 모든 트럭이 다리를 건너는 최단시간

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const queue = [];
// 트럭수, 다리 길이, 다리 최대하중
let [n, w, l] = input[0].split(' ').map(Number);
// i번째 트럭 무게
let truckWeight = input[1].split(' ').map(Number);
let answer = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
  while (true) {
    // queue의 길이가 다리 길이랑 같을 때
    if (queue.length === w) {
      // sum - queue에서 가장 먼저 들어온 값
      sum -= queue[0];
      // queue에 가장 먼저 추가했던 트럭 무게 제거
      queue.shift();
    }
    // 다리 최대하중보다 작을 때 while문 빠져나오기
    if (sum + truckWeight[i] <= l) break;

    // 다리 최대하중보다 클 때 => 0 push, while문 돌기
    queue.push(0);
    answer++;
  }
  // 다리 최대하중보다 작을 때
  queue.push(truckWeight[i]);
  sum += truckWeight[i];
  answer++;
}
console.log((answer += w));
