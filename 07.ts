//类成员默认都是对外公开的
//默认都是public
//private用来声明私有成员
//私有成员无法被继承
//可以把不希望被外部修改的成员定义为私有的
//readonly只读的，不允许修改，它的作用和const定义的常量类似
class Person02{
    readonly name:string = '张三';
    public age:number;
    //可以在声明类成员的同时为其赋值
    private readonly type:string = '人类';
    //和private类似，也是私有成员，外部无法直接访问
    //但是可以被继承
    protected foo:string = 'bar';
    public getType(){
        //在类的内部访问私有成员
        //但是在外部无法访问
        return this.type;
    }
    /*changeType(){
        this.type = 'haha'
    }*/
}
new Person02().getType();
//new Person02().name = '李四'
//类的私有成员无法被继承
class Student02 extends Person02{
    getFoo(){
        console.log(this.foo)
    }
}
new Student02().getFoo();