/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-12-19 15:55:23
 * @LastEditors: Edward
 * @LastEditTime: 2024-01-31 15:46:07
 * @ModuleName: 标准债权模块
 */
import request from "@/api/oldApi/request";

// 查询标债资产列表
export function getStandardDebtList(data) {
  return request({
    url: `/standardBondInstrument/query/page/list`,
    method: "post",
    data,
  });
}

// 分析单列表查询
export function getStandardDebtAnalysis(data) {
  return request({
    url: `/standardBondAnalyzeSheet/query/page/list`,
    method: "post",
    data,
  });
}

// 分析单详情查询
export function queryAnalyzeRecordPageList(data) {
  return request({
    url: `/standardBondAnalyzeSheet/queryAnalyzeRecordPageList`,
    method: "post",
    data,
  });
}

// 查询标准债权资产详情
export function getInstrumentDetail(standard_bond_id) {
  return request({
    url: `/standardBondInstrument/getStandardBondInstrumentObject/${standard_bond_id}`,
    method: "post",
  });
}

// 获取标准债权特殊条款
export function getInstallmentCashflowList(data) {
  return request({
    url: `/standardBondInstallmentCashflow/queryInstallmentCashflowList`,
    method: "post",
    data,
  });
}

// 获取现金流列表
export function getCashFlowList(standard_bond_id) {
  return request({
    url: `/standardBondCashflow/query/all/list/${standard_bond_id}`,
    method: "post",
  });
}

// (不含权)标准模式下生成现金流
export function generateNormal(data) {
  return request({
    url: `/standardBondCashflow/cashflow/generation/normal`,
    method: "post",
    data,
  });
}

// (含权)标准模式下生成现金流
export function generateExerciseTrail(data) {
  return request({
    url: `/standardBondCashflow/exercise/cashflow/generation/trail`,
    method: "post",
    data,
  });
}
// (不含权)试算模式下生成现金流
export function generateTrail(data) {
  return request({
    url: `/standardBondCashflow/cashflow/generation/trail`,
    method: "post",
    data,
  });
}

// (含权)试算模式下生成现金流
export function generateExerciseNormal(data) {
  return request({
    url: `/standardBondCashflow/exercise/cashflow/generation/normal`,
    method: "post",
    data,
  });
}

// 标准债权数据字典
export function getStandardBondDictData() {
  return request({
    url: `/standardBondInstrument/getStandardBondDictData`,
    method: "post",
  });
}

// 查询第三方行情数据列表
export function queryThirdPartyDateRecordList(data) {
  return request({
    url: `/standardBondThirdPartyDataRecord/queryThirdPartyDateRecordForBoard`,
    method: "post",
    data,
  });
}

// 获取估值记录表格信息
export function getCalRecordList(data) {
  return request({
    url: `/standardBondAnalyzeRecord/query/page/list`,
    method: "post",
    data,
  });
}

// 根据估值记录id查询非标债权资产信息记录
export function getIValuationByRecordId(standard_bond_id) {
  return request({
    url: `/standardBondInstrument/getStandardBondInstrumentObject/${standard_bond_id}`,
    method: "post",
  });
}
// 根据估值记录id查询非标债权资产信息记录
export function getDebtValuationByRecordId(data) {
  return request({
    url: `/standardBondInstrumentRecord/getOne`,
    method: "post",
    data,
  });
}

//  估值记录详情现金流表格
export function getCashFlowDetailList(data) {
  return request({
    url: `/standardBondCashflowRecord/query/page/list`,
    method: "post",
    data,
  });
}

//获取分析记录里的分析面板数据
export function getAnalyzeBoardRecord(data) {
  return request({
    url: `/standardBondAnalyzeRecord/getAnalyzeBoardRecord`,
    method: "post",
    data,
  });
}

// 分析记录特殊条款
export function queryInstallmentCashflowListByPage(data) {
  return request({
    url: `/standardBondInstallmentCashflow/queryInstallmentCashflowListByPage`,
    method: "post",
    data,
  });
}
// 分析记录特殊条款
export function getDebtSpecialRecord(data) {
  return request({
    url: `/standardBondInstallmentCashflowRecord/query/page/list`,
    method: "post",
    data,
  });
}

