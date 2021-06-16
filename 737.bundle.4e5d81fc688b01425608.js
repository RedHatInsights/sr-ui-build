(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[737],{

/***/ 52445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ PureComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94830);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Base class for all Apicurio Registry UI components.
 */
var PureComponent = /** @class */ (function (_super) {
    __extends(PureComponent, _super);
    function PureComponent(properties) {
        var _this = _super.call(this, properties) || this;
        _this.testIdCounter = 1;
        _this.navigateTo = function (location) {
            // @ts-ignore
            return function () {
                var history = PureComponent.HISTORY;
                if (history) {
                    _services__WEBPACK_IMPORTED_MODULE_1__.Services.getLoggerService().info("Navigating to:", location);
                    history.push(location);
                }
                else {
                    _services__WEBPACK_IMPORTED_MODULE_1__.Services.getLoggerService().warn("Navigation impossible, null/undefined history.");
                }
            };
        };
        _this.state = _this.initializeState();
        _this.postConstruct();
        return _this;
    }
    PureComponent.setHistory = function (history) {
        PureComponent.HISTORY = history;
    };
    PureComponent.prototype.testId = function (prefix) {
        return prefix + this.testIdCounter++;
    };
    PureComponent.prototype.postConstruct = function () {
        // Can optionally be overridden by subclasses.
    };
    PureComponent.prototype.setSingleState = function (key, value, callback) {
        var newState = {};
        newState[key] = value;
        this.setMultiState(newState, callback);
    };
    PureComponent.prototype.setMultiState = function (newState, callback) {
        // Services.getLoggerService().debug("[PureComponent] Setting multi-state: %o", newState);
        this.setState(__assign({}, newState), callback);
    };
    PureComponent.prototype.linkTo = function (url) {
        return _services__WEBPACK_IMPORTED_MODULE_1__.Services.getConfigService().uiNavPrefixPath() + url;
    };
    PureComponent.HISTORY = null;
    return PureComponent;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent)));



/***/ }),

/***/ 67030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ IfAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52445);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94830);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Wrapper around a set of arbitrary child elements and displays them only if the
 * indicated authentication parameters are true.
 */
var IfAuth = /** @class */ (function (_super) {
    __extends(IfAuth, _super);
    function IfAuth(props) {
        return _super.call(this, props) || this;
    }
    IfAuth.prototype.render = function () {
        if (this.accept()) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { children: this.props.children });
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
        }
    };
    IfAuth.prototype.initializeState = function () {
        return {};
    };
    IfAuth.prototype.accept = function () {
        var auth = _services__WEBPACK_IMPORTED_MODULE_2__.Services.getAuthService();
        var rval = true;
        if (this.props.enabled !== undefined) {
            rval = rval && (auth.isAuthEnabled() === this.props.enabled);
        }
        if (this.props.isAuthenticated !== undefined) {
            rval = rval && (auth.isAuthenticated() === this.props.isAuthenticated);
        }
        if (this.props.isAdmin !== undefined) {
            rval = rval && (auth.isUserAdmin() === this.props.isAdmin);
        }
        if (this.props.isDeveloper !== undefined) {
            rval = rval && (auth.isUserDeveloper() === this.props.isDeveloper);
        }
        return rval;
    };
    return IfAuth;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .V));



/***/ }),

/***/ 13294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ IfFeature)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52445);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94830);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Wrapper around a set of arbitrary child elements and displays them only if the
 * indicated feature matches the given criteria.  Use this if you want to show/hide
 * UI elements based on the configured application feature set.
 */
var IfFeature = /** @class */ (function (_super) {
    __extends(IfFeature, _super);
    function IfFeature(props) {
        return _super.call(this, props) || this;
    }
    IfFeature.prototype.render = function () {
        if (this.accept()) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { children: this.props.children });
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
        }
    };
    IfFeature.prototype.initializeState = function () {
        return {};
    };
    IfFeature.prototype.accept = function () {
        var features = _services__WEBPACK_IMPORTED_MODULE_2__.Services.getConfigService().features();
        var featureValue = features[this.props.feature];
        if (this.props.is !== undefined) {
            return featureValue === this.props.is;
        }
        else if (this.props.isNot !== undefined) {
            return featureValue !== this.props.isNot;
        }
        else {
            return featureValue !== undefined;
        }
    };
    return IfFeature;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .V));



/***/ }),

/***/ 72672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fN": () => (/* reexport */ ArtifactTypeIcon),
  "No": () => (/* reexport */ ifAuth/* IfAuth */.N),
  "QT": () => (/* reexport */ ifFeature/* IfFeature */.Q)
});

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: ./src/app/components/baseComponent.ts
var baseComponent = __webpack_require__(52445);
// EXTERNAL MODULE: ./src/models/index.ts + 2 modules
var models = __webpack_require__(89929);
;// CONCATENATED MODULE: ./src/app/components/common/artifactTypeIcon.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * Models the list of artifacts.
 */
var ArtifactTypeIcon = /** @class */ (function (_super) {
    __extends(ArtifactTypeIcon, _super);
    function ArtifactTypeIcon(props) {
        return _super.call(this, props) || this;
    }
    ArtifactTypeIcon.prototype.render = function () {
        return (index_js_eager_default().createElement("div", { className: this.getClassNames(), title: this.getTitle() }));
    };
    ArtifactTypeIcon.prototype.initializeState = function () {
        return {};
    };
    ArtifactTypeIcon.prototype.getTitle = function () {
        var title = this.props.type;
        switch (this.props.type) {
            case models.ArtifactTypes.AVRO:
                title = "Avro Schema";
                break;
            case models.ArtifactTypes.PROTOBUF:
                title = "Protobuf Schema";
                break;
            case models.ArtifactTypes.JSON:
                title = "JSON Schema";
                break;
            case models.ArtifactTypes.OPENAPI:
                title = "OpenAPI Definition";
                break;
            case models.ArtifactTypes.ASYNCAPI:
                title = "AsyncAPI Definition";
                break;
            case models.ArtifactTypes.GRAPHQL:
                title = "GraphQL Definition";
                break;
            case models.ArtifactTypes.KCONNECT:
                title = "Kafka Connect Schema";
                break;
            case models.ArtifactTypes.WSDL:
                title = "WSDL";
                break;
            case models.ArtifactTypes.XSD:
                title = "XML Schema";
                break;
            case models.ArtifactTypes.XML:
                title = "XML";
                break;
        }
        return title;
    };
    ArtifactTypeIcon.prototype.getClassNames = function () {
        var classes = "artifact-type-icon";
        switch (this.props.type) {
            case models.ArtifactTypes.AVRO:
                classes += " avro-icon24";
                break;
            case models.ArtifactTypes.PROTOBUF:
                classes += " protobuf-icon24";
                break;
            case models.ArtifactTypes.JSON:
                classes += " json-icon24";
                break;
            case models.ArtifactTypes.OPENAPI:
                classes += " oai-icon24";
                break;
            case models.ArtifactTypes.ASYNCAPI:
                classes += " aai-icon24";
                break;
            case models.ArtifactTypes.GRAPHQL:
                classes += " graphql-icon24";
                break;
            case models.ArtifactTypes.KCONNECT:
                classes += " kconnect-icon24";
                break;
            case models.ArtifactTypes.WSDL:
                classes += " xml-icon24";
                break;
            case models.ArtifactTypes.XSD:
                classes += " xml-icon24";
                break;
            case models.ArtifactTypes.XML:
                classes += " xml-icon24";
                break;
        }
        return classes;
    };
    return ArtifactTypeIcon;
}(baseComponent/* PureComponent */.V));

/* harmony default export */ const artifactTypeIcon = ((/* unused pure expression or super */ null && (ArtifactTypeIcon)));

// EXTERNAL MODULE: ./src/app/components/common/ifAuth.tsx
var ifAuth = __webpack_require__(67030);
// EXTERNAL MODULE: ./src/app/components/common/ifFeature.tsx
var ifFeature = __webpack_require__(13294);
;// CONCATENATED MODULE: ./src/app/components/common/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),

