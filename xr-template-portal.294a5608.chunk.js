webpackJsonp([1],{1552:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=n(2),i=u(a),c=n(56),f=u(c),d=n(5),l=u(d),s=n(10),p=u(s),m=n(7),h=u(m),v=n(8),y=u(v),g=n(0),_=(u(g),n(270)),k=n(612),M=u(k),C=(r=(0,_.wrapper)(M.default))(o=function(e){function t(){return(0,l.default)(this,t),(0,h.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),t}(g.Component))||o;t.default=C,e.exports=t.default},1553:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new m.action(e),n=new y((0,a.default)({},e,{metaAction:t})),u=(0,a.default)({},t,n);return t.config({metaHandlers:u}),u}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=u(o),i=n(271),c=u(i),f=n(5),d=u(f);t.default=r;var l=n(0),s=u(l),p=n(274),m=n(270),h=n(604),v=u(h),y=function e(t){var u=this;(0,d.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;u.component=t,u.injections=n,n.reduce("init")},this.getLogo=function(){return v.default.getCurrent().logo},this.getPhoto=function(){return n(1564)},this.getMenuChildren=function(){var e=u.metaAction.gf("data.menu").toJS();return function e(t){var n=[];return t.forEach(function(t){t.children?n.push(s.default.createElement(p.Menu.SubMenu,{key:t.key,title:t.name},e(t.children))):n.push(s.default.createElement(p.Menu.Item,{key:t.key},t.name))}),n}(e)},this.menuClick=function(e){var t=u.metaAction.gf("data.menu").toJS(),n=function t(n){var u=!0,r=!1,o=void 0;try{for(var a,i=(0,c.default)(n);!(u=(a=i.next()).done);u=!0){var f=a.value;if(f.key==e.key)return f;if(f.children){var d=t(f.children);if(d)return d}}}catch(e){r=!0,o=e}finally{try{!u&&i.return&&i.return()}finally{if(r)throw o}}}(t);n&&u.injections.reduce("setContent",n.app,{})},this.myMenuClick=function(e){var t=v.default.getCurrent();"logout"==e.key&&u.component.props.onRedirect&&t.goAfterLogout&&(u.metaAction.context.set("user",void 0),u.component.props.onRedirect(t.goAfterLogout))},this.metaAction=t.metaAction};e.exports=t.default},1554:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new f.reducer(e),n=new s((0,a.default)({},e,{metaReducer:t}));return(0,a.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=u(o),i=n(5),c=u(i);t.default=r;var f=(n(78),n(270)),d=n(604),l=u(d),s=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){var u=l.default.getCurrent(),r={data:{menu:u.menu,menuDefaultSelectedKeys:u.menuDefaultSelectedKeys,menuDefaultOpenKeys:u.menuDefaultOpenKeys,content:u.defaultContent}};return n.metaReducer.init(e,r)},this.setContent=function(e,t,u){return e=n.metaReducer.sf(e,"data.content.appName",t),e=n.metaReducer.sf(e,"data.content.appParams",u)},this.metaReducer=t.metaReducer};e.exports=t.default},1564:function(e,t,n){e.exports=n.p+"photo.ac003cd4.png"}});