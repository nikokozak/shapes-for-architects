typeof window=="undefined"&&(global.window={innerWidth:1e3});var Ge={VIEWER_BG_COLOR:14935011,VIEWER_LINE_COLOR:0,VIEWER_WIDTH:window.innerWidth*.5,VIEWER_HEIGHT:500,VIEWER_DOM_ELEMENT:"#three",VIEWER_CAMERA_POSITION:[0,-3,3],VIEWER_CENTER_BUTTON_ID:"viewer-center-button",VIEWER_DOWNLOAD_BUTTON_ID:"viewer-save-button",EDITOR_DOM_ELEMENT:"jar",EDITOR_FONT_FAMILY:"monospace",EDITOR_FONT_SIZE:"18px",EDITOR_PADDING:20,EDITOR_CORRECT_INDICATOR_COLOR:"#668c4a",EDITOR_INCORRECT_INDICATOR_COLOR:"#bb2020",SAMPLE_RATE:20,RESOLUTION:20,MAX_RANGE_NUM:1e5,MIN_RANGE_NUM:-1e5,MAX_RESOLUTION:140,MAX_SAMPLING:100,DROPDOWN_PARENT:".dropdown",DROPDOWN_BUTTON:".d-button",DROPDOWN_PANE:".d-body",DROPDOWN_LIST:"#example-list",DEFAULT_TEXT:`/* This is the editor status --> */

/* You can change settings like so: */ 

# resolution 35 
# sampling 50 
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

/* Declare ranges like so: */ 
{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

/* Declare x, y, and z formulas like so: */ 
x = u * sin(v) * cos(u)^5
y = u * sin(v) * sin(u)^5
z = cos(v)

/* The order of settings, then ranges, then formulas must be respected! */`};var ca="133",_n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ml=0,ua=1,wl=2,da=1,Sl=2,pi=3,mi=0,it=1,In=2,ha=1,en=0,gi=1,fa=2,pa=3,ma=4,El=5,Fn=100,Tl=101,Al=102,ga=103,va=104,Ll=200,Pl=201,Rl=202,Cl=203,xa=204,_a=205,Dl=206,Il=207,Fl=208,Nl=209,zl=210,Ol=0,Ul=1,Bl=2,Lr=3,Gl=4,Hl=5,kl=6,Vl=7,ya=0,Wl=1,$l=2,bn=0,Xl=1,ql=2,jl=3,Yl=4,Zl=5,ba=300,Gi=301,Hi=302,Pr=303,Rr=304,ki=306,Cr=307,Dr=1e3,St=1001,Ir=1002,Mt=1003,Ma=1004,wa=1005,Ut=1006,Jl=1007,Vi=1008,tn=1009,Ql=1010,Kl=1011,Fr=1012,ec=1013,Wi=1014,nn=1015,Nn=1016,tc=1017,nc=1018,ic=1019,$i=1020,rc=1021,vi=1022,_t=1023,sc=1024,ac=1025,oc=_t,Nr=1026,zr=1027,lc=1028,cc=1029,uc=1030,dc=1031,hc=1032,fc=1033,Sa=33776,Ea=33777,Ta=33778,Aa=33779,La=35840,Pa=35841,Ra=35842,Ca=35843,pc=36196,Da=37492,Ia=37496,mc=37808,gc=37809,vc=37810,xc=37811,_c=37812,yc=37813,bc=37814,Mc=37815,wc=37816,Sc=37817,Ec=37818,Tc=37819,Ac=37820,Lc=37821,Pc=36492,Rc=37840,Cc=37841,Dc=37842,Ic=37843,Fc=37844,Nc=37845,zc=37846,Oc=37847,Uc=37848,Bc=37849,Gc=37850,Hc=37851,kc=37852,Vc=37853,Wc=0,pt=3e3,Mn=3001,Or=3007,Ur=3002,$c=3003,Fa=3004,Na=3005,za=3006,Xc=3200,qc=3201,jc=0,Yc=1,Br=7680,Zc=519,Gr=35044,Hr=35048,Oa="300 es",Xt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},kr=Math.PI/180,Ua=180/Math.PI,dt=[];for(let r=0;r<256;r++)dt[r]=(r<16?"0":"")+r.toString(16);var Jc=typeof crypto!="undefined"&&"randomUUID"in crypto;function xi(){if(Jc)return crypto.randomUUID().toUpperCase();let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toUpperCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function Qc(r,e){return(r%e+e)%e}function Vr(r,e,t){return(1-t)*r+t*e}function Ba(r){return(r&r-1)==0&&r!==0}function Kc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var Ne=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ne.prototype.isVector2=!0;var at=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],h=n[2],m=n[5],_=n[8],v=i[0],L=i[3],p=i[6],u=i[1],y=i[4],x=i[7],M=i[2],T=i[5],b=i[8];return s[0]=o*v+a*u+c*M,s[3]=o*L+a*y+c*T,s[6]=o*p+a*x+c*b,s[1]=l*v+d*u+f*M,s[4]=l*L+d*y+f*T,s[7]=l*p+d*x+f*b,s[2]=h*v+m*u+_*M,s[5]=h*L+m*y+_*T,s[8]=h*p+m*x+_*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+i*s*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,h=a*c-d*s,m=l*s-o*c,_=t*f+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=f*v,e[1]=(i*l-d*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(d*t-i*c)*v,e[5]=(i*s-a*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],d=i[7];return i[0]=t*s+n*c,i[3]=t*o+n*l,i[6]=t*a+n*d,i[1]=-n*s+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*d,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};at.prototype.isMatrix3=!0;function Ga(r){if(r.length===0)return-Infinity;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function Xi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var zn,wn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=Xi("canvas")),zn.width=e.width,zn.height=e.height;let n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},eu=0,Tt=class extends Xt{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=St,i=St,s=Ut,o=Vi,a=_t,c=tn,l=1,d=pt){super();Object.defineProperty(this,"id",{value:eu++}),this.uuid=xi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=xi()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wr(i[o].image)):s.push(Wr(i[o]))}else s=Wr(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case St:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case St:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};Tt.DEFAULT_IMAGE=void 0;Tt.DEFAULT_MAPPING=ba;Tt.prototype.isTexture=!0;function Wr(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?wn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ot=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,o=.01,a=.1,c=e.elements,l=c[0],d=c[4],f=c[8],h=c[1],m=c[5],_=c[9],v=c[2],L=c[6],p=c[10];if(Math.abs(d-h)<o&&Math.abs(f-v)<o&&Math.abs(_-L)<o){if(Math.abs(d+h)<a&&Math.abs(f+v)<a&&Math.abs(_+L)<a&&Math.abs(l+m+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(m+1)/2,M=(p+1)/2,T=(d+h)/4,b=(f+v)/4,O=(_+L)/4;return y>x&&y>M?y<o?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=b/n):x>M?x<o?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=O/i):M<o?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=b/s,i=O/s),this.set(n,i,s,t),this}let u=Math.sqrt((L-_)*(L-_)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(u)<.001&&(u=1),this.x=(L-_)/u,this.y=(f-v)/u,this.z=(h-d)/u,this.w=Math.acos((l+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ot.prototype.isVector4=!0;var Bt=class extends Xt{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.texture=new Tt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.prototype.isWebGLRenderTarget=!0;var $r=class extends Bt{constructor(e,t,n){super(e,t,n);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};$r.prototype.isWebGLMultisampleRenderTarget=!0;var Ct=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],f=n[i+3],h=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(f!==v||c!==h||l!==m||d!==_){let L=1-a,p=c*h+l*m+d*_+f*v,u=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let M=Math.sqrt(y),T=Math.atan2(M,p*u);L=Math.sin(L*T)/M,a=Math.sin(a*T)/M}let x=a*u;if(c=c*L+h*x,l=l*L+m*x,d=d*L+_*x,f=f*L+v*x,L===1-a){let M=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=M,l*=M,d*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+d*f+c*m-l*h,e[t+1]=c*_+d*h+l*f-a*m,e[t+2]=l*_+d*m+a*h-c*f,e[t+3]=d*_-a*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),f=a(s/2),h=c(n/2),m=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=h*d*f+l*m*_,this._y=l*m*f-h*d*_,this._z=l*d*_+h*m*f,this._w=l*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+l*m*_,this._y=l*m*f-h*d*_,this._z=l*d*_-h*m*f,this._w=l*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-l*m*_,this._y=l*m*f+h*d*_,this._z=l*d*_+h*m*f,this._w=l*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-l*m*_,this._y=l*m*f+h*d*_,this._z=l*d*_-h*m*f,this._w=l*d*f+h*m*_;break;case"YZX":this._x=h*d*f+l*m*_,this._y=l*m*f+h*d*_,this._z=l*d*_-h*m*f,this._w=l*d*f-h*m*_;break;case"XZY":this._x=h*d*f-l*m*_,this._y=l*m*f-h*d*_,this._z=l*d*_+h*m*f,this._w=l*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],h=n+a+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(d-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+d)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+i*l-s*c,this._y=i*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),d=Math.atan2(l,a),f=Math.sin((1-t)*d)/l,h=Math.sin(t*d)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Ct.prototype.isQuaternion=!0;var I=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,d=c*n+a*t-s*i,f=c*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=l*c+h*-s+d*-a-f*-o,this.y=d*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};I.prototype.isVector3=!0;var Xr=new I,Ha=new Ct,Dt=class{constructor(e=new I(Infinity,Infinity,Infinity),t=new I(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,i=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let d=e[c],f=e[c+1],h=e[c+2];d<t&&(t=d),f<n&&(n=f),h<i&&(i=h),d>s&&(s=d),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,i=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let d=e.getX(c),f=e.getY(c),h=e.getZ(c);d<t&&(t=d),f<n&&(n=f),h<i&&(i=h),d>s&&(s=d),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox),qr.applyMatrix4(e.matrixWorld),this.union(qr));let n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),qi.subVectors(this.max,yi),On.subVectors(e.a,yi),Un.subVectors(e.b,yi),Bn.subVectors(e.c,yi),rn.subVectors(Un,On),sn.subVectors(Bn,Un),Sn.subVectors(On,Bn);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-Sn.z,Sn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,Sn.z,0,-Sn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-Sn.y,Sn.x,0];return!jr(t,On,Un,Bn,qi)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,On,Un,Bn,qi))?!1:(ji.crossVectors(rn,sn),t=[ji.x,ji.y,ji.z],jr(t,On,Un,Bn,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _i.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Dt.prototype.isBox3=!0;var qt=[new I,new I,new I,new I,new I,new I,new I,new I],_i=new I,qr=new Dt,On=new I,Un=new I,Bn=new I,rn=new I,sn=new I,Sn=new I,yi=new I,qi=new I,ji=new I,En=new I;function jr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){En.fromArray(r,s);let a=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),c=e.dot(En),l=t.dot(En),d=n.dot(En);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var tu=new Dt,ka=new I,Yr=new I,Zr=new I,Gn=class{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Zr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Yr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ka.copy(e.center).add(Yr)),this.expandByPoint(ka.copy(e.center).sub(Yr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jt=new I,Jr=new I,Yi=new I,an=new I,Qr=new I,Zi=new I,Kr=new I,Hn=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jr.copy(e).add(t).multiplyScalar(.5),Yi.copy(t).sub(e).normalize(),an.copy(this.origin).sub(Jr);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Yi),a=an.dot(this.direction),c=-an.dot(Yi),l=an.lengthSq(),d=Math.abs(1-o*o),f,h,m,_;if(d>0)if(f=o*c-a,h=o*a-c,_=s*d,f>=0)if(h>=-_)if(h<=_){let v=1/d;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Yi).multiplyScalar(h).add(Jr),m}intersectSphere(e,t){jt.subVectors(e.center,this.origin);let n=jt.dot(this.direction),i=jt.dot(jt)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,i,s){Qr.subVectors(t,e),Zi.subVectors(n,e),Kr.crossVectors(Qr,Zi);let o=this.direction.dot(Kr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,e);let c=a*this.direction.dot(Zi.crossVectors(an,Zi));if(c<0)return null;let l=a*this.direction.dot(Qr.cross(an));if(l<0||c+l>o)return null;let d=-a*an.dot(Kr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,c,l,d,f,h,m,_,v,L){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=h,p[3]=m,p[7]=_,p[11]=v,p[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/kn.setFromMatrixColumn(e,0).length(),s=1/kn.setFromMatrixColumn(e,1).length(),o=1/kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*d,m=o*f,_=a*d,v=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*d,m=c*f,_=l*d,v=l*f;t[0]=h+v*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*d,m=c*f,_=l*d,v=l*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*d,m=o*f,_=a*d,v=a*f;t[0]=c*d,t[4]=_*l-m,t[8]=h*l+v,t[1]=c*f,t[5]=v*l+h,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,_=a*c,v=a*l;t[0]=c*d,t[4]=v-h*f,t[8]=_*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*f+_,t[10]=h-v*f}else if(e.order==="XZY"){let h=o*c,m=o*l,_=a*c,v=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=h*f+v,t[5]=o*d,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*d,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,iu)}lookAt(e,t,n){let i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),on.crossVectors(n,At),on.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),on.crossVectors(n,At)),on.normalize(),Ji.crossVectors(At,on),i[0]=on.x,i[4]=Ji.x,i[8]=At.x,i[1]=on.y,i[5]=Ji.y,i[9]=At.y,i[2]=on.z,i[6]=Ji.z,i[10]=At.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],h=n[9],m=n[13],_=n[2],v=n[6],L=n[10],p=n[14],u=n[3],y=n[7],x=n[11],M=n[15],T=i[0],b=i[4],O=i[8],H=i[12],W=i[1],D=i[5],ie=i[9],k=i[13],$=i[2],q=i[6],X=i[10],V=i[14],ee=i[3],oe=i[7],fe=i[11],se=i[15];return s[0]=o*T+a*W+c*$+l*ee,s[4]=o*b+a*D+c*q+l*oe,s[8]=o*O+a*ie+c*X+l*fe,s[12]=o*H+a*k+c*V+l*se,s[1]=d*T+f*W+h*$+m*ee,s[5]=d*b+f*D+h*q+m*oe,s[9]=d*O+f*ie+h*X+m*fe,s[13]=d*H+f*k+h*V+m*se,s[2]=_*T+v*W+L*$+p*ee,s[6]=_*b+v*D+L*q+p*oe,s[10]=_*O+v*ie+L*X+p*fe,s[14]=_*H+v*k+L*V+p*se,s[3]=u*T+y*W+x*$+M*ee,s[7]=u*b+y*D+x*q+M*oe,s[11]=u*O+y*ie+x*X+M*fe,s[15]=u*H+y*k+x*V+M*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],v=e[7],L=e[11],p=e[15];return _*(+s*c*f-i*l*f-s*a*h+n*l*h+i*a*m-n*c*m)+v*(+t*c*m-t*l*h+s*o*h-i*o*m+i*l*d-s*c*d)+L*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*d-n*l*d)+p*(-i*a*d-t*c*f+t*a*h+i*o*f-n*o*h+n*c*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],v=e[13],L=e[14],p=e[15],u=f*L*l-v*h*l+v*c*m-a*L*m-f*c*p+a*h*p,y=_*h*l-d*L*l-_*c*m+o*L*m+d*c*p-o*h*p,x=d*v*l-_*f*l+_*a*m-o*v*m-d*a*p+o*f*p,M=_*f*c-d*v*c-_*a*h+o*v*h+d*a*L-o*f*L,T=t*u+n*y+i*x+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return e[0]=u*b,e[1]=(v*h*s-f*L*s-v*i*m+n*L*m+f*i*p-n*h*p)*b,e[2]=(a*L*s-v*c*s+v*i*l-n*L*l-a*i*p+n*c*p)*b,e[3]=(f*c*s-a*h*s-f*i*l+n*h*l+a*i*m-n*c*m)*b,e[4]=y*b,e[5]=(d*L*s-_*h*s+_*i*m-t*L*m-d*i*p+t*h*p)*b,e[6]=(_*c*s-o*L*s-_*i*l+t*L*l+o*i*p-t*c*p)*b,e[7]=(o*h*s-d*c*s+d*i*l-t*h*l-o*i*m+t*c*m)*b,e[8]=x*b,e[9]=(_*f*s-d*v*s-_*n*m+t*v*m+d*n*p-t*f*p)*b,e[10]=(o*v*s-_*a*s+_*n*l-t*v*l-o*n*p+t*a*p)*b,e[11]=(d*a*s-o*f*s-d*n*l+t*f*l+o*n*m-t*a*m)*b,e[12]=M*b,e[13]=(d*v*i-_*f*i+_*n*h-t*v*h-d*n*L+t*f*L)*b,e[14]=(_*a*i-o*v*i-_*n*c+t*v*c+o*n*L-t*a*L)*b,e[15]=(o*f*i-d*a*i+d*n*c-t*f*c-o*n*h+t*a*h)*b,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,f=a+a,h=s*l,m=s*d,_=s*f,v=o*d,L=o*f,p=a*f,u=c*l,y=c*d,x=c*f,M=n.x,T=n.y,b=n.z;return i[0]=(1-(v+p))*M,i[1]=(m+x)*M,i[2]=(_-y)*M,i[3]=0,i[4]=(m-x)*T,i[5]=(1-(h+p))*T,i[6]=(L+u)*T,i[7]=0,i[8]=(_+y)*b,i[9]=(L-u)*b,i[10]=(1-(h+v))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=kn.set(i[0],i[1],i[2]).length(),o=kn.set(i[4],i[5],i[6]).length(),a=kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);let l=1/s,d=1/o,f=1/a;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=d,Nt.elements[5]*=d,Nt.elements[6]*=d,Nt.elements[8]*=f,Nt.elements[9]*=f,Nt.elements[10]*=f,t.setFromRotationMatrix(Nt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(t-e),l=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,c=1/(t-e),l=1/(n-i),d=1/(o-s),f=(t+e)*c,h=(n+i)*l,m=(o+s)*d;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Oe.prototype.isMatrix4=!0;var kn=new I,Nt=new Oe,nu=new I(0,0,0),iu=new I(1,1,1),on=new I,Ji=new I,At=new I,Va=new Oe,Wa=new Ct,Tn=class{constructor(e=0,t=0,n=0,i=Tn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new I(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Tn.prototype.isEuler=!0;Tn.DefaultOrder="XYZ";Tn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var $a=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},ru=0,Xa=new I,Vn=new Ct,Yt=new Oe,Qi=new I,bi=new I,su=new I,au=new Ct,qa=new I(1,0,0),ja=new I(0,1,0),Ya=new I(0,0,1),ou={type:"added"},Za={type:"removed"},et=class extends Xt{constructor(){super();Object.defineProperty(this,"id",{value:ru++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DefaultUp.clone();let e=new I,t=new Tn,n=new Ct,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new at}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(qa,e)}rotateY(e){return this.rotateOnAxis(ja,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Xa.copy(e).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qa,e)}translateY(e){return this.translateOnAxis(ja,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(bi,Qi,this.up):Yt.lookAt(Qi,bi,this.up),this.quaternion.setFromRotationMatrix(Yt),i&&(Yt.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix(Yt),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ou)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Za)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Za)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};et.DefaultUp=new I(0,1,0);et.DefaultMatrixAutoUpdate=!0;et.prototype.isObject3D=!0;var zt=new I,Zt=new I,es=new I,Jt=new I,Wn=new I,$n=new I,Ja=new I,ts=new I,ns=new I,is=new I,rt=class{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zt.subVectors(e,t),i.cross(zt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){zt.subVectors(i,t),Zt.subVectors(n,t),es.subVectors(e,t);let o=zt.dot(zt),a=zt.dot(Zt),c=zt.dot(es),l=Zt.dot(Zt),d=Zt.dot(es),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);let h=1/f,m=(l*c-a*d)*h,_=(o*d-a*c)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jt),Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Jt),c.set(0,0),c.addScaledVector(s,Jt.x),c.addScaledVector(o,Jt.y),c.addScaledVector(a,Jt.z),c}static isFrontFacing(e,t,n,i){return zt.subVectors(n,t),Zt.subVectors(e,t),zt.cross(Zt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),zt.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return rt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Wn.subVectors(i,n),$n.subVectors(s,n),ts.subVectors(e,n);let c=Wn.dot(ts),l=$n.dot(ts);if(c<=0&&l<=0)return t.copy(n);ns.subVectors(e,i);let d=Wn.dot(ns),f=$n.dot(ns);if(d>=0&&f<=d)return t.copy(i);let h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Wn,o);is.subVectors(e,s);let m=Wn.dot(is),_=$n.dot(is);if(_>=0&&m<=_)return t.copy(s);let v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector($n,a);let L=d*_-m*f;if(L<=0&&f-d>=0&&m-_>=0)return Ja.subVectors(s,i),a=(f-d)/(f-d+(m-_)),t.copy(i).addScaledVector(Ja,a);let p=1/(L+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(Wn,o).addScaledVector($n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lu=0,ln=class extends Xt{constructor(){super();Object.defineProperty(this,"id",{value:lu++}),this.uuid=xi(),this.name="",this.type="Material",this.fog=!0,this.blending=gi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.format=_t,this.transparent=!1,this.blendSrc=xa,this.blendDst=_a,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ha;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==_t&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};ln.prototype.isMaterial=!0;var Qa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function rs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function as(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var We=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Qc(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=rs(s,i,e+1/3),this.g=rs(s,i,e),this.b=rs(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Qa[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let d=s-o;switch(c=l<=.5?d/(s+o):d/(2-s-o),s){case t:a=(n-i)/d+(n<i?6:0);break;case n:a=(i-t)/d+2;break;case i:a=(t-n)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(Ki);let n=Vr(Ot.h,Ki.h,t),i=Vr(Ot.s,Ki.s,t),s=Vr(Ot.l,Ki.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};We.NAMES=Qa;We.prototype.isColor=!0;We.prototype.r=1;We.prototype.g=1;We.prototype.b=1;var er=class extends ln{constructor(e){super();this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};er.prototype.isMeshBasicMaterial=!0;var Je=new I,tr=new Ne,ht=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Gr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new We),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Ne),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new I),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new ot),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};ht.prototype.isBufferAttribute=!0;var os=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ls=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Qt=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},cu=0,It=new Oe,cs=new et,Xn=new I,Lt=new Dt,Mi=new Dt,lt=new I,tt=class extends Xt{constructor(){super();Object.defineProperty(this,"id",{value:cu++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ga(e)>65535?ls:os)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return cs.lookAt(e),cs.updateMatrix(),this.applyMatrix4(cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-Infinity,-Infinity,-Infinity),new I(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,Infinity);return}if(e){let n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Lt.min,Mi.min),Lt.expandByPoint(lt),lt.addVectors(Lt.max,Mi.max),Lt.expandByPoint(lt)):(Lt.expandByPoint(Mi.min),Lt.expandByPoint(Mi.max))}Lt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(lt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)lt.fromBufferAttribute(a,l),c&&(Xn.fromBufferAttribute(e,l),lt.add(Xn)),i=Math.max(i,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new ht(new Float32Array(4*a),4));let c=t.tangent.array,l=[],d=[];for(let W=0;W<a;W++)l[W]=new I,d[W]=new I;let f=new I,h=new I,m=new I,_=new Ne,v=new Ne,L=new Ne,p=new I,u=new I;function y(W,D,ie){f.fromArray(i,W*3),h.fromArray(i,D*3),m.fromArray(i,ie*3),_.fromArray(o,W*2),v.fromArray(o,D*2),L.fromArray(o,ie*2),h.sub(f),m.sub(f),v.sub(_),L.sub(_);let k=1/(v.x*L.y-L.x*v.y);!isFinite(k)||(p.copy(h).multiplyScalar(L.y).addScaledVector(m,-v.y).multiplyScalar(k),u.copy(m).multiplyScalar(v.x).addScaledVector(h,-L.x).multiplyScalar(k),l[W].add(p),l[D].add(p),l[ie].add(p),d[W].add(u),d[D].add(u),d[ie].add(u))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let W=0,D=x.length;W<D;++W){let ie=x[W],k=ie.start,$=ie.count;for(let q=k,X=k+$;q<X;q+=3)y(n[q+0],n[q+1],n[q+2])}let M=new I,T=new I,b=new I,O=new I;function H(W){b.fromArray(s,W*3),O.copy(b);let D=l[W];M.copy(D),M.sub(b.multiplyScalar(b.dot(D))).normalize(),T.crossVectors(O,D);let k=T.dot(d[W])<0?-1:1;c[W*4]=M.x,c[W*4+1]=M.y,c[W*4+2]=M.z,c[W*4+3]=k}for(let W=0,D=x.length;W<D;++W){let ie=x[W],k=ie.start,$=ie.count;for(let q=k,X=k+$;q<X;q+=3)H(n[q+0]),H(n[q+1]),H(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,d=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){let _=e.getX(h+0),v=e.getX(h+1),L=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,L),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,L),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(L,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,d=Math.min(c.length,o.length-l);for(let f=0,h=l;f<d;f++,h++)o[h]=c[f]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,h=new l.constructor(c.length*d),m=0,_=0;for(let v=0,L=c.length;v<L;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*d;for(let p=0;p<d;p++)h[_++]=l[m++]}return new ht(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new tt,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){let h=l[d],m=e(h,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){let m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let d=i[l];this.setAttribute(l,d.clone(t))}let s=e.morphAttributes;for(let l in s){let d=[],f=s[l];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};tt.prototype.isBufferGeometry=!0;var Ka=new Oe,qn=new Hn,us=new Gn,cn=new I,un=new I,dn=new I,ds=new I,hs=new I,fs=new I,nr=new I,ir=new I,rr=new I,sr=new Ne,ar=new Ne,or=new Ne,ps=new I,lr=new I,Ft=class extends et{constructor(e=new tt,t=new er){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),e.ray.intersectsSphere(us)===!1)||(Ka.copy(s).invert(),qn.copy(e.ray).applyMatrix4(Ka),n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,c=n.attributes.position,l=n.morphAttributes.position,d=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let v=0,L=m.length;v<L;v++){let p=m[v],u=i[p.materialIndex],y=Math.max(p.start,_.start),x=Math.min(a.count,Math.min(p.start+p.count,_.start+_.count));for(let M=y,T=x;M<T;M+=3){let b=a.getX(M),O=a.getX(M+1),H=a.getX(M+2);o=cr(this,u,e,qn,c,l,d,f,h,b,O,H),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let v=Math.max(0,_.start),L=Math.min(a.count,_.start+_.count);for(let p=v,u=L;p<u;p+=3){let y=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);o=cr(this,i,e,qn,c,l,d,f,h,y,x,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let v=0,L=m.length;v<L;v++){let p=m[v],u=i[p.materialIndex],y=Math.max(p.start,_.start),x=Math.min(c.count,Math.min(p.start+p.count,_.start+_.count));for(let M=y,T=x;M<T;M+=3){let b=M,O=M+1,H=M+2;o=cr(this,u,e,qn,c,l,d,f,h,b,O,H),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let v=Math.max(0,_.start),L=Math.min(c.count,_.start+_.count);for(let p=v,u=L;p<u;p+=3){let y=p,x=p+1,M=p+2;o=cr(this,i,e,qn,c,l,d,f,h,y,x,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Ft.prototype.isMesh=!0;function uu(r,e,t,n,i,s,o,a){let c;if(e.side===it?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==In,a),c===null)return null;lr.copy(a),lr.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(lr);return l<t.near||l>t.far?null:{distance:l,point:lr.clone(),object:r}}function cr(r,e,t,n,i,s,o,a,c,l,d,f){cn.fromBufferAttribute(i,l),un.fromBufferAttribute(i,d),dn.fromBufferAttribute(i,f);let h=r.morphTargetInfluences;if(s&&h){nr.set(0,0,0),ir.set(0,0,0),rr.set(0,0,0);for(let _=0,v=s.length;_<v;_++){let L=h[_],p=s[_];L!==0&&(ds.fromBufferAttribute(p,l),hs.fromBufferAttribute(p,d),fs.fromBufferAttribute(p,f),o?(nr.addScaledVector(ds,L),ir.addScaledVector(hs,L),rr.addScaledVector(fs,L)):(nr.addScaledVector(ds.sub(cn),L),ir.addScaledVector(hs.sub(un),L),rr.addScaledVector(fs.sub(dn),L)))}cn.add(nr),un.add(ir),dn.add(rr)}r.isSkinnedMesh&&(r.boneTransform(l,cn),r.boneTransform(d,un),r.boneTransform(f,dn));let m=uu(r,e,t,n,cn,un,dn,ps);if(m){a&&(sr.fromBufferAttribute(a,l),ar.fromBufferAttribute(a,d),or.fromBufferAttribute(a,f),m.uv=rt.getUV(ps,cn,un,dn,sr,ar,or,new Ne)),c&&(sr.fromBufferAttribute(c,l),ar.fromBufferAttribute(c,d),or.fromBufferAttribute(c,f),m.uv2=rt.getUV(ps,cn,un,dn,sr,ar,or,new Ne));let _={a:l,b:d,c:f,normal:new I,materialIndex:0};rt.getNormal(cn,un,dn,_.normal),m.face=_}return m}var jn=class extends tt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],f=[],h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function _(v,L,p,u,y,x,M,T,b,O,H){let W=x/b,D=M/O,ie=x/2,k=M/2,$=T/2,q=b+1,X=O+1,V=0,ee=0,oe=new I;for(let fe=0;fe<X;fe++){let se=fe*D-k;for(let ye=0;ye<q;ye++){let P=ye*W-ie;oe[v]=P*u,oe[L]=se*y,oe[p]=$,l.push(oe.x,oe.y,oe.z),oe[v]=0,oe[L]=0,oe[p]=T>0?1:-1,d.push(oe.x,oe.y,oe.z),f.push(ye/b),f.push(1-fe/O),V+=1}}for(let fe=0;fe<O;fe++)for(let se=0;se<b;se++){let ye=h+se+q*fe,P=h+se+q*(fe+1),z=h+(se+1)+q*(fe+1),j=h+(se+1)+q*fe;c.push(ye,P,j),c.push(P,z,j),ee+=6}a.addGroup(m,ee,H),m+=ee,h+=V}}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yn(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(r){let e={};for(let t=0;t<r.length;t++){let n=Yn(r[t]);for(let i in n)e[i]=n[i]}return e}var du={clone:Yn,merge:mt},hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends ln{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=hu,this.fragmentShader=fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};hn.prototype.isShaderMaterial=!0;var ur=class extends et{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};ur.prototype.isCamera=!0;var gt=class extends ur{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};gt.prototype.isPerspectiveCamera=!0;var Zn=90,Jn=1,dr=class extends et{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new gt(Zn,Jn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);let s=new gt(Zn,Jn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);let o=new gt(Zn,Jn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);let a=new gt(Zn,Jn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);let c=new gt(Zn,Jn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,1)),this.add(c);let l=new gt(Zn,Jn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,c,l]=this.children,d=e.xr.enabled,f=e.getRenderTarget();e.xr.enabled=!1;let h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(f),e.xr.enabled=d}},wi=class extends Tt{constructor(e,t,n,i,s,o,a,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,i,s,o,a,c,l,d),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};wi.prototype.isCubeTexture=!0;var ms=class extends Bt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new wi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=_t,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jn(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:Yn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:en});s.uniforms.tEquirect.value=t;let o=new Ft(i,s),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Ut),new dr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};ms.prototype.isWebGLCubeRenderTarget=!0;var gs=new I,pu=new I,mu=new at,Gt=class{constructor(e=new I(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=gs.subVectors(n,t).cross(pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(gs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mu.getNormalMatrix(e),i=this.coplanarPoint(gs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Gt.prototype.isPlane=!0;var Qn=new Gn,hr=new I,fr=class{constructor(e=new Gt,t=new Gt,n=new Gt,i=new Gt,s=new Gt,o=new Gt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],d=n[6],f=n[7],h=n[8],m=n[9],_=n[10],v=n[11],L=n[12],p=n[13],u=n[14],y=n[15];return t[0].setComponents(a-i,f-c,v-h,y-L).normalize(),t[1].setComponents(a+i,f+c,v+h,y+L).normalize(),t[2].setComponents(a+s,f+l,v+m,y+p).normalize(),t[3].setComponents(a-s,f-l,v-m,y-p).normalize(),t[4].setComponents(a-o,f-d,v-_,y-u).normalize(),t[5].setComponents(a+o,f+d,v+_,y+u).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gu(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,d){let f=l.array,h=l.usage,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,f,h),l.onUploadCallback();let _=5126;return f instanceof Float32Array?_=5126:f instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?l.isFloat16BufferAttribute?t?_=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=5123:f instanceof Int16Array?_=5122:f instanceof Uint32Array?_=5125:f instanceof Int32Array?_=5124:f instanceof Int8Array?_=5120:(f instanceof Uint8Array||f instanceof Uint8ClampedArray)&&(_=5121),{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,d,f){let h=d.array,m=d.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);d&&(r.deleteBuffer(d.buffer),n.delete(l))}function c(l,d){if(l.isGLBufferAttribute){let h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);f===void 0?n.set(l,i(l,d)):f.version<l.version&&(s(f.buffer,l,d),f.version=l.version)}return{get:o,remove:a,update:c}}var pr=class extends tt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,f=e/a,h=t/c,m=[],_=[],v=[],L=[];for(let p=0;p<d;p++){let u=p*h-o;for(let y=0;y<l;y++){let x=y*f-s;_.push(x,-u,0),v.push(0,0,1),L.push(y/a),L.push(1-p/c)}}for(let p=0;p<c;p++)for(let u=0;u<a;u++){let y=u+l*p,x=u+l*(p+1),M=u+1+l*(p+1),T=u+1+l*p;m.push(y,x,T),m.push(x,M,T)}this.setIndex(m),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(L,2))}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}},vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu="vec3 transformed = vec3( position );",Su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,Tu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ed=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rd=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ld=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$d=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,th=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nh=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,ih=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,rh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,sh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ah=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,oh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ch=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hh=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ph=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eh=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Th=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ph=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Ch=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ih=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:vu,alphamap_pars_fragment:xu,alphatest_fragment:_u,alphatest_pars_fragment:yu,aomap_fragment:bu,aomap_pars_fragment:Mu,begin_vertex:wu,beginnormal_vertex:Su,bsdfs:Eu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:Au,clipping_planes_pars_fragment:Lu,clipping_planes_pars_vertex:Pu,clipping_planes_vertex:Ru,color_fragment:Cu,color_pars_fragment:Du,color_pars_vertex:Iu,color_vertex:Fu,common:Nu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:Uu,displacementmap_vertex:Bu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Hu,encodings_fragment:ku,encodings_pars_fragment:Vu,envmap_fragment:Wu,envmap_common_pars_fragment:$u,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:rd,envmap_vertex:ju,fog_vertex:Yu,fog_pars_vertex:Zu,fog_fragment:Ju,fog_pars_fragment:Qu,gradientmap_pars_fragment:Ku,lightmap_fragment:ed,lightmap_pars_fragment:td,lights_lambert_vertex:nd,lights_pars_begin:id,lights_toon_fragment:sd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:ud,lights_fragment_begin:dd,lights_fragment_maps:hd,lights_fragment_end:fd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:vd,map_fragment:xd,map_pars_fragment:_d,map_particle_fragment:yd,map_particle_pars_fragment:bd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:wd,morphnormal_vertex:Sd,morphtarget_pars_vertex:Ed,morphtarget_vertex:Td,normal_fragment_begin:Ad,normal_fragment_maps:Ld,normal_pars_fragment:Pd,normal_pars_vertex:Rd,normal_vertex:Cd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Nd,output_fragment:zd,packing:Od,premultiplied_alpha_fragment:Ud,project_vertex:Bd,dithering_fragment:Gd,dithering_pars_fragment:Hd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:$d,shadowmap_vertex:Xd,shadowmask_pars_fragment:qd,skinbase_vertex:jd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Jd,specularmap_fragment:Qd,specularmap_pars_fragment:Kd,tonemapping_fragment:eh,tonemapping_pars_fragment:th,transmission_fragment:nh,transmission_pars_fragment:ih,uv_pars_fragment:rh,uv_pars_vertex:sh,uv_vertex:ah,uv2_pars_fragment:oh,uv2_pars_vertex:lh,uv2_vertex:ch,worldpos_vertex:uh,background_vert:dh,background_frag:hh,cube_vert:fh,cube_frag:ph,depth_vert:mh,depth_frag:gh,distanceRGBA_vert:vh,distanceRGBA_frag:xh,equirect_vert:_h,equirect_frag:yh,linedashed_vert:bh,linedashed_frag:Mh,meshbasic_vert:wh,meshbasic_frag:Sh,meshlambert_vert:Eh,meshlambert_frag:Th,meshmatcap_vert:Ah,meshmatcap_frag:Lh,meshnormal_vert:Ph,meshnormal_frag:Rh,meshphong_vert:Ch,meshphong_frag:Dh,meshphysical_vert:Ih,meshphysical_frag:Fh,meshtoon_vert:Nh,meshtoon_frag:zh,points_vert:Oh,points_frag:Uh,shadow_vert:Bh,shadow_frag:Gh,sprite_vert:Hh,sprite_frag:kh},ue={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new at},uv2Transform:{value:new at},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}}},Ht={basic:{uniforms:mt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:mt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:mt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:mt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:mt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:mt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:mt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:mt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:mt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:mt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:mt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null}},vertexShader:He.background_vert,fragmentShader:He.background_frag},cube:{uniforms:mt([ue.envmap,{opacity:{value:1}}]),vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:mt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:mt([ue.lights,ue.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Ht.physical={uniforms:mt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new We(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new We(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new We(1,1,1)},specularTintMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};function Vh(r,e,t,n,i){let s=new We(0),o=0,a,c,l=null,d=0,f=null;function h(_,v){let L=!1,p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));let u=r.xr,y=u.getSession&&u.getSession();y&&y.environmentBlendMode==="additive"&&(p=null),p===null?m(s,o):p&&p.isColor&&(m(p,1),L=!0),(r.autoClear||L)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ki)?(c===void 0&&(c=new Ft(new jn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Yn(Ht.cube.uniforms),vertexShader:Ht.cube.vertexShader,fragmentShader:Ht.cube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(l!==p||d!==p.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,l=p,d=p.version,f=r.toneMapping),_.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Ft(new pr(2,2),new hn({name:"BackgroundMaterial",uniforms:Yn(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||d!==p.version||f!==r.toneMapping)&&(a.material.needsUpdate=!0,l=p,d=p.version,f=r.toneMapping),_.unshift(a,a.geometry,a.material,0,0,null))}function m(_,v){t.buffers.color.setClear(_.r,_.g,_.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(_,v=1){s.set(_),o=v,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(s,o)},render:h}}function Wh(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=v(null),l=c;function d(k,$,q,X,V){let ee=!1;if(o){let oe=_(X,q,$);l!==oe&&(l=oe,h(l.object)),ee=L(X,V),ee&&p(X,V)}else{let oe=$.wireframe===!0;(l.geometry!==X.id||l.program!==q.id||l.wireframe!==oe)&&(l.geometry=X.id,l.program=q.id,l.wireframe=oe,ee=!0)}k.isInstancedMesh===!0&&(ee=!0),V!==null&&t.update(V,34963),ee&&(b(k,$,q,X),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(k){return n.isWebGL2?r.bindVertexArray(k):s.bindVertexArrayOES(k)}function m(k){return n.isWebGL2?r.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function _(k,$,q){let X=q.wireframe===!0,V=a[k.id];V===void 0&&(V={},a[k.id]=V);let ee=V[$.id];ee===void 0&&(ee={},V[$.id]=ee);let oe=ee[X];return oe===void 0&&(oe=v(f()),ee[X]=oe),oe}function v(k){let $=[],q=[],X=[];for(let V=0;V<i;V++)$[V]=0,q[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:q,attributeDivisors:X,object:k,attributes:{},index:null}}function L(k,$){let q=l.attributes,X=k.attributes,V=0;for(let ee in X){let oe=q[ee],fe=X[ee];if(oe===void 0||oe.attribute!==fe||oe.data!==fe.data)return!0;V++}return l.attributesNum!==V||l.index!==$}function p(k,$){let q={},X=k.attributes,V=0;for(let ee in X){let oe=X[ee],fe={};fe.attribute=oe,oe.data&&(fe.data=oe.data),q[ee]=fe,V++}l.attributes=q,l.attributesNum=V,l.index=$}function u(){let k=l.newAttributes;for(let $=0,q=k.length;$<q;$++)k[$]=0}function y(k){x(k,0)}function x(k,$){let q=l.newAttributes,X=l.enabledAttributes,V=l.attributeDivisors;q[k]=1,X[k]===0&&(r.enableVertexAttribArray(k),X[k]=1),V[k]!==$&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,$),V[k]=$)}function M(){let k=l.newAttributes,$=l.enabledAttributes;for(let q=0,X=$.length;q<X;q++)$[q]!==k[q]&&(r.disableVertexAttribArray(q),$[q]=0)}function T(k,$,q,X,V,ee){n.isWebGL2===!0&&(q===5124||q===5125)?r.vertexAttribIPointer(k,$,q,V,ee):r.vertexAttribPointer(k,$,q,X,V,ee)}function b(k,$,q,X){if(n.isWebGL2===!1&&(k.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;u();let V=X.attributes,ee=q.getAttributes(),oe=$.defaultAttributeValues;for(let fe in ee){let se=ee[fe];if(se.location>=0){let ye=V[fe];if(ye===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(ye=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(ye=k.instanceColor)),ye!==void 0){let P=ye.normalized,z=ye.itemSize,j=t.get(ye);if(j===void 0)continue;let N=j.buffer,me=j.type,ge=j.bytesPerElement;if(ye.isInterleavedBufferAttribute){let ae=ye.data,ce=ae.stride,Se=ye.offset;if(ae&&ae.isInstancedInterleavedBuffer){for(let Me=0;Me<se.locationSize;Me++)x(se.location+Me,ae.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Me=0;Me<se.locationSize;Me++)y(se.location+Me);r.bindBuffer(34962,N);for(let Me=0;Me<se.locationSize;Me++)T(se.location+Me,z/se.locationSize,me,P,ce*ge,(Se+z/se.locationSize*Me)*ge)}else{if(ye.isInstancedBufferAttribute){for(let ae=0;ae<se.locationSize;ae++)x(se.location+ae,ye.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ae=0;ae<se.locationSize;ae++)y(se.location+ae);r.bindBuffer(34962,N);for(let ae=0;ae<se.locationSize;ae++)T(se.location+ae,z/se.locationSize,me,P,z*ge,z/se.locationSize*ae*ge)}}else if(oe!==void 0){let P=oe[fe];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(se.location,P);break;case 3:r.vertexAttrib3fv(se.location,P);break;case 4:r.vertexAttrib4fv(se.location,P);break;default:r.vertexAttrib1fv(se.location,P)}}}}M()}function O(){D();for(let k in a){let $=a[k];for(let q in $){let X=$[q];for(let V in X)m(X[V].object),delete X[V];delete $[q]}delete a[k]}}function H(k){if(a[k.id]===void 0)return;let $=a[k.id];for(let q in $){let X=$[q];for(let V in X)m(X[V].object),delete X[V];delete $[q]}delete a[k.id]}function W(k){for(let $ in a){let q=a[$];if(q[k.id]===void 0)continue;let X=q[k.id];for(let V in X)m(X[V].object),delete X[V];delete q[k.id]}}function D(){ie(),l!==c&&(l=c,h(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:D,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:H,releaseStatesOfProgram:W,initAttributes:u,enableAttribute:y,disableUnusedAttributes:M}}function $h(r,e,t,n){let i=n.isWebGL2,s;function o(l){s=l}function a(l,d){r.drawArrays(s,l,d),t.update(d,s,1)}function c(l,d,f){if(f===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,d,f),t.update(d,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Xh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),v=r.getParameter(34921),L=r.getParameter(36347),p=r.getParameter(36348),u=r.getParameter(36349),y=h>0,x=o||e.has("OES_texture_float"),M=y&&x,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:L,maxVaryings:p,maxFragmentUniforms:u,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:T}}function qh(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Gt,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){let _=f.length!==0||h||n!==0||i;return i=h,t=d(f,m,0),n=f.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,h,m){let _=f.clippingPlanes,v=f.clipIntersection,L=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!L)s?d(null):l();else{let u=s?0:n,y=u*4,x=p.clippingState||null;c.value=x,x=d(_,h,y,m);for(let M=0;M!==y;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=u}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,m,_){let v=f!==null?f.length:0,L=null;if(v!==0){if(L=c.value,_!==!0||L===null){let p=m+v*4,u=h.matrixWorldInverse;a.getNormalMatrix(u),(L===null||L.length<p)&&(L=new Float32Array(p));for(let y=0,x=m;y!==v;++y,x+=4)o.copy(f[y]).applyMatrix4(u,a),o.normal.toArray(L,x),L[x+3]=o.constant}c.value=L,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,L}}function jh(r){let e=new WeakMap;function t(o,a){return a===Pr?o.mapping=Gi:a===Rr&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===Pr||a===Rr)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=r.getRenderTarget(),d=new ms(c.height/2);return d.fromEquirectangularTexture(r,o),e.set(o,d),r.setRenderTarget(l),o.addEventListener("dispose",i),t(d.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var vs=class extends ur{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};vs.prototype.isOrthographicCamera=!0;var Si=class extends hn{constructor(e){super(e);this.type="RawShaderMaterial"}};Si.prototype.isRawShaderMaterial=!0;var Kn=4,fn=8,kt=Math.pow(2,fn),to=[.125,.215,.35,.446,.526,.582],no=fn-Kn+1+to.length,ei=20,pn={[pt]:0,[Mn]:1,[Ur]:2,[Fa]:3,[Na]:4,[za]:5,[Or]:6},xs=new vs,{_lodPlanes:Ei,_sizeLods:io,_sigmas:mr}=Yh(),ro=new We,_s=null,An=(1+Math.sqrt(5))/2,ti=1/An,so=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,An,ti),new I(0,An,-ti),new I(ti,0,An),new I(-ti,0,An),new I(An,ti,0),new I(-An,ti,0)],ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Jh(ei),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_s=this._renderer.getRenderTarget();let s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=co(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=lo(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ei.length;e++)Ei[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(_s),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e){_s=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:tn,format:oc,encoding:Zh(e)?e.encoding:Ur,depthBuffer:!1},n=oo(t);return n.depthBuffer=!e,this._pingPongRenderTarget=oo(t),n}_compileMaterial(e){let t=new Ft(Ei[0],e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,i){let s=90,o=1,a=new gt(s,o,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.outputEncoding,m=d.toneMapping;d.getClearColor(ro),d.toneMapping=bn,d.outputEncoding=pt,d.autoClear=!1;let _=new er({name:"PMREM.Background",side:it,depthWrite:!1,depthTest:!1}),v=new Ft(new jn,_),L=!1,p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,L=!0):(_.color.copy(ro),L=!0);for(let u=0;u<6;u++){let y=u%3;y==0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):y==1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u])),gr(i,y*kt,u>2?kt:0,kt,kt),d.setRenderTarget(i),L&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.outputEncoding=h,d.autoClear=f,e.background=p}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===_t&&t.type===tn&&t.encoding===Mn?e.value=pn[pt]:e.value=pn[t.encoding]}_textureToCubeUV(e,t){let n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=co()):this._equirectShader==null&&(this._equirectShader=lo());let i=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Ft(Ei[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),gr(t,0,0,3*kt,2*kt),n.setRenderTarget(t),n.render(s,xs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<no;i++){let s=Math.sqrt(mr[i]*mr[i]-mr[i-1]*mr[i-1]),o=so[(i-1)%so.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,f=new Ft(Ei[i],l),h=l.uniforms,m=io[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),v=s/_,L=isFinite(s)?1+Math.floor(d*v):ei;L>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${ei}`);let p=[],u=0;for(let T=0;T<ei;++T){let b=T/v,O=Math.exp(-b*b/2);p.push(O),T==0?u+=O:T<L&&(u+=2*O)}for(let T=0;T<p.length;T++)p[T]=p[T]/u;h.envMap.value=e.texture,h.samples.value=L,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=_,h.mipInt.value=fn-n,this._setEncoding(h.inputEncoding,e.texture),this._setEncoding(h.outputEncoding,e.texture);let y=io[i],x=3*Math.max(0,kt-2*y),M=(i===0?0:2*kt)+2*y*(i>fn-Kn?i-fn+Kn:0);gr(t,x,M,3*y,2*y),c.setRenderTarget(t),c.render(f,xs)}};function Zh(r){return r===void 0||r.type!==tn?!1:r.encoding===pt||r.encoding===Mn||r.encoding===Or}function Yh(){let r=[],e=[],t=[],n=fn;for(let i=0;i<no;i++){let s=Math.pow(2,n);e.push(s);let o=1/s;i>fn-Kn?o=to[i-fn+Kn-1]:i==0&&(o=0),t.push(o);let a=1/(s-1),c=-a/2,l=1+a/2,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,m=3,_=2,v=1,L=new Float32Array(m*h*f),p=new Float32Array(_*h*f),u=new Float32Array(v*h*f);for(let x=0;x<f;x++){let M=x%3*2/3-1,T=x>2?0:-1,b=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];L.set(b,m*h*x),p.set(d,_*h*x);let O=[x,x,x,x,x,x];u.set(O,v*h*x)}let y=new tt;y.setAttribute("position",new ht(L,m)),y.setAttribute("uv",new ht(p,_)),y.setAttribute("faceIndex",new ht(u,v)),r.push(y),n>Kn&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function oo(r){let e=new Bt(3*kt,3*kt,r);return e.texture.mapping=ki,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function gr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Jh(r){let e=new Float32Array(r),t=new I(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:pn[pt]},outputEncoding:{value:pn[pt]}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${bs()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function lo(){let r=new Ne(1,1);return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:pn[pt]},outputEncoding:{value:pn[pt]}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${bs()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function co(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:pn[pt]},outputEncoding:{value:pn[pt]}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${bs()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function ys(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bs(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Qh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let c=a.mapping,l=c===Pr||c===Rr,d=c===Gi||c===Hi;if(l||d){if(e.has(a))return e.get(a).texture;{let f=a.image;if(l&&f&&f.height>0||d&&f&&i(f)){let h=r.getRenderTarget();t===null&&(t=new ao(r));let m=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),r.setRenderTarget(h),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kh(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ef(r,e,t,n){let i={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let _ in h)e.update(h[_],34962);let m=f.morphAttributes;for(let _ in m){let v=m[_];for(let L=0,p=v.length;L<p;L++)e.update(v[L],34962)}}function l(f){let h=[],m=f.index,_=f.attributes.position,v=0;if(m!==null){let u=m.array;v=m.version;for(let y=0,x=u.length;y<x;y+=3){let M=u[y+0],T=u[y+1],b=u[y+2];h.push(M,T,T,b,b,M)}}else{let u=_.array;v=_.version;for(let y=0,x=u.length/3-1;y<x;y+=3){let M=y+0,T=y+1,b=y+2;h.push(M,T,T,b,b,M)}}let L=new(Ga(h)>65535?ls:os)(h,1);L.version=v;let p=s.get(f);p&&e.remove(p),s.set(f,L)}function d(f){let h=s.get(f);if(h){let m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function tf(r,e,t,n){let i=n.isWebGL2,s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function d(h,m){r.drawElements(s,m,a,h*c),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let v,L;if(i)v=r,L="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),L="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[L](s,m,a,h*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=f}function nf(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}var vr=class extends Tt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};vr.prototype.isDataTexture2DArray=!0;function rf(r,e){return r[0]-e[0]}function sf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function uo(r,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function af(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new I,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,d,f,h){let m=l.morphTargetInfluences;if(e.isWebGL2===!0){let _=d.morphAttributes.position.length,v=s.get(d);if(v===void 0||v.count!==_){v!==void 0&&v.texture.dispose();let u=d.morphAttributes.normal!==void 0,y=d.morphAttributes.position,x=d.morphAttributes.normal||[],M=d.attributes.position.count,T=u===!0?2:1,b=M*T,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let H=new Float32Array(b*O*4*_),W=new vr(H,b,O,_);W.format=_t,W.type=nn;let D=T*4;for(let ie=0;ie<_;ie++){let k=y[ie],$=x[ie],q=b*O*4*ie;for(let X=0;X<k.count;X++){o.fromBufferAttribute(k,X),k.normalized===!0&&uo(o,k);let V=X*D;H[q+V+0]=o.x,H[q+V+1]=o.y,H[q+V+2]=o.z,H[q+V+3]=0,u===!0&&(o.fromBufferAttribute($,X),$.normalized===!0&&uo(o,$),H[q+V+4]=o.x,H[q+V+5]=o.y,H[q+V+6]=o.z,H[q+V+7]=0)}}v={count:_,texture:W,size:new Ne(b,O)},s.set(d,v)}let L=0;for(let u=0;u<m.length;u++)L+=m[u];let p=d.morphTargetsRelative?1:1-L;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let _=m===void 0?0:m.length,v=n[d.id];if(v===void 0||v.length!==_){v=[];for(let x=0;x<_;x++)v[x]=[x,0];n[d.id]=v}for(let x=0;x<_;x++){let M=v[x];M[0]=x,M[1]=m[x]}v.sort(sf);for(let x=0;x<8;x++)x<_&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(rf);let L=d.morphAttributes.position,p=d.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let M=a[x],T=M[0],b=M[1];T!==Number.MAX_SAFE_INTEGER&&b?(L&&d.getAttribute("morphTarget"+x)!==L[T]&&d.setAttribute("morphTarget"+x,L[T]),p&&d.getAttribute("morphNormal"+x)!==p[T]&&d.setAttribute("morphNormal"+x,p[T]),i[x]=b,u+=b):(L&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),p&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),i[x]=0)}let y=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function of(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,d=c.geometry,f=e.get(c,d);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Ms=class extends Tt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Ms.prototype.isDataTexture3D=!0;var ho=new Tt,lf=new vr,cf=new Ms,fo=new wi,po=[],mo=[],go=new Float32Array(16),vo=new Float32Array(9),xo=new Float32Array(4);function ni(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=po[i];if(s===void 0&&(s=new Float32Array(i),po[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _o(r,e){let t=mo[e];t===void 0&&(t=new Int32Array(e),mo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function uf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function df(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function hf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function ff(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function pf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;xo.set(n),r.uniformMatrix2fv(this.addr,!1,xo),vt(t,n)}}function mf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;vo.set(n),r.uniformMatrix3fv(this.addr,!1,vo),vt(t,n)}}function gf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;go.set(n),r.uniformMatrix4fv(this.addr,!1,go),vt(t,n)}}function vf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xf(r,e){let t=this.cache;yt(t,e)||(r.uniform2iv(this.addr,e),vt(t,e))}function _f(r,e){let t=this.cache;yt(t,e)||(r.uniform3iv(this.addr,e),vt(t,e))}function yf(r,e){let t=this.cache;yt(t,e)||(r.uniform4iv(this.addr,e),vt(t,e))}function bf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mf(r,e){let t=this.cache;yt(t,e)||(r.uniform2uiv(this.addr,e),vt(t,e))}function wf(r,e){let t=this.cache;yt(t,e)||(r.uniform3uiv(this.addr,e),vt(t,e))}function Sf(r,e){let t=this.cache;yt(t,e)||(r.uniform4uiv(this.addr,e),vt(t,e))}function Ef(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||ho,i)}function Tf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cf,i)}function Af(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||fo,i)}function Lf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lf,i)}function Pf(r){switch(r){case 5126:return uf;case 35664:return df;case 35665:return hf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return _f;case 35669:case 35673:return yf;case 5125:return bf;case 36294:return Mf;case 36295:return wf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Lf}}function Rf(r,e){r.uniform1fv(this.addr,e)}function Cf(r,e){let t=ni(e,this.size,2);r.uniform2fv(this.addr,t)}function Df(r,e){let t=ni(e,this.size,3);r.uniform3fv(this.addr,t)}function If(r,e){let t=ni(e,this.size,4);r.uniform4fv(this.addr,t)}function Ff(r,e){let t=ni(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Nf(r,e){let t=ni(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zf(r,e){let t=ni(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Of(r,e){r.uniform1iv(this.addr,e)}function Uf(r,e){r.uniform2iv(this.addr,e)}function Bf(r,e){r.uniform3iv(this.addr,e)}function Gf(r,e){r.uniform4iv(this.addr,e)}function Hf(r,e){r.uniform1uiv(this.addr,e)}function kf(r,e){r.uniform2uiv(this.addr,e)}function Vf(r,e){r.uniform3uiv(this.addr,e)}function Wf(r,e){r.uniform4uiv(this.addr,e)}function $f(r,e,t){let n=e.length,i=_o(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||ho,i[s])}function Xf(r,e,t){let n=e.length,i=_o(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||fo,i[s])}function qf(r){switch(r){case 5126:return Rf;case 35664:return Cf;case 35665:return Df;case 35666:return If;case 35674:return Ff;case 35675:return Nf;case 35676:return zf;case 5124:case 35670:return Of;case 35667:case 35671:return Uf;case 35668:case 35672:return Bf;case 35669:case 35673:return Gf;case 5125:return Hf;case 36294:return kf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35680:case 36300:case 36308:case 36293:return Xf}}function jf(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Pf(e.type)}function yo(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=qf(e.type)}yo.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),vt(e,r)};function bo(r){this.id=r,this.seq=[],this.map={}}bo.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,s=n.length;i!==s;++i){let o=n[i];o.setValue(r,e[o.id],t)}};var ws=/(\w+)(\])?(\[|\.)?/g;function Mo(r,e){r.seq.push(e),r.map[e.id]=e}function Yf(r,e,t){let n=r.name,i=n.length;for(ws.lastIndex=0;;){let s=ws.exec(n),o=ws.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Mo(t,l===void 0?new jf(a,r,e):new yo(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new bo(a),Mo(t,f)),t=f}}}function mn(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);Yf(i,s,this)}}mn.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};mn.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};mn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};mn.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let s=r[n];s.id in e&&t.push(s)}return t};function wo(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Zf=0;function Jf(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function So(r){switch(r){case pt:return["Linear","( value )"];case Mn:return["sRGB","( value )"];case Ur:return["RGBE","( value )"];case Fa:return["RGBM","( value, 7.0 )"];case Na:return["RGBM","( value, 16.0 )"];case za:return["RGBD","( value, 256.0 )"];case Or:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case $c:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Eo(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Jf(r.getShaderSource(e))}function ii(r,e){let t=So(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Qf(r,e){let t=So(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Kf(r,e){let t;switch(e){case Xl:t="Linear";break;case ql:t="Reinhard";break;case jl:t="OptimizedCineon";break;case Yl:t="ACESFilmic";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ep(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function tp(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function np(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ti(r){return r!==""}function To(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ao(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ss(r){return r.replace(ip,rp)}function rp(r,e){let t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ss(t)}var sp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Po(r){return r.replace(ap,Lo).replace(sp,op)}function op(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Lo(r,e,t,n)}function Lo(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ro(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===da?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function cp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gi:case Hi:e="ENVMAP_TYPE_CUBE";break;case ki:case Cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function up(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hi:case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function dp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ya:e="ENVMAP_BLENDING_MULTIPLY";break;case Wl:e="ENVMAP_BLENDING_MIX";break;case $l:e="ENVMAP_BLENDING_ADD";break}return e}function hp(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=lp(t),l=cp(t),d=up(t),f=dp(t),h=r.gammaFactor>0?r.gammaFactor:1,m=t.isWebGL2?"":ep(t),_=tp(s),v=i.createProgram(),L,p,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(L=[_].filter(Ti).join(`
`),L.length>0&&(L+=`
`),p=[m,_].filter(Ti).join(`
`),p.length>0&&(p+=`
`)):(L=[Ro(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),p=[m,Ro(t),"#define SHADER_NAME "+t.shaderName,_,"#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?He.tonemapping_pars_fragment:"",t.toneMapping!==bn?Kf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===vi?"#define OPAQUE":"",He.encodings_pars_fragment,t.map?ii("mapTexelToLinear",t.mapEncoding):"",t.matcap?ii("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?ii("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?ii("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?ii("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?ii("lightMapTexelToLinear",t.lightMapEncoding):"",Qf("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ti).join(`
`)),o=Ss(o),o=To(o,t),o=Ao(o,t),a=Ss(a),a=To(a,t),a=Ao(a,t),o=Po(o),a=Po(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,L=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,p=["#define varying in",t.glslVersion===Oa?"":"out highp vec4 pc_fragColor;",t.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=u+L+o,x=u+p+a,M=wo(i,35633,y),T=wo(i,35632,x);if(i.attachShader(v,M),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){let H=i.getProgramInfoLog(v).trim(),W=i.getShaderInfoLog(M).trim(),D=i.getShaderInfoLog(T).trim(),ie=!0,k=!0;if(i.getProgramParameter(v,35714)===!1){ie=!1;let $=Eo(i,M,"vertex"),q=Eo(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+H+`
`+$+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(W===""||D==="")&&(k=!1);k&&(this.diagnostics={runnable:ie,programLog:H,vertexShader:{log:W,prefix:L},fragmentShader:{log:D,prefix:p}})}i.deleteShader(M),i.deleteShader(T);let b;this.getUniforms=function(){return b===void 0&&(b=new mn(i,v)),b};let O;return this.getAttributes=function(){return O===void 0&&(O=np(i,v)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Zf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}function fp(r,e,t,n,i,s,o){let a=[],c=i.isWebGL2,l=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,h=i.vertexTextures,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function L(b){let H=b.skeleton.bones;if(d)return 1024;{let D=Math.floor((f-20)/4),ie=Math.min(D,H.length);return ie<H.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+H.length+" bones. This GPU supports "+ie+"."),0):ie}}function p(b){let O;return b&&b.isTexture?O=b.encoding:b&&b.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),O=b.texture.encoding):O=pt,c&&b&&b.isTexture&&b.format===_t&&b.type===tn&&b.encoding===Mn&&(O=pt),O}function u(b,O,H,W,D){let ie=W.fog,k=b.isMeshStandardMaterial?W.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),q=_[b.type],X=D.isSkinnedMesh?L(D):0;b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let V,ee;if(q){let P=Ht[q];V=P.vertexShader,ee=P.fragmentShader}else V=b.vertexShader,ee=b.fragmentShader;let oe=r.getRenderTarget(),fe=b.alphaTest>0,se=b.clearcoat>0;return{isWebGL2:c,shaderID:q,shaderName:b.type,vertexShader:V,fragmentShader:ee,defines:b.defines,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:h,outputEncoding:oe!==null?p(oe.texture):r.outputEncoding,map:!!b.map,mapEncoding:p(b.map),matcap:!!b.matcap,matcapEncoding:p(b.matcap),envMap:!!$,envMapMode:$&&$.mapping,envMapEncoding:p($),envMapCubeUV:!!$&&($.mapping===ki||$.mapping===Cr),lightMap:!!b.lightMap,lightMapEncoding:p(b.lightMap),aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:p(b.emissiveMap),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Yc,tangentSpaceNormalMap:b.normalMapType===jc,clearcoat:se,clearcoatMap:se&&!!b.clearcoatMap,clearcoatRoughnessMap:se&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularTintMap:!!b.specularTintMap,specularTintMapEncoding:p(b.specularTintMap),alphaMap:!!b.alphaMap,alphaTest:fe,gradientMap:!!b.gradientMap,sheen:b.sheen>0,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!D.geometry&&!!D.geometry.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.geometry&&!!D.geometry.attributes.color&&D.geometry.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularTintMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularTintMap)&&!!b.displacementMap,fog:!!ie,useFog:b.fog,fogExp2:ie&&ie.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:l,skinning:D.isSkinnedMesh===!0&&X>0,maxBones:X,useVertexTexture:d,morphTargets:!!D.geometry&&!!D.geometry.morphAttributes.position,morphNormals:!!D.geometry&&!!D.geometry.morphAttributes.normal,morphTargetsCount:!!D.geometry&&!!D.geometry.morphAttributes.position?D.geometry.morphAttributes.position.length:0,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:b.format,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:bn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===In,flipSided:b.side===it,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function y(b){let O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.fragmentShader),O.push(b.vertexShader)),b.defines!==void 0)for(let H in b.defines)O.push(H),O.push(b.defines[H]);if(b.isRawShaderMaterial===!1){for(let H=0;H<v.length;H++)O.push(b[v[H]]);O.push(r.outputEncoding),O.push(r.gammaFactor)}return O.push(b.customProgramCacheKey),O.join()}function x(b){let O=_[b.type],H;if(O){let W=Ht[O];H=du.clone(W.uniforms)}else H=b.uniforms;return H}function M(b,O){let H;for(let W=0,D=a.length;W<D;W++){let ie=a[W];if(ie.cacheKey===O){H=ie,++H.usedTimes;break}}return H===void 0&&(H=new hp(r,O,b,s),a.push(H)),H}function T(b){if(--b.usedTimes==0){let O=a.indexOf(b);a[O]=a[a.length-1],a.pop(),b.destroy()}}return{getParameters:u,getProgramCacheKey:y,getUniforms:x,acquireProgram:M,releaseProgram:T,programs:a}}function pp(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function mp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Co(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Do(r){let e=[],t=0,n=[],i=[],s=[],o={id:-1};function a(){t=0,n.length=0,i.length=0,s.length=0}function c(m,_,v,L,p,u){let y=e[t],x=r.get(v);return y===void 0?(y={id:m.id,object:m,geometry:_,material:v,program:x.program||o,groupOrder:L,renderOrder:m.renderOrder,z:p,group:u},e[t]=y):(y.id=m.id,y.object=m,y.geometry=_,y.material=v,y.program=x.program||o,y.groupOrder=L,y.renderOrder=m.renderOrder,y.z=p,y.group=u),t++,y}function l(m,_,v,L,p,u){let y=c(m,_,v,L,p,u);v.transmission>0?i.push(y):v.transparent===!0?s.push(y):n.push(y)}function d(m,_,v,L,p,u){let y=c(m,_,v,L,p,u);v.transmission>0?i.unshift(y):v.transparent===!0?s.unshift(y):n.unshift(y)}function f(m,_){n.length>1&&n.sort(m||mp),i.length>1&&i.sort(_||Co),s.length>1&&s.sort(_||Co)}function h(){for(let m=t,_=e.length;m<_;m++){let v=e[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:d,finish:h,sort:f}}function gp(r){let e=new WeakMap;function t(i,s){let o;return e.has(i)===!1?(o=new Do(r),e.set(i,[o])):s>=e.get(i).length?(o=new Do(r),e.get(i).push(o)):o=e.get(i)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function vp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function xp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var _p=0;function yp(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function bp(r,e){let t=new vp,n=xp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)i.probe.push(new I);let s=new I,o=new Oe,a=new Oe;function c(d,f){let h=0,m=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let v=0,L=0,p=0,u=0,y=0,x=0,M=0,T=0;d.sort(yp);let b=f!==!0?Math.PI:1;for(let H=0,W=d.length;H<W;H++){let D=d[H],ie=D.color,k=D.intensity,$=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=ie.r*k*b,m+=ie.g*k*b,_+=ie.b*k*b;else if(D.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],k);else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){let V=D.shadow,ee=n.get(D);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.directionalShadow[v]=ee,i.directionalShadowMap[v]=q,i.directionalShadowMatrix[v]=D.shadow.matrix,x++}i.directional[v]=X,v++}else if(D.isSpotLight){let X=t.get(D);if(X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(ie).multiplyScalar(k*b),X.distance=$,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,D.castShadow){let V=D.shadow,ee=n.get(D);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=q,i.spotShadowMatrix[p]=D.shadow.matrix,T++}i.spot[p]=X,p++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(ie).multiplyScalar(k),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[u]=X,u++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*b),X.distance=D.distance,X.decay=D.decay,D.castShadow){let V=D.shadow,ee=n.get(D);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,i.pointShadow[L]=ee,i.pointShadowMap[L]=q,i.pointShadowMatrix[L]=D.shadow.matrix,M++}i.point[L]=X,L++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(k*b),X.groundColor.copy(D.groundColor).multiplyScalar(k*b),i.hemi[y]=X,y++}}u>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;let O=i.hash;(O.directionalLength!==v||O.pointLength!==L||O.spotLength!==p||O.rectAreaLength!==u||O.hemiLength!==y||O.numDirectionalShadows!==x||O.numPointShadows!==M||O.numSpotShadows!==T)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=u,i.point.length=L,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=T,O.directionalLength=v,O.pointLength=L,O.spotLength=p,O.rectAreaLength=u,O.hemiLength=y,O.numDirectionalShadows=x,O.numPointShadows=M,O.numSpotShadows=T,i.version=_p++)}function l(d,f){let h=0,m=0,_=0,v=0,L=0,p=f.matrixWorldInverse;for(let u=0,y=d.length;u<y;u++){let x=d[u];if(x.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(x.isSpotLight){let M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(x.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let M=i.point[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),m++}else if(x.isHemisphereLight){let M=i.hemi[L];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),M.direction.normalize(),L++}}}return{setup:c,setupView:l,state:i}}function Io(r,e){let t=new bp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Mp(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Io(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Io(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var Es=class extends ln{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Es.prototype.isMeshDepthMaterial=!0;var Ts=class extends ln{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ts.prototype.isMeshDistanceMaterial=!0;var wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fo(r,e,t){let n=new fr,i=new Ne,s=new Ne,o=new ot,a=new Es({depthPacking:qc}),c=new Ts,l={},d=t.maxTextureSize,f={0:it,1:mi,2:In},h=new hn({uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4},samples:{value:8}},vertexShader:wp,fragmentShader:Sp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let _=new tt;_.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ft(_,h),L=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da,this.render=function(x,M,T){if(L.enabled===!1||L.autoUpdate===!1&&L.needsUpdate===!1||x.length===0)return;let b=r.getRenderTarget(),O=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),W=r.state;W.setBlending(en),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let D=0,ie=x.length;D<ie;D++){let k=x[D],$=k.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let q=$.getFrameExtents();if(i.multiply(q),s.copy($.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/q.x),i.x=s.x*q.x,$.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/q.y),i.y=s.y*q.y,$.mapSize.y=s.y)),$.map===null&&!$.isPointLightShadow&&this.type===pi){let V={minFilter:Ut,magFilter:Ut,format:_t};$.map=new Bt(i.x,i.y,V),$.map.texture.name=k.name+".shadowMap",$.mapPass=new Bt(i.x,i.y,V),$.camera.updateProjectionMatrix()}if($.map===null){let V={minFilter:Mt,magFilter:Mt,format:_t};$.map=new Bt(i.x,i.y,V),$.map.texture.name=k.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();let X=$.getViewportCount();for(let V=0;V<X;V++){let ee=$.getViewport(V);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),W.viewport(o),$.updateMatrices(k,V),n=$.getFrustum(),y(M,T,$.camera,k,this.type)}!$.isPointLightShadow&&this.type===pi&&p($,T),$.needsUpdate=!1}L.needsUpdate=!1,r.setRenderTarget(b,O,H)};function p(x,M){let T=e.update(v);h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,h.uniforms.samples.value=x.blurSamples,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(M,null,T,h,v,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,m.uniforms.samples.value=x.blurSamples,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(M,null,T,m,v,null)}function u(x,M,T,b,O,H,W){let D=null,ie=b.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(ie!==void 0?D=ie:D=b.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){let k=D.uuid,$=T.uuid,q=l[k];q===void 0&&(q={},l[k]=q);let X=q[$];X===void 0&&(X=D.clone(),q[$]=X),D=X}return D.visible=T.visible,D.wireframe=T.wireframe,W===pi?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:f[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaTest,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(b.matrixWorld),D.nearDistance=O,D.farDistance=H),D}function y(x,M,T,b,O){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&O===pi)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);let D=e.update(x),ie=x.material;if(Array.isArray(ie)){let k=D.groups;for(let $=0,q=k.length;$<q;$++){let X=k[$],V=ie[X.materialIndex];if(V&&V.visible){let ee=u(x,D,V,b,T.near,T.far,O);r.renderBufferDirect(T,null,D,ee,x,X)}}}else if(ie.visible){let k=u(x,D,ie,b,T.near,T.far,O);r.renderBufferDirect(T,null,D,k,x,null)}}let W=x.children;for(let D=0,ie=W.length;D<ie;D++)y(W[D],M,T,b,O)}}function Ep(r,e,t){let n=t.isWebGL2;function i(){let F=!1,le=new ot,J=null,ve=new ot(0,0,0,0);return{setMask:function(C){J!==C&&!F&&(r.colorMask(C,C,C,C),J=C)},setLocked:function(C){F=C},setClear:function(C,re,Ue,Fe,Ke){Ke===!0&&(C*=Fe,re*=Fe,Ue*=Fe),le.set(C,re,Ue,Fe),ve.equals(le)===!1&&(r.clearColor(C,re,Ue,Fe),ve.copy(le))},reset:function(){F=!1,J=null,ve.set(-1,0,0,0)}}}function s(){let F=!1,le=null,J=null,ve=null;return{setTest:function(C){C?z(2929):j(2929)},setMask:function(C){le!==C&&!F&&(r.depthMask(C),le=C)},setFunc:function(C){if(J!==C){if(C)switch(C){case Ol:r.depthFunc(512);break;case Ul:r.depthFunc(519);break;case Bl:r.depthFunc(513);break;case Lr:r.depthFunc(515);break;case Gl:r.depthFunc(514);break;case Hl:r.depthFunc(518);break;case kl:r.depthFunc(516);break;case Vl:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);J=C}},setLocked:function(C){F=C},setClear:function(C){ve!==C&&(r.clearDepth(C),ve=C)},reset:function(){F=!1,le=null,J=null,ve=null}}}function o(){let F=!1,le=null,J=null,ve=null,C=null,re=null,Ue=null,Fe=null,Ke=null;return{setTest:function(qe){F||(qe?z(2960):j(2960))},setMask:function(qe){le!==qe&&!F&&(r.stencilMask(qe),le=qe)},setFunc:function(qe,ut,bt){(J!==qe||ve!==ut||C!==bt)&&(r.stencilFunc(qe,ut,bt),J=qe,ve=ut,C=bt)},setOp:function(qe,ut,bt){(re!==qe||Ue!==ut||Fe!==bt)&&(r.stencilOp(qe,ut,bt),re=qe,Ue=ut,Fe=bt)},setLocked:function(qe){F=qe},setClear:function(qe){Ke!==qe&&(r.clearStencil(qe),Ke=qe)},reset:function(){F=!1,le=null,J=null,ve=null,C=null,re=null,Ue=null,Fe=null,Ke=null}}}let a=new i,c=new s,l=new o,d={},f=null,h={},m=null,_=!1,v=null,L=null,p=null,u=null,y=null,x=null,M=null,T=!1,b=null,O=null,H=null,W=null,D=null,ie=r.getParameter(35661),k=!1,$=0,q=r.getParameter(7938);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=$>=2);let X=null,V={},ee=r.getParameter(3088),oe=r.getParameter(2978),fe=new ot().fromArray(ee),se=new ot().fromArray(oe);function ye(F,le,J){let ve=new Uint8Array(4),C=r.createTexture();r.bindTexture(F,C),r.texParameteri(F,10241,9728),r.texParameteri(F,10240,9728);for(let re=0;re<J;re++)r.texImage2D(le+re,0,6408,1,1,0,6408,5121,ve);return C}let P={};P[3553]=ye(3553,3553,1),P[34067]=ye(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),z(2929),c.setFunc(Lr),ke(!1),nt(ua),z(2884),Se(en);function z(F){d[F]!==!0&&(r.enable(F),d[F]=!0)}function j(F){d[F]!==!1&&(r.disable(F),d[F]=!1)}function N(F){F!==f&&(r.bindFramebuffer(36160,F),f=F)}function me(F,le){return le===null&&f!==null&&(le=f),h[F]!==le?(r.bindFramebuffer(F,le),h[F]=le,n&&(F===36009&&(h[36160]=le),F===36160&&(h[36009]=le)),!0):!1}function ge(F){return m!==F?(r.useProgram(F),m=F,!0):!1}let ae={[Fn]:32774,[Tl]:32778,[Al]:32779};if(n)ae[ga]=32775,ae[va]=32776;else{let F=e.get("EXT_blend_minmax");F!==null&&(ae[ga]=F.MIN_EXT,ae[va]=F.MAX_EXT)}let ce={[Ll]:0,[Pl]:1,[Rl]:768,[xa]:770,[zl]:776,[Fl]:774,[Dl]:772,[Cl]:769,[_a]:771,[Nl]:775,[Il]:773};function Se(F,le,J,ve,C,re,Ue,Fe){if(F===en){_===!0&&(j(3042),_=!1);return}if(_===!1&&(z(3042),_=!0),F!==El){if(F!==v||Fe!==T){if((L!==Fn||y!==Fn)&&(r.blendEquation(32774),L=Fn,y=Fn),Fe)switch(F){case gi:r.blendFuncSeparate(1,771,1,771);break;case fa:r.blendFunc(1,1);break;case pa:r.blendFuncSeparate(0,0,769,771);break;case ma:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gi:r.blendFuncSeparate(770,771,1,771);break;case fa:r.blendFunc(770,1);break;case pa:r.blendFunc(0,769);break;case ma:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,u=null,x=null,M=null,v=F,T=Fe}return}C=C||le,re=re||J,Ue=Ue||ve,(le!==L||C!==y)&&(r.blendEquationSeparate(ae[le],ae[C]),L=le,y=C),(J!==p||ve!==u||re!==x||Ue!==M)&&(r.blendFuncSeparate(ce[J],ce[ve],ce[re],ce[Ue]),p=J,u=ve,x=re,M=Ue),v=F,T=null}function Me(F,le){F.side===In?j(2884):z(2884);let J=F.side===it;le&&(J=!J),ke(J),F.blending===gi&&F.transparent===!1?Se(en):Se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);let ve=F.stencilWrite;l.setTest(ve),ve&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),st(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?z(32926):j(32926)}function ke(F){b!==F&&(F?r.frontFace(2304):r.frontFace(2305),b=F)}function nt(F){F!==Ml?(z(2884),F!==O&&(F===ua?r.cullFace(1029):F===wl?r.cullFace(1028):r.cullFace(1032))):j(2884),O=F}function ct(F){F!==H&&(k&&r.lineWidth(F),H=F)}function st(F,le,J){F?(z(32823),(W!==le||D!==J)&&(r.polygonOffset(le,J),W=le,D=J)):j(32823)}function R(F){F?z(3089):j(3089)}function A(F){F===void 0&&(F=33984+ie-1),X!==F&&(r.activeTexture(F),X=F)}function te(F,le){X===null&&A();let J=V[X];J===void 0&&(J={type:void 0,texture:void 0},V[X]=J),(J.type!==F||J.texture!==le)&&(r.bindTexture(F,le||P[F]),J.type=F,J.texture=le)}function de(){let F=V[X];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){fe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),fe.copy(F))}function De(F){se.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),se.copy(F))}function be(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},X=null,V={},f=null,h={},m=null,_=!1,v=null,L=null,p=null,u=null,y=null,x=null,M=null,T=!1,b=null,O=null,H=null,W=null,D=null,fe.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:z,disable:j,bindFramebuffer:me,bindXRFramebuffer:N,useProgram:ge,setBlending:Se,setMaterial:Me,setFlipSided:ke,setCullFace:nt,setLineWidth:ct,setPolygonOffset:st,setScissorTest:R,activeTexture:A,bindTexture:te,unbindTexture:de,compressedTexImage2D:pe,texImage2D:xe,texImage3D:Le,scissor:Pe,viewport:De,reset:be}}function Tp(r,e,t,n,i,s,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,d=i.maxTextureSize,f=i.maxSamples,h=new WeakMap,m,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function v(R,A){return _?new OffscreenCanvas(R,A):Xi("canvas")}function L(R,A,te,de){let pe=1;if((R.width>de||R.height>de)&&(pe=de/Math.max(R.width,R.height)),pe<1||A===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){let xe=A?Kc:Math.floor,Le=xe(pe*R.width),Pe=xe(pe*R.height);m===void 0&&(m=v(Le,Pe));let De=te?v(Le,Pe):m;return De.width=Le,De.height=Pe,De.getContext("2d").drawImage(R,0,0,Le,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Le+"x"+Pe+")."),De}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Ba(R.width)&&Ba(R.height)}function u(R){return a?!1:R.wrapS!==St||R.wrapT!==St||R.minFilter!==Mt&&R.minFilter!==Ut}function y(R,A){return R.generateMipmaps&&A&&R.minFilter!==Mt&&R.minFilter!==Ut}function x(R,A,te,de,pe=1){r.generateMipmap(R);let xe=n.get(A);xe.__maxMipLevel=Math.log2(Math.max(te,de,pe))}function M(R,A,te,de){if(a===!1)return A;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe=A;return A===6403&&(te===5126&&(pe=33326),te===5131&&(pe=33325),te===5121&&(pe=33321)),A===6407&&(te===5126&&(pe=34837),te===5131&&(pe=34843),te===5121&&(pe=32849)),A===6408&&(te===5126&&(pe=34836),te===5131&&(pe=34842),te===5121&&(pe=de===Mn?35907:32856)),(pe===33325||pe===33326||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function T(R){return R===Mt||R===Ma||R===wa?9728:9729}function b(R){let A=R.target;A.removeEventListener("dispose",b),H(A),A.isVideoTexture&&h.delete(A),o.memory.textures--}function O(R){let A=R.target;A.removeEventListener("dispose",O),W(A)}function H(R){let A=n.get(R);A.__webglInit!==void 0&&(r.deleteTexture(A.__webglTexture),n.remove(R))}function W(R){let A=R.texture,te=n.get(R),de=n.get(A);if(!!R){if(de.__webglTexture!==void 0&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)r.deleteFramebuffer(te.__webglFramebuffer[pe]),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer[pe]);else r.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&r.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer&&r.deleteRenderbuffer(te.__webglColorRenderbuffer),te.__webglDepthRenderbuffer&&r.deleteRenderbuffer(te.__webglDepthRenderbuffer);if(R.isWebGLMultipleRenderTargets)for(let pe=0,xe=A.length;pe<xe;pe++){let Le=n.get(A[pe]);Le.__webglTexture&&(r.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(A[pe])}n.remove(A),n.remove(R)}}let D=0;function ie(){D=0}function k(){let R=D;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),D+=1,R}function $(R,A){let te=n.get(R);if(R.isVideoTexture&&Me(R),R.version>0&&te.__version!==R.version){let de=R.image;if(de===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(te,R,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,te.__webglTexture)}function q(R,A){let te=n.get(R);if(R.version>0&&te.__version!==R.version){ye(te,R,A);return}t.activeTexture(33984+A),t.bindTexture(35866,te.__webglTexture)}function X(R,A){let te=n.get(R);if(R.version>0&&te.__version!==R.version){ye(te,R,A);return}t.activeTexture(33984+A),t.bindTexture(32879,te.__webglTexture)}function V(R,A){let te=n.get(R);if(R.version>0&&te.__version!==R.version){P(te,R,A);return}t.activeTexture(33984+A),t.bindTexture(34067,te.__webglTexture)}let ee={[Dr]:10497,[St]:33071,[Ir]:33648},oe={[Mt]:9728,[Ma]:9984,[wa]:9986,[Ut]:9729,[Jl]:9985,[Vi]:9987};function fe(R,A,te){if(te?(r.texParameteri(R,10242,ee[A.wrapS]),r.texParameteri(R,10243,ee[A.wrapT]),(R===32879||R===35866)&&r.texParameteri(R,32882,ee[A.wrapR]),r.texParameteri(R,10240,oe[A.magFilter]),r.texParameteri(R,10241,oe[A.minFilter])):(r.texParameteri(R,10242,33071),r.texParameteri(R,10243,33071),(R===32879||R===35866)&&r.texParameteri(R,32882,33071),(A.wrapS!==St||A.wrapT!==St)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,10240,T(A.magFilter)),r.texParameteri(R,10241,T(A.minFilter)),A.minFilter!==Mt&&A.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(A.type===nn&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Nn&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(R,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function se(R,A){R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",b),R.__webglTexture=r.createTexture(),o.memory.textures++)}function ye(R,A,te){let de=3553;A.isDataTexture2DArray&&(de=35866),A.isDataTexture3D&&(de=32879),se(R,A),t.activeTexture(33984+te),t.bindTexture(de,R.__webglTexture),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);let pe=u(A)&&p(A.image)===!1,xe=L(A.image,pe,!1,d),Le=p(xe)||a,Pe=s.convert(A.format),De=s.convert(A.type),be=M(A.internalFormat,Pe,De,A.encoding);fe(de,A,Le);let F,le=A.mipmaps;if(A.isDepthTexture)be=6402,a?A.type===nn?be=36012:A.type===Wi?be=33190:A.type===$i?be=35056:be=33189:A.type===nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Nr&&be===6402&&A.type!==Fr&&A.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Fr,De=s.convert(A.type)),A.format===zr&&be===6402&&(be=34041,A.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=$i,De=s.convert(A.type))),t.texImage2D(3553,0,be,xe.width,xe.height,0,Pe,De,null);else if(A.isDataTexture)if(le.length>0&&Le){for(let J=0,ve=le.length;J<ve;J++)F=le[J],t.texImage2D(3553,J,be,F.width,F.height,0,Pe,De,F.data);A.generateMipmaps=!1,R.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,be,xe.width,xe.height,0,Pe,De,xe.data),R.__maxMipLevel=0;else if(A.isCompressedTexture){for(let J=0,ve=le.length;J<ve;J++)F=le[J],A.format!==_t&&A.format!==vi?Pe!==null?t.compressedTexImage2D(3553,J,be,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,J,be,F.width,F.height,0,Pe,De,F.data);R.__maxMipLevel=le.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,be,xe.width,xe.height,xe.depth,0,Pe,De,xe.data),R.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,be,xe.width,xe.height,xe.depth,0,Pe,De,xe.data),R.__maxMipLevel=0;else if(le.length>0&&Le){for(let J=0,ve=le.length;J<ve;J++)F=le[J],t.texImage2D(3553,J,be,Pe,De,F);A.generateMipmaps=!1,R.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,be,Pe,De,xe),R.__maxMipLevel=0;y(A,Le)&&x(de,A,xe.width,xe.height),R.__version=A.version,A.onUpdate&&A.onUpdate(A)}function P(R,A,te){if(A.image.length!==6)return;se(R,A),t.activeTexture(33984+te),t.bindTexture(34067,R.__webglTexture),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);let de=A&&(A.isCompressedTexture||A.image[0].isCompressedTexture),pe=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!de&&!pe?xe[J]=L(A.image[J],!1,!0,l):xe[J]=pe?A.image[J].image:A.image[J];let Le=xe[0],Pe=p(Le)||a,De=s.convert(A.format),be=s.convert(A.type),F=M(A.internalFormat,De,be,A.encoding);fe(34067,A,Pe);let le;if(de){for(let J=0;J<6;J++){le=xe[J].mipmaps;for(let ve=0;ve<le.length;ve++){let C=le[ve];A.format!==_t&&A.format!==vi?De!==null?t.compressedTexImage2D(34069+J,ve,F,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+J,ve,F,C.width,C.height,0,De,be,C.data)}}R.__maxMipLevel=le.length-1}else{le=A.mipmaps;for(let J=0;J<6;J++)if(pe){t.texImage2D(34069+J,0,F,xe[J].width,xe[J].height,0,De,be,xe[J].data);for(let ve=0;ve<le.length;ve++){let re=le[ve].image[J].image;t.texImage2D(34069+J,ve+1,F,re.width,re.height,0,De,be,re.data)}}else{t.texImage2D(34069+J,0,F,De,be,xe[J]);for(let ve=0;ve<le.length;ve++){let C=le[ve];t.texImage2D(34069+J,ve+1,F,De,be,C.image[J])}}R.__maxMipLevel=le.length}y(A,Pe)&&x(34067,A,Le.width,Le.height),R.__version=A.version,A.onUpdate&&A.onUpdate(A)}function z(R,A,te,de,pe){let xe=s.convert(te.format),Le=s.convert(te.type),Pe=M(te.internalFormat,xe,Le,te.encoding);pe===32879||pe===35866?t.texImage3D(pe,0,Pe,A.width,A.height,A.depth,0,xe,Le,null):t.texImage2D(pe,0,Pe,A.width,A.height,0,xe,Le,null),t.bindFramebuffer(36160,R),r.framebufferTexture2D(36160,de,pe,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function j(R,A,te){if(r.bindRenderbuffer(36161,R),A.depthBuffer&&!A.stencilBuffer){let de=33189;if(te){let pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===nn?de=36012:pe.type===Wi&&(de=33190));let xe=Se(A);r.renderbufferStorageMultisample(36161,xe,de,A.width,A.height)}else r.renderbufferStorage(36161,de,A.width,A.height);r.framebufferRenderbuffer(36160,36096,36161,R)}else if(A.depthBuffer&&A.stencilBuffer){if(te){let de=Se(A);r.renderbufferStorageMultisample(36161,de,35056,A.width,A.height)}else r.renderbufferStorage(36161,34041,A.width,A.height);r.framebufferRenderbuffer(36160,33306,36161,R)}else{let de=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,pe=s.convert(de.format),xe=s.convert(de.type),Le=M(de.internalFormat,pe,xe,de.encoding);if(te){let Pe=Se(A);r.renderbufferStorageMultisample(36161,Pe,Le,A.width,A.height)}else r.renderbufferStorage(36161,Le,A.width,A.height)}r.bindRenderbuffer(36161,null)}function N(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);let de=n.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===Nr)r.framebufferTexture2D(36160,36096,3553,de,0);else if(A.depthTexture.format===zr)r.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function me(R){let A=n.get(R),te=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture){if(te)throw new Error("target.depthTexture not supported in Cube render targets");N(A.__webglFramebuffer,R)}else if(te){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=r.createRenderbuffer(),j(A.__webglDepthbuffer[de],R,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),j(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function ge(R){let A=R.texture,te=n.get(R),de=n.get(A);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture=r.createTexture(),de.__version=A.version,o.memory.textures++);let pe=R.isWebGLCubeRenderTarget===!0,xe=R.isWebGLMultipleRenderTargets===!0,Le=R.isWebGLMultisampleRenderTarget===!0,Pe=A.isDataTexture3D||A.isDataTexture2DArray,De=p(R)||a;if(a&&A.format===vi&&(A.type===nn||A.type===Nn)&&(A.format=_t,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),pe){te.__webglFramebuffer=[];for(let be=0;be<6;be++)te.__webglFramebuffer[be]=r.createFramebuffer()}else if(te.__webglFramebuffer=r.createFramebuffer(),xe)if(i.drawBuffers){let be=R.texture;for(let F=0,le=be.length;F<le;F++){let J=n.get(be[F]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(Le)if(a){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,te.__webglColorRenderbuffer);let be=s.convert(A.format),F=s.convert(A.type),le=M(A.internalFormat,be,F,A.encoding),J=Se(R);r.renderbufferStorageMultisample(36161,J,le,R.width,R.height),t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,te.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),R.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),j(te.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(pe){t.bindTexture(34067,de.__webglTexture),fe(34067,A,De);for(let be=0;be<6;be++)z(te.__webglFramebuffer[be],R,A,36064,34069+be);y(A,De)&&x(34067,A,R.width,R.height),t.unbindTexture()}else if(xe){let be=R.texture;for(let F=0,le=be.length;F<le;F++){let J=be[F],ve=n.get(J);t.bindTexture(3553,ve.__webglTexture),fe(3553,J,De),z(te.__webglFramebuffer,R,J,36064+F,3553),y(J,De)&&x(3553,J,R.width,R.height)}t.unbindTexture()}else{let be=3553;Pe&&(a?be=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(be,de.__webglTexture),fe(be,A,De),z(te.__webglFramebuffer,R,A,36064,be),y(A,De)&&x(be,A,R.width,R.height,R.depth),t.unbindTexture()}R.depthBuffer&&me(R)}function ae(R){let A=p(R)||a,te=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let de=0,pe=te.length;de<pe;de++){let xe=te[de];if(y(xe,A)){let Le=R.isWebGLCubeRenderTarget?34067:3553,Pe=n.get(xe).__webglTexture;t.bindTexture(Le,Pe),x(Le,xe,R.width,R.height),t.unbindTexture()}}}function ce(R){if(R.isWebGLMultisampleRenderTarget)if(a){let A=R.width,te=R.height,de=16384;R.depthBuffer&&(de|=256),R.stencilBuffer&&(de|=1024);let pe=n.get(R);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer),r.blitFramebuffer(0,0,A,te,0,0,A,te,de,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Se(R){return a&&R.isWebGLMultisampleRenderTarget?Math.min(f,R.samples):0}function Me(R){let A=o.render.frame;h.get(R)!==A&&(h.set(R,A),R.update())}let ke=!1,nt=!1;function ct(R,A){R&&R.isWebGLRenderTarget&&(ke===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ke=!0),R=R.texture),$(R,A)}function st(R,A){R&&R.isWebGLCubeRenderTarget&&(nt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),nt=!0),R=R.texture),V(R,A)}this.allocateTextureUnit=k,this.resetTextureUnits=ie,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=V,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ce,this.safeSetTexture2D=ct,this.safeSetTextureCube=st}function Ap(r,e,t){let n=t.isWebGL2;function i(s){let o;if(s===tn)return 5121;if(s===tc)return 32819;if(s===nc)return 32820;if(s===ic)return 33635;if(s===Ql)return 5120;if(s===Kl)return 5122;if(s===Fr)return 5123;if(s===ec)return 5124;if(s===Wi)return 5125;if(s===nn)return 5126;if(s===Nn)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===rc)return 6406;if(s===vi)return 6407;if(s===_t)return 6408;if(s===sc)return 6409;if(s===ac)return 6410;if(s===Nr)return 6402;if(s===zr)return 34041;if(s===lc)return 6403;if(s===cc)return 36244;if(s===uc)return 33319;if(s===dc)return 33320;if(s===hc)return 36248;if(s===fc)return 36249;if(s===Sa||s===Ea||s===Ta||s===Aa)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===La||s===Pa||s===Ra||s===Ca)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===La)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ra)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ca)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Da||s===Ia)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Da)return o.COMPRESSED_RGB8_ETC2;if(s===Ia)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===mc||s===gc||s===vc||s===xc||s===_c||s===yc||s===bc||s===Mc||s===wc||s===Sc||s===Ec||s===Tc||s===Ac||s===Lc||s===Rc||s===Cc||s===Dc||s===Ic||s===Fc||s===Nc||s===zc||s===Oc||s===Uc||s===Bc||s===Gc||s===Hc||s===kc||s===Vc)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Pc)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===$i)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var As=class extends gt{constructor(e=[]){super();this.cameras=e}};As.prototype.isArrayCamera=!0;var ri=class extends et{constructor(){super();this.type="Group"}};ri.prototype.isGroup=!0;var Lp={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp))),l&&e.hand){o=!0;for(let v of e.hand.values()){let L=t.getJointPose(v,n);if(l.joints[v.jointName]===void 0){let u=new ri;u.matrixAutoUpdate=!1,u.visible=!1,l.joints[v.jointName]=u,l.add(u)}let p=l.joints[v.jointName];L!==null&&(p.matrix.fromArray(L.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=L.radius),p.visible=L!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}},No=class extends Xt{constructor(e,t){super();let n=this,i=e.state,s=null,o=1,a=null,c="local-floor",l=null,d=null,f=null,h=null,m=null,_=!1,v=null,L=null,p=null,u=null,y=null,x=null,M=[],T=new Map,b=new gt;b.layers.enable(1),b.viewport=new ot;let O=new gt;O.layers.enable(2),O.viewport=new ot;let H=[b,O],W=new As;W.layers.enable(1),W.layers.enable(2);let D=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let z=M[P];return z===void 0&&(z=new xr,M[P]=z),z.getTargetRaySpace()},this.getControllerGrip=function(P){let z=M[P];return z===void 0&&(z=new xr,M[P]=z),z.getGripSpace()},this.getHand=function(P){let z=M[P];return z===void 0&&(z=new xr,M[P]=z),z.getHandSpace()};function k(P){let z=T.get(P.inputSource);z&&z.dispatchEvent({type:P.type,data:P.inputSource})}function $(){T.forEach(function(P,z){P.disconnect(z)}),T.clear(),D=null,ie=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),f&&t.deleteFramebuffer(f),v&&t.deleteFramebuffer(v),L&&t.deleteRenderbuffer(L),p&&t.deleteRenderbuffer(p),f=null,v=null,L=null,p=null,m=null,h=null,d=null,s=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){c=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return u},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",$),s.addEventListener("inputsourceschange",q);let z=t.getContextAttributes();if(z.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){let j={antialias:z.antialias,alpha:z.alpha,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m})}else if(t instanceof WebGLRenderingContext){let j={antialias:!0,alpha:z.alpha,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,j),s.updateRenderState({layers:[m]})}else{_=z.antialias;let j=null;z.depth&&(x=256,z.stencil&&(x|=1024),y=z.stencil?33306:36096,j=z.stencil?35056:33190);let N={colorFormat:z.alpha?32856:32849,depthFormat:j,scaleFactor:o};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(N),f=t.createFramebuffer(),s.updateRenderState({layers:[h]}),_&&(v=t.createFramebuffer(),L=t.createRenderbuffer(),t.bindRenderbuffer(36161,L),t.renderbufferStorageMultisample(36161,4,32856,h.textureWidth,h.textureHeight),i.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,L),t.bindRenderbuffer(36161,null),j!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,j,h.textureWidth,h.textureHeight),t.framebufferRenderbuffer(36160,y,36161,p),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}a=await s.requestReferenceSpace(c),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function q(P){let z=s.inputSources;for(let j=0;j<M.length;j++)T.set(z[j],M[j]);for(let j=0;j<P.removed.length;j++){let N=P.removed[j],me=T.get(N);me&&(me.dispatchEvent({type:"disconnected",data:N}),T.delete(N))}for(let j=0;j<P.added.length;j++){let N=P.added[j],me=T.get(N);me&&me.dispatchEvent({type:"connected",data:N})}}let X=new I,V=new I;function ee(P,z,j){X.setFromMatrixPosition(z.matrixWorld),V.setFromMatrixPosition(j.matrixWorld);let N=X.distanceTo(V),me=z.projectionMatrix.elements,ge=j.projectionMatrix.elements,ae=me[14]/(me[10]-1),ce=me[14]/(me[10]+1),Se=(me[9]+1)/me[5],Me=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],nt=(ge[8]+1)/ge[0],ct=ae*ke,st=ae*nt,R=N/(-ke+nt),A=R*-ke;z.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(A),P.translateZ(R),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();let te=ae+R,de=ce+R,pe=ct-A,xe=st+(N-A),Le=Se*ce/de*te,Pe=Me*ce/de*te;P.projectionMatrix.makePerspective(pe,xe,Le,Pe,te,de)}function oe(P,z){z===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(z.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;W.near=O.near=b.near=P.near,W.far=O.far=b.far=P.far,(D!==W.near||ie!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,ie=W.far);let z=P.parent,j=W.cameras;oe(W,z);for(let me=0;me<j.length;me++)oe(j[me],z);W.matrixWorld.decompose(W.position,W.quaternion,W.scale),P.position.copy(W.position),P.quaternion.copy(W.quaternion),P.scale.copy(W.scale),P.matrix.copy(W.matrix),P.matrixWorld.copy(W.matrixWorld);let N=P.children;for(let me=0,ge=N.length;me<ge;me++)N[me].updateMatrixWorld(!0);j.length===2?ee(W,b,O):W.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return W},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(m!==null)return m.fixedFoveation},this.setFoveation=function(P){h!==null&&(h.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)};let fe=null;function se(P,z){if(l=z.getViewerPose(a),u=z,l!==null){let N=l.views;m!==null&&i.bindXRFramebuffer(m.framebuffer);let me=!1;N.length!==W.cameras.length&&(W.cameras.length=0,me=!0);for(let ge=0;ge<N.length;ge++){let ae=N[ge],ce=null;if(m!==null)ce=m.getViewport(ae);else{let Me=d.getViewSubImage(h,ae);i.bindXRFramebuffer(f),Me.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,y,3553,Me.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,Me.colorTexture,0),ce=Me.viewport}let Se=H[ge];Se.matrix.fromArray(ae.transform.matrix),Se.projectionMatrix.fromArray(ae.projectionMatrix),Se.viewport.set(ce.x,ce.y,ce.width,ce.height),ge===0&&W.matrix.copy(Se.matrix),me===!0&&W.cameras.push(Se)}_&&(i.bindXRFramebuffer(v),x!==null&&t.clear(x))}let j=s.inputSources;for(let N=0;N<M.length;N++){let me=M[N],ge=j[N];me.update(ge,z,a)}if(fe&&fe(P,z),_){let N=h.textureWidth,me=h.textureHeight;i.bindFramebuffer(36008,v),i.bindFramebuffer(36009,f),t.invalidateFramebuffer(36008,[y]),t.invalidateFramebuffer(36009,[y]),t.blitFramebuffer(0,0,N,me,0,0,N,me,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,v)}u=null}let ye=new eo;ye.setAnimationLoop(se),this.setAnimationLoop=function(P){fe=P},this.dispose=function(){}}};function Pp(r){function e(p,u){p.fogColor.value.copy(u.color),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function t(p,u,y,x,M){u.isMeshBasicMaterial?n(p,u):u.isMeshLambertMaterial?(n(p,u),c(p,u)):u.isMeshToonMaterial?(n(p,u),d(p,u)):u.isMeshPhongMaterial?(n(p,u),l(p,u)):u.isMeshStandardMaterial?(n(p,u),u.isMeshPhysicalMaterial?h(p,u,M):f(p,u)):u.isMeshMatcapMaterial?(n(p,u),m(p,u)):u.isMeshDepthMaterial?(n(p,u),_(p,u)):u.isMeshDistanceMaterial?(n(p,u),v(p,u)):u.isMeshNormalMaterial?(n(p,u),L(p,u)):u.isLineBasicMaterial?(i(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?o(p,u,y,x):u.isSpriteMaterial?a(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let y=r.get(u).envMap;if(y){p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio;let T=r.get(y).__maxMipLevel;T!==void 0&&(p.maxMipLevel.value=T)}u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let x;u.map?x=u.map:u.specularMap?x=u.specularMap:u.displacementMap?x=u.displacementMap:u.normalMap?x=u.normalMap:u.bumpMap?x=u.bumpMap:u.roughnessMap?x=u.roughnessMap:u.metalnessMap?x=u.metalnessMap:u.alphaMap?x=u.alphaMap:u.emissiveMap?x=u.emissiveMap:u.clearcoatMap?x=u.clearcoatMap:u.clearcoatNormalMap?x=u.clearcoatNormalMap:u.clearcoatRoughnessMap?x=u.clearcoatRoughnessMap:u.specularIntensityMap?x=u.specularIntensityMap:u.specularTintMap?x=u.specularTintMap:u.transmissionMap?x=u.transmissionMap:u.thicknessMap&&(x=u.thicknessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let M;u.aoMap?M=u.aoMap:u.lightMap&&(M=u.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function i(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function o(p,u,y,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=x*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let M;u.map?M=u.map:u.alphaMap&&(M=u.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let y;u.map?y=u.map:u.alphaMap&&(y=u.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,u){u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap)}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===it&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===it&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===it&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===it&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias)}function f(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===it&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===it&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),r.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function h(p,u,y){f(p,u),p.ior.value=u.ior,u.sheen>0&&(p.sheenTint.value.copy(u.sheenTint).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===it&&p.clearcoatNormalScale.value.negate())),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationTint.value.copy(u.attenuationTint)),p.specularIntensity.value=u.specularIntensity,p.specularTint.value.copy(u.specularTint),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularTintMap&&(p.specularTintMap.value=u.specularTintMap)}function m(p,u){u.matcap&&(p.matcap.value=u.matcap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===it&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===it&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias)}function _(p,u){u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias)}function v(p,u){u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}function L(p,u){u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===it&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===it&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Rp(){let r=Xi("canvas");return r.style.display="block",r}function Ze(r={}){let e=r.canvas!==void 0?r.canvas:Rp(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,c=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",d=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,f=null,h=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=pt,this.physicallyCorrectLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;let v=this,L=!1,p=0,u=0,y=null,x=-1,M=null,T=new ot,b=new ot,O=null,H=e.width,W=e.height,D=1,ie=null,k=null,$=new ot(0,0,H,W),q=new ot(0,0,H,W),X=!1,V=[],ee=new fr,oe=!1,fe=!1,se=null,ye=new Oe,P=new I,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return y===null?D:1}let N=t;function me(S,U){for(let G=0;G<S.length;G++){let B=S[G],Z=e.getContext(B,U);if(Z!==null)return Z}return null}try{let S={alpha:n,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if(e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",Fe,!1),N===null){let U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),N=me(U,S),N===null)throw me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ge,ae,ce,Se,Me,ke,nt,ct,st,R,A,te,de,pe,xe,Le,Pe,De,be,F,le,J,ve;function C(){ge=new Kh(N),ae=new Xh(N,ge,r),ge.init(ae),J=new Ap(N,ge,ae),ce=new Ep(N,ge,ae),V[0]=1029,Se=new nf(N),Me=new pp,ke=new Tp(N,ge,ce,Me,ae,J,Se),nt=new jh(v),ct=new Qh(v),st=new gu(N,ae),ve=new Wh(N,ge,st,ae),R=new ef(N,st,Se,ve),A=new of(N,R,st,Se),be=new af(N,ae,ke),Le=new qh(Me),te=new fp(v,nt,ct,ge,ae,ve,Le),de=new Pp(Me),pe=new gp(Me),xe=new Mp(ge,ae),De=new Vh(v,nt,ce,A,a),Pe=new Fo(v,A,ae),F=new $h(N,ge,Se,ae),le=new tf(N,ge,Se,ae),Se.programs=te.programs,v.capabilities=ae,v.extensions=ge,v.properties=Me,v.renderLists=pe,v.shadowMap=Pe,v.state=ce,v.info=Se}C();let re=new No(v,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(S){S!==void 0&&(D=S,this.setSize(H,W,!1))},this.getSize=function(S){return S.set(H,W)},this.setSize=function(S,U,G){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,W=U,e.width=Math.floor(S*D),e.height=Math.floor(U*D),G!==!1&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(H*D,W*D).floor()},this.setDrawingBufferSize=function(S,U,G){H=S,W=U,D=G,e.width=Math.floor(S*G),e.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,U,G,B){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,U,G,B),ce.viewport(T.copy($).multiplyScalar(D).floor())},this.getScissor=function(S){return S.copy(q)},this.setScissor=function(S,U,G,B){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,U,G,B),ce.scissor(b.copy(q).multiplyScalar(D).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(S){ce.setScissorTest(X=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){k=S},this.getClearColor=function(S){return S.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(S,U,G){let B=0;(S===void 0||S)&&(B|=16384),(U===void 0||U)&&(B|=256),(G===void 0||G)&&(B|=1024),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Fe,!1),pe.dispose(),xe.dispose(),Me.dispose(),nt.dispose(),ct.dispose(),A.dispose(),ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",Pi),re.removeEventListener("sessionend",li),se&&(se.dispose(),se=null),Vt.stop()};function Ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=Se.autoReset,U=Pe.enabled,G=Pe.autoUpdate,B=Pe.needsUpdate,Z=Pe.type;C(),Se.autoReset=S,Pe.enabled=U,Pe.autoUpdate=G,Pe.needsUpdate=B,Pe.type=Z}function Ke(S){let U=S.target;U.removeEventListener("dispose",Ke),qe(U)}function qe(S){ut(S),Me.remove(S)}function ut(S){let U=Me.get(S).programs;U!==void 0&&U.forEach(function(G){te.releaseProgram(G)})}function bt(S,U){S.render(function(G){v.renderBufferImmediate(G,U)})}this.renderBufferImmediate=function(S,U){ve.initAttributes();let G=Me.get(S);S.hasPositions&&!G.position&&(G.position=N.createBuffer()),S.hasNormals&&!G.normal&&(G.normal=N.createBuffer()),S.hasUvs&&!G.uv&&(G.uv=N.createBuffer()),S.hasColors&&!G.color&&(G.color=N.createBuffer());let B=U.getAttributes();S.hasPositions&&(N.bindBuffer(34962,G.position),N.bufferData(34962,S.positionArray,35048),ve.enableAttribute(B.position.location),N.vertexAttribPointer(B.position.location,3,5126,!1,0,0)),S.hasNormals&&(N.bindBuffer(34962,G.normal),N.bufferData(34962,S.normalArray,35048),ve.enableAttribute(B.normal.location),N.vertexAttribPointer(B.normal.location,3,5126,!1,0,0)),S.hasUvs&&(N.bindBuffer(34962,G.uv),N.bufferData(34962,S.uvArray,35048),ve.enableAttribute(B.uv.location),N.vertexAttribPointer(B.uv.location,2,5126,!1,0,0)),S.hasColors&&(N.bindBuffer(34962,G.color),N.bufferData(34962,S.colorArray,35048),ve.enableAttribute(B.color.location),N.vertexAttribPointer(B.color.location,3,5126,!1,0,0)),ve.disableUnusedAttributes(),N.drawArrays(4,0,S.count),S.count=0},this.renderBufferDirect=function(S,U,G,B,Z,Ie){U===null&&(U=z);let Ee=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=Ii(S,U,G,B,Z);ce.setMaterial(B,Ee);let ze=G.index,Xe=G.attributes.position;if(ze===null){if(Xe===void 0||Xe.count===0)return}else if(ze.count===0)return;let Be=1;B.wireframe===!0&&(ze=R.getWireframeAttribute(G),Be=2),ve.setup(Z,B,Te,G,ze);let $e,w=F;ze!==null&&($e=st.get(ze),w=le,w.setIndex($e));let Re=ze!==null?ze.count:Xe.count,Ve=G.drawRange.start*Be,ft=G.drawRange.count*Be,je=Ie!==null?Ie.start*Be:0,he=Ie!==null?Ie.count*Be:Infinity,Pt=Math.max(Ve,je),Kt=Math.min(Re,Ve+ft,je+he)-1,Wt=Math.max(0,Kt-Pt+1);if(Wt!==0){if(Z.isMesh)B.wireframe===!0?(ce.setLineWidth(B.wireframeLinewidth*j()),w.setMode(1)):w.setMode(4);else if(Z.isLine){let Qe=B.linewidth;Qe===void 0&&(Qe=1),ce.setLineWidth(Qe*j()),Z.isLineSegments?w.setMode(1):Z.isLineLoop?w.setMode(2):w.setMode(3)}else Z.isPoints?w.setMode(0):Z.isSprite&&w.setMode(4);if(Z.isInstancedMesh)w.renderInstances(Pt,Wt,Z.count);else if(G.isInstancedBufferGeometry){let Qe=Math.min(G.instanceCount,G._maxInstanceCount);w.renderInstances(Pt,Wt,Qe)}else w.render(Pt,Wt)}},this.compile=function(S,U){h=xe.get(S),h.init(),_.push(h),S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(v.physicallyCorrectLights),S.traverse(function(G){let B=G.material;if(B)if(Array.isArray(B))for(let Z=0;Z<B.length;Z++){let Ie=B[Z];ci(Ie,S,G)}else ci(B,S,G)}),_.pop(),h=null};let xt=null;function wt(S){xt&&xt(S)}function Pi(){Vt.stop()}function li(){Vt.start()}let Vt=new eo;Vt.setAnimationLoop(wt),typeof window!="undefined"&&Vt.setContext(window),this.setAnimationLoop=function(S){xt=S,re.setAnimationLoop(S),S===null?Vt.stop():Vt.start()},re.addEventListener("sessionstart",Pi),re.addEventListener("sessionend",li),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,y),h=xe.get(S,_.length),h.init(),_.push(h),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,oe=Le.init(this.clippingPlanes,fe,U),f=pe.get(S,m.length),f.init(),m.push(f),Ri(S,U,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(ie,k),oe===!0&&Le.beginShadows();let G=h.state.shadowsArray;if(Pe.render(G,S,U),oe===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),De.render(f,S),h.setupLights(v.physicallyCorrectLights),U.isArrayCamera){let B=U.cameras;for(let Z=0,Ie=B.length;Z<Ie;Z++){let Ee=B[Z];Rn(f,S,Ee,Ee.viewport)}}else Rn(f,S,U);y!==null&&(ke.updateMultisampleRenderTarget(y),ke.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(v,S,U),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1),ve.resetDefaultState(),x=-1,M=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ri(S,U,G,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){B&&P.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);let Ee=A.update(S),Te=S.material;Te.visible&&f.push(S,Ee,Te,G,P.z,null)}}else if(S.isImmediateRenderObject)B&&P.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye),f.push(S,null,S.material,G,P.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Se.render.frame&&(S.skeleton.update(),S.skeleton.frame=Se.render.frame),!S.frustumCulled||ee.intersectsObject(S))){B&&P.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);let Ee=A.update(S),Te=S.material;if(Array.isArray(Te)){let ze=Ee.groups;for(let Xe=0,Be=ze.length;Xe<Be;Xe++){let $e=ze[Xe],w=Te[$e.materialIndex];w&&w.visible&&f.push(S,Ee,w,G,P.z,$e)}}else Te.visible&&f.push(S,Ee,Te,G,P.z,null)}}let Ie=S.children;for(let Ee=0,Te=Ie.length;Ee<Te;Ee++)Ri(Ie[Ee],U,G,B)}function Rn(S,U,G,B){let Z=S.opaque,Ie=S.transmissive,Ee=S.transparent;h.setupLightsView(G),Ie.length>0&&Ci(Z,U,G),B&&ce.viewport(T.copy(B)),Z.length>0&&Cn(Z,U,G),Ie.length>0&&Cn(Ie,U,G),Ee.length>0&&Cn(Ee,U,G)}function Ci(S,U,G){if(se===null){let Ee=o===!0&&ae.isWebGL2===!0?$r:Bt;se=new Ee(1024,1024,{generateMipmaps:!0,type:J.convert(Nn)!==null?Nn:tn,minFilter:Vi,magFilter:Mt,wrapS:St,wrapT:St})}let B=v.getRenderTarget();v.setRenderTarget(se),v.clear();let Z=v.toneMapping;v.toneMapping=bn,Cn(S,U,G),v.toneMapping=Z,ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se),v.setRenderTarget(B)}function Cn(S,U,G){let B=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,Ie=S.length;Z<Ie;Z++){let Ee=S[Z],Te=Ee.object,ze=Ee.geometry,Xe=B===null?Ee.material:B,Be=Ee.group;Te.layers.test(G.layers)&&Sr(Te,U,G,ze,Xe,Be)}}function Sr(S,U,G,B,Z,Ie){if(S.onBeforeRender(v,U,G,B,Z,Ie),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(v,U,G,B,S,Ie),S.isImmediateRenderObject){let Ee=Ii(G,U,B,Z,S);ce.setMaterial(Z),ve.reset(),bt(S,Ee)}else Z.transparent===!0&&Z.side===In?(Z.side=it,Z.needsUpdate=!0,v.renderBufferDirect(G,U,B,Z,S,Ie),Z.side=mi,Z.needsUpdate=!0,v.renderBufferDirect(G,U,B,Z,S,Ie),Z.side=In):v.renderBufferDirect(G,U,B,Z,S,Ie);S.onAfterRender(v,U,G,B,Z,Ie)}function ci(S,U,G){U.isScene!==!0&&(U=z);let B=Me.get(S),Z=h.state.lights,Ie=h.state.shadowsArray,Ee=Z.state.version,Te=te.getParameters(S,Z.state,Ie,U,G),ze=te.getProgramCacheKey(Te),Xe=B.programs;B.environment=S.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(S.isMeshStandardMaterial?ct:nt).get(S.envMap||B.environment),Xe===void 0&&(S.addEventListener("dispose",Ke),Xe=new Map,B.programs=Xe);let Be=Xe.get(ze);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===Ee)return Di(S,Te),Be}else Te.uniforms=te.getUniforms(S),S.onBuild(Te,v),S.onBeforeCompile(Te,v),Be=te.acquireProgram(Te,ze),Xe.set(ze,Be),B.uniforms=Te.uniforms;let $e=B.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&($e.clippingPlanes=Le.uniform),Di(S,Te),B.needsLights=Fi(S),B.lightsStateVersion=Ee,B.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMap.value=Z.state.directionalShadowMap,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotShadowMap.value=Z.state.spotShadowMap,$e.spotShadowMatrix.value=Z.state.spotShadowMatrix,$e.pointShadowMap.value=Z.state.pointShadowMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix);let w=Be.getUniforms(),Re=mn.seqWithValue(w.seq,$e);return B.currentProgram=Be,B.uniformsList=Re,Be}function Di(S,U){let G=Me.get(S);G.outputEncoding=U.outputEncoding,G.instancing=U.instancing,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents}function Ii(S,U,G,B,Z){U.isScene!==!0&&(U=z),ke.resetTextureUnits();let Ie=U.fog,Ee=B.isMeshStandardMaterial?U.environment:null,Te=y===null?v.outputEncoding:y.texture.encoding,ze=(B.isMeshStandardMaterial?ct:nt).get(B.envMap||Ee),Xe=B.vertexColors===!0&&!!G&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!B.normalMap&&!!G&&!!G.attributes.tangent,$e=!!G&&!!G.morphAttributes.position,w=!!G&&!!G.morphAttributes.normal,Re=!!G&&!!G.morphAttributes.position?G.morphAttributes.position.length:0,Ve=Me.get(B),ft=h.state.lights;if(oe===!0&&(fe===!0||S!==M)){let Rt=S===M&&B.id===x;Le.setState(B,S,Rt)}let je=!1;B.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ft.state.version||Ve.outputEncoding!==Te||Z.isInstancedMesh&&Ve.instancing===!1||!Z.isInstancedMesh&&Ve.instancing===!0||Z.isSkinnedMesh&&Ve.skinning===!1||!Z.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==ze||B.fog&&Ve.fog!==Ie||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Le.numPlanes||Ve.numIntersection!==Le.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==Be||Ve.morphTargets!==$e||Ve.morphNormals!==w||ae.isWebGL2===!0&&Ve.morphTargetsCount!==Re)&&(je=!0):(je=!0,Ve.__version=B.version);let he=Ve.currentProgram;je===!0&&(he=ci(B,U,Z));let Pt=!1,Kt=!1,Wt=!1,Qe=he.getUniforms(),Dn=Ve.uniforms;if(ce.useProgram(he.program)&&(Pt=!0,Kt=!0,Wt=!0),B.id!==x&&(x=B.id,Kt=!0),Pt||M!==S){if(Qe.setValue(N,"projectionMatrix",S.projectionMatrix),ae.logarithmicDepthBuffer&&Qe.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,Kt=!0,Wt=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){let Rt=Qe.map.cameraPosition;Rt!==void 0&&Rt.setValue(N,P.setFromMatrixPosition(S.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Qe.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Z.isSkinnedMesh)&&Qe.setValue(N,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){Qe.setOptional(N,Z,"bindMatrix"),Qe.setOptional(N,Z,"bindMatrixInverse");let Rt=Z.skeleton;Rt&&(ae.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),Qe.setValue(N,"boneTexture",Rt.boneTexture,ke),Qe.setValue(N,"boneTextureSize",Rt.boneTextureSize)):Qe.setOptional(N,Rt,"boneMatrices"))}return!!G&&(G.morphAttributes.position!==void 0||G.morphAttributes.normal!==void 0)&&be.update(Z,G,B,he),(Kt||Ve.receiveShadow!==Z.receiveShadow)&&(Ve.receiveShadow=Z.receiveShadow,Qe.setValue(N,"receiveShadow",Z.receiveShadow)),Kt&&(Qe.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Er(Dn,Wt),Ie&&B.fog&&de.refreshFogUniforms(Dn,Ie),de.refreshMaterialUniforms(Dn,B,D,W,se),mn.upload(N,Ve.uniformsList,Dn,ke)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mn.upload(N,Ve.uniformsList,Dn,ke),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Qe.setValue(N,"center",Z.center),Qe.setValue(N,"modelViewMatrix",Z.modelViewMatrix),Qe.setValue(N,"normalMatrix",Z.normalMatrix),Qe.setValue(N,"modelMatrix",Z.matrixWorld),he}function Er(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Fi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return y},this.setRenderTarget=function(S,U=0,G=0){y=S,p=U,u=G,S&&Me.get(S).__webglFramebuffer===void 0&&ke.setupRenderTarget(S);let B=null,Z=!1,Ie=!1;if(S){let Te=S.texture;(Te.isDataTexture3D||Te.isDataTexture2DArray)&&(Ie=!0);let ze=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(B=ze[U],Z=!0):S.isWebGLMultisampleRenderTarget?B=Me.get(S).__webglMultisampledFramebuffer:B=ze,T.copy(S.viewport),b.copy(S.scissor),O=S.scissorTest}else T.copy($).multiplyScalar(D).floor(),b.copy(q).multiplyScalar(D).floor(),O=X;if(ce.bindFramebuffer(36160,B)&&ae.drawBuffers){let Te=!1;if(S)if(S.isWebGLMultipleRenderTargets){let ze=S.texture;if(V.length!==ze.length||V[0]!==36064){for(let Xe=0,Be=ze.length;Xe<Be;Xe++)V[Xe]=36064+Xe;V.length=ze.length,Te=!0}}else(V.length!==1||V[0]!==36064)&&(V[0]=36064,V.length=1,Te=!0);else(V.length!==1||V[0]!==1029)&&(V[0]=1029,V.length=1,Te=!0);Te&&(ae.isWebGL2?N.drawBuffers(V):ge.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}if(ce.viewport(T),ce.scissor(b),ce.setScissorTest(O),Z){let Te=Me.get(S.texture);N.framebufferTexture2D(36160,36064,34069+U,Te.__webglTexture,G)}else if(Ie){let Te=Me.get(S.texture),ze=U||0;N.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,ze)}x=-1},this.readRenderTargetPixels=function(S,U,G,B,Z,Ie,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){ce.bindFramebuffer(36160,Te);try{let ze=S.texture,Xe=ze.format,Be=ze.type;if(Xe!==_t&&J.convert(Xe)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=Be===Nn&&(ge.has("EXT_color_buffer_half_float")||ae.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Be!==tn&&J.convert(Be)!==N.getParameter(35738)&&!(Be===nn&&(ae.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N.checkFramebufferStatus(36160)===36053?U>=0&&U<=S.width-B&&G>=0&&G<=S.height-Z&&N.readPixels(U,G,B,Z,J.convert(Xe),J.convert(Be),Ie):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let ze=y!==null?Me.get(y).__webglFramebuffer:null;ce.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(S,U,G=0){let B=Math.pow(2,-G),Z=Math.floor(U.image.width*B),Ie=Math.floor(U.image.height*B),Ee=J.convert(U.format);ae.isWebGL2&&(Ee===6407&&(Ee=32849),Ee===6408&&(Ee=32856)),ke.setTexture2D(U,0),N.copyTexImage2D(3553,G,Ee,S.x,S.y,Z,Ie,0),ce.unbindTexture()},this.copyTextureToTexture=function(S,U,G,B=0){let Z=U.image.width,Ie=U.image.height,Ee=J.convert(G.format),Te=J.convert(G.type);ke.setTexture2D(G,0),N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment),U.isDataTexture?N.texSubImage2D(3553,B,S.x,S.y,Z,Ie,Ee,Te,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(3553,B,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Ee,U.mipmaps[0].data):N.texSubImage2D(3553,B,S.x,S.y,Ee,Te,U.image),B===0&&G.generateMipmaps&&N.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,U,G,B,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ie=S.max.x-S.min.x+1,Ee=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,ze=J.convert(B.format),Xe=J.convert(B.type),Be;if(B.isDataTexture3D)ke.setTexture3D(B,0),Be=32879;else if(B.isDataTexture2DArray)ke.setTexture2DArray(B,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,B.flipY),N.pixelStorei(37441,B.premultiplyAlpha),N.pixelStorei(3317,B.unpackAlignment);let $e=N.getParameter(3314),w=N.getParameter(32878),Re=N.getParameter(3316),Ve=N.getParameter(3315),ft=N.getParameter(32877),je=G.isCompressedTexture?G.mipmaps[0]:G.image;N.pixelStorei(3314,je.width),N.pixelStorei(32878,je.height),N.pixelStorei(3316,S.min.x),N.pixelStorei(3315,S.min.y),N.pixelStorei(32877,S.min.z),G.isDataTexture||G.isDataTexture3D?N.texSubImage3D(Be,Z,U.x,U.y,U.z,Ie,Ee,Te,ze,Xe,je.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,Z,U.x,U.y,U.z,Ie,Ee,Te,ze,je.data)):N.texSubImage3D(Be,Z,U.x,U.y,U.z,Ie,Ee,Te,ze,Xe,je),N.pixelStorei(3314,$e),N.pixelStorei(32878,w),N.pixelStorei(3316,Re),N.pixelStorei(3315,Ve),N.pixelStorei(32877,ft),Z===0&&B.generateMipmaps&&N.generateMipmap(Be),ce.unbindTexture()},this.initTexture=function(S){ke.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){p=0,u=0,y=null,ce.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var si=class extends et{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};si.prototype.isScene=!0;var Ln=class extends ln{constructor(e){super();this.type="LineBasicMaterial",this.color=new We(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};Ln.prototype.isLineBasicMaterial=!0;var zo=new I,Oo=new I,Uo=new Oe,Ls=new Hn,_r=new Gn,Ai=class extends et{constructor(e=new tt,t=new Ln){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zo.fromBufferAttribute(t,i-1),Oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zo.distanceTo(Oo);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;Uo.copy(i).invert(),Ls.copy(e.ray).applyMatrix4(Uo);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,d=new I,f=new I,h=new I,m=this.isLineSegments?2:1;if(n.isBufferGeometry){let _=n.index,L=n.attributes.position;if(_!==null){let p=Math.max(0,o.start),u=Math.min(_.count,o.start+o.count);for(let y=p,x=u-1;y<x;y+=m){let M=_.getX(y),T=_.getX(y+1);if(l.fromBufferAttribute(L,M),d.fromBufferAttribute(L,T),Ls.distanceSqToSegment(l,d,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(h);O<e.near||O>e.far||t.push({distance:O,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),u=Math.min(L.count,o.start+o.count);for(let y=p,x=u-1;y<x;y+=m){if(l.fromBufferAttribute(L,y),d.fromBufferAttribute(L,y+1),Ls.distanceSqToSegment(l,d,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Ai.prototype.isLine=!0;var yr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);let d=n[i],h=n[i+1]-d,m=(o-d)/h;return(i+m)/(s-1)}getTangent(e,t){let n=1e-4,i=e-n,s=e+n;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new Ne:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],s=[],o=[],a=new I,c=new Oe;for(let m=0;m<=e;m++){let _=m/e;i[m]=this.getTangentAt(_,new I)}s[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,d=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=l&&(l=d,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Et(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,_))}o[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(Et(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],m*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Ps(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,f){let h=(o-s)/l-(a-s)/(l+d)+(a-o)/d,m=(a-o)/d-(c-o)/(d+f)+(c-a)/f;h*=d,m*=d,i(o,a,h,m)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var br=new I,Rs=new Ps,Cs=new Ps,Ds=new Ps,Li=class extends yr{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=i[(a-1)%s]:(br.subVectors(i[0],i[1]).add(i[0]),l=br);let f=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?d=i[(a+2)%s]:(br.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=br),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(h),m),L=Math.pow(h.distanceToSquared(d),m);v<1e-4&&(v=1),_<1e-4&&(_=v),L<1e-4&&(L=v),Rs.initNonuniformCatmullRom(l.x,f.x,h.x,d.x,_,v,L),Cs.initNonuniformCatmullRom(l.y,f.y,h.y,d.y,_,v,L),Ds.initNonuniformCatmullRom(l.z,f.z,h.z,d.z,_,v,L)}else this.curveType==="catmullrom"&&(Rs.initCatmullRom(l.x,f.x,h.x,d.x,this.tension),Cs.initCatmullRom(l.y,f.y,h.y,d.y,this.tension),Ds.initCatmullRom(l.z,f.z,h.z,d.z,this.tension));return n.set(Rs.calc(c),Cs.calc(c),Ds.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Li.prototype.isCatmullRomCurve3=!0;var Bo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Go=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=l.length;f<h;f+=2){let m=l[f],_=l[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}},Cp=new Go,ai=class{constructor(e){this.manager=e!==void 0?e:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Is=class extends ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Bo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Xi("img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),Bo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Ho=class extends ai{constructor(e){super(e)}load(e,t,n,i){let s=new wi,o=new Is(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(d){s.images[l]=d,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}},ko=class extends ai{constructor(e){super(e)}load(e,t,n,i){let s=new Tt,o=new Is(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Fs=class extends et{constructor(e,t=1){super();this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Fs.prototype.isLight=!0;var Vo=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},Wo="\\[\\]\\.:\\/",Ns="[^"+Wo+"]",Dp="[^"+Wo.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",Ns),nm=/(WCOD+)?/.source.replace("WCOD",Dp),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ns),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ns),Mr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};yr.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(yr.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};ai.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Vo.extractUrlBase(r)};ai.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Dt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Dt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Dt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Dt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Dt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Gn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};fr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};at.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};at.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};at.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};at.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};at.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};at.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Oe.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};Oe.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Oe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new I().setFromMatrixColumn(this,3)};Oe.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};Oe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Oe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Oe.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Oe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Oe.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};Oe.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Oe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Oe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Oe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Oe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Oe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Oe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Oe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Oe.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};Oe.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Gt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Ct.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Ct.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Hn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Hn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Hn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};rt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};rt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};rt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};rt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};rt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};rt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),rt.getBarycoord(r,e,t,n,i)};rt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),rt.getNormal(r,e,t,n)};Ne.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Ne.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};Ne.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};I.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};I.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};I.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};I.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};I.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};I.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};I.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};I.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};I.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ot.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ot.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};et.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};et.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};et.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};et.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};et.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(et.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ft.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ft.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Wc},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});gt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Fs.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(ht.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Hr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Hr)}}});ht.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Hr:Gr),this};ht.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ht.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};tt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};tt.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new ht(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};tt.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};tt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};tt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};tt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};tt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(tt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});si.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ln.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new We}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===ha}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(hn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Ze.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};Ze.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Ze.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ze.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ze.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ze.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ze.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ze.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ze.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ze.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ze.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ze.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ze.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ze.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ze.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Ze.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ze.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ze.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ze.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ze.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ze.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ze.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ze.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ze.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ze.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ze.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Mn:pt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Fo.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Bt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});dr.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};dr.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};wn.crossOrigin=void 0;wn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new ko;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};wn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new Ho;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};wn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};wn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);var zs=class extends Error{constructor(e){super(`Identifier "${e}" has not been declared in a range!`);this.value=e,this.name="UndeclaredIdentifierError"}},Os=class extends Error{constructor(e){super(`The range for identifier ${e} is infinite!`);this.value=e,this.name="InfiniteRangeError"}},Us=class extends Error{constructor(e){super("The identifiers for the declared ranges aren't correct!");this.value=e,this.name="RangeIdentifierParityError"}},Bs=class extends Error{constructor(e){super(`The resolution value ${e} is not allowed! Must be a positive int!`);this.value=e,this.name="InvalidResolutionError"}},Gs=class extends Error{constructor(e){super("A number cannot be raised to a float if the base is negative!");this.value=e,this.name="ImaginaryNumberError"}};function $o(r,e){let t=e.map(s=>s.identifier),n=r.sort().join(""),i=t.sort().join("");if(n!==i)throw new Us(r)}function Ip(r){return r.reduce((e,t)=>{let n=t;return e[n.option]=n.value||!0,e},{})}function Fp(r,e){let{ids:t,bounds:n}=r;$o(t,n);let i=!isNaN(e.resolution)&&e.resolution>2?e.resolution:Ge.RESOLUTION;return i=i>Ge.MAX_RESOLUTION?Ge.MAX_RESOLUTION:i,n.map(s=>Xo(s,i))}function Np(r){return Hs(r,(e,t)=>({...e,...t}))}function zp(r,e){function t(n){return n.map(i=>{if(Array.isArray(i))return t(i);let s=r.map(o=>({[o.axis]:oi(o.expression,i)})).reduce((o,a)=>({...o,...a}),{});return new I(s.x,s.y,s.z||0)})}return t(e)}function Xo(r,e){if(e<1)throw new Bs(e);let{ruleLeft:t,identifier:n,ruleRight:i}=r,s=oi(r.low,{}),o=oi(r.high,{}),a=(o-s)/e,c=[],l=1e5,d=-1e5;if(t(s,l)&&i(l,o)||t(s,d)&&i(d,o)||s==o)throw new Os(n);let f=s;for(t(s,s)||(f+=a);i(f,o);)c.push({[n]:f}),f+=a;return c}function Hs([r,...[e,...t]],n){if(!e||e.length==0)return r;let i=e.map(s=>r.map(o=>n(o,s)));return Hs([i,t],n)}function oi(r,e){return r.args&&r.op?r.op.apply(e,r.args.map(t=>oi(t,e))):r}function Op(r,e){return e.reduce((t,n)=>{let i=n[0],s=n[2];return i.apply(this,[t,oi(s,this)])},r)}function Up(r){return function(){let e=this[r];if(e==null)throw new zs(r);return e}}function Bp(r,e){if(r<0&&!Number.isInteger(e))throw new Gs(e);return Math.pow(r,e)}var gn={ensureIdentifierParity:$o,parseOptions:Ip,parseRange:Fp,combineRangeValues:Np,combineArrays:Hs,genPointsWithFormulas:zp,generateNamedRangeValues:Xo,evalArithmeticExprs:Op,evalWithEnv:oi,makeIDFetcher:Up,safePow:Bp};function Gp(r,e){function t(){this.constructor=r}t.prototype=e.prototype,r.prototype=new t}function Pn(r,e,t,n){var i=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(i,Pn.prototype),i.expected=e,i.found=t,i.location=n,i.name="SyntaxError",i}Gp(Pn,Error);function ks(r,e,t){return t=t||" ",r.length>e?r:(e-=r.length,t+=t.repeat(e),r+t.slice(0,e))}Pn.prototype.format=function(r){var e="Error: "+this.message;if(this.location){var t=null,n;for(n=0;n<r.length;n++)if(r[n].source===this.location.source){t=r[n].text.split(/\r\n|\n|\r/g);break}var i=this.location.start,s=this.location.source+":"+i.line+":"+i.column;if(t){var o=this.location.end,a=ks("",i.line.toString().length),c=t[i.line-1],l=i.line===o.line?o.column:c.length+1;e+=`
 --> `+s+`
`+a+` |
`+i.line+" | "+c+`
`+a+" | "+ks("",i.column-1)+ks("",l-i.column,"^")}else e+=`
 at `+s}return e};Pn.buildMessage=function(r,e){var t={literal:function(l){return'"'+i(l.text)+'"'},class:function(l){var d=l.parts.map(function(f){return Array.isArray(f)?s(f[0])+"-"+s(f[1]):s(f)});return"["+(l.inverted?"^":"")+d+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(l){return l.description}};function n(l){return l.charCodeAt(0).toString(16).toUpperCase()}function i(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+n(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+n(d)})}function s(l){return l.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+n(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+n(d)})}function o(l){return t[l.type](l)}function a(l){var d=l.map(o),f,h;if(d.sort(),d.length>0){for(f=1,h=1;f<d.length;f++)d[f-1]!==d[f]&&(d[h]=d[f],h++);d.length=h}switch(d.length){case 1:return d[0];case 2:return d[0]+" or "+d[1];default:return d.slice(0,-1).join(", ")+", or "+d[d.length-1]}}function c(l){return l?'"'+i(l)+'"':"end of input"}return"Expected "+a(r)+" but "+c(e)+" found."};function qo(r,e){e=e!==void 0?e:{};var t={},n=e.grammarSource,i={program:ea},s=ea,o="#",a="{",c="|",l="}",d=",",f="=",h="(",m=")",_="+",v="-",L="*",p="/",u="^",y="**",x="<=",M="???",T=">=",b="???",O="<",H=">",W="rgb(",D="x",ie="y",k="z",$="/*",q="*/",X="PI",V="??",ee=".",oe=/^[a-z]/,fe=/^[0-9]/,se=/^[a-zA-Z]/,ye=/^[ \t\n]/,P=/^[\n]/,z=Ye("#",!1),j=Ye("{",!1),N=Ye("|",!1),me=Ye("}",!1),ge=Ye(",",!1),ae=Ye("=",!1),ce=Ye("(",!1),Se=Ye(")",!1),Me=Ye("+",!1),ke=Ye("-",!1),nt=Ye("*",!1),ct=Ye("/",!1),st=Ye("^",!1),R=Ye("**",!1),A=Ye("<=",!1),te=Ye("???",!1),de=Ye(">=",!1),pe=Ye("???",!1),xe=Ye("<",!1),Le=Ye(">",!1),Pe=Ye("rgb(",!1),De=Ye("x",!1),be=Ye("y",!1),F=Ye("z",!1),le=ui([["a","z"]],!1,!1),J=Ye("/*",!1),ve=Ye("*/",!1),C=cl(),re=Ye("PI",!1),Ue=Ye("??",!1),Fe=ui([["0","9"]],!1,!1),Ke=Ye(".",!1),qe=ui([["a","z"],["A","Z"]],!1,!1),ut=ui([" ","	",`
`],!1,!1),bt=ui([`
`],!1,!1),xt=function(g,E,Y){g=gn.parseOptions(g),E=gn.parseRange(E,g);let K=gn.combineArrays(E,(ne,Ae)=>({...ne,...Ae})),Q=gn.genPointsWithFormulas(Y,K);return{options:g,range:E,sagara:K,points:Q,formulas:Y}},wt=function(g,E){return{option:g,value:E}},Pi=function(g,E){return{ids:g,bounds:E}},li=function(g,E){return[g,...E]},Vt=function(g,E,Y,K,Q){return{low:g,ruleLeft:E,identifier:Y,ruleRight:K,high:Q}},Ri=function(g,E){return{axis:g,expression:E}},Rn=function(g,E){return{op:gn.evalArithmeticExprs,args:[g,E]}},Ci=function(g){return g},Cn=function(g){return{op:E=>-1*E,args:[g]}},Sr=function(g,E){switch(g){case"cos":return{op:Math.cos,args:[E]};case"sin":return{op:Math.sin,args:[E]};case"atan":return{op:Math.atan,args:[E]};default:throw`Unknown function ${g}`}},ci=function(){return(g,E)=>g+E},Di=function(){return(g,E)=>g-E},Ii=function(){return(g,E)=>g*E},Er=function(){return(g,E)=>g/E},Fi=function(){return gn.safePow},S=function(){return(g,E)=>g<=E},U=function(){return(g,E)=>g>=E},G=function(){return(g,E)=>g<E},B=function(){return(g,E)=>g>E},Z=function(g,E,Y){return`rgb(${g}, ${E}, ${Y})`},Ie=function(g){return g},Ee=function(g){return{op:gn.makeIDFetcher(g),args:[]}},Te=function(){return Math.PI},ze=function(g,E){return parseFloat((g||[]).join("")+"."+E.join(""))},Xe=function(g){return parseInt(g.join(""))},Be=function(g){return g.join("")},$e=function(g){return g.join("")},w=0,Re=0,Ve=[{line:1,column:1}],ft=0,je=[],he=0,Pt;if("startRule"in e){if(!(e.startRule in i))throw new Error(`Can't start parsing from rule "`+e.startRule+'".');s=i[e.startRule]}function Kt(){return r.substring(Re,w)}function Wt(){return Re}function Qe(){return{source:n,start:Re,end:w}}function Dn(){return di(Re,w)}function Rt(g,E){throw E=E!==void 0?E:di(Re,w),Ks([dl(g)],r.substring(Re,w),E)}function Zp(g,E){throw E=E!==void 0?E:di(Re,w),hl(g,E)}function Ye(g,E){return{type:"literal",text:g,ignoreCase:E}}function ui(g,E,Y){return{type:"class",parts:g,inverted:E,ignoreCase:Y}}function cl(){return{type:"any"}}function ul(){return{type:"end"}}function dl(g){return{type:"other",description:g}}function Qs(g){var E=Ve[g],Y;if(E)return E;for(Y=g-1;!Ve[Y];)Y--;for(E=Ve[Y],E={line:E.line,column:E.column};Y<g;)r.charCodeAt(Y)===10?(E.line++,E.column=1):E.column++,Y++;return Ve[g]=E,E}function di(g,E){var Y=Qs(g),K=Qs(E);return{source:n,start:{offset:g,line:Y.line,column:Y.column},end:{offset:E,line:K.line,column:K.column}}}function _e(g){w<ft||(w>ft&&(ft=w,je=[]),je.push(g))}function hl(g,E){return new Pn(g,null,null,E)}function Ks(g,E,Y){return new Pn(Pn.buildMessage(g,E),g,E,Y)}function ea(){var g,E,Y,K,Q,ne,Ae,we;for(g=w,E=Ce(),Y=[],K=ta();K!==t;)Y.push(K),K=ta();if(K=Ce(),Q=fl(),Q!==t){if(ne=Ce(),Ae=[],we=na(),we!==t)for(;we!==t;)Ae.push(we),we=na();else Ae=t;Ae!==t?(we=Ce(),Re=g,g=xt(Y,Q,Ae)):(w=g,g=t)}else w=g,g=t;return g}function ta(){var g,E,Y,K,Q,ne,Ae,we;return g=w,E=Ce(),r.charCodeAt(w)===35?(Y=o,w++):(Y=t,he===0&&_e(z)),Y!==t?(K=Ce(),Q=la(),Q!==t?(ne=Ce(),Ae=Bi(),Ae===t&&(Ae=vl()),Ae===t&&(Ae=null),we=Ce(),Re=g,g=wt(Q,Ae)):(w=g,g=t)):(w=g,g=t),g}function fl(){var g,E,Y,K,Q,ne,Ae,we,xn,$t,hi,fi;return g=w,E=Ce(),r.charCodeAt(w)===123?(Y=a,w++):(Y=t,he===0&&_e(j)),Y!==t?(K=Ce(),Q=pl(),Q!==t?(ne=Ce(),r.charCodeAt(w)===124?(Ae=c,w++):(Ae=t,he===0&&_e(N)),Ae!==t?(we=Ce(),xn=ml(),xn!==t?($t=Ce(),r.charCodeAt(w)===125?(hi=l,w++):(hi=t,he===0&&_e(me)),hi!==t?(fi=Ce(),Re=g,g=Pi(Q,xn)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t),g}function pl(){var g,E,Y,K,Q,ne,Ae,we;if(g=w,E=Ui(),E!==t){for(Y=[],K=w,Q=Ce(),r.charCodeAt(w)===44?(ne=d,w++):(ne=t,he===0&&_e(ge)),ne!==t?(Ae=Ce(),we=Ui(),we!==t?K=we:(w=K,K=t)):(w=K,K=t);K!==t;)Y.push(K),K=w,Q=Ce(),r.charCodeAt(w)===44?(ne=d,w++):(ne=t,he===0&&_e(ge)),ne!==t?(Ae=Ce(),we=Ui(),we!==t?K=we:(w=K,K=t)):(w=K,K=t);Re=g,g=li(E,Y)}else w=g,g=t;return g}function ml(){var g,E,Y,K,Q,ne,Ae,we;if(g=w,E=Tr(),E!==t){for(Y=[],K=w,Q=Ce(),r.charCodeAt(w)===44?(ne=d,w++):(ne=t,he===0&&_e(ge)),ne!==t?(Ae=Ce(),we=Tr(),we!==t?K=we:(w=K,K=t)):(w=K,K=t);K!==t;)Y.push(K),K=w,Q=Ce(),r.charCodeAt(w)===44?(ne=d,w++):(ne=t,he===0&&_e(ge)),ne!==t?(Ae=Ce(),we=Tr(),we!==t?K=we:(w=K,K=t)):(w=K,K=t);Re=g,g=li(E,Y)}else w=g,g=t;return g}function Tr(){var g,E,Y,K,Q,ne,Ae,we,xn,$t;return g=w,E=vn(),E!==t?(Y=Ce(),K=aa(),K!==t?(Q=Ce(),ne=Ui(),ne!==t?(Ae=Ce(),we=aa(),we!==t?(xn=Ce(),$t=vn(),$t!==t?(Re=g,g=Vt(E,K,ne,we,$t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t),g}function na(){var g,E,Y,K,Q,ne,Ae;return g=w,E=xl(),E!==t?(Y=Ce(),r.charCodeAt(w)===61?(K=f,w++):(K=t,he===0&&_e(ae)),K!==t?(Q=Ce(),ne=vn(),ne!==t?(Ae=Ce(),Re=g,g=Ri(E,ne)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t),g}function vn(){var g,E,Y,K,Q,ne,Ae,we;if(g=w,E=Ni(),E!==t){for(Y=Ce(),K=[],Q=w,ne=ia(),ne!==t?(Ae=Ce(),we=vn(),we!==t?(ne=[ne,Ae,we],Q=ne):(w=Q,Q=t)):(w=Q,Q=t);Q!==t;)K.push(Q),Q=w,ne=ia(),ne!==t?(Ae=Ce(),we=vn(),we!==t?(ne=[ne,Ae,we],Q=ne):(w=Q,Q=t)):(w=Q,Q=t);Re=g,g=Rn(E,K)}else w=g,g=t;return g===t&&(g=Ni()),g}function Ni(){var g,E,Y,K,Q,ne,Ae,we;if(g=w,E=zi(),E!==t){for(Y=Ce(),K=[],Q=w,ne=ra(),ne!==t?(Ae=Ce(),we=Ni(),we!==t?(ne=[ne,Ae,we],Q=ne):(w=Q,Q=t)):(w=Q,Q=t);Q!==t;)K.push(Q),Q=w,ne=ra(),ne!==t?(Ae=Ce(),we=Ni(),we!==t?(ne=[ne,Ae,we],Q=ne):(w=Q,Q=t)):(w=Q,Q=t);Re=g,g=Rn(E,K)}else w=g,g=t;return g===t&&(g=zi()),g}function zi(){var g,E,Y,K,Q,ne,Ae,we;if(g=w,E=Oi(),E!==t){for(Y=Ce(),K=[],Q=w,ne=sa(),ne!==t?(Ae=Ce(),we=zi(),we!==t?(ne=[ne,Ae,we],Q=ne):(w=Q,Q=t)):(w=Q,Q=t);Q!==t;)K.push(Q),Q=w,ne=sa(),ne!==t?(Ae=Ce(),we=zi(),we!==t?(ne=[ne,Ae,we],Q=ne):(w=Q,Q=t)):(w=Q,Q=t);Re=g,g=Rn(E,K)}else w=g,g=t;return g===t&&(g=Oi()),g}function Oi(){var g,E,Y,K,Q,ne;return g=w,r.charCodeAt(w)===40?(E=h,w++):(E=t,he===0&&_e(ce)),E!==t?(Y=Ce(),K=vn(),K!==t?(Q=Ce(),r.charCodeAt(w)===41?(ne=m,w++):(ne=t,he===0&&_e(Se)),ne!==t?(Re=g,g=Ci(K)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t),g===t&&(g=w,r.charCodeAt(w)===43?(E=_,w++):(E=t,he===0&&_e(Me)),E!==t?(Y=Oi(),Y!==t?(Re=g,g=Ci(Y)):(w=g,g=t)):(w=g,g=t),g===t&&(g=w,r.charCodeAt(w)===45?(E=v,w++):(E=t,he===0&&_e(ke)),E!==t?(Y=Oi(),Y!==t?(Re=g,g=Cn(Y)):(w=g,g=t)):(w=g,g=t),g===t&&(g=gl(),g===t&&(g=yl(),g===t&&(g=bl(),g===t&&(g=_l())))))),g}function gl(){var g,E,Y,K,Q,ne,Ae;return g=w,E=la(),E!==t?(r.charCodeAt(w)===40?(Y=h,w++):(Y=t,he===0&&_e(ce)),Y!==t?(K=Ce(),Q=vn(),Q!==t?(ne=Ce(),r.charCodeAt(w)===41?(Ae=m,w++):(Ae=t,he===0&&_e(Se)),Ae!==t?(Re=g,g=Sr(E,Q)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t),g}function ia(){var g,E;return g=w,r.charCodeAt(w)===43?(E=_,w++):(E=t,he===0&&_e(Me)),E!==t&&(Re=g,E=ci()),g=E,g===t&&(g=w,r.charCodeAt(w)===45?(E=v,w++):(E=t,he===0&&_e(ke)),E!==t&&(Re=g,E=Di()),g=E),g}function ra(){var g,E;return g=w,r.charCodeAt(w)===42?(E=L,w++):(E=t,he===0&&_e(nt)),E!==t&&(Re=g,E=Ii()),g=E,g===t&&(g=w,r.charCodeAt(w)===47?(E=p,w++):(E=t,he===0&&_e(ct)),E!==t&&(Re=g,E=Er()),g=E),g}function sa(){var g,E;return g=w,r.charCodeAt(w)===94?(E=u,w++):(E=t,he===0&&_e(st)),E!==t&&(Re=g,E=Fi()),g=E,g===t&&(g=w,r.substr(w,2)===y?(E=y,w+=2):(E=t,he===0&&_e(R)),E!==t&&(Re=g,E=Fi()),g=E),g}function aa(){var g,E;return g=w,r.substr(w,2)===x?(E=x,w+=2):(E=t,he===0&&_e(A)),E===t&&(r.charCodeAt(w)===8804?(E=M,w++):(E=t,he===0&&_e(te))),E!==t&&(Re=g,E=S()),g=E,g===t&&(g=w,r.substr(w,2)===T?(E=T,w+=2):(E=t,he===0&&_e(de)),E===t&&(r.charCodeAt(w)===8805?(E=b,w++):(E=t,he===0&&_e(pe))),E!==t&&(Re=g,E=U()),g=E,g===t&&(g=w,r.charCodeAt(w)===60?(E=O,w++):(E=t,he===0&&_e(xe)),E===t&&(r.charCodeAt(w)===60?(E=O,w++):(E=t,he===0&&_e(xe))),E!==t&&(Re=g,E=G()),g=E,g===t&&(g=w,r.charCodeAt(w)===62?(E=H,w++):(E=t,he===0&&_e(Le)),E===t&&(r.charCodeAt(w)===62?(E=H,w++):(E=t,he===0&&_e(Le))),E!==t&&(Re=g,E=B()),g=E))),g}function vl(){var g,E,Y,K,Q,ne,Ae,we,xn,$t,hi,fi,Ar;return g=w,r.substr(w,4)===W?(E=W,w+=4):(E=t,he===0&&_e(Pe)),E!==t?(Y=Ce(),K=Bi(),K!==t?(Q=Ce(),r.charCodeAt(w)===44?(ne=d,w++):(ne=t,he===0&&_e(ge)),ne!==t?(Ae=Ce(),we=Bi(),we!==t?(xn=Ce(),r.charCodeAt(w)===44?($t=d,w++):($t=t,he===0&&_e(ge)),$t!==t?(hi=Ce(),fi=Bi(),fi!==t?(r.charCodeAt(w)===41?(Ar=m,w++):(Ar=t,he===0&&_e(Se)),Ar!==t?(Re=g,g=Z(K,we,fi)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t)):(w=g,g=t),g}function xl(){var g;return r.charCodeAt(w)===120?(g=D,w++):(g=t,he===0&&_e(De)),g===t&&(r.charCodeAt(w)===121?(g=ie,w++):(g=t,he===0&&_e(be)),g===t&&(r.charCodeAt(w)===122?(g=k,w++):(g=t,he===0&&_e(F)))),g}function Ui(){var g,E;return g=w,oe.test(r.charAt(w))?(E=r.charAt(w),w++):(E=t,he===0&&_e(le)),E!==t&&(Re=g,E=Ie(E)),g=E,g}function _l(){var g,E;return g=w,oe.test(r.charAt(w))?(E=r.charAt(w),w++):(E=t,he===0&&_e(le)),E!==t&&(Re=g,E=Ee(E)),g=E,g}function oa(){var g,E,Y,K,Q,ne;if(g=w,r.substr(w,2)===$?(E=$,w+=2):(E=t,he===0&&_e(J)),E!==t){for(Y=[],K=w,Q=w,he++,r.substr(w,2)===q?(ne=q,w+=2):(ne=t,he===0&&_e(ve)),he--,ne===t?Q=void 0:(w=Q,Q=t),Q!==t?(r.length>w?(ne=r.charAt(w),w++):(ne=t,he===0&&_e(C)),ne!==t?(Q=[Q,ne],K=Q):(w=K,K=t)):(w=K,K=t);K!==t;)Y.push(K),K=w,Q=w,he++,r.substr(w,2)===q?(ne=q,w+=2):(ne=t,he===0&&_e(ve)),he--,ne===t?Q=void 0:(w=Q,Q=t),Q!==t?(r.length>w?(ne=r.charAt(w),w++):(ne=t,he===0&&_e(C)),ne!==t?(Q=[Q,ne],K=Q):(w=K,K=t)):(w=K,K=t);r.substr(w,2)===q?(K=q,w+=2):(K=t,he===0&&_e(ve)),K!==t?(E=[E,Y,K],g=E):(w=g,g=t)}else w=g,g=t;return g}function yl(){var g,E;return g=w,r.substr(w,2)===X?(E=X,w+=2):(E=t,he===0&&_e(re)),E===t&&(r.charCodeAt(w)===960?(E=V,w++):(E=t,he===0&&_e(Ue))),E!==t&&(Re=g,E=Te()),g=E,g}function bl(){var g,E,Y,K,Q;if(g=w,E=[],fe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(Fe)),Y!==t)for(;Y!==t;)E.push(Y),fe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(Fe));else E=t;if(E===t&&(E=null),r.charCodeAt(w)===46?(Y=ee,w++):(Y=t,he===0&&_e(Ke)),Y!==t){if(K=[],fe.test(r.charAt(w))?(Q=r.charAt(w),w++):(Q=t,he===0&&_e(Fe)),Q!==t)for(;Q!==t;)K.push(Q),fe.test(r.charAt(w))?(Q=r.charAt(w),w++):(Q=t,he===0&&_e(Fe));else K=t;K!==t?(Re=g,g=ze(E,K)):(w=g,g=t)}else w=g,g=t;if(g===t){if(g=w,E=[],fe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(Fe)),Y!==t)for(;Y!==t;)E.push(Y),fe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(Fe));else E=t;E!==t&&(Re=g,E=Xe(E)),g=E}return g}function Bi(){var g,E,Y;if(g=w,E=[],fe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(Fe)),Y!==t)for(;Y!==t;)E.push(Y),fe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(Fe));else E=t;return E!==t&&(Re=g,E=Xe(E)),g=E,g}function Jp(){var g,E,Y;if(g=w,E=[],oe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(le)),Y!==t)for(;Y!==t;)E.push(Y),oe.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(le));else E=t;return E!==t&&(Re=g,E=Be(E)),g=E,g}function la(){var g,E,Y;if(g=w,E=[],se.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(qe)),Y!==t)for(;Y!==t;)E.push(Y),se.test(r.charAt(w))?(Y=r.charAt(w),w++):(Y=t,he===0&&_e(qe));else E=t;return E!==t&&(Re=g,E=$e(E)),g=E,g}function Ce(){var g,E;for(g=[],ye.test(r.charAt(w))?(E=r.charAt(w),w++):(E=t,he===0&&_e(ut)),E===t&&(E=oa());E!==t;)g.push(E),ye.test(r.charAt(w))?(E=r.charAt(w),w++):(E=t,he===0&&_e(ut)),E===t&&(E=oa());return g}function Qp(){var g;return P.test(r.charAt(w))?(g=r.charAt(w),w++):(g=t,he===0&&_e(bt)),g===t&&(g=null),g}if(Pt=s(),Pt!==t&&w===r.length)return Pt;throw Pt!==t&&w<r.length&&_e(ul()),Ks(je,ft<r.length?r.charAt(ft):null,ft<r.length?di(ft,ft+1):di(ft,ft))}var Vs=class{constructor(){this.matched=!1,this.error=null,this.editorIndicator=document.querySelector("#status-indicator")}parse(e){try{let t=qo(e);return this.matched=!0,this.__set_indicator(!0),this.error=null,t}catch(t){return console.error(t),this.matched=!1,this.__set_indicator(!1),this.error=t,null}}__set_indicator(e){let t=e?Ge.EDITOR_CORRECT_INDICATOR_COLOR:Ge.EDITOR_INCORRECT_INDICATOR_COLOR;this.editorIndicator.style.backgroundColor=t}},jo=Vs;var Yo={type:"change"},Ws={type:"start"},$s={type:"end"},Xs=class extends Xt{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=Infinity,this.minZoom=0,this.maxZoom=Infinity,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-Infinity,this.maxAzimuthAngle=Infinity,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:yn.ROTATE,TWO:yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",xe),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yo),n.update(),s=i.NONE},this.update=function(){let C=new I,re=new Ct().setFromUnitVectors(e.up,new I(0,1,0)),Ue=re.clone().invert(),Fe=new I,Ke=new Ct,qe=2*Math.PI;return function(){let bt=n.object.position;C.copy(bt).sub(n.target),C.applyQuaternion(re),a.setFromVector3(C),n.autoRotate&&s===i.NONE&&H(b()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let xt=n.minAzimuthAngle,wt=n.maxAzimuthAngle;return isFinite(xt)&&isFinite(wt)&&(xt<-Math.PI?xt+=qe:xt>Math.PI&&(xt-=qe),wt<-Math.PI?wt+=qe:wt>Math.PI&&(wt-=qe),xt<=wt?a.theta=Math.max(xt,Math.min(wt,a.theta)):a.theta=a.theta>(xt+wt)/2?Math.max(xt,a.theta):Math.min(wt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),C.setFromSpherical(a),C.applyQuaternion(Ue),bt.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),l=1,f||Fe.distanceToSquared(n.object.position)>o||8*(1-Ke.dot(n.object.quaternion))>o?(n.dispatchEvent(Yo),Fe.copy(n.object.position),Ke.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",be),n.domElement.removeEventListener("pointerdown",nt),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",pe),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",st),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",xe)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,o=1e-6,a=new Mr,c=new Mr,l=1,d=new I,f=!1,h=new Ne,m=new Ne,_=new Ne,v=new Ne,L=new Ne,p=new Ne,u=new Ne,y=new Ne,x=new Ne,M=[],T={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function H(C){c.theta-=C}function W(C){c.phi-=C}let D=function(){let C=new I;return function(Ue,Fe){C.setFromMatrixColumn(Fe,0),C.multiplyScalar(-Ue),d.add(C)}}(),ie=function(){let C=new I;return function(Ue,Fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(Fe,1):(C.setFromMatrixColumn(Fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(Ue),d.add(C)}}(),k=function(){let C=new I;return function(Ue,Fe){let Ke=n.domElement;if(n.object.isPerspectiveCamera){let qe=n.object.position;C.copy(qe).sub(n.target);let ut=C.length();ut*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Ue*ut/Ke.clientHeight,n.object.matrix),ie(2*Fe*ut/Ke.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Ue*(n.object.right-n.object.left)/n.object.zoom/Ke.clientWidth,n.object.matrix),ie(Fe*(n.object.top-n.object.bottom)/n.object.zoom/Ke.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(C){n.object.isPerspectiveCamera?l/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(C){n.object.isPerspectiveCamera?l*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C){h.set(C.clientX,C.clientY)}function V(C){u.set(C.clientX,C.clientY)}function ee(C){v.set(C.clientX,C.clientY)}function oe(C){m.set(C.clientX,C.clientY),_.subVectors(m,h).multiplyScalar(n.rotateSpeed);let re=n.domElement;H(2*Math.PI*_.x/re.clientHeight),W(2*Math.PI*_.y/re.clientHeight),h.copy(m),n.update()}function fe(C){y.set(C.clientX,C.clientY),x.subVectors(y,u),x.y>0?$(O()):x.y<0&&q(O()),u.copy(y),n.update()}function se(C){L.set(C.clientX,C.clientY),p.subVectors(L,v).multiplyScalar(n.panSpeed),k(p.x,p.y),v.copy(L),n.update()}function ye(C){C.deltaY<0?q(O()):C.deltaY>0&&$(O()),n.update()}function P(C){let re=!1;switch(C.code){case n.keys.UP:k(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),re=!0;break}re&&(C.preventDefault(),n.update())}function z(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{let C=.5*(M[0].pageX+M[1].pageX),re=.5*(M[0].pageY+M[1].pageY);h.set(C,re)}}function j(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{let C=.5*(M[0].pageX+M[1].pageX),re=.5*(M[0].pageY+M[1].pageY);v.set(C,re)}}function N(){let C=M[0].pageX-M[1].pageX,re=M[0].pageY-M[1].pageY,Ue=Math.sqrt(C*C+re*re);u.set(0,Ue)}function me(){n.enableZoom&&N(),n.enablePan&&j()}function ge(){n.enableZoom&&N(),n.enableRotate&&z()}function ae(C){if(M.length==1)m.set(C.pageX,C.pageY);else{let Ue=ve(C),Fe=.5*(C.pageX+Ue.x),Ke=.5*(C.pageY+Ue.y);m.set(Fe,Ke)}_.subVectors(m,h).multiplyScalar(n.rotateSpeed);let re=n.domElement;H(2*Math.PI*_.x/re.clientHeight),W(2*Math.PI*_.y/re.clientHeight),h.copy(m)}function ce(C){if(M.length===1)L.set(C.pageX,C.pageY);else{let re=ve(C),Ue=.5*(C.pageX+re.x),Fe=.5*(C.pageY+re.y);L.set(Ue,Fe)}p.subVectors(L,v).multiplyScalar(n.panSpeed),k(p.x,p.y),v.copy(L)}function Se(C){let re=ve(C),Ue=C.pageX-re.x,Fe=C.pageY-re.y,Ke=Math.sqrt(Ue*Ue+Fe*Fe);y.set(0,Ke),x.set(0,Math.pow(y.y/u.y,n.zoomSpeed)),$(x.y),u.copy(y)}function Me(C){n.enableZoom&&Se(C),n.enablePan&&ce(C)}function ke(C){n.enableZoom&&Se(C),n.enableRotate&&ae(C)}function nt(C){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ct),n.domElement.addEventListener("pointerup",st)),F(C),C.pointerType==="touch"?Le(C):A(C))}function ct(C){n.enabled!==!1&&(C.pointerType==="touch"?Pe(C):te(C))}function st(C){n.enabled!==!1&&(C.pointerType==="touch"?De():de(),le(C),M.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",st)))}function R(C){le(C)}function A(C){let re;switch(C.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case _n.DOLLY:if(n.enableZoom===!1)return;V(C),s=i.DOLLY;break;case _n.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;ee(C),s=i.PAN}else{if(n.enableRotate===!1)return;X(C),s=i.ROTATE}break;case _n.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;X(C),s=i.ROTATE}else{if(n.enablePan===!1)return;ee(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ws)}function te(C){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;oe(C);break;case i.DOLLY:if(n.enableZoom===!1)return;fe(C);break;case i.PAN:if(n.enablePan===!1)return;se(C);break}}function de(C){n.dispatchEvent($s),s=i.NONE}function pe(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE&&s!==i.ROTATE||(C.preventDefault(),n.dispatchEvent(Ws),ye(C),n.dispatchEvent($s))}function xe(C){n.enabled===!1||n.enablePan===!1||P(C)}function Le(C){switch(J(C),M.length){case 1:switch(n.touches.ONE){case yn.ROTATE:if(n.enableRotate===!1)return;z(),s=i.TOUCH_ROTATE;break;case yn.PAN:if(n.enablePan===!1)return;j(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case yn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;me(),s=i.TOUCH_DOLLY_PAN;break;case yn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ws)}function Pe(C){switch(J(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ae(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(C),n.update();break;default:s=i.NONE}}function De(C){n.dispatchEvent($s),s=i.NONE}function be(C){n.enabled!==!1&&C.preventDefault()}function F(C){M.push(C)}function le(C){delete T[C.pointerId];for(let re=0;re<M.length;re++)if(M[re].pointerId==C.pointerId){M.splice(re,1);return}}function J(C){let re=T[C.pointerId];re===void 0&&(re=new Ne,T[C.pointerId]=re),re.set(C.pageX,C.pageY)}function ve(C){let re=C.pointerId===M[0].pointerId?M[1]:M[0];return T[re.pointerId]}n.domElement.addEventListener("contextmenu",be),n.domElement.addEventListener("pointerdown",nt),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}};var qs=class{constructor(e={}){this.container=document.querySelector(e.dom_element||Ge.VIEWER_DOM_ELEMENT),this.width=this.container.clientWidth,this.height=this.container.clientHeight,console.log(this.height),this.line_color=e.line_color||Ge.VIEWER_LINE_COLOR,this.bg_color=e.bg_color||Ge.VIEWER_BG_COLOR,this.camera_init_pos=e.camera_pos||Ge.VIEWER_CAMERA_POSITION,this.debug=e.debug||!1,this.scene=new si,this.scene.background=new We(this.bg_color),this.camera=new gt(75,this.width/this.height,.1,1e3),this.camera.position.set(...this.camera_init_pos),this.renderer=new Ze({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.controls=new Xs(this.camera,this.renderer.domElement),this.controls.saveState(),this.center_button=document.getElementById(Ge.VIEWER_CENTER_BUTTON_ID),this.center_button.addEventListener("click",t=>{this.center_cam()}),this.save_button=document.getElementById(Ge.VIEWER_DOWNLOAD_BUTTON_ID),this.save_button.addEventListener("click",t=>{this.download_img()}),this.container.appendChild(this.renderer.domElement)}add(e){if(this.__debugPrint("In Viewer.instance.add(): starting to add elements to scene"),Array.isArray(e)){this.__debugPrint("In Viewer.instance.add(): array detected, beginning add loop");for(let t of e)Array.isArray(t)?(this.add(t),this.__debugPrint(`In Viewer.instance.add(): recursively called add() for ${t}`)):(this.scene.add(t),this.__debugPrint(`In Viewer.instance.add(): added ${t} to scene`));return this.__debugPrint("In Viewer.instance.add(): finished adding array of elements"),this.scene}else return this.scene.add(e),this.__debugPrint(`In Viewer.instance.add(): added ${e} to scene`),this.scene}clear(){for(;this.scene.children.length;)this.__debugPrint(`In Viewer.instance.clear(): removing ${this.scene.children[0]} from scene`),this.scene.remove(this.scene.children[0]);return this.__debugPrint("In Viewer.instance.clear(): finished removing children from scene"),this.scene}update(){this.__debugPrint("In Viewer.instance.update(): started updating controls"),this.controls.update(),this.__debugPrint("In Viewer.instance.update(): finished updating controls")}render(){this.__debugPrint("In Viewer.instance.render(): started rendering scene"),this.renderer.render(this.scene,this.camera),this.__debugPrint("In Viewer.instance.render(): finished rendering scene")}set_bg(e){return this.bg_color=e,this.scene.background=new We(this.bg_color),this.scene}center_cam(){this.controls.reset()}download_img(){let e=document.createElement("a"),t=this.renderer.domElement.toDataURL();e.setAttribute("href",t),e.setAttribute("target","_blank"),e.setAttribute("download","morph.png"),e.click(),e.remove()}__debugPrint(e){this.debug&&console.warn(e)}},Zo=qs;var Hp=window;function Jo(r,e,t={}){let n=Object.assign({tab:"	",indentOn:/{$/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:Hp},t),i=n.window,s=i.document,o=[],a=[],c=-1,l=!1,d,f,h=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;r.setAttribute("contentEditable",h?"true":"plaintext-only"),r.setAttribute("spellcheck",n.spellcheck?"true":"false"),r.style.outline="none",r.style.overflowWrap="break-word",r.style.overflowY="auto",r.style.resize="vertical",r.style.whiteSpace="pre-wrap",e(r);let m=ee(()=>{let P=u();e(r,P),y(P)},30),_=!1,v=P=>!q(P)&&!X(P)&&P.key!=="Meta"&&P.key!=="Control"&&P.key!=="Alt"&&!P.key.startsWith("Arrow"),L=ee(P=>{v(P)&&(D(),_=!1)},300),p=(P,z)=>{o.push([P,z]),r.addEventListener(P,z)};p("keydown",P=>{P.defaultPrevented||(f=fe(),n.preserveIdent?T(P):b(P),n.catchTab&&H(P),n.addClosing&&O(P),n.history&&(W(P),v(P)&&!_&&(D(),_=!0)))}),p("keyup",P=>{P.defaultPrevented||P.isComposing||(f!==fe()&&m(),L(P),d&&d(fe()))}),p("focus",P=>{l=!0}),p("blur",P=>{l=!1}),p("paste",P=>{D(),ie(P),D(),d&&d(fe())});function u(){let P=ye(),z={start:0,end:0,dir:void 0};return k(r,j=>{if(j===P.anchorNode&&j===P.focusNode)return z.start+=P.anchorOffset,z.end+=P.focusOffset,z.dir=P.anchorOffset<=P.focusOffset?"->":"<-","stop";if(j===P.anchorNode)if(z.start+=P.anchorOffset,!z.dir)z.dir="->";else return"stop";else if(j===P.focusNode)if(z.end+=P.focusOffset,!z.dir)z.dir="<-";else return"stop";j.nodeType===Node.TEXT_NODE&&(z.dir!="->"&&(z.start+=j.nodeValue.length),z.dir!="<-"&&(z.end+=j.nodeValue.length))}),z}function y(P){let z=ye(),j,N=0,me,ge=0;if(P.dir||(P.dir="->"),P.start<0&&(P.start=0),P.end<0&&(P.end=0),P.dir=="<-"){let{start:ce,end:Se}=P;P.start=Se,P.end=ce}let ae=0;k(r,ce=>{if(ce.nodeType!==Node.TEXT_NODE)return;let Se=(ce.nodeValue||"").length;if(ae+Se>=P.start&&(j||(j=ce,N=P.start-ae),ae+Se>=P.end))return me=ce,ge=P.end-ae,"stop";ae+=Se}),j||(j=r),me||(me=r),P.dir=="<-"&&([j,N,me,ge]=[me,ge,j,N]),z.setBaseAndExtent(j,N,me,ge)}function x(){let z=ye().getRangeAt(0),j=s.createRange();return j.selectNodeContents(r),j.setEnd(z.startContainer,z.startOffset),j.toString()}function M(){let z=ye().getRangeAt(0),j=s.createRange();return j.selectNodeContents(r),j.setStart(z.endContainer,z.endOffset),j.toString()}function T(P){if(P.key==="Enter"){let z=x(),j=M(),[N]=oe(z),me=N;if(n.indentOn.test(z)&&(me+=n.tab),me.length>0?(se(P),P.stopPropagation(),V(`
`+me)):b(P),me!==N&&j[0]==="}"){let ge=u();V(`
`+N),y(ge)}}}function b(P){if(h&&P.key==="Enter")if(se(P),P.stopPropagation(),M()==""){V(`
 `);let z=u();z.start=--z.end,y(z)}else V(`
`)}function O(P){let z=`([{'"`,j=`)]}'"`,N=M(),me=x(),ge=me.substr(me.length-1)==="\\",ae=N.substr(0,1);if(j.includes(P.key)&&!ge&&ae===P.key){let ce=u();se(P),ce.start=++ce.end,y(ce)}else if(z.includes(P.key)&&!ge&&(`"'`.includes(P.key)||[""," ",`
`].includes(ae))){se(P);let ce=u(),Se=ce.start==ce.end?"":ye().toString(),Me=P.key+Se+j[z.indexOf(P.key)];V(Me),ce.start++,ce.end++,y(ce)}}function H(P){if(P.key==="Tab")if(se(P),P.shiftKey){let z=x(),[j,N]=oe(z);if(j.length>0){let me=u(),ge=Math.min(n.tab.length,j.length);y({start:N,end:N+ge}),s.execCommand("delete"),me.start-=ge,me.end-=ge,y(me)}}else V(n.tab)}function W(P){if(q(P)){se(P),c--;let z=a[c];z&&(r.innerHTML=z.html,y(z.pos)),c<0&&(c=0)}if(X(P)){se(P),c++;let z=a[c];z&&(r.innerHTML=z.html,y(z.pos)),c>=a.length&&c--}}function D(){if(!l)return;let P=r.innerHTML,z=u(),j=a[c];if(j&&j.html===P&&j.pos.start===z.start&&j.pos.end===z.end)return;c++,a[c]={html:P,pos:z},a.splice(c+1);let N=300;c>N&&(c=N,a.splice(0,1))}function ie(P){se(P);let z=(P.originalEvent||P).clipboardData.getData("text/plain").replace(/\r/g,""),j=u();V(z),e(r),y({start:j.start+z.length,end:j.start+z.length})}function k(P,z){let j=[];P.firstChild&&j.push(P.firstChild);let N=j.pop();for(;N&&z(N)!=="stop";)N.nextSibling&&j.push(N.nextSibling),N.firstChild&&j.push(N.firstChild),N=j.pop()}function $(P){return P.metaKey||P.ctrlKey}function q(P){return $(P)&&!P.shiftKey&&P.key==="z"}function X(P){return $(P)&&P.shiftKey&&P.key==="z"}function V(P){P=P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),s.execCommand("insertHTML",!1,P)}function ee(P,z){let j=0;return(...N)=>{clearTimeout(j),j=i.setTimeout(()=>P(...N),z)}}function oe(P){let z=P.length-1;for(;z>=0&&P[z]!==`
`;)z--;z++;let j=z;for(;j<P.length&&/[ \t]/.test(P[j]);)j++;return[P.substring(z,j)||"",z,j]}function fe(){return r.textContent||""}function se(P){P.preventDefault()}function ye(){var P;return((P=r.parentNode)===null||P===void 0?void 0:P.nodeType)==Node.DOCUMENT_FRAGMENT_NODE?r.parentNode.getSelection():i.getSelection()}return{updateOptions(P){P=Object.assign(Object.assign({},P),P)},updateCode(P){r.textContent=P,e(r)},onUpdate(P){d=P},toString:fe,save:u,restore:y,recordHistory:D,destroy(){for(let[P,z]of o)r.removeEventListener(P,z)}}}var Qo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Vp(r,e,t){return t={path:e,exports:{},require:function(n,i){return kp(n,i==null?t.path:i)}},r(t,t.exports),t.exports}function kp(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Wp=Vp(function(r){var e=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};var t=function(n){var i=/\blang(?:uage)?-([\w-]+)\b/i,s=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function u(y){return y instanceof c?new c(y.type,u(y.content),y.alias):Array.isArray(y)?y.map(u):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++s}),u.__id},clone:function u(y,x){x=x||{};var M,T;switch(a.util.type(y)){case"Object":if(T=a.util.objId(y),x[T])return x[T];M={},x[T]=M;for(var b in y)y.hasOwnProperty(b)&&(M[b]=u(y[b],x));return M;case"Array":return T=a.util.objId(y),x[T]?x[T]:(M=[],x[T]=M,y.forEach(function(O,H){M[H]=u(O,x)}),M);default:return y}},getLanguage:function(u){for(;u&&!i.test(u.className);)u=u.parentElement;return u?(u.className.match(i)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(M){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(u){var y=document.getElementsByTagName("script");for(var x in y)if(y[x].src==u)return y[x]}return null}},isActive:function(u,y,x){for(var M="no-"+y;u;){var T=u.classList;if(T.contains(y))return!0;if(T.contains(M))return!1;u=u.parentElement}return!!x}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(u,y){var x=a.util.clone(a.languages[u]);for(var M in y)x[M]=y[M];return x},insertBefore:function(u,y,x,M){M=M||a.languages;var T=M[u],b={};for(var O in T)if(T.hasOwnProperty(O)){if(O==y)for(var H in x)x.hasOwnProperty(H)&&(b[H]=x[H]);x.hasOwnProperty(O)||(b[O]=T[O])}var W=M[u];return M[u]=b,a.languages.DFS(a.languages,function(D,ie){ie===W&&D!=u&&(this[D]=b)}),b},DFS:function u(y,x,M,T){T=T||{};var b=a.util.objId;for(var O in y)if(y.hasOwnProperty(O)){x.call(y,O,y[O],M||O);var H=y[O],W=a.util.type(H);W==="Object"&&!T[b(H)]?(T[b(H)]=!0,u(H,x,null,T)):W==="Array"&&!T[b(H)]&&(T[b(H)]=!0,u(H,x,O,T))}}},plugins:{},highlightAll:function(u,y){a.highlightAllUnder(document,u,y)},highlightAllUnder:function(u,y,x){var M={callback:x,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),a.hooks.run("before-all-elements-highlight",M);for(var T=0,b;b=M.elements[T++];)a.highlightElement(b,y===!0,M.callback)},highlightElement:function(u,y,x){var M=a.util.getLanguage(u),T=a.languages[M];u.className=u.className.replace(i,"").replace(/\s+/g," ")+" language-"+M;var b=u.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&(b.className=b.className.replace(i,"").replace(/\s+/g," ")+" language-"+M);var O=u.textContent,H={element:u,language:M,grammar:T,code:O};function W(ie){H.highlightedCode=ie,a.hooks.run("before-insert",H),H.element.innerHTML=H.highlightedCode,a.hooks.run("after-highlight",H),a.hooks.run("complete",H),x&&x.call(H.element)}if(a.hooks.run("before-sanity-check",H),b=H.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!H.code){a.hooks.run("complete",H),x&&x.call(H.element);return}if(a.hooks.run("before-highlight",H),!H.grammar){W(a.util.encode(H.code));return}if(y&&n.Worker){var D=new Worker(a.filename);D.onmessage=function(ie){W(ie.data)},D.postMessage(JSON.stringify({language:H.language,code:H.code,immediateClose:!0}))}else W(a.highlight(H.code,H.grammar,H.language))},highlight:function(u,y,x){var M={code:u,grammar:y,language:x};return a.hooks.run("before-tokenize",M),M.tokens=a.tokenize(M.code,M.grammar),a.hooks.run("after-tokenize",M),c.stringify(a.util.encode(M.tokens),M.language)},tokenize:function(u,y){var x=y.rest;if(x){for(var M in x)y[M]=x[M];delete y.rest}var T=new f;return h(T,T.head,u),d(u,T,y,T.head,0),_(T)},hooks:{all:{},add:function(u,y){var x=a.hooks.all;x[u]=x[u]||[],x[u].push(y)},run:function(u,y){var x=a.hooks.all[u];if(!(!x||!x.length))for(var M=0,T;T=x[M++];)T(y)}},Token:c};n.Prism=a;function c(u,y,x,M){this.type=u,this.content=y,this.alias=x,this.length=(M||"").length|0}c.stringify=function u(y,x){if(typeof y=="string")return y;if(Array.isArray(y)){var M="";return y.forEach(function(W){M+=u(W,x)}),M}var T={type:y.type,content:u(y.content,x),tag:"span",classes:["token",y.type],attributes:{},language:x},b=y.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(T.classes,b):T.classes.push(b)),a.hooks.run("wrap",T);var O="";for(var H in T.attributes)O+=" "+H+'="'+(T.attributes[H]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+O+">"+T.content+"</"+T.tag+">"};function l(u,y,x,M){u.lastIndex=y;var T=u.exec(x);if(T&&M&&T[1]){var b=T[1].length;T.index+=b,T[0]=T[0].slice(b)}return T}function d(u,y,x,M,T,b){for(var O in x)if(!(!x.hasOwnProperty(O)||!x[O])){var H=x[O];H=Array.isArray(H)?H:[H];for(var W=0;W<H.length;++W){if(b&&b.cause==O+","+W)return;var D=H[W],ie=D.inside,k=!!D.lookbehind,$=!!D.greedy,q=D.alias;if($&&!D.pattern.global){var X=D.pattern.toString().match(/[imsuy]*$/)[0];D.pattern=RegExp(D.pattern.source,X+"g")}for(var V=D.pattern||D,ee=M.next,oe=T;ee!==y.tail&&!(b&&oe>=b.reach);oe+=ee.value.length,ee=ee.next){var fe=ee.value;if(y.length>u.length)return;if(!(fe instanceof c)){var se=1,ye;if($){if(ye=l(V,oe,u,k),!ye)break;var N=ye.index,P=ye.index+ye[0].length,z=oe;for(z+=ee.value.length;N>=z;)ee=ee.next,z+=ee.value.length;if(z-=ee.value.length,oe=z,ee.value instanceof c)continue;for(var j=ee;j!==y.tail&&(z<P||typeof j.value=="string");j=j.next)se++,z+=j.value.length;se--,fe=u.slice(oe,z),ye.index-=oe}else if(ye=l(V,0,fe,k),!ye)continue;var N=ye.index,me=ye[0],ge=fe.slice(0,N),ae=fe.slice(N+me.length),ce=oe+fe.length;b&&ce>b.reach&&(b.reach=ce);var Se=ee.prev;ge&&(Se=h(y,Se,ge),oe+=ge.length),m(y,Se,se);var Me=new c(O,ie?a.tokenize(me,ie):me,q,me);if(ee=h(y,Se,Me),ae&&h(y,ee,ae),se>1){var ke={cause:O+","+W,reach:ce};d(u,y,x,ee.prev,oe,ke),b&&ke.reach>b.reach&&(b.reach=ke.reach)}}}}}}function f(){var u={value:null,prev:null,next:null},y={value:null,prev:u,next:null};u.next=y,this.head=u,this.tail=y,this.length=0}function h(u,y,x){var M=y.next,T={value:x,prev:y,next:M};return y.next=T,M.prev=T,u.length++,T}function m(u,y,x){for(var M=y.next,T=0;T<x&&M!==u.tail;T++)M=M.next;y.next=M,M.prev=y,u.length-=T}function _(u){for(var y=[],x=u.head.next;x!==u.tail;)y.push(x.value),x=x.next;return y}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(u){var y=JSON.parse(u.data),x=y.language,M=y.code,T=y.immediateClose;n.postMessage(a.highlight(M,a.languages[x],x)),T&&n.close()},!1)),a;var v=a.util.currentScript();v&&(a.filename=v.src,v.hasAttribute("data-manual")&&(a.manual=!0));function L(){a.manual||a.highlightAll()}if(!a.manual){var p=document.readyState;p==="loading"||p==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return a}(e);r.exports&&(r.exports=t),typeof Qo!="undefined"&&(Qo.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var c={};c[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading???",i=function(v,L){return"??? Error "+v+" while fetching file: "+L},s="??? Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",l="loaded",d="failed",f="pre[data-src]:not(["+a+'="'+l+'"]):not(['+a+'="'+c+'"])',h=/\blang(?:uage)?-([\w-]+)\b/i;function m(v,L){var p=v.className;p=p.replace(h," ")+" language-"+L,v.className=p.replace(/\s+/g," ").trim()}t.hooks.add("before-highlightall",function(v){v.selector+=", "+f}),t.hooks.add("before-sanity-check",function(v){var L=v.element;if(L.matches(f)){v.code="",L.setAttribute(a,c);var p=L.appendChild(document.createElement("CODE"));p.textContent=n;var u=L.getAttribute("data-src"),y=v.language;if(y==="none"){var x=(/\.(\w+)$/.exec(u)||[,"none"])[1];y=o[x]||x}m(p,y),m(L,y);var M=t.plugins.autoloader;M&&M.loadLanguages(y);var T=new XMLHttpRequest;T.open("GET",u,!0),T.onreadystatechange=function(){T.readyState==4&&(T.status<400&&T.responseText?(L.setAttribute(a,l),p.textContent=T.responseText,t.highlightElement(p)):(L.setAttribute(a,d),T.status>=400?p.textContent=i(T.status,T.statusText):p.textContent=s))},T.send(null)}}),t.plugins.fileHighlight={highlight:function(L){for(var p=(L||document).querySelectorAll(f),u=0,y;y=p[u++];)t.highlightElement(y)}};var _=!1;t.fileHighlight=function(){_||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),_=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()}),Ko=Wp;var el=function(r){return r.languages.morphing={comment:/\/\*[\s\S]*?\*\//,option:/#.*\n/,axis:/[xyz]/,range:{pattern:/\{.*\}/,inside:{identifier:/([a-z])(?=.*\1.*})/}},function:/([a-zA-Z]+)(?=\(.*\))/},r}(Ko);var js=class{constructor(e={}){this.dom_element=e.dom_element||Ge.EDITOR_DOM_ELEMENT,this.font_family=e.font_family||Ge.EDITOR_FONT_FAMILY,this.font_size=e.font_size||Ge.EDITOR_FONT_SIZE,this.padding=e.padding||Ge.EDITOR_PADDING,this.entry=document.getElementById(this.dom_element),this.editor=Jo(this.entry,t=>{el.highlightElement(t)})}on_change(e){this.editor.onUpdate(e)}get_contents(){return this.editor.toString()}set_contents(e){return this.editor.updateCode(e)}},tl=js;var Ys=class{constructor(e={}){this.sample_rate=e.sample_rate||Ge.SAMPLE_RATE,this.line_color=e.color||Ge.VIEWER_LINE_COLOR,this.line_material=new Ln({color:e.color||Ge.VIEWER_LINE_COLOR}),this.curves=[],this.lines=[]}make_curves(e){return Array.isArray(e[0])?e.map(t=>this.make_curves(t)).flat():[new Li(e)]}make_lines(e,t={}){let n=t.sample_rate||this.sample_rate;return this.line_color=t.color||Ge.VIEWER_LINE_COLOR,this.line_material=new Ln({color:this.line_color}),(n<2||!n)&&(n=this.sample_rate),this.make_curves(e).map(i=>{let s=i.getPoints(n),o=new tt().setFromPoints(s);return new Ai(o,this.line_material)})}},nl=Ys;var il={Shaping:[{name:"TUTORIAL",code:`/* This is the editor status --> */

/* You can change settings like so: */ 

# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

/* Declare ranges like so: */ 

{ u, v | 0 <= u <= 2*PI, -1 <= v <= 2 }

/* Declare x, y, and z formulas like so: */ 

x = cos(u)
y = sin(u)
z = v 

/* The order of settings, then ranges, then formulas must be respected! */`},{name:"Circle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u | 0 <= u <= 2*PI }
            
x = cos(u)
y = sin(u)`},{name:"Short Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI/3 }

x = cos(u)
y = sin(u)
z = v`},{name:"Tall Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`},{name:"Twisting Line",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = u`},{name:"Twisting Lines",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = v * cos(u)
y = v * sin(u)
z = u`},{name:"Cone",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = v * cos(u)
y = v * sin(u)
z = v`},{name:"Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`},{name:"Pointy Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = v`}],Cutting:[{name:"3/4 Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`},{name:"1/2 Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`},{name:"Cylinder Segment",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI/2, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`},{name:"3/4 Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`},{name:"1/2 Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`},{name:"Sphere Segment",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`}],Scaling:[{name:"Squished Y Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)/2
z = v`},{name:"Squished X Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)/2
y = sin(u)
z = v`},{name:"Narrow Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)/2
y = sin(u)/2
z = v`},{name:"Squished Y Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = (sin(v) * sin(u))/2
z = cos(v)`},{name:"Narrow Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = (sin(v) * cos(u))/2
y = (sin(v) * sin(u))/2
z = cos(v)`}],Modulating:[{name:"Sine Wave",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u | 0 <= u <= 2*PI }

x = u
y = sin(u)`},{name:"Wave Circle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u | 0 <= u <= 2*PI }

x = cos(u)*4
y = sin(4 * u)`},{name:"Infinity Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(2*u)
z = v`},{name:"Three Wave Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(3*u)
z = v`},{name:"Four Wave Cylinder",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(4*u)
z = v`},{name:"Infinity Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(2*u)
z = cos(v)`},{name:"Three Wave Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(3*u)
z = cos(v)`},{name:"Four Wave Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(4*u)
z = cos(v)`}],Ascending:[{name:"Y Open Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = u + sin(u)
z = v`},{name:"X Open Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + cos(u)
y = sin(u)
z = v`},{name:"Ascending Open Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + cos(u)
y = u + sin(u)
z = v`},{name:"Y Open Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = u + sin(v) * sin(u)
z = cos(v)`},{name:"X Open Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`},{name:"Ascending Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + sin(v) * cos(u)
y = u + sin(v) * sin(u)
z = cos(v)`}],Spiraling:[{name:"Pre-Spiral Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = u * sin(u)
z = v`},{name:"Uneven Spiral Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * cos(u)
y = sin(u)
z = v`},{name:"Spiral Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * cos(u)
y = u * sin(u)
z = v`},{name:"Pre-Spiral Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = u * sin(v) * sin(u)
z = cos(v)`},{name:"Uneven Spiral Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`},{name:"Spiral Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(u)
z = cos(v)`}],Texturing:[{name:"Single Notch Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(2*u) / 2 + cos(u)
y = sin(2*u) / 2 + sin(u)
z = v`},{name:"Double Notch Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(3*u) / 3 + cos(u)
y = sin(3*u) / 3 + sin(u)
z = v`},{name:"Clover Notch Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(4*u) / 4 + cos(u)
y = sin(4*u) / 4 + sin(u)
z = v`},{name:"Single Notch Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(2*u) / 2 + sin(v) * cos(u)
y = sin(2*u) / 2 + sin(v) * sin(u)
z = cos(v)`},{name:"Double Notch Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(3*u) / 3 + sin(v) * cos(u)
y = sin(3*u) / 3 + sin(v) * sin(u)
z = cos(v)`},{name:"Triple Notch Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(4*u) / 4 + sin(v) * cos(u)
y = sin(4*u) / 4 + sin(v) * sin(u)
z = cos(v)`}],Bending:[{name:"Simple Wave",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u
y = sin(v) * sin(u)
`},{name:"Complex Wave",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u
y = sin(u)
`},{name:"Uneven Wave",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u
y = sin(v) + sin(u)
`},{name:"Displaced Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(v) + sin(u)
`},{name:"Merged Circles",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(u)
`},{name:"Rainbow Circles",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(v) + sin(u)
`},{name:"Squiggly Pipe Y",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(v) + sin(u)
z = v
`},{name:"Squiggly Pipe X",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(u)
z = v
`},{name:"Squiggly Pipe",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(v) + sin(u)
z = v
`},{name:"Deformed Sphere Y",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) + cos(u)
y = sin(v) + sin(v) * sin(u)
z = cos(v)
`},{name:"Deformed Sphere X",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)
`},{name:"Deformed Sphere",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + sin(v) * cos(u)
y = sin(v) + sin(v) * sin(u)
z = cos(v)
`}],Pinching:[{name:"Pipe Pinch Subtle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)^3
y = sin(u)^3
z = v
`},{name:"Pipe Pinch Medium",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)^5
y = sin(u)^5
z = v
`},{name:"Pipe Pinch Extreme",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)^7
y = sin(u)^7
z = v
`},{name:"Sphere Pinch Subtle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v)*cos(u)^3
y = sin(v)*sin(u)^3
z = cos(v)
`},{name:"Sphere Pinch Medium",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v)*cos(u)^5
y = sin(v)*sin(u)^5
z = cos(v)
`},{name:"Sphere Pinch Extreme",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v)*cos(u)^7
y = sin(v)*sin(u)^7
z = cos(v)
`}],Flattening:[{name:"Pipe Flatten Subtle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(cos(u))
y = sin(sin(u))
z = v
`},{name:"Pipe Flatten Medium",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(cos(u)))
y = sin(sin(sin(u)))
z = v
`},{name:"Pipe Flatten Heavy",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(cos(u))))
y = sin(sin(sin(sin(u))))
z = v
`},{name:"Sphere Flatten Subtle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(v) * cos(u))
y = sin(sin(v) * sin(u))
z = sin(cos(v))
`},{name:"Sphere Flatten Medium",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(v) * cos(u)))
y = sin(sin(sin(v) * sin(u)))
z = sin(sin(cos(v)))
`},{name:"Sphere Flatten Heavy",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(sin(v) * cos(u))))
y = sin(sin(sin(sin(v) * sin(u))))
z = sin(sin(sin(cos(v))))
`}],"Cutting & Spiraling":[{name:"Spiral Long",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral Mid",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral Short",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(u)
z = cos(v)
`},{name:"Stretch Spiral Long",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)
`},{name:"Stretch Spiral Mid",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)
`},{name:"Stretch Spiral Short",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)
`}],"Modulate & Spiral":[{name:"1 Wave Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(2*u)
z = cos(v)
`},{name:"2 Wave Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(3*u)
z = cos(v)
`},{name:"3 Wave Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(4*u)
z = cos(v)
`},{name:"1 Wave Long Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(2*u)
z = cos(v)
`},{name:"2 Wave Long Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(3*u)
z = cos(v)
`},{name:"3 Wave Long Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(4*u)
z = cos(v)
`}],"Spiral & Ascend":[{name:"1 Wave Spiral Ascend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u + u*sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral Long Ascend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + u * sin(v) * cos(u)
y = u*sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral Even Ascend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + u * sin(v) * cos(u)
y = u + u * sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral Short Ascend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u + sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral VLong Ascend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + u * sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral Cramped Ascend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + u * sin(v) * cos(u)
y = u + sin(v) * sin(u)
z = cos(v)
`}],"Texturing & Spiraling":[{name:"1 Wave Tex. Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(2*u)/2 + sin(v) * cos(u))
y = u * (sin(2*u)/2 + sin(v) * sin(u))
z = cos(v)
`},{name:"2 Wave Tex. Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(3*u)/3 + sin(v) * cos(u))
y = u * (sin(3*u)/3 + sin(v) * sin(u))
z = cos(v)
`},{name:"3 Wave Tex. Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(4*u)/4 + sin(v) * cos(u))
y = u * (sin(4*u)/4 + sin(v) * sin(u))
z = cos(v)
`},{name:"1 Wave Tex. LSpiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(2*u)/2 + sin(v) * cos(u))
y = sin(2*u)/2 + sin(v) * sin(u)
z = cos(v)
`},{name:"2 Wave Tex. LSpiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(3*u)/3 + sin(v) * cos(u))
y = sin(3*u)/3 + sin(v) * sin(u)
z = cos(v)
`},{name:"3 Wave Tex. LSpiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(4*u)/4 + sin(v) * cos(u))
y = sin(4*u)/4 + sin(v) * sin(u)
z = cos(v)
`}],"Spiraling & Bending":[{name:"2D Spiral Bend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(u))
y = u * (sin(v) + sin(u))
`},{name:"2D Long Spiral Bend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(v) + cos(u))
y = u * sin(u)
`},{name:"2D Open Spiral Bend",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(v) + cos(u))
y = u * (sin(v) + sin(u))
`},{name:"Spiral Bend Short",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * (sin(v) + sin(v) * sin(u))
z = cos(v)
`},{name:"Spiral Bend Open",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(v) + sin(v) * cos(u))
y = u * sin(v) * sin(u)
z = cos(v)
`},{name:"Spiral Bend Intersect",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * (cos(v) + sin(v) * cos(u))
y = u * (sin(v) + sin(v) * sin(u))
z = cos(v)
`}],"Bending & Spiraling":[{name:"2D Bent Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u * cos(u)
y = u * sin(u)
`},{name:"2D Complex Bent Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u * cos(u)
y = sin(v) + u * sin(u)
`},{name:"Bent Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) + u * sin(u) * sin(v)
z = cos(v)
`},{name:"Long Bent Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u * sin(v) * cos(u)
y = u * sin(u) * sin(v)
z = cos(v)
`},{name:"Even Bent Spiral",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u * sin(v) * cos(u)
y = sin(v) + u * sin(u) * sin(v)
z = cos(v)
`}],"Pinching & Spiraling":[{name:"Pinch Spiral Subtle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)^3
y = u * sin(v) * sin(u)^3
z = cos(v)
`},{name:"Pinch Spiral Mid",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)^5
y = u * sin(v) * sin(u)^5
z = cos(v)
`},{name:"Pinch Spiral Heavy",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)^7
y = u * sin(v) * sin(u)^7
z = cos(v)
`}],"Flattening & Spiraling":[{name:"Flat Spiral Subtle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(sin(v) * cos(u))
y = u * sin(sin(v) * sin(u))
z = sin(cos(v))
`},{name:"Flat Spiral Mid",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(sin(sin(v) * cos(u)))
y = u * sin(sin(sin(v) * sin(u)))
z = sin(sin(cos(v)))
`},{name:"Flat Spiral Heavy",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(sin(sin(sin(v) * cos(u))))
y = u * sin(sin(sin(sin(v) * sin(u))))
z = sin(sin(sin(cos(v))))
`}],"Spiraling & Flattening":[{name:"Spiral Flattened Subtle",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(u * sin(v) * cos(u))
y = sin(u * sin(v) * sin(u))
z = sin(cos(v))
`},{name:"Spiral Flattened Mid",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(u * sin(v) * cos(u)))
y = sin(sin(u * sin(v) * sin(u)))
z = sin(sin(cos(v)))
`},{name:"Spiral Flattened Heavy",code:`# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(u * sin(v) * cos(u))))
y = sin(sin(sin(u * sin(v) * sin(u))))
z = sin(sin(sin(cos(v))))
`}]};var rl=document.querySelector(Ge.DROPDOWN_LIST);function $p(r){let e=document.createElement("li");e.classList.add("list-title");let t=document.createElement("h1");return t.innerText=r,e.appendChild(t),e}function Xp(r,e,t=null){let n=document.createElement("li");n.classList.add("list-item");let i=document.createElement("div");if(i.classList.add("thumb"),t!=null){let c=document.createElement("img");c.src="./assets/morph-"+t+".png",i.appendChild(c)}let s=document.createElement("div");s.classList.add("info");let o=document.createElement("h3");o.classList.add("name"),o.innerText=e.name;let a=document.createElement("h5");return a.classList.add("category"),a.innerText=r,s.appendChild(o),s.appendChild(a),n.appendChild(i),n.appendChild(s),n}(function(){let e=document.querySelector(Ge.DROPDOWN_PARENT+" "+Ge.DROPDOWN_BUTTON),t=document.querySelector(Ge.DROPDOWN_PARENT+" "+Ge.DROPDOWN_PANE);t.style.display="none",e.addEventListener("click",n=>{let i=t.style.display;t.style.display=i=="none"?"":"none"})})();function sl(r,e){let t=document.querySelector(Ge.DROPDOWN_PANE),n=0;for(let[i,s]of Object.entries(il)){let o=$p(i);rl.appendChild(o);for(let a of s){let c=Xp(i,a,n++);c.addEventListener("click",l=>{r.set_contents(a.code),t.style.display="none",e()}),rl.appendChild(c)}}}var wr=new tl,Zs=new Zo,qp=new nl,al=new jo;sl(wr,Js);wr.set_contents(Ge.DEFAULT_TEXT);Js();wr.on_change(Js);function Js(r=!1){try{let e=al.parse(wr.get_contents());al.matched&&jp(e,Zs)}catch(e){console.error(e)}}function jp(r,e){let t=Yp(r.options.sampling),n=ol(r.options.color,Ge.VIEWER_LINE_COLOR),i=ol(r.options.bgcolor,Ge.VIEWER_BG_COLOR);e.clear(),e.set_bg(i),e.add(qp.make_lines(r.points,{sample_rate:t,color:n}))}function ol(r,e){return/rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/.test(r)?r:e}function Yp(r){return r>Ge.MAX_SAMPLING||r<1?Ge.MAX_SAMPLING:r}function ll(){requestAnimationFrame(ll),Zs.update(),Zs.render()}ll();
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
//# sourceMappingURL=main.js.map
