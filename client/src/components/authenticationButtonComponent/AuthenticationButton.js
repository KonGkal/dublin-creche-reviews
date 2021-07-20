"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoginButton_1 = __importDefault(require("./LoginButton"));
var LogOutButton_1 = __importDefault(require("./LogOutButton"));
var SignUpButton_1 = __importDefault(require("./SignUpButton"));
var auth0_react_1 = require("@auth0/auth0-react");
var AuthenticationButton = function () {
    var isAuthenticated = auth0_react_1.useAuth0().isAuthenticated;
    return isAuthenticated ? (<LogOutButton_1.default />) : (<div>
      <LoginButton_1.default /> <SignUpButton_1.default />
    </div>);
};
exports.default = AuthenticationButton;
