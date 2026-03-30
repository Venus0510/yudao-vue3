/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-09-12 10:57:18
 * @LastEditors: Edward
 * @LastEditTime: 2024-01-30 14:06:36
 * @ModuleName: 场外衍生品模块
 */
import request from "@/api/oldApi/request";

// 分页查询场外衍生品类型列表
export function getDerivativeClsList(data) {
  return request({
    url: "/derivative/class/list",
    method: "post",
    data,
  });
}

// 分页查询场外衍生品条款列表
export function getDerivativeClsConList(data) {
  return request({
    url: "/derivative/class/condition/list",
    method: "post",
    data,
  });
}

// 创建或更新场外衍生品类型
export function createUpdateDerivativeCls(data) {
  return request({
    url: "/derivative/class/create-update",
    method: "post",
    data,
  });
}

// 根据id批量删除场外衍生品类型
export function batchDeleteDerivativeCls(data) {
  return request({
    url: "/derivative/class/batch/deleted",
    method: "post",
    data,
  });
}

// 根据id批量删除场外衍生品条款
export function batchDeleteDerivativeClsCon(data) {
  return request({
    url: "/derivative/class/condition/batch/deleted",
    method: "post",
    data,
  });
}

// 创建或更新场外衍生品条款
export function createUpdateDerivativeClsCon(data) {
  return request({
    url: "/derivative/class/condition/create-update",
    method: "post",
    data,
  });
}

// 根据id查询场外衍生品类型详情
export function getDerivativeClsDetail(data) {
  return request({
    url: "/derivative/class/detail",
    method: "post",
    data,
  });
}
// 查询场外衍生品品列表
export function getDerivativeInstrumentList(data) {
  return request({
    url: "/derivativeInstrument/queryPageDerivativeInstrumentList",
    method: "post",
    data,
  });
}
// 新增场外衍生品品资产持仓数据
export function createDerivativePositionRecord(data) {
  return request({
    url: "/positionRecord/addObject/createDerivativePositionRecord",
    method: "post",
    data,
  });
}

// 业务管理 资产列表查询场外衍生品列表
export function queryPageDerivativeInstrumentList(data) {
  return request({
    url: "/derivativeInstrument/queryPageDerivativeInstrumentList",
    method: "post",
    data,
  });
}

// 业务管理 资产列表查询场外衍生品列表
export function createDerivativeInstrument(data) {
  return request({
    url: "/derivativeInstrument/createDerivativeInstrument",
    method: "post",
    data,
  });
}

// 业务管理 资产列表查询场外衍生品列表
export function batchDerivativeInstruments(data) {
  return request({
    url: "/derivativeInstrument/batchDerivativeInstruments",
    method: "post",
    data,
  });
}

// 业务管理  资产列表场外衍生品的修改
export function createUpdateDerive(data) {
  return request({
    url: "/derivativeInstrument/class/create-update",
    method: "post",
    data,
  });
}

// 业务管理 资产列表 场外衍生品 查询期权类型
export function queryOptionTypeList(data) {
  return request({
    url: "/derivativeOptionType/queryOptionTypeList",
    method: "post",
    data,
  });
}
// 删除期权类型
export function batchDeleteOptionType(data) {
  return request({
    url: "/derivativeOptionType/batchDeleteOptionType",
    method: "post",
    data,
  });
}
// 新建或修改期权类型
export function createUpdateOptionType(data) {
  return request({
    url: "/derivativeOptionType/createUpdateOptionType",
    method: "post",
    data,
  });
}
// 新建或修改场外衍生品条款
export function createUpdateCondition(data) {
  return request({
    url: "/derivativeCondition/createUpdateCondition",
    method: "post",
    data,
  });
}
// 获取场外衍生品条款列表
export function queryConditionList(data) {
  return request({
    url: "/derivativeCondition/queryConditionList",
    method: "post",
    data,
  });
}
// 批量删除场外衍生品条款
export function batchDeleteCondition(data) {
  return request({
    url: "/derivativeCondition/batchDeleteCondition",
    method: "post",
    data,
  });
}

// 业务管理 资产列表 场外衍生品 字典
export function queryDerivativeValue() {
  return request({
    url: "/derivativeInstrument/queryDerivativeValue",
    method: "post",
  });
}

// 场外衍生品品批量估值
export function batchDeriveValuation(data) {
  return request({
    url: "/derivative/valuation/batch/val",
    method: "post",
    data,
  });
}

