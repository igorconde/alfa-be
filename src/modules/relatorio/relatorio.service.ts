// seu-servico.service.ts
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DateUtils } from '@utils/date.utils';
import { ExcelService } from '@utils/excel.utils';
import { DataSource } from 'typeorm';

@Injectable()
export class RelatorioService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  private generateTimestamp() {
    const now = new Date();
    return now
      .toISOString()
      .replace(/[\-:T]/g, '')
      .slice(0, 14);
  }

  generateAppointmentDate(): string {
    const today = new Date();
    const numberOfBusinessDays = 10;
    const appointmentDate = DateUtils.getNextBusinessDay(DateUtils.formatDate(today, 'yyyy-MM-dd'), numberOfBusinessDays);

    return appointmentDate;
  }

  async setDataExcel() {
    const excelService = new ExcelService();

    const fileName = `RelatorioIndicadores_${this.generateTimestamp()}.xlsx`;

    const workbook = excelService.createWorkbook();

    const headers = {
      INDICADOR: 'INDICADOR',
      ID_ATEND: 'ID ATEND.',
      TITULO: 'TÍTULO',
      PRODUTO_NACIONAL: 'PRODUTO NACIONAL',
      PRODUTO_REGIONAL: 'PRODUTO REGIONAL',
      DT_EMISSAO: 'DT EMISSÃO',
      DT_NEGOCIACAO: 'DT NEGOCIAÇÃO',
      DT_ACEITACAO: 'DT ACEITAÇÃO',
      DT_EXECUCAO: 'DT EXECUÇÃO',
      DT_CONCLUSAO: 'DT CONCLUSÃO',
      STATUS: 'STATUS',
      UNIDADE: 'UNIDADE',
      REGIONAL: 'REGIONAL',
      MEDICAO_INICIAL: 'MEDIÇÃO INICIAL',
      MEDICAO_FINAL: 'MEDIÇÃO FINAL',
      RESULTADO: 'RESULTADO',
    };

    const data = await this.getIndicadores();

    const worksheet = excelService.addWorksheet(workbook, 'Dados');

    excelService.addHeaders(worksheet, headers);

    // Escrevendo dados
    data.forEach((item) => {
      excelService.writeCellByHeader(worksheet, headers.INDICADOR, item.indicador_nome);
      excelService.writeCellByHeader(worksheet, headers.ID_ATEND, item.id);
      excelService.writeCellByHeader(worksheet, headers.TITULO, item.titulo);
      excelService.writeCellByHeader(worksheet, headers.PRODUTO_NACIONAL, item.descricao);
      excelService.writeCellByHeader(worksheet, headers.PRODUTO_REGIONAL, item.nome);
      excelService.writeCellByHeader(worksheet, headers.DT_EMISSAO, item.dataemissao);
      excelService.writeCellByHeader(worksheet, headers.DT_NEGOCIACAO, item.datanegociacao);
      excelService.writeCellByHeader(worksheet, headers.DT_ACEITACAO, item.dataaceitacao);
      excelService.writeCellByHeader(worksheet, headers.DT_EXECUCAO, item.dataexecucao);
      excelService.writeCellByHeader(worksheet, headers.DT_CONCLUSAO, item.dataconclusao);
      excelService.writeCellByHeader(worksheet, headers.STATUS, item.status);
      excelService.writeCellByHeader(worksheet, headers.UNIDADE, item.unidade_abreviacao);
      excelService.writeCellByHeader(worksheet, headers.REGIONAL, item.regional_abreviacao);
      excelService.writeCellByHeader(worksheet, headers.MEDICAO_INICIAL, item.medicaoinicial);
      excelService.writeCellByHeader(worksheet, headers.MEDICAO_FINAL, item.medicaofinal);
      excelService.writeCellByHeader(worksheet, headers.RESULTADO, item.resultado);
    });

    const boldStyle = {
      font: { bold: true, color: { argb: 'FFFFFF' } },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '0258a7' } },
      alignment: { vertical: 'middle' },
    };

    excelService.applyStyleToRow(worksheet, 1, boldStyle);

    const buffer = await excelService.saveWorkbookToBuffer(workbook);

    console.log(`Planilha salva com sucesso em: ${fileName}`);

    return { buffer, fileName };
  }

  async getIndicadores(): Promise<any[]> {
    try {
      const stringQueryIndicadores = `
      SELECT 
      iref.nome as indicador_nome, 
      a.id, 
      a.titulo, 
      pn.descricao, 
      pr.nome, 
      a.dataemissao,
      a.datanegociacao, 
      a.dataaceitacao, 
      a.dataexecucao, 
      a.dataconclusao, 
      status.descricao  as status, 
      uni.abreviacao as unidade_abreviacao,
      regional.abreviacao as regional_abreviacao, 
      iated.medicaoinicial, 
      iated.medicaofinal, 
      iated.resultado, 
      iated.idindicadorreferencial
      FROM indicadoratendimentoreferencial iated
      JOIN indicadorreferencial iref ON iref.id = iated.idindicadorreferencial
      JOIN atendimento a ON a.id = iated.idatendimento
      JOIN atendimentostatus status ON status.id = a.idatendimentostatus
      JOIN produtoregional pr ON pr.id = a.idprodutoregional
      JOIN produtonacional pn ON pn.id = pr.idprodutonacional
      JOIN unidade uni ON uni.id = a.idunidade
      JOIN unidade regional ON regional.id = a.idregional
      ORDER BY iated.idindicadorreferencial
  `;

      const dadosIndicadores = await this.dataSource.query(stringQueryIndicadores);

      return dadosIndicadores;
    } catch (error) {
      console.error('Erro durante a consulta:', error);
    }
  }
}
