function solution(N, stages) {
  let answer = [];
  let obj = {};

  // 1번 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수
  let notClear = stages.filter((el) => el === 1).length;
  // 1번 스테이지에 도달한 플레이어 수
  let clear = stages.filter((el) => el >= 1).length;
  let player = clear - notClear;
  obj[1] = Math.abs(notClear / clear);

  for (let i = 2; i <= N; i++) {
    if (i !== 2) player -= notClear;
    notClear = stages.filter((el) => el === i).length;
    obj[i] = Math.abs(notClear / player);
  }

  // obj에서 값이 큰 스테이지부터 키를 내림차순 정렬
  // 같이 같으면 오름차순 정렬
  const sortable = Object.entries(obj).sort(([, a], [, b]) => b - a);
  sortable.map((arr) => answer.push(Number(arr[0])));

  return answer;
}

//! 다른 풀이
function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }

  result.sort((a, b) => b[1] - a[1]);

  return result.map((x) => x[0]);
}
