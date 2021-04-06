// 泛型 是指在定义函数，接口或者类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

function fn<T>(length:number,val:T):Array<T> {
  let arr:T[] = [];
  for(let i = 0;i<length;i++){
    arr.push(val)
  }
  return arr;
}
let r = fn<string>(3,'x')
console.log(r)


// 多个泛型
function swap<T,K>(arr:[T,K]):[K,T] {
  return [arr[1],arr[0]]
}
let w = swap([1,'a'])
console.log(w)


// interface Ifn1{
//   <T,K>(arr:[T,K]):[K,T]
// }
// let fn1:Ifn1 = (arr)=>{
//   return [arr[1],arr[0]]
// }
// fn1([1,2])

interface Ifn1<T,K>{
  (arr:[T,K]):[K,T]
}

interface Iarr<T,K>{
  [key:number]:any
}

let fn1 =<T,K>(arr:Iarr<T,K>):Iarr<K,T>=>{
  return [arr[1],arr[0]]
}
fn1([1,'1'])



export{}
