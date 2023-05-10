//! 다른 코드
const solution = (dirs) => {
  const set = new Set();
  const [min, max] = [-5, 5]; // x, y좌표의 최소, 최대값
  let x = 0;
  let y = 0;
  let prev = ''; // 바뀌기전 경로

  for (let i = 0; i < dirs.length; i++) {
    prev = '' + x + y;
    if (dirs[i] === 'U' && y + 1 <= max) y++;
    else if (dirs[i] === 'D' && y - 1 >= min) y--;
    else if (dirs[i] === 'R' && x + 1 <= max) x++;
    else if (dirs[i] === 'L' && x - 1 >= min) x--;
    else continue;

    // 양방향 경로저장 [0, 0] => [0, 1] 로 이동 했다면 '0001', '0100'
    set.add(prev + x + y);
    set.add(x + (y + prev));
    console.log(set);
  }

  return set.size / 2;
};
