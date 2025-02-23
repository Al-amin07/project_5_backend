import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { messageServices } from './message.service';

const createMessage = catchAsync(async (req, res) => {
  const result = await messageServices.createMessage(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Message send successfully',
    data: result,
  });
});

const getAllMessage = catchAsync(async (req, res) => {
  const result = await messageServices.getAllMessage();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All messages retrived successfully',
    data: result,
  });
});

export const messageControllers = {
  createMessage,
  getAllMessage,
};
