//  graphs used in map traffic apps and routing data devices,...
//  graphs can be representing using : adjacency matrix and adjacency list
//  adjacency list are more efficient than matrix because doesn't have to store unconnected nodes
//  adjacency matrix O(V*V) adjacency list O(V+E)
//  Graphs are the go to data structure when you need to represent entities and the relationships between them
//  Finding the vertex is O(1). However, you also have to remove all of the edges associated with the vertex you are removing.
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    // if already exists return false
    return false;
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return true;
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el !== vertex1);
    return true;
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    let temp;
    while (this.adjacencyList[vertex].length > 0) {
      temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }

    delete this.adjacencyList[vertex];

    return this;
  }
}
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
//graph.removeEdge('A', 'B');
graph.removeVertex('A');
console.log(graph);
