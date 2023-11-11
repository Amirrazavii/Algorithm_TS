class Graph {
    private vertices: number;
    private adjacencyList: Map<number, [number, number][]>;

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adjacencyList = new Map();
    }

    addEdge(source: number, destination: number, weight: number) {
        if (!this.adjacencyList.has(source)) {
            this.adjacencyList.set(source, []);
        }
        this.adjacencyList.get(source)!.push([destination, weight]);


    }

    dijkstra(startVertex: number): Map<number, number> {
        const distance: Map<number, number> = new Map();
        const priorityQueue: [number, number][] = [];

        for (let i = 0; i < this.vertices; i++) {
            distance.set(i, Infinity);
        }

        distance.set(startVertex, 0);
        priorityQueue.push([startVertex, 0]);

        while (priorityQueue.length > 0) {
            const [currentVertex, currentDistance] = priorityQueue.shift()!;

            if (currentDistance > distance.get(currentVertex)!) {
                continue;
            }

            const neighbors = this.adjacencyList.get(currentVertex) || [];
            for (const [neighbor, weight] of neighbors) {
                const newDistance = currentDistance + weight;

                if (newDistance < distance.get(neighbor)!) {
                    distance.set(neighbor, newDistance);
                    priorityQueue.push([neighbor, newDistance]);
                }
            }

            priorityQueue.sort((a, b) => a[1] - b[1]);
        }

        return distance;
    }
}

const graph = new Graph(5);

graph.addEdge(0, 1, 2);
graph.addEdge(0, 3, 1);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(3, 4, 4);
graph.addEdge(4, 2, 1);

const startVertex = 0;
const distances = graph.dijkstra(startVertex);

console.log(`Shortest distances from vertex ${startVertex}:`);
distances.forEach((distance, vertex) => {
    console.log(`To vertex ${vertex}: ${distance}`);
});
