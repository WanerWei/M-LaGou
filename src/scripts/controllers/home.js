// 获取模板文件
import homeTpl from '../views/home.html'

// 页面插入模板文件的变量(函数)
const render = () => {
    document.querySelector("#root").innerHTML = homeTpl
    changeTab()
}

// 事件委托 选项卡
const changeTab = () => {
    $('nav li').on('tap', function() {
        let hashs = ['#position', '#search', '#profile']
        location.hash = hashs[$(this).index()]
        $(this).addClass('active').siblings().removeClass('active')
    })
}


// 导出 插入模板的变量(函数)，在app.js中获取
export default {
    // ES6新增简写方法，当对象中的 key 与 value 相一致时，可以只写一个
    render
}


