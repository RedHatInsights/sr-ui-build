(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[570],{

/***/ 19595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ RoleMappingsEmptyState)
});

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-icons@=4.10.7 (strict) (fallback: ./node_modules/@patternfly/react-icons/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(93179);
// EXTERNAL MODULE: ./src/app/components/index.ts + 2 modules
var components = __webpack_require__(21467);
// EXTERNAL MODULE: ./src/app/components/common/if.tsx
var common_if = __webpack_require__(24754);
;// CONCATENATED MODULE: ./src/app/pages/roles/components/empty/empty.tsx
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
var RoleMappingsEmptyState = /** @class */ (function (_super) {
    __extends(RoleMappingsEmptyState, _super);
    function RoleMappingsEmptyState(props) {
        return _super.call(this, props) || this;
    }
    RoleMappingsEmptyState.prototype.render = function () {
        var _this = this;
        return (index_js_eager_default().createElement(index_js_.EmptyState, { variant: index_js_.EmptyStateVariant.full },
            index_js_eager_default().createElement(index_js_.EmptyStateIcon, { icon: esm_index_js_.PlusCircleIcon }),
            index_js_eager_default().createElement(index_js_.Title, { headingLevel: "h5", size: "lg" }, "No Role Mappings"),
            index_js_eager_default().createElement(common_if.If, { condition: function () { return _this.props.isFiltered === true; } },
                index_js_eager_default().createElement(index_js_.EmptyStateBody, null, "No role mappings match your filter settings.  Change your filter or perhaps create a new role mapping.")),
            index_js_eager_default().createElement(common_if.If, { condition: function () { return !_this.props.isFiltered; } },
                index_js_eager_default().createElement(index_js_.EmptyStateBody, null, "There are currently no role mappings configured for the registry.  Click the \"Grant Access\" button above to grant access to a user."))));
    };
    RoleMappingsEmptyState.prototype.initializeState = function () {
        return {};
    };
    return RoleMappingsEmptyState;
}(components/* PureComponent */.Vx));


;// CONCATENATED MODULE: ./src/app/pages/roles/components/empty/index.ts
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

/***/ 5099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* reexport */ GrantAccessModal)
});

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: ./src/app/components/index.ts + 2 modules
var components = __webpack_require__(21467);
// EXTERNAL MODULE: ./src/models/index.ts + 3 modules
var models = __webpack_require__(19162);
;// CONCATENATED MODULE: ./src/app/pages/roles/components/modals/grantAccessModal.tsx
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
 * Models the modal dialog for granting access to a user.
 */
var GrantAccessModal = /** @class */ (function (_super) {
    __extends(GrantAccessModal, _super);
    function GrantAccessModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePrincipalChange = function (value) {
            _this.setMultiState({
                principalId: value,
                isValid: _this.checkValid(value, _this.state.role)
            });
        };
        _this.handleRoleChange = function (event) {
            _this.setMultiState({
                role: event.target.value,
                isValid: _this.checkValid(_this.state.principalId, event.target.value)
            });
        };
        _this.doGrantAccess = function () {
            _this.props.onGrant(_this.state.principalId, _this.state.role);
        };
        return _this;
    }
    GrantAccessModal.prototype.render = function () {
        return (index_js_eager_default().createElement(index_js_.Modal, { title: "Grant Access", variant: "medium", isOpen: this.props.isOpen, onClose: this.props.onClose, className: "grant-access-modal pf-m-redhat-font", actions: [
                index_js_eager_default().createElement(index_js_.Button, { key: "grant", variant: "primary", "data-testid": "modal-btn-grant", onClick: this.doGrantAccess, isDisabled: !this.state.isValid }, "Grant"),
                index_js_eager_default().createElement(index_js_.Button, { key: "cancel", variant: "link", "data-testid": "modal-btn-cancel", onClick: this.props.onClose }, "Cancel")
            ] },
            index_js_eager_default().createElement(index_js_.Form, null,
                index_js_eager_default().createElement(index_js_.FormGroup, { label: "Principal", isRequired: true, fieldId: "grant-access-principal", helperText: "Please provide a valid principal identifier" },
                    index_js_eager_default().createElement(index_js_.TextInput, { isRequired: true, type: "text", id: "grant-access-principal", name: "grant-access-principal", "aria-describedby": "grant-access-principal-helper", onChange: this.handlePrincipalChange })),
                index_js_eager_default().createElement(index_js_.FormGroup, { label: "Role", isRequired: true, fieldId: "grant-access-role" },
                    index_js_eager_default().createElement("select", { className: "pf-c-form-control pf-m-placeholder", id: "grant-access-role", name: "grant-access-role", "aria-label": "Select a role", value: this.state.role, onChange: this.handleRoleChange },
                        index_js_eager_default().createElement("option", { value: models.RoleTypes.READ_ONLY }, "Viewer"),
                        index_js_eager_default().createElement("option", { value: models.RoleTypes.DEVELOPER }, "Developer"),
                        index_js_eager_default().createElement("option", { value: models.RoleTypes.ADMIN }, "Admin"))))));
    };
    GrantAccessModal.prototype.initializeState = function () {
        return {
            isValid: false,
            principalId: "",
            role: models.RoleTypes.READ_ONLY
        };
    };
    GrantAccessModal.prototype.reset = function () {
        this.setMultiState(this.initializeState());
    };
    GrantAccessModal.prototype.checkValid = function (principalId, role) {
        if (!principalId) {
            return false;
        }
        if (!role) {
            return false;
        }
        return true;
    };
    return GrantAccessModal;
}(components/* PureComponent */.Vx));


