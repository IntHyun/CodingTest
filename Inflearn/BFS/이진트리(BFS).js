function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  // 큐가 0이되면 false가 되니 큐가 비었다는 뜻이고 아래의 반복문이 멈추게 됩니다.
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    console.log(queue);
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution());