// 下载模板
export function downloadTemplate() {
  return request({
    url: `/standardBondAnalyzeSheet/downloadTemplate`,
    method: "post",
  });
}
// 批量分析上传
export const newFilesUpload = (data) => {
  return request({
    url: `/standardBondAnalyzeSheet/batchAnalyzeWithExcel`,
    method: "POST",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 3, // 3分钟
  });
};

// 删除估值记录行
export function batchDeleteAllRecordByRecordIdOrAnalyzeCode(data) {
  return request({
    url: `/standardBondAnalyzeRecord/batchDeleteAllRecordByRecordIdOrAnalyzeCode`,
    method: "post",
    data,
  });
}
export function deleteCalRecord(data) {
  return request({
    url: `/standardBondAnalyzeRecord/batchDeleteAnalyzeRecord`,
    method: "post",
    data,
  });
}
//删除试算记录行
export function batchStandardDeleteValuationRecord(data) {
  return request({
    url: `/standardBondTrail/batchDeleteAllRecordByRecordIdOrAnalyzeCode`,
    method: "post",
    data,
  });
}
//标债查询估值试算记录
export function queryStandardValuationRecordList(data) {
  return request({
    url: `/standardBondTrail/queryValuationRecordList`,
    method: "post",
    data,
  });
}
// 查估值记录子节点时序分析记录
export function queryValuationRecordByTimeAnalyzeCode(data) {
  return request({
    url: `/standardBondTrail/queryValuationRecordByTimeAnalyzeCode`,
    method: "post",
    data,
  });
}
// 查分析记录子节点时序分析记录
export function queryAnalyzeRecordByTimeAnalyzeCode(data) {
  return request({
    url: `/standardBondAnalyzeRecord/queryAnalyzeRecordByTimeAnalyzeCode`,
    method: "post",
    data,
  });
}
// 第三方测算时序分析
export function standardBondTimeIntervalAnalyze(data) {
  return request({
    url: `/standardBondInstrument/standardBondTimeIntervalAnalyze`,
    method: "post",
    data,
  });
}
// 标债时序图
export function standardBondTimeIntervalValuation(data) {
  return request({
    url: `/standardBondTrail/standardBondTimeIntervalValuation`,
    method: "post",
    data,
  });
}
//标债不含权估值试算
export function standardValuationTrail(data) {
  return request({
    url: `/standardBondTrail/valuation/trail`,
    method: "post",
    data,
  });
}
//标债含权估值试算
export function standardValuationExerciseTrail(data) {
  return request({
    url: `/standardBondTrail/exercise/valuation/trail`,
    method: "post",
    data,
  });
}
// 标债资产更新保存
export function updateStandardInstrumentInfo(data) {
  return request({
    url: `/standardBondInstrument/updateInstrumentInfo`,
    method: "post",
    data,
  });
}
// 操作日志分页查询
export function queryStandardOperationLog(data) {
  return request({
    url: `/standardBondInstrument/queryOperationLog`,
    method: "post",
    data,
  });
}

// 含权的标准债权分析
export function analyzeHasOptionTrail(data) {
  return request({
    url: `/standardBondInstrument/exercise/analyze/trail`,
    method: "post",
    data,
  });
}

// 导出
export function exportBatchAnalyzeRecordForSheet(data) {
  return request({
    url: `/standardBondAnalyzeSheet/exportTest3`,
    method: "post",
    data,
    responseType: "blob",
  });
}

// 批量删除分析单
export function batchDeleteAnalyzeSheet(data) {
  return request({
    url: `/standardBondAnalyzeSheet/batchDeleteAnalyzeSheet`,
    method: "post",
    data,
  });
}
// 新增标准债权资产持仓数据
export function createStandardBondPositionRecord(data) {
  return request({
    url: `/positionRecord/addObject/createStandardBondPositionRecord`,
    method: "post",
    data,
  });
}
// 估值单重新计算
export function reBuildAnalyzeVal(data) {
  return request({
    url: `/standardBondAnalyzeSheet/reBuildAnalyzeVal`,
    method: "post",
    data,
  });
}
// 查询标债持仓数据列表
export function queryPositionDataList(data) {
  return request({
    url: `/standardBondPositionData/queryPositionDataList`,
    method: "post",
    data,
  });
}
