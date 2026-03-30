import request from "@/api/oldApi/request";

// 审计角色--用户拥有权限的所有项目列表信息
export function queryAllAuditProjectManagementList(data) {
  return request({
    url: `/projectManagement/query/all/audit/list`,
    method: "post",
    data,
  });
}
// 估值角色--用户拥有权限的所有项目列表信息
export function queryAllValuationProjectManagementList(data) {
  return request({
    url: `/projectManagement/query/all/valuation/list`,
    method: "post",
    data,
  });
}
// 查询所有移交后的项目列表
export function queryAllProjectTransferList(data) {
  return request({
    url: `/projectManagement/query/allTransfer/list`,
    method: "post",
    data,
  });
}
// 查询所有移交后的项目日期列表
export function queryAllProjectTransferDateList(data) {
  return request({
    url: `/projectManagement/query/allTransfer/queryProjectValuationDay`,
    method: "post",
    data,
  });
}
//上传二次标准化excel
export function secondStandardExcel(data) {
  return request({
    url: `/projectManagement/secondStandardExcel`,
    method: "post",
    data,
  });
}
// 获取项目基本信息
export function getPMInfoById(id) {
  return request({
    url: `/projectManagement/getProjectManagement/${id}`,
    method: "post",
  });
}
//上传新股锁定业务表
export function uploadIpoLockDetail(data) {
  return request({
    url: `/projectStandard/uploadIpoLockDetailExcel`,
    method: "post",
    data,
  });
}
//上传流动受限明细账面
export function uploadRestrictedLiquity(data) {
  return request({
    url: `/projectStandard/uploadRestrictedLiquidityDetailExcel`,
    method: "post",
    data,
  });
}
// 上传基金类型表excel
export function uploadFundStandardTypeExcel(data) {
  return request({
    url: `/fundStandardTypeController/uploadFundStandardTypeExcel`,
    method: "post",
    data,
  });
}

// 查询基金类型表明细
export function queryFundStandardTypeList(data) {
  return request({
    url: `/fundStandardTypeController/queryFundStandardTypeList`,
    method: "post",
    data,
  });
}

// 上传FS表excel
export function uploadFinancialAssetExcel(data) {
  return request({
    url: `/financialAssetsController/uploadFinancialAssetsExcel`,
    method: "post",
    data,
  });
}
// 上传一次标准化excel
export function firstStandardExcel(data) {
  return request({
    url: `/projectManagement/firstStandardExcel`,
    method: "post",
    data,
  });
}

// 回退上传表格
export function returnUploadFile(data) {
  return request({
    url: `/projectManagement/class/returnUpload`,
    method: "post",
    data,
  });
}

//更新项目信息
export function updateProjectManagement(data) {
  return request({
    url: `/projectManagement/class/update`,
    method: "post",
    data,
  });
}

//移交项目
export function transferProject(data) {
  return request({
    url: `/projectManagement/class/transferProject/${data.project_id}`,
    method: "post",
    data,
  });
}

export function deleteProjectManagement(data) {
  return request({
    url: `/projectManagement/class/delete/${data.project_id}`,
    method: "post",
    data,
  });
}

// 创建项目交付日志
export function createProjectDeliveryLog(data) {
  return request({
    url: `/projectDeliveryLog/createProjectDeliveryLog`,
    method: "post",
    data,
  });
}
// 删除项目交付日志
export function deleteProjectDeliveryLogById(data) {
  return request({
    url: `/projectDeliveryLog/deleteProjectDeliveryLog`,
    method: "post",
    data,
  });
}

//审阅退回到二次标准化节点
export function returnViewToSecond(data) {
  return request({
    url: `/projectManagement/class/returnViewToSecond`,
    method: "post",
    data,
  });
}
//估值退回到审阅节点
export function returnValuationToView(project_id) {
  return request({
    url: `/projectManagement/class/returnValuationToView/${project_id}`,
    method: "post",
  });
}

