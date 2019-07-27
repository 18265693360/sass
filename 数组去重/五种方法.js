var arr = [1,2,3,4,5,1,6,7,5,4,5,3];


//indexof
// 定义一个新数组
var arr1 = []
function fn1(arr){
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) == -1) {//判断在新数组中是否存在，不存在就push到新数组
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

// console.log(fn1(arr));


//include
function  fn2(arr){
    let arr1 = []
    for (let i = 0; i<arr.length; i++){
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i])
        }
    }
    return arr1
}
// console.log(fn2(arr))



// 主要利用了对象的键值是唯一的一个特性
//对象属性不重复原则

function fn3(arr) {
    let obj = {};
    for (let i = 0;i < arr.length;i++){
        if (!obj[arr[i]]){
            obj[arr[i]] = arr[i]
        }
    }
    return obj;
}
// console.log(fn3(arr));

 // set数组去重
var arr = [1,1,5435,3543,5,5];
var set = [...new Set(arr)];
// console.log(set);

var arr = [1,433,45646,66,66,3,3,3,0];
var set = [...new Set(arr)];
// console.log(set);

//对象属性
var arr = [1,2,4,4,5346,64,6,7,64,64];
var obj = {};
var arr1 = [];

for(var i=0; i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]] = 1;
        arr1.push([arr[i]])
    }
}
// console.log(arr1);

//indexOf去重
var arr = [1,2,4,4,66,66,345,33];
arr1 = [];
arr.forEach(item =>{
    if(arr1.indexOf(item)==-1){
        arr1.push(item)
    }
})
// console.log(arr1);

function fn5(arr){
    let arr1 = [];
    for (let i = 0;i < arr.length; i++){
        arr1[arr[i]] = 1;
    }
}
console.log(arr1);
for (let i = 0;i <arr.length;i++){
    if (arr[i] == 1){
        console.log(i);
    }
}
