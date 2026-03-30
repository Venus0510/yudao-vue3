import {
  getNewsArticlesList as getNewsArticlesListOld,
  getSelfUserConfig as getSelfUserConfigOld
} from '@/api/oldApi/frontPage/index.js'
import { getStandardDebtAnalysis as getStandardDebtAnalysisOld } from '@/api/oldApi/StandardDebt/index.js'
import {
  getAdjustedDataList as getAdjustedDataListOld,
  getBondDataList as getBondDataListOld,
  getAdjustedStockList as getAdjustedStockListOld,
  getPlotDataForStock as getPlotDataForStockOld
} from '@/api/oldApi/market/index.js'

export const getSelfUserConfig = (data?: Record<string, any>) => getSelfUserConfigOld(data)

export const getNewsArticlesList = (data: Record<string, any>) => getNewsArticlesListOld(data)

export const getStandardDebtAnalysis = (data: Record<string, any>) =>
  getStandardDebtAnalysisOld(data)

export const getAdjustedDataList = (data: Record<string, any>) => getAdjustedDataListOld(data)

export const getBondDataList = (data: Record<string, any>) => getBondDataListOld(data)

export const getAdjustedStockList = (data: Record<string, any>) => getAdjustedStockListOld(data)

export const getPlotDataForStock = (data: Record<string, any>) => getPlotDataForStockOld(data)
