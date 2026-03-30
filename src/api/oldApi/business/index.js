import request from "@/api/oldApi/request";

// 根据估值单id查询【非标债权】估值结果记录列表--分页
export function getFixedValuationRecordList(data) {
    return request({
      url: `/fixedIncomeValuationRecord/queryPageFixedIncomeValuationRecordListBySheetID`,
      method: "post",
      data,
    });
  }
// 根据估值单id查询【非上市股权】估值结果记录列表--分页
export function getEquityValuationRecordList(data) {
    return request({
      url: `/equityValuationRecord/queryPageEquityValuationRecordListBySheetID`,
      method: "post",
      data,
    });
  }
// 根据估值单id查询【场外衍生品】估值结果记录列表--分页
export function getDeriveValuationRecordList(data) {
    return request({
      url: `/derivativeValuationRecord/queryPageDerivativeValuationRecordListBySheetID`,
      method: "post",
      data,
    });
  }