/***/ 50402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ AvatarDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3686);
/* harmony import */ var _avatar_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_avatar_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52445);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94830);
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var AvatarDropdown = /** @class */ (function (_super) {
    __extends(AvatarDropdown, _super);
    function AvatarDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelect = function (event) {
            _this.setSingleState("isOpen", !_this.state.isOpen);
            // @ts-ignore
            document.getElementById("avatar-toggle").focus();
        };
        _this.onToggle = function () {
            _this.setSingleState("isOpen", !_this.state.isOpen);
        };
        return _this;
    }
    AvatarDropdown.prototype.render = function () {
        var dropdownItems = [
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { key: "logout" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, { className: "avatar-logout-link", onClick: function () { return _services__WEBPACK_IMPORTED_MODULE_4__.Services.getAuthService().doLogout(); }, variant: "link", isInline: true }, "Logout")),
        ];
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Dropdown, { id: "avatar-dropdown", onSelect: this.onSelect, toggle: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownToggle, { onToggle: this.onToggle, "aria-label": "User Menu", id: "avatar-toggle" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Avatar, { src: (_avatar_png__WEBPACK_IMPORTED_MODULE_1___default()), alt: "User" })), isOpen: this.state.isOpen, isPlain: true, dropdownItems: dropdownItems }));
    };
    AvatarDropdown.prototype.initializeState = function () {
        return {
            isOpen: false
        };
    };
    return AvatarDropdown;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__/* .PureComponent */ .V));



/***/ }),

/***/ 21467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fN": () => (/* reexport */ common/* ArtifactTypeIcon */.fN),
  "mf": () => (/* reexport */ ErrorPage),
  "No": () => (/* reexport */ common/* IfAuth */.No),
  "QT": () => (/* reexport */ common/* IfFeature */.QT),
  "Vx": () => (/* reexport */ baseComponent/* PureComponent */.V),
  "RB": () => (/* reexport */ ruleList/* RuleList */.RB)
});

// UNUSED EXPORTS: AppHeader, CompatibilityDropdown, InvalidContentModal, PleaseWaitModal, ValidityDropdown

// EXTERNAL MODULE: ./src/app/components/common/index.ts + 1 modules
var common = __webpack_require__(72672);
// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: ./src/app/components/baseComponent.ts
var baseComponent = __webpack_require__(52445);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-icons@=4.10.7 (strict) (fallback: ./node_modules/@patternfly/react-icons/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(93179);
// EXTERNAL MODULE: consume shared module (default) react-ace@=8.1.0 (strict) (fallback: ./node_modules/react-ace/lib/index.js)
var lib_index_js_ = __webpack_require__(80250);
var lib_index_js_default = /*#__PURE__*/__webpack_require__.n(lib_index_js_);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/mode-text.js
var mode_text = __webpack_require__(79253);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/theme-tomorrow.js
var theme_tomorrow = __webpack_require__(42557);
;// CONCATENATED MODULE: ./src/app/components/errorPage/errorPage.tsx
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var ErrorPage = /** @class */ (function (_super) {
    __extends(ErrorPage, _super);
    function ErrorPage(props) {
        var _this = _super.call(this, props) || this;
        _this.showDetails = function () {
            _this.setSingleState("isShowDetails", true);
        };
        _this.reloadPage = function () {
            window.location.reload();
        };
        return _this;
    }
    ErrorPage.prototype.render = function () {
        return (index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
            index_js_eager_default().createElement(index_js_.PageSection, { className: "ps_error", variant: index_js_.PageSectionVariants.light },
                index_js_eager_default().createElement("div", { className: "centerizer" },
                    index_js_eager_default().createElement(index_js_.EmptyState, { variant: index_js_.EmptyStateVariant.large },
                        index_js_eager_default().createElement(index_js_.EmptyStateIcon, { icon: esm_index_js_.ExclamationTriangleIcon }),
                        index_js_eager_default().createElement(index_js_.Title, { headingLevel: "h5", size: "lg" }, this.errorMessage()),
                        index_js_eager_default().createElement(index_js_.EmptyStateBody, null, "Something went seriously wrong on the server.  We'll try to provide you with some more information about the problem (see below) but you might want to try reloading.  If things still don't work then you'll have to report the problem to an admin."),
                        index_js_eager_default().createElement(index_js_.Button, { variant: "primary", onClick: this.reloadPage }, "Reload page"),
                        index_js_eager_default().createElement(index_js_.EmptyStateSecondaryActions, null,
                            index_js_eager_default().createElement(index_js_.Button, { variant: "link", "data-testid": "error-btn-artifacts", onClick: this.navigateTo(this.linkTo("/")) }, "Back to artifacts"),
                            index_js_eager_default().createElement(index_js_.Button, { variant: "link", "data-testid": "error-btn-details", onClick: this.showDetails }, "Show details"))),
                    index_js_eager_default().createElement("div", { className: "separator" }, "\u00A0"),
                    this.state.isShowDetails ?
                        index_js_eager_default().createElement("div", { className: "ace-wrapper pf-c-empty-state pf-m-lg", id: "ace-wrapper" },
                            index_js_eager_default().createElement((lib_index_js_default()), { "data-testid": "ace-details", mode: "json", theme: "tomorrow", name: "errorDetail", className: "errorDetail", width: this.state.editorWidth, height: this.state.editorHeight, fontSize: 14, showPrintMargin: false, showGutter: false, highlightActiveLine: false, value: this.errorDetail(), readOnly: true, setOptions: {
                                    enableBasicAutocompletion: false,
                                    enableLiveAutocompletion: false,
                                    enableSnippets: false,
                                    showLineNumbers: true,
                                    tabSize: 2,
                                    useWorker: false
                                } }))
                        :
                            index_js_eager_default().createElement("div", null)))));
    };
    ErrorPage.prototype.initializeState = function () {
        return {
            editorHeight: "250px",
            editorWidth: "100%",
            isShowDetails: false
        };
    };
    ErrorPage.prototype.errorMessage = function () {
        if (this.props.error) {
            return this.props.error.errorMessage;
        }
        else {
            return "Internal server error";
        }
    };
    ErrorPage.prototype.errorDetail = function () {
        if (this.props.error && this.props.error.error && this.props.error.error.detail) {
            return this.props.error.error.detail;
        }
        else if (this.props.error && this.props.error.error) {
            return JSON.stringify(this.props.error.error, null, 3);
        }
        else {
            return "Error info not available";
        }
    };
    return ErrorPage;
}(baseComponent/* PureComponent */.V));


;// CONCATENATED MODULE: ./src/app/components/errorPage/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// EXTERNAL MODULE: ./src/app/components/header/index.ts + 1 modules
var header = __webpack_require__(35661);
// EXTERNAL MODULE: ./src/app/components/ruleList/index.ts + 3 modules
var ruleList = __webpack_require__(66333);
// EXTERNAL MODULE: ./src/app/components/modals/index.ts + 1 modules
var modals = __webpack_require__(49746);
;// CONCATENATED MODULE: ./src/app/components/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








/***/ }),

/***/ 49746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* reexport */ InvalidContentModal)
});

// UNUSED EXPORTS: PleaseWaitModal

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: ./src/app/components/baseComponent.ts
var baseComponent = __webpack_require__(52445);
;// CONCATENATED MODULE: ./src/app/components/modals/invalidContentModal.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * Models the "invalid content" modal.  This is shown when the user tries to upload content
 * that is not valid.
 */
var InvalidContentModal = /** @class */ (function (_super) {
    __extends(InvalidContentModal, _super);
    function InvalidContentModal(props) {
        return _super.call(this, props) || this;
    }
    InvalidContentModal.prototype.render = function () {
        return (index_js_eager_default().createElement(index_js_.Modal, { title: "Invalid Content Error", variant: index_js_.ModalVariant.large, isOpen: this.props.isOpen, onClose: this.props.onClose, className: "edit-artifact-metaData pf-m-redhat-font", actions: [
                index_js_eager_default().createElement(index_js_.Button, { key: "close", variant: "link", "data-testid": "modal-btn-close", onClick: this.props.onClose }, "Close")
            ] },
            index_js_eager_default().createElement("p", null, "The content you attempted to upload violated one or more of the established content rules."),
            index_js_eager_default().createElement("pre", { className: "error-detail" }, this.errorDetail())));
    };
    InvalidContentModal.prototype.initializeState = function () {
        return {};
    };
    InvalidContentModal.prototype.errorDetail = function () {
        if (this.props.error && this.props.error.detail) {
            return this.props.error.detail;
        }
        return "";
    };
    return InvalidContentModal;
}(baseComponent/* PureComponent */.V));


// EXTERNAL MODULE: ./src/app/components/modals/pleaseWaitModal.tsx
var pleaseWaitModal = __webpack_require__(38304);
;// CONCATENATED MODULE: ./src/app/components/modals/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),

/***/ 38304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PleaseWaitModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52445);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * Models the "please wait" modal.  This is shown when the user performs an asynchronous operation.
 */
