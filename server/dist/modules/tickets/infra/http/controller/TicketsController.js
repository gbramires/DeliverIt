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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CreateTicketService_1 = __importDefault(require("@modules/tickets/services/CreateTicketService"));
var TicketsController = /** @class */ (function () {
    function TicketsController() {
    }
    TicketsController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, valor_original, data_pagamento, data_vencimento, diasAtraso, jurosCalculados, valorCorrigido, createTicket, ticket;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, nome = _a.nome, valor_original = _a.valor_original, data_pagamento = _a.data_pagamento, data_vencimento = _a.data_vencimento;
                        diasAtraso = (new Date(data_pagamento).getTime() -
                            new Date(data_vencimento).getTime()) /
                            (1000 * 3600 * 24);
                        jurosCalculados = 0;
                        valorCorrigido = 0;
                        if (diasAtraso > 0) {
                            if (diasAtraso <= 3) {
                                jurosCalculados = Number(valor_original) * 0.001 * diasAtraso;
                                valorCorrigido =
                                    Number(valor_original) +
                                        Number(valor_original) * 0.02 +
                                        jurosCalculados;
                            }
                            if (diasAtraso > 3 && diasAtraso < 6) {
                                jurosCalculados = Number(valor_original) * 0.002 * diasAtraso;
                                valorCorrigido =
                                    Number(valor_original) +
                                        Number(valor_original) * 0.03 +
                                        jurosCalculados;
                            }
                            if (diasAtraso > 5) {
                                jurosCalculados = Number(valor_original) * 0.003 * diasAtraso;
                                valorCorrigido =
                                    Number(valor_original) +
                                        Number(valor_original) * 0.05 +
                                        jurosCalculados;
                            }
                        }
                        createTicket = tsyringe_1.container.resolve(CreateTicketService_1.default);
                        return [4 /*yield*/, createTicket.execute({
                                nome: nome,
                                valor_original: Number(valor_original),
                                valor_corrigido: valorCorrigido,
                                dias_atraso: diasAtraso,
                                data_pagamento: new Date(data_pagamento),
                                data_vencimento: new Date(data_vencimento),
                            })];
                    case 1:
                        ticket = _b.sent();
                        return [2 /*return*/, response.status(200).json(ticket)];
                }
            });
        });
    };
    return TicketsController;
}());
exports.default = TicketsController;
