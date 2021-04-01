// 装饰器，本身就是函数
// 用来扩展属性和方法
function addAay(target:Function) {
  target.prototype.say = function () {
    console.log('say')
  }
}

// 装饰属性，需要传入两个参数
// target 原型
// key  属性

// 修饰属性
function setToLocaleUpperCase(target:any,key:string) {
  console.log(target,key,target[key])
  let val = target[key]
  Object.defineProperty(target,key,{
    get(){
      return val.toLocaleUpperCase()
    },
    set(newVal){
      val = newVal;
    }
  })
  
}

// 装饰器传递参数，返回一个参数，装饰器本身就是一个函数
// 修饰静态方法
function double(num:number) {
  return function (target:any,key:string) {
    let val = target[key]
    Object.defineProperty(target,key,{
      get(){
        return val * num
      }
      
    })
  }
}

// 修饰方法
// 第三个参数默认是就是Object.defineProperty的参数
// descriptor: value writable enumerable configurable
function setRun(target:any,key:string,descriptor:PropertyDescriptor) {
  console.log(target,key,descriptor)
  descriptor.enumerable = false
}

// 修饰方法参数
function params(target:any,key:string,index:number) {
  //                       run        修饰的参数索引
  console.log(target,key,index)
}
@addAay
class Person{
  say!:Function
  @setToLocaleUpperCase
  name:string = 'baidu'
  // 装饰器传参
  @double(3)
  static num:number = 10

  // 修饰函数
  @setRun
  run(a:string,@params params:number,){

  }
}
let p = new Person()
p.say()
console.log(p.name)
console.log(Person.num)
console.log(p)