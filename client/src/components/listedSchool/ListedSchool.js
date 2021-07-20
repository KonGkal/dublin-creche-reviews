"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ListedSchool.css");
var ListedSchool = function (_a) {
    var school = _a.school;
    var name = school.name;
    return (<li className="listed-school shadow-and-border">
      <div>
        <b>School Name:</b> {name}{" "}
      </div>
    </li>);
};
exports.default = ListedSchool;
