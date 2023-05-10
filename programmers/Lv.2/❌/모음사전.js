//! 다른 코드
function solution(word) {
  const alphas = ['A', 'E', 'I', 'O', 'U'];
  let isFind = false;
  let answer = 0;

  function recursion(depth, make) {
    isFind = make === word;
    answer++;

    if (depth === 5 || isFind) return;
    for (let i = 0; i < 5; i++) {
      if (isFind) break;
      recursion(depth + 1, make + alphas[i]);
    }
  }
  recursion(0, '');

  return answer - 1;
}
