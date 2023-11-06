"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var react_1 = __importDefault(require("react"));
var MenuItem = function (_a) {
    var item = _a.item;
    return (react_1.default.createElement("a", { href: item.link },
        react_1.default.createElement("div", { className: "relative flex justify-center items-center w-full h-full transition-all duration-300 ease-in-out" },
            react_1.default.createElement("span", { className: "flex justify-center items-center transition-transform duration-300 ease-in-out transform text-black hover:text-green-400 p-2 hover:bg-white hover:bg-opacity-20 hover:border hover:border-gray-100 rounded-xl hover:scale-105 backdrop-filter hover:backdrop-blur-md'}" }, react_1.default.cloneElement(item.icon, {})))));
};
exports.MenuItem = MenuItem;
//# sourceMappingURL=MenuItem.js.map