"use strict";
(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[982],{

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

/***/ 10564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ ArtifactVersionPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26619);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93692);
/* harmony import */ var _components_pageheader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15392);
/* harmony import */ var _components_uploadForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5571);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98068);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20301);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49746);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21467);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19162);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46768);
/* harmony import */ var _components_modals_pleaseWaitModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38304);
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














function is404(e) {
    if (typeof e === "string") {
        try {
            var eo = JSON.parse(e);
            if (eo && eo.error_code && eo.error_code === 404) {
                return true;
            }
        }
        catch (e) {
            // Do nothing
        }
    }
    return false;
}
/**
 * The artifacts page.
 */
var ArtifactVersionPage = /** @class */ (function (_super) {
    __extends(ArtifactVersionPage, _super);
    function ArtifactVersionPage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTabClick = function (event, tabIndex) {
            _this.setSingleState("activeTabKey", tabIndex);
        };
        _this.onUploadVersion = function () {
            _this.setSingleState("isUploadModalOpen", true);
        };
        _this.onDeleteArtifact = function () {
            _this.setSingleState("isDeleteModalOpen", true);
        };
        _this.doEnableRule = function (ruleType) {
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getLoggerService().debug("[ArtifactVersionPage] Enabling rule:", ruleType);
            var config = "FULL";
            if (ruleType === "COMPATIBILITY") {
                config = "BACKWARD";
            }
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().createArtifactRule(_this.groupId(), _this.artifactId(), ruleType, config).catch(function (error) {
                _this.handleServerError(error, "Error enabling \"" + ruleType + "\" artifact rule.");
            });
            _this.setSingleState("rules", __spreadArrays(_this.rules(), [{ config: config, type: ruleType }]));
        };
        _this.doDisableRule = function (ruleType) {
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getLoggerService().debug("[ArtifactVersionPage] Disabling rule:", ruleType);
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().deleteArtifactRule(_this.groupId(), _this.artifactId(), ruleType).catch(function (error) {
                _this.handleServerError(error, "Error disabling \"" + ruleType + "\" artifact rule.");
            });
            _this.setSingleState("rules", _this.rules().filter(function (r) { return r.type !== ruleType; }));
        };
        _this.doConfigureRule = function (ruleType, config) {
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getLoggerService().debug("[ArtifactVersionPage] Configuring rule:", ruleType, config);
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().updateArtifactRule(_this.groupId(), _this.artifactId(), ruleType, config).catch(function (error) {
                _this.handleServerError(error, "Error configuring \"" + ruleType + "\" artifact rule.");
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
        _this.doDownloadArtifact = function () {
            var _a, _b, _c, _d, _e;
            var content = _this.state.artifactContent;
            var contentType = _models__WEBPACK_IMPORTED_MODULE_10__.ContentTypes.APPLICATION_JSON;
            var fext = "json";
            if (((_a = _this.state.artifact) === null || _a === void 0 ? void 0 : _a.type) === _models__WEBPACK_IMPORTED_MODULE_10__.ArtifactTypes.PROTOBUF) {
                contentType = _models__WEBPACK_IMPORTED_MODULE_10__.ContentTypes.APPLICATION_PROTOBUF;
                fext = "proto";
            }
            if (((_b = _this.state.artifact) === null || _b === void 0 ? void 0 : _b.type) === _models__WEBPACK_IMPORTED_MODULE_10__.ArtifactTypes.WSDL) {
                contentType = _models__WEBPACK_IMPORTED_MODULE_10__.ContentTypes.APPLICATION_XML;
                fext = "wsdl";
            }
            if (((_c = _this.state.artifact) === null || _c === void 0 ? void 0 : _c.type) === _models__WEBPACK_IMPORTED_MODULE_10__.ArtifactTypes.XSD) {
                contentType = _models__WEBPACK_IMPORTED_MODULE_10__.ContentTypes.APPLICATION_XML;
                fext = "xsd";
            }
            if (((_d = _this.state.artifact) === null || _d === void 0 ? void 0 : _d.type) === _models__WEBPACK_IMPORTED_MODULE_10__.ArtifactTypes.XML) {
                contentType = _models__WEBPACK_IMPORTED_MODULE_10__.ContentTypes.APPLICATION_XML;
                fext = "xml";
            }
            if (((_e = _this.state.artifact) === null || _e === void 0 ? void 0 : _e.type) === _models__WEBPACK_IMPORTED_MODULE_10__.ArtifactTypes.GRAPHQL) {
                contentType = _models__WEBPACK_IMPORTED_MODULE_10__.ContentTypes.APPLICATION_JSON;
                fext = "graphql";
            }
            var fname = _this.artifactNameOrId() + "." + fext;
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getDownloaderService().downloadToFS(content, contentType, fname);
        };
        _this.onUploadFormValid = function (isValid) {
            _this.setSingleState("isUploadFormValid", isValid);
        };
        _this.onUploadFormChange = function (data) {
            _this.setSingleState("uploadFormData", data);
        };
        _this.onUploadModalClose = function () {
            _this.setSingleState("isUploadModalOpen", false);
        };
        _this.onDeleteModalClose = function () {
            _this.setSingleState("isDeleteModalOpen", false);
        };
        _this.doUploadArtifactVersion = function () {
            _this.onUploadModalClose();
            _this.pleaseWait(true, "Uploading new version, please wait...");
            if (_this.state.uploadFormData !== null) {
                var data = {
                    content: _this.state.uploadFormData,
                    type: _this.artifactType()
                };
                _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().createArtifactVersion(_this.groupId(), _this.artifactId(), data).then(function (versionMetaData) {
                    var groupId = versionMetaData.groupId ? versionMetaData.groupId : "default";
                    var artifactVersionLocation = "/artifacts/" + encodeURIComponent(groupId) + "/" + encodeURIComponent(versionMetaData.id) + "/versions/" + versionMetaData.version;
                    _services__WEBPACK_IMPORTED_MODULE_11__.Services.getLoggerService().info("[ArtifactVersionPage] Artifact version successfully uploaded.  Redirecting to details: ", artifactVersionLocation);
                    _this.navigateTo(_this.linkTo(artifactVersionLocation))();
                }).catch(function (error) {
                    _this.pleaseWait(false, "");
                    if (error && error.error_code === 409) {
                        _this.handleInvalidContentError(error);
                    }
                    else {
                        _this.handleServerError(error, "Error uploading artifact version.");
                    }
                });
            }
        };
        _this.doDeleteArtifact = function () {
            _this.onDeleteModalClose();
            _this.pleaseWait(true, "Deleting artifact, please wait...");
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().deleteArtifact(_this.groupId(), _this.artifactId()).then(function () {
                _this.pleaseWait(false, "");
                _this.navigateTo(_this.linkTo("/artifacts"))();
            });
        };
        _this.openEditMetaDataModal = function () {
            _this.setSingleState("isEditModalOpen", true);
        };
        _this.onEditModalClose = function () {
            _this.setSingleState("isEditModalOpen", false);
        };
        _this.doEditMetaData = function (metaData) {
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().updateArtifactMetaData(_this.groupId(), _this.artifactId(), _this.versionParam(), metaData).then(function () {
                if (_this.state.artifact) {
                    _this.setSingleState("artifact", __assign(__assign({}, _this.state.artifact), metaData));
                }
            }).catch(function (error) {
                _this.handleServerError(error, "Error editing artifact meta-data.");
            });
            _this.onEditModalClose();
        };
        _this.closeInvalidContentModal = function () {
            _this.setSingleState("isInvalidContentModalOpen", false);
        };
        _this.pleaseWait = function (isOpen, message) {
            _this.setMultiState({
                isPleaseWaitModalOpen: isOpen,
                pleaseWaitMessage: message
            });
        };
        return _this;
    }
    ArtifactVersionPage.prototype.renderPage = function () {
        var artifact = this.state.artifact ? this.state.artifact : new _models__WEBPACK_IMPORTED_MODULE_10__.ArtifactMetaData();
        var tabs = [
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, { eventKey: 0, title: "Info", key: "info", tabContentId: "tab-info" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tabs__WEBPACK_IMPORTED_MODULE_3__/* .InfoTabContent */ .fP, { artifact: artifact, rules: this.rules(), onEnableRule: this.doEnableRule, onDisableRule: this.doDisableRule, onConfigureRule: this.doConfigureRule, onDownloadArtifact: this.doDownloadArtifact, onEditMetaData: this.openEditMetaDataModal })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, { eventKey: 1, title: "Documentation", key: "documentation" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tabs__WEBPACK_IMPORTED_MODULE_3__/* .DocumentationTabContent */ .pX, { artifactContent: this.state.artifactContent, artifactType: artifact.type })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, { eventKey: 2, title: "Content", key: "content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tabs__WEBPACK_IMPORTED_MODULE_3__/* .ContentTabContent */ .IK, { artifactContent: this.state.artifactContent, artifactType: artifact.type })),
        ];
        if (!this.showDocumentationTab()) {
            tabs.splice(1, 1);
        }
        var groupId = this.groupIdParam();
        var hasGroup = groupId != "default";
        var breadcrumbs = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: this.linkTo("/artifacts"), "data-testid": "breadcrumb-lnk-artifacts" }, "Artifacts")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: this.linkTo("/artifacts?group=" + encodeURIComponent(groupId)), "data-testid": "breadcrumb-lnk-group" }, groupId)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, { isActive: true }, this.artifactId())));
        if (!hasGroup) {
            breadcrumbs = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: "/artifacts", "data-testid": "breadcrumb-lnk-artifacts" }, "Artifacts")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, { isActive: true }, this.artifactId())));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_9__/* .IfFeature */ .QT, { feature: "breadcrumbs", is: true },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { className: "ps_header-breadcrumbs", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light, children: breadcrumbs })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { className: "ps_artifact-version-header", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_4__/* .ArtifactVersionPageHeader */ .p, { title: this.nameOrId(), versions: this.versions(), version: this.versionParam(), onUploadVersion: this.onUploadVersion, onDeleteArtifact: this.onDeleteArtifact, groupId: groupId, artifactId: this.artifactId() })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light, isFilled: true, padding: { default: "noPadding" }, className: "artifact-details-main" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, { className: "artifact-page-tabs", id: "artifact-page-tabs", unmountOnExit: true, isFilled: false, activeKey: this.state.activeTabKey, children: tabs, onSelect: this.handleTabClick })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, { title: "Upload Artifact Version", variant: "large", isOpen: this.state.isUploadModalOpen, onClose: this.onUploadModalClose, className: "upload-artifact-modal pf-m-redhat-font", actions: [
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { key: "upload", variant: "primary", "data-testid": "modal-btn-upload", onClick: this.doUploadArtifactVersion, isDisabled: !this.state.isUploadFormValid }, "Upload"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { key: "cancel", variant: "link", "data-testid": "modal-btn-cancel", onClick: this.onUploadModalClose }, "Cancel")
                ] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_uploadForm__WEBPACK_IMPORTED_MODULE_5__/* .UploadVersionForm */ .G, { onChange: this.onUploadFormChange, onValid: this.onUploadFormValid })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, { title: "Delete Artifact", variant: "small", isOpen: this.state.isDeleteModalOpen, onClose: this.onDeleteModalClose, className: "delete-artifact-modal pf-m-redhat-font", actions: [
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { key: "delete", variant: "primary", "data-testid": "modal-btn-delete", onClick: this.doDeleteArtifact }, "Delete"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { key: "cancel", variant: "link", "data-testid": "modal-btn-cancel", onClick: this.onDeleteModalClose }, "Cancel")
                ] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Do you want to delete this artifact and all of its versions?  This action cannot be undone.")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modals__WEBPACK_IMPORTED_MODULE_7__/* .EditMetaDataModal */ .X, { name: this.artifactName(), description: this.artifactDescription(), labels: this.artifactLabels(), isOpen: this.state.isEditModalOpen, onClose: this.onEditModalClose, onEditMetaData: this.doEditMetaData }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modals__WEBPACK_IMPORTED_MODULE_8__/* .InvalidContentModal */ .R, { error: this.state.invalidContentError, isOpen: this.state.isInvalidContentModalOpen, onClose: this.closeInvalidContentModal }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modals_pleaseWaitModal__WEBPACK_IMPORTED_MODULE_12__/* .PleaseWaitModal */ .j, { message: this.state.pleaseWaitMessage, isOpen: this.state.isPleaseWaitModalOpen })));
    };
    ArtifactVersionPage.prototype.initializePageState = function () {
        return {
            activeTabKey: 0,
            artifact: null,
            artifactContent: "",
            artifactIsText: true,
            invalidContentError: null,
            isDeleteModalOpen: false,
            isEditModalOpen: false,
            isInvalidContentModalOpen: false,
            isLoading: true,
            isPleaseWaitModalOpen: false,
            isUploadFormValid: false,
            isUploadModalOpen: false,
            pleaseWaitMessage: "",
            rules: null,
            uploadFormData: null,
            versions: null
        };
    };
    ArtifactVersionPage.prototype.groupIdParam = function () {
        return this.getPathParam("groupId");
    };
    ArtifactVersionPage.prototype.artifactIdParam = function () {
        return this.getPathParam("artifactId");
    };
    ArtifactVersionPage.prototype.versionParam = function () {
        return this.getPathParam("version");
    };
    // @ts-ignore
    ArtifactVersionPage.prototype.createLoaders = function () {
        var _this = this;
        var groupId = this.groupIdParam();
        if (groupId == "default") {
            groupId = null;
        }
        var artifactId = this.artifactIdParam();
        _services__WEBPACK_IMPORTED_MODULE_11__.Services.getLoggerService().info("Loading data for artifact: ", artifactId);
        return [
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().getArtifactMetaData(groupId, artifactId, this.versionParam()).then(function (md) { return _this.setSingleState("artifact", md); }),
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().getArtifactContent(groupId, artifactId, this.versionParam())
                .then(function (content) { return _this.setSingleState("artifactContent", content); })
                .catch(function (e) {
                _services__WEBPACK_IMPORTED_MODULE_11__.Services.getLoggerService().warn("Failed to get artifact content: ", e);
                if (is404(e)) {
                    _this.setSingleState("artifactContent", "Artifact version content not available (404 Not Found).");
                }
                else {
                    throw e;
                }
            }),
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().getArtifactRules(groupId, artifactId).then(function (rules) { return _this.setSingleState("rules", rules); }),
            _services__WEBPACK_IMPORTED_MODULE_11__.Services.getGroupsService().getArtifactVersions(groupId, artifactId).then(function (versions) { return _this.setSingleState("versions", versions.reverse()); })
        ];
    };
    ArtifactVersionPage.prototype.showDocumentationTab = function () {
        if (this.state.artifact) {
            return this.state.artifact.type === "OPENAPI" && this.state.artifact.state !== "DISABLED";
        }
        else {
            return false;
        }
    };
    ArtifactVersionPage.prototype.rules = function () {
        return this.state.rules ? this.state.rules : [];
    };
    ArtifactVersionPage.prototype.nameOrId = function () {
        if (!this.state.artifact) {
            return "";
        }
        return this.state.artifact.name ? this.state.artifact.name : this.state.artifact.id;
    };
    ArtifactVersionPage.prototype.versions = function () {
        return this.state.versions ? this.state.versions : [];
    };
    ArtifactVersionPage.prototype.artifactId = function () {
        return this.state.artifact ? this.state.artifact.id : "";
    };
    ArtifactVersionPage.prototype.groupId = function () {
        return this.state.artifact ? this.state.artifact.groupId : null;
    };
    ArtifactVersionPage.prototype.artifactType = function () {
        return this.state.artifact ? this.state.artifact.type : "";
    };
    ArtifactVersionPage.prototype.artifactNameOrId = function () {
        return this.state.artifact ? (this.state.artifact.name ? this.state.artifact.name : this.state.artifact.id) : "";
    };
    ArtifactVersionPage.prototype.artifactName = function () {
        return this.state.artifact ? (this.state.artifact.name ? this.state.artifact.name : "") : "";
    };
    ArtifactVersionPage.prototype.artifactDescription = function () {
        return this.state.artifact ? (this.state.artifact.description ? this.state.artifact.description : "") : "";
    };
    ArtifactVersionPage.prototype.artifactLabels = function () {
        return this.state.artifact ? (this.state.artifact.labels ? this.state.artifact.labels : []) : [];
    };
    ArtifactVersionPage.prototype.handleInvalidContentError = function (error) {
        _services__WEBPACK_IMPORTED_MODULE_11__.Services.getLoggerService().info("INVALID CONTENT ERROR", error);
        this.setMultiState({
            invalidContentError: error,
            isInvalidContentModalOpen: true
        });
    };
    return ArtifactVersionPage;
}(_basePage__WEBPACK_IMPORTED_MODULE_2__/* .PageComponent */ .I));



