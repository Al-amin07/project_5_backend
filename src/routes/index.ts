import { Router } from 'express';
import { blogRoute } from '../modules/blog/blog.route';
import { projectRoute } from '../modules/projects/project.route';
import { messageRoute } from '../modules/message/message.route';

export const route = Router();
const modules = [
  { path: '/blogs', route: blogRoute },
  { path: '/projects', route: projectRoute },
  { path: '/messages', route: messageRoute },
];

modules.forEach((el) => route.use(el.path, el.route));
