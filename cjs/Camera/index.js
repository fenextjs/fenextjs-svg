"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraChange = exports.Camera2 = exports.Camera = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Camera = ({ className = '' }) => (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: `fenext_svg ${className}`, viewBox: "0 0 28 22" },
    react_1.default.createElement("path", { "data-name": "Path 11880", d: "M28 8.922V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v.191l-1.368-.183A1 1 0 0 0 21.5 8a.5.5 0 0 1-.5-.5A2.5 2.5 0 0 0 18.5 5h-5A2.5 2.5 0 0 0 11 7.5a.5.5 0 0 1-.5.5.978.978 0 0 0-.132.009l-5.79.773A2.977 2.977 0 0 0 2 11.725V24.03A2.973 2.973 0 0 0 4.97 27h22.06A2.973 2.973 0 0 0 30 24.03V11.725a2.977 2.977 0 0 0-2-2.8zM15 6h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm-6 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm7 9a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6z", fill: "currentColor", transform: "translate(-2 -5)" }),
    react_1.default.createElement("path", { "data-name": "Path 11881", d: "M16 13a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 7a1 1 0 0 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 2 0 3 3 0 0 1-3 3z", fill: "currentColor", transform: "translate(-2 -5)" })));
exports.Camera = Camera;
const Camera2 = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
    react_1.default.createElement("path", { d: "M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z", fill: "currentColor" })));
exports.Camera2 = Camera2;
const CameraChange = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
    react_1.default.createElement("path", { d: "M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM384 256c0 8.8-7.2 16-16 16H291.3c-6.2 0-11.3-5.1-11.3-11.3c0-3 1.2-5.9 3.3-8L307 229c-13.6-13.4-31.9-21-51-21c-19.2 0-37.7 7.6-51.3 21.3L185 249c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l19.7-19.7C193.4 172.7 224 160 256 160c31.8 0 62.4 12.6 85 35l23.7-23.7c2.1-2.1 5-3.3 8-3.3c6.2 0 11.3 5.1 11.3 11.3V256zM128 320c0-8.8 7.2-16 16-16h76.7c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8L205 347c13.6 13.4 31.9 21 51 21c19.2 0 37.7-7.6 51.3-21.3L327 327c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-19.7 19.7C318.6 403.3 288 416 256 416c-31.8 0-62.4-12.6-85-35l-23.7 23.7c-2.1 2.1-5 3.3-8 3.3c-6.2 0-11.3-5.1-11.3-11.3V320z", fill: "currentColor" })));
exports.CameraChange = CameraChange;
exports.default = exports.Camera;
//# sourceMappingURL=index.js.map