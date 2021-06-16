(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[690],{

/***/ 83993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ArtifactsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pageheader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31950);
/* harmony import */ var _components_artifactList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84270);
/* harmony import */ var _basePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26619);
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80941);
/* harmony import */ var _components_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73243);
/* harmony import */ var _components_uploadForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70150);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49746);
/* harmony import */ var _components_common_if__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24754);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94830);
/* harmony import */ var _components_modals_pleaseWaitModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38304);
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
 * The artifacts page.
 */
var ArtifactsPage = /** @class */ (function (_super) {
    __extends(ArtifactsPage, _super);
    function ArtifactsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onUploadArtifact = function () {
            _this.setSingleState("isUploadModalOpen", true);
        };
        _this.onUploadModalClose = function () {
            _this.setSingleState("isUploadModalOpen", false);
        };
        _this.doUploadArtifact = function () {
            _this.onUploadModalClose();
            _this.pleaseWait(true);
            if (_this.state.uploadFormData !== null) {
                // If no groupId is provided, set it to the "default" group
                if (!_this.state.uploadFormData.groupId) {
                    _this.state.uploadFormData.groupId = "default";
                }
                _services__WEBPACK_IMPORTED_MODULE_10__.Services.getGroupsService().createArtifact(_this.state.uploadFormData).then(function (metaData) {
                    var groupId = metaData.groupId ? metaData.groupId : "default";
                    var artifactLocation = _this.linkTo("/artifacts/" + encodeURIComponent(groupId) + "/" + encodeURIComponent(metaData.id));
                    _services__WEBPACK_IMPORTED_MODULE_10__.Services.getLoggerService().info("[ArtifactsPage] Artifact successfully uploaded.  Redirecting to details: ", artifactLocation);
                    _this.navigateTo(artifactLocation)();
                }).catch(function (error) {
                    _this.pleaseWait(false);
                    if (error && error.error_code === 400) {
                        _this.handleInvalidContentError(error);
                    }
                    else {
                        _this.handleServerError(error, "Error uploading artifact.");
                    }
                });
            }
        };
        _this.onFilterChange = function (criteria) {
            _this.setMultiState({
                criteria: criteria,
                isLoading: true
            }, function () {
                _this.search();
            });
        };
        _this.onSetPage = function (event, newPage, perPage) {
            var paging = {
                page: newPage,
                pageSize: perPage ? perPage : _this.state.paging.pageSize
            };
            _this.setMultiState({
                isLoading: true,
                paging: paging
            }, function () {
                _this.search();
            });
        };
        _this.onPerPageSelect = function (event, newPerPage) {
            var paging = {
                page: _this.state.paging.page,
                pageSize: newPerPage
            };
            _this.setMultiState({
                isLoading: true,
                paging: paging
            }, function () {
                _this.search();
            });
        };
        _this.onUploadFormValid = function (isValid) {
            _this.setSingleState("isUploadFormValid", isValid);
        };
        _this.onUploadFormChange = function (data) {
            _this.setSingleState("uploadFormData", data);
        };
        _this.closeInvalidContentModal = function () {
            _this.setSingleState("isInvalidContentModalOpen", false);
        };
        _this.pleaseWait = function (isOpen) {
            _this.setSingleState("isPleaseWaitModalOpen", isOpen);
        };
        _this.onGroupClick = function (groupId) {
            // TODO filter by the group
        };
        _this.showToolbar = function () {
            var hasCriteria = _this.state.criteria && _this.state.criteria.value != null && _this.state.criteria.value != "";
            return hasCriteria || _this.results().count > 0;
        };
        return _this;
    }
    ArtifactsPage.prototype.renderPage = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { className: "ps_artifacts-header", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_2__/* .ArtifactsPageHeader */ .W, { onUploadArtifact: this.onUploadArtifact })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_if__WEBPACK_IMPORTED_MODULE_9__.If, { condition: this.showToolbar },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light, padding: { default: "noPadding" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_toolbar__WEBPACK_IMPORTED_MODULE_5__/* .ArtifactsPageToolbar */ .U, { artifacts: this.results(), paging: this.state.paging, onPerPageSelect: this.onPerPageSelect, onSetPage: this.onSetPage, onChange: this.onFilterChange }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.default, isFilled: true }, this.isLoading() ?
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Spinner, { size: "lg" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Loading, please wait...")))
                : this.artifactsCount() === 0 ?
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_empty__WEBPACK_IMPORTED_MODULE_6__/* .ArtifactsPageEmptyState */ .B, { onUploadArtifact: this.onUploadArtifact, isFiltered: this.isFiltered() })
                    :
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_artifactList__WEBPACK_IMPORTED_MODULE_3__/* .ArtifactList */ .ye, { artifacts: this.artifacts(), onGroupClick: this.onGroupClick }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, { title: "Upload Artifact", variant: "large", isOpen: this.state.isUploadModalOpen, onClose: this.onUploadModalClose, className: "upload-artifact-modal pf-m-redhat-font", actions: [
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { key: "upload", variant: "primary", "data-testid": "modal-btn-upload", onClick: this.doUploadArtifact, isDisabled: !this.state.isUploadFormValid }, "Upload"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { key: "cancel", variant: "link", "data-testid": "modal-btn-cancel", onClick: this.onUploadModalClose }, "Cancel")
                ] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_uploadForm__WEBPACK_IMPORTED_MODULE_7__/* .UploadArtifactForm */ .k, { onChange: this.onUploadFormChange, onValid: this.onUploadFormValid })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modals__WEBPACK_IMPORTED_MODULE_8__/* .InvalidContentModal */ .R, { error: this.state.invalidContentError, isOpen: this.state.isInvalidContentModalOpen, onClose: this.closeInvalidContentModal }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modals_pleaseWaitModal__WEBPACK_IMPORTED_MODULE_11__/* .PleaseWaitModal */ .j, { message: "Creating artifact, please wait...", isOpen: this.state.isPleaseWaitModalOpen })));
    };
    ArtifactsPage.prototype.initializePageState = function () {
        return {
            criteria: {
                sortAscending: true,
                type: "everything",
                value: "",
            },
            invalidContentError: null,
            isInvalidContentModalOpen: false,
            isLoading: true,
            isPleaseWaitModalOpen: false,
            isUploadFormValid: false,
            isUploadModalOpen: false,
            paging: {
                page: 1,
                pageSize: 10
            },
            results: null,
            uploadFormData: null
        };
    };
    // @ts-ignore
    ArtifactsPage.prototype.createLoaders = function () {
        return this.search();
    };
    ArtifactsPage.prototype.onArtifactsLoaded = function (results) {
        this.setMultiState({
            isLoading: false,
            results: results
        });
    };
    ArtifactsPage.prototype.results = function () {
        return this.state.results ? this.state.results : {
            artifacts: [],
            count: 0,
            page: 1,
            pageSize: 10
        };
    };
    ArtifactsPage.prototype.artifacts = function () {
        return this.state.results ? this.state.results.artifacts : [];
    };
    ArtifactsPage.prototype.artifactsCount = function () {
        return this.state.results ? this.state.results.artifacts.length : 0;
    };
    ArtifactsPage.prototype.isFiltered = function () {
        return !!this.state.criteria.value;
    };
    // @ts-ignore
    ArtifactsPage.prototype.search = function () {
        var _this = this;
        return _services__WEBPACK_IMPORTED_MODULE_10__.Services.getGroupsService().getArtifacts(this.state.criteria, this.state.paging).then(function (results) {
            _this.onArtifactsLoaded(results);
        }).catch(function (error) {
            _this.handleServerError(error, "Error searching for artifacts.");
        });
    };
    ArtifactsPage.prototype.handleInvalidContentError = function (error) {
        _services__WEBPACK_IMPORTED_MODULE_10__.Services.getLoggerService().info("INVALID CONTENT ERROR", error);
        this.setMultiState({
            invalidContentError: error,
            isInvalidContentModalOpen: true
        });
    };
    return ArtifactsPage;
}(_basePage__WEBPACK_IMPORTED_MODULE_4__/* .PageComponent */ .I));



