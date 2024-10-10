((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_16",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,G,H,A={
bcf(d){return new A.XG(d,null,null)},
XG:function XG(d,e,f){this.a=d
this.b=e
this.c=f},
xq(d,e,f,g){var w,v
if(x.ak.b(d))w=C.bO(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:C.fp(x.R.a(d),!0,x.p)
v=new A.aCy(w,g,g,e)
v.e=f==null?w.length:f
return v},
aCz:function aCz(){},
aCy:function aCy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
aIA:function aIA(){},
aIz:function aIz(d){this.a=0
this.c=d},
b8d:function b8d(){},
a2D(d){var w=new A.aBi()
w.apM(d)
return w},
aBi:function aBi(){this.a=$
this.b=0
this.c=2147483647},
aCm:function aCm(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
aUa:function aUa(){},
aU9:function aU9(){},
bxM(d,e){var w,v,u,t,s,r,q
if(e<1||e>9)throw C.c(new A.Yg("BlurHash components must be between 1 and 9."))
w=d.aOC(B.C)
v=J.mI(e,x.dL)
for(u=x.M,t=0;t<e;++t)v[t]=C.aT(4,new A.lh(0,0,0),!1,u)
for(s=0;s<e;++s)for(u=s===0,r=0;r<4;++r){q=r===0&&u?1:2
v[s][r]=A.bMs(w,r,s,q)}return new A.ash(A.bLf(v))},
bLf(d){var w,v,u,t,s=d[0].length,r=d.length,q=C.aT(s*r,new A.lh(0,0,0),!1,x.M)
for(w=0,v=0;v<r;++v)for(u=0;u<s;++u,w=t){t=w+1
q[w]=d[v][u]}return A.bLg(q,s,r)},
bLg(d,e,f){var w,v,u,t,s,r,q,p,o=D.b.ga1(d),n=C.e1(d,1,null,C.U(d).c).eH(0),m=""+A.apm(e-1+(f-1)*9,1)
if(n.length!==0){w=Math.max(0,Math.min(82,D.d.fj(new C.V(n,A.bNQ(),C.U(n).h("V<1,G>")).h2(0,D.hT)*166-0.5)))
v=(w+1)/166
m+=A.apm(w,1)}else{m+=A.apm(0,1)
v=1}m+=A.apm((A.bgz(o.a)<<16>>>0)+(A.bgz(o.b)<<8>>>0)+A.bgz(o.c),4)
for(u=n.length,t=0;t<n.length;n.length===u||(0,C.H)(n),++t,m=r){s=n[t]
r=s.a/v
q=D.d.fj(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.ik(r)*9+9.5)))
r=s.b/v
p=D.d.fj(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.ik(r)*9+9.5)))
r=s.c/v
r=m+A.apm(q*19*19+p*19+D.d.fj(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.ik(r)*9+9.5))),2)}return m.charCodeAt(0)==0?m:m},
bMo(d){return Math.max(Math.abs(d.a),Math.max(Math.abs(d.b),Math.abs(d.c)))},
bMs(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=0,l=0,k=0
if(d.gvv()>=3)for(w=d.a,w=w.gR(w),v=3.141592653589793*f,u=3.141592653589793*e;w.p();){t=w.gK()
s=t.gjc()
r=d.a
r=r==null?n:r.a
if(r==null)r=0
r=Math.cos(u*s/r)
s=t.gjN()
q=d.a
q=q==null?n:q.b
if(q==null)q=0
p=g*r*Math.cos(v*s/q)
m+=p*A.bbk(C.aE(t.gaw()))
l+=p*A.bbk(C.aE(t.gaJ()))
k+=p*A.bbk(C.aE(t.gaP()))}else for(w=d.a,w=w.gR(w),v=3.141592653589793*f,u=3.141592653589793*e;w.p();){t=w.gK()
s=t.gjc()
r=d.a
r=r==null?n:r.a
if(r==null)r=0
r=Math.cos(u*s/r)
s=t.gjN()
q=d.a
q=q==null?n:q.b
if(q==null)q=0
q=g*r*Math.cos(v*s/q)*A.bbk(C.aE(t.gaw()))
m+=q
l+=q
k+=q}o=1/(d.gdX()*d.gbd())
return new A.lh(m*o,l*o,k*o)},
ash:function ash(d){this.a=d},
Yg:function Yg(d){this.a=d},
bbk(d){var w=d/255
if(w<=0.04045)return w/12.92
return Math.pow((w+0.055)/1.055,2.4)},
bgz(d){var w=D.d.aZ(d,0,1)
if(w<=0.0031308)return D.d.C(w*12.92*255+0.5)
return D.d.C((1.055*Math.pow(w,0.4166666666666667)-0.055)*255+0.5)},
lh:function lh(d,e,f){this.a=d
this.b=e
this.c=f},
Ia:function Ia(d,e){this.c=d
this.a=e},
aeI:function aeI(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=","
_.y=!1
_.c=_.a=null},
aVP:function aVP(d){this.a=d},
aVM:function aVM(d){this.a=d},
aVN:function aVN(){},
aVO:function aVO(d){this.a=d},
aVB:function aVB(d){this.a=d},
aVF:function aVF(d){this.a=d},
aVE:function aVE(d,e){this.a=d
this.b=e},
aVD:function aVD(d){this.a=d},
aVC:function aVC(d){this.a=d},
aVG:function aVG(){},
aVH:function aVH(){},
aVI:function aVI(d){this.a=d},
aVK:function aVK(d){this.a=d},
aVL:function aVL(){},
aVJ:function aVJ(d){this.a=d},
kr:function kr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boY(d){var w=null
return new A.aYI(d,w,w,w,w,w,w,w,w,w,w,w,w,w)},
axW:function axW(){},
Kc:function Kc(d,e,f){this.d=d
this.r=e
this.a=f},
S8:function S8(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$
_.ay=!1
_.ch=$
_.CW=null
_.eu$=i
_.bS$=j
_.c=_.a=null},
aYL:function aYL(d){this.a=d},
aYK:function aYK(d){this.a=d},
aYJ:function aYJ(){},
aYM:function aYM(d,e,f){this.a=d
this.b=e
this.c=f},
aYI:function aYI(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.at=d
_.ay=_.ax=$
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q},
W9:function W9(){},
a3J:function a3J(d,e){this.a=d
this.b=e},
bxL(){return new A.w3(null)},
w3:function w3(d){this.a=d},
bQi(d){return A.ba_(new A.baz(d,null),x.em)},
ba_(d,e){return A.bNm(d,e,e)},
bNm(d,e,f){var w=0,v=C.v(f),u,t=2,s,r=[],q,p,o
var $async$ba_=C.q(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:p=C.bgQ()
o=p==null?new C.wa(C.aD(x.eH)):p
t=3
w=6
return C.w(d.$1(o),$async$ba_)
case 6:q=h
u=q
r=[1]
w=4
break
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
o.ao()
w=r.pop()
break
case 5:case 1:return C.t(u,v)
case 2:return C.r(s,v)}})
return C.u($async$ba_,v)},
baz:function baz(d,e){this.a=d
this.b=e},
atB:function atB(d,e){this.a=d
this.b=e},
ei:function ei(d){this.a=-1
this.b=d},
IN:function IN(d){this.a=d},
IO:function IO(d){this.a=d},
IP:function IP(d){this.a=d},
IQ:function IQ(d){this.a=d},
IR:function IR(d){this.a=d},
IS:function IS(d){this.a=d},
IU:function IU(d,e){this.a=d
this.b=e},
IV:function IV(d){this.a=d},
IW:function IW(d,e){this.a=d
this.b=e},
IX:function IX(d){this.a=d},
IY:function IY(d,e){this.a=d
this.b=e},
t2:function t2(d){this.a=d},
Zc:function Zc(d){this.a=d},
IT:function IT(d){this.a=d},
apj(d,e,f){var w
if(e===f)return d
switch(e.a){case 0:if(d===0)w=0
else{w=B.Ht.i(0,f)
w.toString}return w
case 1:switch(f.a){case 0:return d===0?0:1
case 1:return d
case 2:return d*5
case 3:return d*75
case 4:return d*21845
case 5:return d*1431655765
case 6:return d*42
case 7:return d*10922
case 8:return d*715827882
case 9:case 10:case 11:return d/3}break
case 2:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.H(C.aE(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.H(C.aE(d),6)
case 2:return D.c.H(C.aE(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.H(C.aE(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.H(C.aE(d),14)
case 2:return D.c.H(C.aE(d),12)
case 3:return D.c.H(C.aE(d),8)
case 4:return d
case 5:return C.aE(d)<<8>>>0
case 6:return D.c.H(C.aE(d),9)
case 7:return D.c.H(C.aE(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.H(C.aE(d),30)
case 2:return D.c.H(C.aE(d),28)
case 3:return D.c.H(C.aE(d),24)
case 4:return D.c.H(C.aE(d),16)
case 5:return d
case 6:return D.c.H(C.aE(d),25)
case 7:return D.c.H(C.aE(d),17)
case 8:return D.c.H(C.aE(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.H(C.aE(d),5)
case 2:return d<=0?0:D.c.H(C.aE(d),3)
case 3:return d<=0?0:C.aE(d)<<1>>>0
case 4:return d<=0?0:C.aE(d)*516
case 5:return d<=0?0:C.aE(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.H(C.aE(d),15)
case 2:return d<=0?0:D.c.H(C.aE(d),11)
case 3:return d<=0?0:D.c.H(C.aE(d),7)
case 4:return d<=0?0:C.aE(d)<<1>>>0
case 5:return d<=0?0:C.aE(d)*131076
case 6:return D.c.H(C.aE(d),8)
case 7:return d
case 8:return C.aE(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.H(C.aE(d),29)
case 2:return d<=0?0:D.c.H(C.aE(d),27)
case 3:return d<=0?0:D.c.H(C.aE(d),23)
case 4:return d<=0?0:D.c.H(C.aE(d),16)
case 5:return d<=0?0:C.aE(d)<<1>>>0
case 6:return D.c.H(C.aE(d),24)
case 7:return D.c.H(C.aE(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.C(D.d.aZ(d,0,1)*3)
case 2:return D.d.C(D.d.aZ(d,0,1)*15)
case 3:return D.d.C(D.d.aZ(d,0,1)*255)
case 4:return D.d.C(D.d.aZ(d,0,1)*65535)
case 5:return D.d.C(D.d.aZ(d,0,1)*4294967295)
case 6:return D.d.C(d<0?D.d.aZ(d,-1,1)*128:D.d.aZ(d,-1,1)*127)
case 7:return D.d.C(d<0?D.d.aZ(d,-1,1)*32768:D.d.aZ(d,-1,1)*32767)
case 8:return D.d.C(d<0?D.d.aZ(d,-1,1)*2147483648:D.d.aZ(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
j7:function j7(d,e){this.a=d
this.b=e},
Ye:function Ye(d,e){this.a=d
this.b=e},
axV(d){var w=new A.Kb(C.x(x.N,x.P))
w.apN(d)
return w},
bk2(d){var w=new A.Kb(C.x(x.N,x.P))
w.kh(d)
return w},
Kb:function Kb(d){this.a=d},
agK:function agK(d,e){this.a=d
this.b=e},
a5(d,e,f){return new A.a1r(d,e)},
a1r:function a1r(d,e){this.a=d
this.b=e},
ts:function ts(d){this.a=d},
aBH:function aBH(d){this.a=d},
bkI(d){var w=new A.ob(C.x(x.p,x.r),new A.ts(C.x(x.N,x.P)))
w.aOH(d)
return w},
ob:function ob(d,e){this.a=d
this.b=e},
aBI:function aBI(d){this.a=d},
aBJ:function aBJ(d){this.a=d},
bkP(d,e){var w=new A.xi(new Uint16Array(e))
w.apS(d,e)
return w},
bkK(d,e){var w=new A.xd(new Uint32Array(e))
w.apP(d,e)
return w},
bkL(d,e){var w,v=J.mI(e,x.i)
for(w=0;w<e;++w)v[w]=new A.DS(d.M(),d.M())
return new A.xe(v)},
bkO(d,e){var w=new A.xh(new Int16Array(e))
w.apR(d,e)
return w},
bkM(d,e){var w=new A.xf(new Int32Array(e))
w.apQ(d,e)
return w},
bkN(d,e){var w,v,u,t,s=J.mI(e,x.i)
for(w=0;w<e;++w){v=d.M()
u=$.e5()
u[0]=v
v=$.hu()
t=v[0]
u[0]=d.M()
s[w]=new A.DS(t,v[0])}return new A.xg(s)},
bkQ(d,e){var w=new A.Cz(new Float32Array(e))
w.apT(d,e)
return w},
bkJ(d,e){var w=new A.Cy(new Float64Array(e))
w.apO(d,e)
return w},
iw:function iw(d,e){this.a=d
this.b=e},
fF:function fF(){},
pU:function pU(d){this.a=d},
xc:function xc(d){this.a=d},
xi:function xi(d){this.a=d},
xd:function xd(d){this.a=d},
xe:function xe(d){this.a=d},
tt:function tt(d){this.a=d},
xh:function xh(d){this.a=d},
xf:function xf(d){this.a=d},
xg:function xg(d){this.a=d},
Cz:function Cz(d){this.a=d},
Cy:function Cy(d){this.a=d},
CA:function CA(d){this.a=d},
bio(d){var w,v,u=new A.aso()
if(!A.bci(d))C.P(A.aZ("Not a bitmap file."))
d.d+=2
w=d.M()
v=$.e5()
v[0]=w
w=$.hu()
d.d+=4
v[0]=d.M()
u.b=w[0]
return u},
bci(d){if(d.c-d.d<2)return!1
return A.b7(d,null,0).X()===19778},
bxN(d,e){var w,v,u,t,s=e==null?A.bio(d):e,r=d.d,q=d.M(),p=d.M(),o=$.e5()
o[0]=p
p=$.hu()
w=p[0]
o[0]=d.M()
p=p[0]
v=d.X()
u=d.X()
t=B.y0[d.M()]
d.M()
o[0]=d.M()
o[0]=d.M()
o=d.M()
d.M()
r=new A.w4(s,w,p,q,v,u,t,o,r)
r.Zc(d,e)
return r},
hU:function hU(d,e){this.a=d
this.b=e},
aso:function aso(){this.b=$},
w4:function w4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
Yk:function Yk(d){this.a=$
this.b=null
this.c=d},
asn:function asn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avz:function avz(d){this.a=$
this.b=null
this.c=d},
ave:function ave(){},
avf:function avf(){},
a1t:function a1t(d,e){this.a=d
this.c=e},
a37:function a37(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Ce:function Ce(d,e){this.a=d
this.b=e},
wO:function wO(d,e){this.a=d
this.b=e},
a1u:function a1u(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
bk3(d,e,f,g){var w,v
switch(d.a){case 1:return new A.aCG(f,e)
case 2:return new A.a39(f,g==null?1:g,e)
case 3:return new A.a39(f,g==null?16:g,e)
case 4:w=g==null?32:g
v=new A.aCE(f,w,e)
v.apY(e,f,w)
return v
case 5:return new A.aCF(f,g==null?16:g,e)
case 6:return new A.a37(f,g==null?32:g,!1,e)
case 7:return new A.a37(f,g==null?32:g,!0,e)
default:throw C.c(A.aZ("Invalid compression type: "+d.j(0)))}},
mz:function mz(d,e){this.a=d
this.b=e},
axY:function axY(){},
aCD:function aCD(){},
bAj(d,e,f,g){var w,v,u,t,s,r,q,p
if(e===0){if(g!==0)throw C.c(A.aZ("Incomplete huffman data"))
return}w=d.d
v=d.M()
u=d.M()
d.d+=4
t=d.M()
s=!0
if(v<65537)s=u>=65537
if(s)throw C.c(A.aZ("Invalid huffman table size"))
d.d+=4
r=C.aT(65537,0,!1,x.p)
q=J.hf(16384,x._)
for(p=0;p<16384;++p)q[p]=new A.a1v()
A.bAk(d,e-20,v,u,r)
if(t>8*(e-(d.d-w)))throw C.c(A.aZ("Error in header for Huffman-encoded data (invalid number of bits)."))
A.bAg(r,v,u,q)
A.bAi(r,q,d,t,u,g,f)},
bAi(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o="Error in Huffman-encoded data (invalid code).",n=C.a([0,0],x.t),m=f.d+D.c.bg(g+7,8)
for(w=0;f.d<m;){A.bd2(n,f)
for(;v=n[1],v>=14;){u=e[D.c.kK(n[0],v-14)&16383]
t=u.a
if(t!==0){n[1]=v-t
w=A.bd3(u.b,h,n,f,j,w,i)}else{if(u.c==null)throw C.c(A.aZ(o))
for(s=0;s<u.b;++s){r=d[u.c[s]]&63
while(!0){v=n[1]
if(!(v<r&&f.d<m))break
A.bd2(n,f)}if(v>=r){t=u.c
v-=r
if(d[t[s]]>>>6===(D.c.kK(n[0],v)&D.c.cN(1,r)-1)>>>0){n[1]=v
q=A.bd3(t[s],h,n,f,j,w,i)
w=q
break}}}if(s===u.b)throw C.c(A.aZ(o))}}}p=8-g&7
n[0]=D.c.H(n[0],p)
n[1]=n[1]-p
for(;v=n[1],v>0;){u=e[D.c.dA(n[0],14-v)&16383]
t=u.a
if(t!==0){n[1]=v-t
w=A.bd3(u.b,h,n,f,j,w,i)}else throw C.c(A.aZ(o))}if(w!==i)throw C.c(A.aZ("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
bd3(d,e,f,g,h,i,j){var w,v,u,t,s,r="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.bd2(f,g)
w=f[1]-8
f[1]=w
v=D.c.kK(f[0],w)&255
if(i+v>j)throw C.c(A.aZ(r))
u=h[i-1]
for(;t=v-1,v>0;v=t,i=s){s=i+1
h[i]=u}}else{if(i<j){s=i+1
h[i]=d}else throw C.c(A.aZ(r))
i=s}return i},
bAg(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m="Error in Huffman-encoded data (invalid code table entry)."
for(w=x.t,v=x.p;e<=f;++e){u=d[e]
t=u>>>6
s=u&63
if(D.c.fb(t,s)!==0)throw C.c(A.aZ(m))
if(s>14){r=g[D.c.dG(t,s-14)]
if(r.a!==0)throw C.c(A.aZ(m))
u=++r.b
q=r.c
if(q!=null){u=C.aT(u,0,!1,v)
r.c=u
for(p=r.b-1,o=0;o<p;++o)u[o]=q[o]}else r.c=C.a([0],w)
r.c[r.b-1]=e}else if(s!==0){u=14-s
n=D.c.dA(t,u)
for(o=D.c.dA(1,u);o>0;--o,++n){r=g[n]
if(r.a!==0||r.c!=null)throw C.c(A.aZ(m))
r.a=s
r.b=e}}}},
bAk(d,e,f,g,h){var w,v,u,t,s,r="Error in Huffman-encoded data (unexpected end of code table data).",q="Error in Huffman-encoded data (code table is longer than expected).",p=d.d,o=C.a([0,0],x.t)
for(w=g+1;f<=g;++f){if(d.d-p>e)throw C.c(A.aZ(r))
v=A.bk4(6,o,d)
h[f]=v
if(v===63){if(d.d-p>e)throw C.c(A.aZ(r))
u=A.bk4(8,o,d)+6
if(f+u>w)throw C.c(A.aZ(q))
for(;t=u-1,u!==0;u=t,f=s){s=f+1
h[f]=0}--f}else if(v>=59){u=v-59+2
if(f+u>w)throw C.c(A.aZ(q))
for(;t=u-1,u!==0;u=t,f=s){s=f+1
h[f]=0}--f}}A.bAh(h)},
bAh(d){var w,v,u,t,s,r=C.aT(59,0,!1,x.p)
for(w=0;w<65537;++w){v=d[w]
r[v]=r[v]+1}for(u=0,w=58;w>0;--w,u=t){t=u+r[w]>>>1
r[w]=u}for(w=0;w<65537;++w){s=d[w]
if(s>0){v=r[s]
r[s]=v+1
d[w]=(s|v<<6)>>>0}}},
bd2(d,e){d[0]=((d[0]<<8|e.bm())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
bk4(d,e,f){var w
for(;w=e[1],w<d;){e[0]=((e[0]<<8|J.o(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}w-=d
e[1]=w
return(D.c.kK(e[0],w)&D.c.cN(1,d)-1)>>>0},
a1v:function a1v(){this.b=this.a=0
this.c=null},
bAl(d){var w=A.by(d,!1,null,0)
if(w.M()!==20000630)return!1
if(w.bm()!==2)return!1
if((w.mU()&4294967289)>>>0!==0)return!1
return!0},
ay_:function ay_(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
bl_(d,e,f){var w=new A.a38(d,C.a([],x.Q),C.x(x.N,x.n),B.v_,e)
w.apG(d,e,f,{})
return w},
Ke:function Ke(){},
ay0:function ay0(d,e){this.a=d
this.b=e},
a38:function a38(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=0
_.e=f
_.r=$
_.x=_.w=0
_.at=$
_.ax=g
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=h
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
aCE:function aCE(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aj4:function aj4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aCF:function aCF(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aCG:function aCG(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
a39:function a39(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
axZ:function axZ(){this.a=null},
bks(d){var w=new Uint8Array(d*3)
return new A.KE(A.bB_(d),d,null,new A.or(w,d,3))},
bAZ(d){return new A.KE(d.a,d.b,d.c,A.bmg(d.d))},
bB_(d){var w
for(w=1;w<=8;++w)if(D.c.cN(1,w)>=d)return w
return 0},
KE:function KE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KF:function KF(){},
a3a:function a3a(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
a23:function a23(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
aA4:function aA4(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
bkF(d){var w,v,u,t
if(d.X()!==0)return null
w=d.X()
if(w>=3)return null
if(B.a8B[w]===B.vp)return null
v=d.X()
u=J.mI(v,x.C)
for(t=0;t<v;++t){J.o(d.a,d.d++)
J.o(d.a,d.d++)
J.o(d.a,d.d++);++d.d
d.X()
d.X()
u[t]=new A.a2F(d.M(),d.M())}return new A.aBx(v,u)},
Cv:function Cv(d,e){this.a=d
this.b=e},
aBx:function aBx(d,e){this.d=d
this.e=e},
a2F:function a2F(d,e){this.d=d
this.e=e},
aBv:function aBv(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
aBw:function aBw(){this.b=this.a=null},
Ze:function Ze(d,e,f){this.e=d
this.f=e
this.r=f},
x8:function x8(){},
x9:function x9(d){this.a=d},
KW:function KW(d){this.a=d},
aCY:function aCY(){this.d=null},
tG:function tG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
blc(){var w=C.aT(4,null,!1,x.bC),v=C.a([],x.f8),u=x.ez,t=J.tD(0,u)
u=J.tD(0,u)
return new A.aCZ(new A.Kb(C.x(x.N,x.P)),w,v,t,u,C.a([],x.eB))},
aCZ:function aCZ(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
aD_:function aD_(d,e){this.a=d
this.b=e},
FX:function FX(d){this.a=d
this.b=0},
a3j:function a3j(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
aD1:function aD1(){this.r=this.f=$},
a3k:function a3k(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.f=$
_.r=null
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.ax=k
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
a3i:function a3i(){},
DD:function DD(d,e){this.a=d
this.b=e},
Nl:function Nl(d,e){this.a=d
this.b=e},
Nm:function Nm(){},
a3b:function a3b(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bl0(){var w=x.N
return new A.aCH(C.x(w,w),C.a([],x.d),C.a([],x.t))},
ug:function ug(d,e){this.a=d
this.b=e},
aJK:function aJK(){},
aCH:function aCH(d,e,f){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=d
_.ay=1
_.CW=e
_.cx=f},
a7l:function a7l(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
uh:function uh(d,e){this.a=d
this.b=e},
yy:function yy(d){this.b=this.a=0
this.e=d},
aJL:function aJL(d){this.b=this.a=null
this.c=d},
aJM:function aJM(){},
a7E:function a7E(){this.a=null},
a7F:function a7F(){this.a=null},
ov:function ov(){},
a7H:function a7H(){this.a=null},
a7I:function a7I(){this.a=null},
a7L:function a7L(){this.a=null},
a7M:function a7M(){this.a=null},
Ny:function Ny(d){this.b=d},
a7K:function a7K(){this.c=null},
aKq:function aKq(){var _=this
_.w=_.r=_.f=_.e=$},
DM:function DM(d){this.a=d
this.c=$},
bmE(d){var w=new A.aKs(C.x(x.p,x.fh))
w.aqa(d)
return w},
bee(d,e,f,g){var w=d/255,v=e/255,u=f/255,t=g/255,s=v*(1-u),r=w*(1-t)
return D.d.C(D.d.aZ((2*w<u?2*v*w+s+r:t*u-2*(u-w)*(t-v)+s+r)*255,0,255))},
aKt(d,e){if(e===0)return 0
return D.d.C(D.c.aZ(D.d.C(255*(1-(1-d/255)/(e/255))),0,255))},
aKv(d,e){return D.d.C(D.c.aZ(d+e-255,0,255))},
beg(d,e){return D.d.C(D.c.aZ(255-(255-e)*(255-d),0,255))},
aKu(d,e){if(e===255)return 255
return D.d.C(D.d.aZ(d/255/(1-e/255)*255,0,255))},
beh(d,e){var w=d/255,v=e/255,u=1-v
return D.d.am(255*(u*v*w+v*(1-u*(1-w))))},
bec(d,e){var w=e/255,v=d/255
if(v<0.5)return D.d.am(510*w*v)
else return D.d.am(255*(1-2*(1-w)*(1-v)))},
bei(d,e){if(e<128)return A.aKt(d,2*e)
else return A.aKu(d,2*(e-128))},
bed(d,e){var w
if(e<128)return A.aKv(d,2*e)
else{w=2*(e-128)
return w+d>255?255:d+w}},
bef(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
beb(d,e){return D.d.am(e+d-2*e*d/255)},
bmF(b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.x(x.p,x.fW)
for(w=c1.length,v=0;u=c1.length,v<u;c1.length===w||(0,C.H)(c1),++v){t=c1[v]
b6.m(0,t.a,t)}if(b8===8)s=1
else s=b8===16?2:-1
r=A.ek(b5,b5,B.C,0,B.aq,c0,b5,0,u,b5,B.C,b9,!1)
if(s===-1)throw C.c(A.aZ("PSD: unsupported bit depth: "+C.i(b8)))
q=b6.i(0,0)
p=b6.i(0,1)
o=b6.i(0,2)
n=b6.i(0,-1)
m=-s
for(w=r.a,w=w.gR(w),l=u>=5,k=s===1,j=u===4,i=u>=2,u=u>=4;w.p();){h=w.gK()
m+=s
switch(b7){case B.MJ:g=q.c
g===$&&C.b()
h.saw(k?g[m]:(g[m]<<8|g[m+1])>>>8)
g=p.c
g===$&&C.b()
h.saJ(k?g[m]:(g[m]<<8|g[m+1])>>>8)
g=o.c
g===$&&C.b()
h.saP(k?g[m]:(g[m]<<8|g[m+1])>>>8)
if(u){g=n.c
g===$&&C.b()
g=k?g[m]:(g[m]<<8|g[m+1])>>>8}else g=255
h.saO(g)
if(h.gaO()!==0){h.saw((h.gaw()+h.gaO()-255)*255/h.gaO())
h.saJ((h.gaJ()+h.gaO()-255)*255/h.gaO())
h.saP((h.gaP()+h.gaO()-255)*255/h.gaO())}break
case B.ML:g=q.c
g===$&&C.b()
g=k?g[m]:(g[m]<<8|g[m+1])>>>8
f=p.c
f===$&&C.b()
f=k?f[m]:(f[m]<<8|f[m+1])>>>8
e=o.c
e===$&&C.b()
e=k?e[m]:(e[m]<<8|e[m+1])>>>8
if(u){d=n.c
d===$&&C.b()
a0=k?d[m]:(d[m]<<8|d[m+1])>>>8}else a0=255
a1=((g*100>>>8)+16)/116
a2=(f-128)/500+a1
a3=a1-(e-128)/200
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a5=Math.pow(a2,3)
a2=a5>0.008856?a5:(a2-0.13793103448275862)/7.787
a6=Math.pow(a3,3)
a3=a6>0.008856?a6:(a3-0.13793103448275862)/7.787
a2=a2*95.047/100
a1=a1*100/100
a3=a3*108.883/100
a7=a2*3.2406+a1*-1.5372+a3*-0.4986
a8=a2*-0.9689+a1*1.8758+a3*0.0415
a9=a2*0.0557+a1*-0.204+a3*1.057
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=a8>0.0031308?1.055*Math.pow(a8,0.4166666666666667)-0.055:12.92*a8
a9=a9>0.0031308?1.055*Math.pow(a9,0.4166666666666667)-0.055:12.92*a9
b0=[D.d.C(D.d.aZ(a7*255,0,255)),D.d.C(D.d.aZ(a8*255,0,255)),D.d.C(D.d.aZ(a9*255,0,255))]
h.saw(b0[0])
h.saJ(b0[1])
h.saP(b0[2])
h.saO(a0)
break
case B.MI:g=q.c
g===$&&C.b()
b1=k?g[m]:(g[m]<<8|g[m+1])>>>8
if(i){g=n.c
g===$&&C.b()
a0=k?g[m]:(g[m]<<8|g[m+1])>>>8}else a0=255
h.saw(b1)
h.saJ(b1)
h.saP(b1)
h.saO(a0)
break
case B.MK:g=q.c
g===$&&C.b()
b2=k?g[m]:(g[m]<<8|g[m+1])>>>8
g=p.c
g===$&&C.b()
b3=k?g[m]:(g[m]<<8|g[m+1])>>>8
g=o.c
g===$&&C.b()
a1=k?g[m]:(g[m]<<8|g[m+1])>>>8
g=b6.i(0,j?-1:3).c
g===$&&C.b()
b4=k?g[m]:(g[m]<<8|g[m+1])>>>8
if(l){g=n.c
g===$&&C.b()
a0=k?g[m]:(g[m]<<8|g[m+1])>>>8}else a0=255
b0=A.brr(255-b2,255-b3,255-a1,255-b4)
h.saw(b0[0])
h.saJ(b0[1])
h.saP(b0[2])
h.saO(a0)
break
default:throw C.c(A.aZ("Unhandled color mode: "+C.i(b7)))}}return r},
mV:function mV(d,e){this.a=d
this.b=e},
aKs:function aKs(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.ay=_.ax=_.at=_.as=$},
a7G:function a7G(d){this.b=d},
a7J:function a7J(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.y=_.w=$
_.Q=null
_.as=$
_.ay=d
_.ch=e
_.cx=$
_.cy=f},
bDM(d,e){var w,v
switch(d){case"lsct":w=new A.a7K()
v=e.c-e.d
e.M()
if(v>=12){if(e.f4(4)!=="8BIM")C.P(A.aZ("Invalid key in layer additional data"))
w.c=e.f4(4)}if(v>=16)e.M()
return w
default:return new A.Ny(e)}},
DN:function DN(){},
aKr:function aKr(){this.a=null},
NC:function NC(){},
mW:function mW(d,e,f){this.a=d
this.b=e
this.c=f},
hj:function hj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NB:function NB(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
DQ:function DQ(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
a7O:function a7O(){this.y=this.b=this.a=0},
qt(d,e){return(B.lq[d>>>8]<<17|B.lq[e>>>8]<<16|B.lq[d&255]<<1|B.lq[e&255])>>>0},
lN:function lN(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
aKx:function aKx(){this.b=this.a=null},
ab0:function ab0(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
jm:function jm(d,e){this.a=d
this.b=e},
aRJ:function aRJ(){this.a=null
this.b=$},
aRO:function aRO(d){this.a=d
this.c=this.b=0},
ab3:function ab3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
beL(d,e,f){var w=new A.aRQ(e,d),v=x.u
w.e=C.aT(e,null,!1,v)
w.f=C.aT(e,null,!1,v)
return w},
aRQ:function aRQ(d,e){var _=this
_.a=d
_.c=e
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
ab4:function ab4(d,e,f,g){var _=this
_.a=d
_.c=_.b=0
_.d=e
_.r=_.f=_.e=1
_.w=f
_.x=g
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.go=null
_.k2=_.k1=_.id=$},
zJ:function zJ(d,e){this.a=d
this.b=e},
h1:function h1(d,e){this.a=d
this.b=e},
m3:function m3(d,e){this.a=d
this.b=e},
aRR:function aRR(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
blw(){return new A.aE_(new Uint8Array(4096))},
aE_:function aE_(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
aRP:function aRP(){this.a=null
this.c=$},
beS(d,e){var w=new Int32Array(4),v=new Int32Array(4),u=new Int8Array(4),t=new Int8Array(4),s=C.aT(8,null,!1,x.eW),r=C.aT(4,null,!1,x.Z)
return new A.aSI(d,e,new A.aSO(),new A.aSS(),new A.aSK(w,v),new A.aSU(u,t),s,r,new Uint8Array(4))},
bos(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
aSI:function aSI(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=$
_.d=null
_.e=$
_.f=f
_.r=g
_.w=h
_.x=i
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=j
_.dy=k
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=l
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.by=$
_.bI=null
_.bM=_.aA=$
_.bO=null
_.bP=$},
aSV:function aSV(){},
bop(d){var w=new A.Qr(d)
w.b=254
w.c=0
w.d=-8
return w},
Qr:function Qr(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
cF(d,e,f){return D.c.hZ(D.c.H(d+2*e+f+2,2),32)},
bGY(d){var w,v=C.a([A.cF(J.o(d.a,d.d+-33),J.o(d.a,d.d+-32),J.o(d.a,d.d+-31)),A.cF(J.o(d.a,d.d+-32),J.o(d.a,d.d+-31),J.o(d.a,d.d+-30)),A.cF(J.o(d.a,d.d+-31),J.o(d.a,d.d+-30),J.o(d.a,d.d+-29)),A.cF(J.o(d.a,d.d+-30),J.o(d.a,d.d+-29),J.o(d.a,d.d+-28))],x.t)
for(w=0;w<4;++w)d.tb(w*32,4,v)},
bGQ(d){var w=J.o(d.a,d.d+-33),v=J.o(d.a,d.d+-1),u=J.o(d.a,d.d+31),t=J.o(d.a,d.d+63),s=J.o(d.a,d.d+95),r=A.b7(d,null,0)
r.EM()[0]=16843009*A.cF(w,v,u)
r.d+=32
r.EM()[0]=16843009*A.cF(v,u,t)
r.d+=32
r.EM()[0]=16843009*A.cF(u,t,s)
r.d+=32
r.EM()[0]=16843009*A.cF(t,s,s)},
bGO(d){var w,v,u,t
for(w=4,v=0;v<4;++v)w+=J.o(d.a,d.d+(v-32))+J.o(d.a,d.d+(-1+v*32))
w=D.c.H(w,3)
for(v=0;v<4;++v){u=d.a
t=d.d+v*32
J.nN(u,t,t+4,w)}},
beT(d,e){var w,v,u,t,s,r=255-J.o(d.a,d.d+-33)
for(w=0,v=0;v<e;++v){u=r+J.o(d.a,d.d+(w-1))
for(t=0;t<e;++t){s=$.kn()[u+J.o(d.a,d.d+(-32+t))]
J.bL(d.a,d.d+(w+t),s)}w+=32}},
bGW(d){A.beT(d,4)},
bGX(d){A.beT(d,8)},
bGV(d){A.beT(d,16)},
bGU(d){var w=J.o(d.a,d.d+-1),v=J.o(d.a,d.d+31),u=J.o(d.a,d.d+63),t=J.o(d.a,d.d+95),s=J.o(d.a,d.d+-33),r=J.o(d.a,d.d+-32),q=J.o(d.a,d.d+-31),p=J.o(d.a,d.d+-30),o=J.o(d.a,d.d+-29)
d.m(0,96,A.cF(v,u,t))
u=A.cF(w,v,u)
d.m(0,97,u)
d.m(0,64,u)
v=A.cF(s,w,v)
d.m(0,98,v)
d.m(0,65,v)
d.m(0,32,v)
w=A.cF(r,s,w)
d.m(0,99,w)
d.m(0,66,w)
d.m(0,33,w)
d.m(0,0,w)
s=A.cF(q,r,s)
d.m(0,67,s)
d.m(0,34,s)
d.m(0,1,s)
r=A.cF(p,q,r)
d.m(0,35,r)
d.m(0,2,r)
d.m(0,3,A.cF(o,p,q))},
bGT(d){var w=J.o(d.a,d.d+-32),v=J.o(d.a,d.d+-31),u=J.o(d.a,d.d+-30),t=J.o(d.a,d.d+-29),s=J.o(d.a,d.d+-28),r=J.o(d.a,d.d+-27),q=J.o(d.a,d.d+-26),p=J.o(d.a,d.d+-25)
d.m(0,0,A.cF(w,v,u))
v=A.cF(v,u,t)
d.m(0,32,v)
d.m(0,1,v)
u=A.cF(u,t,s)
d.m(0,64,u)
d.m(0,33,u)
d.m(0,2,u)
t=A.cF(t,s,r)
d.m(0,96,t)
d.m(0,65,t)
d.m(0,34,t)
d.m(0,3,t)
s=A.cF(s,r,q)
d.m(0,97,s)
d.m(0,66,s)
d.m(0,35,s)
r=A.cF(r,q,p)
d.m(0,98,r)
d.m(0,67,r)
d.m(0,99,A.cF(q,p,p))},
bH_(d){var w=J.o(d.a,d.d+-1),v=J.o(d.a,d.d+31),u=J.o(d.a,d.d+63),t=J.o(d.a,d.d+-33),s=J.o(d.a,d.d+-32),r=J.o(d.a,d.d+-31),q=J.o(d.a,d.d+-30),p=J.o(d.a,d.d+-29),o=D.c.hZ(D.c.H(t+s+1,1),32)
d.m(0,65,o)
d.m(0,0,o)
o=D.c.hZ(D.c.H(s+r+1,1),32)
d.m(0,66,o)
d.m(0,1,o)
o=D.c.hZ(D.c.H(r+q+1,1),32)
d.m(0,67,o)
d.m(0,2,o)
d.m(0,3,D.c.hZ(D.c.H(q+p+1,1),32))
d.m(0,96,A.cF(u,v,w))
d.m(0,64,A.cF(v,w,t))
w=A.cF(w,t,s)
d.m(0,97,w)
d.m(0,32,w)
t=A.cF(t,s,r)
d.m(0,98,t)
d.m(0,33,t)
s=A.cF(s,r,q)
d.m(0,99,s)
d.m(0,34,s)
d.m(0,35,A.cF(r,q,p))},
bGZ(d){var w,v=J.o(d.a,d.d+-32),u=J.o(d.a,d.d+-31),t=J.o(d.a,d.d+-30),s=J.o(d.a,d.d+-29),r=J.o(d.a,d.d+-28),q=J.o(d.a,d.d+-27),p=J.o(d.a,d.d+-26),o=J.o(d.a,d.d+-25)
d.m(0,0,D.c.hZ(D.c.H(v+u+1,1),32))
w=D.c.hZ(D.c.H(u+t+1,1),32)
d.m(0,64,w)
d.m(0,1,w)
w=D.c.hZ(D.c.H(t+s+1,1),32)
d.m(0,65,w)
d.m(0,2,w)
w=D.c.hZ(D.c.H(s+r+1,1),32)
d.m(0,66,w)
d.m(0,3,w)
d.m(0,32,A.cF(v,u,t))
u=A.cF(u,t,s)
d.m(0,96,u)
d.m(0,33,u)
t=A.cF(t,s,r)
d.m(0,97,t)
d.m(0,34,t)
s=A.cF(s,r,q)
d.m(0,98,s)
d.m(0,35,s)
d.m(0,67,A.cF(r,q,p))
d.m(0,99,A.cF(q,p,o))},
bGR(d){var w,v=J.o(d.a,d.d+-1),u=J.o(d.a,d.d+31),t=J.o(d.a,d.d+63),s=J.o(d.a,d.d+95)
d.m(0,0,D.c.hZ(D.c.H(v+u+1,1),32))
w=D.c.hZ(D.c.H(u+t+1,1),32)
d.m(0,32,w)
d.m(0,2,w)
w=D.c.hZ(D.c.H(t+s+1,1),32)
d.m(0,64,w)
d.m(0,34,w)
d.m(0,1,A.cF(v,u,t))
u=A.cF(u,t,s)
d.m(0,33,u)
d.m(0,3,u)
t=A.cF(t,s,s)
d.m(0,65,t)
d.m(0,35,t)
d.m(0,99,s)
d.m(0,98,s)
d.m(0,97,s)
d.m(0,96,s)
d.m(0,66,s)
d.m(0,67,s)},
bGP(d){var w=J.o(d.a,d.d+-1),v=J.o(d.a,d.d+31),u=J.o(d.a,d.d+63),t=J.o(d.a,d.d+95),s=J.o(d.a,d.d+-33),r=J.o(d.a,d.d+-32),q=J.o(d.a,d.d+-31),p=J.o(d.a,d.d+-30),o=D.c.hZ(D.c.H(w+s+1,1),32)
d.m(0,34,o)
d.m(0,0,o)
o=D.c.hZ(D.c.H(v+w+1,1),32)
d.m(0,66,o)
d.m(0,32,o)
o=D.c.hZ(D.c.H(u+v+1,1),32)
d.m(0,98,o)
d.m(0,64,o)
d.m(0,96,D.c.hZ(D.c.H(t+u+1,1),32))
d.m(0,3,A.cF(r,q,p))
d.m(0,2,A.cF(s,r,q))
r=A.cF(w,s,r)
d.m(0,35,r)
d.m(0,1,r)
s=A.cF(v,w,s)
d.m(0,67,s)
d.m(0,33,s)
w=A.cF(u,v,w)
d.m(0,99,w)
d.m(0,65,w)
d.m(0,97,A.cF(t,u,v))},
bHa(d){var w
for(w=0;w<16;++w)d.mO(w*32,16,d,-32)},
bH8(d){var w,v,u,t,s
for(w=0,v=16;v>0;--v){u=J.o(d.a,d.d+(w-1))
t=d.a
s=d.d+w
J.nN(t,s,s+16,u)
w+=32}},
aSM(d,e){var w,v,u
for(w=0;w<16;++w){v=e.a
u=e.d+w*32
J.nN(v,u,u+16,d)}},
bH0(d){var w,v
for(w=16,v=0;v<16;++v)w+=J.o(d.a,d.d+(-1+v*32))+J.o(d.a,d.d+(v-32))
A.aSM(D.c.H(w,5),d)},
bH2(d){var w,v
for(w=8,v=0;v<16;++v)w+=J.o(d.a,d.d+(-1+v*32))
A.aSM(D.c.H(w,4),d)},
bH1(d){var w,v
for(w=8,v=0;v<16;++v)w+=J.o(d.a,d.d+(v-32))
A.aSM(D.c.H(w,4),d)},
bH3(d){A.aSM(128,d)},
bHb(d){var w
for(w=0;w<8;++w)d.mO(w*32,8,d,-32)},
bH9(d){var w,v,u,t,s
for(w=0,v=0;v<8;++v){u=J.o(d.a,d.d+(w-1))
t=d.a
s=d.d+w
J.nN(t,s,s+8,u)
w+=32}},
aSN(d,e){var w,v,u
for(w=0;w<8;++w){v=e.a
u=e.d+w*32
J.nN(v,u,u+8,d)}},
bH4(d){var w,v
for(w=8,v=0;v<8;++v)w+=J.o(d.a,d.d+(v-32))+J.o(d.a,d.d+(-1+v*32))
A.aSN(D.c.H(w,4),d)},
bH5(d){var w,v
for(w=4,v=0;v<8;++v)w+=J.o(d.a,d.d+(v-32))
A.aSN(D.c.H(w,3),d)},
bH6(d){var w,v
for(w=4,v=0;v<8;++v)w+=J.o(d.a,d.d+(-1+v*32))
A.aSN(D.c.H(w,3),d)},
bH7(d){A.aSN(128,d)},
v1(d,e,f,g,h){var w=e+f+g*32,v=J.o(d.a,d.d+w)+D.c.H(h,3)
if(!((v&-256)>>>0===0))v=v<0?0:255
d.m(0,w,v)},
aSL(d,e,f,g,h){A.v1(d,0,0,e,f+g)
A.v1(d,0,1,e,f+h)
A.v1(d,0,2,e,f-h)
A.v1(d,0,3,e,f-g)},
bGS(){var w,v,u
if(!$.boq){for(w=-255;w<=255;++w){v=$.apQ()
u=255+w
v[u]=w<0?-w:w
$.bbL()[u]=D.c.H(v[u],1)}for(w=-1020;w<=1020;++w){v=$.bbM()
if(w<-128)u=-128
else u=w>127?127:w
v[1020+w]=u}for(w=-112;w<=112;++w){v=$.apR()
if(w<-16)u=-16
else u=w>15?15:w
v[112+w]=u}for(w=-255;w<=510;++w){v=$.kn()
if(w<0)u=0
else u=w>255?255:w
v[255+w]=u}$.boq=!0}},
aSJ:function aSJ(){},
bGN(){var w,v=J.hf(3,x.D)
for(w=0;w<3;++w)v[w]=new Uint8Array(11)
return new A.Qq(v)},
bHq(){var w,v,u,t,s=new Uint8Array(3),r=J.hf(4,x.c7)
for(w=x.V,v=0;v<4;++v){u=J.hf(8,w)
for(t=0;t<8;++t)u[t]=A.bGN()
r[v]=u}D.w.jy(s,0,3,255)
return new A.aST(s,r)},
aSO:function aSO(){this.d=$},
aSS:function aSS(){},
aSU:function aSU(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
Qq:function Qq(d){this.a=d},
aST:function aST(d,e){this.a=d
this.b=e},
aSK:function aSK(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
zS:function zS(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
abz:function abz(){this.b=this.a=0},
abB:function abB(d,e,f){this.a=d
this.b=e
this.c=f},
abA:function abA(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
abC:function abC(d,e,f){this.a=d
this.b=e
this.c=f},
beU(d,e){var w=C.a([],x.A),v=C.a([],x.F),u=new Uint32Array(2),t=new A.abx(d,u)
u=t.d=C.bO(u.buffer,0,null)
u[0]=d.bm()
u[1]=d.bm()
u[2]=d.bm()
u[3]=d.bm()
u[4]=d.bm()
u[5]=d.bm()
u[6]=d.bm()
u[7]=d.bm()
return new A.Qs(t,e,w,v)},
v2(d,e){return D.c.H(d+D.c.cN(1,e)-1,e)},
Qs:function Qs(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
a3c:function a3c(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
abx:function abx(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
aSP:function aSP(d,e){this.a=d
this.b=e},
aSQ(d,e,f){var w=d[e]
d[e]=(((w&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(w&16711935)+(f&16711935)&16711935)>>>0},
qZ(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
zU(d){if(d<0)return 0
if(d>255)return 255
return d},
aSR(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
bHc(d,e,f){return 4278190080},
bHd(d,e,f){return e},
bHi(d,e,f){return d[f]},
bHj(d,e,f){return d[f+1]},
bHk(d,e,f){return d[f-1]},
bHl(d,e,f){var w=d[f]
return A.qZ(A.qZ(e,d[f+1]),w)},
bHm(d,e,f){return A.qZ(e,d[f-1])},
bHn(d,e,f){return A.qZ(e,d[f])},
bHo(d,e,f){return A.qZ(d[f-1],d[f])},
bHp(d,e,f){return A.qZ(d[f],d[f+1])},
bHe(d,e,f){var w=d[f-1],v=d[f],u=d[f+1]
return A.qZ(A.qZ(e,w),A.qZ(v,u))},
bHf(d,e,f){var w=d[f],v=d[f-1]
return A.aSR(w>>>24,e>>>24,v>>>24)+A.aSR(w>>>16&255,e>>>16&255,v>>>16&255)+A.aSR(w>>>8&255,e>>>8&255,v>>>8&255)+A.aSR(w&255,e&255,v&255)<=0?w:e},
bHg(d,e,f){var w=d[f],v=d[f-1]
return(A.zU((e>>>24)+(w>>>24)-(v>>>24))<<24|A.zU((e>>>16&255)+(w>>>16&255)-(v>>>16&255))<<16|A.zU((e>>>8&255)+(w>>>8&255)-(v>>>8&255))<<8|A.zU((e&255)+(w&255)-(v&255)))>>>0},
bHh(d,e,f){var w,v,u,t=d[f],s=d[f-1],r=A.qZ(e,t)
t=r>>>24
w=r>>>16&255
v=r>>>8&255
u=r>>>0&255
return(A.zU(t+D.c.bg(t-(s>>>24),2))<<24|A.zU(w+D.c.bg(w-(s>>>16&255),2))<<16|A.zU(v+D.c.bg(v-(s>>>8&255),2))<<8|A.zU(u+D.c.bg(u-(s&255),2)))>>>0},
zT:function zT(d,e){this.a=d
this.b=e},
aby:function aby(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
aTx:function aTx(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
QF:function QF(){},
a3d:function a3d(d,e,f){var _=this
_.a=d
_.b=e
_.e=f
_.f=$
_.r=1
_.x=_.w=$},
bkC(){var w=new Uint8Array(128),v=new Int16Array(128)
w=new A.a2E(w,v,new Int16Array(128))
w.RD(0)
return w},
bB2(){var w,v=J.hf(5,x.x)
for(w=0;w<5;++w)v[w]=A.bkC()
return new A.KJ(v)},
a2E:function a2E(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
KJ:function KJ(d){this.a=d},
Fi:function Fi(d,e){this.a=d
this.b=e},
abR:function abR(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
a3e:function a3e(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
aTy:function aTy(){this.b=this.a=null},
bBq(d){return new A.KZ(d.a,d.b,D.w.iZ(d.c,0))},
aBu:function aBu(d,e){this.a=d
this.b=e},
KZ:function KZ(d,e,f){this.a=d
this.b=e
this.c=f},
ek(d,e,f,g,h,i,j,k,l,m,n,o,p){var w,v=new A.xk(null,null,null,d,k,h,g,0)
v.gj5().push(v)
if(l<1||l>4)C.P(A.aZ("Invalid number of channels for image "+l+". Must be between 1 and 4."))
v.c=j
if(e!=null)v.e=A.axV(e)
w=!1
if(m==null)if(p)w=v.gc2()===B.d0||v.gc2()===B.du||v.gc2()===B.dv||v.gc2()===B.C||v.gc2()===B.bg
v.atE(o,i,f,l,w?v.atH(f,n,l):m)
return v},
a2K(d,e,f){var w,v,u,t,s=null,r=d.a
r=r==null?s:r.mx(f)
w=d.e
w=w==null?s:A.axV(w)
v=d.c
v=v==null?s:A.bBq(v)
u=d.w
t=d.r
r=new A.xk(r,v,w,s,t,u,d.y,d.z)
r.apU(d,e,f)
return r},
a1V:function a1V(d,e){this.a=d
this.b=e},
xk:function xk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=null
_.c=e
_.d=null
_.e=f
_.f=g
_.r=h
_.w=i
_.x=$
_.y=j
_.z=k},
i1:function i1(){},
bBs(d,e,f){return new A.CE(new Uint16Array(d*e*f),d,e,f)},
CE:function CE(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
bBt(d,e,f){return new A.CF(new Float32Array(d*e*f),d,e,f)},
CF:function CF(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
L5:function L5(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
L6:function L6(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
L7:function L7(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
L8:function L8(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
CG:function CG(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
CH:function CH(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
CI:function CI(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
bBu(d,e,f){return new A.CJ(new Uint32Array(d*e*f),d,e,f)},
CJ:function CJ(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
CK:function CK(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
bkR(d,e,f){return new A.CL(new Uint8Array(d*e*f),null,d,e,f)},
CL:function CL(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
aIV:function aIV(){},
a6L:function a6L(d,e,f){this.c=d
this.a=e
this.b=f},
a6M:function a6M(d,e,f){this.c=d
this.a=e
this.b=f},
a6N:function a6N(d,e,f){this.c=d
this.a=e
this.b=f},
a6O:function a6O(d,e,f){this.c=d
this.a=e
this.b=f},
a6P:function a6P(d,e,f){this.c=d
this.a=e
this.b=f},
a6Q:function a6Q(d,e,f){this.c=d
this.a=e
this.b=f},
a6R:function a6R(d,e,f){this.c=d
this.a=e
this.b=f},
a6S:function a6S(d,e,f){this.c=d
this.a=e
this.b=f},
bmg(d){return new A.or(new Uint8Array(C.bo(d.c)),d.a,d.b)},
or:function or(d,e,f){this.c=d
this.a=e
this.b=f},
bdZ(d){return new A.yj(-1,0,-d.c,d)},
yj:function yj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be_(d){return new A.yk(-1,0,-d.c,d)},
yk:function yk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be0(d){return new A.yl(-1,0,-d.c,d)},
yl:function yl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be1(d){return new A.ym(-1,0,-d.c,d)},
ym:function ym(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be2(d){return new A.yn(-1,0,-d.c,d)},
yn:function yn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be3(d){return new A.yo(-1,0,-d.c,d)},
yo:function yo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mR(d,e,f,g,h){d.e4(e-1,f)
return new A.aJj(d,e,e+g-1,f+h-1)},
aJj:function aJj(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
Nf(d){return new A.yp(-1,0,0,-1,0,d)},
yp:function yp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
be4(d){return new A.yq(-1,0,-d.c,d)},
yq:function yq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ng(d){return new A.yr(-1,0,0,-2,0,d)},
yr:function yr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
be5(d){return new A.ys(-1,0,-d.c,d)},
ys:function ys(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nh(d){return new A.yt(-1,0,0,-(d.c<<2>>>0),d)},
yt:function yt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aJk(d){return new A.yu(-1,0,-d.c,d)},
yu:function yu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fY:function fY(){},
aZ(d){return new A.a2O(d)},
a2O:function a2O(d){this.a=d},
by(d,e,f,g){return new A.i2(d,g,f==null?J.bY(d):g+f,g,e)},
b7(d,e,f){var w=d.a,v=d.d+f,u=e==null?d.c:v+e
return new A.i2(w,d.b,u,v,d.e)},
i2:function i2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aIy(d){return new A.aIx(new Uint8Array(d))},
aIx:function aIx(d){this.a=0
this.b=!1
this.c=d},
DS:function DS(d,e){this.a=d
this.b=e},
axX(d){var w
d.az(x.W)
w=C.S(d)
return w.O},
blT(d){return new Int8Array(d)},
bGH(d){throw C.c(C.b0("Uint64List not supported on the web."))},
bBC(d,e,f){C.rt(d,e,f)
return f==null?new Int8Array(d,e):new Int8Array(d,e,f)},
bo9(d,e){return C.k1(d,e,null)},
bAu(d){return C.aHT(d,0,null)},
bAv(d){return d.b12(0,0,null)},
AH(d,e){var w,v,u=J.aS(d),t=u.gu(d)
e^=4294967295
for(w=0;t>=8;){v=w+1
e=D.dx[(e^u.i(d,w))&255]^e>>>8
w=v+1
e=D.dx[(e^u.i(d,v))&255]^e>>>8
v=w+1
e=D.dx[(e^u.i(d,w))&255]^e>>>8
w=v+1
e=D.dx[(e^u.i(d,v))&255]^e>>>8
v=w+1
e=D.dx[(e^u.i(d,w))&255]^e>>>8
w=v+1
e=D.dx[(e^u.i(d,v))&255]^e>>>8
v=w+1
e=D.dx[(e^u.i(d,w))&255]^e>>>8
w=v+1
e=D.dx[(e^u.i(d,v))&255]^e>>>8
t-=8}if(t>0)do{v=w+1
e=D.dx[(e^u.i(d,w))&255]^e>>>8
if(--t,t>0){w=v
continue}else break}while(!0)
return(e^4294967295)>>>0},
apm(d,e){var w,v,u,t=B.am1.gcW()
t=t.eH(t)
for(w=1,v="";w<=e;++w){u=D.d.C(D.d.b4(d/Math.pow(83,e-w),83))
v+=C.i(u>=0&&u<t.length?t[u]:null)}return v.charCodeAt(0)==0?v:v},
bgf(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gdX()
if(k==null)k=e.gbd()
if(h==null)h=d.gdX()<e.gdX()?d.gdX():e.gdX()
if(g==null)g=d.gbd()<e.gbd()?d.gbd():e.gbd()
if(d.gUK())d=d.aa5(d.gvv())
w=k/g
v=l/h
u=x.p
t=J.hf(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.C(s*w)
r=J.hf(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.C(q*v)
if(f===B.n4)A.bL9(e,d,i,j,h,g,r,t,null,B.tx)
else A.bKP(e,d,i,j,h,g,r,t,f,!1,null,B.tx)
return d},
bL9(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r,q
for(w=null,v=0;v<i;++v)for(u=g+v,t=0;t<h;++t){s=j[t]
r=k[v]
q=d.a
w=q==null?null:q.f8(s,r,w)
if(w==null)w=new A.fY()
e.MG(f+t,u,w)}},
bKP(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s,r,q
for(w=null,v=0;v<i;++v)for(u=g+v,t=0;t<h;++t){s=j[t]
r=k[v]
q=d.a
w=q==null?null:q.f8(s,r,w)
if(w==null)w=new A.fY()
A.bPM(e,f+t,u,w,l,!1,n,o)}},
bPM(a5,a6,a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(!a5.ad3(a6,a7))return a5
if(a9===B.n4||a5.gUK())if(a5.ad3(a6,a7)){a5.Xd(a6,a7).fo(a8)
return a5}w=a8.gf3()
v=a8.geT()
u=a8.geY()
t=a8.gu(a8)<4?1:a8.gfc()
if(t===0)return a5
s=a5.Xd(a6,a7)
r=s.gf3()
q=s.geT()
p=s.geY()
o=s.gfc()
switch(a9.a){case 0:return a5
case 1:break
case 2:w=Math.max(r,w)
v=Math.max(q,v)
u=Math.max(p,u)
break
case 3:w=1-(1-w)*(1-r)
v=1-(1-v)*(1-q)
u=1-(1-u)*(1-p)
break
case 4:n=t*o
m=1-o
l=1-t
k=w*m+r*l
j=v*m+q*l
i=u*m+p*l
l=D.d.aZ(t,0.01,1)
m=t<0
h=m?0:1
g=D.d.aZ(w/l*h,0,0.99)
h=D.d.aZ(t,0.01,1)
l=m?0:1
f=D.d.aZ(v/h*l,0,0.99)
l=D.d.aZ(t,0.01,1)
m=m?0:1
e=D.d.aZ(u/l*m,0,0.99)
m=r*t
l=q*t
h=p*t
d=n<w*o+m?0:1
a0=n<v*o+l?0:1
a1=n<u*o+h?0:1
w=(n+k)*(1-d)+(m/(1-g)+k)*d
v=(n+j)*(1-a0)+(l/(1-f)+j)*a0
u=(n+i)*(1-a1)+(h/(1-e)+i)*a1
break
case 5:w=r+w
v=q+v
u=p+u
break
case 6:w=Math.min(r,w)
v=Math.min(q,v)
u=Math.min(p,u)
break
case 7:w=r*w
v=q*v
u=p*u
break
case 8:w=w!==0?1-(1-r)/w:0
v=v!==0?1-(1-q)/v:0
u=u!==0?1-(1-p)/u:0
break
case 9:m=1-o
l=1-t
h=w*m
a2=r*l
w=2*r<o?2*w*r+h+a2:t*o-2*(o-r)*(t-w)+h+a2
h=v*m
a2=q*l
v=2*q<o?2*v*q+h+a2:t*o-2*(o-q)*(t-v)+h+a2
m=u*m
l=p*l
u=2*p<o?2*u*p+m+l:t*o-2*(o-p)*(t-u)+m+l
break
case 10:m=o===0
if(m)w=0
else{l=r/o
w=r*(t*l+2*w*(1-l))+w*(1-o)+r*(1-t)}if(m)v=0
else{l=q/o
v=q*(t*l+2*v*(1-l))+v*(1-o)+q*(1-t)}if(m)u=0
else{m=p/o
u=p*(t*m+2*u*(1-m))+u*(1-o)+p*(1-t)}break
case 11:m=2*w
l=1-o
h=1-t
a2=w*l
a3=r*h
w=m<t?m*r+a2+a3:t*o-2*(o-r)*(t-w)+a2+a3
m=2*v
a2=v*l
a3=q*h
v=m<t?m*q+a2+a3:t*o-2*(o-q)*(t-v)+a2+a3
m=2*u
l=u*l
h=p*h
u=m<t?m*p+l+h:t*o-2*(o-p)*(t-u)+l+h
break
case 12:w=Math.abs(w-r)
v=Math.abs(v-q)
u=Math.abs(u-p)
break
case 13:w=r-w
v=q-v
u=p-u
break
case 14:w=w!==0?r/w:0
v=v!==0?q/v:0
u=u!==0?p/u:0
break}a4=1-t
s.sf3(w*t+r*o*a4)
s.seT(v*t+q*o*a4)
s.seY(u*t+p*o*a4)
s.sfc(t+o*a4)
return a5},
bPX(d,e,f,g,h,i,j){var w,v=D.d.aZ(Math.min(g,h),0,d.gdX()-1),u=D.d.aZ(Math.min(i,j),0,d.gbd()-1),t=D.d.aZ(Math.max(g,h),0,d.gdX()-1),s=D.d.aZ(Math.max(i,j),0,d.gbd()-1),r=d.a.mc(0,v,u,t-v+1,s-u+1)
for(w=r.a;r.p();)w.fo(f)
return d},
bAm(a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a9<16384,a2=a5>a7?a7:a5
for(w=1;w<=a2;)w=w<<1>>>0
w=w>>>1
v=w>>>1
u=C.a([0,0],x.t)
for(t=w,w=v;w>=1;t=w,w=v){s=a4+a8*(a7-t)
r=a8*w
q=a8*t
p=a6*w
o=a6*t
for(n=(a5&w)>>>0!==0,m=a6*(a5-t),l=a4;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a1){A.Kf(a3[j],a3[h],u)
f=u[0]
e=u[1]
A.Kf(a3[i],a3[g],u)
d=u[0]
a0=u[1]
A.Kf(f,d,u)
a3[j]=u[0]
a3[i]=u[1]
A.Kf(e,a0,u)
a3[h]=u[0]
a3[g]=u[1]}else{A.Kg(a3[j],a3[h],u)
f=u[0]
e=u[1]
A.Kg(a3[i],a3[g],u)
d=u[0]
a0=u[1]
A.Kg(f,d,u)
a3[j]=u[0]
a3[i]=u[1]
A.Kg(e,a0,u)
a3[h]=u[0]
a3[g]=u[1]}}if(n){h=j+r
if(a1){A.Kf(a3[j],a3[h],u)
f=u[0]
a3[h]=u[1]}else{A.Kg(a3[j],a3[h],u)
f=u[0]
a3[h]=u[1]}a3[j]=f}}if((a7&w)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a1){A.Kf(a3[j],a3[i],u)
f=u[0]
a3[i]=u[1]}else{A.Kg(a3[j],a3[i],u)
f=u[0]
a3[i]=u[1]}a3[j]=f}}v=w>>>1}},
Kf(d,e,f){var w,v,u,t,s=$.jA()
s[0]=d
w=$.ko()
v=w[0]
s[0]=e
u=w[0]
t=v+(u&1)+D.c.H(u,1)
f[0]=t
f[1]=t-u},
Kg(d,e,f){var w=d-D.c.H(e,1)&65535
f[1]=w
f[0]=e+w-32768&65535},
bPZ(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(A.blc().b0b(d))return new A.a3i()
w=new A.a7l(A.bl0())
if(w.yI(d))return w
v=new A.aA4()
v.f=A.by(d,!1,m,0)
v.a=new A.a23(C.a([],x.b))
if(v.a1C())return v
u=new A.aTy()
if(u.yI(d))return u
t=new A.aRP()
if(t.a55(A.by(d,!1,m,0))!=null)return t
if(A.bmE(d).c===943870035)return new A.aKr()
if(A.bAl(d))return new A.axZ()
if(A.bci(A.by(d,!1,m,0)))return new A.Yk(!1)
s=new A.aRJ()
r=A.by(d,!1,m,0)
q=s.a=new A.ab0(B.mn)
q.kh(r)
if(q.adf())return s
p=new A.aBw()
q=A.by(d,!1,m,0)
p.a=q
q=A.bkF(q)
p.b=q
if(q!=null)return p
o=new A.aKx()
if(o.kN(d)!=null)return o
n=new A.aJL(C.a([],x.s))
if(n.yI(d))return n
return m},
bRF(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.bfH==null){w=$.bfH=new Uint8Array(768)
for(v=-256;v<0;++v)w[256+v]=0
for(v=0;v<256;++v)w[256+v]=v
for(v=256;v<512;++v)w[256+v]=255}for(v=0;v<64;++v)a6[v]=a4[v]*a3[v]
for(u=0,v=0;v<8;++v,u+=8){w=1+u
t=a6[w]
if(t===0&&a6[2+u]===0&&a6[3+u]===0&&a6[4+u]===0&&a6[5+u]===0&&a6[6+u]===0&&a6[7+u]===0){w=D.c.H(5793*a6[u]+512,10)
s=(w&2147483647)-((w&2147483648)>>>0)
a6[u]=s
a6[u+1]=s
a6[u+2]=s
a6[u+3]=s
a6[u+4]=s
a6[u+5]=s
a6[u+6]=s
a6[u+7]=s
continue}r=D.c.H(5793*a6[u]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+u
p=D.c.H(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+u
n=a6[p]
m=6+u
l=a6[m]
k=7+u
j=a6[k]
i=D.c.H(2896*(t-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.H(2896*(t+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+u
t=a6[j]<<4
f=(t&2147483647)-((t&2147483648)>>>0)
t=5+u
i=a6[t]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.H(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.H(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.H(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.H(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.H(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.H(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.H(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.H(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.H(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.H(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.H(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.H(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.H(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.H(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.H(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.H(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
a6[u]=q+s
a6[k]=q-s
a6[w]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[t]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(v=0;v<8;++v){w=8+v
t=a6[w]
if(t===0&&a6[16+v]===0&&a6[24+v]===0&&a6[32+v]===0&&a6[40+v]===0&&a6[48+v]===0&&a6[56+v]===0){t=D.c.H(5793*a6[v]+8192,14)
s=(t&2147483647)-((t&2147483648)>>>0)
a6[v]=s
a6[w]=s
a6[16+v]=s
a6[24+v]=s
a6[32+v]=s
a6[40+v]=s
a6[48+v]=s
a6[56+v]=s
continue}r=D.c.H(5793*a6[v]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+v
p=D.c.H(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+v
n=a6[p]
m=48+v
l=a6[m]
k=56+v
j=a6[k]
i=D.c.H(2896*(t-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.H(2896*(t+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+v
f=a6[j]
t=40+v
e=a6[t]
i=D.c.H(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.H(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.H(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.H(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.H(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.H(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.H(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.H(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.H(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.H(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.H(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.H(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.H(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.H(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.H(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.H(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
a6[v]=q+s
a6[k]=q-s
a6[w]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[t]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=$.bfH,v=0;v<64;++v){w.toString
t=D.c.H(a6[v]+8,4)
a5[v]=w[384+((t&2147483647)-((t&2147483648)>>>0))]}},
bQm(e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7=null,d8="ifd0",d9=e0.r
if(d9.i(0,d8).a.a5(274)){w=d9.i(0,d8).a.i(0,274)
w=w==null?d7:J.Xf(w)
w.toString
v=w}else v=0
w=e0.d
u=w.e
u.toString
w=w.d
w.toString
t=v>=5&&v<=8
if(t)s=w
else s=u
if(t)r=u
else r=w
q=A.ek(d7,d7,B.C,0,B.aq,r,d7,0,3,d7,B.C,s,!1)
d9=A.axV(d9)
q.e=d9
d9.i(0,d8).a.D(0,274)
p=w-1
o=u-1
d9=e0.Q
switch(d9.length){case 1:n=d9[0]
m=n.e
l=n.f
k=n.r
d9=v===8
w=v===7
u=v===6
j=v===5
i=v===4
h=v===3
g=v===2
f=0
while(!0){e=e0.d.d
e.toString
if(!(f<e))break
d=m[D.c.fb(f,k)]
e=p-f
a0=0
while(!0){a1=e0.d.e
a1.toString
if(!(a0<a1))break
a2=d[D.c.fb(a0,l)]
if(g){a1=q.a
if(a1!=null)a1.d6(o-a0,f,a2,a2,a2)}else if(h){a1=q.a
if(a1!=null)a1.d6(o-a0,e,a2,a2,a2)}else if(i){a1=q.a
if(a1!=null)a1.d6(a0,e,a2,a2,a2)}else if(j){a1=q.a
if(a1!=null)a1.d6(f,a0,a2,a2,a2)}else if(u){a1=q.a
if(a1!=null)a1.d6(e,a0,a2,a2,a2)}else if(w){a1=q.a
if(a1!=null)a1.d6(e,o-a0,a2,a2,a2)}else{a1=q.a
if(d9){if(a1!=null)a1.d6(f,o-a0,a2,a2,a2)}else if(a1!=null)a1.d6(a0,f,a2,a2,a2)}++a0}++f}break
case 3:n=d9[0]
a3=d9[1]
a4=d9[2]
a5=n.e
a6=a3.e
a7=a4.e
l=n.f
k=n.r
a8=a3.f
a9=a3.r
b0=a4.f
b1=a4.r
d9=v===8
w=v===7
u=v===6
j=v===5
i=v===4
h=v===3
g=v===2
f=0
while(!0){e=e0.d.d
e.toString
if(!(f<e))break
b2=D.c.fb(f,k)
b3=D.c.fb(f,a9)
b4=D.c.fb(f,b1)
d=a5[b2]
b5=a6[b3]
b6=a7[b4]
e=p-f
a0=0
while(!0){a1=e0.d.e
a1.toString
if(!(a0<a1))break
b7=D.c.fb(a0,l)
b8=D.c.fb(a0,a8)
b9=D.c.fb(a0,b0)
a2=d[b7]<<8>>>0
c0=b5[b8]-128
c1=b6[b9]-128
a1=D.c.H(a2+359*c1+128,8)
c2=D.c.aZ((a1&2147483647)-((a1&2147483648)>>>0),0,255)
a1=D.c.H(a2-88*c0-183*c1+128,8)
c3=D.c.aZ((a1&2147483647)-((a1&2147483648)>>>0),0,255)
a1=D.c.H(a2+454*c0+128,8)
c4=D.c.aZ((a1&2147483647)-((a1&2147483648)>>>0),0,255)
if(g){a1=q.a
if(a1!=null)a1.d6(o-a0,f,c2,c3,c4)}else if(h){a1=q.a
if(a1!=null)a1.d6(o-a0,e,c2,c3,c4)}else if(i){a1=q.a
if(a1!=null)a1.d6(a0,e,c2,c3,c4)}else if(j){a1=q.a
if(a1!=null)a1.d6(f,a0,c2,c3,c4)}else if(u){a1=q.a
if(a1!=null)a1.d6(e,a0,c2,c3,c4)}else if(w){a1=q.a
if(a1!=null)a1.d6(e,o-a0,c2,c3,c4)}else{a1=q.a
if(d9){if(a1!=null)a1.d6(f,o-a0,c2,c3,c4)}else if(a1!=null)a1.d6(a0,f,c2,c3,c4)}++a0}++f}break
case 4:w=e0.c
if(w==null)throw C.c(A.aZ("Unsupported color mode (4 components)"))
w=w.d===0
n=d9[0]
a3=d9[1]
a4=d9[2]
c5=d9[3]
a5=n.e
a6=a3.e
a7=a4.e
c6=c5.e
l=n.f
k=n.r
a8=a3.f
a9=a3.r
b0=a4.f
b1=a4.r
c7=c5.f
c8=c5.r
d9=v===8
u=v===7
j=v===6
i=v===5
h=v===4
g=v===3
e=v===2
f=0
while(!0){a1=e0.d.d
a1.toString
if(!(f<a1))break
b2=D.c.fb(f,k)
b3=D.c.fb(f,a9)
b4=D.c.fb(f,b1)
c9=D.c.fb(f,c8)
d=a5[b2]
b5=a6[b3]
b6=a7[b4]
d0=c6[c9]
a1=p-f
a0=0
while(!0){d1=e0.d.e
d1.toString
if(!(a0<d1))break
b7=D.c.fb(a0,l)
b8=D.c.fb(a0,a8)
b9=D.c.fb(a0,b0)
d2=D.c.fb(a0,c7)
if(w){d3=d[b7]
d4=b5[b8]
a2=b6[b9]
d5=d0[d2]}else{a2=d[b7]
c0=b5[b8]
c1=b6[b9]
d5=d0[d2]
d1=c1-128
d3=255-D.c.aZ(D.d.C(a2+1.402*d1),0,255)
d6=c0-128
d4=255-D.d.C(D.d.aZ(a2-0.3441363*d6-0.71413636*d1,0,255))
a2=255-D.c.aZ(D.d.C(a2+1.772*d6),0,255)}d1=D.c.H(d3*d5,8)
c2=(d1&2147483647)-((d1&2147483648)>>>0)
d1=D.c.H(d4*d5,8)
c3=(d1&2147483647)-((d1&2147483648)>>>0)
d1=D.c.H(a2*d5,8)
c4=(d1&2147483647)-((d1&2147483648)>>>0)
if(e){d1=q.a
if(d1!=null)d1.d6(o-a0,f,c2,c3,c4)}else if(g){d1=q.a
if(d1!=null)d1.d6(o-a0,a1,c2,c3,c4)}else if(h){d1=q.a
if(d1!=null)d1.d6(a0,a1,c2,c3,c4)}else if(i){d1=q.a
if(d1!=null)d1.d6(f,a0,c2,c3,c4)}else if(j){d1=q.a
if(d1!=null)d1.d6(a1,a0,c2,c3,c4)}else if(u){d1=q.a
if(d1!=null)d1.d6(a1,o-a0,c2,c3,c4)}else{d1=q.a
if(d9){if(d1!=null)d1.d6(f,o-a0,c2,c3,c4)}else if(d1!=null)d1.d6(a0,f,c2,c3,c4)}++a0}++f}break
default:throw C.c(A.aZ("Unsupported color mode"))}return q},
bHA(d,e,f,g,h,i){A.bHx(i,d,e,f,g,h,!0,i)},
bHB(d,e,f,g,h,i){A.bHy(i,d,e,f,g,h,!0,i)},
bHz(d,e,f,g,h,i){A.bHw(i,d,e,f,g,h,!0,i)},
Fh(d,e,f,g,h){var w,v,u
for(w=0;w<g;++w){v=J.o(d.a,d.d+w)
u=J.o(e.a,e.d+w)
J.bL(f.a,f.d+w,v+u)}},
bHx(d,e,f,g,h,i,j,k){var w,v,u=null,t=h*g,s=h+i,r=A.by(d,!1,u,t),q=A.by(d,!1,u,t),p=A.b7(q,u,0)
if(h===0){q.m(0,0,J.o(r.a,r.d))
A.Fh(A.b7(r,u,1),p,A.b7(q,u,1),e-1,!0)
p.d+=g
r.d+=g
q.d+=g
h=1}for(w=-g,v=e-1;h<s;){A.Fh(r,A.b7(p,u,w),q,1,!0)
A.Fh(A.b7(r,u,1),p,A.b7(q,u,1),v,!0);++h
p.d+=g
r.d+=g
q.d+=g}},
bHy(d,e,f,g,h,i,j,k){var w=null,v=h*g,u=h+i,t=A.by(d,!1,w,v),s=A.by(k,!1,w,v),r=A.b7(s,w,0)
if(h===0){s.m(0,0,J.o(t.a,t.d))
A.Fh(A.b7(t,w,1),r,A.b7(s,w,1),e-1,!0)
t.d+=g
s.d+=g
h=1}else r.d-=g
for(;h<u;){A.Fh(t,r,s,e,!0);++h
r.d+=g
t.d+=g
s.d+=g}},
bHw(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=h*g,p=h+i,o=A.by(d,!1,r,q),n=A.by(k,!1,r,q),m=A.b7(n,r,0)
if(h===0){n.m(0,0,J.o(o.a,o.d))
A.Fh(A.b7(o,r,1),m,A.b7(n,r,1),e-1,!0)
m.d+=g
o.d+=g
n.d+=g
h=1}for(w=-g;h<p;){A.Fh(o,A.b7(m,r,w),n,1,!0)
for(v=1;v<e;++v){u=v-g
t=J.o(m.a,m.d+(v-1))+J.o(m.a,m.d+u)-J.o(m.a,m.d+(u-1))
if((t&4294967040)>>>0===0)s=t
else s=t<0?0:255
u=J.o(o.a,o.d+v)
J.bL(n.a,n.d+v,u+s)}++h
m.d+=g
o.d+=g
n.d+=g}},
bab(d){var w
d=(d&-d)>>>0
w=d!==0?31:32
if((d&65535)!==0)w-=16
if((d&16711935)!==0)w-=8
if((d&252645135)!==0)w-=4
if((d&858993459)!==0)w-=2
return(d&1431655765)!==0?w-1:w},
bSy(d){$.bhj().m(0,0,d)
return $.bvk().i(0,0)},
bsA(d,e,f,g){return(D.c.aZ(d,0,255)|D.c.aZ(e,0,255)<<8|D.c.aZ(f,0,255)<<16|D.c.aZ(g,0,255)<<24)>>>0},
nI(d,e,f){var w,v,u,t,s,r=e.gu(e),q=e.gc2(),p=d.gdn(),o=p==null?null:p.gc2()
if(o==null)o=d.gc2()
w=d.gu(d)
if(r===1){v=d.gu(d)>2?d.gh1():d.i(0,0)
e.m(0,0,A.apj(C.jw(d.i(0,0))?D.d.fj(v):v,o,q))}else if(r<=w)for(u=0;u<r;++u)e.m(0,u,A.apj(d.i(0,u),o,q))
else if(w===2){t=A.apj(d.i(0,0),o,q)
if(r===3){e.m(0,0,t)
e.m(0,1,t)
e.m(0,2,t)}else{f=A.apj(d.i(0,1),o,q)
e.m(0,0,t)
e.m(0,1,t)
e.m(0,2,t)
e.m(0,3,f)}}else{for(u=0;u<w;++u)e.m(0,u,A.apj(d.i(0,u),o,q))
s=w===1?e.i(0,0):0
for(u=w;u<r;++u)e.m(0,u,u===3?f:s)}return e},
bgi(d,e,f,g,h){var w,v,u=d.gdn(),t=u==null?null:u.gc2()
if(t==null)t=d.gc2()
u=h==null
w=u?null:h.gc2()
f=w==null?f:w
if(f==null)f=d.gc2()
w=u?null:h.gu(h)
g=w==null?g:w
if(g==null)g=d.gu(d)
if(e==null)e=0
if(f===t&&g===d.gu(d)){if(u)return d.cj()
h.fo(d)
return h}switch(f.a){case 3:if(u)v=new A.t2(new Uint8Array(g))
else v=h
return A.nI(d,v,e)
case 0:return A.nI(d,u?new A.IU(g,0):h,e)
case 1:return A.nI(d,u?new A.IW(g,0):h,e)
case 2:if(u){u=g<3?1:2
v=new A.IY(g,new Uint8Array(u))}else v=h
return A.nI(d,v,e)
case 4:if(u)v=new A.IV(new Uint16Array(g))
else v=h
return A.nI(d,v,e)
case 5:if(u)v=new A.IX(new Uint32Array(g))
else v=h
return A.nI(d,v,e)
case 6:if(u)v=new A.IS(new Int8Array(g))
else v=h
return A.nI(d,v,e)
case 7:if(u)v=new A.IQ(new Int16Array(g))
else v=h
return A.nI(d,v,e)
case 8:if(u)v=new A.IR(new Int32Array(g))
else v=h
return A.nI(d,v,e)
case 9:if(u)v=new A.IN(new Uint16Array(g))
else v=h
return A.nI(d,v,e)
case 10:if(u)v=new A.IO(new Float32Array(g))
else v=h
return A.nI(d,v,e)
case 11:if(u)v=new A.IP(new Float64Array(g))
else v=h
return A.nI(d,v,e)}},
fd(d){return 0.299*d.gaw()+0.587*d.gaJ()+0.114*d.gaP()},
brr(d,e,f,g){var w=1-g/255
return C.a([D.d.am(255*(1-d/255)*w),D.d.am(255*(1-e/255)*w),D.d.am(255*(1-f/255)*w)],x.t)},
e9(d){var w,v,u
$.bhh()[0]=d
w=$.bvi()[0]
if(d===0)return w>>>16
if($.e8==null)A.eO()
v=$.bk9.bA()[w>>>23&511]
if(v!==0){u=w&8388607
return v+(u+4095+(u>>>13&1)>>>13)}return A.bAs(w)},
bAs(d){var w,v,u=d>>>16&32768,t=(d>>>23&255)-112,s=d&8388607
if(t<=0){if(t<-10)return u
s|=8388608
w=14-t
return(u|D.c.kK(s+(D.c.dA(1,w-1)-1)+(D.c.dG(s,w)&1),w))>>>0}else if(t===143)if(s===0)return u|31744
else{s=s>>>13
v=s===0?1:0
return u|s|v|31744}else{s=s+4095+(s>>>13&1)
if((s&8388608)!==0){++t
s=0}if(t>30)return u|31744
return(u|t<<10|s>>>13)>>>0}},
eO(){var w,v,u,t,s=$.e8
if(s!=null)return s
w=new Uint32Array(65536)
$.e8=C.aHT(w.buffer,0,null)
s=new Uint16Array(512)
$.bk9.b=s
for(v=0;v<256;++v){u=(v&255)-112
if(u<=0||u>=30){s[v]=0
s[(v|256)>>>0]=0}else{t=u<<10>>>0
s[v]=t
s[(v|256)>>>0]=(t|32768)>>>0}}for(v=0;v<65536;++v)w[v]=A.bAt(v)
s=$.e8
s.toString
return s},
bAt(d){var w,v=d>>>15&1,u=d>>>10&31,t=d&1023
if(u===0)if(t===0)return v<<31>>>0
else{for(;(t&1024)===0;){t=t<<1;--u}++u
t&=4294966271}else if(u===31){w=v<<31
if(t===0)return(w|2139095040)>>>0
else return(w|t<<13|2139095040)>>>0}return(v<<31|u+112<<23|t<<13)>>>0}},B,K,F,I,E
J=c[1]
C=c[0]
D=c[2]
G=c[8]
H=c[21]
A=a.updateHolder(c[3],A)
B=c[18]
K=c[9]
F=c[19]
I=c[13]
E=c[20]
A.XG.prototype={}
A.aCz.prototype={}
A.aCy.prototype={
gu(d){var w=this.e
w===$&&C.b()
return w-(this.b-this.c)},
gaV_(){var w=this.b,v=this.e
v===$&&C.b()
return w>=this.c+v},
i(d,e){return this.a[this.b+e]},
bm(){return this.a[this.b++]},
M(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.aIA.prototype={}
A.aIz.prototype={
WN(d){var w,v,u,t,s,r=this,q=d.length
for(;w=r.a,v=w+q,u=r.c,t=u.length,v>t;)r.Q2(v-t)
if(q===1)u[w]=d[0]
else if(q===2){u[w]=d[0]
u[w+1]=d[1]}else if(q===3){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]}else if(q===4){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]
u[w+3]=d[3]}else if(q===5){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]
u[w+3]=d[3]
u[w+4]=d[4]}else if(q===6){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]
u[w+3]=d[3]
u[w+4]=d[4]
u[w+5]=d[5]}else if(q===7){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]
u[w+3]=d[3]
u[w+4]=d[4]
u[w+5]=d[5]
u[w+6]=d[6]}else if(q===8){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]
u[w+3]=d[3]
u[w+4]=d[4]
u[w+5]=d[5]
u[w+6]=d[6]
u[w+7]=d[7]}else if(q===9){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]
u[w+3]=d[3]
u[w+4]=d[4]
u[w+5]=d[5]
u[w+6]=d[6]
u[w+7]=d[7]
u[w+8]=d[8]}else if(q===10){u[w]=d[0]
u[w+1]=d[1]
u[w+2]=d[2]
u[w+3]=d[3]
u[w+4]=d[4]
u[w+5]=d[5]
u[w+6]=d[6]
u[w+7]=d[7]
u[w+8]=d[8]
u[w+9]=d[9]}else for(s=0;s<q;++s,++w)u[w]=d[s]
r.a=v},
b0E(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&C.b()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.Q2(v-t)}D.w.ct(u,w,w+d.gu(0),d.a,d.b)
s.a=s.a+d.gu(0)},
Yd(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return C.bO(w.c.buffer,d,e-d)},
fR(d){return this.Yd(d,null)},
Q2(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
D.w.e5(t,0,u,v)
this.c=t},
aEK(){return this.Q2(null)},
gu(d){return this.a}}
A.b8d.prototype={
uO(d,e){var w,v,u,t,s=d.bm(),r=d.bm(),q=s&8
D.c.H(s,3)
if(q!==8)throw C.c(A.bcf("Only DEFLATE compression supported: "+q))
if(D.c.b4((s<<8>>>0)+r,31)!==0)throw C.c(A.bcf("Invalid FCHECK"))
if((r>>>5&1)!==0){d.M()
throw C.c(A.bcf("FDICT Encoding not currently supported"))}w=A.a2D(B.agj)
v=A.a2D(B.afe)
u=new A.aIz(new Uint8Array(32768))
v=new A.aCm(d,u,w,v)
v.b=!0
v.aB9()
t=x.L.a(C.bO(u.c.buffer,0,u.a))
d.M()
return t}}
A.aBi.prototype={
apM(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=D.c.dA(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.aCm.prototype={
aB9(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&C.b()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&C.b()
if(!(u<v+t))break
if(!s.aF0())break}},
aF0(){var w,v=this,u=v.a
u===$&&C.b()
if(u.gaV_())return!1
w=v.mk(3)
switch(D.c.H(w,1)){case 0:if(v.aFj()===-1)return!1
break
case 1:if(v.a0k(v.r,v.w)===-1)return!1
break
case 2:if(v.aF4()===-1)return!1
break
default:return!1}return(w&1)===0},
mk(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){w===$&&C.b()
u=w.b
t=w.e
t===$&&C.b()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
s.d=(s.d|D.c.dA(u,v))>>>0
s.e=v+8}w=s.d
u=D.c.cN(1,d)
s.d=D.c.fb(w,d)
s.e=v-d
return(w&u-1)>>>0},
Qm(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&C.b()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&C.b()
t=v.b
s=v.e
s===$&&C.b()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|D.c.dA(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&D.c.dA(1,w)-1)>>>0]
q=r>>>16
p.d=D.c.fb(v,q)
p.e=u-q
return r&65535},
aFj(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.mk(16)
v=p.mk(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&C.b()
if(w>v.gu(0))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&C.b()
r=s-(t-u)}else r=w
q=A.xq(v.a,v.d,r,t)
v.b=v.b+q.gu(0)
p.c.b0E(q)
return 0},
aF4(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.mk(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.mk(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.mk(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.mk(3)
if(s===-1)return-1
u[B.a9Y[t]]=s}r=A.a2D(u)
q=l+w
p=new Uint8Array(q)
o=C.bO(p.buffer,0,l)
n=C.bO(p.buffer,l,w)
if(m.atR(q,r,p)===-1)return-1
return m.a0k(A.a2D(o),A.a2D(n))},
a0k(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.Qm(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.aEK()
w.c[w.a++]=v&255
continue}u=v-257
t=B.afs[u]+p.mk(B.a95[u])
s=p.Qm(e)
if(s<0||s>29)return-1
r=B.abV[s]+p.mk(B.aff[s])
for(q=-r;t>r;){w.WN(w.fR(q))
t-=r}if(t===r)w.WN(w.fR(q))
else w.WN(w.Yd(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&C.b()
if(--w.b<0)w.b=0}return 0},
atR(d,e,f){var w,v,u,t,s,r,q,p=this
for(w=0,v=0;v<d;){u=p.Qm(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.mk(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
f[v]=w}break
case 17:s=p.mk(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
f[v]=0}w=t
break
case 18:s=p.mk(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
f[v]=u
v=q
w=u
break}}return 0}}
A.aUa.prototype={}
A.aU9.prototype={}
A.ash.prototype={}
A.Yg.prototype={
j(d){return"Exception: "+this.a},
$ibz:1}
A.lh.prototype={
a3(d,e){return new A.lh(this.a+e.a,this.b+e.b,this.c+e.c)},
ag(d,e){return new A.lh(this.a-e.a,this.b-e.b,this.c-e.c)},
ak(d,e){return new A.lh(this.a*e,this.b*e,this.c*e)},
j(d){return"ColorTriplet("+C.i(this.a)+", "+C.i(this.b)+", "+C.i(this.c)+")"}}
A.Ia.prototype={
aj(){var w=$.au()
return new A.aeI(new C.bh(null,x.cN),new C.m_(D.fb,w),new C.m_(D.fb,w),new C.m_(new C.d4("BlurHasData(\n  url: {url},\n  hash: {hash},\n  width: {width},\n  height: {height},\n),",D.hC,D.b2),w),C.a([],x.q))}}
A.aeI.prototype={
l(){var w=this,v=w.e,u=v.a8$=$.au()
v.a7$=0
v=w.f
v.a8$=u
v.a7$=0
v=w.r
v.a8$=u
v.a7$=0
w.aN()},
G(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.S(d).p2,m=p.a
m.toString
w=C.cO(C.bP("Generate BlurHash from URL",o,o,o,n.d,o,o,o),o,o,o)
v=C.cO(C.bP(y.a,o,o,o,n.z,o,o,o),o,o,o)
u=x.E
t=C.a([],u)
if(p.a.c===D.R)t.push(C.eM(p.a_h(),1))
else t.push(p.a_h())
if(p.a.c===D.R)t.push(F.me)
else t.push(E.dd)
if(p.a.c===D.R)t.push(C.eM(p.a_d(),1))
else t.push(p.a_d())
m=G.bkl(C.Cg(t,D.cX,m.c,o,D.D,D.S,o,o,D.O),p.d)
t=p.a.c
s=C.a([],u)
if(p.a.c===D.R)s.push(C.eM(p.a_f(),1))
else s.push(p.a_f())
if(p.a.c===D.R)s.push(F.me)
else s.push(E.dd)
if(p.a.c===D.R)s.push(C.eM(p.a_c(),1))
else s.push(p.a_c())
t=C.a([new C.bl(D.c2,C.Cg(s,D.aH,t,o,D.D,D.S,o,o,D.O),o)],u)
s=C.bP("Note: Generating BlurHash may cause the UI to become unresponsive temporarily. This is because Flutter does not support isolates on the web yet.",o,o,o,n.Q,D.b1,o,o)
r=p.y
q=r?o:new A.aVP(p)
return K.bes(I.bdB(C.a([F.hv,w,E.bD,v,F.hv,new C.Lv(m,o),E.bD,new A.Kc(B.aEx,t,o),E.dd,s,E.bD,C.cO(C.ayd(r?B.auq:B.aEy,q,o),o,o,o),F.NM],u),D.o7))},
a_c(){var w=null
return C.aR5(!0,D.d6,!1,w,!0,D.J,w,C.bgI(),this.r,w,w,w,w,w,2,C.a32(w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Output format",w,w,w,w,w,w,w,w,C.PQ(!1,B.aEu,w,w,!0,w,w,new A.aVB(this),w,w),w,w,w,w),D.G,!0,w,!0,w,!1,w,D.eh,w,w,w,w,w,w,w,w,10,1,w,!1,"\u2022",w,w,w,w,w,!1,w,!1,w,!0,w,D.kj,w,w,D.dL,D.dm,w,w,w,w,w,w,w,D.ar,w,D.mk,w,w,w,w)},
a_f(){var w=null
return new C.dV(D.bI,w,w,C.bcY(B.acW,!1,w,this.x,B.aEs,new A.aVF(this),!1,x.N),w)},
a_d(){var w=null
return C.aR5(!0,D.d6,!1,w,!0,D.J,w,C.bgI(),this.f,w,w,w,w,w,2,C.a32(w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,D.oi,w,w,w,w,w,w,w,"",w,w,w,"Result will appear here",w,w,w,w,w,w,w,w,"Results",w,w,w,w,w,w,w,w,C.PQ(!1,B.aEp,w,w,!0,w,w,new A.aVC(this),w,w),w,w,w,w),D.G,!0,w,!0,w,!1,w,D.eh,w,w,w,w,D.hy,w,w,w,w,10,w,!1,"\u2022",w,w,w,w,new A.aVD(this),!1,w,!0,w,!0,w,D.kj,w,w,D.dL,D.dm,w,w,w,w,w,w,w,D.ar,w,D.mk,w,w,w,w)},
a_h(){var w=null
return G.beF(this.e,C.a32(w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,D.oi,w,w,w,w,w,w,w,y.a,w,w,w,"https://example.com/image-1.jpg"+this.x+"https://example.com/image-2.jpg",w,w,w,w,w,w,w,w,"Image URLs",w,w,w,w,w,w,w,w,w,w,w,w,w),D.hy,w,10,D.ml,new A.aVG())},
a1j(d){var w=J.Xg(d,new A.aVH())
this.f.sbR(new C.e0(w,new A.aVI(this),w.$ti.h("e0<1,h>")).ce(0,this.x))},
OS(d){return this.aww(d)},
aww(d){var w=0,v=C.v(x.Y),u,t=this,s,r
var $async$OS=C.q(function(e,f){if(e===1)return C.r(f,v)
while(true)switch(w){case 0:s=C.U(d).h("V<1,a2<aQ<h,@>?>>")
r=C.N(new C.V(d,new A.aVK(t),s),!0,s.h("ab.E"))
u=C.j8(new C.V(r,new A.aVL(),C.U(r).h("V<1,a2<kr?>>")),!1,x.e)
w=1
break
case 1:return C.t(u,v)}})
return C.u($async$OS,v)},
Gy(d){return this.avW(d)},
avW(d){var w=0,v=C.v(x.D),u,t
var $async$Gy=C.q(function(e,f){if(e===1)return C.r(f,v)
while(true)switch(w){case 0:w=3
return C.w(A.bQi(C.d_(d,0,null)),$async$Gy)
case 3:t=f
if(t.b===200){u=t.w
w=1
break}else throw C.c(C.dE("Failed to load image from "+d))
case 1:return C.t(u,v)}})
return C.u($async$Gy,v)},
GD(d){return this.awv(d)},
awv(d){var w=0,v=C.v(x.h),u,t=this,s,r
var $async$GD=C.q(function(e,f){if(e===1)return C.r(f,v)
while(true)switch(w){case 0:s=C
r=new A.aVJ(d)
w=3
return C.w(t.Gy(d),$async$GD)
case 3:u=s.bgg(r,f,null,x.D,x.h)
w=1
break
case 1:return C.t(u,v)}})
return C.u($async$GD,v)}}
A.kr.prototype={}
A.axW.prototype={}
A.Kc.prototype={
aj(){var w=null
return new A.S8(new C.uK(w,w),new C.eS(w,w),new C.eS(w,w),new C.eS(w,w),new C.aJ(0,1,x.e7),w,w)}}
A.S8.prototype={
aI(){var w,v,u,t,s,r=this,q=null
r.b9()
w=C.cd(q,D.W,q,q,r)
r.x=w
v=r.w
u=x.m
r.z=C.dY(D.cZ,new C.az(u.a(w),v,v.$ti.h("az<av.T>")),q)
v=r.x
w=$.buY()
t=$.buW()
s=w.$ti.h("dB<av.T>")
u.a(v)
r.y=new C.az(v,new C.dB(t,w,s),s.h("az<av.T>"))
s=r.d
w=$.buX()
u=C.j(s).h("dB<av.T>")
r.Q=new C.az(v,new C.dB(w,s,u),u.h("az<av.T>"))
u=r.e
s=C.j(u).h("dB<av.T>")
r.as=new C.az(v,new C.dB(t,u,s),s.h("az<av.T>"))
s=r.f
u=C.j(s).h("dB<av.T>")
r.at=new C.az(v,new C.dB(t,s,u),u.h("az<av.T>"))
u=r.r
s=C.j(u).h("dB<av.T>")
r.ax=new C.az(v,new C.dB(w,u,s),s.h("az<av.T>"))
s=r.c
s.toString
s=C.Dv(s)
if(s==null)w=q
else{w=r.c
w.toString
w=s.Ly(w)}C.mi(w)
if(w==null){r.a.toString
w=!1}r.ay=w
if(w)r.x.sn(1)
r.a.toString
r.ch=new A.axW()},
l(){var w,v=this
v.ch===$&&C.b()
w=v.x
w===$&&C.b()
w.l()
w=v.z
w===$&&C.b()
w.l()
w=v.CW
if(w!=null)w.an()
v.CW=null
v.aoV()},
aK3(){var w,v,u=this,t=u.c
t.toString
t=C.hg(t,D.OG,x.e_)
t.toString
w=t.gcv()
t=u.c
t.toString
t=C.hg(t,D.bi,x.w)
t.toString
v=u.ay?t.gbp():t.gb2()
u.Z(new A.aYL(u))
u.a.toString
if(C.aU()===D.a4){t=u.CW
if(t!=null)t.an()
u.CW=C.co(D.dp,new A.aYM(u,v,w))}else G.Er(v,w,H.n2)},
aAf(){this.aK3()},
a0T(d){switch(1){case 0:return B.vX
case 1:case 2:return B.vY}},
arW(d){var w
this.a.toString
if(this.a0T(null)!==B.vX)return null
w=this.y
w===$&&C.b()
return C.aMi(B.vB,w)},
asl(d){var w
this.a.toString
if(this.a0T(null)!==B.vY)return null
w=this.y
w===$&&C.b()
return C.aMi(B.vB,w)},
arM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=C.S(d),i=A.axX(d),h=l.ax
h===$&&C.b()
h=h.b.ar(h.a.gn())
w=h==null?i.a:h
if(w==null)w=D.y
h=l.Q
h===$&&C.b()
v=h.b.ar(h.a.gn())
if(v==null)v=B.t2
l.a.toString
h=C.hg(d,D.bi,x.w)
h.toString
u=l.ay?h.gbt():h.gb_()
t=k
switch(j.w.a){case 2:case 4:t=l.ay?h.gb2()+"\n "+h.gaL():h.gbp()+"\n "+h.gaK()
break
case 0:case 1:case 3:case 5:break}h=v.glP()
s=l.at
s===$&&C.b()
s=s.b.ar(s.a.gn())
if(s==null)s=i.f
r=l.as
r===$&&C.b()
r=r.b.ar(r.a.gn())
l.a.toString
q=l.arW(d)
p=l.a.d
o=l.asl(d)
l.a.toString
r=C.ce(k,C.blo(C.a3I(i.c,k,!0,!0,q,k,l.gaAe(),!1,k,p,o,k),s,k,r),!1,k,k,!1,!1,k,k,k,t,k,k,k,k,k,k,k,k,k,k,k,k,k,k,u,k,k,k,k,k,k,k,k)
s=i.d
if(s==null)s=D.M
q=l.z
q===$&&C.b()
n=new C.bl(h,C.dX(C.a([r,C.nV(new C.dV(s,k,q.gn(),e,k),D.J)],x.E),D.F,D.D,D.at,k,D.O),k)
l.a.toString
m=!0
if(i.y==null){h=i.z!=null
m=h}if(m)return C.lD(D.W,!0,k,n,D.c0,w,0,k,k,v,k,k,D.d9)
return C.nY(n,new C.n7(w,k,k,k,v),D.cg)},
b8(d){var w,v=this
v.bv(d)
w=v.c
w.toString
C.S(w)
w=v.c
w.toString
A.axX(w)
w=v.c
w.toString
A.boY(w)
v.a.toString},
bZ(){var w,v,u,t=this,s=t.c
s.toString
w=C.S(s)
s=t.c
s.toString
v=A.axX(s)
s=t.c
s.toString
u=A.boY(s)
t.aKv(v)
t.aL5(v,w)
t.aKF(v,u)
t.aKJ(v,u)
t.aKw(v)
t.aKG(v)
t.dB()},
aKv(d){var w=this.x
w===$&&C.b()
this.a.toString
w.e=D.W},
aL5(d,e){var w,v=this.d
this.a.toString
w=d.z
v.a=w==null?B.t2:w
w=d.y
if(w==null){w=e.CW
w=new C.et(new C.bf(w,1,D.A,-1),D.u,new C.bf(w,1,D.A,-1),D.u)}v.b=w},
aKF(d,e){var w,v=this.e
this.a.toString
w=d.x
v.a=w==null?e.gC6():w
this.a.toString
w=d.w
v.b=w==null?e.gEF():w},
aKJ(d,e){var w,v=this.f
this.a.toString
w=d.r
v.a=w==null?e.gC5():w
this.a.toString
w=d.f
v.b=w==null?e.gen():w},
aKw(d){var w=this.r
this.a.toString
w.a=d.b
w.b=d.a},
aKG(d){var w=this.z
w===$&&C.b()
this.a.toString
w.b=D.cZ
w.c=null},
G(d){var w,v,u,t,s=this,r=null,q=A.axX(d)
if(!s.ay){w=s.x
w===$&&C.b()
v=w.gci()===D.a7}else v=!1
if(v)s.a.toString
w=s.a
w.toString
u=q.e
if(u==null)u=D.aa
t=new C.Dp(v,new C.qP(!v,new C.bl(u,C.dX(w.r,D.F,D.D,D.S,r,D.O),r),r),r)
w=s.x
w===$&&C.b()
u=v?r:t
return C.il(w,s.garL(),u)}}
A.aYI.prototype={
gGx(){var w,v=this,u=v.ay
if(u===$){u=v.ax
if(u===$){w=C.S(v.at)
v.ax!==$&&C.a0()
v.ax=w
u=w}v.ay!==$&&C.a0()
u=v.ay=u.ax}return u},
gEF(){return this.gGx().k3},
gen(){return this.gGx().b},
gC6(){return this.gGx().k3},
gC5(){var w=this.gGx(),v=w.rx
return v==null?w.k3:v}}
A.W9.prototype={
l(){var w=this,v=w.bS$
if(v!=null)v.L(w.gi1())
w.bS$=null
w.aN()},
cm(){this.dm()
this.d2()
this.i2()}}
A.a3J.prototype={
J(){return"ListTileControlAffinity."+this.b}}
A.w3.prototype={
G(d){var w=null
return C.Eg(w,w,new A.Ia(I.iS(d,w,D.v,D.R,w),w),w,!1,w)}}
A.atB.prototype={
J(){return"Channel."+this.b}}
A.ei.prototype={
p(){var w=this.b
return++this.a<w.gu(w)},
gK(){return this.b.i(0,this.a)}}
A.IN.prototype={
cj(){return new A.IN(new Uint16Array(C.bo(this.a)))},
gc2(){return B.dU},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w,v=this.a
if(e<v.length){v=v[e]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=A.e9(f)},
gda(){return this.gaw()},
gaw(){var w,v=this.a
if(!D.f0.gV(v)){v=v[0]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
gaJ(){var w,v=this.a
if(v.length>1){v=v[1]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
gaP(){var w,v=this.a
if(v.length>2){v=v[2]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
gaO(){var w,v=this.a
if(v.length>3){v=v[3]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.f0.gV(u))u[0]=A.e9(v)
v=d.gaJ()
w=u.length
if(w>1)u[1]=A.e9(v)
v=d.gaP()
if(w>2)u[2]=A.e9(v)
v=d.gaO()
if(w>3)u[3]=A.e9(v)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IO.prototype={
cj(){return new A.IO(new Float32Array(C.bo(this.a)))},
gc2(){return B.eB},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=f},
gda(){var w=this.a
return!D.px.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.px.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:1},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.px.gV(u))u[0]=v
v=d.gaJ()
w=u.length
if(w>1)u[1]=v
v=d.gaP()
if(w>2)u[2]=v
v=d.gaO()
if(w>3)u[3]=v},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IP.prototype={
cj(){return new A.IP(new Float64Array(C.bo(this.a)))},
gc2(){return B.fJ},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=f},
gda(){var w=this.a
return!D.py.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.py.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:1},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.py.gV(u))u[0]=v
v=d.gaJ()
w=u.length
if(w>1)u[1]=v
v=d.gaP()
if(w>2)u[2]=v
v=d.gaO()
if(w>3)u[3]=v},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IQ.prototype={
cj(){return new A.IQ(new Int16Array(C.bo(this.a)))},
gc2(){return B.fL},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=D.d.C(f)},
gda(){var w=this.a
return!D.pz.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.pz.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:0},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.pz.gV(u))u[0]=D.d.C(v)
v=d.gaJ()
w=u.length
if(w>1)u[1]=D.d.C(v)
v=d.gaP()
if(w>2)u[2]=D.d.C(v)
v=d.gaO()
if(w>3)u[3]=D.d.C(v)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IR.prototype={
cj(){return new A.IR(new Int32Array(C.bo(this.a)))},
gc2(){return B.fM},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=D.d.C(f)},
gda(){var w=this.a
return!D.da.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.da.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:0},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.da.gV(u))u[0]=C.aE(v)
v=d.gaJ()
w=u.length
if(w>1)u[1]=D.d.C(v)
v=d.gaP()
if(w>2)u[2]=D.d.C(v)
v=d.gaO()
if(w>3)u[3]=D.d.C(v)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IS.prototype={
cj(){return new A.IS(new Int8Array(C.bo(this.a)))},
gc2(){return B.fK},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=D.d.C(f)},
gda(){var w=this.a
return!D.pA.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.pA.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:0},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.pA.gV(u))u[0]=D.d.C(v)
v=d.gaJ()
w=u.length
if(w>1)u[1]=D.d.C(v)
v=d.gaP()
if(w>2)u[2]=D.d.C(v)
v=d.gaO()
if(w>3)u[3]=D.d.C(v)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IU.prototype={
cj(){var w=this.b
w===$&&C.b()
return new A.IU(this.a,w)},
gc2(){return B.d0},
gdn(){return null},
wB(d){var w
if(d<this.a){w=this.b
w===$&&C.b()
w=D.c.dG(w,7-d)&1}else w=0
return w},
Am(d,e){var w
if(d>=this.a)return
d=7-d
w=this.b
w===$&&C.b()
this.b=e!==0?(w|D.c.dA(1,d))>>>0:(w&~(D.c.dA(1,d)&255))>>>0},
i(d,e){return this.wB(e)},
m(d,e,f){return this.Am(e,f)},
gda(){return this.wB(0)},
gaw(){return this.wB(0)},
gaJ(){return this.wB(1)},
gaP(){return this.wB(2)},
gaO(){return this.wB(3)},
gh1(){return A.fd(this)},
fo(d){var w=this,v=d.gaw(),u=d.gaJ(),t=d.gaP(),s=d.gaO()
w.Am(0,v)
w.Am(1,u)
w.Am(2,t)
w.Am(3,s)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
gu(d){return this.a}}
A.IV.prototype={
cj(){return new A.IV(new Uint16Array(C.bo(this.a)))},
gc2(){return B.bg},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=D.d.C(f)},
gda(){var w=this.a
return!D.f0.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.f0.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:0},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.f0.gV(u))u[0]=D.d.C(v)
v=d.gaJ()
w=u.length
if(w>1)u[1]=D.d.C(v)
v=d.gaP()
if(w>2)u[2]=D.d.C(v)
v=d.gaO()
if(w>3)u[3]=D.d.C(v)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IW.prototype={
cj(){var w=this.b
w===$&&C.b()
return new A.IW(this.a,w)},
gc2(){return B.du},
gdn(){return null},
wC(d){var w
if(d<this.a){w=this.b
w===$&&C.b()
w=D.c.dG(w,6-(d<<1>>>0))&3}else w=0
return w},
An(d,e){var w,v,u
if(d>=this.a)return
w=B.a5Q[d]
v=D.d.C(e)
u=this.b
u===$&&C.b()
this.b=(u&w|D.c.dA(v&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.wC(e)},
m(d,e,f){return this.An(e,f)},
gda(){return this.wC(0)},
gaw(){return this.wC(0)},
gaJ(){return this.wC(1)},
gaP(){return this.wC(2)},
gaO(){return this.wC(3)},
gh1(){return A.fd(this)},
fo(d){var w=this,v=d.gaw(),u=d.gaJ(),t=d.gaP(),s=d.gaO()
w.An(0,v)
w.An(1,u)
w.An(2,t)
w.An(3,s)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
gu(d){return this.a}}
A.IX.prototype={
cj(){return new A.IX(new Uint32Array(C.bo(this.a)))},
gc2(){return B.eC},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=D.d.C(f)},
gda(){var w=this.a
return!D.bA.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.bA.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:0},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.bA.gV(u))u[0]=D.d.C(v)
v=d.gaJ()
w=u.length
if(w>1)u[1]=D.d.C(v)
v=d.gaP()
if(w>2)u[2]=D.d.C(v)
v=d.gaO()
if(w>3)u[3]=D.d.C(v)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.IY.prototype={
cj(){return new A.IY(this.a,new Uint8Array(C.bo(this.b)))},
gc2(){return B.dv},
gdn(){return null},
wP(d){var w
if(d<0||d>=this.a)w=0
else{w=this.b
w=d<2?D.c.dG(w[0],4-(d<<2>>>0))&15:D.c.dG(w[1],4-((d&1)<<2))&15}return w},
Bq(d,e){var w,v,u
if(d>=this.a)return
w=D.c.aZ(D.d.C(e),0,15)
if(d>1){d&=1
v=1}else v=0
if(d===0){u=this.b
u[v]=(u[v]&15|w<<4)>>>0}else if(d===1){u=this.b
u[v]=(u[v]&240|w)>>>0}},
i(d,e){return this.wP(e)},
m(d,e,f){return this.Bq(e,f)},
gda(){return this.wP(0)},
gaw(){return this.wP(0)},
gaJ(){return this.wP(1)},
gaP(){return this.wP(2)},
gaO(){return this.wP(3)},
gh1(){return A.fd(this)},
fo(d){var w=this,v=d.gaw(),u=d.gaJ(),t=d.gaP(),s=d.gaO()
w.Bq(0,v)
w.Bq(1,u)
w.Bq(2,t)
w.Bq(3,s)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
gu(d){return this.a}}
A.t2.prototype={
cj(){return new A.t2(new Uint8Array(C.bo(this.a)))},
gc2(){return B.C},
gu(d){return this.a.length},
gdn(){return null},
i(d,e){var w=this.a
return e<w.length?w[e]:0},
m(d,e,f){var w=this.a
if(e<w.length)w[e]=D.d.C(f)},
gda(){var w=this.a
return!D.w.gV(w)?w[0]:0},
gaw(){var w=this.a
return!D.w.gV(w)?w[0]:0},
gaJ(){var w=this.a
return w.length>1?w[1]:0},
gaP(){var w=this.a
return w.length>2?w[2]:0},
gaO(){var w=this.a
return w.length>3?w[3]:255},
gh1(){return A.fd(this)},
fo(d){var w,v=d.gaw(),u=this.a
if(!D.w.gV(u))u[0]=D.d.C(v)
v=d.gaJ()
w=u.length
if(w>1)u[1]=D.d.C(v)
v=d.gaP()
if(w>2)u[2]=D.d.C(v)
v=d.gaO()
if(w>3)u[3]=D.d.C(v)},
gR(d){return new A.ei(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gu(e)===this.a.length&&e.gq(e)===C.ah(C.N(this,!0,C.j(this).h("m.E")))},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1}
A.Zc.prototype={}
A.IT.prototype={}
A.j7.prototype={
J(){return"Format."+this.b}}
A.Ye.prototype={
J(){return"BlendMode."+this.b}}
A.Kb.prototype={
Ff(d){var w=$.bbY()
if(!w.a5(d))return"<unknown>"
return w.i(0,d).a},
j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a,v=C.eA(w,w.r,C.j(w).c),u=x.p,t=x.r,s=x.N,r=x.P,q="";v.p();){p=v.d
q+=p+"\n"
o=w.i(0,p)
for(p=o.a,n=new C.lC(p,p.r,C.j(p).h("lC<1>")),n.c=p.e;n.p();){p=n.d
m=o.i(0,p)
q=m==null?q+("\t"+i.Ff(p)+"\n"):q+("\t"+i.Ff(p)+": "+m.j(0)+"\n")}for(p=o.b.a,n=new C.lC(p,p.r,C.j(p).h("lC<1>")),n.c=p.e;n.p();){l=n.d
q+=l+"\n"
if(!p.a5(l))p.m(0,l,new A.ob(C.x(u,t),new A.ts(C.x(s,r))))
k=p.i(0,l)
for(l=k.a,j=new C.lC(l,l.r,C.j(l).h("lC<1>")),j.c=l.e;j.p();){l=j.d
m=k.i(0,l)
q=m==null?q+("\t"+i.Ff(l)+"\n"):q+("\t"+i.Ff(l)+": "+m.j(0)+"\n")}}}return q.charCodeAt(0)==0?q:q},
kh(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.e
a6.e=!0
w=a6.d
v=a6.X()
if(v===18761){a6.e=!1
if(a6.X()!==42){a6.e=a5
return!1}}else if(v===19789){a6.e=!0
if(a6.X()!==42){a6.e=a5
return!1}}else return!1
u=a6.M()
for(t=this.a,s=x.gn,r=x.p,q=x.r,p=x.N,o=x.P,n=0;u>0;u=e){a6.d=w+u
m=new A.ob(C.x(r,q),new A.ts(C.x(p,o)))
l=a6.X()
k=C.a(new Array(l),s)
for(j=0;j<l;++j)k[j]=this.a54(a6,w)
for(i=k.length,h=0;h<k.length;k.length===i||(0,C.H)(k),++h){g=k[h]
f=g.b
if(f!=null)m.m(0,g.a,f)}t.m(0,"ifd"+n,m);++n
e=a6.M()
if(e===u)break}for(t=t.gbq(),i=C.j(t),t=new C.b8(J.aA(t.a),t.b,i.h("b8<1,2>")),i=i.y[1];t.p();){f=t.a
if(f==null)f=i.a(f)
for(d=B.Hv.gcW(),d=d.gR(d),a0=f.a,a1=f.b.a;d.p();){a2=d.gK()
if(a0.a5(a2)){a6.d=w+f.i(0,a2).C(0)
m=new A.ob(C.x(r,q),new A.ts(C.x(p,o)))
l=a6.X()
k=C.a(new Array(l),s)
for(j=0;j<l;++j)k[j]=this.a54(a6,w)
for(a3=k.length,h=0;h<k.length;k.length===a3||(0,C.H)(k),++h){g=k[h]
a4=g.b
if(a4!=null)m.m(0,g.a,a4)}a2=B.Hv.i(0,a2)
a2.toString
a1.m(0,a2,m)}}}a6.e=a5
return!1},
a54(d,e){var w,v,u,t,s=d.X(),r=d.X(),q=d.M(),p=new A.agK(s,null)
if(r>13)return p
w=B.BV[r]
v=q*B.oV[r]
u=d.d
if((v>4?d.d=d.M()+e:u)+v>d.c)return p
t=d.hp(v)
switch(w.a){case 0:break
case 6:p.b=new A.tt(new Int8Array(C.bo(C.blU(t.eJ().buffer,0,q))))
break
case 1:p.b=new A.pU(new Uint8Array(C.bo(t.hp(q).eJ())))
break
case 7:p.b=new A.CA(new Uint8Array(C.bo(t.hp(q).eJ())))
break
case 2:p.b=new A.xc(q===0?"":t.f4(q-1))
break
case 3:p.b=A.bkP(t,q)
break
case 4:p.b=A.bkK(t,q)
break
case 5:p.b=A.bkL(t,q)
break
case 10:p.b=A.bkN(t,q)
break
case 8:p.b=A.bkO(t,q)
break
case 9:p.b=A.bkM(t,q)
break
case 11:p.b=A.bkQ(t,q)
break
case 12:p.b=A.bkJ(t,q)
break}d.d=u+4
return p}}
A.agK.prototype={}
A.a1r.prototype={}
A.ts.prototype={
apN(d){d.a.aF(0,new A.aBH(this))},
a5(d){return this.a.a5(d)},
i(d,e){var w=this.a
if(!w.a5(e))w.m(0,e,new A.ob(C.x(x.p,x.r),new A.ts(C.x(x.N,x.P))))
w=w.i(0,e)
w.toString
return w},
m(d,e,f){this.a.m(0,e,f)}}
A.ob.prototype={
aOH(d){d.a.aF(0,new A.aBI(this))
d.b.a.aF(0,new A.aBJ(this))},
a5(d){return this.a.a5(d)},
i(d,e){if(typeof e=="string")e=B.HB.i(0,e)
if(C.jw(e))return this.a.i(0,e)
return null},
m(d,e,f){var w
if(typeof e=="string")e=B.HB.i(0,e)
if(!C.jw(e))return
if(f instanceof A.fF)this.a.m(0,e,f)
else{w=$.bbY().i(0,e)
if(w!=null)switch(w.b.a){case 1:break
case 2:break
case 3:break
case 4:break
case 5:break
case 6:break
case 7:break
case 8:break
case 9:break
case 10:break
case 11:break
case 12:break
case 0:break}}}}
A.iw.prototype={
J(){return"IfdValueType."+this.b}}
A.fF.prototype={
fA(d,e){return 0},
C(d){return this.fA(0,0)},
nZ(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var w=this
if(e==null)return!1
return e instanceof A.fF&&w.gej()===e.gej()&&w.gu(w)===e.gu(e)&&w.gq(w)===e.gq(e)},
gq(d){return 0}}
A.pU.prototype={
cj(){return new A.pU(new Uint8Array(C.bo(this.a)))},
gej(){return B.vD},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.pU){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
fA(d,e){return this.a[e]},
C(d){return this.fA(0,0)},
nZ(){return this.a},
j(d){var w=this.a
return w.length===1?""+w[0]:C.i(w)}}
A.xc.prototype={
cj(){return new A.xc(this.a)},
gej(){return B.ax},
gu(d){return this.a.length+1},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.xc){w=this.a
v=e.a
w=w.length+1===v.length+1&&D.e.gq(w)===D.e.gq(v)}else w=!1
return w},
gq(d){return D.e.gq(this.a)},
nZ(){return new Uint8Array(C.bo(new C.cq(this.a)))},
j(d){return this.a}}
A.xi.prototype={
apS(d,e){var w,v
for(w=this.a,v=0;v<e;++v)w[v]=d.X()},
cj(){return new A.xi(new Uint16Array(C.bo(this.a)))},
gej(){return B.ak},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.xi){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
fA(d,e){return this.a[e]},
C(d){return this.fA(0,0)},
nZ(){return C.bO(this.a.buffer,0,null)},
j(d){var w=this.a
return w.length===1?""+w[0]:C.i(w)}}
A.xd.prototype={
apP(d,e){var w,v
for(w=this.a,v=0;v<e;++v)w[v]=d.M()},
cj(){return new A.xd(new Uint32Array(C.bo(this.a)))},
gej(){return B.bw},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.xd){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
fA(d,e){return this.a[e]},
C(d){return this.fA(0,0)},
nZ(){return C.bO(this.a.buffer,0,null)},
j(d){var w=this.a
return w.length===1?""+w[0]:C.i(w)}}
A.xe.prototype={
cj(){return new A.xe(C.fp(this.a,!0,x.i))},
gej(){return B.c4},
gu(d){return this.a.length},
fA(d,e){return J.Xf(this.a[e])},
C(d){return this.fA(0,0)},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.xe){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ah(w)===C.ah(u)}else w=!1
return w},
gq(d){return C.ah(this.a)},
j(d){var w=this.a
return w.length===1?C.i(w[0]):C.i(w)}}
A.tt.prototype={
cj(){return new A.tt(new Int8Array(C.bo(this.a)))},
gej(){return B.vH},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.tt){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
fA(d,e){return this.a[e]},
C(d){return this.fA(0,0)},
nZ(){return C.bO(this.a.buffer,0,null)},
j(d){var w=this.a
return w.length===1?""+w[0]:C.i(w)}}
A.xh.prototype={
apR(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v){u=d.X()
$.jA()[0]=u
w[v]=$.ko()[0]}},
cj(){return new A.xh(new Int16Array(C.bo(this.a)))},
gej(){return B.vI},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.xh){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
fA(d,e){return this.a[e]},
C(d){return this.fA(0,0)},
nZ(){return C.bO(this.a.buffer,0,null)},
j(d){var w=this.a
return w.length===1?""+w[0]:C.i(w)}}
A.xf.prototype={
apQ(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v){u=d.M()
$.e5()[0]=u
w[v]=$.hu()[0]}},
cj(){return new A.xf(new Int32Array(C.bo(this.a)))},
gej(){return B.vJ},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.xf){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
fA(d,e){return this.a[e]},
C(d){return this.fA(0,0)},
nZ(){return C.bO(this.a.buffer,0,null)},
j(d){var w=this.a
return w.length===1?""+w[0]:C.i(w)}}
A.xg.prototype={
cj(){return new A.xg(C.fp(this.a,!0,x.i))},
gej(){return B.vE},
gu(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.xg){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ah(w)===C.ah(u)}else w=!1
return w},
gq(d){return C.ah(this.a)},
fA(d,e){return J.Xf(this.a[e])},
C(d){return this.fA(0,0)},
j(d){var w=this.a
return w.length===1?C.i(w[0]):C.i(w)}}
A.Cz.prototype={
apT(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v){u=d.M()
$.e5()[0]=u
w[v]=$.vQ()[0]}},
cj(){return new A.Cz(new Float32Array(C.bo(this.a)))},
gej(){return B.vF},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.Cz){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
nZ(){return C.bO(this.a.buffer,0,null)},
j(d){var w=this.a
return w.length===1?C.i(w[0]):C.i(w)}}
A.Cy.prototype={
apO(d,e){var w,v
for(w=this.a,v=0;v<e;++v)w[v]=d.Lx()},
cj(){return new A.Cy(new Float64Array(C.bo(this.a)))},
gej(){return B.vG},
gu(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.Cy){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
nZ(){return C.bO(this.a.buffer,0,null)},
j(d){var w=this.a
return w.length===1?C.i(w[0]):C.i(w)}}
A.CA.prototype={
cj(){return new A.CA(new Uint8Array(C.bo(this.a)))},
gej(){return B.fO},
gu(d){return this.a.length},
nZ(){return this.a},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.CA){w=this.a
v=e.a
w=w.length===v.length&&C.ah(w)===C.ah(v)}else w=!1
return w},
gq(d){return C.ah(this.a)},
j(d){return"<data>"}}
A.hU.prototype={
J(){return"BmpCompression."+this.b}}
A.aso.prototype={}
A.w4.prototype={
Zc(d,e){var w,v,u,t,s,r,q,p=this,o=p.d,n=o<=40
if(n){w=p.r
w=w===B.n6||w===B.n7}else w=!0
if(w){w=p.as=d.M()
v=A.bab(w)
p.CW=v
u=D.c.dG(w,v)
w=u>0
p.cx=w?255/u:0
v=p.at=d.M()
t=A.bab(v)
p.cy=t
s=D.c.dG(v,t)
p.db=w?255/s:0
v=p.ax=d.M()
t=A.bab(v)
p.dx=t
r=D.c.dG(v,t)
p.dy=w?255/r:0
if(!n||p.r===B.n7){n=p.ay=d.M()
w=A.bab(n)
p.fr=w
q=D.c.dG(n,w)
p.fx=q>0?255/q:0}else if(p.f===16){p.ay=4278190080
p.fr=24
p.fx=1}else{p.ay=4278190080
p.fr=24
p.fx=1}}else if(p.f===16){p.as=31744
p.CW=10
p.cx=8.225806451612904
p.at=992
p.cy=5
p.db=8.225806451612904
p.ax=31
p.dx=0
p.dy=8.225806451612904
p.fx=p.fr=p.ay=0}else{p.as=16711680
p.CW=16
p.cx=1
p.at=65280
p.cy=8
p.db=1
p.ax=255
p.dx=0
p.dy=1
p.ay=4278190080
p.fr=24
p.fx=1}n=d.d
d.d=n+(o-(n-p.fy))
if(p.f<=8)p.aZH(d)},
gDd(){var w=this.d
if(w!==40)if(w===124){w=this.ay
w===$&&C.b()
w=w===0}else w=!1
else w=!0
return w},
gbd(){return Math.abs(this.c)},
aZH(d){var w,v,u,t,s,r=this,q=r.z
if(q===0)q=D.c.cN(1,r.f)
r.ch=new A.or(new Uint8Array(q*3),q,3)
for(w=0;w<q;++w){v=J.o(d.a,d.d++)
u=J.o(d.a,d.d++)
t=J.o(d.a,d.d++)
s=J.o(d.a,d.d++)
r.ch.FC(w,t,u,v,s)}},
aQo(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(n.ch!=null){w=n.f
if(w===1){v=d.bm()
for(u=7;u>=0;--u)e.$4(D.c.kK(v,u)&1,0,0,0)
return}else if(w===2){v=d.bm()
for(u=6;u>=0;u-=2)e.$4(D.c.kK(v,u)&2,0,0,0)}else if(w===4){v=d.bm()
e.$4(D.c.H(v,4)&15,0,0,0)
e.$4(v&15,0,0,0)
return}else if(w===8){e.$4(d.bm(),0,0,0)
return}}w=n.r
if(w===B.n6&&n.f===32){t=d.M()
w=n.as
w===$&&C.b()
s=n.CW
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.cx
w===$&&C.b()
r=D.d.C(s*w)
w=n.at
w===$&&C.b()
s=n.cy
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.db
w===$&&C.b()
q=D.d.C(s*w)
w=n.ax
w===$&&C.b()
s=n.dx
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.dy
w===$&&C.b()
p=D.d.C(s*w)
if(n.gDd())o=255
else{w=n.ay
w===$&&C.b()
s=n.fr
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.fx
w===$&&C.b()
o=D.d.C(s*w)}return e.$4(r,q,p,o)}else{s=n.f
if(s===32&&w===B.rX){p=d.bm()
q=d.bm()
r=d.bm()
o=d.bm()
return e.$4(r,q,p,n.gDd()?255:o)}else if(s===24){p=d.bm()
q=d.bm()
return e.$4(d.bm(),q,p,255)}else if(s===16){t=d.X()
w=n.as
w===$&&C.b()
s=n.CW
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.cx
w===$&&C.b()
r=D.d.C(s*w)
w=n.at
w===$&&C.b()
s=n.cy
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.db
w===$&&C.b()
q=D.d.C(s*w)
w=n.ax
w===$&&C.b()
s=n.dx
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.dy
w===$&&C.b()
p=D.d.C(s*w)
if(n.gDd())o=255
else{w=n.ay
w===$&&C.b()
s=n.fr
s===$&&C.b()
s=D.c.dG((t&w)>>>0,s)
w=n.fx
w===$&&C.b()
o=D.d.C(s*w)}return e.$4(r,q,p,o)}else throw C.c(A.aZ("Unsupported bitsPerPixel ("+s+") or compression ("+w.j(0)+")."))}}}
A.Yk.prototype={
kN(d){var w,v=null
if(!A.bci(A.by(d,!1,v,0)))return v
w=A.by(d,!1,v,0)
this.a=w
return this.b=A.bxN(w,v)},
hb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.b
if(d==null)return new A.xk(e,e,e,e,0,B.aq,0,0)
w=f.a
w===$&&C.b()
v=d.a.b
v===$&&C.b()
w.d=v
u=d.f
v=d.b
t=D.c.bg(v*u+31,32)*4
w=f.c
if(w)s=4
else if(u===1||u===4||u===8)s=1
else{r=u===32?4:3
s=r}if(w)q=B.C
else if(u===1)q=B.d0
else{if(u===2)r=B.du
else if(u===4)r=B.dv
else r=B.C
q=r}p=w?e:d.ch
o=A.ek(e,e,q,0,B.aq,d.gbd(),e,0,s,p,B.C,v,!1)
for(n=o.gbd()-1,w=d.c,v=1/w<0,r=w<0,w=w===0;n>=0;--n){m={}
if(!(w?v:r))l=n
else{k=o.a
k=k==null?e:k.b
l=(k==null?0:k)-1-n}k=f.a
j=k.fR(t)
k.d=k.d+(j.c-j.d)
k=o.a
i=k==null
h=i?e:k.a
if(h==null)h=0
m.a=0
g=i?e:k.f8(0,l,e)
if(g==null)g=new A.fY()
for(;m.a<h;)d.aQo(j,new A.asn(m,f,h,d,g))}return o},
l0(d,e){if(this.kN(d)==null)return null
return this.hb(0)}}
A.avz.prototype={}
A.ave.prototype={}
A.avf.prototype={}
A.a1t.prototype={}
A.a37.prototype={
DW(){return this.w},
n0(d,e,f,g,h){throw C.c(A.aZ("B44 compression not yet supported."))},
zj(d,e,f){return this.n0(d,e,f,null,null)},
j(d){return C.i(this.r)+" "+this.x}}
A.Ce.prototype={
J(){return"ExrChannelType."+this.b}}
A.wO.prototype={
J(){return"ExrChannelName."+this.b}}
A.a1u.prototype={
gaQe(){var w=this.c
w===$&&C.b()
return w},
apE(d){var w=this,v=d.vH()
w.a=v
if(v.length===0)return
w.c=B.agw[d.M()]
d.bm()
d.d+=3
w.f=d.M()
w.r=d.M()
v=w.a
if(v==="R"){w.w=!0
w.b=B.ZE}else if(v==="G"){w.w=!0
w.b=B.ZF}else if(v==="B"){w.w=!0
w.b=B.ZG}else if(v==="A"){w.w=!0
w.b=B.ZH}else{w.w=!1
w.b=B.ZI}switch(w.c.a){case 0:w.d=4
break
case 1:w.d=2
break
case 2:w.d=4
break
default:throw C.c(A.aZ("EXR Invalid pixel type: "+w.gaQe().j(0)))}}}
A.mz.prototype={
J(){return"ExrCompressorType."+this.b}}
A.axY.prototype={
n0(d,e,f,g,h){throw C.c(A.aZ("Unsupported compression type"))},
zj(d,e,f){return this.n0(d,e,f,null,null)}}
A.aCD.prototype={}
A.a1v.prototype={}
A.ay_.prototype={
apF(d){var w,v,u,t,s=this,r=A.by(d,!1,null,0)
if(r.M()!==20000630)throw C.c(A.aZ("File is not an OpenEXR image file."))
w=s.d=r.bm()
if(w!==2)throw C.c(A.aZ("Cannot read version "+w+" image files."))
w=s.e=r.mU()
if((w&4294967289)>>>0!==0)throw C.c(A.aZ("The file format version number's flag field contains unrecognized flags."))
if((w&16)===0){v=s.c
u=A.bl_(v.length,(w&2)!==0,r)
if(u.w>0)v.push(u)}else for(w=s.c;!0;){u=A.bl_(w.length,(s.e&2)!==0,r)
if(u.w<=0)break
w.push(u)}w=s.c
v=w.length
if(v===0)throw C.c(A.aZ("Error reading image header"))
for(t=0;t<w.length;w.length===v||(0,C.H)(w),++t)w[t].aZG(r)
s.aGu(r)},
aGu(d){var w,v,u,t,s=this
for(w=s.c,v=w.length,u=0;u<w.length;w.length===v||(0,C.H)(w),++u){t=w[u]
s.a=Math.max(s.a,t.w)
s.b=Math.max(s.b,t.x)
if(t.db)s.aGE(t,d)
else s.aGC(t,d)}},
aGE(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.b()
w=(b3&16)!==0
b3=b4.b
b3.toString
v=b4.CW
u=b4.ay
t=A.b7(b5,b2,0)
s=b4.c
r=b4.a
q=0
p=0
while(!0){o=b4.k1
o.toString
if(!(q<o))break
n=0
while(!0){o=b4.id
o.toString
if(!(n<o))break
for(o=p!==0,m=0,l=0;m<b4.go[q];++m)for(k=0;k<b4.fy[n];++k,++l){if(o)break
t.d=u[p][l]
if(w)if(t.M()!==r)throw C.c(A.aZ("Invalid Image Data"))
j=t.M()
i=t.M()
t.M()
t.M()
h=t.fR(t.M())
t.d=t.d+(h.c-h.d)
g=b4.dy
g.toString
f=i*g
e=b4.dx
e.toString
g=v.n0(h,j*e,f,e,g)
d=g.length
a0=new A.i2(g,0,d,0,!1)
a1=v.a
a2=v.b
a3=s.length
a4=0
a5=0
while(!0){if(!(a5<a2&&f<this.b))break
for(a6=0;a6<a3;++a6){if(a4>=d)break
a7=s[a6]
g=b4.dx
g.toString
a8=j*g
for(a9=0;a9<a1;++a9,++a8){g=a7.c
g===$&&C.b()
switch(g.a){case 1:g=a0.X()
e=$.e8
b0=(e!=null?e:A.eO())[g]
break
case 2:b0=a0.X()
break
case 0:b0=a0.M()
break
default:b0=b2}g=a7.d
g===$&&C.b()
a4+=g
g=a7.w
g===$&&C.b()
if(g){g=b3.a
b1=g==null?b2:g.f8(a8,f,b2)
if(b1==null)b1=new A.fY()
g=a7.b
g===$&&C.b()
b1.m(0,g.a,b0)}else{g=a7.a
g===$&&C.b()
e=b3.b
g=e!=null?e.i(0,g):b2
if(g!=null)g.d6(a8,f,b0,0,0)}}}++a5;++f}}++n;++p}++q}},
aGC(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.b()
w=(a5&16)!==0
a5=a6.b
a5.toString
v=a6.CW
u=a6.ay[0]
t=a6.cx
s=A.b7(a7,a4,0)
for(r=u.length,q=a6.c,p=v!=null,o=0,n=0;n<r;++n){s.d=u[n]
if(w)if(s.M()!==3.141592653589793)throw C.c(A.aZ("Invalid Image Data"))
m=s.M()
l=$.e5()
l[0]=m
m=$.hu()
l[0]=s.M()
k=s.fR(m[0])
s.d=s.d+(k.c-k.d)
if(p){m=v.zj(k,0,o)
j=new A.i2(m,0,m.length,0,!1)}else j=k
i=j.c-j.d
h=q.length
g=0
while(!0){if(!(g<t&&o<this.b))break
f=a6.cy[o]
if(f>=i)break
for(e=0;e<h;++e){if(f>=i)break
d=q[e]
a0=a6.w
for(a1=0;a1<a0;++a1){m=d.c
m===$&&C.b()
switch(m.a){case 1:m=j.X()
l=$.e8
a2=(l!=null?l:A.eO())[m]
break
case 2:a2=j.X()
break
case 0:a2=j.M()
break
default:a2=a4}m=d.d
m===$&&C.b()
f+=m
m=d.w
m===$&&C.b()
if(m){m=a5.a
a3=m==null?a4:m.f8(a1,o,a4)
if(a3==null)a3=new A.fY()
m=d.b
m===$&&C.b()
a3.m(0,m.a,a2)}else{m=d.a
m===$&&C.b()
l=a5.b
m=l!=null?l.i(0,m):a4
if(m!=null)m.d6(a1,o,a2,0,0)}}}++g;++o}}}}
A.Ke.prototype={
apG(a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=C.x(x.N,x.I)
for(w=a1.e,v=x.t,u=a1.c,t=B.dU;!0;){s=a6.vH()
if(s.length===0)break
a6.vH()
r=a6.M()
q=a6.fR(r)
a6.d=a6.d+(q.c-q.d)
w.m(0,s,new A.a1t(s,r))
switch(s){case"channels":for(;!0;){p=new A.a1u()
p.apE(q)
o=p.a
o===$&&C.b()
if(o.length===0)break
n=p.w
n===$&&C.b()
if(n){++a1.d
o=p.c
o===$&&C.b()
if(o===B.ob)t=B.dU
else t=o===B.oc?B.eB:B.eC}else{n=p.c
n===$&&C.b()
if(n===B.ob){n=a1.w
m=a1.x
a3.m(0,o,new A.CE(new Uint16Array(n*m),n,m,1))}else if(n===B.oc){n=a1.w
m=a1.x
a3.m(0,o,new A.CF(new Float32Array(n*m),n,m,1))}else if(n===B.uZ){n=a1.w
m=a1.x
a3.m(0,o,new A.CJ(new Uint32Array(n*m),n,m,1))}}u.push(p)}break
case"chromaticities":o=new Float32Array(8)
a1.at=o
n=q.M()
m=$.e5()
m[0]=n
n=$.vQ()
o[0]=n[0]
o=a1.at
m[0]=q.M()
o[1]=n[0]
o=a1.at
m[0]=q.M()
o[2]=n[0]
o=a1.at
m[0]=q.M()
o[3]=n[0]
o=a1.at
m[0]=q.M()
o[4]=n[0]
o=a1.at
m[0]=q.M()
o[5]=n[0]
o=a1.at
m[0]=q.M()
o[6]=n[0]
o=a1.at
m[0]=q.M()
o[7]=n[0]
break
case"compression":a1.ax=B.a4m[J.o(q.a,q.d++)]
break
case"dataWindow":o=q.M()
n=$.e5()
n[0]=o
o=$.hu()
m=o[0]
n[0]=q.M()
l=o[0]
n[0]=q.M()
k=o[0]
n[0]=q.M()
o=a1.r=C.a([m,l,k,o[0]],v)
a1.w=o[2]-o[0]+1
a1.x=o[3]-o[1]+1
break
case"displayWindow":o=q.M()
n=$.e5()
n[0]=o
$.hu()
n[0]=q.M()
n[0]=q.M()
n[0]=q.M()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.M()
$.e5()[0]=o
$.vQ()
break
case"screenWindowCenter":o=q.M()
n=$.e5()
n[0]=o
$.vQ()
n[0]=q.M()
break
case"screenWindowWidth":o=q.M()
$.e5()[0]=o
$.vQ()
break
case"tiles":a1.dx=q.M()
a1.dy=q.M()
o=J.o(q.a,q.d++)
a1.fr=o&15
a1.fx=D.c.H(o,4)&15
break
case"type":j=q.vH()
if(j!=="deepscanline")if(j!=="deeptile")throw C.c(A.aZ("EXR Invalid type: "+j))
break
default:break}}w=a1.w
a1.b=A.ek(a2,a2,t,0,B.aq,a1.x,a2,0,a1.d,a2,B.C,w,!1)
for(w=C.eA(a3,a3.r,a3.$ti.c);w.p();){v=w.d
o=a1.b
o.toString
n=a3.i(0,v)
n.toString
o.aj4(v,n)}if(a1.db){w=a1.r
w===$&&C.b()
a1.id=a1.ass(w[0],w[2],w[1],w[3])
w=a1.r
a1.k1=a1.ast(w[0],w[2],w[1],w[3])
if(a1.fr!==2)a1.k1=1
w=a1.id
w.toString
v=a1.r
a1.fy=a1.a_l(w,v[0],v[2],a1.dx,a1.fx)
v=a1.k1
v.toString
w=a1.r
a1.go=a1.a_l(v,w[1],w[3],a1.dy,a1.fx)
w=a1.asq()
a1.k2=w
v=a1.dx
v.toString
v=w*v
a1.k3=v
a1.CW=A.bk3(a1.ax,a1,v,a1.dy)
a7.a=a7.b=0
v=a1.id
v.toString
w=a1.k1
w.toString
a1.ay=C.a3K(v*w,new A.ay0(a7,a1),!0,x.bv)}else{w=a1.x
v=a1.ch=new Uint32Array(w+1)
for(o=u.length,n=a1.r,m=a1.w,i=0;i<o;++i){h=u[i]
l=h.d
l===$&&C.b()
k=h.f
k===$&&C.b()
g=D.c.e7(l*m,k)
for(l=h.r,f=0;f<w;++f){n===$&&C.b()
k=n[1]
l===$&&C.b()
if(D.c.b4(f+k,l)===0)v[f]=v[f]+g}}for(e=0,f=0;f<w;++f)e=Math.max(e,v[f])
w=A.bk3(a1.ax,a1,e,a2)
a1.CW=w
w=a1.cx=w.DW()
v=a1.ch
u=v.length
o=new Uint32Array(u)
a1.cy=o
for(--u,d=0,a0=0;a0<=u;++a0){if(D.c.b4(a0,w)===0)d=0
o[a0]=d
d+=v[a0]}w=D.c.e7(a1.x+w,w)
a1.ay=C.a([new Uint32Array(w-1)],x.hh)}},
ass(d,e,f,g){var w,v,u,t=this
switch(t.fr){case 0:w=1
break
case 1:v=Math.max(e-d+1,g-f+1)
w=(t.fx===0?t.Gz(v):t.Ge(v))+1
break
case 2:u=e-d+1
w=(t.fx===0?t.Gz(u):t.Ge(u))+1
break
default:throw C.c(A.aZ("Unknown LevelMode format."))}return w},
ast(d,e,f,g){var w,v,u,t=this
switch(t.fr){case 0:w=1
break
case 1:v=Math.max(e-d+1,g-f+1)
w=(t.fx===0?t.Gz(v):t.Ge(v))+1
break
case 2:u=g-f+1
w=(t.fx===0?t.Gz(u):t.Ge(u))+1
break
default:throw C.c(A.aZ("Unknown LevelMode format."))}return w},
Gz(d){var w
for(w=0;d>1;){++w
d=D.c.H(d,1)}return w},
Ge(d){var w,v
for(w=0,v=0;d>1;){if((d&1)!==0)v=1;++w
d=D.c.H(d,1)}return w+v},
asq(){var w,v,u,t,s
for(w=this.c,v=w.length,u=0,t=0;t<v;++t){s=w[t].d
s===$&&C.b()
u+=s}return u},
a_l(d,e,f,g,h){var w,v,u,t,s,r,q=J.hf(d,x.p)
for(w=h===1,v=f-e+1,u=0;u<d;++u){t=D.c.cN(1,u)
s=D.c.e7(v,t)
if(w&&s*t<v)++s
r=Math.max(s,1)
g.toString
q[u]=D.c.e7(r+g-1,g)}return q}}
A.a38.prototype={
aZG(d){var w,v,u,t,s=this
if(s.db)for(w=0;w<s.ay.length;++w)for(v=0;u=s.ay[w],v<u.length;++v)u[v]=d.W1()
else{t=s.ay[0].length
for(w=0;w<t;++w)s.ay[0][w]=d.W1()}}}
A.aCE.prototype={
apY(d,e,f){var w,v,u,t=this,s=d.c.length,r=J.hf(s,x.aX)
for(w=0;w<s;++w)r[w]=new A.aj4()
t.y=r
v=t.w
v.toString
u=D.c.bg(v*t.x,2)
t.z=new Uint16Array(u)},
DW(){return this.x},
n0(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this
if(a8==null)a8=a4.c.w
if(a9==null)a9=a4.c.cx
w=a6+a8-1
v=a7+a9-1
u=a4.c
t=u.w
if(w>t)w=t-1
t=u.x
if(v>t)v=t-1
a4.a=w-a6+1
a4.b=v-a7+1
s=u.c
r=s.length
for(q=0,p=0;p<r;++p){o=s[p]
u=a4.y
u===$&&C.b()
n=u[p]
n.b=n.a=q
u=o.f
u===$&&C.b()
m=D.c.e7(a6,u)
l=D.c.e7(w,u)
u=m*u<a6?0:1
u=l-m+u
n.c=u
t=o.r
t===$&&C.b()
m=D.c.e7(a7,t)
l=D.c.e7(v,t)
k=m*t<a7?0:1
k=l-m+k
n.d=k
n.e=t
t=o.d
t===$&&C.b()
t=t/2|0
n.f=t
q+=u*k*t}j=a5.X()
i=a5.X()
if(i>=8192)throw C.c(A.aZ("Error in header for PIZ-compressed data (invalid bitmap size)."))
h=new Uint8Array(8192)
if(j<=i){g=a5.hp(i-j+1)
f=g.c-g.d
for(e=j,p=0;p<f;++p,e=d){d=e+1
h[e]=J.o(g.a,g.d+p)}}a0=new Uint16Array(65536)
a1=a4.aHt(h,a0)
A.bAj(a5,a5.M(),a4.z,q)
for(p=0;p<r;++p){u=a4.y
u===$&&C.b()
n=u[p]
e=0
while(!0){u=n.f
u===$&&C.b()
if(!(e<u))break
t=a4.z
t.toString
k=n.a
k===$&&C.b()
a2=n.c
a2===$&&C.b()
a3=n.d
a3===$&&C.b()
A.bAm(t,k+e,a2,u,a3,a2*u,a1);++e}}u=a4.z
u.toString
a4.arn(a0,u,q)
u=a4.r
if(u==null){u=a4.w
u.toString
u=a4.r=A.aIy(u*a4.x+73728)}u.a=0
for(;a7<=v;++a7)for(p=0;p<r;++p){u=a4.y
u===$&&C.b()
n=u[p]
u=n.e
u===$&&C.b()
if(D.c.b4(a7,u)!==0)continue
u=n.c
u===$&&C.b()
t=n.f
t===$&&C.b()
a6=u*t
for(;a6>0;--a6){u=a4.r
u.toString
t=a4.z
t.toString
k=n.b
k===$&&C.b()
n.b=k+1
u.agJ(t[k])}}u=a4.r
return C.bO(u.c.buffer,0,u.a)},
zj(d,e,f){return this.n0(d,e,f,null,null)},
arn(d,e,f){var w
for(w=0;w<f;++w)e[w]=d[e[w]]},
aHt(d,e){var w,v,u,t
for(w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
e[u]=0}return w-1}}
A.aj4.prototype={}
A.aCF.prototype={
DW(){return this.x},
n0(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=B.es.uO(A.xq(a1.eJ(),1,null,0),!1),a0=e.y
if(a0==null){a0=e.w
a0.toString
a0=e.y=A.aIy(e.x*a0)}a0.a=0
w=C.a([0,0,0,0],x.t)
v=new Uint32Array(1)
u=C.bO(v.buffer,0,null)
if(a4==null)a4=e.c.w
if(a5==null)a5=e.c.cx
t=a2+a4-1
s=a3+a5-1
a0=e.c
r=a0.w
if(t>r)t=r-1
r=a0.x
if(s>r)s=r-1
e.a=t-a2+1
e.b=s-a3+1
a0=a0.c
q=a0.length
for(p=a3,o=0;p<=s;++p)for(n=0;n<q;++n){m=a0[n]
r=m.r
r===$&&C.b()
if(D.c.b4(a3,r)!==0)continue
r=m.f
r===$&&C.b()
l=D.c.e7(a2,r)
k=D.c.e7(t,r)
r=l*r<a2?0:1
j=k-l+r
v[0]=0
r=m.c
r===$&&C.b()
switch(r.a){case 0:w[0]=o
r=o+j
w[1]=r
r+=j
w[2]=r
o=r+j
for(i=0;i<j;++i){r=w[0]
w[0]=r+1
r=d[r]
h=w[1]
w[1]=h+1
h=d[h]
g=w[2]
w[2]=g+1
g=d[g]
v[0]=v[0]+((r<<24|h<<16|g<<8)>>>0)
for(f=0;f<4;++f)e.y.fP(u[f])}break
case 1:w[0]=o
r=o+j
w[1]=r
o=r+j
for(i=0;i<j;++i){r=w[0]
w[0]=r+1
r=d[r]
h=w[1]
w[1]=h+1
h=d[h]
v[0]=v[0]+((r<<8|h)>>>0)
for(f=0;f<2;++f)e.y.fP(u[f])}break
case 2:w[0]=o
r=o+j
w[1]=r
r+=j
w[2]=r
o=r+j
for(i=0;i<j;++i){r=w[0]
w[0]=r+1
r=d[r]
h=w[1]
w[1]=h+1
h=d[h]
g=w[2]
w[2]=g+1
g=d[g]
v[0]=v[0]+((r<<24|h<<16|g<<8)>>>0)
for(f=0;f<4;++f)e.y.fP(u[f])}break}}a0=e.y
return C.bO(a0.c.buffer,0,a0.a)},
zj(d,e,f){return this.n0(d,e,f,null,null)}}
A.aCG.prototype={
DW(){return 1},
n0(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.c,f=A.aIy((g-d.d)*2)
if(a1==null)a1=h.c.w
if(a2==null)a2=h.c.cx
w=e+a1-1
v=a0+a2-1
u=h.c
t=u.w
if(w>t)w=t-1
u=u.x
if(v>u)v=u-1
h.a=w-e+1
h.b=v-a0+1
for(;u=d.d,u<g;){t=d.a
d.d=u+1
u=J.o(t,u)
$.jB()[0]=u
s=$.kp()[0]
if(s<0){r=-s
for(;q=r-1,r>0;r=q)f.fP(J.o(d.a,d.d++))}else for(r=s;q=r-1,r>=0;r=q)f.fP(J.o(d.a,d.d++))}p=C.bO(f.c.buffer,0,f.a)
o=p.length
for(n=1;n<o;++n)p[n]=p[n-1]+p[n]-128
g=h.r
if(g==null||g.length!==o)g=h.r=new Uint8Array(o)
u=D.c.bg(o+1,2)
for(m=0,l=0;!0;u=i,m=j){if(l<o){k=l+1
j=m+1
g[l]=p[m]}else break
if(k<o){l=k+1
i=u+1
g[k]=p[u]}else break}g.toString
return g},
zj(d,e,f){return this.n0(d,e,f,null,null)},
j(d){return C.i(this.w)}}
A.a39.prototype={
DW(){return this.x},
n0(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=B.es.uO(A.xq(d.eJ(),1,null,0),!1)
if(g==null)g=l.c.w
if(h==null)h=l.c.cx
w=e+g-1
v=f+h-1
u=l.c
t=u.w
if(w>t)w=t-1
u=u.x
if(v>u)v=u-1
l.a=w-e+1
l.b=v-f+1
s=k.length
for(r=1;r<s;++r)k[r]=k[r-1]+k[r]-128
u=l.y
if(u==null||u.length!==s)u=l.y=new Uint8Array(s)
t=D.c.bg(s+1,2)
for(q=0,p=0;!0;t=m,q=n){if(p<s){o=p+1
n=q+1
u[p]=k[q]}else break
if(o<s){p=o+1
m=t+1
u[o]=k[t]}else break}u.toString
return u},
zj(d,e,f){return this.n0(d,e,f,null,null)},
j(d){return C.i(this.w)}}
A.axZ.prototype={
hb(d){var w=this.a
if(w==null)return null
return w.c[d].b},
l0(d,e){var w=new A.ay_(C.a([],x.dw))
w.apF(d)
this.a=w
return this.hb(0)}}
A.KE.prototype={
aSr(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.b,v=this.d,u=-1,t=-1,s=0;s<w;++s){r=v.kn(s)
q=v.km(s)
p=v.kl(s)
o=v.lj(s)
if(r===d&&q===e&&p===f&&o===g)return s
n=d-r
m=e-q
l=f-p
k=g-o
j=n*n+m*m+l*l+k*k
if(t===-1){t=s
u=j}else if(j<u){t=s
u=j}}return t},
Xb(){var w,v,u,t,s,r,q,p=this
if(p.c==null)return p.d
w=p.d
v=w.a
u=new A.or(new Uint8Array(v*4),v,4)
for(t=0;t<v;++t){s=w.kn(t)
r=w.km(t)
q=w.kl(t)
u.FC(t,s,r,q,t===p.c?0:255)}return u}}
A.KF.prototype={
apK(d){var w,v,u,t,s,r,q=this
q.a=d.X()
q.b=d.X()
q.c=d.X()
q.d=d.X()
w=d.bm()
q.e=(w&64)!==0
if((w&128)!==0){q.f=A.bks(D.c.cN(1,(w&7)+1))
for(v=0;u=q.f,v<u.b;++v){t=J.o(d.a,d.d++)
s=J.o(d.a,d.d++)
r=J.o(d.a,d.d++)
u.d.md(v,t,s,r)}}q.x=d.d-d.b}}
A.a3a.prototype={}
A.a23.prototype={}
A.aA4.prototype={
kN(d){var w,v,u,t,s,r,q,p,o=this
o.f=A.by(d,!1,null,0)
o.a=new A.a23(C.a([],x.b))
if(!o.a1C())return null
try{for(;t=o.f,s=t.d,s<t.c;){r=t.a
t.d=s+1
w=J.o(r,s)
switch(w){case 44:v=o.a6t()
if(v==null){t=o.a
return t}t=v
t.r=o.e
t.w=o.c
if(o.b!==0){if(v.f==null&&o.a.e!=null){t=o.a.e
s=t.a
r=t.b
q=t.c
t=t.d
v.f=new A.KE(s,r,q,new A.or(new Uint8Array(C.bo(t.c)),t.a,t.b))}if(v.f!=null)v.f.c=o.d}o.a.r.push(v)
break
case 33:t=o.f
u=J.o(t.a,t.d++)
if(J.f(u,255)){t=o.f
if(t.f4(J.o(t.a,t.d++))==="NETSCAPE2.0"){s=J.o(t.a,t.d++)
r=J.o(t.a,t.d++)
if(s===3&&r===1)o.r=t.X()}else o.I4()}else if(J.f(u,249)){t=o.f
t.toString
o.aGq(t)}else o.I4()
break
case 59:t=o.a
return t
default:break}}}catch(p){}return o.a},
aGq(d){var w,v,u,t=this
d.bm()
w=d.bm()
t.e=d.X()
t.d=d.bm()
d.bm()
t.c=D.c.H(w,2)&7
t.b=w&1
v=d.FP(1,0)
if(J.o(v.a,v.d)===44){++d.d
u=t.a6t()
if(u==null)return
u.r=t.e
u.w=t.c
if(t.b!==0){v=u.f
if(v==null&&t.a.e!=null){v=t.a.e
v.toString
v=u.f=A.bAZ(v)}if(v!=null)v.c=t.d}t.a.r.push(u)}},
hb(d){var w,v,u,t=this,s=t.f
if(s==null||t.a==null)return null
w=t.a.r
v=w.length
if(d>=v)return null
u=w[d]
s.toString
w=u.x
w===$&&C.b()
s.d=w
return t.au7(u)},
l0(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null
if(a6.kN(a8)==null)return a7
w=a6.a.r.length
if(w===1)return a6.hb(0)
for(w=x.p,v=a7,u=v,t=0;s=a6.a.r,t<s.length;++t){a9=s[t]
r=a6.hb(t)
if(r==null)return a7
r.y=a9.r*10
if(u==null||v==null){r.r=a6.r
v=r
u=v
continue}s=r.a
q=s==null
p=q?a7:s.a
if(p==null)p=0
o=v.a
n=o==null
m=n?a7:o.a
l=!1
if(p===(m==null?0:m)){s=q?a7:s.b
if(s==null)s=0
q=n?a7:o.b
if(s===(q==null?0:q)){s=a9.a
s===$&&C.b()
if(s===0){s=a9.b
s===$&&C.b()
s=s===0&&a9.w===2}else s=l}else s=l}else s=l
if(s){u.pJ(r)
v=r
continue}k=a9.f
if(!(k!=null)){s=a6.a.e
s.toString
k=s}s=n?a7:o.a
if(s==null)s=0
q=n?a7:o.b
if(q==null)q=0
j=A.ek(a7,a7,B.C,0,B.aq,q,a7,0,1,k.Xb(),B.C,s,!1)
s=a9.w
if(s===2){s=a6.a.c.a
s=!D.w.gV(s)?s[0]:0
q=k.d
i=q.kn(s)
h=q.km(s)
g=q.kl(s)
f=s===k.c?0:255
s=new Uint8Array(4)
s[0]=i
s[1]=h
s[2]=g
s[3]=f
q=j.a
if(q!=null)q.k5(0,new A.t2(s))}else if(s!==3){s=a9.a
s===$&&C.b()
q=!0
if(s===0){s=a9.b
s===$&&C.b()
if(s===0){s=a9.c
s===$&&C.b()
p=v.a
o=p==null
n=o?a7:p.a
if(s===(n==null?0:n)){s=a9.d
s===$&&C.b()
q=o?a7:p.b
s=s!==(q==null?0:q)}else s=q}else s=q}else s=q
if(s)if(a9.f!=null){s=v.a
s=s==null?a7:s.gdn()
s.toString
e=C.x(w,w)
for(q=k.b,d=0;d<q;++d)e.m(0,d,k.aSr(s.kn(d),s.km(d),s.kl(d),s.lj(d)))
s=j.a
if(s==null)a0=a7
else{s=s.ghx(s)
s=new Uint8Array(s,0)
a0=s}if(a0==null){s=j.a
s=s==null?a7:s.ghx(s)
if(s==null)s=new Uint8Array(0).buffer
a0=new Uint8Array(s,0)}s=v.a
if(s==null)a1=a7
else{s=s.ghx(s)
s=new Uint8Array(s,0)
a1=s}if(a1==null){s=v.a
s=s==null?a7:s.ghx(s)
if(s==null)s=new Uint8Array(0).buffer
a1=new Uint8Array(s,0)}for(a2=a0.length,a3=0;a3<a2;++a3){a4=e.i(0,a1[a3])
if(a4!==-1){a4.toString
a0[a3]=a4}}}}j.y=r.y
for(s=r.a,s=s.gR(s);s.p();){a5=s.gK()
if(a5.gaO()!==0){q=a5.gjc()
p=a9.a
p===$&&C.b()
o=a5.gjN()
n=a9.b
n===$&&C.b()
j.MG(q+p,o+n,a5)}}u.pJ(j)
v=j}return u},
a6t(){var w,v=this.f
if(v.d>=v.c)return null
w=new A.a3a()
w.apK(v);++this.f.d
this.I4()
return w},
au7(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.w==null){m.w=new Uint8Array(256)
m.x=new Uint8Array(4095)
m.y=new Uint8Array(4096)
m.z=new Uint32Array(4096)}w=m.Q=m.f.bm()
v=D.c.dA(1,w)
m.dy=v;++v
m.dx=v
m.db=v+1;++w
m.cy=w
m.cx=D.c.dA(1,w)
m.ay=0
m.CW=4098
m.at=m.ax=0
m.w[0]=0
w=m.z
w.toString
D.bA.jy(w,0,4096,4098)
w=d.c
w===$&&C.b()
v=d.d
v===$&&C.b()
u=d.a
u===$&&C.b()
t=m.a
if(u+w<=t.a){u=d.b
u===$&&C.b()
u=u+v>t.b}else u=!0
if(u)return l
s=d.f
if(!(s!=null)){u=t.e
u.toString
s=u}m.as=w*v
r=A.ek(l,l,B.C,0,B.aq,v,l,0,1,s.Xb(),B.C,w,!1)
q=new Uint8Array(w)
w=d.e
w===$&&C.b()
if(w){w=d.b
w===$&&C.b()
for(v=w+v,p=0,o=0;p<4;++p)for(n=w+B.a3x[p];n<v;n+=B.a6K[p],++o){if(!m.a1F(q))return r
m.a7P(r,n,s,q)}}else for(n=0;n<v;++n){if(!m.a1F(q))return r
m.a7P(r,n,s,q)}return r},
a7P(d,e,f,g){var w,v,u,t=g.length
for(w=0;w<t;++w){v=g[w]
u=d.a
if(u!=null)u.d6(w,e,v,0,0)}},
a1C(){var w,v,u,t,s,r=this,q=r.f.f4(6)
if(q!=="GIF87a"&&q!=="GIF89a")return!1
w=r.a
w.toString
w.a=r.f.X()
w=r.a
w.toString
w.b=r.f.X()
v=r.f.bm()
w=r.a
w.toString
w.c=new A.t2(new Uint8Array(C.bo(C.a([r.f.bm()],x.t))));++r.f.d
if((v&128)!==0){w=r.a
w.toString
w.e=A.bks(D.c.cN(1,(v&7)+1))
for(u=0;u<r.a.e.b;++u){w=r.f
w=J.o(w.a,w.d++)
t=r.f
t=J.o(t.a,t.d++)
s=r.f
s=J.o(s.a,s.d++)
r.a.e.d.md(u,w,t,s)}}r.a.toString
return!0},
a1F(d){var w=this,v=w.as
v.toString
w.as=v-d.length
if(!w.auk(d))return!1
if(w.as===0)w.I4()
return!0},
I4(){var w,v,u,t=this.f
if(t.d>=t.c)return!0
w=t.bm()
while(!0){if(w!==0){t=this.f
t=t.d<t.c}else t=!1
if(!t)break
t=this.f
v=t.d+=w
if(v>=t.c)return!0
u=t.a
t.d=v+1
w=J.o(u,v)}return!0},
auk(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
if(k>4095)return!1
w=d.length
v=0
if(k!==0)while(!0){if(!(k!==0&&v<w))break
u=v+1
t=l.x
t===$&&C.b()
k=l.ay=k-1
d[v]=t[k]
v=u}for(;v<w;){s=l.ch=l.auj()
if(s==null)return!1
k=l.dx
if(s===k)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r)t[r]=4098
l.db=k+1
k=l.Q+1
l.cy=k
l.cx=D.c.dA(1,k)
l.CW=4098}else{if(s<t){u=v+1
d[v]=s
v=u}else{k=l.z
if(k[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&C.b()
o=l.x
o===$&&C.b()
n=l.ay++
t=l.OZ(k,s,t)
o[n]=t
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
k=l.x
k===$&&C.b()
t=l.ay++
q=l.y
q===$&&C.b()
k[t]=q[s]
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
k=l.x
k===$&&C.b()
t=l.ay
q=l.ay=t+1
k[t]=s
t=q
while(!0){if(!(t!==0&&v<w))break
u=v+1
t=l.ay=t-1
d[v]=k[t]
v=u}}k=l.CW
if(k!==4098&&l.z[l.db-2]===4098){t=l.z
q=l.db-2
t[q]=k
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&C.b()
o[q]=l.OZ(t,k,n)}else{o===$&&C.b()
p.toString
o[q]=l.OZ(t,p,n)}}k=l.ch
k.toString
l.CW=k}}return!0},
auj(){var w,v,u,t,s=this
if(s.cy>12)return null
for(;w=s.ax,v=s.cy,w<v;){w=s.arF()
w.toString
v=s.at
u=s.ax
s.at=(v|D.c.dA(w,u))>>>0
s.ax=u+8}u=s.at
t=B.acE[v]
s.at=D.c.dG(u,v)
s.ax=w-v
w=s.db
if(w<4097){++w
s.db=w
w=w>s.cx&&v<12}else w=!1
if(w){s.cx=s.cx<<1>>>0
s.cy=v+1}return u&t},
OZ(d,e,f){var w,v,u=0
while(!0){if(e>f){w=u+1
v=u<=4095
u=w}else v=!1
if(!v)break
if(e>4095)return 4098
e=d[e]}return e},
arF(){var w,v,u=this,t=u.w,s=t[0]
if(s===0){t[0]=u.f.bm()
t=u.w
s=t[0]
if(s===0)return null
D.w.e5(t,1,1+s,u.f.hp(s).eJ())
t=u.w
w=t[1]
t[1]=2
t[0]=t[0]-1}else{v=t[1]
t[1]=v+1
w=t[v]
t[0]=s-1}return w}}
A.Cv.prototype={
J(){return"IcoType."+this.b}}
A.aBx.prototype={}
A.a2F.prototype={}
A.aBv.prototype={
gbd(){return D.c.bg(A.w4.prototype.gbd.call(this),2)},
gDd(){return!(this.d===40&&this.f===32)&&A.w4.prototype.gDd.call(this)}}
A.aBw.prototype={
l0(d,e){var w,v,u,t=this,s=A.by(d,!1,null,0)
t.a=s
w=t.b=A.bkF(s)
if(w==null)return null
s=w.e.length
if(s===1)return t.hb(0)
for(v=null,u=0;u<t.b.e.length;++u){e=t.hb(u)
if(e==null)continue
if(v==null){e.w=B.aq
v=e}else v.pJ(e)}return v},
hb(a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){w=this.b
w=w==null||a8>=w.d}else w=!0
if(w)return a6
v=this.b.e[a8]
w=a7.a
a7=a7.b+v.e
u=v.d
t=J.bc4(w,a7,a7+u)
s=new A.a7l(A.bl0())
x.D.a(t)
if(s.yI(t))return s.eZ(t)
r=A.aIy(14)
r.agJ(19778)
r.M6(u)
r.M6(0)
r.M6(0)
a7=A.by(t,!1,a6,0)
w=A.bio(A.by(C.bO(r.c.buffer,0,r.a),!1,a6,0))
u=a7.d
q=a7.M()
p=a7.M()
o=$.e5()
o[0]=p
p=$.hu()
n=p[0]
o[0]=a7.M()
p=p[0]
m=a7.X()
l=a7.X()
k=B.y0[a7.M()]
a7.M()
o[0]=a7.M()
o[0]=a7.M()
o=a7.M()
a7.M()
j=new A.aBv(w,n,p,q,m,l,k,o,u)
j.Zc(a7,w)
if(q!==40&&m!==1)return a6
i=o===0&&l<=8?40+4*D.c.cN(1,l):40+4*o
w.b=i
r.a-=4
r.M6(i)
h=A.by(t,!1,a6,0)
g=new A.avz(!0)
g.a=h
g.b=j
f=g.hb(0)
if(l>=32)return f
e=32-D.c.b4(n,32)
d=D.c.bg(e===32?n:n+e,8)
for(a7=1/p<0,w=p<0,p=p===0,a0=0;a0<D.c.bg(A.w4.prototype.gbd.call(j),2);++a0){if(!(p?a7:w))a1=a0
else{u=f.a
u=u==null?a6:u.b
a1=(u==null?0:u)-1-a0}a2=h.fR(d)
h.d=h.d+(a2.c-a2.d)
u=f.a
a3=u==null?a6:u.f8(0,a1,a6)
if(a3==null)a3=new A.fY()
for(a4=0;a4<n;){u=J.o(a2.a,a2.d++)
a5=7
while(!0){if(!(a5>-1&&a4<n))break
if((u&D.c.dA(1,a5))>>>0!==0)a3.saO(0)
a3.p();++a4;--a5}}}return f}}
A.Ze.prototype={}
A.x8.prototype={}
A.x9.prototype={}
A.KW.prototype={}
A.aCY.prototype={}
A.tG.prototype={}
A.aCZ.prototype={
b0b(d){var w,v,u,t,s,r=this,q=A.by(d,!0,null,0)
r.a=q
w=q.FP(2,0)
if(J.o(w.a,w.d)!==255||J.o(w.a,w.d+1)!==216)return!1
if(r.x4()!==216)return!1
v=r.x4()
u=!1
t=!1
while(!0){if(v!==217){q=r.a
q=q.d<q.c}else q=!1
if(!q)break
s=r.a.X()
if(s<2)break
q=r.a
q.d=q.d+(s-2)
switch(v){case 192:case 193:case 194:u=!0
break
case 218:t=!0
break}v=r.x4()}return u&&t},
kh(d){var w,v,u,t,s,r,q,p,o=this
o.a=A.by(d,!0,null,0)
o.aGk()
if(o.x.length!==1)throw C.c(A.aZ("Only single frame JPEGs supported"))
for(w=o.Q,v=0;u=o.d,t=u.z,v<t.length;++v){s=u.y.i(0,t[v])
u=s.a
t=o.d
r=t.f
q=s.b
p=t.r
t=o.arN(t,s)
u=u===1&&r===2?1:0
w.push(new A.Ze(t,u,q===1&&p===2?1:0))}},
aGk(){var w,v,u,t,s,r=this
if(r.x4()!==216)throw C.c(A.aZ("Start Of Image marker not found."))
w=r.x4()
while(!0){if(w!==217){v=r.a
v===$&&C.b()
v=v.d<v.c}else v=!1
if(!v)break
v=r.a
v===$&&C.b()
u=v.X()
if(u<2)C.P(A.aZ("Invalid Block"))
v=r.a
t=v.fR(u-2)
v.d=v.d+(t.c-t.d)
switch(w){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:r.aGl(w,t)
break
case 219:r.aGn(t)
break
case 192:case 193:case 194:r.aGp(w,t)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.c(A.aZ("Unhandled frame type "+D.c.iy(w,16)))
case 196:r.aGm(t)
break
case 221:r.e=t.X()
break
case 218:r.aGB(t)
break
case 255:v=r.a
if(J.o(v.a,v.d)!==255)--r.a.d
break
default:v=r.a
s=!1
if(J.o(v.a,v.d+-3)===255){v=r.a
if(J.o(v.a,v.d+-2)>=192){v=r.a
v=J.o(v.a,v.d+-2)<=254}else v=s}else v=s
if(v){r.a.d-=3
break}if(w!==0)throw C.c(A.aZ("Unknown JPEG marker "+D.c.iy(w,16)))
break}w=r.x4()}},
x4(){var w,v=this,u=v.a
u===$&&C.b()
if(u.d>=u.c)return 0
do{do{w=v.a.bm()
if(w!==255){u=v.a
u=u.d<u.c}else u=!1}while(u)
u=v.a
if(u.d>=u.c)return w
do{w=v.a.bm()
if(w===255){u=v.a
u=u.d<u.c}else u=!1}while(u)
if(w===0){u=v.a
u=u.d<u.c}else u=!1}while(u)
return w},
aGo(d){if(d.M()!==1165519206)return
if(d.X()!==0)return
this.r.kh(d)},
aGl(d,e){var w,v,u,t,s=this,r=e
if(d===224){w=r
v=!1
if(J.o(w.a,w.d)===74){w=r
if(J.o(w.a,w.d+1)===70){w=r
if(J.o(w.a,w.d+2)===73){w=r
if(J.o(w.a,w.d+3)===70){w=r
w=J.o(w.a,w.d+4)===0}else w=v}else w=v}else w=v}else w=v
if(w){w=new A.aD1()
v=r
J.o(v.a,v.d+5)
v=r
J.o(v.a,v.d+6)
v=r
J.o(v.a,v.d+7)
v=r
J.o(v.a,v.d+8)
v=r
J.o(v.a,v.d+9)
v=r
J.o(v.a,v.d+10)
v=r
J.o(v.a,v.d+11)
v=r
v=J.o(v.a,v.d+12)
w.f=v
u=r
u=J.o(u.a,u.d+13)
w.r=u
s.b=w
r.FP(14+3*v*u,14)}}else if(d===225)s.aGo(r)
else if(d===238){w=r
v=!1
if(J.o(w.a,w.d)===65){w=r
if(J.o(w.a,w.d+1)===100){w=r
if(J.o(w.a,w.d+2)===111){w=r
if(J.o(w.a,w.d+3)===98){w=r
if(J.o(w.a,w.d+4)===101){w=r
w=J.o(w.a,w.d+5)===0}else w=v}else w=v}else w=v}else w=v}else w=v
if(w){s.c=new A.aCY()
w=r
J.o(w.a,w.d+6)
s.c.toString
w=r
J.o(w.a,w.d+7)
w=r
J.o(w.a,w.d+8)
s.c.toString
w=r
J.o(w.a,w.d+9)
w=r
J.o(w.a,w.d+10)
w=s.c
w.toString
v=r
w.d=J.o(v.a,v.d+11)}}else if(d===254)try{r.aZK()}catch(t){C.aB(t)}},
aGn(d){var w,v,u,t,s,r,q,p
for(w=d.c,v=this.w;u=d.d,t=u<w,t;){t=d.a
d.d=u+1
u=J.o(t,u)
s=D.c.H(u,4)
r=u&15
if(r>=4)throw C.c(A.aZ("Invalid number of quantization tables"))
u=v[r]
if(u==null){u=new Int16Array(64)
v[r]=u}for(t=s!==0,q=0;q<64;++q){p=t?d.X():J.o(d.a,d.d++)
u[B.l9[q]]=p}}if(t)throw C.c(A.aZ("Bad length for DQT block"))},
aGp(d,e){var w,v,u,t,s,r,q,p=this
if(p.d!=null)throw C.c(A.aZ("Duplicate JPG frame data found."))
w=p.d=new A.a3j(C.x(x.p,x.c),C.a([],x.t))
w.b=d===194
w.c=e.bm()
w=p.d
w.toString
w.d=e.X()
w=p.d
w.toString
w.e=e.X()
v=e.bm()
for(w=p.w,u=0;u<v;++u){t=J.o(e.a,e.d++)
s=J.o(e.a,e.d++)
r=D.c.H(s,4)
q=J.o(e.a,e.d++)
p.d.z.push(t)
p.d.y.m(0,t,new A.tG(r&15,s&15,w,q))}p.d.aYI()
p.x.push(p.d)},
aGm(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=d.c,v=this.z,u=this.y;t=d.d,t<w;){s=d.a
d.d=t+1
r=J.o(s,t)
q=new Uint8Array(16)
for(p=0,o=0;o<16;++o){q[o]=J.o(d.a,d.d++)
p+=q[o]}n=d.fR(p)
d.d=d.d+(n.c-n.d)
m=n.eJ()
if((r&16)!==0){r-=16
l=u}else l=v
if(l.length<=r)D.b.su(l,r+1)
l[r]=this.arT(q,m)}},
aGB(d){var w,v,u,t,s,r,q,p=this,o=d.bm()
if(o<1||o>4)throw C.c(A.aZ("Invalid SOS block"))
w=C.a3K(o,new A.aD_(p,d),!0,x.c)
v=d.bm()
u=d.bm()
t=d.bm()
s=D.c.H(t,4)
r=p.a
r===$&&C.b()
q=p.d
s=new A.a3k(r,q,w,p.e,v,u,s&15,t&15)
r=q.w
r===$&&C.b()
s.f=r
s.r=q.b
s.pX()},
arT(d,e){var w,v,u,t,s,r,q,p,o,n,m=C.a([],x.e8),l=16
while(!0){if(!(l>0&&d[l-1]===0))break;--l}w=x.T
m.push(new A.FX(C.a([],w)))
v=m[0]
for(u=0,t=0;t<l;){for(s=0;s<d[t];++s){v=m.pop()
r=v.a
q=r.length
p=v.b
if(q<=p)D.b.su(r,p+1)
r[v.b]=new A.KW(e[u])
for(;r=v.b,r>0;)v=m.pop()
v.b=r+1
m.push(v)
for(;m.length<=t;v=o){r=C.a([],w)
o=new A.FX(r)
m.push(o)
q=v.a
p=q.length
n=v.b
if(p<=n)D.b.su(q,n+1)
q[v.b]=new A.x9(r)}++u}++t
if(t<l){r=C.a([],w)
o=new A.FX(r)
m.push(o)
q=v.a
p=q.length
n=v.b
if(p<=n)D.b.su(q,n+1)
q[v.b]=new A.x9(r)
v=o}}return m[0].a},
arN(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a2.e
a0===$&&C.b()
w=a2.f
w===$&&C.b()
v=a0<<3>>>0
u=new Int32Array(64)
t=new Uint8Array(64)
s=C.aT(w*8,null,!1,x.aD)
for(r=a2.c,q=a2.d,p=0,o=0;o<w;++o){n=o<<3>>>0
for(m=0;m<8;++m,p=l){l=p+1
s[p]=new Uint8Array(v)}for(k=0;k<a0;++k){j=r[q]
j.toString
i=a2.r
i===$&&C.b()
A.bRF(j,i[o][k],t,u)
h=k<<3>>>0
for(g=0,f=0;f<8;++f){e=s[n+f]
for(m=0;m<8;++m,g=d){d=g+1
e[h+m]=t[g]}}}}return s}}
A.FX.prototype={}
A.a3j.prototype={
aYI(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=f.y,v=C.j(w).c,u=C.eA(w,w.r,v);u.p();){t=w.i(0,u.d)
f.f=Math.max(f.f,t.a)
f.r=Math.max(f.r,t.b)}u=f.e
u.toString
f.w=D.d.eB(u/8/f.f)
u=f.d
u.toString
f.x=D.d.eB(u/8/f.r)
for(v=C.eA(w,w.r,v),u=x.k,s=x.f0;v.p();){r=w.i(0,v.d)
r.toString
q=f.e
q.toString
p=r.a
o=D.d.eB(D.d.eB(q/8)*p/f.f)
q=f.d
q.toString
n=r.b
m=D.d.eB(D.d.eB(q/8)*n/f.r)
l=f.w*p
k=f.x*n
j=J.hf(k,s)
for(i=0;i<k;++i){h=J.hf(l,u)
for(g=0;g<l;++g)h[g]=new Int32Array(64)
j[i]=h}r.e=o
r.f=m
r.r=j}}}
A.aD1.prototype={}
A.a3k.prototype={
pX(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)w=h.at===0?h.gau0():h.gau2()
else w=h.at===0?h.gatS():h.gatU()
else w=h.gatY()
e=f===1
if(e){v=g[0]
u=v.e
u===$&&C.b()
v=v.f
v===$&&C.b()
t=u*v}else{v=h.f
v===$&&C.b()
u=h.b.x
u===$&&C.b()
t=v*u}v=h.z
if(v==null||v===0)h.z=t
for(v=h.a,s=0;s<t;){for(r=0;r<f;++r)g[r].y=0
h.CW=0
if(e){q=g[0]
p=0
while(!0){u=h.z
u.toString
if(!(p<u))break
u=q.e
u===$&&C.b()
o=D.c.e7(s,u)
n=D.c.b4(s,u)
u=q.r
u===$&&C.b()
w.$2(q,u[o][n]);++s;++p}}else{p=0
while(!0){u=h.z
u.toString
if(!(p<u))break
for(r=0;r<f;++r){q=g[r]
m=q.a
l=q.b
for(k=0;k<l;++k)for(j=0;j<m;++j)h.au8(q,w,s,k,j)}++s;++p}}h.ch=0
u=J.o(v.a,v.d)
i=J.o(v.a,v.d+1)
if(u===255)if(i>=208&&i<=215)v.d+=2
else break}},
ul(){var w,v=this,u=v.ch
if(u>0){--u
v.ch=u
return D.c.kK(v.ay,u)&1}u=v.a
if(u.d>=u.c)return null
w=u.bm()
v.ay=w
if(w===255)if(u.bm()!==0)return null
v.ch=7
return D.c.H(v.ay,7)&1},
B_(d){var w,v=new A.x9(d)
for(;w=this.ul(),w!=null;){if(v instanceof A.x9)v=v.a[w]
if(v instanceof A.KW)return v.a}return null},
Qn(d){var w,v
for(w=0;d>0;){v=this.ul()
if(v==null)return null
w=(w<<1|v)>>>0;--d}return w},
Bh(d){var w
if(d==null)return 0
if(d===1)return this.ul()===1?1:-1
w=this.Qn(d)
if(w==null)return 0
if(w>=D.c.dA(1,d-1))return w
return w+D.c.cN(-1,d)+1},
atZ(d,e){var w,v,u,t,s,r,q=this,p=d.w
p===$&&C.b()
w=q.B_(p)
v=w===0?0:q.Bh(w)
p=d.y
p===$&&C.b()
p+=v
d.y=p
e[0]=p
for(u=1;u<64;){p=d.x
p===$&&C.b()
t=q.B_(p)
if(t==null)break
s=t&15
r=t>>>4
if(s===0){if(r<15)break
u+=16
continue}u+=r
s=q.Bh(s)
e[B.l9[u]]=s;++u}},
au1(d,e){var w,v,u=d.w
u===$&&C.b()
w=this.B_(u)
v=w===0?0:D.c.cN(this.Bh(w),this.ax)
u=d.y
u===$&&C.b()
u+=v
d.y=u
e[0]=u},
au3(d,e){var w=e[0],v=this.ul()
v.toString
e[0]=(w|D.c.cN(v,this.ax))>>>0},
atT(d,e){var w,v,u,t,s,r=this,q=r.CW
if(q>0){r.CW=q-1
return}w=r.Q
v=r.as
for(q=r.ax;w<=v;){u=d.x
u===$&&C.b()
u=r.B_(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){q=r.Qn(s)
q.toString
r.CW=q+D.c.cN(1,s)-1
break}w+=16
continue}w+=s
e[B.l9[w]]=r.Bh(t)*D.c.cN(1,q);++w}},
atV(d,e){var w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(w=p.ax,v=0;o<=n;){u=B.l9[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.b()
s=p.B_(t)
if(s==null)throw C.c(A.aZ("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.Qn(v)
t.toString
p.CW=t+D.c.cN(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.c(A.aZ("invalid ACn encoding"))
p.cy=p.Bh(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.ul()
t.toString
e[u]=q+D.c.cN(t,w)}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.ul()
q.toString
e[u]=t+D.c.cN(q,w)}else{t=p.cy
t===$&&C.b()
e[u]=D.c.cN(t,w)
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.ul()
q.toString
e[u]=t+D.c.cN(q,w)}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
au8(d,e,f,g,h){var w,v,u=this.f
u===$&&C.b()
w=D.c.e7(f,u)*d.b+g
v=D.c.b4(f,u)*d.a+h
u=d.r
u===$&&C.b()
if(w>=u.length)return
u=u[w]
if(v>=u.length)return
e.$2(d,u[v])}}
A.a3i.prototype={
l0(d,e){var w=A.blc()
w.kh(d)
if(w.x.length!==1)throw C.c(A.aZ("only single frame JPEGs supported"))
return A.bQm(w)},
eZ(d){return this.l0(d,null)}}
A.DD.prototype={
J(){return"PngDisposeMode."+this.b}}
A.Nl.prototype={
J(){return"PngBlendMode."+this.b}}
A.Nm.prototype={}
A.a3b.prototype={}
A.ug.prototype={
J(){return"PngFilterType."+this.b}}
A.aJK.prototype={}
A.aCH.prototype={}
A.a7l.prototype={
yI(d){var w,v=A.by(d,!0,null,0).hp(8)
for(w=0;w<8;++w)if(J.o(v.a,v.d+w)!==B.zm[w])return!1
return!0},
kN(b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=A.by(b1,!0,a9,0)
a8.d=b0
w=b0.hp(8)
for(v=0;v<8;++v)if(J.o(w.a,w.d+v)!==B.zm[v])return a9
for(b0=a8.a,u=b0.CW,t=x.t,s=b0.cx,r=x.L,q=b0.ax;!0;){p=a8.d
o=p.d-p.b
n=p.M()
m=a8.d.f4(4)
switch(m){case"tEXt":p=a8.d
l=p.fR(n)
p.d=p.d+(l.c-l.d)
k=l.eJ()
j=k.length
for(v=0;v<j;++v)if(k[v]===0){p=v+1
q.m(0,D.ti.eZ(new Uint8Array(k.subarray(0,C.l7(0,v,j)))),D.ti.eZ(new Uint8Array(k.subarray(p,C.l7(p,a9,j)))))
break}a8.d.d+=4
break
case"IHDR":p=a8.d
l=p.fR(n)
p.d=p.d+(l.c-l.d)
i=A.b7(l,a9,0)
h=i.eJ()
b0.a=i.M()
b0.b=i.M()
b0.c=J.o(i.a,i.d++)
b0.d=J.o(i.a,i.d++)
J.o(i.a,i.d++)
b0.f=J.o(i.a,i.d++)
b0.r=J.o(i.a,i.d++)
p=b0.d
if(!(p===0||p===2||p===3||p===4||p===6))return a9
if(b0.f!==0)return a9
switch(p){case 0:if(!D.b.t(C.a([1,2,4,8,16],t),b0.c))return a9
break
case 2:if(!D.b.t(C.a([8,16],t),b0.c))return a9
break
case 3:if(!D.b.t(C.a([1,2,4,8],t),b0.c))return a9
break
case 4:if(!D.b.t(C.a([8,16],t),b0.c))return a9
break
case 6:if(!D.b.t(C.a([8,16],t),b0.c))return a9
break}if(a8.d.M()!==A.AH(h,A.AH(new C.cq(m),0)))throw C.c(A.aZ("Invalid "+m+" checksum"))
break
case"PLTE":p=a8.d
l=p.fR(n)
p.d=p.d+(l.c-l.d)
b0.w=l.eJ()
if(a8.d.M()!==A.AH(r.a(b0.w),A.AH(new C.cq(m),0)))throw C.c(A.aZ("Invalid "+m+" checksum"))
break
case"tRNS":p=a8.d
l=p.fR(n)
p.d=p.d+(l.c-l.d)
b0.x=l.eJ()
g=a8.d.M()
p=b0.x
p.toString
if(g!==A.AH(p,A.AH(new C.cq(m),0)))throw C.c(A.aZ("Invalid "+m+" checksum"))
break
case"IEND":a8.d.d+=4
break
case"gAMA":if(n!==4)throw C.c(A.aZ("Invalid gAMA chunk"))
a8.d.M()
a8.d.d+=4
break
case"IDAT":s.push(o)
p=a8.d
f=p.d+=n
p.d=f+4
break
case"acTL":b0.ay=a8.d.M()
a8.d.M()
a8.d.d+=4
break
case"fcTL":a8.d.M()
e=a8.d.M()
d=a8.d.M()
a0=a8.d.M()
a1=a8.d.M()
a2=a8.d.X()
a3=a8.d.X()
p=a8.d
p=J.o(p.a,p.d++)
f=a8.d
f=J.o(f.a,f.d++)
p=B.af8[p]
f=B.aaj[f]
u.push(new A.a3b(C.a([],t),e,d,a0,a1,a2,a3,p,f))
a8.d.d+=4
break
case"fdAT":a8.d.M()
D.b.gS(u).y.push(o)
p=a8.d
f=p.d+=n-4
p.d=f+4
break
case"bKGD":p=b0.d
if(p===3){p=a8.d
p=J.o(p.a,p.d++);--n
a4=p*3
f=b0.w
a5=f[a4]
a6=f[a4+1]
a7=f[a4+2]
f=b0.x
if(f!=null){p=D.w.t(f,p)?0:255
f=new Uint8Array(4)
f[0]=a5
f[1]=a6
f[2]=a7
f[3]=p
b0.z=new A.IT(f)}else{p=new Uint8Array(3)
p[0]=a5
p[1]=a6
p[2]=a7
b0.z=new A.Zc(p)}}else if(p===0||p===4){a8.d.X()
n-=2}else if(p===2||p===6){p=a8.d
p.X()
p.X()
p.X()
n-=24}if(n>0)a8.d.d+=n
a8.d.d+=4
break
case"iCCP":b0.Q=a8.d.vH()
p=a8.d
J.o(p.a,p.d++)
p=b0.Q
f=a8.d
l=f.fR(n-(p.length+2))
f.d=f.d+(l.c-l.d)
b0.at=l.eJ()
a8.d.d+=4
break
default:p=a8.d
f=p.d+=n
p.d=f+4
break}if(m==="IEND")break
p=a8.d
if(p.d>=p.c)return a9}return b0},
hb(b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.CW,b8=b7.length
if(b8===0||b9===0){v=C.a([],x.j)
b7=b4.cx
u=b7.length
for(t=0,s=0;s<u;++s){b8=b1.d
b8===$&&C.b()
b8.d=b7[s]
r=b8.M()
q=b1.d.f4(4)
b8=b1.d
p=b8.fR(r)
b8.d=b8.d+(p.c-p.d)
o=p.eJ()
t+=o.length
v.push(o)
if(b1.d.M()!==A.AH(o,A.AH(new C.cq(q),0)))throw C.c(A.aZ("Invalid "+q+" checksum"))}b3=new Uint8Array(t)
for(b7=v.length,n=0,m=0;m<v.length;v.length===b7||(0,C.H)(v),++m){o=v[m]
J.bhY(b3,n,o)
n+=o.length}}else{if(b9>=b8)throw C.c(A.aZ("Invalid Frame Number: "+b9))
l=b7[b9]
b5=l.b
b6=l.c
v=C.a([],x.j)
for(b7=l.y,t=0,s=0;s<b7.length;++s){b8=b1.d
b8===$&&C.b()
b8.d=b7[s]
r=b8.M()
b8=b1.d
b8.f4(4)
b8.d+=4
b8=b1.d
p=b8.fR(r-4)
b8.d=b8.d+(p.c-p.d)
o=p.eJ()
t+=o.length
v.push(o)}b3=new Uint8Array(t)
for(b7=v.length,n=0,m=0;m<v.length;v.length===b7||(0,C.H)(v),++m){o=v[m]
J.bhY(b3,n,o)
n+=o.length}}b7=b4.d
k=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
k=b7}w=null
try{w=B.es.uO(A.xq(b3,1,b2,0),!1)}catch(j){return b2}i=A.by(w,!0,b2,0)
b1.c=b1.b=0
h=b2
if(b4.d===3){b7=b4.w
if(b7!=null){g=b7.length/3|0
f=b4.x
b8=f!=null
e=b8?f.length:0
d=b8?4:3
h=new A.or(new Uint8Array(g*d),g,d)
for(b8=d===4,s=0,a0=0;s<g;++s,a0+=3){a1=b8&&s<e?f[s]:255
h.FC(s,b7[a0],b7[a0+1],b7[a0+2],a1)}}}if(b4.d===0&&b4.x!=null&&h==null&&b4.c<=8){f=b4.x
a2=f.length
b7=b4.c
g=D.c.dA(1,b7)
h=new A.or(new Uint8Array(g*4),g,4)
if(b7===1)a3=255
else if(b7===2)a3=85
else{b7=b7===4?17:1
a3=b7}for(s=0;s<g;++s){a4=s*a3
h.FC(s,a4,a4,a4,255)}for(b7=h.b,b8=3<b7,a5=h.c,s=0;s<a2;s+=2){a6=(f[s]&255)<<8|f[s+1]&255
if(a6<g)if(b8)a5[a6*b7+3]=0}}b7=b4.c
if(b7===1)a7=B.d0
else if(b7===2)a7=B.du
else{if(b7===4)b8=B.dv
else b8=b7===16?B.bg:B.C
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)k=4
a8=A.ek(b2,b2,a7,0,B.aq,b6,b2,0,b8===2&&b4.x!=null?4:k,h,B.C,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.uj(i,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.uj(i,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.uj(i,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.uj(i,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.uj(i,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.uj(i,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.uj(i,a8,0,1,1,2,b5,b6>>>1)}else b1.aFU(i,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.KZ(b4.Q,B.a_D,b7)
b4=b4.ax
if(b4.a!==0)a8.aM3(b4)
return a8},
l0(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.kN(d)==null)return e
w=f.a
v=w.CW
u=v.length
if(u===0){w=f.hb(0)
w.toString
return w}for(u=x.g,t=e,s=t,r=0;r<w.ay;++r){a0=v[r]
q=f.hb(r)
if(q==null)continue
if(s==null||t==null){s=q.aa5(q.gvv())
p=a0.f
s.y=D.d.C((p===0||a0.r===0?0:p/a0.r)*1000)
t=s
continue}p=r-1
o=v[p]
n=q.a
m=n==null
l=m?e:n.a
if(l==null)l=0
k=t.a
j=k==null
i=j?e:k.a
if(l===(i==null?0:i)){n=m?e:n.b
if(n==null)n=0
m=j?e:k.b
n=n===(m==null?0:m)&&a0.d===0&&a0.e===0&&a0.x===B.Mn}else n=!1
if(n){p=a0.f
q.y=D.d.C((p===0||a0.r===0?0:p/a0.r)*1000)
s.pJ(q)
t=q
continue}h=s.x
t=A.a2K((h===$?s.x=C.a([],u):h)[p],!1,!1)
g=o.w
if(g===B.Mp){p=o.d
n=o.e
m=w.z
if(m==null){m=new Uint8Array(4)
l=new A.IT(m)
m[0]=0
m[1]=0
m[2]=0
m[3]=0
m=l}A.bPX(t,!1,m,p,p+o.b-1,n,n+o.c-1)}else if(g===B.Mq&&r>1){h=s.x
if(h===$)h=s.x=C.a([],u)
p=o.d
n=o.e
m=o.b
l=o.c
t=A.bgf(t,h[r-2],B.n5,l,m,p,n,l,m,p,n)}p=a0.f
t.y=D.d.C((p===0||a0.r===0?0:p/a0.r)*1000)
p=a0.x===B.Mo?B.n5:B.n4
t=A.bgf(t,q,p,e,e,a0.d,a0.e,e,e,e,e)
s.pJ(t)}return s},
eZ(d){return this.l0(d,null)},
uj(a1,a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,a0=d.d
if(a0===4)w=2
else if(a0===2)w=3
else{a0=a0===6?4:1
w=a0}v=w*d.c
u=D.c.H(v+7,3)
t=D.c.H(v*a7+7,3)
s=C.a([null,null],x.ff)
r=C.a([0,0,0,0],x.t)
for(d=a5>1,q=a5-a3,p=a4,o=0,n=0;o<a8;++o,p+=a6,++e.e){m=B.xa[J.o(a1.a,a1.d++)]
l=a1.fR(t)
a1.d=a1.d+(l.c-l.d)
a0=l.eJ()
s[n]=a0
n=1-n
e.a7o(m,u,a0,s[n])
e.c=e.b=0
k=new A.i2(a0,0,a0.length,0,!0)
for(a0=q<=1,j=a3,i=0;i<a7;++i,j+=a5){e.a57(k,r)
h=a2.a
h=h==null?null:h.f8(j,p,null)
e.QH(h==null?new A.fY():h,r)
if(!a0||d)for(g=0;g<a5;++g)for(h=p+g,f=0;f<q;++f)e.QH(a2.ahC(j+f,h),r)}}},
aFU(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)w=2
else if(d===2)w=3
else{d=d===6?4:1
w=d}v=w*e.c
u=e.a
t=e.b
s=D.c.H(u*v+7,3)
r=D.c.H(v+7,3)
q=C.aT(s,0,!1,x.p)
p=C.a([q,q],x.S)
o=C.a([0,0,0,0],x.t)
e=a1.a
n=e.gR(e)
n.p()
for(m=0,l=0;m<t;++m,l=i){k=B.xa[J.o(a0.a,a0.d++)]
j=a0.fR(s)
a0.d=a0.d+(j.c-j.d)
e=j.eJ()
p[l]=e
i=1-l
f.a7o(k,r,e,p[i])
f.c=f.b=0
e=p[l]
d=e.length
h=new A.i2(e,0,d,0,!0)
for(g=0;g<u;++g){f.a57(h,o)
f.QH(n.gK(),o)
n.p()}}},
a7o(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=f.length
switch(d.a){case 0:break
case 1:for(w=e;w<k;++w)f[w]=f[w]+f[w-e]&255
break
case 2:for(v=g!=null,w=0;w<k;++w){u=v?g[w]:0
f[w]=f[w]+u&255}break
case 3:for(v=g!=null,w=0;w<k;++w){t=w<e?0:f[w-e]
u=v?g[w]:0
f[w]=f[w]+D.c.H(t+u,1)&255}break
case 4:for(v=g==null,s=!v,w=0;w<k;++w){r=w<e
t=r?0:f[w-e]
u=s?g[w]:0
q=r||v?0:g[w-e]
p=t+u-q
o=Math.abs(p-t)
n=Math.abs(p-u)
m=Math.abs(p-q)
if(o<=n&&o<=m)l=t
else l=n<=m?u:q
f[w]=f[w]+l&255}break
default:throw C.c(A.aZ("Invalid filter value: "+d.j(0)))}},
no(d,e){var w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.bm()
if(e===16)return d.X()
for(w=d.c;v=s.c,v<e;){v=d.d
if(v>=w)throw C.c(A.aZ("Invalid PNG data."))
u=d.a
d.d=v+1
v=J.o(u,v)
u=s.c
s.b=D.c.dA(v,u)
s.c=u+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)w=15
else w=0
t=w}w=v-e
v=D.c.dG(s.b,w)
s.c=w
return v&t},
a57(d,e){var w=this,v=w.a,u=v.d
switch(u){case 0:e[0]=w.no(d,v.c)
return
case 2:e[0]=w.no(d,v.c)
e[1]=w.no(d,v.c)
e[2]=w.no(d,v.c)
return
case 3:e[0]=w.no(d,v.c)
return
case 4:e[0]=w.no(d,v.c)
e[1]=w.no(d,v.c)
return
case 6:e[0]=w.no(d,v.c)
e[1]=w.no(d,v.c)
e[2]=w.no(d,v.c)
e[3]=w.no(d,v.c)
return}throw C.c(A.aZ("Invalid color type: "+u+"."))},
QH(d,e){var w,v,u,t,s,r,q,p,o=this.a,n=o.d
switch(n){case 0:w=o.x
if(w!=null&&o.c>8){o=w[0]
n=w[1]
v=e[0]
d.ik(v,v,v,v!==((o&255)<<24|n&255)>>>0?d.gbh():0)
return}d.hG(e[0],0,0)
return
case 2:u=e[0]
v=e[1]
t=e[2]
o=o.x
if(o!=null){n=o[0]
s=o[1]
r=o[2]
q=o[3]
p=o[4]
o=o[5]
if(u!==((n&255)<<8|s&255)||v!==((r&255)<<8|q&255)||t!==((p&255)<<8|o&255)){d.ik(u,v,t,d.gbh())
return}}d.hG(u,v,t)
return
case 3:d.sda(e[0])
return
case 4:d.hG(e[0],e[1],0)
return
case 6:d.ik(e[0],e[1],e[2],e[3])
return}throw C.c(A.aZ("Invalid color type: "+n+"."))}}
A.uh.prototype={
J(){return"PnmFormat."+this.b}}
A.yy.prototype={}
A.aJL.prototype={
yI(d){var w
this.b=A.by(d,!1,null,0)
w=this.GL()
if(w==="P1"||w==="P2"||w==="P5"||w==="P3"||w==="P6")return!0
return!1},
l0(d,e){if(this.kN(d)==null)return null
return this.hb(0)},
kN(d){var w,v,u=this
u.b=A.by(d,!1,null,0)
w=u.GL()
if(w==="P1"){v=u.a=new A.yy(B.j2)
v.e=B.Mr}else if(w==="P2"){v=u.a=new A.yy(B.j2)
v.e=B.Ms}else if(w==="P5"){v=u.a=new A.yy(B.j2)
v.e=B.pK}else if(w==="P3"){v=u.a=new A.yy(B.j2)
v.e=B.Mt}else if(w==="P6"){v=u.a=new A.yy(B.j2)
v.e=B.pL}else return u.b=null
v.a=u.Bc()
v=u.a
v.toString
v.b=u.Bc()
v=u.a
if(v.a===0||v.b===0)return u.a=u.b=null
return v},
hb(d){var w,v,u,t,s,r=this,q=null,p=r.a
if(p==null)return q
w=p.e
if(w===B.Mr){w=p.a
v=A.ek(q,q,B.d0,0,B.aq,p.b,q,0,1,q,B.C,w,!1)
for(p=v.a,p=p.gR(p);p.p();){u=p.gK()
if(r.GL()==="1")u.hG(1,1,1)
else u.hG(0,0,0)}return v}else if(w===B.Ms||w===B.pK){t=r.Bc()
if(t===0)return q
p=r.a
w=p.a
p=p.b
v=A.ek(q,q,r.abZ(t),0,B.aq,p,q,0,1,q,B.C,w,!1)
for(p=v.a,p=p.gR(p);p.p();){u=p.gK()
s=r.HF(r.a.e,t)
u.hG(s,s,s)}return v}else if(w===B.Mt||w===B.pL){t=r.Bc()
if(t===0)return q
p=r.a
w=p.a
p=p.b
v=A.ek(q,q,r.abZ(t),0,B.aq,p,q,0,3,q,B.C,w,!1)
for(p=v.a,p=p.gR(p);p.p();)p.gK().hG(r.HF(r.a.e,t),r.HF(r.a.e,t),r.HF(r.a.e,t))
return v}return q},
abZ(d){if(d>255)return B.bg
if(d>15)return B.C
if(d>3)return B.dv
if(d>1)return B.du
return B.d0},
HF(d,e){if(d===B.pK||d===B.pL)return this.b.bm()
return this.Bc()},
Bc(){var w,v,u=this.GL()
if(J.bY(u)===0)return 0
try{w=C.cW(u,null)
return w}catch(v){return 0}},
GL(){var w,v,u,t,s=this.b
if(s==null)return""
w=this.c
if(w.length!==0)return D.b.iN(w,0)
v=D.e.f5(s.aZJ())
if(v.length===0)return""
for(;D.e.bk(v,"#");)v=D.e.f5(this.b.aeW(70))
s=x.U
u=C.N(new C.aH(C.a(v.split(" "),x.s),new A.aJM(),s),!0,s.h("m.E"))
for(t=0;t<u.length;++t)if(J.bxh(u[t],"#")){D.b.su(u,t)
break}D.b.I(w,u)
if(w.length===0)return""
return D.b.iN(w,0)}}
A.a7E.prototype={}
A.a7F.prototype={}
A.ov.prototype={}
A.a7H.prototype={}
A.a7I.prototype={}
A.a7L.prototype={}
A.a7M.prototype={}
A.Ny.prototype={}
A.a7K.prototype={}
A.aKq.prototype={
aq9(d){var w,v,u=this
d.X()
d.X()
d.X()
d.X()
w=D.c.bg(d.c-d.d,8)
if(w>0){u.e=new Uint16Array(w)
u.f=new Uint16Array(w)
u.r=new Uint16Array(w)
u.w=new Uint16Array(w)
for(v=0;v<w;++v){u.e[v]=d.X()
u.f[v]=d.X()
u.r[v]=d.X()
u.w[v]=d.X()}}}}
A.DM.prototype={
aeT(d,e,f,g,h,i,j){if(h==null)h=d.X()
switch(h){case 0:g.toString
this.aGA(d,e,f,g)
break
case 1:if(i==null)i=this.aGx(d,f)
g.toString
this.aGz(d,e,f,g,i,j)
break
default:throw C.c(A.aZ("Unsupported compression: "+h))}},
aZI(d,e,f,g){return this.aeT(d,e,f,g,null,null,0)},
aGx(d,e){var w,v=new Uint16Array(e)
for(w=0;w<e;++w)v[w]=d.X()
return v},
aGA(d,e,f,g){var w,v=e*f
if(g===16)v*=2
if(v>d.c-d.d){w=new Uint8Array(v)
this.c=w
D.w.jy(w,0,v,255)
return}this.c=d.hp(v).eJ()},
aGz(d,e,f,g,h,i){var w,v,u,t,s,r,q=e*f
if(g===16)q*=2
w=new Uint8Array(q)
this.c=w
v=i*f
if(v>=h.length){D.w.jy(w,0,q,255)
return}for(u=0,t=0;t<f;++t,v=s){s=v+1
r=d.fR(h[v])
d.d=d.d+(r.c-r.d)
this.aud(r,this.c,u)
u+=e}},
aud(d,e,f){var w,v,u,t,s,r
for(w=d.c;v=d.d,v<w;){u=d.a
d.d=v+1
v=J.o(u,v)
$.jB()[0]=v
t=$.kp()[0]
if(t<0){t=1-t
v=J.o(d.a,d.d++)
for(s=0;s<t;++s,f=r){r=f+1
e[f]=v}}else{++t
for(s=0;s<t;++s,f=r){r=f+1
e[f]=J.o(d.a,d.d++)}}}}}
A.mV.prototype={
J(){return"PsdColorMode."+this.b}}
A.aKs.prototype={
aqa(d){var w,v,u=this
u.as=A.by(d,!0,null,0)
u.aG9()
if(u.c!==943870035)return
w=u.as.M()
u.as.hp(w)
w=u.as.M()
u.at=u.as.hp(w)
w=u.as.M()
u.ax=u.as.hp(w)
v=u.as
u.ay=v.hp(v.c-v.d)},
pX(){var w,v=this
if(v.c===943870035){w=v.as
w===$&&C.b()
w=w==null}else w=!0
if(w)return!1
v.aGv()
v.aGw()
v.aGy()
v.ay=v.ax=v.at=v.as=null
return!0},
aaP(){if(!this.pX())return null
return this.b_4()},
b_4(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.y
if(a0!=null)return a0
a0=e.a
a0=A.ek(d,d,B.C,0,B.aq,e.b,d,0,4,d,B.C,a0,!1)
e.y=a0
a0.Y(0)
w=0
while(!0){a0=e.w
a0===$&&C.b()
if(!(w<a0.length))break
c$0:{v=a0[w]
a0=v.y
a0===$&&C.b()
if((a0&2)!==0)break c$0
a0=v.w
a0===$&&C.b()
u=a0/255
t=v.r
a0=v.cx
a0===$&&C.b()
s=v.a
s.toString
r=s
q=0
while(!0){s=v.f
s===$&&C.b()
if(!(q<s))break
s=v.a
s.toString
p=s+q
o=v.b
s=r>=0
n=0
while(!0){m=v.e
m===$&&C.b()
if(!(n<m))break
m=a0.a
l=m==null?d:m.f8(n,q,d)
if(l==null)l=new A.fY()
k=D.d.C(l.gaw())
j=D.d.C(l.gaJ())
i=D.d.C(l.gaP())
h=D.d.C(l.gaO())
o.toString
if(o>=0&&o<e.a&&s&&r<e.b){m=v.b
m.toString
g=e.y.a
f=g==null?d:g.f8(m+n,p,d)
if(f==null)f=new A.fY()
e.aru(D.d.C(f.gaw()),D.d.C(f.gaJ()),D.d.C(f.gaP()),D.d.C(f.gaO()),k,j,i,h,t,u,f)}++n;++o}++q;++r}}++w}a0=e.y
a0.toString
return a0},
aru(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t,s,r=k/255*m
switch(l){case 1885434739:w=g
v=f
u=e
t=d
break
case 1852797549:w=k
v=j
u=i
t=h
break
case 1684632435:w=k
v=j
u=i
t=h
break
case 1684107883:t=Math.min(d,h)
u=Math.min(e,i)
v=Math.min(f,j)
w=k
break
case 1836411936:t=D.c.H(d*h,8)
u=D.c.H(e*i,8)
v=D.c.H(f*j,8)
w=k
break
case 1768188278:t=A.aKt(d,h)
u=A.aKt(e,i)
v=A.aKt(f,j)
w=k
break
case 1818391150:t=A.aKv(d,h)
u=A.aKv(e,i)
v=A.aKv(f,j)
w=k
break
case 1684751212:w=k
v=j
u=i
t=h
break
case 1818850405:t=Math.max(d,h)
u=Math.max(e,i)
v=Math.max(f,j)
w=k
break
case 1935897198:t=A.beg(d,h)
u=A.beg(e,i)
v=A.beg(f,j)
w=k
break
case 1684633120:t=A.aKu(d,h)
u=A.aKu(e,i)
v=A.aKu(f,j)
w=k
break
case 1818518631:t=h+d>255?255:d+h
u=i+e>255?255:e+i
v=j+f>255?255:f+j
w=k
break
case 1818706796:w=k
v=j
u=i
t=h
break
case 1870030194:t=A.bee(d,h,g,k)
u=A.bee(e,i,g,k)
v=A.bee(f,j,g,k)
w=k
break
case 1934387572:t=A.beh(d,h)
u=A.beh(e,i)
v=A.beh(f,j)
w=k
break
case 1749838196:t=A.bec(d,h)
u=A.bec(e,i)
v=A.bec(f,j)
w=k
break
case 1984719220:t=A.bei(d,h)
u=A.bei(e,i)
v=A.bei(f,j)
w=k
break
case 1816947060:t=A.bed(d,h)
u=A.bed(e,i)
v=A.bed(f,j)
w=k
break
case 1884055924:t=A.bef(d,h)
u=A.bef(e,i)
v=A.bef(f,j)
w=k
break
case 1749903736:t=h<255-d?0:255
u=i<255-e?0:255
v=j<255-f?0:255
w=k
break
case 1684629094:t=Math.abs(h-d)
u=Math.abs(i-e)
v=Math.abs(j-f)
w=k
break
case 1936553316:t=A.beb(d,h)
u=A.beb(e,i)
v=A.beb(f,j)
w=k
break
case 1718842722:w=k
v=j
u=i
t=h
break
case 1717856630:w=k
v=j
u=i
t=h
break
case 1752524064:w=k
v=j
u=i
t=h
break
case 1935766560:w=k
v=j
u=i
t=h
break
case 1668246642:w=k
v=j
u=i
t=h
break
case 1819634976:w=k
v=j
u=i
t=h
break
default:w=k
v=j
u=i
t=h}s=1-r
n.saw(D.d.C(d*s+t*r))
n.saJ(D.d.C(e*s+u*r))
n.saP(D.d.C(f*s+v*r))
n.saO(D.d.C(g*s+w*r))},
aG9(){var w,v,u=this,t=u.as
t===$&&C.b()
u.c=t.M()
t=u.as.X()
u.d=t
if(t!==1){u.c=0
return}w=u.as.hp(6)
for(v=0;v<6;++v)if(J.o(w.a,w.d+v)!==0){u.c=0
return}u.e=u.as.X()
u.b=u.as.M()
u.a=u.as.M()
u.f=u.as.X()
u.r=B.ahf[u.as.X()]},
aGv(){var w,v,u,t,s,r,q=this,p=q.at
p===$&&C.b()
p.d=p.b
for(p=q.z;w=q.at,w.d<w.c;){v=w.M()
u=q.at.X()
w=q.at
w=J.o(w.a,w.d++)
t=q.at.f4(w)
if((w&1)===0)++q.at.d
s=q.at.M()
w=q.at
r=w.fR(s)
w.d=w.d+(r.c-r.d)
if((s&1)===1)++q.at.d
if(v===943868237)p.m(0,u,new A.a7G(t))}},
aGw(){var w,v,u,t,s,r,q,p,o,n=this,m=n.ax
m===$&&C.b()
m.d=m.b
w=m.M()
if((w&1)!==0)++w
v=n.ax.hp(w)
m=x.l
n.w=C.a([],m)
if(w>0){u=v.X()
$.jA()[0]=u
t=$.ko()[0]
if(t<0)t=-t
for(u=x.N,s=x.hf,r=x.af,q=0;q<t;++q){p=new A.a7J(C.x(u,s),C.a([],m),C.a([],r))
p.aqb(v)
n.w.push(p)}}for(q=0;m=n.w,q<m.length;++q)m[q].aZB(v,n)
w=n.ax.M()
o=n.ax.hp(w)
if(w>0){o.X()
o.X()
o.X()
o.X()
o.X()
o.X()
o.bm()}},
aGy(){var w,v,u,t,s,r,q=this,p=q.ay
p===$&&C.b()
p.d=p.b
w=p.X()
if(w===1){p=q.b
v=q.e
v===$&&C.b()
u=p*v
t=new Uint16Array(u)
for(s=0;s<u;++s)t[s]=q.ay.X()}else t=null
q.x=C.a([],x.X)
s=0
while(!0){p=q.e
p===$&&C.b()
if(!(s<p))break
p=q.x
v=q.ay
v.toString
r=s===3?-1:s
r=new A.DM(r)
r.aeT(v,q.a,q.b,q.f,w,t,s)
p.push(r);++s}q.y=A.bmF(q.r,q.f,q.a,q.b,q.x)}}
A.a7G.prototype={}
A.a7J.prototype={
aqb(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a2.M(),a1=$.e5()
a1[0]=a0
a0=$.hu()
d.a=a0[0]
a1[0]=a2.M()
d.b=a0[0]
a1[0]=a2.M()
d.c=a0[0]
a1[0]=a2.M()
a0=a0[0]
d.d=a0
a1=d.b
a1.toString
d.e=a0-a1
a1=d.c
a0=d.a
a0.toString
d.f=a1-a0
d.as=C.a([],x.X)
w=a2.X()
for(v=0;v<w;++v){a0=a2.X()
$.jA()[0]=a0
u=$.ko()[0]
a2.M()
d.as.push(new A.DM(u))}t=a2.M()
if(t!==943868237)throw C.c(A.aZ("Invalid PSD layer signature: "+D.c.iy(t,16)))
d.r=a2.M()
d.w=a2.bm()
a2.bm()
d.y=a2.bm()
if(a2.bm()!==0)throw C.c(A.aZ("Invalid PSD layer data"))
s=a2.M()
r=a2.hp(s)
if(s>0){s=r.M()
if(s>0){q=r.hp(s)
a0=q.d
q.M()
q.M()
q.M()
q.M()
q.bm()
q.bm()
if(q.c-a0===20)q.d+=2
else{q.bm()
q.bm()
q.M()
q.M()
q.M()
q.M()}}s=r.M()
if(s>0)new A.aKq().aq9(r.hp(s))
s=r.bm()
d.Q=r.f4(s)
p=4-D.c.b4(s,4)-1
if(p>0)r.d+=p
for(a0=r.c,a1=d.ay,o=d.cy,n=x.cE;r.d<a0;){t=r.M()
if(t!==943868237)throw C.c(A.aZ("PSD invalid signature for layer additional data: "+D.c.iy(t,16)))
m=r.f4(4)
s=r.M()
l=r.fR(s)
k=r.d+(l.c-l.d)
r.d=k
if((s&1)===1)r.d=k+1
a1.m(0,m,A.bDM(m,l))
if(m==="lrFX"){j=A.b7(n.a(a1.i(0,"lrFX")).b,null,0)
j.X()
i=j.X()
for(h=0;h<i;++h){j.f4(4)
g=j.f4(4)
f=j.M()
if(g==="dsdw"){e=new A.a7F()
o.push(e)
e.a=j.M()
j.M()
j.M()
j.M()
j.M()
j.X()
j.X()
j.X()
j.X()
j.X()
j.f4(8)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
j.X()
j.X()
j.X()
j.X()
j.X()}else if(g==="isdw"){e=new A.a7I()
o.push(e)
e.a=j.M()
j.M()
j.M()
j.M()
j.M()
j.X()
j.X()
j.X()
j.X()
j.X()
j.f4(8)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
j.X()
j.X()
j.X()
j.X()
j.X()}else if(g==="oglw"){e=new A.a7L()
o.push(e)
e.a=j.M()
j.M()
j.M()
j.X()
j.X()
j.X()
j.X()
j.X()
j.f4(8)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
if(e.a===2){j.X()
j.X()
j.X()
j.X()
j.X()}}else if(g==="iglw"){e=new A.a7H()
o.push(e)
e.a=j.M()
j.M()
j.M()
j.X()
j.X()
j.X()
j.X()
j.X()
j.f4(8)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
if(e.a===2){J.o(j.a,j.d++)
j.X()
j.X()
j.X()
j.X()
j.X()}}else if(g==="bevl"){e=new A.a7E()
o.push(e)
e.a=j.M()
j.M()
j.M()
j.M()
j.f4(8)
j.f4(8)
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
J.o(j.a,j.d++)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
J.o(j.a,j.d++)
if(e.a===2){j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()
j.X()}}else if(g==="sofi"){e=new A.a7M()
o.push(e)
e.a=j.M()
j.f4(4)
j.X()
j.X()
j.X()
j.X()
j.X()
J.o(j.a,j.d++)
J.o(j.a,j.d++)
j.X()
j.X()
j.X()
j.X()
j.X()}else j.d+=f}}}}},
aZB(d,e){var w,v,u,t,s,r=this,q=0
while(!0){w=r.as
w===$&&C.b()
if(!(q<w.length))break
w=w[q]
v=r.e
v===$&&C.b()
u=r.f
u===$&&C.b()
w.aZI(d,v,u,e.f);++q}v=e.r
u=e.f
t=r.e
t===$&&C.b()
s=r.f
s===$&&C.b()
r.cx=A.bmF(v,u,t,s,w)}}
A.DN.prototype={}
A.aKr.prototype={
l0(d,e){var w,v,u,t=null,s=A.bmE(d)
this.a=s
w=1
if(w===1){s=s.aaP()
return s}for(v=t,u=0;u<w;++u){s=this.a
e=s==null?t:s.aaP()
if(e==null)continue
if(v==null){e.w=B.a_i
v=e}else v.pJ(e)}return v}}
A.NC.prototype={}
A.mW.prototype={
ak(d,e){return new A.mW(this.a*e,this.b*e,this.c*e)},
a3(d,e){return new A.mW(this.a+e.a,this.b+e.b,this.c+e.c)},
ag(d,e){return new A.mW(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.hj.prototype={
ak(d,e){var w=this
return new A.hj(w.a*e,w.b*e,w.c*e,w.d*e)},
a3(d,e){var w=this
return new A.hj(w.a+e.a,w.b+e.b,w.c+e.c,w.d+e.d)},
ag(d,e){var w=this
return new A.hj(w.a-e.a,w.b-e.b,w.c-e.c,w.d-e.d)}}
A.NB.prototype={
gbd(){return this.b}}
A.DQ.prototype={
gbd(){return this.f}}
A.a7O.prototype={
gbd(){return this.b}}
A.lN.prototype={
sC7(d){this.a[this.b+1]=d},
F5(){var w=this.e,v=this.d
if(w)return new A.mW(B.d3[v>>>9],B.d3[v>>>4&31],B.cv[v&15])
else return new A.mW(B.cv[v>>>7&15],B.cv[v>>>3&15],B.kO[v&7])},
F7(){var w=this.e,v=this.d
if(w)return new A.hj(B.d3[v>>>9],B.d3[v>>>4&31],B.cv[v&15],255)
else return new A.hj(B.cv[v>>>7&15],B.cv[v>>>3&15],B.kO[v&7],B.kO[v>>>11&7])},
F6(){var w=this.r,v=this.f
if(w)return new A.mW(B.d3[v>>>10],B.d3[v>>>5&31],B.d3[v&31])
else return new A.mW(B.cv[v>>>8&15],B.cv[v>>>4&15],B.cv[v&15])},
F8(){var w=this.r,v=this.f
if(w)return new A.hj(B.d3[v>>>10],B.d3[v>>>5&31],B.d3[v&31],255)
else return new A.hj(B.cv[v>>>8&15],B.cv[v>>>4&15],B.cv[v&15],B.kO[v>>>12&7])},
AG(){var w=this,v=w.c?1:0,u=w.d,t=w.e?1:0,s=w.f,r=w.r?1:0
return(v|(u&16383)<<1|t<<15|(s&32767)<<16|r<<31)>>>0},
om(){var w=this,v=w.a[w.b+1]
w.c=(v&1)===1
w.sC7(w.AG())
w.d=v>>>1&16383
w.sC7(w.AG())
w.e=(v>>>15&1)===1
w.sC7(w.AG())
w.f=v>>>16&32767
w.sC7(w.AG())
w.r=(v>>>31&1)===1
w.sC7(w.AG())}}
A.aKx.prototype={
kN(d){var w,v=this,u=d.length,t=u-(u>>>1&1431655765)>>>0
t=(t&858993459)+(t>>>2&858993459)
if((t+(t>>>4)>>>0&252645135)*16843009>>>0>>>24===1){w=v.atX(d)
if(w!=null){v.a=d
return v.b=w}}w=v.auc(d)
if(w!=null){v.a=d
return v.b=w}w=v.aua(d)
if(w!=null){v.a=d
return v.b=w}return null},
auc(d){var w,v,u=A.by(d,!1,null,0)
if(u.M()!==52)return null
if(u.M()!==55727696)return null
w=C.a([0,0,0,0],x.t)
v=new A.DQ(w)
u.M()
v.b=u.M()
w[0]=u.bm()
w[1]=u.bm()
w[2]=u.bm()
w[3]=u.bm()
u.M()
u.M()
v.f=u.M()
v.r=u.M()
u.M()
u.M()
u.M()
u.M()
v.Q=u.M()
return v},
aua(d){var w,v,u=A.by(d,!1,null,0)
if(u.M()!==52)return null
w=new A.NB()
w.b=u.M()
w.a=u.M()
u.M()
w.d=u.M()
u.M()
w.f=u.M()
u.M()
u.M()
u.M()
w.y=u.M()
v=u.M()
w.z=v
w.Q=u.M()
if(v!==559044176)return null
return w},
atX(d){var w,v,u,t,s,r,q=null,p=d.length,o=A.by(d,!1,q,0)
if(o.M()!==0)return q
w=new A.a7O()
w.b=o.M()
w.a=o.M()
o.M()
o.M()
o.M()
o.M()
o.M()
o.M()
o.M()
v=o.M()
w.y=v
if(v===559044176)return q
u=0
t=8
if(!(p===32)){s=0
while(!0){if(!(s<10)){u=1
break}r=s<<1>>>0
if((D.c.cN(64,r)&p)>>>0!==0){t=D.c.cN(16,s)
u=1
break}if((D.c.cN(128,r)&p)>>>0!==0){t=D.c.cN(16,s)
break}++s}if(s===10)return q}if((u+1)*2===4)return q
w.b=w.a=t
return w},
hb(d){var w,v,u=this,t=u.b
if(t==null||u.a==null)return null
if(t instanceof A.a7O){t=t.a
w=u.b.gbd()
v=u.a
v.toString
return u.Ov(t,w,v)}else if(t instanceof A.NB){t=u.a
t.toString
return u.au9(t)}else if(t instanceof A.DQ){t=u.a
t.toString
return u.aub(t)}return null},
l0(d,e){if(this.kN(d)==null)return null
return this.hb(0)},
au9(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.length
if(l<52||n.b==null)return m
w=n.b
w.toString
x.fi.a(w)
v=A.by(d,!1,m,0)
v.d+=52
u=w.Q
if(u<1)u=(w.d&4096)!==0?6:1
if(u!==1)return m
t=w.a
s=w.b
if(t*s*w.f/8>l-52)return m
switch(w.d&255){case 16:r=A.ek(m,m,B.C,0,B.aq,s,m,0,4,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();){q=w.gK()
t=J.o(v.a,v.d++)
s=J.o(v.a,v.d++)
q.saw(s&240)
q.saJ((s&15)<<4)
q.saP(t&240)
q.saO((t&15)<<4)}return r
case 17:r=A.ek(m,m,B.C,0,B.aq,s,m,0,4,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();){q=w.gK()
p=v.X()
o=(p&1)!==0?255:0
q.saw(p>>>8&248)
q.saJ(p>>>3&248)
q.saP((p&62)<<2)
q.saO(o)}return r
case 18:r=A.ek(m,m,B.C,0,B.aq,s,m,0,4,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();){q=w.gK()
q.saw(J.o(v.a,v.d++))
q.saJ(J.o(v.a,v.d++))
q.saP(J.o(v.a,v.d++))
q.saO(J.o(v.a,v.d++))}return r
case 19:r=A.ek(m,m,B.C,0,B.aq,s,m,0,3,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();){q=w.gK()
p=v.X()
q.saw(p>>>8&248)
q.saJ(p>>>3&252)
q.saP((p&31)<<3)}return r
case 20:r=A.ek(m,m,B.C,0,B.aq,s,m,0,3,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();){q=w.gK()
p=v.X()
q.saw((p&31)<<3)
q.saJ(p>>>2&248)
q.saP(p>>>7&248)}return r
case 21:r=A.ek(m,m,B.C,0,B.aq,s,m,0,3,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();){q=w.gK()
q.saw(J.o(v.a,v.d++))
q.saJ(J.o(v.a,v.d++))
q.saP(J.o(v.a,v.d++))}return r
case 22:r=A.ek(m,m,B.C,0,B.aq,s,m,0,1,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();)w.gK().saw(J.o(v.a,v.d++))
return r
case 23:r=A.ek(m,m,B.C,0,B.aq,s,m,0,4,m,B.C,t,!1)
for(w=r.a,w=w.gR(w);w.p();){q=w.gK()
t=J.o(v.a,v.d++)
s=J.o(v.a,v.d++)
q.saw(s)
q.saJ(s)
q.saP(s)
q.saO(t)}return r
case 24:return m
case 25:return w.y===0?n.a0o(t,s,v.eJ()):n.Ov(t,s,v.eJ())}return m},
aub(d){var w,v,u,t=this
if(!(t.b instanceof A.DQ))return null
w=A.by(d,!1,null,0)
v=w.d+=52
u=x.a7.a(t.b)
w.d=v+u.Q
if(u.c[0]===0)switch(u.b){case 2:return t.a0o(u.r,u.f,w.eJ())
case 3:return t.Ov(u.r,u.f,w.eJ())}return null},
a0o(c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.ek(b6,b6,B.C,0,B.aq,c7,b6,0,3,b6,B.C,c6,!1),b8=c6/4|0,b9=b8-1,c0=C.k1(c8.buffer,0,b6),c1=new A.lN(c0),c2=new A.lN(C.k1(c8.buffer,0,b6)),c3=new A.lN(C.k1(c8.buffer,0,b6)),c4=new A.lN(C.k1(c8.buffer,0,b6)),c5=new A.lN(C.k1(c8.buffer,0,b6))
for(w=0,v=0;w<b8;++w,v+=4)for(u=0,t=0;u<b8;++u,t+=4){c1.b=A.qt(u,w)<<1>>>0
c1.om()
s=c0[c1.b]
r=c1.c?4:0
for(q=0,p=0;p<4;++p){o=(w+(p<2?-1:0)&b9)>>>0
n=(o+1&b9)>>>0
for(m=p+v,l=0;l<4;++l){k=(u+(l<2?-1:0)&b9)>>>0
j=(k+1&b9)>>>0
c2.b=A.qt(k,o)<<1>>>0
c2.om()
c3.b=A.qt(j,o)<<1>>>0
c3.om()
c4.b=A.qt(k,n)<<1>>>0
c4.om()
c5.b=A.qt(j,n)<<1>>>0
c5.om()
i=c2.F5()
h=B.by[q][0]
g=c3.F5()
f=B.by[q][1]
e=c4.F5()
d=B.by[q][2]
a0=c5.F5()
a1=B.by[q][3]
a2=c2.F6()
a3=B.by[q][0]
a4=c3.F6()
a5=B.by[q][1]
a6=c4.F6()
a7=B.by[q][2]
a8=c5.F6()
a9=B.by[q][3]
b0=B.zN[r+s&3]
b1=b0[0]
b2=b0[1]
b3=D.c.H((i.a*h+g.a*f+e.a*d+a0.a*a1)*b1+(a2.a*a3+a4.a*a5+a6.a*a7+a8.a*a9)*b2,7)
b4=D.c.H((i.b*h+g.b*f+e.b*d+a0.b*a1)*b1+(a2.b*a3+a4.b*a5+a6.b*a7+a8.b*a9)*b2,7)
b5=D.c.H((i.c*h+g.c*f+e.c*d+a0.c*a1)*b1+(a2.c*a3+a4.c*a5+a6.c*a7+a8.c*a9)*b2,7)
b2=b7.a
if(b2!=null)b2.d6(l+t,m,b3,b4,b5)
s=s>>>2;++q}}}return b7},
Ov(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=A.ek(a5,a5,B.C,0,B.aq,b6,a5,0,4,a5,B.C,b5,!1),a7=b5/4|0,a8=a7-1,a9=C.k1(b7.buffer,0,a5),b0=new A.lN(a9),b1=new A.lN(C.k1(b7.buffer,0,a5)),b2=new A.lN(C.k1(b7.buffer,0,a5)),b3=new A.lN(C.k1(b7.buffer,0,a5)),b4=new A.lN(C.k1(b7.buffer,0,a5))
for(w=0,v=0;w<a7;++w,v+=4)for(u=0,t=0;u<a7;++u,t+=4){b0.b=A.qt(u,w)<<1>>>0
b0.om()
s=a9[b0.b]
r=b0.c?4:0
for(q=0,p=0;p<4;++p){o=(w+(p<2?-1:0)&a8)>>>0
n=(o+1&a8)>>>0
for(m=p+v,l=0;l<4;++l){k=(u+(l<2?-1:0)&a8)>>>0
j=(k+1&a8)>>>0
b1.b=A.qt(k,o)<<1>>>0
b1.om()
b2.b=A.qt(j,o)<<1>>>0
b2.om()
b3.b=A.qt(k,n)<<1>>>0
b3.om()
b4.b=A.qt(j,n)<<1>>>0
b4.om()
i=b1.F7()
h=B.by[q][0]
g=b2.F7()
f=B.by[q][1]
f=new A.hj(i.a*h,i.b*h,i.c*h,i.d*h).a3(0,new A.hj(g.a*f,g.b*f,g.c*f,g.d*f))
g=b3.F7()
h=B.by[q][2]
h=f.a3(0,new A.hj(g.a*h,g.b*h,g.c*h,g.d*h))
g=b4.F7()
f=B.by[q][3]
e=h.a3(0,new A.hj(g.a*f,g.b*f,g.c*f,g.d*f))
f=b1.F8()
g=B.by[q][0]
h=b2.F8()
i=B.by[q][1]
i=new A.hj(f.a*g,f.b*g,f.c*g,f.d*g).a3(0,new A.hj(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.F8()
g=B.by[q][2]
g=i.a3(0,new A.hj(h.a*g,h.b*g,h.c*g,h.d*g))
h=b4.F8()
i=B.by[q][3]
d=g.a3(0,new A.hj(h.a*i,h.b*i,h.c*i,h.d*i))
a0=B.zN[r+s&3]
i=a0[0]
h=a0[1]
a1=D.c.H(e.a*i+d.a*h,7)
a2=D.c.H(e.b*i+d.b*h,7)
a3=D.c.H(e.c*i+d.c*h,7)
a4=D.c.H(e.d*a0[2]+d.d*a0[3],7)
h=a6.a
if(h!=null)h.hF(l+t,m,a1,a2,a3,a4)
s=s>>>2;++q}}}return a6}}
A.ab0.prototype={
kh(d){var w,v=this
if(d.c-d.d<18)return
v.a=d.bm()
v.b=d.bm()
w=d.bm()
v.c=w<12?B.ae1[w]:B.mn
d.X()
v.e=d.X()
v.f=d.bm()
d.X()
d.X()
v.x=d.X()
v.y=d.X()
v.z=d.bm()
v.Q=d.bm()},
adf(){var w=this,v=w.z
if(v!==8&&v!==16&&v!==24&&v!==32)return!1
v=w.c
if(v===B.ef||v===B.eg){if(w.e>256||w.b!==1)return!1
v=w.f
if(v!==16&&v!==24&&v!==32)return!1}else if(w.b===1)return!1
return!0}}
A.jm.prototype={
J(){return"TgaImageType."+this.b}}
A.aRJ.prototype={
l0(d,e){if(this.kN(d)==null)return null
return this.hb(0)},
kN(d){var w,v,u,t,s=this
s.a=new A.ab0(B.mn)
w=A.by(d,!1,null,0)
s.b=w
v=w.hp(18)
s.a.kh(v)
if(!s.a.adf())return null
w=s.b
u=s.a
w.d+=u.a
t=u.c
if(t===B.ef||t===B.eg)u.as=w.hp(u.e*D.c.H(u.f,3)).eJ()
w=s.a
w.ax=s.b.d
return w},
hb(d){var w=this,v=w.a
if(v==null)return null
v=v.c
if(v===B.Ol)return w.a0n()
else if(v===B.Ok||v===B.eg)return w.auf()
else if(v===B.ef)return w.a0n()
return null},
a0i(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=A.by(d,!1,null,0),l=n.a.f
if(l===16){l=n.b
l===$&&C.b()
w=l.X()
v=w>>>7&248
u=w>>>2&248
t=(w&31)<<3
s=(w&32768)!==0?0:255
for(r=0;r<n.a.e;++r){e.ob(r,v)
e.oa(r,u)
e.o9(r,t)
e.o8(r,s)}}else{q=l===32
for(r=0;r<n.a.e;++r){l=J.o(m.a,m.d++)
p=J.o(m.a,m.d++)
o=J.o(m.a,m.d++)
s=q?J.o(m.a,m.d++):255
e.ob(r,o)
e.oa(r,p)
e.o9(r,l)
e.o8(r,s)}}},
auf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.z,e=f===16,d=e||f===32,a0=g.x,a1=g.y,a2=d?4:3
g=g.c
w=A.ek(h,h,B.C,0,B.aq,a1,h,0,a2,h,B.C,a0,g===B.ef||g===B.eg)
g=w.a
if((g==null?h:g.gdn())!=null){g=i.a.as
g.toString
a0=w.a
a0=a0==null?h:a0.gdn()
a0.toString
i.a0i(g,a0)}v=w.gdX()
u=w.gbd()-1
g=f===8
t=0
while(!0){a0=i.b
a0===$&&C.b()
a1=a0.d
if(!(a1<a0.c&&u>=0))break
a2=a0.a
a0.d=a1+1
a1=J.o(a2,a1)
s=(a1&127)+1
r=0
if((a1&128)!==0)if(g){a0=i.b
a0=J.o(a0.a,a0.d++)
for(q=0;q<s;++q){p=t+1
a1=w.a
if(a1!=null)a1.jR(t,u,a0)
if(p>=v){--u
if(u<0){t=r
break}t=0}else t=p}}else{a0=i.b
if(e){o=a0.X()
n=o>>>7&248
m=o>>>2&248
l=(o&31)<<3
k=(o&32768)!==0?0:255
for(q=0;q<s;++q){p=t+1
a0=w.a
if(a0!=null)a0.hF(t,u,n,m,l,k)
if(p>=v){--u
if(u<0){t=r
break}t=0}else t=p}}else{a0=J.o(a0.a,a0.d++)
a1=i.b
a1=J.o(a1.a,a1.d++)
a2=i.b
a2=J.o(a2.a,a2.d++)
if(d){j=i.b
k=J.o(j.a,j.d++)}else k=255
for(q=0;q<s;++q){p=t+1
j=w.a
if(j!=null)j.hF(t,u,a2,a1,a0,k)
if(p>=v){--u
if(u<0){t=r
break}t=0}else t=p}}}else if(g)for(q=0;q<s;++q){a0=i.b
a0=J.o(a0.a,a0.d++)
p=t+1
a1=w.a
if(a1!=null)a1.jR(t,u,a0)
if(p>=v){--u
if(u<0){t=r
break}t=0}else t=p}else if(e)for(q=0;q<s;++q){o=i.b.X()
k=(o&32768)!==0?0:255
p=t+1
a0=w.a
if(a0!=null)a0.hF(t,u,o>>>7&248,o>>>2&248,(o&31)<<3,k)
a0=i.b
if(a0.d>=a0.c){t=p
break}if(p>=v){--u
if(u<0){t=r
break}t=0}else t=p}else for(q=0;q<s;++q){a0=i.b
a0=J.o(a0.a,a0.d++)
a1=i.b
a1=J.o(a1.a,a1.d++)
a2=i.b
a2=J.o(a2.a,a2.d++)
if(d){j=i.b
k=J.o(j.a,j.d++)}else k=255
p=t+1
j=w.a
if(j!=null)j.hF(t,u,a2,a1,a0,k)
if(p>=v){--u
if(u<0){t=r
break}t=0}else t=p}if(t>=v){--u
if(u<0)break
t=0}}return w},
a0n(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b
j===$&&C.b()
w=l.a
j.d=w.ax
v=w.z
j=v===16
u=!0
if(!j)if(v!==32){t=w.c
if(t===B.ef||t===B.eg){t=w.f
t=t===16||t===32}else t=!1
u=t}t=w.x
s=w.y
r=u?4:3
w=w.c
q=A.ek(k,k,B.C,0,B.aq,s,k,0,r,k,B.C,t,w===B.ef||w===B.eg)
w=l.a
t=w.c
if(t===B.ef||t===B.eg){w=w.as
w.toString
t=q.a
t=t==null?k:t.gdn()
t.toString
l.a0i(w,t)}if(v===8)for(p=q.gbd()-1;p>=0;--p){o=0
while(!0){j=q.a
j=j==null?k:j.a
if(!(o<(j==null?0:j)))break
j=l.b
j=J.o(j.a,j.d++)
w=q.a
if(w!=null)w.jR(o,p,j);++o}}else if(j)for(p=q.gbd()-1;p>=0;--p){o=0
while(!0){j=q.a
j=j==null?k:j.a
if(!(o<(j==null?0:j)))break
n=l.b.X()
m=(n&32768)!==0?0:255
j=q.a
if(j!=null)j.hF(o,p,n>>>7&248,n>>>2&248,(n&31)<<3,m);++o}}else for(p=q.gbd()-1;p>=0;--p){o=0
while(!0){j=q.a
j=j==null?k:j.a
if(!(o<(j==null?0:j)))break
j=l.b
j=J.o(j.a,j.d++)
w=l.b
w=J.o(w.a,w.d++)
t=l.b
t=J.o(t.a,t.d++)
if(u){s=l.b
m=J.o(s.a,s.d++)}else m=255
s=q.a
if(s!=null)s.hF(o,p,t,w,j,m);++o}}return q}}
A.aRO.prototype={
fz(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.bm()}for(w=s.a,v=0;u=s.c,d>u;){v=D.c.dA(v,u)+(s.b&B.iC[u])
d-=u
s.c=8
s.b=J.o(w.a,w.d++)}if(d>0){if(u===0){s.c=8
s.b=w.bm()}w=D.c.dA(v,d)
u=s.b
t=s.c-d
v=w+(D.c.kK(u,t)&B.iC[d])
s.c=t}return v}}
A.ab3.prototype={
j(d){var w=this,v=w.a,u=$.bbY().i(0,v)
if(u!=null)return u.a+": "+w.b.j(0)+" "+w.c
return"<"+v+">: "+w.b.j(0)+" "+w.c},
hY(){var w,v,u,t=this,s=t.e
if(s!=null)return s
s=t.f
s.d=t.d
w=t.c
v=t.b
u=s.hp(w*(v!==B.q?B.oV[v.a]:0))
switch(v.a){case 1:return t.e=new A.pU(new Uint8Array(C.bo(u.hp(w).eJ())))
case 2:return t.e=new A.xc(w===0?"":u.f4(w-1))
case 7:return t.e=new A.pU(new Uint8Array(C.bo(u.hp(w).eJ())))
case 3:return t.e=A.bkP(u,w)
case 4:return t.e=A.bkK(u,w)
case 5:return t.e=A.bkL(u,w)
case 11:return t.e=A.bkQ(u,w)
case 12:return t.e=A.bkJ(u,w)
case 6:return t.e=new A.tt(new Int8Array(C.bo(C.blU(u.eJ().buffer,0,w))))
case 8:return t.e=A.bkO(u,w)
case 9:return t.e=A.bkM(u,w)
case 10:return t.e=A.bkN(u,w)
case 0:return null}}}
A.aRQ.prototype={
aQj(d,e,f,g){var w,v,u,t=this
t.r=e
t.x=t.w=0
w=D.c.bg(t.a+7,8)
for(v=0,u=0;u<g;++u){t.Ot(d,v,f)
v+=w}},
Ot(d,e,f){var w,v,u,t,s,r,q,p,o=this
o.d=0
for(w=o.a,v=!0;f<w;){for(;v;){u=o.r7(10)
t=B.zf[u]
s=D.c.H(t,1)&15
if(s===12){t=B.lm[(u<<2&12|o.kU(2))>>>0]
r=D.c.H(t,1)
f+=D.c.H(t,4)&4095
o.im(4-(r&7))}else if(s===0)throw C.c(A.aZ("TIFFFaxDecoder0"))
else if(s===15)throw C.c(A.aZ("TIFFFaxDecoder1"))
else{f+=D.c.H(t,5)&2047
o.im(10-s)
if((t&1)===0){o.f[o.d++]=f
v=!1}}}if(f===w){if(o.z===2)if(o.w!==0){w=o.x
w.toString
o.x=w+1
o.w=0}break}for(;!v;){t=B.xP[o.kU(4)]
q=t>>>5&2047
p=!0
if(q===100){t=B.Cg[o.r7(9)]
s=D.c.H(t,1)&15
q=D.c.H(t,5)&2047
if(s===12){o.im(5)
t=B.lm[o.kU(4)]
r=D.c.H(t,1)
q=D.c.H(t,4)&4095
o.lB(d,e,f,q)
f+=q
o.im(4-(r&7))}else if(s===15)throw C.c(A.aZ("TIFFFaxDecoder2"))
else{o.lB(d,e,f,q)
f+=q
o.im(9-s)
if((t&1)===0){o.f[o.d++]=f
v=p}}}else{if(q===200){t=B.wf[o.kU(2)]
q=t>>>5&2047
o.lB(d,e,f,q)
f+=q
o.im(2-(t>>>1&15))
o.f[o.d++]=f}else{o.lB(d,e,f,q)
f+=q
o.im(4-(t>>>1&15))
o.f[o.d++]=f}v=p}}if(f===w){if(o.z===2)if(o.w!==0){w=o.x
w.toString
o.x=w+1
o.w=0}break}}o.f[o.d++]=f},
aQk(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.r=a1
d.z=3
d.x=d.w=0
w=d.a
v=D.c.bg(w+7,8)
u=C.aT(2,null,!1,x.u)
d.at=a4&1
d.as=a4>>>2&1
if(d.a53()!==1)throw C.c(A.aZ("TIFFFaxDecoder3"))
d.Ot(a0,0,a2)
for(t=v,s=1;s<a3;++s){if(d.a53()===0){r=d.e
d.e=d.f
d.f=r
d.y=0
q=a2
p=-1
o=!0
n=0
while(!0){q.toString
if(!(q<w))break
d.a1J(p,o,u)
m=u[0]
l=u[1]
k=B.Bw[d.kU(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
d.lB(a0,t,q,l-q)}d.im(7-i)
q=l
p=q}else if(j===1){d.im(7-i)
h=n+1
g=h+1
if(o){q+=d.Go()
d.f[n]=q
f=d.Gn()
d.lB(a0,t,q,f)
q+=f
d.f[h]=q}else{f=d.Gn()
d.lB(a0,t,q,f)
q+=f
d.f[n]=q
q+=d.Go()
d.f[h]=q}n=g
p=q}else{if(j<=8){m.toString
e=m+(j-5)
h=n+1
d.f[n]=e
o=!o
if(o)d.lB(a0,t,q,e-q)
d.im(7-i)}else throw C.c(A.aZ("TIFFFaxDecoder4"))
q=e
n=h
p=q}}d.f[n]=q
d.d=n+1}else d.Ot(a0,t,a2)
t+=v}},
aQp(a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
w=a3.a
v=D.c.bg(w+7,8)
u=C.aT(2,null,!1,x.u)
t=a3.f
a3.d=0
a3.d=1
t[0]=w
a3.d=2
t[1]=w
for(s=0,r=0;r<a7;++r){q=a3.e
a3.e=a3.f
a3.f=q
a3.y=0
p=a6
o=-1
n=!0
m=0
while(!0){p.toString
if(!(p<w))break
a3.a1J(o,n,u)
l=u[0]
k=u[1]
j=B.Bw[a3.kU(7)]&255
i=j>>>3&15
h=j&7
if(i===0){if(!n){k.toString
a3.lB(a4,s,p,k-p)}a3.im(7-h)
p=k
o=p}else if(i===1){a3.im(7-h)
g=m+1
f=g+1
if(n){p+=a3.Go()
q[m]=p
e=a3.Gn()
a3.lB(a4,s,p,e)
p+=e
q[g]=p}else{e=a3.Gn()
a3.lB(a4,s,p,e)
p+=e
q[m]=p
p+=a3.Go()
q[g]=p}m=f
o=p}else if(i<=8){l.toString
d=l+(i-5)
g=m+1
q[m]=d
n=!n
if(n)a3.lB(a4,s,p,d-p)
a3.im(7-h)
p=d
m=g
o=p}else if(i===11){if(a3.kU(3)!==7)throw C.c(A.aZ("TIFFFaxDecoder5"))
for(a0=0,a1=!1;!a1;n=a2){for(;a3.kU(1)!==1;)++a0
if(a0>5){a0-=6
if(!n&&a0>0){g=m+1
q[m]=p
m=g}p+=a0
if(a0>0)n=!0
a2=a3.kU(1)===0
if(a2){if(!n){g=m+1
q[m]=p
m=g}}else if(n){g=m+1
q[m]=p
m=g}n=a2
a1=!0}a2=a0===5
if(a2){if(!n){g=m+1
q[m]=p
m=g}p+=a0}else{p+=a0
g=m+1
q[m]=p
a3.lB(a4,s,p,1);++p
m=g}}}else throw C.c(A.aZ("TIFFFaxDecoder5 "+i))}q[m]=p
a3.d=m+1
s+=v}},
Go(){var w,v,u,t,s,r,q=this
for(w=0,v=!0;v;){u=q.r7(10)
t=B.zf[u]
s=D.c.H(t,1)&15
if(s===12){t=B.lm[(u<<2&12|q.kU(2))>>>0]
r=D.c.H(t,1)
w+=D.c.H(t,4)&4095
q.im(4-(r&7))}else if(s===0)throw C.c(A.aZ("TIFFFaxDecoder0"))
else if(s===15)throw C.c(A.aZ("TIFFFaxDecoder1"))
else{w+=D.c.H(t,5)&2047
q.im(10-s)
if((t&1)===0)v=!1}}return w},
Gn(){var w,v,u,t,s,r,q=this
for(w=0,v=!1;!v;){u=B.xP[q.kU(4)]
t=u>>>5&2047
if(t===100){u=B.Cg[q.r7(9)]
s=D.c.H(u,1)&15
r=D.c.H(u,5)
if(s===12){q.im(5)
u=B.lm[q.kU(4)]
r=D.c.H(u,1)
w+=D.c.H(u,4)&4095
q.im(4-(r&7))}else if(s===15)throw C.c(A.aZ("TIFFFaxDecoder2"))
else{w+=r&2047
q.im(9-s)
if((u&1)===0)v=!0}}else{if(t===200){u=B.wf[q.kU(2)]
w+=u>>>5&2047
q.im(2-(u>>>1&15))}else{w+=t
q.im(4-(u>>>1&15))}v=!0}}return w},
a53(){var w,v,u=this,t="TIFFFaxDecoder8",s=u.as
if(s===0){if(u.r7(12)!==1)throw C.c(A.aZ("TIFFFaxDecoder6"))}else if(s===1){s=u.w
s.toString
w=8-s
if(u.r7(w)!==0)throw C.c(A.aZ(t))
if(w<4)if(u.r7(8)!==0)throw C.c(A.aZ(t))
for(;v=u.r7(8),v!==1;)if(v!==0)throw C.c(A.aZ(t))}if(u.at===0)return 1
else return u.kU(1)},
a1J(d,e,f){var w,v=this,u=v.e,t=v.d,s=v.y,r=s>0?s-1:0
r=e?(r&4294967294)>>>0:(r|1)>>>0
for(w=r;w<t;w+=2){s=u[w]
s.toString
d.toString
if(s>d){v.y=w
f[0]=s
break}}s=w+1
if(s<t)f[1]=u[s]},
lB(d,e,f,g){var w,v,u,t,s,r=8*e+f,q=r+g,p=D.c.H(r,3),o=r&7
if(o>0){w=D.c.dA(1,7-o)
v=J.o(d.a,d.d+p)
while(!0){if(!(w>0&&r<q))break
v=(v|w)>>>0
w=w>>>1;++r}d.m(0,p,v)}p=D.c.H(r,3)
for(u=q-7;r<u;p=t){t=p+1
J.bL(d.a,d.d+p,255)
r+=8}for(;r<q;){p=D.c.H(r,3)
u=J.o(d.a,d.d+p)
s=D.c.dA(1,7-(r&7))
J.bL(d.a,d.d+p,(u|s)>>>0);++r}},
r7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&C.b()
w=i.d
v=i.c-w-1
u=j.x
t=j.c
s=0
r=0
if(t===1){u.toString
q=J.o(i.a,w+u)
if(!(u===v)){i=u+1
w=j.r
t=w.a
w=w.d
if(i===v)s=J.o(t,w+i)
else{s=J.o(t,w+i)
i=j.r
r=J.o(i.a,i.d+(u+2))}}}else if(t===2){u.toString
q=B.fV[J.o(i.a,w+u)&255]
if(!(u===v)){i=u+1
w=j.r
t=w.a
w=w.d
if(i===v)s=B.fV[J.o(t,w+i)&255]
else{s=B.fV[J.o(t,w+i)&255]
i=j.r
r=B.fV[J.o(i.a,i.d+(u+2))&255]}}}else throw C.c(A.aZ("TIFFFaxDecoder7"))
i=j.w
i.toString
p=8-i
o=d-p
if(o>8){n=o-8
m=8}else{m=o
n=0}i=j.x
i.toString
i=j.x=i+1
l=D.c.dA(q&B.iC[p],o)
k=D.c.dG(s&B.oN[m],8-m)
if(n!==0){k=D.c.dA(k,n)|D.c.dG(r&B.oN[n],8-n)
j.x=i+1
j.w=n}else if(m===8){j.w=0
j.x=i+1}else j.w=m
return(l|k)>>>0},
kU(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.r
l===$&&C.b()
w=l.d
v=l.c-w-1
u=m.x
t=m.c
s=0
if(t===1){u.toString
r=J.o(l.a,w+u)
if(!(u===v)){l=m.r
s=J.o(l.a,l.d+(u+1))}}else if(t===2){u.toString
r=B.fV[J.o(l.a,w+u)&255]
if(!(u===v)){l=m.r
s=B.fV[J.o(l.a,l.d+(u+1))&255]}}else throw C.c(A.aZ("TIFFFaxDecoder7"))
l=m.w
l.toString
q=8-l
p=d-q
o=q-d
if(o>=0){n=D.c.dG(r&B.iC[q],o)
l+=d
m.w=l
if(l===8){m.w=0
l=m.x
l.toString
m.x=l+1}}else{n=(D.c.dA(r&B.iC[q],-o)|D.c.dG(s&B.oN[p],8-p))>>>0
l=m.x
l.toString
m.x=l+1
m.w=p}return n},
im(d){var w,v=this,u=v.w
u.toString
w=u-d
if(w<0){u=v.x
u.toString
v.x=u-1
v.w=8+w}else v.w=w}}
A.ab4.prototype={
aqk(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=A.b7(a1,e,0),a0=a1.X()
for(w=f.a,v=0;v<a0;++v){u=a1.X()
t=a1.X()
s=B.BV[t]
r=B.oV[t]
q=a1.M()
if(q*r>4)p=a1.M()
else{p=a1.d
a1.d=p+4}o=new A.ab3(u,s,q,p,d)
w.m(0,u,o)
if(u===256){n=o.hY()
n=n==null?e:n.C(0)
f.b=n==null?0:n}else if(u===257){n=o.hY()
n=n==null?e:n.C(0)
f.c=n==null?0:n}else if(u===262){m=o.hY()
l=m==null?e:m.C(0)
if(l==null)l=17
if(l<17)f.d=B.acY[l]
else f.d=B.r1}else if(u===259){n=o.hY()
n=n==null?e:n.C(0)
f.e=n==null?0:n}else if(u===258){n=o.hY()
n=n==null?e:n.C(0)
f.f=n==null?0:n}else if(u===277){n=o.hY()
n=n==null?e:n.C(0)
f.r=n==null?0:n}else if(u===317){n=o.hY()
n=n==null?e:n.C(0)
f.z=n==null?0:n}else if(u===339){n=o.hY()
m=n==null?e:n.C(0)
f.w=B.afb[m==null?0:m]}else if(u===320){m=o.hY()
if(m!=null){n=m.nZ().buffer
k=D.c.bg(n.byteLength,2)
n=new Uint16Array(n,0,k)
f.go=n
f.id=0
n=n.length/3|0
f.k1=n
f.k2=n*2}}}j=f.go
n=j!=null
if(n&&f.d===B.r2)f.r=1
if(f.b===0||f.c===0)return
if(n&&f.f===8){i=j.length
for(v=0;v<i;++v)j[v]=j[v]>>>8}if(f.d===B.r0)f.y=!0
if(w.a5(324)){f.ax=f.x8(322)
f.ay=f.x8(323)
f.ch=f.HE(324)
f.CW=f.HE(325)}else{f.ax=f.HD(322,f.b)
if(!w.a5(278))f.ay=f.HD(323,f.c)
else{h=f.x8(278)
if(h===-1)f.ay=f.c
else f.ay=h}f.ch=f.HE(273)
f.CW=f.HE(279)}n=f.b
g=f.ax
f.cx=D.c.e7(n+g-1,g)
g=f.c
n=f.ay
f.cy=D.c.e7(g+n-1,n)
f.dx=f.HD(266,1)
f.dy=f.x8(292)
f.fr=f.x8(293)
f.x8(338)
switch(f.d.a){case 0:case 1:w=f.f
if(w===1&&f.r===1)f.x=B.r_
else if(w===4&&f.r===1)f.x=B.aEN
else if(D.c.b4(w,8)===0){w=f.r
if(w===1)f.x=B.aEO
else if(w===2)f.x=B.aEP
else f.x=B.mo}break
case 2:if(D.c.b4(f.f,8)===0){w=f.r
if(w===3)f.x=B.Op
else if(w===4)f.x=B.aER
else f.x=B.mo}break
case 3:w=!1
if(f.r===1)if(f.go!=null){w=f.f
w=w===4||w===8||w===16}if(w)f.x=B.aEQ
break
case 4:if(f.f===1&&f.r===1)f.x=B.r_
break
case 6:if(f.e===7&&f.f===8&&f.r===3)f.x=B.Op
else{if(w.a5(530)){m=w.i(0,530).hY()
f.Q=m.C(0)
w=f.as=m.fA(0,1)}else w=f.as=f.Q=2
n=f.Q
n===$&&C.b()
if(n*w===1)f.x=B.mo
else if(f.f===8&&f.r===3)f.x=B.aES}break
default:if(D.c.b4(f.f,8)===0)f.x=B.mo
break}},
eZ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.w,a0=d===B.jn,a1=d===B.ah
d=f.f
if(d===1)w=B.d0
else if(d===2)w=B.du
else{if(d===4)d=B.dv
else if(a0&&d===16)d=B.dU
else if(a0&&d===32)d=B.eB
else if(a0&&d===64)d=B.fJ
else if(a1&&d===8)d=B.fK
else if(a1&&d===16)d=B.fL
else if(a1&&d===32)d=B.fM
else if(d===16)d=B.bg
else d=d===32?B.eC:B.C
w=d}v=f.go!=null&&f.d===B.r2
u=v?3:f.r
d=f.b
t=A.ek(e,e,w,0,B.aq,f.c,e,0,u,e,w,d,v)
if(v){d=t.a
d=d==null?e:d.gdn()
d.toString
s=f.go
r=s.length
q=r/3|0
p=f.id
p===$&&C.b()
o=f.k1
o===$&&C.b()
n=f.k2
n===$&&C.b()
for(m=n,l=o,k=p,j=0;j<q;++j,++k,++l,++m){if(m>=r)break
d.md(j,s[k],s[l],s[m])}}i=0
h=0
while(!0){d=f.cy
d===$&&C.b()
if(!(i<d))break
g=0
while(!0){d=f.cx
d===$&&C.b()
if(!(g<d))break
f.aug(a2,t,g,i);++g;++h}++i}return t},
aug(b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null
if(a9.x===B.r_){a9.au_(b1,b2,b3,b4)
return}t=a9.cx
t===$&&C.b()
s=b4*t+b3
b1.d=a9.ch[s]
t=a9.ax
r=b3*t
q=a9.ay
p=b4*q
w=a9.CW[s]
o=t*q*a9.r
t=a9.f
q=t===16
if(q)o*=2
else if(t===32)o*=4
v=null
if(t===8||q||t===32||t===64){t=a9.e
if(t===1)v=b1
else if(t===5){v=A.by(new Uint8Array(o),!1,b0,0)
u=A.blw()
try{u.Ju(A.b7(b1,w,0),v.a)}catch(n){}if(a9.z===2)for(m=0;m<a9.ay;++m){l=a9.r
t=a9.ax
k=l*(m*t+1)
j=t*l
for(;l<j;++l){t=v
q=J.o(t.a,t.d+k)
i=v
h=a9.r
h=J.o(i.a,i.d+(k-h))
J.bL(t.a,t.d+k,q+h);++k}}}else if(t===32773){v=A.by(new Uint8Array(o),!1,b0,0)
a9.a0m(b1,o,v.a)}else if(t===32946)v=A.by(B.es.uO(A.xq(b1.EK(0,0,w),1,b0,0),!1),!1,b0,0)
else if(t===8)v=A.by(B.es.uO(A.xq(b1.EK(0,0,w),1,b0,0),!1),!1,b0,0)
else if(t===6){a9.aBE(new A.a3i().eZ(x.D.a(b1.EK(0,0,w))),b2,r,p,a9.ax,a9.ay)
return}else throw C.c(A.aZ("Unsupported Compression Type: "+t))
for(g=p,f=0;f<a9.ay;++f,++g)for(e=r,d=0;d<a9.ax;++d,++e){t=a9.r
if(t===1){t=a9.w
if(t===B.jn){t=a9.f
if(t===32){t=v.M()
$.e5()[0]=t
a0=$.vQ()[0]}else if(t===64)a0=v.Lx()
else if(t===16){t=v.X()
q=$.e8
a0=(q!=null?q:A.eO())[t]}else a0=0
if(e<a9.b&&g<a9.c){t=b2.a
if(t!=null)t.jR(e,g,a0)}}else{q=a9.f
if(q===8)if(t===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a0=$.kp()[0]}else{t=v
a0=J.o(t.a,t.d++)}else if(q===16)if(t===B.ah){t=v.X()
$.jA()[0]=t
a0=$.ko()[0]}else a0=v.X()
else if(q===32)if(t===B.ah){t=v.M()
$.e5()[0]=t
a0=$.hu()[0]}else a0=v.M()
else a0=0
if(a9.d===B.r0){t=b2.a
a1=t==null?b0:t.gbh()
a0=(a1==null?0:a1)-a0}if(e<a9.b&&g<a9.c){t=b2.a
if(t!=null)t.jR(e,g,a0)}}}else if(t===2){t=a9.f
if(t===8){if(a9.w===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a2=$.kp()[0]}else{t=v
a2=J.o(t.a,t.d++)}if(a9.w===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a3=$.kp()[0]}else{t=v
a3=J.o(t.a,t.d++)}}else if(t===16){if(a9.w===B.ah){t=v.X()
$.jA()[0]=t
a2=$.ko()[0]}else a2=v.X()
if(a9.w===B.ah){t=v.X()
$.jA()[0]=t
a3=$.ko()[0]}else a3=v.X()}else if(t===32){if(a9.w===B.ah){t=v.M()
$.e5()[0]=t
a2=$.hu()[0]}else a2=v.M()
if(a9.w===B.ah){t=v.M()
$.e5()[0]=t
a3=$.hu()[0]}else a3=v.M()}else{a2=0
a3=0}if(e<a9.b&&g<a9.c){t=b2.a
if(t!=null)t.d6(e,g,a2,a3,0)}}else if(t===3){t=a9.w
if(t===B.jn){t=a9.f
if(t===32){t=v.M()
q=$.e5()
q[0]=t
t=$.vQ()
a4=t[0]
q[0]=v.M()
a5=t[0]
q[0]=v.M()
a6=t[0]}else{a5=0
a6=0
if(t===64)a4=v.Lx()
else if(t===16){t=v.X()
q=$.e8
a4=(q!=null?q:A.eO())[t]
t=v.X()
q=$.e8
a5=(q!=null?q:A.eO())[t]
t=v.X()
q=$.e8
a6=(q!=null?q:A.eO())[t]}else a4=0}if(e<a9.b&&g<a9.c){t=b2.a
if(t!=null)t.d6(e,g,a4,a5,a6)}}else{q=a9.f
if(q===8){if(t===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a4=$.kp()[0]}else{t=v
a4=J.o(t.a,t.d++)}if(a9.w===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a5=$.kp()[0]}else{t=v
a5=J.o(t.a,t.d++)}if(a9.w===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a6=$.kp()[0]}else{t=v
a6=J.o(t.a,t.d++)}}else if(q===16){if(t===B.ah){t=v.X()
$.jA()[0]=t
a4=$.ko()[0]}else a4=v.X()
if(a9.w===B.ah){t=v.X()
$.jA()[0]=t
a5=$.ko()[0]}else a5=v.X()
if(a9.w===B.ah){t=v.X()
$.jA()[0]=t
a6=$.ko()[0]}else a6=v.X()}else if(q===32){if(t===B.ah){t=v.M()
$.e5()[0]=t
a4=$.hu()[0]}else a4=v.M()
if(a9.w===B.ah){t=v.M()
$.e5()[0]=t
a5=$.hu()[0]}else a5=v.M()
if(a9.w===B.ah){t=v.M()
$.e5()[0]=t
a6=$.hu()[0]}else a6=v.M()}else{a4=0
a5=0
a6=0}if(e<a9.b&&g<a9.c){t=b2.a
if(t!=null)t.d6(e,g,a4,a5,a6)}}}else if(t>=4){t=a9.w
if(t===B.jn){t=a9.f
if(t===32){t=v.M()
q=$.e5()
q[0]=t
t=$.vQ()
a4=t[0]
q[0]=v.M()
a5=t[0]
q[0]=v.M()
a6=t[0]
q[0]=v.M()
a7=t[0]}else{a5=0
a6=0
a7=0
if(t===64)a4=v.Lx()
else if(t===16){t=v.X()
q=$.e8
a4=(q!=null?q:A.eO())[t]
t=v.X()
q=$.e8
a5=(q!=null?q:A.eO())[t]
t=v.X()
q=$.e8
a6=(q!=null?q:A.eO())[t]
t=v.X()
q=$.e8
a7=(q!=null?q:A.eO())[t]}else a4=0}if(e<a9.b&&g<a9.c){t=b2.a
if(t!=null)t.hF(e,g,a4,a5,a6,a7)}}else{q=a9.f
if(q===8){if(t===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a4=$.kp()[0]}else{t=v
a4=J.o(t.a,t.d++)}if(a9.w===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a5=$.kp()[0]}else{t=v
a5=J.o(t.a,t.d++)}if(a9.w===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a6=$.kp()[0]}else{t=v
a6=J.o(t.a,t.d++)}if(a9.w===B.ah){t=v
t=J.o(t.a,t.d++)
$.jB()[0]=t
a7=$.kp()[0]}else{t=v
a7=J.o(t.a,t.d++)}}else if(q===16){if(t===B.ah){t=v.X()
$.jA()[0]=t
a4=$.ko()[0]}else a4=v.X()
if(a9.w===B.ah){t=v.X()
$.jA()[0]=t
a5=$.ko()[0]}else a5=v.X()
if(a9.w===B.ah){t=v.X()
$.jA()[0]=t
a6=$.ko()[0]}else a6=v.X()
if(a9.w===B.ah){t=v.X()
$.jA()[0]=t
a7=$.ko()[0]}else a7=v.X()}else if(q===32){if(t===B.ah){t=v.M()
$.e5()[0]=t
a4=$.hu()[0]}else a4=v.M()
if(a9.w===B.ah){t=v.M()
$.e5()[0]=t
a5=$.hu()[0]}else a5=v.M()
if(a9.w===B.ah){t=v.M()
$.e5()[0]=t
a6=$.hu()[0]}else a6=v.M()
if(a9.w===B.ah){t=v.M()
$.e5()[0]=t
a7=$.hu()[0]}else a7=v.M()}else{a4=0
a5=0
a6=0
a7=0}if(a9.d===B.Oq){a8=A.brr(a4,a5,a6,a7)
a4=a8[0]
a5=a8[1]
a6=a8[2]
t=b2.a
a7=t==null?b0:t.gbh()
if(a7==null)a7=0}if(e<a9.b&&g<a9.c){t=b2.a
if(t!=null)t.hF(e,g,a4,a5,a6,a7)}}}}}else throw C.c(A.aZ("Unsupported bitsPerSample: "+t))},
aBE(d,e,f,g,h,i){var w,v,u,t
for(w=0;w<i;++w)for(v=w+g,u=0;u<h;++u){t=d.a
t=t==null?null:t.f8(u,w,null)
if(t==null)t=new A.fY()
e.MG(u+f,v,t)}},
au_(a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.cx
a3===$&&C.b()
v=a7*a3+a6
a4.d=a1.ch[v]
a3=a1.ax
u=a6*a3
t=a1.ay
s=a7*t
r=a1.CW[v]
w=null
q=a1.e
if(q===32773){p=D.c.b4(a3,8)===0?D.c.bg(a3,8)*t:(D.c.bg(a3,8)+1)*t
w=A.by(new Uint8Array(a3*t),!1,a2,0)
a1.a0m(a4,p,w.a)}else if(q===5){w=A.by(new Uint8Array(a3*t),!1,a2,0)
A.blw().Ju(A.b7(a4,r,0),w.a)
if(a1.z===2)for(o=0;o<a1.c;++o){n=a1.r
m=n*(o*a1.b+1)
for(;n<a1.b*a1.r;++n){a3=w
t=J.o(a3.a,a3.d+m)
q=w
l=a1.r
l=J.o(q.a,q.d+(m-l))
J.bL(a3.a,a3.d+m,t+l);++m}}}else if(q===2){w=A.by(new Uint8Array(a3*t),!1,a2,0)
try{A.beL(a1.dx,a1.ax,a1.ay).aQj(w,a4,0,a1.ay)}catch(k){}}else if(q===3){w=A.by(new Uint8Array(a3*t),!1,a2,0)
try{A.beL(a1.dx,a1.ax,a1.ay).aQk(w,a4,0,a1.ay,a1.dy)}catch(k){}}else if(q===4){w=A.by(new Uint8Array(a3*t),!1,a2,0)
try{A.beL(a1.dx,a1.ax,a1.ay).aQp(w,a4,0,a1.ay,a1.fr)}catch(k){}}else if(q===8)w=A.by(B.es.uO(A.xq(a4.EK(0,0,r),1,a2,0),!1),!1,a2,0)
else if(q===32946)w=A.by(B.es.uO(A.xq(a4.EK(0,0,r),1,a2,0),!1),!1,a2,0)
else if(q===1)w=a4
else throw C.c(A.aZ("Unsupported Compression Type: "+q))
j=new A.aRO(w)
i=a5.gbh()
a3=a1.y
h=a3?i:0
g=a3?0:i
for(f=s,e=0;e<a1.ay;++e,++f){for(d=u,a0=0;a0<a1.ax;++a0,++d){a3=a5.a
t=a3==null
q=t?a2:a3.b
if(f<(q==null?0:q)){a3=t?a2:a3.a
a3=d>=(a3==null?0:a3)}else a3=!0
if(a3)break
a3=j.fz(1)
t=a5.a
if(a3===0){if(t!=null)t.d6(d,f,h,0,0)}else if(t!=null)t.d6(d,f,g,0,0)}j.c=0}},
a0m(d,e,f){var w,v,u,t,s,r,q,p,o
for(w=J.cV(f),v=0,u=0;u<e;){t=v+1
s=J.o(d.a,d.d+v)
$.jB()[0]=s
r=$.kp()[0]
if(r>=0&&r<=127)for(s=r+1,v=t,q=0;q<s;++q,u=p,v=t){p=u+1
t=v+1
w.m(f,u,J.o(d.a,d.d+v))}else{s=r<=-1&&r>=-127
v=t+1
if(s){s=J.o(d.a,d.d+t)
for(o=-r+1,q=0;q<o;++q,u=p){p=u+1
w.m(f,u,s)}}}}},
HD(d,e){var w=this.a
if(!w.a5(d))return e
w=w.i(0,d).hY()
w=w==null?null:w.C(0)
return w==null?0:w},
x8(d){return this.HD(d,0)},
HE(d){var w,v=this.a
if(!v.a5(d))return null
w=v.i(0,d)
v=w.hY()
v.toString
return C.a3K(w.c,v.gqu(v),!0,x.p)}}
A.zJ.prototype={
J(){return"TiffFormat."+this.b}}
A.h1.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.m3.prototype={
J(){return"TiffImageType."+this.b}}
A.aRR.prototype={}
A.aE_.prototype={
Ju(d,e){var w,v,u,t,s,r,q=this
q.r=e
w=J.bY(e)
q.w=0
v=x.D.a(d.a)
q.e=v
q.f=v.length
q.b=d.d
if(v[0]===0&&v[1]===1)throw C.c(A.aZ("Invalid LZW Data"))
q.a3c()
q.d=q.c=0
u=q.OY()
v=q.x
t=0
while(!0){if(!(u!==257&&q.w<w))break
if(u===256){q.a3c()
u=q.OY()
q.as=0
if(u===257)break
J.bL(q.r,q.w++,u)
t=u}else{s=q.Q
s.toString
if(u<s){q.a1Y(u)
s=q.as
s===$&&C.b()
r=s-1
for(;r>=0;--r)J.bL(q.r,q.w++,v[r])
q.Zu(t,v[q.as-1])}else{q.a1Y(t)
s=q.as
s===$&&C.b()
r=s-1
for(;r>=0;--r)J.bL(q.r,q.w++,v[r])
J.bL(q.r,q.w++,v[q.as-1])
q.Zu(t,v[q.as-1])}t=u}u=q.OY()}},
Zu(d,e){var w,v=this,u=v.y
u===$&&C.b()
w=v.Q
w.toString
u[w]=e
u=v.z
u===$&&C.b()
u[w]=d
w=v.Q=w+1
if(w===511)v.a=10
else if(w===1023)v.a=11
else if(w===2047)v.a=12},
a1Y(d){var w,v,u,t,s,r,q=this
q.as=0
w=q.x
q.as=1
v=q.y
v===$&&C.b()
w[0]=v[d]
u=q.z
u===$&&C.b()
t=u[d]
for(s=1;t!==4098;s=r){r=s+1
q.as=r
w[s]=v[t]
t=u[t]}},
OY(){var w,v,u,t,s=this,r=s.b,q=s.f
q===$&&C.b()
if(r>=q)return 257
for(;w=s.d,v=s.a,w<v;r=t){if(r>=q)return 257
v=s.c
u=s.e
u===$&&C.b()
t=r+1
s.b=t
s.c=(v<<8>>>0)+u[r]>>>0
s.d=w+8}r=w-v
s.d=r
return D.c.dG(s.c,r)&B.a5x[v-9]},
a3c(){var w,v,u=this
u.y=new Uint8Array(4096)
w=new Uint32Array(4096)
u.z=w
D.bA.jy(w,0,4096,4098)
for(w=u.y,v=0;v<256;++v)w[v]=v
u.a=9
u.Q=258}}
A.aRP.prototype={
hb(d){var w,v,u=this.a
if(u==null)return null
u=u.f[d]
w=this.c
w===$&&C.b()
v=u.eZ(w)
return v},
l0(d,e){var w=this,v=A.by(d,!1,null,0)
w.c=v
v=w.a55(v)
w.a=v
if(v==null)return null
return w.hb(0)},
a55(d){var w,v,u,t,s,r,q,p,o,n=null,m=C.a([],x.aU),l=new A.aRR(m),k=d.X()
if(k!==18761&&k!==19789)return n
if(k===19789)d.e=!0
else d.e=!1
u=d.X()
l.d=u
if(u!==42)return n
t=d.M()
s=A.b7(d,n,0)
s.d=t
w=s
for(u=x.p,r=x.cV;t!==0;){v=null
try{q=new A.ab4(C.x(u,r),B.r1,B.Oo,B.aET)
q.aqk(w)
v=q
p=v
if(!(p.b!==0&&p.c!==0))break}catch(o){break}m.push(v)
if(m.length===1){p=m[0]
l.a=p.b
l.b=p.c}t=w.M()
if(t!==0)w.d=t}return m.length!==0?l:n}}
A.aSI.prototype={
Cy(){var w,v=this.a,u=v.mU()
if((u&1)!==0)return!1
if((u>>>1&7)>3)return!1
if((u>>>4&1)===0)return!1
this.f.d=u>>>5
if(v.mU()!==2752925)return!1
w=this.b
w.a=v.X()
w.b=v.X()
return!0},
pX(){var w,v,u,t=this,s=null
if(!t.awS())return s
w=t.b
v=w.a
t.d=A.ek(s,s,B.C,0,B.aq,w.b,s,0,4,s,B.C,v,!1)
t.aBd()
if(!t.aF8())return s
w=w.w
if(w.length!==0){u=A.by(new C.cq(w),!1,s,0)
w=t.d
w.toString
w.e=A.bk2(u)}return t.d},
awS(){var w,v,u,t,s=this
if(!s.Cy())return!1
s.fr=A.bHq()
for(w=s.dy,v=0;v<4;++v){u=new Int32Array(2)
t=new Int32Array(2)
w[v]=new A.abB(u,t,new Int32Array(2))}s.y=s.Q=0
w=s.b
u=w.a
s.z=u
w=w.b
s.as=w
s.at=u+15>>>4
s.ax=w+15>>>4
s.k1=0
w=s.a
u=s.f
t=u.d
t===$&&C.b()
t=A.bop(w.fR(t))
s.c=t
w.d+=u.d
t.c0(1)
s.c.c0(1)
s.aFf(s.x,s.fr)
s.aF7()
if(!s.aFb(w))return!1
s.aFd()
s.c.c0(1)
s.aFc()
return!0},
aFf(d,e){var w,v,u,t=this,s=t.c
s===$&&C.b()
s=s.c0(1)!==0
d.a=s
if(s){d.b=t.c.c0(1)!==0
if(t.c.c0(1)!==0){d.c=t.c.c0(1)!==0
for(s=d.d,w=0;w<4;++w){if(t.c.c0(1)!==0){v=t.c
u=v.c0(7)
v=v.c0(1)===1?-u:u}else v=0
s[w]=v}for(s=d.e,w=0;w<4;++w){if(t.c.c0(1)!==0){v=t.c
u=v.c0(6)
v=v.c0(1)===1?-u:u}else v=0
s[w]=v}}if(d.b)for(w=0;w<3;++w){s=e.a
s[w]=t.c.c0(1)!==0?t.c.c0(8):255}}else d.b=!1
return!0},
aF7(){var w,v,u,t=this,s=t.w,r=t.c
r===$&&C.b()
s.a=r.c0(1)!==0
s.b=t.c.c0(6)
s.c=t.c.c0(3)
r=t.c.c0(1)!==0
s.d=r
if(r)if(t.c.c0(1)!==0){for(r=s.e,w=0;w<4;++w)if(t.c.c0(1)!==0){v=t.c
u=v.c0(6)
r[w]=v.c0(1)===1?-u:u}for(r=s.f,w=0;w<4;++w)if(t.c.c0(1)!==0){v=t.c
u=v.c0(6)
r[w]=v.c0(1)===1?-u:u}}if(s.b===0)r=0
else r=s.a?1:2
t.bI=r
return!0},
aFb(d){var w,v,u,t,s,r,q,p=d.c-d.d,o=this.c
o===$&&C.b()
o=D.c.cN(1,o.c0(2))
this.cy=o
w=o-1
v=w*3
if(p<v)return!1
for(o=this.db,u=0,t=0;t<w;++t,v=r){s=d.FP(3,u)
r=v+((J.o(s.a,s.d)|J.o(s.a,s.d+1)<<8|J.o(s.a,s.d+2)<<16)>>>0)
if(r>p)r=p
q=new A.Qr(d.tM(r-v,v))
q.b=254
q.c=0
q.d=-8
o[t]=q
u+=3}o[w]=A.bop(d.tM(p-v,d.d-d.b+v))
return v<p},
aFd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c
g===$&&C.b()
w=g.c0(7)
v=h.c.c0(1)!==0?h.c.zE(4):0
u=h.c.c0(1)!==0?h.c.zE(4):0
t=h.c.c0(1)!==0?h.c.zE(4):0
s=h.c.c0(1)!==0?h.c.zE(4):0
r=h.c.c0(1)!==0?h.c.zE(4):0
q=h.x
for(g=h.dy,p=q.a,o=!q.c,n=q.d,m=0;m<4;++m){if(p){l=n[m]
if(o)l+=w}else{if(m>0){g[m]=g[0]
continue}l=w}k=g[m]
j=k.a
i=l+v
if(i<0)i=0
else if(i>127)i=127
j[0]=B.p6[i]
if(l<0)i=0
else i=l>127?127:l
j[1]=B.oL[i]
i=k.b
j=l+u
if(j<0)j=0
else if(j>127)j=127
i[0]=B.p6[j]*2
j=l+t
if(j<0)j=0
else if(j>127)j=127
i[1]=B.oL[j]*101581>>>16
if(i[1]<8)i[1]=8
j=k.c
i=l+s
if(i<0)i=0
else if(i>117)i=117
j[0]=B.p6[i]
i=l+r
if(i<0)i=0
else if(i>127)i=127
j[1]=B.oL[i]}},
aFc(){var w,v,u,t,s,r,q=this,p=q.fr
for(w=0;w<4;++w)for(v=0;v<8;++v)for(u=0;u<3;++u)for(t=0;t<11;++t){s=q.c
s===$&&C.b()
r=s.eV(B.a8s[w][v][u][t])!==0?q.c.c0(8):B.ai2[w][v][u][t]
p.b[w][v].a[u][t]=r}s=q.c
s===$&&C.b()
s=s.c0(1)!==0
q.fx=s
if(s)q.fy=q.c.c0(8)},
aG2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.bI
j.toString
if(j>0){w=k.w
for(j=w.e,v=w.f,u=k.x,t=u.e,s=0;s<4;++s){if(u.a){r=t[s]
if(!u.c){q=w.b
q.toString
r+=q}}else r=w.b
for(p=0;p<=1;++p){q=k.aA
q===$&&C.b()
o=q[s][p]
q=w.d
q===$&&C.b()
if(q){r.toString
n=r+j[0]
if(p!==0)n+=v[0]}else n=r
n.toString
if(n<0)n=0
else if(n>63)n=63
if(n>0){q=w.c
q===$&&C.b()
if(q>0){m=q>4?D.c.H(n,2):D.c.H(n,1)
l=9-q
if(m>l)m=l}else m=n
if(m<1)m=1
o.b=m
o.a=2*n+m
if(n>=40)q=2
else q=n>=15?1:0
o.d=q}else o.a=0
o.c=p!==0}}}},
aBd(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j.at
if(i!=null)l.bO=i
w=J.hf(4,x.K)
for(i=x.ao,v=0;v<4;++v)w[v]=C.a([new A.zS(),new A.zS()],i)
l.aA=w
i=l.at
i.toString
w=J.hf(i,x.dE)
for(u=0;u<i;++u){t=new Uint8Array(16)
s=new Uint8Array(8)
w[u]=new A.abC(t,s,new Uint8Array(8))}l.k2=w
l.ok=new Uint8Array(832)
i=l.at
i.toString
l.go=new Uint8Array(4*i)
t=l.p4=16*i
i=8*i
l.R8=i
s=l.bI
s.toString
r=B.oB[s]
q=r*t
p=(r/2|0)*i
l.p1=A.by(new Uint8Array(16*t+q),!1,k,q)
i=l.R8
i.toString
l.p2=A.by(new Uint8Array(8*i+p),!1,k,p)
i=l.R8
i.toString
l.p3=A.by(new Uint8Array(8*i+p),!1,k,p)
i=j.a
l.RG=A.by(new Uint8Array(i),!1,k,0)
o=j.a+1>>>1
l.rx=A.by(new Uint8Array(o),!1,k,0)
l.ry=A.by(new Uint8Array(o),!1,k,0)
j=l.bI
j.toString
n=B.oB[j]
if(j===2)l.ch=l.ay=0
else{j=l.y
j===$&&C.b()
j=D.c.bg(j-n,16)
l.ay=j
i=l.Q
i.toString
i=D.c.bg(i-n,16)
l.ch=i
if(j<0)l.ay=0
if(i<0)l.ch=0}j=l.as
j.toString
j=D.c.bg(j+15+n,16)
l.cx=j
i=l.z
i===$&&C.b()
i=D.c.bg(i+15+n,16)
l.CW=i
t=l.at
t.toString
if(i>t)l.CW=t
i=l.ax
i.toString
if(j>i)l.cx=i
m=t+1
w=J.hf(m,x.ai)
for(u=0;u<m;++u)w[u]=new A.abz()
l.k3=w
j=l.at
j.toString
w=J.hf(j,x.cP)
for(u=0;u<j;++u){i=new Int16Array(384)
w[u]=new A.abA(i,new Uint8Array(16))}l.by=w
j=l.at
j.toString
l.k4=C.aT(j,k,!1,x.B)
l.aG2()
A.bGS()
l.e=new A.aSJ()
return!0},
aF8(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.y2=0
w=i.id
v=i.x
u=i.db
t=0
while(!0){s=i.cx
s.toString
if(!(t<s))break
s=i.cy
s===$&&C.b()
r=u[(t&s-1)>>>0]
while(!0){t=i.y1
s=i.at
s.toString
if(!(t<s))break
s=i.k3
s===$&&C.b()
q=s[0]
p=s[1+t]
s=i.by
s===$&&C.b()
o=s[t]
if(v.b){t=i.c
t===$&&C.b()
t=t.eV(i.fr.a[0])
s=i.c
n=i.fr
i.k1=t===0?s.eV(n.a[1]):2+s.eV(n.a[2])}t=i.fx
t===$&&C.b()
if(t){t=i.c
t===$&&C.b()
s=i.fy
s===$&&C.b()
m=t.eV(s)!==0}else m=!1
i.aF9()
if(!m)m=i.aFe(p,r)
else{q.a=p.a=0
t=o.b
t===$&&C.b()
if(!t)q.b=p.b=0
o.f=o.e=0}t=i.bI
t.toString
if(t>0){t=i.k4
t===$&&C.b()
s=i.y1
n=i.aA
n===$&&C.b()
l=i.k1
l===$&&C.b()
l=n[l]
n=o.b
n===$&&C.b()
k=l[n?1:0]
t[s]=k
k.c=k.c||!m}++i.y1}t=i.k3
t===$&&C.b()
t=t[0]
t.b=t.a=0
D.w.jy(w,0,4,0)
i.y1=0
i.aGP()
t=i.bI
t.toString
j=!1
if(t>0){t=i.y2
s=i.ch
s===$&&C.b()
if(t>=s){s=i.cx
s.toString
s=t<=s
j=s}}if(!i.awb(j))return!1
t=++i.y2}return!0},
aGP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&C.b()
w=A.by(a5,!1,a3,40)
v=A.by(a2.ok,!1,a3,584)
u=A.by(a2.ok,!1,a3,600)
a5=a4>0
t=0
while(!0){s=a2.at
s.toString
if(!(t<s))break
s=a2.by
s===$&&C.b()
r=s[t]
if(t>0){for(q=-1;q<16;++q){s=q*32
w.mO(s-4,4,w,s+12)}for(q=-1;q<8;++q){s=q*32
p=s-4
s+=4
v.mO(p,4,v,s)
u.mO(p,4,u,s)}}else{for(q=0;q<16;++q)J.bL(w.a,w.d+(q*32-1),129)
for(q=0;q<8;++q){s=q*32-1
J.bL(v.a,v.d+s,129)
J.bL(u.a,u.d+s,129)}if(a5){J.bL(u.a,u.d+-33,129)
J.bL(v.a,v.d+-33,129)
J.bL(w.a,w.d+-33,129)}}s=a2.k2
s===$&&C.b()
o=s[t]
n=r.a
m=r.e
if(a5){w.tb(-32,16,o.a)
v.tb(-32,8,o.b)
u.tb(-32,8,o.c)}else if(t===0){s=w.a
p=w.d+-33
J.nN(s,p,p+21,127)
p=v.a
s=v.d+-33
J.nN(p,s,s+9,127)
s=u.a
p=u.d+-33
J.nN(s,p,p+9,127)}s=r.b
s===$&&C.b()
if(s){l=A.b7(w,a3,-16)
k=l.EM()
if(a5){s=a2.at
s.toString
if(t>=s-1){s=o.a[15]
p=l.a
j=l.d
J.nN(p,j,j+4,s)}else l.tb(0,4,a2.k2[t+1].a)}i=k[0]
k[96]=i
k[64]=i
k[32]=i
for(s=r.c,h=0;h<16;++h,m=m<<2>>>0){g=A.b7(w,a3,B.BF[h])
B.ai1[s[h]].$1(g)
m.toString
p=h*16
a2.a0K(m,new A.i2(n,p,384,p,!1),g)}}else{s=A.bos(t,a4,r.c[0])
s.toString
B.a6X[s].$1(w)
if(m!==0)for(h=0;h<16;++h,m=m<<2>>>0){g=A.b7(w,a3,B.BF[h])
m.toString
s=h*16
a2.a0K(m,new A.i2(n,s,384,s,!1),g)}}s=r.f
s===$&&C.b()
p=A.bos(t,a4,r.d)
p.toString
B.AN[p].$1(v)
B.AN[p].$1(u)
f=new A.i2(n,256,384,256,!1)
if((s&255)!==0){p=a2.e
if((s&170)!==0){p===$&&C.b()
p.pe(f,v)
p.pe(A.b7(f,a3,16),A.b7(v,a3,4))
j=A.b7(f,a3,32)
e=A.b7(v,a3,128)
p.pe(j,e)
p.pe(A.b7(j,a3,16),A.b7(e,a3,4))}else{p===$&&C.b()
p.afV(f,v)}}d=new A.i2(n,320,384,320,!1)
s=s>>>8
if((s&255)!==0){p=a2.e
if((s&170)!==0){p===$&&C.b()
p.pe(d,u)
p.pe(A.b7(d,a3,16),A.b7(u,a3,4))
s=A.b7(d,a3,32)
j=A.b7(u,a3,128)
p.pe(s,j)
p.pe(A.b7(s,a3,16),A.b7(j,a3,4))}else{p===$&&C.b()
p.afV(d,u)}}s=a2.ax
s.toString
if(a4<s-1){D.w.ct(o.a,0,16,w.eJ(),480)
D.w.ct(o.b,0,8,v.eJ(),224)
D.w.ct(o.c,0,8,u.eJ(),224)}a0=t*16
a1=t*8
for(q=0;q<16;++q){s=a2.p4
s.toString
p=a2.p1
p===$&&C.b()
p.mO(a0+q*s,16,w,q*32)}for(q=0;q<8;++q){s=a2.R8
s.toString
p=a2.p2
p===$&&C.b()
j=q*32
p.mO(a1+q*s,8,v,j)
s=a2.R8
s.toString
p=a2.p3
p===$&&C.b()
p.mO(a1+q*s,8,u,j)}++t}},
a0K(d,e,f){var w,v,u,t,s,r
switch(d>>>30){case 3:w=this.e
w===$&&C.b()
w.b_N(e,f,!1)
break
case 2:this.e===$&&C.b()
v=J.o(e.a,e.d)+4
u=D.c.hZ(D.c.H(J.o(e.a,e.d+4)*35468,16),32)
t=D.c.hZ(D.c.H(J.o(e.a,e.d+4)*85627,16),32)
s=D.c.hZ(D.c.H(J.o(e.a,e.d+1)*35468,16),32)
r=D.c.hZ(D.c.H(J.o(e.a,e.d+1)*85627,16),32)
A.aSL(f,0,v+t,r,s)
A.aSL(f,1,v+u,r,s)
A.aSL(f,2,v-u,r,s)
A.aSL(f,3,v-t,r,s)
break
case 1:w=this.e
w===$&&C.b()
w.EP(e,f)
break
default:break}},
av1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.p4,i=l.k4
i===$&&C.b()
i=i[d]
i.toString
w=l.p1
w===$&&C.b()
v=A.b7(w,k,d*16)
u=i.b
t=i.a
if(t===0)return
if(l.bI===1){if(d>0){w=l.e
w===$&&C.b()
j.toString
w.XT(v,j,t+4)}if(i.c){w=l.e
w===$&&C.b()
j.toString
w.ajW(v,j,t)}if(e>0){w=l.e
w===$&&C.b()
j.toString
w.XU(v,j,t+4)}if(i.c){i=l.e
i===$&&C.b()
j.toString
i.ajZ(v,j,t)}}else{s=l.R8
w=l.p2
w===$&&C.b()
r=d*8
q=A.b7(w,k,r)
w=l.p3
w===$&&C.b()
p=A.b7(w,k,r)
o=i.d
if(d>0){w=l.e
w===$&&C.b()
j.toString
r=t+4
w.wL(v,1,j,16,r,u,o)
s.toString
w.wL(q,1,s,8,r,u,o)
w.wL(p,1,s,8,r,u,o)}if(i.c){w=l.e
w===$&&C.b()
j.toString
w.aSP(v,j,t,u,o)
s.toString
n=A.b7(q,k,4)
m=A.b7(p,k,4)
w.wK(n,1,s,8,t,u,o)
w.wK(m,1,s,8,t,u,o)}if(e>0){w=l.e
w===$&&C.b()
j.toString
r=t+4
w.wL(v,j,1,16,r,u,o)
s.toString
w.wL(q,s,1,8,r,u,o)
w.wL(p,s,1,8,r,u,o)}if(i.c){i=l.e
i===$&&C.b()
j.toString
i.b08(v,j,t,u,o)
s.toString
w=4*s
n=A.b7(q,k,w)
m=A.b7(p,k,w)
i.wK(n,s,1,8,t,u,o)
i.wK(m,s,1,8,t,u,o)}}},
aw_(){var w,v=this,u=v.ay
u===$&&C.b()
w=u
while(!0){u=v.CW
u.toString
if(!(w<u))break
v.av1(w,v.y2);++w}},
awb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.bI
d.toString
w=B.oB[d]
d=f.p4
d.toString
v=w*d
d=f.R8
d.toString
u=(w/2|0)*d
d=f.p1
d===$&&C.b()
t=-v
s=A.b7(d,e,t)
d=f.p2
d===$&&C.b()
r=-u
q=A.b7(d,e,r)
d=f.p3
d===$&&C.b()
p=A.b7(d,e,r)
o=f.y2
d=f.cx
d.toString
n=o*16
m=(o+1)*16
if(a0)f.aw_()
if(o!==0){n-=w
f.to=A.b7(s,e,0)
f.x1=A.b7(q,e,0)
f.x2=A.b7(p,e,0)}else{f.to=A.b7(f.p1,e,0)
f.x1=A.b7(f.p2,e,0)
f.x2=A.b7(f.p3,e,0)}d=o<d-1
if(d)m-=w
l=f.as
l.toString
if(m>l)m=l
f.xr=null
if(f.bO!=null&&n<m){l=f.xr=f.aui(n,m-n)
if(l==null)return!1}else l=e
k=f.Q
k.toString
if(n<k){j=k-n
i=f.to
i===$&&C.b()
h=i.d
g=f.p4
g.toString
i.d=h+g*j
g=f.x1
g===$&&C.b()
h=g.d
i=f.R8
i.toString
i*=D.c.H(j,1)
g.d=h+i
h=f.x2
h===$&&C.b()
h.d+=i
if(l!=null)l.d=l.d+f.b.a*j
n=k}if(n<m){i=f.to
i===$&&C.b()
h=i.d
g=f.y
g===$&&C.b()
i.d=h+g
h=f.x1
h===$&&C.b()
i=g>>>1
h.d=h.d+i
h=f.x2
h===$&&C.b()
h.d+=i
if(l!=null)l.d+=g
l=f.z
l===$&&C.b()
f.aGf(n-k,l-g,m-n)}if(d){d=f.p1
l=f.p4
l.toString
d.mO(t,v,s,16*l)
l=f.p2
t=f.R8
t.toString
l.mO(r,u,q,8*t)
t=f.p3
l=f.R8
l.toString
t.mO(r,u,p,8*l)}return!0},
aGf(d,e,f){if(e<=0||f<=0)return!1
this.avv(d,e,f)
this.avu(d,e,f)
return!0},
O7(d){var w
if((d&-4194304)>>>0===0)w=D.c.H(d,14)
else w=d<0?0:255
return w},
ID(d,e,f,g){var w=19077*d
g.m(0,0,this.O7(w+26149*f+-3644112))
g.m(0,1,this.O7(w-6419*e-13320*f+2229552))
g.m(0,2,this.O7(w+33050*e+-4527440))},
Io(a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=new A.aSV(),a1=b4-1,a2=D.c.H(a1,1),a3=a0.$2(J.o(a8.a,a8.d),J.o(a9.a,a9.d)),a4=a0.$2(J.o(b0.a,b0.d),J.o(b1.a,b1.d)),a5=D.c.H(3*a3+a4+131074,2)
e.ID(J.o(a6.a,a6.d),a5&255,a5>>>16,b2)
b2.m(0,3,255)
w=a7!=null
if(w){a5=D.c.H(3*a4+a3+131074,2)
v=J.o(a7.a,a7.d)
b3.toString
e.ID(v,a5&255,a5>>>16,b3)
b3.m(0,3,255)}for(u=1;u<=a2;++u,a4=s,a3=t){t=a0.$2(J.o(a8.a,a8.d+u),J.o(a9.a,a9.d+u))
s=a0.$2(J.o(b0.a,b0.d+u),J.o(b1.a,b1.d+u))
r=a3+t+a4+s+524296
q=D.c.H(r+2*(t+a4),3)
p=D.c.H(r+2*(a3+s),3)
a5=D.c.H(q+a3,1)
o=D.c.H(p+t,1)
v=2*u
n=v-1
m=J.o(a6.a,a6.d+n)
l=a5&255
k=a5>>>16
j=n*4
i=A.b7(b2,d,j)
m=19077*m
h=m+26149*k+-3644112
if((h&-4194304)>>>0===0)g=D.c.H(h,14)
else g=h<0?0:255
J.bL(i.a,i.d,g)
k=m-6419*l-13320*k+2229552
if((k&-4194304)>>>0===0)g=D.c.H(k,14)
else g=k<0?0:255
J.bL(i.a,i.d+1,g)
m=m+33050*l+-4527440
if((m&-4194304)>>>0===0)g=D.c.H(m,14)
else g=m<0?0:255
J.bL(i.a,i.d+2,g)
J.bL(i.a,i.d+3,255)
m=J.o(a6.a,a6.d+v)
l=o&255
k=o>>>16
i=v*4
h=A.b7(b2,d,i)
m=19077*m
f=m+26149*k+-3644112
if((f&-4194304)>>>0===0)g=D.c.H(f,14)
else g=f<0?0:255
J.bL(h.a,h.d,g)
k=m-6419*l-13320*k+2229552
if((k&-4194304)>>>0===0)g=D.c.H(k,14)
else g=k<0?0:255
J.bL(h.a,h.d+1,g)
m=m+33050*l+-4527440
if((m&-4194304)>>>0===0)g=D.c.H(m,14)
else g=m<0?0:255
J.bL(h.a,h.d+2,g)
J.bL(h.a,h.d+3,255)
if(w){a5=D.c.H(p+a4,1)
o=D.c.H(q+s,1)
n=J.o(a7.a,a7.d+n)
m=a5&255
l=a5>>>16
b3.toString
j=A.b7(b3,d,j)
n=19077*n
k=n+26149*l+-3644112
if((k&-4194304)>>>0===0)g=D.c.H(k,14)
else g=k<0?0:255
J.bL(j.a,j.d,g)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)g=D.c.H(l,14)
else g=l<0?0:255
J.bL(j.a,j.d+1,g)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)g=D.c.H(n,14)
else g=n<0?0:255
J.bL(j.a,j.d+2,g)
J.bL(j.a,j.d+3,255)
v=J.o(a7.a,a7.d+v)
n=o&255
m=o>>>16
i=A.b7(b3,d,i)
v=19077*v
l=v+26149*m+-3644112
if((l&-4194304)>>>0===0)g=D.c.H(l,14)
else g=l<0?0:255
J.bL(i.a,i.d,g)
m=v-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)g=D.c.H(m,14)
else g=m<0?0:255
J.bL(i.a,i.d+1,g)
v=v+33050*n+-4527440
if((v&-4194304)>>>0===0)g=D.c.H(v,14)
else g=v<0?0:255
J.bL(i.a,i.d+2,g)
J.bL(i.a,i.d+3,255)}}if((b4&1)===0){a5=D.c.H(3*a3+a4+131074,2)
v=J.o(a6.a,a6.d+a1)
n=a1*4
m=A.b7(b2,d,n)
e.ID(v,a5&255,a5>>>16,m)
m.m(0,3,255)
if(w){a5=D.c.H(3*a4+a3+131074,2)
a1=J.o(a7.a,a7.d+a1)
b3.toString
n=A.b7(b3,d,n)
e.ID(a1,a5&255,a5>>>16,n)
n.m(0,3,255)}}},
avu(d,e,f){var w,v,u,t,s,r,q,p,o=this,n=o.xr
if(n==null)return
w=A.b7(n,null,0)
if(d===0){v=f-1
u=d}else{u=d-1
w.d=w.d-o.b.a
v=f}n=o.Q
n.toString
t=o.as
if(n+d+f===t){t.toString
v=t-n-u}for(n=o.b,s=0;s<v;++s){for(t=s+u,r=0;r<e;++r){q=J.o(w.a,w.d+r)
p=o.d.a
p=p==null?null:p.f8(r,t,null);(p==null?new A.fY():p).saO(q)}w.d=w.d+n.a}},
avv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.b,h=A.by(C.bO(k.d.ghx(0),0,j),!1,j,d*i.a*4),g=k.to
g===$&&C.b()
w=A.b7(g,j,0)
g=k.x1
g===$&&C.b()
v=A.b7(g,j,0)
g=k.x2
g===$&&C.b()
u=A.b7(g,j,0)
t=d+f
s=D.c.H(e+1,1)
r=i.a*4
i=k.rx
i===$&&C.b()
q=A.b7(i,j,0)
i=k.ry
i===$&&C.b()
p=A.b7(i,j,0)
if(d===0){k.Io(w,j,v,u,v,u,h,j,e)
o=f}else{i=k.RG
i===$&&C.b()
k.Io(i,w,q,p,v,u,A.b7(h,j,-r),h,e)
o=f+1}q.a=v.a
p.a=u.a
for(i=2*r,g=-r,n=d;n+=2,n<t;){q.d=v.d
p.d=u.d
m=v.d
l=k.R8
l.toString
v.d=m+l
u.d+=l
h.d+=i
l=w.d
m=k.p4
m.toString
w.d=l+2*m
k.Io(A.b7(w,j,-m),w,q,p,v,u,A.b7(h,j,g),h,e)}i=w.d
g=k.p4
g.toString
w.d=i+g
i=k.Q
i.toString
g=k.as
g.toString
if(i+t<g){i=k.RG
i===$&&C.b()
i.tb(0,e,w)
k.rx.tb(0,s,v)
k.ry.tb(0,s,u);--o}else if((t&1)===0)k.Io(w,j,v,u,v,u,A.b7(h,j,r),j,e)
return o},
aui(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b,l=m.a,k=m.b
if(d<0||e<=0||d+e>k)return n
if(d===0){m=l*k
o.bP=new Uint8Array(m)
w=o.bO
v=new A.aTx(w,l,k)
u=w.bm()
v.d=u&3
v.e=D.c.H(u,2)&3
v.f=D.c.H(u,4)&3
v.r=D.c.H(u,6)&3
if(v.gdc()){t=v.d
if(t===0){if(w.c-w.d<m)v.r=1}else if(t===1){s=new A.abR(B.js,C.a([],x.J))
s.a=l
s.b=k
m=C.a([],x.A)
t=C.a([],x.F)
r=new Uint32Array(2)
q=new A.abx(w,r)
r=q.d=C.bO(r.buffer,0,n)
r[0]=w.bm()
r[1]=w.bm()
r[2]=w.bm()
r[3]=w.bm()
r[4]=w.bm()
r[5]=w.bm()
r[6]=w.bm()
r[7]=w.bm()
t=new A.a3c(q,s,m,t)
t.db=l
v.x=t
t.Ar(l,k,!0)
m=v.x
w=m.ax
if(w.length===1&&w[0].a===B.ON&&m.aBx()){v.y=!0
m=v.x
w=m.c
p=w.a*w.b
m.cx=0
w=D.c.b4(p,4)
w=new Uint8Array(p+(4-w))
m.CW=w
m.ch=C.k1(w.buffer,0,n)}else{v.y=!1
v.x.ZE()}}else v.r=1}o.bM=v}m=o.bM
m===$&&C.b()
if(!m.w){w=o.bP
w===$&&C.b()
if(!m.Cx(d,e,w))return n}m=o.bP
m===$&&C.b()
return A.by(m,!1,n,d*l)},
aFe(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a2.fr.b,a4=a2.k1
a4===$&&C.b()
w=a2.dy[a4]
a4=a2.by
a4===$&&C.b()
v=a4[a2.y1]
u=A.by(v.a,!1,null,0)
a4=a2.k3
a4===$&&C.b()
t=a4[0]
u.aWh(0,u.c-u.d,0)
a4=v.b
a4===$&&C.b()
if(!a4){s=A.by(new Int16Array(16),!1,null,0)
a4=a5.b
r=t.b
q=a2.OV(a6,a3[1],a4+r,w.b,0,s)
a5.b=t.b=q>0?1:0
if(q>1)a2.aKb(s,u)
else{p=D.c.H(J.o(s.a,s.d)+3,3)
for(o=0;o<256;o+=16)J.bL(u.a,u.d+o,p)}n=a3[0]
m=1}else{n=a3[3]
m=0}l=a5.a&15
k=t.a&15
for(j=0,i=0;i<4;++i){h=k&1
for(g=0,f=0;f<4;++f){q=a2.OV(a6,n,h+(l&1),w.a,m,u)
h=q>m?1:0
l=l>>>1|h<<7
a4=J.o(u.a,u.d)!==0?1:0
if(q>3)a4=3
else if(q>1)a4=2
g=g<<2|a4
u.d+=16}l=l>>>4
k=k>>>1|h<<7
j=(j<<8|g)>>>0}e=k>>>4
for(d=l,a0=0,a1=0;a1<4;a1+=2){a4=4+a1
l=D.c.fb(a5.a,a4)
k=D.c.fb(t.a,a4)
for(g=0,i=0;i<2;++i){h=k&1
for(f=0;f<2;++f){q=a2.OV(a6,a3[2],h+(l&1),w.c,0,u)
h=q>0?1:0
l=l>>>1|h<<3
a4=J.o(u.a,u.d)!==0?1:0
if(q>3)a4=3
else if(q>1)a4=2
g=(g<<2|a4)>>>0
u.d+=16}l=l>>>2
k=k>>>1|h<<5}a0=(a0|D.c.cN(g,4*a1))>>>0
d=(d|D.c.cN(l<<4>>>0,a1))>>>0
e=(e|D.c.cN(k&240,a1))>>>0}a5.a=d
t.a=e
v.e=j
v.f=a0
if((a0&43690)===0)w.toString
return(j|a0)>>>0===0},
aKb(d,e){var w,v,u,t,s,r,q,p,o,n,m=new Int32Array(16)
for(w=0;w<4;++w){v=12+w
u=J.o(d.a,d.d+w)+J.o(d.a,d.d+v)
t=4+w
s=8+w
r=J.o(d.a,d.d+t)+J.o(d.a,d.d+s)
q=J.o(d.a,d.d+t)-J.o(d.a,d.d+s)
p=J.o(d.a,d.d+w)-J.o(d.a,d.d+v)
m[w]=u+r
m[s]=u-r
m[t]=p+q
m[v]=p-q}for(o=0,w=0;w<4;++w){v=w*4
n=m[v]+3
t=m[3+v]
u=n+t
s=m[1+v]
v=m[2+v]
r=s+v
q=s-v
p=n-t
t=D.c.H(u+r,3)
J.bL(e.a,e.d+o,t)
t=D.c.H(p+q,3)
J.bL(e.a,e.d+(o+16),t)
t=D.c.H(u-r,3)
J.bL(e.a,e.d+(o+32),t)
t=D.c.H(p-q,3)
J.bL(e.a,e.d+(o+48),t)
o+=64}},
awX(d,e){var w,v,u,t,s,r
if(d.eV(e[3])===0)w=d.eV(e[4])===0?2:3+d.eV(e[5])
else if(d.eV(e[6])===0)w=d.eV(e[7])===0?5+d.eV(159):7+2*d.eV(165)+d.eV(145)
else{v=d.eV(e[8])
u=2*v+d.eV(e[9+v])
t=B.afU[u]
s=t.length
for(w=0,r=0;r<s;++r)w+=w+d.eV(t[r])
w+=3+D.c.cN(8,u)}return w},
OV(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e[h].a[f]
for(;h<16;h=w){if(d.eV(o[0])===0)return h
for(;d.eV(o[1])===0;){++h
o=e[B.wl[h]].a[0]
if(h===16)return 16}w=h+1
v=e[B.wl[w]].a
if(d.eV(o[2])===0){o=v[1]
u=1}else{u=this.awX(d,o)
o=v[2]}t=B.ags[h]
s=d.b
s===$&&C.b()
r=d.ZW(D.c.H(s,1))
s=d.b
q=B.Bx[s]
d.b=B.xJ[s]
s=d.d
s===$&&C.b()
d.d=s-q
s=r!==0?-u:u
p=g[h>0?1:0]
J.bL(i.a,i.d+t,s*p)}return 16},
aF9(){var w,v,u,t,s,r,q,p,o,n=this,m=n.y1,l=4*m,k=n.go,j=n.id,i=n.by
i===$&&C.b()
w=i[m]
m=n.c
m===$&&C.b()
m=m.eV(145)===0
w.b=m
if(!m){if(n.c.eV(156)!==0)v=n.c.eV(128)!==0?1:3
else v=n.c.eV(163)!==0?2:0
w.c[0]=v
k.toString
D.w.jy(k,l,l+4,v)
D.w.jy(j,0,4,v)}else{u=w.c
for(t=0,s=0;s<4;++s,t=o){v=j[s]
for(r=0;r<4;++r){m=l+r
q=B.adZ[k[m]][v]
p=B.wr[n.c.eV(q[0])]
for(;p>0;)p=B.wr[2*p+n.c.eV(q[p])]
v=-p
k[m]=v}o=t+4
k.toString
D.w.ct(u,t,o,k,l)
j[s]=v}}if(n.c.eV(142)===0)m=0
else if(n.c.eV(114)===0)m=2
else m=n.c.eV(183)!==0?1:3
w.d=m}}
A.Qr.prototype={
c0(d){var w,v
for(w=0;v=d-1,d>0;d=v)w=(w|D.c.dA(this.eV(128),v))>>>0
return w},
zE(d){var w=this.c0(d)
return this.c0(1)===1?-w:w},
eV(d){var w,v=this,u=v.b
u===$&&C.b()
w=v.ZW(D.c.H(u*d,8))
if(v.b<=126)v.aIK()
return w},
ZW(d){var w,v,u,t,s,r=this,q=r.d
q===$&&C.b()
if(q<0){w=r.a
v=w.c
u=w.d
if(v-u>=1){t=w.bm()
q=r.c
q===$&&C.b()
r.c=(t|q<<8)>>>0
q=r.d+8
r.d=q
s=q}else{if(u<v){q=w.bm()
w=r.c
w===$&&C.b()
r.c=(q|w<<8)>>>0
w=r.d+8
r.d=w
q=w}else if(!r.e){w=r.c
w===$&&C.b()
r.c=w<<8>>>0
q+=8
r.d=q
r.e=!0}s=q}}else s=q
q=r.c
q===$&&C.b()
if(D.c.kK(q,s)>d){w=r.b
w===$&&C.b()
v=d+1
r.b=w-v
r.c=q-D.c.dA(v,s)
return 1}else{r.b=d
return 0}},
aIK(){var w,v=this,u=v.b
u===$&&C.b()
w=B.Bx[u]
v.b=B.xJ[u]
u=v.d
u===$&&C.b()
v.d=u-w}}
A.aSJ.prototype={
XU(d,e,f){var w,v=A.b7(d,null,0)
for(w=0;w<16;++w){v.d=d.d+w
if(this.a4a(v,e,f))this.Gs(v,e)}},
XT(d,e,f){var w,v=A.b7(d,null,0)
for(w=0;w<16;++w){v.d=d.d+w*e
if(this.a4a(v,1,f))this.Gs(v,1)}},
ajZ(d,e,f){var w,v,u=A.b7(d,null,0)
for(w=4*e,v=3;v>0;--v){u.d+=w
this.XU(u,e,f)}},
ajW(d,e,f){var w,v=A.b7(d,null,0)
for(w=3;w>0;--w){v.d+=4
this.XT(v,e,f)}},
b08(d,e,f,g,h){var w,v,u=A.b7(d,null,0)
for(w=4*e,v=3;v>0;--v){u.d+=w
this.wK(u,e,1,16,f,g,h)}},
aSP(d,e,f,g,h){var w,v=A.b7(d,null,0)
for(w=3;w>0;--w){v.d+=4
this.wK(v,1,e,16,f,g,h)}},
wL(d,e,f,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.b7(d,null,0)
for(w=-3*e,v=-2*e,u=-e,t=2*e;s=a0-1,a0>0;a0=s){if(this.a4b(g,e,a1,a2))if(this.a2M(g,e,a3))this.Gs(g,e)
else{r=J.o(g.a,g.d+w)
q=J.o(g.a,g.d+v)
p=J.o(g.a,g.d+u)
o=J.o(g.a,g.d)
n=J.o(g.a,g.d+e)
m=J.o(g.a,g.d+t)
l=$.bbM()
k=l[1020+3*(o-p)+l[1020+q-n]]
l=D.c.H(27*k+63,7)
j=(l&2147483647)-((l&2147483648)>>>0)
l=D.c.H(18*k+63,7)
i=(l&2147483647)-((l&2147483648)>>>0)
l=D.c.H(9*k+63,7)
h=(l&2147483647)-((l&2147483648)>>>0)
r=$.kn()[255+r+h]
J.bL(g.a,g.d+w,r)
q=$.kn()[255+q+i]
J.bL(g.a,g.d+v,q)
p=$.kn()[255+p+j]
J.bL(g.a,g.d+u,p)
o=$.kn()[255+o-j]
J.bL(g.a,g.d,o)
n=$.kn()[255+n-i]
J.bL(g.a,g.d+e,n)
m=$.kn()[255+m-h]
J.bL(g.a,g.d+t,m)}g.d+=f}},
wK(d,e,f,g,h,i,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.b7(d,null,0)
for(w=-2*e,v=-e;u=g-1,g>0;g=u){if(this.a4b(j,e,h,i))if(this.a2M(j,e,a0))this.Gs(j,e)
else{t=J.o(j.a,j.d+w)
s=J.o(j.a,j.d+v)
r=J.o(j.a,j.d)
q=J.o(j.a,j.d+e)
p=3*(r-s)
o=$.apR()
n=D.c.H(p+4,3)
m=o[112+((n&2147483647)-((n&2147483648)>>>0))]
n=D.c.H(p+3,3)
l=o[112+((n&2147483647)-((n&2147483648)>>>0))]
n=D.c.H(m+1,1)
k=(n&2147483647)-((n&2147483648)>>>0)
t=$.kn()[255+t+k]
J.bL(j.a,j.d+w,t)
s=$.kn()[255+s+l]
J.bL(j.a,j.d+v,s)
r=$.kn()[255+r-m]
J.bL(j.a,j.d,r)
q=$.kn()[255+q-k]
J.bL(j.a,j.d+e,q)}j.d+=f}},
Gs(d,e){var w=J.o(d.a,d.d+-2*e),v=-e,u=J.o(d.a,d.d+v),t=J.o(d.a,d.d),s=J.o(d.a,d.d+e),r=3*(t-u)+$.bbM()[1020+w-s],q=$.apR()[112+D.c.hZ(D.c.H(r+4,3),32)],p=$.apR()[112+D.c.hZ(D.c.H(r+3,3),32)]
d.m(0,v,$.kn()[255+u+p])
d.m(0,0,$.kn()[255+t-q])},
a2M(d,e,f){var w=J.o(d.a,d.d+-2*e),v=J.o(d.a,d.d+-e),u=J.o(d.a,d.d),t=J.o(d.a,d.d+e),s=$.apQ()
return s[255+w-v]>f||s[255+t-u]>f},
a4a(d,e,f){var w=J.o(d.a,d.d+-2*e),v=J.o(d.a,d.d+-e),u=J.o(d.a,d.d),t=J.o(d.a,d.d+e)
return 2*$.apQ()[255+v-u]+$.bbL()[255+w-t]<=f},
a4b(d,e,f,g){var w=J.o(d.a,d.d+-4*e),v=J.o(d.a,d.d+-3*e),u=J.o(d.a,d.d+-2*e),t=J.o(d.a,d.d+-e),s=J.o(d.a,d.d),r=J.o(d.a,d.d+e),q=J.o(d.a,d.d+2*e),p=J.o(d.a,d.d+3*e),o=$.apQ(),n=255+u
if(2*o[255+t-s]+$.bbL()[n-r]>f)return!1
return o[255+w-v]<=g&&o[255+v-u]<=g&&o[n-t]<=g&&o[255+p-q]<=g&&o[255+q-r]<=g&&o[255+r-s]<=g},
pe(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=new Int32Array(16)
for(w=0,v=0,u=0;u<4;++u){t=w+8
s=J.o(d.a,d.d+w)+J.o(d.a,d.d+t)
r=J.o(d.a,d.d+w)-J.o(d.a,d.d+t)
t=w+4
q=D.c.H(J.o(d.a,d.d+t)*35468,16)
p=w+12
o=D.c.H(J.o(d.a,d.d+p)*85627,16)
n=(q&2147483647)-((q&2147483648)>>>0)-((o&2147483647)-((o&2147483648)>>>0))
t=D.c.H(J.o(d.a,d.d+t)*85627,16)
p=D.c.H(J.o(d.a,d.d+p)*35468,16)
m=(t&2147483647)-((t&2147483648)>>>0)+((p&2147483647)-((p&2147483648)>>>0))
l=v+1
i[v]=s+m
v=l+1
i[l]=r+n
l=v+1
i[v]=r-n
v=l+1
i[l]=s-m;++w}for(k=0,v=0,u=0;u<4;++u){j=i[v]+4
t=i[v+8]
s=j+t
r=j-t
t=i[v+4]
q=D.c.H(t*35468,16)
p=i[v+12]
o=D.c.H(p*85627,16)
n=(q&2147483647)-((q&2147483648)>>>0)-((o&2147483647)-((o&2147483648)>>>0))
t=D.c.H(t*85627,16)
p=D.c.H(p*35468,16)
m=(t&2147483647)-((t&2147483648)>>>0)+((p&2147483647)-((p&2147483648)>>>0))
A.v1(e,k,0,0,s+m)
A.v1(e,k,1,0,r+n)
A.v1(e,k,2,0,r-n)
A.v1(e,k,3,0,s-m);++v
k+=32}},
b_N(d,e,f){this.pe(d,e)
if(f)this.pe(A.b7(d,null,16),A.b7(e,null,4))},
EP(d,e){var w,v,u=J.o(d.a,d.d)+4
for(w=0;w<4;++w)for(v=0;v<4;++v)A.v1(e,0,v,w,u)},
afV(d,e){var w=this,v=null
if(J.o(d.a,d.d)!==0)w.EP(d,e)
if(J.o(d.a,d.d+16)!==0)w.EP(A.b7(d,v,16),A.b7(e,v,4))
if(J.o(d.a,d.d+32)!==0)w.EP(A.b7(d,v,32),A.b7(e,v,128))
if(J.o(d.a,d.d+48)!==0)w.EP(A.b7(d,v,48),A.b7(e,v,132))}}
A.aSO.prototype={}
A.aSS.prototype={}
A.aSU.prototype={}
A.Qq.prototype={}
A.aST.prototype={}
A.aSK.prototype={}
A.zS.prototype={}
A.abz.prototype={}
A.abB.prototype={}
A.abA.prototype={}
A.abC.prototype={}
A.Qs.prototype={
Cy(){var w,v=this.b
if(v.fz(8)!==47)return!1
w=this.c
w.f=B.mu
w.a=v.fz(14)+1
w.b=v.fz(14)+1
w.d=v.fz(1)!==0
if(v.fz(3)!==0)return!1
return!0},
pX(){var w,v,u,t,s,r=this,q=null
r.e=0
if(!r.Cy())return q
w=r.c
r.Ar(w.a,w.b,!0)
r.ZE()
v=w.a
r.d=A.ek(q,q,B.C,0,B.aq,w.b,q,0,4,q,B.C,v,!1)
v=r.ch
v.toString
u=w.a
t=w.b
if(!r.Os(v,u,t,t,r.gaG7()))return q
w=w.w
if(w.length!==0){s=A.by(new C.cq(w),!1,q,0)
w=r.d
w.toString
w.e=A.bk2(s)}return r.d},
ZE(){var w,v=this,u=v.c,t=u.a
u=t*u.b+t
w=new Uint32Array(u+t*16)
v.ch=w
v.CW=C.bO(w.buffer,0,null)
v.cx=u
return!0},
aGF(d){var w,v,u,t=this,s=t.b,r=s.fz(2),q=t.ay,p=D.c.cN(1,r)
if((q&p)>>>0!==0)return!1
t.ay=(q|p)>>>0
w=new A.aby(B.OM)
t.ax.push(w)
q=B.a7z[r]
w.a=q
w.b=d[0]
w.c=d[1]
switch(q.a){case 0:case 1:s=s.fz(3)+2
w.e=s
w.d=t.Ar(A.v2(w.b,s),A.v2(w.c,w.e),!1)
break
case 3:v=s.fz(8)+1
if(v>16)u=0
else if(v>4)u=1
else{s=v>2?2:3
u=s}d[0]=A.v2(w.b,u)
w.e=u
w.d=t.Ar(v,1,!1)
t.avQ(v,w)
break
case 2:break
default:throw C.c(A.aZ("Invalid WebP transform type: "+r))}return!0},
Ar(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(f)for(w=o.b,v=x.t,u=e,t=d;w.fz(1)!==0;){s=C.a([t,u],v)
if(!o.aGF(s))throw C.c(A.aZ("Invalid Transform"))
t=s[0]
u=s[1]}else{u=e
t=d}w=o.b
if(w.fz(1)!==0){r=w.fz(4)
if(!(r>=1&&r<=11))throw C.c(A.aZ("Invalid Color Cache"))}else r=0
if(!o.aGt(t,u,r,f))throw C.c(A.aZ("Invalid Huffman Codes"))
if(r>0){w=D.c.cN(1,r)
o.r=w
o.w=new A.aSP(new Uint32Array(w),32-r)}else o.r=0
w=o.c
w.a=t
w.b=u
q=o.y
o.z=A.v2(t,q)
o.x=q===0?4294967295:D.c.cN(1,q)-1
if(f){o.e=0
return null}p=new Uint32Array(t*u)
if(!o.Os(p,t,u,u,null))throw C.c(A.aZ("Failed to decode image data."))
o.e=0
return p},
Os(a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e,a0=D.c.e7(d,a7),a1=D.c.b4(d,a7),a2=e.a1B(a1,a0),a3=e.e,a4=a7*a8,a5=a7*a9
d=e.r
w=280+d
v=d>0?e.w:null
u=e.x
d=e.b
t=b0!=null
s=a3
while(!0){r=d.b
q=r.c
if(!(!(r.d>=q&&d.a>=64)&&a3<a5))break
if((a1&u)>>>0===0){p=e.AJ(e.Q,e.z,e.y,a1,a0)
a2=e.at[p]}if(d.a>=32)d.uu()
r=a2.a
o=r[0].tn(d)
n=0
if(o<256){m=r[1].tn(d)
if(d.a>=32)d.uu()
a6[a3]=A.bsA(r[2].tn(d),o,m,r[3].tn(d));++a3;++a1
if(a1>=a7){++a0
if(D.c.b4(a0,16)===0&&t)b0.$1(a0)
if(v!=null)for(r=v.b,q=v.a;s<a3;){l=a6[s]
q[D.c.dG(l*506832829>>>0,r)]=l;++s}a1=n}}else if(o<280){k=e.GG(o-256)
j=r[4].tn(d)
if(d.a>=32)d.uu()
i=e.a4P(a7,e.GG(j))
if(a3<i||a4-a3<k)return!1
else{h=a3-i
for(g=0;g<k;++g)a6[a3+g]=a6[h+g]
a3+=k}a1+=k
for(;a1>=a7;){a1-=a7;++a0
if(D.c.b4(a0,16)===0&&t)b0.$1(a0)}if(a3<a5){if((a1&u)>>>0!==0){p=e.AJ(e.Q,e.z,e.y,a1,a0)
a2=e.at[p]}if(v!=null)for(r=v.b,q=v.a;s<a3;){l=a6[s]
q[D.c.dG(l*506832829>>>0,r)]=l;++s}}}else if(o<w){for(;s<a3;){r=a6[s]
f=D.c.dG(r*506832829>>>0,v.b)
v.a[f]=r;++s}r=v.a
a6[a3]=r[o-280];++a3;++a1
if(a1>=a7){++a0
if(D.c.b4(a0,16)===0&&t)b0.$1(a0)
for(q=v.b;s<a3;){l=a6[s]
r[D.c.dG(l*506832829>>>0,q)]=l;++s}a1=n}}else return!1}if(t)b0.$1(a0)
if(r.d>=q&&d.a>=64&&a3<a4)return!1
e.e=a3
return!0},
aBx(){var w,v,u,t
if(this.r>0)return!1
for(w=this.as,v=this.at,u=0;u<w;++u){t=v[u].a
if(t[1].f>1)return!1
if(t[2].f>1)return!1
if(t[3].f>1)return!1}return!0},
avV(d){var w,v,u,t,s,r,q=this,p=q.f,o=d-p
if(o<=0)return
w=q.c
q.ZM(o,w.a*p)
v=w.a
u=v*o
t=v*q.f
w=q.ch
w.toString
p=q.cx
p.toString
s=A.by(w,!1,null,p)
for(r=0;r<u;++r){p=q.cy
p.toString
p[t+r]=D.c.H(J.o(s.a,s.d+r),8)&255}q.f=d},
atW(d,e,f){var w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.e7(n,d),l=D.c.b4(n,d),k=o.a1B(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){w=n.b
if(!(!(w.d>=w.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){v=o.AJ(o.Q,o.z,o.y,l,m)
k=o.at[v]}if(n.a>=32)n.uu()
w=k.a
u=w[0].tn(n)
if(u<256){w=o.CW
w===$&&C.b()
w[j]=u;++j;++l
if(l>=d){++m
if(D.c.b4(m,16)===0)o.OH(m)
l=0}}else if(u<280){t=o.GG(u-256)
s=w[4].tn(n)
if(n.a>=32)n.uu()
r=o.a4P(d,o.GG(s))
if(j>=r&&i-j>=t)for(w=o.CW,q=0;q<t;++q){w===$&&C.b()
p=j+q
w[p]=w[p-r]}else{o.e=j
return!0}j+=t
l+=t
for(;l>=d;){l-=d;++m
if(D.c.b4(m,16)===0)o.OH(m)}if(j<h&&(l&g)>>>0!==0){v=o.AJ(o.Q,o.z,o.y,l,m)
k=o.at[v]}}else return!1}o.OH(m)
o.e=j
return!0},
OH(d){var w,v,u,t=this,s=t.f,r=d-s,q=t.CW
q===$&&C.b()
w=A.by(q,!1,null,t.c.a*s)
if(r>0){v=t.f
s=t.cy
s.toString
q=t.db
q.toString
u=A.by(s,!1,null,q*v)
t.ax[0].aOf(v,v+r,w,u)}t.f=d},
aG8(d){var w,v,u,t,s,r=this,q=r.c,p=q.a,o=r.f,n=d-o
if(n<=0)return
r.ZM(n,p*o)
p=r.cx
p.toString
w=r.f
v=p
u=0
for(;u<n;++u,++w)for(t=0;t<q.a;++t,++v){s=r.ch[v]
p=r.d.a
if(p!=null)p.hF(t,w,s>>>16&255,s>>>8&255,s&255,s>>>24&255)}r.f=d},
ZM(d,e){var w,v,u,t=this,s=t.ax,r=s.length,q=t.c.a,p=t.f,o=p+d,n=t.cx
n.toString
w=t.ch
w.toString
D.bA.ct(w,n,n+q*d,w,e)
for(v=e;u=r-1,r>0;v=n,r=u){q=s[u]
w=t.ch
w.toString
q.aUQ(p,o,w,v,w,n)}},
aGt(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=1
if(g&&k.b.fz(1)!==0){w=k.b.fz(3)+2
v=A.v2(d,w)
u=A.v2(e,w)
t=v*u
s=k.Ar(v,u,!1)
k.y=w
for(r=0;r<t;++r){q=s[r]>>>8&65535
s[r]=q
if(q>=j)j=q+1}}else s=null
p=J.hf(j,x.f)
for(o=0;o<j;++o)p[o]=A.bB2()
for(n=f>0,r=0;r<j;++r)for(m=0;m<5;++m){l=B.a7C[m]
if(m===0&&n)l+=D.c.cN(1,f)
if(!k.aGr(l,p[r].a[m]))return!1}k.Q=s
k.as=j
k.at=p
return!0},
aGr(d,e){var w,v,u,t,s,r,q,p,o,n=this.b
if(n.fz(1)!==0){w=x.t
v=C.a([0,0],w)
u=C.a([0,0],w)
t=C.a([0,0],w)
s=n.fz(1)+1
v[0]=n.fz(n.fz(1)===0?1:8)
u[0]=0
w=s-1
t[0]=w
if(s===2){v[1]=n.fz(8)
u[1]=1
t[1]=w}r=e.aNq(t,u,v,d,s)}else{q=new Int32Array(19)
p=n.fz(4)+4
if(p>19)return!1
t=new Int32Array(d)
for(o=0;o<p;++o)q[B.a9Z[o]]=n.fz(3)
r=this.aGs(q,d,t)
if(r)r=e.a9e(t,d)}return r},
aGs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.bkC()
if(!j.a9e(d,19))return!1
w=this.b
if(w.fz(1)!==0){v=2+w.fz(2+2*w.fz(3))
if(v>e)return!1}else v=e
for(u=0,t=8;u<e;v=s){s=v-1
if(v===0)break
if(w.a>=32)w.uu()
r=j.tn(w)
if(r<16){q=u+1
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=B.a4e[p]
n=B.a4z[p]
m=w.fz(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
f[u]=l}}}}return!0},
GG(d){var w
if(d<4)return d+1
w=D.c.H(d-2,1)
return D.c.cN(2+(d&1),w)+this.b.fz(w)+1},
a4P(d,e){var w,v
if(e>120)return e-120
else{w=B.a6x[e-1]
v=(w>>>4)*d+(8-(w&15))
return v>=1?v:1}},
avQ(d,e){var w,v,u=D.c.cN(1,D.c.fb(8,e.e)),t=new Uint32Array(u),s=C.bO(e.d.buffer,0,null),r=C.bO(t.buffer,0,null)
t[0]=e.d[0]
w=4*d
for(v=4;v<w;++v)r[v]=s[v]+r[v-4]&255
for(w=4*u;v<w;++v)r[v]=0
e.d=t
return!0},
AJ(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.H(h,f)+D.c.H(g,f)]},
a1B(d,e){var w=this,v=w.AJ(w.Q,w.z,w.y,d,e)
return w.at[v]}}
A.a3c.prototype={
aSg(d){return this.avV(d)}}
A.abx.prototype={
aef(){var w,v,u=this.a
if(u<32){w=this.c
v=D.c.dG(w[0],u)+((w[1]&B.oW[u])>>>0)*(B.oW[32-u]+1)}else{w=this.c
v=u===32?w[1]:D.c.dG(w[1],u-32)}return v},
fz(d){var w,v=this,u=v.b
if(!(u.d>=u.c&&v.a>=64)&&d<25){u=v.aef()
w=B.oW[d]
v.a+=d
v.uu()
return(u&w)>>>0}else throw C.c(A.aZ("Not enough data in input."))},
uu(){var w,v,u,t=this,s=t.b,r=t.c,q=s.c
while(!0){if(!(t.a>=8&&s.d<q))break
w=J.o(s.a,s.d++)
v=r[0]
u=r[1]
r[0]=(v>>>8)+(u&255)*16777216
r[1]=u>>>8
r[1]=(r[1]|w*16777216)>>>0
t.a-=8}}}
A.aSP.prototype={}
A.zT.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aby.prototype={
aUQ(d,e,f,g,h,i){var w,v,u,t,s=this,r=s.b
switch(s.a.a){case 2:s.aLP(h,i,i+(e-d)*r)
break
case 0:s.aYG(d,e,h,i)
if(e!==s.c){w=i-r
D.bA.ct(h,w,w+r,f,i+(e-d-1)*r)}break
case 1:s.aOg(d,e,h,i)
break
case 3:if(g===i&&s.e>0){v=e-d
u=v*A.v2(r,s.e)
t=i+v*r-u
D.bA.ct(h,t,t+u,f,i)
s.a9O(d,e,f,t,h,i)}else s.a9O(d,e,f,g,h,i)
break}},
aOf(d,e,f,g){var w,v,u,t,s,r=this.e,q=D.c.fb(8,r),p=this.b,o=this.d
if(q<8){w=D.c.cN(1,r)-1
v=D.c.cN(1,q)-1
for(u=d;u<e;++u)for(t=0,s=0;s<p;++s){if((s&w)>>>0===0){t=J.o(f.a,f.d);++f.d}r=o[(t&v)>>>0]
J.bL(g.a,g.d,r>>>8&255);++g.d
t=D.c.H(t,q)}}else for(u=d;u<e;++u)for(s=0;s<p;++s){r=J.o(f.a,f.d);++f.d
r=o[r]
J.bL(g.a,g.d,r>>>8&255);++g.d}},
a9O(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=this.e,o=D.c.fb(8,p),n=this.b,m=this.d
if(o<8){w=D.c.cN(1,p)-1
v=D.c.cN(1,o)-1
for(u=d;u<e;++u)for(t=0,s=0;s<n;++s,i=q){if((s&w)>>>0===0){r=g+1
t=f[g]>>>8&255
g=r}q=i+1
h[i]=m[t&v]
t=D.c.fb(t,o)}}else for(u=d;u<e;++u)for(s=0;s<n;++s,i=q,g=r){q=i+1
r=g+1
h[i]=m[f[g]>>>8&255]}},
aOg(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.cN(1,e)-1,a0=A.v2(f,e),a1=D.c.H(a2,g.e)*a0
for(w=a2;w<a3;){e=new Uint8Array(3)
for(v=a1,u=0;u<f;++u){if((u&d)>>>0===0){t=v+1
s=g.d[v]
e[0]=s&255
e[1]=s>>>8&255
e[2]=s>>>16&255
v=t}s=a5+u
r=a4[s]
q=r>>>8&255
p=e[0]
o=$.jB()
o[0]=p
p=$.kp()
n=p[0]
o[0]=q
m=p[0]
l=$.bhi()
l[0]=n*m
k=$.bvj()
j=(r>>>16&255)+(k[0]>>>5)>>>0&255
o[0]=e[1]
n=p[0]
o[0]=q
l[0]=n*p[0]
i=k[0]
o[0]=e[2]
n=p[0]
o[0]=j
l[0]=n*p[0]
h=k[0]
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++w
if((w&d)>>>0===0)a1+=a0}},
aYG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this,m=n.b
if(d===0){A.aSQ(f,g,4278190080)
for(w=1;w<m;++w){v=g+w
A.aSQ(f,v,f[v-1])}g+=m;++d}v=n.e
u=D.c.cN(1,v)-1
t=A.v2(m,v)
s=D.c.H(d,n.e)*t
for(r=d;r<e;){A.aSQ(f,g,f[g-m])
q=s+1
p=$.bor[n.d[s]>>>8&15]
for(w=1;w<m;++w){if((w&u)>>>0===0){o=q+1
p=$.bor[n.d[q]>>>8&15]
q=o}v=g+w
A.aSQ(f,v,p.$3(f,f[v-1],v-m))}g+=m;++r
if((r&u)>>>0===0)s+=t}},
aLP(d,e,f){var w,v,u
for(;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.aTx.prototype={
gdc(){var w=this,v=w.d
if(v>1||w.e>=4||w.f>1||w.r!==0)return!1
return!0},
Cx(d,e,f){var w,v,u,t,s,r,q=this
if(!q.gdc())return!1
w=B.acr[q.e]
if(q.d===0){v=q.b
u=d*v
t=q.a
D.w.ct(f,u,e*v,t.a,t.d-t.b+u)}else{v=d+e
t=q.x
t===$&&C.b()
t.cy=f
s=t.c
if(q.y)v=t.atW(s.a,s.b,v)
else{r=t.ch
r.toString
t=t.Os(r,s.a,s.b,v,t.gaSf())
v=t}if(!v)return!1}if(w!=null){v=q.b
w.$6(v,q.c,v,d,e,f)}if(q.f===1)if(!q.auw(f,q.b,q.c,d,e))return!1
if(d+e===q.c)q.w=!0
return!0},
auw(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.QF.prototype={
aqm(d,e){var w=this,v=d.bm()
w.r=0
w.f=(v&1)!==0
w.w=d.d-d.b
w.x=e-16}}
A.a3d.prototype={}
A.a2E.prototype={
RD(d){var w,v=this
if(d===0)return!1
w=(d<<1>>>0)-1
v.e=w
w=new Int32Array(w<<1>>>0)
v.d=w
w[1]=-1
v.f=1
D.w.jy(v.a,0,128,255)
return!0},
a9e(d,e){var w,v,u,t,s,r=this
for(w=0,v=0,u=0;u<e;++u)if(d[u]>0){++w
v=u}if(!r.RD(w))return!1
if(w===1){if(v<0||v>=e)return!1
return r.NH(v,0,0)}t=new Int32Array(e)
if(!r.aB_(d,e,t))return!1
for(u=0;u<e;++u){s=d[u]
if(s>0)if(!r.NH(u,t[u],s))return!1}return r.f===r.e},
aNq(d,e,f,g,h){var w,v,u,t=this
if(!t.RD(h))return!1
for(w=0;w<h;++w){v=e[w]
if(v!==-1){u=f[w]
if(u>=g)return t.f===t.e
if(!t.NH(u,v,d[w]))return t.f===t.e}}return t.f===t.e},
tn(d){var w,v,u=this,t=d.aef(),s=d.a,r=t&127,q=u.a[r]
if(q<=7){d.a=s+q
return u.b[r]}w=u.c[r]
s+=7
t=t>>>7
do{v=u.d
v===$&&C.b()
w=w+v[(w<<1>>>0)+1]+(t&1)
t=t>>>1;++s}while(u.a4h(w))
d.a=s
return u.d[w<<1>>>0]},
NH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){w=l.a5C(e,f)
for(v=D.c.dA(1,7-f),u=l.b,t=l.a,s=0;s<v;++s){r=(w|D.c.dA(s,f))>>>0
u[r]=d
t[r]=f}}else w=l.a5C(D.c.kK(e,f-7),7)
for(v=l.c,q=7,p=0;o=f-1,f>0;f=o){u=l.e
if(p>=u)return!1
t=l.d
t===$&&C.b()
n=(p<<1>>>0)+1
m=t[n]
if(m<0){m=l.f
if(m===u)return!1
t[n]=m-p
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
p+=t[n]+(D.c.kK(e,o)&1);--q
if(q===0)v[w]=p}if(l.aDb(p))l.aDc(p,0)
else if(l.a4h(p))return!1
v=l.d
v===$&&C.b()
v[p<<1>>>0]=d
return!0},
a5C(d,e){return D.c.dG((B.BE[d&15]<<4|B.BE[D.c.H(d,4)])>>>0,8-e)},
aDc(d,e){var w=this.d
w===$&&C.b()
w[(d<<1>>>0)+1]=e},
a4h(d){var w=this.d
w===$&&C.b()
return w[(d<<1>>>0)+1]!==0},
aDb(d){var w=this.d
w===$&&C.b()
return w[(d<<1>>>0)+1]<0},
aB_(d,e,f){var w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(w=0,v=0;w<e;++w){u=d[w]
if(u>v)v=u}if(v>15)return!1
for(w=0;w<e;++w){t=d[w]
p[t]=p[t]+1}p[0]=0
o[0]=-1
for(s=1,r=0;s<=v;++s){r=r+p[s-1]<<1>>>0
o[s]=r}for(w=0;w<e;++w){t=d[w]
if(t>0){q=o[t]
o[t]=q+1
f[w]=q}else f[w]=-1}return!0}}
A.KJ.prototype={
i(d,e){return this.a[e]}}
A.Fi.prototype={
J(){return"WebPFormat."+this.b}}
A.abR.prototype={}
A.a3e.prototype={}
A.aTy.prototype={
yI(d){var w=A.by(d,!1,null,0)
this.b=w
if(!this.a1y(w))return!1
return!0},
kN(d){var w,v=this,u=null,t=A.by(d,!1,u,0)
v.b=t
if(!v.a1y(t))return u
t=new A.a3e(B.js,C.a([],x.J))
v.a=t
w=v.b
w.toString
if(!v.a8i(w,t))return u
t=v.a
switch(t.f.a){case 3:t.as=t.z.length
return t
case 2:w=v.b
w.toString
w.d=t.ay
if(!A.beU(w,t).Cy())return u
t=v.a
t.as=t.z.length
return t
case 1:w=v.b
w.toString
w.d=t.ay
if(!A.beS(w,t).Cy())return u
t=v.a
t.as=t.z.length
return t
case 0:throw C.c(A.aZ("Unknown format for WebP"))}},
hb(d){var w,v,u,t,s=this,r=s.b
if(r==null||s.a==null)return null
w=s.a
if(w.e){w=w.z
v=w.length
if(d>=v)return null
u=w[d]
r.toString
w=u.x
w===$&&C.b()
v=u.w
v===$&&C.b()
return s.a0j(r.tM(w,v),d)}v=w.f
if(v===B.mu){r.toString
t=r.tM(w.ch,w.ay)
r=s.a
r.toString
return A.beU(t,r).pX()}else if(v===B.rc){r.toString
t=r.tM(w.ch,w.ay)
r=s.a
r.toString
return A.beS(t,r).pX()}return null},
l0(d,e){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.kN(d)==null)return n
w=o.a.e
if(!w)return o.hb(0)
for(v=n,u=v,t=0;w=o.a,t<w.as;++t){e=w.z[t]
s=o.hb(t)
if(s==null)continue
s.y=e.e
if(u==null||v==null){w=o.a
r=w.a
w=w.b
q=s.gvv()
p=s.a
p=p==null?n:p.gc2()
if(p==null)p=B.C
u=A.ek(n,n,p,s.y,B.aq,w,n,0,q,n,B.C,r,!1)
v=u}else{v=A.a2K(v,!1,!1)
w=e.f
w===$&&C.b()
if(w){w=v.a
if(w!=null)w.k5(0,n)}}A.bgf(v,s,B.n5,n,n,e.a,e.b,n,n,n,n)
u.pJ(v)}return u},
a0j(d,e){var w,v,u,t=null,s=C.a([],x.J),r=new A.a3e(B.js,s)
if(!this.a8i(d,r))return t
if(r.f===B.js)return t
r.as=this.a.as
if(r.e){w=s.length
if(e>=w)return t
v=s[e]
s=v.x
s===$&&C.b()
w=v.w
w===$&&C.b()
return this.a0j(d.tM(s,w),e)}else{u=d.tM(r.ch,r.ay)
s=r.f
if(s===B.mu)return A.beU(u,r).pX()
else if(s===B.rc)return A.beS(u,r).pX()}return t},
a1y(d){if(d.f4(4)!=="RIFF")return!1
d.M()
if(d.f4(4)!=="WEBP")return!1
return!0},
a8i(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=d.c,v=d.b;d.d<w;){u=d.f4(4)
t=d.M()
s=t+1>>>1<<1>>>0
r=d.d
q=r-v
switch(u){case"VP8X":if(!this.axh(d,e))return!1
break
case"VP8 ":e.ay=q
e.ch=t
e.f=B.rc
break
case"VP8L":e.ay=q
e.ch=t
e.f=B.mu
break
case"ALPH":e.toString
r=d.a
p=d.e
o=J.bY(r)
r=new A.i2(r,0,o,0,p)
e.at=r
r.d=d.d
d.d+=s
break
case"ANIM":e.f=B.aGH
n=d.M()
r=new Uint8Array(4)
r[0]=n>>>8&255
r[1]=n>>>16&255
r[2]=n>>>24&255
r[3]=n&255
d.X()
break
case"ANMF":if(!this.awB(d,e,t))return!1
break
case"ICCP":e.toString
m=d.fR(t)
d.d=d.d+(m.c-m.d)
m.eJ()
break
case"EXIF":e.toString
e.w=d.f4(t)
break
case"XMP ":e.toString
d.f4(t)
break
default:d.d=r+s
break}r=d.d
l=s-(r-v-q)
if(l>0)d.d=r+l}if(!e.d)e.d=e.at!=null
return e.f!==B.js},
axh(d,e){var w,v,u,t,s=d.bm()
if((s&192)!==0)return!1
w=D.c.H(s,4)
v=D.c.H(s,1)
if((s&1)!==0)return!1
if(d.mU()!==0)return!1
u=d.mU()
t=d.mU()
e.a=u+1
e.b=t+1
e.e=(v&1)!==0
e.d=(w&1)!==0
return!0},
awB(d,e,f){var w,v=d.mU(),u=d.mU()
d.mU()
d.mU()
w=new A.a3d(v*2,u*2,d.mU())
w.aqm(d,f)
if(w.r!==0)return!1
e.z.push(w)
return!0}}
A.aBu.prototype={
J(){return"IccProfileCompression."+this.b}}
A.KZ.prototype={}
A.a1V.prototype={
J(){return"FrameType."+this.b}}
A.xk.prototype={
gj5(){var w=this.x
return w===$?this.x=C.a([],x.g):w},
apU(d,e,f){var w,v,u,t,s=this,r=d.b
if(r!=null)s.b=C.tL(r,x.N,x.I)
r=d.d
if(r!=null){w=x.N
s.d=C.tL(r,w,w)}s.gj5().push(s)
if(!e&&d.gj5().length>1){v=d.gj5().length
for(r=x.g,u=1;u<v;++u){t=d.x
s.pJ(A.a2K((t===$?d.x=C.a([],r):t)[u],!1,!1))}}},
pJ(d){var w=this
if(d==null)d=A.a2K(w,!0,!0)
d.z=w.gj5().length
if(D.b.gS(w.gj5())!==d)w.gj5().push(d)
return d},
atE(d,e,f,g,h){var w,v,u=this,t=null
switch(f.a){case 0:if(h==null){w=D.d.eB(d*g/8)
v=new A.CG($,w,t,d,e,g)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}else{w=D.d.eB(d/8)
v=new A.CG($,w,h,d,e,1)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}break
case 1:if(h==null){w=D.d.eB(d*(g<<1>>>0)/8)
v=new A.CI($,w,t,d,e,g)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}else{w=D.d.eB(d/4)
v=new A.CI($,w,h,d,e,1)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}break
case 2:if(h==null){if(g===2)w=d
else if(g===4)w=d*2
else w=g===3?D.d.eB(d*1.5):D.d.eB(d/2)
v=new A.CK($,w,t,d,e,g)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}else{w=D.d.eB(d/2)
v=new A.CK($,w,h,d,e,1)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}break
case 3:if(h==null)u.a=A.bkR(d,e,g)
else u.a=new A.CL(new Uint8Array(d*e),h,d,e,1)
break
case 4:w=d*e
if(h==null)u.a=new A.CH(new Uint16Array(w*g),t,d,e,g)
else u.a=new A.CH(new Uint16Array(w),h,d,e,1)
break
case 5:u.a=A.bBu(d,e,g)
break
case 6:u.a=new A.L8(new Int8Array(d*e*g),d,e,g)
break
case 7:u.a=new A.L6(new Int16Array(d*e*g),d,e,g)
break
case 8:u.a=new A.L7(new Int32Array(d*e*g),d,e,g)
break
case 9:u.a=A.bBs(d,e,g)
break
case 10:u.a=A.bBt(d,e,g)
break
case 11:u.a=new A.L5(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var w=this
return"Image("+w.gdX()+", "+w.gbd()+", "+w.gc2().b+", "+w.gvv()+")"},
gdX(){var w=this.a
w=w==null?null:w.a
return w==null?0:w},
gbd(){var w=this.a
w=w==null?null:w.b
return w==null?0:w},
gc2(){var w=this.a
w=w==null?null:w.gc2()
return w==null?B.C:w},
aj4(d,e){var w=this,v=w.b;(v==null?w.b=C.x(x.N,x.I):v).m(0,d,e)
if(w.b.a===0)w.b=null},
gR(d){var w=this.a
return w.gR(w)},
ghx(d){var w=this.a
w=w==null?null:w.ghx(w)
if(w==null)w=new Uint8Array(0).buffer
return w},
gvv(){var w=this.a
w=w==null?null:w.gdn()
w=w==null?null:w.b
if(w==null){w=this.a
w=w==null?null:w.c}return w==null?0:w},
gUK(){var w=this.a
return(w==null?null:w.gdn())!=null},
ad3(d,e){return d>=0&&e>=0&&d<this.gdX()&&e<this.gbd()},
f8(d,e,f){var w=this.a
w=w==null?null:w.f8(d,e,f)
return w==null?new A.fY():w},
Xd(d,e){return this.f8(d,e,null)},
ahC(d,e){var w=!0
if(d<this.gdX())w=e>=this.gbd()
if(w)return new A.fY()
return this.f8(d,e,null)},
MG(d,e,f){var w
if(f.ge1().gdn()!=null)if(this.gUK()){w=this.a
if(w!=null)w.d6(d,e,f.gda(),0,0)
return}w=this.a
if(w!=null)w.hF(d,e,f.gaw(),f.gaJ(),f.gaP(),f.gaO())},
gbh(){var w=this.a
w=w==null?null:w.gbh()
return w==null?0:w},
k5(d,e){var w=this.a
return w==null?null:w.k5(0,e)},
Y(d){return this.k5(0,null)},
aa6(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a6==null)a6=a3.gc2()
if(a7==null)a7=a3.gvv()
a5=B.Ht.i(0,a6)
if(a6.a<3)a3.gc2()
w=!1
if(a6===a3.gc2())if(a7===a3.gvv()){v=a3.a
w=(v==null?a4:v.gdn())==null}if(w)return A.a2K(a3,!1,!1)
for(w=a3.gj5(),v=w.length,u=x.N,t=x.p,s=a4,r=0;r<w.length;w.length===v||(0,C.H)(w),++r,s=i){q=w[r]
p=q.a
o=p==null
n=o?a4:p.a
if(n==null)n=0
p=o?a4:p.b
if(p==null)p=0
o=q.e
o=o==null?a4:A.axV(o)
m=q.c
if(m==null)m=a4
else{l=m.a
k=m.b
m=m.c
m=new A.KZ(l,k,new Uint8Array(m.subarray(0,C.l7(0,a4,m.length))))}l=q.w
k=q.r
j=A.ek(a4,o,a6,q.y,l,p,m,k,a7,a4,B.C,n,!1)
p=q.d
j.d=p!=null?C.tL(p,u,u):a4
if(s!=null){s.pJ(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.gdn()
p=j.a
p=p==null?a4:p.gdn()
g=p==null?a4:p.gc2()
if(g==null)g=a6
p=q.a
if(h!=null){f=C.x(t,t)
e=p==null?a4:p.f8(0,0,a4)
if(e==null)e=new A.fY()
for(p=j.a,p=p.gR(p),d=a4,a0=0;p.p();){a1=p.gK()
a2=A.bsA(D.d.fj(e.gf3()*255),D.d.fj(e.geT()*255),D.d.fj(e.geY()*255),0)
if(f.a5(a2)){o=f.i(0,a2)
o.toString
a1.sda(o)}else{f.m(0,a2,a0)
a1.sda(a0)
d=A.bgi(e,a5,g,a7,d)
h.md(a0,d.gaw(),d.gaJ(),d.gaP());++a0}e.p()}}else{e=p==null?a4:p.f8(0,0,a4)
if(e==null)e=new A.fY()
for(p=j.a,p=p.gR(p);p.p();){A.bgi(e,a5,a4,a4,p.gK())
e.p()}}}s.toString
return s},
aOC(d){return this.aa6(null,d,null)},
aa5(d){return this.aa6(null,null,d)},
aM3(d){var w,v,u,t
if(this.d==null){w=x.N
this.d=C.x(w,w)}for(w=C.eA(d,d.r,C.j(d).c);w.p();){v=w.d
u=this.d
u.toString
t=d.i(0,v)
t.toString
u.m(0,v,t)}},
atH(d,e,f){var w,v=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:w=d===B.bg?v:256
return new A.or(new Uint8Array(w*f),w,f)
case 4:w=d===B.bg?v:256
return new A.a6R(new Uint16Array(w*f),w,f)
case 5:w=d===B.bg?v:256
return new A.a6S(new Uint32Array(w*f),w,f)
case 6:w=d===B.bg?v:256
return new A.a6Q(new Int8Array(w*f),w,f)
case 7:w=d===B.bg?v:256
return new A.a6O(new Int16Array(w*f),w,f)
case 8:w=d===B.bg?v:256
return new A.a6P(new Int32Array(w*f),w,f)
case 9:w=d===B.bg?v:256
return new A.a6L(new Uint16Array(w*f),w,f)
case 10:w=d===B.bg?v:256
return new A.a6M(new Float32Array(w*f),w,f)
case 11:w=d===B.bg?v:256
return new A.a6N(new Float64Array(w*f),w,f)}}}
A.i1.prototype={
gdn(){return null}}
A.CE.prototype={
mx(d){var w=this,v=w.d
if(d)v=new Uint16Array(v.length)
else v=new Uint16Array(C.bo(v))
return new A.CE(v,w.a,w.b,w.c)},
gc2(){return B.dU},
ghx(d){return this.d.buffer},
gR(d){return A.bdZ(this)},
mc(d,e,f,g,h){return A.mR(A.bdZ(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gbh(){return 1},
f8(d,e,f){if(f==null||!(f instanceof A.yj)||f.d!==this)f=A.bdZ(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=A.e9(f)},
d6(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=A.e9(f)
if(w>1){u[v+1]=A.e9(g)
if(w>2)u[v+2]=A.e9(h)}},
hF(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=A.e9(f)
if(w>1){u[v+1]=A.e9(g)
if(w>2){u[v+2]=A.e9(h)
if(w>3)u[v+3]=A.e9(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){}}
A.CF.prototype={
mx(d){var w=this,v=w.d
if(d)v=new Float32Array(v.length)
else v=new Float32Array(C.bo(v))
return new A.CF(v,w.a,w.b,w.c)},
gc2(){return B.eB},
ghx(d){return this.d.buffer},
gR(d){return A.be_(this)},
mc(d,e,f,g,h){return A.mR(A.be_(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gbh(){return 1},
f8(d,e,f){if(f==null||!(f instanceof A.yk)||f.d!==this)f=A.be_(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=f},
d6(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2)u[v+2]=h}},
hF(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2){u[v+2]=h
if(w>3)u[v+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){}}
A.L5.prototype={
mx(d){var w=this,v=w.d
if(d)v=new Float64Array(v.length)
else v=new Float64Array(C.bo(v))
return new A.L5(v,w.a,w.b,w.c)},
gc2(){return B.fJ},
ghx(d){return this.d.buffer},
gu(d){return this.d.byteLength},
gR(d){return A.be0(this)},
mc(d,e,f,g,h){return A.mR(A.be0(this),e,f,g,h)},
gbh(){return 1},
f8(d,e,f){if(f==null||!(f instanceof A.yl)||f.d!==this)f=A.be0(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=f},
d6(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2)u[v+2]=h}},
hF(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2){u[v+2]=h
if(w>3)u[v+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){}}
A.L6.prototype={
mx(d){var w=this,v=w.d
if(d)v=new Int16Array(v.length)
else v=new Int16Array(C.bo(v))
return new A.L6(v,w.a,w.b,w.c)},
gc2(){return B.fL},
ghx(d){return this.d.buffer},
gR(d){return A.be1(this)},
mc(d,e,f,g,h){return A.mR(A.be1(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gbh(){return 32767},
f8(d,e,f){if(f==null||!(f instanceof A.ym)||f.d!==this)f=A.be1(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.d.C(f)},
d6(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2)u[v+2]=D.d.C(h)}},
hF(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2){u[v+2]=D.d.C(h)
if(w>3)u[v+3]=D.d.C(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){}}
A.L7.prototype={
mx(d){var w=this,v=w.d
if(d)v=new Int32Array(v.length)
else v=new Int32Array(C.bo(v))
return new A.L7(v,w.a,w.b,w.c)},
gc2(){return B.fM},
ghx(d){return this.d.buffer},
gR(d){return A.be2(this)},
mc(d,e,f,g,h){return A.mR(A.be2(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gbh(){return 2147483647},
f8(d,e,f){if(f==null||!(f instanceof A.yn)||f.d!==this)f=A.be2(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.d.C(f)},
d6(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2)u[v+2]=D.d.C(h)}},
hF(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2){u[v+2]=D.d.C(h)
if(w>3)u[v+3]=D.d.C(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){}}
A.L8.prototype={
mx(d){var w=this,v=w.d
if(d)v=new Int8Array(v.length)
else v=new Int8Array(C.bo(v))
return new A.L8(v,w.a,w.b,w.c)},
gc2(){return B.fK},
ghx(d){return this.d.buffer},
gR(d){return A.be3(this)},
mc(d,e,f,g,h){return A.mR(A.be3(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gbh(){return 127},
f8(d,e,f){if(f==null||!(f instanceof A.yo)||f.d!==this)f=A.be3(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*(this.a*w)+d*w]=D.d.C(f)},
d6(d,e,f,g,h){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2)u[v+2]=D.d.C(h)}},
hF(d,e,f,g,h,i){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2){u[v+2]=D.d.C(h)
if(w>3)u[v+3]=D.d.C(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){}}
A.CG.prototype={
b0M(d,e,f){var w=Math.max(this.e*e,1)
w=new Uint8Array(w)
this.d!==$&&C.bu()
this.d=w},
mx(d){var w,v=this,u=v.d
if(d){u===$&&C.b()
u=new Uint8Array(u.length)}else{u===$&&C.b()
u=new Uint8Array(C.bo(u))}w=v.f
w=w==null?null:w.cj()
return new A.CG(u,v.e,w,v.a,v.b,v.c)},
gc2(){return B.d0},
gu(d){var w=this.d
w===$&&C.b()
return w.byteLength},
gbh(){var w=this.f
w=w==null?null:w.gbh()
return w==null?1:w},
ghx(d){var w=this.d
w===$&&C.b()
return w.buffer},
gR(d){return A.Nf(this)},
mc(d,e,f,g,h){return A.mR(A.Nf(this),e,f,g,h)},
f8(d,e,f){if(f==null||!(f instanceof A.yp)||f.f!==this)f=A.Nf(this)
f.e4(d,e)
return f},
jR(d,e,f){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Nf(v):w).e4(d,e)
v.r.hJ(0,f)},
d6(d,e,f,g,h){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Nf(v):w).e4(d,e)
v.r.hG(f,g,h)},
hF(d,e,f,g,h,i){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Nf(v):w).e4(d,e)
v.r.ik(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){},
gdn(){return this.f}}
A.CH.prototype={
mx(d){var w,v=this,u=v.d
if(d)u=new Uint16Array(u.length)
else u=new Uint16Array(C.bo(u))
w=v.e
w=w==null?null:w.cj()
return new A.CH(u,w,v.a,v.b,v.c)},
gc2(){return B.bg},
ghx(d){return this.d.buffer},
gbh(){var w=this.e
w=w==null?null:w.gbh()
return w==null?65535:w},
gR(d){return A.be4(this)},
mc(d,e,f,g,h){return A.mR(A.be4(this),e,f,g,h)},
gu(d){return this.d.byteLength},
f8(d,e,f){if(f==null||!(f instanceof A.yq)||f.d!==this)f=A.be4(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.d.C(f)},
d6(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2)u[v+2]=D.d.C(h)}},
hF(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2){u[v+2]=D.d.C(h)
if(w>3)u[v+3]=D.d.C(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){},
gdn(){return this.e}}
A.CI.prototype={
b0N(d,e,f){var w=Math.max(this.e*e,1)
w=new Uint8Array(w)
this.d!==$&&C.bu()
this.d=w},
mx(d){var w,v=this,u=v.d
if(d){u===$&&C.b()
u=new Uint8Array(u.length)}else{u===$&&C.b()
u=new Uint8Array(C.bo(u))}w=v.f
w=w==null?null:w.cj()
return new A.CI(u,v.e,w,v.a,v.b,v.c)},
gc2(){return B.du},
ghx(d){var w=this.d
w===$&&C.b()
return w.buffer},
gR(d){return A.Ng(this)},
mc(d,e,f,g,h){return A.mR(A.Ng(this),e,f,g,h)},
gu(d){var w=this.d
w===$&&C.b()
return w.byteLength},
gbh(){var w=this.f
w=w==null?null:w.gbh()
return w==null?3:w},
f8(d,e,f){if(f==null||!(f instanceof A.yr)||f.f!==this)f=A.Ng(this)
f.e4(d,e)
return f},
jR(d,e,f){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Ng(v):w).e4(d,e)
v.r.hK(0,f)},
d6(d,e,f,g,h){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Ng(v):w).e4(d,e)
v.r.hG(f,g,h)},
hF(d,e,f,g,h,i){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Ng(v):w).e4(d,e)
v.r.ik(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){},
gdn(){return this.f}}
A.CJ.prototype={
mx(d){var w=this,v=w.d
if(d)v=new Uint32Array(v.length)
else v=new Uint32Array(C.bo(v))
return new A.CJ(v,w.a,w.b,w.c)},
gc2(){return B.eC},
ghx(d){return this.d.buffer},
gbh(){return 4294967295},
gR(d){return A.be5(this)},
mc(d,e,f,g,h){return A.mR(A.be5(this),e,f,g,h)},
gu(d){return this.d.byteLength},
f8(d,e,f){if(f==null||!(f instanceof A.ys)||f.d!==this)f=A.be5(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.d.C(f)},
d6(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2)u[v+2]=D.d.C(h)}},
hF(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2){u[v+2]=D.d.C(h)
if(w>3)u[v+3]=D.d.C(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){}}
A.CK.prototype={
b0O(d,e,f){var w=Math.max(this.e*e,1)
w=new Uint8Array(w)
this.d!==$&&C.bu()
this.d=w},
mx(d){var w,v=this,u=v.d
if(d){u===$&&C.b()
u=new Uint8Array(u.length)}else{u===$&&C.b()
u=new Uint8Array(C.bo(u))}w=v.f
w=w==null?null:w.cj()
return new A.CK(u,v.e,w,v.a,v.b,v.c)},
gc2(){return B.dv},
ghx(d){var w=this.d
w===$&&C.b()
return w.buffer},
gR(d){return A.Nh(this)},
mc(d,e,f,g,h){return A.mR(A.Nh(this),e,f,g,h)},
gu(d){var w=this.d
w===$&&C.b()
return w.byteLength},
gbh(){var w=this.f
w=w==null?null:w.gbh()
return w==null?15:w},
f8(d,e,f){if(f==null||!(f instanceof A.yt)||f.e!==this)f=A.Nh(this)
f.e4(d,e)
return f},
jR(d,e,f){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Nh(v):w).e4(d,e)
v.r.hL(0,f)},
d6(d,e,f,g,h){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Nh(v):w).e4(d,e)
v.r.hG(f,g,h)},
hF(d,e,f,g,h,i){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Nh(v):w).e4(d,e)
v.r.ik(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){},
gdn(){return this.f}}
A.CL.prototype={
mx(d){var w,v=this,u=v.d
if(d)u=new Uint8Array(u.length)
else u=new Uint8Array(C.bo(u))
w=v.e
w=w==null?null:w.cj()
return new A.CL(u,w,v.a,v.b,v.c)},
gc2(){return B.C},
ghx(d){return this.d.buffer},
gR(d){return A.aJk(this)},
mc(d,e,f,g,h){return A.mR(A.aJk(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gbh(){var w=this.e
w=w==null?null:w.gbh()
return w==null?255:w},
f8(d,e,f){if(f==null||!(f instanceof A.yu)||f.d!==this)f=A.aJk(this)
f.e4(d,e)
return f},
jR(d,e,f){var w=this.c
this.d[e*(this.a*w)+d*w]=D.d.C(f)},
d6(d,e,f,g,h){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2)u[v+2]=D.d.C(h)}},
hF(d,e,f,g,h,i){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.d.C(f)
if(w>1){u[v+1]=D.d.C(g)
if(w>2){u[v+2]=D.d.C(h)
if(w>3)u[v+3]=D.d.C(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
k5(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=e==null?n:A.bgi(e,n,B.C,n,n),l=o.c
if(l===1){w=m==null?0:D.c.aZ(C.aE(m.gaw()),0,255)
l=o.d
D.w.jy(l,0,l.length,w)}else if(l===2){l=m==null
w=l?0:D.c.aZ(C.aE(m.gaw()),0,255)
v=l?0:D.c.aZ(C.aE(m.gaJ()),0,255)
u=C.blV(o.d.buffer,0,n)
D.f0.jy(u,0,u.length,(v<<8|w)>>>0)}else if(l===4){l=m==null
w=l?0:D.c.aZ(C.aE(m.gaw()),0,255)
v=l?0:D.c.aZ(C.aE(m.gaJ()),0,255)
t=l?0:D.c.aZ(C.aE(m.gaP()),0,255)
s=l?0:D.c.aZ(C.aE(m.gaO()),0,255)
r=C.k1(o.d.buffer,0,n)
D.bA.jy(r,0,r.length,(s<<24|t<<16|v<<8|w)>>>0)}else{l=m==null
w=l?0:D.c.aZ(C.aE(m.gaw()),0,255)
v=l?0:D.c.aZ(C.aE(m.gaJ()),0,255)
t=l?0:D.c.aZ(C.aE(m.gaP()),0,255)
for(q=A.aJk(o),l=q.d,p=l.c>0,l=l.d;q.p();){if(p)l[q.c]=D.d.C(D.c.aZ(w,0,255))
q.saJ(v)
q.saP(t)}}},
gdn(){return this.e}}
A.aIV.prototype={}
A.a6L.prototype={
cj(){return new A.a6L(new Uint16Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.dU},
gbh(){return 1},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=A.e9(f)},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=A.e9(e)
if(v>1){w[d+1]=A.e9(f)
if(v>2)w[d+2]=A.e9(g)}},
li(d,e){var w,v=this.b
if(e<v){v=this.c[d*v+e]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
kn(d){var w=this.c[d*this.b],v=$.e8
return(v!=null?v:A.eO())[w]},
km(d){var w,v=this.b
if(v<2)return 0
v=this.c[d*v+1]
w=$.e8
return(w!=null?w:A.eO())[v]},
kl(d){var w,v=this.b
if(v<3)return 0
v=this.c[d*v+2]
w=$.e8
return(w!=null?w:A.eO())[v]},
lj(d){var w,v=this.b
if(v<4)return 0
v=this.c[d*v+3]
w=$.e8
return(w!=null?w:A.eO())[v]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.a6M.prototype={
cj(){return new A.a6M(new Float32Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.eB},
gbh(){return 1},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=f},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=e
if(v>1){w[d+1]=f
if(v>2)w[d+2]=g}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){return this.c[d*this.b]},
km(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kl(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
lj(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.a6N.prototype={
cj(){return new A.a6N(new Float64Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.fJ},
gbh(){return 1},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=f},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=e
if(v>1){w[d+1]=f
if(v>2)w[d+2]=g}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){return this.c[d*this.b]},
km(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kl(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
lj(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.a6O.prototype={
cj(){return new A.a6O(new Int16Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.fL},
gbh(){return 32767},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=D.c.C(f)},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.d.C(e)
if(v>1){w[d+1]=D.d.C(f)
if(v>2)w[d+2]=D.d.C(g)}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){return this.c[d*this.b]},
km(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kl(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
lj(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.a6P.prototype={
cj(){return new A.a6P(new Int32Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.fM},
gbh(){return 2147483647},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=D.c.C(f)},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.d.C(e)
if(v>1){w[d+1]=D.d.C(f)
if(v>2)w[d+2]=D.d.C(g)}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){return this.c[d*this.b]},
km(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kl(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
lj(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.a6Q.prototype={
cj(){return new A.a6Q(new Int8Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.fK},
gbh(){return 127},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=D.c.C(f)},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.d.C(e)
if(v>1){w[d+1]=D.d.C(f)
if(v>2)w[d+2]=D.d.C(g)}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){return this.c[d*this.b]},
km(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kl(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
lj(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.a6R.prototype={
cj(){return new A.a6R(new Uint16Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.bg},
gbh(){return 65535},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=D.c.C(f)},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.d.C(e)
if(v>1){w[d+1]=D.d.C(f)
if(v>2)w[d+2]=D.d.C(g)}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){return this.c[d*this.b]},
km(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kl(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
lj(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.a6S.prototype={
cj(){return new A.a6S(new Uint32Array(C.bo(this.c)),this.a,this.b)},
gc2(){return B.eC},
gbh(){return 4294967295},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=D.c.C(f)},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.d.C(e)
if(v>1){w[d+1]=D.d.C(f)
if(v>2)w[d+2]=D.d.C(g)}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){return this.c[d*this.b]},
km(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kl(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
lj(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.or.prototype={
cj(){return A.bmg(this)},
gc2(){return B.C},
gbh(){return 255},
df(d,e,f){var w=this.b
if(e<w)this.c[d*w+e]=D.c.C(f)},
md(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.d.C(e)
if(v>1){w[d+1]=D.d.C(f)
if(v>2)w[d+2]=D.d.C(g)}},
FC(d,e,f,g,h){var w,v=this.b
d*=v
w=this.c
w[d]=D.c.C(e)
if(v>1){w[d+1]=D.c.C(f)
if(v>2){w[d+2]=D.c.C(g)
if(v>3)w[d+3]=D.c.C(h)}}},
li(d,e){var w=this.b
return e<w?this.c[d*w+e]:0},
kn(d){var w
d*=this.b
w=this.c
if(d>=w.length)return 0
return w[d]},
km(d){var w=this.b
if(w<2)return 0
d*=w
w=this.c
if(d>=w.length)return 0
return w[d+1]},
kl(d){var w=this.b
if(w<3)return 0
d*=w
w=this.c
if(d>=w.length)return 0
return w[d+2]},
lj(d){var w=this.b
if(w<4)return 255
d*=w
w=this.c
if(d>=w.length)return 0
return w[d+3]},
ob(d,e){return this.df(d,0,e)},
oa(d,e){return this.df(d,1,e)},
o9(d,e){return this.df(d,2,e)},
o8(d,e){return this.df(d,3,e)}}
A.yj.prototype={
cj(){var w=this
return new A.yj(w.a,w.b,w.c,w.d)},
gc2(){return B.dU},
gu(d){return this.d.c},
gdn(){return null},
gbh(){return 1},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
i(d,e){var w,v=this.d
if(e<v.c){v=v.d[this.c+e]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=A.e9(f)},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w,v=this.d
if(v.c>0){v=v.d[this.c]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=A.e9(d)},
gaJ(){var w,v=this.d
if(v.c>1){v=v.d[this.c+1]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=A.e9(d)},
gaP(){var w,v=this.d
if(v.c>2){v=v.d[this.c+2]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=A.e9(d)},
gaO(){var w,v=this.d
if(v.c>3){v=v.d[this.c+3]
w=$.e8
v=(w!=null?w:A.eO())[v]}else v=0
return v},
saO(d){var w,v=this.d
if(v.c>3){w=this.gaJ()
v.d[this.c+3]=A.e9(w)}},
gf3(){return this.gaw()/1},
sf3(d){this.saw(d)},
geT(){return this.gaJ()/1},
seT(d){this.saJ(d)},
geY(){return this.gaP()/1},
seY(d){this.saP(d)},
gfc(){return this.gaO()/1},
sfc(d){this.saO(d)},
gh1(){return A.fd(this)},
fo(d){var w=this
if(w.d.c>0){w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())}},
hG(d,e,f){var w=this,v=w.d,u=v.c
if(u>0){v=v.d
v[w.c]=A.e9(d)
if(u>1){v[w.c+1]=A.e9(e)
if(u>2)v[w.c+2]=A.e9(f)}}},
ik(d,e,f,g){var w=this,v=w.d,u=v.c
if(u>0){v=v.d
v[w.c]=A.e9(d)
if(u>1){v[w.c+1]=A.e9(e)
if(u>2){v[w.c+2]=A.e9(f)
if(u>3)v[w.c+3]=A.e9(g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yj)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=J.aS(e)
v=t.d
u=v.c
if(w.gu(e)!==u)return!1
v=v.d
if(v[t.c]!==w.i(e,0))return!1
if(u>1){if(v[t.c+1]!==w.i(e,1))return!1
if(u>2){if(v[t.c+2]!==w.i(e,2))return!1
if(u>3)if(v[t.c+3]!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.yk.prototype={
cj(){var w=this
return new A.yk(w.a,w.b,w.c,w.d)},
gu(d){return this.d.c},
gdn(){return null},
gbh(){return 1},
gc2(){return B.eB},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
i(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=f},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w=this.d
return w.c>0?w.d[this.c]:0},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=d},
gaJ(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=d},
gaP(){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=d},
gaO(){var w=this.d
return w.c>3?w.d[this.c+3]:1},
saO(d){var w=this.d
if(w.c>3)w.d[this.c+3]=d},
gf3(){return this.gaw()/1},
sf3(d){this.saw(d)},
geT(){return this.gaJ()/1},
seT(d){this.saJ(d)},
geY(){return this.gaP()/1},
seY(d){this.saP(d)},
gfc(){return this.gaO()/1},
sfc(d){this.saO(d)},
gh1(){return A.fd(this)},
fo(d){var w=this
w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())},
hG(d,e,f){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2)v[u+2]=f}},
ik(d,e,f,g){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2){v[u+2]=f
if(w>3)v[u+3]=g}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yk)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=J.aS(e)
v=t.d
u=v.c
if(w.gu(e)!==u)return!1
v=v.d
if(v[t.c]!==w.i(e,0))return!1
if(u>1){if(v[t.c+1]!==w.i(e,1))return!1
if(u>2){if(v[t.c+2]!==w.i(e,2))return!1
if(u>3)if(v[t.c+3]!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.yl.prototype={
cj(){var w=this
return new A.yl(w.a,w.b,w.c,w.d)},
gu(d){return this.d.c},
gdn(){return null},
gbh(){return 1},
gc2(){return B.fJ},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
i(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=f},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w=this.d
return w.c>0?w.d[this.c]:0},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=d},
gaJ(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=d},
gaP(){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=d},
gaO(){var w=this.d
return w.c>3?w.d[this.c+3]:0},
saO(d){var w=this.d
if(w.c>3)w.d[this.c+3]=d},
gf3(){return this.gaw()/1},
sf3(d){this.saw(d)},
geT(){return this.gaJ()/1},
seT(d){this.saJ(d)},
geY(){return this.gaP()/1},
seY(d){this.saP(d)},
gfc(){return this.gaO()/1},
sfc(d){this.saO(d)},
gh1(){return A.fd(this)},
fo(d){var w=this
w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())},
hG(d,e,f){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2)v[u+2]=f}},
ik(d,e,f,g){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2){v[u+2]=f
if(w>3)v[u+3]=g}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yl)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=J.aS(e)
v=t.d
u=v.c
if(w.gu(e)!==u)return!1
v=v.d
if(v[t.c]!==w.i(e,0))return!1
if(u>1){if(v[t.c+1]!==w.i(e,1))return!1
if(u>2){if(v[t.c+2]!==w.i(e,2))return!1
if(u>3)if(v[t.c+3]!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.ym.prototype={
cj(){var w=this
return new A.ym(w.a,w.b,w.c,w.d)},
gu(d){return this.d.c},
gdn(){return null},
gbh(){return 32767},
gc2(){return B.fL},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
i(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.d.C(f)},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w=this.d
return w.c>0?w.d[this.c]:0},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=D.d.C(d)},
gaJ(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.d.C(d)},
gaP(){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=D.d.C(d)},
gaO(){var w=this.d
return w.c>3?w.d[this.c+3]:0},
saO(d){var w=this.d
if(w.c>3)w.d[this.c+3]=D.d.C(d)},
gf3(){return this.gaw()/32767},
sf3(d){this.saw(d*32767)},
geT(){return this.gaJ()/32767},
seT(d){this.saJ(d*32767)},
geY(){return this.gaP()/32767},
seY(d){this.saP(d*32767)},
gfc(){return this.gaO()/32767},
sfc(d){this.saO(d*32767)},
gh1(){return A.fd(this)},
fo(d){var w=this
w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())},
hG(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2)v[w+2]=D.c.C(f)}}},
ik(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2){v[w+2]=D.c.C(f)
if(u>3)v[w+3]=D.c.C(g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.ym)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=J.aS(e)
v=t.d
u=v.c
if(w.gu(e)!==u)return!1
v=v.d
if(v[t.c]!==w.i(e,0))return!1
if(u>1){if(v[t.c+1]!==w.i(e,1))return!1
if(u>2){if(v[t.c+2]!==w.i(e,2))return!1
if(u>3)if(v[t.c+3]!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.yn.prototype={
cj(){var w=this
return new A.yn(w.a,w.b,w.c,w.d)},
gu(d){return this.d.c},
gdn(){return null},
gbh(){return 2147483647},
gc2(){return B.fM},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
i(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.d.C(f)},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w=this.d
return w.c>0?w.d[this.c]:0},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=D.d.C(d)},
gaJ(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.d.C(d)},
gaP(){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=D.d.C(d)},
gaO(){var w=this.d
return w.c>3?w.d[this.c+3]:0},
saO(d){var w=this.d
if(w.c>3)w.d[this.c+3]=D.d.C(d)},
gf3(){return this.gaw()/2147483647},
sf3(d){this.saw(d*2147483647)},
geT(){return this.gaJ()/2147483647},
seT(d){this.saJ(d*2147483647)},
geY(){return this.gaP()/2147483647},
seY(d){this.saP(d*2147483647)},
gfc(){return this.gaO()/2147483647},
sfc(d){this.saO(d*2147483647)},
gh1(){return A.fd(this)},
fo(d){var w=this
w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())},
hG(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2)v[w+2]=D.c.C(f)}}},
ik(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2){v[w+2]=D.c.C(f)
if(u>3)v[w+3]=D.c.C(g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yn)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=J.aS(e)
v=t.d
u=v.c
if(w.gu(e)!==u)return!1
v=v.d
if(v[t.c]!==w.i(e,0))return!1
if(u>1){if(v[t.c+1]!==w.i(e,1))return!1
if(u>2){if(v[t.c+2]!==w.i(e,2))return!1
if(u>3)if(v[t.c+3]!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.yo.prototype={
cj(){var w=this
return new A.yo(w.a,w.b,w.c,w.d)},
gu(d){return this.d.c},
gdn(){return null},
gbh(){return 127},
gc2(){return B.fK},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
i(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.d.C(f)},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w=this.d
return w.c>0?w.d[this.c]:0},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=D.d.C(d)},
gaJ(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.d.C(d)},
gaP(){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=D.d.C(d)},
gaO(){var w=this.d
return w.c>3?w.d[this.c+3]:0},
saO(d){var w=this.d
if(w.c>3)w.d[this.c+3]=D.d.C(d)},
gf3(){return this.gaw()/127},
sf3(d){this.saw(d*127)},
geT(){return this.gaJ()/127},
seT(d){this.saJ(d*127)},
geY(){return this.gaP()/127},
seY(d){this.saP(d*127)},
gfc(){return this.gaO()/127},
sfc(d){this.saO(d*127)},
gh1(){return A.fd(this)},
fo(d){var w=this
w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())},
hG(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2)v[w+2]=D.c.C(f)}}},
ik(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2){v[w+2]=D.c.C(f)
if(u>3)v[w+3]=D.c.C(g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yo)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=J.aS(e)
v=t.d
u=v.c
if(w.gu(e)!==u)return!1
v=v.d
if(v[t.c]!==w.i(e,0))return!1
if(u>1){if(v[t.c+1]!==w.i(e,1))return!1
if(u>2){if(v[t.c+2]!==w.i(e,2))return!1
if(u>3)if(v[t.c+3]!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.aJj.prototype={
p(){var w=this,v=w.a
if(v.gjc()+1>w.d){v.e4(w.b,v.gjN()+1)
return v.gjN()<=w.e}return v.p()},
gK(){return this.a}}
A.yp.prototype={
cj(){var w=this
return new A.yp(w.a,w.b,w.c,w.d,w.e,w.f)},
gu(d){var w=this.f,v=w.f
v=v==null?null:v.b
return v==null?w.c:v},
gdn(){return this.f.f},
gbh(){return this.f.gbh()},
gc2(){return B.d0},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.f
v=e*w.e
u.e=v
w=d*w.c
u.c=v+D.c.H(w,3)
u.d=w&7},
gK(){return this},
p(){var w,v=this,u=++v.a,t=v.f
if(u===t.a){v.a=0
u=++v.b
v.d=0;++v.c
v.e=v.e+t.e
return u<t.b}w=t.c
if(t.f!=null||w===1){if(++v.d>7){v.d=0;++v.c}}else{u*=w
v.d=u&7
v.c=v.e+D.c.H(u,3)}u=v.c
t=t.d
t===$&&C.b()
return u<t.byteLength},
Qa(d){var w,v=this.c,u=7-(this.d+d)
if(u<0){u+=8;++v}w=this.f.d
w===$&&C.b()
if(v>=w.length)return 0
return D.c.dG(w[v],u)&1},
lv(d){var w=this.f,v=w.f
if(v==null)w=w.c>d?this.Qa(d):0
else w=v.li(this.Qa(0),d)
return w},
hJ(d,e){var w,v,u,t,s,r,q=this.f
if(d>=q.c)return
w=this.c
v=7-(this.d+d)
if(v<0){++w
v+=8}u=q.d
u===$&&C.b()
t=u[w]
s=D.c.aZ(D.d.C(e),0,1)
r=B.ahM[v]
u=D.c.dA(s,v)
q.d[w]=(t&r|u)>>>0},
i(d,e){return this.lv(e)},
m(d,e,f){return this.hJ(e,f)},
gda(){return this.Qa(0)},
sda(d){this.hJ(0,d)},
gaw(){return this.lv(0)},
saw(d){this.hJ(0,d)},
gaJ(){return this.lv(1)},
saJ(d){this.hJ(1,d)},
gaP(){return this.lv(2)},
saP(d){this.hJ(2,d)},
gaO(){return this.lv(3)},
saO(d){this.hJ(3,d)},
gf3(){return this.lv(0)/this.f.gbh()},
sf3(d){this.hJ(0,d*this.f.gbh())},
geT(){return this.lv(1)/this.f.gbh()},
seT(d){this.hJ(1,d*this.f.gbh())},
geY(){return this.lv(2)/this.f.gbh()},
seY(d){this.hJ(2,d*this.f.gbh())},
gfc(){return this.lv(3)/this.f.gbh()},
sfc(d){this.hJ(3,d*this.f.gbh())},
gh1(){return A.fd(this)},
fo(d){var w=this
w.hJ(0,d.gaw())
w.hJ(1,d.gaJ())
w.hJ(2,d.gaP())
w.hJ(3,d.gaO())},
hG(d,e,f){var w=this,v=w.f.c
if(v>0){w.hJ(0,d)
if(v>1){w.hJ(1,e)
if(v>2)w.hJ(2,f)}}},
ik(d,e,f,g){var w=this,v=w.f.c
if(v>0){w.hJ(0,d)
if(v>1){w.hJ(1,e)
if(v>2){w.hJ(2,f)
if(v>3)w.hJ(3,g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yp)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=t.f
v=w.f
u=v!=null?v.b:w.c
w=J.aS(e)
if(w.gu(e)!==u)return!1
if(t.lv(0)!==w.i(e,0))return!1
if(u>1){if(t.lv(1)!==w.i(e,1))return!1
if(u>2){if(t.lv(2)!==w.i(e,2))return!1
if(u>3)if(t.lv(3)!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.f}}
A.yq.prototype={
cj(){var w=this
return new A.yq(w.a,w.b,w.c,w.d)},
gu(d){var w=this.d,v=w.e
v=v==null?null:v.b
return v==null?w.c:v},
gdn(){return this.d.e},
gbh(){return this.d.gbh()},
gc2(){return B.bg},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c
w+=u.e==null?u.c:1
v.c=w
return w<u.d.length},
eU(d){var w=this.d,v=w.e
if(v!=null)w=v.li(w.d[this.c],d)
else w=d<w.c?w.d[this.c+d]:0
return w},
i(d,e){return this.eU(e)},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.d.C(f)},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w=this.d,v=w.e
if(v==null)w=w.c>0?w.d[this.c]:0
else w=v.kn(w.d[this.c])
return w},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=D.d.C(d)},
gaJ(){var w=this.d,v=w.e
if(v==null)w=w.c>1?w.d[this.c+1]:0
else w=v.km(w.d[this.c])
return w},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.d.C(d)},
gaP(){var w=this.d,v=w.e
if(v==null)w=w.c>2?w.d[this.c+2]:0
else w=v.kl(w.d[this.c])
return w},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=D.d.C(d)},
gaO(){var w=this.d,v=w.e
if(v==null)w=w.c>3?w.d[this.c+3]:0
else w=v.lj(w.d[this.c])
return w},
saO(d){var w=this.d
if(w.c>3)w.d[this.c+3]=D.d.C(d)},
gf3(){return this.gaw()/this.d.gbh()},
sf3(d){this.saw(d*this.d.gbh())},
geT(){return this.gaJ()/this.d.gbh()},
seT(d){this.saJ(d*this.d.gbh())},
geY(){return this.gaP()/this.d.gbh()},
seY(d){this.saP(d*this.d.gbh())},
gfc(){return this.gaO()/this.d.gbh()},
sfc(d){this.saO(d*this.d.gbh())},
gh1(){return A.fd(this)},
fo(d){var w=this
w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())},
hG(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2)v[w+2]=D.c.C(f)}}},
ik(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2){v[w+2]=D.c.C(f)
if(u>3)v[w+3]=D.c.C(g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yq)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=t.d
v=w.e
u=v!=null?v.b:w.c
w=J.aS(e)
if(w.gu(e)!==u)return!1
if(t.eU(0)!==w.i(e,0))return!1
if(u>1){if(t.eU(1)!==w.i(e,1))return!1
if(u>2){if(t.eU(2)!==w.i(e,2))return!1
if(u>3)if(t.eU(3)!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.yr.prototype={
cj(){var w=this
return new A.yr(w.a,w.b,w.c,w.d,w.e,w.f)},
gu(d){var w=this.f,v=w.f
v=v==null?null:v.b
return v==null?w.c:v},
gdn(){return this.f.f},
gbh(){return this.f.gbh()},
gc2(){return B.du},
ga98(){var w=this.f
return w.f!=null?2:w.c<<1>>>0},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u,t=this
t.a=d
t.b=e
w=t.ga98()
v=t.b*t.f.e
t.e=v
u=t.a*w
t.c=v+D.c.H(u,3)
t.d=u&7},
gK(){return this},
p(){var w,v,u=this,t=u.f
if(++u.a===t.a){u.a=0
w=++u.b
u.d=0;++u.c
u.e=u.e+t.e
return w<t.b}if(t.f!=null||t.c===1){w=u.d+=2
if(w>7){u.d=0;++u.c}}else{v=u.ga98()
w=u.a*v
u.d=w&7
u.c=u.e+D.c.H(w,3)}w=u.c
t=t.d
t===$&&C.b()
return w<t.length},
Qb(d){var w,v=this.c,u=6-(this.d+(d<<1>>>0))
if(u<0){u+=8;++v}w=this.f.d
w===$&&C.b()
return D.c.dG(w[v],u)&3},
lw(d){var w=this.f,v=w.f
if(v==null)w=w.c>d?this.Qb(d):0
else w=v.li(this.Qb(0),d)
return w},
hK(d,e){var w,v,u,t,s,r,q=this.f
if(d>=q.c)return
w=this.c
v=6-(this.d+(d<<1>>>0))
if(v<0){++w
v+=8}u=q.d
u===$&&C.b()
t=u[w]
s=D.c.aZ(D.d.C(e),0,3)
r=B.a3U[D.c.H(v,1)]
u=D.c.dA(s,v)
q.d[w]=(t&r|u)>>>0},
i(d,e){return this.lw(e)},
m(d,e,f){return this.hK(e,f)},
gda(){return this.Qb(0)},
sda(d){this.hK(0,d)},
gaw(){return this.lw(0)},
saw(d){this.hK(0,d)},
gaJ(){return this.lw(1)},
saJ(d){this.hK(1,d)},
gaP(){return this.lw(2)},
saP(d){this.hK(2,d)},
gaO(){return this.lw(3)},
saO(d){this.hK(3,d)},
gf3(){return this.lw(0)/this.f.gbh()},
sf3(d){this.hK(0,d*this.f.gbh())},
geT(){return this.lw(1)/this.f.gbh()},
seT(d){this.hK(1,d*this.f.gbh())},
geY(){return this.lw(2)/this.f.gbh()},
seY(d){this.hK(2,d*this.f.gbh())},
gfc(){return this.lw(3)/this.f.gbh()},
sfc(d){this.hK(3,d*this.f.gbh())},
gh1(){return A.fd(this)},
fo(d){var w=this
w.hK(0,d.gaw())
w.hK(1,d.gaJ())
w.hK(2,d.gaP())
w.hK(3,d.gaO())},
hG(d,e,f){var w=this,v=w.f.c
if(v>0){w.hK(0,d)
if(v>1){w.hK(1,e)
if(v>2)w.hK(2,f)}}},
ik(d,e,f,g){var w=this,v=w.f.c
if(v>0){w.hK(0,d)
if(v>1){w.hK(1,e)
if(v>2){w.hK(2,f)
if(v>3)w.hK(3,g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yr)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=t.f
v=w.f
u=v!=null?v.b:w.c
w=J.aS(e)
if(w.gu(e)!==u)return!1
if(t.lw(0)!==w.i(e,0))return!1
if(u>1){if(t.lw(1)!==w.i(e,1))return!1
if(u>2){if(t.lw(2)!==w.i(e,2))return!1
if(u>3)if(t.lw(3)!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.f}}
A.ys.prototype={
cj(){var w=this
return new A.ys(w.a,w.b,w.c,w.d)},
gu(d){return this.d.c},
gdn(){return null},
gbh(){return 4294967295},
gc2(){return B.eC},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
i(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.d.C(f)},
gda(){return this.gaw()},
sda(d){this.saw(d)},
gaw(){var w=this.d
return w.c>0?w.d[this.c]:0},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=D.d.C(d)},
gaJ(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
saJ(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.d.C(d)},
gaP(){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saP(d){var w=this.d
if(w.c>2)w.d[this.c+2]=D.d.C(d)},
gaO(){var w=this.d
return w.c>3?w.d[this.c+3]:0},
saO(d){var w=this.d
if(w.c>3)w.d[this.c+3]=D.d.C(d)},
gf3(){return this.gaw()/4294967295},
sf3(d){this.saw(d*4294967295)},
geT(){return this.gaJ()/4294967295},
seT(d){this.saJ(d*4294967295)},
geY(){return this.gaP()/4294967295},
seY(d){this.saP(d*4294967295)},
gfc(){return this.gaO()/4294967295},
sfc(d){this.saO(d*4294967295)},
gh1(){return A.fd(this)},
fo(d){var w=this
w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())},
hG(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2)v[w+2]=D.c.C(f)}}},
ik(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2){v[w+2]=D.c.C(f)
if(u>3)v[w+3]=D.c.C(g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.ys)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=J.aS(e)
v=t.d
u=v.c
if(w.gu(e)!==u)return!1
v=v.d
if(v[t.c]!==w.i(e,0))return!1
if(u>1){if(v[t.c+1]!==w.i(e,1))return!1
if(u>2){if(v[t.c+2]!==w.i(e,2))return!1
if(u>3)if(v[t.c+3]!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.yt.prototype={
cj(){var w=this
return new A.yt(w.a,w.b,w.c,w.d,w.e)},
gu(d){var w=this.e,v=w.f
v=v==null?null:v.b
return v==null?w.c:v},
gdn(){return this.e.f},
gbh(){return this.e.gbh()},
gc2(){return B.dv},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u,t=this
t.a=d
t.b=e
w=t.e
v=w.c*4
u=w.e
if(v===4)w=e*u+D.c.H(d,1)
else if(v===8)w=e*w.a+d
else{w=e*u
w=v===16?w+(d<<1>>>0):w+D.c.H(d*v,3)}t.c=w
w=d*v
t.d=v>7?w&4:w&7},
gK(){return this},
p(){var w,v,u,t=this,s=t.e
if(++t.a===s.a){t.a=0
w=++t.b
t.d=0
t.c=w*s.e
return w<s.b}v=s.c
w=s.f!=null||v===1
u=t.d
if(w){w=u+4
t.d=w
if(w>7){t.d=0;++t.c}}else{w=t.d=u+(v<<2>>>0)
for(;w>7;){w-=8
t.d=w;++t.c}}w=t.c
s=s.d
s===$&&C.b()
return w<s.length},
Qc(d){var w,v=this.c,u=4-(this.d+(d<<2>>>0))
if(u<0){u+=8;++v}w=this.e.d
w===$&&C.b()
return D.c.dG(w[v],u)&15},
lx(d){var w=this.e,v=w.f
if(v==null)w=w.c>d?this.Qc(d):0
else w=v.li(this.Qc(0),d)
return w},
hL(d,e){var w,v,u,t,s,r,q=this.e
if(d>=q.c)return
w=this.c
v=4-(this.d+(d<<2>>>0))
if(v<0){v+=8;++w}u=q.d
u===$&&C.b()
t=u[w]
s=D.c.aZ(D.d.C(e),0,15)
r=v===4?15:240
u=D.c.dA(s,v)
q.d[w]=(t&r|u)>>>0},
i(d,e){return this.lx(e)},
m(d,e,f){return this.hL(e,f)},
gda(){return this.Qc(0)},
sda(d){this.hL(0,d)},
gaw(){return this.lx(0)},
saw(d){this.hL(0,d)},
gaJ(){return this.lx(1)},
saJ(d){this.hL(1,d)},
gaP(){return this.lx(2)},
saP(d){this.hL(2,d)},
gaO(){return this.lx(3)},
saO(d){this.hL(3,d)},
gf3(){return this.lx(0)/this.e.gbh()},
sf3(d){this.hL(0,d*this.e.gbh())},
geT(){return this.lx(1)/this.e.gbh()},
seT(d){this.hL(1,d*this.e.gbh())},
geY(){return this.lx(2)/this.e.gbh()},
seY(d){this.hL(2,d*this.e.gbh())},
gfc(){return this.lx(3)/this.e.gbh()},
sfc(d){this.hL(3,d*this.e.gbh())},
gh1(){return A.fd(this)},
fo(d){var w=this
w.hL(0,d.gaw())
w.hL(1,d.gaJ())
w.hL(2,d.gaP())
w.hL(3,d.gaO())},
hG(d,e,f){var w=this,v=w.e.c
if(v>0){w.hL(0,d)
if(v>1){w.hL(1,e)
if(v>2)w.hL(2,f)}}},
ik(d,e,f,g){var w=this,v=w.e.c
if(v>0){w.hL(0,d)
if(v>1){w.hL(1,e)
if(v>2){w.hL(2,f)
if(v>3)w.hL(3,g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u=this
if(e==null)return!1
if(e instanceof A.yt)return C.ah(C.N(u,!0,C.j(u).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=u.e.c
v=J.aS(e)
if(v.gu(e)!==w)return!1
if(u.lx(0)!==v.i(e,0))return!1
if(w>1){if(u.lx(1)!==v.i(e,1))return!1
if(w>2){if(u.lx(2)!==v.i(e,2))return!1
if(w>3)if(u.lx(3)!==v.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.e}}
A.yu.prototype={
cj(){var w=this
return new A.yu(w.a,w.b,w.c,w.d)},
gu(d){var w=this.d,v=w.e
v=v==null?null:v.b
return v==null?w.c:v},
gdn(){return this.d.e},
gbh(){return this.d.gbh()},
gc2(){return B.C},
gjc(){return this.a},
gjN(){return this.b},
e4(d,e){var w,v,u=this
u.a=d
u.b=e
w=u.d
v=w.c
u.c=e*w.a*v+d*v},
gK(){return this},
p(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c
w+=u.e==null?u.c:1
v.c=w
return w<u.d.length},
eU(d){var w=this.d,v=w.e
if(v!=null)w=v.li(w.d[this.c],d)
else w=d<w.c?w.d[this.c+d]:0
return w},
i(d,e){return this.eU(e)},
m(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.d.C(D.d.aZ(f,0,255))},
gda(){return this.d.d[this.c]},
sda(d){this.d.d[this.c]=D.d.C(D.d.aZ(d,0,255))},
gaw(){var w=this.d,v=w.e
if(v==null)w=w.c>0?w.d[this.c]:0
else w=v.kn(w.d[this.c])
return w},
saw(d){var w=this.d
if(w.c>0)w.d[this.c]=D.d.C(D.d.aZ(d,0,255))},
gaJ(){var w=this,v=w.d,u=v.e
if(u==null){u=v.c
if(u===2)v=v.d[w.c]
else v=u>1?v.d[w.c+1]:0}else v=u.km(v.d[w.c])
return v},
saJ(d){var w=this.d,v=w.c
if(v===2)w.d[this.c]=D.d.C(D.d.aZ(d,0,255))
else if(v>1)w.d[this.c+1]=D.d.C(D.d.aZ(d,0,255))},
gaP(){var w=this,v=w.d,u=v.e
if(u==null){u=v.c
if(u===2)v=v.d[w.c]
else v=u>2?v.d[w.c+2]:0}else v=u.kl(v.d[w.c])
return v},
saP(d){var w=this.d,v=w.c
if(v===2)w.d[this.c]=D.d.C(D.d.aZ(d,0,255))
else if(v>2)w.d[this.c+2]=D.d.C(D.d.aZ(d,0,255))},
gaO(){var w=this,v=w.d,u=v.e
if(u==null){u=v.c
if(u===2)v=v.d[w.c+1]
else v=u>3?v.d[w.c+3]:255}else v=u.lj(v.d[w.c])
return v},
saO(d){var w=this.d,v=w.c
if(v===2)w.d[this.c+1]=D.d.C(D.d.aZ(d,0,255))
else if(v>3)w.d[this.c+3]=D.d.C(D.d.aZ(d,0,255))},
gf3(){return this.gaw()/this.d.gbh()},
sf3(d){this.saw(d*this.d.gbh())},
geT(){return this.gaJ()/this.d.gbh()},
seT(d){this.saJ(d*this.d.gbh())},
geY(){return this.gaP()/this.d.gbh()},
seY(d){this.saP(d*this.d.gbh())},
gfc(){return this.gaO()/this.d.gbh()},
sfc(d){this.saO(d*this.d.gbh())},
gh1(){return this.d.c===2?this.gaw():A.fd(this)},
fo(d){var w=this
if(w.d.e!=null)w.sda(d.gda())
else{w.saw(d.gaw())
w.saJ(d.gaJ())
w.saP(d.gaP())
w.saO(d.gaO())}},
hG(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2)v[w+2]=D.c.C(f)}}},
ik(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.c.C(d)
if(u>1){v[w+1]=D.c.C(e)
if(u>2){v[w+2]=D.c.C(f)
if(u>3)v[w+3]=D.c.C(g)}}}},
gR(d){return new A.ei(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.yu)return C.ah(C.N(t,!0,C.j(t).h("m.E")))===C.ah(C.N(e,!0,C.j(e).h("m.E")))
if(x.L.b(e)){w=t.d
v=w.e
u=v!=null?v.b:w.c
w=J.aS(e)
if(w.gu(e)!==u)return!1
if(t.eU(0)!==w.i(e,0))return!1
if(u>1){if(t.eU(1)!==w.i(e,1))return!1
if(u>2){if(t.eU(2)!==w.i(e,2))return!1
if(u>3)if(t.eU(3)!==w.i(e,3))return!1}}return!0}return!1},
gq(d){return C.ah(C.N(this,!0,C.j(this).h("m.E")))},
$ic1:1,
$ic4:1,
ge1(){return this.d}}
A.fY.prototype={
cj(){return new A.fY()},
ge1(){return $.bu6()},
gjc(){return 0},
gjN(){return 0},
gu(d){return 0},
gbh(){return 0},
gc2(){return B.C},
gdn(){return null},
i(d,e){return 0},
m(d,e,f){},
gda(){return 0},
sda(d){},
gaw(){return 0},
saw(d){},
gaJ(){return 0},
saJ(d){},
gaP(){return 0},
saP(d){},
gaO(){return 0},
saO(d){},
gf3(){return 0},
sf3(d){},
geT(){return 0},
seT(d){},
geY(){return 0},
seY(d){},
gfc(){return 0},
sfc(d){},
gh1(){return 0},
fo(d){},
hG(d,e,f){},
ik(d,e,f,g){},
e4(d,e){},
gK(){return this},
p(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.fY},
gq(d){return 0},
gR(d){return new A.ei(this)},
$ic1:1,
$ic4:1}
A.a2O.prototype={
j(d){return"ImageException: "+this.a},
$ibz:1}
A.i2.prototype={
gu(d){return this.c-this.d},
i(d,e){return J.o(this.a,this.d+e)},
m(d,e,f){J.bL(this.a,this.d+e,f)
return f},
mO(d,e,f,g){var w=this.a,v=J.cV(w),u=this.d+d
if(f instanceof A.i2)v.ct(w,u,u+e,f.a,f.d+g)
else v.ct(w,u,u+e,x.L.a(f),g)},
tb(d,e,f){return this.mO(d,e,f,0)},
aWh(d,e,f){var w=this.a,v=this.d+d
J.nN(w,v,v+e,f)},
MW(d,e,f){var w=this,v=f!=null?w.b+f:w.d
return A.by(w.a,w.e,d,v+e)},
fR(d){return this.MW(d,0,null)},
tM(d,e){return this.MW(d,0,e)},
FP(d,e){return this.MW(d,e,null)},
bm(){return J.o(this.a,this.d++)},
hp(d){var w=this.fR(d)
this.d=this.d+(w.c-w.d)
return w},
f4(d){var w,v,u,t,s=this
if(d==null){w=C.a([],x.t)
for(v=s.c;u=s.d,u<v;){t=s.a
s.d=u+1
u=J.o(t,u)
if(u===0)return C.cT(w,0,null)
w.push(u)}throw C.c(A.aZ("EOF reached without finding string terminator (length: "+C.i(d)+")"))}return C.cT(s.hp(d).eJ(),0,null)},
vH(){return this.f4(null)},
aeW(d){var w,v,u,t=this,s=C.a([],x.t)
for(w=t.c;v=t.d,v<w;){u=t.a
t.d=v+1
v=J.o(u,v)
s.push(v)
if(v===10||s.length>=d)return C.cT(s,0,null)}return C.cT(s,0,null)},
aZJ(){return this.aeW(256)},
aZK(){var w,v,u,t=this,s=C.a([],x.t)
for(w=t.c;v=t.d,v<w;){u=t.a
t.d=v+1
v=J.o(u,v)
if(v===0)return new C.ro(!0).u1(s,0,null,!0)
s.push(v)}return D.a9.Cw(s,!0)},
X(){var w=this,v=J.o(w.a,w.d++)&255,u=J.o(w.a,w.d++)&255
if(w.e)return v<<8|u
return u<<8|v},
mU(){var w=this,v=J.o(w.a,w.d++)&255,u=J.o(w.a,w.d++)&255,t=J.o(w.a,w.d++)&255
if(w.e)return t|u<<8|v<<16
return v|u<<8|t<<16},
M(){var w=this,v=J.o(w.a,w.d++)&255,u=J.o(w.a,w.d++)&255,t=J.o(w.a,w.d++)&255,s=J.o(w.a,w.d++)&255
if(w.e)return(v<<24|u<<16|t<<8|s)>>>0
return(s<<24|t<<16|u<<8|v)>>>0},
Lx(){return A.bSy(this.W1())},
W1(){var w=this,v=J.o(w.a,w.d++)&255,u=J.o(w.a,w.d++)&255,t=J.o(w.a,w.d++)&255,s=J.o(w.a,w.d++)&255,r=J.o(w.a,w.d++)&255,q=J.o(w.a,w.d++)&255,p=J.o(w.a,w.d++)&255,o=J.o(w.a,w.d++)&255
if(w.e)return(D.c.cN(v,56)|D.c.cN(u,48)|D.c.cN(t,40)|D.c.cN(s,32)|r<<24|q<<16|p<<8|o)>>>0
return(D.c.cN(o,56)|D.c.cN(p,48)|D.c.cN(q,40)|D.c.cN(r,32)|s<<24|t<<16|u<<8|v)>>>0},
EK(d,e,f){var w,v=this,u=v.a
if(x.D.b(u))return v.afR(e,f)
w=v.b+v.d+e
return J.bc4(u,w,f<=0?v.c:w+f)},
afR(d,e){var w,v=this,u=e==null?v.c-v.d-d:e,t=v.a
if(x.D.b(t))return C.bO(t.buffer,t.byteOffset+v.d+d,u)
w=v.d+d
w=J.bc4(t,w,w+u)
return new Uint8Array(C.bo(w))},
eJ(){return this.afR(0,null)},
EM(){var w=this.a
if(x.D.b(w))return C.k1(w.buffer,w.byteOffset+this.d,null)
return C.k1(this.eJ().buffer,0,null)}}
A.aIx.prototype={
fP(d){var w=this
if(w.a===w.c.length)w.avO()
w.c[w.a++]=d&255},
agJ(d){this.fP(d&255)
this.fP(D.c.H(d,8)&255)},
M6(d){var w=this
w.fP(d&255)
w.fP(d>>>8&255)
w.fP(d>>>16&255)
w.fP(d>>>24&255)},
avP(d){var w,v,u=this.c.length,t=u===0?8192:u*2
u=this.c
w=u.length
v=new Uint8Array(w+t)
D.w.e5(v,0,w,u)
this.c=v},
avO(){return this.avP(null)},
gu(d){return this.a}}
A.DS.prototype={
C(d){var w=this.b
return w===0?0:D.c.e7(this.a,w)},
k(d,e){if(e==null)return!1
return e instanceof A.DS&&this.a===e.a&&this.b===e.b},
gq(d){return C.R(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
var z=a.updateTypes(["~(i2)","k(l2,k,k)","k([k])","~(tG,F<k>)","~(k,k,k,k,k,db)","~(h,ob)","~(k)","z(kr?)","h(kr?)","a2<kr?>(a2<aQ<h,@>?>)","~()","d(J,d?)","~(k,fF)","tG(k)","G(lh)"])
A.aVP.prototype={
$0(){var w=0,v=C.v(x.H),u,t=this,s,r
var $async$$0=C.q(function(d,e){if(d===1)return C.r(e,v)
while(true)switch(w){case 0:r=t.a
if(!r.d.ga9().M1()){w=1
break}r.Z(new A.aVM(r))
s=x.dv
w=3
return C.w(r.OS(C.N(new C.V(C.a(r.e.a.a.split(r.x),x.s),new A.aVN(),s),!0,s.h("ab.E"))),$async$$0)
case 3:s=e
r.w=s
r.a1j(s)
r.Z(new A.aVO(r))
case 1:return C.t(u,v)}})
return C.u($async$$0,v)},
$S:19}
A.aVM.prototype={
$0(){this.a.y=!0},
$S:0}
A.aVN.prototype={
$1(d){return D.e.f5(d)},
$S:41}
A.aVO.prototype={
$0(){this.a.y=!1},
$S:0}
A.aVB.prototype={
$0(){var w=this.a
return w.a1j(w.w)},
$S:0}
A.aVF.prototype={
$1(d){var w=this.a
w.Z(new A.aVE(w,d))},
$S:152}
A.aVE.prototype={
$0(){var w=this.b
w.toString
this.a.x=w},
$S:0}
A.aVD.prototype={
$0(){var w=this.a.f
w.sw7(C.d5(D.k,0,w.a.a.length,!1))},
$S:0}
A.aVC.prototype={
$0(){C.Bx(new C.t0(this.a.f.a.a))},
$S:0}
A.aVG.prototype={
$1(d){if(d.length===0)return"Please enter an image URL"
return null},
$S:150}
A.aVH.prototype={
$1(d){return d!=null},
$S:z+7}
A.aVI.prototype={
$1(d){var w=this.a.r.a.a,v=d.a
w=C.dJ(w,"{url}",v)
v=d.b
w=C.dJ(w,"{hash}",v)
v=D.c.j(d.c)
w=C.dJ(w,"{width}",v)
v=D.c.j(d.d)
return C.dJ(w,"{height}",v)},
$S:z+8}
A.aVK.prototype={
$1(d){return this.ah_(d)},
ah_(d){var w=0,v=C.v(x.h),u,t=this
var $async$$1=C.q(function(e,f){if(e===1)return C.r(f,v)
while(true)switch(w){case 0:u=t.a.GD(d)
w=1
break
case 1:return C.t(u,v)}})
return C.u($async$$1,v)},
$S:694}
A.aVL.prototype={
$1(d){return this.agZ(d)},
agZ(d){var w=0,v=C.v(x.e),u,t,s,r,q,p
var $async$$1=C.q(function(e,f){if(e===1)return C.r(f,v)
while(true)switch(w){case 0:w=3
return C.w(d,$async$$1)
case 3:p=f
if(p==null){u=null
w=1
break}t=p.i(0,"url")
t=C.bE(t==null?"":t)
s=p.i(0,"hash")
s=C.bE(s==null?"":s)
r=p.i(0,"width")
r=C.aE(r==null?0:r)
q=p.i(0,"height")
u=new A.kr(t,s,r,C.aE(q==null?0:q))
w=1
break
case 1:return C.t(u,v)}})
return C.u($async$$1,v)},
$S:z+9}
A.aVJ.prototype={
$1(d){return this.agY(d)},
agY(d){var w=0,v=C.v(x.d1),u,t=this,s,r
var $async$$1=C.q(function(e,f){if(e===1)return C.r(f,v)
while(true)switch(w){case 0:s=A.bPZ(d)
r=s==null?null:s.l0(d,null)
if(r==null)throw C.c(C.dE("Failed to decode image"))
u=C.X(["url",t.a,"hash",A.bxM(r,4).a,"width",r.gdX(),"height",r.gbd()],x.N,x.z)
w=1
break
case 1:return C.t(u,v)}})
return C.u($async$$1,v)},
$S:695}
A.aYL.prototype={
$0(){var w,v=this.a,u=!v.ay
v.ay=u
w=v.x
if(u){w===$&&C.b()
w.dh()}else{w===$&&C.b()
w.eG().bz(new A.aYK(v),x.H)}u=v.c
u.toString
u=C.Dv(u)
if(u!=null){w=v.c
w.toString
u.WP(w,v.ay)}},
$S:0}
A.aYK.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.Z(new A.aYJ())},
$S:22}
A.aYJ.prototype={
$0(){},
$S:0}
A.aYM.prototype={
$0(){var w,v
G.Er(this.b,this.c,H.n2)
w=this.a
v=w.CW
if(v!=null)v.an()
w.CW=null},
$S:0}
A.baz.prototype={
$1(d){return d.xi("GET",this.a,this.b)},
$S:696}
A.aBH.prototype={
$2(d,e){var w=A.bkI(e)
this.a.a.m(0,d,w)
return w},
$S:z+5}
A.aBI.prototype={
$2(d,e){var w=e.cj()
this.a.a.m(0,d,w)
return w},
$S:z+12}
A.aBJ.prototype={
$2(d,e){var w=A.bkI(e)
this.a.b.a.m(0,d,w)
return w},
$S:z+5}
A.asn.prototype={
$4(d,e,f,g){var w,v,u=this,t=u.a
if(t.a<u.c){w=u.b.c&&u.d.ch!=null
v=u.e
if(w){w=u.d
v.ik(w.ch.kn(d),w.ch.km(d),w.ch.kl(d),w.ch.lj(d))}else v.ik(d,e,f,g)
v.p();++t.a}},
$S:697}
A.ay0.prototype={
$1(d){var w,v,u,t,s=this.b,r=s.fy,q=this.a,p=q.b
r=r[p]
w=s.go
v=q.a
w=w[v]
u=new Uint32Array(r*w)
t=p+1
q.b=t
if(t===s.id){q.b=0
q.a=v+1}return u},
$S:698}
A.aD_.prototype={
$1(d){var w,v,u,t,s=this.b,r=s.bm(),q=s.bm()
s=this.a
if(!s.d.y.a5(r))throw C.c(A.aZ("Invalid Component in SOS block"))
w=s.d.y.i(0,r)
w.toString
v=D.c.H(q,4)&15
u=q&15
t=s.z
if(v<t.length){t=t[v]
t.toString
w.w=t}s=s.y
if(u<s.length){s=s[u]
s.toString
w.x=s}return w},
$S:z+13}
A.aJM.prototype={
$1(d){return d!==""},
$S:16}
A.aSV.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:129};(function aliases(){var w=A.W9.prototype
w.aoV=w.l})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installInstanceTearOff,s=a._instance_1u,r=a.installStaticTearOff
w(A,"bNQ","bMo",14)
var q
v(q=A.S8.prototype,"gaAe","aAf",10)
u(q,"garL","arM",11)
t(A.fF.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.pU.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.xi.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.xd.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.xe.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.tt.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.xh.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.xf.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
t(A.xg.prototype,"gqu",1,0,function(){return[0]},["$1","$0"],["fA","C"],2,0,0)
u(q=A.a3k.prototype,"gatY","atZ",3)
u(q,"gau0","au1",3)
u(q,"gau2","au3",3)
u(q,"gatS","atT",3)
u(q,"gatU","atV",3)
w(A,"bSK","bGY",0)
w(A,"bSD","bGQ",0)
w(A,"bSB","bGO",0)
w(A,"bSI","bGW",0)
w(A,"bSJ","bGX",0)
w(A,"bSH","bGV",0)
w(A,"bSG","bGU",0)
w(A,"bSF","bGT",0)
w(A,"bSM","bH_",0)
w(A,"bSL","bGZ",0)
w(A,"bSE","bGR",0)
w(A,"bSC","bGP",0)
w(A,"bSX","bHa",0)
w(A,"bSV","bH8",0)
w(A,"bSN","bH0",0)
w(A,"bSP","bH2",0)
w(A,"bSO","bH1",0)
w(A,"bSQ","bH3",0)
w(A,"bSY","bHb",0)
w(A,"bSW","bH9",0)
w(A,"bSR","bH4",0)
w(A,"bSS","bH5",0)
w(A,"bST","bH6",0)
w(A,"bSU","bH7",0)
s(A.Qs.prototype,"gaG7","aG8",6)
s(A.a3c.prototype,"gaSf","aSg",6)
r(A,"bgP",3,null,["$3"],["bHc"],1,0)
r(A,"bSZ",3,null,["$3"],["bHd"],1,0)
r(A,"bT3",3,null,["$3"],["bHi"],1,0)
r(A,"bT4",3,null,["$3"],["bHj"],1,0)
r(A,"bT5",3,null,["$3"],["bHk"],1,0)
r(A,"bT6",3,null,["$3"],["bHl"],1,0)
r(A,"bT7",3,null,["$3"],["bHm"],1,0)
r(A,"bT8",3,null,["$3"],["bHn"],1,0)
r(A,"bT9",3,null,["$3"],["bHo"],1,0)
r(A,"bTa",3,null,["$3"],["bHp"],1,0)
r(A,"bT_",3,null,["$3"],["bHe"],1,0)
r(A,"bT0",3,null,["$3"],["bHf"],1,0)
r(A,"bT1",3,null,["$3"],["bHg"],1,0)
r(A,"bT2",3,null,["$3"],["bHh"],1,0)
r(A,"bTd",6,null,["$6"],["bHA"],4,0)
r(A,"bTe",6,null,["$6"],["bHB"],4,0)
r(A,"bTc",6,null,["$6"],["bHz"],4,0)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.XG,C.hZ)
u(C.D,[A.aCz,A.aIA,A.aUa,A.aBi,A.aCm,A.aU9,A.ash,A.Yg,A.lh,A.kr,A.axW,A.ei,A.ts,A.agK,A.a1r,A.ob,A.fF,A.aso,A.w4,A.avf,A.ave,A.a1t,A.axY,A.a1u,A.a1v,A.ay_,A.Ke,A.aj4,A.KE,A.KF,A.a23,A.aBx,A.a2F,A.Ze,A.x8,A.aCY,A.tG,A.aCZ,A.FX,A.a3j,A.aD1,A.a3k,A.Nm,A.aJK,A.ov,A.DN,A.aKq,A.DM,A.aKs,A.a7G,A.a7J,A.NC,A.NB,A.DQ,A.a7O,A.lN,A.ab0,A.aRO,A.ab3,A.aRQ,A.ab4,A.aRR,A.aE_,A.aSI,A.Qr,A.aSJ,A.aSO,A.aSS,A.aSU,A.Qq,A.aST,A.aSK,A.zS,A.abz,A.abB,A.abA,A.abC,A.Qs,A.abx,A.aSP,A.aby,A.aTx,A.QF,A.a2E,A.KJ,A.abR,A.KZ,A.aIV,A.aJj,A.a2O,A.i2,A.aIx,A.DS])
v(A.aCy,A.aCz)
v(A.aIz,A.aIA)
v(A.b8d,A.aUa)
u(C.a_,[A.Ia,A.Kc])
u(C.a1,[A.aeI,A.W9])
u(C.jH,[A.aVP,A.aVM,A.aVO,A.aVB,A.aVE,A.aVD,A.aVC,A.aYL,A.aYJ,A.aYM])
u(C.hX,[A.aVN,A.aVF,A.aVG,A.aVH,A.aVI,A.aVK,A.aVL,A.aVJ,A.aYK,A.baz,A.asn,A.ay0,A.aD_,A.aJM])
v(A.S8,A.W9)
v(A.aYI,C.wN)
u(C.nA,[A.a3J,A.atB,A.j7,A.Ye,A.iw,A.hU,A.Ce,A.wO,A.mz,A.Cv,A.DD,A.Nl,A.ug,A.uh,A.mV,A.jm,A.zJ,A.h1,A.m3,A.zT,A.Fi,A.aBu,A.a1V])
v(A.w3,C.aa)
u(C.m,[A.IN,A.IO,A.IP,A.IQ,A.IR,A.IS,A.IU,A.IV,A.IW,A.IX,A.IY,A.t2,A.xk,A.i1,A.yj,A.yk,A.yl,A.ym,A.yn,A.yo,A.yp,A.yq,A.yr,A.ys,A.yt,A.yu,A.fY])
u(A.t2,[A.Zc,A.IT])
v(A.Kb,A.ts)
u(C.jI,[A.aBH,A.aBI,A.aBJ,A.aSV])
u(A.fF,[A.pU,A.xc,A.xi,A.xd,A.xe,A.tt,A.xh,A.xf,A.xg,A.Cz,A.Cy,A.CA])
u(A.avf,[A.Yk,A.axZ,A.aA4,A.aBw,A.a3i,A.a7l,A.aJL,A.aKr,A.aKx,A.aRJ,A.aRP,A.aTy])
v(A.avz,A.Yk)
v(A.aCD,A.axY)
u(A.aCD,[A.a37,A.aCE,A.aCF,A.aCG,A.a39])
v(A.a38,A.Ke)
v(A.a3a,A.KF)
v(A.aBv,A.w4)
u(A.x8,[A.x9,A.KW])
v(A.a3b,A.Nm)
v(A.aCH,A.aJK)
v(A.yy,A.ave)
u(A.ov,[A.a7E,A.a7F,A.a7H,A.a7I,A.a7L,A.a7M])
u(A.DN,[A.Ny,A.a7K])
u(A.NC,[A.mW,A.hj])
v(A.a3c,A.Qs)
v(A.a3d,A.QF)
v(A.a3e,A.abR)
u(A.i1,[A.CE,A.CF,A.L5,A.L6,A.L7,A.L8,A.CG,A.CH,A.CI,A.CJ,A.CK,A.CL])
u(A.aIV,[A.a6L,A.a6M,A.a6N,A.a6O,A.a6P,A.a6Q,A.a6R,A.a6S,A.or])
w(A.W9,C.f8)})()
C.kk(b.typeUniverse,JSON.parse('{"XG":{"hZ":[],"bz":[]},"Yg":{"bz":[]},"Ia":{"a_":[],"d":[]},"aeI":{"a1":["Ia"]},"Kc":{"a_":[],"d":[]},"S8":{"a1":["Kc"]},"w3":{"aa":[],"d":[]},"IN":{"c1":[],"m":["b2"],"m.E":"b2"},"IO":{"c1":[],"m":["b2"],"m.E":"b2"},"IP":{"c1":[],"m":["b2"],"m.E":"b2"},"IQ":{"c1":[],"m":["b2"],"m.E":"b2"},"IR":{"c1":[],"m":["b2"],"m.E":"b2"},"IS":{"c1":[],"m":["b2"],"m.E":"b2"},"IU":{"c1":[],"m":["b2"],"m.E":"b2"},"IV":{"c1":[],"m":["b2"],"m.E":"b2"},"IW":{"c1":[],"m":["b2"],"m.E":"b2"},"IX":{"c1":[],"m":["b2"],"m.E":"b2"},"IY":{"c1":[],"m":["b2"],"m.E":"b2"},"t2":{"c1":[],"m":["b2"],"m.E":"b2"},"Zc":{"c1":[],"m":["b2"],"m.E":"b2"},"IT":{"c1":[],"m":["b2"],"m.E":"b2"},"pU":{"fF":[]},"xc":{"fF":[]},"xi":{"fF":[]},"xd":{"fF":[]},"xe":{"fF":[]},"tt":{"fF":[]},"xh":{"fF":[]},"xf":{"fF":[]},"xg":{"fF":[]},"Cz":{"fF":[]},"Cy":{"fF":[]},"CA":{"fF":[]},"a38":{"Ke":[]},"a3a":{"KF":[]},"x9":{"x8":[]},"KW":{"x8":[]},"a3b":{"Nm":[]},"a7E":{"ov":[]},"a7F":{"ov":[]},"a7H":{"ov":[]},"a7I":{"ov":[]},"a7L":{"ov":[]},"a7M":{"ov":[]},"Ny":{"DN":[]},"a7K":{"DN":[]},"mW":{"NC":["mW"]},"hj":{"NC":["hj"]},"a3d":{"QF":[]},"xk":{"m":["c4"],"m.E":"c4"},"i1":{"m":["c4"]},"CE":{"i1":[],"m":["c4"],"m.E":"c4"},"CF":{"i1":[],"m":["c4"],"m.E":"c4"},"L5":{"i1":[],"m":["c4"],"m.E":"c4"},"L6":{"i1":[],"m":["c4"],"m.E":"c4"},"L7":{"i1":[],"m":["c4"],"m.E":"c4"},"L8":{"i1":[],"m":["c4"],"m.E":"c4"},"CG":{"i1":[],"m":["c4"],"m.E":"c4"},"CH":{"i1":[],"m":["c4"],"m.E":"c4"},"CI":{"i1":[],"m":["c4"],"m.E":"c4"},"CJ":{"i1":[],"m":["c4"],"m.E":"c4"},"CK":{"i1":[],"m":["c4"],"m.E":"c4"},"CL":{"i1":[],"m":["c4"],"m.E":"c4"},"yj":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yk":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yl":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"ym":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yn":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yo":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yp":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yq":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yr":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"ys":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yt":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"yu":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"fY":{"c4":[],"c1":[],"m":["b2"],"m.E":"b2"},"a2O":{"bz":[]},"bAe":{"ds":[],"b5":[],"aW":[],"d":[]},"c4":{"c1":[],"m":["b2"]}}'))
var y={a:"Enter an image URL to generate a BlurHash."}
var x=(function rtii(){var w=C.T
return{m:w("c6<G>"),G:w("c1"),M:w("lh"),v:w("p<h,k>"),a:w("j5<h>"),W:w("bAe"),n:w("a1t"),_:w("a1v"),f:w("KJ"),x:w("a2E"),C:w("a2F"),P:w("ob"),r:w("fF"),I:w("i1"),k:w("Lr"),R:w("m<@>"),eB:w("n<Ze>"),Q:w("n<a1u>"),dw:w("n<Ke>"),b:w("n<KF>"),A:w("n<KJ>"),g:w("n<xk>"),O:w("n<F<F<F<k>>>>"),o:w("n<F<F<k>>>"),S:w("n<F<k>>"),d:w("n<Nm>"),X:w("n<DM>"),af:w("n<ov>"),l:w("n<a7J>"),s:w("n<h>"),aU:w("n<ab4>"),j:w("n<db>"),ao:w("n<zS>"),F:w("n<aby>"),J:w("n<QF>"),E:w("n<d>"),gn:w("n<agK>"),e8:w("n<FX>"),t:w("n<k>"),q:w("n<kr?>"),T:w("n<x8?>"),f8:w("n<a3j?>"),hh:w("n<l2?>"),ff:w("n<db?>"),y:w("n<~(i2)>"),eH:w("cm"),c:w("tG"),cN:w("bh<Ck>"),dL:w("F<lh>"),f0:w("F<Lr>"),c7:w("F<Qq>"),K:w("F<zS>"),L:w("F<k>"),Y:w("F<kr?>"),d1:w("aQ<h,@>"),dv:w("V<h,h>"),w:w("an"),fW:w("DM"),fh:w("a7G"),cE:w("Ny"),hf:w("DN"),fi:w("NB"),a7:w("DQ"),i:w("DS"),em:w("yS"),N:w("h"),cV:w("ab3"),e7:w("aJ<G>"),ak:w("eY"),bv:w("l2"),D:w("db"),V:w("Qq"),ai:w("abz"),cP:w("abA"),dE:w("abC"),U:w("aH<h>"),e_:w("ap"),aX:w("aj4"),z:w("@"),p:w("k"),e:w("kr?"),bC:w("a34?"),ez:w("F<x8?>?"),h:w("aQ<h,@>?"),aD:w("db?"),eW:w("Qr?"),B:w("zS?"),Z:w("abB?"),u:w("k?"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.n4=new A.Ye(0,"direct")
B.n5=new A.Ye(1,"alpha")
B.rX=new A.hU(0,"none")
B.n6=new A.hU(3,"bitfields")
B.n7=new A.hU(6,"alphaBitfields")
B.t1=new C.bf(D.y,1,D.A,-1)
B.t2=new C.et(B.t1,D.u,B.t1,D.u)
B.aKX=new A.aU9()
B.es=new A.b8d()
B.tx=new A.atB(4,"luminance")
B.ZE=new A.wO(0,"red")
B.ZF=new A.wO(1,"green")
B.ZG=new A.wO(2,"blue")
B.ZH=new A.wO(3,"alpha")
B.ZI=new A.wO(4,"other")
B.uZ=new A.Ce(0,"uint")
B.ob=new A.Ce(1,"half")
B.oc=new A.Ce(2,"float")
B.v_=new A.mz(0,"none")
B.d0=new A.j7(0,"uint1")
B.du=new A.j7(1,"uint2")
B.eB=new A.j7(10,"float32")
B.fJ=new A.j7(11,"float64")
B.dv=new A.j7(2,"uint4")
B.C=new A.j7(3,"uint8")
B.bg=new A.j7(4,"uint16")
B.eC=new A.j7(5,"uint32")
B.fK=new A.j7(6,"int8")
B.fL=new A.j7(7,"int16")
B.fM=new A.j7(8,"int32")
B.dU=new A.j7(9,"float16")
B.a_i=new A.a1V(1,"page")
B.aq=new A.a1V(2,"sequence")
B.a_D=new A.aBu(1,"deflate")
B.vp=new A.Cv(2,"cur")
B.a_V=new C.dr(57926,"MaterialIcons",null,!1)
B.vB=new C.f3(B.a_V,null,null,null,null,null)
B.q=new A.iw(0,"none")
B.vD=new A.iw(1,"byte")
B.vE=new A.iw(10,"sRational")
B.vF=new A.iw(11,"single")
B.vG=new A.iw(12,"double")
B.ax=new A.iw(2,"ascii")
B.ak=new A.iw(3,"short")
B.bw=new A.iw(4,"long")
B.c4=new A.iw(5,"rational")
B.vH=new A.iw(6,"sByte")
B.fO=new A.iw(7,"undefined")
B.vI=new A.iw(8,"sShort")
B.vJ=new A.iw(9,"sLong")
B.vX=new A.a3J(0,"leading")
B.vY=new A.a3J(1,"trailing")
B.oB=C.a(w([0,2,8]),x.t)
B.a3x=C.a(w([0,4,2,1]),x.t)
B.a3U=C.a(w([252,243,207,63]),x.t)
B.wf=C.a(w([292,260,226,226]),x.t)
B.wl=C.a(w([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),x.t)
B.a4e=C.a(w([2,3,7]),x.t)
B.ZJ=new A.mz(1,"rle")
B.ZK=new A.mz(2,"zips")
B.ZL=new A.mz(3,"zip")
B.ZM=new A.mz(4,"piz")
B.ZN=new A.mz(5,"pxr24")
B.ZO=new A.mz(6,"b44")
B.ZP=new A.mz(7,"b44a")
B.a4m=C.a(w([B.v_,B.ZJ,B.ZK,B.ZL,B.ZM,B.ZN,B.ZO,B.ZP]),C.T("n<mz>"))
B.wr=C.a(w([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),x.t)
B.a4z=C.a(w([3,3,11]),x.t)
B.a5x=C.a(w([511,1023,2047,4095]),x.t)
B.a5Q=C.a(w([63,207,243,252]),x.t)
B.kO=C.a(w([0,36,72,109,145,182,218,255]),x.t)
B.a6x=C.a(w([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),x.t)
B.a6K=C.a(w([8,8,4,2]),x.t)
B.awl=new A.ug(0,"none")
B.awm=new A.ug(1,"sub")
B.awn=new A.ug(2,"up")
B.awo=new A.ug(3,"average")
B.awp=new A.ug(4,"paeth")
B.xa=C.a(w([B.awl,B.awm,B.awn,B.awo,B.awp]),C.T("n<ug>"))
B.a6X=C.a(w([A.bSN(),A.bSH(),A.bSX(),A.bSV(),A.bSP(),A.bSO(),A.bSQ()]),x.y)
B.OM=new A.zT(0,"predictor")
B.aGo=new A.zT(1,"crossColor")
B.aGp=new A.zT(2,"subtractGreen")
B.ON=new A.zT(3,"colorIndexing")
B.a7z=C.a(w([B.OM,B.aGo,B.aGp,B.ON]),C.T("n<zT>"))
B.a7C=C.a(w([280,256,256,256,40]),x.t)
B.xJ=C.a(w([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),x.t)
B.xP=C.a(w([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),x.t)
B.Rh=new A.hU(1,"rle8")
B.Rm=new A.hU(2,"rle4")
B.Rn=new A.hU(4,"jpeg")
B.Ro=new A.hU(5,"png")
B.Rp=new A.hU(7,"reserved7")
B.Rq=new A.hU(8,"reserved8")
B.Rr=new A.hU(9,"reserved9")
B.Ri=new A.hU(10,"reserved10")
B.Rj=new A.hU(11,"cmyk")
B.Rk=new A.hU(12,"cmykRle8")
B.Rl=new A.hU(13,"cmykRle4")
B.y0=C.a(w([B.rX,B.Rh,B.Rm,B.n6,B.Rn,B.Ro,B.n7,B.Rp,B.Rq,B.Rr,B.Ri,B.Rj,B.Rk,B.Rl]),C.T("n<hU>"))
B.cq=C.a(w([255,255,255,255,255,255,255,255,255,255,255]),x.t)
B.fR=C.a(w([B.cq,B.cq,B.cq]),x.S)
B.adp=C.a(w([176,246,255,255,255,255,255,255,255,255,255]),x.t)
B.a4o=C.a(w([223,241,252,255,255,255,255,255,255,255,255]),x.t)
B.aej=C.a(w([249,253,253,255,255,255,255,255,255,255,255]),x.t)
B.aeo=C.a(w([B.adp,B.a4o,B.aej]),x.S)
B.a5s=C.a(w([255,244,252,255,255,255,255,255,255,255,255]),x.t)
B.afz=C.a(w([234,254,254,255,255,255,255,255,255,255,255]),x.t)
B.Aw=C.a(w([253,255,255,255,255,255,255,255,255,255,255]),x.t)
B.a21=C.a(w([B.a5s,B.afz,B.Aw]),x.S)
B.a5t=C.a(w([255,246,254,255,255,255,255,255,255,255,255]),x.t)
B.aea=C.a(w([239,253,254,255,255,255,255,255,255,255,255]),x.t)
B.ws=C.a(w([254,255,254,255,255,255,255,255,255,255,255]),x.t)
B.a4_=C.a(w([B.a5t,B.aea,B.ws]),x.S)
B.wP=C.a(w([255,248,254,255,255,255,255,255,255,255,255]),x.t)
B.aeb=C.a(w([251,255,254,255,255,255,255,255,255,255,255]),x.t)
B.aeG=C.a(w([B.wP,B.aeb,B.cq]),x.S)
B.p2=C.a(w([255,253,254,255,255,255,255,255,255,255,255]),x.t)
B.a5u=C.a(w([251,254,254,255,255,255,255,255,255,255,255]),x.t)
B.adY=C.a(w([B.p2,B.a5u,B.ws]),x.S)
B.a5O=C.a(w([255,254,253,255,254,255,255,255,255,255,255]),x.t)
B.abq=C.a(w([250,255,254,255,254,255,255,255,255,255,255]),x.t)
B.ln=C.a(w([254,255,255,255,255,255,255,255,255,255,255]),x.t)
B.afy=C.a(w([B.a5O,B.abq,B.ln]),x.S)
B.agy=C.a(w([B.fR,B.aeo,B.a21,B.a4_,B.aeG,B.adY,B.afy,B.fR]),x.o)
B.aeu=C.a(w([217,255,255,255,255,255,255,255,255,255,255]),x.t)
B.ahi=C.a(w([225,252,241,253,255,255,254,255,255,255,255]),x.t)
B.aeD=C.a(w([234,250,241,250,253,255,253,254,255,255,255]),x.t)
B.agq=C.a(w([B.aeu,B.ahi,B.aeD]),x.S)
B.oK=C.a(w([255,254,255,255,255,255,255,255,255,255,255]),x.t)
B.afA=C.a(w([223,254,254,255,255,255,255,255,255,255,255]),x.t)
B.abW=C.a(w([238,253,254,254,255,255,255,255,255,255,255]),x.t)
B.a8t=C.a(w([B.oK,B.afA,B.abW]),x.S)
B.a9D=C.a(w([249,254,255,255,255,255,255,255,255,255,255]),x.t)
B.af1=C.a(w([B.wP,B.a9D,B.cq]),x.S)
B.aek=C.a(w([255,253,255,255,255,255,255,255,255,255,255]),x.t)
B.a9E=C.a(w([247,254,255,255,255,255,255,255,255,255,255]),x.t)
B.ahG=C.a(w([B.aek,B.a9E,B.cq]),x.S)
B.aev=C.a(w([252,255,255,255,255,255,255,255,255,255,255]),x.t)
B.a7d=C.a(w([B.p2,B.aev,B.cq]),x.S)
B.wQ=C.a(w([255,254,254,255,255,255,255,255,255,255,255]),x.t)
B.acx=C.a(w([B.wQ,B.Aw,B.cq]),x.S)
B.a9F=C.a(w([255,254,253,255,255,255,255,255,255,255,255]),x.t)
B.AE=C.a(w([250,255,255,255,255,255,255,255,255,255,255]),x.t)
B.afk=C.a(w([B.a9F,B.AE,B.ln]),x.S)
B.ahH=C.a(w([B.agq,B.a8t,B.af1,B.ahG,B.a7d,B.acx,B.afk,B.fR]),x.o)
B.a4p=C.a(w([186,251,250,255,255,255,255,255,255,255,255]),x.t)
B.abX=C.a(w([234,251,244,254,255,255,255,255,255,255,255]),x.t)
B.aaY=C.a(w([251,251,243,253,254,255,254,255,255,255,255]),x.t)
B.a97=C.a(w([B.a4p,B.abX,B.aaY]),x.S)
B.a4q=C.a(w([236,253,254,255,255,255,255,255,255,255,255]),x.t)
B.ahN=C.a(w([251,253,253,254,254,255,255,255,255,255,255]),x.t)
B.afR=C.a(w([B.p2,B.a4q,B.ahN]),x.S)
B.afB=C.a(w([254,254,254,255,255,255,255,255,255,255,255]),x.t)
B.a22=C.a(w([B.wQ,B.afB,B.cq]),x.S)
B.adq=C.a(w([254,254,255,255,255,255,255,255,255,255,255]),x.t)
B.a82=C.a(w([B.oK,B.adq,B.ln]),x.S)
B.w6=C.a(w([B.cq,B.ln,B.cq]),x.S)
B.afV=C.a(w([B.a97,B.afR,B.a22,B.a82,B.w6,B.fR,B.fR,B.fR]),x.o)
B.aew=C.a(w([248,255,255,255,255,255,255,255,255,255,255]),x.t)
B.a6P=C.a(w([250,254,252,254,255,255,255,255,255,255,255]),x.t)
B.adr=C.a(w([248,254,249,253,255,255,255,255,255,255,255]),x.t)
B.ahF=C.a(w([B.aew,B.a6P,B.adr]),x.S)
B.ael=C.a(w([255,253,253,255,255,255,255,255,255,255,255]),x.t)
B.aex=C.a(w([246,253,253,255,255,255,255,255,255,255,255]),x.t)
B.a6v=C.a(w([252,254,251,254,254,255,255,255,255,255,255]),x.t)
B.adl=C.a(w([B.ael,B.aex,B.a6v]),x.S)
B.a5v=C.a(w([255,254,252,255,255,255,255,255,255,255,255]),x.t)
B.ads=C.a(w([248,254,253,255,255,255,255,255,255,255,255]),x.t)
B.a8O=C.a(w([253,255,254,254,255,255,255,255,255,255,255]),x.t)
B.a3A=C.a(w([B.a5v,B.ads,B.a8O]),x.S)
B.aec=C.a(w([255,251,254,255,255,255,255,255,255,255,255]),x.t)
B.aed=C.a(w([245,251,254,255,255,255,255,255,255,255,255]),x.t)
B.ae7=C.a(w([253,253,254,255,255,255,255,255,255,255,255]),x.t)
B.a7t=C.a(w([B.aec,B.aed,B.ae7]),x.S)
B.aem=C.a(w([255,251,253,255,255,255,255,255,255,255,255]),x.t)
B.a4r=C.a(w([252,253,254,255,255,255,255,255,255,255,255]),x.t)
B.aeP=C.a(w([B.aem,B.a4r,B.oK]),x.S)
B.a9G=C.a(w([255,252,255,255,255,255,255,255,255,255,255]),x.t)
B.ae8=C.a(w([249,255,254,255,255,255,255,255,255,255,255]),x.t)
B.ae9=C.a(w([255,255,254,255,255,255,255,255,255,255,255]),x.t)
B.ac1=C.a(w([B.a9G,B.ae8,B.ae9]),x.S)
B.aen=C.a(w([255,255,253,255,255,255,255,255,255,255,255]),x.t)
B.a2z=C.a(w([B.aen,B.AE,B.cq]),x.S)
B.acN=C.a(w([B.ahF,B.adl,B.a3A,B.a7t,B.aeP,B.ac1,B.a2z,B.w6]),x.o)
B.a8s=C.a(w([B.agy,B.ahH,B.afV,B.acN]),x.O)
B.a_E=new A.Cv(0,"invalid")
B.a_F=new A.Cv(1,"ico")
B.a8B=C.a(w([B.a_E,B.a_F,B.vp]),C.T("n<Cv>"))
B.a95=C.a(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
B.oL=C.a(w([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),x.t)
B.a9Y=C.a(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
B.a9Z=C.a(w([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),x.t)
B.fV=C.a(w([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),x.t)
B.d3=C.a(w([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),x.t)
B.Mn=new A.Nl(0,"source")
B.Mo=new A.Nl(1,"over")
B.aaj=C.a(w([B.Mn,B.Mo]),C.T("n<Nl>"))
B.iC=C.a(w([0,1,3,7,15,31,63,127,255]),x.t)
B.oN=C.a(w([0,128,192,224,240,248,252,254,255]),x.t)
B.zf=C.a(w([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),x.t)
B.zm=C.a(w([137,80,78,71,13,10,26,10]),x.t)
B.l9=C.a(w([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),x.t)
B.abV=C.a(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
B.acr=C.a(w([null,A.bTd(),A.bTe(),A.bTc()]),C.T("n<~(k,k,k,k,k,db)?>"))
B.oG=C.a(w([8,0,8,0]),x.t)
B.a5I=C.a(w([5,3,5,3]),x.t)
B.a4B=C.a(w([3,5,3,5]),x.t)
B.w9=C.a(w([0,8,0,8]),x.t)
B.wK=C.a(w([4,4,4,4]),x.t)
B.a5m=C.a(w([4,4,0,0]),x.t)
B.zN=C.a(w([B.oG,B.a5I,B.a4B,B.w9,B.oG,B.wK,B.a5m,B.w9]),x.S)
B.acE=C.a(w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),x.t)
B.YF=new C.j5(",","Comma (,)",x.a)
B.YE=new C.j5("\n","New Line (\u21b5)",x.a)
B.acW=C.a(w([B.YF,B.YE]),C.T("n<j5<h>>"))
B.oV=C.a(w([0,1,1,2,4,8,1,1,2,4,8,4,8]),x.t)
B.r0=new A.h1(0,"whiteIsZero")
B.aEU=new A.h1(1,"blackIsZero")
B.aF0=new A.h1(2,"rgb")
B.r2=new A.h1(3,"palette")
B.aF1=new A.h1(4,"transparencyMask")
B.Oq=new A.h1(5,"cmyk")
B.aF2=new A.h1(6,"yCbCr")
B.aF3=new A.h1(7,"reserved7")
B.aF4=new A.h1(8,"cieLab")
B.aF5=new A.h1(9,"iccLab")
B.aEV=new A.h1(10,"ituLab")
B.aEW=new A.h1(11,"logL")
B.aEX=new A.h1(12,"logLuv")
B.aEY=new A.h1(13,"colorFilterArray")
B.aEZ=new A.h1(14,"linearRaw")
B.aF_=new A.h1(15,"depth")
B.r1=new A.h1(16,"unknown")
B.acY=C.a(w([B.r0,B.aEU,B.aF0,B.r2,B.aF1,B.Oq,B.aF2,B.aF3,B.aF4,B.aF5,B.aEV,B.aEW,B.aEX,B.aEY,B.aEZ,B.aF_,B.r1]),C.T("n<h1>"))
B.oW=C.a(w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),x.t)
B.ahA=C.a(w([231,120,48,89,115,113,120,152,112]),x.t)
B.a23=C.a(w([152,179,64,126,170,118,46,70,95]),x.t)
B.a24=C.a(w([175,69,143,80,85,82,72,155,103]),x.t)
B.a25=C.a(w([56,58,10,171,218,189,17,13,152]),x.t)
B.a26=C.a(w([114,26,17,163,44,195,21,10,173]),x.t)
B.a27=C.a(w([121,24,80,195,26,62,44,64,85]),x.t)
B.a28=C.a(w([144,71,10,38,171,213,144,34,26]),x.t)
B.a29=C.a(w([170,46,55,19,136,160,33,206,71]),x.t)
B.a2a=C.a(w([63,20,8,114,114,208,12,9,226]),x.t)
B.a2b=C.a(w([81,40,11,96,182,84,29,16,36]),x.t)
B.ahj=C.a(w([B.ahA,B.a23,B.a24,B.a25,B.a26,B.a27,B.a28,B.a29,B.a2a,B.a2b]),x.S)
B.a2c=C.a(w([134,183,89,137,98,101,106,165,148]),x.t)
B.a2d=C.a(w([72,187,100,130,157,111,32,75,80]),x.t)
B.a2e=C.a(w([66,102,167,99,74,62,40,234,128]),x.t)
B.aal=C.a(w([41,53,9,178,241,141,26,8,107]),x.t)
B.a2f=C.a(w([74,43,26,146,73,166,49,23,157]),x.t)
B.a2g=C.a(w([65,38,105,160,51,52,31,115,128]),x.t)
B.a9O=C.a(w([104,79,12,27,217,255,87,17,7]),x.t)
B.a2h=C.a(w([87,68,71,44,114,51,15,186,23]),x.t)
B.a2i=C.a(w([47,41,14,110,182,183,21,17,194]),x.t)
B.a2j=C.a(w([66,45,25,102,197,189,23,18,22]),x.t)
B.aez=C.a(w([B.a2c,B.a2d,B.a2e,B.aal,B.a2f,B.a2g,B.a9O,B.a2h,B.a2i,B.a2j]),x.S)
B.a2k=C.a(w([88,88,147,150,42,46,45,196,205]),x.t)
B.a2l=C.a(w([43,97,183,117,85,38,35,179,61]),x.t)
B.a2m=C.a(w([39,53,200,87,26,21,43,232,171]),x.t)
B.a2n=C.a(w([56,34,51,104,114,102,29,93,77]),x.t)
B.a2p=C.a(w([39,28,85,171,58,165,90,98,64]),x.t)
B.a2q=C.a(w([34,22,116,206,23,34,43,166,73]),x.t)
B.a2r=C.a(w([107,54,32,26,51,1,81,43,31]),x.t)
B.a2s=C.a(w([68,25,106,22,64,171,36,225,114]),x.t)
B.a2t=C.a(w([34,19,21,102,132,188,16,76,124]),x.t)
B.a2u=C.a(w([62,18,78,95,85,57,50,48,51]),x.t)
B.afc=C.a(w([B.a2k,B.a2l,B.a2m,B.a2n,B.a2p,B.a2q,B.a2r,B.a2s,B.a2t,B.a2u]),x.S)
B.a2v=C.a(w([193,101,35,159,215,111,89,46,111]),x.t)
B.a2w=C.a(w([60,148,31,172,219,228,21,18,111]),x.t)
B.a9P=C.a(w([112,113,77,85,179,255,38,120,114]),x.t)
B.aam=C.a(w([40,42,1,196,245,209,10,25,109]),x.t)
B.a2x=C.a(w([88,43,29,140,166,213,37,43,154]),x.t)
B.a2y=C.a(w([61,63,30,155,67,45,68,1,209]),x.t)
B.a2B=C.a(w([100,80,8,43,154,1,51,26,71]),x.t)
B.aan=C.a(w([142,78,78,16,255,128,34,197,171]),x.t)
B.a2C=C.a(w([41,40,5,102,211,183,4,1,221]),x.t)
B.a2D=C.a(w([51,50,17,168,209,192,23,25,82]),x.t)
B.a4s=C.a(w([B.a2v,B.a2w,B.a9P,B.aam,B.a2x,B.a2y,B.a2B,B.aan,B.a2C,B.a2D]),x.S)
B.aaT=C.a(w([138,31,36,171,27,166,38,44,229]),x.t)
B.a2E=C.a(w([67,87,58,169,82,115,26,59,179]),x.t)
B.a2F=C.a(w([63,59,90,180,59,166,93,73,154]),x.t)
B.a2G=C.a(w([40,40,21,116,143,209,34,39,175]),x.t)
B.a2H=C.a(w([47,15,16,183,34,223,49,45,183]),x.t)
B.a2I=C.a(w([46,17,33,183,6,98,15,32,183]),x.t)
B.a2J=C.a(w([57,46,22,24,128,1,54,17,37]),x.t)
B.a2K=C.a(w([65,32,73,115,28,128,23,128,205]),x.t)
B.a2L=C.a(w([40,3,9,115,51,192,18,6,223]),x.t)
B.a2M=C.a(w([87,37,9,115,59,77,64,21,47]),x.t)
B.aau=C.a(w([B.aaT,B.a2E,B.a2F,B.a2G,B.a2H,B.a2I,B.a2J,B.a2K,B.a2L,B.a2M]),x.S)
B.a2N=C.a(w([104,55,44,218,9,54,53,130,226]),x.t)
B.a2O=C.a(w([64,90,70,205,40,41,23,26,57]),x.t)
B.a2P=C.a(w([54,57,112,184,5,41,38,166,213]),x.t)
B.a2Q=C.a(w([30,34,26,133,152,116,10,32,134]),x.t)
B.aaU=C.a(w([39,19,53,221,26,114,32,73,255]),x.t)
B.a2R=C.a(w([31,9,65,234,2,15,1,118,73]),x.t)
B.a9Q=C.a(w([75,32,12,51,192,255,160,43,51]),x.t)
B.a2S=C.a(w([88,31,35,67,102,85,55,186,85]),x.t)
B.a2T=C.a(w([56,21,23,111,59,205,45,37,192]),x.t)
B.a2U=C.a(w([55,38,70,124,73,102,1,34,98]),x.t)
B.a4t=C.a(w([B.a2N,B.a2O,B.a2P,B.a2Q,B.aaU,B.a2R,B.a9Q,B.a2S,B.a2T,B.a2U]),x.S)
B.a2X=C.a(w([125,98,42,88,104,85,117,175,82]),x.t)
B.a2Y=C.a(w([95,84,53,89,128,100,113,101,45]),x.t)
B.a2Z=C.a(w([75,79,123,47,51,128,81,171,1]),x.t)
B.a3_=C.a(w([57,17,5,71,102,57,53,41,49]),x.t)
B.a30=C.a(w([38,33,13,121,57,73,26,1,85]),x.t)
B.a31=C.a(w([41,10,67,138,77,110,90,47,114]),x.t)
B.a9R=C.a(w([115,21,2,10,102,255,166,23,6]),x.t)
B.a32=C.a(w([101,29,16,10,85,128,101,196,26]),x.t)
B.a33=C.a(w([57,18,10,102,102,213,34,20,43]),x.t)
B.a34=C.a(w([117,20,15,36,163,128,68,1,26]),x.t)
B.ahC=C.a(w([B.a2X,B.a2Y,B.a2Z,B.a3_,B.a30,B.a31,B.a9R,B.a32,B.a33,B.a34]),x.S)
B.a74=C.a(w([102,61,71,37,34,53,31,243,192]),x.t)
B.a35=C.a(w([69,60,71,38,73,119,28,222,37]),x.t)
B.a75=C.a(w([68,45,128,34,1,47,11,245,171]),x.t)
B.a37=C.a(w([62,17,19,70,146,85,55,62,70]),x.t)
B.a38=C.a(w([37,43,37,154,100,163,85,160,1]),x.t)
B.a39=C.a(w([63,9,92,136,28,64,32,201,85]),x.t)
B.a9S=C.a(w([75,15,9,9,64,255,184,119,16]),x.t)
B.a9T=C.a(w([86,6,28,5,64,255,25,248,1]),x.t)
B.a9U=C.a(w([56,8,17,132,137,255,55,116,128]),x.t)
B.a3a=C.a(w([58,15,20,82,135,57,26,121,40]),x.t)
B.a8G=C.a(w([B.a74,B.a35,B.a75,B.a37,B.a38,B.a39,B.a9S,B.a9T,B.a9U,B.a3a]),x.S)
B.a3b=C.a(w([164,50,31,137,154,133,25,35,218]),x.t)
B.a3c=C.a(w([51,103,44,131,131,123,31,6,158]),x.t)
B.a3d=C.a(w([86,40,64,135,148,224,45,183,128]),x.t)
B.a3e=C.a(w([22,26,17,131,240,154,14,1,209]),x.t)
B.a3f=C.a(w([45,16,21,91,64,222,7,1,197]),x.t)
B.a3g=C.a(w([56,21,39,155,60,138,23,102,213]),x.t)
B.a9V=C.a(w([83,12,13,54,192,255,68,47,28]),x.t)
B.a3i=C.a(w([85,26,85,85,128,128,32,146,171]),x.t)
B.a3j=C.a(w([18,11,7,63,144,171,4,4,246]),x.t)
B.a3k=C.a(w([35,27,10,146,174,171,12,26,128]),x.t)
B.ahD=C.a(w([B.a3b,B.a3c,B.a3d,B.a3e,B.a3f,B.a3g,B.a9V,B.a3i,B.a3j,B.a3k]),x.S)
B.a3l=C.a(w([190,80,35,99,180,80,126,54,45]),x.t)
B.a3m=C.a(w([85,126,47,87,176,51,41,20,32]),x.t)
B.a3n=C.a(w([101,75,128,139,118,146,116,128,85]),x.t)
B.a3o=C.a(w([56,41,15,176,236,85,37,9,62]),x.t)
B.a9W=C.a(w([71,30,17,119,118,255,17,18,138]),x.t)
B.a3p=C.a(w([101,38,60,138,55,70,43,26,142]),x.t)
B.a9X=C.a(w([146,36,19,30,171,255,97,27,20]),x.t)
B.a3q=C.a(w([138,45,61,62,219,1,81,188,64]),x.t)
B.a3r=C.a(w([32,41,20,117,151,142,20,21,163]),x.t)
B.a1X=C.a(w([112,19,12,61,195,128,48,4,24]),x.t)
B.a9A=C.a(w([B.a3l,B.a3m,B.a3n,B.a3o,B.a9W,B.a3p,B.a9X,B.a3q,B.a3r,B.a1X]),x.S)
B.adZ=C.a(w([B.ahj,B.aez,B.afc,B.a4s,B.aau,B.a4t,B.ahC,B.a8G,B.ahD,B.a9A]),x.o)
B.mn=new A.jm(0,"none")
B.ef=new A.jm(1,"palette")
B.Ol=new A.jm(2,"rgb")
B.aED=new A.jm(3,"gray")
B.aEE=new A.jm(4,"reserved4")
B.aEF=new A.jm(5,"reserved5")
B.aEG=new A.jm(6,"reserved6")
B.aEH=new A.jm(7,"reserved7")
B.aEI=new A.jm(8,"reserved8")
B.eg=new A.jm(9,"paletteRle")
B.Ok=new A.jm(10,"rgbRle")
B.aEC=new A.jm(11,"grayRle")
B.ae1=C.a(w([B.mn,B.ef,B.Ol,B.aED,B.aEE,B.aEF,B.aEG,B.aEH,B.aEI,B.eg,B.Ok,B.aEC]),C.T("n<jm>"))
B.lm=C.a(w([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),x.t)
B.AN=C.a(w([A.bSR(),A.bSJ(),A.bSY(),A.bSW(),A.bST(),A.bSS(),A.bSU()]),x.y)
B.awk=new A.DD(0,"none")
B.Mp=new A.DD(1,"background")
B.Mq=new A.DD(2,"previous")
B.af8=C.a(w([B.awk,B.Mp,B.Mq]),C.T("n<DD>"))
B.lq=C.a(w([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),x.t)
B.aEM=new A.zJ(0,"invalid")
B.Oo=new A.zJ(1,"uint")
B.ah=new A.zJ(2,"int")
B.jn=new A.zJ(3,"float")
B.afb=C.a(w([B.aEM,B.Oo,B.ah,B.jn]),C.T("n<zJ>"))
B.aff=C.a(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
B.afe=C.a(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
B.afs=C.a(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
B.a3F=C.a(w([173,148,140]),x.t)
B.a3G=C.a(w([176,155,140,135]),x.t)
B.a7D=C.a(w([180,157,141,134,130]),x.t)
B.a6A=C.a(w([254,254,243,230,196,177,153,140,133,130,129]),x.t)
B.afU=C.a(w([B.a3F,B.a3G,B.a7D,B.a6A]),x.S)
B.agj=C.a(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
B.p6=C.a(w([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),x.t)
B.Bx=C.a(w([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),x.t)
B.Bw=C.a(w([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),x.t)
B.ags=C.a(w([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),x.t)
B.BF=C.a(w([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),x.t)
B.BE=C.a(w([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),x.t)
B.agw=C.a(w([B.uZ,B.ob,B.oc]),C.T("n<Ce>"))
B.a4f=C.a(w([2,6,2,6]),x.t)
B.a66=C.a(w([6,2,6,2]),x.t)
B.a4d=C.a(w([2,2,6,6]),x.t)
B.a3L=C.a(w([1,3,3,9]),x.t)
B.a5j=C.a(w([4,0,12,0]),x.t)
B.a4y=C.a(w([3,1,9,3]),x.t)
B.a6J=C.a(w([8,8,0,0]),x.t)
B.a5k=C.a(w([4,12,0,0]),x.t)
B.a3E=C.a(w([16,0,0,0]),x.t)
B.a3C=C.a(w([12,4,0,0]),x.t)
B.a67=C.a(w([6,6,2,2]),x.t)
B.a4C=C.a(w([3,9,1,3]),x.t)
B.a3B=C.a(w([12,0,4,0]),x.t)
B.a70=C.a(w([9,3,3,1]),x.t)
B.by=C.a(w([B.wK,B.a4f,B.oG,B.a66,B.a4d,B.a3L,B.a5j,B.a4y,B.a6J,B.a5k,B.a3E,B.a3C,B.a67,B.a4C,B.a3B,B.a70]),x.S)
B.BV=C.a(w([B.q,B.vD,B.ax,B.ak,B.bw,B.c4,B.vH,B.fO,B.vI,B.vJ,B.vE,B.vF,B.vG]),C.T("n<iw>"))
B.awF=new A.mV(0,"bitmap")
B.MI=new A.mV(1,"grayscale")
B.awG=new A.mV(2,"indexed")
B.MJ=new A.mV(3,"rgb")
B.MK=new A.mV(4,"cmyk")
B.awH=new A.mV(5,"multiChannel")
B.awI=new A.mV(6,"duoTone")
B.ML=new A.mV(7,"lab")
B.ahf=C.a(w([B.awF,B.MI,B.awG,B.MJ,B.MK,B.awH,B.awI,B.ML]),C.T("n<mV>"))
B.cv=C.a(w([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),x.t)
B.ahM=C.a(w([254,253,251,247,239,223,191,127]),x.t)
B.Cg=C.a(w([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),x.t)
B.ai1=C.a(w([A.bSB(),A.bSI(),A.bSK(),A.bSD(),A.bSG(),A.bSM(),A.bSF(),A.bSL(),A.bSC(),A.bSE()]),x.y)
B.oI=C.a(w([128,128,128,128,128,128,128,128,128,128,128]),x.t)
B.Cl=C.a(w([B.oI,B.oI,B.oI]),x.S)
B.ahZ=C.a(w([253,136,254,255,228,219,128,128,128,128,128]),x.t)
B.ad4=C.a(w([189,129,242,255,227,213,255,219,128,128,128]),x.t)
B.agC=C.a(w([106,126,227,252,214,209,255,255,128,128,128]),x.t)
B.acO=C.a(w([B.ahZ,B.ad4,B.agC]),x.S)
B.abf=C.a(w([1,98,248,255,236,226,255,255,128,128,128]),x.t)
B.agF=C.a(w([181,133,238,254,221,234,255,154,128,128,128]),x.t)
B.ad5=C.a(w([78,134,202,247,198,180,255,219,128,128,128]),x.t)
B.ago=C.a(w([B.abf,B.agF,B.ad5]),x.S)
B.a6V=C.a(w([1,185,249,255,243,255,128,128,128,128,128]),x.t)
B.abJ=C.a(w([184,150,247,255,236,224,128,128,128,128,128]),x.t)
B.a43=C.a(w([77,110,216,255,236,230,128,128,128,128,128]),x.t)
B.a4n=C.a(w([B.a6V,B.abJ,B.a43]),x.S)
B.a6W=C.a(w([1,101,251,255,241,255,128,128,128,128,128]),x.t)
B.a8P=C.a(w([170,139,241,252,236,209,255,255,128,128,128]),x.t)
B.a6R=C.a(w([37,116,196,243,228,255,255,255,128,128,128]),x.t)
B.a79=C.a(w([B.a6W,B.a8P,B.a6R]),x.S)
B.a7b=C.a(w([1,204,254,255,245,255,128,128,128,128,128]),x.t)
B.a44=C.a(w([207,160,250,255,238,128,128,128,128,128,128]),x.t)
B.abK=C.a(w([102,103,231,255,211,171,128,128,128,128,128]),x.t)
B.a4b=C.a(w([B.a7b,B.a44,B.abK]),x.S)
B.aft=C.a(w([1,152,252,255,240,255,128,128,128,128,128]),x.t)
B.abL=C.a(w([177,135,243,255,234,225,128,128,128,128,128]),x.t)
B.a45=C.a(w([80,129,211,255,194,224,128,128,128,128,128]),x.t)
B.a54=C.a(w([B.aft,B.abL,B.a45]),x.S)
B.x8=C.a(w([1,1,255,128,128,128,128,128,128,128,128]),x.t)
B.a6B=C.a(w([246,1,255,128,128,128,128,128,128,128,128]),x.t)
B.a8L=C.a(w([255,128,128,128,128,128,128,128,128,128,128]),x.t)
B.a9d=C.a(w([B.x8,B.a6B,B.a8L]),x.S)
B.aee=C.a(w([B.Cl,B.acO,B.ago,B.a4n,B.a79,B.a4b,B.a54,B.a9d]),x.o)
B.a6C=C.a(w([198,35,237,223,193,187,162,160,145,155,62]),x.t)
B.a7P=C.a(w([131,45,198,221,172,176,220,157,252,221,1]),x.t)
B.aeL=C.a(w([68,47,146,208,149,167,221,162,255,223,128]),x.t)
B.a3J=C.a(w([B.a6C,B.a7P,B.aeL]),x.S)
B.a9l=C.a(w([1,149,241,255,221,224,255,255,128,128,128]),x.t)
B.ad6=C.a(w([184,141,234,253,222,220,255,199,128,128,128]),x.t)
B.ab5=C.a(w([81,99,181,242,176,190,249,202,255,255,128]),x.t)
B.afK=C.a(w([B.a9l,B.ad6,B.ab5]),x.S)
B.acd=C.a(w([1,129,232,253,214,197,242,196,255,255,128]),x.t)
B.agG=C.a(w([99,121,210,250,201,198,255,202,128,128,128]),x.t)
B.ab6=C.a(w([23,91,163,242,170,187,247,210,255,255,128]),x.t)
B.ac8=C.a(w([B.acd,B.agG,B.ab6]),x.S)
B.afu=C.a(w([1,200,246,255,234,255,128,128,128,128,128]),x.t)
B.acF=C.a(w([109,178,241,255,231,245,255,255,128,128,128]),x.t)
B.abg=C.a(w([44,130,201,253,205,192,255,255,128,128,128]),x.t)
B.aaa=C.a(w([B.afu,B.acF,B.abg]),x.S)
B.a3X=C.a(w([1,132,239,251,219,209,255,165,128,128,128]),x.t)
B.abh=C.a(w([94,136,225,251,218,190,255,255,128,128,128]),x.t)
B.ad7=C.a(w([22,100,174,245,186,161,255,199,128,128,128]),x.t)
B.a7N=C.a(w([B.a3X,B.abh,B.ad7]),x.S)
B.a5L=C.a(w([1,182,249,255,232,235,128,128,128,128,128]),x.t)
B.abM=C.a(w([124,143,241,255,227,234,128,128,128,128,128]),x.t)
B.ad8=C.a(w([35,77,181,251,193,211,255,205,128,128,128]),x.t)
B.a93=C.a(w([B.a5L,B.abM,B.ad8]),x.S)
B.af6=C.a(w([1,157,247,255,236,231,255,255,128,128,128]),x.t)
B.a9m=C.a(w([121,141,235,255,225,227,255,255,128,128,128]),x.t)
B.ad9=C.a(w([45,99,188,251,195,217,255,224,128,128,128]),x.t)
B.acA=C.a(w([B.af6,B.a9m,B.ad9]),x.S)
B.a5M=C.a(w([1,1,251,255,213,255,128,128,128,128,128]),x.t)
B.a9n=C.a(w([203,1,248,255,255,128,128,128,128,128,128]),x.t)
B.afv=C.a(w([137,1,177,255,224,255,128,128,128,128,128]),x.t)
B.abx=C.a(w([B.a5M,B.a9n,B.afv]),x.S)
B.a6T=C.a(w([B.a3J,B.afK,B.ac8,B.aaa,B.a7N,B.a93,B.acA,B.abx]),x.o)
B.a5F=C.a(w([253,9,248,251,207,208,255,192,128,128,128]),x.t)
B.a3N=C.a(w([175,13,224,243,193,185,249,198,255,255,128]),x.t)
B.aeM=C.a(w([73,17,171,221,161,179,236,167,255,234,128]),x.t)
B.acJ=C.a(w([B.a5F,B.a3N,B.aeM]),x.S)
B.a9o=C.a(w([1,95,247,253,212,183,255,255,128,128,128]),x.t)
B.ai7=C.a(w([239,90,244,250,211,209,255,255,128,128,128]),x.t)
B.agD=C.a(w([155,77,195,248,188,195,255,255,128,128,128]),x.t)
B.aaA=C.a(w([B.a9o,B.ai7,B.agD]),x.S)
B.a3Y=C.a(w([1,24,239,251,218,219,255,205,128,128,128]),x.t)
B.a46=C.a(w([201,51,219,255,196,186,128,128,128,128,128]),x.t)
B.ada=C.a(w([69,46,190,239,201,218,255,228,128,128,128]),x.t)
B.aeQ=C.a(w([B.a3Y,B.a46,B.ada]),x.S)
B.a8S=C.a(w([1,191,251,255,255,128,128,128,128,128,128]),x.t)
B.a5N=C.a(w([223,165,249,255,213,255,128,128,128,128,128]),x.t)
B.a9p=C.a(w([141,124,248,255,255,128,128,128,128,128,128]),x.t)
B.a4X=C.a(w([B.a8S,B.a5N,B.a9p]),x.S)
B.a9q=C.a(w([1,16,248,255,255,128,128,128,128,128,128]),x.t)
B.afw=C.a(w([190,36,230,255,236,255,128,128,128,128,128]),x.t)
B.a6D=C.a(w([149,1,255,128,128,128,128,128,128,128,128]),x.t)
B.afG=C.a(w([B.a9q,B.afw,B.a6D]),x.S)
B.a6E=C.a(w([1,226,255,128,128,128,128,128,128,128,128]),x.t)
B.aaC=C.a(w([247,192,255,128,128,128,128,128,128,128,128]),x.t)
B.a6F=C.a(w([240,128,255,128,128,128,128,128,128,128,128]),x.t)
B.act=C.a(w([B.a6E,B.aaC,B.a6F]),x.S)
B.a9r=C.a(w([1,134,252,255,255,128,128,128,128,128,128]),x.t)
B.a9s=C.a(w([213,62,250,255,255,128,128,128,128,128,128]),x.t)
B.a6G=C.a(w([55,93,255,128,128,128,128,128,128,128,128]),x.t)
B.ag1=C.a(w([B.a9r,B.a9s,B.a6G]),x.S)
B.abt=C.a(w([B.acJ,B.aaA,B.aeQ,B.a4X,B.afG,B.act,B.ag1,B.Cl]),x.o)
B.ahl=C.a(w([202,24,213,235,186,191,220,160,240,175,255]),x.t)
B.aeN=C.a(w([126,38,182,232,169,184,228,174,255,187,128]),x.t)
B.aeO=C.a(w([61,46,138,219,151,178,240,170,255,216,128]),x.t)
B.a5h=C.a(w([B.ahl,B.aeN,B.aeO]),x.S)
B.ab7=C.a(w([1,112,230,250,199,191,247,159,255,255,128]),x.t)
B.agH=C.a(w([166,109,228,252,211,215,255,174,128,128,128]),x.t)
B.ab8=C.a(w([39,77,162,232,172,180,245,178,255,255,128]),x.t)
B.aa0=C.a(w([B.ab7,B.agH,B.ab8]),x.S)
B.ab9=C.a(w([1,52,220,246,198,199,249,220,255,255,128]),x.t)
B.ace=C.a(w([124,74,191,243,183,193,250,221,255,255,128]),x.t)
B.aba=C.a(w([24,71,130,219,154,170,243,182,255,255,128]),x.t)
B.a1Y=C.a(w([B.ab9,B.ace,B.aba]),x.S)
B.adb=C.a(w([1,182,225,249,219,240,255,224,128,128,128]),x.t)
B.agI=C.a(w([149,150,226,252,216,205,255,171,128,128,128]),x.t)
B.abe=C.a(w([28,108,170,242,183,194,254,223,255,255,128]),x.t)
B.adn=C.a(w([B.adb,B.agI,B.abe]),x.S)
B.agJ=C.a(w([1,81,230,252,204,203,255,192,128,128,128]),x.t)
B.abi=C.a(w([123,102,209,247,188,196,255,233,128,128,128]),x.t)
B.adc=C.a(w([20,95,153,243,164,173,255,203,128,128,128]),x.t)
B.a7W=C.a(w([B.agJ,B.abi,B.adc]),x.S)
B.a47=C.a(w([1,222,248,255,216,213,128,128,128,128,128]),x.t)
B.abc=C.a(w([168,175,246,252,235,205,255,255,128,128,128]),x.t)
B.abj=C.a(w([47,116,215,255,211,212,255,255,128,128,128]),x.t)
B.a6Z=C.a(w([B.a47,B.abc,B.abj]),x.S)
B.abk=C.a(w([1,121,236,253,212,214,255,255,128,128,128]),x.t)
B.agK=C.a(w([141,84,213,252,201,202,255,219,128,128,128]),x.t)
B.agL=C.a(w([42,80,160,240,162,185,255,205,128,128,128]),x.t)
B.a4Y=C.a(w([B.abk,B.agK,B.agL]),x.S)
B.a6H=C.a(w([244,1,255,128,128,128,128,128,128,128,128]),x.t)
B.a6I=C.a(w([238,1,255,128,128,128,128,128,128,128,128]),x.t)
B.acv=C.a(w([B.x8,B.a6H,B.a6I]),x.S)
B.ah1=C.a(w([B.a5h,B.aa0,B.a1Y,B.adn,B.a7W,B.a6Z,B.a4Y,B.acv]),x.o)
B.ai2=C.a(w([B.aee,B.a6T,B.abt,B.ah1]),x.O)
B.aq8={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:18,J:19,K:20,L:21,M:22,N:23,O:24,P:25,Q:26,R:27,S:28,T:29,U:30,V:31,W:32,X:33,Y:34,Z:35,a:36,b:37,c:38,d:39,e:40,f:41,g:42,h:43,i:44,j:45,k:46,l:47,m:48,n:49,o:50,p:51,q:52,r:53,s:54,t:55,u:56,v:57,w:58,x:59,y:60,z:61,"#":62,$:63,"%":64,"*":65,"+":66,",":67,"-":68,".":69,":":70,";":71,"=":72,"?":73,"@":74,"[":75,"]":76,"^":77,_:78,"{":79,"|":80,"}":81,"~":82}
B.am1=new C.p(B.aq8,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],x.v)
B.Ht=new C.cs([B.d0,1,B.du,3,B.dv,15,B.C,255,B.bg,65535,B.eC,4294967295,B.fK,127,B.fL,32767,B.fM,2147483647,B.dU,1,B.eB,1,B.fJ,1],C.T("cs<j7,k>"))
B.Hv=new C.cs([34665,"exif",40965,"interop",34853,"gps"],C.T("cs<k,h>"))
B.apL={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
B.HB=new C.p(B.apL,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],x.v)
B.Uc=new C.rZ(D.rj,2,null,null,null,null,null,null,null)
B.azA=new C.bq(16,16,B.Uc,null)
B.auq=new C.bl(D.c2,B.azA,null)
B.j2=new A.uh(0,"invalid")
B.Mr=new A.uh(1,"pbm")
B.Ms=new A.uh(2,"pgm2")
B.pK=new A.uh(3,"pgm5")
B.Mt=new A.uh(4,"ppm3")
B.pL=new A.uh(5,"ppm6")
B.aEp=new C.ep("Copy",null,null,null,null,null,null,null,null,null)
B.aEs=new C.ep("Input separator",null,null,null,null,null,null,null,null,null)
B.aEu=new C.ep("Refresh",null,null,null,null,null,null,null,null,null)
B.aEy=new C.ep("Generate",null,null,null,null,null,null,null,null,null)
B.aEx=new C.ep("Options",null,null,null,null,null,null,null,null,null)
B.r_=new A.m3(0,"bilevel")
B.aEN=new A.m3(1,"gray4bit")
B.aEO=new A.m3(2,"gray")
B.aEP=new A.m3(3,"grayAlpha")
B.aEQ=new A.m3(4,"palette")
B.Op=new A.m3(5,"rgb")
B.aER=new A.m3(6,"rgba")
B.aES=new A.m3(7,"yCbCrSub")
B.mo=new A.m3(8,"generic")
B.aET=new A.m3(9,"invalid")
B.js=new A.Fi(0,"undefined")
B.rc=new A.Fi(1,"lossy")
B.mu=new A.Fi(2,"lossless")
B.aGH=new A.Fi(3,"animated")})();(function staticFields(){$.bfH=null
$.boq=!1
$.bor=C.a([A.bgP(),A.bSZ(),A.bT3(),A.bT4(),A.bT5(),A.bT6(),A.bT7(),A.bT8(),A.bT9(),A.bTa(),A.bT_(),A.bT0(),A.bT1(),A.bT2(),A.bgP(),A.bgP()],C.T("n<k(l2,k,k)>"))
$.e8=null
$.bk9=C.bn("_eLut")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"bWZ","buX",()=>C.eL(D.ie))
w($,"bWY","buW",()=>C.eL(D.cZ))
w($,"bX_","buY",()=>C.h2(0,0.5,C.T("G")))
w($,"c_2","bbY",()=>{var u=null,t="ISOSpeed"
return C.X([11,A.a5("ProcessingSoftware",B.ax,u),254,A.a5("SubfileType",B.bw,1),255,A.a5("OldSubfileType",B.bw,1),256,A.a5("ImageWidth",B.bw,1),257,A.a5("ImageLength",B.bw,1),258,A.a5("BitsPerSample",B.ak,1),259,A.a5("Compression",B.ak,1),262,A.a5("PhotometricInterpretation",B.ak,1),263,A.a5("Thresholding",B.ak,1),264,A.a5("CellWidth",B.ak,1),265,A.a5("CellLength",B.ak,1),266,A.a5("FillOrder",B.ak,1),269,A.a5("DocumentName",B.ax,u),270,A.a5("ImageDescription",B.ax,u),271,A.a5("Make",B.ax,u),272,A.a5("Model",B.ax,u),273,A.a5("StripOffsets",B.bw,u),274,A.a5("Orientation",B.ak,1),277,A.a5("SamplesPerPixel",B.ak,1),278,A.a5("RowsPerStrip",B.bw,1),279,A.a5("StripByteCounts",B.bw,1),280,A.a5("MinSampleValue",B.ak,1),281,A.a5("MaxSampleValue",B.ak,1),282,A.a5("XResolution",B.c4,1),283,A.a5("YResolution",B.c4,1),284,A.a5("PlanarConfiguration",B.ak,1),285,A.a5("PageName",B.ax,u),286,A.a5("XPosition",B.c4,1),287,A.a5("YPosition",B.c4,1),290,A.a5("GrayResponseUnit",B.ak,1),291,A.a5("GrayResponseCurve",B.q,u),292,A.a5("T4Options",B.q,u),293,A.a5("T6Options",B.q,u),296,A.a5("ResolutionUnit",B.ak,1),297,A.a5("PageNumber",B.ak,2),300,A.a5("ColorResponseUnit",B.q,u),301,A.a5("TransferFunction",B.ak,768),305,A.a5("Software",B.ax,u),306,A.a5("DateTime",B.ax,u),315,A.a5("Artist",B.ax,u),316,A.a5("HostComputer",B.ax,u),317,A.a5("Predictor",B.ak,1),318,A.a5("WhitePoint",B.c4,2),319,A.a5("PrimaryChromaticities",B.c4,6),320,A.a5("ColorMap",B.ak,u),321,A.a5("HalftoneHints",B.ak,2),322,A.a5("TileWidth",B.bw,1),323,A.a5("TileLength",B.bw,1),324,A.a5("TileOffsets",B.bw,u),325,A.a5("TileByteCounts",B.q,u),326,A.a5("BadFaxLines",B.q,u),327,A.a5("CleanFaxData",B.q,u),328,A.a5("ConsecutiveBadFaxLines",B.q,u),332,A.a5("InkSet",B.q,u),333,A.a5("InkNames",B.q,u),334,A.a5("NumberofInks",B.q,u),336,A.a5("DotRange",B.q,u),337,A.a5("TargetPrinter",B.ax,u),338,A.a5("ExtraSamples",B.q,u),339,A.a5("SampleFormat",B.ak,1),340,A.a5("SMinSampleValue",B.q,u),341,A.a5("SMaxSampleValue",B.q,u),342,A.a5("TransferRange",B.q,u),343,A.a5("ClipPath",B.q,u),512,A.a5("JPEGProc",B.q,u),513,A.a5("JPEGInterchangeFormat",B.q,u),514,A.a5("JPEGInterchangeFormatLength",B.q,u),529,A.a5("YCbCrCoefficients",B.c4,3),530,A.a5("YCbCrSubSampling",B.ak,1),531,A.a5("YCbCrPositioning",B.ak,1),532,A.a5("ReferenceBlackWhite",B.c4,6),700,A.a5("ApplicationNotes",B.ak,1),18246,A.a5("Rating",B.ak,1),33421,A.a5("CFARepeatPatternDim",B.q,u),33422,A.a5("CFAPattern",B.q,u),33423,A.a5("BatteryLevel",B.q,u),33432,A.a5("Copyright",B.ax,u),33434,A.a5("ExposureTime",B.c4,1),33437,A.a5("FNumber",B.c4,u),33723,A.a5("IPTC-NAA",B.bw,1),34665,A.a5("ExifOffset",B.q,u),34675,A.a5("InterColorProfile",B.q,u),34850,A.a5("ExposureProgram",B.ak,1),34852,A.a5("SpectralSensitivity",B.ax,u),34853,A.a5("GPSOffset",B.q,u),34855,A.a5(t,B.bw,1),34856,A.a5("OECF",B.q,u),34864,A.a5("SensitivityType",B.ak,1),34866,A.a5("RecommendedExposureIndex",B.bw,1),34867,A.a5(t,B.bw,1),36864,A.a5("ExifVersion",B.fO,u),36867,A.a5("DateTimeOriginal",B.ax,u),36868,A.a5("DateTimeDigitized",B.ax,u),36880,A.a5("OffsetTime",B.ax,u),36881,A.a5("OffsetTimeOriginal",B.ax,u),36882,A.a5("OffsetTimeDigitized",B.ax,u),37121,A.a5("ComponentsConfiguration",B.fO,u),37122,A.a5("CompressedBitsPerPixel",B.q,u),37377,A.a5("ShutterSpeedValue",B.q,u),37378,A.a5("ApertureValue",B.q,u),37379,A.a5("BrightnessValue",B.q,u),37380,A.a5("ExposureBiasValue",B.q,u),37381,A.a5("MaxApertureValue",B.q,u),37382,A.a5("SubjectDistance",B.q,u),37383,A.a5("MeteringMode",B.q,u),37384,A.a5("LightSource",B.q,u),37385,A.a5("Flash",B.q,u),37386,A.a5("FocalLength",B.q,u),37396,A.a5("SubjectArea",B.q,u),37500,A.a5("MakerNote",B.fO,u),37510,A.a5("UserComment",B.fO,u),37520,A.a5("SubSecTime",B.q,u),37521,A.a5("SubSecTimeOriginal",B.q,u),37522,A.a5("SubSecTimeDigitized",B.q,u),40091,A.a5("XPTitle",B.q,u),40092,A.a5("XPComment",B.q,u),40093,A.a5("XPAuthor",B.q,u),40094,A.a5("XPKeywords",B.q,u),40095,A.a5("XPSubject",B.q,u),40960,A.a5("FlashPixVersion",B.q,u),40961,A.a5("ColorSpace",B.ak,1),40962,A.a5("ExifImageWidth",B.ak,1),40963,A.a5("ExifImageLength",B.ak,1),40964,A.a5("RelatedSoundFile",B.q,u),40965,A.a5("InteroperabilityOffset",B.q,u),41483,A.a5("FlashEnergy",B.q,u),41484,A.a5("SpatialFrequencyResponse",B.q,u),41486,A.a5("FocalPlaneXResolution",B.q,u),41487,A.a5("FocalPlaneYResolution",B.q,u),41488,A.a5("FocalPlaneResolutionUnit",B.q,u),41492,A.a5("SubjectLocation",B.q,u),41493,A.a5("ExposureIndex",B.q,u),41495,A.a5("SensingMethod",B.q,u),41728,A.a5("FileSource",B.q,u),41729,A.a5("SceneType",B.q,u),41730,A.a5("CVAPattern",B.q,u),41985,A.a5("CustomRendered",B.q,u),41986,A.a5("ExposureMode",B.q,u),41987,A.a5("WhiteBalance",B.q,u),41988,A.a5("DigitalZoomRatio",B.q,u),41989,A.a5("FocalLengthIn35mmFilm",B.q,u),41990,A.a5("SceneCaptureType",B.q,u),41991,A.a5("GainControl",B.q,u),41992,A.a5("Contrast",B.q,u),41993,A.a5("Saturation",B.q,u),41994,A.a5("Sharpness",B.q,u),41995,A.a5("DeviceSettingDescription",B.q,u),41996,A.a5("SubjectDistanceRange",B.q,u),42016,A.a5("ImageUniqueID",B.q,u),42032,A.a5("CameraOwnerName",B.ax,u),42033,A.a5("BodySerialNumber",B.ax,u),42034,A.a5("LensSpecification",B.q,u),42035,A.a5("LensMake",B.ax,u),42036,A.a5("LensModel",B.ax,u),42037,A.a5("LensSerialNumber",B.ax,u),42240,A.a5("Gamma",B.c4,1),50341,A.a5("PrintIM",B.q,u),59932,A.a5("Padding",B.q,u),59933,A.a5("OffsetSchema",B.q,u),65e3,A.a5("OwnerName",B.ax,u),65001,A.a5("SerialNumber",B.ax,u)],x.p,C.T("a1r"))})
v($,"bWp","apQ",()=>C.tX(511))
v($,"bWq","bbL",()=>C.tX(511))
v($,"bWs","bbM",()=>A.blT(2041))
v($,"bWt","apR",()=>A.blT(225))
v($,"bWr","kn",()=>C.tX(766))
w($,"bVl","bu6",()=>A.bkR(0,0,0))
w($,"bXC","jB",()=>C.tX(1))
w($,"bXD","kp",()=>A.bBC($.jB().buffer,0,null))
w($,"bXv","jA",()=>C.bCL(1))
w($,"bXw","ko",()=>{var u,t=$.jA().buffer
C.rt(t,0,null)
u=D.c.bg(t.byteLength,2)
return new Int16Array(t,0,u)})
w($,"bXx","e5",()=>C.bCN(1))
w($,"bXz","hu",()=>C.aHU($.e5().buffer,0,null))
w($,"bXy","vQ",()=>A.bAu($.e5().buffer))
w($,"bXt","bhi",()=>C.bdO(1))
w($,"bXu","bvj",()=>A.bo9($.bhi().buffer,0))
w($,"bXr","bhh",()=>C.aHS(1))
w($,"bXs","bvi",()=>A.bo9($.bhh().buffer,0))
w($,"bXA","bhj",()=>A.bGH(1))
w($,"bXB","bvk",()=>{var u=$.bhj()
return A.bAv(u.ghx(u))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_16",e:"endPart",h:b})})($__dart_deferred_initializers__,"JcJ1PuS9oNv3VjpxD1oGE5LU0yE=");