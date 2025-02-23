import { Response } from 'express';
type TResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  statusCode: number;
};
export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
  });
};