/***/ }),

/***/ 7477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EditMetaDataModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
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
 * Models the toolbar for the Artifacts page.
 */
var EditMetaDataModal = /** @class */ (function (_super) {
    __extends(EditMetaDataModal, _super);
    function EditMetaDataModal(props) {
        var _this = _super.call(this, props) || this;
        _this.doEdit = function () {
            _this.props.onEditMetaData(_this.state.metaData);
        };
        _this.onNameChange = function (value) {
            _this.setSingleState("metaData", __assign(__assign({}, _this.state.metaData), { name: value }));
        };
        _this.onLabelsChange = function (value) {
            var labels = [];
            if (value && value.trim().length > 0) {
                labels = value.trim().split(",").map(function (item) { return item.trim(); });
            }
            _this.setMultiState({
                labels: value,
                metaData: __assign(__assign({}, _this.state.metaData), { labels: labels })
            });
        };
        _this.onDescriptionChange = function (value) {
            _this.setSingleState("metaData", __assign(__assign({}, _this.state.metaData), { description: value }));
        };
        return _this;
    }
    EditMetaDataModal.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Modal, { title: "Edit Artifact Meta-Data", variant: "large", isOpen: this.props.isOpen, onClose: this.props.onClose, className: "edit-artifact-metaData pf-m-redhat-font", actions: [
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, { key: "edit", variant: "primary", "data-testid": "modal-btn-edit", onClick: this.doEdit }, "Edit"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, { key: "cancel", variant: "link", "data-testid": "modal-btn-cancel", onClick: this.props.onClose }, "Cancel")
            ] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Use the form below to update the Name and Description of the artifact."),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Form, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { label: "Name", fieldId: "form-name" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, { isRequired: false, type: "text", id: "form-name", "data-testid": "form-name", name: "form-name", "aria-describedby": "form-name-helper", value: this.state.metaData.name, placeholder: "Name of the artifact", onChange: this.onNameChange })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { label: "Labels", fieldId: "form-labels", helperText: "A comma-separated list of labels to apply to the artifact." },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, { isRequired: false, type: "text", id: "form-labels", "data-testid": "form-labels", name: "form-labels", "aria-describedby": "form-labels-helper", value: this.state.labels, placeholder: "Artifact labels", onChange: this.onLabelsChange })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { label: "Description", fieldId: "form-description" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.TextArea, { isRequired: false, id: "form-description", "data-testid": "form-description", name: "form-description", "aria-describedby": "form-description-helper", value: this.state.metaData.description, placeholder: "Description of the artifact", onChange: this.onDescriptionChange })))));
    };
    EditMetaDataModal.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.isOpen && !prevProps.isOpen) {
            this.setMultiState({
                labels: this.props.labels.join(", "),
                metaData: {
                    description: this.props.description,
                    labels: this.props.labels,
                    name: this.props.name
                }
            });
        }
    };
    EditMetaDataModal.prototype.initializeState = function () {
        return {
            labels: "",
            metaData: {
                description: "",
                labels: [],
                name: ""
            }
        };
    };
    EditMetaDataModal.prototype.labels = function () {
        if (this.state.metaData.labels) {
            return this.state.metaData.labels.join(", ");
        }
        else {
            return "";
        }
    };
    return EditMetaDataModal;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ }),

