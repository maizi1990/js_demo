/**
 * ***************************主要业务函数***********************************
 */
/**
 * ApI获取头像的 回调函数
 * @param {*} data
 */
function handlerFaceListCallback(data) {
	const requestData = data.data
	let liHtml = ""
	for (let i = 0; i < requestData.length; i++) {
		liHtml += `<li>
									<img src="${requestData[i]}" alt="">
							</li>`
	}
	faceViewList.innerHTML = liHtml

	//console.log(requestData)
}
/**头像更新
 *
 */
function faceUpdate(params) {
	//添加头像
	if (params.type === "add") {
		if (params.getImg) {
			params.getImg.src = params.srcTarget
		} else {
			params.createImg.src = params.srcTarget
			faceView.appendChild(params.createImg)
		}
	}
	//删除头像
	if (params.type === "del") {
		if (params.getImg) {
			faceView.removeChild(params.getImg)
		}
	}
}
