function solution(dartResult) {
  let answer = [0, 0, 0];

  // 숫자 기준으로 문자열 자르기
  const newDartResult = dartResult.split(/(\d+[A-Z]\*?#?)/).filter(Boolean);

  for (let i = 0; i < newDartResult.length; i++) {
    let el = newDartResult[i];
    let num;

    // 10인지 확인
    if (el.includes('10')) num = 10;
    else num = Number(el[0]);
    // S, D, T 중 어떤건지
    if (el.includes('S')) answer[i] += num;
    else if (el.includes('D')) answer[i] += num ** 2;
    else if (el.includes('T')) answer[i] += num ** 3;
    // # 또는 *이 있는지 확인
    if (el.includes('*')) {
      answer[i] = answer[i] * 2;
      answer[i - 1] = answer[i - 1] * 2;
    } else if (el.includes('#')) {
      answer[i] = answer[i] * -1;
    }
  }

  return answer[0] + answer[1] + answer[2];
}

//! 다른 풀이
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { '*': 2, '#': -1, undefined: 1 };

  //* dartResult.split(/(\d+[A-Z]\*?#?)/).filter(Boolean); 과 같은 결과
  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
