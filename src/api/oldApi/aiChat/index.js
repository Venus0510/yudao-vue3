// ai chat
import request from "@/api/oldApi/request";

// 初始化生成 memoryId
export function generateMemoryId(data) {
  return request({
    url: `/aiAgent/generateMemoryId`,
    method: "post",
    data,
  });
}

// 重新生成 memoryId
export function deleteMemory(data) {
  return request({
    url: `/aiAgent/deleteMemory/${data}`,
    method: "post",
    data,
  });
}

// chat
export function chat(data) {
  return request({
    url: `/aiAgent/chat`,
    method: "post",
    data,
  });
}

// uploadFile
export function uploadFile(data) {
  return request({
    url: `/aiAgent/uploadFile`,
    method: "post",
    data,
  });
}

// /valuation-api/aiAgent/deleteMemory/{memory_id}