/***/ 96597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ArtifactVersionPageHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21467);
/* harmony import */ var _version_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70823);
/* harmony import */ var _components_common_ifFeature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13294);
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
 * Models the page header for the Artifact page.
 */
var ArtifactVersionPageHeader = /** @class */ (function (_super) {
    __extends(ArtifactVersionPageHeader, _super);
    function ArtifactVersionPageHeader(props) {
        return _super.call(this, props) || this;
    }
    ArtifactVersionPageHeader.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, { className: "example-border" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.h1 }, this.props.title))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, { align: { default: 'alignRight' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_version_selector__WEBPACK_IMPORTED_MODULE_3__/* .VersionSelector */ .Q, { version: this.props.version, versions: this.props.versions, groupId: this.props.groupId, artifactId: this.props.artifactId }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__/* .IfAuth */ .No, { isDeveloper: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_ifFeature__WEBPACK_IMPORTED_MODULE_4__/* .IfFeature */ .Q, { feature: "readOnly", isNot: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { id: "delete-artifact-button", variant: "secondary", "data-testid": "header-btn-delete", onClick: this.props.onDeleteArtifact }, "Delete"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { id: "upload-version-button", variant: "primary", "data-testid": "header-btn-upload-version", onClick: this.props.onUploadVersion }, "Upload new version"))))));
    };
    ArtifactVersionPageHeader.prototype.initializeState = function () {
        return {};
    };
    return ArtifactVersionPageHeader;
}(_components__WEBPACK_IMPORTED_MODULE_2__/* .PureComponent */ .Vx));



