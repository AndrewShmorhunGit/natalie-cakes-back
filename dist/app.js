"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const contents_router_1 = require("./routes/contents/contents.router");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(contents_router_1.contentsRouter);
app.get("/", (req, res) => {
    res.send("Natalie Cakes Server");
});
