import{k as p,c,e as d,f as t,A as _,i as s,w as a,g as l,ac as k}from"./aDpcfEMu.js";import{u as y}from"./BTbfwRKK.js";import{u as h}from"./B3rLgZcH.js";const $={name:"Logo"},w={class:"flex items-center justify-center select-none"};function C(o,e,u,r,x,f){return c(),d("div",w,e[0]||(e[0]=[t("span",{class:"text-blue-500 font-bold text-4xl"},"P",-1),t("span",{class:"text-red-500 font-bold text-4xl"},"D",-1),t("span",{class:"text-pink-500 font-bold text-4xl"},"T",-1),t("span",{class:"text-green-500 font-bold text-4xl"},"lib",-1)]))}const m=p($,[["render",C]]),B={components:{Logo:m},setup(){const o=y();return{user:JSON.parse(h("user",null).value),logout:()=>{o.remove("accessToken"),o.remove("refreshToken"),localStorage.removeItem("user"),window.location.reload()}}}},I={class:"sticky top-0 z-50 bg-white shadow-md navbar"},N={class:"container flex items-center justify-between p-4 mx-auto"},T={class:"flex items-center"},L={class:"flex space-x-4"},E={class:"relative"},S={for:"avatar-checkbox",class:"cursor-pointer"},P=["src"],j={key:1,class:"flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full"},A={class:"absolute right-0 hidden w-48 mt-2 bg-white border rounded shadow-lg peer-checked:block"},D={key:0},Q={key:1};function V(o,e,u,r,x,f){const g=m,n=_("RouterLink");return c(),d("div",I,[t("div",N,[t("div",T,[s(g)]),t("div",L,[s(n,{to:"/books",class:"text-gray-700 hover:text-blue-500"},{default:a(()=>e[6]||(e[6]=[l(" Sách ")])),_:1}),s(n,{to:"/books",class:"text-gray-700 hover:text-blue-500"},{default:a(()=>e[7]||(e[7]=[l(" Quán lý sách mượn ")])),_:1}),s(n,{to:"/books",class:"text-gray-700 hover:text-blue-500"},{default:a(()=>e[8]||(e[8]=[l(" Quán lý thẻ sinh viên ")])),_:1})]),t("div",E,[e[15]||(e[15]=t("input",{type:"checkbox",id:"avatar-checkbox",class:"hidden peer"},null,-1)),t("label",S,[r.user&&r.user.avatar?(c(),d("img",{key:0,src:r.user.avatar,alt:"Avatar",class:"w-10 h-10 rounded-full"},null,8,P)):(c(),d("div",j,e[9]||(e[9]=[t("span",{class:"text-gray-700"},"A",-1)])))]),t("div",A,[r.user?(c(),d("div",D,[s(n,{to:"/profile",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:e[0]||(e[0]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:a(()=>e[10]||(e[10]=[l("Hồ sơ")])),_:1}),s(n,{to:"/borrow-history",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:e[1]||(e[1]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:a(()=>e[11]||(e[11]=[l("Lịch sử mượn")])),_:1}),s(n,{to:"/announcements",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:e[2]||(e[2]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:a(()=>e[12]||(e[12]=[l("Thông báo")])),_:1}),t("button",{onClick:e[3]||(e[3]=(...i)=>r.logout&&r.logout(...i)),class:"block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"}," Đăng xuất ")])):(c(),d("div",Q,[s(n,{to:"/login",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:e[4]||(e[4]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:a(()=>e[13]||(e[13]=[l("Login")])),_:1}),s(n,{to:"/signup",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:e[5]||(e[5]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:a(()=>e[14]||(e[14]=[l("Sign Up")])),_:1})]))])])])])}const v=p(B,[["render",V],["__scopeId","data-v-fc1d45a5"]]),F={},H={class:"py-4 mt-10 text-center text-white bg-gray-800 footer"};function M(o,e,u,r,x,f){return c(),d("div",H," © PDTlib devs team - PTITHCM D21CQCNPM02-N ")}const b=p(F,[["render",M]]),R={components:{Navbar:v,Footer:b}},z={class:"flex flex-col min-h-screen"},J={class:"flex-grow"};function O(o,e,u,r,x,f){const g=v,n=b;return c(),d("div",z,[s(g),t("div",J,[k(o.$slots,"default")]),s(n)])}const K=p(R,[["render",O]]);export{K as default};
