"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MainNav_1 = __importDefault(require("./MainNav"));
var AuthenticationNav_1 = __importDefault(require("./AuthenticationNav"));
require("./Navbar.css");
var Navbar = function () {
    return (<div className="nav-bar-routes">
      <MainNav_1.default />
      <AuthenticationNav_1.default />
    </div>);
};
exports.default = Navbar;
