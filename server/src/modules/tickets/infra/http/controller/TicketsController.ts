import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateTicketService from '@modules/tickets/services/CreateTicketService';
import DiasAtrasoServive from '@modules/tickets/services/DiasAtrasoServive';
import CalculaJurosService from '@modules/tickets/services/CalculaJurosService';
import ListaTicketService from '@modules/tickets/services/ListaTicketService';

export default class TicketsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      nome,
      valor_original,
      data_pagamento,
      data_vencimento,
    } = request.body;

    const createTicket = container.resolve(CreateTicketService);
    const diasAtrasoService = container.resolve(DiasAtrasoServive);
    const calculaJurosService = container.resolve(CalculaJurosService);

    const dias_atraso = diasAtrasoService.execute({
      data_vencimento: new Date(data_vencimento),
      data_pagamento: new Date(data_pagamento),
    });

    const {valor_corrigido, regra} = calculaJurosService.execute({
      valor_original,
      dias_atraso,
    });



    const ticket = await createTicket.execute({
      nome: String(nome),
      regra,
      valor_original: Number(valor_original),
      valor_corrigido,
      dias_atraso,
      data_pagamento: new Date(data_pagamento),
      data_vencimento: new Date(data_vencimento),
    });

    return response.status(200).json(ticket);
  }

  public async all(request: Request, response: Response): Promise<Response> {
    const listTicketService = container.resolve(ListaTicketService);

    const lista = await listTicketService.execute();

    return response.json(lista);
  }
}
