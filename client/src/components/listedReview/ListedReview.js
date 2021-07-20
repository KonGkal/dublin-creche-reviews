"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./ListedReview.css");
var ListedReview = function (_a) {
    var review = _a.review;
    var facility = review.facility, staff = review.staff, services = review.services, overall = review.overall, comment = review.comment;
    return (<li className="listed-reviews shadow-and-border">
      <div>
        <b>Overall User Rating:</b> {overall}
      </div>
      <div>
        <b>Facility:</b> {facility}
      </div>
      <div>
        <b>Staff:</b> {staff}
      </div>
      <div>
        <b>Services:</b> {services}
      </div>
      <div>
        <b>Comment:</b> {comment}
      </div>
    </li>);
};
exports.default = ListedReview;
