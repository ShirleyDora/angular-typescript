//类
//实例成员，只能通过new出来的实例访问
//静态成员，也叫类本身的成员，只能通过类本身访问
class Person05 {
    static type:string = '人类';
    name:string = '张三';
    age:number = 18;
    //默认是实例成员
    //加上static关键字就会变成静态成员
    static sayHello(){
        console.log('我是人类')
    }
}
// 因为类其实就是构造函数
// 构造函数本身就有一个name属性
new Person05().name
Person05.sayHello()