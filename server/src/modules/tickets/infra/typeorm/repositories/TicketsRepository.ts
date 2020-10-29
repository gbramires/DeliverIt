import { getMongoRepository, MongoRepository } from 'typeorm';

import ITicketsRepository from '@modules/tickets/repositories/ITicketsRepository';
import Ticket from '../schemas/Ticket';

class TicketsRepository implements ITicketsRepository {
  private ormRepository: MongoRepository<Ticket>;

  constructor() {
    this.ormRepository = getMongoRepository(Ticket);
  }

  public async create({
    nome,
    valor_original,
    valor_corrigido,
    dias_atraso,
    regra,
    data_pagamento,
    data_vencimento,
  }: Ticket): Promise<Ticket> {
    const ticket = this.ormRepository.create({
      nome,
      regra,
      valor_original,
      valor_corrigido,
      dias_atraso,
      data_pagamento,
      data_vencimento,
    });

    await this.ormRepository.save(ticket);

    return ticket;
  }

  public async all(): Promise<Ticket[] | undefined> {
    const list = await this.ormRepository.find();
    return list;
  }
}

export default TicketsRepository;
