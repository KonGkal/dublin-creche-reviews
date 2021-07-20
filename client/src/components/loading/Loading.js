"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var loadingImg = "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";
var Loading = function () { return (<div className="spinner">
    <img src={loadingImg} alt="Loading..."/>
  </div>); };
exports.default = Loading;
