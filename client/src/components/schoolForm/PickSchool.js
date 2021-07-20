"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SchoolsContext_1 = __importDefault(require("../../context/SchoolsContext"));
var SelectedSchoolContext_1 = __importDefault(require("../../context/SelectedSchoolContext"));
var PickSchool = function () {
    var _a = react_1.useContext(SelectedSchoolContext_1.default), selectedSchool = _a.selectedSchool, setSelectedSchool = _a.setSelectedSchool;
    var schools = react_1.useContext(SchoolsContext_1.default).schools;
    var schoolList = schools.map(function (school) { return (<option className="search-bar" key={school.id} value={school.id}>
      {school.name.split(",")[0]}
    </option>); });
    return (<div className="pick-school-container">
      <select value={selectedSchool} name="selectedSchool" onChange={function (e) { return setSelectedSchool(e.target.value); }}>
        <option style={{ overflow: "hidden" }} value="0">
          Select a School
        </option>
        {schoolList}
      </select>
    </div>);
};
exports.default = PickSchool;
