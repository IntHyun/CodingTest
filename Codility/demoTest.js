// 임의의 배열이 주어졌을때 해당배열에서 존재하지 않는 가장 작은 양의정수를 반환하세요

function solution(A) {
  // filter를 통해 음수를 제거합니다.
  // 이 경우에 만약 배열안의 모든수가 음수라면 for문을 실행할 수 없음으로 바로 1을리턴해줍니다.
  A = A.filter((x) => x >= 1).sort((a, b) => a - b);

  let answer = 1;

  for (let i = 0; i < A.length; i++) {
    // 배열안에 양수가 포함되어 반복문이 실행이 된다면 sort로 인해 정렬된 상태일테니
    // [1,2,3,4,5,6,8] 과 같이 정렬되어 들어오게 됩니다.
    // 따라서 answer를 1로 둔 뒤 현재 배열의 원소와 비교를 하여 현재 배열의 원소가 더 크다면
    // answer를 리턴해주어 값을 도출해냅니다.
    if (answer < A[i]) {
      return answer;
    }
    answer = A[i] + 1;
  }

  return answer;
}
