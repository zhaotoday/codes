/**
 * 柯里化
 * @param {Function} fn 函数
 * @return {Function}
 */
const currying = function (fn) {
  let args = []

  return function () {
    if (!!arguments.length) {
      [].push.apply(args, arguments)
      return arguments.callee
    } else {
      return fn.apply(null, args)
    }
  }
}

// 求和
const sum = (function (num) {
  let total = 0

  return function () {
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i]
    }

    return total
  }
})()

const total = currying(sum)(1)(2)(3)(4)()

console.log(total)