/***/ }),

/***/ 70823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ VersionSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21467);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93179);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37073);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98068);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46768);
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
 * Models the page header for the Artifact page.
 */
var VersionSelector = /** @class */ (function (_super) {
    __extends(VersionSelector, _super);
    function VersionSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = function (isOpen) {
            _this.setSingleState("isOpen", isOpen);
        };
        return _this;
    }
    VersionSelector.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { className: this.dropdownClasses(), toggle: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownToggle, { "data-testid": "versions-toggle", onToggle: this.onToggle },
                "Version: ",
                this.props.version), isOpen: this.state.isOpen },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "version-filter", style: { display: "none" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.InputGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, { name: "filter", id: "versionFilter", type: "search", "data-testid": "versions-form-filter", "aria-label": "Version filter" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ButtonVariant.control, "data-testid": "versions-form-btn-search", "aria-label": "search button for search input" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, null)))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "version-header" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "version-item" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "name" }, "Version"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "date" }, "Created On"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "version-list" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, { key: "latest", "data-testid": "versions-lnk-latest", to: this.linkTo("/artifacts/" + encodeURIComponent(this.props.groupId) + "/" + encodeURIComponent(this.props.artifactId) + "/versions/latest"), className: "version-item latest" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "name" }, "latest"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "date" })),
                this.props.versions.map(function (v, idx) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, { key: v.version, "data-testid": "versions-lnk-" + idx, to: _this.linkTo("/artifacts/" + encodeURIComponent(_this.props.groupId) + "/" + encodeURIComponent(_this.props.artifactId) + "/versions/" + v.version), className: "version-item" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "name" }, v.version),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "date" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_moment__WEBPACK_IMPORTED_MODULE_4___default()), { date: v.createdOn, fromNow: true })));
                }))));
    };
    VersionSelector.prototype.initializeState = function () {
        return {
            isOpen: false
        };
    };
    VersionSelector.prototype.dropdownClasses = function () {
        var classes = ["version-selector-dropdown"];
        if (_services__WEBPACK_IMPORTED_MODULE_6__.Services.getConfigService().featureReadOnly()) {
            classes.push("dropdown-align-right");
        }
        return classes.join(' ');
    };
    return VersionSelector;
}(_components__WEBPACK_IMPORTED_MODULE_2__/* .PureComponent */ .Vx));



