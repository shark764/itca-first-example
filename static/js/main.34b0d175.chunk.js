(this["webpackJsonpreact-itca-webinar-full-example"]=this["webpackJsonpreact-itca-webinar-full-example"]||[]).push([[0],{139:function(e,t,a){e.exports=a(247)},144:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(144),a(35)),i=a(277),s=a(281),u=a(53),m=a(282),d=function(){return r.a.createElement(i.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h6",color:"inherit"},"ReactJs / Material-UI / Contentful"),r.a.createElement("div",{style:{marginLeft:24}},r.a.createElement(m.a,{color:"inherit",component:c.b,to:"/"},"List"),r.a.createElement(m.a,{color:"inherit",component:c.b,to:"/new/"},"Create"),r.a.createElement(m.a,{color:"inherit",component:c.b,to:"/about/"},"About"))))},p=a(12),g=a(52),h=a(17),f=a(297),E=a(290),b=a(291),v=a(292),y=a(128),x=a.n(y),j=a(69),O=a(283),w=a(284),S=a(298),k=a(285),T=a(286),C=a(287),B=a(288),L=a(289),A=a(126),U=a.n(A),I=a(127),W=a.n(I),R=a(125),q=a.n(R),D="evMFF1eK--2PX6Qqrlq8glrKOurVH1pdvaI-FRgmufU",_=[{value:"beginner",label:"Beginner"},{value:"intermediate",label:"Intermediate"},{value:"advanced",label:"Advanced"}],N=function(e){var t=e.course,a=Object(n.useState)(!1),l=Object(h.a)(a,2),o=l[0],c=l[1];return r.a.createElement("div",null,t?r.a.createElement(O.a,null,r.a.createElement(w.a,{avatar:r.a.createElement(S.a,{"aria-label":"recipe"},"IT"),action:r.a.createElement(k.a,{"aria-label":"settings"},r.a.createElement(U.a,null)),title:t.title,subheader:q()(t.createdAt).format("LLL")}),r.a.createElement(T.a,{style:{height:0,paddingTop:"56.25%"},image:t.image.url,title:t.title}),r.a.createElement(C.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(u.a,{component:"p",align:"justify"},t.shortDescription)),r.a.createElement(B.a,null,r.a.createElement(m.a,{size:"small",color:"secondary",href:t.url,target:"_blank"},"Open course"),r.a.createElement(k.a,{onClick:function(){c(!o)},"aria-expanded":o,"aria-label":"show more",style:Object(g.a)({transform:"rotate(0deg)",marginLeft:"auto"},o&&{transform:"rotate(180deg)"})},r.a.createElement(W.a,null))),r.a.createElement(L.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(C.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"h6"},"Details"),r.a.createElement(u.a,{variant:"subtitle2",gutterBottom:!0},"Duration: ".concat(t.duration," min")),r.a.createElement(u.a,{variant:"subtitle2",gutterBottom:!0,paragraph:!0},"Skill Level: ".concat(t.skillLevel.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/[-\s]+/g," ").replace(/^[a-z]/,(function(e){return e.toUpperCase()})))),r.a.createElement(u.a,{component:"p",align:"justify"},t.description)))):null)},P=j.a({space:"srlpekq85luo",accessToken:D}),F=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(h.a)(o,2),i=c[0],s=c[1],u=Object(n.useCallback)((function(){P.getEntries({content_type:"course","fields.title[match]":i}).then((function(e){var t=e.items.map((function(e){return Object(g.a)(Object(g.a)({},e.fields),{},{image:{id:e.fields.image.sys.id,title:e.fields.image.fields.title,url:e.fields.image.fields.file.url},id:e.sys.id,createdAt:e.sys.createdAt})}));l(t),console.log('%cCourses fetched using... "'.concat(i,'":'),"background: #ccc; color: #444;",e.items)})).catch((function(e){console.error(e)}))}),[i]);return Object(n.useEffect)((function(){u()}),[i,u]),r.a.createElement("div",{style:{padding:40}},r.a.createElement(f.a,{style:{paddingTop:24,paddingBottom:24,paddingLeft:0,paddingRight:0},placeholder:"Search for courses...",margin:"normal",onChange:function(e){s(e.target.value||"")},InputProps:{endAdornment:r.a.createElement(E.a,{position:"end"},r.a.createElement(x.a,{color:"primary"}))}}),r.a.createElement(b.a,{container:!0,spacing:10,style:{paddingTop:24,paddingBottom:24,paddingLeft:0,paddingRight:0}},a.map((function(e){return r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:3,key:e.id},r.a.createElement(N,{course:e}))}))),!a.length&&r.a.createElement(b.a,{container:!0,spacing:10,style:{paddingTop:24,paddingBottom:24,paddingLeft:0,paddingRight:0},alignContent:"center",alignItems:"center",justify:"center"},r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{size:50}))))},M=a(293),z=a(300),J=a(299),$=a(294),H=a(295),V=a(130),X=a.n(V),K=a(129),Q=a.n(K),Z=a(131),G=Object(M.a)((function(){return{root:{"& .MuiTextField-root":{}},select:{},actions:{"& > *":{marginRight:24,marginTop:24}},gridList:{height:450}}})),Y=j.a({space:"srlpekq85luo",accessToken:D}),ee=Z.a({accessToken:"CFPAT-WAjUteVc06b2IhNAw7_DXGQUXCmv0ZMc6_m9obcABag"}),te=function(){var e=G(),t=Object(n.useState)("Hello World"),a=Object(h.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)("hello-world"),i=Object(h.a)(c,2),s=i[0],d=i[1],p=Object(n.useState)(""),g=Object(h.a)(p,2),E=g[0],v=g[1],y=Object(n.useState)(""),x=Object(h.a)(y,2),j=x[0],O=x[1],w=Object(n.useState)(10),S=Object(h.a)(w,2),k=S[0],T=S[1],C=Object(n.useState)("beginner"),B=Object(h.a)(C,2),L=B[0],A=B[1],U=Object(n.useState)("https://the-example-app-nodejs.contentful.com/courses/hello-world"),I=Object(h.a)(U,2),W=I[0],R=I[1],q=Object(n.useState)({}),D=Object(h.a)(q,2),N=D[0],P=D[1],F=Object(n.useState)([]),M=Object(h.a)(F,2),V=M[0],K=M[1];Object(n.useEffect)((function(){Y.getAssets().then((function(e){var t=e.items.map((function(e){return{id:e.sys.id,title:e.fields.title,url:"https:".concat(e.fields.file.url)}}));K(t)})).catch((function(e){console.error(e)}))}),[]),Object(n.useEffect)((function(){var e=l.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();d(e),R("https://the-example-app-nodejs.contentful.com/courses/".concat(e))}),[l]);return r.a.createElement("div",{style:{padding:40}},r.a.createElement(u.a,{variant:"h4",color:"primary",gutterBottom:!0},"New Course"),r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),ee.getSpace("srlpekq85luo").then((function(e){return e.createEntry("course",{fields:{title:{"en-US":l},slug:{"en-US":s},shortDescription:{"en-US":E},description:{"en-US":j},duration:{"en-US":Number.parseInt(k,10)},skillLevel:{"en-US":L},url:{"en-US":W},image:{"en-US":{sys:{id:N.id,linkType:"Asset",type:"Link"}}}}}).then((function(e){e.publish(),console.log("%cEntry ".concat(e.sys.id," created and published."),"background: #d7dae0; color: #282c34;",e)})).catch((function(e){console.log("Error occurred while creating Entry"),console.error(e)}))}))}},r.a.createElement(b.a,{container:!0,spacing:5,style:{paddingTop:24,paddingBottom:24,paddingLeft:0,paddingRight:0}},r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:3},r.a.createElement(f.a,{required:!0,label:"Course title",placeholder:"add course title...",helperText:"The title is needed for searching purpose",value:l,onChange:function(e){return o(e.target.value)},fullWidth:!0,margin:"normal",variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:3},r.a.createElement(f.a,{required:!0,label:"Course unique slug",value:s,onChange:function(e){return d(e.target.value)},placeholder:"add course unique slug...",helperText:"This will identify the task",fullWidth:!0,margin:"normal",variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:6},r.a.createElement(f.a,{label:"Short description",multiline:!0,rows:4,value:E,onChange:function(e){return v(e.target.value)},placeholder:"add course short description...",helperText:"This will be shown as the description in the course list",fullWidth:!0,margin:"normal",variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:12},r.a.createElement(f.a,{label:"Description",multiline:!0,rows:8,value:j,onChange:function(e){return O(e.target.value)},placeholder:"add course complete description...",helperText:"This description will be shown when course is open",fullWidth:!0,margin:"normal",variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:3},r.a.createElement(f.a,{label:"Duration",type:"number",value:k,onChange:function(e){return T(e.target.value)},InputLabelProps:{shrink:!0},placeholder:"add course duration in minutes...",helperText:"Duration is in minutes",fullWidth:!0,margin:"normal",variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:3},r.a.createElement(f.a,{select:!0,label:"Skill level",value:L,onChange:function(e){return A(e.target.value)},helperText:"What level is needed for this course?",fullWidth:!0,margin:"normal",variant:"outlined"},_.map((function(e){return r.a.createElement(z.a,{key:e.value,value:e.value},e.label)})))),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:6},r.a.createElement(f.a,{label:"URL",multiline:!0,rows:4,placeholder:"add course url...",value:W,onChange:function(e){return R(e.target.value)},helperText:"The URL must match the pattern 'https://the-example-app-nodejs.contentful.com/courses/' + slug",fullWidth:!0,margin:"normal",variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:12},r.a.createElement(J.a,null,"Image"),r.a.createElement("div",{style:{marginTop:12}},r.a.createElement($.a,{cellHeight:160,className:e.gridList,cols:6,spacing:6},V.map((function(e){return r.a.createElement(H.a,{key:e.id,cols:1,rows:1,style:N.id===e.id?{border:"4px solid #3f51b5"}:{}},r.a.createElement("img",{src:e.url,alt:e.title,onClick:function(){return P(e)}}))})))))),r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:3},r.a.createElement("div",{className:e.actions},r.a.createElement(m.a,{type:"submit",variant:"contained",color:"primary",endIcon:r.a.createElement(Q.a,null)},"Submit"),r.a.createElement(m.a,{variant:"contained",color:"secondary",endIcon:r.a.createElement(X.a,null),onClick:function(){o(""),d(""),v(""),O(""),P({}),T(0),A(""),R("")}},"Clear")))))},ae=function(){return r.a.createElement("div",{style:{padding:40}},r.a.createElement(b.a,{container:!0,spacing:10,style:{paddingTop:24,paddingBottom:24,paddingLeft:0,paddingRight:0}},r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:3},r.a.createElement(u.a,{variant:"h3",color:"secondary",gutterBottom:!0},"Tusa Inc."),r.a.createElement(u.a,{variant:"h6",gutterBottom:!0},"All rights reserved"),r.a.createElement(u.a,{variant:"subtitle1",color:"textSecondary",gutterBottom:!0},"We are a company that makes ReactJs APPs for living"),r.a.createElement(u.a,{variant:"body1",color:"textSecondary",gutterBottom:!0},"But when the night arrives... We get out the forbidden dance moves."))))},ne=a(296),re=function(){return r.a.createElement("div",{style:{padding:40}},r.a.createElement(ne.a,null,r.a.createElement(b.a,{container:!0,spacing:10,style:{paddingTop:24,paddingBottom:24,paddingLeft:0,paddingRight:0}},r.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4,xl:12},r.a.createElement(u.a,{variant:"h1",color:"error",align:"center",gutterBottom:!0},"404"),r.a.createElement(u.a,{variant:"h3",color:"textPrimary",align:"center",gutterBottom:!0},"Content Not Found")))))},le=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",component:F,exact:!0}),r.a.createElement(p.b,{path:"/home",component:F,exact:!0}),r.a.createElement(p.b,{path:"/new",component:te,exact:!0}),r.a.createElement(p.b,{path:"/about",component:ae,exact:!0}),r.a.createElement(p.b,{component:re}),r.a.createElement(p.a,{to:"/home/"}))},oe=function(){return r.a.createElement(c.a,null,r.a.createElement(d,null),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t){}},[[139,1,2]]]);
//# sourceMappingURL=main.34b0d175.chunk.js.map