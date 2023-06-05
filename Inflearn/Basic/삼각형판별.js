// 100이하의 임의의 자연수가 주어졌을 때 삼각형을 만들 수 있다면 YES 아니면 NO를 출력하시오.

function solution(a, b, c) {
  let sum = a + b + c;
  let max = Math.max(...[a, b, c]);
  if (sum - max <= max) return "NO";
  else return "YES";
}

console.log(solution(13, 33, 17));
