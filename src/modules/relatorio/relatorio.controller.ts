import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { RelatorioService } from './relatorio.service';

@Controller('relatorio')
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Get('exportar')
  async exportReport(@Res() res: Response) {
    const { buffer, fileName } = await this.relatorioService.setDataExcel();

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.end(buffer);
  }
}
