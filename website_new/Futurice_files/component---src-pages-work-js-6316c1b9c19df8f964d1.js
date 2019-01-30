webpackJsonp([23899280101116],{447:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Case=void 0;var r=a(4),c=n(r),u=a(5),i=n(u),d=a(9),f=n(d),m=a(28),p=a(13),h=a(763),g=n(h),C=a(46),E=n(C),y=a(266),v=n(y),b=a(170),w=t.Case=function(e){function t(){l(this,t);var a=s(this,e.call(this));return a.state={open:!1},a.toggleOpen=a.toggleOpen.bind(a),a}return o(t,e),t.prototype.toggleOpen=function(e){this.setState({open:!this.state.open}),b.scroller.scrollTo("case_"+e,{smooth:!0})},t.prototype.render=function(){var e=this,t=this.props,a=t.caseItem,n=t.index;return c.default.createElement("div",{name:"case_"+n,className:""+(n%2?g.default.caseRight:g.default.caseLeft)},c.default.createElement("div",{className:g.default.image,style:{backgroundImage:"url("+a.imageUrl+")"}}),c.default.createElement("div",{className:g.default.caseContent+" "+(this.state.open?g.default.open:""),onClick:function(){return e.toggleOpen(n)}},c.default.createElement("div",{className:g.default.logoContainer},a.clients&&a.clients.map(function(e){return c.default.createElement("img",{key:e.name?e.name:Math.random(),src:e.logoURL,alt:e.name||""})})),c.default.createElement("h5",null,a.heading),c.default.createElement("div",{className:g.default.contentText,style:this.state.open?{maxHeight:"600px"}:{maxHeight:0},dangerouslySetInnerHTML:{__html:a.contentText}}),c.default.createElement("div",{className:g.default.toggle,style:this.state.open?{transform:"rotate(45deg)"}:{transform:"rotate(0)"}},c.default.createElement(E.default,{icon:v.default}))))},t}(r.Component),x=function(e){var t=e.cases;return c.default.createElement("div",{className:""+g.default.cases},t&&t.map(function(e,a){return c.default.createElement("div",{key:e.slug,className:g.default.caseContainer},c.default.createElement(w,{index:a,caseItem:e}),0===a&&c.default.createElement(m.CTABox,{className:"caseright"},c.default.createElement("h3",null,"Get to the root of your business problems and turn them into innovation opportunities."),c.default.createElement(f.default,{to:"/services"},c.default.createElement(p.Button,{theme:"primary"},"How we help"))),1===a&&c.default.createElement(m.CTABox,{className:"caseleft"},c.default.createElement("h3",null,"We are your guide through cultural and digital transformation. "),c.default.createElement(f.default,{to:"/services"},c.default.createElement(p.Button,{theme:"primary"},"Explore our services"))),a===t.length-2&&c.default.createElement(m.CTABox,{className:"caseleft"},c.default.createElement("h3",null,"Our pioneering staff break boundaries with emerging technology, and build new businesses from scratch."),c.default.createElement(f.default,{to:"/services"},c.default.createElement(p.Button,{theme:"primary-light"},"Explore our services"))),0!==a&&1!==a&&a!==t.length-2&&a!==t.length-1&&c.default.createElement("div",{className:"space",style:{marginTop:"20vw"}}))}))};x.propTypes={cases:i.default.arrayOf(i.default.shape({heading:i.default.string.isRequired,slug:i.default.string.isRequired,imageUrl:i.default.string.isRequired,clients:i.default.array.isRequired}))},t.default=x},763:function(e,t){e.exports={cases:"src-components-Cases----Cases-module---cases---1X4Ji",case:"src-components-Cases----Cases-module---case---VA4xa",logoContainer:"src-components-Cases----Cases-module---logoContainer---3tdE4",image:"src-components-Cases----Cases-module---image---2P5xI",caseContent:"src-components-Cases----Cases-module---caseContent---2tbSJ",contentText:"src-components-Cases----Cases-module---contentText---32Qyg",open:"src-components-Cases----Cases-module---open---jcpjJ",toggle:"src-components-Cases----Cases-module---toggle---3ca1C",caseLeft:"src-components-Cases----Cases-module---caseLeft---IF-JJ src-components-Cases----Cases-module---case---VA4xa",caseRight:"src-components-Cases----Cases-module---caseRight---13xvz src-components-Cases----Cases-module---case---VA4xa",caseContainer:"src-components-Cases----Cases-module---caseContainer---2JFJn"}},490:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var s=a(4),o=l(s),r=a(9),c=l(r),u=a(15),i=n(u),d=a(23),f=l(d),m=a(29),p=l(m),h=a(24),g=l(h),C=a(447),E=l(C),y=a(28),v=a(13),b=function(e){var t=e.data,a=i.path(["allContentfulCase","edges"],t).map(function(e){var t=i.path(["node","clients"],e)||[];return{slug:i.path(["node","slug"],e),heading:i.path(["node","heading"],e),imageUrl:i.path(["node","image","responsiveResolution","src"],e),clients:t.map(function(e){return{logoURL:i.path(["clientLogo","file","url"],e),name:i.path(["clientName"],e)}}),contentText:i.path(["node","contentText","childMarkdownRemark","html"],e)}}),n=i.head(a.filter(function(e){return e.slug.includes("futurice-robotics-artificial-intelligence-machine-learning-social-robots")})),l=a.indexOf(n);n&&a.splice(l,1),n&&a.push(n);var s=i.path(["allContentfulOffice","edges"],t).map(function(e){return{slug:i.path(["node","slug"],e),name:i.path(["node","officeName"],e),coordinates:i.path(["node","coordinates"],e)}});return o.default.createElement("section",null,o.default.createElement(f.default,{title:"Work"}),o.default.createElement(g.default,{theme:7,bottomAngle:!0,withLocation:!0,officeCoordinates:s},o.default.createElement("h1",null,"Making a difference for 17 years (and counting)")),o.default.createElement(y.CTABox,{className:"textlift",style:{textAlign:"left",marginTop:"14vw"}},o.default.createElement("div",null,o.default.createElement("h3",null,"Since 2001, we have worked on more than one thousand projects with over two hundred partners, and we’re known for our humble attitude."),o.default.createElement("p",null,"There’s two sides to this accolade. In some countries and cultures — like Finland — being humble is seen as a virtue. As a marketing strategy, it’s not that great."),o.default.createElement("p",null,"We’re currently working on a new case study format and getting NDA’s signed off. Until then, browse highlights of our work below.")),o.default.createElement("div",null)),o.default.createElement(E.default,{cases:a}),o.default.createElement(p.default,null,o.default.createElement(y.CTABox,{style:{marginBottom:"200px"}},o.default.createElement("h1",null,"Technically minded?"),o.default.createElement("h6",null,"Discover what our talented technologists are up to."),o.default.createElement(c.default,{to:"/blog"},o.default.createElement(v.Button,{theme:"secondary-light"},"VIEW OUR Tech blog")))))};t.default=b;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-work-js-6316c1b9c19df8f964d1.js.map