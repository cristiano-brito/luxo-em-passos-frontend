import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

// Interface para estender o jsPDF com as propriedades do plugin autoTable
export interface jsPDFWithPlugin extends jsPDF {
  lastAutoTable?: { finalY: number };
}

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  /**
   * Gera um PDF de BI completo para o gestor.
   * Inclui cálculos de lucratividade e margem por item.
   */
  gerarRelatorioVendasPDF(vendas: any[], titulo: string): void {
    const doc = new jsPDF() as jsPDFWithPlugin;
    const dataEmissao = new Date().toLocaleDateString('pt-BR');

    // 1. Cabeçalho de Identidade Visual
    doc.setFontSize(22);
    doc.setTextColor(50, 94, 106); // $color-primary (#325E6A)
    doc.text('Luxo em Passos', 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(`Relatório de Inteligência de Vendas | Emitido em: ${dataEmissao}`, 14, 28);

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(titulo, 14, 42);

    // 2. Tabela de Performance Financeira
    autoTable(doc, {
      startY: 48,
      head: [['Data', 'Cliente', 'Produto', 'Qtd', 'Venda Total', 'Lucro Bruto', 'Mg %']],
      body: vendas.map(v => [
        v.data,
        v.cliente,
        v.produto,
        v.qtd,
        v.valorVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        v.lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        v.margem.toFixed(1) + '%'
      ]),
      headStyles: {
        fillColor: [50, 94, 106],
        halign: 'center',
        fontSize: 10
      },
      columnStyles: {
        4: { halign: 'right' },
        5: { halign: 'right', fontStyle: 'bold' },
        6: { halign: 'center' }
      },
      alternateRowStyles: { fillColor: [245, 247, 246] },
      theme: 'grid'
    });

    // 3. Resumo Executivo (BI Footer)
    const finalY = doc.lastAutoTable?.finalY || 70;
    const totalVenda = vendas.reduce((acc, v) => acc + v.valorVenda, 0);
    const totalLucro = vendas.reduce((acc, v) => acc + v.lucro, 0);
    const margemMedia = (totalLucro / totalVenda) * 100;

    // Linha divisória
    doc.setDrawColor(200, 200, 200);
    doc.line(140, finalY + 5, 196, finalY + 5);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Faturamento:`, 140, finalY + 12);
    doc.text(totalVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), 196, finalY + 12, { align: 'right' });

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(39, 174, 96); // Verde para Lucro
    doc.text(`Lucro Total:`, 140, finalY + 19);
    doc.text(totalLucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), 196, finalY + 19, { align: 'right' });

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text(`Margem Média:`, 140, finalY + 26);
    doc.text(`${margemMedia.toFixed(2)}%`, 196, finalY + 26, { align: 'right' });

    // 4. Download
    const nomeArquivo = `luxo-relatorio-${titulo.toLowerCase().replace(/ /g, '-')}.pdf`;
    doc.save(nomeArquivo);
  }

  /**
   * Exporta a base bruta para Excel para auditoria ou contabilidade.
   */
  exportarParaExcel(dados: any[], nomeArquivo: string): void {
    // Mapeamento de nomes de colunas técnicos para nomes legíveis
    const formatadoExcel = dados.map(item => ({
      'Data': item.data,
      'Cliente': item.cliente,
      'Produto': item.produto,
      'Quantidade': item.qtd,
      'Valor Venda (R$)': item.valorVenda,
      'Lucro Bruto (R$)': item.lucro,
      'Margem (%)': item.margem.toFixed(2)
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(formatadoExcel);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Performance de Vendas');

    // Ajuste de largura automática das colunas (Dica de nível Pleno)
    const wscols = [
      { wch: 12 }, { wch: 25 }, { wch: 30 }, { wch: 10 }, { wch: 15 }, { wch: 15 }, { wch: 12 }
    ];
    worksheet['!cols'] = wscols;

    XLSX.writeFile(workbook, `${nomeArquivo}.xlsx`);
  }
}
