"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var apiService_1 = require("../../services/apiService");
var UserDetailsContext_1 = __importDefault(require("../../context/UserDetailsContext"));
var UserReview_1 = __importDefault(require("./UserReview"));
var MyReviews = function () {
    var userDetails = react_1.useContext(UserDetailsContext_1.default).userDetails;
    var _a = react_1.useState([]), userReviews = _a[0], setUserReviews = _a[1];
    react_1.useEffect(function () {
        if (userDetails.length) {
            apiService_1.getUserReviews(userDetails[0].id).then(function (reviews) {
                setUserReviews(reviews);
            });
        }
    }, [userDetails]);
    var listOfUserReviews = [];
    if (userReviews) {
        listOfUserReviews.push(userReviews.map(function (review) {
            return (<UserReview_1.default key={review.id} review={review} setUserReviews={setUserReviews}/>);
        }));
    }
    return (<>
      <h1 className="header">My Reviews</h1>
      <div className="school-list shadow-and-border">
        {userReviews.length ? null : <p>There are no current reviews.</p>}
        <div>
          <ul>{listOfUserReviews}</ul>
        </div>
      </div>
    </>);
};
exports.default = MyReviews;
