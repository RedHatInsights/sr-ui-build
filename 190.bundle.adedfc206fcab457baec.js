"use strict";
(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[190,755],{

/***/ 24754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "If": () => (/* binding */ If)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52445);
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
 * indicated condition is true.
 */
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    function If(props) {
        return _super.call(this, props) || this;
    }
    If.prototype.render = function () {
        if (this.accept()) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { children: this.props.children });
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
        }
    };
    If.prototype.initializeState = function () {
        return {};
    };
    If.prototype.accept = function () {
        if (typeof this.props.condition === "boolean") {
            return this.props.condition;
        }
        else {
            return this.props.condition();
        }
    };
    return If;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .V));



/***/ }),

/***/ 67030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ IfAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52445);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46768);
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
            rval = rval && (auth.isAuthenticationEnabled() === this.props.enabled);
        }
        if (this.props.isAuthenticated !== undefined) {
            rval = rval && (auth.isAuthenticated() === this.props.isAuthenticated);
        }
        if (this.props.isAdmin !== undefined) {
            rval = rval && (auth.isUserAdmin() === this.props.isAdmin);
        }
        if (this.props.isDeveloper !== undefined) {
            rval = rval && (auth.isUserDeveloper(this.props.owner) === this.props.isDeveloper);
        }
        return rval;
    };
    return IfAuth;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .V));



/***/ }),

/***/ 13294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ IfFeature)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52445);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46768);
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

/***/ 99415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ RootPageHeader)
});

// UNUSED EXPORTS: AppHeader

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: ./src/app/components/header/apicurio_logo_darkbkg_350px.png
var apicurio_logo_darkbkg_350px = __webpack_require__(95762);
var apicurio_logo_darkbkg_350px_default = /*#__PURE__*/__webpack_require__.n(apicurio_logo_darkbkg_350px);
// EXTERNAL MODULE: ./src/app/components/baseComponent.ts
var baseComponent = __webpack_require__(52445);
// EXTERNAL MODULE: ./src/app/components/common/ifAuth.tsx
var ifAuth = __webpack_require__(67030);
// EXTERNAL MODULE: ./src/app/components/header/avatarDropdown.tsx
var avatarDropdown = __webpack_require__(50402);
;// CONCATENATED MODULE: ./src/app/components/header/header.tsx
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







var AppHeader = /** @class */ (function (_super) {
    __extends(AppHeader, _super);
    function AppHeader(props) {
        return _super.call(this, props) || this;
    }
    AppHeader.prototype.render = function () {
        var pageToolbar;
        pageToolbar = (index_js_eager_default().createElement(index_js_.PageHeaderTools, { className: "header-toolbar" },
            index_js_eager_default().createElement(index_js_.PageHeaderToolsGroup, null,
                index_js_eager_default().createElement(index_js_.PageHeaderToolsItem, { id: "avatar" },
                    index_js_eager_default().createElement(ifAuth/* IfAuth */.N, { enabled: true },
                        index_js_eager_default().createElement(avatarDropdown/* AvatarDropdown */.K, null))))));
        return (index_js_eager_default().createElement(index_js_.PageHeader, { logo: index_js_eager_default().createElement(index_js_.Brand, { onClick: this.navigateTo(this.linkTo("/artifacts")), src: (apicurio_logo_darkbkg_350px_default()), alt: "Apicurio Registry" }), showNavToggle: false, headerTools: pageToolbar }));
    };
    AppHeader.prototype.initializeState = function () {
        return {};
    };
    return AppHeader;
}(baseComponent/* PureComponent */.V));


