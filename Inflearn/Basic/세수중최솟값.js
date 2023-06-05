// 100이하의 임의의 자연수 a,b,c가 주어졌을때 가장작은 수를 리턴하시오

function solution(a, b, c) {
  let answer;
  let num = 0;

  if (a < b) answer = a;
  else answer = b;

  if (c < answer) answer = c;

  return answer;
}

console.log(solution(6, 8, 11));
