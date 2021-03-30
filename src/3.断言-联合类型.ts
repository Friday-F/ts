// 联合类型
let str:number | string
// 当没有赋值时，只能访问此联合类型的所有类型里 共有 的属性或方法
str = '123';
//当赋值完成，可以进行访问该类型的属性和方法
// str.length


// 断言
let el:HTMLElement | null = document.getElementById('app');

// el?el.style?.color el && el.style && el.style.color

// el!.style.color 非空断言，表示一定有el值

// 断言成某种类型
// 值 as 类型 将 值 直接断言成某种类型
(el as HTMLElement).style.color = 'red'


// 字面量
type Direction = 'up' | 'down' | 'left' | 'right'
let direction:Direction;
direction = 'up';

function  fn(num:number,event:Direction):void {
  
}
fn(10,'down')

export{}


