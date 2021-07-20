"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./ReviewForm.css");
var SchoolFormContainer_1 = __importDefault(require("../schoolForm/SchoolFormContainer"));
var SelectedSchoolContext_1 = __importDefault(require("../../context/SelectedSchoolContext"));
var ReviewsContext_1 = __importDefault(require("../../context/ReviewsContext"));
var apiService_1 = require("../../services/apiService");
var UserDetailsContext_1 = __importDefault(require("../../context/UserDetailsContext"));
var ReviewForm = function () {
    var _a = react_1.useState(""), selectedSchool = _a[0], setSelectedSchool = _a[1];
    var setReviews = react_1.useContext(ReviewsContext_1.default).setReviews;
    var userDetails = react_1.useContext(UserDetailsContext_1.default).userDetails;
    var _b = react_1.useState(""), facility = _b[0], setFacility = _b[1];
    var _c = react_1.useState(""), staff = _c[0], setStaff = _c[1];
    var _d = react_1.useState(""), services = _d[0], setServices = _d[1];
    var _e = react_1.useState(""), comment = _e[0], setComment = _e[1];
    var submitHandler = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var newReview;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, apiService_1.createReview(facility, staff, services, comment, userDetails[0].id, selectedSchool)];
                case 1:
                    newReview = _a.sent();
                    setReviews(function (prev) { return __spreadArray(__spreadArray([], prev), [newReview]); });
                    setFacility("");
                    setStaff("");
                    setServices("");
                    setComment("");
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <h1 className="header">Leave a Review</h1>
      <div className="school-list review-form shadow-and-border">
        <SelectedSchoolContext_1.default.Provider value={{ selectedSchool: selectedSchool, setSelectedSchool: setSelectedSchool }}>
          <SchoolFormContainer_1.default />
        </SelectedSchoolContext_1.default.Provider>

        <form onSubmit={submitHandler}>
          <div className="school-form-container shadow-and-border">
            <h1 className="form-title">Create a Review</h1>
            <div className="school-form-container">
              <h5>Facility</h5>

              <select value={facility} name="facility" onChange={function (e) { return setFacility(e.target.value); }}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <h5>Staff</h5>

              <select value={staff} name="staff" onChange={function (e) { return setStaff(e.target.value); }}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <h5>Services</h5>

              <select value={services} name="services" onChange={function (e) { return setServices(e.target.value); }}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <h5>Comment</h5>

            <div className="school-form-container">
              <input className="comment" value={comment} name="comment" placeholder="Insert a comment" onChange={function (e) { return setComment(e.target.value); }} type="text"/>

              <button type="submit" disabled={!facility || !staff || !services}>
                Create Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </>);
};
exports.default = ReviewForm;
