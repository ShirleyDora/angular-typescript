let arrs:number[]=[10,20];
//let num01:number = arr[0];
//let num02:number = arr[0];
let [num1,num2,num3]=arrs;
let users = {
    name:'Jack',
    age:18
}
//在浏览器环境中，window对象本身就有一个成员name
let {name:nickname,age} = users

function adds([x,y]):number{
    return x+y
}
adds([10,20])