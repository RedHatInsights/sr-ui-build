"use strict";
(self["webpackChunk_apicurio_registry_ui"] = self["webpackChunk_apicurio_registry_ui"] || []).push([[60],{

/***/ 19595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ./src/app/components/index.ts + 3 modules
var components = __webpack_require__(60553);
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
                index_js_eager_default().createElement(index_js_.EmptyStateBody, null, "There are currently no role mappings configured for the registry.  Click the \"Grant Access\" button above to grant access to a user."),
                index_js_eager_default().createElement(index_js_.Button, { variant: "primary", "data-testid": "btn-grant-access", onClick: this.props.onCreateRoleMapping }, "Grant Access"))));
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

/***/ 38166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* reexport */ GrantAccessModal)
});

// UNUSED EXPORTS: SelectPrincipalAccount

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: ./src/services/index.ts + 16 modules
var services = __webpack_require__(46768);
// EXTERNAL MODULE: ./src/app/components/index.ts + 3 modules
var components = __webpack_require__(60553);
// EXTERNAL MODULE: ./src/models/index.ts + 3 modules
var models = __webpack_require__(19162);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-icons@=4.10.7 (strict) (fallback: ./node_modules/@patternfly/react-icons/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(93179);
;// CONCATENATED MODULE: ./src/app/pages/roles/components/modals/selectPrincipalAccount.tsx
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



var SelectPrincipalAccount = /** @class */ (function (_super) {
    __extends(SelectPrincipalAccount, _super);
    function SelectPrincipalAccount(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = function (isOpen) {
            _this.setSingleState("isOpen", isOpen);
        };
        _this.clearSelection = function () {
            _this.reset();
        };
        _this.onSelect = function (_event, selection, isPlaceholder) {
            if (isPlaceholder) {
                _this.clearSelection();
            }
            else {
                _this.setMultiState({
                    id: selection,
                    isOpen: false
                });
            }
            _this.props.onIdUpdate(selection);
        };
        return _this;
    }
    SelectPrincipalAccount.prototype.initializeState = function () {
        return {
            id: "",
            isOpen: false
        };
    };
    SelectPrincipalAccount.prototype.reset = function () {
        this.setMultiState(this.initializeState());
    };
    SelectPrincipalAccount.prototype.render = function () {
        var _a = this.props, initialOptions = _a.initialOptions, id = _a.id;
        return (index_js_eager_default().createElement(index_js_.Select, { variant: index_js_.SelectVariant.typeahead, typeAheadAriaLabel: "Select an account", onToggle: this.onToggle, onSelect: this.onSelect, onClear: this.clearSelection, selections: id, isOpen: this.state.isOpen, isInputValuePersisted: true, placeholderText: "Select an account", isCreatable: false, maxHeight: 400, isGrouped: true }, [
            index_js_eager_default().createElement(index_js_.SelectGroup, { label: "Service accounts", key: 'service_accounts_group' }, initialOptions
                .filter(function (principal) {
                return principal.principalType === "SERVICE_ACCOUNT";
            })
                .map(function (principal, index) { return (index_js_eager_default().createElement(index_js_.SelectOption, { key: index, value: principal.id, description: principal.displayName }, principal.id)); })),
            index_js_eager_default().createElement(index_js_.Divider, { key: 'divider' }),
            index_js_eager_default().createElement(index_js_.SelectGroup, { label: "User accounts", key: 'user_accounts_group' }, initialOptions
                .filter(function (principal) {
                return principal.principalType === "USER_ACCOUNT";
            })
                .map(function (principal, index) { return (index_js_eager_default().createElement(index_js_.SelectOption, { key: index, value: principal.id, description: principal.displayName }, principal.id)); })),
        ]));
    };
    ;
    return SelectPrincipalAccount;
}(components/* PureComponent */.Vx));


;// CONCATENATED MODULE: ./src/app/pages/roles/components/modals/grantAccessModal.tsx
/* provided dependency */ var console = __webpack_require__(25108);
var grantAccessModal_extends = (undefined && undefined.__extends) || (function () {
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








/**
 * Models the modal dialog for granting access to a user.
 */
var GrantAccessModal = /** @class */ (function (_super) {
    grantAccessModal_extends(GrantAccessModal, _super);
    function GrantAccessModal(props) {
        var _this = _super.call(this, props) || this;
        _this.onAccountIDClearSelection = function () {
            _this.setMultiState({
                accountID: "",
                isAccountIDSelectOpen: false
            });
        };
        _this.handlePrincipalChange = function (value) {
            _this.setMultiState({
                accountId: value,
                isValid: _this.checkValid(value, _this.state.role)
            });
        };
        _this.onAccountIDSelect = function (_event, selection, isPlaceholder) {
            if (isPlaceholder)
                _this.onAccountIDClearSelection();
            else {
                _this.setMultiState({
                    accountId: selection,
                    isValid: _this.checkValid(selection, _this.state.role),
                    isAccountIDSelectOpen: false
                });
                console.log('selected:', selection);
            }
        };
        _this.onAccountIDToggle = function (isOpen) {
            _this.setSingleState("isAccountIDSelectOpen", isOpen);
        };
        _this.handleRoleChange = function (_isChecked, event) {
            _this.setMultiState({
                role: event.target.value,
                isValid: _this.checkValid(_this.state.accountId, event.target.value)
            });
        };
        _this.doGrantAccess = function () {
            var _a;
            _this.props.onGrant(_this.state.accountId, _this.state.role, ((_a = _this.props.roles) === null || _a === void 0 ? void 0 : _a.find(function (role) { return role.principalId == _this.state.accountId; })) !== undefined);
            _this.reset();
        };
        return _this;
    }
    GrantAccessModal.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.defaultRole !== prevProps.defaultRole) {
            if (this.props.defaultRole) {
                this.setMultiState({
                    accountId: this.props.defaultRole.principalId,
                    role: this.props.defaultRole.role
                });
            }
            else {
                this.setMultiState({
                    accountId: "",
                    role: undefined
                });
            }
        }
    };
    GrantAccessModal.prototype.render = function () {
        var _this = this;
        var _a;
        var principals = services.Services.getConfigService().principals();
        return (index_js_eager_default().createElement(index_js_.Modal, { title: "Manage Permissions", description: "Manage access to resources in this Service Registry instance by assigning permissions to an account.", variant: "medium", isOpen: this.props.isOpen, onClose: this.props.onClose, className: "grant-access-modal pf-m-redhat-font", actions: [
                index_js_eager_default().createElement(index_js_.Button, { key: "grant", variant: "primary", "data-testid": "modal-btn-grant", onClick: this.doGrantAccess, isDisabled: !this.state.isValid }, this.props.isUpdateAccess ? "Update" : "Create"),
                index_js_eager_default().createElement(index_js_.Button, { key: "cancel", variant: "link", "data-testid": "modal-btn-cancel", onClick: this.props.onClose }, "Cancel")
            ] },
            index_js_eager_default().createElement(index_js_.Form, null,
                this.props.serviceRegistryInstance !== undefined ? (index_js_eager_default().createElement(index_js_.DescriptionList, null,
                    index_js_eager_default().createElement(index_js_.DescriptionListGroup, null,
                        index_js_eager_default().createElement(index_js_.DescriptionListTerm, null, "Service Registry instance"),
                        index_js_eager_default().createElement(index_js_.DescriptionListDescription, null, this.props.serviceRegistryInstance)))) : undefined,
                index_js_eager_default().createElement(index_js_.FormGroup, { label: "Account ID", labelIcon: index_js_eager_default().createElement(index_js_.Tooltip, { position: "top", content: index_js_eager_default().createElement("div", null, "A service account enables your application or tool to connect securely to your resources. A user account enables users in your organization to access resources.") },
                        index_js_eager_default().createElement(esm_index_js_.OutlinedQuestionCircleIcon, null)), isRequired: true, fieldId: "grant-access-account-id" }, principals ? index_js_eager_default().createElement(SelectPrincipalAccount, { id: this.state.accountId, onIdUpdate: function (id) {
                        _this.setMultiState({
                            accountId: id,
                            isValid: _this.checkValid(id, _this.state.role),
                            isAccountIDSelectOpen: false
                        });
                    }, initialOptions: principals ? principals : [] }) :
                    this.props.roles !== null ?
                        index_js_eager_default().createElement(index_js_.Select, { id: "grant-access-principal", name: "grant-access-principal", variant: index_js_.SelectVariant.typeahead, typeAheadAriaLabel: "Select an account ID", onToggle: this.onAccountIDToggle, onSelect: this.onAccountIDSelect, onClear: this.onAccountIDClearSelection, selections: this.state.accountId, isOpen: this.state.isAccountIDSelectOpen, isInputValuePersisted: true, placeholderText: this.props.isUpdateAccess ? (_a = this.props.defaultRole) === null || _a === void 0 ? void 0 : _a.principalId : "Select an account ID", maxHeight: '100px', isDisabled: this.props.isUpdateAccess }, this.props.roles.map(function (option, index) { return (index_js_eager_default().createElement(index_js_.SelectOption, { key: index, value: option.principalId })); })) :
                        index_js_eager_default().createElement(index_js_.TextInput, { isRequired: true, type: "text", id: "grant-access-principal", name: "grant-access-principal", "aria-describedby": "grant-access-principal-helper", onChange: this.handlePrincipalChange })),
                index_js_eager_default().createElement(index_js_.FormGroup, { label: "Role", isRequired: true, fieldId: "grant-access-role" },
                    index_js_eager_default().createElement(index_js_.Radio, { id: "grant-access-role-admin", className: "grant-access-radio-button", name: "grant-access-role", label: "Administrator", description: "Give roles to other principals on this Service Registry instance, configure global rules, and access data import and export features.", value: models.RoleTypes.ADMIN, onChange: this.handleRoleChange, isChecked: this.state.role == models.RoleTypes.ADMIN }),
                    index_js_eager_default().createElement(index_js_.Radio, { id: "grant-access-role-manager", className: "grant-access-radio-button", name: "grant-access-role", label: "Manager", description: "Read and write artifacts on this Service Registry instance.", value: models.RoleTypes.DEVELOPER, onChange: this.handleRoleChange, isChecked: this.state.role == models.RoleTypes.DEVELOPER }),
                    index_js_eager_default().createElement(index_js_.Radio, { id: "grant-access-role-viewer", className: "grant-access-radio-button", name: "grant-access-role", label: "Viewer", description: "Read artifacts on this Service Registry instance.", value: models.RoleTypes.READ_ONLY, onChange: this.handleRoleChange, isChecked: this.state.role == models.RoleTypes.READ_ONLY })))));
    };
    GrantAccessModal.prototype.initializeState = function () {
        return {
            isAccountIDSelectOpen: false,
            isValid: false,
            accountId: this.props.isUpdateAccess && this.props.roles ? this.props.roles[0].principalId : "",
            role: undefined
        };
    };
    GrantAccessModal.prototype.reset = function () {
        this.setMultiState(this.initializeState());
    };
    GrantAccessModal.prototype.checkValid = function (accountId, role) {
        if (!accountId) {
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


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ RoleList)
});

// EXTERNAL MODULE: consume shared module (default) react@=17.0.1 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(48121);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-core@=4.121.1 (strict) (fallback: ./node_modules/@patternfly/react-core/dist/esm/index.js)
var index_js_ = __webpack_require__(90847);
// EXTERNAL MODULE: consume shared module (default) @patternfly/react-table@=4.27.7 (strict) (fallback: ./node_modules/@patternfly/react-table/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(74057);
// EXTERNAL MODULE: ./src/app/components/index.ts + 3 modules
var components = __webpack_require__(60553);
// EXTERNAL MODULE: ./src/models/index.ts + 3 modules
var models = __webpack_require__(19162);
// EXTERNAL MODULE: ./src/app/pages/roles/components/empty/index.ts + 1 modules
var empty = __webpack_require__(19595);
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
        _this.onRevokeRoleMapping = function (principalId) {
            _this.setMultiState({
                isRevokeModalOpen: true,
                revokingPrincipalId: principalId
            });
        };
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
        var roleActions = function (role) { return [
            {
                title: 'Edit',
                onClick: function () { _this.props.onEditRoleMapping(role); }
            },
            {
                title: 'Revoke Access',
                onClick: function () { _this.onRevokeRoleMapping(role.principalId); }
            }
        ]; };
        var filteredRoles = this.props.roles.sort(function (rm1, rm2) {
            return rm1.principalId.localeCompare(rm2.principalId);
        }).filter(function (role) {
            if (_this.props.roleFilter.principalId.length > 0) {
                return role.principalId.includes(_this.props.roleFilter.principalId);
            }
            return true;
        }).filter(function (role) {
            if (_this.props.roleFilter.role.length > 0) {
                switch (role.role) {
                    case models.RoleTypes.DEVELOPER:
                        return "Manager".includes(_this.props.roleFilter.role);
                    case models.RoleTypes.ADMIN:
                        return "Admin".includes(_this.props.roleFilter.role);
                    case models.RoleTypes.READ_ONLY:
                        return "Viewer".includes(_this.props.roleFilter.role);
                }
            }
            return true;
        });
        return (filteredRoles.length === 0 ?
            index_js_eager_default().createElement(empty/* RoleMappingsEmptyState */.g, { isFiltered: true }) :
            index_js_eager_default().createElement((index_js_eager_default()).Fragment, null,
                index_js_eager_default().createElement(esm_index_js_.TableComposable, null,
                    index_js_eager_default().createElement(esm_index_js_.Thead, null,
                        index_js_eager_default().createElement(esm_index_js_.Tr, null,
                            index_js_eager_default().createElement(esm_index_js_.Th, null, "Account"),
                            index_js_eager_default().createElement(esm_index_js_.Th, null, "Role"))),
                    index_js_eager_default().createElement(esm_index_js_.Tbody, null, filteredRoles.map(function (role, rowIndex) {
                        return index_js_eager_default().createElement(esm_index_js_.Tr, { key: rowIndex },
                            index_js_eager_default().createElement(esm_index_js_.Td, null, role.principalId),
                            index_js_eager_default().createElement(esm_index_js_.Td, null, _this.roleName(role.role)),
                            index_js_eager_default().createElement(esm_index_js_.Td, { className: "role-list-action-column", key: rowIndex + "_2", actions: {
                                    items: roleActions(role)
                                } }));
                    }))),
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
            revokingPrincipalId: "",
            currentRole: this.props.roles[0],
        };
    };
    RoleList.prototype.roleName = function (role) {
        switch (role) {
            case models.RoleTypes.DEVELOPER:
                return "Manager";
            case models.RoleTypes.ADMIN:
                return "Admin";
            case models.RoleTypes.READ_ONLY:
                return "Viewer";
        }
        return role;
    };
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ RolesPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90847);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93179);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _basePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26619);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46768);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11940);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60553);
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