/***/ }),

/***/ 11054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ContentTabContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80250);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90252);
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ace_builds_src_noconflict_mode_protobuf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12501);
/* harmony import */ var ace_builds_src_noconflict_mode_protobuf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_protobuf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ace_builds_src_noconflict_mode_xml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13202);
/* harmony import */ var ace_builds_src_noconflict_mode_xml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_xml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ace_builds_src_noconflict_mode_graphqlschema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62568);
/* harmony import */ var ace_builds_src_noconflict_mode_graphqlschema__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_graphqlschema__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42270);
/* harmony import */ var ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46768);
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
var ContentTabContent = /** @class */ (function (_super) {
    __extends(ContentTabContent, _super);
    function ContentTabContent(props) {
        var _this = _super.call(this, props) || this;
        _this.format = function () {
            if (!_this.state.contentIsJson) {
                return;
            }
            try {
                var pval = JSON.parse(_this.props.artifactContent);
                if (pval) {
                    _this.setSingleState("content", JSON.stringify(pval, null, 2));
                }
            }
            catch (e) {
                // Do nothing
                _services__WEBPACK_IMPORTED_MODULE_9__.Services.getLoggerService().warn("Failed to format content!");
                _services__WEBPACK_IMPORTED_MODULE_9__.Services.getLoggerService().error(e);
            }
        };
        return _this;
    }
    ContentTabContent.prototype.componentDidMount = function () {
        // TODO do this again whenever the browser is resized!
        var elem = document.getElementById("ace-wrapper");
        if (elem) {
            var height = elem.clientHeight;
            if (height) {
                this.setSingleState("editorHeight", height + "px");
            }
        }
    };
    ContentTabContent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ace-wrapper", id: "ace-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_ace__WEBPACK_IMPORTED_MODULE_2___default()), { "data-testid": "ace-content", mode: this.editorMode(), theme: "monokai", name: "artifactContent", className: "artifactContent", width: this.state.editorWidth, height: this.state.editorHeight, fontSize: 14, showPrintMargin: false, showGutter: true, highlightActiveLine: false, value: this.state.content, readOnly: true, setOptions: {
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                    useWorker: false
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__.Button, { className: this.state.formatBtnClasses, key: "format", variant: "primary", "data-testid": "modal-btn-edit", onClick: this.format }, "Format")));
    };
    ContentTabContent.prototype.initializeState = function () {
        var contentIsJson = this.isJson(this.props.artifactContent);
        var formatBtnClasses = "format-btn";
        if (!contentIsJson) {
            formatBtnClasses += " hidden";
        }
        return {
            content: this.props.artifactContent,
            contentIsJson: contentIsJson,
            editorHeight: "500px",
            editorWidth: "100%",
            formatBtnClasses: formatBtnClasses
        };
    };
    ContentTabContent.prototype.editorMode = function () {
        if (this.props.artifactType === "PROTOBUF") {
            return "protobuf";
        }
        if (this.props.artifactType === "WSDL" || this.props.artifactType === "XSD" || this.props.artifactType === "XML") {
            return "xml";
        }
        if (this.props.artifactType === "GRAPHQL") {
            return "graphqlschema";
        }
        return "json";
    };
    ContentTabContent.prototype.isJson = function (content) {
        try {
            var pval = JSON.parse(content);
            if (pval) {
                return true;
            }
        }
        catch (e) {
            // Do nothing
        }
        return false;
    };
    return ContentTabContent;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ }),

