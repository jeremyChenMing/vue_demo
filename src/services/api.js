import http from './http'
import QS from 'qs';

// 获取首页信息 /api/v1/basic/home-page?${stringify(params)}

export const getMessage = function (params = {}) {

    return http(`/api/v1/basic/info/entrepreneurial-policy-manage?${QS.stringify(params)}`)
}

// 获取资讯列表 /api/v1/basic/information-list?${stringify(params)}

// 获取资讯详情 /api/v1/basic/info/information-show?${stringify(params)}


// 获取课程列表 /api/v1/basic/course-list?${stringify(params)}

// 获取课程详情 /api/v1/basic/info/course-show?${stringify(params)}


// 获取项目列表 /api/v1/basic/item-list?${stringify(params)}

// 获取项目详情 /api/v1/basic/info/item-show?${stringify(params)}


// 获取孵化入驻列表 /api/v1/basic/incubator-list?${stringify(params)}

// 获取孵化入驻详情 /api/v1/basic/info/incubator-show?${stringify(params)}


export async function logins(params) {
    return http(`/api/v1/user/login`, {
        method: 'POST',
        data: params,
    });
}



// 创建创业政策
export async function addPolicysMessage(params) {
    return http(`/api/v1/basic/info/entrepreneurial-policy-manage`, {
        method: 'POST',
        data: params,
    });
}
// 更新创业政策
export async function updatePolicys(id, params) {
    return http(`/api/v1/basic/info/entrepreneurial-policy-manage/${id}`, {
        method: 'PUT',
        data: params,
    });
}

// 删除创业政策
export async function deletePolicys(params = {}) {
    return http(`/api/v1/basic/info/info/entrepreneurial-policy-delete`, {
        method: 'POST',
        data: params,
    });
}