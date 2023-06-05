// 깊이 우선 탐색(DFS)을 수행하는 함수
function depthFirstSearch(graph, visited, node) {
  visited[node] = true;

  const neighbors = graph[node];
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    // 현재 노드와 연결되어 있고, 방문하지 않은 경우
    if (neighbor === 1 && !visited[i]) {
      depthFirstSearch(graph, visited, i);
    }
  }
}

// 네트워크의 개수를 세는 함수
function countNetworks(n, computers) {
  let networkCount = 0;
  const visitedNodes = new Array(n).fill(false);

  for (let node = 0; node < n; node++) {
    // 아직 방문하지 않은 노드인 경우
    if (!visitedNodes[node]) {
      depthFirstSearch(computers, visitedNodes, node);
      networkCount++;
    }
  }

  return networkCount;
}
