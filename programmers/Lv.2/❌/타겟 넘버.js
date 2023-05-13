function solution(numbers, target) {
  let answer = 0; // 모든 방법의 수

  function recursion(sum, count) {
    // 종료 조건: numbers.length랑 같을 때(마지막 depth까지 확인 했을 때)
    if (count === numbers.length) {
      if (sum === target) answer += 1;
    }
    // 실행 조건: numbers[i]를 계속 실행하면서 이전 값에서 더하고 빼기
    else {
      let el = numbers[count];
      recursion(sum + el, count + 1);
      recursion(sum - el, count + 1);
    }
  }
  recursion(0, 0);

  return answer;
}
