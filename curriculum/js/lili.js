/**
 * 封装lili自己的库
 */
;(function () {
	"use strict" //严格模式
	//命名空间 Maizi是window的一属性，比较特殊，称为命名空间---把封装的方法都放到命名空间里
	if (!window.Maizi) {
		window.Maizi = {}
	}
	/**
	 * 获取id获取dom元素
	 * @param {string} id
	 */
	function $(id) {
		if (typeof id !== "string") {
			throw new Error("数据类型错误")
		}
		const dom = document.getElementById(id)
		if (!dom) {
			throw new Error("DOM对象未找到")
		}
		return dom
	}
	window.Maizi.$ = $
	/**
	 *
	 * @param {String} className
	 */
	function getClassName(className) {
		const dom = document.getElementsByClassName(className)[0]
		return dom
	}
	window.Maizi.getClassName = getClassName
	/**
	 * 创建节点
	 * @param {String} tagName
	 */
	function createEl(tagName, attrs) {
		const dom = document.createElement(tagName)
		if (attrs) {
			window.Maizi.setAttr(dom, attrs)
		}
		return dom
	}
	window.Maizi.createEl = createEl
	/**
	 * 设置属性
	 * @param {String} node
	 * @param {Object} styles
	 */
	function setAttr(node, styles) {
		for (let key in styles) {
			node.setAttribute(key, styles[key])
		}
	}
	window.Maizi.setAttr = setAttr
	/**
	 * 事件注册监听器
	 * @param {String} domNode
	 * @param {String} eventType
	 * @param {Function} handlerFunction
	 */
	function addEvent(domNode, eventType, handlerFunction) {
		if (window.addEventListener) {
			domNode.addEventListener(eventType, handlerFunction)
		} else {
			domNode.attachEvent(`on${eventType}`, handlerFunction)
		}
	}
	window.Maizi.addEvent = addEvent
	/**
	 * 删除事件监听器
	 * @param {String} domNode
	 * @param {String} eventType
	 * @param {Function} handlerFunction
	 */
	function removeEvent(domNode, eventType, handlerFunction) {
		if (window.removeEventListener) {
			domNode.removeEventListener(eventType, handlerFunction)
		} else {
			domNode.detachEvent(`on${eventType}`, handlerFunction)
		}
	}
	window.Maizi.removeEvent = removeEvent
	/**
	 * 阻止事件冒泡
	 * @param {事件对象} e
	 */
	function stopBubble(e) {
		if (e && e.stopPropagation) {
			e.stopPropagation()
		} else {
			//低版本ie浏览器
			window.event.cancelBubble = true
		}
	}
	window.Maizi.stopBubble = stopBubble

	/**************************END**************************************** */
})()

// 作用域：只能访问当前作用域的变量和方法
/**
 * 立即执行函数：
 *
 * 1、防止变量和方法污染全局 2、防止与第三方库命名冲突
 *
 *
 */
