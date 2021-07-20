"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ListedSchool_1 = __importDefault(require("../listedSchool/ListedSchool"));
var react_2 = require("react");
var SchoolsContext_1 = __importDefault(require("../../context/SchoolsContext"));
var SchoolList = function () {
    var schools = react_2.useContext(SchoolsContext_1.default).schools;
    var schoolList = schools.map(function (school) { return (<react_router_dom_1.Link key={school.id} to={"/schoolReviews/" + school.id}>
      <ListedSchool_1.default key={school.id} school={school}/>
    </react_router_dom_1.Link>); });
    return (<>
      <h1 className="header">Schools</h1>
      <div className="school-list shadow-and-border">
        <ul>{schoolList}</ul>
      </div>
    </>);
};
exports.default = SchoolList;