;// CONCATENATED MODULE: ./src/app/pages/roles/components/modals/index.ts
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

/***/ 41016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ RoleList)
});

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: ./src/app/components/index.ts + 2 modules
var components = __webpack_require__(21467);
// EXTERNAL MODULE: ./src/models/index.ts + 3 modules
var models = __webpack_require__(19162);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-icons@=4.10.7 (strict) (fallback: ./node_modules/@patternfly/react-icons/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(93179);
;// CONCATENATED MODULE: ./src/app/pages/roles/components/roleList/roleList.tsx
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
 * Models the list of roles.
 */
var RoleList = /** @class */ (function (_super) {
    __extends(RoleList, _super);
    function RoleList(props) {
        var _this = _super.call(this, props) || this;
        _this.onRevokeModalClose = function () {
            _this.setSingleState("isRevokeModalOpen", false);
        };
        _this.doRevokeAccess = function () {
            _this.onRevokeModalClose();
            _this.props.onRevoke(_this.state.revokingPrincipalId);
        };
        return _this;
    }
    RoleList.prototype.render = function () {
        var _this = this;
        return (index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
            index_js_eager_default().createElement(index_js_.DataList, { "aria-label": "List of roles", className: "role-list" }, this.props.roles.sort(function (rm1, rm2) {
                return rm1.principalId.localeCompare(rm2.principalId);
            }).map(function (role, idx) {
                return index_js_eager_default().createElement(index_js_.DataListItemRow, { className: "role-list-item", key: role.principalId },
                    index_js_eager_default().createElement(index_js_.DataListItemCells, { dataListCells: [
                            index_js_eager_default().createElement(index_js_.DataListCell, { key: "type icon", className: "type-icon-cell" },
                                index_js_eager_default().createElement(esm_index_js_.UserIcon, null)),
                            index_js_eager_default().createElement(index_js_.DataListCell, { key: "main content", className: "content-cell" },
                                index_js_eager_default().createElement("span", { className: "role-txt role-principal" }, role.principalId),
                                index_js_eager_default().createElement("span", { className: "role-txt" }, "has been granted"),
                                index_js_eager_default().createElement("span", { className: "role-txt role-role" }, _this.roleName(role.role)),
                                index_js_eager_default().createElement("span", { className: "role-txt" }, "access."))
                        ] }),
                    index_js_eager_default().createElement(index_js_.DataListAction, { "aria-labelledby": "role-list-revoke-action-" + idx, id: "role-list-revoke-action-" + idx, "aria-label": "Revoke Access" },
                        index_js_eager_default().createElement(index_js_.Button, { key: role.principalId, variant: "secondary", className: "role-revoke-action", onClick: _this.onRevokeRoleMapping(role.principalId) },
                            index_js_eager_default().createElement(esm_index_js_.UnlockIcon, { className: "role-revoke-icon" }),
                            index_js_eager_default().createElement("span", null, "Revoke"))));
            })),
            index_js_eager_default().createElement(index_js_.Modal, { title: "Revoke Access", variant: "small", isOpen: this.state.isRevokeModalOpen, onClose: this.onRevokeModalClose, className: "revoke-access-modal pf-m-redhat-font", actions: [
                    index_js_eager_default().createElement(index_js_.Button, { key: "revoke", variant: "primary", "data-testid": "modal-btn-revoke", onClick: this.doRevokeAccess }, "Revoke"),
                    index_js_eager_default().createElement(index_js_.Button, { key: "cancel", variant: "link", "data-testid": "modal-btn-cancel", onClick: this.onRevokeModalClose }, "Cancel")
                ] },
                index_js_eager_default().createElement("p", null,
                    "Do you really want to revoke ",
                    this.state.revokingPrincipalId,
                    "'s access?"))));
    };
    RoleList.prototype.initializeState = function () {
        return {
            isRevokeModalOpen: false,
            revokingPrincipalId: ""
        };
    };
    RoleList.prototype.roleName = function (role) {
        switch (role) {
            case models.RoleTypes.DEVELOPER:
                return "Developer";
            case models.RoleTypes.ADMIN:
                return "Admin";
            case models.RoleTypes.READ_ONLY:
                return "Viewer";
        }
        return role;
    };
    RoleList.prototype.onRevokeRoleMapping = function (principalId) {
        var _this = this;
        return function () {
            _this.setMultiState({
                isRevokeModalOpen: true,
                revokingPrincipalId: principalId
            });
        };
    };
    ;
    return RoleList;
}(components/* PureComponent */.Vx));


