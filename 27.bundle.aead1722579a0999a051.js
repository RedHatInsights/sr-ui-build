"use strict";
(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[27,755,528],{

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
  "t": () => (/* reexport */ AppHeader),
  "N": () => (/* reexport */ RootPageHeader)
});

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
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FederatedSchemaMapping)));


/***/ }),

/***/ 20301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* reexport safe */ _editMetaDataModal__WEBPACK_IMPORTED_MODULE_0__.X)
/* harmony export */ });
/* harmony import */ var _editMetaDataModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7477);
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

/***/ 15392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* reexport safe */ _pageheader__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _pageheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96597);
/* harmony import */ var _version_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70823);
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

/***/ 93692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IK": () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "pX": () => (/* reexport safe */ _documentation__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "fP": () => (/* reexport safe */ _info__WEBPACK_IMPORTED_MODULE_2__.f)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11054);
/* harmony import */ var _documentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54882);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87578);
/* harmony import */ var _errorTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75921);
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

/***/ 5571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* reexport safe */ _uploadForm__WEBPACK_IMPORTED_MODULE_0__.G)
/* harmony export */ });
/* harmony import */ var _uploadForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95042);
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

/***/ 11940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gx": () => (/* reexport safe */ _empty__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "st": () => (/* reexport safe */ _roleList__WEBPACK_IMPORTED_MODULE_1__.s),
/* harmony export */   "C0": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_2__.C)
/* harmony export */ });
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19595);
/* harmony import */ var _roleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41016);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38166);
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

/***/ 16455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) react-dom@=17.0.1 (singleton) (fallback: ./node_modules/react-dom/index.js) (eager)
var react_dom_index_js_eager_ = __webpack_require__(61568);
var react_dom_index_js_eager_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_eager_);
;// CONCATENATED MODULE: ./node_modules/@patternfly/react-core/dist/styles/base.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@=5.2.1 (singleton) (fallback: ./node_modules/react-router-dom/esm/react-router-dom.js) (eager)
var react_router_dom_js_eager_ = __webpack_require__(98068);
// EXTERNAL MODULE: ./src/app/components/header/index.ts + 2 modules
var header = __webpack_require__(99415);
// EXTERNAL MODULE: ./src/app/pages/basePage.tsx
var basePage = __webpack_require__(26619);
// EXTERNAL MODULE: ./src/app/components/ruleList/index.ts + 3 modules
var ruleList = __webpack_require__(66333);
// EXTERNAL MODULE: ./src/services/index.ts + 16 modules
var services = __webpack_require__(46768);
// EXTERNAL MODULE: ./src/app/components/index.ts + 3 modules
var components = __webpack_require__(60553);
;// CONCATENATED MODULE: ./src/app/pages/rules/rules.tsx
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







/**
 * The global rules page.
 */
var RulesPage = /** @class */ (function (_super) {
    __extends(RulesPage, _super);
    function RulesPage(props) {
        var _this = _super.call(this, props) || this;
        _this.doEnableRule = function (ruleType) {
            services.Services.getLoggerService().debug("[RulesPage] Enabling global rule:", ruleType);
            var config = "FULL";
            if (ruleType === "COMPATIBILITY") {
                config = "BACKWARD";
            }
            services.Services.getAdminService().createRule(ruleType, config).catch(function (error) {
                _this.handleServerError(error, "Error enabling \"" + ruleType + "\" global rule.");
            });
            _this.setSingleState("rules", __spreadArrays(_this.rules(), [{ config: config, type: ruleType }]));
        };
        _this.doDisableRule = function (ruleType) {
            services.Services.getLoggerService().debug("[RulesPage] Disabling global rule:", ruleType);
            services.Services.getAdminService().deleteRule(ruleType).catch(function (error) {
                _this.handleServerError(error, "Error disabling \"" + ruleType + "\" global rule.");
            });
            _this.setSingleState("rules", _this.rules().filter(function (r) { return r.type !== ruleType; }));
        };
        _this.doConfigureRule = function (ruleType, config) {
            services.Services.getLoggerService().debug("[RulesPage] Configuring global rule:", ruleType, config);
            services.Services.getAdminService().updateRule(ruleType, config).catch(function (error) {
                _this.handleServerError(error, "Error configuring \"" + ruleType + "\" global rule.");
            });
            _this.setSingleState("rules", _this.rules().map(function (r) {
                if (r.type === ruleType) {
                    return { config: config, type: r.type };
                }
                else {
                    return r;
                }
            }));
        };
        return _this;
    }
    RulesPage.prototype.renderPage = function () {
        return (index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
            index_js_eager_default().createElement(index_js_.PageSection, { className: "ps_rules-header", variant: index_js_.PageSectionVariants.light, padding: { default: "noPadding" } },
                index_js_eager_default().createElement(components/* RootPageHeader */.N4, { tabKey: 1 })),
            index_js_eager_default().createElement(index_js_.PageSection, { className: "ps_rules-description", variant: index_js_.PageSectionVariants.light },
                index_js_eager_default().createElement(index_js_.TextContent, null, "Manage the list of Global Rules configured for the Registry below.  Rules can be enabled/disabled and also individually configured.")),
            index_js_eager_default().createElement(index_js_.PageSection, { variant: index_js_.PageSectionVariants["default"], isFilled: true },
                index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
                    index_js_eager_default().createElement(ruleList/* RuleList */.RB, { rules: this.rules(), onEnableRule: this.doEnableRule, onDisableRule: this.doDisableRule, onConfigureRule: this.doConfigureRule })))));
    };
    RulesPage.prototype.initializePageState = function () {
        return {
            isLoading: true,
            rules: null
        };
    };
    // @ts-ignore
    RulesPage.prototype.createLoaders = function () {
        var _this = this;
        return services.Services.getAdminService().getRules().then(function (rules) {
            _this.setMultiState({
                isLoading: false,
                rules: rules
            });
        });
    };
    RulesPage.prototype.rules = function () {
        if (this.state.rules) {
            return this.state.rules;
        }
        else {
            return [];
        }
    };
    return RulesPage;
}(basePage/* PageComponent */.I));


