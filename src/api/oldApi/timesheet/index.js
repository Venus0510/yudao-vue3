import request from "@/api/oldApi/request";

// 根据日期修改当前操作人员当天所有项目的工时记录
export function batchUpdateWorkHoursByDate(data) {
  return request({
    url: `/projectWorkHours/batchUpdateWorkHoursByDate`,
    method: "post",
    data,
  });
}
// 根据项目ID和时间集合批量修改当前操作人员的工时记录
export function batchUpdateWorkHoursByDateRange(data) {
  return request({
    url: `/projectWorkHours/batchUpdateWorkHoursByDateRange`,
    method: "post",
    data,
  });
}
//根据项目ID、年、月生成当月工作日工时记录
export function createMonthlyWorkHours(data) {
  return request({
    url: `/projectWorkHours/createMonthlyWorkHours`,
    method: "post",
    data,
  });
}
//删除指定年月内当前操作人员在指定项目下的工时记录
export function deleteWorkHoursByProjectAndMonth(data) {
  return request({
    url: `/projectWorkHours/deleteWorkHoursByProjectAndMonth`,
    method: "post",
    data,
  });
}
//根据年月查询当前操作人员的项目工时详情
export function queryWorkHoursByMonth(data) {
  return request({
    url: `/projectWorkHours/queryWorkHoursByMonth`,
    method: "post",
    data,
  });
}
//获取指定年月的日历信息
export function getCalendarDays(data) {
  return request({
    url: `/calendarHolidays/getCalendarDays`,
    method: "post",
    data,
  });
}
//导出工时
export function exportWorkHoursByRole(data) {
  return request({
    url: `/projectWorkHours/exportWorkHoursByRole`,
    method: "post",
    data,
    responseType: "blob",
  });
}
