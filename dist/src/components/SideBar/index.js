"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MenuItem_1 = require("./MenuItem");
require("./styles.css");
var styled_components_1 = __importDefault(require("styled-components"));
var SideBarComponent = styled_components_1.default.aside.attrs({
    className: "fixed bottom-0 left-0 top-24 z-20 flex flex-col items-center h-full rounded-md bg-clip-padding glassmorphism pb-10 pt-10"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 15vw;\n  @media screen and (max-width: 640px) {\n    width: 10vw;\n  }\n  @media screen and (max-width: 1280px) {\n    width: 5vw;\n  }\n"], ["\n  width: 15vw;\n  @media screen and (max-width: 640px) {\n    width: 10vw;\n  }\n  @media screen and (max-width: 1280px) {\n    width: 5vw;\n  }\n"])));
var SideBarNavigation = styled_components_1.default.nav.attrs({
    className: "flex flex-col justify-center w-full h-full pb-10"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var MenuItemList = styled_components_1.default.ul.attrs({
    className: "flex flex-col space-y-2 flex-grow w-full overflow-y-auto"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var SideBar = function (_a) {
    var categories = _a.categories;
    return (react_1.default.createElement(SideBarComponent, null,
        react_1.default.createElement(SideBarNavigation, null,
            react_1.default.createElement(MenuItemList, null, categories.map(function (item, index) { return (react_1.default.createElement("li", { key: index, className: "flex-grow flex justify-center" },
                react_1.default.createElement(MenuItem_1.MenuItem, { item: item }))); })))));
};
exports.default = SideBar;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map