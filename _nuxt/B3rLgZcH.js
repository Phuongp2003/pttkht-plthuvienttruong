import{t as O,w as W,a as L,i as F,n as x,b as H,c as R}from"./BTbfwRKK.js";import{X as K,r as P,M as X,L as $}from"./aDpcfEMu.js";const N=F?window:void 0;function q(e){var a;const r=O(e);return(a=r==null?void 0:r.$el)!=null?a:r}function M(...e){let a,r,s,d;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,s,d]=e,a=N):[a,r,s,d]=e,!a)return x;Array.isArray(r)||(r=[r]),Array.isArray(s)||(s=[s]);const m=[],g=()=>{m.forEach(l=>l()),m.length=0},A=(l,i,y,u)=>(l.addEventListener(i,y,u),()=>l.removeEventListener(i,y,u)),E=$(()=>[q(a),O(d)],([l,i])=>{if(g(),!l)return;const y=H(i)?{...i}:i;m.push(...r.flatMap(u=>s.map(S=>A(l,u,S,y))))},{immediate:!0,flush:"post"}),p=()=>{E(),g()};return R(p),p}const b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v="__vueuse_ssr_handlers__",B=G();function G(){return v in b||(b[v]=b[v]||{}),b[v]}function I(e,a){return B[e]||a}function Q(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const U={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},j="vueuse-storage";function k(e,a,r,s={}){var d;const{flush:m="pre",deep:g=!0,listenToStorageChanges:A=!0,writeDefaults:E=!0,mergeDefaults:p=!1,shallow:l,window:i=N,eventFilter:y,onError:u=t=>{console.error(t)},initOnMounted:S}=s,f=(l?K:P)(typeof a=="function"?a():a);if(!r)try{r=I("getDefaultStorage",()=>{var t;return(t=N)==null?void 0:t.localStorage})()}catch(t){u(t)}if(!r)return f;const c=O(a),_=Q(c),w=(d=s.serializer)!=null?d:U[_],{pause:z,resume:D}=W(f,()=>C(f.value),{flush:m,deep:g,eventFilter:y});i&&A&&L(()=>{r instanceof Storage?M(i,"storage",h):M(i,j,V),S&&h()}),S||h();function J(t,n){if(i){const o={key:e,oldValue:t,newValue:n,storageArea:r};i.dispatchEvent(r instanceof Storage?new StorageEvent("storage",o):new CustomEvent(j,{detail:o}))}}function C(t){try{const n=r.getItem(e);if(t==null)J(n,null),r.removeItem(e);else{const o=w.write(t);n!==o&&(r.setItem(e,o),J(n,o))}}catch(n){u(n)}}function T(t){const n=t?t.newValue:r.getItem(e);if(n==null)return E&&c!=null&&r.setItem(e,w.write(c)),c;if(!t&&p){const o=w.read(n);return typeof p=="function"?p(o,c):_==="object"&&!Array.isArray(o)?{...c,...o}:o}else return typeof n!="string"?n:w.read(n)}function h(t){if(!(t&&t.storageArea!==r)){if(t&&t.key==null){f.value=c;return}if(!(t&&t.key!==e)){z();try{(t==null?void 0:t.newValue)!==w.write(f.value)&&(f.value=T(t))}catch(n){u(n)}finally{t?X(D):D()}}}}function V(t){h(t.detail)}return f}export{k as u};
