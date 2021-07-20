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
var ListedReview_1 = __importDefault(require("../listedReview/ListedReview"));
var apiService_1 = require("../../services/apiService");
var react_router_dom_1 = require("react-router-dom");
var ReviewsContext_1 = __importDefault(require("../../context/ReviewsContext"));
var api_1 = require("@react-google-maps/api");
var ReviewsList = function () {
    var _a = react_1.useState([]), schoolDetails = _a[0], setSchoolDetails = _a[1];
    var _b = react_1.useContext(ReviewsContext_1.default), reviews = _b.reviews, setReviews = _b.setReviews;
    var schoolId = react_router_dom_1.useParams().schoolId;
    var mapContainerStyle = {
        width: "15em",
        height: "15em",
    };
    var center = {
        lat: schoolDetails.lat || 53.3498053,
        lng: schoolDetails.lng || -6.2603097,
    };
    var options = {
        disableDefaultUI: true,
        zoomControl: true,
    };
    react_1.useEffect(function () {
        apiService_1.getSchoolReviews(schoolId).then(function (schoolReviews) {
            setReviews(schoolReviews);
        });
        apiService_1.getSchool(schoolId).then(function (school) {
            setSchoolDetails(school);
        });
    }, [schoolId, setReviews]);
    var listOfReviews = reviews.map(function (review) {
        return <ListedReview_1.default key={review.id} review={review}/>;
    });
    var rating;
    if (reviews.length) {
        rating = reviews.reduce(function (acc, cur) {
            return acc + cur.overall;
        }, 0);
    }
    return (<>
      <h1 className="header">Reviews</h1>
      <div className="school-list shadow-and-border">
        <h1 className="listed-reviews-header">{schoolDetails.name}</h1>
        <div className="map shadow-and-border">
          <api_1.GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options}>
            <api_1.Marker position={center}/>
          </api_1.GoogleMap>
        </div>

        {rating ? (<div className="rating-header-container shadow-and-border">
            <h1 className="listed-reviews-rating-header">
              Overall School Rating: {(rating / reviews.length).toFixed(1)}{" "}
            </h1>
          </div>) : (<p className="listed-reviews-rating-header">
            There are no current reviews.
          </p>)}
        <div>
          <ul>{listOfReviews}</ul>
        </div>
      </div>
    </>);
};
exports.default = ReviewsList;
