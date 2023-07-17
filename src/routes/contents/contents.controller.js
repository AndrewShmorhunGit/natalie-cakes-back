"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentsController = void 0;
const contents_model_1 = require("../../models/contents.model");
const contentsController = {
    // Fix that [any]
    getAllContents(req, res) {
        return res.status(200).json(contents_model_1.contents);
    },
};
exports.contentsController = contentsController;
