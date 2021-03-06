var singleton = (function () {
  function Singleton(args) {
    var args = args || {}

    this.pointX = args.pointX || 0
    this.pointY = args.pointY || 0
  }

  var instance

  return {
    getInstance: function (args) {
      if (typeof instance === 'undefined') {
        instance = new Singleton(args)
      }

      return instance
    }
  }
})()

var singletonInstance = singleton.getInstance({pointY: 5})
console.log(singletonInstance.pointX, singletonInstance.pointY)