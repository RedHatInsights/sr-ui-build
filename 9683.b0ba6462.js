/*! For license information please see 9683.b0ba6462.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[9683,2752],{8556:(e,t,r)=>{r.d(t,{If:()=>s});var n,o=r(93264),a=r.n(o),i=r(81167),c=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e){function t(t){return e.call(this,t)||this}return c(t,e),t.prototype.render=function(){return this.accept()?a().createElement(a().Fragment,{children:this.props.children}):a().createElement(a().Fragment,null)},t.prototype.initializeState=function(){return{}},t.prototype.accept=function(){return"boolean"==typeof this.props.condition?this.props.condition:this.props.condition()},t}(i.V)},35374:(e,t,r)=>{r.d(t,{N:()=>l});var n,o=r(93264),a=r.n(o),i=r(81167),c=r(29227),s=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t.prototype.render=function(){return this.accept()?a().createElement(a().Fragment,{children:this.props.children}):a().createElement(a().Fragment,null)},t.prototype.initializeState=function(){return{}},t.prototype.accept=function(){var e=c.K9.getAuthService(),t=!0;return void 0!==this.props.enabled&&(t=t&&e.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(t=t&&e.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(t=t&&e.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(t=t&&e.isUserDeveloper(this.props.owner)===this.props.isDeveloper),t},t}(i.V)},26068:(e,t,r)=>{r.d(t,{Q:()=>l});var n,o=r(93264),a=r.n(o),i=r(81167),c=r(29227),s=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t.prototype.render=function(){return this.accept()?a().createElement(a().Fragment,{children:this.props.children}):a().createElement(a().Fragment,null)},t.prototype.initializeState=function(){return{}},t.prototype.accept=function(){var e=c.K9.getConfigService().features()[this.props.feature];return void 0!==this.props.is?e===this.props.is:void 0!==this.props.isNot?e!==this.props.isNot:void 0!==e},t}(i.V)},98227:(e,t,r)=>{r.d(t,{N:()=>i});var n=r(93264),o=r.n(n),a=r(99922),i=function(e){var t=e.collection,r=e.emptyState,n=e.emptyStateTitle,i=e.emptyStateMessage,c=e.children,s=r||o().createElement(a.EmptyState,{variant:a.EmptyStateVariant.xs},o().createElement(a.Title,{headingLevel:"h4",size:"md"},n||"None found"),o().createElement(a.EmptyStateBody,null,i||"No items found."));return t&&0!==t.length?o().createElement(o().Fragment,{children:c}):o().createElement(o().Fragment,{children:s})}},66092:(e,t,r)=>{r.d(t,{N:()=>d});var n,o=r(93264),a=r.n(o),i=(r(3195),r(99922)),c=r(43221),s=r(81167),l=r(35374),p=r(46022),u=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),f=(function(e){function t(t){return e.call(this,t)||this}u(t,e),t.prototype.render=function(){var e;return e=a().createElement(i.PageHeaderTools,{className:"header-toolbar"},a().createElement(i.PageHeaderToolsGroup,null,a().createElement(i.PageHeaderToolsItem,{id:"avatar"},a().createElement(l.N,{enabled:!0},a().createElement(p.K,null))))),a().createElement(i.PageHeader,{logo:a().createElement(i.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:c.Z,alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:e})},t.prototype.initializeState=function(){return{}}}(s.V),r(83847),r(8876)),h=r(29227),m=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(e){function t(t){var r=e.call(this,t)||this;return r.handleTabClick=function(e,t){t!=r.props.tabKey&&(0==t&&r.navigateTo(r.linkTo("/artifacts"))(),1==t&&r.navigateTo(r.linkTo("/rules"))(),2==t&&r.navigateTo(r.linkTo("/roles"))(),3==t&&r.navigateTo(r.linkTo("/settings"))())},r}return m(t,e),t.prototype.render=function(){var e=[a().createElement(i.Tab,{eventKey:0,title:a().createElement(i.TabTitleText,null,"Artifacts")}),a().createElement(i.Tab,{eventKey:1,title:a().createElement(i.TabTitleText,null,"Global rules")})];return h.K9.getConfigService().featureRoleManagement()&&e.push(a().createElement(i.Tab,{eventKey:2,title:a().createElement(i.TabTitleText,null,"Access")})),h.K9.getConfigService().featureSettings()&&e.push(a().createElement(i.Tab,{eventKey:3,title:a().createElement(i.TabTitleText,null,"Settings")})),a().createElement("div",null,a().createElement(f.No,{isAdmin:!0},a().createElement(i.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:e})))},t.prototype.initializeState=function(){return{}},t}(s.V)},72058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n,o=r(56550),a=r(2331),i=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});const c=function(e){function t(t){return e.call(this,t)||this}return i(t,e),t.prototype.postConstruct=function(){a.m.updateConfiguration(this.props),e.prototype.postConstruct.call(this)},t}(o.F)},37799:(e,t,r)=>{r.d(t,{I:()=>E});var n,o,a=r(93264),i=r.n(a),c=r(79824),s=r(29227),l=r(99922),p=(r(45898),r(67646)),u=(r(79253),r(42557),r(30798)),f=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),h=function(e){function t(t){var r=e.call(this,t)||this;return r.navigateBack=function(){window.history.back()},r}return f(t,e),t.prototype.render=function(){return i().createElement(i().Fragment,null,i().createElement(l.PageSection,{className:"ps_error",variant:l.PageSectionVariants.light},i().createElement("div",{className:"centerizer"},i().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large},i().createElement(l.EmptyStateIcon,{icon:p.LockedIcon}),i().createElement(l.Title,{headingLevel:"h5",size:"lg"},"Access permissions needed"),i().createElement(l.EmptyStateBody,null,"To access this Service Registry instance, contact your organization administrators."),i().createElement(l.EmptyStateSecondaryActions,null,i().createElement(l.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},t}(u.m),m=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(e){function t(t){var r=e.call(this,t)||this;return r.navigateBack=function(){window.history.back()},r}return m(t,e),t.prototype.render=function(){return i().createElement(i().Fragment,null,i().createElement(l.PageSection,{className:"ps_error",variant:l.PageSectionVariants.light},i().createElement("div",{className:"centerizer"},i().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large},i().createElement(l.EmptyStateIcon,{icon:p.ExclamationCircleIcon}),i().createElement(l.Title,{headingLevel:"h5",size:"lg"},"Current usage is too high"),i().createElement(l.EmptyStateBody,null,"This Service Registry instance is throttled due to a high request rate. Ensure that existing applications are properly configured to cache the schemas."),i().createElement(l.EmptyStateSecondaryActions,null,i().createElement(l.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},t}(u.m),y=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)},v=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n};!function(e){e[e.React=0]="React",e[e.Server=1]="Server"}(o||(o={}));var E=function(e){function t(t){var r=e.call(this,t)||this;return setTimeout((function(){r.loadPageData()}),10),r}return y(t,e),t.prototype.initializeState=function(){return g(g({},this.initializePageState()),{isLoading:!0})},t.prototype.componentDidCatch=function(e,t){this.handleError(o.React,e,t)},t.prototype.render=function(){return this.isError()?this.is403Error()?i().createElement(h,{error:this.state.error}):this.is419Error()?i().createElement(d,{error:this.state.error}):i().createElement(c.mf,{error:this.state.error}):this.isLoading()?i().createElement(i().Fragment,null,i().createElement(l.PageSection,{variant:l.PageSectionVariants.default,isFilled:!0},i().createElement(l.Flex,null,i().createElement(l.FlexItem,null,i().createElement(l.Spinner,{size:"lg"})),i().createElement(l.FlexItem,null,i().createElement("span",null,"Loading..."))))):this.renderPage()},t.prototype.postConstruct=function(){c.Vx.setHistory(this.props.history),e.prototype.postConstruct.call(this)},t.prototype.createLoaders=function(){return null},t.prototype.handleServerError=function(e,t){this.handleError(o.Server,e,t)},t.prototype.getPathParam=function(e){var t=this.props.match.params[e];return decodeURIComponent(t)},t.prototype.isLoading=function(){return!!this.state.isLoading},t.prototype.loadPageData=function(){var e=this,t=this.createLoaders();null==t&&(t=[]),Array.isArray(t)||(t=[t]),0===(t=v([s.K9.getUsersService().updateCurrentUser()],t)).length?this.setSingleState("isLoading",!1):(this.setSingleState("isLoading",!0),Promise.all(t).then((function(){e.setSingleState("isLoading",!1)})).catch((function(t){s.K9.getLoggerService().debug("[PageComponent] Page data load failed, retrying.");var r=e.getRetries();r<1?(e.incrementRetries(),setTimeout((function(){e.loadPageData()}),100*Math.pow(2,r))):e.handleServerError(t,"Error loading page data.")})))},t.prototype.getRetries=function(){return void 0!==this.state.pageLoadRetries?this.state.pageLoadRetries:0},t.prototype.incrementRetries=function(){var e=this.getRetries()+1;this.setSingleState("pageLoadRetries",e)},t.prototype.isError=function(){return!!this.state.isError},t.prototype.is403Error=function(){return this.state.error&&this.state.error.error.status&&403==this.state.error.error.status},t.prototype.is419Error=function(){return this.state.error&&this.state.error.error.status&&419==this.state.error.error.status},t.prototype.handleError=function(e,t,r){s.K9.getLoggerService().error("[PageComponent] Handling an error of type: ",e),s.K9.getLoggerService().error("[PageComponent] ",r),s.K9.getLoggerService().error("[PageComponent] ",t),this.setMultiState({error:{error:t,errorMessage:r,type:e},isError:!0})},t}(c.Vx)},93669:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var n,o=r(93264),a=r.n(o),i=r(99922),c=r(37799),s=r(29227),l=r(79824),p=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e){function t(t){var r=e.call(this,t)||this;return r.handleInputChange=function(e){var t=r.state.isValid,n=r.validate(e);r.setMultiState({currentValue:e,isDirty:e!==r.props.value,isValid:n},(function(){t!==n&&r.props.onValid(n),r.props.onChange(e)}))},r.handleKeyPress=function(e){"Escape"===e.code&&r.props.onCancel(),"Enter"===e.code&&r.state.isDirty&&r.state.isValid&&r.props.onSave()},r}return p(t,e),t.prototype.render=function(){return a().createElement(i.InputGroup,null,a().createElement(i.TextInput,{name:this.props.name,value:this.state.currentValue,validated:this.validated(),onChange:this.handleInputChange,onKeyDown:this.handleKeyPress,"aria-label":"configuration property input"}))},t.prototype.initializeState=function(){return{currentValue:this.props.value,isDirty:!1,isValid:!0}},t.prototype.validated=function(){return this.state.isValid?"default":"error"},t.prototype.validate=function(e){if("text"===this.props.type)return e.trim().length>0;if("number"===this.props.type){if(0===e.trim().length)return!1;var t=Number(e);return Number.isInteger(t)}return!0},t}(l.Vx),f=r(8556),h=r(67646),m=function(e){var t=e.property,r=e.onChange,n=(e.onReset,(0,o.useState)(!1)),c=n[0],s=n[1],l=(0,o.useState)(t.value),p=l[0],m=l[1],d=(0,o.useState)(!0),y=d[0],g=d[1],v=function(e){r(t,e?"true":"false")},E=function(e){m(e)},S=function(e){g(e)},_=function(){m(t.value),s(!1)},b=function(){g(!0),s(!0)},P=function(){r(t,p),s(!1)},C=function(e){return a().createElement(i.Flex,{className:"configuration-property string-property"},a().createElement(i.FlexItem,null,a().createElement("div",{className:"property-name"},a().createElement("span",{className:"name"},t.label)),a().createElement("div",{className:"property-description"},t.description),a().createElement(f.If,{condition:!c},a().createElement("div",{className:"property-value"},t.value)),a().createElement(f.If,{condition:c},a().createElement("div",{className:"property-editor"},a().createElement(u,{name:t.name,value:t.value,type:e,onChange:E,onValid:S,onCancel:_,onSave:P})))),a().createElement(i.FlexItem,{className:"actions",align:{default:"alignRight"}},a().createElement(f.If,{condition:!c},a().createElement(i.Button,{variant:"plain",className:"action single",onClick:b},a().createElement(h.PencilAltIcon,null))),a().createElement(f.If,{condition:c},a().createElement(i.Button,{variant:"plain",className:"action",onClick:P,isDisabled:!y},a().createElement(h.CheckIcon,null)),a().createElement(i.Button,{variant:"plain",className:"action",onClick:_},a().createElement(h.CloseIcon,null)))))};return"java.lang.Boolean"===t.type?a().createElement(i.Flex,{className:"configuration-property boolean-property"},a().createElement(i.FlexItem,null,a().createElement("div",{className:"property-name"},a().createElement("span",{className:"name"},t.label),a().createElement("span",{className:"sep"},":"),a().createElement("span",{className:"value"},"true"===t.value?"On":"Off")),a().createElement("div",{className:"property-description"},t.description)),a().createElement(i.FlexItem,{className:"actions",align:{default:"alignRight"}},a().createElement(i.Switch,{id:t.name,"aria-label":t.label,className:"action",isChecked:"true"===t.value,onChange:v}))):"java.lang.Integer"===t.type||"java.lang.Long"===t.type?C("number"):C("text")},d=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),y=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n},g=[{id:"authn",label:"Authentication settings",propertyNames:["registry.auth.basic-auth-client-credentials.enabled"]},{id:"authz",label:"Authorization settings",propertyNames:["registry.auth.owner-only-authorization","registry.auth.owner-only-authorization.limit-group-access","registry.auth.anonymous-read-access.enabled","registry.auth.authenticated-read-access.enabled"]},{id:"compatibility",label:"Compatibility settings",propertyNames:["registry.ccompat.legacy-id-mode.enabled"]},{id:"console",label:"Web console settings",propertyNames:["registry.download.href.ttl","registry.ui.features.readOnly"]}],v=function(e){function t(t){var r=e.call(this,t)||this;return r.acceptProperty=function(e){if(!r.state.searchCriteria||0===r.state.searchCriteria.trim().length)return!0;var t=r.state.searchCriteria.toLocaleLowerCase();return e.label.toLocaleLowerCase().indexOf(t)>=0||e.description.toLocaleLowerCase().indexOf(t)>=0},r.onSearchCriteria=function(e){r.setSingleState("searchCriteria",e)},r.onSearchSettings=function(){r.filterProperties()},r.onSearchClear=function(){r.setMultiState({searchCriteria:""},r.onSearchSettings)},r.onPropertyChange=function(e,t){e.value=t,s.K9.getAdminService().setConfigurationProperty(e.name,t).then((function(){r.createLoaders(),s.K9.getAlertsService().settingChanged(e,t)})).catch((function(e){r.handleServerError(e,"Error setting configuration property")}))},r.onPropertyReset=function(e){s.K9.getAdminService().resetConfigurationProperty(e.name).then((function(){r.createLoaders()})).catch((function(e){r.handleServerError(e,"Error resetting configuration property")}))},r}return d(t,e),t.prototype.renderPage=function(){var e=this;return a().createElement(a().Fragment,null,a().createElement(i.PageSection,{className:"ps_settings-header",variant:i.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(l.N4,{tabKey:3})),a().createElement(i.PageSection,{className:"ps_settings-description",variant:i.PageSectionVariants.light},a().createElement(i.TextContent,null,"Configure global settings for this Service Registry instance."),a().createElement(i.TextContent,{style:{marginTop:"10px",marginBottom:"5px",maxWidth:"450px"}},a().createElement(i.SearchInput,{placeholder:"Search settings","aria-label":"Search settings",value:this.state.searchCriteria,onChange:this.onSearchCriteria,onSearch:this.onSearchSettings,onClear:this.onSearchClear}))),a().createElement(i.PageSection,{variant:i.PageSectionVariants.default,isFilled:!0},a().createElement(l.Ng,{collection:this.state.searchedProperties,emptyStateMessage:"No settings found matching your search criteria."},this.propertyGroups().map((function(t){var r;return a().createElement(f.If,{key:t.id,condition:void 0!==t.properties&&t.properties.length>0},a().createElement(i.Card,{key:t.id,className:"config-property-group",style:{marginBottom:"15px"}},a().createElement(i.CardTitle,{className:"title"},t.label),a().createElement(i.CardBody,{className:"config-properties"},null===(r=t.properties)||void 0===r?void 0:r.map((function(t){return a().createElement(m,{key:t.name,property:t,onChange:e.onPropertyChange,onReset:e.onPropertyReset})})))))})))))},t.prototype.initializePageState=function(){return{searchCriteria:""}},t.prototype.createLoaders=function(){var e=this;return s.K9.getAdminService().listConfigurationProperties().then((function(t){e.setMultiState({isLoading:!1,properties:t}),e.filterProperties()}))},t.prototype.groupFor=function(e,t){for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o.propertyNames.indexOf(t.name)>=0)return o}return e[e.length-1]},t.prototype.propertyGroups=function(){var e,t=this,r=y(g);r.forEach((function(e){return e.properties=[]}));return r.push({id:"additional",label:"Additional properties",properties:[],propertyNames:[]}),null===(e=this.state.searchedProperties)||void 0===e||e.forEach((function(e){var n;null===(n=t.groupFor(r,e).properties)||void 0===n||n.push(e)})),r.forEach((function(e){var t;e.properties=null===(t=e.properties)||void 0===t?void 0:t.sort((function(e,t){return e.label.localeCompare(t.label)}))})),r},t.prototype.filterProperties=function(){var e,t=null===(e=this.state.properties)||void 0===e?void 0:e.filter(this.acceptProperty);this.setSingleState("searchedProperties",t)},t}(c.I),E=r(2331),S=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();const _=function(e){function t(t){return e.call(this,t)||this}return S(t,e),t.prototype.postConstruct=function(){E.m.updateConfiguration(this.props),e.prototype.postConstruct.call(this)},t}(v)},6142:(e,t,r)=>{r.d(t,{_:()=>n});var n=function(){}},38780:(e,t,r)=>{r.d(t,{R:()=>n});var n=function(){function e(){}return e.AVRO="AVRO",e.PROTOBUF="PROTOBUF",e.JSON="JSON",e.OPENAPI="OPENAPI",e.ASYNCAPI="ASYNCAPI",e.GRAPHQL="GRAPHQL",e.KCONNECT="KCONNECT",e.WSDL="WSDL",e.XSD="XSD",e.XML="XML",e}()}}]);
//# sourceMappingURL=9683.b0ba6462.js.map