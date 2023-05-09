//! 다른 코드
function solution(people, limit) {
  people.sort((a, b) => a - b);

  let i = 0;
  for (j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }

  return people.length - i;
}
