// 非上市股权模块
import request from "@/api/oldApi/request";

// 查询非上市股权列表
export function getEquityList(data) {
  return request({
    url: `/equity/queryInstrumentListNew`,
    method: "post",
    data,
  });
}

// 新建、修改非上市股权
export function buildInstrument(data) {
  return request({
    url: "/equity/createUpdateInstrument",
    method: "post",
    data,
  });
}

// 批量删除非上市股权
export function batchDeleteStock(data) {
  return request({
    url: `/equity/batchDeleteInstrumentByIdList`,
    method: "post",
    data,
  });
}

// 非上市股权查询字段接口
export function queryAllEquityDictData() {
  return request({
    url: `/equity/queryAllEquityDictData`,
    method: "post",
  });
}

// 根据id查询非上市股权详情
export function getEquityDetailById(data) {
  return request({
    url: `/equity/getEquityById`,
    method: "post",
    data,
  });
}

// 根据id更新非上市股权详情
export function updateEquityDetailById(id, data) {
  return request({
    url: `/equity/${id}/update`,
    method: "post",
    data,
  });
}

// 根据财报id批量删除财报
export function batchDeleteFinancialById(data) {
  return request({
    url: `/equityFinDatabase/batchDeleteEquityFinData`,
    method: "post",
    data,
  });
}

// 根据非上市股权id查询财报列表
export function getFinancialListById(data) {
  return request({
    url: `/equityFinDatabase/queryAllFinancialList`,
    method: "post",
    data,
  });
}

// 在指定非上市股权id下创建财报
export function createFinancialById(instrument_id, data) {
  return request({
    url: `/equity/${instrument_id}/financial/create`,
    method: "post",
    data,
  });
}

// 非上市股权全流程估值
export function valuationEquity(data) {
  return request({
    url: `/equity/valuation`,
    method: "post",
    data,
  });
}

export function getIndustryListByAgency(data) {
  return request({
    url: `/equity/industry/name/list`,
    method: "post",
    data,
  });
}

// 根据可比公司id列表批量删除可比公司
export function batchDeleteCompareById(instrument_id, data) {
  return request({
    url: `/equity/${instrument_id}/compare/batch/delete`,
    method: "post",
    data,
  });
}

// 在指定非上市股权id下新建可比公司
export function createCompareById(instrument_id, data) {
  return request({
    url: `/equity/${instrument_id}/compare/create`,
    method: "post",
    data,
  });
}

// 查询指定非上市股权id的可比公司列表
export function getCompareListById(data) {
  return request({
    url: `/equityCompareData/queryEquityCompareDataList`,
    method: "post",
    data,
  });
}

// 创建可比公司列表
export function createEquityCompareData(data) {
  return request({
    url: `/equityCompareData/createEquityCompareData`,
    method: "post",
    data,
  });
}

// 更新可比公司列表
export function updateEquityCompareData(data) {
  return request({
    url: `/equityCompareData/updateEquityCompareData`,
    method: "post",
    data,
  });
}

// 删除可比公司
export function batchDeleteEquityCompareData(data) {
  return request({
    url: `/equityCompareData/batchDeleteEquityCompareData`,
    method: "post",
    data,
  });
}

//  重置指定非上市股权id的可比公司列表
export function resetCompareById(instrument_id, data) {
  return request({
    url: `/equity/${instrument_id}/compare/reset`,
    method: "post",
    data,
  });
}

// 查询估值记录信息
export function queryPageEquityValuationRecordList(data) {
  return request({
    url: `/equityValuationRecord/queryPageEquityValuationRecordList`,
    method: "post",
    data,
  });
}

// 在指定非上市股权id下根据估值记录id列表批量删除估值记录
export function batchDeleteRecord(data) {
  return request({
    url: `/equityValuationRecord/batchDeleteEquityValuationRecord`,
    method: "post",
    data,
  });
}

// 查询指定非上市股权id的估值记录列表
export function getRecordList(instrument_id, data) {
  return request({
    url: `/equity/${instrument_id}/valuation/record/list`,
    method: "post",
    data,
  });
}

//  根据股票代码和估值日期查询可比公司数据
export function queryOneCompany(data) {
  return request({
    url: `/equity/company/query/one`,
    method: "post",
    data,
  });
}

// 非上市股权下持股表的查询
export function getPositionList(instrument_id, data) {
  return request({
    url: `/equity/${instrument_id}/position/list`,
    method: "post",
    data,
  });
}

// 管理人非上市股权详情下持股表的查询
export function getPortfolioDetailList(portfolio_id, data) {
  return request({
    url: `/equity/portfolio/${portfolio_id}/position/list`,
    method: "post",
    data,
  });
}

// 查询组合的非上市股权列表
export function getComStockDetailList(portfolio_id, data) {
  return request({
    url: `/equity/portfolio/${portfolio_id}/equity/list`,
    method: "post",
    data,
  });
}

