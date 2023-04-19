function solution(strings, n) {
  let answer = [];
  let obj = {};
  let arr = [];

  // 1. n번째 문자열 추출해서 키:[값] 형식으로 객체에 담기
  for (let i = 0; i < strings.length; i++) {
    const el = strings[i][n];
    // 키가 있을 때
    if (obj[el]) obj[el].push(strings[i]);
    else obj[el] = [strings[i]];
  }
  // 2. 키를 기준으로 정렬
  const test = Object.keys(obj).sort();
  for (let i = 0; i < test.length; i++) {
    arr.push(obj[test[i]]);
  }
  // 3. 만약 키의 값의 길이가 2 이상이면, 값을 오름차순으로 정렬
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.length >= 2) {
      el.sort();
      for (let j = 0; j < el.length; j++) {
        answer.push(el[j]);
      }
    } else answer.push(el[0]);
  }

  return answer;
}

//! 다른 풀이
//* localeCompare
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
