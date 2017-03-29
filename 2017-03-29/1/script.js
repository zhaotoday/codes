/**
 * 函数是对象的实例
 */
var fn = function () {
}

console.log(fn instanceof Object)  // true

/**
 * 对象都是通过函数创建的
 */
// var obj = {a: 10, b: 20}
// var arr = [5, 'x', true]

var obj = new Object()
obj.a = 10
obj.b = 20

var arr = new Array()
arr[0] = 5
arr[1] = 'x'
arr[2] = true

/**
 * Object 和 Array 都是函数
 */
console.log(typeof (Object))  // function
console.log(typeof (Array))  // function