/***/ }),

/***/ 37759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ArtifactGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
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
var ArtifactGroup = /** @class */ (function (_super) {
    __extends(ArtifactGroup, _super);
    function ArtifactGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.fireOnClick = function () {
            _this.props.onClick(_this.props.groupId);
        };
        return _this;
    }
    ArtifactGroup.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: this.style(), onClick: this.fireOnClick }, this.props.groupId));
    };
    ArtifactGroup.prototype.initializeState = function () {
        return {};
    };
    ArtifactGroup.prototype.style = function () {
        return !this.props.groupId ? "nogroup" : "group";
    };
    return ArtifactGroup;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ }),

/***/ 14198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ArtifactList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21467);
/* harmony import */ var _artifactName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99350);
/* harmony import */ var _artifactGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37759);
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
var ArtifactList = /** @class */ (function (_super) {
    __extends(ArtifactList, _super);
    function ArtifactList(props) {
        return _super.call(this, props) || this;
    }
    ArtifactList.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DataList, { "aria-label": "List of artifacts", className: "artifact-list" }, this.props.artifacts.map(function (artifact, idx) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DataListItemRow, { className: "artifact-list-item", key: artifact.id },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DataListItemCells, { dataListCells: [
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DataListCell, { key: "type icon", className: "type-icon-cell" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__/* .ArtifactTypeIcon */ .fN, { type: artifact.type })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DataListCell, { key: "main content", className: "content-cell" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "artifact-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_artifactGroup__WEBPACK_IMPORTED_MODULE_4__/* .ArtifactGroup */ .k, { groupId: artifact.groupId, onClick: _this.props.onGroupClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_artifactName__WEBPACK_IMPORTED_MODULE_3__/* .ArtifactName */ .k, { groupId: artifact.groupId, id: artifact.id, name: artifact.name }),
                                _this.statuses(artifact).map(function (status) {
                                    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Badge, { className: "status-badge", key: status, isRead: true }, status);
                                })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "artifact-description" }, _this.description(artifact)),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "artifact-tags" }, _this.labels(artifact).map(function (label) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Badge, { key: label, isRead: true }, label);
                            })))
                    ] }));
        })));
    };
    ArtifactList.prototype.initializeState = function () {
        return {};
    };
    ArtifactList.prototype.labels = function (artifact) {
        return artifact.labels ? artifact.labels : [];
    };
    ArtifactList.prototype.statuses = function (artifact) {
        var rval = [];
        if (artifact.state === "DISABLED") {
            rval.push("Disabled");
        }
        if (artifact.state === "DEPRECATED") {
            rval.push("Deprecated");
        }
        return rval;
    };
    ArtifactList.prototype.description = function (artifact) {
        if (artifact.description) {
            return artifact.description;
        }
        return "An artifact of type " + artifact.type + " with no description.";
    };
    return ArtifactList;
}(_components__WEBPACK_IMPORTED_MODULE_2__/* .PureComponent */ .Vx));