;// CONCATENATED MODULE: ./src/app/pages/roles/components/roleList/index.ts
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

/***/ 54896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ RolesPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26619);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46768);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11940);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21467);
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
 * The global roles page.
 */
var RolesPage = /** @class */ (function (_super) {
    __extends(RolesPage, _super);
    function RolesPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onCreateRoleMapping = function () {
            _this.setSingleState("isCreateRoleMappingModalOpen", true);
        };
        _this.closeRoleMappingModal = function () {
            _this.setSingleState("isCreateRoleMappingModalOpen", false);
        };
        _this.createRoleMapping = function (principalId, role) {
            _this.closeRoleMappingModal();
            _this.pleaseWait(true, "Granting access, please wait...");
            _services__WEBPACK_IMPORTED_MODULE_3__.Services.getAdminService().createRoleMapping(principalId, role).then(function (mapping) {
                _this.pleaseWait(false, "");
                _this.setSingleState("roles", __spreadArrays([
                    mapping
                ], _this.state.roles));
            }).catch(function (e) { return _this.handleServerError(e, "Error granting access."); });
        };
        _this.onRevokeRoleMapping = function (principalId) {
            _this.pleaseWait(true, "Revoking access for " + principalId + ", please wait...");
            _services__WEBPACK_IMPORTED_MODULE_3__.Services.getAdminService().deleteRoleMapping(principalId).then(function () {
                _this.pleaseWait(false, "");
                _this.removeMapping(principalId);
            }).catch(function (e) { return _this.handleServerError(e, "Error revoking access."); });
        };
        _this.pleaseWait = function (isOpen, message) {
            _this.setMultiState({
                isPleaseWaitModalOpen: isOpen,
                pleaseWaitMessage: message
            });
        };
        return _this;
    }
    RolesPage.prototype.renderPage = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { className: "ps_roles-header", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light, padding: { default: "noPadding" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .RootPageHeader */ .N4, { tabKey: 2 })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { className: "ps_roles-description", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, "Manage access to the registry by granting/revoking roles to specific users.")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, { align: { default: "alignRight" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", "data-testid": "btn-grant-access", onClick: this.onCreateRoleMapping }, "Grant Access")))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.default, isFilled: true }, this.state.roles.length === 0 ?
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_4__/* .RoleMappingsEmptyState */ .gx, null)
                :
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_4__/* .RoleList */ .st, { roles: this.state.roles, onRevoke: this.onRevokeRoleMapping })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_4__/* .GrantAccessModal */ .C0, { isOpen: this.state.isCreateRoleMappingModalOpen, onClose: this.closeRoleMappingModal, onGrant: this.createRoleMapping }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .PleaseWaitModal */ .jb, { message: this.state.pleaseWaitMessage, isOpen: this.state.isPleaseWaitModalOpen })));
    };
    RolesPage.prototype.initializePageState = function () {
        return {
            isCreateRoleMappingModalOpen: false,
            isPleaseWaitModalOpen: false,
            pleaseWaitMessage: "",
            isLoading: true,
            roles: []
        };
    };
    // @ts-ignore
    RolesPage.prototype.createLoaders = function () {
        var _this = this;
        return _services__WEBPACK_IMPORTED_MODULE_3__.Services.getAdminService().getRoleMappings().then(function (roles) {
            _this.setMultiState({
                isLoading: false,
                roles: roles
            });
        });
    };
    RolesPage.prototype.removeMapping = function (principalId) {
        var newRoles = this.state.roles.filter(function (rm) {
            return rm.principalId !== principalId;
        });
        this.setSingleState("roles", newRoles);
    };
    return RolesPage;
}(_basePage__WEBPACK_IMPORTED_MODULE_2__/* .PageComponent */ .I));



/***/ })

}]);
//# sourceMappingURL=570.bundle.c9e9c7ca162589f0fb00.js.map