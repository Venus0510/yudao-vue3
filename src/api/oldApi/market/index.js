

import request from "@/api/oldApi/request";

// 撤销已审核报告
export function rollbackAuditedAdjustedData(data) {
  return request({
    url: "/marketValuationAdjustedData/rollbackAuditedAdjustedData",
    method: "post",
    data,
  });
}
// 查询估值调整报告列表
export function getAdjustedDataList(data) {
  return request({
    url: "/marketValuationAdjustedData/getAdjustedDataList",
    method: "post",
    data,
  });
}
// 查询估值调整报告详情
export function getAdjustedDataDetail(data) {
  return request({
    url: "/marketValuationAdjustedData/getAdjustedDataDetail",
    method: "post",
    data,
  });
}
// 下载估值调整报告原始文件
export function downloadReportOriginalFile(data) {
  return request({
    url: "/marketValuationAdjustedData/downloadReportOriginalFile",
    method: "post",
    data,
		responseType: "blob",
  });
}
// 创建或更新估值调整报告
export function createOrUpdateAdjustedData(data) {
  return request({
    url: "/marketValuationAdjustedData/createOrUpdateAdjustedData",
    method: "post",
    data,
  });
}
// 批量删除估值调整报告
export function batchDeleteAdjustedData(data) {
  return request({
    url: "/marketValuationAdjustedData/batchDeleteAdjustedData",
    method: "post",
    data,
  });
}
// 查询估值调整证券列表
export function getAdjustedStockList(data) {
  return request({
    url: "/marketValuationAdjustedData/getAdjustedStockList",
    method: "post",
    data,
  });
}
// 获取证券估值调整报告散点图数据
export function getPlotDataForStock(data) {
  return request({
    url: "/marketValuationAdjustedData/getPlotDataForStock",
    method: "post",
    data,
  });
}

// 查询行权公告列表
export function getBondDataList(data) {
  return request({
    url: "/exerciseAnnouncementController/query/all/list",
    method: "post",
    data,
  });
}

// 下载行权公告
export function downloadBondReportOriginalFile(data) {
  return request({
    url: "",
    method: "post",
    data,
		responseType: "blob",
  });
}
// 新增公告信息
export function addExerciseAnnouncement(data) {
  return request({
    url: "/exerciseAnnouncementController/addExerciseAnnouncement",
    method: "post",
    data,
  });
}
// 修改行权公告信息
export function updateExerciseAnnouncement(data) {
  return request({
    url: "/exerciseAnnouncementController/updateExerciseAnnouncement",
    method: "post",
    data,
  });
}
// 审核取消，将增加到特殊条款数据删除
export function cancelApprovedAndInsertById(id) {
  return request({
    url: `/exerciseAnnouncementController/cancelApprovedAndInsert/${id}`,
    method: "post",
  });
}
// 审核通过，将数据增加到特殊条款
export function approvedAndInsertById(id) {
  return request({
    url: `/exerciseAnnouncementController/approvedAndInsert/${id}`,
    method: "post",
  });
}
// 跟据曲线名称和日期获取基准曲线数据列表
export function queryBenchmarkCurveList(data) {
  return request({
    url: `/marketCurveData/queryBenchmarkCurveList`,
    method: "post",
    data
  });
}
// 分页查询锚定利率名称列表
export function queryAnchorRatePageList(data) {
  return request({
    url: `/marketFixingRate/queryAnchorRatePageList`,
    method: "post",
    data
  });
}
