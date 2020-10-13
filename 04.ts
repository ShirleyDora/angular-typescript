//剩余参数
function sum(...args:number[]):number{
    let ret = 0;
    args.forEach(function(item){
        ret += item;
    })
    return ret;
}
sum(1,2,3,4)

//数组展开操作符
//对象展开操作符
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arrs01 = [...arr1,...arr2]
let obj1 = {
    foo:'bar'
}
let obj2 = {
    ...obj1,//一般用于对象拷贝，混入
    name:'jack'
}