// 持股表的批量删除接口
export function batchDeletePosition(data) {
  return request({
    url: `/equity/position/batch/delete`,
    method: "post",
    data,
  });
}

// 新建持股表
export function createPosition(data) {
  return request({
    url: `/equity/position/create`,
    method: "post",
    data,
  });
}

// 根据股票代码模糊查询可比公司名称和代码列表
export function queryCompanyName(data) {
  return request({
    url: `/equity/company/query/companyName/list`,
    method: "post",
    data,
  });
}

// 根据估值记录id查询非上市股权财务估值信息
export function queryFinRecordById(valuation_record_id) {
  return request({
    url: `/equity/valuation/record/financial/${valuation_record_id}`,
    method: "post",
  });
}

// 根据估值记录id查询非上市股权资产信息
export function queryStockAssetById(valuation_record_id) {
  return request({
    url: `/equity/valuation/record/instrument/${valuation_record_id}`,
    method: "post",
  });
}

// 非上市股权批量估值
export function batchStockValuation(data) {
  return request({
    url: `/equity/batch/valuation/pwc`,
    method: "post",
    data,
  });
}

// 创建财报
export function createEquityFinData(data) {
  return request({
    url: `/equityFinDatabase/createEquityFinData`,
    method: "post",
    data,
  });
}

// 修改财报
export function updateEquityFinData(data) {
  return request({
    url: `/equityFinDatabase/updateEquityFinData`,
    method: "post",
    data,
  });
}

// 可比公司列表内公司名称的查询
export function queryCompareDataByNameOrCodeInPool(data) {
  return request({
    url: `/equityCompareData/queryCompareDataByNameOrCodeInPool`,
    method: "post",
    data,
  });
}

// 可比公司法--估值计算
export function equityValuation(data) {
  return request({
    url: `/equity/valuation`,
    method: "post",
    data,
  });
}
// 现金这算法-估值计算
export function equityCashflowValuation(data) {
  return request({
    url: `/equity/cashflow/discount/valuation`,
    method: "post",
    data,
  });
}

// 查询资产信息记录
export function getEquityInstrumentRecordById(data) {
  return request({
    url: `/equityInstrumentRecord/getEquityInstrumentRecordById`,
    method: "post",
    data,
  });
}

// 获取估值记录可比公司
export function queryPageCompareDataRecordList(data) {
  return request({
    url: `/equityCompareDataRecord/queryPageCompareDataRecordList`,
    method: "post",
    data,
  });
}

// 预测现金流信息
export function postEquityCashflowCustomRecord(data) {
  return request({
    url: `/equityCashflowCustomRecord/queryPageEquityCashflowCustomRecordList`,
    method: "post",
    data,
  });
}

// 非上市股权批量估值
export function batchStockPortfolioValuation(data) {
  return request({
    url: `/equity/batch/valuation/trail`,
    method: "post",
    data,
  });
}

// 对标行业
export function mappingCompareDataByIndustryCodeInPool(data) {
  return request({
    url: `/equityCompareData/mappingCompareDataByIndustryCodeInPool`,
    method: "post",
    data,
  });
}

// 查询行业名称
export function queryIndustryNameList(data) {
  return request({
    url: `/marketWindAShareSwnIndustriesClass/queryIndustryNameList`,
    method: "post",
    data,
  });
}

// 获取估值信息
export function getEquityValuationRecord(data) {
  return request({
    url: `/equityValuationRecord/getEquityValuationRecord`,
    method: "post",
    data,
  });
}

// 获取估值记录融资数据
export function queryFinancingDataRecordListByRecordId(data) {
  return request({
    url: `/equityFinancingDataRecord/queryFinancingDataRecordListByRecordId`,
    method: "post",
    data,
  });
}
// 获取估值记录财务信息
export function getEquityFinDatabaseRecordById(data) {
  return request({
    url: `/equityFinDatabaseRecord/getEquityFinDatabaseRecordById`,
    method: "post",
    data,
  });
}
// 获取融资信息
export function queryFinancingDataList(data) {
  return request({
    url: `/equityFinancingData/queryFinancingDataList`,
    method: "post",
    data,
  });
}

// 现金折算法基础信息更新
export function createUpdateInstrumentForCashflow(data) {
  return request({
    url: `/equity/createUpdateInstrumentForCashflow`,
    method: "post",
    data,
  });
}

// 查询预测现金流量表
export function queryCashflowList(data) {
  return request({
    url: `/equityCashflowCustom/queryCashflowList`,
    method: "post",
    data,
  });
}

// 预测现金流的创建或修改
export function createUpdateEquityCashflowForCustom(data) {
  return request({
    url: `/equityCashflowCustom/createUpdateEquityCashflowForCustom`,
    method: "post",
    data,
  });
}

