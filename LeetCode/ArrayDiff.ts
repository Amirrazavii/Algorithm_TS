function ArrayDiff(arr1:number[],arr2:number[]){

    return arr1.filter(d=> !arr2.includes(d))

}
const arr1=[5,8,9,2,7,4]
const arr2=[5,2,4]
console.log(ArrayDiff(arr1,arr2));


ArrayDiff(arr1,arr2);