/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-09-18 10:45:27
 * @LastEditors: Edward
 * @LastEditTime: 2023-10-27 11:03:15
 * @ModuleName: 投资组合
 */

import request from "@/api/oldApi/request";

// 批量删除投资组合
export function batchDeletePortfolioById(data) {
  return request({
    url: `/portfolio/batch/delete`,
    method: "post",
    data,
  });
}

// 创建投资组合
export function createPortfolio(data) {
  return request({
    url: `/portfolio/create`,
    method: "post",
    data,
  });
}

// 查询所有管理人列表
export function getAllManager(data) {
  return request({
    url: `/fund-manager/query/list/allManager`,
    method: "post",
    data,
  });
}

// 更新产品信息
export function updatePortFolio(data) {
  return request({
    url: `/portfolio/update`,
    method: "post",
    data,
  });
}

// 获取投资组合详情页非上市股权列表信息
export function getAssetStockList(data) {
  return request({
    // url: `/fixed-income/portfolio/position/list`,
    url: `/equity/portfolio/equity/list`,
    method: "post",
    data,
  });
}

export function getValuationSheet(data) {
  return request({
    // url: `/fixed-income/portfolio/position/list`,
    url: `/valuationSheet/query/all/sheet/list`,
    method: "post",
    data,
  });
}

// 创建投资组合估值单
export function createValuationSheet(data) {
  return request({
    url: `/valuationSheet/class/create_update`,
    method: "post",
    data,
  });
}

// 获取投资组合详情
export function getOneInfo(data) {
  return request({
    url: `/portfolio/get/one/info`,
    method: "post",
    data,
  });
}

// 获取权限数据
export function getPortFolioPermissionData(data) {
  return request({
    url: `/portfolio/user/auth/query/list/page`,
    method: "post",
    data,
  });
}

// 投资组合下批量删除估值单
export function deleteValuationSheetById(data) {
  return request({
    url: `/valuationSheet/batchDeleteValuationSheet`,
    method: "post",
    data,
  });
}

// 查询投资组合下的非标债权列表信息
export function getManagerPositionFixedList(data) {
  return request({
    url: `/positionRecord/queryFixedIncomePositionRecords`,
    method: "post",
    data,
  });
}

// 查询投资组合下非上市股权列表信息
export function getPositionStockList(data) {
  return request({
    url: `/positionRecord/queryEquityPositionRecords`,
    method: "post",
    data,
  });
}
// 获取标准债权资产持仓数据列表
export function getPositionStandardList(data) {
  return request({
    url: `/positionRecord/queryStandardBondPositionRecords`,
    method: "post",
    data,
  });
}
// 获取场外衍生品资产持仓数据列表
export function getPositionDerivativeList(data) {
  return request({
    url: `/positionRecord/queryDerivativePositionRecords`,
    method: "post",
    data,
  });
}

// 投资组合下非上市股权列表的删除
export function deletePositionStockById(data) {
  return request({
    url: `/positionRecord/batchEquityPositionRecords`,
    method: "post",
    data,
  });
}

// 投足组合下非上市股权列表的新增
export function buildPositionStock(data) {
  return request({
    url: `/positionRecord/addObject/createEquityPositionRecord`,
    method: "post",
    data,
  });
}

// 获取投资组合下非标债权列表
export function getInstrumentAllList(data) {
  return request({
    url: `/fixed-income/portfolio/instrument/list/All`,
    method: "post",
    data,
  });
}

// 获取投资组合下非标债权列表
export function getStockAllList(data) {
  return request({
    url: `/equity/portfolio/equity/list/all`,
    method: "post",
    data,
  });
}

// 根据id批量删除持仓记录
export function deletePositionById(data) {
  return request({
    url: `/positionRecord/batchDeleteFixedIncomePositionRecords`,
    method: "post",
    data,
  });
}

// 查询所有投资组合
export function queryPortFolioListAll(data) {
  return request({
    // url: `/portfolio/query/list/all`,
    url: `/portfolio/query/list/auth/all`,
    method: "post",
    data,
  });
}

// 查询所有用户列表
export function queryUserListAll(data) {
  return request({
    url: `/system/user/query/user/list`,
    method: "post",
    data,
  });
}

