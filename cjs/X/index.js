"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XBox = exports.X = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const X = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, viewBox: "0 0 22 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z", fill: "currentColor" })));
exports.X = X;
const XBox = ({ className = '' }) => (react_1.default.createElement("svg", { className: `fenext_svg ${className}`, viewBox: "0 0 624 624", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M100 0C44.7715 0 0 44.7715 0 100V524C0 579.228 44.7715 624 100 624H524C579.228 624 624 579.229 624 524V100C624 44.7715 579.229 0 524 0H100Z", fill: "var(--color-box,black)" }),
    react_1.default.createElement("path", { d: "M430.474 125H493.65L355.629 282.999L518 498H390.865L291.288 367.603L177.35 498H114.136L261.763 329.002L106 125H236.363L326.371 244.188L430.474 125ZM408.301 460.126H443.308L217.341 160.885H179.775L408.301 460.126Z", fill: "var(--color-x,white)" })));
exports.XBox = XBox;
exports.default = exports.X;
//# sourceMappingURL=index.js.map