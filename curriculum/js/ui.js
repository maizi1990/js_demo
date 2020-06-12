;(function () {
	"use strict"
	if (!window.UI) {
		window.UI = {}
	}
})()
/**
 * message弹层提示
 * @param {*} params
 */
function $message(params) {
	const body = document.getElementsByTagName("body")[0]
	const msgDom = window.Maizi.createEl("div", {
		id: "alert-ui",
	})
	msgDom.innerHTML = params.msg
	msgDom.classList.add(`message-${params.type}`)
	//添加至页面
	console.log(msgDom)

	body.appendChild(msgDom)
	//show
	show(msgDom)
	//hide
	hide(msgDom)
	//remove
	remove(msgDom)
}
window.UI.$message = $message
/**
 * message弹层 显示
 * @param {*} node
 */
function show(node) {
	node.timerShow = null
	node.timerShow = setTimeout(function () {
		node.classList.add("show")
		clearTimeout(node.timerShow)
	}, 30)
}
window.UI.show = show

/**
 * message弹层 隐藏
 * @param {*} node
 */
function hide(node) {
	node.timerHide = null
	node.timerHide = setTimeout(function () {
		node.classList.remove("show")
		clearTimeout(node.timerHide)
	}, 2000)
}
window.UI.hide = hide
/**
 *remove 节点
 */
function remove(node) {
	node.timerRemove = null
	node.timerRemove = setTimeout(function () {
		body.removeChild(node)
		clearTimeout(node.timerRemove)
	}, 2000)
}
window.UI.remove = remove
