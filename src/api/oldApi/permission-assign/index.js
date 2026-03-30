import request from "@/api/oldApi/request";

// 查询权限分配列表
export function getPermiList(data) {
  return request({
    url: `/portfolio/user/auth/query/list/page`,
    method: "post",
    data,
  });
}

// 批量删除权限分配
export function batchDeletePermi(data) {
  return request({
    url: `/portfolio/user/auth/batch/delete`,
    method: "post",
    data,
  });
}

// 新增删除权限分配
export function creatPermi(data) {
  return request({
    url: `/portfolio/user/auth/create`,
    method: "post",
    data,
  });
}

// 更新权限分配
export function updatePermi(data) {
  return request({
    url: `/portfolio/user/auth/update`,
    method: "post",
    data,
  });
}

// 获取组合列表
export function getPortFolioListPage(data) {
  return request({
    url: `/portfolio/query/list/auth/page`,
    method: "post",
    data,
  });
}

// 获取授权人员
export function getUserInformationByPortfolioId(portfolioId) {
  return request({
    url: `/portfolio/user/auth/getUserInformationByPortfolioId/${portfolioId}`,
    method: "post",
  });
}

// 获取未授权人员
export function getNotAuthUserInformationByPortfolioId(portfolioId) {
  return request({
    url: `/portfolio/user/auth/notAuthorization/getUserInformationByPortfolioId/${portfolioId}`,
    method: "post",
  });
}

// 投资组合批量授权
export function batchAuthorization(data) {
  return request({
    url: `/portfolio/user/auth/batchAuthorization`,
    method: "post",
    data,
  });
}
