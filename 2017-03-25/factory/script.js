var dom = {}

/**
 * 子函数 - 插入文本
 */
dom.Text = function () {
  this.insert = function (where) {
    var text = document.createTextNode(this.value)
    where.appendChild(text)
  }
}

/**
 * 子函数 - 插入图片
 */
dom.Image = function () {
  this.insert = function (where) {
    var image = document.createElement('img')
    image.src = this.src
    where.appendChild(image)
  }
}

/**
 * 工厂函数
 */
dom.factory = function (type) {
  return new dom[type]()
}

var image = dom.factory('Image')
image.src = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
image.insert(document.body)

var text = dom.factory('Text')
text.value = 'abc'
text.insert(document.body)
