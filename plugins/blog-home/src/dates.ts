export interface DatedFile {
  readonly defaultDateType?: string
  readonly dates?: Record<string, Date>
  readonly frontmatter?: {
    readonly title?: string
  }
}

export function getDate(data: DatedFile): Date | undefined {
  if (!data.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set. Ensure the CreatedModifiedDate plugin is configured with a 'defaultDateType' option. See https://quartz.jzhao.xyz/plugins/CreatedModifiedDate for more details.`,
    )
  }

  return data.dates?.[data.defaultDateType]
}

export function formatDate(d: Date, locale: string): string {
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function byDateAndAlphabetical(): (left: DatedFile, right: DatedFile) => number {
  return (left: DatedFile, right: DatedFile) => {
    if (left.dates && right.dates) {
      return getDate(right)!.getTime() - getDate(left)!.getTime()
    }

    if (left.dates && !right.dates) {
      return -1
    }

    if (!left.dates && right.dates) {
      return 1
    }

    const leftTitle = left.frontmatter?.title?.toLowerCase() ?? ""
    const rightTitle = right.frontmatter?.title?.toLowerCase() ?? ""
    return leftTitle.localeCompare(rightTitle)
  }
}
