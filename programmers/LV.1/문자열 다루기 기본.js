function solution(s) {
  // e가 포함된 경우 예외처리하기
  if (s.includes('e')) return false;
  if ((!isNaN(s) && s.length === 4) || (!isNaN(s) && s.length === 6)) return true;
  else return false;
}
