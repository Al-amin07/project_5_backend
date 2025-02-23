import { Router } from 'express';
import { blogControllers } from './blog.controller';

const route = Router();

route.post('/', blogControllers.createBlog);
route.get('/', blogControllers.getAllBlog);
route.get('/:blogId', blogControllers.getSingleBlog);
route.put('/:blogId', blogControllers.updateBlog);
route.delete('/:blogId', blogControllers.deleteBlog);

export const blogRoute = route;
