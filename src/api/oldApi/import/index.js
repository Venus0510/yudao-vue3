/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-09-12 10:57:18
 * @LastEditors: Edward
 * @LastEditTime: 2023-09-12 14:20:18
 * @ModuleName: 场外衍生品模块
 */
import request from "@/api/oldApi/request";

// 导入查询
export function getImportMarketList(data) {
  return request({
    url: "/market/query/import/data/list",
    method: "post",
    data,
  });
}

// Introduction导入
export function importIntroduction(data) {
  return request({
    url: "/market/import/sftp/introduction",
    method: "post",
    data,
    timeout: 60 * 1000 * 2,
  });
}

// Indicator导入
export function importIndicator(data) {
  return request({
    url: "/market/import/sftp/derivative/indicator/mh",
    method: "post",
    data,
    timeout: 60 * 1000 * 2,
  });
}

// industriesClass 导入
export function importIndustriesClass(data) {
  return request({
    url: "/market/import/sftp/industries/class",
    method: "post",
    data,
    timeout: 60 * 1000 * 2,
  });
}

// 中债曲线导入SFTP
export function importZZSftp(data) {
  return request({
    url: "/market/import/zz/curve/data/sftp",
    method: "post",
    data,
  });
}
