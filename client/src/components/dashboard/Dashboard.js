"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var react_router_dom_1 = require("react-router-dom");
var SchoolList_1 = __importDefault(require("../schoolsList/SchoolList"));
var ReviewsList_1 = __importDefault(require("../reviewsList/ReviewsList"));
var ReviewsContext_1 = __importDefault(require("../../context/ReviewsContext"));
var ReviewsContainer_1 = __importDefault(require("../ReviewsContainer/ReviewsContainer"));
require("./Dashboard.css");
var noun_Child_1869302_svg_1 = require("../../icons/noun_Child_1869302.svg");
var Dashboard = function () {
    var _a = react_1.useState([]), reviews = _a[0], setReviews = _a[1];
    return (<div className="dashboard-container">
      <noun_Child_1869302_svg_1.ReactComponent className="icon" alt="icon"/>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route exact path="/" component={SchoolList_1.default}/>
        <ReviewsContext_1.default.Provider value={{ reviews: reviews, setReviews: setReviews }}>
          <ReviewsContainer_1.default />
          <react_router_dom_1.Route path="/schoolReviews/:schoolId" exact component={ReviewsList_1.default}/>
        </ReviewsContext_1.default.Provider>
      </react_router_dom_1.Switch>
    </div>);
};
exports.default = Dashboard;
