/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-09-12 10:57:18
 * @LastEditors: Edward
 * @LastEditTime: 2023-09-22 17:18:30
 * @ModuleName: 减值模块
 */
import request from "@/api/oldApi/request";

// 根据资产id获取减值相关内容
export function getDepreciation(data) {
  return request({
    url: `/depreciation/getDepreciation`,
    method: "post",
    data,
  });
}

// 修改减值资产详情
export function modifyDeClsDetail(data) {
  return request({
    url: `/depreciation/class/create-update`,
    method: "post",
    data,
  });
}

// 从字典中获取所有减值相关固定值信息
export function queryPdMasterScale() {
  return request({
    url: `/depreciation/queryPdMasterScale`,
    method: "post",
  });
}

// 减值计算
export function depreciationCompute(data) {
  return request({
    url: `/depreciation/depreciationCompute`,
    method: "post",
    data,
  });
}

// 根据减值日期，获取对应的前瞻模型
export function queryForwardLookingModel(data) {
  return request({
    url: `/depreciation/queryForwardLookingModel`,
    method: "post",
    data,
  });
}

// 根据前瞻模型和减值时间，获取对应的前瞻方程
export function queryDepreciationModel(data) {
  return request({
    url: `/depreciation/queryModel`,
    method: "post",
    data,
  });
}
