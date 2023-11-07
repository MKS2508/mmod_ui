"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TopBar = function (_a) {
    var logoSrc = _a.logoSrc, IconoUsuario = _a.IconoUsuario, IconoCarrito = _a.IconoCarrito, BarraBusqueda = _a.BarraBusqueda;
    var iconStyle = "cursor-pointer flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-0 bg-opacity-0 z-22";
    return (react_1.default.createElement("header", { style: { zIndex: 99 } },
        react_1.default.createElement("div", { className: "fixed w-full bg-green-600 text-center z-99 h-8" },
            react_1.default.createElement("h3", { className: "text-white text-base m-0 py-2 whitespace-nowrap overflow-hidden animate-marquee", style: { animation: 'marquee 20s linear infinite' } },
                react_1.default.createElement("a", { href: "https://medicinamodernagrow.shop", className: "text-inherit" }, "Puedes encontrarnos en Avenida de Mendavia, N\u00BA16 Pabell\u00F3n 2, 26009 Logro\u00F1o, La Rioja"))),
        react_1.default.createElement("nav", { id: "TOPBAR", className: "fixed top-8 h-16 glassmorphism rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-md z-25 flex items-center justify-between px-2 sm:px-8 md:px-16 lg:px-24 w-full" },
            react_1.default.createElement("a", { href: "/", className: "".concat(iconStyle, " animate-logoAnimation fixed md:left-10 sm:left-2"), style: { animation: "logoAnimation 2s linear infinite" } },
                react_1.default.createElement("img", { alt: "logo", src: logoSrc, className: "w-full" })),
            react_1.default.createElement("div", { className: "fixed left-[16vw] flex justify-end" }, BarraBusqueda),
            react_1.default.createElement("div", { className: "flex justify-end items-center gap-2 sm:gap-4 lg:gap-8 h-full w-full" },
                react_1.default.createElement("div", { className: iconStyle }, IconoUsuario),
                react_1.default.createElement("div", { className: iconStyle }, IconoCarrito)))));
};
exports.default = TopBar;
//# sourceMappingURL=index.js.map