/***/ }),

/***/ 99350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ArtifactName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55399);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21467);
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
var ArtifactName = /** @class */ (function (_super) {
    __extends(ArtifactName, _super);
    function ArtifactName(props) {
        return _super.call(this, props) || this;
    }
    ArtifactName.prototype.render = function () {
        return this.props.name ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { className: "name", "data-testid": this.testId("artifacts-lnk-view-"), to: this.artifactLink() }, this.props.name),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { className: "id", "data-testid": this.testId("artifacts-lnk-view-id-"), to: this.artifactLink() }, this.props.id))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { className: "name", "data-testid": this.testId("artifacts-lnk-view-"), to: this.artifactLink() }, this.props.id)));
    };
    ArtifactName.prototype.initializeState = function () {
        return {};
    };
    ArtifactName.prototype.artifactLink = function () {
        var groupId = this.props.groupId == null ? "default" : this.props.groupId;
        var link = "/artifacts/" + encodeURIComponent(groupId) + "/" + encodeURIComponent(this.props.id);
        return this.linkTo(link);
    };
    return ArtifactName;
}(_components__WEBPACK_IMPORTED_MODULE_2__/* .PureComponent */ .Vx));



/***/ }),

/***/ 2377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ArtifactsPageEmptyState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93179);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21467);
/* harmony import */ var _components_common_ifFeature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13294);
/* harmony import */ var _components_common_if__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24754);
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
 * Models the empty state for the Artifacts page (when there are no artifacts).
 */
