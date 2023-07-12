let [T, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let stack = [];
let flag = false;

for (let i = 0; i < Number(T); i++) {
  // 초기화
  stack = [];
  flag = false;

  for (let j = 0; j < data[i].length; j++) {
    let el = data[i][j];

    if (el === '(') stack.push(el);
    else if (el === ')' && stack.length > 0) stack.pop();
    else {
      console.log('NO');
      flag = true;
      break;
    }
  }

  if (!flag) console.log(stack.length > 0 ? 'NO' : 'YES');
}
