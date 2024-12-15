import{k as g,A as b,c as r,e as l,f as t,i as d,w as a,g as m,F as u,G as p,I as w,H as $,t as c,h as y,S as B}from"./DrOj-Nyz.js";const S={},j={class:"banner relative container mx-auto h-[600px]"},I={class:"content-wrap relative h-full"},C={class:"content-layer relative z-10 text-white py-[200px] px-16 flex flex-col h-full"},L={class:"redirect-layer"};function V(n,o,h,_,e,f){const s=b("RouterLink");return r(),l("section",j,[t("div",I,[o[3]||(o[3]=t("div",{class:"overlay absolute inset-0 bg-black opacity-50"},null,-1)),t("div",C,[o[1]||(o[1]=t("div",{class:"text-layer"},[t("h3",{class:"text-3xl font-bold mb-4"}," Đăng ký thẻ thư viện - Khoá D24 "),t("p",{class:"mb-4"}," Đã mở đăng ký thẻ thư viện cho khoá D24 chính quy. Chỉ hơn 5 phút thao tác nhận ngay thẻ thư viện điện tử! ")],-1)),o[2]||(o[2]=t("div",{class:"flex-grow"},null,-1)),t("div",L,[d(s,{to:"/signup",class:"r-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"},{default:a(()=>o[0]||(o[0]=[m(" Đăng ký ngay! ")])),_:1})])])])])}const rt=g(S,[["render",V],["__scopeId","data-v-88a707d8"]]),x={data(){return{cooperateImg:[{id:1,imgSrc:"/images/ptitlogo.jpg",href:"/",width:120},{id:2,imgSrc:"/images/logo.png",href:"/",width:198},{id:3,imgSrc:"/images/nuxt-logo.png",href:"/",width:210},{id:4,imgSrc:"/images/tailwind.jpg",href:"/",width:210}]}},methods:{wSum(){return this.cooperateImg.reduce((n,o)=>n+o.width,0)+"px"}}},v=()=>{w(n=>({f2f6e5f2:n.cooperateImg.length-1,"23fd4256":n.wSum()}))},k=x.setup;x.setup=k?(n,o)=>(v(),k(n,o)):v;const N={class:"coop-logo"},R={class:"flex justify-around cl-inner"},D={class:"main-list w-[50%] flex justify-around"},E=["href"],F=["src","alt"],M={class:"flex dumpl-list w-[50%] justify-around"},P=["href"],q=["src","alt"];function z(n,o,h,_,e,f){return r(),l("div",N,[t("div",R,[t("div",D,[(r(!0),l(u,null,p(e.cooperateImg,s=>(r(),l("a",{key:s.id,href:s.href},[t("img",{src:s.imgSrc,alt:"Image "+s.id},null,8,F)],8,E))),128))]),t("div",M,[(r(!0),l(u,null,p(e.cooperateImg,s=>(r(),l("a",{key:s.id,href:s.href},[t("img",{src:s.imgSrc,alt:"Image "+s.id},null,8,q)],8,P))),128))])])])}const A=g(x,[["render",z]]),G={components:{CoopLogo:A}},H={class:"container mx-auto coop"};function K(n,o,h,_,e,f){const s=b("coop-logo");return r(),l("section",H,[o[0]||(o[0]=t("h3",{class:"mb-6 text-2xl font-bold"},"Nhà tài trợ ",-1)),d(s,{class:"mx-auto"})])}const lt=g(G,[["render",K]]),T={data(){return{topBooks:[]}},async mounted(){try{const n=await fetch("/data/book.json");this.topBooks=await n.json().slice(0,10)}catch(n){console.error("Error fetching top books:",n)}}},J={class:"container py-8 mx-auto prefer-book"},O={key:0,class:"grid grid-cols-1 gap-6 lg:grid-cols-3"},Q=["src","alt"],U={class:"flex flex-col justify-center lg:w-1/2"},W={class:"mb-2 text-lg font-semibold"},X={class:"mb-2 text-gray-700"},Y={class:"text-gray-700"},Z=["src","alt"],tt={class:"mb-2 text-lg font-semibold"},ot={class:"text-gray-700"},st={class:"grid grid-cols-1 gap-6 lg:grid-cols-3"};function et(n,o,h,_,e,f){const s=b("RouterLink");return r(),l("section",J,[o[3]||(o[3]=t("h3",{class:"mb-6 text-2xl font-bold"},"Sách được mượn nhiều",-1)),(r(),$(B,null,{default:a(()=>[e.topBooks.length?(r(),l("div",O,[e.topBooks.length?(r(),l("div",{key:e.topBooks[0].id,class:"relative flex flex-col p-4 bg-white rounded shadow book-card lg:col-span-3 lg:flex-row"},[t("img",{src:e.topBooks[0].cover,alt:e.topBooks[0].title,class:"object-cover w-full h-48 mb-4 rounded lg:w-1/2 lg:mb-0 lg:mr-4"},null,8,Q),t("div",U,[t("h3",W,c(e.topBooks[0].title),1),t("p",X,c(e.topBooks[0].author),1),t("p",Y,c(e.topBooks[0].description),1)]),d(s,{class:"absolute inset-0 flex items-center justify-center text-lg font-bold transition-opacity duration-300 bg-blue-500 bg-opacity-75 opacity-0 text-whi te borrow-overlay hover:opacity-100",to:e.topBooks[0].link},{default:a(()=>o[0]||(o[0]=[m(" Mượn sách ")])),_:1},8,["to"])])):y("",!0),(r(!0),l(u,null,p(e.topBooks.slice(1),i=>(r(),l("div",{key:i.id,class:"relative p-4 bg-white rounded shadow book-card"},[t("img",{src:i.cover,alt:i.title,class:"object-cover w-full h-48 mb-4 rounded"},null,8,Z),t("h3",tt,c(i.title),1),t("p",ot,c(i.author),1),d(s,{class:"absolute inset-0 flex items-center justify-center text-lg font-bold text-white transition-opacity duration-300 bg-blue-500 bg-opacity-75 opacity-0 borrow-overlay hover:opacity-100",to:i.link},{default:a(()=>o[1]||(o[1]=[m(" Mượn sách ")])),_:2},1032,["to"])]))),128))])):y("",!0)]),fallback:a(()=>[t("div",st,[(r(),l(u,null,p(10,i=>t("div",{key:i,class:"p-4 bg-gray-200 rounded shadow book-card animate-pulse"},o[2]||(o[2]=[t("div",{class:"w-full h-48 mb-4 bg-gray-300 rounded"},null,-1),t("div",{class:"h-6 mb-2 bg-gray-300 rounded"},null,-1),t("div",{class:"h-6 mb-2 bg-gray-300 rounded"},null,-1),t("div",{class:"h-6 bg-gray-300 rounded"},null,-1)]))),64))])]),_:1}))])}const it=g(T,[["render",et],["__scopeId","data-v-4948dae6"]]);export{rt as B,lt as C,it as P};
