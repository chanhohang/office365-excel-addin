class ExcelContextUtil {
  static async getTables (context: Excel.RequestContext): Promise<Excel.Table[]> {
    let tables = context.workbook.tables
    tables.load('items/name')
    await context.sync()
    return tables.items
  }
}

export { ExcelContextUtil }
