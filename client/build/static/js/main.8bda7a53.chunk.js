(this.webpackJsonpsolo_app=this.webpackJsonpsolo_app||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){},55:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),r=c.n(s),o=c(11),a=c.n(o),i=(c(40),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))}),l=c(6),j=c(3),u=c(16),d=c(8),b={reps:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return"FETCH_REPS"===t.type?Object(d.a)(Object(d.a)({},e),{},{reps:t.payload}):e},h=c(13);var f=function(e){return Object(n.jsx)(n.Fragment,{children:e.children})},p=c.p+"static/media/america.cf8db325.jpg";c(27);var x=function(){return Object(n.jsxs)("div",{className:"footerContainer",children:[Object(n.jsx)("p",{children:"\xa9 2020 / / REPRESENT"}),Object(n.jsx)("p",{children:Object(n.jsx)(l.b,{to:"/",className:"about",children:"HOME"})})]})};c(50);var m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"aboutLogoDiv",children:Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("img",{src:p,className:"aboutLogo",alt:"American flag"})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"aboutContainer",children:"This is the about page"}),Object(n.jsx)(x,{})]})]})},v=c(12),g=(c(28),c(17)),N=c.n(g),S=c(18),E=c(14);c(29);E.a.configure();var C=Object(h.b)((function(e){return{reps:e.reps}}),(function(e){return{onFetchReps:function(t){return e({type:"FETCH_REPS",payload:t})}}}))((function(e){var t=Object(s.useState)(""),c=Object(v.a)(t,2),r=c[0],o=c[1],a=Object(s.useState)(!1),i=Object(v.a)(a,2),u=i[0],b=i[1],O=Object(S.a)((function(){b(!1)})),h=function(){b(!u)},f=Object(j.f)(),x=r.split(" ").join("%20"),m=function(){fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDatTrCAc_AsUpv-RrJ1uT-a9kvyF6SJS8&address=".concat(x)).then((function(e){if(!e.ok)throw E.a.error("Please enter valid US address!");return e.json()})).then((function(t){console.log(t),e.onFetchReps(t)})).then((function(){return g()}))},g=function(){f.push("/results")};return Object(n.jsxs)("div",{className:"wholeComponent",children:[Object(n.jsx)("h1",{className:"searchTitle",children:Object(n.jsx)(l.b,{to:"/",className:"searchTitle",children:"REPRESENT"})}),Object(n.jsx)("img",{src:p,className:"searchLogo",alt:"American flag"}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{value:r,onChange:o,onSelect:o,className:"boxAndSuggestions",children:function(e){var t=e.getInputProps,c=e.suggestions,s=e.getSuggestionItemProps,r=e.loading;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"inputAndButton",children:[Object(n.jsx)("input",Object(d.a)(Object(d.a)({type:"text",className:"inputText"},t({placeholder:"ENTER ADDRESS TO FIND YOUR REPRESENTATIVES"})),{},{required:!0})),Object(n.jsx)("button",{onClick:m,className:"searchButton",children:"SEARCH"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{onClick:h}),u&&Object(n.jsx)("div",{ref:O})]}),Object(n.jsxs)("div",{children:[r?Object(n.jsx)("div",{children:"...loading"}):null,c.map((function(e){var t={backgroundColor:e.active?"#0e448b":"#fff",color:e.active?"#fff":"#000000"};return Object(n.jsx)("div",Object(d.a)(Object(d.a)({},s(e,{style:t})),{},{className:"dropdownItem",children:e.description}))}))]})]})}})})]})})),T=(c(55),c(26)),R=c.n(T);var A=function(){return Object(n.jsxs)("div",{className:"footerContainer",children:[Object(n.jsx)("p",{children:"\xa9 2020 / / REPRESENT"}),Object(n.jsx)("p",{children:Object(n.jsx)(l.b,{to:"/about",className:"about",children:"ABOUT"})})]})};c(65);var k=function(){return Object(n.jsxs)("div",{className:"note",children:[Object(n.jsx)("b",{children:Object(n.jsx)("u",{children:"Note:"})}),"  All data is retrieved from the ",Object(n.jsx)("a",{href:"https://developers.google.com/civic-information",target:"_blank",rel:"noopener noreferrer",children:"Google Civic Information API"}),".  If you notice incorrect or missing data, please report it to ",Object(n.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLScFpFTOkTpm0YoerLLprY_ySS9PRXLsu27SM01hebHqkefW2Q/viewform",target:"_blank",rel:"noopener noreferrer",children:"Google"}),"."]})};R.a.setAppElement("#root");var y=Object(h.b)((function(e){return{officials:e.reps.officials,offices:e.reps.offices}}))((function(e){var t=Object(s.useState)(!1),c=Object(v.a)(t,2),r=c[0],o=c[1],a=Object(s.useState)(null),i=Object(v.a)(a,2),l=i[0],j=i[1],u=e.offices.map((function(t){var c=t.officialIndices.map((function(t){var c=e.officials[t];return Object(n.jsxs)("div",{className:"nameAndContact",children:[Object(n.jsxs)("li",{children:[c.name," ",Object(n.jsxs)("span",{className:"partyName",children:["(",c.party,")"]})]}),Object(n.jsx)("button",{onClick:function(){return function(e){o(!0),j(e)}(c)},className:"contactButton",children:"Contact"})]})})).reverse();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"officeName",children:t.name}),Object(n.jsx)("ul",{className:"officialName",children:c}),Object(n.jsx)("hr",{})]})})).reverse();return Object(n.jsxs)("div",{className:"resultsContainer",children:[Object(n.jsx)(C,{}),Object(n.jsx)("div",{className:"results",children:u},e.officials.normalizedInput),function(){if(null!=l)return Object(n.jsxs)(R.a,{isOpen:r,onRequestClose:function(){return o(!1)},shouldCloseOnOverlayClick:!0,style:{overlay:{backgroundColor:null},content:{backgroundColor:"#e0e7f0"}},className:"contactModal",children:[Object(n.jsx)("p",{className:"contactTitle",children:Object(n.jsxs)("b",{children:["Contact ",l.name]})}),Object(n.jsx)("a",{href:"#",className:"phoneNumber",children:l.phones[0]}),Object(n.jsx)("a",{href:"#",className:"contactEmail",children:l.emails?l.emails[0]:null}),Object(n.jsx)("a",{href:l.urls?l.urls[0]:null,target:"_blank",rel:"noopener noreferrer",className:"contactUrl",children:l.urls?l.urls[0]:null}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){return o(!1)},className:"modalButton",children:"Close"})})]})}(),Object(n.jsxs)("div",{className:"noteAndFooter",children:[Object(n.jsx)(k,{}),Object(n.jsx)(A,{})]})]})}));E.a.configure();var _=Object(h.b)((function(e){return{reps:e.reps}}),(function(e){return{onFetchReps:function(t){return e({type:"FETCH_REPS",payload:t})}}}))((function(e){var t=Object(s.useState)(""),c=Object(v.a)(t,2),r=c[0],o=c[1],a=Object(s.useState)(!1),i=Object(v.a)(a,2),u=i[0],b=i[1],O=Object(S.a)((function(){b(!1)})),h=function(){b(!u)},f=Object(j.f)(),x=r.split(" ").join("%20"),m=function(){fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDatTrCAc_AsUpv-RrJ1uT-a9kvyF6SJS8&address=".concat(x)).then((function(e){if(!e.ok)throw E.a.error("Please enter valid US address!");return e.json()})).then((function(t){console.log(t),e.onFetchReps(t)})).then((function(){return g()}))},g=function(){f.push("/results")};return Object(n.jsxs)("div",{className:"wholeComponent",children:[Object(n.jsx)("h1",{className:"searchTitle",children:Object(n.jsx)(l.b,{to:"/",className:"searchTitle",children:"REPRESENT"})}),Object(n.jsx)("img",{src:p,className:"searchLogo",alt:"American flag"}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{value:r,onChange:o,onSelect:o,onError:function(e,t){console.log("google maps returned error: ",e),t()},shouldFetchSuggestions:!0,className:"boxAndSuggestions",children:function(e){var t=e.getInputProps,c=e.suggestions,s=e.getSuggestionItemProps,r=e.loading;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"inputAndButton",children:[Object(n.jsx)("input",Object(d.a)(Object(d.a)({type:"text",className:"inputText"},t({placeholder:"ENTER ADDRESS TO FIND YOUR REPRESENTATIVES"})),{},{required:!0})),Object(n.jsx)("button",{onClick:m,className:"searchButton",children:"SEARCH"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{onClick:h}),u&&Object(n.jsx)("div",{ref:O})]}),Object(n.jsxs)("div",{children:[r?Object(n.jsx)("div",{children:"...loading"}):null,c.map((function(e){var t={backgroundColor:e.active?"#0e448b":"#fff",color:e.active?"#fff":"#000000"};return Object(n.jsx)("div",Object(d.a)(Object(d.a)({},s(e,{style:t})),{},{className:"dropdownItem",children:e.description}))}))]})]})}})}),Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)(A,{})})]})})),I=Object(u.b)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(h.a,{store:I,children:Object(n.jsx)(f,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{component:_,path:"/",exact:!0}),Object(n.jsx)(j.a,{component:m,path:"/about"}),Object(n.jsx)(j.a,{component:y,path:"/results"})]})})})})}),document.getElementById("root")),i()}},[[66,1,2]]]);
//# sourceMappingURL=main.8bda7a53.chunk.js.map