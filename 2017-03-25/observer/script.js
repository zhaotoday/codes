var observer = {
  /**
   * 订阅
   */
  addSubscriber: function (callback) {
    this.subscribers[this.subscribers.length] = callback
  },

  /**
   * 退订
   */
  removeSubscriber: function (callback) {
    for (var i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] === callback) {
        delete (this.subscribers[i])
      }
    }
  },

  /**
   * 发布
   */
  publish: function (what) {
    for (var i = 0; i < this.subscribers.length; i++) {
      if (typeof this.subscribers[i] === 'function') {
        this.subscribers[i](what)
      }
    }
  },

  /**
   * 让对象 obj 具有观察者功能
   */
  create: function (o) {
    for (var i in this) {
      o[i] = this[i]
      o.subscribers = []
    }
  }
}

var blogger = {
  recommend: function (id) {
    this.publish('我推荐了帖子 ' + id)
  }
}

observer.create(blogger)

var zhao = {
  read: function (what) {
    console.log('zhao 看到：' + what)
  }
}

var chen = {
  say: function (what) {
    console.log('chen 说：' + what)
  }
}

blogger.addSubscriber(zhao.read)
blogger.addSubscriber(chen.say)
blogger.recommend(123)

blogger.removeSubscriber(chen.say)
blogger.recommend(456)
