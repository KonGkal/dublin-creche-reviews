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
var react_1 = require("react");
var apiService_1 = require("./services/apiService");
var Navbar_1 = __importDefault(require("./components/navbar/Navbar"));
var api_1 = require("@react-google-maps/api");
require("./App.css");
var auth0_react_1 = require("@auth0/auth0-react");
var libraries = ["places"];
function App() {
    var _a = react_1.useState([]), schools = _a[0], setSchools = _a[1];
    var _b = api_1.useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
        libraries: libraries,
    }), isLoaded = _b.isLoaded, loadError = _b.loadError;
    var errorCheck = react_1.useRef(false);
    var errorHandler = function () {
        errorCheck.current = true;
    };
    react_1.useEffect(function () {
        function school() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, apiService_1.getSchools()];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            if (status === 200) {
                                setSchools(data);
                            }
                            if (status === 500) {
                                errorHandler();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        school();
    }, []);
    var isLoading = auth0_react_1.useAuth0().isLoading;
    if (errorCheck.current) {
        return className = "container" >
            Server;
        Error < /p>
            < /div>;
        ;
    }
    if (isLoading) {
        return />;;
    }
    if (loadError)
        return "Error loading Maps";
    if (!isLoaded)
        return "Loading Maps";
    return className = "main-header" > Dublin;
    Creche;
    Reviews < /h1>
        < /div>
        < Navbar_1.default /  >
        className;
    "container" >
        value;
    {
        {
            schools, setSchools;
        }
    }
     >
        />
        < /SchoolsContext.Provider>
        < /div>
        < footer > ;
    KonGkal;
    2021;
    All;
    rights;
    reserved < /footer>
        < />;
    ;
}
exports.default = App;
