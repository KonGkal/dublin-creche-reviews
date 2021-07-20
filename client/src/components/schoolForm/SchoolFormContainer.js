"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PickSchool_1 = __importDefault(require("./PickSchool"));
var AddSchool_1 = __importDefault(require("./AddSchool"));
require("./SchoolFormContainer.css");
var SchoolFormContainer = function () {
    return (<>
      <div className="school-form-container shadow-and-border">
        <h1 className="form-title">Add a School</h1>
        <AddSchool_1.default />
      </div>
      <div className="school-form-container shadow-and-border">
        <h1 className="form-title">Pick a School</h1>
        <PickSchool_1.default />
      </div>
    </>);
};
exports.default = SchoolFormContainer;