var PleaseWaitModal = /** @class */ (function (_super) {
    __extends(PleaseWaitModal, _super);
    function PleaseWaitModal(props) {
        return _super.call(this, props) || this;
    }
    PleaseWaitModal.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, { title: "Please Wait", variant: "small", isOpen: this.props.isOpen, header: react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#" }), showClose: false, className: "please-wait pf-m-redhat-font", "aria-label": "please-wait-modal" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Spinner, { size: "md", className: "spinner" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "message" }, this.props.message)));
    };
    PleaseWaitModal.prototype.initializeState = function () {
        return {};
    };
    return PleaseWaitModal;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_2__/* .PureComponent */ .V));



/***/ }),

/***/ 66333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RB": () => (/* reexport */ RuleList)
});

// UNUSED EXPORTS: CompatibilityDropdown, ValidityDropdown

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: ./src/app/components/baseComponent.ts
var baseComponent = __webpack_require__(52445);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-icons@=4.10.7 (strict) (fallback: ./node_modules/@patternfly/react-icons/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(93179);
;// CONCATENATED MODULE: ./src/app/components/ruleList/compatibility-dropdown.tsx
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Models the content of the Artifact Info tab.
 */
var CompatibilityDropdown = /** @class */ (function (_super) {
    __extends(CompatibilityDropdown, _super);
    function CompatibilityDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = function (isOpen) {
            _this.setSingleState("isOpen", isOpen);
        };
        _this.onSelect = function (event) {
            var newValue = event && event.currentTarget && event.currentTarget.id ? event.currentTarget.id : "";
            _this.props.onSelect(newValue);
            _this.onToggle(false);
        };
        return _this;
    }
    CompatibilityDropdown.prototype.render = function () {
        var dropdownItems = [
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "BACKWARD", "data-testid": "rules-compatibility-config-backward", id: "BACKWARD" }, "Backward"),
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "BACKWARD_TRANSITIVE", "data-testid": "rules-compatibility-config-backwardTrans", id: "BACKWARD_TRANSITIVE" }, "Backward Transitive"),
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "FORWARD", "data-testid": "rules-compatibility-config-forward", id: "FORWARD" }, "Forward"),
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "FORWARD_TRANSITIVE", "data-testid": "rules-compatibility-config-forwardTrans", id: "FORWARD_TRANSITIVE" }, "Forward Transitive"),
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "FULL", "data-testid": "rules-compatibility-config-full", id: "FULL" }, "Full"),
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "FULL_TRANSITIVE", "data-testid": "rules-compatibility-config-fullTrans", id: "FULL_TRANSITIVE" }, "Full Transitive"),
        ];
        return (index_js_eager_default().createElement(index_js_.Dropdown, { onSelect: this.onSelect, toggle: index_js_eager_default().createElement(index_js_.DropdownToggle, { id: "toggle-id", "data-testid": "rules-compatibility-config-toggle", onToggle: this.onToggle, toggleIndicator: esm_index_js_.CaretDownIcon }, this.displayValue()), isOpen: this.state.isOpen, dropdownItems: dropdownItems }));
    };
    CompatibilityDropdown.prototype.initializeState = function () {
        return {
            isOpen: false
        };
    };
    CompatibilityDropdown.prototype.displayValue = function () {
        switch (this.props.value) {
            case "BACKWARD":
                return "Backward";
            case "BACKWARD_TRANSITIVE":
                return "Backward Transitive";
            case "FORWARD":
                return "Forward";
            case "FORWARD_TRANSITIVE":
                return "Forward Transitive";
            case "FULL":
                return "Full";
            case "FULL_TRANSITIVE":
                return "Full Transitive";
        }
        return this.props.value;
    };
    return CompatibilityDropdown;
}(baseComponent/* PureComponent */.V));


;// CONCATENATED MODULE: ./src/app/components/ruleList/validity-dropdown.tsx
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var validity_dropdown_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Models the content of the Artifact Info tab.
 */
var ValidityDropdown = /** @class */ (function (_super) {
    validity_dropdown_extends(ValidityDropdown, _super);
    function ValidityDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = function (isOpen) {
            _this.setSingleState("isOpen", isOpen);
        };
        _this.onSelect = function (event) {
            var newValue = event && event.currentTarget && event.currentTarget.id ? event.currentTarget.id : "";
            _this.props.onSelect(newValue);
            _this.onToggle(false);
        };
        return _this;
    }
    ValidityDropdown.prototype.render = function () {
        var dropdownItems = [
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "FULL", id: "FULL", "data-testid": "rules-validity-config-full" }, "Full"),
            index_js_eager_default().createElement(index_js_.DropdownItem, { key: "SYNTAX_ONLY", id: "SYNTAX_ONLY", "data-testid": "rules-validity-config-syntaxOnly" }, "Syntax Only"),
        ];
        return (index_js_eager_default().createElement(index_js_.Dropdown, { onSelect: this.onSelect, toggle: index_js_eager_default().createElement(index_js_.DropdownToggle, { id: "toggle-id", "data-testid": "rules-validity-config-toggle", onToggle: this.onToggle, toggleIndicator: esm_index_js_.CaretDownIcon }, this.displayValue()), isOpen: this.state.isOpen, dropdownItems: dropdownItems }));
    };
    ValidityDropdown.prototype.initializeState = function () {
        return {
            isOpen: false
        };
    };
    ValidityDropdown.prototype.displayValue = function () {
        switch (this.props.value) {
            case "FULL":
                return "Full";
            case "SYNTAX_ONLY":
                return "Syntax Only";
        }
        return this.props.value;
    };
    return ValidityDropdown;
}(baseComponent/* PureComponent */.V));


