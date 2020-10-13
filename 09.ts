class Person04{
    private _age:number;
    get age(){
        return this._age
    }
    set age(val){
        if(val<0){
            throw new Error('年龄不能赋值为负数');
        }
        this._age = val;
    }
}
let p01 = new Person04();
p01.age = -10;
//new Person04().age = -10;