function solution(n) {
  return Math.min(...n);
  // 아래와 같이 apply를 사용하면 전개연산자를 사용하지 않고도 배열을 넘겨주어
  // 최솟값혹은 최댓값을 구할 수 있습니다. null에 해당하는 부분은 this에 내가 컨트롤할 객체를 넘겨줌
  // return Math.min.apply(null, a)
}

console.log(solution([5, 7, 1, 3, 2, 9, 11]));
