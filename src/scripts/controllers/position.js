
import positionTpl from "../views/position.html";
import positionListTpl from '../views/position-list.html'
import positionModel from '../models/position';

// const render = () => {
//     document.querySelector("main").innerHTML = positionTpl
// }

// 异步 等待所有数据获取后才渲染
// const render = async () => {
//     let result = await positionModel.list()
//     let list = result.content.data.page.result
//     let template = Handlebars.compile(positionTpl)
//     let html = template({ list })
//     $('main').html(html)
// }

// export default {
//     render
// }

// 当页面加载更多时保存当前页面的数据
var pageNo = 1
var dataSource = []

// 插入包含list的模板
const render = async () => {
    $('main').html(positionTpl)
    // 异步等到 数据传过来时才声明、赋值
    let list = dataSource = (await positionModel.list()).content.data.page.result
    // 等到list插入到ul后才执行 scroll()
    await renderList(list)
    scroll()
}

const scroll = () => {
    // better-scroll,一款解决移动端屏幕的插件
    let posScroll = new BScroll('main',{
        // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件
        probeType: 2,
        startY : -40
    })

    let head = $('.head img'),
        foot = $('.foot img')

    //  委托屏幕滚动事件
    posScroll.on('scroll', function() {
        // scroll 纵轴坐标
        // 从 main 顶部往下 是负值，越往下，负值越大
        // 当滚动距离大于 main 的实际高度，则会大于0
        let y = this.y,
        // scroll 最大纵向滚动位置。
        // 备注：scroll 纵向滚动的位置区间是 0 - maxScrollY，并且 maxScrollY 是负值。
            maxY = this.maxScrollY - y

        // 当拉出 ‘下拉刷新’ ，旋转箭头
        if( y>= 0){
            head.addClass('up')
        }

        // 当拉出 ‘下拉刷新’，旋转箭头
        if(maxY >= 0){
            foot.addClass('down')
        }
    })

    // 委托 当滚动停止，即滑动屏幕、手指离开屏幕后触发
    posScroll.on('scrollEnd', async function() {
        let y = this.y,
            maxY = this.maxScrollY - y;


        // 下拉刷新

        // 未滑出 下拉刷新 即取消了刷新
        if(y >= -40 && y <0){
            // 滚动到指定位置 x y time 动画类型
            this.scrollTo(0, -40, 400, 'bounce')
        // 滑出 下拉刷新 即刷新
        }else if(y >=0){
            // 替换成 loading 的img
            head.attr('src','/images/ajax-loader.gif')

            // 执行 refresh()方法，即获取新数据
            let result = await positionModel.refresh()
            let list = dataSource = [
                // 扩展运算
                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，
                ...result.content.data.page.result,
                ...dataSource
            ]

            // 重新传入list，渲染页面
            renderList(list)

            // 刷新
            this.refresh()

            // 重新 传入 箭头 img
            head.attr('src', 'images/arrow.png')
                .removeClass('.up')
            // 回滚
            this.scrollTo(0,-40)
        }    

        // 上拉刷新
        if(maxY >= -40 && maxY <0){
            this.scrollTo(0,this.maxScrollY+40,300,'swipe')
            
        }else if(maxY >=0){
            foot.attr('src','/images/ajax-loader.gif')

             // 执行 loadMore()方法，即获取新数据
            let result = await positionModel.loadMore(++pageNo)
            let list = dataSource = [
                // 扩展运算
                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，
                ...dataSource,
                ...result.content.data.page.result,
            ]

            // 重新传入list，渲染页面
            renderList(list)

            // 刷新
            this.refresh()

            // 重新 传入 箭头 img
            foot.attr('src', 'images/arrow.png')
                .removeClass('.down')
            // 回滚
            this.scrollTo(0,this.maxScrollY+40)
        }
    })
}

const renderList = async (list) => {
    // 运用Handlesbars第三方渲染模板
    let template = Handlebars.compile(positionListTpl)
    let html = template({ list })
    // ul插入模板
    $('#listUl').html(html)
}

export default {
    render
}


