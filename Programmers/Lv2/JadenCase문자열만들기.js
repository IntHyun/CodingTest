// my Solution
let s = "3people unFollowed me";

function solution(s) {
  let answer = [];
  let toArr = s.split(" ");

  for (const item of toArr) {
    let toUpper = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    answer.push(toUpper);
  }

  return answer.join(" ");
}

// Other Solution

function solution(s) {
  return s
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