// EXTERNAL MODULE: ./src/app/components/common/ifFeature.tsx
var ifFeature = __webpack_require__(13294);
// EXTERNAL MODULE: ./src/app/components/common/index.ts + 1 modules
var common = __webpack_require__(72672);
;// CONCATENATED MODULE: ./src/app/components/ruleList/ruleList.tsx
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ruleList_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var RuleList = /** @class */ (function (_super) {
    ruleList_extends(RuleList, _super);
    function RuleList(props) {
        var _this = _super.call(this, props) || this;
        _this.doEnableRule = function (ruleType) {
            return function () {
                _this.props.onEnableRule(ruleType);
            };
        };
        _this.doDisableRule = function (ruleType) {
            return function () {
                _this.props.onDisableRule(ruleType);
            };
        };
        _this.doConfigureRule = function (ruleType) {
            return function (config) {
                _this.props.onConfigureRule(ruleType, config);
            };
        };
        return _this;
    }
    RuleList.prototype.render = function () {
        var validityRuleActions = (index_js_eager_default().createElement(index_js_.Button, { variant: "secondary", key: "enable-action", "data-testid": "rules-validity-enable", onClick: this.doEnableRule("VALIDITY") }, "Enable"));
        if (this.isRuleEnabled("VALIDITY")) {
            validityRuleActions = (index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
                index_js_eager_default().createElement(ValidityDropdown, { value: this.getRuleConfig("VALIDITY"), onSelect: this.doConfigureRule("VALIDITY") }),
                index_js_eager_default().createElement(index_js_.Button, { variant: "plain", key: "delete-action", "data-testid": "rules-validity-disable", title: "Disable the validity rule", onClick: this.doDisableRule("VALIDITY") },
                    index_js_eager_default().createElement(esm_index_js_.TrashIcon, null))));
        }
        var compatibilityRuleActions = (index_js_eager_default().createElement(index_js_.Button, { variant: "secondary", key: "enable-action", "data-testid": "rules-compatibility-enable", onClick: this.doEnableRule("COMPATIBILITY") }, "Enable"));
        if (this.isRuleEnabled("COMPATIBILITY")) {
            compatibilityRuleActions = (index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
                index_js_eager_default().createElement(CompatibilityDropdown, { value: this.getRuleConfig("COMPATIBILITY"), onSelect: this.doConfigureRule("COMPATIBILITY") }),
                index_js_eager_default().createElement(index_js_.Button, { variant: "plain", key: "delete-action", "data-testid": "rules-compatibility-disable", title: "Disable the compatibility rule", onClick: this.doDisableRule("COMPATIBILITY") },
                    index_js_eager_default().createElement(esm_index_js_.TrashIcon, null))));
        }
        return (index_js_eager_default().createElement(index_js_.DataList, { "aria-label": "Artifact rules" },
            index_js_eager_default().createElement(index_js_.DataListItem, { "aria-labelledby": "validity-rule-name" },
                index_js_eager_default().createElement(index_js_.DataListItemRow, { className: this.getRuleRowClasses("VALIDITY") },
                    index_js_eager_default().createElement(index_js_.DataListItemCells, { dataListCells: [
                            index_js_eager_default().createElement(index_js_.DataListCell, { key: "rule-name" },
                                index_js_eager_default().createElement(esm_index_js_.OkIcon, { className: "rule-icon" }),
                                index_js_eager_default().createElement("span", { id: "validity-rule-name" }, "Validity Rule")),
                            index_js_eager_default().createElement(index_js_.DataListCell, { key: "rule-description" },
                                "Ensure that content is ",
                                index_js_eager_default().createElement("em", null, "valid"),
                                " when updating this artifact.")
                        ] }),
                    index_js_eager_default().createElement(common/* IfAuth */.No, { isDeveloper: true },
                        index_js_eager_default().createElement(ifFeature/* IfFeature */.Q, { feature: "readOnly", isNot: true },
                            index_js_eager_default().createElement(index_js_.DataListAction, { "aria-labelledby": "selectable-action-item1 selectable-action-action1", id: "selectable-action-action1", "aria-label": "Actions" }, validityRuleActions))))),
            index_js_eager_default().createElement(index_js_.DataListItem, { "aria-labelledby": "compatibility-rule-name" },
                index_js_eager_default().createElement(index_js_.DataListItemRow, { className: this.getRuleRowClasses("COMPATIBILITY") },
                    index_js_eager_default().createElement(index_js_.DataListItemCells, { dataListCells: [
                            index_js_eager_default().createElement(index_js_.DataListCell, { key: "rule-name" },
                                index_js_eager_default().createElement(esm_index_js_.CodeBranchIcon, { className: "rule-icon" }),
                                index_js_eager_default().createElement("span", { id: "compatibility-rule-name" }, "Compatibility Rule")),
                            index_js_eager_default().createElement(index_js_.DataListCell, { key: "rule-description" }, "Enforce a compatibility level when updating this artifact (e.g. Backwards Compatibility).")
                        ] }),
                    index_js_eager_default().createElement(common/* IfAuth */.No, { isDeveloper: true },
                        index_js_eager_default().createElement(ifFeature/* IfFeature */.Q, { feature: "readOnly", isNot: true },
                            index_js_eager_default().createElement(index_js_.DataListAction, { "aria-labelledby": "selectable-action-item1 selectable-action-action1", id: "selectable-action-action2", "aria-label": "Actions" }, compatibilityRuleActions)))))));
    };
    RuleList.prototype.initializeState = function () {
        return {};
    };
    RuleList.prototype.isRuleEnabled = function (ruleType) {
        return this.props.rules.filter(function (rule) { return rule.type === ruleType; }).length > 0;
    };
    RuleList.prototype.getRuleRowClasses = function (ruleType) {
        var classes = ["rule"];
        if (ruleType === "COMPATIBILITY") {
            classes.push("compatibility-rule");
        }
        else {
            classes.push("validity-rule");
        }
        if (!this.isRuleEnabled(ruleType)) {
            classes.push("disabled");
        }
        return classes.join(' ');
    };
    RuleList.prototype.getRuleConfig = function (ruleType) {
        var frules = this.props.rules.filter(function (r) { return r.type === ruleType; });
        if (frules.length === 1) {
            return frules[0].config;
        }
        else {
            return "UNKNOWN";
        }
    };
    ;
    return RuleList;
}(baseComponent/* PureComponent */.V));


;// CONCATENATED MODULE: ./src/app/components/ruleList/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),

/***/ 26619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PageComponent)
/* harmony export */ });
/* unused harmony export PageErrorType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94830);
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// TODO this should be configurable via standard UI config settings
var MAX_RETRIES = 5;
var PageErrorType;
(function (PageErrorType) {
    PageErrorType[PageErrorType["React"] = 0] = "React";
    PageErrorType[PageErrorType["Server"] = 1] = "Server";
})(PageErrorType || (PageErrorType = {}));
/**
 * The artifacts page.
 */
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(props) {
        var _this = _super.call(this, props) || this;
        setTimeout(function () {
            _this.loadPageData();
        }, 10);
        return _this;
    }
    PageComponent.prototype.initializeState = function () {
        return __assign(__assign({}, this.initializePageState()), { isLoading: true });
    };
    PageComponent.prototype.componentDidCatch = function (error, errorInfo) {
        this.handleError(PageErrorType.React, error, errorInfo);
    };
    PageComponent.prototype.render = function () {
        if (this.isError()) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__/* .ErrorPage */ .mf, { error: this.state.error }));
        }
        else {
            return this.renderPage();
        }
    };
    PageComponent.prototype.postConstruct = function () {
        // @ts-ignore
        _components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent.setHistory */ .Vx.setHistory(this.props.history);
        _super.prototype.postConstruct.call(this);
    };
    // @ts-ignore
    PageComponent.prototype.createLoaders = function () {
        return null;
    };
    PageComponent.prototype.handleServerError = function (error, errorMessage) {
        this.handleError(PageErrorType.Server, error, errorMessage);
    };
    PageComponent.prototype.getPathParam = function (paramName) {
        // @ts-ignore
        return decodeURIComponent(this.props.match.params[paramName]);
    };
    PageComponent.prototype.isLoading = function () {
        return this.state.isLoading ? true : false;
    };
    PageComponent.prototype.loadPageData = function () {
        var _this = this;
        // @ts-ignore
        var loaders = this.createLoaders();
        if (loaders == null) {
            this.setSingleState("isLoading", false);
        }
        else {
            if (!Array.isArray(loaders)) {
                loaders = [loaders];
            }
            if (loaders.length === 0) {
                this.setSingleState("isLoading", false);
            }
            else {
                this.setSingleState("isLoading", true);
                Promise.all(loaders).then(function () {
                    _this.setSingleState("isLoading", false);
                }).catch(function (error) {
                    _services__WEBPACK_IMPORTED_MODULE_2__.Services.getLoggerService().debug("[PageComponent] Page data load failed, retrying.");
                    var retries = _this.getRetries();
                    if (retries < MAX_RETRIES) {
                        _this.incrementRetries();
                        setTimeout(function () {
                            _this.loadPageData();
                        }, Math.pow(2, retries) * 100);
                    }
                    else {
                        _this.handleServerError(error, "Error loading page data.");
                    }
                });
            }
        }
    };
    PageComponent.prototype.getRetries = function () {
        return this.state.pageLoadRetries !== undefined ? this.state.pageLoadRetries : 0;
    };
    PageComponent.prototype.incrementRetries = function () {
        var retries = this.getRetries() + 1;
        this.setSingleState("pageLoadRetries", retries);
    };
    PageComponent.prototype.isError = function () {
        return this.state.isError ? true : false;
    };
    PageComponent.prototype.handleError = function (errorType, error, errorMessage) {
        _services__WEBPACK_IMPORTED_MODULE_2__.Services.getLoggerService().error("[PageComponent] Handling an error of type: ", errorType);
        _services__WEBPACK_IMPORTED_MODULE_2__.Services.getLoggerService().error("[PageComponent] ", errorMessage);
        _services__WEBPACK_IMPORTED_MODULE_2__.Services.getLoggerService().error("[PageComponent] ", error);
        this.setMultiState({
            error: {
                error: error, errorMessage: errorMessage,
                type: errorType
            },
            isError: true
        });
    };
    return PageComponent;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ }),

/***/ 89929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ArtifactMetaData": () => (/* reexport */ artifactMetaData_model/* ArtifactMetaData */._),
  "ArtifactTypes": () => (/* reexport */ artifactTypes_model/* ArtifactTypes */.R),
  "ContentTypes": () => (/* reexport */ ContentTypes)
});

// UNUSED EXPORTS: VersionMetaData

// EXTERNAL MODULE: ./src/models/artifactMetaData.model.ts
var artifactMetaData_model = __webpack_require__(28172);
// EXTERNAL MODULE: ./src/models/artifactTypes.model.ts
var artifactTypes_model = __webpack_require__(89023);
;// CONCATENATED MODULE: ./src/models/contentTypes.model.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// tslint:disable-next-line:interface-name
var ContentTypes = /** @class */ (function () {
    function ContentTypes() {
    }
    ContentTypes.APPLICATION_JSON = "application/json";
    ContentTypes.APPLICATION_YAML = "application/x-yaml";
    ContentTypes.APPLICATION_XML = "application/xml";
    ContentTypes.APPLICATION_PROTOBUF = "application/x-protobuf";
    ContentTypes.APPLICATION_GRAPHQL = "application/graphql";
    return ContentTypes;
}());


