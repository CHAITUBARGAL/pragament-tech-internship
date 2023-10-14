"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const app_1 = __importDefault(require("./app"));
require("./database");
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
