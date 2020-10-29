export default interface ICreateTicketDTO {
  nome: string;
  valor_original: number;
  valor_corrigido: number;
  dias_atraso: number;
  regra: string
  data_vencimento: Date;
  data_pagamento: Date;
}
