/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-07-06 15:00:22
 * @LastEditors: Edward
 * @LastEditTime: 2024-01-08 14:44:14
 */
// 非标债权资产模块
import request from "@/api/oldApi/request";

// 查询非标债权资产列表
export function getFixedIncomeList(data) {
  return request({
    url: `/fixed-income/queryInstrumentListNew`,
    method: "post",
    data,
  });
}
// 查询非标债权资产持仓列表
export function queryCanCreatePositionInstrumentList(data) {
  return request({
    url: `/fixedIncomePosition/queryCanCreatePositionInstrumentList`,
    method: "post",
    data,
  });
}

// 新增固定资产
export function buildInstrument(data) {
  return request({
    url: `/fixed-income/createUpdateInstrument`,
    method: "post",
    data,
  });
}

// 删除固定资产
export function deleteInstrument(data) {
  return request({
    url: `/fixed-income/batchDeleteInstrumentAllDataByIdList`,
    method: "post",
    data,
  });
}

// 查询非标债权资产详情
export function getInstrumentDetail(data) {
  return request({
    url: `/fixed-income/getInstrumentDetailById`,
    method: "post",
    data,
  });
}

// 修改非标债权资产详情
export function modifyInstrumentDetail(data) {
  return request({
    // url: `/fixed-income/instrument/update`,
    url: `/fixed-income/createUpdateInstrument`,
    method: "post",
    data,
  });
}

// （不含权）估值试算
export function cashflowDiscount(data) {
  return request({
    url: `/fixed-income/valuation/trail`,
    method: "post",
    data,
  });
}
// （含权）估值试算
export function exerciseCashflowDiscount(data) {
  return request({
    url: `/fixed-income/exercise/valuation/trail`,
    method: "post",
    data,
  });
}

// 生成现金流
// export function generationCashflow(data) {
//   return request({
//     url: `/fixed-income/cashflow/generation`,
//     method: "post",
//     data,
//   });
// }

// 删除分期现金流
export function deleteCashflow(cashflow_id) {
  return request({
    // url: `/fixed-income/cashflow/delete`,
    url: `/fixed-income/cashflow/${cashflow_id}/delete`,
    method: "post",
  });
}

// 获取分期现金流
export function getInstallmentCashflowList(instrument_id) {
  return request({
    url: `/fixedIncomeInstallmentCashFlow/getAllInstallmentCashFlowList/${instrument_id}`,
    method: "post",
  });
}

// 新增分期现金流
export function buildInstallmentCashflow(data) {
  return request({
    url: `/fixed-income/installment-cashflow/build`,
    method: "post",
    data,
  });
}

// 删除分期现金流
export function deleteInstallmentCashflow(data) {
  return request({
    // url: `/fixed-income/installment-cashflow/delete`,
    url: "/fixed-income/installment-cashflow/delete",
    method: "post",
    data,
  });
}

// 点差试算校准
export function calculatePointDif(data) {
  return request({
    url: `/fixed-income/point-difference/calculate`,
    method: "post",
    data,
  });
}

// 获取持仓信息
export function getPositionList(instrument_id, data) {
  return request({
    // url: `/fixed-income/instrument/position/list`,
    url: `/fixed-income/instrument/${instrument_id}/position/list`,
    method: "post",
    data,
  });
}

// 根据id删除持仓信息
export function deletePosition(params) {
  return request({
    url: `/fixed-income/instrument/position/delete`,
    method: "get",
    params,
  });
}

// 获取估值记录表格信息
export function getCalRecordList(data) {
  return request({
    url: `/fixedIncomeValuationRecord/queryValuationRecordList`,
    method: "post",
    data,
  });
}
// 获取分页查询估值【试算】记录
export function getFixTrailValuationRecord(data) {
  return request({
    url: `/fixedIncomeValuationRecord/queryPageTrailValuationRecord`,
    method: "post",
    data,
  });
}
// 获取分页查询估值【时序分析】记录
export function queryValuationRecordByTimeAnalyzeCode(data) {
  return request({
    url: `/fixedIncomeValuationRecord/queryValuationRecordByTimeAnalyzeCode`,
    method: "post",
    data,
  });
}
// 获取分页查询估值【历史】记录
export function getFixHistoryValuationRecord(data) {
  return request({
    url: `/fixedIncomeValuationRecord/queryPageHistValuationRecord`,
    method: "post",
    data,
  });
}

//删除试算记录行
export function deleteCalRecord(data) {
  return request({
    url: `/fixedIncomeValuationRecord/batchDeleteValuationRecordByIdList`,
    method: "post",
    data,
  });
}

