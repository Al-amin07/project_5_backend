"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectServices = void 0;
const project_model_1 = require("./project.model");
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.create(payload);
    return result;
});
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.find({});
    return result;
});
const getSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findById(id);
    return result;
});
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield project_model_1.Project.findByIdAndDelete(id);
    return null;
});
exports.projectServices = {
    createProject,
    getAllProject,
    getSingleProject,
    updateProject,
    deleteProject,
};
