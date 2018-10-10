
// 路由
function Router() {
    this.routes = {}
    this.currentHash = ''
}

var noop = function(){}
//                  #position等的hash  所对应的渲染页面的回调，调用时会传入
Router.prototype.route = function(hash, cb) {
    this.currentHash = hash
    this.routes[this.currentHash] = cb || function(){}
}


// 路由/局部刷新
Router.prototype.refresh = function() {
    // 获取当前的hash   ||  文档第一次加载完成，做一个默认值
    let hash = location.hash || "#position"
    this.currentHash = hash;
    this.routes[this.currentHash]();
    this.switchTabbar()
}

// tabbar switch
Router.prototype.switchTabbar = function() {
    let hashs = ['#position', '#search', '#profile'];
    // 利用 indexOf 取得下标
    let index = hashs.indexOf(this.currentHash)
    $('nav li')
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass('active')
}

// 路由切换监听
Router.prototype.init = function() {
    // 第一次加载的时候
    window.addEventListener('load', this.refresh.bind(this))
    // 监听url的hash值的变化(#后的部分)-->局部刷新
    window.addEventListener('hashchange', this.refresh.bind(this))
}

// 导出
export default Router