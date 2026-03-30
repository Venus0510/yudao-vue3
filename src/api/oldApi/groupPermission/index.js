/*
 * @Description:
 * @Version: 1.0
 * @Author: Edward
 * @Date: 2023-07-25 16:09:08
 * @LastEditors: Edward
 * @LastEditTime: 2023-07-25 16:09:58
 */

import request from "@/api/oldApi/request";

// 查询管理人列表
export function getAuthTree(data) {
  return request({
    url: "/fund-manager/auth/tree",
    method: "post",
    data,
  });
}
