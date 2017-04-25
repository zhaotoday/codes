var Girl = function (name) {
  this.name = name
}

var Boy = function (name, girl) {
  this.name = name
  this.girl = girl

  this.sendGift = function (gift) {
    alert(this.name + '给' + girl.name + '送' + gift)
  }
}

var Proxy = function () {
  this.sendGift = function () {
    var girl = new Girl('妹子')
    var boy = new Boy('小伙子', girl)

    boy.sendGift('99朵玫瑰花')
  }
}

new Proxy().sendGift()
