import{S as N,i as E,s as B,C as De,c as $,a as y,m as d,t as g,b as p,d as h,e as J,f as Xe,g as P,h as z,j as ve,k as Ye,R as V,P as Y,l as D,n as X,o as C,p as Ne,q as Ee,r as S,u as Be,T as Me,v as j,w as T,x as Pe,y as v,z as W,A as F,B as L,D as Z,E as R,F as A,G as O,H as K,I as Q,J as Re,K as q,L as ee,M as Ae,N as Oe,O as Ie,Q as I,U as Te,V as te,W as ne,X as re,Y as ie,Z as se,_ as ae,$ as We}from"./vendor.10939f32.js";const Fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};Fe();function He(s){let e,r,t,a;const n=[{width:M},{height:50},{fillColor:7829367},s[4]];let i={};for(let o=0;o<n.length;o+=1)i=z(i,n[o]);return e=new V({props:i}),t=new V({props:{x:-M/2,originX:0,originY:.5,width:Y.Math.Clamp(M*s[2],10,M),height:50,fillColor:12303291}}),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment)},l(o){y(e.$$.fragment,o),r=X(o),y(t.$$.fragment,o)},m(o,l){d(e,o,l),C(o,r,l),d(t,o,l),a=!0},p(o,l){const f=l&16?Ne(n,[l&0&&{width:M},n[1],n[2],l&16&&Ee(o[4])]):{};e.$set(f);const m={};l&4&&(m.width=Y.Math.Clamp(M*o[2],10,M)),t.$set(m)},i(o){a||(g(e.$$.fragment,o),g(t.$$.fragment,o),a=!0)},o(o){p(e.$$.fragment,o),p(t.$$.fragment,o),a=!1},d(o){h(e,o),o&&S(r),h(t,o)}}}function Le(s){let e,r;return e=new De({props:{x:s[0],y:s[1],width:M,height:50,$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.x=t[0]),a&2&&(n.y=t[1]),a&84&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}const M=400;function Ge(s,e,r){const t=["x","y","progress"];let a=J(e,t),n,{x:i}=e,{y:o}=e,{progress:l=0}=e;const f=Xe(l,{duration:200,easing:Be});return P(s,f,m=>r(2,n=m)),s.$$set=m=>{e=z(z({},e),ve(m)),r(4,a=J(e,t)),"x"in m&&r(0,i=m.x),"y"in m&&r(1,o=m.y),"progress"in m&&r(5,l=m.progress)},s.$$.update=()=>{s.$$.dirty&32&&Ye(f,n=l,n)},[i,o,n,f,a,l]}class le extends N{constructor(e){super();E(this,e,Ge,Le,B,{x:0,y:1,progress:5})}}function Ke(s){let e,r;return e=new Me({props:{depth:-1,x:0,y:0,width:800,height:600,originX:0,originY:0,texture:"textures/starfield",tilePositionY:s[0]}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.tilePositionY=t[0]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Qe(s,e,r){let t=0;return j("step",()=>{r(0,t-=2)}),[t]}class oe extends N{constructor(e){super();E(this,e,Qe,Ke,B,{})}}function qe(s){let e,r;return e=new T({props:{x:s[0],y:s[1],depth:30,animation:s[2],scale:s[2]=="anims/ufo/explosion"?1:.75}}),e.$on("animationcomplete",s[3]),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.x=t[0]),a&2&&(n.y=t[1]),a&4&&(n.animation=t[2]),a&4&&(n.scale=t[2]=="anims/ufo/explosion"?1:.75),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function ze(s,e,r){let{x:t}=e,{y:a}=e,{animation:n="anims/enemy/explosion"}=e;function i(o){Pe.call(this,s,o)}return s.$$set=o=>{"x"in o&&r(0,t=o.x),"y"in o&&r(1,a=o.y),"animation"in o&&r(2,n=o.animation)},[t,a,n,i]}class je extends N{constructor(e){super();E(this,e,ze,qe,B,{x:0,y:1,animation:2})}}function Ue(s){let e,r,t;function a(i){s[16](i)}let n={animation:s[0]==="enemyBullet"?"anims/enemyBullet/default":"anims/bullet/default",depth:s[3],name:s[0],texture:s[2],x:s[4],y:s[5],$$slots:{default:[Ve]},$$scope:{ctx:s}};return s[9]!==void 0&&(n.instance=s[9]),e=new T({props:n}),R.push(()=>A(e,"instance",a)),{c(){$(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,o){d(e,i,o),t=!0},p(i,o){const l={};o&1&&(l.animation=i[0]==="enemyBullet"?"anims/enemyBullet/default":"anims/bullet/default"),o&8&&(l.depth=i[3]),o&1&&(l.name=i[0]),o&4&&(l.texture=i[2]),o&16&&(l.x=i[4]),o&32&&(l.y=i[5]),o&540354&&(l.$$scope={dirty:o,ctx:i}),!r&&o&512&&(r=!0,l.instance=i[9],O(()=>r=!1)),e.$set(l)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){p(e.$$.fragment,i),t=!1},d(i){h(e,i)}}}function Je(s){let e,r;return e=new je({props:{animation:s[13],x:s[12].x,y:s[12].y-32}}),e.$on("animationcomplete",s[14]),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&8192&&(n.animation=t[13]),a&4096&&(n.x=t[12].x),a&4096&&(n.y=t[12].y-32),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Ve(s){let e,r,t,a;return e=new K({props:{with:s[1],overlapOnly:!0}}),e.$on("collide",s[15]),t=new Q({props:{velocityY:s[7],velocityX:s[6]}}),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment)},l(n){y(e.$$.fragment,n),r=X(n),y(t.$$.fragment,n)},m(n,i){d(e,n,i),C(n,r,i),d(t,n,i),a=!0},p(n,i){const o={};i&2&&(o.with=n[1]),e.$set(o);const l={};i&128&&(l.velocityY=n[7]),i&64&&(l.velocityX=n[6]),t.$set(l)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),a=!1},d(n){h(e,n),n&&S(r),h(t,n)}}}function Ze(s){let e,r,t,a;const n=[Je,Ue],i=[];function o(l,f){return l[10]?0:1}return e=o(s),r=i[e]=n[e](s),{c(){r.c(),t=v()},l(l){r.l(l),t=v()},m(l,f){i[e].m(l,f),C(l,t,f),a=!0},p(l,[f]){let m=e;e=o(l),e===m?i[e].p(l,f):(W(),p(i[m],1,1,()=>{i[m]=null}),F(),r=i[e],r?r.p(l,f):(r=i[e]=n[e](l),r.c()),g(r,1),r.m(t.parentNode,t))},i(l){a||(g(r),a=!0)},o(l){p(r),a=!1},d(l){i[e].d(l),l&&S(t)}}}function et(s,e,r){let{name:t}=e,{target:a}=e,{texture:n}=e,{depth:i=0}=e,{x:o}=e,{y:l}=e,{velocityX:f=0}=e,{velocityY:m=0}=e,{onDestroy:b}=e,u,c=!1,_,k,w,ke=L().time.addEvent({callback:()=>{c||b()},delay:3e3});Z(()=>()=>ke.destroy());const xe=()=>b(),Ce=x=>{r(10,c=!0),r(11,_=x.detail.other.texture.key),r(13,w=_.replace("textures","anims")+"/explosion"),r(12,k={x:u.x,y:u.y})};function Se(x){u=x,r(9,u)}return s.$$set=x=>{"name"in x&&r(0,t=x.name),"target"in x&&r(1,a=x.target),"texture"in x&&r(2,n=x.texture),"depth"in x&&r(3,i=x.depth),"x"in x&&r(4,o=x.x),"y"in x&&r(5,l=x.y),"velocityX"in x&&r(6,f=x.velocityX),"velocityY"in x&&r(7,m=x.velocityY),"onDestroy"in x&&r(8,b=x.onDestroy)},[t,a,n,i,o,l,f,m,b,u,c,_,k,w,xe,Ce,Se]}class fe extends N{constructor(e){super();E(this,e,et,Ze,B,{name:0,target:1,texture:2,depth:3,x:4,y:5,velocityX:6,velocityY:7,onDestroy:8})}}const U=q(0),G=q(3),ue=q(0),me=q(!1),ce=Re([G,me],([s,e])=>s<=0?"gameover":e?"win":"playing"),tt=()=>{U.set(0),G.set(3),me.set(!1)};function nt(s){let e,r,t,a;return e=new K({props:{with:["enemies","enemyBullet"],overlapOnly:!0}}),e.$on("collide",s[4]),t=new Q({props:{velocityX:s[3],collideWorldBounds:!0}}),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment)},l(n){y(e.$$.fragment,n),r=X(n),y(t.$$.fragment,n)},m(n,i){d(e,n,i),C(n,r,i),d(t,n,i),a=!0},p(n,i){const o={};i&8&&(o.velocityX=n[3]),t.$set(o)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),a=!1},d(n){h(e,n),n&&S(r),h(t,n)}}}function rt(s){let e,r,t;function a(i){s[5](i)}let n={depth:10,name:"player",texture:"textures/player",x:s[1],y:s[2],$$slots:{default:[nt]},$$scope:{ctx:s}};return s[0]!==void 0&&(n.instance=s[0]),e=new T({props:n}),R.push(()=>A(e,"instance",a)),{c(){$(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,o){d(e,i,o),t=!0},p(i,[o]){const l={};o&2&&(l.x=i[1]),o&4&&(l.y=i[2]),o&520&&(l.$$scope={dirty:o,ctx:i}),!r&&o&1&&(r=!0,l.instance=i[0],O(()=>r=!1)),e.$set(l)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){p(e.$$.fragment,i),t=!1},d(i){h(e,i)}}}const ge=200;function it(s,e,r){let{x:t}=e,{y:a}=e,{instance:n=void 0}=e;const{spawn:i}=ee(),o=L(),l={left:o.input.keyboard.addKey("left"),right:o.input.keyboard.addKey("right"),up:o.input.keyboard.addKey("up"),shoot:o.input.keyboard.addKey("SPACE")};let f=0;j("step",()=>{!l.left.isDown&&!l.right.isDown||l.left.isDown&&l.right.isDown?r(3,f=0):l.left.isDown?r(3,f=-ge):l.right.isDown&&r(3,f=ge),Y.Input.Keyboard.JustDown(l.shoot)&&i(fe,{name:"playerBullet",texture:"textures/player/bullet",target:"enemy",depth:10,x:n.x,y:n.y-8,velocityY:-250})});const m=()=>G.update(u=>u-1);function b(u){n=u,r(0,n)}return s.$$set=u=>{"x"in u&&r(1,t=u.x),"y"in u&&r(2,a=u.y),"instance"in u&&r(0,n=u.instance)},[n,t,a,f,m,b]}class st extends N{constructor(e){super();E(this,e,it,rt,B,{x:1,y:2,instance:0})}}function at(s){let e,r,t,a;return e=new Q({props:{velocityY:ot}}),t=new K({props:{with:"player",overlapOnly:!0}}),t.$on("collide",s[5]),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment)},l(n){y(e.$$.fragment,n),r=X(n),y(t.$$.fragment,n)},m(n,i){d(e,n,i),C(n,r,i),d(t,n,i),a=!0},p:Ae,i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),a=!1},d(n){h(e,n),n&&S(r),h(t,n)}}}function lt(s){let e,r,t;function a(i){s[6](i)}let n={name:"coin",x:s[0],y:s[1],scale:.5,animation:"anims/coin/default",$$slots:{default:[at]},$$scope:{ctx:s}};return s[3]!==void 0&&(n.instance=s[3]),e=new T({props:n}),R.push(()=>A(e,"instance",a)),{c(){$(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,o){d(e,i,o),t=!0},p(i,[o]){const l={};o&1&&(l.x=i[0]),o&2&&(l.y=i[1]),o&132&&(l.$$scope={dirty:o,ctx:i}),!r&&o&8&&(r=!0,l.instance=i[3],O(()=>r=!1)),e.$set(l)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){p(e.$$.fragment,i),t=!1},d(i){h(e,i)}}}let ot=40;function ft(s,e,r){const t=L();let{x:a}=e,{y:n}=e,{onCoinCollected:i}=e,o;j("step",()=>{o.y>600&&i()});const l=()=>{i(),ue.update(m=>m+Y.Math.RND.integerInRange(1,3)),t.coinSound.play()};function f(m){o=m,r(3,o)}return s.$$set=m=>{"x"in m&&r(0,a=m.x),"y"in m&&r(1,n=m.y),"onCoinCollected"in m&&r(2,i=m.onCoinCollected)},[a,n,i,o,t,l,f]}class ut extends N{constructor(e){super();E(this,e,ft,lt,B,{x:0,y:1,onCoinCollected:2})}}function mt(s){let e,r,t;function a(i){s[10](i)}let n={name:"enemy",x:s[1],y:s[2],animation:s[0],$$slots:{default:[gt]},$$scope:{ctx:s}};return s[5]!==void 0&&(n.instance=s[5]),e=new T({props:n}),R.push(()=>A(e,"instance",a)),{c(){$(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,o){d(e,i,o),t=!0},p(i,o){const l={};o&2&&(l.x=i[1]),o&4&&(l.y=i[2]),o&1&&(l.animation=i[0]),o&8425&&(l.$$scope={dirty:o,ctx:i}),!r&&o&32&&(r=!0,l.instance=i[5],O(()=>r=!1)),e.$set(l)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){p(e.$$.fragment,i),t=!1},d(i){h(e,i)}}}function ct(s){let e,r;return e=new ut({props:{x:s[5].x,y:s[5].y,onCoinCollected:s[8]}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&32&&(n.x=t[5].x),a&32&&(n.y=t[5].y),a&16&&(n.onCoinCollected=t[8]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function gt(s){let e,r,t,a;return e=new Q({props:{velocityX:s[3],collideWorldBounds:!0}}),t=new K({props:{with:"playerBullet",overlapOnly:!0}}),t.$on("collide",s[9]),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment)},l(n){y(e.$$.fragment,n),r=X(n),y(t.$$.fragment,n)},m(n,i){d(e,n,i),C(n,r,i),d(t,n,i),a=!0},p(n,i){const o={};i&8&&(o.velocityX=n[3]),e.$set(o)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),a=!1},d(n){h(e,n),n&&S(r),h(t,n)}}}function pt(s){let e,r,t,a;const n=[ct,mt],i=[];function o(l,f){return l[6]?0:1}return e=o(s),r=i[e]=n[e](s),{c(){r.c(),t=v()},l(l){r.l(l),t=v()},m(l,f){i[e].m(l,f),C(l,t,f),a=!0},p(l,[f]){let m=e;e=o(l),e===m?i[e].p(l,f):(W(),p(i[m],1,1,()=>{i[m]=null}),F(),r=i[e],r?r.p(l,f):(r=i[e]=n[e](l),r.c()),g(r,1),r.m(t.parentNode,t))},i(l){a||(g(r),a=!0)},o(l){p(r),a=!1},d(l){i[e].d(l),l&&S(t)}}}function _t(s,e,r){const t=L();let{animation:a}=e,{x:n}=e,{y:i}=e,{velocityX:o}=e,{onDie:l}=e,f,m=!1,b;b=t.add.particles("textures/enemy/particles").createEmitter({frequency:-1,blendMode:Y.BlendModes.ADD,gravityY:600,alpha:{start:1,end:0,ease:"Cubic.easeIn"},lifespan:500,angle:{min:-180,max:180},speed:{min:0,max:2400},scale:{min:.4,max:.6},frame:[...Array(3).keys()]});const c=()=>{l()},_=()=>{r(6,m=!0),a=="anims/enemy/fly"&&b.explode(100,f.x,f.y)};function k(w){f=w,r(5,f)}return s.$$set=w=>{"animation"in w&&r(0,a=w.animation),"x"in w&&r(1,n=w.x),"y"in w&&r(2,i=w.y),"velocityX"in w&&r(3,o=w.velocityX),"onDie"in w&&r(4,l=w.onDie)},[a,n,i,o,l,f,m,b,c,_,k]}class $t extends N{constructor(e){super();E(this,e,_t,pt,B,{animation:0,x:1,y:2,velocityX:3,onDie:4})}}function pe(s,e,r){const t=s.slice();return t[10]=e[r],t}function _e(s,e){let r,t,a;function n(){return e[4](e[10])}return t=new $t({props:{animation:e[10].animation,x:100+e[10].x,y:70+e[10].y+e[3],velocityX:e[1]==="playing"?e[2]:0,onDie:n}}),{key:s,first:null,c(){r=v(),$(t.$$.fragment),this.h()},l(i){r=v(),y(t.$$.fragment,i),this.h()},h(){this.first=r},m(i,o){C(i,r,o),d(t,i,o),a=!0},p(i,o){e=i;const l={};o&1&&(l.animation=e[10].animation),o&1&&(l.x=100+e[10].x),o&9&&(l.y=70+e[10].y+e[3]),o&6&&(l.velocityX=e[1]==="playing"?e[2]:0),o&1&&(l.onDie=n),t.$set(l)},i(i){a||(g(t.$$.fragment,i),a=!0)},o(i){p(t.$$.fragment,i),a=!1},d(i){i&&S(r),h(t,i)}}}function yt(s){let e=[],r=new Map,t,a,n=s[0];const i=o=>o[10].key;for(let o=0;o<n.length;o+=1){let l=pe(s,n,o),f=i(l);r.set(f,e[o]=_e(f,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=v()},l(o){for(let l=0;l<e.length;l+=1)e[l].l(o);t=v()},m(o,l){for(let f=0;f<e.length;f+=1)e[f].m(o,l);C(o,t,l),a=!0},p(o,[l]){l&15&&(n=o[0],W(),e=Oe(e,l,i,1,o,n,r,t.parentNode,Ie,_e,t,pe),F())},i(o){if(!a){for(let l=0;l<n.length;l+=1)g(e[l]);a=!0}},o(o){for(let l=0;l<e.length;l+=1)p(e[l]);a=!1},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&S(t)}}}function dt(s,e,r){let t;P(s,ce,c=>r(1,t=c));const a=L(),{spawn:n}=ee();let i=[],o=40,l=0;const f={callback:()=>{t==="playing"&&(r(2,o=-o),r(3,l+=16))},loop:!0,delay:3500},m=a.time.addEvent(f),b=a.time.addEvent({callback:()=>{if(t==="playing"){const c=a.children.getByName("player"),_=a.children.list.filter(w=>w.name==="enemy"),k=_[Y.Math.RND.integerInRange(0,_.length-1)];if(c&&k){const w=Math.atan2(c.y-k.y,c.x-k.x)*180/Math.PI,H=a.physics.velocityFromAngle(w,180);n(fe,{name:"enemyBullet",texture:"textures/enemy/bullet",target:"player",x:k.x,y:k.y,velocityX:H.x,velocityY:H.y})}}},loop:!0,delay:2e3});Z(()=>()=>{m.destroy(),b.destroy()});const u=c=>{r(0,i=i.filter(_=>_!==c)),U.update(_=>_+100)};return s.$$.update=()=>{s.$$.dirty&2&&t==="playing"&&(m.reset(f),r(3,l=0),r(0,i=Array.from({length:40}).map((c,_)=>{const k=10,w=_%k,H=Math.floor(_/k);return{x:w*52,y:H*32,key:_+Date.now(),animation:_%2==0?"anims/enemy/fly":"anims/ufo/fly"}}))),s.$$.dirty&1&&i.length===0},[i,t,o,l,u]}class ht extends N{constructor(e){super();E(this,e,dt,yt,B,{})}}function $e(s){let e,r,t,a;return e=new I({props:{x:250,y:200,text:s[0]==="win"?"You Win!":"Game Over",fontSize:"48px",align:"center"}}),t=new I({props:{x:280,y:265,text:"Click to restart",fontSize:"20px"}}),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment)},l(n){y(e.$$.fragment,n),r=X(n),y(t.$$.fragment,n)},m(n,i){d(e,n,i),C(n,r,i),d(t,n,i),a=!0},p(n,i){const o={};i&1&&(o.text=n[0]==="win"?"You Win!":"Game Over"),e.$set(o)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),a=!1},d(n){h(e,n),n&&S(r),h(t,n)}}}function bt(s){let e,r,t,a,n,i,o,l,f,m;e=new I({props:{x:16,y:16,text:`Score: ${s[1]}`}}),t=new I({props:{x:16,y:32,text:`Coins: ${s[2]}`}}),n=new I({props:{x:700,y:16,text:`Lives: ${s[3]}`}}),o=new I({props:{x:180,y:575,text:"Move with arrow keys, shoot with spacebar"}});let b=s[0]!=="playing"&&$e(s);return{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment),a=D(),$(n.$$.fragment),i=D(),$(o.$$.fragment),l=D(),b&&b.c(),f=v()},l(u){y(e.$$.fragment,u),r=X(u),y(t.$$.fragment,u),a=X(u),y(n.$$.fragment,u),i=X(u),y(o.$$.fragment,u),l=X(u),b&&b.l(u),f=v()},m(u,c){d(e,u,c),C(u,r,c),d(t,u,c),C(u,a,c),d(n,u,c),C(u,i,c),d(o,u,c),C(u,l,c),b&&b.m(u,c),C(u,f,c),m=!0},p(u,[c]){const _={};c&2&&(_.text=`Score: ${u[1]}`),e.$set(_);const k={};c&4&&(k.text=`Coins: ${u[2]}`),t.$set(k);const w={};c&8&&(w.text=`Lives: ${u[3]}`),n.$set(w),u[0]!=="playing"?b?(b.p(u,c),c&1&&g(b,1)):(b=$e(u),b.c(),g(b,1),b.m(f.parentNode,f)):b&&(W(),p(b,1,1,()=>{b=null}),F())},i(u){m||(g(e.$$.fragment,u),g(t.$$.fragment,u),g(n.$$.fragment,u),g(o.$$.fragment,u),g(b),m=!0)},o(u){p(e.$$.fragment,u),p(t.$$.fragment,u),p(n.$$.fragment,u),p(o.$$.fragment,u),p(b),m=!1},d(u){h(e,u),u&&S(r),h(t,u),u&&S(a),h(n,u),u&&S(i),h(o,u),u&&S(l),b&&b.d(u),u&&S(f)}}}function wt(s,e,r){let t,a,n,i;return P(s,ce,o=>r(0,t=o)),P(s,U,o=>r(1,a=o)),P(s,ue,o=>r(2,n=o)),P(s,G,o=>r(3,i=o)),Te("pointerdown",()=>{t!=="playing"&&tt()}),[t,a,n,i]}class kt extends N{constructor(e){super();E(this,e,wt,bt,B,{})}}const xt=s=>({}),ye=s=>({slot:"loading"}),Ct=s=>({}),de=s=>({slot:"loading"});function St(s){let e,r;return e=new te({props:{width:800,height:600,scale:{mode:Y.Scale.FIT,autoCenter:Y.Scale.CENTER_BOTH},render:{pixelArt:!0},$$slots:{default:[Nt]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&1034&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Dt(s){let e,r,t;function a(i){s[7](i)}let n={width:800,height:600,physics:{default:"arcade"},scale:{mode:Y.Scale.FIT,autoCenter:Y.Scale.CENTER_BOTH},render:{pixelArt:!0},$$slots:{default:[Rt]},$$scope:{ctx:s}};return s[0]!==void 0&&(n.instance=s[0]),e=new te({props:n}),R.push(()=>A(e,"instance",a)),{c(){$(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,o){d(e,i,o),t=!0},p(i,o){const l={};o&1040&&(l.$$scope={dirty:o,ctx:i}),!r&&o&1&&(r=!0,l.instance=i[0],O(()=>r=!1)),e.$set(l)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){p(e.$$.fragment,i),t=!1},d(i){h(e,i)}}}function Xt(s){let e,r,t,a,n,i,o,l;e=new oe({});function f(c){s[8](c)}let m={scale:2,texture:"textures/logo",originX:0,originY:0,x:(800-537)/2,y:-124};s[3]!==void 0&&(m.instance=s[3]),t=new T({props:m}),R.push(()=>A(t,"instance",f));function b(c){s[9](c)}let u={align:"center",scaleX:-1,scaleY:0,originX:0,originY:0,x:(800-390)/2,y:500,fontSize:"18px",text:">  UPGRADE SHIP  <"};return s[1]!==void 0&&(u.instance=s[1]),i=new I({props:u}),R.push(()=>A(i,"instance",b)),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment),n=D(),$(i.$$.fragment)},l(c){y(e.$$.fragment,c),r=X(c),y(t.$$.fragment,c),n=X(c),y(i.$$.fragment,c)},m(c,_){d(e,c,_),C(c,r,_),d(t,c,_),C(c,n,_),d(i,c,_),l=!0},p(c,_){const k={};!a&&_&8&&(a=!0,k.instance=c[3],O(()=>a=!1)),t.$set(k);const w={};!o&&_&2&&(o=!0,w.instance=c[1],O(()=>o=!1)),i.$set(w)},i(c){l||(g(e.$$.fragment,c),g(t.$$.fragment,c),g(i.$$.fragment,c),l=!0)},o(c){p(e.$$.fragment,c),p(t.$$.fragment,c),p(i.$$.fragment,c),l=!1},d(c){h(e,c),c&&S(r),h(t,c),c&&S(n),h(i,c)}}}function vt(s){let e,r;return e=new le({props:{x:400,y:300,progress:s[11]}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&2048&&(n.progress=t[11]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Yt(s){let e;const r=s[6].default,t=re(r,s,s[10],ye),a=t||vt(s);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,i){a&&a.m(n,i),e=!0},p(n,i){t?t.p&&(!e||i&1024)&&ie(t,r,n,n[10],e?ae(r,n[10],i,xt):se(n[10]),ye):a&&a.p&&(!e||i&2048)&&a.p(n,e?i:-1)},i(n){e||(g(a,n),e=!0)},o(n){p(a,n),e=!1},d(n){a&&a.d(n)}}}function Nt(s){let e,r;return e=new ne({props:{key:"menu",preload:be,create:s[5],$$slots:{loading:[Yt,({progress:t})=>({11:t}),({progress:t})=>t?2048:0],default:[Xt,({progress:t})=>({11:t}),({progress:t})=>t?2048:0]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&3082&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function he(s){let e,r;return e=new st({props:{x:300,y:500}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Et(s){let e,r,t,a,n,i,o;e=new oe({}),t=new ht({});let l=s[4]>0&&he();return i=new kt({}),{c(){$(e.$$.fragment),r=D(),$(t.$$.fragment),a=D(),l&&l.c(),n=D(),$(i.$$.fragment)},l(f){y(e.$$.fragment,f),r=X(f),y(t.$$.fragment,f),a=X(f),l&&l.l(f),n=X(f),y(i.$$.fragment,f)},m(f,m){d(e,f,m),C(f,r,m),d(t,f,m),C(f,a,m),l&&l.m(f,m),C(f,n,m),d(i,f,m),o=!0},p(f,m){f[4]>0?l?m&16&&g(l,1):(l=he(),l.c(),g(l,1),l.m(n.parentNode,n)):l&&(W(),p(l,1,1,()=>{l=null}),F())},i(f){o||(g(e.$$.fragment,f),g(t.$$.fragment,f),g(l),g(i.$$.fragment,f),o=!0)},o(f){p(e.$$.fragment,f),p(t.$$.fragment,f),p(l),p(i.$$.fragment,f),o=!1},d(f){h(e,f),f&&S(r),h(t,f),f&&S(a),l&&l.d(f),f&&S(n),h(i,f)}}}function Bt(s){let e,r;return e=new We({props:{$$slots:{default:[Et]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&1040&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Mt(s){let e,r;return e=new le({props:{x:400,y:300,progress:s[11]}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&2048&&(n.progress=t[11]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Pt(s){let e;const r=s[6].default,t=re(r,s,s[10],de),a=t||Mt(s);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,i){a&&a.m(n,i),e=!0},p(n,i){t?t.p&&(!e||i&1024)&&ie(t,r,n,n[10],e?ae(r,n[10],i,Ct):se(n[10]),de):a&&a.p&&(!e||i&2048)&&a.p(n,e?i:-1)},i(n){e||(g(a,n),e=!0)},o(n){p(a,n),e=!1},d(n){a&&a.d(n)}}}function Rt(s){let e,r;return e=new ne({props:{key:"main",preload:be,create:we,$$slots:{loading:[Pt,({progress:t})=>({11:t}),({progress:t})=>t?2048:0],default:[Bt,({progress:t})=>({11:t}),({progress:t})=>t?2048:0]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){d(e,t,a),r=!0},p(t,a){const n={};a&3088&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function At(s){let e,r,t,a;const n=[Dt,St],i=[];function o(l,f){return l[2]?0:1}return e=o(s),r=i[e]=n[e](s),{c(){r.c(),t=v()},l(l){r.l(l),t=v()},m(l,f){i[e].m(l,f),C(l,t,f),a=!0},p(l,[f]){let m=e;e=o(l),e===m?i[e].p(l,f):(W(),p(i[m],1,1,()=>{i[m]=null}),F(),r=i[e],r?r.p(l,f):(r=i[e]=n[e](l),r.c()),g(r,1),r.m(t.parentNode,t))},i(l){a||(g(r),a=!0)},o(l){p(r),a=!1},d(l){i[e].d(l),l&&S(t)}}}function be(s){s.load.audio("audio/coin","assets/coin.mp3"),s.load.image("textures/copyright","assets/logo-dark.png"),s.load.image("textures/logo","assets/RonaGun-logo.png"),s.load.image("textures/starfield","assets/star-bg-0.png"),s.load.spritesheet("textures/coin","assets/coin.png",{frameWidth:54,frameHeight:54}),s.load.spritesheet("textures/enemy","assets/invader-gold.png",{frameWidth:79,frameHeight:66}),s.load.spritesheet("textures/enemy/particles","assets/invader-gold-particles.png",{frameWidth:3,frameHeight:3}),s.load.spritesheet("textures/explosion","assets/explode.png",{frameWidth:128,frameHeight:128}),s.load.spritesheet("textures/ufo","assets/ufo.png",{frameWidth:32,frameHeight:30}),s.load.spritesheet("textures/ufo/explosion","assets/ufo-explosion.png",{frameWidth:32,frameHeight:30}),s.load.image("textures/player","assets/ship.png"),s.load.spritesheet("textures/player/bullet","assets/sperm.png",{frameWidth:6,frameHeight:22}),s.load.image("textures/enemy/bullet","assets/enemy-bullet.png")}function we(s){s.anims.create({key:"anims/enemy/fly",frames:s.anims.generateFrameNumbers("textures/enemy"),frameRate:10,repeat:-1}),s.anims.create({key:"anims/enemy/explosion",frames:s.anims.generateFrameNumbers("textures/explosion"),frameRate:24}),s.anims.create({key:"anims/bullet/default",frames:s.anims.generateFrameNumbers("textures/player/bullet"),frameRate:20,repeat:-1}),s.anims.create({key:"anims/coin/default",frames:s.anims.generateFrameNumbers("textures/coin"),frameRate:20,repeat:-1}),s.anims.create({key:"anims/enemyBullet/default",frames:[{key:"textures/enemy/bullet",frame:0}],frameRate:20,repeat:-1}),s.anims.create({key:"anims/player/explosion",frames:s.anims.generateFrameNumbers("textures/explosion"),frameRate:24}),s.anims.create({key:"anims/ufo/explosion",frames:s.anims.generateFrameNumbers("textures/ufo/explosion"),frameRate:30}),s.anims.create({key:"anims/ufo/fly",frames:s.anims.generateFrameNumbers("textures/ufo"),frameRate:4,repeat:-1}),s.coinSound=s.sound.add("audio/coin")}function Ot(s,e,r){let t;P(s,G,_=>r(4,t=_));let{$$slots:a={},$$scope:n}=e,i,o=!1,l,f;function m(_){we(_),_.input.on("pointerdown",()=>{r(2,o=!0)}),_.copyright=_.add.sprite(0,0,"textures/copyright").setOrigin(0),_.copyright.x=(800-_.copyright.width)/2,_.copyright.y=600,_.copyright.blendMode=Y.BlendModes.ADD;var k=new TimelineMax({onComplete(){},onCompleteScope:this});_.time.addEvent({delay:250,callback:()=>{k.to(_.copyright,2,{y:600-_.copyright.height-6,ease:Quint.easeOut},"+=0.0"),k.addCallback(function(){},"-=0.1",null,this),k.to(l,.9,{y:75,ease:Quint.easeIn},"-=0.8"),k.to(l,.9,{scaleX:1,scaleY:1,ease:Quint.easeIn},"-=0.9"),k.to(f,1.8,{scaleX:2,scaleY:2,ease:Quint.easeIn},"-=0.9")}})}function b(_){i=_,r(0,i)}function u(_){l=_,r(3,l)}function c(_){f=_,r(1,f)}return s.$$set=_=>{"$$scope"in _&&r(10,n=_.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&(window.game=i),s.$$.dirty&2&&(window.text=f)},[i,f,o,l,t,m,a,b,u,c,n]}class It extends N{constructor(e){super();E(this,e,Ot,At,B,{})}}new It({target:document.body});
