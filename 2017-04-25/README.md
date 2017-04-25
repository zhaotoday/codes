# 使用 postMessage 实现跨域通信

## 介绍
postMessage（message,targetOrigin）方法是 html5 新引进的特性，可以使用它来向其它的 window 对象发送消息，无论这个 window 对象是属于同源或不同源，目前 IE8+、FireFox、Chrome、Opera 等浏览器都已经支持 postMessage 方法。

## 相关 API
#### otherWindow.postMessage(message, targetOrigin)
> 功能：向外界窗口发送消息。
- otherWindow:  指目标窗口，也就是给哪个window发消息，是 window.frames 属性的成员或者由 window.open 方法创建的窗口
- message:  是要发送的消息，类型为 String、Object (IE8、9 不支持)
- targetOrigin:  是限定消息接收范围，不限制请使用 ‘*’

#### onmessage 事件
html5新增了onmessage事件，它和onclick之类用法差不多。当窗口或frame接收到postMessage发送过来的数据时，将触发onmessage事件。
该事件接收一个event对象，这个对象有三个属性，分别为source，origin，data。
- source： 消息源，消息的发送窗口/iframe。
- origin：消息源的URI(可能包含协议、域名和端口)，用来验证数据源。
- data：发送方发送给接收方的数据。

## 一些不足
- ie8，ie9下传递的数据类型值支持字符串类型，不过可以使用用 JSON对象和字符串之间的相互转换 来解决这个问题；
- ie6，ie7需要写兼容方案，个人认为window.name比较靠谱；

## 参考
- [html5 API postMessage跨域详解](https://github.com/tsrot/study-notes/blob/master/html5%20API%20postMessage%E8%B7%A8%E5%9F%9F%E8%AF%A6%E8%A7%A3.md)
- [使用window.postMessage实现跨域通信](http://www.css88.com/archives/4720)