/***/ 54882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DocumentationTabContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var redoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17189);
/* harmony import */ var redoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errorTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75921);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46768);
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
var DocumentationTabContent = /** @class */ (function (_super) {
    __extends(DocumentationTabContent, _super);
    function DocumentationTabContent(props) {
        return _super.call(this, props) || this;
    }
    DocumentationTabContent.prototype.render = function () {
        if (this.isError()) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_errorTab__WEBPACK_IMPORTED_MODULE_3__/* .ErrorTabContent */ .L, { error: { errorMessage: "Artifact isn't a valid OpenAPI structure", error: this.state.error } });
        }
        var visualizer = null;
        if (this.props.artifactType === "OPENAPI") {
            visualizer = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redoc__WEBPACK_IMPORTED_MODULE_2__.RedocStandalone, { spec: this.state.parsedContent });
        }
        if (visualizer !== null) {
            return visualizer;
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null,
                "Unsupported Type: ",
                this.props.artifactType);
        }
    };
    DocumentationTabContent.prototype.initializeState = function () {
        try {
            return {
                parsedContent: JSON.parse(this.props.artifactContent),
                error: undefined
            };
        }
        catch (ex) {
            src_services__WEBPACK_IMPORTED_MODULE_4__.Services.getLoggerService().warn("Failed to parse content:");
            src_services__WEBPACK_IMPORTED_MODULE_4__.Services.getLoggerService().error(ex);
            return {
                parsedContent: undefined,
                error: ex
            };
        }
    };
    DocumentationTabContent.prototype.isError = function () {
        if (this.state.error) {
            return true;
        }
        else {
            return false;
        }
    };
    return DocumentationTabContent;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ }),

