var e=function(){function r(e,r){function t(){}return gn=t.prototype=r||new Hn,gn.hc=Mn,gn.lb=e,t}function t(e,r){postMessage({action:yn,callback_num:r,result:e})}function n(e,r){return e.detailMessage=r,e}function o(e,r){e[e.Kb++]=r}function i(e){var r,t;return t=e.join(""),e.length=e.Kb=0,r=t,e[e.Kb++]=r,r}function s(e,r){var t=Array(r);if(e>0){var n=[null,0,!1,[0,0]][e];if("number"!=typeof n)for(var o=0;r>o;++o)t[o]=n}return t}function a(e,r,t,n,o){var i;return i=s(o,n),u(),m(i,Zn,Yn),i.Ec=e,i.lb=r,i.bc=t,i}function _(e,r,t,n){return u(),m(n,Zn,Yn),n.Ec=e,n.lb=r,n.bc=t,n}function c(e,r,t){if(null!=t){if(e.bc>0&&!d(t.lb,e.bc))throw new ao;if(0>e.bc&&(t.mc==Sn||2==t.lb))throw new ao}return e[r]=t}function u(){u=Sn,Zn=[],Yn=[],f(new Wn,Zn,Yn)}function f(e,r,t){var n,o=0;for(var i in e)(n=e[i])&&(r[o]=i,t[o]=n,++o)}function m(e,r,t){u();for(var n=0,o=r.length;o>n;++n)e[r[n]]=t[n]}function d(e,r){return e&&ro[e][r]}function p(e,r){if(null!=e&&!d(e.lb,r))throw new co;return e}function l(e,r){var t,n;return t=e[1]+r[1],n=e[0]+r[0],v(n,t)}function h(e,r){return y(~~Math.max(Math.min(e[1]/Rn,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/Rn,2147483647),-2147483648),k(e)&k(r))}function P(e,r){var t,n;return e[0]==r[0]&&e[1]==r[1]?0:(t=0>e[1],n=0>r[1],t&&!n?-1:!t&&n?1:L(e,r)[1]<0?-1:1)}function v(e,r){var t,n;for(r%=0x10000000000000000,e%=0x10000000000000000,t=r%Rn,n=Math.floor(e/Rn)*Rn,r=r-t+n,e=e-n+t;0>e;)e+=Rn,r-=Rn;for(;e>4294967295;)e-=Rn,r+=Rn;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;-0x8000000000000000>r;)r+=0x10000000000000000;return[e,r]}function B(e,r){return e[0]==r[0]&&e[1]==r[1]}function S(e){return isNaN(e)?(E(),eo):-0x8000000000000000>e?(E(),Jn):e>=0x8000000000000000?(E(),jn):e>0?v(Math.floor(e),0):v(Math.ceil(e),0)}function g(e){var r,t;return e>-129&&128>e?(r=e+128,t=(z(),qn)[r],null==t&&(t=qn[r]=w(e)),t):w(e)}function w(e){return e>=0?[e,0]:[e+Rn,-Rn]}function k(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-Rn,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function y(e,r){var t,n;return t=e*Rn,n=r,0>r&&(n+=Rn),[n,t]}function b(e){var r,t;return B(e,(E(),Jn))?Jn:(r=-e[1],t=-e[0],t>4294967295&&(t-=Rn,r+=Rn),0>t&&(t+=Rn,r-=Rn),[t,r])}function M(e){return 30>=e?1<<e:M(30)*M(e-30)}function R(e,r){var t,n,o,i;return r&=63,B(e,(E(),Jn))?0==r?e:eo:0>e[1]?b(R(b(e),r)):(i=M(r),n=e[1]*i%0x10000000000000000,o=e[0]*i,t=o-o%Rn,n+=t,o-=t,n>=0x8000000000000000&&(n-=0x10000000000000000),[o,n])}function C(e,r){var t,n,o;return r&=63,o=M(r),t=e[1]/o,n=Math.floor(e[0]/o),v(n,t)}function D(e,r){var t;return r&=63,t=C(e,r),0>e[1]&&(t=l(t,R((E(),Un),63-r))),t}function L(e,r){var t,n;return t=e[1]-r[1],n=e[0]-r[0],v(n,t)}function z(){z=Sn,qn=a(Xo,0,9,256,0)}function E(){E=Sn,Vn=Math.log(2),jn=On,Jn=Cn,Kn=g(-1),Qn=g(1),Un=g(2),Xn=An,eo=g(0)}function F(e,r){return I(e,r,0,r.length),e}function I(e,r,t,n){return e.wc=r,e.Uc=t,e.fb=t+n,e.fb>r.length&&(e.fb=r.length),e}function N(e){return e.Uc>=e.fb?-1:255&e.wc[e.Uc++]}function x(e,r,t,n){return e.Uc>=e.fb?-1:(n=V(n,e.fb-e.Uc),Q(e.wc,e.Uc,r,t,n),e.Uc+=n,n)}function A(e){return e.wc=a(To,0,-1,32,1),e}function O(e,r){var t;e.wc.length>=r||(r=q(r,2*e.wc.length),t=a(To,0,-1,r,1),Q(e.wc,0,t,0,e.wc.length),e.wc=t)}function H(e){var r;return r=a(To,0,-1,e.fb,1),Q(e.wc,0,r,0,e.fb),r}function $(e,r){O(e,e.fb+1),e.wc[e.fb++]=r<<24>>24}function G(e,r,t,n){O(e,e.fb+n),Q(r,t,e.wc,e.fb,n),e.fb+=n}function T(e,r){return e.detailMessage=r,e}function W(e,r){return e.detailMessage=r,e}function Z(e,r){var t;return t=new _o,t.typeName=e+r,t}function Y(e,r){return e.detailMessage=r,e}function q(e,r){return e>r?e:r}function V(e,r){return r>e?e:r}function j(e,r){return null==r?!1:e+""==r}function J(e,r,t,n,o){var i;for(i=r;t>i;++i)n[o++]=e.charCodeAt(i)}function K(e){var r;return e.Db=(r=[],r.Kb=0,r),e}function Q(e,r,t,n,o){var i,s,a,_,u,f,m,d;if(null==e||null==t)throw new po;if(m=(e.mc==Sn||2==e.lb?e.hc():Mn()).typeName,a=(t.mc==Sn||2==t.lb?t.hc():Mn()).typeName,91!=m.charCodeAt(0)||91!=a.charCodeAt(0))throw W(new ao,"Must be array types");if(m.charCodeAt(1)!=a.charCodeAt(1))throw W(new ao,"Array types must match");if(d=e.length,_=t.length,0>r||0>n||0>o||r+o>d||n+o>_)throw new mo;if(76!=m.charCodeAt(1)&&91!=m.charCodeAt(1)||j(m,a))for(u=0;o>u;++u)t[n+u]=e[r+u];else if(f=p(e,3),i=p(t,3),(null==e?null:e)===(null==t?null:t)&&n>r)for(r+=o,s=n+o;s-->n;)c(i,s,f[--r]);else for(s=n+o;s>n;)c(i,n++,f[r++])}function U(e,r){if(!(Pt(r,1<<e.dicSize)&&St(r,e.fb)&&Bt(r,e.matchFinder)&&vt(r,e.lc,e.lp,e.pb)))throw n(new Tn,"unexpected failure")}function X(e){try{return Er(e.Cc)}catch(r){return e.exception=r,!1}}function er(e,r,t,n,o){var i,s;if(!o)throw Y(new uo,"null mode");if(P(n,Dn)<0)throw Y(new uo,"invalid length "+n);for(e.vb=n,i=ot(new Do),U(o,i),i.Rc=!0,gt(i,t),s=0;64>s;s+=8)$(t,255&k(C(n,s)));e.Cc=(i._=!1,i.zc=r,i.yc=!1,nt(i),i.d.Mb=t,mt(i),st(i),it(i),i.cb.mb=i.l+1-2,Et(i.cb,1<<i.K),i.k.mb=i.l+1-2,Et(i.k,1<<i.K),void(i.g=Ln),Lr(new yo,i))}function rr(e,r,t){e.Ac=A(new io);try{er(e,F(new no,r),e.Ac,g(r.length),t)}catch(n){throw n}return e}function tr(e,r,t){var n,o,i,s,_,c="";for(i=a(To,0,-1,5,1),o=0;i.length>o;++o){if(s=N(r),-1==s)throw T(new so,"truncated input");i[o]=s<<24>>24}if(n=Or(new bo),!$r(n,i))throw T(new so,"corrupted input");for(o=0;64>o;o+=8){if(s=N(r),-1==s)throw T(new so,"truncated input");s=s.toString(16),1==s.length&&(s="0"+s),c=s+""+c}/^0+$|^f+$/i.test(c)?e.vb=Dn:(_=parseInt(c,16),e.vb=_>4294967295?Dn:S(_)),e.Cc=xr(n,r,t,e.vb)}function nr(e,r){return e.Ac=A(new io),tr(e,F(new no,r),e.Ac),e}function or(e,r,t,n){var o;e.ic=r,e.Lb=t,o=r+t+n,(null==e.c||e.Cb!=o)&&(e.c=null,e.Cb=o,e.c=a(To,0,-1,e.Cb,1)),e.C=e.Cb-t}function ir(e,r){return e.c[e.e+e.p+r]}function sr(e,r,t,n){var o,i;for(e.bb&&e.p+r+n>e.h&&(n=e.h-(e.p+r)),++t,i=e.e+e.p+r,o=0;n>o&&e.c[i+o]==e.c[i+o-t];++o);return o}function ar(e){return e.h-e.p}function _r(e){var r,t,n;for(n=e.e+e.p-e.ic,n>0&&--n,t=e.e+e.h-n,r=0;t>r;++r)e.c[r]=e.c[n+r];e.e-=n}function cr(e){var r;++e.p,e.p>e.xb&&(r=e.e+e.p,r>e.C&&_r(e),ur(e))}function ur(e){var r,t,n;if(!e.bb)for(;;){if(n=-e.e+e.Cb-e.h,0==n)return;if(r=x(e.Vb,e.c,e.e+e.h,n),-1==r)return e.xb=e.h,t=e.e+e.xb,t>e.C&&(e.xb=e.C-e.e),void(e.bb=!0);e.h+=r,e.h>=e.p+e.Lb&&(e.xb=e.h-e.Lb)}}function fr(e,r){e.e+=r,e.xb-=r,e.p-=r,e.h-=r}function mr(){mr=Sn;var e,r,t;for(wo=a(Yo,0,-1,256,1),e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;wo[e]=t}}function dr(e,r,t,n,o){var i,s,_;return r>1073741567?!1:(e.vc=16+(n>>1),_=~~((r+t+n+o)/2)+256,or(e,r+t,n+o,_),e.Eb=n,i=r+1,e.m!=i&&(e.R=a(Yo,0,-1,2*(e.m=i),1)),s=65536,e.ib&&(s=r-1,s|=s>>1,s|=s>>2,s|=s>>4,s|=s>>8,s>>=1,s|=65535,s>16777216&&(s>>=1),e.Qc=s,++s,s+=e.M),s!=e.$b&&(e.zb=a(Yo,0,-1,e.$b=s,1)),!0)}function pr(e,r){var t,n,o,i,s,a,_,c,u,f,m,d,p,l,h,P,v,B,S,g,w;if(e.h>=e.p+e.Eb)l=e.Eb;else if(l=e.h-e.p,e.hb>l)return hr(e),0;for(v=0,h=e.p>e.m?e.p-e.m:0,n=e.e+e.p,P=1,c=0,u=0,e.ib?(w=wo[255&e.c[n]]^255&e.c[n+1],c=1023&w,w^=(255&e.c[n+2])<<8,u=65535&w,f=(w^wo[255&e.c[n+3]]<<5)&e.Qc):f=255&e.c[n]^(255&e.c[n+1])<<8,o=e.zb[e.M+f],e.ib&&(i=e.zb[c],s=e.zb[1024+u],e.zb[c]=e.p,e.zb[1024+u]=e.p,i>h&&e.c[e.e+i]==e.c[n]&&(r[v++]=P=2,r[v++]=e.p-i-1),s>h&&e.c[e.e+s]==e.c[n]&&(s==i&&(v-=2),r[v++]=P=3,r[v++]=e.p-s-1,i=s),0!=v&&i==o&&(v-=2,P=1)),e.zb[e.M+f]=e.p,S=(e.j<<1)+1,g=e.j<<1,d=p=e.u,0!=e.u&&o>h&&e.c[e.e+o+e.u]!=e.c[n+e.u]&&(r[v++]=P=e.u,r[v++]=e.p-o-1),t=e.vc;;){if(h>=o||0==t--){e.R[S]=e.R[g]=0;break}if(_=e.p-o,a=(e.j>=_?e.j-_:e.j-_+e.m)<<1,B=e.e+o,m=p>d?d:p,e.c[B+m]==e.c[n+m]){for(;++m!=l&&e.c[B+m]==e.c[n+m];);if(m>P&&(r[v++]=P=m,r[v++]=_-1,m==l)){e.R[g]=e.R[a],e.R[S]=e.R[a+1];break}}(255&e.c[n+m])>(255&e.c[B+m])?(e.R[g]=o,g=a+1,o=e.R[g],p=m):(e.R[S]=o,S=a,o=e.R[S],d=m)}return hr(e),v}function lr(e){e.e=0,e.p=0,e.h=0,e.bb=!1,ur(e),e.j=0,fr(e,-1)}function hr(e){var r;++e.j>=e.m&&(e.j=0),cr(e),1073741823==e.p&&(r=e.p-e.m,Pr(e.R,2*e.m,r),Pr(e.zb,e.$b,r),fr(e,r))}function Pr(e,r,t){var n,o;for(n=0;r>n;++n)o=e[n],t>=o?o=0:o-=t,e[n]=o}function vr(e,r){e.ib=r>2,e.ib?(e.u=0,e.hb=4,e.M=66560):(e.u=2,e.hb=3,e.M=0)}function Br(e,r){var t,n,o,i,s,a,_,c,u,f,m,d,p,l,h,P,v;do{if(e.h>=e.p+e.Eb)d=e.Eb;else if(d=e.h-e.p,e.hb>d){hr(e);continue}for(p=e.p>e.m?e.p-e.m:0,n=e.e+e.p,e.ib?(v=wo[255&e.c[n]]^255&e.c[n+1],a=1023&v,e.zb[a]=e.p,v^=(255&e.c[n+2])<<8,_=65535&v,e.zb[1024+_]=e.p,c=(v^wo[255&e.c[n+3]]<<5)&e.Qc):c=255&e.c[n]^(255&e.c[n+1])<<8,o=e.zb[e.M+c],e.zb[e.M+c]=e.p,h=(e.j<<1)+1,P=e.j<<1,f=m=e.u,t=e.vc;;){if(p>=o||0==t--){e.R[h]=e.R[P]=0;break}if(s=e.p-o,i=(e.j>=s?e.j-s:e.j-s+e.m)<<1,l=e.e+o,u=m>f?f:m,e.c[l+u]==e.c[n+u]){for(;++u!=d&&e.c[l+u]==e.c[n+u];);if(u==d){e.R[P]=e.R[i],e.R[h]=e.R[i+1];break}}(255&e.c[n+u])>(255&e.c[l+u])?(e.R[P]=o,P=i+1,o=e.R[P],m=u):(e.R[h]=o,h=i,o=e.R[h],f=u)}hr(e)}while(0!=--r)}function Sr(e,r,t){var n;for(n=e.p-r-1,0>n&&(n+=e.L);0!=t;--t)n>=e.L&&(n=0),e.Wb[e.p++]=e.Wb[n++],e.p>=e.L&&wr(e)}function gr(e,r){(null==e.Wb||e.L!=r)&&(e.Wb=a(To,0,-1,r,1)),e.L=r,e.p=0,e.h=0}function wr(e){var r;r=e.p-e.h,0!=r&&(G(e.Vb,e.Wb,e.h,r),e.p>=e.L&&(e.p=0),e.h=e.p)}function kr(e,r){var t;return t=e.p-r-1,0>t&&(t+=e.L),e.Wb[t]}function yr(e,r){r||(e.h=0,e.p=0)}function br(e,r){e.Wb[e.p++]=r,e.p>=e.L&&wr(e)}function Mr(e){wr(e),e.Vb=null}function Rr(e,r){wr(e),e.Vb=null,e.Vb=r}function Cr(e){return e-=2,4>e?e:3}function Dr(e){return 4>e?0:10>e?e-3:e-6}function Lr(e,r){return e.jb=r,e.wb=null,e.Bc=!0,e}function zr(e,r){return e.wb=r,e.jb=null,e.Bc=!0,e}function Er(e){var r;if(!e.Bc)throw new fo;r=!0;try{return e.jb?Ir(e):Fr(e),r=!1,e.Bc}finally{r&&(e.Bc=!1)}}function Fr(e){var r;if(r=Ar(e.wb),-1==r)throw T(new so,"corrupted input");e._b=Dn,e.Wc=e.wb.g,(1==r||P(e.wb.Mc,Ln)>=0&&P(e.wb.g,e.wb.Mc)>=0)&&(Nr(e.wb),e.Bc=!1)}function Ir(e){tt(e.jb,e.jb.jc,e.jb.Hc,e.jb.Tc),e._b=e.jb.jc[0],e.jb.Tc[0]&&(ht(e.jb),e.Bc=!1)}function Nr(e){wr(e.H),Mr(e.H),e.f.Mb=null}function xr(e,r,t,n){return e.f.Mb=r,Rr(e.H,t),Hr(e),e.S=0,e.nb=0,e.Oc=0,e.Pc=0,e.Vc=0,e.Mc=n,e.g=Ln,e.dc=0,zr(new yo,e)}function Ar(e){var r,t,n,o,i,s;if(s=k(e.g)&e.oc,0==Xt(e.f,e.Tb,(e.S<<4)+s))r=jr(e.sb,k(e.g),e.dc),e.dc=7>e.S?Kr(r,e.f):Qr(r,e.f,kr(e.H,e.nb)),br(e.H,e.dc),e.S=Dr(e.S),e.g=l(e.g,zn);else{if(1==Xt(e.f,e.lc,e.S))n=0,0==Xt(e.f,e.Rb,e.S)?0==Xt(e.f,e.Ab,(e.S<<4)+s)&&(e.S=7>e.S?9:11,n=1):(0==Xt(e.f,e.Qb,e.S)?t=e.Oc:(0==Xt(e.f,e.Ob,e.S)?t=e.Pc:(t=e.Vc,e.Vc=e.Pc),e.Pc=e.Oc),e.Oc=e.nb,e.nb=t),0==n&&(n=Zr(e.Gb,e.f,s)+2,e.S=7>e.S?8:11);else if(e.Vc=e.Pc,e.Pc=e.Oc,e.Oc=e.nb,n=2+Zr(e.cc,e.f,s),e.S=7>e.S?7:10,i=Wt(e.tb[Cr(n)],e.f),i>=4){if(o=(i>>1)-1,e.nb=(2|1&i)<<o,14>i)e.nb+=Yt(e.tc,e.nb-i-1,e.f,o);else if(e.nb+=en(e.f,o-4)<<4,e.nb+=Zt(e.Sb,e.f),0>e.nb)return-1==e.nb?1:-1}else e.nb=i;if(P(g(e.nb),e.g)>=0||e.nb>=e.T)return-1;Sr(e.H,e.nb,n),e.g=l(e.g,g(n)),e.dc=kr(e.H,0)}return 0}function Or(e){var r;for(e.H=new ko,e.f=new Oo,e.Tb=a(Wo,0,-1,192,1),e.lc=a(Wo,0,-1,12,1),e.Rb=a(Wo,0,-1,12,1),e.Qb=a(Wo,0,-1,12,1),e.Ob=a(Wo,0,-1,12,1),e.Ab=a(Wo,0,-1,192,1),e.tb=a(Qo,0,7,4,0),e.tc=a(Wo,0,-1,114,1),e.Sb=Tt(new xo,4),e.cc=Yr(new Mo),e.Gb=Yr(new Mo),e.sb=new Ro,r=0;4>r;++r)e.tb[r]=Tt(new xo,6);return e}function Hr(e){var r;for(yr(e.H,!1),tn(e.Tb),tn(e.Ab),tn(e.lc),tn(e.Rb),tn(e.Qb),tn(e.Ob),tn(e.tc),Jr(e.sb),r=0;4>r;++r)tn(e.tb[r].I);qr(e.cc),qr(e.Gb),tn(e.Sb.I),rn(e.f)}function $r(e,r){var t,n,o,i,s,a,_;if(5>r.length)return!1;for(_=255&r[0],o=_%9,a=~~(_/9),i=a%5,s=~~(a/5),t=0,n=0;4>n;++n)t+=(255&r[1+n])<<8*n;return t>99999999||!Tr(e,o,i,s)?!1:Gr(e,t)}function Gr(e,r){return 0>r?!1:(e.rb!=r&&(e.rb=r,e.T=q(e.rb,1),gr(e.H,q(e.T,4096))),!0)}function Tr(e,r,t,n){var o;return r>8||t>4||n>4?!1:(Vr(e.sb,t,r),o=1<<n,Wr(e.cc,o),Wr(e.Gb,o),e.oc=o-1,!0)}function Wr(e,r){for(;r>e.U;++e.U)e.rc[e.U]=Tt(new xo,3),e.pc[e.U]=Tt(new xo,3)}function Zr(e,r,t){var n;return 0==Xt(r,e.Ic,0)?Wt(e.rc[t],r):(n=8,n+=0==Xt(r,e.Ic,1)?Wt(e.pc[t],r):8+Wt(e.Dc,r))}function Yr(e){return e.Ic=a(Wo,0,-1,2,1),e.rc=a(Qo,0,7,16,0),e.pc=a(Qo,0,7,16,0),e.Dc=Tt(new xo,8),e}function qr(e){var r;for(tn(e.Ic),r=0;e.U>r;++r)tn(e.rc[r].I),tn(e.pc[r].I);tn(e.Dc.I)}function Vr(e,r,t){var n,o;if(null==e.$||e.t!=t||e.F!=r)for(e.F=r,e.Nb=(1<<r)-1,e.t=t,o=1<<e.t+e.F,e.$=a(Uo,0,4,o,0),n=0;o>n;++n)e.$[n]=Ur(new Co)}function jr(e,r,t){return e.$[((r&e.Nb)<<e.t)+((255&t)>>>8-e.t)]}function Jr(e){var r,t;for(t=1<<e.t+e.F,r=0;t>r;++r)tn(e.$[r].Ub)}function Kr(e,r){var t;t=1;do t=t<<1|Xt(r,e.Ub,t);while(256>t);return t<<24>>24}function Qr(e,r,t){var n,o,i;i=1;do if(o=t>>7&1,t<<=1,n=Xt(r,e.Ub,(1+o<<8)+i),i=i<<1|n,o!=n){for(;256>i;)i=i<<1|Xt(r,e.Ub,i);break}while(256>i);return i<<24>>24}function Ur(e){return e.Ub=a(Wo,0,-1,768,1),e}function Xr(){Xr=Sn;var e,r,t,n;for(Lo=a(To,0,-1,2048,1),e=2,Lo[0]=0,Lo[1]=1,n=2;22>n;++n)for(t=1<<(n>>1)-1,r=0;t>r;++r,++e)Lo[e]=n<<24>>24}function et(e,r){var t,n,o,i;e.Y=r,o=e.a[r].r,n=e.a[r].i;do e.a[r].v&&($t(e.a[o]),e.a[o].r=o-1,e.a[r].Kc&&(e.a[o-1].v=0,e.a[o-1].r=e.a[r].r2,e.a[o-1].i=e.a[r].i2)),i=o,t=n,n=e.a[i].i,o=e.a[i].r,e.a[i].i=t,e.a[i].r=r,r=i;while(r>0);return e.yb=e.a[0].i,e.o=e.a[0].r}function rt(e){var r;for(e.n=0,e.J=0,r=0;4>r;++r)e.x[r]=0}function tt(e,r,t,n){var o,i,s,a,_,c,u,f,m,d,p,h,v,S,w;if(r[0]=Ln,t[0]=Ln,n[0]=!0,e.zc&&(e.b.Vb=e.zc,lr(e.b),e._=!0,e.zc=null),!e.yc){if(e.yc=!0,S=e.g,B(e.g,Ln)){if(0==ar(e.b))return void at(e,k(e.g));pt(e),v=k(e.g)&e.w,on(e.d,e.E,(e.n<<4)+v,0),e.n=Dr(e.n),s=ir(e.b,-e.s),xt(It(e.A,k(e.g),e.J),e.d,s),e.J=s,--e.s,e.g=l(e.g,zn)}if(0==ar(e.b))return void at(e,k(e.g));for(;;){if(u=_t(e,k(e.g)),d=e.yb,v=k(e.g)&e.w,i=(e.n<<4)+v,1==u&&-1==d)on(e.d,e.E,i,0),s=ir(e.b,-e.s),w=It(e.A,k(e.g),e.J),7>e.n?xt(w,e.d,s):(m=ir(e.b,-e.x[0]-1-e.s),At(w,e.d,m,s)),e.J=s,e.n=Dr(e.n);else{if(on(e.d,e.E,i,1),4>d){if(on(e.d,e.gb,e.n,1),0==d?(on(e.d,e.ob,e.n,0),1==u?on(e.d,e.db,i,0):on(e.d,e.db,i,1)):(on(e.d,e.ob,e.n,1),1==d?on(e.d,e.Zb,e.n,0):(on(e.d,e.Zb,e.n,1),on(e.d,e.Gc,e.n,d-2))),1==u?e.n=7>e.n?9:11:(Dt(e.k,e.d,u-2,v),e.n=7>e.n?8:11),a=e.x[d],0!=d){for(c=d;c>=1;--c)e.x[c]=e.x[c-1];e.x[0]=a}}else{for(on(e.d,e.gb,e.n,0),e.n=7>e.n?7:10,Dt(e.cb,e.d,u-2,v),d-=4,h=kt(d),f=Cr(u),Vt(e.O[f],e.d,h),h>=4&&(_=(h>>1)-1,o=(2|1&h)<<_,p=d-o,14>h?Qt(e.ac,o-h-1,e.d,_,p):(sn(e.d,p>>4,_-4),Jt(e.ab,e.d,15&p),++e.qb)),a=d,c=3;c>=1;--c)e.x[c]=e.x[c-1];e.x[0]=a,++e.pb}e.J=ir(e.b,u-1-e.s)}if(e.s-=u,e.g=l(e.g,g(u)),0==e.s){if(e.pb>=128&&st(e),e.qb>=16&&it(e),r[0]=e.g,t[0]=_n(e.d),0==ar(e.b))return void at(e,k(e.g));if(P(L(e.g,S),Fn)>=0)return e.yc=!1,void(n[0]=!1)}}}}function nt(e){var r,t;e.b||(mr(),r=new go,t=4,0==e.Z&&(t=2),vr(r,t),e.b=r),Ft(e.A,e.N,e.Q),(e.P!=e.eb||e.Pb!=e.l)&&(dr(e.b,e.P,4096,e.l,274),e.eb=e.P,e.Pb=e.l)}function ot(e){var r;for(Xr(),e.x=a(Yo,0,-1,4,1),e.a=a(qo,0,6,4096,0),e.d=(nn(),new Ho),e.E=a(Wo,0,-1,192,1),e.gb=a(Wo,0,-1,12,1),e.ob=a(Wo,0,-1,12,1),e.Zb=a(Wo,0,-1,12,1),e.Gc=a(Wo,0,-1,12,1),e.db=a(Wo,0,-1,192,1),e.O=a(Vo,0,8,4,0),e.ac=a(Wo,0,-1,114,1),e.ab=qt(new Ao,4),e.cb=Lt(new Eo),e.k=Lt(new Eo),e.A=new Fo,e.q=a(Yo,0,-1,548,1),e.V=a(Yo,0,-1,256,1),e.ub=a(Yo,0,-1,512,1),e.uc=a(Yo,0,-1,16,1),e.z=a(Yo,0,-1,4,1),e.W=a(Yo,0,-1,4,1),e.jc=a(jo,0,-1,1,3),e.Hc=a(jo,0,-1,1,3),e.Tc=a(Jo,0,-1,1,2),e.qc=a(To,0,-1,5,1),e.Lc=a(Yo,0,-1,128,1),r=0;4096>r;++r)e.a[r]=new No;for(r=0;4>r;++r)e.O[r]=qt(new Ao,6);return e}function it(e){var r;for(r=0;16>r;++r)e.uc[r]=Kt(e.ab,r);e.qb=0}function st(e){var r,t,n,o,i,s,a,_;for(o=4;128>o;++o)s=kt(o),n=(s>>1)-1,r=(2|1&s)<<n,e.Lc[o]=Ut(e.ac,r-s-1,n,o-r);for(i=0;4>i;++i){for(t=e.O[i],a=i<<6,s=0;e.Jb>s;++s)e.V[a+s]=jt(t,s);for(s=14;e.Jb>s;++s)e.V[a+s]+=(s>>1)-1-4<<6;for(_=128*i,o=0;4>o;++o)e.ub[_+o]=e.V[a+o];for(;128>o;++o)e.ub[_+o]=e.V[a+kt(o)]+e.Lc[o]}e.pb=0}function at(e,r){lt(e),wt(e,r&e.w),an(e.d)}function _t(e,r){var t,n,o,i,s,a,_,c,u,f,m,d,p,l,h,P,v,B,S,g,w,k,y,b,M,R,C,D,L,z,E,F,I,N,x,A,O,H,$,G,T,W,Z,Y,q,j,J,K,Q,U;if(e.Y!=e.o)return p=e.a[e.o].r-e.o,e.yb=e.a[e.o].i,e.o=e.a[e.o].r,p;if(e.o=e.Y=0,e.X?(d=e.Hb,e.X=!1):d=pt(e),C=e.G,M=ar(e.b)+1,2>M)return e.yb=-1,1;for(M>273&&(M=273),G=0,u=0;4>u;++u)e.z[u]=e.x[u],e.W[u]=sr(e.b,-1,e.z[u],273),e.W[u]>e.W[G]&&(G=u);if(e.W[G]>=e.l)return e.yb=G,p=e.W[G],dt(e,p-1),p;if(d>=e.l)return e.yb=e.q[C-1]+4,dt(e,d-1),d;if(_=ir(e.b,-1),v=ir(e.b,-e.x[0]-1-1),2>d&&_!=v&&2>e.W[G])return e.yb=-1,1;if(e.a[0].Jc=e.n,N=r&e.w,e.a[1].y=(nn(),$o[e.E[(e.n<<4)+N]>>>2]+Ht(It(e.A,r,e.J),e.n>=7,v,_)),$t(e.a[1]),B=$o[2048-e.E[(e.n<<4)+N]>>>2],$=B+$o[2048-e.gb[e.n]>>>2],v==_&&(T=$+ft(e,e.n,N),e.a[1].y>T&&(e.a[1].y=T,Gt(e.a[1]))),m=d>=e.W[G]?d:e.W[G],2>m)return e.yb=e.a[1].i,1;e.a[1].r=0,e.a[0].ec=e.z[0],e.a[0].Yb=e.z[1],e.a[0].Xb=e.z[2],e.a[0].nc=e.z[3],f=m;do e.a[f--].y=268435455;while(f>=2);for(u=0;4>u;++u)if(H=e.W[u],!(2>H)){A=$+ut(e,u,e.n,N);do i=A+zt(e.k,H-2,N),E=e.a[H],E.y>i&&(E.y=i,E.r=0,E.i=u,E.v=0);while(--H>=2)}if(b=B+$o[e.gb[e.n]>>>2],f=e.W[0]>=2?e.W[0]+1:2,d>=f){for(D=0;f>e.q[D];)D+=2;for(;c=e.q[D+1],i=b+ct(e,c,f,N),E=e.a[f],E.y>i&&(E.y=i,E.r=0,E.i=c+4,E.v=0),f!=e.q[D]||(D+=2,D!=C);++f);}for(t=0;;){if(++t,t==m)return et(e,t);if(S=pt(e),C=e.G,S>=e.l)return e.Hb=S,e.X=!0,et(e,t);if(++r,I=e.a[t].r,e.a[t].v?(--I,e.a[t].Kc?(Z=e.a[e.a[t].r2].Jc,Z=4>e.a[t].i2?7>Z?8:11:7>Z?7:10):Z=e.a[I].Jc,Z=Dr(Z)):Z=e.a[I].Jc,I==t-1?Z=0==e.a[t].i?7>Z?9:11:Dr(Z):(e.a[t].v&&e.a[t].Kc?(I=e.a[t].r2,F=e.a[t].i2,Z=7>Z?8:11):(F=e.a[t].i,Z=4>F?7>Z?8:11:7>Z?7:10),z=e.a[I],4>F?0==F?(e.z[0]=z.ec,e.z[1]=z.Yb,e.z[2]=z.Xb,e.z[3]=z.nc):1==F?(e.z[0]=z.Yb,e.z[1]=z.ec,e.z[2]=z.Xb,e.z[3]=z.nc):2==F?(e.z[0]=z.Xb,e.z[1]=z.ec,e.z[2]=z.Yb,e.z[3]=z.nc):(e.z[0]=z.nc,e.z[1]=z.ec,e.z[2]=z.Yb,e.z[3]=z.Xb):(e.z[0]=F-4,e.z[1]=z.ec,e.z[2]=z.Yb,e.z[3]=z.Xb)),e.a[t].Jc=Z,e.a[t].ec=e.z[0],e.a[t].Yb=e.z[1],e.a[t].Xb=e.z[2],e.a[t].nc=e.z[3],a=e.a[t].y,_=ir(e.b,-1),v=ir(e.b,-e.z[0]-1-1),N=r&e.w,n=a+$o[e.E[(Z<<4)+N]>>>2]+Ht(It(e.A,r,ir(e.b,-2)),Z>=7,v,_),k=e.a[t+1],g=!1,k.y>n&&(k.y=n,k.r=t,k.i=-1,k.v=0,g=!0),B=a+$o[2048-e.E[(Z<<4)+N]>>>2],$=B+$o[2048-e.gb[Z]>>>2],v!=_||t>k.r&&0==k.i||(T=$+($o[e.ob[Z]>>>2]+$o[e.db[(Z<<4)+N]>>>2]),k.y>=T&&(k.y=T,k.r=t,k.i=0,k.v=0,g=!0)),R=ar(e.b)+1,R=R>4095-t?4095-t:R,M=R,!(2>M)){if(M>e.l&&(M=e.l),!g&&v!=_&&(q=V(R-1,e.l),h=sr(e.b,0,e.z[0],q),h>=2)){for(Y=Dr(Z),x=r+1&e.w,y=n+$o[2048-e.E[(Y<<4)+x]>>>2]+$o[2048-e.gb[Y]>>>2],L=t+1+h;L>m;)e.a[++m].y=268435455;i=y+(j=zt(e.k,h-2,x),j+ut(e,0,Y,x)),E=e.a[L],E.y>i&&(E.y=i,E.r=t+1,E.i=0,E.v=1,E.Kc=0)}for(W=2,O=0;4>O;++O)if(l=sr(e.b,-1,e.z[O],M),!(2>l)){P=l;do{for(;t+l>m;)e.a[++m].y=268435455;i=$+(J=zt(e.k,l-2,N),J+ut(e,O,Z,N)),E=e.a[t+l],E.y>i&&(E.y=i,E.r=t,E.i=O,E.v=0)}while(--l>=2);if(l=P,0==O&&(W=l+1),R>l&&(q=V(R-1-l,e.l),h=sr(e.b,l,e.z[O],q),h>=2)){for(Y=7>Z?8:11,x=r+l&e.w,o=$+(K=zt(e.k,l-2,N),K+ut(e,O,Z,N))+$o[e.E[(Y<<4)+x]>>>2]+Ht(It(e.A,r+l,ir(e.b,l-1-1)),!0,ir(e.b,l-1-(e.z[O]+1)),ir(e.b,l-1)),Y=Dr(Y),x=r+l+1&e.w,w=o+$o[2048-e.E[(Y<<4)+x]>>>2],y=w+$o[2048-e.gb[Y]>>>2],L=l+1+h;t+L>m;)e.a[++m].y=268435455;i=y+(Q=zt(e.k,h-2,x),Q+ut(e,0,Y,x)),E=e.a[t+L],E.y>i&&(E.y=i,E.r=t+l+1,E.i=0,E.v=1,E.Kc=1,E.r2=t,E.i2=O)}}if(S>M){for(S=M,C=0;S>e.q[C];C+=2);e.q[C]=S,C+=2}if(S>=W){for(b=B+$o[e.gb[Z]>>>2];t+S>m;)e.a[++m].y=268435455;for(D=0;W>e.q[D];)D+=2;for(l=W;;++l)if(s=e.q[D+1],i=b+ct(e,s,l,N),E=e.a[t+l],E.y>i&&(E.y=i,E.r=t,E.i=s+4,E.v=0),l==e.q[D]){if(R>l&&(q=V(R-1-l,e.l),h=sr(e.b,l,s,q),h>=2)){for(Y=7>Z?7:10,x=r+l&e.w,o=i+$o[e.E[(Y<<4)+x]>>>2]+Ht(It(e.A,r+l,ir(e.b,l-1-1)),!0,ir(e.b,l-(s+1)-1),ir(e.b,l-1)),Y=Dr(Y),x=r+l+1&e.w,w=o+$o[2048-e.E[(Y<<4)+x]>>>2],y=w+$o[2048-e.gb[Y]>>>2],L=l+1+h;t+L>m;)e.a[++m].y=268435455;i=y+(U=zt(e.k,h-2,x),U+ut(e,0,Y,x)),E=e.a[t+L],E.y>i&&(E.y=i,E.r=t+l+1,E.i=0,E.v=1,E.Kc=1,E.r2=t,E.i2=s+4)}if(D+=2,D==C)break}}}}}function ct(e,r,t,n){var o,i;return o=Cr(t),i=128>r?e.ub[128*o+r]:e.V[(o<<6)+yt(r)]+e.uc[15&r],i+zt(e.cb,t-2,n)}function ut(e,r,t,n){var o;return 0==r?(nn(),o=$o[e.ob[t]>>>2],o+=$o[2048-e.db[(t<<4)+n]>>>2]):(nn(),o=$o[2048-e.ob[t]>>>2],1==r?o+=$o[e.Zb[t]>>>2]:(o+=$o[2048-e.Zb[t]>>>2],o+=fn(e.Gc[t],r-2))),o}function ft(e,r,t){return nn(),$o[e.ob[r]>>>2]+$o[e.db[(r<<4)+t]>>>2]}function mt(e){var r;for(rt(e),cn(e.d),mn(e.E),mn(e.db),mn(e.gb),mn(e.ob),mn(e.Zb),mn(e.Gc),mn(e.ac),Nt(e.A),r=0;4>r;++r)tn(e.O[r].I);Rt(e.cb,1<<e.K),Rt(e.k,1<<e.K),tn(e.ab.I),e.X=!1,e.Y=0,e.o=0,e.s=0}function dt(e,r){r>0&&(Br(e.b,r),e.s+=r)}function pt(e){var r;return r=0,e.G=pr(e.b,e.q),e.G>0&&(r=e.q[e.G-2],r==e.l&&(r+=sr(e.b,r-1,e.q[e.G-1],273-r))),++e.s,r}function lt(e){e.b&&e._&&(e.b.Vb=null,e._=!1)}function ht(e){lt(e),e.d.Mb=null}function Pt(e,r){var t;if(1>r||r>536870912)return!1;for(e.P=r,t=0;r>1<<t;++t);return e.Jb=2*t,!0}function vt(e,r,t,n){return 0>t||t>4||0>r||r>8||0>n||n>4?!1:(e.N=t,e.Q=r,e.K=n,e.w=(1<<e.K)-1,!0)}function Bt(e,r){var t;return 0>r||r>2?!1:(t=e.Z,e.Z=r,e.b&&t!=e.Z&&(e.eb=-1,e.b=null),!0)}function St(e,r){return 5>r||r>273?!1:(e.l=r,!0)}function gt(e,r){var t;for(e.qc[0]=9*(5*e.K+e.N)+e.Q<<24>>24,t=0;4>t;++t)e.qc[1+t]=e.P>>8*t<<24>>24;G(r,e.qc,0,5)}function wt(e,r){var t;e.Rc&&(on(e.d,e.E,(e.n<<4)+r,1),on(e.d,e.gb,e.n,0),e.n=7>e.n?7:10,Dt(e.cb,e.d,0,r),t=Cr(2),Vt(e.O[t],e.d,63),sn(e.d,67108863,26),Jt(e.ab,e.d,15))}function kt(e){return 2048>e?Lo[e]:2097152>e?Lo[e>>10]+20:Lo[e>>20]+40}function yt(e){return 131072>e?Lo[e>>6]+12:134217728>e?Lo[e>>16]+32:Lo[e>>26]+52}function bt(e,r,t,n){8>t?(on(r,e.kb,0,0),Vt(e.gc[n],r,t)):(t-=8,on(r,e.kb,0,1),8>t?(on(r,e.kb,1,0),Vt(e.fc[n],r,t)):(on(r,e.kb,1,1),Vt(e.sc,r,t-8)))}function Mt(e){var r;for(e.kb=a(Wo,0,-1,2,1),e.gc=a(Vo,0,8,16,0),e.fc=a(Vo,0,8,16,0),e.sc=qt(new Ao,8),r=0;16>r;++r)e.gc[r]=qt(new Ao,3),e.fc[r]=qt(new Ao,3);return e}function Rt(e,r){var t;for(mn(e.kb),t=0;r>t;++t)tn(e.gc[t].I),tn(e.fc[t].I);tn(e.sc.I)}function Ct(e,r,t,n,o){var i,s,a,_,c;for(nn(),i=$o[e.kb[0]>>>2],s=$o[2048-e.kb[0]>>>2],a=s+$o[e.kb[1]>>>2],_=s+$o[2048-e.kb[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;n[o+c]=i+jt(e.gc[r],c)}for(;16>c;++c){if(c>=t)return;
n[o+c]=a+jt(e.fc[r],c-8)}for(;t>c;++c)n[o+c]=_+jt(e.sc,c-8-8)}function Dt(e,r,t,n){bt(e,r,t,n),0==--e.xc[n]&&(Ct(e,n,e.mb,e.Nc,272*n),e.xc[n]=e.mb)}function Lt(e){return Mt(e),e.Nc=a(Yo,0,-1,4352,1),e.xc=a(Yo,0,-1,16,1),e}function zt(e,r,t){return e.Nc[272*t+r]}function Et(e,r){var t;for(t=0;r>t;++t)Ct(e,t,e.mb,e.Nc,272*t),e.xc[t]=e.mb}function Ft(e,r,t){var n,o;if(null==e.$||e.t!=t||e.F!=r)for(e.F=r,e.Nb=(1<<r)-1,e.t=t,o=1<<e.t+e.F,e.$=a(Ko,0,5,o,0),n=0;o>n;++n)e.$[n]=Ot(new Io)}function It(e,r,t){return e.$[((r&e.Nb)<<e.t)+((255&t)>>>8-e.t)]}function Nt(e){var r,t;for(t=1<<e.t+e.F,r=0;t>r;++r)mn(e.$[r].Bb)}function xt(e,r,t){var n,o,i;for(o=1,i=7;i>=0;--i)n=t>>i&1,on(r,e.Bb,o,n),o=o<<1|n}function At(e,r,t,n){var o,i,s,a,_,c;for(i=1,_=!0,s=7;s>=0;--s)o=n>>s&1,c=i,_&&(a=t>>s&1,c+=1+a<<8,_=a==o),on(r,e.Bb,c,o),i=i<<1|o}function Ot(e){return e.Bb=a(Wo,0,-1,768,1),e}function Ht(e,r,t,n){var o,i,s,a,_;if(_=0,i=1,s=7,r)for(;s>=0;--s)if(a=t>>s&1,o=n>>s&1,_+=fn(e.Bb[(1+a<<8)+i],o),i=i<<1|o,a!=o){--s;break}for(;s>=0;--s)o=n>>s&1,_+=fn(e.Bb[i],o),i=i<<1|o;return _}function $t(e){e.i=-1,e.v=0}function Gt(e){e.i=0,e.v=0}function Tt(e,r){return e.B=r,e.I=a(Wo,0,-1,1<<r,1),e}function Wt(e,r){var t,n;for(n=1,t=e.B;0!=t;--t)n=(n<<1)+Xt(r,e.I,n);return n-(1<<e.B)}function Zt(e,r){var t,n,o,i;for(o=1,i=0,n=0;e.B>n;++n)t=Xt(r,e.I,o),o<<=1,o+=t,i|=t<<n;return i}function Yt(e,r,t,n){var o,i,s,a;for(s=1,a=0,i=0;n>i;++i)o=Xt(t,e,r+s),s<<=1,s+=o,a|=o<<i;return a}function qt(e,r){return e.B=r,e.I=a(Wo,0,-1,1<<r,1),e}function Vt(e,r,t){var n,o,i;for(i=1,o=e.B;0!=o;)--o,n=t>>>o&1,on(r,e.I,i,n),i=i<<1|n}function jt(e,r){var t,n,o,i;for(i=0,o=1,n=e.B;0!=n;)--n,t=r>>>n&1,i+=fn(e.I[o],t),o=(o<<1)+t;return i}function Jt(e,r,t){var n,o,i;for(i=1,o=0;e.B>o;++o)n=1&t,on(r,e.I,i,n),i=i<<1|n,t>>=1}function Kt(e,r){var t,n,o,i;for(i=0,o=1,n=e.B;0!=n;--n)t=1&r,r>>>=1,i+=fn(e.I[o],t),o=o<<1|t;return i}function Qt(e,r,t,n,o){var i,s,a;for(a=1,s=0;n>s;++s)i=1&o,on(t,e,r+a,i),a=a<<1|i,o>>=1}function Ut(e,r,t,n){var o,i,s,a;for(a=0,s=1,i=t;0!=i;--i)o=1&n,n>>>=1,nn(),a+=$o[(2047&(e[r+s]-o^-o))>>>2],s=s<<1|o;return a}function Xt(e,r,t){var n,o;return o=r[t],n=(e.D>>>11)*o,(-2147483648^n)>(-2147483648^e.Ib)?(e.D=n,r[t]=o+(2048-o>>>5)<<16>>16,0==(-16777216&e.D)&&(e.Ib=e.Ib<<8|N(e.Mb),e.D<<=8),0):(e.D-=n,e.Ib-=n,r[t]=o-(o>>>5)<<16>>16,0==(-16777216&e.D)&&(e.Ib=e.Ib<<8|N(e.Mb),e.D<<=8),1)}function en(e,r){var t,n,o;for(n=0,t=r;0!=t;--t)e.D>>>=1,o=e.Ib-e.D>>>31,e.Ib-=e.D&o-1,n=n<<1|1-o,0==(-16777216&e.D)&&(e.Ib=e.Ib<<8|N(e.Mb),e.D<<=8);return n}function rn(e){var r;for(e.Ib=0,e.D=-1,r=0;5>r;++r)e.Ib=e.Ib<<8|N(e.Mb)}function tn(e){var r;for(r=0;e.length>r;++r)e[r]=1024}function nn(){nn=Sn;var e,r,t,n;for($o=a(Yo,0,-1,512,1),r=8;r>=0;--r)for(n=1<<9-r-1,e=1<<9-r,t=n;e>t;++t)$o[t]=(r<<6)+(e-t<<6>>>9-r-1)}function on(e,r,t,n){var o,i;i=r[t],o=(e.D>>>11)*i,0==n?(e.D=o,r[t]=i+(2048-i>>>5)<<16>>16):(e.Fc=l(e.Fc,h(g(o),xn)),e.D-=o,r[t]=i-(i>>>5)<<16>>16),0==(-16777216&e.D)&&(e.D<<=8,un(e))}function sn(e,r,t){var n;for(n=t-1;n>=0;--n)e.D>>>=1,1==(r>>>n&1)&&(e.Fc=l(e.Fc,g(e.D))),0==(-16777216&e.D)&&(e.D<<=8,un(e))}function an(e){var r;for(r=0;5>r;++r)un(e)}function _n(e){return l(l(g(e.Fb),e.kc),En)}function cn(e){e.kc=Ln,e.Fc=Ln,e.D=-1,e.Fb=1,e.Sc=0}function un(e){var r,t;if(r=k(D(e.Fc,32)),0!=r||P(e.Fc,Nn)<0){e.kc=l(e.kc,g(e.Fb)),t=e.Sc;do $(e.Mb,t+r),t=255;while(0!=--e.Fb);e.Sc=k(e.Fc)>>>24}++e.Fb,e.Fc=R(h(e.Fc,In),8)}function fn(e,r){return nn(),$o[(2047&(e-r^-r))>>>2]}function mn(e){nn();var r;for(r=0;e.length>r;++r)e[r]=1024}function dn(e){var r;for(r=e.length-1;r>=0;r-=1)0>e[r]&&(e[r]=256+e[r]);return e}function pn(e){var r,t,n,s,a;for(r=K(new lo),t=0;e.length>t;++t)if(n=255&e[t],0==(128&n)){if(0==n)return dn(e);o(r.Db,String.fromCharCode(65535&n))}else if(192==(224&n)){if(t+1>=e.length)return dn(e);if(s=255&e[++t],128!=(192&s))return dn(e);o(r.Db,String.fromCharCode((31&n)<<6&65535|63&s))}else{if(224!=(240&n))return dn(e);if(t+2>=e.length)return dn(e);if(s=255&e[++t],128!=(192&s))return dn(e);if(a=255&e[++t],128!=(192&a))return dn(e);o(r.Db,String.fromCharCode(65535&((15&n)<<12|(63&s)<<6|63&a)))}return i(r.Db)}function ln(e){var r,t,n,o,i,s,_;for(_=e.length,s=a(Zo,0,-1,_,1),J(e,0,_,s,0),t=s,o=0,i=0;e.length>i;++i)r=t[i],r>=1&&127>=r?++o:o+=0==r||r>=128&&2047>=r?2:3;for(n=a(To,0,-1,o,1),o=0,i=0;e.length>i;++i)r=t[i],r>=1&&127>=r?n[o++]=r<<24>>24:0==r||r>=128&&2047>=r?(n[o++]=(192|r>>6&31)<<24>>24,n[o++]=(128|63&r)<<24>>24):(n[o++]=(224|r>>12&15)<<24>>24,n[o++]=(128|r>>6&63)<<24>>24,n[o++]=(128|63&r)<<24>>24);return n}function hn(e){return e}function Pn(e){return e[1]+e[0]}function vn(){function e(){var _;for(n=(new Date).getTime();X(a.c);)if(r=Pn(a.c.Cc._b)/Pn(a.c.vb),(new Date).getTime()-n>200)return s?s(r):void 0!==o&&t(r,o),bn(e,0),!1;s?s(1):void 0!==o&&t(1,o),_=H(a.c.Ac).slice(0),i?i(_):void 0!==o&&postMessage({action:wn,callback_num:o,result:_})}var r,n,o,i,s,a=hn(new Go),_=arguments[0],c=arguments[1];"function"==typeof arguments[2]?(i=arguments[2],"function"==typeof arguments[3]&&(s=arguments[3])):o=arguments[2],a.Xc=ei(c),a.c=rr(new Po,ln(_),a.Xc),s?s(0):void 0!==o&&t(0,o),bn(e,1)}function Bn(){function e(){var n;for(o=(new Date).getTime();X(u.d);)if((new Date).getTime()-o>200)return c&&(r=Pn(u.d.Cc.wb.g)/Pn(u.d.vb),a?a(r):void 0!==i&&t(r,i)),bn(e,0),!1;c&&(a?a(1):void 0!==i&&t(1,i)),n=pn(H(u.d.Ac)),s?s(n):void 0!==i&&postMessage({action:kn,callback_num:i,result:"string"!=typeof n?n.slice(0):n})}var r,n,o,i,s,a,c,u=hn(new Go),f=arguments[0];"function"==typeof arguments[1]?(s=arguments[1],"function"==typeof arguments[2]&&(a=arguments[2])):i=arguments[1],n=_(To,0,-1,f),u.d=nr(new Bo,n),c=Pn(u.d.vb)>-1,a?a(c?0:-1):void 0!==i&&t(c?0:-1,i),bn(e,0)}function Sn(){}var gn,wn=1,kn=2,yn=3,bn="function"==typeof setImmediate?setImmediate:setTimeout,Mn=function(){return{typeName:this.lb+""}},Rn=4294967296,Cn=[0,-0x8000000000000000],Dn=[4294967295,-Rn],Ln=[0,0],zn=[1,0],En=[4,0],Fn=[4096,0],In=[16777215,0],Nn=[4278190080,0],xn=[4294967295,0],An=[16777216,0],On=[4294967295,0x7fffffff00000000],Hn=r(1,{});gn.mc=Sn;var $n=r(3),Gn=r(4,new $n),Tn=r(5,new Gn),Wn=r(0);gn.hc=function(){return this.Ec},gn.length=0,gn.bc=0;var Zn,Yn,qn,Vn,jn,Jn,Kn,Qn,Un,Xn,eo,ro=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1,10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1,11:1},{2:1},{2:1},{2:1},{4:1},{5:1},{6:1},{7:1},{8:1},{9:1}],to=r(0),no=r(0,new to);gn.fb=0,gn.Uc=0;var oo=r(0),io=r(0,new oo);gn.fb=0;var so=r(7),ao=r(9,new Tn),_o=r(0),co=r(12,new Tn),uo=r(13,new Tn),fo=r(14,new Tn),mo=r(15,new Tn),po=r(16,new Tn);gn=String.prototype,gn.hc=Mn,gn.lb=2;var lo=r(0),ho=r(0),Po=r(0,new ho),vo=r(0);gn.vb=Ln;var Bo=r(0,new vo),So=r(0);gn.Cb=0,gn.e=0,gn.Lb=0,gn.ic=0,gn.C=0,gn.p=0,gn.xb=0,gn.h=0;var go=r(0,new So);gn.ib=!0,gn.vc=255,gn.j=0,gn.m=0,gn.$b=0,gn.M=66560,gn.hb=4,gn.u=0;var wo,ko=r(0);gn.p=0,gn.h=0,gn.L=0;var yo=r(0),bo=r(0);gn.rb=-1,gn.T=-1,gn.oc=0,gn.g=Ln,gn.Mc=Ln,gn.dc=0,gn.nb=0,gn.Oc=0,gn.Pc=0,gn.Vc=0,gn.S=0;var Mo=r(0);gn.U=0;var Ro=r(0);gn.F=0,gn.t=0,gn.Nb=0;var Co=r(17),Do=r(0);gn.s=0,gn.qb=0,gn.P=4194304,gn.eb=-1,gn.Jb=44,gn.Hb=0,gn.Z=1,gn.pb=0,gn.G=0,gn.l=32,gn.Pb=-1,gn.Q=3,gn.N=0,gn.o=0,gn.Y=0,gn.K=2,gn.w=3,gn.J=0,gn.n=0,gn.yb=0,gn.g=Ln;var Lo,zo=r(0),Eo=r(0,new zo);gn.mb=0;var Fo=r(0);gn.F=0,gn.t=0,gn.Nb=0;var Io=r(18),No=r(19);gn.i=0,gn.i2=0,gn.ec=0,gn.Yb=0,gn.Xb=0,gn.nc=0,gn.r=0,gn.r2=0,gn.y=0,gn.Jc=0;var xo=r(20);gn.B=0;var Ao=r(21);gn.B=0;var Oo=r(0);gn.Ib=0,gn.D=0;var Ho=r(0);gn.Fc=Ln,gn.D=0,gn.Sc=0,gn.Fb=0,gn.kc=Ln;var $o,Go=r(0),To=Z("","[B"),Wo=Z("","[S"),Zo=Z("","[C"),Yo=Z("","[I"),qo=Z("[Ll.","o"),Vo=Z("[Ll","be"),jo=Z("","[J"),Jo=Z("","[Z"),Ko=Z("[Ll.","e"),Qo=Z("[Ll","bd"),Uo=Z("[Ll.","d"),Xo=Z("","[[D"),ei=function(){function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}var r=[{dicSize:16,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:19,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:21,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:22,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:23,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:24,fb:255,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:25,fb:255,matchFinder:1,lc:3,lp:0,pb:2}];return function(t){return e(t)?1>t?t=1:t>9&&(t=9):t=1,r[t-1]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r.Db&&(r.Db.action===kn?e.decompress(r.Db.Db,r.Db.callback_num):r.Db.action===wn&&e.compress(r.Db.Db,r.Db.Xc,r.Db.callback_num))}}(),{compress:vn,decompress:Bn}}();this.LZMA=e,this.LZMA_WORKER=e;