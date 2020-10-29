import { injectable } from 'tsyringe';
import { format as currency } from 'currency-formatter';

interface IRequest {
  dias_atraso: number;
  valor_original: number;
}
interface IResponse{
  valor_corrigido: number;
  regra: string;
}

@injectable()
export default class CalculaJurosService {
  public execute({ dias_atraso, valor_original }: IRequest): IResponse {
    let jurosCalculados = 0;
    let valorCorrigido = 0;
    let regra = '';


    if (dias_atraso > 0) {
      if (dias_atraso < 4) {
        jurosCalculados = Number(valor_original) * 0.001 * dias_atraso;
        valorCorrigido =
        Number(valor_original) + Number(valor_original) * 0.02 + jurosCalculados;
        regra = `Até 3 dias de atraso, multa de 2%(${currency((Number(valor_original) * 0.02), {locale: 'pt-BR'})}) mais juros de 0,1% por dia ( total ${currency(jurosCalculados, {locale: 'pt-BR'})}).`;
      } else if (dias_atraso > 3 && dias_atraso < 6) {
        jurosCalculados = Number(valor_original) * 0.002 * dias_atraso;
        valorCorrigido =
        Number(valor_original) + Number(valor_original) * 0.03 + jurosCalculados;
        regra = `Superior a 3 dias de atraso, multa de 3%  (${currency((Number(valor_original) * 0.03), {locale: 'pt-BR'})}) mais juros de 0,2% por dia  ( total ${currency(jurosCalculados, {locale: 'pt-BR'})}).`;
      } else if (dias_atraso > 5) {
        jurosCalculados = Number(valor_original) * 0.003 * dias_atraso;
        valorCorrigido =
        Number(valor_original) + Number(valor_original) * 0.05 + jurosCalculados;
        regra =`Superior a 5 dias de atraso, multa de 5% (${currency((Number(valor_original) * 0.05), {locale: 'pt-BR'})}) mais juros de 0,3% por dia ( total ${currency(jurosCalculados, {locale: 'pt-BR'})}).`;
      }
    } else {
      valorCorrigido = valor_original;
      regra = 'Boleto em Dia'
    }

    const response: IResponse= {valor_corrigido: valorCorrigido, regra};

    return response;
  }
}
