"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brush = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Brush = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, viewBox: "0 0 38 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M18.75 6.25L15.625 0H12.5L9.375 6.25L6.25 0H4.6875C2.09961 0 0 2.09961 0 4.6875V25H37.5V4.6875C37.5 2.09961 35.4004 0 32.8125 0H21.875L18.75 6.25ZM0 28.125V31.25C0 34.6973 2.80273 37.5 6.25 37.5H12.5V43.75C12.5 47.1973 15.3027 50 18.75 50C22.1973 50 25 47.1973 25 43.75V37.5H31.25C34.6973 37.5 37.5 34.6973 37.5 31.25V28.125H0ZM18.75 45.3125C17.8906 45.3125 17.1875 44.6094 17.1875 43.75C17.1875 42.8906 17.8906 42.1875 18.75 42.1875C19.6094 42.1875 20.3125 42.8906 20.3125 43.75C20.3125 44.6094 19.6094 45.3125 18.75 45.3125Z", fill: "currentColor" })));
exports.Brush = Brush;
exports.default = exports.Brush;
//# sourceMappingURL=index.js.map