/***/ 75921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ErrorTabContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80250);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ace_builds_src_noconflict_mode_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79253);
/* harmony import */ var ace_builds_src_noconflict_mode_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ace_builds_src_noconflict_theme_tomorrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42557);
/* harmony import */ var ace_builds_src_noconflict_theme_tomorrow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_tomorrow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93179);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__);
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







var ErrorTabContent = /** @class */ (function (_super) {
    __extends(ErrorTabContent, _super);
    function ErrorTabContent(props) {
        var _this = _super.call(this, props) || this;
        _this.showDetails = function () {
            _this.setSingleState("isShowDetails", true);
        };
        return _this;
    }
    ErrorTabContent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "centerizer" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyState, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyStateVariant.large },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyStateIcon, { icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__.ExclamationTriangleIcon }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Title, { headingLevel: "h5", size: "lg" }, this.errorMessage()),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyStateBody, null, this.errorDescription()),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyStateSecondaryActions, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "link", "data-testid": "error-btn-details", onClick: this.showDetails }, "Show details"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "separator" }, "\u00A0"),
            this.state.isShowDetails ?
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ace-wrapper pf-c-empty-state pf-m-lg", id: "ace-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_ace__WEBPACK_IMPORTED_MODULE_2___default()), { "data-testid": "ace-details", mode: "json", theme: "tomorrow", name: "errorDetail", className: "errorDetail", width: this.state.editorWidth, height: this.state.editorHeight, fontSize: 14, showPrintMargin: false, showGutter: false, highlightActiveLine: false, value: this.errorDetail(), readOnly: true, setOptions: {
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: false,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                            useWorker: false
                        } }))
                :
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)));
    };
    ErrorTabContent.prototype.initializeState = function () {
        return {
            editorHeight: "250px",
            editorWidth: "100%",
            isShowDetails: false
        };
    };
    ErrorTabContent.prototype.errorMessage = function () {
        if (this.props.error) {
            return this.props.error.errorMessage;
        }
        else {
            return "Internal server error";
        }
    };
    // Error description can be in node children - if it is missing, default description is used
    ErrorTabContent.prototype.errorDescription = function () {
        if (this.props.children) {
            return this.props.children;
        }
        else {
            return ("The content you are trying to visualize is not valid (we could not parse it).  If possible, we'll try to provide you with some more information about " +
                "the problem (see below).");
        }
    };
    ErrorTabContent.prototype.errorDetail = function () {
        if (this.props.error && this.props.error.error && this.props.error.error.detail) {
            return this.props.error.error.detail;
        }
        else if (this.props.error && this.props.error.error && this.props.error.error.message) {
            return this.props.error.error.message;
        }
        else if (this.props.error && this.props.error.error) {
            return JSON.stringify(this.props.error.error, null, 3);
        }
        else {
            return "Error info not available";
        }
    };
    return ErrorTabContent;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ }),

