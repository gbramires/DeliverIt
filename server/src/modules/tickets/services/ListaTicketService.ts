import { injectable, inject } from 'tsyringe';

import Ticket from '../infra/typeorm/schemas/Ticket';
import ITicketRepository from '../repositories/ITicketsRepository';

@injectable()
class ListaTicketService {
  constructor(
    @inject('TicketsRepository')
    private ticketRepository: ITicketRepository,
  ) {}

  public async execute(): Promise<Ticket[] | undefined> {
    const list = await this.ticketRepository.all();

    return list;
  }
}

export default ListaTicketService;
