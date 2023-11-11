export class Graph<T>{
    nodes: Array<T> = [];
    edge: Array<Array<T>> = []

    addNode(node: T) {

        this.nodes.push(node)
    }
    addEdge(node1: T, node2: T) {

        const boll = this.nodes.indexOf(node1) > -1 && this.nodes.indexOf(node2) > -1

        if (boll) {

            const arr = [node1, node2]

            this.edge.push(arr)
        }
    }
    findeAdjancentNodes(node: T) {
        const adjancentNodes = [];


        for (const edg of this.edge) {
            const index = edg.indexOf(node);
            if (index > -1) {
                const adjancentnode = index == 0 ? edg[1] : edg[0]
                adjancentNodes.push(adjancentnode);
            }
        }
        console.log(adjancentNodes);


    }
    isConnected(node1: T, node2: T) {
        return this.edge.some((edg) => {
            return edg.indexOf(node1) > -1 && edg.indexOf(node2) > -1
        })
    }

}
const a = new Graph<string>()
a.addNode("A");
a.addNode("B");
a.addNode("C");
a.addNode("D");
a.addNode("E");
a.addEdge("A", "B");
a.addEdge("A", "D");
a.addEdge("B", "C");
a.addEdge("C", "D");
a.addEdge("C", "E");
a.addEdge("D", "E");

console.log(a.nodes);
console.log(a.edge)