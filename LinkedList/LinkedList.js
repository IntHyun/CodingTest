// 연결리스트의 가장 기본적인 형태를 만들어보도록 하겠습니다.

const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};

// list.head.value
// 90
// list.head.next.next.value
// 89

// 아래의 Node라는 클래스는 head안에 들어있는 모든정보들입니다. 즉, head를 하나로 취급하게됩니다.
// 물론 여기서 head는 value와 next값을 가지게됩니다. 따라서 value와 next가 각각 다음노드가 됩니다.
//
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.현재노드 = undefined;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);

    this.tail.next = 새로운노드;
    this.tail = 새로운노드;
    this.데이터수 += 1;
  }

  toString() {
    // return "hello World"
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += 순회용현재노드.data;
      순회용현재노드 = 순회용현재노드.next;
    }

    return s;
  }
}

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
console.log(l.length());
console.log(l);
