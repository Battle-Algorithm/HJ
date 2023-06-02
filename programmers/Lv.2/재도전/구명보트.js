function solution(people, limit) {
  let answer = 0;
  let startIdx = 0;
  let endIdx = people.length - 1;

  people.sort((a, b) => a - b);

  while (startIdx <= endIdx) {
    if (people[startIdx] + people[endIdx] <= limit) startIdx++;
    endIdx--;
    answer++;
  }

  return answer;
}

//! 다른 코드
function solution(people, limit) {
  people.sort((a, b) => a - b);

  let i = 0;
  for (j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }

  return people.length - i;
}
