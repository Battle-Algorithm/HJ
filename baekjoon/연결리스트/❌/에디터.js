// 소문자만, 600000글자까지
// 커서 위치: 문장 맨 앞, 문장 맨 뒤, 문자 사이
// 맨 처음에 커서는 맨 뒤에 위치
// L: 왼쪽으로 한칸
// D: 오른쪽으로 한칸
// B: 왼쪽에 있는 문자 삭제
// P$: $를 커서 왼쪽에 추가

// 입력값: 문자열, 명령어 개수, 명령어들
// 출력값: 입력값에 모든 명령어 수행한 후의 결과값

//! 다른 코드
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// 예를 들어 A, B 사이에 C를 넣는다고 가정할 때,
function insertAfter(node, value) {
  // 새로 추가할 노드 생성(C)
  const newNode = new Node(value);
  // 새로운 노드의 이전 노드는 현재 노드(A)
  newNode.prev = node;
  // 새로운 노드의 다음 노드는 현재 노드의 다음 노드(B)
  newNode.next = node.next;
  // 중간에 삽입하는 경우
  if (node.next) {
    // B.prev는 새로운 노드
    node.next.prev = newNode;
  }
  // 끝에 삽입하는 경우 새로 추가한 노드를 다음 노드로 변경
  node.next = newNode;
  // 새로 추가한 노드 리턴
  return newNode;
}

// 예를 들어 A, C, B가 연결되어 있다고 가정할 때
function deleteNode(node) {
  // C.prev는 A
  const prevNode = node.prev;
  // C.next는 B
  const nextNode = node.next;
  if (prevNode) {
    // A.next는 B
    prevNode.next = nextNode;
  }
  if (nextNode) {
    // B.prev는 A
    nextNode.prev = prevNode;
  }
}

let [str, n, ...list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
list = list.map((el) => el.split(' '));

// 연결 리스트의 head에 더미 노드 할당
const head = new Node(null);
let cursor = head;

for (let i = 0; i < str.length; i++) {
  cursor = insertAfter(cursor, str[i]);
}

for (let i = 0; i < n; i++) {
  let el = list[i];
  if (el[0] === 'P') {
    cursor = insertAfter(cursor, el[1]);
  } else if (el[0] === 'L' && cursor.prev) {
    cursor = cursor.prev;
  } else if (el[0] === 'D' && cursor.next) {
    cursor = cursor.next;
  } else if (el[0] === 'B' && cursor.prev) {
    const prevNode = cursor.prev;
    deleteNode(cursor);
    cursor = prevNode;
  }
}

let result = '';
let currentNode = head.next;
while (currentNode) {
  result += currentNode.value;
  currentNode = currentNode.next;
}

console.log(result);