var ArtifactsPageEmptyState = /** @class */ (function (_super) {
    __extends(ArtifactsPageEmptyState, _super);
    function ArtifactsPageEmptyState(props) {
        return _super.call(this, props) || this;
    }
    ArtifactsPageEmptyState.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateVariant.full },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateIcon, { icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.PlusCircleIcon }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, { headingLevel: "h5", size: "lg" }, "No Artifacts Found!"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_if__WEBPACK_IMPORTED_MODULE_5__.If, { condition: function () { return _this.props.isFiltered; } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, "No artifacts match your filter settings.  Change your filter or perhaps Upload a new artifact.")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_if__WEBPACK_IMPORTED_MODULE_5__.If, { condition: function () { return !_this.props.isFiltered; } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, "There are currently no artifacts in the registry.  Artifacts must be created before you will see anything here.")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_3__/* .IfAuth */ .No, { isDeveloper: true },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_ifFeature__WEBPACK_IMPORTED_MODULE_4__/* .IfFeature */ .Q, { feature: "readOnly", isNot: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", "data-testid": "empty-btn-upload", onClick: this.props.onUploadArtifact }, "Upload artifact")))));
    };
    ArtifactsPageEmptyState.prototype.initializeState = function () {
        return {};
    };
    return ArtifactsPageEmptyState;
}(_components__WEBPACK_IMPORTED_MODULE_3__/* .PureComponent */ .Vx));



/***/ }),

/***/ 90244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ ArtifactsPageHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21467);
/* harmony import */ var _components_common_ifFeature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55399);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
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
 * Models the page header for the Artifacts page.
 */
var ArtifactsPageHeader = /** @class */ (function (_super) {
    __extends(ArtifactsPageHeader, _super);
    function ArtifactsPageHeader(props) {
        return _super.call(this, props) || this;
    }
    ArtifactsPageHeader.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, { className: "example-border" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.h1 }, "Artifacts"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, { align: { default: "alignRight" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__/* .IfAuth */ .No, { isAdmin: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { className: "btn-header-global-rules pf-c-button pf-m-secondary", "data-testid": "btn-header-global-rules", to: this.linkTo("/rules") }, "Manage global rules")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__/* .IfAuth */ .No, { isDeveloper: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_ifFeature__WEBPACK_IMPORTED_MODULE_3__/* .IfFeature */ .Q, { feature: "readOnly", isNot: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "btn-header-upload-artifact", "data-testid": "btn-header-upload-artifact", variant: "primary", onClick: this.props.onUploadArtifact }, "Upload artifact"))))));
    };
    ArtifactsPageHeader.prototype.initializeState = function () {
        return {};
    };
    return ArtifactsPageHeader;
}(_components__WEBPACK_IMPORTED_MODULE_2__/* .PureComponent */ .Vx));



/***/ }),