// 新建持仓信息
export function buildPosition(data) {
  return request({
    url: `/fixed-income/instrument/position/build`,
    method: "post",
    data,
  });
}

// 获取现金流列表
export function getCashFlowList(instrument_id) {
  return request({
    url: `/fixed-income/instrument/${instrument_id}/cashflow/alllist`,
    method: "post",
  });
}

//  试算记录详情现金流表格
export function getCashFlowDetailList(valuation_record_id, data) {
  return request({
    url: `/fixedIncomeCashFlowRecordController/getCashFlowValuationRecordList/${valuation_record_id}`,
    method: "post",
    data,
  });
}

// 获取折现曲线
export function getMarketCurveList(data) {
  return request({
    url: `/marketCurveData/queryCurveNameList`,
    method: "post",
    data,
  });
}

// 批量估值
export function batchValuation(data) {
  return request({
    url: `/fixed-income/batch/valuation/trail`,
    method: "post",
    data,
    timeout: 60 * 1000 * 2,
  });
}
// 产品估值
export function fixedProductionValuation(data) {
  return request({
    url: `/valuationSheet/productionValuation`,
    method: "post",
    data,
    timeout: 60 * 1000 * 2,
  });
}

// 根据id批量删除非标债权资产
export function batchDeleteInstrumentById(data) {
  return request({
    url: `/fixed-income/batchDeleteInstrumentAllDataByIdList`,
    method: "post",
    data,
  });
}

// 根据估值记录id查询分期现金流列表
export function getICashFlowByRecordId(valuation_record_id, data) {
  return request({
    url: `/fixedIncomeInstallmentCashFlowRecord/queryInstallmentCashFlowRecordList/${valuation_record_id}`,
    method: "post",
    data,
  });
}

// 根据估值记录id查询非标债权资产信息记录
export function getIValuationByRecordId(data) {
  return request({
    url: `/fixedIncomeInstrumentRecord/getInstrumentRecordDetailByValuationRecordId`,
    method: "post",
    data,
  });
}

// 获取相关产品
export function queryPortfolioListByFixedIncomeInstrumentId(data) {
  return request({
    // url: `/fixed-income/valuation/record/instrument/${valuation_record_id}`,
    url: `/portfolio/queryPortfolioListByFixedIncomeInstrumentId`,
    method: "post",
    data,
  });
}

// (不含权)标准模式下生成现金流
export function generateNormal(data) {
  return request({
    url: `/fixed-income/cashflow/generation/normal`,
    method: "post",
    data,
  });
}

// (不含权)试算模式下生成现金流
export function generateTrialNormal(data) {
  return request({
    url: `/fixed-income/cashflow/generation/trail`,
    method: "post",
    data,
  });
}

// (含权)标准模式下生成现金流
export function generateExerciseNormal(data) {
  return request({
    url: `/fixed-income/exercise/cashflow/generation/normal`,
    method: "post",
    data,
  });
}
// (含权)试算模式下生成现金流
export function generateExerciseTrialNormal(data) {
  return request({
    url: `/fixed-income/exercise/cashflow/generation/trail`,
    method: "post",
    data,
  });
}

// 点差校准
export function calibrationNormal(data) {
  return request({
    url: `/fixed-income/spread/calibration/normal`,
    method: "post",
    data,
  });
}

// 点差求解
export function getSpreadCalibrationValue(data) {
  return request({
    url: `/fixed-income/spread/calibration/trail`,
    method: "post",
    data,
  });
}
// IRR求解
export function getIRRCalibrationValue(data) {
  return request({
    url: `/fixed-income/irr/calibration/trail`,
    method: "post",
    data,
  });
}

// 估值试算
export function cashflowTrial(data) {
  return request({
    url: `/fixed-income/cashflow/discount`,
    method: "post",
    data,
  });
}
// 字典
export function getFixedIncomeDictData(data) {
  return request({
    url: `/fixed-income/getFixedIncomeDictData`,
    method: "post",
    data,
  });
}
// 根据估值记录ID获取减值资产记录信息
export function getEclDataRecordByRecordId(recordId, data) {
  return request({
    url: `/depreciation/${recordId}/getEclDataRecordByRecordId`,
    method: "post",
    data,
  });
}
// 根据前瞻方程名称获取详细数据
export function getForwardEquation(data) {
  return request({
    url: `/depreciation/queryModelDetail`,
    method: "post",
    data,
  });
}
// 获取含权现金流表格数据
export function getHasOptionCashFlowList(data) {
  return request({
    url: `/fixed-income/instrument/cashflow/exercise/list`,
    method: "post",
    data,
  });
}
// 获取含权现金流记录
export function getCashFlowExerciseRecordList(data) {
  return request({
    url: `/fixedIncomeCashFlowRecordController/getCashFlowExerciseRecordList`,
    method: "post",
    data,
  });
}

