import{S as F,i as T,s as W,C as Ee,c as _,a as $,m as h,t as g,b as y,d as b,e as se,f as Re,g as N,h as re,j as Ae,k as J,R as fe,P as G,l as M,n as E,o as C,p as Fe,q as Te,r as S,u as We,T as Oe,v as Z,w as j,x as He,y as D,z as O,A as H,B as z,D as oe,E as P,F as L,G as q,H as ee,I as te,J as Ie,K,L as ue,M as Pe,N as Le,O as qe,Q,U as me,V as ce,W as pe,X as ge,Y as ye,Z as de,_ as Ke}from"./vendor.3d32a2af.js";const Qe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};Qe();function je(l){let e,r,t,a;const n=[{width:I},{height:50},{fillColor:7829367},l[4]];let i={};for(let f=0;f<n.length;f+=1)i=re(i,n[f]);return e=new fe({props:i}),t=new fe({props:{x:-I/2,originX:0,originY:.5,width:G.Math.Clamp(I*l[2],10,I),height:50,fillColor:12303291}}),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment)},l(f){$(e.$$.fragment,f),r=E(f),$(t.$$.fragment,f)},m(f,s){h(e,f,s),C(f,r,s),h(t,f,s),a=!0},p(f,s){const o=s&16?Fe(n,[s&0&&{width:I},n[1],n[2],s&16&&Te(f[4])]):{};e.$set(o);const c={};s&4&&(c.width=G.Math.Clamp(I*f[2],10,I)),t.$set(c)},i(f){a||(g(e.$$.fragment,f),g(t.$$.fragment,f),a=!0)},o(f){y(e.$$.fragment,f),y(t.$$.fragment,f),a=!1},d(f){b(e,f),f&&S(r),b(t,f)}}}function ze(l){let e,r;return e=new Ee({props:{x:l[0],y:l[1],width:I,height:50,$$slots:{default:[je]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.x=t[0]),a&2&&(n.y=t[1]),a&84&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}const I=400;function Ue(l,e,r){const t=["x","y","progress"];let a=se(e,t),n,{x:i}=e,{y:f}=e,{progress:s=0}=e;const o=Re(s,{duration:200,easing:We});return N(l,o,c=>r(2,n=c)),l.$$set=c=>{e=re(re({},e),Ae(c)),r(4,a=se(e,t)),"x"in c&&r(0,i=c.x),"y"in c&&r(1,f=c.y),"progress"in c&&r(5,s=c.progress)},l.$$.update=()=>{l.$$.dirty&32&&J(o,n=s,n)},[i,f,n,o,a,s]}class _e extends F{constructor(e){super();T(this,e,Ue,ze,W,{x:0,y:1,progress:5})}}function Ve(l){let e,r;return e=new Oe({props:{depth:-1,x:0,y:0,width:800,height:600,originX:0,originY:0,texture:"textures/starfield",tilePositionY:l[0]}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.tilePositionY=t[0]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function Je(l,e,r){let t=0;return Z("step",()=>{r(0,t-=2)}),[t]}class $e extends F{constructor(e){super();T(this,e,Je,Ve,W,{})}}function Ze(l){let e,r;return e=new j({props:{x:l[0],y:l[1],depth:30,animation:l[2],scale:l[2]=="anims/ufo/explosion"?1:.75}}),e.$on("animationcomplete",l[3]),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.x=t[0]),a&2&&(n.y=t[1]),a&4&&(n.animation=t[2]),a&4&&(n.scale=t[2]=="anims/ufo/explosion"?1:.75),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function et(l,e,r){let{x:t}=e,{y:a}=e,{animation:n="anims/enemy/explosion"}=e;function i(f){He.call(this,l,f)}return l.$$set=f=>{"x"in f&&r(0,t=f.x),"y"in f&&r(1,a=f.y),"animation"in f&&r(2,n=f.animation)},[t,a,n,i]}class tt extends F{constructor(e){super();T(this,e,et,Ze,W,{x:0,y:1,animation:2})}}function nt(l){let e,r,t;function a(i){l[16](i)}let n={animation:l[0]==="enemyBullet"?"anims/enemyBullet/default":l[0]==="flirtyGirlBullet"?"anims/kissBullet/default":"anims/bullet/default",depth:l[3],name:l[0],texture:l[2],x:l[4],y:l[5],scale:l[0]==="flirtyGirlBullet"?.5:1,$$slots:{default:[it]},$$scope:{ctx:l}};return l[9]!==void 0&&(n.instance=l[9]),e=new j({props:n}),P.push(()=>L(e,"instance",a)),{c(){_(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,f){h(e,i,f),t=!0},p(i,f){const s={};f&1&&(s.animation=i[0]==="enemyBullet"?"anims/enemyBullet/default":i[0]==="flirtyGirlBullet"?"anims/kissBullet/default":"anims/bullet/default"),f&8&&(s.depth=i[3]),f&1&&(s.name=i[0]),f&4&&(s.texture=i[2]),f&16&&(s.x=i[4]),f&32&&(s.y=i[5]),f&1&&(s.scale=i[0]==="flirtyGirlBullet"?.5:1),f&540610&&(s.$$scope={dirty:f,ctx:i}),!r&&f&512&&(r=!0,s.instance=i[9],q(()=>r=!1)),e.$set(s)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){y(e.$$.fragment,i),t=!1},d(i){b(e,i)}}}function rt(l){let e,r;return e=new tt({props:{animation:l[13],x:l[12].x,y:l[12].y-32}}),e.$on("animationcomplete",l[14]),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&8192&&(n.animation=t[13]),a&4096&&(n.x=t[12].x),a&4096&&(n.y=t[12].y-32),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function it(l){let e,r,t,a;return e=new ee({props:{with:l[1],overlapOnly:!0}}),e.$on("collide",l[15]),t=new te({props:{velocityY:l[7],velocityX:l[6]}}),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment)},l(n){$(e.$$.fragment,n),r=E(n),$(t.$$.fragment,n)},m(n,i){h(e,n,i),C(n,r,i),h(t,n,i),a=!0},p(n,i){const f={};i&2&&(f.with=n[1]),e.$set(f);const s={};i&128&&(s.velocityY=n[7]),i&64&&(s.velocityX=n[6]),t.$set(s)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){y(e.$$.fragment,n),y(t.$$.fragment,n),a=!1},d(n){b(e,n),n&&S(r),b(t,n)}}}function at(l){let e,r,t,a;const n=[rt,nt],i=[];function f(s,o){return s[10]?0:1}return e=f(l),r=i[e]=n[e](l),{c(){r.c(),t=D()},l(s){r.l(s),t=D()},m(s,o){i[e].m(s,o),C(s,t,o),a=!0},p(s,[o]){let c=e;e=f(s),e===c?i[e].p(s,o):(O(),y(i[c],1,1,()=>{i[c]=null}),H(),r=i[e],r?r.p(s,o):(r=i[e]=n[e](s),r.c()),g(r,1),r.m(t.parentNode,t))},i(s){a||(g(r),a=!0)},o(s){y(r),a=!1},d(s){i[e].d(s),s&&S(t)}}}function lt(l,e,r){let{name:t}=e,{target:a}=e,{texture:n}=e,{depth:i=10}=e,{x:f}=e,{y:s}=e,{velocityX:o=0}=e,{velocityY:c=0}=e,{onDestroy:d}=e,p,u=!1,w,x,Y,m=z().time.addEvent({callback:()=>{u||d()},delay:3e3});oe(()=>()=>m.destroy());const k=()=>d(),R=v=>{if(r(11,w=v.detail.other.texture.key),w==="textures/flirty-girl")return d();r(10,u=!0),r(13,Y=w.replace("textures","anims")+"/explosion"),r(12,x={x:p.x,y:p.y})};function A(v){p=v,r(9,p)}return l.$$set=v=>{"name"in v&&r(0,t=v.name),"target"in v&&r(1,a=v.target),"texture"in v&&r(2,n=v.texture),"depth"in v&&r(3,i=v.depth),"x"in v&&r(4,f=v.x),"y"in v&&r(5,s=v.y),"velocityX"in v&&r(6,o=v.velocityX),"velocityY"in v&&r(7,c=v.velocityY),"onDestroy"in v&&r(8,d=v.onDestroy)},[t,a,n,i,f,s,o,c,d,p,u,w,x,Y,k,R,A]}class ie extends F{constructor(e){super();T(this,e,lt,at,W,{name:0,target:1,texture:2,depth:3,x:4,y:5,velocityX:6,velocityY:7,onDestroy:8})}}const ae=K(0),U=K(3),he=K(0),ne=K(0),st=K(!1),V=K(!1);let le=K({});const be=Ie([U,st],([l,e])=>l<=0?"gameover":e?"win":"playing"),ft=()=>{ae.set(0),U.set(3)};function ot(l){let e,r,t,a;return e=new ee({props:{with:["enemy","enemyBullet","flirtyGirlBullet"],overlapOnly:!0}}),e.$on("collide",l[5]),t=new te({props:{velocityX:l[3],collideWorldBounds:!0}}),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment)},l(n){$(e.$$.fragment,n),r=E(n),$(t.$$.fragment,n)},m(n,i){h(e,n,i),C(n,r,i),h(t,n,i),a=!0},p(n,i){const f={};i&8&&(f.velocityX=n[3]),t.$set(f)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){y(e.$$.fragment,n),y(t.$$.fragment,n),a=!1},d(n){b(e,n),n&&S(r),b(t,n)}}}function ut(l){let e,r,t;function a(i){l[6](i)}let n={depth:10,name:"player",texture:"textures/player",x:l[1],y:l[2],$$slots:{default:[ot]},$$scope:{ctx:l}};return l[0]!==void 0&&(n.instance=l[0]),e=new j({props:n}),P.push(()=>L(e,"instance",a)),{c(){_(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,f){h(e,i,f),t=!0},p(i,[f]){const s={};f&2&&(s.x=i[1]),f&4&&(s.y=i[2]),f&1033&&(s.$$scope={dirty:f,ctx:i}),!r&&f&1&&(r=!0,s.instance=i[0],q(()=>r=!1)),e.$set(s)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){y(e.$$.fragment,i),t=!1},d(i){b(e,i)}}}const ke=200;function mt(l,e,r){let t;N(l,le,u=>r(7,t=u));let{x:a}=e,{y:n}=e,{instance:i=void 0}=e;const{spawn:f}=ue(),s=z(),o={left:s.input.keyboard.addKey("left"),right:s.input.keyboard.addKey("right"),up:s.input.keyboard.addKey("up"),shoot:s.input.keyboard.addKey("SPACE")};let c=0;Z("step",()=>{t.left||o.left.isDown?r(3,c=-ke):t.right||o.right.isDown?r(3,c=ke):r(3,c=0),(t.A||G.Input.Keyboard.JustDown(o.shoot))&&f(ie,{name:"playerBullet",texture:"textures/player/bullet",target:"enemy",depth:10,x:i.x,y:i.y-8,velocityY:-250})});const d=u=>{if(!(u.detail.self.alpha<1)){if(u.detail.other.name==="enemy"){i.setAlpha(.5);let{x:w,y:x}=i,Y=s.add.sprite(w,x,"__DEFAULT");Y.anims.create({key:"default",frames:s.anims.generateFrameNumbers("textures/explosion"),frameRate:24}),Y.on("animationcomplete-default",()=>{Y.destroy(),s.time.addEvent({delay:1e3,callback:()=>i.setAlpha(1)})}),Y.play("default")}U.update(w=>w-1)}};function p(u){i=u,r(0,i)}return l.$$set=u=>{"x"in u&&r(1,a=u.x),"y"in u&&r(2,n=u.y),"instance"in u&&r(0,i=u.instance)},[i,a,n,c,s,d,p]}class ct extends F{constructor(e){super();T(this,e,mt,ut,W,{x:1,y:2,instance:0})}}function pt(l){let e,r,t,a;return e=new te({props:{bounce:1,collideWorldBounds:!0,velocityX:Math.random()<.5?15:-15,velocityY:l[6],gravityY:100*l[4],useDamping:!0,circle:{radius:14,offsetX:0,offsetY:0}}}),t=new ee({props:{with:"player",overlapOnly:!0}}),t.$on("collide",l[7]),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment)},l(n){$(e.$$.fragment,n),r=E(n),$(t.$$.fragment,n)},m(n,i){h(e,n,i),C(n,r,i),h(t,n,i),a=!0},p(n,i){const f={};i&16&&(f.gravityY=100*n[4]),e.$set(f)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){y(e.$$.fragment,n),y(t.$$.fragment,n),a=!1},d(n){b(e,n),n&&S(r),b(t,n)}}}function gt(l){let e,r,t;function a(i){l[8](i)}let n={name:"coin",x:l[0],y:l[1],scale:.5,animation:"anims/coin/default",$$slots:{default:[pt]},$$scope:{ctx:l}};return l[3]!==void 0&&(n.instance=l[3]),e=new j({props:n}),P.push(()=>L(e,"instance",a)),{c(){_(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,f){h(e,i,f),t=!0},p(i,[f]){const s={};f&1&&(s.x=i[0]),f&2&&(s.y=i[1]),f&1052&&(s.$$scope={dirty:f,ctx:i}),!r&&f&8&&(r=!0,s.instance=i[3],q(()=>r=!1)),e.$set(s)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){y(e.$$.fragment,i),t=!1},d(i){b(e,i)}}}function yt(l,e,r){let t;N(l,ne,u=>r(9,t=u));const a=z();let{x:n}=e,{y:i}=e,{onCoinCollected:f}=e,s,o=G.Math.Between(-5,-60),c=1;t>0&&(c=Math.floor(1+t/10*3)),Z("step",()=>{s.y>600&&f()});const d=()=>{let{x:u,y:w}=s;f();let x=a.add.sprite(u,w,"textures/coin-impact").setDepth(9);x.displayHeight=54,x.scaleX=x.scaleY,x.play("anims/coin-impact"),a.tweens.add({targets:x,alpha:0,y:w-10,duration:500,ease:"Power2",onComplete:x.destroy.bind(x)}),he.update(Y=>Y+G.Math.RND.integerInRange(1,3)),a.coinSound.play()};function p(u){s=u,r(3,s)}return l.$$set=u=>{"x"in u&&r(0,n=u.x),"y"in u&&r(1,i=u.y),"onCoinCollected"in u&&r(2,f=u.onCoinCollected)},[n,i,f,s,c,a,o,d,p]}class dt extends F{constructor(e){super();T(this,e,yt,gt,W,{x:0,y:1,onCoinCollected:2})}}function _t(l){let e,r,t;function a(i){l[17](i)}let n={name:"enemy",x:l[1],y:l[2],animation:l[0],$$slots:{default:[ht]},$$scope:{ctx:l}};return l[5]!==void 0&&(n.instance=l[5]),e=new j({props:n}),P.push(()=>L(e,"instance",a)),{c(){_(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,f){h(e,i,f),t=!0},p(i,f){const s={};f&2&&(s.x=i[1]),f&4&&(s.y=i[2]),f&1&&(s.animation=i[0]),f&4196329&&(s.$$scope={dirty:f,ctx:i}),!r&&f&32&&(r=!0,s.instance=i[5],q(()=>r=!1)),e.$set(s)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){y(e.$$.fragment,i),t=!1},d(i){b(e,i)}}}function $t(l){let e,r;return e=new dt({props:{x:l[5].x,y:l[5].y,onCoinCollected:l[15]}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&32&&(n.x=t[5].x),a&32&&(n.y=t[5].y),a&16&&(n.onCoinCollected=t[15]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function ht(l){let e,r,t,a;return e=new te({props:{width:l[11](l[0]),height:l[12](l[0]),offsetX:l[13](l[0]),offsetY:l[14](l[0]),velocityX:l[3],bounce:1,collideWorldBounds:!0}}),t=new ee({props:{with:"playerBullet",overlapOnly:!0}}),t.$on("collide",l[16]),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment)},l(n){$(e.$$.fragment,n),r=E(n),$(t.$$.fragment,n)},m(n,i){h(e,n,i),C(n,r,i),h(t,n,i),a=!0},p(n,i){const f={};i&1&&(f.width=n[11](n[0])),i&1&&(f.height=n[12](n[0])),i&1&&(f.offsetX=n[13](n[0])),i&1&&(f.offsetY=n[14](n[0])),i&8&&(f.velocityX=n[3]),e.$set(f)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){y(e.$$.fragment,n),y(t.$$.fragment,n),a=!1},d(n){b(e,n),n&&S(r),b(t,n)}}}function bt(l){let e,r,t,a;const n=[$t,_t],i=[];function f(s,o){return s[6]?0:1}return e=f(l),r=i[e]=n[e](l),{c(){r.c(),t=D()},l(s){r.l(s),t=D()},m(s,o){i[e].m(s,o),C(s,t,o),a=!0},p(s,[o]){let c=e;e=f(s),e===c?i[e].p(s,o):(O(),y(i[c],1,1,()=>{i[c]=null}),H(),r=i[e],r?r.p(s,o):(r=i[e]=n[e](s),r.c()),g(r,1),r.m(t.parentNode,t))},i(s){a||(g(r),a=!0)},o(s){y(r),a=!1},d(s){i[e].d(s),s&&S(t)}}}function kt(l,e,r){const t=z();let{animation:a}=e,{x:n}=e,{y:i}=e,{velocityX:f}=e,{onDie:s}=e,o,c=!1,d,p,u,w,x=t.add.particles("textures/enemy/particles"),Y=t.add.particles("textures/enemy-silver/particles");d=x.createEmitter({frequency:-1,blendMode:G.BlendModes.ADD,gravityY:600,alpha:{start:1,end:0,ease:"Cubic.easeIn"},lifespan:500,angle:{min:-180,max:180},speed:{min:0,max:2400},scale:{min:.4,max:.6},frame:[...Array(3).keys()]}),p=Y.createEmitter({frequency:-1,blendMode:G.BlendModes.ADD,gravityY:600,alpha:{start:1,end:0,ease:"Cubic.easeIn"},lifespan:500,angle:{min:-180,max:180},speed:{min:0,max:2400},scale:{min:.4,max:.6},frame:[...Array(3).keys()]});let B=t.add.particles("textures/flirty-girl/particles");u=B.createEmitter({frequency:-1,blendMode:G.BlendModes.ADD,gravityY:600,alpha:{start:1,end:0,ease:"Cubic.easeIn"},lifespan:500,angle:{min:-180,max:180},speed:{min:0,max:600},frame:[0]}),w=B.createEmitter({frequency:-1,blendMode:G.BlendModes.ADD,gravityY:600,alpha:{start:1,end:0,ease:"Cubic.easeIn"},lifespan:500,angle:{min:-180,max:180},speed:{min:0,max:600},frame:[1]}),Z("step",()=>{o.y>600&&s(0)});const m=X=>{switch(X){case"anims/flyBrain/fly":return 32;case"anims/enemy/fly":case"anims/enemySilver/fly":return 33;case"anims/flirtyGirl/default":return 26;case"anims/ufo/fly":return 32;default:return 26}},k=X=>{switch(X){case"anims/flyBrain/fly":return 32;case"anims/enemy/fly":case"anims/enemySilver/fly":return 24;case"anims/flirtyGirl/default":return 24;case"anims/ufo/fly":return 24;default:return 24}},R=X=>{switch(X){case"anims/flyBrain/fly":return 0;case"anims/enemy/fly":case"anims/enemySilver/fly":return 23;case"anims/flirtyGirl/default":return 4;case"anims/ufo/fly":return 0;default:return 0}},A=X=>{switch(X){case"anims/flyBrain/fly":return 0;case"anims/enemy/fly":case"anims/enemySilver/fly":return 21;case"anims/flirtyGirl/default":return 15;case"anims/ufo/fly":return 0;default:return 0}},v=()=>{s()},Ge=()=>{r(6,c=!0),["anims/enemy/fly","anims/flyBrain/fly"].includes(a)&&d.explode(100,o.x,o.y),a=="anims/enemySilver/fly"&&p.explode(100,o.x,o.y),(a=="anims/flirtyGirl/default"||a=="anims/flirtyGirl/attack")&&u.explode(1,o.x,o.y)&&w.explode(1,o.x,o.y)};function Me(X){o=X,r(5,o)}return l.$$set=X=>{"animation"in X&&r(0,a=X.animation),"x"in X&&r(1,n=X.x),"y"in X&&r(2,i=X.y),"velocityX"in X&&r(3,f=X.velocityX),"onDie"in X&&r(4,s=X.onDie)},[a,n,i,f,s,o,c,d,p,u,w,m,k,R,A,v,Ge,Me]}class wt extends F{constructor(e){super();T(this,e,kt,bt,W,{animation:0,x:1,y:2,velocityX:3,onDie:4})}}function xt(l){let e=l.children.length-1;for(;e>=0;){let r=l.children.list[e];(r.type==="Image"||r.type==="ParticleEmitterManager"||r.type==="Sprite"||r.type==="Text"||r.type==="TileSprite")&&(r.destroy(),l.tweens.killTweensOf(r)),e--}}function we(l,e,r){const t=l.slice();return t[14]=e[r],t}function xe(l,e){let r,t,a;function n(...i){return e[5](e[14],...i)}return t=new wt({props:{animation:e[14].animation,x:100+e[14].x,y:70+e[14].y+e[3],velocityX:e[1]==="playing"?e[2]:0,onDie:n}}),{key:l,first:null,c(){r=D(),_(t.$$.fragment),this.h()},l(i){r=D(),$(t.$$.fragment,i),this.h()},h(){this.first=r},m(i,f){C(i,r,f),h(t,i,f),a=!0},p(i,f){e=i;const s={};f&1&&(s.animation=e[14].animation),f&1&&(s.x=100+e[14].x),f&9&&(s.y=70+e[14].y+e[3]),f&6&&(s.velocityX=e[1]==="playing"?e[2]:0),f&1&&(s.onDie=n),t.$set(s)},i(i){a||(g(t.$$.fragment,i),a=!0)},o(i){y(t.$$.fragment,i),a=!1},d(i){i&&S(r),b(t,i)}}}function vt(l){let e=[],r=new Map,t,a,n=l[0];const i=f=>f[14].key;for(let f=0;f<n.length;f+=1){let s=we(l,n,f),o=i(s);r.set(o,e[f]=xe(o,s))}return{c(){for(let f=0;f<e.length;f+=1)e[f].c();t=D()},l(f){for(let s=0;s<e.length;s+=1)e[s].l(f);t=D()},m(f,s){for(let o=0;o<e.length;o+=1)e[o].m(f,s);C(f,t,s),a=!0},p(f,[s]){s&15&&(n=f[0],O(),e=Pe(e,s,i,1,f,n,r,t.parentNode,Le,xe,t,we),H())},i(f){if(!a){for(let s=0;s<n.length;s+=1)g(e[s]);a=!0}},o(f){for(let s=0;s<e.length;s+=1)y(e[s]);a=!1},d(f){for(let s=0;s<e.length;s+=1)e[s].d(f);f&&S(t)}}}function Bt(l,e,r){let t,a,n;N(l,ne,B=>r(4,t=B)),N(l,V,B=>r(7,a=B)),N(l,be,B=>r(1,n=B));const i=z(),{spawn:f}=ue();let s=[],o=40,c=1;t>0&&(c=1+t/10*3),o*=c;let d=0;const p={callback:()=>{if(n==="playing"){r(3,d+=16);const B=i.children.list.filter(m=>m.name==="enemy");if(B.length<=20&&u.delay==3500){let m={callback:p.callback,loop:!0,delay:1e3};u.reset(m)}if(B.length<=10&&u.delay==1e3){let m={callback:p.callback,loop:!0,delay:500};u.reset(m)}}},loop:!0,delay:3500},u=i.time.addEvent(p),w=i.time.addEvent({callback:()=>{if(!a&&n==="playing"){const B=i.children.getByName("player"),m=i.children.list.filter(R=>R.name==="enemy"),k=m[G.Math.RND.integerInRange(0,m.length-1)];if(B&&k){const R=Math.atan2(B.y-k.y,B.x-k.x)*180/Math.PI,A=i.physics.velocityFromAngle(R,180);k.texture.key=="textures/flirty-girl"?(k&&k.once("animationcomplete-anims/flirtyGirl/attack",()=>{f(ie,{name:"flirtyGirlBullet",texture:"textures/kiss-bullet",target:"player",x:k.x,y:k.y,velocityX:A.x,velocityY:A.y}),k.play("anims/flirtyGirl/default")}),k.play("anims/flirtyGirl/attack")):f(ie,{name:"enemyBullet",texture:"textures/enemy/bullet",target:"player",x:k.x,y:k.y,velocityX:A.x,velocityY:A.y})}}},loop:!0,delay:Math.floor(2e3/c)});oe(()=>()=>{u.destroy(),w.destroy()});let x=[["anims/enemy/fly","anims/flirtyGirl/default"],["anims/enemySilver/fly","anims/ufo/fly"],["anims/ufo/fly","anims/ufo/fly"],["anims/flirtyGirl/default","anims/flirtyGirl/default"],["anims/enemySilver/fly","anims/enemy/fly"],["anims/flyBrain/fly","anims/flirtyGirl/default"]];const Y=(B,m=100)=>{r(0,s=s.filter(k=>k!==B)),ae.update(k=>k+m)};return l.$$.update=()=>{if(l.$$.dirty&18&&n==="playing"){let B=x[t]?x[t]:x[0];u.reset(p),r(3,d=0),r(0,s=Array.from({length:40}).map((m,k)=>{const R=10,A=k%R,v=Math.floor(k/R);return{x:A*52,y:v*41,key:k+Date.now(),animation:k%2==0?B[0]:B[1]}}))}l.$$.dirty&17&&s.length===0&&(J(V,a=!0,a),xt(i),i.scene.restart({currentLevel:t+1}))},[s,n,o,d,t,Y]}class Ct extends F{constructor(e){super();T(this,e,Bt,vt,W,{})}}function ve(l){let e,r,t,a,n,i,f,s,o;e=new Q({props:{x:16,y:16,text:`Score: ${l[2]}`}}),t=new Q({props:{x:16,y:32,text:`Coins: ${l[3]}`}}),n=new Q({props:{x:700,y:16,text:`Lives: ${l[4]}`}});let c=l[0]==="playing"&&l[3]===0&&Be(),d=l[0]!=="playing"&&Ce(l);return{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment),a=M(),_(n.$$.fragment),i=M(),c&&c.c(),f=M(),d&&d.c(),s=D()},l(p){$(e.$$.fragment,p),r=E(p),$(t.$$.fragment,p),a=E(p),$(n.$$.fragment,p),i=E(p),c&&c.l(p),f=E(p),d&&d.l(p),s=D()},m(p,u){h(e,p,u),C(p,r,u),h(t,p,u),C(p,a,u),h(n,p,u),C(p,i,u),c&&c.m(p,u),C(p,f,u),d&&d.m(p,u),C(p,s,u),o=!0},p(p,u){const w={};u&4&&(w.text=`Score: ${p[2]}`),e.$set(w);const x={};u&8&&(x.text=`Coins: ${p[3]}`),t.$set(x);const Y={};u&16&&(Y.text=`Lives: ${p[4]}`),n.$set(Y),p[0]==="playing"&&p[3]===0?c?u&9&&g(c,1):(c=Be(),c.c(),g(c,1),c.m(f.parentNode,f)):c&&(O(),y(c,1,1,()=>{c=null}),H()),p[0]!=="playing"?d?(d.p(p,u),u&1&&g(d,1)):(d=Ce(p),d.c(),g(d,1),d.m(s.parentNode,s)):d&&(O(),y(d,1,1,()=>{d=null}),H())},i(p){o||(g(e.$$.fragment,p),g(t.$$.fragment,p),g(n.$$.fragment,p),g(c),g(d),o=!0)},o(p){y(e.$$.fragment,p),y(t.$$.fragment,p),y(n.$$.fragment,p),y(c),y(d),o=!1},d(p){b(e,p),p&&S(r),b(t,p),p&&S(a),b(n,p),p&&S(i),c&&c.d(p),p&&S(f),d&&d.d(p),p&&S(s)}}}function Be(l){let e,r;return e=new Q({props:{x:180,y:575,text:"Move with arrow keys, shoot with spacebar"}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function Ce(l){let e,r,t,a;return e=new Q({props:{x:250,y:200,text:l[0]==="win"?"You Win!":"Game Over",fontSize:"48px",align:"center"}}),t=new Q({props:{x:280,y:265,text:"Click to restart",fontSize:"20px"}}),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment)},l(n){$(e.$$.fragment,n),r=E(n),$(t.$$.fragment,n)},m(n,i){h(e,n,i),C(n,r,i),h(t,n,i),a=!0},p(n,i){const f={};i&1&&(f.text=n[0]==="win"?"You Win!":"Game Over"),e.$set(f)},i(n){a||(g(e.$$.fragment,n),g(t.$$.fragment,n),a=!0)},o(n){y(e.$$.fragment,n),y(t.$$.fragment,n),a=!1},d(n){b(e,n),n&&S(r),b(t,n)}}}function St(l){let e,r,t=!l[1]&&ve(l);return{c(){t&&t.c(),e=D()},l(a){t&&t.l(a),e=D()},m(a,n){t&&t.m(a,n),C(a,e,n),r=!0},p(a,[n]){a[1]?t&&(O(),y(t,1,1,()=>{t=null}),H()):t?(t.p(a,n),n&2&&g(t,1)):(t=ve(a),t.c(),g(t,1),t.m(e.parentNode,e))},i(a){r||(g(t),r=!0)},o(a){y(t),r=!1},d(a){t&&t.d(a),a&&S(e)}}}function Yt(l,e,r){let t,a,n,i,f;return N(l,be,s=>r(0,t=s)),N(l,V,s=>r(1,a=s)),N(l,ae,s=>r(2,n=s)),N(l,he,s=>r(3,i=s)),N(l,U,s=>r(4,f=s)),qe("pointerdown",()=>{t!=="playing"&&ft()}),[t,a,n,i,f]}class Xt extends F{constructor(e){super();T(this,e,Yt,St,W,{})}}const Dt=l=>({}),Se=l=>({slot:"loading"}),Nt=l=>({}),Ye=l=>({slot:"loading"});function Gt(l){let e,r;return e=new me({props:{width:800,height:600,scale:{mode:G.Scale.FIT,autoCenter:G.Scale.CENTER_BOTH},render:{pixelArt:!0},physics:{default:"arcade"},$$slots:{default:[Ft]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&8204&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function Mt(l){let e,r,t;function a(i){l[10](i)}let n={width:800,height:600,physics:{default:"arcade"},scale:{mode:G.Scale.FIT,autoCenter:G.Scale.CENTER_BOTH},render:{pixelArt:!0},$$slots:{default:[It]},$$scope:{ctx:l}};return l[0]!==void 0&&(n.instance=l[0]),e=new me({props:n}),P.push(()=>L(e,"instance",a)),{c(){_(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,f){h(e,i,f),t=!0},p(i,f){const s={};f&8240&&(s.$$scope={dirty:f,ctx:i}),!r&&f&1&&(r=!0,s.instance=i[0],q(()=>r=!1)),e.$set(s)},i(i){t||(g(e.$$.fragment,i),t=!0)},o(i){y(e.$$.fragment,i),t=!1},d(i){b(e,i)}}}function Et(l){let e,r,t,a,n,i,f,s;e=new $e({});function o(u){l[11](u)}let c={scale:2,texture:"textures/logo",originX:0,originY:0,x:(800-537)/2,y:-124};l[2]!==void 0&&(c.instance=l[2]),t=new j({props:c}),P.push(()=>L(t,"instance",o));function d(u){l[12](u)}let p={align:"center",scaleX:-1,scaleY:0,originX:0,originY:0,x:(800-390)/2,y:500,fontSize:"18px",text:">  UPGRADE SHIP  <"};return l[3]!==void 0&&(p.instance=l[3]),i=new Q({props:p}),P.push(()=>L(i,"instance",d)),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment),n=M(),_(i.$$.fragment)},l(u){$(e.$$.fragment,u),r=E(u),$(t.$$.fragment,u),n=E(u),$(i.$$.fragment,u)},m(u,w){h(e,u,w),C(u,r,w),h(t,u,w),C(u,n,w),h(i,u,w),s=!0},p(u,w){const x={};!a&&w&4&&(a=!0,x.instance=u[2],q(()=>a=!1)),t.$set(x);const Y={};!f&&w&8&&(f=!0,Y.instance=u[3],q(()=>f=!1)),i.$set(Y)},i(u){s||(g(e.$$.fragment,u),g(t.$$.fragment,u),g(i.$$.fragment,u),s=!0)},o(u){y(e.$$.fragment,u),y(t.$$.fragment,u),y(i.$$.fragment,u),s=!1},d(u){b(e,u),u&&S(r),b(t,u),u&&S(n),b(i,u)}}}function Rt(l){let e,r;return e=new _e({props:{x:400,y:300,progress:l[15]}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&32768&&(n.progress=t[15]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function At(l){let e;const r=l[9].default,t=pe(r,l,l[13],Se),a=t||Rt(l);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,i){a&&a.m(n,i),e=!0},p(n,i){t?t.p&&(!e||i&8192)&&ge(t,r,n,n[13],e?de(r,n[13],i,Dt):ye(n[13]),Se):a&&a.p&&(!e||i&32768)&&a.p(n,e?i:-1)},i(n){e||(g(a,n),e=!0)},o(n){y(a,n),e=!1},d(n){a&&a.d(n)}}}function Ft(l){let e,r;return e=new ce({props:{key:"menu",preload:Ne,create:l[7],$$slots:{loading:[At,({progress:t})=>({15:t}),({progress:t})=>t?32768:0],default:[Et,({progress:t})=>({15:t}),({progress:t})=>t?32768:0]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&40972&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function Xe(l){let e,r;return e=new Ke({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&8224&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function De(l){let e,r;return e=new ct({props:{x:300,y:500}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function Tt(l){let e,r,t,a,n,i,f;e=new $e({}),t=new Ct({});let s=l[5]>0&&De();return i=new Xt({}),{c(){_(e.$$.fragment),r=M(),_(t.$$.fragment),a=M(),s&&s.c(),n=M(),_(i.$$.fragment)},l(o){$(e.$$.fragment,o),r=E(o),$(t.$$.fragment,o),a=E(o),s&&s.l(o),n=E(o),$(i.$$.fragment,o)},m(o,c){h(e,o,c),C(o,r,c),h(t,o,c),C(o,a,c),s&&s.m(o,c),C(o,n,c),h(i,o,c),f=!0},p(o,c){o[5]>0?s?c&32&&g(s,1):(s=De(),s.c(),g(s,1),s.m(n.parentNode,n)):s&&(O(),y(s,1,1,()=>{s=null}),H())},i(o){f||(g(e.$$.fragment,o),g(t.$$.fragment,o),g(s),g(i.$$.fragment,o),f=!0)},o(o){y(e.$$.fragment,o),y(t.$$.fragment,o),y(s),y(i.$$.fragment,o),f=!1},d(o){b(e,o),o&&S(r),b(t,o),o&&S(a),s&&s.d(o),o&&S(n),b(i,o)}}}function Wt(l){let e,r,t=!l[4]&&Xe(l);return{c(){t&&t.c(),e=D()},l(a){t&&t.l(a),e=D()},m(a,n){t&&t.m(a,n),C(a,e,n),r=!0},p(a,n){a[4]?t&&(O(),y(t,1,1,()=>{t=null}),H()):t?(t.p(a,n),n&16&&g(t,1)):(t=Xe(a),t.c(),g(t,1),t.m(e.parentNode,e))},i(a){r||(g(t),r=!0)},o(a){y(t),r=!1},d(a){t&&t.d(a),a&&S(e)}}}function Ot(l){let e,r;return e=new _e({props:{x:400,y:300,progress:l[15]}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&32768&&(n.progress=t[15]),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function Ht(l){let e;const r=l[9].default,t=pe(r,l,l[13],Ye),a=t||Ot(l);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,i){a&&a.m(n,i),e=!0},p(n,i){t?t.p&&(!e||i&8192)&&ge(t,r,n,n[13],e?de(r,n[13],i,Nt):ye(n[13]),Ye):a&&a.p&&(!e||i&32768)&&a.p(n,e?i:-1)},i(n){e||(g(a,n),e=!0)},o(n){y(a,n),e=!1},d(n){a&&a.d(n)}}}function It(l){let e,r;return e=new ce({props:{key:"main",preload:Ne,create:l[6],$$slots:{loading:[Ht,({progress:t})=>({15:t}),({progress:t})=>t?32768:0],default:[Wt,({progress:t})=>({15:t}),({progress:t})=>t?32768:0]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,a){const n={};a&41008&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function Pt(l){let e,r,t,a;const n=[Mt,Gt],i=[];function f(s,o){return s[1]?0:1}return e=f(l),r=i[e]=n[e](l),{c(){r.c(),t=D()},l(s){r.l(s),t=D()},m(s,o){i[e].m(s,o),C(s,t,o),a=!0},p(s,[o]){let c=e;e=f(s),e===c?i[e].p(s,o):(O(),y(i[c],1,1,()=>{i[c]=null}),H(),r=i[e],r?r.p(s,o):(r=i[e]=n[e](s),r.c()),g(r,1),r.m(t.parentNode,t))},i(s){a||(g(r),a=!0)},o(s){y(r),a=!1},d(s){i[e].d(s),s&&S(t)}}}function Ne(l){l.load.audio("audio/coin","assets/coin.mp3"),l.load.image("textures/copyright","assets/logo-dark.png"),l.load.image("textures/logo","assets/RonaGun-logo.png"),l.load.image("textures/starfield","assets/star-bg-0.png"),l.load.spritesheet("textures/coin","assets/coin.png",{frameWidth:54,frameHeight:54}),l.load.spritesheet("textures/coin-impact","assets/coin-impact.png",{frameWidth:20,frameHeight:16}),l.load.spritesheet("textures/enemy","assets/invader-gold.png",{frameWidth:79,frameHeight:66}),l.load.spritesheet("textures/enemy-silver","assets/invader-silver.png",{frameWidth:77,frameHeight:63}),l.load.spritesheet("textures/enemy/particles","assets/invader-gold-particles.png",{frameWidth:3,frameHeight:3}),l.load.spritesheet("textures/enemy-silver/particles","assets/invader-silver-particles.png",{frameWidth:3,frameHeight:3}),l.load.spritesheet("textures/explosion","assets/explode.png",{frameWidth:128,frameHeight:128}),l.load.spritesheet("textures/flirty-girl","assets/flirty-gold-girl.png",{frameWidth:31,frameHeight:40}),l.load.spritesheet("textures/flirty-girl/particles","assets/flirty-girl-particles.png",{frameWidth:15,frameHeight:29}),l.load.spritesheet("textures/fly-brain","assets/fly-brain-32x32.png",{frameWidth:32,frameHeight:32}),l.load.spritesheet("textures/kiss-bullet","assets/kiss-bullet.png",{frameWidth:25,frameHeight:21}),l.load.spritesheet("textures/ufo","assets/ufo.png",{frameWidth:32,frameHeight:30}),l.load.spritesheet("textures/ufo/explosion","assets/ufo-explosion.png",{frameWidth:32,frameHeight:30}),l.load.image("textures/player","assets/ship.png"),l.load.spritesheet("textures/player/bullet","assets/sperm.png",{frameWidth:6,frameHeight:22}),l.load.image("textures/enemy/bullet","assets/enemy-bullet.png")}function Lt(l,e,r){let t,a,n,i;N(l,le,m=>r(8,t=m)),N(l,ne,m=>r(14,a=m)),N(l,V,m=>r(4,n=m)),N(l,U,m=>r(5,i=m));let{$$slots:f={},$$scope:s}=e,o,c=!1;function d(m){if(m.anims.create({key:"anims/coin-impact",frames:m.anims.generateFrameNumbers("textures/coin-impact"),duration:500,hideOnComplete:!0}),m.anims.create({key:"anims/enemy/fly",frames:m.anims.generateFrameNumbers("textures/enemy"),frameRate:6,repeat:-1}),m.anims.create({key:"anims/enemySilver/fly",frames:m.anims.generateFrameNumbers("textures/enemy-silver"),frameRate:6,repeat:-1}),m.anims.create({key:"anims/enemy/explosion",frames:m.anims.generateFrameNumbers("textures/explosion"),frameRate:24}),m.anims.create({key:"anims/enemy-silver/explosion",frames:m.anims.generateFrameNumbers("textures/explosion"),frameRate:24}),m.anims.create({key:"anims/fly-brain/explosion",frames:m.anims.generateFrameNumbers("textures/explosion"),frameRate:24}),m.anims.create({key:"anims/flyBrain/fly",frames:m.anims.generateFrameNumbers("textures/fly-brain"),frameRate:6,repeat:-1}),m.anims.create({key:"anims/bullet/default",frames:m.anims.generateFrameNumbers("textures/player/bullet"),frameRate:20,repeat:-1}),m.anims.create({key:"anims/coin/default",frames:m.anims.generateFrameNumbers("textures/coin"),frameRate:20,repeat:-1}),m.anims.create({key:"anims/enemyBullet/default",frames:[{key:"textures/enemy/bullet",frame:0}],frameRate:20,repeat:-1}),m.anims.create({key:"anims/flirtyGirl/default",frames:[{key:"textures/flirty-girl",frame:0},{key:"textures/flirty-girl",frame:1}],frameRate:6,repeat:-1}),m.anims.create({key:"anims/flirtyGirl/attack",frames:[{key:"textures/flirty-girl",frame:1},{key:"textures/flirty-girl",frame:2},{key:"textures/flirty-girl",frame:3},{key:"textures/flirty-girl",frame:4},{key:"textures/flirty-girl",frame:3},{key:"textures/flirty-girl",frame:4},{key:"textures/flirty-girl",frame:1}],frameRate:6}),m.anims.create({key:"anims/kissBullet/default",frames:m.anims.generateFrameNumbers("textures/kiss-bullet"),frameRate:6,repeat:-1}),m.anims.create({key:"anims/player/explosion",frames:m.anims.generateFrameNumbers("textures/explosion"),frameRate:24}),m.anims.create({key:"anims/ufo/explosion",frames:m.anims.generateFrameNumbers("textures/ufo/explosion"),frameRate:30}),m.anims.create({key:"anims/ufo/fly",frames:m.anims.generateFrameNumbers("textures/ufo"),frameRate:4,repeat:-1}),m.coinSound=m.sound.add("audio/coin"),m.physics.world.setBoundsCollision(!0,!0,!0,!1),m.scene.settings.data.currentLevel){J(ne,a=m.scene.settings.data.currentLevel,a);let k=m.add.text(800/2,-100,`Level ${a+1}`).setDepth(30);m.physics.world.enableBody(k),m.time.addEvent({delay:250,callback:()=>k.body.setVelocityY(125)}),m.time.addEvent({delay:1e4,callback:()=>k.destroy()})}m.input.gamepad.once("down",k=>{J(le,t=k,t)}),V.set(!1)}let p,u;function w(m){m.input.on("pointerdown",()=>{r(1,c=!0)}),m.copyright=m.add.sprite(0,0,"textures/copyright").setOrigin(0),m.copyright.x=(800-m.copyright.width)/2,m.copyright.y=600,m.copyright.blendMode=G.BlendModes.ADD;var k=new TimelineMax({onComplete(){},onCompleteScope:this});m.time.addEvent({delay:250,callback:()=>{k.to(m.copyright,2,{y:600-m.copyright.height-6,ease:Quint.easeOut},"+=0.0"),k.addCallback(function(){},"-=0.1",null,this),k.to(p,.9,{y:75,ease:Quint.easeIn},"-=0.8"),k.to(p,.9,{scaleX:1,scaleY:1,ease:Quint.easeIn},"-=0.9"),k.to(u,1.4,{scaleX:2,scaleY:2,ease:Quint.easeIn},"-=0.7")}})}function x(m){o=m,r(0,o)}function Y(m){p=m,r(2,p)}function B(m){u=m,r(3,u)}return l.$$set=m=>{"$$scope"in m&&r(13,s=m.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&(window.game=o),l.$$.dirty&256&&(window.ding=t)},[o,c,p,u,n,i,d,w,t,f,x,Y,B,s]}class qt extends F{constructor(e){super();T(this,e,Lt,Pt,W,{})}}new qt({target:document.body});
