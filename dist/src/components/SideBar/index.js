"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var styled_components_1 = __importDefault(require("styled-components"));
var MenuItem_1 = require("./MenuItem");
var SideBarComponent = (0, styled_components_1.default)(framer_motion_1.motion.aside).attrs({
    className: "fixed bottom-0 left-0 top-24 z-20 flex flex-col items-center h-full rounded-md bg-clip-padding glassmorphism pb-10 pt-10"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 15vw;\n    @media screen and (max-width: 640px) {\n        width: 10vw;\n    }\n    @media screen and (max-width: 1280px) {\n        width: 5vw;\n    }\n    background-color: hsla(0, 9%, 91%, 0.13);\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(10px);\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n"], ["\n    width: 15vw;\n    @media screen and (max-width: 640px) {\n        width: 10vw;\n    }\n    @media screen and (max-width: 1280px) {\n        width: 5vw;\n    }\n    background-color: hsla(0, 9%, 91%, 0.13);\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(10px);\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n"])));
var SideBarNavigation = styled_components_1.default.nav.attrs({
    className: "flex flex-col justify-center w-full h-full pb-10"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var MenuItemList = (0, styled_components_1.default)(framer_motion_1.motion.ul).attrs({
    className: "flex flex-col space-y-2 flex-grow w-full overflow-y-auto"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-top: 3vh;\n    margin-bottom: 3vh;\n"], ["\n    margin-top: 3vh;\n    margin-bottom: 3vh;\n"])));
var SideBar = function (_a) {
    var sideBarMenuItems = _a.sideBarMenuItems;
    var _b = (0, react_1.useState)(true), isVisible = _b[0], setIsVisible = _b[1];
    (0, react_1.useEffect)(function () {
        // Lógica de visibilidad basada en scroll y ruta
        /* ... */
    }, [location]);
    var sidebarVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, null, !isVisible ? (react_1.default.createElement(SideBarComponent, { initial: "hidden", animate: "visible", exit: "exit", variants: sidebarVariants, transition: { duration: 1 } },
        react_1.default.createElement(SideBarNavigation, null,
            react_1.default.createElement(MenuItemList, null, sideBarMenuItems.map(function (item, index) { return (react_1.default.createElement(MenuItem_1.MenuItem, { key: index, item: item })); }))))) : null));
};
exports.default = SideBar;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map