# 外观模式
## 参考
- [深入理解JavaScript系列（30）：设计模式之外观模式](http://www.cnblogs.com/TomXu/archive/2012/02/28/2353448.html)

## 介绍
外观模式（Facade）为子系统中的一组接口提供了一个一致的界面，此模块定义了一个高层接口，这个接口值得这一子系统更加容易使用。

## 用途
外观模式经常被用于JavaScript类库里，通过它封装一些接口用于兼容多浏览器，外观模式可以让我们间接调用子系统，从而避免因直接访问子系统而产生不必要的错误。

## 优缺点
外观模式的优势是易于使用，而且本身也比较轻量级。但也有缺点 外观模式被开发者连续使用时会产生一定的性能问题，因为在每次调用时都要检测功能的可用性。