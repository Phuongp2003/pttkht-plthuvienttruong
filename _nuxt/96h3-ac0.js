import{k as r,c as u,e as b,f as o,D as s,E as d}from"./D6htSX5a.js";const a={props:{book:{type:Object,required:!0}},data(){return{editedBook:{...this.book}}},methods:{saveBookInfo(){this.$emit("save-book-info",this.editedBook)}}},p={class:"p-4 bg-white rounded shadow book-info"},k={class:"grid grid-cols-1 gap-6 lg:grid-cols-2"},g=["src","alt"],m={class:"mb-2"},B={class:"mb-2"},v={class:"mb-2"},f={class:"mb-2"},x={class:"mb-2"},c={class:"mb-4"};function y(w,e,n,V,t,i){return u(),b("div",p,[o("div",k,[o("div",null,[o("img",{src:n.book.cover,alt:n.book.title,class:"object-cover w-full mb-4 rounded h-80"},null,8,g)]),o("div",null,[o("div",m,[e[7]||(e[7]=o("label",{class:"block text-gray-700"},[o("strong",null,"Tác giả:")],-1)),s(o("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.editedBook.author=l),type:"text",class:"w-full p-2 border rounded"},null,512),[[d,t.editedBook.author]])]),o("div",B,[e[8]||(e[8]=o("label",{class:"block text-gray-700"},[o("strong",null,"Nhà xuất bản:")],-1)),s(o("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.editedBook.publisher=l),type:"text",class:"w-full p-2 border rounded"},null,512),[[d,t.editedBook.publisher]])]),o("div",v,[e[9]||(e[9]=o("label",{class:"block text-gray-700"},[o("strong",null,"Ngày phát hành:")],-1)),s(o("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>t.editedBook.date=l),type:"date",class:"w-full p-2 border rounded"},null,512),[[d,t.editedBook.date]])]),o("div",f,[e[10]||(e[10]=o("label",{class:"block text-gray-700"},[o("strong",null,"Số lượng:")],-1)),s(o("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.editedBook.amount=l),type:"number",class:"w-full p-2 border rounded"},null,512),[[d,t.editedBook.amount]])]),o("div",x,[e[11]||(e[11]=o("label",{class:"block text-gray-700"},[o("strong",null,"Còn lại:")],-1)),s(o("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>t.editedBook.available=l),type:"number",class:"w-full p-2 border rounded"},null,512),[[d,t.editedBook.available]])]),o("div",c,[e[12]||(e[12]=o("label",{class:"block text-gray-700"},[o("strong",null,"Mô tả:")],-1)),s(o("textarea",{"onUpdate:modelValue":e[5]||(e[5]=l=>t.editedBook.description=l),class:"w-full p-2 border rounded"},null,512),[[d,t.editedBook.description]])]),o("button",{onClick:e[6]||(e[6]=(...l)=>i.saveBookInfo&&i.saveBookInfo(...l)),class:"p-2 text-white bg-blue-500 rounded"}," Lưu thông tin sách ")])])])}const I=r(a,[["render",y],["__scopeId","data-v-e6289b74"]]);export{I as B};
