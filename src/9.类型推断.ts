// 类型推断
// 1.当赋值的时候进行推断
let str = '123'; //不赋值就是any
// 2.函数默认会进行推断，函数会根据右边的赋值推断出左边的类型
// 3.返回值的推断
let sum = (a:string,b:string):string=>{
  return a+b
}

// 4.属性推断

let shool = { //需要限制的时候添加类型
  name:'1',
  age:18
}
let {name} = shool;


interface Ishool{
  name:string,
  age:number
}
// n:string
type n = Ishool['name'] //取出属性需要使用[]


//  typeof 类型反推
// 反推出shool中的类型
type myShool = typeof shool;

let a:myShool = {
  name:'12',
  age:1
}


export {}
