import request from "@/api/oldApi/request";

// 分页查询互换资产列表
export function querySwapInstrumentList(data) {
  return request({
    url: "/swap/queryInstrumentList",
    method: "post",
    data,
  });
}

// 根据资产id查询互换资产详情
export function getSwapInstrumentDetail(data) {
  return request({
    url: "/swap/getInstrumentDetailById",
    method: "post",
    data,
  });
}

// 新建或更新互换资产
export function saveSwapInstrument(data) {
  return request({
    url: "/swap/createUpdateInstrument",
    method: "post",
    data,
  });
}

// 根据资产id列表批量删除互换资产
export function batchDeleteSwapInstrument(data) {
  return request({
    url: "/swap/batchDeleteInstrumentAllDataByIdList",
    method: "post",
    data,
  });
}

// 分页查询互换资产估值记录列表
export function querySwapValuationRecordList(data) {
  return request({
    url: "/swapInstrumentValuationRecord/queryValuationRecordList",
    method: "post",
    data,
  });
}

// 根据估值记录id列表批量删除互换估值记录及相关记录
export function batchDeleteSwapValuationRecord(data) {
  return request({
    url: "/swapInstrumentValuationRecord/batchDeleteValuationRecordByIdList",
    method: "post",
    data,
  });
}

// 根据估值记录id查询估值记录详情
export function getValuationRecordDetailById(data) {
  return request({
    url: "/swapInstrumentValuationRecord/getValuationRecordDetailById",
    method: "post",
    data,
  });
}

// 互换现金流试算
export function calculateSwapCashFlow(data) {
  return request({
    url: "/swapInstrumentPricing/calculateCashflow",
    method: "post",
    data,
  });
}

// 互换估值试算
export function calculateSwapValuation(data) {
  return request({
    url: "/swapInstrumentPricing/calculateValuation",
    method: "post",
    data,
  });
}

// 查询互换估值记录详情
export function getValuationRecordDetail(data) {
  return request({
    url: "/swap/getValuationRecordDetail",
    method: "post",
    data,
  });
}

// 查询互换资产信息记录
export function getInstrumentRecord(data) {
  return request({
    url: "/swap/getInstrumentRecord",
    method: "post",
    data,
  });
}

// 查询互换资产现金流列表
export function getCashFlowList(data) {
  return request({
    url: "/swap/getCashFlowList",
    method: "post",
    data,
  });
}
// 批量查询汇率
export function batchQueryExchangeRate(data) {
  return request({
    url: "/ths/exchangeRate/batchQuery",
    method: "post",
    data,
  });
}
// 进行压力测试比较
export function calculateStressCompare(data) {
  return request({
    url: "/swapInstrumentPricing/calculateStressCompare",
    method: "post",
    data,
  });
}
