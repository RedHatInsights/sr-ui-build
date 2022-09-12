/*! For license information please see 6349.a72e05fc.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[6349,2752],{35374:(t,e,r)=>{r.d(e,{N:()=>p});var n,o=r(93264),i=r.n(o),a=r(81167),s=r(99926),c=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t){function e(e){return t.call(this,e)||this}return c(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=s.K9.getAuthService(),e=!0;return void 0!==this.props.enabled&&(e=e&&t.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(e=e&&t.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(e=e&&t.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(e=e&&t.isUserDeveloper(this.props.owner)===this.props.isDeveloper),void 0!==this.props.isOwner&&this.props.owner&&(e=this.props.isOwner?e&&t.isUserId(this.props.owner):e&&!t.isUserId(this.props.owner)),!0===this.props.isAdminOrOwner&&this.props.owner&&(e=e&&(!0===t.isUserAdmin()||t.isUserId(this.props.owner))),e},e}(a.V)},26068:(t,e,r)=>{r.d(e,{Q:()=>p});var n,o=r(93264),i=r.n(o),a=r(81167),s=r(99926),c=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t){function e(e){return t.call(this,e)||this}return c(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=s.K9.getConfigService().features()[this.props.feature];return void 0!==this.props.is?t===this.props.is:void 0!==this.props.isNot?t!==this.props.isNot:void 0!==t},e}(a.V)},98227:(t,e,r)=>{r.d(e,{N:()=>a});var n=r(93264),o=r.n(n),i=r(99922),a=function(t){var e=t.collection,r=t.emptyState,n=t.emptyStateTitle,a=t.emptyStateMessage,s=t.children,c=r||o().createElement(i.EmptyState,{variant:i.EmptyStateVariant.xs},o().createElement(i.Title,{headingLevel:"h4",size:"md"},n||"None found"),o().createElement(i.EmptyStateBody,null,a||"No items found."));return e&&0!==e.length?o().createElement(o().Fragment,{children:s}):o().createElement(o().Fragment,{children:c})}},66092:(t,e,r)=>{r.d(e,{N:()=>d});var n,o=r(93264),i=r.n(o),a=(r(3195),r(99922)),s=r(43221),c=r(81167),p=r(35374),u=r(46022),l=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),h=(function(t){function e(e){return t.call(this,e)||this}l(e,t),e.prototype.render=function(){var t;return t=i().createElement(a.PageHeaderTools,{className:"header-toolbar"},i().createElement(a.PageHeaderToolsGroup,null,i().createElement(a.PageHeaderToolsItem,{id:"avatar"},i().createElement(p.N,{enabled:!0},i().createElement(u.K,null))))),i().createElement(a.PageHeader,{logo:i().createElement(a.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:s.Z,alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:t})},e.prototype.initializeState=function(){return{}}}(c.V),r(83847),r(91344)),f=r(99926),y=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(t){function e(e){var r=t.call(this,e)||this;return r.handleTabClick=function(t,e){e!==r.props.tabKey&&(0===e&&r.navigateTo(r.linkTo("/artifacts"))(),1===e&&r.navigateTo(r.linkTo("/rules"))(),2===e&&r.navigateTo(r.linkTo("/roles"))(),3===e&&r.navigateTo(r.linkTo("/settings"))())},r}return y(e,t),e.prototype.render=function(){var t=[i().createElement(a.Tab,{key:0,eventKey:0,title:i().createElement(a.TabTitleText,null,"Artifacts")}),i().createElement(a.Tab,{key:1,eventKey:1,title:i().createElement(a.TabTitleText,null,"Global rules")})];return f.K9.getConfigService().featureRoleManagement()&&t.push(i().createElement(a.Tab,{key:2,eventKey:2,title:i().createElement(a.TabTitleText,null,"Access")})),f.K9.getConfigService().featureSettings()&&t.push(i().createElement(a.Tab,{key:3,eventKey:3,title:i().createElement(a.TabTitleText,null,"Settings")})),i().createElement("div",null,i().createElement(h.No,{isAdmin:!0},i().createElement(a.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:t})))},e.prototype.initializeState=function(){return{}},e}(c.V)},72058:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var n,o=r(56550),i=r(2331),a=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});const s=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)},e}(o.F)},15933:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var n,o=r(37627),i=r(2331),a=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});const s=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)},e}(o.y)},59442:(t,e,r)=>{r.d(e,{ye:()=>n.y});var n=r(79570);r(48853),r(67859)},92321:(t,e,r)=>{r.d(e,{B:()=>n.B});var n=r(49423)},34782:(t,e,r)=>{r.d(e,{U:()=>n.U});var n=r(6774)},14658:(t,e,r)=>{r.d(e,{k:()=>n.k});var n=r(29500)},37799:(t,e,r)=>{r.d(e,{I:()=>E});var n,o,i=r(93264),a=r.n(i),s=r(79824),c=r(99926),p=r(99922),u=(r(45898),r(67646)),l=(r(79253),r(42557),r(30798)),h=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),f=function(t){function e(e){var r=t.call(this,e)||this;return r.navigateBack=function(){window.history.back()},r}return h(e,t),e.prototype.render=function(){return a().createElement(a().Fragment,null,a().createElement(p.PageSection,{className:"ps_error",variant:p.PageSectionVariants.light},a().createElement("div",{className:"centerizer"},a().createElement(p.EmptyState,{variant:p.EmptyStateVariant.large},a().createElement(p.EmptyStateIcon,{icon:u.LockedIcon}),a().createElement(p.Title,{headingLevel:"h5",size:"lg"},"Access permissions needed"),a().createElement(p.EmptyStateBody,null,"To access this Service Registry instance, contact your organization administrators."),a().createElement(p.EmptyStateSecondaryActions,null,a().createElement(p.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},e}(l.m),y=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(t){function e(e){var r=t.call(this,e)||this;return r.navigateBack=function(){window.history.back()},r}return y(e,t),e.prototype.render=function(){return a().createElement(a().Fragment,null,a().createElement(p.PageSection,{className:"ps_error",variant:p.PageSectionVariants.light},a().createElement("div",{className:"centerizer"},a().createElement(p.EmptyState,{variant:p.EmptyStateVariant.large},a().createElement(p.EmptyStateIcon,{icon:u.ExclamationCircleIcon}),a().createElement(p.Title,{headingLevel:"h5",size:"lg"},"Current usage is too high"),a().createElement(p.EmptyStateBody,null,"This Service Registry instance is throttled due to a high request rate. Ensure that existing applications are properly configured to cache the schemas."),a().createElement(p.EmptyStateSecondaryActions,null,a().createElement(p.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},e}(l.m),g=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),m=function(){return m=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},m.apply(this,arguments)},v=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n};!function(t){t[t.React=0]="React",t[t.Server=1]="Server"}(o||(o={}));var E=function(t){function e(e){var r=t.call(this,e)||this;return setTimeout((function(){r.loadPageData()}),10),r}return g(e,t),e.prototype.initializeState=function(){return m(m({},this.initializePageState()),{isLoading:!0})},e.prototype.componentDidCatch=function(t,e){this.handleError(o.React,t,e)},e.prototype.render=function(){return this.isError()?this.is403Error()?a().createElement(f,{error:this.state.error}):this.is419Error()?a().createElement(d,{error:this.state.error}):a().createElement(s.mf,{error:this.state.error}):this.isLoading()?a().createElement(a().Fragment,null,a().createElement(p.PageSection,{variant:p.PageSectionVariants.default,isFilled:!0},a().createElement(p.Flex,null,a().createElement(p.FlexItem,null,a().createElement(p.Spinner,{size:"lg"})),a().createElement(p.FlexItem,null,a().createElement("span",null,"Loading..."))))):this.renderPage()},e.prototype.postConstruct=function(){s.Vx.setHistory(this.props.history),t.prototype.postConstruct.call(this)},e.prototype.createLoaders=function(){return null},e.prototype.handleServerError=function(t,e){this.handleError(o.Server,t,e)},e.prototype.getPathParam=function(t){var e=this.props.match.params[t];return decodeURIComponent(e)},e.prototype.isLoading=function(){return!!this.state.isLoading},e.prototype.loadPageData=function(){var t=this,e=this.createLoaders();null==e&&(e=[]),Array.isArray(e)||(e=[e]),0===(e=v([c.K9.getUsersService().updateCurrentUser()],e)).length?this.setSingleState("isLoading",!1):(this.setSingleState("isLoading",!0),Promise.all(e).then((function(){t.setSingleState("isLoading",!1)})).catch((function(e){c.K9.getLoggerService().debug("[PageComponent] Page data load failed, retrying.");var r=t.getRetries();r<1?(t.incrementRetries(),setTimeout((function(){t.loadPageData()}),100*Math.pow(2,r))):t.handleServerError(e,"Error loading page data.")})))},e.prototype.getRetries=function(){return void 0!==this.state.pageLoadRetries?this.state.pageLoadRetries:0},e.prototype.incrementRetries=function(){var t=this.getRetries()+1;this.setSingleState("pageLoadRetries",t)},e.prototype.isError=function(){return!!this.state.isError},e.prototype.is403Error=function(){return this.state.error&&this.state.error.error.status&&403==this.state.error.error.status},e.prototype.is419Error=function(){return this.state.error&&this.state.error.error.status&&419==this.state.error.error.status},e.prototype.handleError=function(t,e,r){c.K9.getLoggerService().error("[PageComponent] Handling an error of type: ",t),c.K9.getLoggerService().error("[PageComponent] ",r),c.K9.getLoggerService().error("[PageComponent] ",e),this.setMultiState({error:{error:e,errorMessage:r,type:t},isError:!0})},e}(s.Vx)},6142:(t,e,r)=>{r.d(e,{_:()=>n});var n=function(){}},38780:(t,e,r)=>{r.d(e,{R:()=>n});var n=function(){function t(){}return t.AVRO="AVRO",t.PROTOBUF="PROTOBUF",t.JSON="JSON",t.OPENAPI="OPENAPI",t.ASYNCAPI="ASYNCAPI",t.GRAPHQL="GRAPHQL",t.KCONNECT="KCONNECT",t.WSDL="WSDL",t.XSD="XSD",t.XML="XML",t}()}}]);
//# sourceMappingURL=6349.a72e05fc.js.map