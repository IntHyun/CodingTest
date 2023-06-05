// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
// 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.

// ▣ 입력예제 1
// BANANA

// ▣ 출력예제 1
// B#N#N#

// if 문을 활용하여 문제해결
function solution(s) {
  let answer = "";

  for (const item of s.split("")) {
    if (item === "A") {
      answer += "#";
    } else {
      answer += item;
    }
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// replace 활용하여 문제해결
function solution(s) {
  return s.replaceAll("A", "#");
}