// 通过投资组合ID查询用户是否有该投资组合权限
export function checkAuthByPortfolioId(portfolio_id) {
  return request({
    url: `/portfolio/checkAuthByPortfolioId/${portfolio_id}`,
    method: "post",
  });
}
// 我的投资组合列表页面组合信息查询
export function getMinePortfolioList(data) {
  return request({
    url: `/portfolio/query/mine/list/page`,
    method: "post",
    data,
  });
}
// 被授权的投资组合列表页面组合信息查询;
export function getAuthorizationPortfolioList(data) {
  return request({
    url: `/portfolio/query/authorization/list/page`,
    method: "post",
    data,
  });
}
// 通过估值方案ID,判断该估值方案的负责人是否为当操作者;
export function checkResponsibleByPortfolioId(portfolio_id) {
  return request({
    url: `/portfolio/checkResponsibleByPortfolioId/${portfolio_id}`,
    method: "post",
  });
}
// 获取固收资产持仓数据列表
export function queryBindFixedIncomePositionList(data) {
  return request({
    url: `/fixedIncomePosition/queryBindFixedIncomePositionList`,
    method: "post",
    data,
  });
}
// 获取指定组合和负责人下的持仓日期列表
export function queryPositionDateList(data) {
  return request({
    url: `/fixedIncomePosition/queryPositionDateList`,
    method: "post",
    data,
  });
}
// 批量删除固收资产持仓数据
export function batchDeleteFixedIncomePosition(data) {
  return request({
    url: `/fixedIncomePosition/batchDeleteFixedIncomePosition`,
    method: "post",
    data,
  });
}
// 获取组合持仓日期列表
export function getPortfolioPositionDateList(data) {
  return request({
    url: `/portfolio/getPortfolioPositionDateList`,
    method: "post",
    data,
  });
}
// 查询产品组合持仓饼图数据
export function getPortfolioPositionValuationPie(data) {
  return request({
    url: `/portfolio/getPortfolioPositionValuationPie`,
    method: "post",
    data,
  });
}
// 查询标债归因分析初始化数据
export function queryStandardBondAnalysisInitData(data) {
  return request({
    url: `/standardBondInstrument/queryStandardBondAnalysisInitData`,
    method: "post",
    data,
  });
}
// 计算现金流和点差
export function calculateCashflowAndCalibratedData(data) {
  return request({
    url: `/standardBondTrail/calculateCashflowAndCalibratedData`,
    method: "post",
    data,
  });
}
// 批量现金流折现估值
export function discountedCashflowValuation(data) {
  return request({
    url: `/standardBondTrail/discountedCashflowValuation`,
    method: "post",
    data,
  });
}
// 获取产品基本信息
export function getPortfolioBasicData(portfolio_code) {
  return request({
    url: `/portfolio/getPortfolioBasicData/${portfolio_code}`,
    method: "post",
  });
}
// 获取产品和基准指数净值曲线图数据
export function getPortfolioAndIndexNetValuePlotData(data) {
  return request({
    url: `/portfolio/getPortfolioAndIndexNetValuePlotData`,
    method: "post",
    data,
  });
}
// 全量保存组合下的标债持仓数据
export function savePositionDataListByPortfolio(data) {
  return request({
    url: `/standardBondPositionData/savePositionDataListByPortfolio`,
    method: "post",
    data,
  });
}

// 查询标债持仓日期列表
export function queryStandardBondPositionDateList(portfolio_id, data) {
  return request({
    url: `/standardBondPositionData/queryStandardBondPositionDateList/${portfolio_id}`,
    method: "post",
    data,
  });
}
// 查询产品估值方案
export function queryValuationMethodList(data) {
  return request({
    url: `/fundManagerValuationMethod/queryValuationMethodList`,
    method: "post",
    data,
  });
}
// 持仓数据批量分析
export function positionDataBatchAnalysis(data) {
  return request({
    url: `/standardBondAnalyzeSheet/batchAnalyze`,
    method: "post",
    data,
  });
}

// 批量上传
export const importPositionDataWithExcel = (data) => {
  return request({
    url: `/portfolio/importPositionDataWithExcel`,
    method: "POST",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
};

// 根据信息创建该项目下的投资组合
export function createProjectPortfolio(data) {
  return request({
    url: `/portfolio/project/create`,
    method: "post",
    data,
  });
}
// 根据信息创建该项目下的投资组合
export function getProjectPortfolioByProjectId(data) {
  return request({
    url: `/portfolio/getProjectPortfolioByProjectId`,
    method: "post",
    data,
  });
}
// 查询所有授权项目的组合和公开组合
export function queryPortfolioListByUserId(data) {
  return request({
    url: `/portfolio/queryPortfolioListByUserId/All`,
    method: "post",
    data,
  });
}
