/**
 * 表格样式属性
 */
const styles = {
	width: "100%",
	border: "0",
	cellpadding: "0",
	cellspacing: "0",
	id: "table-data-wrap",
}
window.Maizi.setAttr(tableDom, styles)

/**
 * 表格主体数据
 */
function createTbody() {
	let tbodyHtml = `<tbody>`
	let len = tableTbodyData.length
	for (let i = 0; i < len; i++) {
		const data = tableTbodyData[i]
		//tr开始
		tbodyHtml += `<tr>`
		//创建td 头像
		tbodyHtml += createTdFace(data.face)
		//创建td 姓名
		tbodyHtml += createTdName(data.name)
		//创建td 性别
		tbodyHtml += createTdGender(data.face)
		//创建td 年龄
		tbodyHtml += createTdAge(data.age)
		//创建td 手机号
		tbodyHtml += createTdPhone(data.phone)
		//创建td 国家
		tbodyHtml += createTdCountry(data.country)
		//创建td 爱好
		tbodyHtml += createTdlike(data.like)
		//创建td 头衔
		tbodyHtml += createTdRank(data.rank)
		//创建td 操作
		tbodyHtml += createTdOprate()
		//tr结束
		tbodyHtml += `</tr>`
	}

	tbodyHtml += `</tbody>`
	return tbodyHtml
}

/**
 * 生成表头+主体
 */
tableDom.innerHTML = createThead() + createTbody()
divDom.appendChild(tableDom)

function dialogShow() {
	infoDialog.classList.add("dialog-show")
}
function dialogHide() {
	infoDialog.classList.remove("dialog-show")
}
//点击 添加信息 ，弹层显示
window.Maizi.addEvent(addInfo, "click", dialogShow)
//点击 关闭
window.Maizi.addEvent(closeDialog, "click", dialogHide)
//点击 faceView
window.Maizi.addEvent(faceView, "click", function () {
	handlerFaceList()
})
/**
 * ************************头像区域 处理*********************************************
 * *******************************************************************************
 */
//点击 faceViewList----事件委托
window.Maizi.addEvent(faceViewList, "click", function (e) {
	//创建大头像节点
	var createImg = window.Maizi.createEl("img")
	//判断该节点是否存在（防止生成很多img）
	var getImg = faceView.getElementsByTagName("img")[0]

	//事件对象  e.target
	const nodeName = e.target.nodeName.toLowerCase() //img 或者 li
	let srcTarget = ""
	//清除头像高光
	if (faceSave) {
		faceSave.classList.remove("active")
	}
	if (nodeName === "img") {
		srcTarget = e.target.src
		//存储li
		faceSave = e.target.parentNode
	} else if (nodeName === "li") {
		//获取到img节点
		const nodeImg = e.target.getElementsByTagName("img")[0]
		srcTarget = nodeImg.src
		//存储li
		faceSave = e.target
	}
	//添加头像高光
	faceSave.classList.add("active")
	faceUpdate({
		createImg,
		getImg,
		srcTarget,
		type: "add",
	})
})
/**
 * 点击 删除头像按钮
 */
window.Maizi.addEvent(faceDelBtn, "click", function (e) {
	//阻止事件冒泡
	window.Maizi.stopBubble(e)
	//获取到img节点
	const getImg = faceView.getElementsByTagName("img")[0]
	//移除img节点
	faceUpdate({
		getImg,
		type: "del",
	})
})

inputUser.onblur = function () {
	let val = this.value
	if (!val) {
		//alert("姓名不能为空！")
		window.UI.$message({
			type: "error",
			msg: "姓名不能为空！",
		})
	}
}
