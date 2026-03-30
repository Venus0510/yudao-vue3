export const index_announcement_columns = [
  {
    label: '调整日期',
    prop: 'reporting_date',
    minWidth: 100,
    showTooltip: true
  },
  { label: '证券名称', prop: 'stock_name', minWidth: 120, showTooltip: true },
  {
    label: '管理人',
    prop: 'fund_manager',
    minWidth: 160,
    showTooltip: true
  },
  {
    label: '调整水平',
    prop: 'adjusted_level',
    showTooltip: true,
    minWidth: 120
  }
]

export const index_bond_announcement_columns = [
  { label: '债券代码', prop: 'bond_code', minWidth: 120, showTooltip: true },
  { label: '债券简称', prop: 'bond_name', minWidth: 140, showTooltip: true },
  {
    label: '权利类型',
    prop: 'exercise_type',
    minWidth: 140,
    showTooltip: true
  },
  {
    label: '是否行使权利',
    prop: 'is_exercise',
    showTooltip: true,
    minWidth: 120
  },
  { label: '生效日', prop: 'effective_date', showTooltip: true, minWidth: 120 },
  { label: '利率', prop: 'interest_rate', showTooltip: true, minWidth: 120 },
  { label: '报告日', prop: 'reporting_date', showTooltip: true, minWidth: 120 }
]
