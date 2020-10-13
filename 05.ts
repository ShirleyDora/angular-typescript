//类就是构造函数的另一种书写方式
//ecmascript6中新增的书写方式
//Person
//name,age
//sayHello
//1.以前的方式
/*
function Person(name:string,age:number){
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function():void{
    console.log(this.name,this.age);
}
let p1 = new Person('张三',18);
p1.sayHello();
*/
//2.现在的方式es6
class Persons{
    name:string;
    age:number;
    //constructor就是类的构造函数
    //当你new Person的时候，就会自动调用constructor
    constructor(name:string,age:number){
        //这里实际上是在动态的为实例添加成员
        //Typescript要求类的成员应该先被定义出来并确定类型
        this.name = name;
        this.age = age;
    }
    //实例方法
    sayHello():void{
        console.log(this.name,this.age)
    }
}
let p1 = new Persons('张三',18);
p1.sayHello();