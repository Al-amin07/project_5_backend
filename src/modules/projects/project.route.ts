import { Router } from 'express';
import { projectControllers } from './project.controller';

const route = Router();

route.post('/', projectControllers.createProject);
route.get('/', projectControllers.getAllProject);
route.get('/:projectId', projectControllers.getSingleProject);
route.delete('/:projectId', projectControllers.deleteProject);
route.put('/:projectId', projectControllers.updateProject);

export const projectRoute = route;
