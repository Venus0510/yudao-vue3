import request from "@/api/oldApi/request";

// 查询资讯列表
export function getNewsArticlesList(data) {
  return request({
    url: "/newsArticles/getNewsArticlesList",
    method: "post",
    data,
  });
}
// 用户配置
export function getSelfUserConfig(data) {
  return request({
    url: "/userConfig/getSelfUserConfig",
    method: "post",
    data,
  });
}