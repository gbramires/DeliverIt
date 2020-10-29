import { Router } from 'express';
import ticketsRouter from '@modules/tickets/infra/http/routes/tickets.routes';

const routes = Router();

routes.use('/tickets', ticketsRouter);

export default routes;
