import { Router } from 'express';
import { messageControllers } from './message.controller';

const route = Router();

route.post('/', messageControllers.createMessage);
route.get('/', messageControllers.getAllMessage);

export const messageRoute = route;
