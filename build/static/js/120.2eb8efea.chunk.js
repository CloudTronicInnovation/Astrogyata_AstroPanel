(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[120],{1662:function(e,a,t){},2003:function(e,a,t){"use strict";t.r(a);var l=t(27),n=t(0),o=t.n(n),c=t(28),s=t(1241),r=t(1239),m=t(1240),i=t(188),d=t(810),u=t(804),p=t(35),f=(t(1662),t(181),t(809),t(807),t(572),t(802),t(99)),g=t.n(f),E=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],f=a[1];return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement(r.a,null,o.a.createElement(m.a,{lg:"6",sm:"6",md:"6"},o.a.createElement(r.a,null,o.a.createElement("div",{className:"d-flex container"},o.a.createElement("h3",{className:"mt-2 mb-1 mx-3"}," Upload Your Gallary ")))),o.a.createElement(m.a,null,o.a.createElement("div",{className:"d-flex justify-content-end container mt-2 mr-1"},o.a.createElement("div",null,o.a.createElement(i.a,{onClick:function(){c.a.goBack()},color:"primary"}," ","Back"))))),o.a.createElement(r.a,null,o.a.createElement(m.a,{className:"mb-2 mt-2"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"uplodsdata"},o.a.createElement(r.a,{className:"uploadmain"},o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement("p",{style:{color:"red"}},"png,jpg,jpeg,mp4-only"," ")),o.a.createElement(u.a,{name:"file",onChange:function(e){return f(e.target.files[0])},accept:"video/mp4,.png,.jpg,.jpeg",type:"file"}))),o.a.createElement(m.a,null,o.a.createElement("div",{className:"buttonuploadv"},o.a.createElement(i.a,{onClick:function(){var e=localStorage.getItem("astroId");console.log(t),console.log(e);var a=new FormData;a.append("astroId",e),a.append("file",t),p.a.post("/admin/upload_astrogallery",a).then((function(e){console.log(e),"success"===(null===e||void 0===e?void 0:e.data.message)&&g()(" Uploaded Sucessfully")})).catch((function(e){console.log(e.response)}))},size:"sm",className:"bntuploadsvideo mt-3",color:"primary"},"Upload"))))))))))))};E.defaultProps={},a.default=E},810:function(e,a,t){"use strict";var l=t(5),n=t(7),o=t(0),c=t.n(o),s=t(1),r=t.n(s),m=t(4),i=t.n(m),d=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=r.a.oneOfType([r.a.number,r.a.string]),f=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:p,order:p,offset:p})]),g={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:d.tagPropType,className:r.a.string,cssModule:r.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:r.a.array},E={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.hidden,s=e.widths,r=e.tag,m=e.check,p=e.size,f=e.for,g=Object(n.a)(e,u),E=[];s.forEach((function(a,l){var n=e[a];if(delete g[a],n||""===n){var o,c=!l;if(Object(d.isObject)(n)){var s,r=c?"-":"-"+a+"-";o=h(c,a,n.size),E.push(Object(d.mapToCssModules)(i()(((s={})[o]=n.size||""===n.size,s["order"+r+n.order]=n.order||0===n.order,s["offset"+r+n.offset]=n.offset||0===n.offset,s))),t)}else o=h(c,a,n),E.push(o)}}));var v=Object(d.mapToCssModules)(i()(a,!!o&&"sr-only",!!m&&"form-check-label",!!p&&"col-form-label-"+p,E,!!E.length&&"col-form-label"),t);return c.a.createElement(r,Object(l.a)({htmlFor:f},g,{className:v}))};v.propTypes=g,v.defaultProps=E,a.a=v}}]);
//# sourceMappingURL=120.2eb8efea.chunk.js.map