// 预测现金流的批量删除
export function batchDeleteEquityCashflowForCustom(data) {
  return request({
    url: `/equityCashflowCustom/batchDeleteEquityCashflowForCustom`,
    method: "post",
    data,
  });
}

// 非上市股权新增
export function createInstrument(data) {
  return request({
    url: `/equity/createInstrument`,
    method: "post",
    data,
  });
}

// 新增固定资产
export function createUpdateInstrument(data) {
  return request({
    url: `/equity/createUpdateInstrument`,
    method: "post",
    data,
  });
}
// 新增非上市股权资产持仓数据
export function createEquityPositionRecord(data) {
  return request({
    url: `/positionRecord/addObject/createEquityPositionRecord`,
    method: "post",
    data,
  });
}
// 行业名称树-废弃
export function queryEquityIndustriesTreeList(data) {
  return request({
    url: `/marketWindAShareSwnIndustriesClass/queryTreeList`,
    method: "post",
    data,
  });
}
// 行业名称树-新
export function queryIndustriesTreeByCode(ind_code) {
  return request({
    url: `/marketIndustriesNameMapping/queryIndustriesTree/${ind_code}`,
    method: "post",
  });
}

// 查询筛选规则列表
export function queryEquityFilterRule(data) {
  return request({
    url: `/equityCompareData/queryFilterRule`,
    method: "post",
    data,
  });
}
// 敏感性分析
export function queryEquityValuation(data) {
  return request({
    url: `/equity/valuation`,
    method: "post",
    data,
  });
}
// 通过资产ID,判断该资产的负责人是否为当操作者
export function checkEquityResponsibleByInstrumentId(instrument_id) {
  return request({
    url: `/equity/checkResponsibleByInstrumentId/${instrument_id}`,
    method: "post",
  });
}
// 股权详情全量保存
export function updateEquityInstrumentInfo(data) {
  return request({
    url: `/equity/updateInstrumentInfo`,
    method: "post",
    data,
  });
}
// 可比公司数据模块保存--废弃
export function saveEquityCompareDataInfo(data) {
  return request({
    url: `/equityCompareData/saveCompareDataInfo`,
    method: "post",
    data,
  });
}
// 查询可比公司列表
export function queryEquityCompareDataList(data) {
  return request({
    url: `/equityCompareData/queryEquityCompareDataList`,
    method: "post",
    data,
  });
}
// 保存试算结果记录
export function saveEquityValuationResultRecord(data) {
  return request({
    url: `/equityValuationResultRecord/saveValuationResultRecord`,
    method: "post",
    data,
  });
}
// 根据股权id查询试算结果记录列表 -- 分页
export function queryEquityValuationResultRecordList(data) {
  return request({
    url: `/equityValuationResultRecord/queryPageEquityValuationResultRecordList`,
    method: "post",
    data,
  });
}
// 批量删除股权试算结果记录
export function batchRemoveEquityRecordList(data) {
  return request({
    url: `/equityValuationResultRecord/batchRemove`,
    method: "post",
    data,
  });
}
// 查询敏感性分析记录
export function queryEquitySensitiveAnalysisRecordList(data) {
  return request({
    url: `/equityValuationRecord/querySensitiveAnalysisRecordList`,
    method: "post",
    data,
  });
}
// 查询筛选规则记录
export function queryEquityFilterRuleRecordList(data) {
  return request({
    url: `/equityValuationRecord/queryFilterRuleRecordList`,
    method: "post",
    data,
  });
}
// 筛选可比公司
export function filterEquityCompareData(data) {
  return request({
    url: `/equityCompareData/filterCompareData`,
    method: "post",
    data,
  });
}
// 通过最后一级行业代码查找所在树结构 弃用
export function getIndustriesNameMappingByIndCode(data) {
  return request({
    url: `/marketWindAShareSwnIndustriesClass/getIndustriesNameMappingByIndCode`,
    method: "post",
    data,
  });
}
// 通过最后一级行业代码查找所在树结构
export function queryParentIndCodeList(data) {
  return request({
    url: `/marketIndustriesNameMapping/queryParentIndCodeList`,
    method: "post",
    data,
  });
}
// 创建股权分析记录
export function createEquityAnalyzeRecord(data) {
  return request({
    url: `/equityAnalyzeRecord/createEquityAnalyzeRecord`,
    method: "post",
    data,
  });
}
// 通过资产ID和计算模型，获取资产下该模型所有分析记录信息
export function queryAllEquityAnalyzeRecordList(data) {
  return request({
    url: `/equityAnalyzeRecord/queryAllEquityAnalyzeRecordList`,
    method: "post",
    data,
  });
}
// 创建股权分析记录备注
export function createEquityAnalyzeRecordRemark(data) {
  return request({
    url: `/equityAnalyzeRecordRemark/createEquityAnalyzeRecordRemark`,
    method: "post",
    data,
  });
}
// 通过分析记录ID，获取该记录下的所有备注列表
export function queryEquityAnalyzeRemarkList(equity_analyze_record_id, data) {
  return request({
    url: `/equityAnalyzeRecordRemark/queryEquityAnalyzeRemarkList/${equity_analyze_record_id}`,
    method: "post",
    data,
  });
}
// 绑定分析记录与试算记录关系
export function createEquityRelation(data) {
  return request({
    url: `/equityAnalyzeRecordValuationRelation/createRelation`,
    method: "post",
    data,
  });
}
// 通过分析记录ID，获取该记录下的所有绑定试算记录
export function queryEquityBindValuationList(equity_analyze_record_id, data) {
  return request({
    url: `/equityAnalyzeRecordValuationRelation/queryBindEquityValuationList/${equity_analyze_record_id}`,
    method: "post",
    data,
  });
}
// 通过资产ID、分析记录ID和计算模型，获取该资产未绑定在该分析记录下计算模型的其余试算记录
export function queryNoBindEquityValuationList(data) {
  return request({
    url: `/equityAnalyzeRecordValuationRelation/queryNoBindEquityValuationList`,
    method: "post",
    data,
  });
}
// 解除分析记录与试算记录关系
export function deleteEquityRelation(relation_id) {
  return request({
    url: `/equityAnalyzeRecordValuationRelation/deleteRelation/${relation_id}`,
    method: "post",
  });
}
// 更新可比公司数据
export function updateEquityCompareCompanyList(data) {
  return request({
    url: `/equityCompareData/updateCompareCompanyList`,
    method: "post",
    data,
  });
}
// 查询上市股票资产列表
export function queryEquityInstrumentList(data) {
  return request({
    url: `/listedEquityInstrument/queryInstrumentList`,
    method: "post",
    data,
  });
}
// 更新可比公司的行业
export function updateEquityCompareCompanyListIndustry(data) {
  return request({
    url: `/equityCompareData/updateIndustry`,
    method: "post",
    data,
  });
}
// 更新可比公司的PePbPs
export function updateEquityCompareCompanyPePbPs(data) {
  return request({
    url: `/equityCompareData/updatePePbPs`,
    method: "post",
    data,
  });
}
// 获取可比公司信息(耗流量，谨慎调用)
export function getCompareDataInfo(data) {
  return request({
    url: `/equityCompareData/getCompareDataInfo`,
    method: "post",
    data,
  });
}
// 获取行业下的可比公司列表
export function getStockOfIndustry(data) {
  return request({
    url: `/equityCompareData/getStockOfIndustry`,
    method: "post",
    data,
  });
}

