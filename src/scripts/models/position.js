
const list = () => {
    // $.ajax本身就是一个promise
    return $.ajax({
        url: '/api/position/list',
        // url: "/api/listmore.json?pageNo=2&pageSize=15",
        success: (result) => {
            // console.log(result)
            return result
        }
    })
}

const refresh = () => {
    return $.ajax({
        url: '/api/position/refresh',
        success: (result) => {
            return result
        }
    })
}

const loadMore = (pageNo) => {
    return $.ajax({
        url: '/lagou/listmore.json?pageNo='+ pageNo +'&pageSize=5',
        success: (result) => {
            return result
        }
    })
}

// 导出
export default {
    list,
    refresh,
    loadMore
}
