//! 다른 코드
function solution(n, lost, reserve) {
  // 체육복을 모두 1벌씩 가지고 있도록 설정 (= 1로 채워진 1차원 배열 생성)
  let result = new Array(n).fill(1);
  // 체육복을 도난당한 학생의 경우 0으로 만들어주기
  for (let i = 0; i < lost.length; i++) {
    result[lost[i] - 1] = 0;
  }
  // 여벌의 체육복을 가져온 학생의 경우 +1
  for (let i = 0; i < reserve.length; i++) {
    result[reserve[i] - 1] += 1;
  }
  //! 뒷 번호한테 체육복을 빌려올 수 있는 경우
  for (let i = 0; i < n - 1; i++) {
    if ((result[i] === 0 && result[i + 1] === 2) || (result[i] === 2 && result[i + 1] === 0)) {
      result[i] = 1;
      result[i + 1] = 1;
    }
  }

  return result.filter((el) => el >= 1).length;
}
