import request from "@/api/oldApi/request";

// 查询所有管理人列表
export function getAllManagerList(data) {
  return request({
    url: "/fund-manager/queryAllPageManagerList",
    method: "post",
    data,
  });
}
// 查询我的管理人列表
export function getMineManagerList(data) {
  return request({
    url: "/fund-manager/queryMinePageManagerList",
    method: "post",
    data,
  });
}
// 查询被授权的管理人列表
export function getAuthorizationManagerList(data) {
  return request({
    url: "/fund-manager/queryAuthorizationPageManagerList",
    method: "post",
    data,
  });
}

// 根据id批量删除管理人
export function batchDeleteManagerById(data) {
  return request({
    url: `/fund-manager/manager/batch/delete`,
    method: "post",
    data,
  });
}

// 新建管理人
export function createManager(data) {
  return request({
    url: `/fund-manager/manager/create`,
    method: "post",
    data,
  });
}
// 投资组合列表
export function getPortfolioList(data) {
  return request({
    url: `/portfolio/query/list/page`,
    method: "post",
    data,
  });
}

// 根据管理人id获取管理人详情
export function getAdminManager(data) {
  return request({
    url: `/fund-manager/getFundManager`,
    method: "post",
    data,
  });
}

// 更新管理人
export function updateManager(data) {
  return request({
    url: `/fund-manager/manager/update`,
    method: "post",
    data,
  });
}

// 查询业务条线
export function getStripeLine(dictType) {
  return request({
    url: `/system/dict/data/type/${dictType}`,
    method: "get",
  });
}

// 通过管理人id查询是否有进入详情页的权限
export function checkAuthByManagerId(data) {
  return request({
    url: `/portfolio/user/auth/check/relation/by/managerId`,
    method: "post",
    data,
  });
}
// 通过管理人ID,判断该管理人的负责人是否为当操作者
export function checkResponsibleByManagerId(manager_id) {
  return request({
    url: `/fund-manager/checkResponsibleByManagerId/${manager_id}`,
    method: "post",
  });
}
