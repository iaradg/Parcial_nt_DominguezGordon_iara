(function(t){function e(e){for(var a,n,i=e[0],l=e[1],c=e[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},o={app:0},s=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},1029:function(t,e,r){"use strict";r("9375")},"12d0":function(t,e,r){},"19ec":function(t,e,r){"use strict";r("a61e")},"440a":function(t,e,r){"use strict";r("12d0")},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid mt-3",attrs:{id:"app"}},[r("div",{staticClass:"jumbotron"},[r("h1",[t._v("DOMINGUEZ_GORDON_IARA_NT2_PRIMERPARCIAL")]),r("br"),r("Navbar"),r("router-view")],1)])},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"src-componentes-navbar"},[r("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark"},[t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/formulario"}},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Formulario")])])],1),r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/choice"}},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Choice")])])],1)])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"src-componentes-navbar",props:[],mounted(){},data(){return{}},methods:{},computed:{}},c=l,u=(r("1029"),r("2877")),m=Object(u["a"])(c,n,i,!1,null,"9b843a66",null),p=m.exports,d={name:"App",components:{Navbar:p}},f=d,v=(r("034f"),Object(u["a"])(f,o,s,!1,null,null,null)),b=v.exports,h=(r("ab8b"),r("1157"),r("4989"),r("8c4f")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"src-componentes-formulario"},[r("div",{staticClass:"jumbotron"},[r("h1",[t._v("Ingreso de Gastos")]),r("hr"),r("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.enviar()}}},[r("validate",{attrs:{tag:"div"}},[r("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.nombre,expression:"formData.nombre",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"nombre",required:"",name:"nombre",autocomplete:"off",minlength:t.nombreMinLength,maxlength:t.nombreMaxLength,"sin-espacios":"",placeholder:"Ingrese Nombre del cliente"},domProps:{value:t.formData.nombre},on:{input:function(e){e.target.composing||t.$set(t.formData,"nombre",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("field-messages",{attrs:{name:"nombre",show:"$dirty"}},[r("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"required"},slot:"required"},[t._v("Este campo es obligatorio")]),r("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"sin-espacios"},slot:"sin-espacios"},[t._v("No se permiten espacios intermedios en este campo.")]),r("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"minlength"},slot:"minlength"},[t._v(" Este campo debe poseer al menos "+t._s(t.nombreMinLength)+" caracteres ")]),t.formData.nombre.length==t.nombreMaxLength?r("div",{staticClass:"alert alert-danger mt-1"},[t._v(" Este campo debe poseer como m??ximo "+t._s(t.nombreMaxLength)+" caracteres ")]):t._e()])],1),r("br"),r("validate",{attrs:{tag:"div"}},[r("label",{attrs:{for:"descrip"}},[t._v("Descripcion")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.descrip,expression:"formData.descrip"}],staticClass:"form-control",attrs:{type:"text",id:"descrip",required:"",name:"descrip",autocomplete:"off",placeholder:"Ingrese Descripcion del gasto"},domProps:{value:t.formData.descrip},on:{input:function(e){e.target.composing||t.$set(t.formData,"descrip",e.target.value)}}}),r("field-messages",{attrs:{name:"descrip",show:"$dirty"}},[r("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"required"},slot:"required"},[t._v("Este campo es obligatorio")])])],1),r("br"),r("validate",{attrs:{tag:"div"}},[r("label",{attrs:{for:"importe"}},[t._v("Importe")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.importe,expression:"formData.importe",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"importe",required:"",name:"importe",autocomplete:"off"},domProps:{value:t.formData.importe},on:{input:function(e){e.target.composing||t.$set(t.formData,"importe",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),r("field-messages",{attrs:{name:"importe",show:"$dirty"}},[r("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"required"},slot:"required"},[t._v("Este campo es obligatorio")])])],1),r("br"),r("button",{staticClass:"btn btn-success my-3",attrs:{disabled:t.formstate.$invalid,type:"submit"}},[t._v("Enviar")])],1),r("br"),r("hr"),r("h2",[t._v("Detalle de Gastos")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.presupuesto,expression:"formData.presupuesto",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"presupuesto",required:"",name:"presupuesto",autocomplete:"off",placeholder:"presupuesto"},domProps:{value:t.formData.presupuesto},on:{input:function(e){e.target.composing||t.$set(t.formData,"presupuesto",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t.importes.length?r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table"},[t._m(0),t._l(t.importes,(function(e,a){return r("tr",{key:a},[r("td",[t._v(t._s(e.nombre))]),r("td",[t._v(t._s(e.descrip))]),r("td",[t._v("$ "+t._s(e.importe))]),r("td",[t._v(t._s(e.fecha))])])})),r("tr",{staticClass:"total",style:{color:t.analizarImporteTotal().color}},[r("td",[t._v("total:")]),r("td",[t._v(t._s(t.analizarImporteTotal().valor))])])],2)]):r("h4",{staticClass:"alert alert-info"},[t._v("No hay gastos ingresados")])],1)])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Nombre")]),r("th",[t._v("Descripcion")]),r("th",[t._v("Importe")]),r("th",[t._v("Fecha")])])}],C={name:"src-componentes-formulario",components:{},props:[],data(){return{formstate:{},formData:this.getDataInicial(),importes:[],importeTotal:0,nombreMinLength:3,nombreMaxLength:15}},computed:{},mounted(){},methods:{getDataInicial(){return{nombre:"",descrip:"",importe:"",presupuesto:""}},enviar(){let t={...this.formData};t.fecha=(new Date).toLocaleString(),console.log(t),this.importes.push(t),this.importeTotal+=t.importe,this.formData=this.getDataInicial(),this.formstate._reset()},analizarImporteTotal(){let t="#008000";return this.importeTotal>1e3&&this.importeTotal<5e3&&(t="#ff00ff"),this.importeTotal>5e3&&(t="#ffa500"),this.formData.presupuesto>0&&this.importeTotal>this.formData.presupuesto&&(t="#ff0000"),{valor:this.importeTotal,color:t}}}},D=C,y=(r("19ec"),Object(u["a"])(D,g,_,!1,null,"8b32b582",null)),x=y.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"src-componentes-choice"},[r("h1",[t._v("Respuestas Choice")]),r("table",[t._m(0),t._l(t.preguntas,(function(e,a){return r("tr",{key:a},[r("td",[t._v(t._s(e.numero))]),r("td",[t._v(t._s(e.respuestas))])])}))],2)])},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Numero de Pregunta")]),r("th",[t._v("Respuesta")])])}],N={name:"src-componentes-choice",props:[],mounted(){},data(){return{preguntas:[{numero:1,respuestas:["C"]},{numero:2,respuestas:["C"]},{numero:3,respuestas:["B"]}]}},methods:{},computed:{}},O=N,j=(r("440a"),Object(u["a"])(O,w,$,!1,null,"491c11d8",null)),E=j.exports;a["a"].use(h["a"]);const I=new h["a"]({mode:"history",routes:[{path:"/formulario",component:x},{path:"/choice",component:E}]});var T=r("5181"),P=r.n(T),M={validators:{"sin-espacios":function(t){return!t.includes(" ")}}};a["a"].use(P.a,M),a["a"].config.productionTip=!1,new a["a"]({router:I,render:t=>t(b)}).$mount("#app")},"85ec":function(t,e,r){},9375:function(t,e,r){},a61e:function(t,e,r){}});
//# sourceMappingURL=app.25054156.js.map