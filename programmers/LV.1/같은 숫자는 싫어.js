function solution(arr) {
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    // 1. 일단 배열에 추가
    answer.push(arr[i]);
    let length = answer.length - 1;
    // 2. answer 마지막 값이랑 (마지막 - 1)번째 값이 같으면 마지막 값 제거
    if (answer[length] === answer[length - 1]) answer.pop();
    // 2-1. 그렇지 않으면 진행
  }

  return answer;
}

//! 다른 풀이
function solution(arr) {
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

//! 다른 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
