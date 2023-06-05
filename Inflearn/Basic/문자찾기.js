// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개
// 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.

// ▣ 입력설명
// 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.

// ▣ 출력설명
// 첫 줄에 해당 문자의 개수를 출력한다.

// ▣ 입력예제 1
// COMPUTERPROGRAMMING
// R

// ▣ 출력예제 1
// 3

// if 문활용
function solution(s, t) {
  let answer = 0;

  for (const item of s) {
    if (item === t) {
      answer += 1;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// split 활용

function solution2(s, t) {
  // t를 기준으로 스플릿하면 해당 문자열을 기준으로 문자를 자르고 배열을 리턴합니다.
  // t가 R이라고 가정하고 R이 세개였다면 배열의 원소 갯수는 4개가 됩니다. 따라서 length에 -1을 해주어
  // 답을 구할 수 있습니다.
  return s.split(t).length - 1;
}
