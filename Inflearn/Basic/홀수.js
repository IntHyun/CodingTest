// 주어진 배열에서 홀수만 골라 합을 구하고 그 홀수중에서 최솟값을 구하시오

function solution(n) {
  let arr = [];
  let answer = 0;

  for (const item of n) {
    if (item % 2 === 1) {
      arr.push(item);
      answer += item;
    }
  }

  return `최소 : ${Math.min.apply(null, arr)} 합 : ${answer}`;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
