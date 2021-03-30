//什true么时候需要指定类型

// 此时的str的类型是any，可以赋值任何数据类型
let str;
str = 1;
str = '1'
str = true

// 默认在初始化的时候会进行推导
// 此时的str2是字符串类型，如果在去赋值给其他类型，就会报错
let str2 = 'string';
// str2 = 123

// -----------------------------

// number和Number   string和String

// 11..toFixed()将基本数据类型包装成类，类包装，这里用两个..是为了区分小数点

let num1:number = 123;
let num2:Number = 123;
let num3:number = Number(123)
// let num4:number = new Number(123) //new Numer是一个对象类型，不是数字
let num4:Number = new Number(123)

export {}