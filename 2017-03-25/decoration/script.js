function MacBook () {
  this.cost = function () {
    return 1000
  }
}

function Memory (macBook) {
  this.cost = function () {
    return macBook.cost() + 100
  }
}

function HardDisk (macBook) {
  this.cost = function () {
    return macBook.cost() + 200
  }
}

var cost = new HardDisk(new Memory(new MacBook())).cost()
console.log(cost)
