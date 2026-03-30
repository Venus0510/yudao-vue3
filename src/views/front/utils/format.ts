const getLabel = (
  value: number | string | null | undefined,
  options: Array<{ dictLabel: string; dictValue: number | string }>
): string => {
  if (value === null || value === undefined || value === '') {
    return ''
  }
  const matched = options.find((item) => String(item.dictValue) === String(value))
  return matched?.dictLabel || ''
}

export const filter_standard_bond_model = (value: number | string | null | undefined): string => {
  return getLabel(value, [
    { dictLabel: '中债', dictValue: 0 },
    { dictLabel: '中证', dictValue: 1 }
  ])
}