var roleFilterOptions = ['Account', 'Role'];
/**
 * The global roles page.
 */
var RolesPage = /** @class */ (function (_super) {
    __extends(RolesPage, _super);
    function RolesPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onRoleFilterToggle = function (isExpanded) {
            _this.setSingleState("roleListFilterOpened", isExpanded);
        };
        _this.onRoleFilterSelect = function (_event, selection, isPlaceholder) {
            _this.setMultiState({
                roleFilterSelected: selection,
                roleListFilterOpened: false
            });
        };
        _this.onRoleFilterInputChange = function (value) {
            _this.setSingleState("roleFilterTextInputValue", value);
        };
        _this.onRoleFilterApplyClick = function () {
            var _a;
            var newRoleMappingFilter = {
                principalId: _this.state.roleFilterSelected == roleFilterOptions[0] ? _this.state.roleFilterTextInputValue : (_a = _this.state.roleFilter) === null || _a === void 0 ? void 0 : _a.principalId,
                role: _this.state.roleFilterSelected == roleFilterOptions[1] ? _this.state.roleFilterTextInputValue : _this.state.roleFilter.role
            };
            _this.setSingleState("roleFilter", newRoleMappingFilter);
        };
        _this.onCreateRoleMapping = function () {
            _this.setSingleState("isCreateRoleMappingModalOpen", true);
        };
        _this.closeRoleMappingModal = function () {
            _this.setMultiState({
                selectedRole: undefined,
                isRoleMappingUpdate: false,
                isCreateRoleMappingModalOpen: false
            });
        };
        _this.onEditRoleMapping = function (role) {
            _this.setMultiState({
                selectedRole: role,
                isRoleMappingUpdate: true
            });
            _this.onCreateRoleMapping();
        };
        _this.onUpdateRoleMapping = function (principalId, role) {
            _this.pleaseWait(true, "Granting access, please wait...");
            _services__WEBPACK_IMPORTED_MODULE_4__.Services.getAdminService().updateRoleMapping(principalId, role).then(function (mapping) {
                var currentRoleMappings = _this.state.roles;
                currentRoleMappings.map(function (role, index) {
                    if (role.principalId == mapping.principalId) {
                        currentRoleMappings[index] = mapping;
                        console.log("found role");
                    }
                });
                _this.pleaseWait(false, "");
                _this.setSingleState("roles", __spreadArrays(currentRoleMappings));
            }).catch(function (e) { return _this.handleServerError(e, "Error updating access."); });
        };
        _this.createRoleMapping = function (principalId, role, isUpdate) {
            _this.closeRoleMappingModal();
            if (isUpdate) {
                _this.onUpdateRoleMapping(principalId, role);
            }
            else {
                _this.pleaseWait(true, "Granting access, please wait...");
                _services__WEBPACK_IMPORTED_MODULE_4__.Services.getAdminService().createRoleMapping(principalId, role).then(function (mapping) {
                    _this.pleaseWait(false, "");
                    _this.setSingleState("roles", __spreadArrays([
                        mapping
                    ], _this.state.roles));
                }).catch(function (e) { return _this.handleServerError(e, "Error granting access."); });
            }
        };
        _this.onRevokeRoleMapping = function (principalId) {
            _this.pleaseWait(true, "Revoking access for " + principalId + ", please wait...");
            _services__WEBPACK_IMPORTED_MODULE_4__.Services.getAdminService().deleteRoleMapping(principalId).then(function () {
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
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { className: "ps_roles-header", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light, padding: { default: "noPadding" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_6__/* .RootPageHeader */ .N4, { tabKey: 2 })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants["default"], isFilled: true, className: "ps_role-section" }, this.state.roles.length === 0 ?
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .RoleMappingsEmptyState */ .gx, { onCreateRoleMapping: this.onCreateRoleMapping })
                :
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, { id: "toolbar", clearAllFilters: function () {
                                _this.setSingleState("roleFilter", {
                                    principalId: "",
                                    role: ""
                                });
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarContent, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, { className: "ps_role-filter-select-toolbar-item" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Select, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SelectVariant.single, "aria-label": "Filter On", onToggle: this.onRoleFilterToggle, onSelect: this.onRoleFilterSelect, selections: this.state.roleFilterSelected, isOpen: this.state.roleListFilterOpened }, roleFilterOptions.map(function (option, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SelectOption, { key: index, value: option })); }))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.InputGroup, null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: this.state.roleFilterTextInputValue, name: "roleFilterInput", id: "roleFilterInput", type: "search", "aria-label": "role filter input", onChange: this.onRoleFilterInputChange }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ButtonVariant.control, "aria-label": "search button for search input", onClick: this.onRoleFilterApplyClick },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, null)))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", "data-testid": "btn-grant-access", onClick: this.onCreateRoleMapping }, "Grant Access")),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarFilter, { chips: this.state.roleFilter.principalId.length > 0 ? [this.state.roleFilter.principalId] : undefined, deleteChip: function () {
                                            _this.setSingleState("roleFilter", {
                                                principalId: "",
                                                role: _this.state.roleFilter.role
                                            });
                                        }, categoryName: "Account" }, " "),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarFilter, { chips: this.state.roleFilter.role.length > 0 ? [this.state.roleFilter.role] : undefined, deleteChip: function () {
                                            _this.setSingleState("roleFilter", {
                                                principalId: _this.state.roleFilter.principalId,
                                                role: ""
                                            });
                                        }, categoryName: "Role" }, " ")))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .RoleList */ .st, { roles: this.state.roles, roleFilter: this.state.roleFilter, onRevoke: this.onRevokeRoleMapping, onEditRoleMapping: this.onEditRoleMapping }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .GrantAccessModal */ .C0, { isOpen: this.state.isCreateRoleMappingModalOpen, isUpdateAccess: this.state.isRoleMappingUpdate, onClose: this.closeRoleMappingModal, onGrant: this.createRoleMapping, roles: this.state.isRoleMappingUpdate ? this.state.roles : null, defaultRole: this.state.selectedRole }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_6__/* .PleaseWaitModal */ .jb, { message: this.state.pleaseWaitMessage, isOpen: this.state.isPleaseWaitModalOpen })));
    };
    RolesPage.prototype.initializePageState = function () {
        return {
            isCreateRoleMappingModalOpen: false,
            isPleaseWaitModalOpen: false,
            isRoleMappingUpdate: false,
            pleaseWaitMessage: "",
            isLoading: true,
            selectedRole: undefined,
            roles: [],
            roleFilter: { principalId: "", role: "" },
            roleListFilterOpened: false,
            roleFilterSelected: roleFilterOptions[0],
            roleFilterTextInputValue: ""
        };
    };
    // @ts-ignore
    RolesPage.prototype.createLoaders = function () {
        var _this = this;
        return _services__WEBPACK_IMPORTED_MODULE_4__.Services.getAdminService().getRoleMappings().then(function (roles) {
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
}(_basePage__WEBPACK_IMPORTED_MODULE_3__/* .PageComponent */ .I));



/***/ })

}]);
//# sourceMappingURL=60.bundle.2fd551203b929e622a4d.js.map