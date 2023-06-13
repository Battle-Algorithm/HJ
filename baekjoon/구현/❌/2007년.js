// 2007년 1월 1일 월요일
// 31일: 1,3,5,7,8,10,12
// 30일: 4,6,9,11
// 28일: 2

// 출력값: 2007년 x월 y일이 무슨 요일인지

//* week[(y + (1 ~ x월의 전체 일수)) % 7]
// https://velog.io/@eundada064/JS-%EB%B0%B1%EC%A4%8019242007%EB%85%84

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number); // [1, 1]

const month = input[0];
const day = input[1];
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// console.log(week[new Date('2007-' + month + '-' + day).getDay()]);
console.log(week[new Date(2007, month - 1, day).getDay()]);
