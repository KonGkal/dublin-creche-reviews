"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var auth0_react_1 = require("@auth0/auth0-react");
var LogOutButton = function () {
    var logout = auth0_react_1.useAuth0().logout;
    return (<button onClick={function () {
            return logout({
                returnTo: window.location.origin,
            });
        }}>
      Log Out
    </button>);
};
exports.default = LogOutButton;