//数据标准化-数据下载--资管
export function secondStatusDataDownload(data) {
  return request({
    url: `/projectManagement/secondStandardCheckExcelDownload`,
    method: "post",
    data,
    responseType: "blob",
  });
}
//数据标准化-数据下载--ac
export function acSecondStatusDataDownload(data) {
  return request({
    url: `/projectAmortizedCost/secondStandardCheckExcelDownload`,
    method: "post",
    data,
    responseType: "blob",
  });
}

//数据标准化-数据清洗--资管
export function secondStatusDataCleansing(data) {
  return request({
    url: `/projectManagement/secondStandardCleanData`,
    method: "post",
    data,
  });
}
//数据标准化-数据清洗--ac
export function acSecondStandardCleanData(data) {
  return request({
    url: `/projectAmortizedCost/secondStandardCleanData`,
    method: "post",
    data,
  });
}

//二次标准化回退到一次标准化节点
export function returnSecondToFirst(data) {
  return request({
    url: `/projectManagement/class/returnSecondToFirst`,
    method: "post",
    data,
  });
}
// 审阅(审阅估值/摊余成本计量)节点提交到交付节点
export function viewToDeliveryStatus(data) {
  return request({
    url: `/projectManagement/class/viewToDeliveryStatus`,
    method: "post",
    data,
  });
}
// 交付退回到审阅(审阅估值/摊余成本计量)节点
export function returnDeliveryStatusToView(data) {
  return request({
    url: `/projectManagement/class/returnDeliveryStatusToView`,
    method: "post",
    data,
  });
}

// 创建项目信息
export function createProjectManagement(data) {
  return request({
    url: `/projectManagement/class/create`,
    method: "post",
    data,
  });
}
//  生成估值方法
export function coverGenerateValuationMethodWithGlobalPreset(data) {
  return request({
    url: `/fundManagerValuationMethod/coverGenerateValuationMethodWithGlobalPreset`,
    method: "post",
    data,
  });
}
// 更新估值方案
export function batchUpdateValuationMethod(data) {
  return request({
    url: `/fundManagerValuationMethod/batchUpdateValuationMethod`,
    method: "post",
    data,
  });
}
// 删除估值方案
export function batchDeleteValuationMethodWithinProject(data) {
  return request({
    url: `/fundManagerValuationMethod/batchDeleteValuationMethodWithinProject`,
    method: "post",
    data,
  });
}

