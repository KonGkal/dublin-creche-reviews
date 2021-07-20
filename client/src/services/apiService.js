"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.deleteReview = exports.getUserReviews = exports.createReview = exports.addSchool = exports.getSchoolReviews = exports.findUserbyEmail = exports.addNewUser = exports.getSchool = exports.getSchools = void 0;
var axios_1 = __importDefault(require("axios"));
var baseUrl = process.env.REACT_APP_SERVER_URL;
var getSchools = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get(baseUrl + "/schools")];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSchools = getSchools;
var getSchool = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(baseUrl + "/school", {
                        method: "POST",
                        body: JSON.stringify({ id: id }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getSchool = getSchool;
var addNewUser = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(baseUrl + "/createUser", {
                        method: "POST",
                        body: JSON.stringify({ email: email }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addNewUser = addNewUser;
var findUserbyEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(baseUrl + "/user", {
                        method: "POST",
                        body: JSON.stringify({ email: email }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_4 = _a.sent();
                console.log(e_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.findUserbyEmail = findUserbyEmail;
var getSchoolReviews = function (SChoolId) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(baseUrl + "/schoolReviews/" + SChoolId, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_5 = _a.sent();
                console.log(e_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getSchoolReviews = getSchoolReviews;
var addSchool = function (name, lat, lng) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(baseUrl + "/createSchool", {
                        method: "POST",
                        body: JSON.stringify({ name: name, lat: lat, lng: lng }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_6 = _a.sent();
                console.log(e_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addSchool = addSchool;
var createReview = function (facility, staff, services, comment, UserId, SchoolId) { return __awaiter(void 0, void 0, void 0, function () {
    var overall, res, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                overall = ((+facility + +staff + +services) / 3).toFixed(1);
                return [4 /*yield*/, fetch(baseUrl + "/createReview", {
                        method: "POST",
                        body: JSON.stringify({
                            facility: facility,
                            staff: staff,
                            services: services,
                            overall: +overall,
                            comment: comment,
                            UserId: UserId,
                            SchoolId: SchoolId,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_7 = _a.sent();
                console.log(e_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createReview = createReview;
var getUserReviews = function (UserId) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(baseUrl + "/userReviews", {
                        method: "POST",
                        body: JSON.stringify({ UserId: UserId }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_8 = _a.sent();
                console.log(e_8);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUserReviews = getUserReviews;
var deleteReview = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch(baseUrl + "/deleteReview/" + id, {
                        method: "DELETE",
                    })];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                e_9 = _a.sent();
                console.log(e_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteReview = deleteReview;
var getUser = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch(baseUrl + "/users", {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    })];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.json()];
            case 2:
                e_10 = _a.sent();
                console.log(e_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
