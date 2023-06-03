let numbers = [1, 1, 1, 1, 1];
let target = 3;

function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(count, sum) {
    // count와 주어진 배열의 길이가 똑같아졌을 때 재귀함수를 탈출할 수 있는 조건을 줍니다.
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer;
}
