//! 다른 코드
function solution(elements) {
  //* concat을 사용해서 모든 경우의 수를 미리 만들기
  const circular = elements.concat(elements);
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }

  return set.size;
}
