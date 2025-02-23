import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlog = async () => {
  const result = await Blog.find({});
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};
const deleteBlog = async (id: string) => {
  await Blog.findByIdAndDelete(id);
  return null;
};

const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const blogServices = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
