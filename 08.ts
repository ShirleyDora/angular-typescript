class Person03{
    public gender:string
    constructor(public name:string,public age:number,gender:string){
        this.gender =gender;
    }
}
new Person03('张三',18,'男').age;