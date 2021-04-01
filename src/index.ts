// 接口
// interface 一般首字母会大写，一般可以加上I
// 描述属性，方法，类

// interface IfullName{
//   firstName:string,
//   lastName:string
// }
// let obj:IfullName = {
//   firstName:"你好",
//   lastName:'我好'
// }


// 描述函数
// interface IfullName{
//   (a:string,b:string):string 
// }
// let fn:IfullName = (a:string,b:string):string=>{
//   return  a+b
// }
// fn('你好','我好')


// 函数 + 属性
interface Ifn{
  ():number,
  num:number
}
const fn:Ifn = ()=>{
  return ++fn.num
}
fn.num = 0;
console.log(fn())
console.log(fn())

