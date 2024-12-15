import{k as p,c,e as d,f as e,A as k,i as s,w as r,g as l,af as y}from"./LFDqsYmP.js";import{_ as $}from"./CrNqEc6L.js";import{u as h}from"./_6tQ4GU3.js";import{u as w}from"./DB-cw25v.js";const C={name:"Logo"},N={class:"flex items-center justify-center select-none"};function B(o,t,u,n,f,x){return c(),d("div",N,t[0]||(t[0]=[e("span",{class:"text-blue-500 font-bold text-4xl"},"P",-1),e("span",{class:"text-red-500 font-bold text-4xl"},"D",-1),e("span",{class:"text-pink-500 font-bold text-4xl"},"T",-1),e("span",{class:"text-green-500 font-bold text-4xl"},"lib",-1)]))}const _=p(C,[["render",B]]),I={components:{Logo:_},setup(){const o=h();return{user:JSON.parse(w("user",null).value),logout:()=>{o.remove("accessToken"),o.remove("refreshToken"),localStorage.removeItem("user"),window.location.reload()}}}},L={class:"sticky top-0 z-50 bg-white shadow-md navbar"},T={class:"container flex items-center justify-between p-4 mx-auto"},E={class:"flex space-x-4"},S={class:"relative"},P={for:"avatar-checkbox",class:"cursor-pointer"},j=["src"],A={key:1,class:"flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full"},D={class:"absolute right-0 hidden w-48 mt-2 bg-white border rounded shadow-lg peer-checked:block"},Q={key:0},V={key:1};function F(o,t,u,n,f,x){const g=_,m=$,a=k("RouterLink");return c(),d("div",L,[e("div",T,[s(m,{to:"/",class:"flex items-center"},{default:r(()=>[s(g)]),_:1}),e("div",E,[s(a,{to:"/books",class:"text-gray-700 hover:text-blue-500"},{default:r(()=>t[6]||(t[6]=[l(" Sách ")])),_:1}),s(a,{to:"/books",class:"text-gray-700 hover:text-blue-500"},{default:r(()=>t[7]||(t[7]=[l(" Quán lý sách mượn ")])),_:1}),s(a,{to:"/books",class:"text-gray-700 hover:text-blue-500"},{default:r(()=>t[8]||(t[8]=[l(" Quán lý thẻ sinh viên ")])),_:1})]),e("div",S,[t[15]||(t[15]=e("input",{type:"checkbox",id:"avatar-checkbox",class:"hidden peer"},null,-1)),e("label",P,[n.user&&n.user.avatar?(c(),d("img",{key:0,src:n.user.avatar,alt:"Avatar",class:"w-10 h-10 rounded-full"},null,8,j)):(c(),d("div",A,t[9]||(t[9]=[e("span",{class:"text-gray-700"},"A",-1)])))]),e("div",D,[n.user?(c(),d("div",Q,[s(a,{to:"/profile",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:t[0]||(t[0]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:r(()=>t[10]||(t[10]=[l("Hồ sơ")])),_:1}),s(a,{to:"/borrow-history",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:t[1]||(t[1]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:r(()=>t[11]||(t[11]=[l("Lịch sử mượn")])),_:1}),s(a,{to:"/announcements",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:t[2]||(t[2]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:r(()=>t[12]||(t[12]=[l("Thông báo")])),_:1}),e("button",{onClick:t[3]||(t[3]=(...i)=>n.logout&&n.logout(...i)),class:"block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"}," Đăng xuất ")])):(c(),d("div",V,[s(a,{to:"/login",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:t[4]||(t[4]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:r(()=>t[13]||(t[13]=[l("Login")])),_:1}),s(a,{to:"/signup",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100",onClick:t[5]||(t[5]=i=>o.document.getElementById("avatar-checkbox").checked=!1)},{default:r(()=>t[14]||(t[14]=[l("Sign Up")])),_:1})]))])])])])}const b=p(I,[["render",F],["__scopeId","data-v-c33bf061"]]),H={},M={class:"py-4 mt-10 text-center text-white bg-gray-800 footer"};function R(o,t,u,n,f,x){return c(),d("div",M," © PDTlib devs team - PTITHCM D21CQCNPM02-N ")}const v=p(H,[["render",R]]),z={components:{Navbar:b,Footer:v}},J={class:"flex flex-col min-h-screen"},O={class:"flex-grow"};function U(o,t,u,n,f,x){const g=b,m=v;return c(),d("div",J,[s(g),e("div",O,[y(o.$slots,"default")]),s(m)])}const X=p(z,[["render",U]]);export{X as default};
