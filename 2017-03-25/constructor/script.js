function Car (years, miles) {
  // 强制使用 new
  if (!(this instanceof Car)) {
    return new Car(years, miles)
  }

  this.years = years
  this.miles = miles
}

Car.prototype.run = function () {
  console.log('runs ' + this.miles + ' miles')
}

var car1 = new Car(1, 2)
car1.run()

var car2 = Car(3, 4)
car2.run()

var string1 = 'abc'
string1.a = 'a'
console.log(string1.a) // undefined

var string2 = new String('abc')
string2.a = 'a'
console.log(string2.a) // a
