import { ExcelContextUtil } from '../util/ExcelContextUtil'
import { ExcelContextResult } from './ExcelContextResult'

class ExcelWorksheetHandler {
  public async executeUpdateAllTables (context: Excel.RequestContext, value: string): Promise<ExcelContextResult> {
    let tables = await ExcelContextUtil.getTables(context)
    for (let table of tables) {
      let dataBodyRange = table.getDataBodyRange()
      // dataBodyRange.load('rowCount, columnCount, values')
      // await context.sync()
      // if (dataBodyRange.rowCount > 0 && dataBodyRange.columnCount >= 3) {
      dataBodyRange.getCell(0, 2).values = [[value]]
      // }
    }

    return {
      success: true
    }
  }
}

export { ExcelWorksheetHandler }
