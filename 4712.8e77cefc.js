/*! For license information please see 4712.8e77cefc.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[4712,2752,8199,8115],{35374:(e,t,r)=>{r.d(t,{N:()=>s});var n,o=r(93264),a=r.n(o),i=r(81167),l=r(99926),c=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e){function t(t){return e.call(this,t)||this}return c(t,e),t.prototype.render=function(){return this.accept()?a().createElement(a().Fragment,{children:this.props.children}):a().createElement(a().Fragment,null)},t.prototype.initializeState=function(){return{}},t.prototype.accept=function(){var e=l.K9.getAuthService(),t=!0;return void 0!==this.props.enabled&&(t=t&&e.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(t=t&&e.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(t=t&&e.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(t=t&&e.isUserDeveloper(this.props.owner)===this.props.isDeveloper),void 0!==this.props.isOwner&&this.props.owner&&(t=this.props.isOwner?t&&e.isUserId(this.props.owner):t&&!e.isUserId(this.props.owner)),!0===this.props.isAdminOrOwner&&this.props.owner&&(t=t&&(!0===e.isUserAdmin()||e.isUserId(this.props.owner))),t},t}(i.V)},26068:(e,t,r)=>{r.d(t,{Q:()=>s});var n,o=r(93264),a=r.n(o),i=r(81167),l=r(99926),c=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e){function t(t){return e.call(this,t)||this}return c(t,e),t.prototype.render=function(){return this.accept()?a().createElement(a().Fragment,{children:this.props.children}):a().createElement(a().Fragment,null)},t.prototype.initializeState=function(){return{}},t.prototype.accept=function(){var e=l.K9.getConfigService().features()[this.props.feature];return void 0!==this.props.is?e===this.props.is:void 0!==this.props.isNot?e!==this.props.isNot:void 0!==e},t}(i.V)},98227:(e,t,r)=>{r.d(t,{N:()=>i});var n=r(93264),o=r.n(n),a=r(99922),i=function(e){var t=e.collection,r=e.emptyState,n=e.emptyStateTitle,i=e.emptyStateMessage,l=e.children,c=r||o().createElement(a.EmptyState,{variant:a.EmptyStateVariant.xs},o().createElement(a.Title,{headingLevel:"h4",size:"md"},n||"None found"),o().createElement(a.EmptyStateBody,null,i||"No items found."));return t&&0!==t.length?o().createElement(o().Fragment,{children:l}):o().createElement(o().Fragment,{children:c})}},66092:(e,t,r)=>{r.d(t,{t:()=>f,N:()=>m});var n,o=r(93264),a=r.n(o),i=(r(3195),r(99922)),l=r(43221),c=r(81167),s=r(35374),p=r(46022),u=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),f=function(e){function t(t){return e.call(this,t)||this}return u(t,e),t.prototype.render=function(){var e;return e=a().createElement(i.PageHeaderTools,{className:"header-toolbar"},a().createElement(i.PageHeaderToolsGroup,null,a().createElement(i.PageHeaderToolsItem,{id:"avatar"},a().createElement(s.N,{enabled:!0},a().createElement(p.K,null))))),a().createElement(i.PageHeader,{logo:a().createElement(i.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:l.Z,alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:e})},t.prototype.initializeState=function(){return{}},t}(c.V),d=(r(83847),r(91344)),g=r(99926),h=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),m=function(e){function t(t){var r=e.call(this,t)||this;return r.handleTabClick=function(e,t){t!==r.props.tabKey&&(0===t&&r.navigateTo(r.linkTo("/artifacts"))(),1===t&&r.navigateTo(r.linkTo("/rules"))(),2===t&&r.navigateTo(r.linkTo("/roles"))(),3===t&&r.navigateTo(r.linkTo("/settings"))())},r}return h(t,e),t.prototype.render=function(){var e=[a().createElement(i.Tab,{key:0,eventKey:0,title:a().createElement(i.TabTitleText,null,"Artifacts")}),a().createElement(i.Tab,{key:1,eventKey:1,title:a().createElement(i.TabTitleText,null,"Global rules")})];return g.K9.getConfigService().featureRoleManagement()&&e.push(a().createElement(i.Tab,{key:2,eventKey:2,title:a().createElement(i.TabTitleText,null,"Access")})),g.K9.getConfigService().featureSettings()&&e.push(a().createElement(i.Tab,{key:3,eventKey:3,title:a().createElement(i.TabTitleText,null,"Settings")})),a().createElement("div",null,a().createElement(d.No,{isAdmin:!0},a().createElement(i.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:e})))},t.prototype.initializeState=function(){return{}},t}(c.V)},72058:(e,t,r)=>{var n,o=r(56550),a=r(2331),i=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});!function(e){function t(t){return e.call(this,t)||this}i(t,e),t.prototype.postConstruct=function(){a.m.updateConfiguration(this.props),e.prototype.postConstruct.call(this)}}(o.F)},23311:(e,t,r)=>{r.d(t,{XT:()=>n.X});var n=r(47230);r(68470)},27297:(e,t,r)=>{r.d(t,{p:()=>n.p});var n=r(72896);r(85654)},54287:(e,t,r)=>{r.d(t,{IK:()=>n.I,fP:()=>a.f,pX:()=>o.p});var n=r(29646),o=r(72627),a=r(74789);r(4080)},11635:(e,t,r)=>{r.d(t,{G:()=>n.G});var n=r(75602)},59442:(e,t,r)=>{r.d(t,{ye:()=>n.y});var n=r(79570);r(48853),r(67859)},92321:(e,t,r)=>{r.d(t,{B:()=>n.B});var n=r(49423)},34782:(e,t,r)=>{r.d(t,{U:()=>n.U});var n=r(6774)},14658:(e,t,r)=>{r.d(t,{k:()=>n.k});var n=r(29500)},89872:(e,t,r)=>{r.d(t,{C0:()=>a.C,gx:()=>n.g,jx:()=>a.j,st:()=>o.s});var n=r(55194),o=r(51680),a=r(95101)},18338:(e,t,r)=>{r.d(t,{jx:()=>n.jx,sE:()=>o.s});var n=r(89872),o=r(58306)},58306:(e,t,r)=>{r.d(t,{s:()=>y});var n,o=r(93264),a=r.n(o),i=(r(77685),r(99922)),l=r(67646),c=r(37799),s=r(99926),p=r(89872),u=r(79824),f=r(8556),d=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)},h=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)n[o]=a[i];return n},m=["Account","Role"],y=function(e){function t(t){var r=e.call(this,t)||this;return r.onRoleFilterToggle=function(e){r.setSingleState("roleListFilterOpened",e)},r.onRoleFilterSelectToggle=function(e){r.setSingleState("roleFilterSelectInputOpened",e)},r.onRoleFilterSelect=function(e,t,n){r.setMultiState({roleFilterSelected:t,roleListFilterOpened:!1})},r.onRoleFilterInputChange=function(e){r.setSingleState("roleFilterTextInputValue",e)},r.onRoleFilterTextInputKeydown=function(e){"Enter"===e.key&&r.onRoleFilterApplyClick()},r.onRoleFilterApplyClick=function(){var e,t,n={principalId:r.state.roleFilterSelected==m[0]?r.state.roleFilterTextInputValue:null===(e=r.state.roleFilter)||void 0===e?void 0:e.principalId,role:r.state.roleFilterSelected==m[1]?r.state.roleFilterSelectInputValue:r.state.roleFilter.role,principalName:r.state.roleFilterSelected==m[0]?r.state.roleFilterTextInputValue:null===(t=r.state.roleFilter)||void 0===t?void 0:t.principalId};r.setMultiState({roleFilter:n,roleFilterTextInputValue:""})},r.onCreateRoleMapping=function(){r.setSingleState("isCreateRoleMappingModalOpen",!0)},r.isAccountFilterSelected=function(){return r.state.roleFilterSelected==m[0]},r.isRoleFilterSelected=function(){return r.state.roleFilterSelected==m[1]},r.onRoleFilterSelectChange=function(e,t,n){r.setMultiState({roleFilterSelectInputValue:t,roleFilterSelectInputOpened:!1},(function(){return r.onRoleFilterApplyClick()}))},r.closeRoleMappingModal=function(){r.setMultiState({selectedRole:void 0,isRoleMappingUpdate:!1,isCreateRoleMappingModalOpen:!1})},r.onEditRoleMapping=function(e){r.setMultiState({selectedRole:e,isRoleMappingUpdate:!0}),r.onCreateRoleMapping()},r.updateRoleMapping=function(e,t){r.pleaseWait(!0,"Granting access, please wait..."),s.K9.getAdminService().updateRoleMapping(e.id,t).then((function(t){var n=r.state.roles;n.forEach((function(r,o){r.principalId===t.principalId&&(n[o]=g(g({},t),{principalName:e.displayName}))})),r.pleaseWait(!1,""),r.setSingleState("roles",h(n))})).catch((function(e){return r.handleServerError(e,"Error updating access.")}))},r.createRoleMapping=function(e,t,n){r.closeRoleMappingModal(),n?r.updateRoleMapping(e,t):(r.pleaseWait(!0,"Granting access, please wait..."),s.K9.getAdminService().createRoleMapping(e.id,t,e.displayName).then((function(e){r.pleaseWait(!1,""),r.setSingleState("roles",h([e],r.state.roles))})).catch((function(n){409===(null==n?void 0:n.error_code)?r.updateRoleMapping(e,t):r.handleServerError(n,"Error granting access.")})))},r.onRevokeRoleMapping=function(e){r.pleaseWait(!0,"Revoking access for "+e+", please wait..."),s.K9.getAdminService().deleteRoleMapping(e).then((function(){r.pleaseWait(!1,""),r.removeMapping(e)})).catch((function(e){return r.handleServerError(e,"Error revoking access.")}))},r.pleaseWait=function(e,t){r.setMultiState({isPleaseWaitModalOpen:e,pleaseWaitMessage:t})},r}return d(t,e),t.prototype.renderPage=function(){var e=this;return a().createElement(a().Fragment,null,a().createElement(i.PageSection,{className:"ps_roles-header",variant:i.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(u.N4,{tabKey:2})),a().createElement(i.PageSection,{variant:i.PageSectionVariants.default,isFilled:!0,className:"ps_role-section"},0===this.state.roles.length?a().createElement(p.gx,{onCreateRoleMapping:this.onCreateRoleMapping}):a().createElement(a().Fragment,null,a().createElement(i.Toolbar,{id:"toolbar",clearAllFilters:function(){e.setSingleState("roleFilter",{principalId:"",role:"",principalName:""})}},a().createElement(i.ToolbarContent,null,a().createElement(i.ToolbarGroup,null,a().createElement(i.ToolbarItem,{className:"ps_role-filter-select-toolbar-item"},a().createElement(i.Select,{variant:i.SelectVariant.single,"aria-label":"Filter On",onToggle:this.onRoleFilterToggle,onSelect:this.onRoleFilterSelect,selections:this.state.roleFilterSelected,isOpen:this.state.roleListFilterOpened},m.map((function(e,t){return a().createElement(i.SelectOption,{key:t,value:e})})))),a().createElement(i.ToolbarItem,null,a().createElement(i.InputGroup,null,this.isRoleFilterSelected()?a().createElement(i.Select,{variant:i.SelectVariant.single,"aria-label":"Role",onToggle:this.onRoleFilterSelectToggle,onSelect:this.onRoleFilterSelectChange,isOpen:this.state.roleFilterSelectInputOpened,placeholderText:"Filter by role"},a().createElement(i.SelectOption,{key:1,value:"Administrator"}),a().createElement(i.SelectOption,{key:2,value:"Manager"}),a().createElement(i.SelectOption,{key:3,value:"Viewer"})):a().createElement(i.TextInput,{value:this.state.roleFilterTextInputValue,placeholder:"Filter by account",name:"roleFilterInput",id:"roleFilterInput",type:"search","aria-label":"role filter input",onKeyDown:this.onRoleFilterTextInputKeydown,onChange:this.onRoleFilterInputChange}),a().createElement(f.If,{condition:this.isAccountFilterSelected},a().createElement(i.Button,{variant:i.ButtonVariant.control,"aria-label":"search button for search input",onClick:this.onRoleFilterApplyClick},a().createElement(l.SearchIcon,null))))),a().createElement(i.ToolbarItem,null,a().createElement(i.Button,{variant:"primary","data-testid":"btn-grant-access",onClick:this.onCreateRoleMapping},"Grant access")),a().createElement(i.ToolbarFilter,{chips:this.state.roleFilter.principalId.length>0?[this.state.roleFilter.principalId]:void 0,deleteChip:function(){e.setSingleState("roleFilter",{principalId:"",role:e.state.roleFilter.role,principalName:""})},categoryName:"Account"}," "),a().createElement(i.ToolbarFilter,{chips:this.state.roleFilter.role.length>0?[this.state.roleFilter.role]:void 0,deleteChip:function(){e.setSingleState("roleFilter",{principalId:e.state.roleFilter.principalId,role:"",principalName:e.state.roleFilter.principalName})},categoryName:"Role"}," ")))),a().createElement(p.st,{roles:this.state.roles,roleFilter:this.state.roleFilter,onRevoke:this.onRevokeRoleMapping,onEditRoleMapping:this.onEditRoleMapping}))),a().createElement(p.C0,{isOpen:this.state.isCreateRoleMappingModalOpen,isUpdateAccess:this.state.isRoleMappingUpdate,onClose:this.closeRoleMappingModal,onGrant:this.createRoleMapping,roles:this.state.isRoleMappingUpdate?this.state.roles:null,defaultRole:this.state.selectedRole}),a().createElement(u.jb,{message:this.state.pleaseWaitMessage,isOpen:this.state.isPleaseWaitModalOpen}))},t.prototype.initializePageState=function(){return{isCreateRoleMappingModalOpen:!1,isPleaseWaitModalOpen:!1,isRoleMappingUpdate:!1,pleaseWaitMessage:"",selectedRole:void 0,roles:[],roleFilter:{principalId:"",role:"",principalName:""},roleListFilterOpened:!1,roleFilterSelected:m[0],roleFilterTextInputValue:"",roleFilterSelectInputValue:"",roleFilterSelectInputOpened:!1}},t.prototype.createLoaders=function(){var e=this;return s.K9.getAdminService().getRoleMappings().then((function(t){e.setMultiState({isLoading:!1,roles:t})}))},t.prototype.removeMapping=function(e){var t=this.state.roles.filter((function(t){return t.principalId!==e}));this.setSingleState("roles",t)},t}(c.I)},98635:(e,t,r)=>{r.r(t);var n,o=r(93264),a=r.n(o),i=r(3644),l=r.n(i),c=r(99922),s=r(68199),p=r(66092),u=r(37799),f=r(43759),d=r(99926),g=r(79824),h=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),m=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)n[o]=a[i];return n},y=function(e){function t(t){var r=e.call(this,t)||this;return r.doEnableRule=function(e){d.K9.getLoggerService().debug("[RulesPage] Enabling global rule:",e);var t="FULL";"COMPATIBILITY"===e&&(t="BACKWARD"),d.K9.getAdminService().createRule(e,t).catch((function(t){r.handleServerError(t,'Error enabling "'+e+'" global rule.')})),r.setSingleState("rules",m(r.rules(),[{config:t,type:e}]))},r.doDisableRule=function(e){d.K9.getLoggerService().debug("[RulesPage] Disabling global rule:",e),d.K9.getAdminService().deleteRule(e).catch((function(t){r.handleServerError(t,'Error disabling "'+e+'" global rule.')})),r.setSingleState("rules",r.rules().filter((function(t){return t.type!==e})))},r.doConfigureRule=function(e,t){d.K9.getLoggerService().debug("[RulesPage] Configuring global rule:",e,t),d.K9.getAdminService().updateRule(e,t).catch((function(t){r.handleServerError(t,'Error configuring "'+e+'" global rule.')})),r.setSingleState("rules",r.rules().map((function(r){return r.type===e?{config:t,type:r.type}:r})))},r}return h(t,e),t.prototype.renderPage=function(){return a().createElement(a().Fragment,null,a().createElement(c.PageSection,{className:"ps_rules-header",variant:c.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(g.N4,{tabKey:1})),a().createElement(c.PageSection,{className:"ps_rules-description",variant:c.PageSectionVariants.light},a().createElement(c.TextContent,null,"Manage the list of global rules for this registry. Rules can be enabled, disabled, and individually configured.")),a().createElement(c.PageSection,{variant:c.PageSectionVariants.default,isFilled:!0},a().createElement(a().Fragment,null,a().createElement(f.RB,{rules:this.rules(),onEnableRule:this.doEnableRule,onDisableRule:this.doDisableRule,onConfigureRule:this.doConfigureRule}))))},t.prototype.initializePageState=function(){return{rules:null}},t.prototype.createLoaders=function(){var e=this;return d.K9.getAdminService().getRules().then((function(t){e.setMultiState({isLoading:!1,rules:t})}))},t.prototype.rules=function(){return this.state.rules?this.state.rules:[]},t}(u.I),v=r(37627),S=(r(59442),r(92321),r(34782),r(14658),function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),E=function(e){function t(t){return e.call(this,t)||this}return S(t,e),t.prototype.renderPage=function(){var e=this.groupIdParam(),t=this.artifactIdParam(),r=this.linkTo("/artifacts/"+encodeURIComponent(e)+"/"+encodeURIComponent(t)+"/versions/latest");return d.K9.getLoggerService().info("[ArtifactRedirectPage] Redirecting to: %s",r),a().createElement(s.Redirect,{to:r})},t.prototype.groupIdParam=function(){return this.getPathParam("groupId")},t.prototype.artifactIdParam=function(){return this.getPathParam("artifactId")},t.prototype.initializePageState=function(){return{}},t}(u.I),b=(r(27297),r(23311),r(54287),r(11635),r(85029)),_=r(5977),P=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),R=function(e){function t(t){return e.call(this,t)||this}return P(t,e),t.prototype.renderPage=function(){return a().createElement(_.l_,{to:"/artifacts"})},t.prototype.initializePageState=function(){return{}},t}(u.I),C=r(67646),O=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),F=function(e){function t(t){return e.call(this,t)||this}return O(t,e),t.prototype.renderPage=function(){return a().createElement(a().Fragment,null,a().createElement(c.PageSection,{className:"ps_rules-header",variant:c.PageSectionVariants.light},a().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full},a().createElement(c.EmptyStateIcon,{icon:C.ExclamationCircleIcon}),a().createElement(c.Title,{headingLevel:"h5",size:"lg"},"404 Error: page not found"),a().createElement(c.EmptyStateBody,null,"This page couldn't be found.  If you think this is a bug, please report the issue."),a().createElement(c.Button,{variant:"primary","data-testid":"error-btn-artifacts",onClick:this.navigateTo(this.linkTo("/artifacts"))},"Show all artifacts"))))},t.prototype.initializePageState=function(){return{}},t}(u.I),I=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),T=function(e){function t(t){var r=e.call(this,t)||this;return r.handleInputChange=function(e){var t=r.state.isValid,n=r.validate(e);r.setMultiState({currentValue:e,isDirty:e!==r.props.value,isValid:n},(function(){t!==n&&r.props.onValid(n),r.props.onChange(e)}))},r.handleKeyPress=function(e){"Escape"===e.code&&r.props.onCancel(),"Enter"===e.code&&r.state.isDirty&&r.state.isValid&&r.props.onSave()},r}return I(t,e),t.prototype.render=function(){return a().createElement(c.InputGroup,null,a().createElement(c.TextInput,{name:this.props.name,value:this.state.currentValue,validated:this.validated(),onChange:this.handleInputChange,onKeyDown:this.handleKeyPress,"aria-label":"configuration property input"}))},t.prototype.initializeState=function(){return{currentValue:this.props.value,isDirty:!1,isValid:!0}},t.prototype.validated=function(){return this.state.isValid?"default":"error"},t.prototype.validate=function(e){if("text"===this.props.type)return e.trim().length>0;if("number"===this.props.type){if(0===e.trim().length)return!1;var t=Number(e);return Number.isInteger(t)}return!0},t}(g.Vx),N=r(8556),A=function(e){var t=e.property,r=e.onChange,n=(e.onReset,(0,o.useState)(!1)),i=n[0],l=n[1],s=(0,o.useState)(t.value),p=s[0],u=s[1],f=(0,o.useState)(!0),d=f[0],g=f[1],h=function(e){r(t,e?"true":"false")},m=function(e){u(e)},y=function(e){g(e)},v=function(){u(t.value),l(!1)},S=function(){g(!0),l(!0)},E=function(){r(t,p),l(!1)},b=function(e){return a().createElement(c.Flex,{className:"configuration-property string-property",flexWrap:{default:"nowrap"}},a().createElement(c.FlexItem,{grow:{default:"grow"}},a().createElement("div",{className:"property-name"},a().createElement("span",{className:"name"},t.label)),a().createElement("div",{className:"property-description"},t.description),a().createElement(N.If,{condition:!i},a().createElement("div",{className:"property-value"},t.value)),a().createElement(N.If,{condition:i},a().createElement("div",{className:"property-editor"},a().createElement(T,{name:t.name,value:t.value,type:e,onChange:m,onValid:y,onCancel:v,onSave:E})))),a().createElement(c.FlexItem,{className:"actions",align:{default:"alignRight"}},a().createElement(N.If,{condition:!i},a().createElement(c.Button,{variant:"plain",className:"action single",onClick:S},a().createElement(C.PencilAltIcon,null))),a().createElement(N.If,{condition:i},a().createElement(c.Button,{variant:"plain",className:"action",onClick:E,isDisabled:!d},a().createElement(C.CheckIcon,null)),a().createElement(c.Button,{variant:"plain",className:"action",onClick:v},a().createElement(C.CloseIcon,null)))))};return"java.lang.Boolean"===t.type?a().createElement(c.Flex,{className:"configuration-property boolean-property",flexWrap:{default:"nowrap"}},a().createElement(c.FlexItem,{grow:{default:"grow"}},a().createElement("div",{className:"property-name"},a().createElement("span",{className:"name"},t.label),a().createElement("span",{className:"sep"},":"),a().createElement("span",{className:"value"},"true"===t.value?"On":"Off")),a().createElement("div",{className:"property-description"},t.description)),a().createElement(c.FlexItem,{className:"actions",align:{default:"alignRight"}},a().createElement(c.Switch,{id:t.name,"aria-label":t.label,className:"action",isChecked:"true"===t.value,onChange:h}))):"java.lang.Integer"===t.type||"java.lang.Long"===t.type?b("number"):b("text")},w=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),M=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)n[o]=a[i];return n},x=[{id:"authn",label:"Authentication settings",propertyNames:["registry.auth.basic-auth-client-credentials.enabled"]},{id:"authz",label:"Authorization settings",propertyNames:["registry.auth.owner-only-authorization","registry.auth.owner-only-authorization.limit-group-access","registry.auth.anonymous-read-access.enabled","registry.auth.authenticated-read-access.enabled"]},{id:"compatibility",label:"Compatibility settings",propertyNames:["registry.ccompat.legacy-id-mode.enabled"]},{id:"console",label:"Web console settings",propertyNames:["registry.download.href.ttl","registry.ui.features.readOnly"]}],k=function(e){function t(t){var r=e.call(this,t)||this;return r.acceptProperty=function(e){if(!r.state.searchCriteria||0===r.state.searchCriteria.trim().length)return!0;var t=r.state.searchCriteria.toLocaleLowerCase();return e.label.toLocaleLowerCase().indexOf(t)>=0||e.description.toLocaleLowerCase().indexOf(t)>=0},r.onSearchCriteria=function(e){r.setSingleState("searchCriteria",e)},r.onSearchSettings=function(){r.filterProperties()},r.onSearchClear=function(){r.setMultiState({searchCriteria:""},r.onSearchSettings)},r.onPropertyChange=function(e,t){e.value=t,d.K9.getAdminService().setConfigurationProperty(e.name,t).then((function(){r.createLoaders(),d.K9.getAlertsService().settingChanged(e,t)})).catch((function(e){r.handleServerError(e,"Error setting configuration property")}))},r.onPropertyReset=function(e){d.K9.getAdminService().resetConfigurationProperty(e.name).then((function(){r.createLoaders()})).catch((function(e){r.handleServerError(e,"Error resetting configuration property")}))},r}return w(t,e),t.prototype.renderPage=function(){var e=this;return a().createElement(a().Fragment,null,a().createElement(c.PageSection,{className:"ps_settings-header",variant:c.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(g.N4,{tabKey:3})),a().createElement(c.PageSection,{className:"ps_settings-description",variant:c.PageSectionVariants.light},a().createElement(c.TextContent,null,"Configure global settings for this Service Registry instance."),a().createElement(c.TextContent,{style:{marginTop:"10px",marginBottom:"5px",maxWidth:"450px"}},a().createElement(c.SearchInput,{placeholder:"Filter by keyword","aria-label":"Filter by keyword",value:this.state.searchCriteria,onChange:this.onSearchCriteria,onSearch:this.onSearchSettings,onClear:this.onSearchClear}))),a().createElement(c.PageSection,{variant:c.PageSectionVariants.default,isFilled:!0},a().createElement(g.Ng,{collection:this.state.searchedProperties,emptyStateMessage:"No settings found matching your search criteria."},this.propertyGroups().map((function(t){var r;return a().createElement(N.If,{key:t.id,condition:void 0!==t.properties&&t.properties.length>0},a().createElement(c.Card,{key:t.id,className:"config-property-group"},a().createElement(c.CardTitle,{className:"title"},t.label),a().createElement(c.CardBody,{className:"config-properties"},null===(r=t.properties)||void 0===r?void 0:r.map((function(t){return a().createElement(A,{key:t.name,property:t,onChange:e.onPropertyChange,onReset:e.onPropertyReset})})))))})))))},t.prototype.initializePageState=function(){return{searchCriteria:""}},t.prototype.createLoaders=function(){var e=this;return d.K9.getAdminService().listConfigurationProperties().then((function(t){e.setMultiState({isLoading:!1,properties:t}),e.filterProperties()}))},t.prototype.groupFor=function(e,t){for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o.propertyNames.indexOf(t.name)>=0)return o}return e[e.length-1]},t.prototype.propertyGroups=function(){var e,t=this,r=M(x);r.forEach((function(e){return e.properties=[]}));return r.push({id:"additional",label:"Additional properties",properties:[],propertyNames:[]}),null===(e=this.state.searchedProperties)||void 0===e||e.forEach((function(e){var n;null===(n=t.groupFor(r,e).properties)||void 0===n||n.push(e)})),r.forEach((function(e){var t;e.properties=null===(t=e.properties)||void 0===t?void 0:t.sort((function(e,t){return e.label.localeCompare(t.label)}))})),r},t.prototype.filterProperties=function(){var e,t=null===(e=this.state.properties)||void 0===e?void 0:e.filter(this.acceptProperty);this.setSingleState("searchedProperties",t)},t}(u.I),K=r(18338),V=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),j=function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},j.apply(this,arguments)};const L=function(e){function t(t){return e.call(this,t)||this}return V(t,e),t.prototype.render=function(){var e=d.K9.getConfigService().uiContextPath();d.K9.getLoggerService().info("[App] Using app contextPath: ",e);return a().createElement(s.BrowserRouter,{basename:e},a().createElement(c.Page,{className:"pf-m-redhat-font",isManagedSidebar:!1,header:a().createElement(p.t,null)},a().createElement(s.Switch,null,a().createElement(s.Route,{path:"/",exact:!0,component:R}),a().createElement(s.Route,{path:"/rules",exact:!0,component:y}),a().createElement(s.Route,{path:"/roles",exact:!0,component:K.sE}),a().createElement(s.Route,{path:"/settings",exact:!0,component:k}),a().createElement(s.Route,{path:"/artifacts",exact:!0,component:v.y}),a().createElement(s.Route,{path:"/artifacts/:groupId/:artifactId",exact:!0,component:E}),a().createElement(s.Route,{path:"/artifacts/:groupId/:artifactId/versions/:version",exact:!0,component:function(e){var t=e.location.pathname;return a().createElement(b.C,j({key:t},e))}}),a().createElement(s.Route,{component:F}))))},t}(a().PureComponent);d.K9.getAuthService().authenticateAndRender((function(){return l().render(a().createElement(L,null),document.getElementById("root"))}))},6142:(e,t,r)=>{r.d(t,{_:()=>n});var n=function(){}},38780:(e,t,r)=>{r.d(t,{R:()=>n});var n=function(){function e(){}return e.AVRO="AVRO",e.PROTOBUF="PROTOBUF",e.JSON="JSON",e.OPENAPI="OPENAPI",e.ASYNCAPI="ASYNCAPI",e.GRAPHQL="GRAPHQL",e.KCONNECT="KCONNECT",e.WSDL="WSDL",e.XSD="XSD",e.XML="XML",e}()}}]);
//# sourceMappingURL=4712.8e77cefc.js.map