// 估值单记录场外衍生品品资产信息
export function getOne(data) {
  return request({
    url: "/derivativeInstrumentRecord/getOne",
    method: "post",
    data,
  });
}

// 估值单记录场外衍生品品观察日数据
export function getObsDataRecord(data) {
  return request({
    url: "/derivativeObsDataRecord/queryPageList",
    method: "post",
    data,
  });
}

// 估值单记录场外衍生品品结算条款记录
export function getConditionDataRecord(data) {
  return request({
    url: "/derivativeConditionDataRecord/queryPageList",
    method: "post",
    data,
  });
}

// 获取资产列表
export function getDeriveList(data) {
  return request({
    url: "/derivativeInstrument/queryPageDerivativeInstrumentList",
    method: "post",
    data,
  });
}

// 场外衍生品列表批量删除
export function batchDeleteDerive(data) {
  return request({
    url: "/derivativeInstrument/batchDerivativeInstruments",
    method: "post",
    data,
  });
}

// 获取场外衍生品资产详情
export function getDeriveDetail(instrument_id) {
  return request({
    url: `/derivativeInstrument/getDerivativeInstrument/${instrument_id}`,
    method: "post",
  });
}
// 查询结算条款列表
export function queryConditionDataList(data) {
  return request({
    url: "/derivativeConditionData/queryConditionDataList",
    method: "post",
    data,
  });
}
// 创建修改结算条款列表
export function createUpdateConditionData(data) {
  return request({
    url: "/derivativeConditionData/createUpdateConditionData",
    method: "post",
    data,
  });
}
// 删除结算条款列表
export function batchDeleteConditionData(data) {
  return request({
    url: "/derivativeConditionData/batchDeleteConditionData",
    method: "post",
    data,
  });
}
// 根据资产id查询估值结果记录列表--分页
export function queryPageListByInstrumentId(data) {
  return request({
    url: "/derivativeValuationRecord/queryPageListByInstrumentId",
    method: "post",
    data,
  });
}

// 获取场外衍生品底层资产数据
export function queryDerivativeMarketDataList(data) {
  return request({
    url: `/derivativeMarketData/queryDerivativeMarketDataList`,
    method: "post",
    data,
  });
}

// 查询底层资产代码
export function queryDerivativeMarketDataCodeList(data) {
  return request({
    url: `/derivativeMarketData/queryDerivativeMarketDataCodeList`,
    method: "post",
    data,
  });
}

// 创建或更新底层资产代码
export function createOrUpdateDeMarketData(data) {
  return request({
    url: `/derivativeMarketData/create-update`,
    method: "post",
    data,
  });
}

// 更新底层资产代码
export function updateQueryInfo(data) {
  return request({
    url: `/derivativeMarketData/updateQueryInfo`,
    method: "post",
    data,
  });
}

// 删除底层资产代码
export function batchDeleteDeMarketData(data) {
  return request({
    url: `/derivativeMarketData/batch/delete`,
    method: "post",
    data,
  });
}
// 场外衍生品估值试算
export function derivativeTrialVal(data) {
  return request({
    url: `/derivative/valuation/trail/val`,
    method: "post",
    data,
  });
}
// 场外衍生品估值试算
export function derivativeAnalyticsTrialVal(data) {
  return request({
    url: `/derivative/valuation/trail/analytics/val`,
    method: "post",
    data,
  });
}
// 根据结算条款ID，获取结算条款详情内容
export function getDerivativeConditionData(data_id) {
  return request({
    url: `/derivativeConditionData/getDerivativeConditionData/${data_id}`,
    method: "post",
  });
}
// 创建或更新观察日数据
export function createUpdateObsData(data) {
  return request({
    url: `/derivativeObsData/createUpdateObsData`,
    method: "post",
    data,
  });
}

// 根据结算条款ID，查询观察日列表
export function queryPageObsDataList(data) {
  return request({
    url: `/derivativeObsData/queryPageObsDataList`,
    method: "post",
    data,
  });
}

// 批量删除观察日数据
export function batchDeleteObsData(data) {
  return request({
    url: `/derivativeObsData/batchDeleteObsData`,
    method: "post",
    data,
  });
}
// 批量删除场外衍生品品估值记录
export function batchDeleteDeriveValuationRecord(data) {
  return request({
    url: `/derivativeValuationRecord/batchDeleteValuationRecord`,
    method: "post",
    data,
  });
}