;// CONCATENATED MODULE: ./src/models/versionMetaData.model.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VersionMetaData = /** @class */ (function () {
    function VersionMetaData() {
    }
    return VersionMetaData;
}());


;// CONCATENATED MODULE: ./src/models/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









/***/ }),

/***/ 33614:
/***/ (() => {

/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/***/ }),

/***/ 94830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Services": () => (/* reexport */ Services)
});

// UNUSED EXPORTS: AdminService, BaseService, DownloaderService, GroupsService, LoggerService

// EXTERNAL MODULE: consume shared module (default) axios@=0.21.1 (strict) (fallback: ./node_modules/axios/index.js)
var index_js_ = __webpack_require__(2027);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/models/index.ts + 2 modules
var models = __webpack_require__(89929);
;// CONCATENATED MODULE: ./src/services/baseService.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var AXIOS = index_js_default().create();
/**
 * Base class for all services.
 */
var BaseService = /** @class */ (function () {
    function BaseService() {
        // @ts-ignore
        this.logger = null;
        // @ts-ignore
        this.config = null;
        // @ts-ignore
        this.auth = null;
    }
    BaseService.prototype.init = function () {
        this.initAuthInterceptor();
    };
    BaseService.prototype.initAuthInterceptor = function () {
        AXIOS.interceptors.request.use(this.auth.getAuthInterceptor());
    };
    /**
     * Creates an endpoint to use when making a REST call.  Supports path params and query params.
     * @param path
     * @param params
     * @param queryParams
     */
    BaseService.prototype.endpoint = function (path, params, queryParams) {
        if (params) {
            Object.keys(params).forEach(function (key) {
                var value = encodeURIComponent(params[key]);
                path = path.replace(":" + key, value);
            });
        }
        var rval = this.apiBaseHref() + path;
        if (queryParams) {
            var first = true;
            for (var key in queryParams) {
                if (queryParams[key]) {
                    var value = encodeURIComponent(queryParams[key]);
                    if (first) {
                        rval = rval + "?" + key;
                    }
                    else {
                        rval = rval + "&" + key;
                    }
                    if (value !== null && value !== undefined) {
                        rval = rval + "=" + value;
                    }
                    first = false;
                }
            }
        }
        this.logger.info("[BaseService] Using REST endpoint: ", rval);
        return rval;
    };
    /**
     * Creates the request options used by the HTTP service when making API calls.
     * @param headers
     */
    BaseService.prototype.options = function (headers) {
        var options = { headers: headers };
        return options;
    };
    /**
     * Performs an HTTP GET operation to the given URL with the given options.  Returns
     * a Promise to the HTTP response data.
     */
    BaseService.prototype.httpGet = function (url, options, successCallback) {
        var _this = this;
        this.logger.info("[BaseService] Making a GET request to: ", url);
        if (!options) {
            options = this.options({ "Accept": models.ContentTypes.APPLICATION_JSON });
        }
        var config = this.axiosConfig("get", url, options);
        return AXIOS.request(config)
            .then(function (response) {
            var data = response.data;
            if (successCallback) {
                return successCallback(data);
            }
            else {
                return data;
            }
        }).catch(function (error) {
            return Promise.reject(_this.unwrapErrorData(error));
        });
    };
    /**
     * Performs an HTTP POST operation to the given URL with the given body and options.  Returns
     * a Promise to null (no response data expected).
     * @param url
     * @param body
     * @param options
     */
    BaseService.prototype.httpPost = function (url, body, options, successCallback) {
        var _this = this;
        this.logger.info("[BaseService] Making a POST request to: ", url);
        if (!options) {
            options = this.options({ "Content-Type": models.ContentTypes.APPLICATION_JSON });
        }
        var config = this.axiosConfig("post", url, options, body);
        return AXIOS.request(config)
            .then(function () {
            if (successCallback) {
                return successCallback();
            }
            else {
                return;
            }
        }).catch(function (error) {
            return Promise.reject(_this.unwrapErrorData(error));
        });
    };
    /**
     * Performs an HTTP POST operation to the given URL with the given body and options.  Returns
     * a Promise to the HTTP response data.
     * @param url
     * @param body
     * @param options
     */
    BaseService.prototype.httpPostWithReturn = function (url, body, options, successCallback) {
        var _this = this;
        this.logger.info("[BaseService] Making a POST request to: ", url);
        if (!options) {
            options = this.options({ "Accept": models.ContentTypes.APPLICATION_JSON, "Content-Type": models.ContentTypes.APPLICATION_JSON });
        }
        var config = this.axiosConfig("post", url, options, body);
        return AXIOS.request(config)
            .then(function (response) {
            var data = response.data;
            if (successCallback) {
                return successCallback(data);
            }
            else {
                return data;
            }
        }).catch(function (error) {
            return Promise.reject(_this.unwrapErrorData(error));
        });
    };
    /**
     * Performs an HTTP PUT operation to the given URL with the given body and options.  Returns
     * a Promise to null (no response data expected).
     * @param url
     * @param body
     * @param options
     */
    BaseService.prototype.httpPut = function (url, body, options, successCallback) {
        var _this = this;
        this.logger.info("[BaseService] Making a PUT request to: ", url);
        if (!options) {
            options = this.options({ "Content-Type": models.ContentTypes.APPLICATION_JSON });
        }
        var config = this.axiosConfig("put", url, options, body);
        return AXIOS.request(config)
            .then(function () {
            if (successCallback) {
                return successCallback();
            }
            else {
                return;
            }
        }).catch(function (error) {
            return Promise.reject(_this.unwrapErrorData(error));
        });
    };
    /**
     * Performs an HTTP PUT operation to the given URL with the given body and options.  Returns
     * a Promise to the HTTP response data.
     * @param url
     * @param body
     * @param options
     */
    BaseService.prototype.httpPutWithReturn = function (url, body, options, successCallback) {
        var _this = this;
        this.logger.info("[BaseService] Making a PUT request to: ", url);
        if (!options) {
            options = this.options({ "Accept": models.ContentTypes.APPLICATION_JSON, "Content-Type": models.ContentTypes.APPLICATION_JSON });
        }
        var config = this.axiosConfig("put", url, options, body);
        return AXIOS.request(config)
            .then(function (response) {
            var data = response.data;
            if (successCallback) {
                return successCallback(data);
            }
            else {
                return data;
            }
        }).catch(function (error) {
            return Promise.reject(_this.unwrapErrorData(error));
        });
    };
    /**
     * Performs an HTTP DELETE operation to the given URL with the given body and options.
     * @param url
     * @param options
     */
    BaseService.prototype.httpDelete = function (url, options, successCallback) {
        var _this = this;
        this.logger.info("[BaseService] Making a DELETE request to: ", url);
        if (!options) {
            options = {};
        }
        var config = this.axiosConfig("delete", url, options);
        // @ts-ignore
        return AXIOS.request(config)
            .then(function () {
            return successCallback ? successCallback() : null;
        }).catch(function (error) {
            return Promise.reject(_this.unwrapErrorData(error));
        });
    };
    BaseService.prototype.axiosConfig = function (method, url, options, data) {
        return __assign({
            data: data,
            method: method,
            url: url,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            }
        }, options);
    };
    BaseService.prototype.unwrapErrorData = function (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return error;
    };
    BaseService.prototype.apiBaseHref = function () {
        var artifactsUrl = this.config.artifactsUrl();
        if (artifactsUrl == null) {
            return "";
        }
        if (artifactsUrl.endsWith("/")) {
            artifactsUrl = artifactsUrl.substring(0, artifactsUrl.length - 1);
        }
        this.logger.debug("[BaseService] Base HREF of REST API: ", artifactsUrl);
        return artifactsUrl;
    };
    return BaseService;
}());


;// CONCATENATED MODULE: ./src/services/admin/admin.service.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * The Admin service.  Used to get global/settings information from the back-end, like global
 * rules and logging settings.
 */
