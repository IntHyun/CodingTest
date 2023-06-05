// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// ▣ 입력설명
// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// ▣ 출력설명
// 연산한 결과를 출력합니다.

// ▣ 입력예제 1
// 352+*9-

// ▣ 출력예제 1
// 12

// stack으로 후위식 연산을 표현하면 배열을 탐색하면서 만나는 숫자마다 모두 stack에 push합니다.
// 그 후 사칙연산 기호를 만나면 3 + 4 와 같이 왼쪽, 오른쪽에 놓아줄 숫자를 stack에서 pop해줍니다.
// 그 뒤 사칙연산이 완료된 숫자를 다시 stack에 push후 위의 과정을 반복합니다.

function solution(s) {
  let answer;
  let stack = [];

  for (const x of s) {
    // 숫자인지 아닌지를 판단하여 push를 하기위해 isNaN을 통해 검증을합니다.
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      // 숫자가 아니라면 stack에서 하나를 꺼내어 rt라는 변수에 담고 나머지 하나도 pop으로 꺼내어 lt에담습니다
      // 이때 당연하게 rt가 stack의 맨 뒤에 있는 숫자일테고 pop을 한다면 lt 또한 stack의 맨 뒷숫자가 pop이 됩니다.
      let rt = stack.pop();
      let lt = stack.pop();
      // 그렇게 모든 사칙연산의 경우의수를 따져 사칙연산이 완료된 숫자들은 다시 stack으로 push됩니다.
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
    // 그 뒤 마지막에 남은 stack의 숫자가 모든 사칙연산을 완료한 숫자일테니
    // 답을 도출해냅니다.
    answer = stack[0];
  }

  return answer;
}

let str = "352+*9-";
console.log(solution(str));
