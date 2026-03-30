import request from "@/api/oldApi/request";

//
export function getMarketData(data) {
  return request({
    url: "/marketCurveData/queryCurveDataCountsDaily",
    method: "post",
    data,
  });
}
// 查询用户配置列表
export function getTokenData(data) {
  return request({
    url: "/userConfig/query/all/list",
    method: "post",
    data,
  });
}
// 更新用户配置
export function createOrUpdateUserConfig(data) {
  return request({
    url: "/userConfig/createOrUpdate",
    method: "post",
    data,
  });
}
// 根据用户配置id删除用户配置
export function deleteUserConfigById(id) {
  return request({
    url: `/userConfig/delete/${id}`,
    method: "post",
  });
}
// 导入市场曲线
export function importMarket(curveDate) {
  return request({
    url: `/timedTask/complementCurveDate/${curveDate}`,
    method: "post",
  });
}

// AI解析行权公告
export const analyzeBondAnnouncementWithAi = (data) => {
  return request({
    url: "/exerciseAnnouncementController/analyzeExerciseAnnouncementWithAi",
    method: "POST",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 8,
    responseType: "blob",
  });
};
// AI解析估值调整公告
export const analyzeAdjustedReportWithAi = (data) => {
  return request({
    url: "/marketValuationAdjustedData/analyzeAdjustedReportWithAi",
    method: "POST",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 8,
    responseType: "blob",
  });
};

// 导入债券行权公告
export const importExerciseAnnouncementWithThs = (data) => {
  return request({
    url: "/exerciseAnnouncementController/importExerciseAnnouncementWithThs",
    method: "POST",
    data,
  });
};
// 导入投融资Excel文件
export const importInvestmentExcel = (data) => {
  return request({
    url: "/risk/importInvestmentExcel",
    method: "POST",
    data,
  });
};
// 导入风险Excel文件
export const importRiskExcel = (data) => {
  return request({
    url: "/risk/importRiskExcel",
    method: "POST",
    data,
  });
};
//  下载企业查询清单
export const downloadEnterpriseInquiry = (params) => {
  return request({
    url: "/enterpriseInquiry/download",
    method: "POST",
    params, // axios的params属性自动拼到URL后
    data: {}, // Post请求的请求体（空对象即可）
    closeResponseHandle: true,
    timeout: 1000 * 60 * 8,
    responseType: "blob",
  });
};