;// CONCATENATED MODULE: ./src/app/pages/rules/index.ts
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



// EXTERNAL MODULE: ./src/app/pages/artifacts/artifacts.tsx
var artifacts = __webpack_require__(83993);
// EXTERNAL MODULE: ./src/app/pages/artifacts/components/artifactList/index.ts
var artifactList = __webpack_require__(84270);
// EXTERNAL MODULE: ./src/app/pages/artifacts/components/empty/index.ts
var empty = __webpack_require__(73243);
// EXTERNAL MODULE: ./src/app/pages/artifacts/components/toolbar/index.ts
var toolbar = __webpack_require__(80941);
// EXTERNAL MODULE: ./src/app/pages/artifacts/components/uploadForm/index.ts
var uploadForm = __webpack_require__(70150);
;// CONCATENATED MODULE: ./src/app/pages/artifacts/components/index.ts
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





;// CONCATENATED MODULE: ./src/app/pages/artifacts/index.ts
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



;// CONCATENATED MODULE: ./src/app/pages/artifact/artifact.tsx
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
var artifact_extends = (undefined && undefined.__extends) || (function () {
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
 * The artifact details redirect page.
 */
var ArtifactRedirectPage = /** @class */ (function (_super) {
    artifact_extends(ArtifactRedirectPage, _super);
    function ArtifactRedirectPage(props) {
        return _super.call(this, props) || this;
    }
    ArtifactRedirectPage.prototype.renderPage = function () {
        var groupId = this.groupIdParam();
        var artifactId = this.artifactIdParam();
        var redirect = this.linkTo("/artifacts/" + encodeURIComponent(groupId) + "/" + encodeURIComponent(artifactId) + "/versions/latest");
        services.Services.getLoggerService().info("[ArtifactRedirectPage] Redirecting to: %s", redirect);
        return (index_js_eager_default().createElement(react_router_dom_js_eager_.Redirect, { to: redirect }));
    };
    ArtifactRedirectPage.prototype.groupIdParam = function () {
        return this.getPathParam("groupId");
    };
    ArtifactRedirectPage.prototype.artifactIdParam = function () {
        return this.getPathParam("artifactId");
    };
    ArtifactRedirectPage.prototype.initializePageState = function () {
        return {};
    };
    return ArtifactRedirectPage;
}(basePage/* PageComponent */.I));


;// CONCATENATED MODULE: ./src/app/pages/artifact/index.ts
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


// EXTERNAL MODULE: ./src/app/pages/artifactVersion/components/pageheader/index.ts
var pageheader = __webpack_require__(15392);
// EXTERNAL MODULE: ./src/app/pages/artifactVersion/components/modals/index.ts
var modals = __webpack_require__(20301);
// EXTERNAL MODULE: ./src/app/pages/artifactVersion/components/tabs/index.ts
var tabs = __webpack_require__(93692);
// EXTERNAL MODULE: ./src/app/pages/artifactVersion/components/uploadForm/index.ts
var components_uploadForm = __webpack_require__(5571);
;// CONCATENATED MODULE: ./src/app/pages/artifactVersion/components/index.ts
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





// EXTERNAL MODULE: ./src/app/pages/artifactVersion/artifactVersion.tsx
var artifactVersion = __webpack_require__(10564);
;// CONCATENATED MODULE: ./src/app/pages/artifactVersion/index.ts
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



// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./src/app/pages/root/root.tsx
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
var root_extends = (undefined && undefined.__extends) || (function () {
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
 * The artifact details redirect page.
 */
var RootRedirectPage = /** @class */ (function (_super) {
    root_extends(RootRedirectPage, _super);
    function RootRedirectPage(props) {
        return _super.call(this, props) || this;
    }
    RootRedirectPage.prototype.renderPage = function () {
        var redirect = "/artifacts";
        return (index_js_eager_default().createElement(react_router/* Redirect */.l_, { to: redirect }));
    };
    RootRedirectPage.prototype.initializePageState = function () {
        return {};
    };
    return RootRedirectPage;
}(basePage/* PageComponent */.I));


;// CONCATENATED MODULE: ./src/app/pages/root/index.ts
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


// EXTERNAL MODULE: consume shared module (default) @patternfly/react-icons@=4.10.7 (strict) (fallback: ./node_modules/@patternfly/react-icons/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(93179);
;// CONCATENATED MODULE: ./src/app/pages/404/404.tsx
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
var _404_extends = (undefined && undefined.__extends) || (function () {
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
 * The global rules page.
 */
var NotFoundPage = /** @class */ (function (_super) {
    _404_extends(NotFoundPage, _super);
    function NotFoundPage(props) {
        return _super.call(this, props) || this;
    }
    NotFoundPage.prototype.renderPage = function () {
        return (index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
            index_js_eager_default().createElement(index_js_.PageSection, { className: "ps_rules-header", variant: index_js_.PageSectionVariants.light },
                index_js_eager_default().createElement(index_js_.EmptyState, { variant: index_js_.EmptyStateVariant.full },
                    index_js_eager_default().createElement(index_js_.EmptyStateIcon, { icon: esm_index_js_.ExclamationCircleIcon }),
                    index_js_eager_default().createElement(index_js_.Title, { headingLevel: "h5", size: "lg" }, "404 Error: page not found"),
                    index_js_eager_default().createElement(index_js_.EmptyStateBody, null, "This page couldn't be found.  If you think this is a bug, please report the issue."),
                    index_js_eager_default().createElement(index_js_.Button, { variant: "primary", "data-testid": "error-btn-artifacts", onClick: this.navigateTo(this.linkTo("/artifacts")) }, "Show all artifacts")))));
    };
    NotFoundPage.prototype.initializePageState = function () {
        return {};
    };
    return NotFoundPage;
}(basePage/* PageComponent */.I));


;// CONCATENATED MODULE: ./src/app/pages/404/index.ts
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


// EXTERNAL MODULE: ./src/app/pages/roles/components/index.ts
var roles_components = __webpack_require__(11940);
// EXTERNAL MODULE: ./src/app/pages/roles/roles.tsx
var roles = __webpack_require__(54896);
;// CONCATENATED MODULE: ./src/app/pages/roles/index.ts
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



;// CONCATENATED MODULE: ./src/app/pages/index.ts
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








;// CONCATENATED MODULE: ./src/app/app.tsx
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
var app_extends = (undefined && undefined.__extends) || (function () {
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
 * The main application class.
 */
var App = /** @class */ (function (_super) {
    app_extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        var contextPath = services.Services.getConfigService().uiContextPath();
        services.Services.getLoggerService().info("[App] Using app contextPath: ", contextPath);
        // Function to force the Artifact Version Page to fully remount each time we navigate to it.  This
        // is needed because we want the page to fully rerender whenever the browser location changes, which
        // happens when switching between versions of the artifact content (e.g. switch from version 1 to version 3).
        var artifactVersionPage = function (props) {
            var location = props.location.pathname;
            return (index_js_eager_default().createElement(artifactVersion/* ArtifactVersionPage */.C, __assign({ key: location }, props)));
        };
        return (index_js_eager_default().createElement(react_router_dom_js_eager_.BrowserRouter, { basename: contextPath },
            index_js_eager_default().createElement(index_js_.Page, { className: "pf-m-redhat-font", isManagedSidebar: false, header: index_js_eager_default().createElement(header/* AppHeader */.t, null) },
                index_js_eager_default().createElement(react_router_dom_js_eager_.Switch, null,
                    index_js_eager_default().createElement(react_router_dom_js_eager_.Route, { path: '/', exact: true, component: RootRedirectPage }),
                    index_js_eager_default().createElement(react_router_dom_js_eager_.Route, { path: '/rules', exact: true, component: RulesPage }),
                    index_js_eager_default().createElement(react_router_dom_js_eager_.Route, { path: '/roles', exact: true, component: roles/* RolesPage */.s }),
                    index_js_eager_default().createElement(react_router_dom_js_eager_.Route, { path: '/artifacts', exact: true, component: artifacts/* ArtifactsPage */.y }),
                    index_js_eager_default().createElement(react_router_dom_js_eager_.Route, { path: '/artifacts/:groupId/:artifactId', exact: true, component: ArtifactRedirectPage }),
                    index_js_eager_default().createElement(react_router_dom_js_eager_.Route, { path: '/artifacts/:groupId/:artifactId/versions/:version', exact: true, component: artifactVersionPage }),
                    index_js_eager_default().createElement(react_router_dom_js_eager_.Route, { component: NotFoundPage })))));
    };
    return App;
}((index_js_eager_default()).PureComponent));
/* harmony default export */ const app = (App);

;// CONCATENATED MODULE: ./src/bootstrap.tsx






var renderApp = function () { return react_dom_index_js_eager_default().render(index_js_eager_default().createElement(app, null), document.getElementById("root")); };
services.Services.getAuthService().authenticateAndRender(renderApp);


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
//# sourceMappingURL=27.bundle.aead1722579a0999a051.js.map