// 判断当前用户是否有该投资组合权限
export function checkPortfolioAuthById(data) {
  return request({
    url: `/projectManagement/checkPortfolioAuth/{portfolio_id}`,
    method: "post",
    data,
  });
}
// 判断当前用户是否有该项目权限
export function checkProjectManagementAuth(project_id) {
  return request({
    url: `/projectManagement/checkAuth/${project_id}`,
    method: "post",
  });
}
//保存项目与人员信息
export function createProjectManager(data) {
  return request({
    url: `/projectManager/class/create`,
    method: "post",
    data,
  });
}
// 删除项目与人员信息
export function deleteProjectManager(data) {
  return request({
    url: `/projectManager/class/delete`,
    method: "post",
    data,
  });
}
//获取该项目所有授权人员信息
export function queryPMAuthorizeList(data) {
  return request({
    url: `/projectManager/query/authorize/list`,
    method: "post",
    data,
  });
}
//获取该项目对应管理人下，未授权的人员信息
export function queryNoPMAuthorizeList(data) {
  return request({
    url: `/projectManager/query/noAuthorize/list`,
    method: "post",
    data,
  });
}
//项目组未授权的人员信息
export function queryProjectGroupNoAuthorizeList(data) {
  return request({
    url: `/projectGroupManager/query/noAuthorize/list`,
    method: "post",
    data,
  });
}
// 批量授权人员
export function batchCreateProjectManager(data) {
  return request({
    url: `/projectManager/class/batchCreate`,
    method: "post",
    data,
  });
}
// 获取该项目组所有授权人员信息
export function queryProjectGroupAuthorizeList(data) {
  return request({
    url: `/projectGroupManager/list`,
    method: "post",
    data,
  });
}
// 新增项目组授权人员
export function batchCreateProjectGroupManager(data) {
  return request({
    url: `/projectGroupManager/add`,
    method: "post",
    data,
  });
}
// 删除项目组授权人员
export function deleteProjectGroupManager(id) {
  return request({
    url: `/projectGroupManager/remove/${id}`,
    method: "post",
  });
}
// 估值团队保存项目与人员信息
export function createValuationHead(data) {
  return request({
    url: `/projectValuationHead/class/create`,
    method: "post",
    data,
  });
}
// 获取该项目组下某个项目中未授权的人员
export function queryNoAuthorizeByProjectGroup(data) {
  return request({
    url: `/projectManager/query/noAuthorize/list/byProjectGroup`,
    method: "post",
    data,
  });
}
// 估值团队删除项目与人员信息
export function deleteValuationHead(data) {
  return request({
    url: `/projectValuationHead/class/delete`,
    method: "post",
    data,
  });
}
// 获取该项目所有授权估值量化团队负责人信息
export function queryValuationHead(data) {
  return request({
    url: `/projectValuationHead/query/authorize/list`,
    method: "post",
    data,
  });
}
// 查询项目对应的二次标准化数据列表
export function queryFundStandardSecondStandardList(data) {
  return request({
    url: `/fundStandardSecondStandardController/query/all/list`,
    method: "post",
    data,
  });
}
// 下载二次标准化数据
export function downloadSecondStandardList(data) {
  return request({
    url: `/fundStandardSecondStandardController/exportFundStandardSecondStandard/${data.project_id}`,
    method: "post",
    data,
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
}
// 更新项目下的某条二次标准化数据
export function updateFundStandardSecondStandard(data) {
  return request({
    url: `/fundStandardSecondStandardController/class/updateFundStandardSecondStandard`,
    method: "post",
    data,
  });
}
// 查询项目下的某条二次标准化数据详情
export function getFundStandardSecondStandardInformation(id) {
  return request({
    url: `/fundStandardSecondStandardController/getFundStandardSecondStandardInformation/${id}`,
    method: "post",
  });
}
// 删除项目下的某条二次标准化数据
export function deleteFundStandardSecondStandard(id) {
  return request({
    url: `/fundStandardSecondStandardController/deleteFundStandardSecondStandard/${id}`,
    method: "post",
  });
}
// 确认审阅-将项目下的二次标准化数据转存到标债数据表
export function confirmFundStandardInformation(project_id) {
  return request({
    url: `/fundStandardSecondStandardController/copyInformation/${project_id}`,
    method: "post",
  });
}
// 获取估值方案列表
export function queryValuationPlanList(data) {
  return request({
    url: `/fundManagerValuationMethod/queryProjectValuationMethodList`,
    method: "post",
    data,
  });
}
// 查看同花顺信息
export function thsInformation(data) {
  return request({
    url: `/projectManagement/thsInformation`,
    method: "post",
    data,
  });
}

/**
 * 上传项目需求excel
 * @param data
 * @returns {*}
 */
export function projectRequirementsTableExcel(data) {
  return request({
    url: `/equityPosition/projectRequirementsTableExcel`,
    method: "post",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 3, // 3分钟
  });
}

/**
 * 查询非上市股权项目的项目需求表信息
 * @param project_id
 * @returns {*}
 */
export function getProjectRequirementsTableList(project_id) {
  return request({
    url: `/equityPosition/class/getProjectRequirementsTableList/${project_id}`,
    method: "post",
  });
}

/**
 * 查询非上市股权项目的项目需求表信息20251027更新
 * @param project_id
 * @returns {*}
 */
export function getProjectRequirementsTableListV2(data) {
  return request({
    url: `/equityPosition/class/getProjectRequirementsTableList`,
    method: "post",
    data,
  });
}

/**
 * 修改非上市股权项目的项目需求表信息
 * @param data
 * @returns {*}
 */
export function updateProjectRequirementsTable(data) {
  return request({
    url: `/equityPosition/class/updateProjectRequirementsTable`,
    method: "post",
    data,
  });
}

/**
 * 创建非上市股权项目的项目需求表
 * @param data
 * @returns {*}
 */
export function createProjectRequirementsTable(data) {
  return request({
    url: `/equityPosition/class/createProjectRequirementsTable`,
    method: "post",
    data,
  });
}

/**
 * 上传财务excel
 * @param data
 * @returns {*}
 */
export function equityFinDataBaseExcel(data) {
  return request({
    url: `/projectManagement/equityFinDataBaseExcel`,
    method: "post",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 3, // 3分钟
    // responseType: "blob",
  });
}

/**
 * 上传融资excel
 * @param data
 * @returns {*}
 */
export function equityFinancingDataExcel(data) {
  return request({
    url: `/projectManagement/equityFinancingDataExcel`,
    method: "post",
    data,
    closeResponseHandle: true,
    timeout: 1000 * 60 * 3, // 3分钟
    // responseType: "blob",
  });
}

/**
 * 批量删除非上市股权项目的项目需求表信息
 * @param data
 * @returns {*}
 */
export function batchDeleteProjectRequirementsTable(data) {
  return request({
    url: `/equityPosition/batchDeleteProjectRequirementsTable`,
    method: "post",
    data,
  });
}

/**
 * 批量删除非上市股权项目的项目需求表信息
 * @param data
 * @returns {*}
 */
export function batchUpdateEquityValuationOption(data) {
  return request({
    url: `/equityValuationOption/batchUpdateEquityValuationOption`,
    method: "post",
    data,
  });
}

/**
 * 非上市股权项目估值
 * @param data
 * @returns {*}
 */
export function equityProjectValuation(data) {
  return request({
    url: `/equity/equityProjectValuation`,
    method: "post",
    data,
  });
}
// 项目速览
export function equityProjectOverviewValuation(data) {
  return request({
    url: `/equity/equityProjectOverviewValuation`,
    method: "post",
    data,
  });
}

/**
 * 非上市股权项目估值方案校验
 * @param data
 * @returns {*}
 */
export function equityProjectValuationOptionValidate(data) {
  return request({
    url: `/equityValuationOption/valuationOptionCheckAvailable`,
    method: "post",
    data,
  });
}

export function querySheetListByProject(data) {
  return request({
    url: `/valuationSheet/querySheetListByProject`,
    method: "post",
    data,
  });
}

/**
 * 查询筛选方案列表(全局)
 * @param data
 * @returns {*}
 */
export function queryEquityFilterOptionList(data) {
  return request({
    url: `/equityFilterOption/queryEquityFilterOptionList`,
    method: "post",
    data,
  });
}

export function queryEquityFilterOptionDetailRuleList(data) {
  return request({
    url: `/equityFilterOption/queryEquityFilterOptionDetailRuleList`,
    method: "post",
    data,
  });
}

export function batchUpdateRule(data) {
  return request({
    url: `/equityFilterRule/batchUpdateRule`,
    method: "post",
    data,
  });
}

// 股权项目融资表查询
export function getFinancingList(data) {
  return request({
    url: `/equityFinancingData/queryFinancingDataList`,
    method: "post",
    data,
  });
}

// 股权项目财务表查询
export function getFinanceList(data) {
  return request({
    url: `/equityFinDatabase/queryFinancialList`,
    method: "post",
    data,
  });
}

// 股权项目财务表查询
export function getLogList(data) {
  return request({
    url: `/projectOperationLog/queryFinancingDataList`,
    method: "post",
    data,
  });
}

// 上传成交清算表excel
export function uploadFundSettlementDailyExcel(data) {
  return request({
    url: `/projectAmortizedCost/uploadFundSettlementDailyExcel`,
    method: "post",
    data,
  });
}

// 上传转托管记录
export function uploadCustodyTransferExcel(data) {
  return request({
    url: `/projectAmortizedCost/importCustodyTransferProcessExcel`,
    method: "post",
    data,
  });
}

// 上传测试基金清单 ///projectAmortizedCost/uploadTestFundListExcel
export function uploadTestFundListExcel(data) {
  return request({
    url: `/projectAmortizedCost/uploadTestFundListExcel`,
    method: "post",
    data,
  });
}

// 下载估值方案表格
export function downloadValuationPlan(data) {
  return request({
    url: `/fundManagerValuationMethod/projectValuationMethodExcelDownload/${data.project_id}`,
    method: "post",
    data,
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
}

// 获取华为云url
export function getObsUrl(data) {
  return request({
    url: "/file/generatePresignedUrl",
    method: "post",
    data,
  });
}

// 批量估值按钮
export function batchValuate(data) {
  return request({
    url: "/projectManagement/class/allValuationMark",
    method: "post",
    data,
  });
}
// 二次标准化单条估值-----估值方法调整
export function singleValuation(data) {
  return request({
    url: "/projectManagement/class/singleValuation",
    method: "post",
    data,
  });
}

// getDeliveryList 获取交付物列表
export function getDeliveryList(data) {
  return request({
    url: `/projectDeliveryLog/getProjectDeliveryLogList/${data.project_id}`,
    method: "post",
    data,
  });
}

// getDeliveryList 获取交付物文件
export function getDeliveryFile(data) {
  return request({
    url: `/file/download`,
    method: "post",
    data,
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
}

// 二次标准化批量修改并估值
export function updateAndValuation(data) {
  return request({
    url: `/projectManagement/class/updateAndValuation`,
    method: "post",
    data,
  });
}
//速览列表
export function getQuickTableList(data) {
  return request({
    url: `/projectManagement/equityOverviewAndValuationRangeAnalyzePlot`,
    method: "post",
    data,
  });
}
// 速览列表重新计算
export function calcDlomValue(data) {
  return request({
    url: `/projectManagement/equityValuationRangeReAnalyzePlot`,
    method: "post",
    data,
  });
}
// 企业查询
export function enterpriseInquiry(id) {
  return request({
    url: `/enterpriseInquiry/add/${id}`,
    method: "post",
  });
}
// 查询项目背景
export function getProjectBackground(position_id) {
  return request({
    url: `/customerLedger/getProjectBackground/${position_id}`,
    method: "post",
  });
}
// 修改项目背景
export function updateProjectBackground(data) {
  return request({
    url: `/customerLedger/updateProjectBackground`,
    method: "post",
    data,
  });
}
// 跟据项目ID导出项目下所有资产对应的风险信息到Excel
export function exportAllRiskByCreditCodes(project_id) {
  return request({
    url: `/risk/exportAllRiskByCreditCodes/${project_id}`,
    method: "post",
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
}
// v.1 跟据项目ID导出项目下所有资产对应的风险信息到zip
export function batchDownloadAllRiskByProjectId(project_id) {
  return request({
    url: `/risk/batchDownloadAllRiskByProjectId/${project_id}`,
    method: "post",
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
}
// v.2 跟据项目ID导出项目下所有资产对应的风险信息到zip
export function batchDownloadAllRiskByProjectIdV2(project_id) {
  return request({
    url: `/risk/exportAllRiskByProjectIdInSingleExcel/${project_id}`,
    method: "post",
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
}
// 导出估值单记录列表
export function exportEquityValuationRecordListBySheetID(sheet_id) {
  return request({
    url: `/equityValuationRecord/exportEquityValuationRecordListBySheetID/${sheet_id}`,
    method: "post",
    timeout: 1000 * 60 * 3, // 3分钟
    responseType: "blob",
  });
}
// 批量保存或更新项目速览
export function batchSaveOrUpdateProjectQuickLook(data) {
  return request({
    url: `/projectQuickLook/batchSaveOrUpdate`,
    method: "post",
    data,
  });
}
// 查询其他类型项目文档
export function getProjectOtherProjectDocument(data) {
  return request({
    url: `/projectOtherProjectDocument/list`,
    method: "post",
    data,
  });
}
// 批量其他上传文件
export function batchUploadOtherProjectDocument(data) {
  return request({
    url: `/projectOtherProjectDocument/batchUpload`,
    method: "post",
    data,
  });
}
// 批量其他删除文档
export function batchDeleteOtherProjectDocument(data) {
  return request({
    url: `/projectOtherProjectDocument/batchDelete`,
    method: "post",
    data,
  });
}
// 查询项目组类型项目文档
export function getProjectGroupDocument(data) {
  return request({
    url: `/projectGroupManagementDocument/list`,
    method: "post",
    data,
  });
}
// 批量项目组上传文件
export function batchUploadProjectGroupDocument(data) {
  return request({
    url: `/projectGroupManagementDocument/batchUpload`,
    method: "post",
    data,
  });
}
// 批量项目组删除文档
export function batchDeleteProjectGroupDocument(data) {
  return request({
    url: `/projectGroupManagementDocument/batchDelete`,
    method: "post",
    data,
  });
}
// 项目统计
export function PMstatisticsMap(data) {
  return request({
    url: `/projectManagement/query/allTransfer/statisticsMap`,
    method: "post",
    data,
  });
}
//其他项目-进行中 移交至 交付
export function otherDoingToDeliveryStatus(data) {
  return request({
    url: `/projectManagement/other/doingToDeliveryStatus`,
    method: "post",
    data,
  });
}
//其他项目-交付 移交至 进行中
export function otherDeliveryStatusReturnToDoing(data) {
  return request({
    url: `/projectManagement/class/deliveryStatusReturnToDoing`,
    method: "post",
    data,
  });
}
// 获取标准化二级标准化信息类型
export function getFundStandardSecondStandardInformationType(data) {
  return request({
    url: `/fundStandardSecondStandardController/getFundStandardSecondStandardInformationType`,
    method: "post",
    data,
  });
}

// 清洗数据接口
export function cleanData(data) {
  return request({
    url: `/projectManagement/cleanData`,
    method: "post",
    data,
  });
}

// 整理数据接口
export function organizeData(data) {
  return request({
    url: `/projectManagement/organizeData`,
    method: "post",
    data,
  });
}

// 摊余成本计量接口
export function amortizedCostMeasurement(data) {
  return request({
    url: `/projectManagement/amortizedCostMeasurement`,
    method: "post",
    data,
  });
}

// 客户估值对比接口
export function customerValuationComparison(data) {
  return request({
    url: `/projectManagement/customerValuationComparison`,
    method: "post",
    data,
  });
}
//查询ac估值表列表明细表
export function queryACValuationList(data) {
  return request({
    url: `/projectAmortizedCost/queryValuationList`,
    method: "post",
    data,
  });
}
// 查询ac持仓交易列表
export function queryAcPositionTradeList(data) {
  return request({
    url: `/projectAmortizedCost/queryPositionTradeList`,
    method: "post",
    data,
  });
}
// 手动插入持仓交易记录
export function manualInsertPositionTradeRecords(data) {
  return request({
    url: `/projectAmortizedCost/manualInsertPositionTradeRecords`,
    method: "post",
    data,
  });
}
// 删除持仓交易记录
export function deletePositionTradeRecords(data) {
  return request({
    url: `/projectAmortizedCost/deletePositionTradeRecords`,
    method: "post",
    data,
  });
}
// 获取ac现金流明细
export function getAcCashflowDetail(data) {
  return request({
    url: `/projectAmortizedCost/getCashflowDetail`,
    method: "post",
    data,
  });
}
// 查询ac关键字配置
export function getAcKeywordConfig(data) {
  return request({
    url: `/projectAmortizedCost/getAcKeywordConfig`,
    method: "post",
    data,
  });
}
// 更新ac关键字配置
export function updateAcKeywordConfig(data) {
  return request({
    url: `/projectAmortizedCost/updateAcKeywordConfig`,
    method: "post",
    data,
  });
}
// ac-批量计算对比
export function batchCalcCompare(data) {
  return request({
    url: `/projectAmortizedCost/batchCalcCompare`,
    method: "post",
    data,
  });
}
//下载摊余成本底稿
export function downloadACWorkPaper(projectId) {
  return request({
    url: `/projectAmortizedCost/downloadWorkpaper/${projectId}`,
    method: "post",
    responseType: "blob",
  });
}
// ac测试基金汇总数据
export function queryACTestFundSummary(data) {
  return request({
    url: `/projectAmortizedCost/queryTestFundSummary`,
    method: "post",
    data,
  });
}
// ac测试基金清单明细数据
export function queryACTestFundList(data) {
  return request({
    url: `/projectAmortizedCost/queryTestFundList`,
    method: "post",
    data,
  });
}
// 手动补录清算表数据
export function manualSupplementSettlementDaily(data) {
  return request({
    url: `/projectAmortizedCost/manualSupplementSettlementDaily`,
    method: "post",
    data,
  });
}
// 回撤手动补录清算表数据
export function deleteSupplementData(data) {
  return request({
    url: `/projectAmortizedCost/revokeManualSupplement`,
    method: "post",
    data,
  });
}
// 查询结算单标准化数据列表，支持按交易方向筛选
export function querySettlementDailyStandardList(data) {
  return request({
    url: `/projectAmortizedCost/querySettlementDailyStandardList`,
    method: "post",
    data,
  });
}
// 查询原始清算表交易记录
export function querySettlementDailyList(data) {
  return request({
    url: `/projectAmortizedCost/querySettlementDailyList`,
    method: "post",
    data,
  });
}
// 查询转托管记录
export function queryTransferRecordList(data) {
  return request({
    url: `/projectAmortizedCost/queryTransferRecordList`,
    method: "post",
    data,
  });
}
// 更新ac配置
export function updateAcConfig(data) {
  return request({
    url: `/projectAmortizedCost/updateAcConfig`,
    method: "post",
    data,
  });
}
// 更新ac税率
export function updateAcTaxRate(data) {
  return request({
    url: `/projectAmortizedCost/updateTaxRate`,
    method: "post",
    data,
  });
}
// 查询ac项目代码列表
export function queryEGProjectCode(data) {
  return request({
    url: `/projectQueryOptimized/queryProjectInfo`,
    method: "post",
    data,
  });
}
//  添加项目组
export function addProjectGroup(data) {
  return request({
    url: `/projectGroupManagement/add`,
    method: "post",
    data,
  });
}
//  更新项目组
export function updateProjectGroup(data) {
  return request({
    url: `/projectGroupManagement/edit`,
    method: "post",
    data,
  });
}
//  查询项目组列表
export function listProjectGroup(data) {
  return request({
    url: `/projectGroupManagement/list`,
    method: "post",
    data,
  });
}
//  删除项目组
export function removeProjectGroup(id) {
  return request({
    url: `/projectGroupManagement/remove/${id}`,
    method: "post",
  });
}
//  批量删除项目组
export function removeBatchProjectGroup(data) {
  return request({
    url: `/projectGroupManagement/removeBatch`,
    method: "post",
    data,
  });
}

// 跟据项目组ID查询项目管理列表
export function queryProjectManagementList(data) {
  return request({
    url: `/projectGroupManagement/queryProjectManagementList`,
    method: "post",
    data,
  });
}
// 获取项目组管理详细信息
export function getProjectGroupManagementInfo(id) {
  return request({
    url: `/projectGroupManagement/getInfo/${id}`,
    method: "post",
  });
}

// 根据项目组ID查询操作日志列表
export function queryProjectGroupOperationLogList(data) {
  return request({
    url: `/projectGroupOperationLog/list`,
    method: "post",
    data,
  });
}

// 根据证券代码批量回填证券名称
export function batchFillSecurityName(data) {
  return request({
    url: `/projectAmortizedCost/batchFillSecurityName`,
    method: "post",
    data,
  });
}
