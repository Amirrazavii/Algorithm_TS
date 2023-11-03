const arr =[4,6,3,2,5,2];

function pluralArrayMultiplyeachElement(arr : Array<number>) : number{
  if(arr.length ==0){
    return 0;
  }

  return arr[0] + arr[0] * 2 + pluralArrayMultiplyeachElement(arr.slice(1))
}
console.log(pluralArrayMultiplyeachElement(arr))
