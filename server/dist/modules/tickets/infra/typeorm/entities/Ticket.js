"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Ticket.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Ticket.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Ticket.prototype, "valor_original", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Ticket.prototype, "valor_corrigido", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Ticket.prototype, "dias_atraso", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Ticket.prototype, "data_pagamento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Ticket.prototype, "data_vencimento", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Ticket.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Ticket.prototype, "updated_at", void 0);
    Ticket = __decorate([
        typeorm_1.Entity('tickets')
    ], Ticket);
    return Ticket;
}());
exports.default = Ticket;
