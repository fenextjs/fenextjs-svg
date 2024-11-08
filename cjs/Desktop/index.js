"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgDesktopLayer = exports.SvgDesktop = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SvgDesktop = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
    react_1.default.createElement("path", { d: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z", fill: "currentColor" })));
exports.SvgDesktop = SvgDesktop;
const SvgDesktopLayer = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, viewBox: "0 0 576 512", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("g", { clipPath: "url(#clip0_432_2)" },
        react_1.default.createElement("path", { d: "M64 0C28.7 0 0 28.7 0 64V352C0 387.3 28.7 416 64 416H240L229.3 448H160C142.3 448 128 462.3 128 480C128 497.7 142.3 512 160 512H416C433.7 512 448 497.7 448 480C448 462.3 433.7 448 416 448H346.7L336 416H512C547.3 416 576 387.3 576 352V64C576 28.7 547.3 0 512 0H64ZM512 64V288H64V64H512Z", fill: "currentColor" }),
        react_1.default.createElement("path", { d: "M64 288L512 64V288H64Z", fill: "currentColor", fillOpacity: "0.5" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "clip0_432_2" },
            react_1.default.createElement("rect", { width: "576", height: "512", fill: "white" })))));
exports.SvgDesktopLayer = SvgDesktopLayer;
//# sourceMappingURL=index.js.map