(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{nHxO:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var o=t("pMnS"),i=t("MKJQ"),a=t("sZkV"),s=t("s7LF"),r=t("SVse"),c=t("mrSG"),b=t("DCf0"),p=t("LvDl");class d{constructor(l){this.popoverController=l,this.model={}}presentPopover(l){return c.a(this,void 0,void 0,(function*(){const n=yield this.popoverController.create({component:b.a,event:l,translucent:!0,animated:!0});return yield n.present()}))}customSort(l,n){}getDateDisplay(l){return console.log(l),l[0].date}ngOnInit(){}ionViewDidEnter(){this.loadData()}openProfile(l){this.presentPopover(l)}toggleGroup(l){console.log(l),l.value[0].show=!l.value[0].show}isGroupShown(l){return l.value[0].show}sortData(){}showFilters(){alert("ShowFilters")}filterList(l){this.documents=this.documentsOld;const n=l.srcElement.value;if(console.log(n),!n){this.documents=this.documentsOld;let l=p.groupBy(this.documents,"date");return p.forEach(l,(function(l){l.lineItems=l})),void(this.documents=l)}""==n&&(this.documents=this.documentsOld),this.documents=this.documents.filter(l=>{if(l.documentNo&&n)return l.documentNo.toString().toLowerCase().indexOf(n.toLowerCase())>-1||l.physician.toLowerCase().indexOf(n.toLowerCase())>-1||l.status.toLowerCase().indexOf(n.toLowerCase())>-1});let t=p.groupBy(this.documents,"date");p.forEach(t,(function(l){l.lineItems=l})),this.documents=t}filterListClear(l){this.documents=this.documentsOld;let n=p.groupBy(this.documents,"date");p.forEach(n,(function(l){l.lineItems=l})),this.documents=n}loadData(){let l=[];l.push({documentNo:1e4,date:"27.10.2019",time:"06:28:18 AM",type:"Nutrition Report",physician:"Dr. Suzanne Al Sayed",status:"On Review",statusCode:1,class:"task-primary"},{documentNo:10001,date:"28.10.2019",time:"01:25:44 AM",type:"Nutrition Report",physician:"Dr. Ghassan Khayyat",status:"On Review",statusCode:1,class:"task-primary"},{documentNo:10002,date:"27.10.2019",time:"06:51:00 AM",type:"Nutrition Report",physician:"Dr. Yaman Tai",status:"On Review",statusCode:1,class:"task-primary"},{documentNo:10003,date:"29.10.2019",time:"12:51:05 AM",type:"Nutrition Report",physician:"Dr. Yaman Tai",status:"On Review",statusCode:1,class:"task-warning"},{documentNo:10004,date:"27.10.2019",time:"06:28:18 AM",type:"Nutrition Report",physician:"Dr. Violet Asfour",status:"Ready",statusCode:0,class:"task-warning"}),this.documentsOld=l,this.documents=l,console.log(this.documents)}}var h=u.nb({encapsulation:0,styles:[[".ahLogo[_ngcontent-%COMP%]{display:inline-block;width:13em;height:3.5em}.ahThemeToolBar[_ngcontent-%COMP%]{--background:rgb(190,230,239)}.ahThemeButtonMenu[_ngcontent-%COMP%]{--color:rgb(87,143,182)}.titleWhite[_ngcontent-%COMP%]{color:#000}.title[_ngcontent-%COMP%]{color:#fff;font-weight:700}.subtitle[_ngcontent-%COMP%]{color:#fff;font-style:italic}.vertical-align-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex!important;align-content:center!important;align-items:center!important}.tasks[_ngcontent-%COMP%]{padding:5px;float:left;width:100%}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]{width:100%;float:left;padding:0;background:#fff;border-left:3px solid #fff;margin-bottom:10px;box-shadow:1px 1px 1px rgba(0,0,0,.2)}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]:hover{background:#f9f9f9;cursor:pointer}.tasks[_ngcontent-%COMP%]   .task-item.task-complete[_ngcontent-%COMP%]{background:#fff2c5}.tasks[_ngcontent-%COMP%]   .task-item.task-primary[_ngcontent-%COMP%]{border-left-color:#1b1e24}.tasks[_ngcontent-%COMP%]   .task-item.task-success[_ngcontent-%COMP%]{border-left-color:#95b75d}.tasks[_ngcontent-%COMP%]   .task-item.task-info[_ngcontent-%COMP%], .tasks[_ngcontent-%COMP%]   .task-item.task-warning[_ngcontent-%COMP%]{border-left-color:#1caf9a}.tasks[_ngcontent-%COMP%]   .task-item.task-danger[_ngcontent-%COMP%]{border-left-color:#e04b4a}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-text[_ngcontent-%COMP%]{margin-bottom:10px;float:left;width:100%;font-size:12px;font-weight:400;padding:10px}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%]{float:left;width:100%;font-size:12px;color:#aaa;line-height:20px;padding:10px;background:#f5f5f5}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aaa;display:block;float:left;margin-left:10px;font-size:14px}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#22262e}.tasks[_ngcontent-%COMP%]   .task-drop[_ngcontent-%COMP%]{float:left;width:100%;padding:30px 10px;border:2px dashed #d5d5d5;border-radius:0;font-size:16px;text-align:center;line-height:20px}.tasks[_ngcontent-%COMP%]   .task-drop[_ngcontent-%COMP%]:hover{opacity:.5;filter:alpha(opacity=50);cursor:pointer}"]],data:{}});function m(l){return u.Lb(0,[(l()(),u.pb(0,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Jb(2,null,["",""])),(l()(),u.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Jb(4,null,["",""])),(l()(),u.pb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Jb(6,null,["",""])),(l()(),u.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Jb(8,null,["",""])),(l()(),u.pb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Jb(10,null,["",""])),(l()(),u.pb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Jb(12,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.documentNo),l(n,4,0,n.context.$implicit.date),l(n,6,0,n.context.$implicit.time),l(n,8,0,n.context.$implicit.type),l(n,10,0,n.context.$implicit.physician),l(n,12,0,n.context.$implicit.status)}))}function g(l){return u.Lb(0,[(l()(),u.pb(0,0,null,null,28,"ion-header",[],null,null,null,i.D,i.g)),u.ob(1,49152,null,0,a.y,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,12,"ion-toolbar",[["class","ahThemeToolBar"]],null,null,null,i.T,i.w)),u.ob(3,49152,null,0,a.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.A,i.d)),u.ob(5,49152,null,0,a.i,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"],["class","ahThemeButtonMenu"]],null,null,null,i.I,i.m)),u.ob(7,49152,null,0,a.O,[u.h,u.k,u.x],{autoHide:[0,"autoHide"]},null),(l()(),u.pb(8,0,null,0,0,"img",[["class","ahLogoMini"],["src","./assets/icon/favico.png"]],null,null,null,null,null)),(l()(),u.pb(9,0,null,0,2,"ion-thumbnail",[["slot","end"],["style","padding:0.5em"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.openProfile(t)&&u),u}),i.R,i.u)),u.ob(10,49152,null,0,a.tb,[u.h,u.k,u.x],null,null),(l()(),u.pb(11,0,null,0,0,"img",[["src","./assets/icon/usericon.svg"]],null,null,null,null,null)),(l()(),u.pb(12,0,null,0,2,"ion-title",[["class","ion-text-center titleWhite"]],null,null,null,i.S,i.v)),u.ob(13,49152,null,0,a.ub,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["Nutrition Care"])),(l()(),u.pb(15,0,null,0,13,"ion-toolbar",[],null,null,null,i.T,i.w)),u.ob(16,49152,null,0,a.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(17,0,null,0,3,"ion-searchbar",[["showCancelButton","never"]],null,[[null,"ionInput"],[null,"ionClear"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==u.Bb(l,20)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Bb(l,20)._handleInputEvent(t.target)&&e),"ionInput"===n&&(e=!1!==o.filterList(t)&&e),"ionClear"===n&&(e=!1!==o.filterListClear(t)&&e),e}),i.L,i.o)),u.Gb(5120,null,s.e,(function(l){return[l]}),[a.Gb]),u.ob(19,49152,null,0,a.eb,[u.h,u.k,u.x],{showCancelButton:[0,"showCancelButton"]},null),u.ob(20,16384,null,0,a.Gb,[u.k],null,null),(l()(),u.pb(21,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,i.A,i.d)),u.ob(22,49152,null,0,a.i,[u.h,u.k,u.x],null,null),(l()(),u.pb(23,0,null,0,2,"button",[["clear",""],["icon-only",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.sortData()&&u),u}),null,null)),(l()(),u.pb(24,0,null,null,1,"ion-icon",[["name","swap-vertical"]],null,null,null,i.E,i.h)),u.ob(25,49152,null,0,a.z,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.pb(26,0,null,0,2,"button",[["ion-button",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.showFilters()&&u),u}),null,null)),(l()(),u.pb(27,0,null,null,1,"ion-icon",[["name","funnel"]],null,null,null,i.E,i.h)),u.ob(28,49152,null,0,a.z,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.pb(29,0,null,null,26,"ion-content",[],null,null,null,i.B,i.e)),u.ob(30,49152,null,0,a.r,[u.h,u.k,u.x],null,null),(l()(),u.pb(31,0,null,0,24,"div",[["class","table-responsive padding"],["style","margin:1em"]],null,null,null,null,null)),(l()(),u.pb(32,0,null,null,23,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),u.pb(33,0,null,null,19,"thead",[],null,null,null,null,null)),(l()(),u.pb(34,0,null,null,18,"tr",[["class",""],["style","background-color:#909090;color:white"]],null,null,null,null,null)),(l()(),u.pb(35,0,null,null,2,"td",[["width","20%"]],null,null,null,null,null)),(l()(),u.pb(36,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Document No"])),(l()(),u.pb(38,0,null,null,2,"td",[["width","13%"]],null,null,null,null,null)),(l()(),u.pb(39,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Sample Date"])),(l()(),u.pb(41,0,null,null,2,"td",[["width","10%"]],null,null,null,null,null)),(l()(),u.pb(42,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Sample Time"])),(l()(),u.pb(44,0,null,null,2,"td",[["width","12%"]],null,null,null,null,null)),(l()(),u.pb(45,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Type"])),(l()(),u.pb(47,0,null,null,2,"td",[["width","25%"]],null,null,null,null,null)),(l()(),u.pb(48,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Physician"])),(l()(),u.pb(50,0,null,null,2,"td",[["width","20%"]],null,null,null,null,null)),(l()(),u.pb(51,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Status"])),(l()(),u.pb(53,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,m)),u.ob(55,278528,null,0,r.k,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,7,0,"false"),l(n,19,0,"never"),l(n,25,0,"swap-vertical"),l(n,28,0,"funnel"),l(n,55,0,t.documents)}),null)}function f(l){return u.Lb(0,[(l()(),u.pb(0,0,null,null,1,"app-nutrition",[],null,null,null,g,h)),u.ob(1,114688,null,0,d,[a.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var k=u.lb("app-nutrition",d,f,{},{},[]),C=t("iInd");class O{}t.d(n,"NutritionPageModuleNgFactory",(function(){return M}));var M=u.mb(e,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[o.a,k]],[3,u.j],u.v]),u.zb(4608,r.n,r.m,[u.s,[2,r.w]]),u.zb(4608,s.l,s.l,[]),u.zb(4608,a.a,a.a,[u.x,u.g]),u.zb(4608,a.Ab,a.Ab,[a.a,u.j,u.p]),u.zb(4608,a.Db,a.Db,[a.a,u.j,u.p]),u.zb(1073742336,r.b,r.b,[]),u.zb(1073742336,s.k,s.k,[]),u.zb(1073742336,s.d,s.d,[]),u.zb(1073742336,a.yb,a.yb,[]),u.zb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),u.zb(1073742336,O,O,[]),u.zb(1073742336,e,e,[]),u.zb(1024,C.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);