var AdminService = /** @class */ (function (_super) {
    __extends(AdminService, _super);
    function AdminService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminService.prototype.getRules = function () {
        var _this = this;
        this.logger.info("[AdminService] Getting the global list of rules.");
        var endpoint = this.endpoint("/v2/admin/rules");
        return this.httpGet(endpoint).then(function (ruleTypes) {
            return Promise.all(ruleTypes.map(function (rt) { return _this.getRule(rt); }));
        });
    };
    AdminService.prototype.getRule = function (type) {
        var endpoint = this.endpoint("/v2/admin/rules/:rule", {
            rule: type
        });
        return this.httpGet(endpoint);
    };
    AdminService.prototype.createRule = function (type, config) {
        this.logger.info("[AdminService] Creating global rule:", type);
        var endpoint = this.endpoint("/v2/admin/rules");
        var body = {
            config: config,
            type: type
        };
        return this.httpPostWithReturn(endpoint, body);
    };
    AdminService.prototype.updateRule = function (type, config) {
        this.logger.info("[AdminService] Updating global rule:", type);
        var endpoint = this.endpoint("/v2/admin/rules/:rule", {
            "rule": type
        });
        var body = { config: config, type: type };
        return this.httpPutWithReturn(endpoint, body);
    };
    AdminService.prototype.deleteRule = function (type) {
        this.logger.info("[AdminService] Deleting global rule:", type);
        var endpoint = this.endpoint("/v2/admin/rules/:rule", {
            "rule": type
        });
        return this.httpDelete(endpoint);
    };
    return AdminService;
}(BaseService));


;// CONCATENATED MODULE: ./src/services/admin/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


;// CONCATENATED MODULE: ./src/services/config/config.service.ts
/* provided dependency */ var console = __webpack_require__(25108);
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var config_service_assign = (undefined && undefined.__assign) || function () {
    config_service_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return config_service_assign.apply(this, arguments);
};
var DEFAULT_CONFIG = {
    artifacts: {
        url: "http://localhost:8080/apis/registry"
    },
    auth: {
        options: {
            clientId: 'registry-ui',
            onLoad: 'login-required',
            realm: 'registry',
            url: 'http://localhost:8090/auth'
        },
        type: "keycloakjs"
    },
    features: {
        readOnly: false,
        breadcrumbs: true
    },
    ui: {
        contextPath: "/",
        navPrefixPath: "/"
    }
};
/**
 * A simple configuration service.  Reads information from a global "ApicurioRegistryConfig" variable
 * that is typically included via JSONP.
 */
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        var w = window;
        if (w.ApicurioRegistryConfig) {
            this.config = w.ApicurioRegistryConfig;
            console.info("[ConfigService] Found app config.");
        }
        else {
            console.warn("[ConfigService] App config not found! (using default)");
            this.config = DEFAULT_CONFIG;
        }
    }
    ConfigService.prototype.init = function () {
        // Nothing to init (done in c'tor)
    };
    ConfigService.prototype.updateConfig = function (config) {
        this.config = config;
    };
    ConfigService.prototype.artifactsUrl = function () {
        if (!this.config.artifacts) {
            return null;
        }
        return this.config.artifacts.url;
    };
    ConfigService.prototype.uiContextPath = function () {
        if (!this.config.ui || !this.config.ui.contextPath) {
            return "/";
        }
        return this.config.ui.contextPath;
    };
    ConfigService.prototype.uiNavPrefixPath = function () {
        if (!this.config.ui || !this.config.ui.navPrefixPath) {
            return "";
        }
        if (this.config.ui.navPrefixPath.endsWith("/")) {
            this.config.ui.navPrefixPath = this.config.ui.navPrefixPath.substr(0, this.config.ui.navPrefixPath.length - 1);
        }
        return this.config.ui.navPrefixPath;
    };
    ConfigService.prototype.features = function () {
        var defaults = {
            readOnly: false,
            breadcrumbs: true
        };
        if (!this.config.features) {
            return defaults;
        }
        return config_service_assign(config_service_assign({}, defaults), this.config.features);
    };
    ConfigService.prototype.featureReadOnly = function () {
        return this.features().readOnly || false;
    };
    ConfigService.prototype.featureBreadcrumbs = function () {
        return this.features().breadcrumbs || false;
    };
    ConfigService.prototype.authType = function () {
        if (!this.config.auth || !this.config.auth.type) {
            return "";
        }
        return this.config.auth.type;
    };
    ConfigService.prototype.authOptions = function () {
        if (this.config.auth) {
            var auth = this.config.auth;
            return auth.options;
        }
        return {};
    };
    ConfigService.prototype.featureMultiTenant = function () {
        return this.features().multiTenant || false;
    };
    return ConfigService;
}());


// EXTERNAL MODULE: ./src/services/config/config.type.ts
var config_type = __webpack_require__(33614);
;// CONCATENATED MODULE: ./src/services/config/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



;// CONCATENATED MODULE: ./src/services/downloader/downloader.service.ts
/* provided dependency */ var downloader_service_console = __webpack_require__(25108);
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _window() {
    return window;
}
/**
 * A simple logger service.
 */
var DownloaderService = /** @class */ (function () {
    function DownloaderService() {
    }
    DownloaderService.prototype.init = function () {
        this.window = _window();
    };
    /**
     * Called to download some content as a file to the user's local filesystem.
     * @param content
     * @param contentType
     * @param filename
     */
    DownloaderService.prototype.downloadToFS = function (content, contentType, filename) {
        downloader_service_console.info("[DownloaderService] Downloading an API definition.");
        if (this.window.chrome !== undefined) {
            // Chrome version
            var link = document.createElement('a');
            var blob = new Blob([content], { type: contentType });
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        }
        else if (window.navigator !== undefined && window.navigator.msSaveBlob !== undefined) {
            // IE version
            var blob = new Blob([content], { type: contentType });
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            // Firefox version
            var file = new File([content], filename, { type: "application/force-download" });
            window.open(URL.createObjectURL(file));
        }
        // Not async right now - so just resolve to true
        return Promise.resolve(true);
    };
    return DownloaderService;
}());


;// CONCATENATED MODULE: ./src/services/downloader/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// EXTERNAL MODULE: consume shared module (default) yaml@^1.10.0 (strict) (fallback: ./node_modules/yaml/browser/index.js)
var browser_index_js_ = __webpack_require__(16957);
var browser_index_js_default = /*#__PURE__*/__webpack_require__.n(browser_index_js_);
;// CONCATENATED MODULE: ./src/services/groups/groups.service.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var groups_service_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * The artifacts service.  Used to query the backend search API to fetch lists of
 * artifacts and also details about individual artifacts.
 */
