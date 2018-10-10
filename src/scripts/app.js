
// 总入口文件
// asnyc - await 内部用的是import导入模块
// 在向ES5转化时不能与CommenJS的module.export混用
// 所以统一使用 ES6的 import

// const homeController = require('./controllers/home')
// const positionController = require("./controllers/position")

import Router from './utils/router'

import homeController from './controllers/home'
import positionController from "./controllers/position"
import searchController from './controllers/search'
import profileController from './controllers/profile'

homeController.render()

// positionController.render()

const router = new Router()
router.init()
router.route("#position", positionController.render)
router.route("#search", searchController.render)
router.route("#profile", profileController.render)
