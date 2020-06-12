//td头像
function createTdFace(data) {
	let html = `<td>
									<div class="face">
										<span class="gender icon-${data.gender}"></span>
										<img
											src="${data.img}" alt=""
										/>
									</div>
								</td>`
	return html
}

//td姓名
function createTdName(data) {
	let html = `<td>
									<div class="people-name">
										<h4 class="name">${data.trueName}</h4>
										<span class="nickname option-05 fs-12">昵称：${data.nickName}</span>
									</div>
								</td>`
	return html
}

//td性别
function createTdGender(data) {
	let html = `<td>
									<div class="gender-wrap">
										<span class="gender icon-girl ${data.gender === "girl" ? "" : "option-05"}"
										></span>
										<span class="gender icon-boy ${data.gender === "boy" ? "" : "option-05"}" 
										></span>
									</div>
								</td>`
	return html
}

//td年龄
function createTdAge(data) {
	let html = `<td>
									<div class="age text-center">
										<p>${data.number}</p>
										<span class="option-05 fs-12">（单身狗）</span>
									</div>
								</td>`
	return html
}

//td手机号
function createTdPhone(data) {
	let html = `<td>
									<div class="phone">
										${data.code}<span class="option-05">（中国）</span><br />
										${data.number}
									</div>
								</td>`
	return html
}

//td国籍
function createTdCountry(data) {
	let html = `<td>
									<div>
										<img
											src="${data.National_flag}"
											alt="${data.name}"
										/>
										<p class="country-name" style="color:${data.color};">${data.name}</p>
									</div>
								</td>`
	return html
}

//td爱好
function createTdlike(data) {
	let likesHtml = ``
	data.forEach((e, i) => {
		likesHtml += `<span style="background-color:${e.color};">${e.tag}</span>`
	})
	let html = `<td>
									<div class="likes">
										${likesHtml}
									</div>
								</td>`
	return html
}

//td头衔
function createTdRank(data) {
	let html = `<td>
									<div class="grade">
										<span class="role-name">小白</span>
										<div class="grade-wrap icon-grade">
											<div
												class="grade-high icon-grade"
												style="width: ${16 * data.level}%;"
											></div>
										</div>
									</div>
								</td>`
	return html
}

//td操作
function createTdOprate() {
	let html = `<td>
									<div class="operation">
										<a href="javascript: void(0);" class="operation-btn">设置</a>
										<ul class="links">
											<a href="javascript: void(0);">编辑</a>
											<a href="javascript: void(0);">删除</a>
											<a href="javascript: void(0);">锁定</a>
											<a href="javascript: void(0);">收起</a>
										</ul>
									</div>
								</td>`
	return html
}
