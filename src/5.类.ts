// 类
// 类的静态方法
// 通过static来进行定义静态方法，方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
// 如果包含this，此时的this指的是类，而不是实例
// 静态方法可以和非静态方法重名
// class Fn{
//   constructor(name){
//     this.name = name;
//   }
//   static getName(){
//     cosnole.log(this)
//   }
//   getName(){}
// }
// let f = new Fn('小名');
// Fn.getName()

// 
// class son extends Fn{
//   static getName() {
//     可以通过super去调用
//     return super.getName() + ', too';
//   }
// }
// son.getName() //子类是可以继承父类上的静态方法

// as 断言成
// !非空断言
// ? 链判断运算符，有值就走，没值就undefined
class Point{
  x!:number //表示实例上有这个属性
  y!:number
  constructor(x:number,y?:number,...arg:number[]){
    this.x = x;
    this.y = y as number;
  }
  static a = 1;
}



// 属性
// public修饰的属性或方法是公有的，在父类和子类都可以访问到，默认所有的属性和方法都是 public 的
// protected  修饰的属性或方法是受保护的，在父类和子类都可以访问到，但不能在声明它的类的外部访问
// private 私有，只能在父类中访问

// readonly只读属性，只允许出现在属性声明或索引签名或构造函数中,如果初始化赋值以后就不能再去修改了

class Animal{
  public name!:string
  protected readonly age!:number
  private sex!:string
  constructor(name:string,age:number,sex:string,){
    this.name = name;
    this.age = age;
  }
   // static 静态的属性和方法,只能通过类去调用
  static weight = 10
  static run(){

  }
  getSex(){
    console.log(this.sex)
  }
}
Animal.run() //通过类去调用

class Cat extends Animal{
  eat:string = '鱼'
  // 私有属性
  private _drink:string = ''
  constructor(name:string,age:number,eat:string,sex:string){
    super(name,age,sex); //super指的父类
    this.eat = eat;
  }
  getAge(){
    // this.age = 10;这时候
    console.log(this.age) //子类中也是允许被访问的
    // 调用父类的方法
    //super就是父类的原型 
    super.getSex()
  }
  getSex(){
    // console.log(this.sex)
  }
  // 属性访问器，来访问私有属性
  // 取值函数（getter）和存值函数（setter）
  // 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
  get drink(){
    return this._drink
  }
  set drink(val){
    this._drink = val;
  }
}

let cat = new Cat('tom',18,'肉','男');
console.log(cat.name)
// console.log(cat.age) //protected不能再类的外部访问
// console.log(cat.sex)

Cat.run()//子类可以继承父类的静态方法
console.log(cat.drink)
cat.drink = '喝水'
export{}