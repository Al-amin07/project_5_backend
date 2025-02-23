import { TMessage } from './message.interface';
import { Message } from './message.model';

const getAllMessage = async () => {
  const result = await Message.find({});
  return result;
};
const createMessage = async (payload: TMessage) => {
  const result = await Message.create(payload);
  return result;
};

export const messageServices = {
  getAllMessage,
  createMessage,
};
