// 36.4점(시간 초과 + 히든 테케 실패)
// 비트 변환 함수
function bitFunc(number) {
  let str = number.toString(2);
  return str.padStart(4, '0');
}

// 비트가 다른 지점을 세는 함수
function countDifference(criteria, target) {
  return target.split('').filter((el, i) => el !== criteria[i]).length;
}

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    let criteria = bitFunc(el);

    while (true) {
      el++;
      let count = countDifference(criteria, bitFunc(el));
      if (count >= 1 && count <= 2) {
        answer.push(el);
        break;
      }
    }
  }

  return answer;
}

//! 다른 코드
//TODO 어떻게 이런 방식으로 접근하는 건지 모르겠다.
function solution(numbers) {
  let answer = [];

  numbers.forEach((v) => {
    // number가 짝수일 때
    if (v % 2 === 0) answer.push(v + 1);
    // number가 홀수일 때
    else {
      let c = 2;
      while (true) {
        if ((v + 1) % (c * 2) === 0) c = c * 2;
        else break;
      }
      answer.push(v + c / 2);
    }
  });

  return answer;
}
