// 泛型 是指在定义函数，接口或者类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

function fn<T>(length:number,val:T):Array<T> {
  let arr:T[] = [];
  for(let i = 0;i<length;i++){
    arr.push(val)
  }
  return arr;
}
let r = fn(3,'x')
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

interface Iarr<T>{
  [key:number]:T
}
let fn1 = <T>(arr:Iarr<T>):Iarr<T>=>{
  return [arr[1],arr[0]]
}
let a = fn1([1,2,'1'])
console.log(a)



// 泛型约束
// extends泛型进行约束
let sum = <T extends string>(a:T,b:T):T=>{
  return (a+b) as T
}
sum<string>('1','2')

interface Ilength{
  length:number
}

// 必须要有length属性
function getLength<T extends Ilength>(obj:T) {
  return obj.length
}
getLength('abc')


// 约束属性
// keyof表示取对象的key属性
let getVal = <T extends Object,K extends keyof T>(obj:T,key:K)=>{
  return obj[key]
}
getVal({a:1,b:2},'a')


type t1 = keyof string


// 类
class MyArray<T>{
  public arr:T[] = []
  add(val:T){
    this.arr.push(val)
  }
  getMaxArray():T{
    let max = this.arr[0];
    for(let i = 0;i<this.arr.length;i++){
      if(max<this.arr[i]){
        max = this.arr[i]
      }
    }
    return max
  }
  
}
let arr = new MyArray<number>()
arr.add(1)
arr.add(2)
arr.add(3)



export{}
