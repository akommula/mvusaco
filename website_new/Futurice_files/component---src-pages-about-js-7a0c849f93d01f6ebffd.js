webpackJsonp([0xefeaa6d1881d],{175:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(4),l=n(r),u=a(226),o=n(u),i=a(25),c=function(e){return l.default.createElement("div",{className:o.default.cultureList},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"grid-x"},l.default.createElement("h3",null,"We define, refine, and support our cultural growth."),l.default.createElement(i.ContentListHorizontal,{smallItems:!0,hideOnMobile:!1,items:e.items,type:"articles",firstFeatured:!0}))))};t.default=c,e.exports=t.default},226:function(e,t){e.exports={cultureList:"src-components----CultureList-module---cultureList---3dR-e",sticky:"src-components----CultureList-module---sticky---1TRYL",values:"src-components----CultureList-module---values---OeUBS",articles:"src-components----CultureList-module---articles---2Rbrd"}},455:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(4),l=n(r),u=a(775),o=n(u),i=function(e){var t=e.items;return l.default.createElement("div",{className:o.default.ImpactGrid},l.default.createElement("div",{className:o.default.cardsGrid+" grid-x align-left"},t.map(function(e,t){return l.default.createElement("div",{className:o.default.card+" medium-3 columns",key:"card"+e.title+"_"+t},l.default.createElement("h3",null,e.title),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.paragraph}}))})))};t.default=i,e.exports=t.default},775:function(e,t){e.exports={"size-plus":"src-components----ImpactGrid-module---size-plus---1DzKT",cta:"src-components----ImpactGrid-module---cta---1iAAX",caption:"src-components----ImpactGrid-module---caption---3dhEX",ImpactGrid:"src-components----ImpactGrid-module---ImpactGrid---28d9d",header:"src-components----ImpactGrid-module---header---3B9IS",cardsGrid:"src-components----ImpactGrid-module---cardsGrid---2hlz9",card:"src-components----ImpactGrid-module---card---3MpOu"}},470:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(4),l=n(r),u=a(789),o=n(u),i=function(e){var t=e.items;return l.default.createElement("div",{className:o.default.NumberGrid},l.default.createElement("div",null,l.default.createElement("h3",{style:{textTransform:"uppercase",fontSize:"70%"}},"Futurice in numbers")),l.default.createElement("div",{className:o.default.cardsGrid+" grid-x align-left"},t.map(function(e,t){return l.default.createElement("div",{className:o.default.card+" medium-3 columns",key:"card"+e.title+"_"+t},l.default.createElement("p",null,e.paragraph),l.default.createElement("h3",null,e.title))})))};t.default=i,e.exports=t.default},789:function(e,t){e.exports={"size-plus":"src-components----NumberGrid-module---size-plus---1228R",cta:"src-components----NumberGrid-module---cta---2llUs",caption:"src-components----NumberGrid-module---caption---24May",NumberGrid:"src-components----NumberGrid-module---NumberGrid---JU2At",header:"src-components----NumberGrid-module---header---19BGy",cardsGrid:"src-components----NumberGrid-module---cardsGrid---1Q4w3",card:"src-components----NumberGrid-module---card---126nd"}},102:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(4),i=n(o),c=a(5),s=n(c),d=a(110),m=n(d),f=function(e){function t(){var a,n,u;r(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return a=n=l(this,e.call.apply(e,[this].concat(i))),n.gapSize=function(e){return void 0!==e?m.default[e]:m.default.small},u=a,l(n,u)}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.gapSize,a=e.gapHeight;return i.default.createElement("div",{className:""+(void 0===a?this.gapSize(t)+" "+m.default.Spacer:""+m.default.Spacer),style:{height:void 0!==a?a:""}})},t}(o.Component);f.propTypes={gapSize:s.default.oneOf(["small","medium","big"]),gapHeight:s.default.string},t.default=f,e.exports=t.default},110:function(e,t){e.exports={Spacer:"src-components----Spacer-module---Spacer---34OxC",small:"src-components----Spacer-module---small---2_A6W",medium:"src-components----Spacer-module---medium---1-O1j",big:"src-components----Spacer-module---big---36Z2o"}},481:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(4),u=r(l),o=a(9),i=r(o),c=a(15),s=n(c),d=a(23),m=r(d),f=a(24),p=r(f),h=a(28),g=a(13),v=a(123),E=r(v),b=a(175),y=(r(b),a(29)),N=r(y),G=a(470),_=r(G),w=a(455),x=r(w),C=a(102),S=r(C),T=a(269),I=r(T),M=a(25),O=function(e){var t=e.data,a=(e.transition,s.has("sizes"),s.path(["allContentfulOffice","edges"],t).map(function(e){return{slug:s.path(["node","slug"],e),name:s.path(["node","officeName"],e),coordinates:s.path(["node","coordinates"],e)}})),n=s.path(["allContentfulFuturiceNumbersGroup","edges"],t).map(function(e){return{slug:s.path(["node","slug"],e),name:s.path(["node","name"],e),values:s.path(["node","values"],e).map(function(e){return{slug:s.path(["slug"],e),title:s.path(["futuriceNumberTitle"],e),paragraph:s.path(["futuriceNumberContentText","futuriceNumberContentText"],e)}})}}),r=s.path(["allContentfulImpactGroup","edges"],t).map(function(e){return{slug:s.path(["node","slug"],e),name:s.path(["node","name"],e),values:s.path(["node","values"],e).map(function(e){return{slug:s.path(["slug"],e),title:s.path(["impactTitle"],e),paragraph:s.path(["childMarkdownRemark","html"],e.impactContentText)}})}}),l=s.path(["allContentfulClient","edges"],t)?s.path(["allContentfulClient","edges"],t).map(function(e){return{slug:s.path(["node","slug"],e),name:s.path(["node","clientName"],e),logoUrl:s.path(["node","clientLogoGrey","responsiveResolution","src"],e)}}):[],o=s.path(["node","image","responsiveResolution","src"],s.head(s.path(["coverImages","edges"],t)));return u.default.createElement("div",null,u.default.createElement(m.default,{title:"About"}),u.default.createElement(p.default,{theme:8,bottomAngle:!0,withLocation:!0,officeCoordinates:a},u.default.createElement("h1",null,"Digital Engineering & Innovation")),u.default.createElement(N.default,{theme:1,directionTop:"topRight",topMargin:!0},u.default.createElement("div",{className:"container"},u.default.createElement(I.default,{heading:"A seamless combination of strategy, design, and engineering.",paragraph:"We help our clients unleash innovation through digital product design and build, emerging technology, agile software development and lean organisational change.",color:"#000000"})),u.default.createElement("div",{className:"container"},n&&n.map(function(e,t){return u.default.createElement(_.default,{key:e.slug,headline:e.name,contentText:e.contentText,items:e.values})}))),u.default.createElement(E.default,{bgImage:o}),u.default.createElement(S.default,{gapSpace:"big"}),u.default.createElement("div",{className:"container"},u.default.createElement(I.default,{heading:"How we create impact and help you stay relevant",paragraph:"We have identified key areas of action, which we strongly believe have the highest impact on mastering the challenges of new times. It is not about technology, but technology drives most of the opportunities to create new value for customers, businesses, and organisations alike.",color:"#000000"})),u.default.createElement("div",{className:"container"},r&&r.map(function(e,t){return u.default.createElement(x.default,{key:e.slug,headline:e.name,contentText:e.contentText,items:e.values})})),u.default.createElement("div",{style:{textAlign:"center"}},u.default.createElement(i.default,{to:"/services"},u.default.createElement(g.Button,{theme:"primary"},"Our Services"))),u.default.createElement(S.default,{gapSpace:"big"}),u.default.createElement(S.default,{gapSpace:"big"}),u.default.createElement("div",{className:"container"},u.default.createElement("h3",{style:{textTransform:"uppercase",fontSize:"70%"}},"Selected Clients & Partners")),u.default.createElement(M.ClientsLift,{headline:"",textContent:"",clients:l,theme:"bright"}),u.default.createElement(h.CTABox,{className:"final",style:{marginTop:"2vw"}},u.default.createElement("h1",null,"Let's make award-winning",u.default.createElement("br",null),"work, together"),u.default.createElement("h6",null,"Join a long list of satisfied clients, partners, ",u.default.createElement("br",null),"and successful businesses that we have had ",u.default.createElement("br",null),"the pleasure of working with."),u.default.createElement(i.default,{to:"/contact"},u.default.createElement(g.Button,{theme:"primary"},"Get in touch"))))};t.default=O;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-about-js-7a0c849f93d01f6ebffd.js.map