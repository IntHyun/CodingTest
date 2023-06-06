// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램
// 을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다.
// 단 공집합은 출력하지 않습니다.

// ▣ 입력예제 1
// 3

// ▣ 출력예제 1
// 123
// 12
// 13
// 1
// 23
// 2
// 3

function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  function dfs(v) {
    if (v === n + 1) {
      let tmp = "";
      for (const i in ch) {
        if (ch[i] === 1) {
          tmp += i;
        }
      }
      // 모두다 참여시키지 않는 경우에 tmp에 누적되는 숫자는 없습니다.
      // 그렇기 때문에 tmp의 length가 0이되는데 이 경우를 공집합의 경우라고 할 수 있습니다.
      if (tmp.length > 0) answer.push(parseInt(tmp));

      return answer;
    } else {
      // 부분집합에 v를 포함시킨다 => 1로표현
      ch[v] = 1;
      dfs(v + 1);
      // v를 포함시키지 않는다 => 0으로 표현
      ch[v] = 0;
      dfs(v + 1);
    }
  }

  dfs(1);

  return answer;
}

console.log(solution(3));
