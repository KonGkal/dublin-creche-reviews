"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var auth0_react_1 = require("@auth0/auth0-react");
var LoginButton = function () {
    var loginWithRedirect = auth0_react_1.useAuth0().loginWithRedirect;
    return <button onClick={function () { return loginWithRedirect(); }}>Log In</button>;
};
exports.default = LoginButton;
