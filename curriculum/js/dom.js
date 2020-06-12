/********************获取元素*********************/
const divDom = window.Maizi.$("table-data-wrap")
//创建table
const tableDom = window.Maizi.createEl("table")
//添加信息 按钮
const addInfo = window.Maizi.getClassName("addInfo")
//获取弹层
const infoDialog = window.Maizi.$("info-dialog")
//获取关闭按钮
const closeDialog = window.Maizi.getClassName("close-dialog")
//获取faceView
const faceView = document.querySelector(".face-view")
//获取faceViewList
const faceViewList = document.querySelector(".face-view-list")
//获取删除按钮  x
const faceDelBtn = document.querySelector(".face-del")
//存储li的空间，添加高光
let faceSave = null
//username
const inputUser = window.Maizi.$("username")
//body
const body = document.getElementsByTagName("body")[0]
