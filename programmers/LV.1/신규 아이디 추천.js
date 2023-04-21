//* [^]: 부정
//* ^: 문자열의 시작(정규식 시작에서 사용)
//* $: 문자열의 끝(정규식 끝에서 사용)
//* []: 대괄호 안에 포함된 문자 중 하나와 일치함
//* -: 범위
//* \: 이스케이프(\뒤에 오는 문자열을 문자로 사용한다는 의미)
//* \.: 마침표 자체 검색할 수 있게끔
//* g: 전역 검색
//* +: 앞의 문자가 하나 이상 반복될 때 일치함
//* |: or
function solution(new_id) {
  new_id = new_id.toLowerCase(); // 1
  new_id = new_id.replace(/[^a-z0-9-_.]/g, ''); // 2
  new_id = new_id.replace(/\.+/g, '.'); // 3
  new_id = new_id.replace(/^\.|\.$/g, ''); // 4
  if (new_id === '') new_id = new_id.replace('', 'a'); // 5
  if (new_id.length >= 16) new_id = new_id.slice(0, 15); // 6
  if (new_id.slice(-1) === '.') new_id = new_id.slice(0, new_id.length - 1); // 6
  // 7
  while (new_id.length <= 2) {
    new_id += new_id[new_id.length - 1];
  }

  return new_id;
}

//! 다른 풀이
const solution = (new_id) => {
  const id = new_id
    .toLowerCase() // 1
    .replace(/[^\w\d-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .padEnd(1, 'a') // 5
    .slice(0, 15) // 6
    .replace(/\.$/g, ''); // 6

  return id.padEnd(3, id[id.length - 1]); // 7
};
