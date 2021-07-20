"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AuthenticationButton_1 = __importDefault(require("../authenticationButtonComponent/AuthenticationButton"));
require("./Navbar.css");
var AuthNav = function () { return (<div className="auth-nav-bar">
    <AuthenticationButton_1.default />
  </div>); };
exports.default = AuthNav;
