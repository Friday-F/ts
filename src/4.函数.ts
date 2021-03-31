// 函数
// 函数声明
function fn1(a:string|number,b:string):string {
  return a+b;
}
// 函数表达式

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// let fn2:(a1:string,b1:string)=>string = (a:string,b:string):string=>{
//   return a+b;
// }
// 可以先将函数的类型通过type进行声明
type fnType = (a1:string,b1:string)=>string
let fn2:fnType = (a:string,b:string):string=>{
  return a+b;
}

// 可选参数
// 用?来定义可选参数，必填必须在可选前面，可选参数后面不能再跟选填参数了
function fn3(a:string,b?:string):string {
  return a+b
}

// 参数默认值
// 
function fn4(a:string,b:string='1'):string {
  return a+b
}

// 剩余参数
function fn5(...arg:(number|string)[]):Array<number> {
  return [1,2,3]
}

let fn6 = (...item:[number,string]):Array<number>=>{
  return [1,2,3]
}

// 函数重载
// 使用重载定义多个 函数 的函数类型：
// 好处：明确知道输入一个什么类型，输出是什么类型
function toArray(val:number):number[];
function toArray(val:string):string[];
function toArray(val:number|string):any{
  if(typeof val === 'number'){
    return val.toString().split('').map(item=>parseInt(item))
  }
  if(typeof val === 'string'){
    return val.split('')
  }
}
toArray(123)
