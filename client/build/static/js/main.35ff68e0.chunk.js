(this.webpackJsonpsolo_app=this.webpackJsonpsolo_app||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},40:function(e,t,n){},50:function(e,t,n){},55:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),o=n(11),a=n.n(o),i=(n(40),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))}),l=n(6),j=n(3),d=n(16),u=n(8),b={reps:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return"FETCH_REPS"===t.type?Object(u.a)(Object(u.a)({},e),{},{reps:t.payload}):e},O=n(13);var f=function(e){return Object(c.jsx)(c.Fragment,{children:e.children})},p=n.p+"static/media/america.cf8db325.jpg";n(27);var m=function(){return Object(c.jsxs)("div",{className:"footerContainer",children:[Object(c.jsx)("p",{children:"\xa9 2020 / / REPRESENT"}),Object(c.jsx)("p",{children:Object(c.jsx)(l.b,{to:"/",className:"about",children:"HOME"})})]})};n(50);var x=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"aboutLogoDiv",children:Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("img",{src:p,className:"aboutLogo",alt:"American flag"})})}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"aboutContainer",children:[Object(c.jsx)("i",{children:Object(c.jsx)("b",{children:"REPRESENT"})}),"\xa0 is a platform designed to connect you with your elected representatives. Using the ",Object(c.jsx)("a",{href:"https://developers.google.com/civic-information",target:"_blank",rel:"noopener noreferrer",children:"Google Civic Information API"})," with any U.S. residential address, you have the ability to find and contact the people who represent you at the local, county, state, and federal levels of government."]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"aboutContainer2",children:["Talking and engaging with your representatives is one of the best ways to effect change in your local community, so reach out to them today with your concerns and ",Object(c.jsx)("b",{children:"let your voice be heard!"})]})}),Object(c.jsx)("div",{className:"footerContainerAbout",children:Object(c.jsx)(m,{})})]})},v=n(12),g=(n(28),n(17)),N=n.n(g),E=n(18),S=n(14);n(29);S.a.configure();var C=Object(O.b)((function(e){return{reps:e.reps}}),(function(e){return{onFetchReps:function(t){return e({type:"FETCH_REPS",payload:t})}}}))((function(e){var t=Object(s.useState)(""),n=Object(v.a)(t,2),r=n[0],o=n[1],a=Object(s.useState)(!1),i=Object(v.a)(a,2),d=i[0],b=i[1],h=Object(E.a)((function(){b(!1)})),O=function(){b(!d)},f=Object(j.f)(),m=r.split(" ").join("%20"),x=function(){fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDatTrCAc_AsUpv-RrJ1uT-a9kvyF6SJS8&address=".concat(m)).then((function(e){if(!e.ok)throw Object(S.a)("Please enter a valid US address!",{className:"customToast"});return e.json()})).then((function(t){console.log(t),e.onFetchReps(t)})).then((function(){return g()}))},g=function(){f.push("/results")};return Object(c.jsxs)("div",{className:"wholeComponent",children:[Object(c.jsx)("h1",{className:"searchTitle",children:Object(c.jsx)(l.b,{to:"/",className:"searchTitle",children:"REPRESENT"})}),Object(c.jsx)("img",{src:p,className:"searchLogo",alt:"American flag"}),Object(c.jsx)("div",{children:Object(c.jsx)(N.a,{value:r,onChange:o,onSelect:o,className:"boxAndSuggestions",children:function(e){var t=e.getInputProps,n=e.suggestions,s=e.getSuggestionItemProps,r=e.loading;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"inputAndButton",children:[Object(c.jsx)("input",Object(u.a)(Object(u.a)({type:"text",className:"inputText"},t({placeholder:"ENTER ADDRESS TO FIND YOUR REPRESENTATIVES"})),{},{required:!0})),Object(c.jsx)("button",{onClick:x,className:"searchButton",children:"SEARCH"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{onClick:O}),d&&Object(c.jsx)("div",{ref:h})]}),Object(c.jsxs)("div",{children:[r?Object(c.jsx)("div",{children:"...loading"}):null,n.map((function(e){var t={backgroundColor:e.active?"#0e448b":"#fff",color:e.active?"#fff":"#000000"};return Object(c.jsx)("div",Object(u.a)(Object(u.a)({},s(e,{style:t})),{},{className:"dropdownItem",children:e.description}))}))]})]})}})})]})})),T=(n(55),n(26)),y=n.n(T);var R=function(){return Object(c.jsxs)("div",{className:"footerContainer",children:[Object(c.jsx)("p",{children:"\xa9 2020 / / REPRESENT"}),Object(c.jsx)("p",{children:Object(c.jsx)(l.b,{to:"/about",className:"about",children:"ABOUT"})})]})};n(65);var A=function(){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("b",{children:Object(c.jsx)("u",{children:"Note:"})}),"  All data is retrieved from the ",Object(c.jsx)("a",{href:"https://developers.google.com/civic-information",target:"_blank",rel:"noopener noreferrer",children:"Google Civic Information API"}),".  If you notice incorrect or missing data, please report it to ",Object(c.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLScFpFTOkTpm0YoerLLprY_ySS9PRXLsu27SM01hebHqkefW2Q/viewform",target:"_blank",rel:"noopener noreferrer",children:"Google"}),"."]})};y.a.setAppElement("#root");var k=Object(O.b)((function(e){return{officials:e.reps.officials,offices:e.reps.offices}}))((function(e){var t=Object(s.useState)(!1),n=Object(v.a)(t,2),r=n[0],o=n[1],a=Object(s.useState)(null),i=Object(v.a)(a,2),l=i[0],j=i[1],d=e.offices.map((function(t){var n=t.officialIndices.map((function(t){var n=e.officials[t];return Object(c.jsxs)("div",{className:"nameAndContact",children:[Object(c.jsxs)("li",{children:[n.name," ",Object(c.jsxs)("span",{className:"partyName",children:["(",n.party,")"]})]}),Object(c.jsx)("button",{onClick:function(){return function(e){o(!0),j(e)}(n)},className:"contactButton",children:"Contact"})]})})).reverse();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"officeName",children:t.name}),Object(c.jsx)("ul",{className:"officialName",children:n}),Object(c.jsx)("hr",{})]})})).reverse();return Object(c.jsxs)("div",{className:"resultsContainer",children:[Object(c.jsx)(C,{}),Object(c.jsx)("div",{className:"results",children:d},e.officials.normalizedInput),function(){if(null!=l)return Object(c.jsxs)(y.a,{isOpen:r,onRequestClose:function(){return o(!1)},shouldCloseOnOverlayClick:!0,style:{overlay:{backgroundColor:null},content:{backgroundColor:"#e0e7f0"}},className:"contactModal",children:[Object(c.jsx)("p",{className:"contactTitle",children:Object(c.jsxs)("b",{children:["Contact ",l.name]})}),Object(c.jsx)("a",{href:l.phones?"tel:+"+l.phones[0]:null,className:"phoneNumber",children:l.phones[0]}),Object(c.jsx)("a",{href:l.emails?"mailto: "+l.emails[0]:null,target:"_blank",rel:"noopener noreferrer",className:"contactEmail",children:l.emails?l.emails[0]:null}),Object(c.jsx)("a",{href:l.urls?l.urls[0]:null,target:"_blank",rel:"noopener noreferrer",className:"contactUrl",children:l.urls?l.urls[0]:null}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return o(!1)},className:"modalButton",children:"Close"})})]})}(),Object(c.jsxs)("div",{className:"noteAndFooter",children:[Object(c.jsx)(A,{}),Object(c.jsx)(R,{})]})]})}));S.a.configure();var w=Object(O.b)((function(e){return{reps:e.reps}}),(function(e){return{onFetchReps:function(t){return e({type:"FETCH_REPS",payload:t})}}}))((function(e){var t=Object(s.useState)(""),n=Object(v.a)(t,2),r=n[0],o=n[1],a=Object(s.useState)(!1),i=Object(v.a)(a,2),d=i[0],b=i[1],h=Object(E.a)((function(){b(!1)})),O=function(){b(!d)},f=Object(j.f)(),m=r.split(" ").join("%20"),x=function(){fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDatTrCAc_AsUpv-RrJ1uT-a9kvyF6SJS8&address=".concat(m)).then((function(e){if(!e.ok)throw Object(S.a)("Please enter a valid US address!",{className:"customToast"});return e.json()})).then((function(t){console.log(t),e.onFetchReps(t)})).then((function(){return g()}))},g=function(){f.push("/results")};return Object(c.jsxs)("div",{className:"wholeComponent",children:[Object(c.jsx)("h1",{className:"searchTitle",children:Object(c.jsx)(l.b,{to:"/",className:"searchTitle",children:"REPRESENT"})}),Object(c.jsx)("img",{src:p,className:"searchLogo",alt:"American flag"}),Object(c.jsx)("div",{children:Object(c.jsx)(N.a,{value:r,onChange:o,onSelect:o,onError:function(e,t){console.log("google maps returned error: ",e),t()},shouldFetchSuggestions:!0,className:"boxAndSuggestions",children:function(e){var t=e.getInputProps,n=e.suggestions,s=e.getSuggestionItemProps,r=e.loading;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"inputAndButton",children:[Object(c.jsx)("input",Object(u.a)(Object(u.a)({type:"text",className:"inputText"},t({placeholder:"ENTER ADDRESS TO FIND YOUR REPRESENTATIVES"})),{},{required:!0})),Object(c.jsx)("button",{onClick:x,className:"searchButton",children:"SEARCH"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{onClick:O}),d&&Object(c.jsx)("div",{ref:h})]}),Object(c.jsxs)("div",{children:[r?Object(c.jsx)("div",{children:"...loading"}):null,n.map((function(e){var t={backgroundColor:e.active?"#0e448b":"#fff",color:e.active?"#fff":"#000000"};return Object(c.jsx)("div",Object(u.a)(Object(u.a)({},s(e,{style:t})),{},{className:"dropdownItem",children:e.description}))}))]})]})}})}),Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)(R,{})})]})})),_=Object(d.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(O.a,{store:_,children:Object(c.jsx)(f,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{component:w,path:"/",exact:!0}),Object(c.jsx)(j.a,{component:x,path:"/about"}),Object(c.jsx)(j.a,{component:k,path:"/results"})]})})})})}),document.getElementById("root")),i()}},[[66,1,2]]]);
//# sourceMappingURL=main.35ff68e0.chunk.js.map