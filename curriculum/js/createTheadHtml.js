//创建表头
function createThead() {
	let theadHtml = `<thead><tr>`
	tableTheadData.forEach((e, i) => {
		//检测是否有width
		let thWidth = e.width ? `width="${e.width}"` : ""
		//检测是否有id
		let id = e.id ? `id="${e.id}"` : ""
		//字符串拼接
		theadHtml += `<th ${thWidth} ${id}>${e.label}</th>`
	})
	theadHtml += `</tr></thead >`
	return theadHtml
}