var GroupsService = /** @class */ (function (_super) {
    groups_service_extends(GroupsService, _super);
    function GroupsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupsService.prototype.createArtifact = function (data) {
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts", { groupId: data.groupId });
        var headers = {};
        if (data.id) {
            headers["X-Registry-ArtifactId"] = data.id;
        }
        if (data.type) {
            headers["X-Registry-ArtifactType"] = data.type;
        }
        headers["Content-Type"] = this.contentType(data.type, data.content);
        return this.httpPostWithReturn(endpoint, data.content, this.options(headers));
    };
    GroupsService.prototype.createArtifactVersion = function (groupId, artifactId, data) {
        groupId = this.normalizeGroupId(groupId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/versions", { groupId: groupId, artifactId: artifactId });
        var headers = {};
        if (data.type) {
            headers["X-Registry-ArtifactType"] = data.type;
        }
        headers["Content-Type"] = this.contentType(data.type, data.content);
        return this.httpPostWithReturn(endpoint, data.content, this.options(headers));
    };
    GroupsService.prototype.getArtifacts = function (criteria, paging) {
        this.logger.debug("[GroupsService] Getting artifacts: ", criteria, paging);
        var start = (paging.page - 1) * paging.pageSize;
        var end = start + paging.pageSize;
        var queryParams = {
            limit: end,
            offset: start,
            order: criteria.sortAscending ? "asc" : "desc",
            orderby: "name"
        };
        if (criteria.value) {
            if (criteria.type == "everything") {
                queryParams["name"] = criteria.value;
                queryParams["description"] = criteria.value;
                queryParams["labels"] = criteria.value;
            }
            else {
                queryParams[criteria.type] = criteria.value;
            }
        }
        var endpoint = this.endpoint("/v2/search/artifacts", {}, queryParams);
        return this.httpGet(endpoint, undefined, function (data) {
            var results = {
                artifacts: data.artifacts,
                count: data.count,
                page: paging.page,
                pageSize: paging.pageSize
            };
            return results;
        });
    };
    GroupsService.prototype.getArtifactMetaData = function (groupId, artifactId, version) {
        groupId = this.normalizeGroupId(groupId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/versions/:version/meta", { groupId: groupId, artifactId: artifactId, version: version });
        if (version === "latest") {
            endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/meta", { groupId: groupId, artifactId: artifactId });
        }
        return this.httpGet(endpoint);
    };
    GroupsService.prototype.updateArtifactMetaData = function (groupId, artifactId, version, metaData) {
        groupId = this.normalizeGroupId(groupId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/versions/:version/meta", { groupId: groupId, artifactId: artifactId, version: version });
        if (version === "latest") {
            endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/meta", { groupId: groupId, artifactId: artifactId });
        }
        return this.httpPut(endpoint, metaData);
    };
    GroupsService.prototype.getArtifactContent = function (groupId, artifactId, version) {
        groupId = this.normalizeGroupId(groupId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/versions/:version", { groupId: groupId, artifactId: artifactId, version: version });
        if (version === "latest") {
            endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId", { groupId: groupId, artifactId: artifactId });
        }
        var options = this.options({
            "Accept": "*"
        });
        options.maxContentLength = "‭5242880‬"; // TODO 5MB hard-coded, make this configurable?
        options.responseType = "text";
        options.transformResponse = function (data) { return data; };
        return this.httpGet(endpoint, options);
    };
    GroupsService.prototype.getArtifactVersions = function (groupId, artifactId) {
        groupId = this.normalizeGroupId(groupId);
        this.logger.info("[GroupsService] Getting the list of versions for artifact: ", groupId, artifactId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/versions", { groupId: groupId, artifactId: artifactId }, {
            limit: 500,
            offset: 0
        });
        return this.httpGet(endpoint, undefined, function (data) {
            return data.versions;
        });
    };
    GroupsService.prototype.getArtifactRules = function (groupId, artifactId) {
        var _this = this;
        groupId = this.normalizeGroupId(groupId);
        this.logger.info("[GroupsService] Getting the list of rules for artifact: ", groupId, artifactId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/rules", { groupId: groupId, artifactId: artifactId });
        return this.httpGet(endpoint).then(function (ruleTypes) {
            return Promise.all(ruleTypes.map(function (rt) { return _this.getArtifactRule(groupId, artifactId, rt); }));
        });
    };
    GroupsService.prototype.getArtifactRule = function (groupId, artifactId, type) {
        groupId = this.normalizeGroupId(groupId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/rules/:rule", {
            groupId: groupId,
            artifactId: artifactId,
            rule: type
        });
        return this.httpGet(endpoint);
    };
    GroupsService.prototype.createArtifactRule = function (groupId, artifactId, type, config) {
        groupId = this.normalizeGroupId(groupId);
        this.logger.info("[GroupsService] Creating rule:", type);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/rules", { groupId: groupId, artifactId: artifactId });
        var body = {
            config: config,
            type: type
        };
        return this.httpPostWithReturn(endpoint, body);
    };
    GroupsService.prototype.updateArtifactRule = function (groupId, artifactId, type, config) {
        groupId = this.normalizeGroupId(groupId);
        this.logger.info("[GroupsService] Updating rule:", type);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/rules/:rule", {
            groupId: groupId,
            artifactId: artifactId,
            "rule": type
        });
        var body = { config: config, type: type };
        return this.httpPutWithReturn(endpoint, body);
    };
    GroupsService.prototype.deleteArtifactRule = function (groupId, artifactId, type) {
        groupId = this.normalizeGroupId(groupId);
        this.logger.info("[GroupsService] Deleting rule:", type);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId/rules/:rule", {
            groupId: groupId,
            artifactId: artifactId,
            "rule": type
        });
        return this.httpDelete(endpoint);
    };
    GroupsService.prototype.deleteArtifact = function (groupId, artifactId) {
        groupId = this.normalizeGroupId(groupId);
        this.logger.info("[GroupsService] Deleting artifact:", groupId, artifactId);
        var endpoint = this.endpoint("/v2/groups/:groupId/artifacts/:artifactId", { groupId: groupId, artifactId: artifactId });
        return this.httpDelete(endpoint);
    };
    GroupsService.prototype.normalizeGroupId = function (groupId) {
        return groupId || "default";
    };
    GroupsService.prototype.contentType = function (type, content) {
        switch (type) {
            case "PROTOBUF":
                return models.ContentTypes.APPLICATION_PROTOBUF;
            case "WSDL":
            case "XSD":
            case "XML":
                return models.ContentTypes.APPLICATION_XML;
            case "GRAPHQL":
                return models.ContentTypes.APPLICATION_GRAPHQL;
        }
        if (this.isJson(content)) {
            return models.ContentTypes.APPLICATION_JSON;
        }
        else if (this.isXml(content)) {
            return models.ContentTypes.APPLICATION_XML;
        }
        else if (this.isYaml(content)) {
            return models.ContentTypes.APPLICATION_YAML;
        }
        else {
            return "application/octet-stream";
        }
    };
    GroupsService.prototype.isJson = function (content) {
        try {
            JSON.parse(content);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    GroupsService.prototype.isXml = function (content) {
        try {
            var xmlParser = new DOMParser();
            var dom = xmlParser.parseFromString(content, "application/xml");
            var isParseError = dom.documentElement.nodeName === "parsererror";
            return !isParseError;
        }
        catch (e) {
            return false;
        }
    };
    GroupsService.prototype.isYaml = function (content) {
        try {
            var parsedContent = browser_index_js_default().parse(content);
            return typeof parsedContent === "object";
        }
        catch (e) {
            return false;
        }
    };
    return GroupsService;
}(BaseService));


;// CONCATENATED MODULE: ./src/services/groups/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


;// CONCATENATED MODULE: ./src/services/logger/logger.service.ts
/* provided dependency */ var logger_service_console = __webpack_require__(25108);
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * A simple logger service.
 */
var LoggerService = /** @class */ (function () {
    function LoggerService() {
        // @ts-ignore
        this.config = null;
    }
    LoggerService.prototype.init = function () {
        // Nothing to init
    };
    LoggerService.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        logger_service_console.debug.apply(logger_service_console, __spreadArrays([(this.config.featureMultiTenant() ? "{MT}::" : "") + message], optionalParams));
    };
    LoggerService.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        logger_service_console.info.apply(logger_service_console, __spreadArrays([(this.config.featureMultiTenant() ? "{MT}::" : "") + message], optionalParams));
    };
    LoggerService.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        logger_service_console.warn.apply(logger_service_console, __spreadArrays([(this.config.featureMultiTenant() ? "{MT}::" : "") + message], optionalParams));
    };
    LoggerService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        logger_service_console.error.apply(logger_service_console, __spreadArrays([(this.config.featureMultiTenant() ? "{MT}::" : "") + message], optionalParams));
    };
    return LoggerService;
}());


;// CONCATENATED MODULE: ./src/services/logger/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// EXTERNAL MODULE: consume shared module (default) keycloak-js@^10.0.2 (strict) (fallback: ./node_modules/keycloak-js/dist/keycloak.js)
var keycloak_js_ = __webpack_require__(34260);
var keycloak_js_default = /*#__PURE__*/__webpack_require__.n(keycloak_js_);
;// CONCATENATED MODULE: ./src/services/auth/auth.service.ts
/* provided dependency */ var auth_service_console = __webpack_require__(25108);

