webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-dark bg-dark"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[this._v("Football League Result")])],1)},staticRenderFns:[]},n={name:"App",components:{Navbar:a("VU/8")(null,r,!1,null,null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},c=a("VU/8")(n,o,!1,null,null,null).exports,i=a("/ocq"),l=a("kxiW"),d=a.n(l),_=(a("881v"),d.a.initializeApp({apiKey:"AIzaSyDzxv53fAF8kiD4pYFp5bWPwo5XlFCvn2w",authDomain:"footballresult-64ce4.firebaseapp.com",databaseURL:"https://footballresult-64ce4.firebaseio.com",projectId:"footballresult-64ce4",storageBucket:"footballresult-64ce4.appspot.com",messagingSenderId:"781025040910"}).firestore()),m={name:"result",data:function(){return{results_array:[],dates:[]}},created:function(){var t=this;_.collection("results").get().then(function(e){e.forEach(function(e){var a={id:e.id,first_team_name:e.data().first_team_name,first_team_score:e.data().first_team_score,second_team_name:e.data().second_team_name,second_team_score:e.data().second_team_score,date:e.data().date};-1===t.dates.indexOf(e.data().date)&&t.dates.push(e.data().date),t.dates.sort(function(t,e){return new Date(e)-new Date(t)}),t.results_array.push(a)}),console.log(t.results_array)})}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"result"}},[a("br"),t._v(" "),a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/add"}},[t._v("Add Result")]),t._v(" "),a("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/league"}},[t._v("League Table")])],1),a("br"),a("br"),t._v(" "),t._l(t.dates,function(e){return a("div",{key:e},[a("p",{staticClass:"text-left font-weight-bold"},[t._v(t._s(e))]),t._v(" "),a("div",{staticClass:"list-group"},[t._l(t.results_array,function(s){return s.date==e?a("router-link",{key:s,staticClass:"list-group-item list-group-item-action",attrs:{to:{name:"edit-result",params:{id:s.id}}}},[s.first_team_score>s.second_team_score?a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 text-left"},[a("b",[t._v(t._s(s.first_team_name)+" ")]),a("span",{staticClass:"badge badge-secondary"},[t._v(t._s(s.first_team_score))])]),t._v(" "),a("div",{staticClass:"col-2 text-center"},[t._v("vs")]),t._v(" "),a("div",{staticClass:"col-5 text-right"},[a("span",{staticClass:"badge badge-secondary"},[t._v(t._s(s.second_team_score))]),t._v(" "+t._s(s.second_team_name))])]):s.first_team_score===s.second_team_score?a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 text-left"},[t._v(t._s(s.first_team_name)+" "),a("span",{staticClass:"badge badge-secondary"},[t._v(t._s(s.first_team_score))])]),t._v(" "),a("div",{staticClass:"col-2 text-center"},[t._v("vs")]),t._v(" "),a("div",{staticClass:"col-5 text-right"},[a("span",{staticClass:"badge badge-secondary"},[t._v(t._s(s.second_team_score))]),t._v(" "+t._s(s.second_team_name))])]):a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 text-left"},[t._v(t._s(s.first_team_name)+" "),a("span",{staticClass:"badge badge-secondary"},[t._v(t._s(s.first_team_score))])]),t._v(" "),a("div",{staticClass:"col-2 text-center"},[t._v("vs")]),t._v(" "),a("div",{staticClass:"col-5 text-right"},[a("span",{staticClass:"badge badge-secondary"},[t._v(t._s(s.second_team_score))]),a("b",[t._v(" "+t._s(s.second_team_name))])])])]):t._e()}),t._v(" "),a("br"),a("br")],2)])})],2)},staticRenderFns:[]},v=a("VU/8")(m,u,!1,null,null,null).exports,f={name:"add_result",data:function(){return{selected:"",sselected:"",first_team_score:"",second_team_score:"",date:"",first_team_name:[],second_team_name:[]}},created:function(){var t=this;_.collection("teams").get().then(function(e){e.forEach(function(e){var a={id:e.id,name:e.data().name};t.first_team_name.push(a),t.second_team_name.push(a)})})},methods:{saveResult:function(){var t=this;_.collection("results").add({first_team_name:this.selected,first_team_score:this.first_team_score,second_team_name:this.sselected,second_team_score:this.second_team_score,date:this.date}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"add_result"}},[a("br"),t._v(" "),t._m(0),a("br"),a("br"),t._v(" "),a("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.saveResult(e)}}},[a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectFirst"}},[t._v("First Team Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",hidden:""}},[t._v("Select first team")]),t._v(" "),t._l(t.first_team_name,function(e){return a("option",{key:e.name,attrs:{disabled:e.name==t.sselected}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectSecong"}},[t._v("Second Team Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.sselected,expression:"sselected"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.sselected=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",hidden:""}},[t._v("Select second team")]),t._v(" "),t._l(t.second_team_name,function(e){return a("option",{key:e.name,attrs:{disabled:e.name==t.selected}},[t._v(t._s(e.name))])})],2)])]),t._v(" "),a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectFirstScore"}},[t._v("First Team Score")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_team_score,expression:"first_team_score"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"20",required:""},domProps:{value:t.first_team_score},on:{input:function(e){e.target.composing||(t.first_team_score=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectFirstScore"}},[t._v("Second Team Score")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.second_team_score,expression:"second_team_score"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"20",required:""},domProps:{value:t.second_team_score},on:{input:function(e){e.target.composing||(t.second_team_score=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"inputdate"}},[t._v("Date")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn btn-danger",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-center"},[e("h3",[this._v("Add Result")])])}]},g=a("VU/8")(f,p,!1,null,null,null).exports,b=a("bOdI"),h=a.n(b),C={name:"edit_result",data:function(){return{selected:null,sselected:null,first_team_score:null,second_team_score:null,date:null,first_team_name:[],second_team_name:[]}},created:function(){var t=this;_.collection("teams").get().then(function(e){e.forEach(function(e){var a={id:e.id,name:e.data().name};t.first_team_name.push(a),t.second_team_name.push(a)})})},beforeRouteEnter:function(t,e,a){_.collection("results").doc(t.params.id).get().then(function(t){a(function(e){e.first_team_score=t.data().first_team_score,e.selected=t.data().first_team_name,e.sselected=t.data().second_team_name,e.second_team_score=t.data().second_team_score,e.date=t.data().date})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;_.collection("results").doc(this.$route.params.id).get().then(function(e){t.first_team_score=e.data().first_team_score,t.selected=e.data().first_team_name,t.sselected=e.data().second_team_name,t.second_team_score=e.data().second_team_score,t.date=e.data().date})},updateResult:function(){var t=this;_.collection("results").doc(this.$route.params.id).get().then(function(e){var a;e.ref.update((a={first_team_score:t.selected,second_team_name:t.sselected},h()(a,"first_team_score",t.first_team_score),h()(a,"second_team_score",t.second_team_score),h()(a,"date",t.date),a)).then(function(){t.$router.push("/")})})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit_result"}},[a("br"),t._v(" "),t._m(0),a("br"),a("br"),t._v(" "),a("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.updateResult(e)}}},[a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectFirst"}},[t._v("First Team Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",hidden:""}},[t._v("Select first team")]),t._v(" "),t._l(t.first_team_name,function(e){return a("option",{key:e.name,attrs:{disabled:e.name==t.sselected}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectSecong"}},[t._v("Second Team Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.sselected,expression:"sselected"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.sselected=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",hidden:""}},[t._v("Select second team")]),t._v(" "),t._l(t.second_team_name,function(e){return a("option",{key:e.name,attrs:{disabled:e.name==t.selected}},[t._v(t._s(e.name))])})],2)])]),t._v(" "),a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectFirstScore"}},[t._v("First Team Score")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_team_score,expression:"first_team_score"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"20",required:""},domProps:{value:t.first_team_score},on:{input:function(e){e.target.composing||(t.first_team_score=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"selectFirstScore"}},[t._v("Second Team Score")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.second_team_score,expression:"second_team_score"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"20",required:""},domProps:{value:t.second_team_score},on:{input:function(e){e.target.composing||(t.second_team_score=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"inputdate"}},[t._v("Date")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),a("router-link",{staticClass:"btn btn-danger",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-center"},[e("h3",[this._v("Edit Result")])])}]},x=a("VU/8")(C,y,!1,null,null,null).exports,w={name:"league-table",data:function(){return{league_datas:[]}},created:function(){var t=this;_.collection("teams").orderBy("id","asc").get().then(function(e){e.forEach(function(e){var a={id:e.data().id,team:e.data().team,pld:e.data().pld,w:e.data().w,l:e.data().l,d:e.data().d,pts:e.data().pts};t.league_datas.push(a)}),console.log(t.league_datas)})}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"league-table"}},[a("br"),t._v(" "),a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/"}},[t._v("Back To Home")])],1),a("br"),a("br"),t._v(" "),a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.league_datas,function(e){return a("tr",{key:e},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.team))]),t._v(" "),a("td",[t._v(t._s(e.pld))]),t._v(" "),a("td",[t._v(t._s(e.w))]),t._v(" "),a("td",[t._v(t._s(e.l))]),t._v(" "),a("td",[t._v(t._s(e.d))]),t._v(" "),a("td",[t._v(t._s(e.pts))])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Pos")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Team")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Pld")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("W")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("L")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("D")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Pts")])])])}]},S=a("VU/8")(w,k,!1,null,null,null).exports;s.a.use(i.a);var F=new i.a({routes:[{path:"/",name:"result",component:v},{path:"/add",name:"add-result",component:g},{path:"/edit/:id",name:"edit-result",component:x},{path:"/league",name:"league-table",component:S}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:F,components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.ed0f954835809949a706.js.map