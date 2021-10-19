/*! For license information please see 27.bundle.bc33f142e32774c26fb2.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[27,755],{67030:(t,e,r)=>{r.d(e,{N:()=>l});var n,o=r(48121),i=r.n(o),a=r(52445),c=r(46768),u=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t){function e(e){return t.call(this,e)||this}return u(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.Services.getAuthService(),e=!0;return void 0!==this.props.enabled&&(e=e&&t.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(e=e&&t.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(e=e&&t.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(e=e&&t.isUserDeveloper(this.props.owner)===this.props.isDeveloper),e},e}(a.V)},13294:(t,e,r)=>{r.d(e,{Q:()=>l});var n,o=r(48121),i=r.n(o),a=r(52445),c=r(46768),u=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t){function e(e){return t.call(this,e)||this}return u(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.Services.getConfigService().features()[this.props.feature];return void 0!==this.props.is?t===this.props.is:void 0!==this.props.isNot?t!==this.props.isNot:void 0!==t},e}(a.V)},99415:(t,e,r)=>{r.d(e,{t:()=>h,N:()=>v});var n,o=r(48121),i=r.n(o),a=r(95995),c=r(95762),u=r.n(c),l=r(52445),s=r(67030),p=r(50402),f=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),h=function(t){function e(e){return t.call(this,e)||this}return f(e,t),e.prototype.render=function(){var t;return t=i().createElement(a.PageHeaderTools,{className:"header-toolbar"},i().createElement(a.PageHeaderToolsGroup,null,i().createElement(a.PageHeaderToolsItem,{id:"avatar"},i().createElement(s.N,{enabled:!0},i().createElement(p.K,null))))),i().createElement(a.PageHeader,{logo:i().createElement(a.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:u(),alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:t})},e.prototype.initializeState=function(){return{}},e}(l.V),g=r(72672),d=r(46768),y=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),v=function(t){function e(e){var r=t.call(this,e)||this;return r.handleTabClick=function(t,e){e!=r.props.tabKey&&(0==e&&r.navigateTo(r.linkTo("/artifacts"))(),1==e&&r.navigateTo(r.linkTo("/rules"))(),2==e&&r.navigateTo(r.linkTo("/roles"))())},r}return y(e,t),e.prototype.render=function(){var t=[i().createElement(a.Tab,{eventKey:0,title:i().createElement(a.TabTitleText,null,"Artifacts")}),i().createElement(a.Tab,{eventKey:1,title:i().createElement(a.TabTitleText,null,"Global Rules")})];return d.Services.getConfigService().featureRoleManagement()&&t.push(i().createElement(a.Tab,{eventKey:2,title:i().createElement(a.TabTitleText,null,"Permissions")})),i().createElement("div",null,i().createElement(g.No,{isAdmin:!0},i().createElement(a.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:t})))},e.prototype.initializeState=function(){return{}},e}(l.V)},65831:(t,e,r)=>{var n,o=r(97581),i=r(69910),a=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});!function(t){function e(e){return t.call(this,e)||this}a(e,t),e.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)}}(o.F)},20301:(t,e,r)=>{r.d(e,{X:()=>n.X});var n=r(7477)},15392:(t,e,r)=>{r.d(e,{p:()=>n.p});var n=r(96597);r(70823)},93692:(t,e,r)=>{r.d(e,{IK:()=>n.I,pX:()=>o.p,fP:()=>i.f});var n=r(11054),o=r(54882),i=r(87578);r(75921)},5571:(t,e,r)=>{r.d(e,{G:()=>n.G});var n=r(95042)},84270:(t,e,r)=>{r.d(e,{ye:()=>n.y});var n=r(14198);r(37759),r(99350)},73243:(t,e,r)=>{r.d(e,{B:()=>n.B});var n=r(2377)},80941:(t,e,r)=>{r.d(e,{U:()=>n.U});var n=r(60210)},70150:(t,e,r)=>{r.d(e,{k:()=>n.k});var n=r(85428)},11940:(t,e,r)=>{r.d(e,{gx:()=>n.g,st:()=>o.s,C0:()=>i.C});var n=r(19595),o=r(41016),i=r(38166)},16455:(t,e,r)=>{r.r(e);var n,o=r(48121),i=r.n(o),a=r(61568),c=r.n(a),u=r(95995),l=r(98068),s=r(99415),p=r(26619),f=r(66333),h=r(46768),g=r(60553),d=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),y=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n},v=function(t){function e(e){var r=t.call(this,e)||this;return r.doEnableRule=function(t){h.Services.getLoggerService().debug("[RulesPage] Enabling global rule:",t);var e="FULL";"COMPATIBILITY"===t&&(e="BACKWARD"),h.Services.getAdminService().createRule(t,e).catch((function(e){r.handleServerError(e,'Error enabling "'+t+'" global rule.')})),r.setSingleState("rules",y(r.rules(),[{config:e,type:t}]))},r.doDisableRule=function(t){h.Services.getLoggerService().debug("[RulesPage] Disabling global rule:",t),h.Services.getAdminService().deleteRule(t).catch((function(e){r.handleServerError(e,'Error disabling "'+t+'" global rule.')})),r.setSingleState("rules",r.rules().filter((function(e){return e.type!==t})))},r.doConfigureRule=function(t,e){h.Services.getLoggerService().debug("[RulesPage] Configuring global rule:",t,e),h.Services.getAdminService().updateRule(t,e).catch((function(e){r.handleServerError(e,'Error configuring "'+t+'" global rule.')})),r.setSingleState("rules",r.rules().map((function(r){return r.type===t?{config:e,type:r.type}:r})))},r}return d(e,t),e.prototype.renderPage=function(){return i().createElement(i().Fragment,null,i().createElement(u.PageSection,{className:"ps_rules-header",variant:u.PageSectionVariants.light,padding:{default:"noPadding"}},i().createElement(g.N4,{tabKey:1})),i().createElement(u.PageSection,{className:"ps_rules-description",variant:u.PageSectionVariants.light},i().createElement(u.TextContent,null,"Manage the list of Global Rules configured for the Registry below.  Rules can be enabled/disabled and also individually configured.")),i().createElement(u.PageSection,{variant:u.PageSectionVariants.default,isFilled:!0},i().createElement(i().Fragment,null,i().createElement(f.RB,{rules:this.rules(),onEnableRule:this.doEnableRule,onDisableRule:this.doDisableRule,onConfigureRule:this.doConfigureRule}))))},e.prototype.initializePageState=function(){return{isLoading:!0,rules:null}},e.prototype.createLoaders=function(){var t=this;return h.Services.getAdminService().getRules().then((function(e){t.setMultiState({isLoading:!1,rules:e})}))},e.prototype.rules=function(){return this.state.rules?this.state.rules:[]},e}(p.I),m=r(83993),_=(r(84270),r(73243),r(80941),r(70150),function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),E=function(t){function e(e){return t.call(this,e)||this}return _(e,t),e.prototype.renderPage=function(){var t=this.groupIdParam(),e=this.artifactIdParam(),r=this.linkTo("/artifacts/"+encodeURIComponent(t)+"/"+encodeURIComponent(e)+"/versions/latest");return h.Services.getLoggerService().info("[ArtifactRedirectPage] Redirecting to: %s",r),i().createElement(l.Redirect,{to:r})},e.prototype.groupIdParam=function(){return this.getPathParam("groupId")},e.prototype.artifactIdParam=function(){return this.getPathParam("artifactId")},e.prototype.initializePageState=function(){return{}},e}(p.I),b=(r(15392),r(20301),r(93692),r(5571),r(10564)),P=r(5977),S=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),O=function(t){function e(e){return t.call(this,e)||this}return S(e,t),e.prototype.renderPage=function(){return i().createElement(P.l_,{to:"/artifacts"})},e.prototype.initializePageState=function(){return{}},e}(p.I),R=r(93568),A=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),T=function(t){function e(e){return t.call(this,e)||this}return A(e,t),e.prototype.renderPage=function(){return i().createElement(i().Fragment,null,i().createElement(u.PageSection,{className:"ps_rules-header",variant:u.PageSectionVariants.light},i().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full},i().createElement(u.EmptyStateIcon,{icon:R.ExclamationCircleIcon}),i().createElement(u.Title,{headingLevel:"h5",size:"lg"},"404 Error: page not found"),i().createElement(u.EmptyStateBody,null,"This page couldn't be found.  If you think this is a bug, please report the issue."),i().createElement(u.Button,{variant:"primary","data-testid":"error-btn-artifacts",onClick:this.navigateTo(this.linkTo("/artifacts"))},"Show all artifacts"))))},e.prototype.initializePageState=function(){return{}},e}(p.I),C=(r(11940),r(54896)),I=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),w=function(){return w=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},w.apply(this,arguments)};const N=function(t){function e(e){return t.call(this,e)||this}return I(e,t),e.prototype.render=function(){var t=h.Services.getConfigService().uiContextPath();h.Services.getLoggerService().info("[App] Using app contextPath: ",t);return i().createElement(l.BrowserRouter,{basename:t},i().createElement(u.Page,{className:"pf-m-redhat-font",isManagedSidebar:!1,header:i().createElement(s.t,null)},i().createElement(l.Switch,null,i().createElement(l.Route,{path:"/",exact:!0,component:O}),i().createElement(l.Route,{path:"/rules",exact:!0,component:v}),i().createElement(l.Route,{path:"/roles",exact:!0,component:C.s}),i().createElement(l.Route,{path:"/artifacts",exact:!0,component:m.y}),i().createElement(l.Route,{path:"/artifacts/:groupId/:artifactId",exact:!0,component:E}),i().createElement(l.Route,{path:"/artifacts/:groupId/:artifactId/versions/:version",exact:!0,component:function(t){var e=t.location.pathname;return i().createElement(b.C,w({key:e},t))}}),i().createElement(l.Route,{component:T}))))},e}(i().PureComponent);h.Services.getAuthService().authenticateAndRender((function(){return c().render(i().createElement(N,null),document.getElementById("root"))}))},28172:(t,e,r)=>{r.d(e,{_:()=>n});var n=function(){}},89023:(t,e,r)=>{r.d(e,{R:()=>n});var n=function(){function t(){}return t.AVRO="AVRO",t.PROTOBUF="PROTOBUF",t.JSON="JSON",t.OPENAPI="OPENAPI",t.ASYNCAPI="ASYNCAPI",t.GRAPHQL="GRAPHQL",t.KCONNECT="KCONNECT",t.WSDL="WSDL",t.XSD="XSD",t.XML="XML",t}()}}]);
//# sourceMappingURL=27.bundle.bc33f142e32774c26fb2.js.map