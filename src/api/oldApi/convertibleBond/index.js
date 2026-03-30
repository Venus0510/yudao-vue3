// 可转债模块
import request from "@/api/oldApi/request";

// 查询列表
export function getInstrumentList(data) {
  return request({
    url: `/convertibleBondInstrument/getInstrumentList`,
    method: "post",
    data,
  });
}

// 创建/修改
export function createOrUpdateInstrument(data) {
  return request({
    url: `/convertibleBondInstrument/createOrUpdateInstrument`,
    method: "post",
    data,
  });
}

// 批量删除
export function batchDeleteInstrument(data) {
  return request({
    url: `/convertibleBondInstrument/batchDeleteInstrument`,
    method: "post",
    data,
  });
}

// 详情
export function getInstrumentDetail(data) {
  return request({
    url: `/convertibleBondInstrument/getInstrumentDetail`,
    method: "post",
    data,
  });
}
// 保存详情页所有数据
export function updateAllParam(data) {
  return request({
    url: `/convertibleBondInstrument/updateAllParam`,
    method: "post",
    data,
  });
}

// 新建或更新底层资产
export function createOrUpdateMarketData(data) {
  return request({
    url: `/convertibleBondMarketData/createOrUpdateMarketData`,
    method: "post",
    data,
  });
}

// 批量删除底层资产
export function batchDeleteMarketData(data) {
  return request({
    url: `/convertibleBondMarketData/batchDeleteMarketData`,
    method: "post",
    data,
  });
}

// 查询底层资产列表
export function getMarketDataList(data) {
  return request({
    url: `/convertibleBondMarketData/getMarketDataList`,
    method: "post",
    data,
  });
}

// 查询底层资产记录列表
export function getMarketDataRecordList(data) {
  return request({
    url: `/convertibleBondMarketDataRecord/getMarketDataRecordList`,
    method: "post",
    data,
  });
}

// 批量删除特殊条款
export function batchDeleteInstallmentCashflow(data) {
  return request({
    url: `/convertibleBondInstallmentCashflow/batchDeleteInstallmentCashflow`,
    method: "post",
    data,
  });
}

// 新建或更新特殊条款
export function createOrUpdateInstallmentCashflow(data) {
  return request({
    url: `/convertibleBondInstallmentCashflow/createOrUpdateInstallmentCashflow`,
    method: "post",
    data,
  });
}

// 查询特殊条款列表
export function getInstallmentCashflowList(data) {
  return request({
    url: `/convertibleBondInstallmentCashflow/getInstallmentCashflowList`,
    method: "post",
    data,
  });
}
// 批量删除估值记录列表
export function batchDeleteValuationRecordList(data) {
  return request({
    url: `/convertibleBondValuationRecord/batchDeleteValuationRecordList`,
    method: "post",
    data,
  });
}
// 批量估值
export function batchValuation(data) {
  return request({
    url: `/convertibleBondValuationRecord/batchValuation`,
    method: "post",
    data,
  });
}
// 批量收益率倒算（收益率校准）
export function batchYieldCalibration(data) {
  return request({
    url: `/convertibleBondValuationRecord/batchYieldCalibration`,
    method: "post",
    data,
  });
}

// 导出二叉树Excel
export function downloadTreeExcel(data) {
  return request({
    url: `/convertibleBondValuationRecord/downloadTreeExcel`,
    method: "post",
    data,
    responseType: "blob",
  });
}
// 查询单个估值记录详情
export function getValuationRecordDetail(data) {
  return request({
    url: `/convertibleBondValuationRecord/getValuationRecordDetail`,
    method: "post",
    data,
  });
}
// 查询估值记录列表
export function getValuationRecordList(data) {
  return request({
    url: `/convertibleBondValuationRecord/getValuationRecordList`,
    method: "post",
    data,
  });
}
// 查询估值记录列表
export function getInstrumentRecord(data) {
  return request({
    url: `/convertibleBondInstrumentRecord/getInstrumentRecord`,
    method: "post",
    data,
  });
}
// 查询资产信息记录列表
export function getInstrumentRecordList(data) {
  return request({
    url: `/convertibleBondInstrumentRecord/getInstrumentRecordList`,
    method: "post",
    data,
  });
}
// 
export function queryMarketDataCodeList(data) {
  return request({
    url: ``,
    method: "post",
    data,
  });
}
// 查询A股证券信息列表
export function getStockInfoList(data) {
  return request({
    url: `/marketWindAShareIntroduction/getStockInfoList`,
    method: "post",
    data,
  });
}
// 校验权限
export function checkResponsibleByInstrumentId(instrumentId) {
  return request({
    url: `/convertibleBondInstrument/checkResponsibleByInstrumentId/${instrumentId}`,
    method: "post",
  });
}


