// 기존에 작성했던 답입니다.
// 결론적으로 시간복잡도가 좋지않아 통과못한 코드입니다.

function solution1(A, B) {
  let answer = 0;
  let length = A.length;

  for (let i = 0; i < length; i++) {
    let test = A.splice(A.indexOf(Math.min.apply(null, A)), 1);
    let test2 = B.splice(B.indexOf(Math.max.apply(null, B)), 1);

    answer += test * test2;
  }

  return answer;
}

// 후에 아래의 코드로 수정하여
// 테스트 통과

function solution2(A, B) {
  let answer = 0;
  let length = A.length;

  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < length; i++) {
    answer += sortA.shift() * sortB.shift();
  }

  return answer;
}
