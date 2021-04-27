// 交叉类型

interface Iperson1{
  handsome:string
}
interface Iperson2{
  height:string
}

// 两人的交集是又高又帅

type Iperson = Iperson1 & Iperson2;

let man:Iperson = {
  handsome:'帅',
  height:'高'
}



interface Ia{
  name:string
}
interface Ib{
  name:number
}
type Ih = Ia & Ib;

// In不能即是number又是string，所以两个的交集是never

function error():never {
  throw new Error("");
  
}
// 将是never类型的赋值给name

let c:Ih = {name:error()}



function mixin<T extends object,K extends object>(a:T,b:K):T & K {
  return {...a,...b}
}
let r = mixin({a:1},{b:2})