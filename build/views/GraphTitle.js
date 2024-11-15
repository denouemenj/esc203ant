"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@react-sigma/core");
const react_1 = require("react");
const GraphTitle = ({ filters }) => {
    const sigma = (0, core_1.useSigma)();
    const graph = sigma.getGraph();
    (0, react_1.useEffect)(() => {
        requestAnimationFrame(() => {
            const index = { nodes: 0, edges: 0 };
            graph.forEachNode((_, { hidden }) => !hidden && index.nodes++);
            graph.forEachEdge((_, _2, _3, _4, source, target) => !source.hidden && !target.hidden && index.edges++);
        });
    }, [filters]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "graph-title", children: (0, jsx_runtime_1.jsx)("h1", { children: "Actor Network Surrounding In Vitro Fertilization and Commercial Surrogacy at BioTexCom, Ukraine" }) }));
};
exports.default = GraphTitle;
//# sourceMappingURL=GraphTitle.js.map