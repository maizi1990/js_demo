/**
 * 表头数据
 */
const tableTheadData = [
	{ label: "头像" },
	{ label: "姓名" },
	{ label: "性别" },
	{ label: "年龄" },
	{ label: "手机号" },
	{ label: "国籍" },
	{
		label: "爱好",
		width: 200,
		id: "aaa",
	},
	{ label: "头衔" },
	{ label: "操作" },
]
/**
 * 表格主体数据
 */
const tableTbodyData = [
	{
		face: {
			gender: "boy",
			img:
				"https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1583671638490&amp;di=957e858d102bae600e6b5472843bdfe6&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg",
		},
		name: {
			trueName: "张33",
			nickName: "夏天的海",
		},
		age: {
			number: 23,
		},
		phone: {
			code: "+86",
			number: 1222222222,
		},
		country: {
			National_flag:
				"http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg",
			name: "中国",
			color: "red",
		},
		like: [
			{
				tag: "读书",
				color: "green",
			},
			{
				tag: "唱歌",
				color: "red",
			},
		],
		rank: {
			level: 1,
			name: "小白",
		},
	},
]
