"use strict";
(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[755],{

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
//# sourceMappingURL=755.bundle.c0e56ec32de2ea0ef77b.js.map