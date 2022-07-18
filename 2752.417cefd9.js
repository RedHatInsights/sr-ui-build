/*! For license information please see 2752.417cefd9.js.LICENSE.txt */
"use strict";(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[2752],{35374:(t,e,n)=>{n.d(e,{N:()=>s});var r,o=n(93264),i=n.n(o),a=n(81167),c=n(29227),p=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(e){return t.call(this,e)||this}return p(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.K9.getAuthService(),e=!0;return void 0!==this.props.enabled&&(e=e&&t.isAuthenticationEnabled()===this.props.enabled),void 0!==this.props.isAuthenticated&&(e=e&&t.isAuthenticated()===this.props.isAuthenticated),void 0!==this.props.isAdmin&&(e=e&&t.isUserAdmin()===this.props.isAdmin),void 0!==this.props.isDeveloper&&(e=e&&t.isUserDeveloper(this.props.owner)===this.props.isDeveloper),e},e}(a.V)},26068:(t,e,n)=>{n.d(e,{Q:()=>s});var r,o=n(93264),i=n.n(o),a=n(81167),c=n(29227),p=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(e){return t.call(this,e)||this}return p(e,t),e.prototype.render=function(){return this.accept()?i().createElement(i().Fragment,{children:this.props.children}):i().createElement(i().Fragment,null)},e.prototype.initializeState=function(){return{}},e.prototype.accept=function(){var t=c.K9.getConfigService().features()[this.props.feature];return void 0!==this.props.is?t===this.props.is:void 0!==this.props.isNot?t!==this.props.isNot:void 0!==t},e}(a.V)},98227:(t,e,n)=>{n.d(e,{N:()=>a});var r=n(93264),o=n.n(r),i=n(99922),a=function(t){var e=t.collection,n=t.emptyState,r=t.emptyStateTitle,a=t.emptyStateMessage,c=t.children,p=n||o().createElement(i.EmptyState,{variant:i.EmptyStateVariant.xs},o().createElement(i.Title,{headingLevel:"h4",size:"md"},r||"None found"),o().createElement(i.EmptyStateBody,null,a||"No items found."));return e&&0!==e.length?o().createElement(o().Fragment,{children:c}):o().createElement(o().Fragment,{children:p})}},66092:(t,e,n)=>{n.d(e,{N:()=>d});var r,o=n(93264),i=n.n(o),a=(n(3195),n(99922)),c=n(43221),p=n(81167),s=n(35374),l=n(46022),u=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=(function(t){function e(e){return t.call(this,e)||this}u(e,t),e.prototype.render=function(){var t;return t=i().createElement(a.PageHeaderTools,{className:"header-toolbar"},i().createElement(a.PageHeaderToolsGroup,null,i().createElement(a.PageHeaderToolsItem,{id:"avatar"},i().createElement(s.N,{enabled:!0},i().createElement(l.K,null))))),i().createElement(a.PageHeader,{logo:i().createElement(a.Brand,{onClick:this.navigateTo(this.linkTo("/artifacts")),src:c.Z,alt:"Apicurio Registry"}),showNavToggle:!1,headerTools:t})},e.prototype.initializeState=function(){return{}}}(p.V),n(83847),n(8876)),h=n(29227),y=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(t){function e(e){var n=t.call(this,e)||this;return n.handleTabClick=function(t,e){e!=n.props.tabKey&&(0==e&&n.navigateTo(n.linkTo("/artifacts"))(),1==e&&n.navigateTo(n.linkTo("/rules"))(),2==e&&n.navigateTo(n.linkTo("/roles"))(),3==e&&n.navigateTo(n.linkTo("/settings"))())},n}return y(e,t),e.prototype.render=function(){var t=[i().createElement(a.Tab,{eventKey:0,title:i().createElement(a.TabTitleText,null,"Artifacts")}),i().createElement(a.Tab,{eventKey:1,title:i().createElement(a.TabTitleText,null,"Global rules")})];return h.K9.getConfigService().featureRoleManagement()&&t.push(i().createElement(a.Tab,{eventKey:2,title:i().createElement(a.TabTitleText,null,"Access")})),h.K9.getConfigService().featureSettings()&&t.push(i().createElement(a.Tab,{eventKey:3,title:i().createElement(a.TabTitleText,null,"Settings")})),i().createElement("div",null,i().createElement(f.No,{isAdmin:!0},i().createElement(a.Tabs,{activeKey:this.props.tabKey,onSelect:this.handleTabClick,children:t})))},e.prototype.initializeState=function(){return{}},e}(p.V)},72058:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var r,o=n(56550),i=n(2331),a=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});const c=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.postConstruct=function(){i.m.updateConfiguration(this.props),t.prototype.postConstruct.call(this)},e}(o.F)},6142:(t,e,n)=>{n.d(e,{_:()=>r});var r=function(){}},38780:(t,e,n)=>{n.d(e,{R:()=>r});var r=function(){function t(){}return t.AVRO="AVRO",t.PROTOBUF="PROTOBUF",t.JSON="JSON",t.OPENAPI="OPENAPI",t.ASYNCAPI="ASYNCAPI",t.GRAPHQL="GRAPHQL",t.KCONNECT="KCONNECT",t.WSDL="WSDL",t.XSD="XSD",t.XML="XML",t}()}}]);
