import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';

@Injectable()
export class ExcelService {
  private headersMap = new Map<string, number>();
  private lastRowMap = new Map<string, number>();

  createWorkbook() {
    return new ExcelJS.Workbook();
  }

  async readWorkbook(filePath: string) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    return workbook;
  }

  addWorksheet(workbook: ExcelJS.Workbook, sheetName: string) {
    return workbook.addWorksheet(sheetName);
  }

  async saveWorkbook(workbook: ExcelJS.Workbook, filePath: string) {
    await workbook.xlsx.writeFile(filePath);
  }

  setDefaultCellSize(worksheet: ExcelJS.Worksheet, defaultColumnWidth: number, defaultRowHeight: number) {
    // Define a largura padrão para todas as colunas
    worksheet.columns.forEach((column) => {
      column.width = defaultColumnWidth;
    });

    // Define a altura padrão para todas as linhas
    worksheet.eachRow((row) => {
      row.height = defaultRowHeight;
    });
  }

  addHeaders(worksheet: ExcelJS.Worksheet, headersObject: { [key: string]: string }, defaultColumnWidth = 20, defaultRowHeight = 15) {
    const headers = Object.values(headersObject); // Convertendo o objeto de cabeçalhos em um array de strings
    headers.forEach((header, index) => {
      const cell = worksheet.getCell(1, index + 1);
      cell.value = header;
      this.headersMap.set(header, index + 1);
      this.lastRowMap.set(header, 1); // Inicializa a última linha usada para cada cabeçalho como 1
    });

    // Define o tamanho padrão das células após adicionar os cabeçalhos
    this.setDefaultCellSize(worksheet, defaultColumnWidth, defaultRowHeight);
  }

  writeCellByHeader(worksheet: ExcelJS.Worksheet, headerName: string, value: any, row?: number) {
    const column = this.headersMap.get(headerName);
    if (column === undefined) {
      throw new Error(`Header "${headerName}" not found`);
    }

    let currentRow;
    if (row !== undefined) {
      currentRow = row;
    } else {
      currentRow = this.lastRowMap.get(headerName) + 1;
      this.lastRowMap.set(headerName, currentRow);
    }

    if (column >= 1 && value !== null && value !== undefined) {
      this.writeCell(worksheet, currentRow, column, value);
    }
  }

  writeCell(worksheet: ExcelJS.Worksheet, row: number, col: number, value: any) {
    const cell = worksheet.getCell(row, col);
    cell.value = value;
  }

  getWorksheetData(workbook: ExcelJS.Workbook, sheetName: string) {
    return workbook.getWorksheet(sheetName);
  }

  applyStyleToRow(worksheet: ExcelJS.Worksheet, rowNumber: number, style: any) {
    worksheet.getRow(rowNumber).eachCell((cell) => {
      Object.assign(cell, style);
    });
  }

  async saveWorkbookToBuffer(workbook: ExcelJS.Workbook): Promise<ExcelJS.Buffer> {
    return workbook.xlsx.writeBuffer();
  }

  renameWorksheet(workbook: ExcelJS.Workbook, oldName: string, newName: string) {
    const worksheet = workbook.getWorksheet(oldName);
    if (worksheet) worksheet.name = newName;
  }

  removeWorksheet(workbook: ExcelJS.Workbook, sheetName: string) {
    workbook.removeWorksheet(workbook.getWorksheet(sheetName).id);
  }
}
