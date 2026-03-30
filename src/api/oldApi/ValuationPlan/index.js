/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-07-17 14:58:04
 * @LastEditors: Edward
 * @LastEditTime: 2023-10-19 15:21:51
 */
// 估值方案
import request from "@/api/oldApi/request";
// 查询估值方案列表分页
export function queryPageOptionList(data) {
  return request({
    url: `/valuationOption/queryPageOptionList`,
    method: "post",
    data,
  });
}
// 查询估值方案列表不分页
export function queryAllOptionList(data) {
  return request({
    url: `/valuationOption/queryAllOptionList`,
    method: "post",
    data,
  });
}
// 查询我的估值方案列表
export function queryMinePageOptionList(data) {
  return request({
    url: `/valuationOption/queryMinePageOptionList`,
    method: "post",
    data,
  });
}
// 查询授权估值方案列表
export function queryAuthorizationPageOptionList(data) {
  return request({
    url: `/valuationOption/queryAuthorizationPageOptionList`,
    method: "post",
    data,
  });
}
// 通过估值方案ID,判断该估值方案的负责人是否为当操作者
export function checkResponsibleByValuationOptionId(valuation_option_id) {
  return request({
    url: `/valuationOption/checkResponsibleByValuationOptionId/${valuation_option_id}`,
    method: "post",
  });
}

// 新增估值方案
export function createUpdateVOption(data) {
  return request({
    url: `/valuationOption/class/create_update`,
    method: "post",
    data,
  });
}

// 删除估值方案
export function deleteVOption(data) {
  return request({
    url: `/valuationOption/delete`,
    method: "post",
    data,
  });
}

// 估值方案批量删除
export function batchDeleteVOption(data) {
  return request({
    url: `/valuationOption/batch/delete`,
    method: "post",
    data,
  });
}

// 获取估值方案详情信息
export function getDetail(data) {
  return request({
    url: `/valuationOption/getValuationOptionById`,
    method: "post",
    data,
  });
}

// 查询所有管理人不分页
export function getAllManager(data) {
  return request({
    url: `/fund-manager/query/list/allManager`,
    method: "post",
    data,
  });
}

// 投资组合下适用组合表格
export function getApplicableComb(data) {
  return request({
    url: `/valuationOption/queryPagePortfolioList`,
    method: "post",
    data,
  });
}

// 通过管理人id查询是否有进入详情页的权限
export function checkAuthByValuationOptionId(data) {
  return request({
    url: `/valuationOption/checkAuthByFundManagerManagerId`,
    method: "post",
    data,
  });
}
// 获取标准债权方案列表--不分页
export function getStandardBondSchemaList(data) {
  return request({
    url: `/valuationOption/getStandardBondSchemaList`,
    method: "post",
    data,
  });
}
// 查询组合下的非标债权方案汇总列表--分页
export function getFixedSummaryList(data) {
  return request({
    url: `/fixed-income/schema/summary/list/page`,
    method: "post",
    data,
  });
}
