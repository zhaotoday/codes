var validator = {
  /**
   * 验证规则
   */
  rules: {},

  /**
   * 错误信息
   */
  messages: [],

  /**
   * 校验
   */
  validate: function (data) {
    var that = this
    var currentRule

    // 清空
    this.messages = []

    data.rules.forEach(function (value) {
      currentRule = that.rules[value]

      if (currentRule && !currentRule.validate(data.value)) {
        that.messages.push(currentRule.message)
      }
    })

    return this
  },

  /**
   * 是否有错
   * @return {boolean}
   */
  hasErrors: function () {
    return this.messages.length !== 0
  }
}

/**
 * 不为空
 */
validator.rules.required = {
  validate: function (value) {
    return value !== ''
  },
  message: '不能为空'
}

/**
 * 数字
 */
validator.rules.number = {
  validate: function (value) {
    return value && !isNaN(value)
  },
  message: '不是合法的数字'
}

var v = validator.validate({
  value: '',
  rules: ['required', 'number']
})

console.log(v.messages, v.hasErrors())
