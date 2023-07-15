"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const server = http_1.default.createServer(app);
app.get("/", (req, res) => {
    res.send("Natalie Cakes Server");
});
server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
