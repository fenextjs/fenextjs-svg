"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgMovilLayer = exports.SvgMovil = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SvgMovil = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" },
    react_1.default.createElement("path", { d: "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z", fill: "currentColor" })));
exports.SvgMovil = SvgMovil;
const SvgMovilLayer = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, viewBox: "0 0 384 512", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M16 64C16 28.7 44.7 0 80 0H304C339.3 0 368 28.7 368 64V448C368 483.3 339.3 512 304 512H80C44.7 512 16 483.3 16 448V64ZM224 448C224 430.3 209.7 416 192 416C174.3 416 160 430.3 160 448C160 465.7 174.3 480 192 480C209.7 480 224 465.7 224 448ZM304 64H80V384H304V64Z", fill: "currentColor" }),
    react_1.default.createElement("path", { d: "M80 384L304 64V384H80Z", fill: "currentColor", fillOpacity: "0.5" })));
exports.SvgMovilLayer = SvgMovilLayer;
//# sourceMappingURL=index.js.map