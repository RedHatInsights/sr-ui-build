/*! For license information please see 190.bundle.1e1194481d61277f5094.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[190,755],{24754:(t,e,r)=>{r.d(e,{If:()=>s});var n,o=r(48121),i=r.n(o),a=r(52445),c=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t){function e(e){return t.call(this,e)||this}return c(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){return"boolean"==typeof this.props.condition?this.props.condition:this.props.condition()},e}(a.V)},67030:(t,e,r)=>{r.d(e,{N:()=>p});var n,o=r(48121),i=r.n(o),a=r(52445),c=r(46768),s=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.Services.getAuthService(),e=!0;return void 0!==this.props.enabled&&(e=e&&t.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(e=e&&t.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(e=e&&t.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(e=e&&t.isUserDeveloper(this.props.owner)===this.props.isDeveloper),e},e}(a.V)},13294:(t,e,r)=>{r.d(e,{Q:()=>p});var n,o=r(48121),i=r.n(o),a=r(52445),c=r(46768),s=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.Services.getConfigService().features()[this.props.feature];return void 0!==this.props.is?t===this.props.is:void 0!==this.props.isNot?t!==this.props.isNot:void 0!==t},e}(a.V)},99415:(t,e,r)=>{r.d(e,{N:()=>g});var n,o=r(48121),i=r.n(o),a=r(95995),c=r(95762),s=r.n(c),p=r(52445),u=r(67030),l=r(50402),f=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),h=(function(t){function e(e){return t.call(this,e)||this}f(e,t),e.prototype.render=function(){var t;return t=i().createElement(a.PageHeaderTools,{className:"header-toolbar"},i().createElement(a.PageHeaderToolsGroup,null,i().createElement(a.PageHeaderToolsItem,{id:"avatar"},i().createElement(u.N,{enabled:!0},i().createElement(l.K,null))))),i().createElement(a.PageHeader,{logo:i().createElement(a.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:s(),alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:t})},e.prototype.initializeState=function(){return{}}}(p.V),r(72672)),y=r(46768),d=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),g=function(t){function e(e){var r=t.call(this,e)||this;return r.handleTabClick=function(t,e){e!=r.props.tabKey&&(0==e&&r.navigateTo(r.linkTo("/artifacts"))(),1==e&&r.navigateTo(r.linkTo("/rules"))(),2==e&&r.navigateTo(r.linkTo("/roles"))())},r}return d(e,t),e.prototype.render=function(){var t=[i().createElement(a.Tab,{eventKey:0,title:i().createElement(a.TabTitleText,null,"Artifacts")}),i().createElement(a.Tab,{eventKey:1,title:i().createElement(a.TabTitleText,null,"Global Rules")})];return y.Services.getConfigService().featureRoleManagement()&&t.push(i().createElement(a.Tab,{eventKey:2,title:i().createElement(a.TabTitleText,null,"Permissions")})),i().createElement("div",null,i().createElement(h.No,{isAdmin:!0},i().createElement(a.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:t})))},e.prototype.initializeState=function(){return{}},e}(p.V)},65831:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n,o=r(97581),i=r(69910),a=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});const c=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)},e}(o.F)},70581:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n,o=r(83993),i=r(69910),a=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});const c=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)},e}(o.y)},84270:(t,e,r)=>{r.d(e,{ye:()=>n.y});var n=r(14198);r(37759),r(99350)},73243:(t,e,r)=>{r.d(e,{B:()=>n.B});var n=r(2377)},80941:(t,e,r)=>{r.d(e,{U:()=>n.U});var n=r(60210)},70150:(t,e,r)=>{r.d(e,{k:()=>n.k});var n=r(85428)},26619:(t,e,r)=>{r.d(e,{I:()=>h});var n,o,i=r(48121),a=r.n(i),c=r(60553),s=r(46768),p=r(95995),u=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(){return l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},l.apply(this,arguments)},f=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n};!function(t){t[t.React=0]="React",t[t.Server=1]="Server"}(o||(o={}));var h=function(t){function e(e){var r=t.call(this,e)||this;return setTimeout((function(){r.loadPageData()}),10),r}return u(e,t),e.prototype.initializeState=function(){return l(l({},this.initializePageState()),{isLoading:!0})},e.prototype.componentDidCatch=function(t,e){this.handleError(o.React,t,e)},e.prototype.render=function(){return this.isError()?a().createElement(c.mf,{error:this.state.error}):this.isLoading()?a().createElement(a().Fragment,null,a().createElement(p.PageSection,{variant:p.PageSectionVariants.default,isFilled:!0},a().createElement(p.Flex,null,a().createElement(p.FlexItem,null,a().createElement(p.Spinner,{size:"lg"})),a().createElement(p.FlexItem,null,a().createElement("span",null,"Loading, please wait..."))))):this.renderPage()},e.prototype.postConstruct=function(){c.Vx.setHistory(this.props.history),t.prototype.postConstruct.call(this)},e.prototype.createLoaders=function(){return null},e.prototype.handleServerError=function(t,e){this.handleError(o.Server,t,e)},e.prototype.getPathParam=function(t){return decodeURIComponent(this.props.match.params[t])},e.prototype.isLoading=function(){return!!this.state.isLoading},e.prototype.loadPageData=function(){var t=this,e=this.createLoaders();null==e&&(e=[]),Array.isArray(e)||(e=[e]),0===(e=f([s.Services.getUsersService().updateCurrentUser()],e)).length?this.setSingleState("isLoading",!1):(this.setSingleState("isLoading",!0),Promise.all(e).then((function(){t.setSingleState("isLoading",!1)})).catch((function(e){s.Services.getLoggerService().debug("[PageComponent] Page data load failed, retrying.");var r=t.getRetries();r<5?(t.incrementRetries(),setTimeout((function(){t.loadPageData()}),100*Math.pow(2,r))):t.handleServerError(e,"Error loading page data.")})))},e.prototype.getRetries=function(){return void 0!==this.state.pageLoadRetries?this.state.pageLoadRetries:0},e.prototype.incrementRetries=function(){var t=this.getRetries()+1;this.setSingleState("pageLoadRetries",t)},e.prototype.isError=function(){return!!this.state.isError},e.prototype.handleError=function(t,e,r){s.Services.getLoggerService().error("[PageComponent] Handling an error of type: ",t),s.Services.getLoggerService().error("[PageComponent] ",r),s.Services.getLoggerService().error("[PageComponent] ",e),this.setMultiState({error:{error:e,errorMessage:r,type:t},isError:!0})},e}(c.Vx)},28172:(t,e,r)=>{r.d(e,{_:()=>n});var n=function(){}},89023:(t,e,r)=>{r.d(e,{R:()=>n});var n=function(){function t(){}return t.AVRO="AVRO",t.PROTOBUF="PROTOBUF",t.JSON="JSON",t.OPENAPI="OPENAPI",t.ASYNCAPI="ASYNCAPI",t.GRAPHQL="GRAPHQL",t.KCONNECT="KCONNECT",t.WSDL="WSDL",t.XSD="XSD",t.XML="XML",t}()}}]);
//# sourceMappingURL=190.bundle.1e1194481d61277f5094.js.map