/***/ 60210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ArtifactsPageToolbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93179);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21467);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94830);
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
var ArtifactsPageToolbar = /** @class */ (function (_super) {
    __extends(ArtifactsPageToolbar, _super);
    function ArtifactsPageToolbar(props) {
        var _this = _super.call(this, props) || this;
        _this.onFilterToggle = function (isExpanded) {
            _services__WEBPACK_IMPORTED_MODULE_4__.Services.getLoggerService().debug("[ArtifactsPageToolbar] Toggling filter dropdown.");
            _this.setSingleState("filterIsExpanded", isExpanded);
        };
        _this.onFilterSelect = function (event) {
            var value = event && event.currentTarget && event.currentTarget.id ? event.currentTarget.id : "";
            _services__WEBPACK_IMPORTED_MODULE_4__.Services.getLoggerService().debug("[ArtifactsPageToolbar] Setting filter type to: %s", value);
            _this.setState({
                filterIsExpanded: false,
                filterSelection: value
            }, function () {
                _this.fireOnChange();
            });
        };
        _this.onFilterValueChange = function (value) {
            _services__WEBPACK_IMPORTED_MODULE_4__.Services.getLoggerService().debug("[ArtifactsPageToolbar] Setting filter value: %o", value);
            _this.setSingleState("filterValue", value);
        };
        _this.onFilterSubmit = function (event) {
            _services__WEBPACK_IMPORTED_MODULE_4__.Services.getLoggerService().debug("[ArtifactsPageToolbar] Filter SUBMIT!");
            _this.fireOnChange();
            if (event) {
                event.preventDefault();
            }
        };
        _this.onToggleAscending = function () {
            _services__WEBPACK_IMPORTED_MODULE_4__.Services.getLoggerService().debug("[ArtifactsPageToolbar] Toggle the ascending flag.");
            var sortAscending = !_this.state.ascending;
            _this.setSingleState("ascending", sortAscending, function () {
                _this.fireOnChange();
            });
        };
        return _this;
    }
    ArtifactsPageToolbar.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, { id: "artifacts-toolbar-1", className: "artifacts-toolbar" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarContent, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, { className: "filter-item" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Form, { onSubmit: this.onFilterSubmit },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.InputGroup, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { onSelect: this.onFilterSelect, toggle: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownToggle, { "data-testid": "toolbar-filter-toggle", onToggle: this.onFilterToggle }, this.filterValueDisplay()), isOpen: this.state.filterIsExpanded, dropdownItems: [
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: "name", id: "name", "data-testid": "toolbar-filter-name", component: "button" }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: "group", id: "group", "data-testid": "toolbar-filter-group", component: "button" }, "Group"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: "description", id: "description", "data-testid": "toolbar-filter-description", component: "button" }, "Description"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: "labels", id: "labels", "data-testid": "toolbar-filter-labels", component: "button" }, "Labels"),
                                ] }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, { name: "filterValue", id: "filterValue", type: "search", onChange: this.onFilterValueChange, "data-testid": "toolbar-filter-value", "aria-label": "search input example" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ButtonVariant.control, onClick: this.onFilterSubmit, "data-testid": "toolbar-btn-filter-search", "aria-label": "search button for search input" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, null))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, { className: "sort-icon-item" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "plain", "aria-label": "edit", "data-testid": "toolbar-btn-sort", onClick: this.onToggleAscending }, this.state.ascending ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.SortAlphaDownIcon, null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.SortAlphaDownAltIcon, null))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, { className: "artifact-paging-item" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Pagination, { variant: "bottom", dropDirection: "down", itemCount: this.totalArtifactsCount(), perPage: this.props.paging.pageSize, page: this.props.paging.page, onSetPage: this.props.onSetPage, onPerPageSelect: this.props.onPerPageSelect, widgetId: "artifact-list-pagination", className: "artifact-list-pagination" })))));
    };
    ArtifactsPageToolbar.prototype.initializeState = function () {
        return {
            ascending: true,
            filterIsExpanded: false,
            filterSelection: "name",
            filterValue: ""
        };
    };
    ArtifactsPageToolbar.prototype.totalArtifactsCount = function () {
        return this.props.artifacts ? this.props.artifacts.count : 0;
    };
    ArtifactsPageToolbar.prototype.fireOnChange = function () {
        if (this.props.onChange) {
            var criteria = {
                sortAscending: this.state.ascending,
                type: this.state.filterSelection,
                value: this.state.filterValue
            };
            this.props.onChange(criteria);
        }
    };
    ArtifactsPageToolbar.prototype.filterValueDisplay = function () {
        switch (this.state.filterSelection) {
            case "name":
                return "Name";
            case "group":
                return "Group";
            case "description":
                return "Description";
            case "labels":
                return "Labels";
            default:
                return "Name";
        }
    };
    return ArtifactsPageToolbar;
}(_components__WEBPACK_IMPORTED_MODULE_3__/* .PureComponent */ .Vx));



