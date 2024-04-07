import { request } from "./http";


// 请求柱状图的数据
export function getDataBar() {
    return request({
        url: '/radar'
    })
}