var KC_CONFIG_OPTIONS = ["url", "realm", "clientId"];
var KC_INIT_OPTIONS = [
    "useNonce", "adapter", "onLoad", "token", "refreshToken", "idToken", "timeSkew", "checkLoginIframe",
    "checkLoginIframeInterval", "responseMode", "redirectUri", "silentCheckSsoRedirectUri", "flow",
    "pkceMethod", "enableLogging"
];
function only(items, allOptions) {
    var rval = {};
    items.forEach(function (item) {
        if (allOptions[item] !== undefined) {
            rval[item] = allOptions[item];
        }
    });
    return rval;
}
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.enabled = false;
        // @ts-ignore
        this.config = null;
        // @ts-ignore
        this.logger = null;
        this.init = function () {
            // no init?
        };
        this.authenticateUsingKeycloak = function (onAuthenticatedCallback) {
            var configOptions = only(KC_CONFIG_OPTIONS, _this.config.authOptions());
            var initOptions = only(KC_INIT_OPTIONS, _this.config.authOptions());
            _this.keycloak = keycloak_js_default()(configOptions);
            var addRoles = function (user) {
                if (_this.keycloak.realmAccess && _this.keycloak.realmAccess.roles) {
                    user.roles = user.roles.concat(_this.keycloak.realmAccess.roles);
                }
                if (_this.keycloak.resourceAccess) {
                    Object.keys(_this.keycloak.resourceAccess)
                        // @ts-ignore
                        .forEach(function (key) { return (user.roles = user.roles.concat(_this.keycloak.resourceAccess[key].roles)); });
                }
                _this.logger.info("----------------");
                _this.logger.info("Authenticated!  User info:", user);
                _this.logger.info("----------------");
            };
            var fakeUser = function () {
                return {
                    displayName: "User",
                    fullName: "User",
                    roles: [],
                    username: "User"
                };
            };
            var infoToUser = function () {
                var ui = _this.keycloak.userInfo;
                return {
                    displayName: ui.given_name,
                    fullName: ui.name,
                    roles: [],
                    username: ui.preferred_username
                };
            };
            _this.keycloak.init(initOptions)
                .then(function (authenticated) {
                if (authenticated) {
                    _this.keycloak.loadUserInfo().then(function () {
                        _this.user = infoToUser();
                        addRoles(_this.user);
                        onAuthenticatedCallback();
                    }).catch(function () {
                        _this.user = fakeUser();
                        addRoles(_this.user);
                        onAuthenticatedCallback();
                    });
                }
                else {
                    auth_service_console.warn("Not authenticated!");
                    _this.doLogin();
                }
            });
        };
        this.isAuthenticated = function () { return _this.keycloak.authenticated; };
        this.doLogin = function () { return _this.keycloak.login; };
        this.doLogout = function () { return _this.keycloak.logout; };
        this.getToken = function () { return _this.keycloak.token; };
        // @ts-ignore
        this.updateKeycloakToken = function (successCallback) {
            return _this.keycloak.updateToken(5)
                .then(successCallback)
                .catch(_this.doLogin);
        };
    }
    AuthService.prototype.isAuthEnabled = function () {
        return this.enabled;
    };
    AuthService.prototype.isUserAdmin = function () {
        if (!this.isAuthEnabled()) {
            return true;
        }
        var rval = false;
        this.user.roles.forEach(function (role) {
            if (role === "sr-admin") {
                rval = true;
            }
        });
        return rval;
    };
    AuthService.prototype.isUserDeveloper = function () {
        if (!this.isAuthEnabled()) {
            return true;
        }
        var rval = false;
        this.user.roles.forEach(function (role) {
            if (role === "sr-admin" || role === "sr-developer") {
                rval = true;
            }
        });
        return rval;
    };
    AuthService.prototype.authenticateAndRender = function (render) {
        if (this.config.authType() === "keycloakjs") {
            this.enabled = true;
            this.authenticateUsingKeycloak(render);
        }
        else {
            this.enabled = false;
            render();
        }
    };
    AuthService.prototype.getAuthInterceptor = function () {
        var _this = this;
        var self = this;
        var interceptor = function (config) {
            if (self.config.authType() === "keycloakjs") {
                return self.updateKeycloakToken(function () {
                    config.headers.Authorization = "Bearer " + _this.getToken();
                    return Promise.resolve(config);
                });
            }
            else {
                return Promise.resolve(config);
            }
        };
        return interceptor;
    };
    return AuthService;
}());


;// CONCATENATED MODULE: ./src/services/auth/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


;// CONCATENATED MODULE: ./src/services/services.ts
/* provided dependency */ var services_console = __webpack_require__(25108);
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * Class that provides access to all of the services in the application.
 */
var Services = /** @class */ (function () {
    function Services() {
    }
    Services.getGroupsService = function () {
        return Services.all.groups;
    };
    Services.getConfigService = function () {
        return Services.all.config;
    };
    Services.getDownloaderService = function () {
        return Services.all.downloader;
    };
    Services.getLoggerService = function () {
        return Services.all.logger;
    };
    Services.getAdminService = function () {
        return Services.all.admin;
    };
    Services.getAuthService = function () {
        return Services.all.auth;
    };
    // tslint:disable-next-line:member-ordering member-access
    Services._intialize = function () {
        services_console.info("[Services] _initialize() in Services");
        if (Services._isInit) {
            services_console.info("[Services] Services already intialized...skipping.");
            return;
        }
        services_console.info("[Services] Actually initializing Services!!!");
        // First perform simple service-service injection.
        Object.keys(Services.all).forEach(function (svcToInjectIntoName) {
            var svcToInjectInto = Services.all[svcToInjectIntoName];
            Object.keys(Services.all).filter(function (key) { return key !== svcToInjectIntoName; }).forEach(function (injectableSvcKey) {
                if (svcToInjectInto[injectableSvcKey] !== undefined && svcToInjectInto[injectableSvcKey] === null) {
                    svcToInjectInto[injectableSvcKey] = Services.all[injectableSvcKey];
                }
            });
        });
        // Once that's done, init() all the services
        Object.keys(Services.all).forEach(function (svcToInjectIntoName) {
            var svcToInit = Services.all[svcToInjectIntoName];
            svcToInit.init();
        });
        Services._isInit = true;
        Services.getLoggerService().info("[Services] Services successfully initialized.");
    };
    Services._isInit = false;
    Services.all = {
        groups: new GroupsService(),
        config: new ConfigService(),
        downloader: new DownloaderService(),
        admin: new AdminService(),
        logger: new LoggerService(),
        auth: new AuthService()
    };
    return Services;
}());

Services._intialize();

;// CONCATENATED MODULE: ./src/services/index.ts
/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









/***/ }),

/***/ 95762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/apicurio_logo_darkbkg_350px.png";

/***/ }),

/***/ 3686:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAB6VBMVEUAAAD///////+/v7/////////////////////////////////////////////////////////////////////Z2dn////b29v////////////////////////////////////////////////////////////////////MzMzNzc3////////////W1tb////W1tb////////Ly8v////////W1tb////////////////////////////////////////////////Nzc3AwMD////////////////////////////////////////////////AwMDIyMj///////////+1tbW3t7f///////////+7u7vCwsL///++vr6/v7////+pqamqqqqrq6usrKyurq6vrq+wsLCxsLCxsbGysrKzs7O1tLS1tbW3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDCwsLDw8PExMTFxcXGxsbIyMjJycnLy8vMzMzOzs7Qz8/Q0NDT09PY2NjZ2dnc3Nze3t7f39/g4ODh4eHi4uLj4+Pl5eXm5ubp6enq6uru7u7v7+/w8PDx8fHy8vLz8vPz8/P08/P09PT29vb4+Pj6+vr7+/v8/Pz9/f3+/v7///8xQE+pAAAAYXRSTlMAAQIEBgcODxARHiAiJSYnKDs9PkBDRUZGR0lKT1BWWFtdXmNkZ2xub3R2d4eIioqOj5GSkpOUlJWio7i5u7zExtfY2tve3+Dh4uPk5ejp7O3v8PHy8/j4+vv8/f39/v7+w68SqgAAAAFiS0dEorDd34wAAAHpSURBVBgZdcEHQ1JRGAbgD6Rpe9reWFlZlu29t5ZRQotTeFL0gnxhGaVFNjCaJjYkwPeXdsF7Dpfh81AJx7w17oYG9+q5DpqCc8Xh67BcO1TnpEqOjadR4tR6B5VZcBIVTsynEus8qOLWWrLZ6kdV9+tJ24Kp+DeTZYkPysSPD0Pvv/2D5l1EBbOuQvnVJ5+EmfuS0C7PoLyDUP70yM5ezvsIrYlMc7xQnkkZ5kkjUNpriegAlO9SdrElDm0fkasFyjspe9gSzUFpnUaroL2W0mAlDa2OGqG9ldJgJQNtJx2HlpQyyJZXKDpKF6FlDCl7edInFJ0nD4q+ShnkgoEcitrIB5tEp+yOMPNgGjY+8sBu7I3RFRr8nINdG11AmewEypyjY7DLjv9Opf6Op3OwOUKNULJf4s/Z8nRgOANlB62EZfQFl+j/CcsycrWgYDTKZaIjKGh1ETUjLxvjCv1Z5DUR0ex2mBJcRQKm9loyNcMU4ypewrSH8mZeAVJc1RhwaToVLPZimE2R7hCXSsK7kCwb/HFmjgSEwZbw40BXiHnIv4m0+n5mDgphsPJICBHmmJtsdj9g7hDCYKVDCBF8uItKLL/JASEMVoJCiBtLqYxz/x0hDFZC4vZeJ1Wq2X72LlvundlWQ9p/X4kh1YBMq44AAAAASUVORK5CYII="

/***/ })

}]);
//# sourceMappingURL=737.bundle.4e5d81fc688b01425608.js.map