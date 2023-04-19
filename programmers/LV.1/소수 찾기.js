// 소수 판별 함수
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 num은 소수가 아니다.
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;

  // 2를 제외한 모든 값은
  if (n >= 2) answer++;
  // 1이상 n이하에 있는 소수 개수(1은 소수가 아님)
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) answer++;
  }

  return answer;
}

//! 다른 코드
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
