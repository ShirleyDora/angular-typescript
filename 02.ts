// var 不要使用var
// let 变量
// const 常量
let foo = 'bar';
foo = 'baz'
const count = 0;
//基本数据类型
let isDone:boolean = true;
let amount:number = 10;
let user02: {
    name:string,
    age:number
}= {
    name:'Jack',
    age:18
}
let str:string = `
    大家好，我叫${user02.name}
    我今年${user02.age}岁了
`
//let arr: Array<number> = [1,2,3];
//arr.push(true);
//let arr: number[] = [1,2,3];
//let arr: string[] = ['hello','world'];
let arr:[string,number] = ['jack',1];

interface Person {
    name:string,
    age:number
}
let zs: Person ={
    name:'可可',
    age:22
}
//在不确定类型的情况下可以使用any
//但是尽量少用
let num:any = 10
num = '20'
let ret:string = (num as string).substr(1)
//类型除了用于变量声明之后，还可以用于函数的形参
function add(x:number,y:number): number{
    return x + y
}
//void只能用于函数的返回值
function fn():void{
    console.log('hello')
}
var result:number = add(10,22)
