(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[419],{

/***/ 79253:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);

;                (function() {
                    ace.require(["ace/mode/text"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ }),

/***/ 42557:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/theme/tomorrow",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-tomorrow";
exports.cssText = ".ace-tomorrow .ace_gutter {\
background: #f6f6f6;\
color: #4D4D4C\
}\
.ace-tomorrow .ace_print-margin {\
width: 1px;\
background: #f6f6f6\
}\
.ace-tomorrow {\
background-color: #FFFFFF;\
color: #4D4D4C\
}\
.ace-tomorrow .ace_cursor {\
color: #AEAFAD\
}\
.ace-tomorrow .ace_marker-layer .ace_selection {\
background: #D6D6D6\
}\
.ace-tomorrow.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-tomorrow .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-tomorrow .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #D1D1D1\
}\
.ace-tomorrow .ace_marker-layer .ace_active-line {\
background: #EFEFEF\
}\
.ace-tomorrow .ace_gutter-active-line {\
background-color : #dcdcdc\
}\
.ace-tomorrow .ace_marker-layer .ace_selected-word {\
border: 1px solid #D6D6D6\
}\
.ace-tomorrow .ace_invisible {\
color: #D1D1D1\
}\
.ace-tomorrow .ace_keyword,\
.ace-tomorrow .ace_meta,\
.ace-tomorrow .ace_storage,\
.ace-tomorrow .ace_storage.ace_type,\
.ace-tomorrow .ace_support.ace_type {\
color: #8959A8\
}\
.ace-tomorrow .ace_keyword.ace_operator {\
color: #3E999F\
}\
.ace-tomorrow .ace_constant.ace_character,\
.ace-tomorrow .ace_constant.ace_language,\
.ace-tomorrow .ace_constant.ace_numeric,\
.ace-tomorrow .ace_keyword.ace_other.ace_unit,\
.ace-tomorrow .ace_support.ace_constant,\
.ace-tomorrow .ace_variable.ace_parameter {\
color: #F5871F\
}\
.ace-tomorrow .ace_constant.ace_other {\
color: #666969\
}\
.ace-tomorrow .ace_invalid {\
color: #FFFFFF;\
background-color: #C82829\
}\
.ace-tomorrow .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #8959A8\
}\
.ace-tomorrow .ace_fold {\
background-color: #4271AE;\
border-color: #4D4D4C\
}\
.ace-tomorrow .ace_entity.ace_name.ace_function,\
.ace-tomorrow .ace_support.ace_function,\
.ace-tomorrow .ace_variable {\
color: #4271AE\
}\
.ace-tomorrow .ace_support.ace_class,\
.ace-tomorrow .ace_support.ace_type {\
color: #C99E00\
}\
.ace-tomorrow .ace_heading,\
.ace-tomorrow .ace_markup.ace_heading,\
.ace-tomorrow .ace_string {\
color: #718C00\
}\
.ace-tomorrow .ace_entity.ace_name.ace_tag,\
.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,\
.ace-tomorrow .ace_meta.ace_tag,\
.ace-tomorrow .ace_string.ace_regexp,\
.ace-tomorrow .ace_variable {\
color: #C82829\
}\
.ace-tomorrow .ace_comment {\
color: #8E908C\
}\
.ace-tomorrow .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/tomorrow"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ }),

/***/ 35661:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 69910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* reexport */ FederatedUtils)
});

// EXTERNAL MODULE: ./src/services/index.ts + 14 modules
var services = __webpack_require__(94830);
// EXTERNAL MODULE: ./src/app/components/index.ts + 2 modules
var components = __webpack_require__(21467);
;// CONCATENATED MODULE: ./src/app/federated/federated-utils.ts
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


var FederatedUtils = /** @class */ (function () {
    function FederatedUtils() {
    }
    FederatedUtils.updateConfiguration = function (props) {
        services.Services.getLoggerService().info("[FederatedUtils] Updating config: %o", props.config);
        services.Services.getConfigService().updateConfig(props.config);
        components/* PureComponent.setHistory */.Vx.setHistory(props.history);
    };
    return FederatedUtils;
}());


;// CONCATENATED MODULE: ./src/app/federated/index.ts
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

/***/ 37854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ artifact_federated)
});

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@=5.2.0 (singleton) (fallback: ./node_modules/react-router-dom/esm/react-router-dom.js)
var react_router_dom_js_ = __webpack_require__(55399);
// EXTERNAL MODULE: ./src/app/pages/basePage.tsx
var basePage = __webpack_require__(26619);
// EXTERNAL MODULE: consume shared module (default) react-router@=5.2.0 (strict) (fallback: ./node_modules/react-router/esm/react-router.js)
var react_router_js_ = __webpack_require__(50337);
// EXTERNAL MODULE: ./src/services/index.ts + 14 modules
var services = __webpack_require__(94830);
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
 * The artifact details redirect page.
 */
var ArtifactRedirectPage = /** @class */ (function (_super) {
    __extends(ArtifactRedirectPage, _super);
    function ArtifactRedirectPage(props) {
        return _super.call(this, props) || this;
    }
    ArtifactRedirectPage.prototype.renderPage = function () {
        var groupId = this.groupIdParam();
        var artifactId = this.artifactIdParam();
        var redirect = this.linkTo("/artifacts/" + encodeURIComponent(groupId) + "/" + encodeURIComponent(artifactId) + "/versions/latest");
        services.Services.getLoggerService().info("[ArtifactRedirectPage] Redirecting to: %s", redirect);
        return (index_js_eager_default().createElement(react_router_dom_js_.BrowserRouter, null,
            index_js_eager_default().createElement(react_router_js_.Redirect, { to: redirect })));
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


// EXTERNAL MODULE: ./src/app/federated/index.ts + 1 modules
var federated = __webpack_require__(69910);
;// CONCATENATED MODULE: ./src/app/pages/artifact/artifact.federated.tsx
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
var artifact_federated_extends = (undefined && undefined.__extends) || (function () {
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


var FederatedArtifactRedirectPage = /** @class */ (function (_super) {
    artifact_federated_extends(FederatedArtifactRedirectPage, _super);
    function FederatedArtifactRedirectPage(props) {
        return _super.call(this, props) || this;
    }
    FederatedArtifactRedirectPage.prototype.postConstruct = function () {
        federated/* FederatedUtils.updateConfiguration */.m.updateConfiguration(this.props);
        _super.prototype.postConstruct.call(this);
    };
    FederatedArtifactRedirectPage.prototype.groupIdParam = function () {
        return this.props.groupId;
    };
    FederatedArtifactRedirectPage.prototype.artifactIdParam = function () {
        return this.props.artifactId;
    };
    return FederatedArtifactRedirectPage;
}(ArtifactRedirectPage));
/* harmony default export */ const artifact_federated = (FederatedArtifactRedirectPage);


/***/ }),

/***/ 28172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
//# sourceMappingURL=419.bundle.ad8f822ff54cdc0f2a68.js.map