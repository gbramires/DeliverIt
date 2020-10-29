import { inject, injectable } from 'tsyringe';

import Ticket from '../infra/typeorm/schemas/Ticket';
import ITicketRepository from '../repositories/ITicketsRepository';

interface IRequest {
  nome: string;
  regra:string;
  valor_original: number;
  dias_atraso: number;
  valor_corrigido: number;
  data_pagamento: Date;
  data_vencimento: Date;
}

@injectable()
class CreateTicketService {
  constructor(
    @inject('TicketsRepository')
    private ticketRepository: ITicketRepository,
  ) {}

  public async execute({
    nome,
    regra,
    valor_original,
    valor_corrigido,
    dias_atraso,
    data_vencimento,
    data_pagamento,
  }: IRequest): Promise<Ticket> {
    const ticket = await this.ticketRepository.create({
      nome,
      regra,
      valor_original,
      valor_corrigido,
      dias_atraso,
      data_vencimento,
      data_pagamento,
    });

    return ticket;
  }
}

export default CreateTicketService;