// EXTERNAL MODULE: ./src/app/components/common/index.ts + 1 modules
var common = __webpack_require__(72672);
// EXTERNAL MODULE: ./src/services/index.ts + 16 modules
var services = __webpack_require__(46768);
;// CONCATENATED MODULE: ./src/app/components/header/pageheader.tsx
var pageheader_extends = (undefined && undefined.__extends) || (function () {
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
 * Copyright 2021 JBoss Inc
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
 * Models the page header for the Artifacts page.
 */
var RootPageHeader = /** @class */ (function (_super) {
    pageheader_extends(RootPageHeader, _super);
    function RootPageHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTabClick = function (event, eventKey) {
            if (eventKey != _this.props.tabKey) {
                if (eventKey == 0) {
                    // navigate to artifacts
                    _this.navigateTo(_this.linkTo("/artifacts"))();
                }
                if (eventKey == 1) {
                    // navigate to global rules
                    _this.navigateTo(_this.linkTo("/rules"))();
                }
                if (eventKey == 2) {
                    // navigate to permissions page
                    _this.navigateTo(_this.linkTo("/roles"))();
                }
            }
        };
        return _this;
    }
    RootPageHeader.prototype.render = function () {
        var tabs = [
            index_js_eager_default().createElement(index_js_.Tab, { eventKey: 0, title: index_js_eager_default().createElement(index_js_.TabTitleText, null, "Artifacts") }),
            index_js_eager_default().createElement(index_js_.Tab, { eventKey: 1, title: index_js_eager_default().createElement(index_js_.TabTitleText, null, "Global Rules") })
        ];
        if (services.Services.getConfigService().featureRoleManagement()) {
            tabs.push(index_js_eager_default().createElement(index_js_.Tab, { eventKey: 2, title: index_js_eager_default().createElement(index_js_.TabTitleText, null, "Permissions") }));
        }
        return (index_js_eager_default().createElement("div", null,
            index_js_eager_default().createElement(common/* IfAuth */.No, { isAdmin: true },
                index_js_eager_default().createElement(index_js_.Tabs, { activeKey: this.props.tabKey, onSelect: this.handleTabClick, children: tabs }))));
    };
    RootPageHeader.prototype.initializeState = function () {
        return {};
    };
    return RootPageHeader;
}(baseComponent/* PureComponent */.V));


;// CONCATENATED MODULE: ./src/app/components/header/index.ts
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

/***/ 65831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schemaMapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90426);
/* harmony import */ var _federated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69910);
/**
 * @license
 * Copyright 2021 Red Hat
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


var FederatedSchemaMapping = /** @class */ (function (_super) {
    __extends(FederatedSchemaMapping, _super);
    function FederatedSchemaMapping(props) {
        return _super.call(this, props) || this;
    }
    FederatedSchemaMapping.prototype.postConstruct = function () {
        _federated__WEBPACK_IMPORTED_MODULE_1__/* .FederatedUtils.updateConfiguration */ .m.updateConfiguration(this.props);
        _super.prototype.postConstruct.call(this);
    };
    return FederatedSchemaMapping;
}(_schemaMapping__WEBPACK_IMPORTED_MODULE_0__/* .SchemaMapping */ .F));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FederatedSchemaMapping);


/***/ }),

/***/ 70581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _artifacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83993);
/* harmony import */ var _federated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69910);
/**
 * @license
 * Copyright 2021 Red Hat
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


var FederatedArtifactsPage = /** @class */ (function (_super) {
    __extends(FederatedArtifactsPage, _super);
    function FederatedArtifactsPage(props) {
        return _super.call(this, props) || this;
    }
    FederatedArtifactsPage.prototype.postConstruct = function () {
        _federated__WEBPACK_IMPORTED_MODULE_1__/* .FederatedUtils.updateConfiguration */ .m.updateConfiguration(this.props);
        _super.prototype.postConstruct.call(this);
    };
    return FederatedArtifactsPage;
}(_artifacts__WEBPACK_IMPORTED_MODULE_0__/* .ArtifactsPage */ .y));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FederatedArtifactsPage);


/***/ }),

/***/ 84270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ye": () => (/* reexport safe */ _artifactList__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _artifactList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14198);
/* harmony import */ var _artifactGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37759);
/* harmony import */ var _artifactName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99350);
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

/***/ 73243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* reexport safe */ _empty__WEBPACK_IMPORTED_MODULE_0__.B)
/* harmony export */ });
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2377);
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

/***/ 80941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* reexport safe */ _toolbar__WEBPACK_IMPORTED_MODULE_0__.U)
/* harmony export */ });
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60210);
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

/***/ 70150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _uploadForm__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* harmony import */ var _uploadForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85428);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PageComponent)
/* harmony export */ });
/* unused harmony export PageErrorType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60553);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46768);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
        else if (this.isLoading()) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageSection, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageSectionVariants["default"], isFilled: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Flex, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Spinner, { size: "lg" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Loading, please wait..."))))));
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
        // If not loading anything, convert from null to empty array
        if (loaders == null) {
            loaders = [];
        }
        // Convert to array if not already
        if (!Array.isArray(loaders)) {
            loaders = [loaders];
        }
        // Always add the "update current user" loader
        loaders = __spreadArrays([
            _services__WEBPACK_IMPORTED_MODULE_2__.Services.getUsersService().updateCurrentUser()
        ], loaders);
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

/***/ 28172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ ArtifactMetaData)
/* harmony export */ });
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
var ArtifactMetaData = /** @class */ (function () {
    function ArtifactMetaData() {
    }
    return ArtifactMetaData;
}());



/***/ }),

/***/ 89023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ ArtifactTypes)
/* harmony export */ });
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
var ArtifactTypes = /** @class */ (function () {
    function ArtifactTypes() {
    }
    ArtifactTypes.AVRO = "AVRO";
    ArtifactTypes.PROTOBUF = "PROTOBUF";
    ArtifactTypes.JSON = "JSON";
    ArtifactTypes.OPENAPI = "OPENAPI";
    ArtifactTypes.ASYNCAPI = "ASYNCAPI";
    ArtifactTypes.GRAPHQL = "GRAPHQL";
    ArtifactTypes.KCONNECT = "KCONNECT";
    ArtifactTypes.WSDL = "WSDL";
    ArtifactTypes.XSD = "XSD";
    ArtifactTypes.XML = "XML";
    return ArtifactTypes;
}());



/***/ })

}]);
//# sourceMappingURL=190.bundle.adedfc206fcab457baec.js.map