/***/ }),

/***/ 85428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ UploadArtifactForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21467);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93179);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89929);
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






var artifactTypes = [
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.AVRO, label: "Avro Schema" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.PROTOBUF, label: "Protocol Buffer Schema" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.JSON, label: "JSON Schema" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.OPENAPI, label: "OpenAPI" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.ASYNCAPI, label: "AsyncAPI" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.GRAPHQL, label: "GraphQL" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.KCONNECT, label: "Kafka Connect Schema" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.WSDL, label: "WSDL" },
    { id: _models__WEBPACK_IMPORTED_MODULE_4__.ArtifactTypes.XSD, label: "XML Schema" },
];
/**
 * Models the toolbar for the Artifacts page.
 */
var UploadArtifactForm = /** @class */ (function (_super) {
    __extends(UploadArtifactForm, _super);
    function UploadArtifactForm(props) {
        var _this = _super.call(this, props) || this;
        _this.onTypeToggle = function (isExpanded) {
            _this.setSingleState("typeIsExpanded", isExpanded);
        };
        _this.onTypeSelect = function (event) {
            var newType = event && event.currentTarget && event.currentTarget.id ? event.currentTarget.id : "";
            _this.setState({
                type: newType,
                typeIsExpanded: false
            }, function () {
                _this.fireOnChange();
                _this.checkFormValid();
            });
        };
        _this.onIdChange = function (value) {
            _this.setMultiState({
                id: value,
                idValid: _this.isIdValid(value)
            }, function () {
                _this.fireOnChange();
                _this.checkFormValid();
            });
        };
        _this.onGroupChange = function (value) {
            _this.setMultiState({
                group: value,
                groupValid: _this.isIdValid(value)
            }, function () {
                _this.fireOnChange();
                _this.checkFormValid();
            });
        };
        _this.onContentChange = function (value, filename, event) {
            _this.setSingleState("content", value, function () {
                _this.fireOnChange();
                _this.checkFormValid();
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
    UploadArtifactForm.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Form, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { label: "Group & ID", fieldId: "form-id", helperText: "(Optional) Group and Artifact ID are optional.  If Artifact ID is left blank, the server will generate one for you." },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "group-and-id" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: "group", isRequired: false, type: "text", id: "form-group", "data-testid": "form-group", name: "form-group", "aria-describedby": "form-group-helper", value: this.state.group, placeholder: "Group", onChange: this.onGroupChange, validated: this.groupValidated() }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "separator" }, "/"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: "artifact-id", isRequired: false, type: "text", id: "form-id", "data-testid": "form-id", name: "form-id", "aria-describedby": "form-id-helper", value: this.state.id, placeholder: "ID of the artifact", onChange: this.onIdChange, validated: this.idValidated() })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, { isError: true, isHidden: this.state.idValid && this.state.groupValid }, "Character % and non ASCII characters are not allowed")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { label: "Type", fieldId: "form-type", isRequired: true },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Dropdown, { toggle: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownToggle, { id: "form-type-toggle", "data-testid": "form-type-toggle", onToggle: this.onTypeToggle, toggleIndicator: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.CaretDownIcon }, this.state.type ? this.typeLabel(this.state.type) : "Auto-Detect"), onSelect: this.onTypeSelect, isOpen: this.state.typeIsExpanded, dropdownItems: __spreadArrays([
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { key: "auto", id: "", "data-testid": "form-type-auto" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Auto-Detect")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownSeparator, { key: "separator" })
                        ], artifactTypes.map(function (t) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { key: t.id, id: t.id, "data-testid": "form-type-" + t.id }, t.label);
                        })) }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { label: "Artifact", isRequired: true, fieldId: "form-artifact" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FileUpload, { id: "artifact-content", "data-testid": "form-upload", type: "text", filename: this.state.contentFilename, value: this.state.content, isRequired: true, allowEditingUploadedText: true, onChange: this.onContentChange, onReadStarted: this.onFileReadStarted, onReadFinished: this.onFileReadFinished, isLoading: this.state.contentIsLoading }))));
    };
    UploadArtifactForm.prototype.initializeState = function () {
        return {
            content: "",
            contentFilename: "",
            contentIsLoading: false,
            debouncedOnChange: (0,_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.debounce)(this.props.onChange, 200),
            id: "",
            group: "",
            type: "",
            typeIsExpanded: false,
            formValid: false,
            idValid: true,
            groupValid: true
        };
    };
    UploadArtifactForm.prototype.checkFormValid = function () {
        var _this = this;
        var data = this.currentData();
        var oldValid = this.state.formValid;
        var newValid = this.isFormValid(data);
        var validityChanged = oldValid !== newValid;
        this.setState({
            formValid: newValid
        }, function () {
            if (validityChanged) {
                _this.fireOnFormValid();
            }
        });
    };
    UploadArtifactForm.prototype.isFormValid = function (data) {
        return !!data.content && this.isIdValid(data.id) && this.isIdValid(data.groupId);
    };
    UploadArtifactForm.prototype.isIdValid = function (id) {
        if (!id) {
            //id is optional, server can generate it
            return true;
        }
        else {
            // character % breaks the ui
            var isAscii = function (str) {
                for (var i = 0; i < str.length; i++) {
                    if (str.charCodeAt(i) > 127) {
                        return false;
                    }
                }
                return true;
            };
            return id.indexOf("%") == -1 && isAscii(id);
        }
    };
    UploadArtifactForm.prototype.currentData = function () {
        return {
            content: this.state.content,
            groupId: this.state.group,
            id: this.state.id,
            type: this.state.type
        };
    };
    UploadArtifactForm.prototype.fireOnChange = function () {
        if (this.state.debouncedOnChange) {
            var data = this.currentData();
            this.state.debouncedOnChange(data);
        }
    };
    UploadArtifactForm.prototype.fireOnFormValid = function () {
        if (this.props.onValid) {
            this.props.onValid(this.state.formValid);
        }
    };
    UploadArtifactForm.prototype.typeLabel = function (type) {
        return artifactTypes.filter(function (t) {
            return t.id === type;
        }).map(function (t) { return t.label; })[0];
    };
    UploadArtifactForm.prototype.idValidated = function () {
        var data = this.currentData();
        if (this.isIdValid(data.id)) {
            if (!data.id) {
                return "default";
            }
            return "success";
        }
        else {
            return "error";
        }
    };
    UploadArtifactForm.prototype.groupValidated = function () {
        var data = this.currentData();
        if (this.isIdValid(data.groupId)) {
            if (!data.groupId) {
                return "default";
            }
            return "success";
        }
        else {
            return "error";
        }
    };
    return UploadArtifactForm;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* .PureComponent */ .Vx));



/***/ })

}]);
//# sourceMappingURL=690.bundle.740417e841d21cf38142.js.map