const nodes =["A","B","c","D","E"];
const edgs =[["A","B"],["A","D"],["B","C"],["C","D"],["C","E"],["D","E"]]


const findeAdjancentNodes = function(node:string) {
    const adjancentNodes =[];
    

    for(const edg of edgs ){
        const index =edg.indexOf(node);
        if (index > -1) {
            const adjancentnode =  index == 0 ? edg[1] : edg[0]
            adjancentNodes.push(adjancentnode);    
        }
    }
    console.log(adjancentNodes);
    

} 
const  isConnected =function(node1 :string,node2 :string){
   return edgs.some((edg)=>{
        return edg.indexOf(node1) > -1 && edg.indexOf(node2) > -1
    })
}

const addEdge = function(node1 :string,node2 :string){
    const arr =[node1,node2]
    edgs.push(arr)
}