"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var TicketsRepository_1 = __importDefault(require("@modules/tickets/infra/typeorm/repositories/TicketsRepository"));
tsyringe_1.container.registerSingleton('TicketsRepository', TicketsRepository_1.default);
