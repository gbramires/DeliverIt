import { injectable } from 'tsyringe';

interface IRequest {
  data_pagamento: Date;
  data_vencimento: Date;
}

@injectable()
class DiasAtrasoServive {
  public execute({ data_vencimento, data_pagamento }: IRequest): number {
    const msPorDia = 24 * 3600 * 1000;
    const diferenca = data_pagamento.getTime() - data_vencimento.getTime();
    const diasAtraso = diferenca / msPorDia;

    if (diasAtraso > 0) {
      return diasAtraso;
    }

    return 0;
  }
}

export default DiasAtrasoServive;
