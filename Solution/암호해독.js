// 문제 : 모든 알고리즘을 해독할 수 있는 알고리즘 7 원석를 보유한 알고리즘 제왕 파이와 썬은 죽기 전,
// 이 보물에 '암호'를 걸어 세계 어딘가에 묻어놨다고 공표하였다. 그가 남긴 문자는 아래와 같다.

// 섬으로 향하라!

// '   + -- + - + -   '
// '   + --- + - +   '
// '   + -- + - + -   '
// '   + - + - + - +   '

// 해(1)와 달(0),
// Code의 세상 안으로!(En-Coding)

let data = ["   + -- + - + -   ", "   + --- + - +   ", "   + -- + - + -   ", "   + - + - + - +   "];

let result = "";

for (const s of data) {
  // replaceAll을 정규표현식으로도 대체가 가능합니다.
  result += String.fromCharCode(parseInt(s.replaceAll(" ", "").replaceAll("+", 1).replaceAll("-", 0), 2));
}

console.log(result);
