"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoute = void 0;
const express_1 = require("express");
const message_controller_1 = require("./message.controller");
const route = (0, express_1.Router)();
route.post('/', message_controller_1.messageControllers.createMessage);
route.get('/', message_controller_1.messageControllers.getAllMessage);
exports.messageRoute = route;
