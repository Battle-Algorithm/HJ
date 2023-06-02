//! 다른 코드
// 위치를 찾아주는 함수
function findKey(key) {
  let keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[i].length; j++) {
      //* x, y 좌표로 구하는 포인트
      if (keypad[i][j] === key) return [i, j];
    }
  }
}

function solution(numbers, hand) {
  let answer = '';
  let left = '*'; // 왼손이 누른 값
  let right = '#'; // 오른손이 누른 값

  for (let i of numbers) {
    if (i === 1 || i === 4 || i === 7) {
      answer += 'L';
      left = i;
    } else if (i === 3 || i === 6 || i === 9) {
      answer += 'R';
      right = i;
    } else {
      let l = findKey(left);
      let r = findKey(right);
      let middle = findKey(i);
      let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
      let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);

      if (rr === ll) {
        // 오른손잡이 -> 'R', 왼손잡이 -> 'L'
        hand === 'right' ? ((right = i), (answer += 'R')) : ((left = i), (answer += 'L'));
      } else if (rr > ll) {
        answer += 'L';
        left = i;
      } else {
        answer += 'R';
        right = i;
      }
    }
  }

  return answer;
}
