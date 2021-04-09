// 接口
// 使用接口（Interfaces）来定义对象的类型。
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

interface Ifn2{
 (obj:Iobj):string
}
interface Iobj{
  name:string,
  age:number
}
let fn2:Ifn2 = (obj)=>{
  return `${obj.name}+${obj.age}`
}
console.log(fn2({name:'小名',age:18}))



// interface Iobj1{
//   name:string,
//   age:number
// }
// // 1.如果定义的值比接口中定义的多，可以通过as 断言的方式
// let obj1:Iobj1 = ({
//   name:'小名',
//   age:18,
//   sex:'男'
// }as Iobj1)

// // 2.通过extends继承方式,进行扩展
// interface IobjSon extends Iobj1{
//   sex:string
// }

// let obj1:IobjSon = {
//   name:'小名',
//   age:18,
//   sex:'男'
// }

// 3.[key:string]:any  方式
// interface Iobj1{
//   name:string,
//   age:number,
//   [key:string]:any
// }
// let obj1:Iobj1 = {
//   name:'小名',
//   age:18,
//   sex:'男'
// }

interface Iarr{
  [key:number]:any
}
let arr:Iarr = [1,2,{},[]]


// class 类
// implements 关键字
interface Ispeak{
  name:string,
  speak():void //只有在类中表示，描述类的原型方法，表示不关心返回值的类型
}

interface IchineseSpeak{
  speakChinese():void
}

// 多个泛型用,隔开
class Speak implements Ispeak,IchineseSpeak{
  name!: string;
  constructor(name:string){
    this.name = name
  }
  speak(): string {
    return 'xxx'
  }
  speakChinese():number{
    return 123
  }

}
let s1 = new Speak('小名');



// 实例化类
// T泛型，当做占位符，当函数调用的时候，再去传入类型
interface Iclass<T>{
  //通过new 方式表示一个构造函数类型
  new (name:string):T //T指的是Person
}
class Person{
  constructor(public name:string){
    this.name = name
  }
}
function createIndtance<T>(clazz:Iclass<T>,name:string) {
  return new clazz(name)
}

let r = createIndtance<Person>(Person,'小名')



function toFn<T>(a:number,b:T):Array<T> {
  let arr:T[] = [];
  for(let i = 0;i<a;i++){
    arr[i] = b
  }
  return arr
}

let c = toFn<string>(3,'x')
console.log(c)


export {}

