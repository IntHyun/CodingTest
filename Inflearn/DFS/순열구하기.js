// 10이하의 N개의 자연수가 주어지면 이 중   M개를 뽑아 일렬로 나열하는 방법을 모두 출력합
// 니다.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
// 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
// 출력순서는 사전순으로 오름차순으로 출력합니다.

// ▣ 입력예제 1
// 32
// 369

// ▣ 출력예제 1
// 36
// 39
// 63
// 69
// 93
// 96
// 6

function solution(m, arr) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);

  function dfs(v) {
    if (v === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          // 문제의 핵심은 아래와 같이 내가 특정숫자를 쓴지안쓴지를 확인하기 위해
          // 특정 숫자를 썻다면 ch배열의 해당 원소의 자리를 1로바꾸어주도록 합니다.
          // 그리하여 for문에 처음들어왔을때 ch배열의 원소자리에 1이라면 실행을 하지않고 다음 반복으로 넘어가게합니다.
          // 그 뒤 해당 원소를 사용을 하여 1을 할당해주었다면
          ch[i] = 1;
          tmp[v] = arr[i];
          dfs(v + 1);
          // 이 지점에서는 트리를 타고 다시 올라가는 단계이므로 내가 썻던 숫자를 다시 0으로 바꾸어 주도록 합니다.
          ch[i] = 0;
        }
      }
    }
  }
  dfs(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
