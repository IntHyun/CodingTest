function solution(n) {
  let answer = "";

  function dfs(L) {
    if (L === 0) return;
    else {
      dfs(parseInt(L / 2));
      answer += L % 2;
    }
  }

  dfs(n);

  return answer;
}

console.log(solution(11));
