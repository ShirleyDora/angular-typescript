// 类的继承
class Person01{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log('吃饭')
    }
}
class Student01 extends Person01{
    constructor(name:string,age:number){
        //super()就是父类构造函数
        super(name,age)
    }
}
new Student01('zs',18).eat();
