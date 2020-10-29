import { Router } from 'express';

import TicketsController from '../controller/TicketsController';

const ticketsRouter = Router();
const ticketsController = new TicketsController();

ticketsRouter.post('/', ticketsController.create);

ticketsRouter.get('/', ticketsController.all);

export default ticketsRouter;
