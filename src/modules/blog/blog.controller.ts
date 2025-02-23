import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { blogServices } from './blog.service';
const createBlog = catchAsync(async (req, res) => {
  const result = await blogServices.createBlog(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllBlog = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlog();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All blogs retrived successfully',
    data: result,
  });
});
const getSingleBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const result = await blogServices.getSingleBlog(blogId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog retrived successfully',
    data: result,
  });
});
const deleteBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const result = await blogServices.deleteBlog(blogId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});
const updateBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const payload = req.body;
  console.log({ payload, blogId });
  const result = await blogServices.updateBlog(blogId, payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

export const blogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
