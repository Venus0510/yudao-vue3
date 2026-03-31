import {
  batchUpdateWorkHoursByDate as batchUpdateWorkHoursByDateOld,
  batchUpdateWorkHoursByDateRange as batchUpdateWorkHoursByDateRangeOld,
  createMonthlyWorkHours as createMonthlyWorkHoursOld,
  deleteWorkHoursByProjectAndMonth as deleteWorkHoursByProjectAndMonthOld,
  exportWorkHoursByRole as exportWorkHoursByRoleOld,
  getCalendarDays as getCalendarDaysOld,
  queryWorkHoursByMonth as queryWorkHoursByMonthOld
} from '@/api/oldApi/timesheet/index.js'
import {
  queryAllAuditProjectManagementList as queryAllAuditProjectManagementListOld,
  queryAllValuationProjectManagementList as queryAllValuationProjectManagementListOld
} from '@/api/oldApi/projectManage/index.js'
import { getRolesByUserId as getRolesByUserIdOld } from '@/api/oldApi/system/role.js'

type AnyData = Record<string, any>

const toArray = (value: unknown): any[] => (Array.isArray(value) ? value : [])

export const queryWorkHoursByMonth = async (data: AnyData) => {
  const res = await queryWorkHoursByMonthOld(data)
  return {
    ...res,
    data: toArray(res?.data)
  }
}

export const getCalendarDays = async (data: AnyData) => {
  const res = await getCalendarDaysOld(data)
  return {
    ...res,
    data: toArray(res?.data)
  }
}

export const createMonthlyWorkHours = (data: AnyData) => createMonthlyWorkHoursOld(data)

export const batchUpdateWorkHoursByDate = (data: AnyData) => batchUpdateWorkHoursByDateOld(data)

export const batchUpdateWorkHoursByDateRange = (data: AnyData) =>
  batchUpdateWorkHoursByDateRangeOld(data)

export const deleteWorkHoursByProjectAndMonth = (data: AnyData) =>
  deleteWorkHoursByProjectAndMonthOld(data)

export const exportWorkHoursByRole = async (data: AnyData): Promise<Blob> => {
  const res = await exportWorkHoursByRoleOld(data)
  return res as unknown as Blob
}

export const queryAllAuditProjectManagementList = async (data: AnyData) => {
  const res = (await queryAllAuditProjectManagementListOld(data)) as any
  return {
    ...res,
    rows: toArray(res?.rows)
  }
}

export const queryAllValuationProjectManagementList = async (data: AnyData) => {
  const res = (await queryAllValuationProjectManagementListOld(data)) as any
  return {
    ...res,
    rows: toArray(res?.rows)
  }
}

export const getRolesByUserId = async (data?: AnyData) => {
  const res = await getRolesByUserIdOld(data)
  return {
    ...res,
    data: toArray(res?.data)
  }
}
