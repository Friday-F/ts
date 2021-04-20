// 类型保护
// 1.typeof

function fn(val:number | string) {
  if(typeof val === 'number'){
    val
  }else if(typeof val === 'string'){
    val
  }
}


// 2.instanceof

class Dog{}
class Cat{}
// new ()=>
// 传入构造函数
// let getInstance = (clazz:new ()=>Dog | Cat)=>{
//   return new clazz
// }

interface Iclazz<T>{
  new ():T
}

let getInstance = <T>(clazz:Iclazz<T>)=>{
  return new clazz
}

let instance = getInstance(Dog);
let catInstance = getInstance(Cat)
if(instance instanceof Dog){
  instance
}else if(catInstance instanceof Cat){
  catInstance
}

interface Ifn1{
  (obj:Iobj):string
}
interface Iobj{
  name:string,
  age:number
}

let fn1:Ifn1 = (obj):string=>{
  return `${obj.name}+${obj.age}`
}



// in

interface fish{
  swiming:string
}

interface Bird{
  fly:string
}

function getTept(animal:fish | Bird) {
  if('swiming' in animal){
    animal
  }else{
    animal
  }
}

// -------------------------------ts特有-------------------------------------------

interface Ibutton1{
  class:'success'
}
interface Ibutton2{
  class:'error'
}

function getButton(params:Ibutton1 | Ibutton2) {
  if(params.class === 'success'){
    params
  }else{
    params
  }
}
getButton({class:'error'})



// is
interface fish{
  swiming:string
}

interface Bird{
  fly:string
}

function isFish(animal:fish | Bird):animal is fish {
  return 'swiming' in animal
}

function getAnmial(animal:fish | Bird) {
  if(isFish(animal)){
    animal
  }else{
    animal
  }
}


// 为了识别类型
function isStr(str:any):str is string {
  return typeof str === 'string'
}

if(isStr('xxx')){

}



// null 保护 !非空断言

function getTofixed(val?:number | null) {
  val = val || 10.1
  function a() {
    if(val != null){ //ts中无法检验内部函数变量，需要在进行一次判断
      val.toFixed()
    }
  }
  a()
}

getTofixed()


// 完整性保护

const assert = (obj:never)=>{}

interface IRant{
  kind:'rant',
  width:number,
  height:number
}

interface ISquare{
  kind:'square',
  width:number
}

interface ICircle{
  kind:'circle',
  width:number
}

let getArea = (obj:IRant | ISquare | ICircle)=>{
  switch (obj.kind) {
    case 'rant' :
      return obj.width * obj.height
      break;
    case 'square' :
      return obj.width * obj.width
      break;
    case 'circle' :
      return obj.width * obj.width
      break;
    default:
      return assert(obj) //为了实现完整性保护
  }
}
getArea({kind:'square',width:90})

export {}