// 获取行业下的可比公司列表
export function filterCompanyWithRuleInIndustry(data) {
  return request({
    url: `equityCompareData/filterCompanyWithRuleInIndustry`,
    method: "post",
    data,
  });
}
// 股权AI聊天
export function equityAiChat(data) {
  return request({
    url: `/equity/equityAiChat`,
    method: "post",
    data,
  });
}

// 股权项目需求表信息
export function getStockTableList(data) {
  return request({
    url: `/equityPosition/class/getProjectRequirementsTableList`,
    method: "post",
    data,
  });
}
// 股权项目估值表信息
export function getStockValuationList(data) {
  return request({
    url: `/equityValuationOption/getEquityValuationOptionByProject`,
    method: "post",
    data,
  });
}
// 更新股权项目资产详情页信息
export function updateProjectEquityInformation(data) {
  return request({
    url: `equity/updateProjectEquityInformation`,
    method: "post",
    data,
  });
}
// 查询可比公司列表
export function queryEquityCompareDataListByValOption(data) {
  return request({
    url: `/equityCompareData/queryEquityCompareDataListByValOption`,
    method: "post",
    data,
  });
}
// 更新估值方案和可比公司列表保存
export function updateValuationOptionWithCompareData(data) {
  return request({
    url: `/equityValuationOption/updateValuationOptionWithCompareData`,
    method: "post",
    data,
  });
}
// 非上市股权项目速览估值（同步）
export function equityProjectOverviewValuationSync(data) {
  return request({
    url: `/equity/equityProjectOverviewValuationSync`,
    method: "post",
    data,
  });
}
// 批量删除项目财务数据
export function batchDeleteFinDataByProjectId(data) {
  return request({
    url: `/equityFinDatabase/batchDeleteByProjectId`,
    method: "post",
    data,
  });
}
//  批量删除项目融资数据
export function batchDeleteFinancingDataByProjectId(data) {
  return request({
    url: `/equityFinancingData/batchDeleteByProjectId`,
    method: "post",
    data,
  });
}
