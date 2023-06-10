function mergeWithSort(A, lenA, B) {
  let lastAIndex = lenA - 1; // 배열 A의 마지막 인덱스
  let lastBIndex = B.length - 1; // 배열 B의 마지막 인덱스
  let mergeIndex = A.length - 1; // 병합된 결과를 저장할 인덱스

  // 배열 A와 B의 끝부터 시작하여 큰 값을 선택하여 결과 배열에 저장
  while (lastAIndex >= 0 && lastBIndex >= 0) {
    if (A[lastAIndex] > B[lastBIndex]) {
      A[mergeIndex] = A[lastAIndex];
      lastAIndex--;
    } else {
      A[mergeIndex] = B[lastBIndex];
      lastBIndex--;
    }
    mergeIndex--;
  }

  // 배열 B에 남은 원소가 있는 경우 결과 배열의 앞쪽에 복사
  while (lastBIndex >= 0) {
    A[mergeIndex] = B[lastBIndex];
    lastBIndex--;
    mergeIndex--;
  }
}
const A = [1, 3, 1, 0, 0, 0]; // 배열 A (원소 개수: 3)
const lenA = 3; // 배열 A의 원소 개수
const B = [2, 4, 6]; // 배열 B

mergeWithSort(A, lenA, B); // 배열 A와 B를 합쳐서 정렬된 상태로 변경

// 결과 출력
console.log(A); // [1, 2, 3, 4, 5, 6]
