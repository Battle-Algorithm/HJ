function solution(d, budget) {
  let answer = 0; // 지원을 해줄 수 있는 최대 부서 개수
  let sum = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) answer++;
  }

  return answer;
}

//! 다른 코드
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      // + 뒤의 결과가 true이면 1, false이면 0
      return count + ((budget -= price) >= 0);
    }, 0);
}
