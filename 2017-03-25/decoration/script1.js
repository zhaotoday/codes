var tree = {}

tree.decorate = function () {
  console.log('--')
}

tree.getDecorator = function (Decorator) {
  tree[Decorator].prototype = this
  return new tree[Decorator]()
}

tree.RedBalls = function () {
  this.decorate = function () {
    this.RedBalls.prototype.decorate()
    console.log('red balls')
  }
}

tree.BlueBalls = function () {
  this.decorate = function () {
    this.BlueBalls.prototype.decorate()
    console.log('blue balls')
  }
}

tree = tree.getDecorator('RedBalls')
tree = tree.getDecorator('BlueBalls')
tree.decorate()
