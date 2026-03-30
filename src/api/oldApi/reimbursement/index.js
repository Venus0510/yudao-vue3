import request from "@/api/oldApi/request";

// 创建或更新报销单
export function createOrUpdateReimbursementInfo(data) {
  return request({
    url: "/reimbursementInfo/createOrUpdateReimbursementInfo",
    method: "post",
    data,
  });
}

// 下载报销单报告ZIP
export function downloadReimbursementReportZip(reimbursement_code) {
  return request({
    url: `/reimbursementInfo/downloadReimbursementReportZip/${reimbursement_code}`,
    method: "post",
    responseType: "blob",
  });
}
// 下载报销单合并发票PDF
export function downloadReimbursementInvoiceMergePdf(reimbursement_code) {
  return request({
    url: `/reimbursementInfo/downloadReimbursementInvoiceMergePdf/${reimbursement_code}`,
    method: "post",
    responseType: "blob",
  });
}
// 获取报销单汇总列表
export function getReimbursementSummaryList(data) {
  return request({
    url: "/reimbursementInfo/getReimbursementSummaryList",
    method: "post",
    data,
  });
}
// 获取发票列表
export function getInvoiceListByReimbursementCode(data) {
  return request({
    url: "/reimbursementInvoice/getInvoiceListByReimbursementCode",
    method: "post",
    data,
  });
}
// 上传发票文件
export function uploadInvoiceFiles(data) {
  return request({
    url: "/reimbursementInvoice/uploadInvoiceFiles",
    method: "post",
    data,
  });
}

// 删除报销单
export function deleteReimbursementInfo(data) {
  return request({
    url: `/reimbursementInfo/batchDeleteReimbursementInfo`,
    method: "post",
    data,
  });
}
// 删除发票列表
export function deleteInvoiceListById(data) {
  return request({
    url: "/reimbursementInvoice/batchDeleteInvoiceByIds",
    method: "post",
    data,
  });
}
// 编辑发票列表
export function updateInvoiceList(data) {
  return request({
    url: "/reimbursementInvoice/updateInvoiceById",
    method: "post",
    data,
  });
}
