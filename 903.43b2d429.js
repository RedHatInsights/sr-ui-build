/*! For license information please see 903.43b2d429.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[903,2752],{35374:(e,t,r)=>{r.d(t,{N:()=>l});var n,o=r(93264),i=r.n(o),a=r(81167),c=r(27066),s=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},t.prototype.initializeState=function(){return{}},t.prototype.accept=function(){var e=c.Services.getAuthService(),t=!0;return void 0!==this.props.enabled&&(t=t&&e.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(t=t&&e.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(t=t&&e.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(t=t&&e.isUserDeveloper(this.props.owner)===this.props.isDeveloper),t},t}(a.V)},26068:(e,t,r)=>{r.d(t,{Q:()=>l});var n,o=r(93264),i=r.n(o),a=r(81167),c=r(27066),s=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},t.prototype.initializeState=function(){return{}},t.prototype.accept=function(){var e=c.Services.getConfigService().features()[this.props.feature];return void 0!==this.props.is?e===this.props.is:void 0!==this.props.isNot?e!==this.props.isNot:void 0!==e},t}(a.V)},98227:(e,t,r)=>{r.d(t,{N:()=>a});var n=r(93264),o=r.n(n),i=r(99922),a=function(e){var t=e.collection,r=e.emptyState,n=e.emptyStateTitle,a=e.emptyStateMessage,c=e.children,s=r||o().createElement(i.EmptyState,{variant:i.EmptyStateVariant.xs},o().createElement(i.Title,{headingLevel:"h4",size:"md"},n||"None found"),o().createElement(i.EmptyStateBody,null,a||"No items found."));return t&&0!==t.length?o().createElement(o().Fragment,{children:c}):o().createElement(o().Fragment,{children:s})}},66092:(e,t,r)=>{r.d(t,{N:()=>d});var n,o=r(93264),i=r.n(o),a=(r(3195),r(99922)),c=r(43221),s=r(81167),l=r(35374),u=r(46022),p=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),f=(function(e){function t(t){return e.call(this,t)||this}p(t,e),t.prototype.render=function(){var e;return e=i().createElement(a.PageHeaderTools,{className:"header-toolbar"},i().createElement(a.PageHeaderToolsGroup,null,i().createElement(a.PageHeaderToolsItem,{id:"avatar"},i().createElement(l.N,{enabled:!0},i().createElement(u.K,null))))),i().createElement(a.PageHeader,{logo:i().createElement(a.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:c.Z,alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:e})},t.prototype.initializeState=function(){return{}}}(s.V),r(83847),r(8876)),g=r(27066),h=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(e){function t(t){var r=e.call(this,t)||this;return r.handleTabClick=function(e,t){t!=r.props.tabKey&&(0==t&&r.navigateTo(r.linkTo("/artifacts"))(),1==t&&r.navigateTo(r.linkTo("/rules"))(),2==t&&r.navigateTo(r.linkTo("/roles"))(),3==t&&r.navigateTo(r.linkTo("/settings"))())},r}return h(t,e),t.prototype.render=function(){var e=[i().createElement(a.Tab,{eventKey:0,title:i().createElement(a.TabTitleText,null,"Artifacts")}),i().createElement(a.Tab,{eventKey:1,title:i().createElement(a.TabTitleText,null,"Global rules")})];return g.Services.getConfigService().featureRoleManagement()&&e.push(i().createElement(a.Tab,{eventKey:2,title:i().createElement(a.TabTitleText,null,"Access")})),g.Services.getConfigService().featureSettings()&&e.push(i().createElement(a.Tab,{eventKey:3,title:i().createElement(a.TabTitleText,null,"Settings")})),i().createElement("div",null,i().createElement(f.No,{isAdmin:!0},i().createElement(a.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:e})))},t.prototype.initializeState=function(){return{}},t}(s.V)},72058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n,o=r(56550),i=r(2331),a=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});const c=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),e.prototype.postConstruct.call(this)},t}(o.F)},37799:(e,t,r)=>{r.d(t,{I:()=>E});var n,o,i=r(93264),a=r.n(i),c=r(79824),s=r(27066),l=r(99922),u=(r(45898),r(67646)),p=(r(79253),r(42557),r(30798)),f=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),g=function(e){function t(t){var r=e.call(this,t)||this;return r.navigateBack=function(){window.history.back()},r}return f(t,e),t.prototype.render=function(){return a().createElement(a().Fragment,null,a().createElement(l.PageSection,{className:"ps_error",variant:l.PageSectionVariants.light},a().createElement("div",{className:"centerizer"},a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large},a().createElement(l.EmptyStateIcon,{icon:u.LockedIcon}),a().createElement(l.Title,{headingLevel:"h5",size:"lg"},"Access permissions needed"),a().createElement(l.EmptyStateBody,null,"To access this Service Registry instance, contact your organization administrators."),a().createElement(l.EmptyStateSecondaryActions,null,a().createElement(l.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},t}(p.m),h=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(e){function t(t){var r=e.call(this,t)||this;return r.navigateBack=function(){window.history.back()},r}return h(t,e),t.prototype.render=function(){return a().createElement(a().Fragment,null,a().createElement(l.PageSection,{className:"ps_error",variant:l.PageSectionVariants.light},a().createElement("div",{className:"centerizer"},a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large},a().createElement(l.EmptyStateIcon,{icon:u.ExclamationCircleIcon}),a().createElement(l.Title,{headingLevel:"h5",size:"lg"},"Current usage is too high"),a().createElement(l.EmptyStateBody,null,"This Service Registry instance is throttled due to a high request rate. Ensure that existing applications are properly configured to cache the schemas."),a().createElement(l.EmptyStateSecondaryActions,null,a().createElement(l.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},t}(p.m),y=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),v=function(){return v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)},m=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n};!function(e){e[e.React=0]="React",e[e.Server=1]="Server"}(o||(o={}));var E=function(e){function t(t){var r=e.call(this,t)||this;return setTimeout((function(){r.loadPageData()}),10),r}return y(t,e),t.prototype.initializeState=function(){return v(v({},this.initializePageState()),{isLoading:!0})},t.prototype.componentDidCatch=function(e,t){this.handleError(o.React,e,t)},t.prototype.render=function(){return this.isError()?this.is403Error()?a().createElement(g,{error:this.state.error}):this.is419Error()?a().createElement(d,{error:this.state.error}):a().createElement(c.mf,{error:this.state.error}):this.isLoading()?a().createElement(a().Fragment,null,a().createElement(l.PageSection,{variant:l.PageSectionVariants.default,isFilled:!0},a().createElement(l.Flex,null,a().createElement(l.FlexItem,null,a().createElement(l.Spinner,{size:"lg"})),a().createElement(l.FlexItem,null,a().createElement("span",null,"Loading..."))))):this.renderPage()},t.prototype.postConstruct=function(){c.Vx.setHistory(this.props.history),e.prototype.postConstruct.call(this)},t.prototype.createLoaders=function(){return null},t.prototype.handleServerError=function(e,t){this.handleError(o.Server,e,t)},t.prototype.getPathParam=function(e){var t=this.props.match.params[e];return decodeURIComponent(t)},t.prototype.isLoading=function(){return!!this.state.isLoading},t.prototype.loadPageData=function(){var e=this,t=this.createLoaders();null==t&&(t=[]),Array.isArray(t)||(t=[t]),0===(t=m([s.Services.getUsersService().updateCurrentUser()],t)).length?this.setSingleState("isLoading",!1):(this.setSingleState("isLoading",!0),Promise.all(t).then((function(){e.setSingleState("isLoading",!1)})).catch((function(t){s.Services.getLoggerService().debug("[PageComponent] Page data load failed, retrying.");var r=e.getRetries();r<1?(e.incrementRetries(),setTimeout((function(){e.loadPageData()}),100*Math.pow(2,r))):e.handleServerError(t,"Error loading page data.")})))},t.prototype.getRetries=function(){return void 0!==this.state.pageLoadRetries?this.state.pageLoadRetries:0},t.prototype.incrementRetries=function(){var e=this.getRetries()+1;this.setSingleState("pageLoadRetries",e)},t.prototype.isError=function(){return!!this.state.isError},t.prototype.is403Error=function(){return this.state.error&&this.state.error.error.status&&403==this.state.error.error.status},t.prototype.is419Error=function(){return this.state.error&&this.state.error.error.status&&419==this.state.error.error.status},t.prototype.handleError=function(e,t,r){s.Services.getLoggerService().error("[PageComponent] Handling an error of type: ",e),s.Services.getLoggerService().error("[PageComponent] ",r),s.Services.getLoggerService().error("[PageComponent] ",t),this.setMultiState({error:{error:t,errorMessage:r,type:e},isError:!0})},t}(c.Vx)},61444:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n,o=r(93264),i=r.n(o),a=r(99922),c=r(37799),s=r(43759),l=r(27066),u=r(79824),p=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),f=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n},g=function(e){function t(t){var r=e.call(this,t)||this;return r.doEnableRule=function(e){l.Services.getLoggerService().debug("[RulesPage] Enabling global rule:",e);var t="FULL";"COMPATIBILITY"===e&&(t="BACKWARD"),l.Services.getAdminService().createRule(e,t).catch((function(t){r.handleServerError(t,'Error enabling "'+e+'" global rule.')})),r.setSingleState("rules",f(r.rules(),[{config:t,type:e}]))},r.doDisableRule=function(e){l.Services.getLoggerService().debug("[RulesPage] Disabling global rule:",e),l.Services.getAdminService().deleteRule(e).catch((function(t){r.handleServerError(t,'Error disabling "'+e+'" global rule.')})),r.setSingleState("rules",r.rules().filter((function(t){return t.type!==e})))},r.doConfigureRule=function(e,t){l.Services.getLoggerService().debug("[RulesPage] Configuring global rule:",e,t),l.Services.getAdminService().updateRule(e,t).catch((function(t){r.handleServerError(t,'Error configuring "'+e+'" global rule.')})),r.setSingleState("rules",r.rules().map((function(r){return r.type===e?{config:t,type:r.type}:r})))},r}return p(t,e),t.prototype.renderPage=function(){return i().createElement(i().Fragment,null,i().createElement(a.PageSection,{className:"ps_rules-header",variant:a.PageSectionVariants.light,padding:{default:"noPadding"}},i().createElement(u.N4,{tabKey:1})),i().createElement(a.PageSection,{className:"ps_rules-description",variant:a.PageSectionVariants.light},i().createElement(a.TextContent,null,"Manage the list of global rules for this registry. Rules can be enabled, disabled, and individually configured.")),i().createElement(a.PageSection,{variant:a.PageSectionVariants.default,isFilled:!0},i().createElement(i().Fragment,null,i().createElement(s.RB,{rules:this.rules(),onEnableRule:this.doEnableRule,onDisableRule:this.doDisableRule,onConfigureRule:this.doConfigureRule}))))},t.prototype.initializePageState=function(){return{rules:null}},t.prototype.createLoaders=function(){var e=this;return l.Services.getAdminService().getRules().then((function(t){e.setMultiState({isLoading:!1,rules:t})}))},t.prototype.rules=function(){return this.state.rules?this.state.rules:[]},t}(c.I),h=r(2331),d=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();const y=function(e){function t(t){return e.call(this,t)||this}return d(t,e),t.prototype.postConstruct=function(){h.m.updateConfiguration(this.props),e.prototype.postConstruct.call(this)},t}(g)},6142:(e,t,r)=>{r.d(t,{_:()=>n});var n=function(){}},38780:(e,t,r)=>{r.d(t,{R:()=>n});var n=function(){function e(){}return e.AVRO="AVRO",e.PROTOBUF="PROTOBUF",e.JSON="JSON",e.OPENAPI="OPENAPI",e.ASYNCAPI="ASYNCAPI",e.GRAPHQL="GRAPHQL",e.KCONNECT="KCONNECT",e.WSDL="WSDL",e.XSD="XSD",e.XML="XML",e}()}}]);
//# sourceMappingURL=903.43b2d429.js.map