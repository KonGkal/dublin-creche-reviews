"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var auth0_react_1 = require("@auth0/auth0-react");
require("./Navbar.css");
var MainNav = function () {
    var isAuthenticated = auth0_react_1.useAuth0().isAuthenticated;
    return (<div className="button-container">
      <ul className="container nav-bar">
        <li className="main-nav-item">
          <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
        </li>
        <li className="main-nav-item">
          {isAuthenticated ? <react_router_dom_1.Link to="/review">Review</react_router_dom_1.Link> : null}
        </li>
        <li className="main-nav-item">
          {isAuthenticated ? <react_router_dom_1.Link to="/myReviews">My Reviews</react_router_dom_1.Link> : null}
        </li>
      </ul>
    </div>);
};
exports.default = MainNav;
