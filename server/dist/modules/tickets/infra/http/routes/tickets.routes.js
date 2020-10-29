"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TicketsController_1 = __importDefault(require("../controller/TicketsController"));
var ticketsRouter = express_1.Router();
var ticketsController = new TicketsController_1.default();
ticketsRouter.post('/', ticketsController.create);
exports.default = ticketsRouter;