// 非标债权新增资产
export function createInstrument(data) {
  return request({
    url: `/fixed-income/createInstrument`,
    method: "post",
    data,
  });
}
// 新增非标债权资产持仓数据
export function createFixedIncomeRecord(data) {
  return request({
    url: `/positionRecord/addObject/createFixedIncomeRecord`,
    method: "post",
    data,
  });
}
// 更新非标债权资产持仓
export function updateFixedIncomePosition(data) {
  return request({
    url: `/fixedIncomePosition/updateFixedIncomePosition`,
    method: "post",
    data,
  });
}
export function checkFixedResponsibleByInstrumentId(instrument_id) {
  return request({
    url: `/fixed-income/checkResponsibleByInstrumentId/${instrument_id}`,
    method: "post",
  });
}
// 获取估值曲线数据
export function getCurveDataList(data) {
  return request({
    url: `/marketCurveData/queryCurveDataList`,
    method: "post",
    data,
  });
}
// 保存整个页面
export function updateFixedInstrumentInfo(data) {
  return request({
    url: `/fixed-income/updateInstrumentInfo`,
    method: "post",
    data,
  });
}
// 非标时序图
export function fixedTimeIntervalValuation(data) {
  return request({
    url: `/fixed-income/timeIntervalValuation`,
    method: "post",
    data,
  });
}
// 标债时序图
export function fixIncomeTimeIntervalValuation(data) {
  return request({
    url: `/fixed-income/fixIncomeTimeIntervalValuation`,
    method: "post",
    data,
  });
}
// 批量上传
export const batchFixedIncomeWithExcel = (data) => {
  return request({
    url: `/fixed-income/batchFixedIncomeWithExcel`,
    method: "POST",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
};
// 批量导入持仓
export const importFixedIncomePositionWithExcel = (data) => {
  return request({
    url: `/fixedIncomePosition/importFixedIncomePositionWithExcel`,
    method: "POST",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
};
// 创建项目下非标资产
export function createProjectInstrument(data) {
  return request({
    url: `/fixed-income/createProjectInstrument`,
    method: "post",
    data,
  });
}
// 查询所有授权项目的资产和公开资产
export function queryInstrumentListByUserId(project_id) {
  return request({
    url: `/fixed-income/queryInstrumentListByUserId/All/${project_id}`,
    method: "post",
  });
}
// 新增非标持仓信息
export function createProjectPosition(data) {
  return request({
    url: `/fixedIncomePosition/createProjectPosition`,
    method: "post",
    data,
  });
}
// 更新非标持仓信息
export function updateProjectPosition(data) {
  return request({
    url: `/fixedIncomePosition/updateProjectPosition`,
    method: "post",
    data,
  });
}
// 删除非标持仓信息
export function deleteProjectPosition(data) {
  return request({
    url: `/fixedIncomePosition/deleteProjectPosition`,
    method: "post",
    data,
  });
}
// 获取项目下的所有固收资产持仓数据
export function queryAllPositionDataList(data) {
  return request({
    url: `/fixedIncomePosition/query/allPositionData/list`,
    method: "post",
    data,
  });
}
// 新增非标持仓信息
export function createProjectPositionTemp(data) {
  return request({
    url: `/fixedIncomePositionTemp/createProjectPosition`,
    method: "post",
    data,
  });
}
// 更新非标持仓信息
export function updateProjectPositionTemp(data) {
  return request({
    url: `/fixedIncomePositionTemp/updateProjectPosition`,
    method: "post",
    data,
  });
}
// 删除非标持仓信息
export function deleteProjectPositionTemp(data) {
  return request({
    url: `/fixedIncomePositionTemp/deleteProjectPosition`,
    method: "post",
    data,
  });
}
// 获取项目下的所有固收资产持仓数据
export function queryAllPositionDataListTemp(data) {
  return request({
    url: `/fixedIncomePositionTemp/query/allPositionData/list`,
    method: "post",
    data,
  });
}

// 将项目下的临时持仓数据转存到正式持仓数据中 (估值角色授权时用)
export function copyInformationFromTemp(project_id) {
  return request({
    url: `/fixedIncomePositionTemp/copyInformation/${project_id}`,
    method: "post",
  });
}
