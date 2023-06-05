function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      console.log(stack);
      while (stack.pop() !== "(") {
        console.log(stack);
      }
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
