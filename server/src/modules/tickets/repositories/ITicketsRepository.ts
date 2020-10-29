import Ticket from '../infra/typeorm/schemas/Ticket';

import ICreateTicketDTO from '../dtos/ICreateTicketDTO';

export default interface ITicketRepository {
  create(data: ICreateTicketDTO): Promise<Ticket>;
  all(): Promise<Ticket[] | undefined>;
}
