// 基本数据类型
// :后面是类型，= 后面是值
let str:string = '123';
let num:number = 123;
let bool:boolean = true;

// 数组
let arr1:string[] = ['1','2','3'];
let arr2:number[] = [1,2,3];
// 元组
// 前面的数据类型要和后面的值的类型对应
// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
let arr3:[string,number] = ['1',1]
// 因为元组类型中没有布尔类型，所以失败，只能添加元组类型中已经存在的类型
// arr3.push(true)
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
arr3.push('3')

// 当数组中多种数据类型
let arr4:(string | number)[] = [1,'2',3]

// 数组泛型
let arr5:Array<string | number> = ['3',4]

// 枚举
// 默认第一项是0，第二项是1，依次类推
enum USER_STATE{
  SUCCESS,
  ERROR
}
console.log(USER_STATE['SUCCESS']) //0
// 同时也会对枚举值到枚举名进行反向映射：
console.log(USER_STATE[0]) //SUCCESS

// 对枚举进行手动赋值
// 如果其中是数字，将后面的进行延续
enum USER_ROLE{
  SUCCESS='a',
  ERROR='b',
  USER=1,
  NAME='1',
}
console.log(USER_ROLE.NAME)//2 编译成一个对象

// 常量枚举
// 只提供一个类型
const enum MEI_JU{
  USER,
  NAME,
  BLUR
}
console.log(MEI_JU.NAME) //最终只是输出1，变异成一个值

// any任意类型

let arr:any = [1,'2',true,{}]

//undefined和null  任何类型的子类型
//在严格模式下undefined类型，只能是undefined，null类型，只能是null
let a: undefined = undefined;
console.log(a)
let b: null = null;
console.log(b)


// void 空类型
// 只能接受undefined和null
// 在严格模式下，只能赋值undefined，不能赋值null
let v:void = undefined;
function  fn():void{
  console.log(1)
}

// never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
// 永远达不到的类型
// 1.报错
// 2.死循环
// 3.类型判断

//1.报错
function myError():never {
  throw new Error("");
  
}
let e:never = myError()

// 死循环
function whileTrue():never {
  while (true) {
    
  }
}

// 类型判断
function getTypeof(val:number | string){
  if(typeof val ==='number'){
    val
  }else if(typeof val === 'string'){
    val
  }else{
    val
  }
}


// 对象类型，非原始数据类型

let obj = (obj:object):Array<number>=>{
  return [1]
}
// obj(1) 不支持
// obj('1') 不支持
// obj(null) 不支持
obj({})
obj([])
obj(function () {
  
})

// 全局状态下已经有name
let name = '1'


// 防止模块之间的干扰
export {}