"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Auth0ProviderWithHistory = function (_a) {
    var children = _a.children;
    var domain = process.env.REACT_APP_AUTH0_DOMAIN;
    var clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    var audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    var history = react_router_dom_1.useHistory();
    var onRedirectCallback = function (appState) {
        history.push((appState === null || appState === void 0 ? void 0 : appState.returnTo) || window.location.pathname);
    };
    return domain = { domain: domain };
    clientId = { clientId: clientId };
    redirectUri = { window: window, : .location.origin };
    onRedirectCallback = { onRedirectCallback: onRedirectCallback };
    audience = { audience: audience }
        >
            { children: children }
        < /Auth0Provider>;
};
;
;
exports.default = Auth0ProviderWithHistory;
