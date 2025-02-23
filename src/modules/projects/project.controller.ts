import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { projectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await projectServices.createProject(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});
const getAllProject = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProject();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects retrived successfully',
    data: result,
  });
});
const getSingleProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await projectServices.getSingleProject(projectId);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project retrived successfully',
    data: result,
  });
});
const updateProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await projectServices.updateProject(projectId, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});
const deleteProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await projectServices.deleteProject(projectId);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

export const projectControllers = {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