/***/ 87578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InfoTabContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93179);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37073);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_ifFeature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13294);
/* harmony import */ var _components_common_if__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24754);
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
var InfoTabContent = /** @class */ (function (_super) {
    __extends(InfoTabContent, _super);
    function InfoTabContent(props) {
        var _this = _super.call(this, props) || this;
        _this.isArtifactInGroup = function () {
            var groupId = _this.props.artifact.groupId;
            return groupId != null && groupId != "default";
        };
        return _this;
    }
    InfoTabContent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Flex, { className: "artifact-tab-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { className: "artifact-basics" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "title-and-type" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Split, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, { className: "type" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__/* .ArtifactTypeIcon */ .fN, { type: this.props.artifact.type })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, { className: "title", isFilled: true }, "Version Metadata"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, { className: "actions" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__/* .IfAuth */ .No, { isDeveloper: true },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_ifFeature__WEBPACK_IMPORTED_MODULE_5__/* .IfFeature */ .Q, { feature: "readOnly", isNot: true },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, { id: "edit-action", "data-testid": "artifact-btn-edit", title: "Edit artifact meta-data", onClick: this.props.onEditMetaData, variant: "plain" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.EditIcon, null))))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaData" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "Name"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" }, this.props.artifact.name)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_if__WEBPACK_IMPORTED_MODULE_6__.If, { condition: this.isArtifactInGroup },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "Group"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" }, this.props.artifact.groupId))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "ID"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" }, this.props.artifact.id)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" }, this.props.artifact.state)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "Created"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_moment__WEBPACK_IMPORTED_MODULE_4___default()), { date: this.props.artifact.createdOn, fromNow: true }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "Modified"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_moment__WEBPACK_IMPORTED_MODULE_4___default()), { date: this.props.artifact.modifiedOn, fromNow: true }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "Global ID"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" }, this.props.artifact.globalId)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "metaDataItem" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "label" }, "Content ID"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "value" }, this.props.artifact.contentId))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "description" }, this.description()),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "labels" }, this.labels().map(function (label) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Badge, { key: label, isRead: true }, label);
                })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "actions" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, { id: "download-action", "data-testid": "artifact-btn-download", title: "Download artifact content", onClick: this.props.onDownloadArtifact, variant: "secondary" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.DownloadIcon, null),
                        " Download"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { className: "artifact-rules" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rules-label" }, "Content Rules"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__/* .RuleList */ .RB, { rules: this.props.rules, onEnableRule: this.props.onEnableRule, onDisableRule: this.props.onDisableRule, onConfigureRule: this.props.onConfigureRule }))));
    };
    InfoTabContent.prototype.initializeState = function () {
        return {};
    };
    InfoTabContent.prototype.nameOrId = function () {
        return this.props.artifact.name ? this.props.artifact.name : this.props.artifact.id;
    };
    InfoTabContent.prototype.labels = function () {
        return this.props.artifact.labels ? this.props.artifact.labels : [];
    };
    InfoTabContent.prototype.description = function () {
        return this.props.artifact.description ?
            this.props.artifact.description :
            "An artifact of type " + this.props.artifact.type + " with no description.";
    };
    return InfoTabContent;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ }),

/***/ 95042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ UploadVersionForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
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
 * Models the toolbar for the Artifacts page.
 */
var UploadVersionForm = /** @class */ (function (_super) {
    __extends(UploadVersionForm, _super);
    function UploadVersionForm(props) {
        var _this = _super.call(this, props) || this;
        _this.onContentChange = function (value, filename, event) {
            _this.setSingleState("content", value, function () {
                _this.fireOnChange();
                _this.checkValid();
            });
        };
        _this.onFileReadStarted = function () {
            _this.setSingleState("contentIsLoading", true);
        };
        _this.onFileReadFinished = function () {
            _this.setSingleState("contentIsLoading", false);
        };
        return _this;
    }
    UploadVersionForm.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Form, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { label: "Artifact", isRequired: true, fieldId: "form-artifact" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FileUpload, { id: "artifact-content", "data-testid": "form-upload", type: "text", filename: this.state.contentFilename, value: this.state.content, isRequired: true, allowEditingUploadedText: true, onChange: this.onContentChange, onReadStarted: this.onFileReadStarted, onReadFinished: this.onFileReadFinished, isLoading: this.state.contentIsLoading }))));
    };
    UploadVersionForm.prototype.initializeState = function () {
        return {
            content: "",
            contentFilename: "",
            contentIsLoading: false,
            valid: false
        };
    };
    UploadVersionForm.prototype.checkValid = function () {
        var _this = this;
        var data = this.currentData();
        var oldValid = this.state.valid;
        var newValid = this.isValid(data);
        var validityChanged = oldValid !== newValid;
        this.setState({
            valid: newValid
        }, function () {
            if (validityChanged) {
                _this.fireOnValid();
            }
        });
    };
    UploadVersionForm.prototype.isValid = function (data) {
        return !!data;
    };
    UploadVersionForm.prototype.currentData = function () {
        return this.state.content;
    };
    UploadVersionForm.prototype.fireOnChange = function () {
        if (this.props.onChange) {
            this.props.onChange(this.currentData());
        }
    };
    UploadVersionForm.prototype.fireOnValid = function () {
        if (this.props.onValid) {
            this.props.onValid(this.state.valid);
        }
    };
    return UploadVersionForm;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ })

}]);
//# sourceMappingURL=982.bundle.b5182dc51283883d1a5e.js.map