(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[137],{1985:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(44),s=t(13),r=t(14),l=t(16),i=t(15),c=t(0),o=t.n(c),m=t(1241),u=t(1239),d=t(1240),p=t(188),f=t(1244),h=t(811),b=t(810),g=t(804),E=t(35),v=t(59),y=t(802),N=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),E.a.post("/user/customersignup",r.state).then((function(e){console.log(e),alert("Customer Added Successful"),r.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},r.state={first_name:"",last_name:"",customer_email:"",mobile_no:"",status:"",dob:"",password:"",cnfrmpassword:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(y.a,{breadCrumbTitle:"Customer",breadCrumbParent:"Home",breadCrumbActive:"Add Customer "}),o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"Add User")),o.a.createElement(d.a,null,o.a.createElement(v.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/userride/userRideList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"First Name"),o.a.createElement(g.a,{required:!0,type:"text",name:"first_name",placeholder:"Enter First Name",value:this.state.first_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Last Name"),o.a.createElement(g.a,{required:!0,type:"text",name:"last_name",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Email"),o.a.createElement(g.a,{required:!0,type:"email",name:"customer_email",placeholder:"Enter Email",value:this.state.customer_email,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Mobile No."),o.a.createElement(g.a,{required:!0,type:"tel",name:"mobile_no",placeholder:"Mobile No.",maxlength:"10",value:this.state.mobile_no,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"DOB"),o.a.createElement(g.a,{required:!0,type:"date",name:"dob",value:this.state.sortorder,onChange:this.changeHandler}))),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Password "),o.a.createElement(g.a,{required:!0,type:"password",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Confirm Password "),o.a.createElement(g.a,{required:!0,type:"password",name:"cnfrmpassword",placeholder:"Enter Confirm  Password",value:this.state.cnfrmpassword,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add User")))))))}}]),t}(c.Component)},804:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),i=t(0),c=t.n(i),o=t(1),m=t.n(o),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,i=e.valid,o=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),N="form-control";h?(N+="-plaintext",y=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":E&&(N=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var O=Object(p.mapToCssModules)(d()(a,o&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,N),t);return("input"===y||m&&"function"===typeof m)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":o}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},810:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),l=t.n(r),i=t(1),c=t.n(i),o=t(4),m=t.n(o),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,i=e.widths,c=e.tag,o=e.check,p=e.size,f=e.for,h=Object(s.a)(e,d),b=[];i.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var i,c=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(u.mapToCssModules)(m()(((i={})[r]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i))),t)}else r=g(l,a,s),b.push(r)}}));var E=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:E}))};E.propTypes=h,E.defaultProps=b,a.a=E},811:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),i=t(0),c=t.n(i),o=t(1),m=t.n(o),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,i=e.innerRef,o=Object(s.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},o,{ref:i,className:m}))},a}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=137.c33841e1.chunk.js.map