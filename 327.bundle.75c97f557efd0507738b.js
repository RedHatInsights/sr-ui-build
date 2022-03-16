/*! For license information please see 327.bundle.75c97f557efd0507738b.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[327,755],{67030:(t,e,r)=>{r.d(e,{N:()=>p});var n,o=r(48121),i=r.n(o),a=r(52445),c=r(46768),s=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.Services.getAuthService(),e=!0;return void 0!==this.props.enabled&&(e=e&&t.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(e=e&&t.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(e=e&&t.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(e=e&&t.isUserDeveloper(this.props.owner)===this.props.isDeveloper),e},e}(a.V)},13294:(t,e,r)=>{r.d(e,{Q:()=>p});var n,o=r(48121),i=r.n(o),a=r(52445),c=r(46768),s=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.Services.getConfigService().features()[this.props.feature];return void 0!==this.props.is?t===this.props.is:void 0!==this.props.isNot?t!==this.props.isNot:void 0!==t},e}(a.V)},99415:(t,e,r)=>{r.d(e,{N:()=>d});var n,o=r(48121),i=r.n(o),a=r(95995),c=r(95762),s=r.n(c),p=r(52445),u=r(67030),l=r(50402),f=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),h=(function(t){function e(e){return t.call(this,e)||this}f(e,t),e.prototype.render=function(){var t;return t=i().createElement(a.PageHeaderTools,{className:"header-toolbar"},i().createElement(a.PageHeaderToolsGroup,null,i().createElement(a.PageHeaderToolsItem,{id:"avatar"},i().createElement(u.N,{enabled:!0},i().createElement(l.K,null))))),i().createElement(a.PageHeader,{logo:i().createElement(a.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:s(),alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:t})},e.prototype.initializeState=function(){return{}}}(p.V),r(72672)),y=r(46768),g=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(t){function e(e){var r=t.call(this,e)||this;return r.handleTabClick=function(t,e){e!=r.props.tabKey&&(0==e&&r.navigateTo(r.linkTo("/artifacts"))(),1==e&&r.navigateTo(r.linkTo("/rules"))(),2==e&&r.navigateTo(r.linkTo("/roles"))(),3==e&&r.navigateTo(r.linkTo("/settings"))())},r}return g(e,t),e.prototype.render=function(){var t=[i().createElement(a.Tab,{eventKey:0,title:i().createElement(a.TabTitleText,null,"Artifacts")}),i().createElement(a.Tab,{eventKey:1,title:i().createElement(a.TabTitleText,null,"Global rules")})];return y.Services.getConfigService().featureRoleManagement()&&t.push(i().createElement(a.Tab,{eventKey:2,title:i().createElement(a.TabTitleText,null,"Access")})),y.Services.getConfigService().featureSettings()&&t.push(i().createElement(a.Tab,{eventKey:3,title:i().createElement(a.TabTitleText,null,"Settings")})),i().createElement("div",null,i().createElement(h.No,{isAdmin:!0},i().createElement(a.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:t})))},e.prototype.initializeState=function(){return{}},e}(p.V)},65831:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n,o=r(97581),i=r(69910),a=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});const c=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)},e}(o.F)},37854:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n,o=r(48121),i=r.n(o),a=r(92715),c=r(46768),s=r(98068),p=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(t){function e(e){return t.call(this,e)||this}return p(e,t),e.prototype.renderPage=function(){var t=this.groupIdParam(),e=this.artifactIdParam(),r=this.linkTo("/artifacts/"+encodeURIComponent(t)+"/"+encodeURIComponent(e)+"/versions/latest");return c.Services.getLoggerService().info("[ArtifactRedirectPage] Redirecting to: %s",r),i().createElement(s.Redirect,{to:r})},e.prototype.groupIdParam=function(){return this.getPathParam("groupId")},e.prototype.artifactIdParam=function(){return this.getPathParam("artifactId")},e.prototype.initializePageState=function(){return{}},e}(a.I),l=r(69910),f=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();const h=function(t){function e(e){return t.call(this,e)||this}return f(e,t),e.prototype.postConstruct=function(){l.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)},e.prototype.groupIdParam=function(){return this.props.groupId},e.prototype.artifactIdParam=function(){return this.props.artifactId},e}(u)},92715:(t,e,r)=>{r.d(e,{I:()=>_});var n,o,i=r(48121),a=r.n(i),c=r(8105),s=r(46768),p=r(95995),u=r(93568),l=(r(79253),r(42557),r(93548)),f=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),h=function(t){function e(e){var r=t.call(this,e)||this;return r.navigateBack=function(){window.history.back()},r}return f(e,t),e.prototype.render=function(){return a().createElement(a().Fragment,null,a().createElement(p.PageSection,{className:"ps_error",variant:p.PageSectionVariants.light},a().createElement("div",{className:"centerizer"},a().createElement(p.EmptyState,{variant:p.EmptyStateVariant.large},a().createElement(p.EmptyStateIcon,{icon:u.LockedIcon}),a().createElement(p.Title,{headingLevel:"h5",size:"lg"},"Access permissions needed"),a().createElement(p.EmptyStateBody,null,"To access this Service Registry instance, contact your organization administrators."),a().createElement(p.EmptyStateSecondaryActions,null,a().createElement(p.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},e}(l.m),y=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),g=function(t){function e(e){var r=t.call(this,e)||this;return r.navigateBack=function(){window.history.back()},r}return y(e,t),e.prototype.render=function(){return a().createElement(a().Fragment,null,a().createElement(p.PageSection,{className:"ps_error",variant:p.PageSectionVariants.light},a().createElement("div",{className:"centerizer"},a().createElement(p.EmptyState,{variant:p.EmptyStateVariant.large},a().createElement(p.EmptyStateIcon,{icon:u.ExclamationCircleIcon}),a().createElement(p.Title,{headingLevel:"h5",size:"lg"},"Current usage is too high"),a().createElement(p.EmptyStateBody,null,"This Service Registry instance is throttled due to a high request rate. Ensure that existing applications are properly configured to cache the schemas."),a().createElement(p.EmptyStateSecondaryActions,null,a().createElement(p.Button,{variant:"link","data-testid":"error-btn-back",onClick:this.navigateBack},"Return to previous page"))))))},e}(l.m),d=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),m=function(){return m=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},m.apply(this,arguments)},v=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n};!function(t){t[t.React=0]="React",t[t.Server=1]="Server"}(o||(o={}));var _=function(t){function e(e){var r=t.call(this,e)||this;return setTimeout((function(){r.loadPageData()}),10),r}return d(e,t),e.prototype.initializeState=function(){return m(m({},this.initializePageState()),{isLoading:!0})},e.prototype.componentDidCatch=function(t,e){this.handleError(o.React,t,e)},e.prototype.render=function(){return this.isError()?this.is403Error()?a().createElement(h,{error:this.state.error}):this.is419Error()?a().createElement(g,{error:this.state.error}):a().createElement(c.mf,{error:this.state.error}):this.isLoading()?a().createElement(a().Fragment,null,a().createElement(p.PageSection,{variant:p.PageSectionVariants.default,isFilled:!0},a().createElement(p.Flex,null,a().createElement(p.FlexItem,null,a().createElement(p.Spinner,{size:"lg"})),a().createElement(p.FlexItem,null,a().createElement("span",null,"Loading..."))))):this.renderPage()},e.prototype.postConstruct=function(){c.Vx.setHistory(this.props.history),t.prototype.postConstruct.call(this)},e.prototype.createLoaders=function(){return null},e.prototype.handleServerError=function(t,e){this.handleError(o.Server,t,e)},e.prototype.getPathParam=function(t){return decodeURIComponent(this.props.match.params[t])},e.prototype.isLoading=function(){return!!this.state.isLoading},e.prototype.loadPageData=function(){var t=this,e=this.createLoaders();null==e&&(e=[]),Array.isArray(e)||(e=[e]),0===(e=v([s.Services.getUsersService().updateCurrentUser()],e)).length?this.setSingleState("isLoading",!1):(this.setSingleState("isLoading",!0),Promise.all(e).then((function(){t.setSingleState("isLoading",!1)})).catch((function(e){s.Services.getLoggerService().debug("[PageComponent] Page data load failed, retrying.");var r=t.getRetries();r<1?(t.incrementRetries(),setTimeout((function(){t.loadPageData()}),100*Math.pow(2,r))):t.handleServerError(e,"Error loading page data.")})))},e.prototype.getRetries=function(){return void 0!==this.state.pageLoadRetries?this.state.pageLoadRetries:0},e.prototype.incrementRetries=function(){var t=this.getRetries()+1;this.setSingleState("pageLoadRetries",t)},e.prototype.isError=function(){return!!this.state.isError},e.prototype.is403Error=function(){return this.state.error&&this.state.error.error.status&&403==this.state.error.error.status},e.prototype.is419Error=function(){return this.state.error&&this.state.error.error.status&&419==this.state.error.error.status},e.prototype.handleError=function(t,e,r){s.Services.getLoggerService().error("[PageComponent] Handling an error of type: ",t),s.Services.getLoggerService().error("[PageComponent] ",r),s.Services.getLoggerService().error("[PageComponent] ",e),this.setMultiState({error:{error:e,errorMessage:r,type:t},isError:!0})},e}(c.Vx)},28172:(t,e,r)=>{r.d(e,{_:()=>n});var n=function(){}},89023:(t,e,r)=>{r.d(e,{R:()=>n});var n=function(){function t(){}return t.AVRO="AVRO",t.PROTOBUF="PROTOBUF",t.JSON="JSON",t.OPENAPI="OPENAPI",t.ASYNCAPI="ASYNCAPI",t.GRAPHQL="GRAPHQL",t.KCONNECT="KCONNECT",t.WSDL="WSDL",t.XSD="XSD",t.XML="XML",t}()}}]);
