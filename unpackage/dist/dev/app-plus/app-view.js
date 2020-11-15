var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'number'])
Z([3,'__e'])
Z([3,'sub'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'sub']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'icon iconfont'])
Z([3,''])
Z([3,'input'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'number']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'goodsInfo']]]]]]]]]]])
Z(z[0])
Z([[6],[[7],[3,'goodsInfo']],[3,'number']])
Z(z[1])
Z([3,'add'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'add']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[4])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'addr'])
Z([3,'__e'])
Z([3,'icon iconfont'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'a']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,''])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'city']]],[1,'']]])
Z([3,'input-box'])
Z([3,'some words...'])
Z([3,'color:#c0c0c0'])
Z([3,'text'])
Z(z[3])
Z([3,''])
Z([3,'icon-btn'])
Z(z[3])
Z([3,''])
Z([3,'place'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'popup spec'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideSpecifications']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'spaceInfo']],[3,'showSpace']]])
Z([3,'mask'])
Z([3,'layer'])
Z([3,'content'])
Z([3,'title'])
Z([3,'选择规格:'])
Z([3,'sp'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'goodsData']],[3,'spec']])
Z(z[10])
Z(z[0])
Z([[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'item']],[[6],[[7],[3,'goodsInfo']],[3,'spec']]],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleSpecification']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsData.spec']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'item']]],[1,'']]])
Z([3,'length'])
Z([3,'text'])
Z([3,'数量'])
Z([3,'__l'])
Z(z[0])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[1,'sub']]]]]]]],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]]])
Z([[7],[3,'goodsInfo']])
Z([3,'1'])
Z([3,'btn'])
Z(z[0])
Z([3,'button'])
Z(z[2])
Z([3,'确定'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'status'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z([3,'swiper-box'])
Z([3,'true'])
Z([3,'__e'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__i0__'])
Z([3,'swiper'])
Z([[6],[[7],[3,'goodsData']],[3,'swiperList']])
Z([3,'id'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'swiper']],[3,'img']]])
Z([3,'indicator'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'currentSwiper']],[1,1]]],[1,'/']],[[6],[[6],[[7],[3,'goodsData']],[3,'swiperList']],[3,'length']]],[1,'']]])
Z([3,'info-box goods-info'])
Z([3,'price'])
Z([a,[[2,'+'],[1,'￥'],[[6],[[7],[3,'goodsInfo']],[3,'price']]]])
Z([3,'title'])
Z([a,[[6],[[7],[3,'goodsInfo']],[3,'title']]])
Z([3,'info-box'])
Z(z[6])
Z([3,'row'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'text'])
Z([3,'选择'])
Z([3,'content'])
Z([3,'选择规格:'])
Z([3,'sp'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'goodsData']],[3,'spec']])
Z(z[30])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'item']],[[6],[[7],[3,'goodsInfo']],[3,'spec']]],[1,'on'],[1,'']]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'item']]],[1,'']]])
Z([3,'arrow'])
Z([3,'icon iconfont'])
Z([3,''])
Z(z[0])
Z(z[6])
Z(z[6])
Z(z[6])
Z(z[6])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[1,'sub']]]]]]]],[[4],[[5],[[5],[1,'^setSelectSpec']],[[4],[[5],[[4],[[5],[1,'setSelectSpec']]]]]]]],[[4],[[5],[[5],[1,'^hideSpec']],[[4],[[5],[[4],[[5],[1,'hideSpec']]]]]]]]])
Z([[7],[3,'goodsData']])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'spaceInfo']])
Z([3,'3'])
Z([3,'info-box comments'])
Z(z[23])
Z(z[25])
Z([a,[[2,'+'],[[2,'+'],[1,'商品评价('],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[3,'length']]],[1,')']]])
Z(z[6])
Z(z[36])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleRatings']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'show'])
Z([3,'查看全部'])
Z(z[37])
Z(z[38])
Z(z[6])
Z([3,'comment'])
Z(z[55])
Z([3,'user-info'])
Z([3,'face'])
Z([[6],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[1,0]],[3,'face']])
Z([3,'username'])
Z([a,[[6],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[1,0]],[3,'username']]])
Z(z[27])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[1,0]],[3,'content']]],[1,'']]])
Z([3,'description'])
Z(z[19])
Z([3,'———— 商品详情 ————'])
Z(z[27])
Z([[6],[[7],[3,'goodsData']],[3,'descriptionStr']])
Z([3,'footer'])
Z([3,'icons'])
Z([3,'box'])
Z(z[37])
Z([3,''])
Z(z[25])
Z([3,'分享'])
Z(z[6])
Z(z[77])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'keep']]]]]]]]])
Z([[7],[3,'isKeep']])
Z(z[37])
Z([3,''])
Z(z[37])
Z([3,''])
Z(z[25])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'?:'],[[7],[3,'isKeep']],[1,'已'],[1,'']]],[1,'收藏']]])
Z([3,'btn'])
Z(z[6])
Z([3,'joinCart'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'joinCart']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'加入购物车'])
Z(z[6])
Z([3,'buy'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'bandleBuy']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'立即购买'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'before'])
Z([3,'back'])
Z([[7],[3,'showback']])
Z([3,'__e'])
Z([3,'icon iconfont'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,''])
Z([3,'middle'])
Z(z[4])
Z([3,'icon-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'showCart']]]]]]]]])
Z(z[5])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'index'])
Z([3,'target'])
Z([[7],[3,'filterByList']])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'target']],[[2,'?:'],[[6],[[7],[3,'target']],[3,'selected']],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleSelect']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'target']],[3,'text']]],[1,'']]])
Z([3,'place'])
Z([3,'goods-list'])
Z([3,'product-list'])
Z([3,'__i0__'])
Z([3,'goods'])
Z([[7],[3,'goodsList']])
Z([3,'goods_id'])
Z(z[5])
Z([3,'product'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleGoods']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'goods_id']],[[6],[[7],[3,'goods']],[3,'goods_id']]]]]]]]]]]]]]]])
Z([3,'widthFix'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'goods']],[3,'img']]])
Z([3,'name'])
Z([a,[[6],[[7],[3,'goods']],[3,'title']]])
Z([3,'info'])
Z([3,'price'])
Z([3,'￥'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'goods']],[3,'price']]],[1,'']]])
Z([3,'slogan'])
Z([a,[[2,'+'],[[6],[[7],[3,'goods']],[3,'slogan']],[1,'']]])
Z([3,'人付款'])
Z([3,'loading-text'])
Z([a,[[7],[3,'loadingText']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'myVideo'])
Z([[4],[[5],[[4],[[5],[[5],[1,'fullscreenchange']],[[4],[[5],[[4],[[5],[[5],[1,'viideoControl']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'showVideo']]])
Z(z[1])
Z([[7],[3,'videoSrc']])
Z([3,'content'])
Z([3,'label'])
Z([3,'index'])
Z(z[7])
Z([[7],[3,'labelList']])
Z(z[8])
Z(z[0])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'labelIndex']]],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'loadRatings']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'labelList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'label']],[3,'name']]],[1,' ']],[[6],[[7],[3,'label']],[3,'number']]],[1,'']]])
Z([3,'list'])
Z(z[8])
Z([3,'item'])
Z([[7],[3,'ratingsList']])
Z(z[8])
Z([3,'ratings'])
Z([3,'left'])
Z([3,'face'])
Z([[6],[[7],[3,'item']],[3,'face']])
Z([3,'right'])
Z([3,'name-date'])
Z([3,'username'])
Z([a,[[6],[[7],[3,'item']],[3,'username']]])
Z([3,'date'])
Z([a,[[6],[[7],[3,'item']],[3,'date']]])
Z([3,'spec'])
Z([a,[[6],[[7],[3,'item']],[3,'spec']]])
Z([3,'medias'])
Z(z[6])
Z([a,[[6],[[7],[3,'item']],[3,'content']]])
Z([3,'img-video'])
Z([3,'__i0__'])
Z([3,'video'])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([3,'path'])
Z(z[0])
Z([3,'box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playVideo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'ratingsList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[[5],[1,'video']],[1,'path']],[[6],[[7],[3,'video']],[3,'path']]],[1,'path']]]]]]]]]]]]]]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'video']],[3,'img']])
Z([3,'playbtn'])
Z([3,'icon iconfont'])
Z([3,''])
Z(z[8])
Z([3,'image'])
Z([[6],[[7],[3,'item']],[3,'img']])
Z(z[8])
Z(z[0])
Z(z[42])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'showBigImg']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'ratingsList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[1,'img']],[1,'']],[[7],[3,'index']]]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'ratingsList']],[1,'']],[[7],[3,'index']]],[1,'img']]]]]]]]]]]]]]])
Z(z[44])
Z([[7],[3,'image']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'buy-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'goodsList']])
Z(z[1])
Z([3,'row'])
Z([3,'goods-info'])
Z([3,'img'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'item']],[3,'img']]])
Z([3,'info'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'spec'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[1,'选择: '],[[6],[[7],[3,'item']],[3,'spec']]],[1,' 数量: ']],[[6],[[7],[3,'item']],[3,'number']]]])
Z([3,'price-number'])
Z([3,'price'])
Z([a,[[2,'+'],[1,'￥'],[[2,'*'],[[6],[[7],[3,'item']],[3,'price']],[[6],[[7],[3,'item']],[3,'number']]]]])
Z([3,'detail'])
Z(z[5])
Z([3,'amount'])
Z([3,'商品金额'])
Z([3,'content'])
Z([a,[[2,'+'],[1,'￥'],[[6],[[7],[3,'$root']],[3,'f0']]]])
Z(z[5])
Z(z[19])
Z([3,'运费'])
Z(z[21])
Z([a,[[2,'+'],[1,'￥'],[[6],[[7],[3,'$root']],[3,'f1']]]])
Z([3,'position'])
Z([3,'footer'])
Z([3,'settlement'])
Z([3,'sum'])
Z([3,'合计:'])
Z([3,'money'])
Z([a,[[2,'+'],[1,'￥'],[[6],[[7],[3,'$root']],[3,'f2']]]])
Z([3,'btn'])
Z([3,'提交订单'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods-list'])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([3,'empty'])
Z([3,'购物车空空如也~'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'goodsList']])
Z(z[4])
Z([3,'row'])
Z([3,'__e'])
Z([3,'menu'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleSingleDelete']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'icon iconfont'])
Z([3,''])
Z(z[9])
Z(z[9])
Z(z[9])
Z([[4],[[5],[[5],[1,'production']],[[2,'?:'],[[2,'=='],[[7],[3,'theIndex']],[[7],[3,'index']]],[1,'open'],[[2,'?:'],[[2,'=='],[[7],[3,'oldIndex']],[[7],[3,'index']]],[1,'close'],[1,'']]]]])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchStart']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchMove']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchEnd']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]]])
Z(z[9])
Z([3,'container'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleCheckbox']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'checkbox'])
Z([[4],[[5],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'on'],[1,'']]]])
Z(z[9])
Z([3,'goods-info'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleGoodsInfo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'img'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'item']],[3,'img']]])
Z([3,'info'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'spec'])
Z([a,[[6],[[7],[3,'item']],[3,'spec']]])
Z([3,'price-number'])
Z([3,'price'])
Z([a,[[2,'+'],[1,'￥'],[[6],[[7],[3,'item']],[3,'price']]]])
Z([3,'__l'])
Z(z[9])
Z(z[9])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'add']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sub']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([3,'footer'])
Z([[2,'+'],[[2,'+'],[1,'bottom:'],[[7],[3,'footerbottom']]],[1,';']])
Z(z[9])
Z(z[20])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleSelectedAll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[22])
Z([[4],[[5],[[2,'?:'],[[7],[3,'isAllSelected']],[1,'on'],[1,'']]]])
Z([3,'text'])
Z([3,'全选'])
Z([[6],[[7],[3,'selectedList']],[3,'length']])
Z(z[9])
Z([3,'delBtn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleMulDelete']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'删除'])
Z([3,'settlement'])
Z([3,'sum'])
Z([3,'合计:'])
Z([3,'money'])
Z([a,[[2,'+'],[1,'￥'],[[7],[3,'sumPrice']]]])
Z(z[9])
Z([3,'btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleConfirm']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([a,[[2,'+'],[1,'结算'],[[6],[[7],[3,'selectedList']],[3,'length']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z([3,'category-list'])
Z([3,'left'])
Z([3,'true'])
Z([3,'index'])
Z([3,'category'])
Z([[7],[3,'categoryList']])
Z(z[7])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'row']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'showCategoryIndex']]],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleCategory']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'text'])
Z([3,'block'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'category']],[3,'title']]],[1,'']]])
Z([3,'right'])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z([3,'id'])
Z(z[8])
Z([[2,'!'],[[2,'=='],[[7],[3,'index']],[[7],[3,'showCategoryIndex']]]])
Z([3,'banner'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'category']],[3,'banner']]])
Z([3,'list'])
Z([3,'i'])
Z([3,'item'])
Z([[6],[[7],[3,'category']],[3,'list']])
Z(z[28])
Z(z[11])
Z([3,'box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleCategoryList']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'categoryList']],[1,'id']],[[6],[[7],[3,'category']],[3,'id']]]]],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'item']],[3,'img']]])
Z(z[14])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z([3,'swiper'])
Z([3,'swiper-box'])
Z([3,'true'])
Z([3,'__e'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__i0__'])
Z(z[4])
Z([[7],[3,'swiperList']])
Z([3,'id'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'swiper']],[3,'img']]])
Z([3,'indicator'])
Z([3,'index'])
Z(z[4])
Z(z[12])
Z(z[16])
Z([[4],[[5],[[5],[1,'dots']],[[2,'?:'],[[2,'>='],[[7],[3,'currentSwiper']],[[7],[3,'index']]],[1,'on'],[1,'']]]])
Z([3,'category-list'])
Z(z[16])
Z([3,'item'])
Z([[7],[3,'categoryList']])
Z(z[16])
Z(z[7])
Z([3,'category'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleCategory']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'categoryList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'img'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'item']],[3,'img']]])
Z([3,'text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[2,'>'],[[6],[[7],[3,'promotion']],[3,'length']],[1,0]])
Z([3,'banner'])
Z([3,'/static/img/home/ad.jpg'])
Z(z[33])
Z([3,'promotion'])
Z(z[31])
Z([3,'优惠活动'])
Z([3,'list'])
Z(z[16])
Z(z[23])
Z([[7],[3,'promotion']])
Z(z[16])
Z(z[7])
Z([3,'column'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handlePromotion']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'promotion']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'top'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'left'])
Z([3,'ad'])
Z([a,[[6],[[7],[3,'item']],[3,'ad']]])
Z([3,'into'])
Z([3,'点击进入'])
Z([3,'right'])
Z(z[30])
Z([3,'goods-list'])
Z([3,'product-list'])
Z([3,'__i1__'])
Z([3,'goods'])
Z([[7],[3,'goodsList']])
Z([3,'goods_id'])
Z(z[7])
Z([3,'product'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleGoods']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'goods_id']],[[6],[[7],[3,'goods']],[3,'goods_id']]]]]]]]]]]]]]]])
Z([3,'widthFix'])
Z([[2,'+'],[1,'https://www.wudongming.top/uni-app-api'],[[6],[[7],[3,'goods']],[3,'img']]])
Z([3,'name'])
Z([a,[[6],[[7],[3,'goods']],[3,'title']]])
Z([3,'info'])
Z([3,'price'])
Z([3,'￥'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'goods']],[3,'price']]],[1,'']]])
Z([3,'slogan'])
Z([a,[[2,'+'],[[6],[[7],[3,'goods']],[3,'slogan']],[1,'']]])
Z([3,'人付款'])
Z([3,'loading-text'])
Z([a,[[7],[3,'loadingText']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'block'])
Z([3,'QR'])
Z([3,'../../../static/img/home/qrcode.jpg'])
Z([3,'title'])
Z([3,'吴东明微信'])
Z([3,'__e'])
Z([3,'btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleSavePhotos']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'showBtn']]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'savePhotos']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user'])
Z([3,'left'])
Z([[6],[[7],[3,'user']],[3,'face']])
Z([3,'right'])
Z([3,'username'])
Z([a,[[6],[[7],[3,'user']],[3,'username']]])
Z([3,'__e'])
Z([3,'erweima'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleQRCode']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'icon iconfont'])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/counter.wxml','./components/pageHeader.wxml','./components/popupSpec.wxml','./components/status.wxml','./pages/goods/goods.wxml','./pages/goods/goodsHeader.wxml','./pages/goods/goodsList.wxml','./pages/goods/ratings.wxml','./pages/order/confirm.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/category/caregort.wxml','./pages/tabBar/home/home.wxml','./pages/tabBar/user/qrcode.wxml','./pages/tabBar/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_mz(z,'view',['catchtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
var fE=_oz(z,5,e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_n('view')
_rz(z,cF,'class',6,e,s,gg)
var hG=_mz(z,'input',['bindinput',7,'data-event-opts',1,'type',2,'value',3],[],e,s,gg)
_(cF,hG)
_(oB,cF)
var oH=_mz(z,'view',['catchtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
var oJ=_oz(z,15,e,s,gg)
_(cI,oJ)
_(oH,cI)
_(oB,oH)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var aL=_n('view')
var tM=_n('view')
_rz(z,tM,'class',0,e,s,gg)
var eN=_n('view')
_rz(z,eN,'class',1,e,s,gg)
var bO=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var oP=_oz(z,5,e,s,gg)
_(bO,oP)
_(eN,bO)
var xQ=_oz(z,6,e,s,gg)
_(eN,xQ)
_(tM,eN)
var oR=_n('view')
_rz(z,oR,'class',7,e,s,gg)
var fS=_mz(z,'input',['placeholder',8,'placeholderStyle',1,'type',2],[],e,s,gg)
_(oR,fS)
var cT=_n('view')
_rz(z,cT,'class',11,e,s,gg)
var hU=_oz(z,12,e,s,gg)
_(cT,hU)
_(oR,cT)
_(tM,oR)
var oV=_n('view')
_rz(z,oV,'class',13,e,s,gg)
var cW=_n('view')
_rz(z,cW,'class',14,e,s,gg)
var oX=_oz(z,15,e,s,gg)
_(cW,oX)
_(oV,cW)
_(tM,oV)
_(aL,tM)
var lY=_n('view')
_rz(z,lY,'class',16,e,s,gg)
_(aL,lY)
_(r,aL)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var t1=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hidden',2],[],e,s,gg)
var e2=_n('view')
_rz(z,e2,'class',4,e,s,gg)
_(t1,e2)
var b3=_n('view')
_rz(z,b3,'class',5,e,s,gg)
var o4=_n('view')
_rz(z,o4,'class',6,e,s,gg)
var x5=_n('view')
_rz(z,x5,'class',7,e,s,gg)
var o6=_oz(z,8,e,s,gg)
_(x5,o6)
_(o4,x5)
var f7=_n('view')
_rz(z,f7,'class',9,e,s,gg)
var c8=_v()
_(f7,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_mz(z,'view',['catchtap',14,'class',1,'data-event-opts',2],[],cAB,o0,gg)
var tEB=_oz(z,17,cAB,o0,gg)
_(aDB,tEB)
_(oBB,aDB)
return oBB
}
c8.wxXCkey=2
_2z(z,12,h9,e,s,gg,c8,'item','index','index')
_(o4,f7)
var eFB=_n('view')
_rz(z,eFB,'class',18,e,s,gg)
var bGB=_n('view')
_rz(z,bGB,'class',19,e,s,gg)
var oHB=_oz(z,20,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
var xIB=_mz(z,'counter',['bind:__l',21,'bind:add',1,'bind:sub',2,'data-event-opts',3,'goodsInfo',4,'vueId',5],[],e,s,gg)
_(eFB,xIB)
_(o4,eFB)
_(b3,o4)
var oJB=_n('view')
_rz(z,oJB,'class',27,e,s,gg)
var fKB=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],e,s,gg)
var cLB=_oz(z,31,e,s,gg)
_(fKB,cLB)
_(oJB,fKB)
_(b3,oJB)
_(t1,b3)
_(r,t1)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oNB=_n('view')
_rz(z,oNB,'class',0,e,s,gg)
_(r,oNB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oPB=_n('view')
var lQB=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(oPB,lQB)
var aRB=_mz(z,'goods-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(oPB,aRB)
var tSB=_n('view')
_rz(z,tSB,'class',4,e,s,gg)
var eTB=_mz(z,'swiper',['autoplay',5,'bindchange',1,'circular',2,'data-event-opts',3],[],e,s,gg)
var bUB=_v()
_(eTB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_n('swiper-item')
var o2B=_n('image')
_rz(z,o2B,'src',13,oXB,xWB,gg)
_(h1B,o2B)
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,11,oVB,e,s,gg,bUB,'swiper','__i0__','id')
_(tSB,eTB)
var c3B=_n('view')
_rz(z,c3B,'class',14,e,s,gg)
var o4B=_oz(z,15,e,s,gg)
_(c3B,o4B)
_(tSB,c3B)
_(oPB,tSB)
var l5B=_n('view')
_rz(z,l5B,'class',16,e,s,gg)
var a6B=_n('view')
_rz(z,a6B,'class',17,e,s,gg)
var t7B=_oz(z,18,e,s,gg)
_(a6B,t7B)
_(l5B,a6B)
var e8B=_n('view')
_rz(z,e8B,'class',19,e,s,gg)
var b9B=_oz(z,20,e,s,gg)
_(e8B,b9B)
_(l5B,e8B)
_(oPB,l5B)
var o0B=_n('view')
_rz(z,o0B,'class',21,e,s,gg)
var xAC=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],e,s,gg)
var oBC=_n('view')
_rz(z,oBC,'class',25,e,s,gg)
var fCC=_oz(z,26,e,s,gg)
_(oBC,fCC)
_(xAC,oBC)
var cDC=_n('view')
_rz(z,cDC,'class',27,e,s,gg)
var hEC=_n('view')
var oFC=_oz(z,28,e,s,gg)
_(hEC,oFC)
_(cDC,hEC)
var cGC=_n('view')
_rz(z,cGC,'class',29,e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_n('view')
_rz(z,oNC,'class',34,tKC,aJC,gg)
var xOC=_oz(z,35,tKC,aJC,gg)
_(oNC,xOC)
_(eLC,oNC)
return eLC
}
oHC.wxXCkey=2
_2z(z,32,lIC,e,s,gg,oHC,'item','index','index')
_(cDC,cGC)
_(xAC,cDC)
var oPC=_n('view')
_rz(z,oPC,'class',36,e,s,gg)
var fQC=_n('view')
_rz(z,fQC,'class',37,e,s,gg)
var cRC=_oz(z,38,e,s,gg)
_(fQC,cRC)
_(oPC,fQC)
_(xAC,oPC)
_(o0B,xAC)
_(oPB,o0B)
var hSC=_mz(z,'popup-spec',['bind:__l',39,'bind:add',1,'bind:hideSpec',2,'bind:setSelectSpec',3,'bind:sub',4,'data-event-opts',5,'goodsData',6,'goodsInfo',7,'spaceInfo',8,'vueId',9],[],e,s,gg)
_(oPB,hSC)
var oTC=_n('view')
_rz(z,oTC,'class',49,e,s,gg)
var cUC=_n('view')
_rz(z,cUC,'class',50,e,s,gg)
var oVC=_n('view')
_rz(z,oVC,'class',51,e,s,gg)
var lWC=_oz(z,52,e,s,gg)
_(oVC,lWC)
_(cUC,oVC)
var aXC=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],e,s,gg)
var tYC=_n('view')
_rz(z,tYC,'class',56,e,s,gg)
var eZC=_oz(z,57,e,s,gg)
_(tYC,eZC)
var b1C=_n('view')
_rz(z,b1C,'class',58,e,s,gg)
var o2C=_oz(z,59,e,s,gg)
_(b1C,o2C)
_(tYC,b1C)
_(aXC,tYC)
_(cUC,aXC)
_(oTC,cUC)
var x3C=_mz(z,'view',['bindtap',60,'class',1,'data-event-opts',2],[],e,s,gg)
var o4C=_n('view')
_rz(z,o4C,'class',63,e,s,gg)
var f5C=_n('view')
_rz(z,f5C,'class',64,e,s,gg)
var c6C=_n('image')
_rz(z,c6C,'src',65,e,s,gg)
_(f5C,c6C)
_(o4C,f5C)
var h7C=_n('view')
_rz(z,h7C,'class',66,e,s,gg)
var o8C=_oz(z,67,e,s,gg)
_(h7C,o8C)
_(o4C,h7C)
_(x3C,o4C)
var c9C=_n('view')
_rz(z,c9C,'class',68,e,s,gg)
var o0C=_oz(z,69,e,s,gg)
_(c9C,o0C)
_(x3C,c9C)
_(oTC,x3C)
_(oPB,oTC)
var lAD=_n('view')
_rz(z,lAD,'class',70,e,s,gg)
var aBD=_n('view')
_rz(z,aBD,'class',71,e,s,gg)
var tCD=_oz(z,72,e,s,gg)
_(aBD,tCD)
_(lAD,aBD)
var eDD=_n('view')
_rz(z,eDD,'class',73,e,s,gg)
var bED=_n('rich-text')
_rz(z,bED,'nodes',74,e,s,gg)
_(eDD,bED)
_(lAD,eDD)
_(oPB,lAD)
var oFD=_n('view')
_rz(z,oFD,'class',75,e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',76,e,s,gg)
var oHD=_n('view')
_rz(z,oHD,'class',77,e,s,gg)
var fID=_n('view')
_rz(z,fID,'class',78,e,s,gg)
var cJD=_oz(z,79,e,s,gg)
_(fID,cJD)
_(oHD,fID)
var hKD=_n('view')
_rz(z,hKD,'class',80,e,s,gg)
var oLD=_oz(z,81,e,s,gg)
_(hKD,oLD)
_(oHD,hKD)
_(xGD,oHD)
var cMD=_mz(z,'view',['bindtap',82,'class',1,'data-event-opts',2],[],e,s,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,85,e,s,gg)){oND.wxVkey=1
var lOD=_n('view')
_rz(z,lOD,'class',86,e,s,gg)
var aPD=_oz(z,87,e,s,gg)
_(lOD,aPD)
_(oND,lOD)
}
else{oND.wxVkey=2
var tQD=_n('view')
_rz(z,tQD,'class',88,e,s,gg)
var eRD=_oz(z,89,e,s,gg)
_(tQD,eRD)
_(oND,tQD)
}
var bSD=_n('view')
_rz(z,bSD,'class',90,e,s,gg)
var oTD=_oz(z,91,e,s,gg)
_(bSD,oTD)
_(cMD,bSD)
oND.wxXCkey=1
_(xGD,cMD)
_(oFD,xGD)
var xUD=_n('view')
_rz(z,xUD,'class',92,e,s,gg)
var oVD=_mz(z,'view',['bindtap',93,'class',1,'data-event-opts',2],[],e,s,gg)
var fWD=_oz(z,96,e,s,gg)
_(oVD,fWD)
_(xUD,oVD)
var cXD=_mz(z,'view',['bindtap',97,'class',1,'data-event-opts',2],[],e,s,gg)
var hYD=_oz(z,100,e,s,gg)
_(cXD,hYD)
_(xUD,cXD)
_(oFD,xUD)
_(oPB,oFD)
_(r,oPB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var c1D=_n('view')
_rz(z,c1D,'class',0,e,s,gg)
var o2D=_n('view')
_rz(z,o2D,'class',1,e,s,gg)
var l3D=_n('view')
_rz(z,l3D,'class',2,e,s,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,3,e,s,gg)){a4D.wxVkey=1
var t5D=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var e6D=_oz(z,7,e,s,gg)
_(t5D,e6D)
_(a4D,t5D)
}
a4D.wxXCkey=1
_(o2D,l3D)
var b7D=_n('view')
_rz(z,b7D,'class',8,e,s,gg)
_(o2D,b7D)
var o8D=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',12,e,s,gg)
var o0D=_oz(z,13,e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
_(o2D,o8D)
_(c1D,o2D)
_(r,c1D)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cBE=_n('view')
var hCE=_n('view')
_rz(z,hCE,'class',0,e,s,gg)
var oDE=_v()
_(hCE,oDE)
var cEE=function(lGE,oFE,aHE,gg){
var eJE=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],lGE,oFE,gg)
var bKE=_oz(z,8,lGE,oFE,gg)
_(eJE,bKE)
_(aHE,eJE)
return aHE
}
oDE.wxXCkey=2
_2z(z,3,cEE,e,s,gg,oDE,'target','index','index')
_(cBE,hCE)
var oLE=_n('view')
_rz(z,oLE,'class',9,e,s,gg)
_(cBE,oLE)
var xME=_n('view')
_rz(z,xME,'class',10,e,s,gg)
var oNE=_n('view')
_rz(z,oNE,'class',11,e,s,gg)
var fOE=_v()
_(oNE,fOE)
var cPE=function(oRE,hQE,cSE,gg){
var lUE=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],oRE,hQE,gg)
var aVE=_mz(z,'image',['mode',19,'src',1],[],oRE,hQE,gg)
_(lUE,aVE)
var tWE=_n('view')
_rz(z,tWE,'class',21,oRE,hQE,gg)
var eXE=_oz(z,22,oRE,hQE,gg)
_(tWE,eXE)
_(lUE,tWE)
var bYE=_n('view')
_rz(z,bYE,'class',23,oRE,hQE,gg)
var oZE=_n('view')
_rz(z,oZE,'class',24,oRE,hQE,gg)
var x1E=_n('text')
var o2E=_oz(z,25,oRE,hQE,gg)
_(x1E,o2E)
_(oZE,x1E)
var f3E=_oz(z,26,oRE,hQE,gg)
_(oZE,f3E)
_(bYE,oZE)
var c4E=_n('view')
_rz(z,c4E,'class',27,oRE,hQE,gg)
var h5E=_oz(z,28,oRE,hQE,gg)
_(c4E,h5E)
var o6E=_n('text')
var c7E=_oz(z,29,oRE,hQE,gg)
_(o6E,c7E)
_(c4E,o6E)
_(bYE,c4E)
_(lUE,bYE)
_(cSE,lUE)
return cSE
}
fOE.wxXCkey=2
_2z(z,14,cPE,e,s,gg,fOE,'goods','__i0__','goods_id')
_(xME,oNE)
var o8E=_n('view')
_rz(z,o8E,'class',30,e,s,gg)
var l9E=_oz(z,31,e,s,gg)
_(o8E,l9E)
_(xME,o8E)
_(cBE,xME)
_(r,cBE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var tAF=_n('view')
var eBF=_mz(z,'video',['bindfullscreenchange',0,'class',1,'data-event-opts',1,'hidden',2,'id',3,'src',4],[],e,s,gg)
_(tAF,eBF)
var bCF=_n('view')
_rz(z,bCF,'class',6,e,s,gg)
var oDF=_n('view')
_rz(z,oDF,'class',7,e,s,gg)
var xEF=_v()
_(oDF,xEF)
var oFF=function(cHF,fGF,hIF,gg){
var cKF=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2],[],cHF,fGF,gg)
var oLF=_oz(z,15,cHF,fGF,gg)
_(cKF,oLF)
_(hIF,cKF)
return hIF
}
xEF.wxXCkey=2
_2z(z,10,oFF,e,s,gg,xEF,'label','index','index')
_(bCF,oDF)
var lMF=_n('view')
_rz(z,lMF,'class',16,e,s,gg)
var aNF=_v()
_(lMF,aNF)
var tOF=function(bQF,ePF,oRF,gg){
var oTF=_n('view')
_rz(z,oTF,'class',21,bQF,ePF,gg)
var fUF=_n('view')
_rz(z,fUF,'class',22,bQF,ePF,gg)
var cVF=_n('view')
_rz(z,cVF,'class',23,bQF,ePF,gg)
var hWF=_n('image')
_rz(z,hWF,'src',24,bQF,ePF,gg)
_(cVF,hWF)
_(fUF,cVF)
_(oTF,fUF)
var oXF=_n('view')
_rz(z,oXF,'class',25,bQF,ePF,gg)
var cYF=_n('view')
_rz(z,cYF,'class',26,bQF,ePF,gg)
var oZF=_n('view')
_rz(z,oZF,'class',27,bQF,ePF,gg)
var l1F=_oz(z,28,bQF,ePF,gg)
_(oZF,l1F)
_(cYF,oZF)
var a2F=_n('view')
_rz(z,a2F,'class',29,bQF,ePF,gg)
var t3F=_oz(z,30,bQF,ePF,gg)
_(a2F,t3F)
_(cYF,a2F)
_(oXF,cYF)
var e4F=_n('view')
_rz(z,e4F,'class',31,bQF,ePF,gg)
var b5F=_oz(z,32,bQF,ePF,gg)
_(e4F,b5F)
_(oXF,e4F)
var o6F=_n('view')
_rz(z,o6F,'class',33,bQF,ePF,gg)
var x7F=_n('view')
_rz(z,x7F,'class',34,bQF,ePF,gg)
var o8F=_oz(z,35,bQF,ePF,gg)
_(x7F,o8F)
_(o6F,x7F)
var f9F=_n('view')
_rz(z,f9F,'class',36,bQF,ePF,gg)
var c0F=_v()
_(f9F,c0F)
var hAG=function(cCG,oBG,oDG,gg){
var aFG=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],cCG,oBG,gg)
var tGG=_mz(z,'image',['mode',44,'src',1],[],cCG,oBG,gg)
_(aFG,tGG)
var eHG=_n('view')
_rz(z,eHG,'class',46,cCG,oBG,gg)
var bIG=_n('view')
_rz(z,bIG,'class',47,cCG,oBG,gg)
var oJG=_oz(z,48,cCG,oBG,gg)
_(bIG,oJG)
_(eHG,bIG)
_(aFG,eHG)
_(oDG,aFG)
return oDG
}
c0F.wxXCkey=2
_2z(z,39,hAG,bQF,ePF,gg,c0F,'video','__i0__','path')
var xKG=_v()
_(f9F,xKG)
var oLG=function(cNG,fMG,hOG,gg){
var cQG=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],cNG,fMG,gg)
var oRG=_mz(z,'image',['mode',56,'src',1],[],cNG,fMG,gg)
_(cQG,oRG)
_(hOG,cQG)
return hOG
}
xKG.wxXCkey=2
_2z(z,51,oLG,bQF,ePF,gg,xKG,'image','index','index')
_(o6F,f9F)
_(oXF,o6F)
_(oTF,oXF)
_(oRF,oTF)
return oRF
}
aNF.wxXCkey=2
_2z(z,19,tOF,e,s,gg,aNF,'item','index','index')
_(bCF,lMF)
_(tAF,bCF)
_(r,tAF)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aTG=_n('view')
var tUG=_n('view')
_rz(z,tUG,'class',0,e,s,gg)
var eVG=_v()
_(tUG,eVG)
var bWG=function(xYG,oXG,oZG,gg){
var c2G=_n('view')
_rz(z,c2G,'class',5,xYG,oXG,gg)
var h3G=_n('view')
_rz(z,h3G,'class',6,xYG,oXG,gg)
var o4G=_n('view')
_rz(z,o4G,'class',7,xYG,oXG,gg)
var c5G=_n('image')
_rz(z,c5G,'src',8,xYG,oXG,gg)
_(o4G,c5G)
_(h3G,o4G)
var o6G=_n('view')
_rz(z,o6G,'class',9,xYG,oXG,gg)
var l7G=_n('view')
_rz(z,l7G,'class',10,xYG,oXG,gg)
var a8G=_oz(z,11,xYG,oXG,gg)
_(l7G,a8G)
_(o6G,l7G)
var t9G=_n('view')
_rz(z,t9G,'class',12,xYG,oXG,gg)
var e0G=_oz(z,13,xYG,oXG,gg)
_(t9G,e0G)
_(o6G,t9G)
var bAH=_n('view')
_rz(z,bAH,'class',14,xYG,oXG,gg)
var oBH=_n('view')
_rz(z,oBH,'class',15,xYG,oXG,gg)
var xCH=_oz(z,16,xYG,oXG,gg)
_(oBH,xCH)
_(bAH,oBH)
_(o6G,bAH)
_(h3G,o6G)
_(c2G,h3G)
_(oZG,c2G)
return oZG
}
eVG.wxXCkey=2
_2z(z,3,bWG,e,s,gg,eVG,'item','index','index')
_(aTG,tUG)
var oDH=_n('view')
_rz(z,oDH,'class',17,e,s,gg)
var fEH=_n('view')
_rz(z,fEH,'class',18,e,s,gg)
var cFH=_n('view')
_rz(z,cFH,'class',19,e,s,gg)
var hGH=_oz(z,20,e,s,gg)
_(cFH,hGH)
_(fEH,cFH)
var oHH=_n('view')
_rz(z,oHH,'class',21,e,s,gg)
var cIH=_oz(z,22,e,s,gg)
_(oHH,cIH)
_(fEH,oHH)
_(oDH,fEH)
var oJH=_n('view')
_rz(z,oJH,'class',23,e,s,gg)
var lKH=_n('view')
_rz(z,lKH,'class',24,e,s,gg)
var aLH=_oz(z,25,e,s,gg)
_(lKH,aLH)
_(oJH,lKH)
var tMH=_n('view')
_rz(z,tMH,'class',26,e,s,gg)
var eNH=_oz(z,27,e,s,gg)
_(tMH,eNH)
_(oJH,tMH)
_(oDH,oJH)
_(aTG,oDH)
var bOH=_n('view')
_rz(z,bOH,'class',28,e,s,gg)
_(aTG,bOH)
var oPH=_n('view')
_rz(z,oPH,'class',29,e,s,gg)
var xQH=_n('view')
_rz(z,xQH,'class',30,e,s,gg)
var oRH=_n('view')
_rz(z,oRH,'class',31,e,s,gg)
var fSH=_oz(z,32,e,s,gg)
_(oRH,fSH)
var cTH=_n('view')
_rz(z,cTH,'class',33,e,s,gg)
var hUH=_oz(z,34,e,s,gg)
_(cTH,hUH)
_(oRH,cTH)
_(xQH,oRH)
var oVH=_n('view')
_rz(z,oVH,'class',35,e,s,gg)
var cWH=_oz(z,36,e,s,gg)
_(oVH,cWH)
_(xQH,oVH)
_(oPH,xQH)
_(aTG,oPH)
_(r,aTG)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lYH=_n('view')
var aZH=_n('view')
_rz(z,aZH,'class',0,e,s,gg)
var t1H=_v()
_(aZH,t1H)
if(_oz(z,1,e,s,gg)){t1H.wxVkey=1
var e2H=_n('view')
_rz(z,e2H,'class',2,e,s,gg)
var b3H=_oz(z,3,e,s,gg)
_(e2H,b3H)
_(t1H,e2H)
}
var o4H=_v()
_(aZH,o4H)
var x5H=function(f7H,o6H,c8H,gg){
var o0H=_n('view')
_rz(z,o0H,'class',8,f7H,o6H,gg)
var cAI=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],f7H,o6H,gg)
var oBI=_n('view')
_rz(z,oBI,'class',12,f7H,o6H,gg)
var lCI=_oz(z,13,f7H,o6H,gg)
_(oBI,lCI)
_(cAI,oBI)
_(o0H,cAI)
var aDI=_mz(z,'view',['bindtouchend',14,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4],[],f7H,o6H,gg)
var tEI=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],f7H,o6H,gg)
var eFI=_n('view')
_rz(z,eFI,'class',22,f7H,o6H,gg)
var bGI=_n('view')
_rz(z,bGI,'class',23,f7H,o6H,gg)
_(eFI,bGI)
_(tEI,eFI)
_(aDI,tEI)
var oHI=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2],[],f7H,o6H,gg)
var xII=_n('view')
_rz(z,xII,'class',27,f7H,o6H,gg)
var oJI=_n('image')
_rz(z,oJI,'src',28,f7H,o6H,gg)
_(xII,oJI)
_(oHI,xII)
var fKI=_n('view')
_rz(z,fKI,'class',29,f7H,o6H,gg)
var cLI=_n('view')
_rz(z,cLI,'class',30,f7H,o6H,gg)
var hMI=_oz(z,31,f7H,o6H,gg)
_(cLI,hMI)
_(fKI,cLI)
var oNI=_n('view')
_rz(z,oNI,'class',32,f7H,o6H,gg)
var cOI=_oz(z,33,f7H,o6H,gg)
_(oNI,cOI)
_(fKI,oNI)
var oPI=_n('view')
_rz(z,oPI,'class',34,f7H,o6H,gg)
var lQI=_n('view')
_rz(z,lQI,'class',35,f7H,o6H,gg)
var aRI=_oz(z,36,f7H,o6H,gg)
_(lQI,aRI)
_(oPI,lQI)
var tSI=_mz(z,'counter',['bind:__l',37,'bind:add',1,'bind:sub',2,'data-event-opts',3,'goodsInfo',4,'vueId',5],[],f7H,o6H,gg)
_(oPI,tSI)
_(fKI,oPI)
_(oHI,fKI)
_(aDI,oHI)
_(o0H,aDI)
_(c8H,o0H)
return c8H
}
o4H.wxXCkey=4
_2z(z,6,x5H,e,s,gg,o4H,'item','index','index')
t1H.wxXCkey=1
_(lYH,aZH)
var eTI=_mz(z,'view',['class',43,'style',1],[],e,s,gg)
var oVI=_mz(z,'view',['bindtap',45,'class',1,'data-event-opts',2],[],e,s,gg)
var xWI=_n('view')
_rz(z,xWI,'class',48,e,s,gg)
var oXI=_n('view')
_rz(z,oXI,'class',49,e,s,gg)
_(xWI,oXI)
_(oVI,xWI)
var fYI=_n('view')
_rz(z,fYI,'class',50,e,s,gg)
var cZI=_oz(z,51,e,s,gg)
_(fYI,cZI)
_(oVI,fYI)
_(eTI,oVI)
var bUI=_v()
_(eTI,bUI)
if(_oz(z,52,e,s,gg)){bUI.wxVkey=1
var h1I=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],e,s,gg)
var o2I=_oz(z,56,e,s,gg)
_(h1I,o2I)
_(bUI,h1I)
}
var c3I=_n('view')
_rz(z,c3I,'class',57,e,s,gg)
var o4I=_n('view')
_rz(z,o4I,'class',58,e,s,gg)
var l5I=_oz(z,59,e,s,gg)
_(o4I,l5I)
var a6I=_n('view')
_rz(z,a6I,'class',60,e,s,gg)
var t7I=_oz(z,61,e,s,gg)
_(a6I,t7I)
_(o4I,a6I)
_(c3I,o4I)
var e8I=_mz(z,'view',['bindtap',62,'class',1,'data-event-opts',2],[],e,s,gg)
var b9I=_oz(z,65,e,s,gg)
_(e8I,b9I)
_(c3I,e8I)
_(eTI,c3I)
bUI.wxXCkey=1
_(lYH,eTI)
_(r,lYH)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var xAJ=_n('view')
var oBJ=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(xAJ,oBJ)
var fCJ=_mz(z,'page-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(xAJ,fCJ)
var cDJ=_n('view')
_rz(z,cDJ,'class',4,e,s,gg)
var hEJ=_mz(z,'scroll-view',['class',5,'scrollY',1],[],e,s,gg)
var oFJ=_v()
_(hEJ,oFJ)
var cGJ=function(lIJ,oHJ,aJJ,gg){
var eLJ=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],lIJ,oHJ,gg)
var bMJ=_n('view')
_rz(z,bMJ,'class',14,lIJ,oHJ,gg)
var oNJ=_n('view')
_rz(z,oNJ,'class',15,lIJ,oHJ,gg)
_(bMJ,oNJ)
var xOJ=_oz(z,16,lIJ,oHJ,gg)
_(bMJ,xOJ)
_(eLJ,bMJ)
_(aJJ,eLJ)
return aJJ
}
oFJ.wxXCkey=2
_2z(z,9,cGJ,e,s,gg,oFJ,'category','index','index')
_(cDJ,hEJ)
var oPJ=_mz(z,'scroll-view',['class',17,'scrollY',1],[],e,s,gg)
var fQJ=_v()
_(oPJ,fQJ)
var cRJ=function(oTJ,hSJ,cUJ,gg){
var lWJ=_mz(z,'view',['class',23,'hidden',1],[],oTJ,hSJ,gg)
var aXJ=_n('view')
_rz(z,aXJ,'class',25,oTJ,hSJ,gg)
var tYJ=_n('image')
_rz(z,tYJ,'src',26,oTJ,hSJ,gg)
_(aXJ,tYJ)
_(lWJ,aXJ)
var eZJ=_n('view')
_rz(z,eZJ,'class',27,oTJ,hSJ,gg)
var b1J=_v()
_(eZJ,b1J)
var o2J=function(o4J,x3J,f5J,gg){
var h7J=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],o4J,x3J,gg)
var o8J=_n('image')
_rz(z,o8J,'src',35,o4J,x3J,gg)
_(h7J,o8J)
var c9J=_n('view')
_rz(z,c9J,'class',36,o4J,x3J,gg)
var o0J=_oz(z,37,o4J,x3J,gg)
_(c9J,o0J)
_(h7J,c9J)
_(f5J,h7J)
return f5J
}
b1J.wxXCkey=2
_2z(z,30,o2J,oTJ,hSJ,gg,b1J,'item','i','i')
_(lWJ,eZJ)
_(cUJ,lWJ)
return cUJ
}
fQJ.wxXCkey=2
_2z(z,21,cRJ,e,s,gg,fQJ,'category','index','id')
_(cDJ,oPJ)
_(xAJ,cDJ)
_(r,xAJ)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var aBK=_n('view')
var bEK=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(aBK,bEK)
var oFK=_mz(z,'page-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(aBK,oFK)
var xGK=_n('view')
_rz(z,xGK,'class',4,e,s,gg)
var oHK=_n('view')
_rz(z,oHK,'class',5,e,s,gg)
var fIK=_mz(z,'swiper',['autoplay',6,'bindchange',1,'circular',2,'data-event-opts',3],[],e,s,gg)
var cJK=_v()
_(fIK,cJK)
var hKK=function(cMK,oLK,oNK,gg){
var aPK=_n('swiper-item')
var tQK=_n('image')
_rz(z,tQK,'src',14,cMK,oLK,gg)
_(aPK,tQK)
_(oNK,aPK)
return oNK
}
cJK.wxXCkey=2
_2z(z,12,hKK,e,s,gg,cJK,'swiper','__i0__','id')
_(oHK,fIK)
var eRK=_n('view')
_rz(z,eRK,'class',15,e,s,gg)
var bSK=_v()
_(eRK,bSK)
var oTK=function(oVK,xUK,fWK,gg){
var hYK=_n('view')
_rz(z,hYK,'class',20,oVK,xUK,gg)
_(fWK,hYK)
return fWK
}
bSK.wxXCkey=2
_2z(z,18,oTK,e,s,gg,bSK,'swiper','index','index')
_(oHK,eRK)
_(xGK,oHK)
_(aBK,xGK)
var oZK=_n('view')
_rz(z,oZK,'class',21,e,s,gg)
var c1K=_v()
_(oZK,c1K)
var o2K=function(a4K,l3K,t5K,gg){
var b7K=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],a4K,l3K,gg)
var o8K=_n('view')
_rz(z,o8K,'class',29,a4K,l3K,gg)
var x9K=_n('image')
_rz(z,x9K,'src',30,a4K,l3K,gg)
_(o8K,x9K)
_(b7K,o8K)
var o0K=_n('view')
_rz(z,o0K,'class',31,a4K,l3K,gg)
var fAL=_oz(z,32,a4K,l3K,gg)
_(o0K,fAL)
_(b7K,o0K)
_(t5K,b7K)
return t5K
}
c1K.wxXCkey=2
_2z(z,24,o2K,e,s,gg,c1K,'item','index','index')
_(aBK,oZK)
var tCK=_v()
_(aBK,tCK)
if(_oz(z,33,e,s,gg)){tCK.wxVkey=1
var cBL=_n('view')
_rz(z,cBL,'class',34,e,s,gg)
var hCL=_n('image')
_rz(z,hCL,'src',35,e,s,gg)
_(cBL,hCL)
_(tCK,cBL)
}
var eDK=_v()
_(aBK,eDK)
if(_oz(z,36,e,s,gg)){eDK.wxVkey=1
var oDL=_n('view')
_rz(z,oDL,'class',37,e,s,gg)
var cEL=_n('view')
_rz(z,cEL,'class',38,e,s,gg)
var oFL=_oz(z,39,e,s,gg)
_(cEL,oFL)
_(oDL,cEL)
var lGL=_n('view')
_rz(z,lGL,'class',40,e,s,gg)
var aHL=_v()
_(lGL,aHL)
var tIL=function(bKL,eJL,oLL,gg){
var oNL=_mz(z,'view',['bindtap',45,'class',1,'data-event-opts',2],[],bKL,eJL,gg)
var fOL=_n('view')
_rz(z,fOL,'class',48,bKL,eJL,gg)
var cPL=_n('view')
_rz(z,cPL,'class',49,bKL,eJL,gg)
var hQL=_oz(z,50,bKL,eJL,gg)
_(cPL,hQL)
_(fOL,cPL)
_(oNL,fOL)
var oRL=_n('view')
_rz(z,oRL,'class',51,bKL,eJL,gg)
var cSL=_n('view')
_rz(z,cSL,'class',52,bKL,eJL,gg)
var oTL=_oz(z,53,bKL,eJL,gg)
_(cSL,oTL)
_(oRL,cSL)
var lUL=_n('view')
_rz(z,lUL,'class',54,bKL,eJL,gg)
var aVL=_oz(z,55,bKL,eJL,gg)
_(lUL,aVL)
_(oRL,lUL)
_(oNL,oRL)
var tWL=_n('view')
_rz(z,tWL,'class',56,bKL,eJL,gg)
var eXL=_n('image')
_rz(z,eXL,'src',57,bKL,eJL,gg)
_(tWL,eXL)
_(oNL,tWL)
_(oLL,oNL)
return oLL
}
aHL.wxXCkey=2
_2z(z,43,tIL,e,s,gg,aHL,'item','index','index')
_(oDL,lGL)
_(eDK,oDL)
}
var bYL=_n('view')
_rz(z,bYL,'class',58,e,s,gg)
var oZL=_n('view')
_rz(z,oZL,'class',59,e,s,gg)
var x1L=_v()
_(oZL,x1L)
var o2L=function(c4L,f3L,h5L,gg){
var c7L=_mz(z,'view',['bindtap',64,'class',1,'data-event-opts',2],[],c4L,f3L,gg)
var o8L=_mz(z,'image',['mode',67,'src',1],[],c4L,f3L,gg)
_(c7L,o8L)
var l9L=_n('view')
_rz(z,l9L,'class',69,c4L,f3L,gg)
var a0L=_oz(z,70,c4L,f3L,gg)
_(l9L,a0L)
_(c7L,l9L)
var tAM=_n('view')
_rz(z,tAM,'class',71,c4L,f3L,gg)
var eBM=_n('view')
_rz(z,eBM,'class',72,c4L,f3L,gg)
var bCM=_n('text')
var oDM=_oz(z,73,c4L,f3L,gg)
_(bCM,oDM)
_(eBM,bCM)
var xEM=_oz(z,74,c4L,f3L,gg)
_(eBM,xEM)
_(tAM,eBM)
var oFM=_n('view')
_rz(z,oFM,'class',75,c4L,f3L,gg)
var fGM=_oz(z,76,c4L,f3L,gg)
_(oFM,fGM)
var cHM=_n('text')
var hIM=_oz(z,77,c4L,f3L,gg)
_(cHM,hIM)
_(oFM,cHM)
_(tAM,oFM)
_(c7L,tAM)
_(h5L,c7L)
return h5L
}
x1L.wxXCkey=2
_2z(z,62,o2L,e,s,gg,x1L,'goods','__i1__','goods_id')
_(bYL,oZL)
var oJM=_n('view')
_rz(z,oJM,'class',78,e,s,gg)
var cKM=_oz(z,79,e,s,gg)
_(oJM,cKM)
_(bYL,oJM)
_(aBK,bYL)
tCK.wxXCkey=1
eDK.wxXCkey=1
_(r,aBK)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lMM=_n('view')
var aNM=_n('view')
_rz(z,aNM,'class',0,e,s,gg)
_(lMM,aNM)
var tOM=_n('view')
_rz(z,tOM,'class',1,e,s,gg)
var ePM=_n('image')
_rz(z,ePM,'src',2,e,s,gg)
_(tOM,ePM)
_(lMM,tOM)
var bQM=_n('view')
_rz(z,bQM,'class',3,e,s,gg)
var oRM=_oz(z,4,e,s,gg)
_(bQM,oRM)
_(lMM,bQM)
var xSM=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
var oTM=_oz(z,9,e,s,gg)
_(xSM,oTM)
_(lMM,xSM)
_(r,lMM)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var cVM=_n('view')
var hWM=_n('view')
_rz(z,hWM,'class',0,e,s,gg)
var oXM=_n('view')
_rz(z,oXM,'class',1,e,s,gg)
var cYM=_n('image')
_rz(z,cYM,'src',2,e,s,gg)
_(oXM,cYM)
_(hWM,oXM)
var oZM=_n('view')
_rz(z,oZM,'class',3,e,s,gg)
var l1M=_n('view')
_rz(z,l1M,'class',4,e,s,gg)
var a2M=_oz(z,5,e,s,gg)
_(l1M,a2M)
_(oZM,l1M)
_(hWM,oZM)
var t3M=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var e4M=_n('view')
_rz(z,e4M,'class',9,e,s,gg)
var b5M=_oz(z,10,e,s,gg)
_(e4M,b5M)
_(t3M,e4M)
_(hWM,t3M)
_(cVM,hWM)
_(r,cVM)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var usingStyleSheetManager = !!window.__styleSheetManager__
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: \x22iconfont\x22; src: url(data:font/ttf;base64,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b25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgAKYXBwcmVjaWF0ZQVlbW9qaQlmYXZvcmZpbGwFZmF2b3IHbG9hZGluZwxsb2NhdGlvbmZpbGwIbG9jYXRpb24Ocm91bmRjaGVja2ZpbGwKcm91bmRjaGVjawZzZWFyY2gIbGlrZWZpbGwEbGlrZQRiYWNrCGNhc2NhZGVzCHNldHRpbmdzA3BpYwVyaWdodApkZWxldGVmaWxsBGNhcnQGZGVsZXRlBGxvY2sGdW5sb2NrBXNoYXJlBm5vdGljZQhtYXJrZmlsbARtYXJrCHJhZGlvYm94DHJhZGlvYm94ZmlsbANhZGQEbW92ZQhteV9saWdodAtzaGFyZV9saWdodBJtb3JlX2FuZHJvaWRfbGlnaHQLdmlkZW9fbGlnaHQNcXJfY29kZV9saWdodANyZW4AAAAAAA\x3d\x3d); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-appreciate:before { content: \x22\\E644\x22; }\n.",[1],"icon-emoji:before { content: \x22\\E64A\x22; }\n.",[1],"icon-favorfill:before { content: \x22\\E64B\x22; }\n.",[1],"icon-favor:before { content: \x22\\E64C\x22; }\n.",[1],"icon-loading:before { content: \x22\\E64F\x22; }\n.",[1],"icon-locationfill:before { content: \x22\\E650\x22; }\n.",[1],"icon-location:before { content: \x22\\E651\x22; }\n.",[1],"icon-roundcheckfill:before { content: \x22\\E656\x22; }\n.",[1],"icon-roundcheck:before { content: \x22\\E657\x22; }\n.",[1],"icon-search:before { content: \x22\\E65C\x22; }\n.",[1],"icon-likefill:before { content: \x22\\E668\x22; }\n.",[1],"icon-like:before { content: \x22\\E669\x22; }\n.",[1],"icon-back:before { content: \x22\\E679\x22; }\n.",[1],"icon-cascades:before { content: \x22\\E67C\x22; }\n.",[1],"icon-settings:before { content: \x22\\E68A\x22; }\n.",[1],"icon-pic:before { content: \x22\\E69B\x22; }\n.",[1],"icon-right:before { content: \x22\\E6A3\x22; }\n.",[1],"icon-deletefill:before { content: \x22\\E6A6\x22; }\n.",[1],"icon-cart:before { content: \x22\\E6AF\x22; }\n.",[1],"icon-delete:before { content: \x22\\E6B4\x22; }\n.",[1],"icon-lock:before { content: \x22\\E6C0\x22; }\n.",[1],"icon-unlock:before { content: \x22\\E6C2\x22; }\n.",[1],"icon-share:before { content: \x22\\E6F3\x22; }\n.",[1],"icon-notice:before { content: \x22\\E70A\x22; }\n.",[1],"icon-markfill:before { content: \x22\\E730\x22; }\n.",[1],"icon-mark:before { content: \x22\\E731\x22; }\n.",[1],"icon-radiobox:before { content: \x22\\E75B\x22; }\n.",[1],"icon-radioboxfill:before { content: \x22\\E763\x22; }\n.",[1],"icon-add:before { content: \x22\\E767\x22; }\n.",[1],"icon-move:before { content: \x22\\E768\x22; }\n.",[1],"icon-my_light:before { content: \x22\\E7D5\x22; }\n.",[1],"icon-share_light:before { content: \x22\\E7E0\x22; }\n.",[1],"icon-more_android_light:before { content: \x22\\E7E3\x22; }\n.",[1],"icon-video_light:before { content: \x22\\E7E9\x22; }\n.",[1],"icon-qr_code_light:before { content: \x22\\E7F8\x22; }\n.",[1],"icon-ren:before { content: \x22\\E605\x22; }\nbody{ position: relative; background-color: #fff; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (usingStyleSheetManager) {
window.__styleSheetManager__.setCss(info.path, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
if (usingStyleSheetManager) {
window.__styleSheetManager__.addPath(info.path);
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:126:1)",{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:126:1)",{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/counter.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"number { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"number .",[1],"input { width: ",[0,80],"; height: ",[0,60],"; margin: 0 ",[0,10],"; background-color: #f3f3f3; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; text-align: center; }\n.",[1],"number .",[1],"input wx-input { width: ",[0,80],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; text-align: center; font-size: ",[0,26],"; }\n.",[1],"number .",[1],"sub, .",[1],"number .",[1],"add { width: ",[0,60],"; height: ",[0,60],"; background-color: #f3f3f3; border-radius: ",[0,5],"; }\n.",[1],"number .",[1],"sub .",[1],"icon, .",[1],"number .",[1],"add .",[1],"icon { font-size: ",[0,30],"; width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/counter.wxss:60:16)",{path:"./components/counter.wxss"});    
__wxAppCode__['components/counter.wxml']=$gwx('./components/counter.wxml');

__wxAppCode__['components/pageHeader.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { width: 92%; padding: 0 4%; height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; z-index: 10; background-color: #fff; top: 0; top: var(--status-bar-height); }\n.",[1],"header .",[1],"addr { width: ",[0,200],"; height: ",[0,60],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; }\n.",[1],"header .",[1],"addr .",[1],"icon { height: ",[0,60],"; margin-right: ",[0,5],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,42],"; color: #ffc50a; }\n.",[1],"header .",[1],"input-box { width: 80%; height: ",[0,60],"; background-color: #f5f5f5; border-radius: ",[0,30],"; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"header .",[1],"input-box .",[1],"icon { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: absolute; top: 0; right: 0; width: ",[0,60],"; height: ",[0,60],"; font-size: ",[0,34],"; color: #c0c0c0; }\n.",[1],"header .",[1],"input-box wx-input { padding-left: ",[0,28],"; height: ",[0,28],"; font-size: ",[0,28],"; }\n.",[1],"header .",[1],"icon-btn { width: ",[0,60],"; height: ",[0,60],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"header .",[1],"icon-btn .",[1],"icon { width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,42],"; }\n.",[1],"place { background-color: #ffffff; height: ",[0,100],"; margin-top: var(--status-bar-height); }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/pageHeader.wxss:107:20)",{path:"./components/pageHeader.wxss"});    
__wxAppCode__['components/pageHeader.wxml']=$gwx('./components/pageHeader.wxml');

__wxAppCode__['components/popupSpec.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"popup { position: fixed; top: 0; width: 100%; height: 100%; z-index: 20; }\n.",[1],"popup .",[1],"mask { position: fixed; top: 0; width: 100%; height: 100%; z-index: 21; background-color: rgba(0, 0, 0, 0.6); }\n.",[1],"popup .",[1],"layer { position: fixed; z-index: 22; bottom: 0; width: 92%; padding: 0 4%; height: 70%; border-radius: ",[0,20]," ",[0,20]," 0 0; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-align-content: space-between; -ms-flex-line-pack: justify; align-content: space-between; }\n.",[1],"popup .",[1],"layer .",[1],"content { width: 100%; padding: ",[0,20]," 0; }\n.",[1],"popup .",[1],"layer .",[1],"btn { width: 100%; height: ",[0,100],"; }\n.",[1],"popup .",[1],"layer .",[1],"btn .",[1],"button { width: 100%; height: ",[0,80],"; border-radius: ",[0,40],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: #f47952; font-size: ",[0,28],"; }\n.",[1],"popup.",[1],"spec .",[1],"title { font-size: ",[0,30],"; margin: ",[0,30]," 0; }\n.",[1],"popup.",[1],"spec .",[1],"sp { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"popup.",[1],"spec .",[1],"sp wx-view { font-size: ",[0,28],"; padding: ",[0,5]," ",[0,20],"; border-radius: ",[0,8],"; margin: 0 ",[0,30]," ",[0,20]," 0; background-color: #f6f6f6; }\n.",[1],"popup.",[1],"spec .",[1],"sp wx-view.",[1],"on { padding: ",[0,3]," ",[0,18],"; border: solid ",[0,1]," #f47925; }\n.",[1],"popup.",[1],"spec .",[1],"length { margin-top: ",[0,30],"; border-top: solid ",[0,1]," #aaa; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding-top: ",[0,20],"; }\n.",[1],"popup.",[1],"spec .",[1],"length .",[1],"text { font-size: ",[0,30],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/popupSpec.wxss:107:17)",{path:"./components/popupSpec.wxss"});    
__wxAppCode__['components/popupSpec.wxml']=$gwx('./components/popupSpec.wxml');

__wxAppCode__['components/status.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"status { width: 100%; position: fixed; z-index: 10; background-color: #fff; top: 0; height: 0; height: var(--status-bar-height); }\n",],undefined,{path:"./components/status.wxss"});    
__wxAppCode__['components/status.wxml']=$gwx('./components/status.wxml');

__wxAppCode__['pages/goods/goods.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"status { opacity: 0; }\n.",[1],"swiper-box { position: relative; width: 100%; height: 100vw; }\n.",[1],"swiper-box wx-swiper { width: 100%; height: 100vw; }\n.",[1],"swiper-box wx-swiper wx-swiper-item wx-image { width: 100%; height: 100vw; }\n.",[1],"swiper-box .",[1],"indicator { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,25],"; height: ",[0,40],"; border-radius: ",[0,40],"; font-size: ",[0,22],"; position: absolute; bottom: ",[0,20],"; right: ",[0,20],"; color: #fff; background-color: rgba(0, 0, 0, 0.2); }\n.",[1],"info-box { width: 92%; padding: ",[0,20]," 4%; background-color: #fff; margin-bottom: ",[0,20],"; }\n.",[1],"goods-info .",[1],"price { font-size: ",[0,46],"; font-weight: 600; color: #f47925; }\n.",[1],"goods-info .",[1],"title { font-size: ",[0,30],"; }\n.",[1],"row { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: 0 0 ",[0,30]," 0; }\n.",[1],"row .",[1],"text { font-size: ",[0,28],"; color: #a2a2a2; margin-right: ",[0,20],"; }\n.",[1],"row .",[1],"content { font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"row .",[1],"content .",[1],"serviceitem { margin-right: ",[0,10],"; }\n.",[1],"row .",[1],"content .",[1],"sp { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"row .",[1],"content .",[1],"sp wx-view { background-color: #f6f6f6; padding: ",[0,10],"; color: #999; margin-right: ",[0,10],"; font-size: ",[0,20],"; border-radius: ",[0,5],"; }\n.",[1],"row .",[1],"content .",[1],"sp wx-view.",[1],"on { border: solid ",[0,1]," #f47952; padding: ",[0,4]," ",[0,8],"; }\n.",[1],"row .",[1],"arrow { position: absolute; right: 4%; }\n.",[1],"row .",[1],"arrow .",[1],"icon { color: #ccc; }\n.",[1],"comments .",[1],"row { width: 100%; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: 0 0 ",[0,30]," 0; }\n.",[1],"comments .",[1],"row .",[1],"text { font-size: ",[0,30],"; }\n.",[1],"comments .",[1],"row .",[1],"arrow { font-size: ",[0,28],"; position: absolute; right: 4%; color: #17e6a1; }\n.",[1],"comments .",[1],"row .",[1],"arrow .",[1],"show { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"comments .",[1],"row .",[1],"arrow .",[1],"show .",[1],"icon { color: #17e6a1; }\n.",[1],"comments .",[1],"comment { width: 100%; }\n.",[1],"comments .",[1],"comment .",[1],"user-info { width: 100%; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"comments .",[1],"comment .",[1],"user-info .",[1],"face { width: ",[0,40],"; height: ",[0,40],"; margin-right: ",[0,8],"; }\n.",[1],"comments .",[1],"comment .",[1],"user-info .",[1],"face wx-image { width: ",[0,40],"; height: ",[0,40],"; border-radius: 100%; }\n.",[1],"comments .",[1],"comment .",[1],"user-info .",[1],"username { font-size: ",[0,24],"; color: #999; }\n.",[1],"comments .",[1],"comment .",[1],"content { margin-top: ",[0,10],"; font-size: ",[0,26],"; }\n.",[1],"description .",[1],"title { width: 100%; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,26],"; color: #999; }\n.",[1],"footer { position: fixed; bottom: ",[0,0],"; width: 92%; padding: 0 4%; height: ",[0,99],"; border-top: solid ",[0,1]," #eee; background-color: #fff; z-index: 2; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"footer .",[1],"icons { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,80],"; margin-left: -4%; }\n.",[1],"footer .",[1],"icons .",[1],"box { width: ",[0,80],"; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"footer .",[1],"icons .",[1],"box .",[1],"icon { font-size: ",[0,40],"; color: #828282; }\n.",[1],"footer .",[1],"icons .",[1],"box .",[1],"text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: 100%; font-size: ",[0,22],"; color: #666; }\n.",[1],"footer .",[1],"btn { height: ",[0,80],"; border-radius: ",[0,40],"; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-right: -2%; }\n.",[1],"footer .",[1],"btn .",[1],"joinCart, .",[1],"footer .",[1],"btn .",[1],"buy { height: ",[0,80],"; padding: 0 ",[0,40],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; }\n.",[1],"footer .",[1],"btn .",[1],"joinCart { background-color: #f0b46c; }\n.",[1],"footer .",[1],"btn .",[1],"buy { background-color: #f06c7a; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/goods/goods.wxss:192:37)",{path:"./pages/goods/goods.wxss"});    
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/goodsHeader.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { width: 100%; height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; top: 0; z-index: 10; top: var(--status-bar-height); }\n.",[1],"header .",[1],"before { width: 92%; padding: 0 4%; height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; top: 0; top: var(--status-bar-height); -webkit-transition: opacity 0.05s linear; -o-transition: opacity 0.05s linear; transition: opacity 0.05s linear; }\n.",[1],"header .",[1],"before .",[1],"back { width: ",[0,125],"; height: ",[0,60],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; }\n.",[1],"header .",[1],"before .",[1],"back .",[1],"icon { margin-left: -10%; width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,42],"; }\n.",[1],"header .",[1],"before .",[1],"middle { width: 100%; }\n.",[1],"header .",[1],"before .",[1],"icon-btn { width: ",[0,60],"; height: ",[0,60],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"header .",[1],"before .",[1],"icon-btn .",[1],"icon { width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,42],"; }\n.",[1],"header .",[1],"before .",[1],"icon-btn .",[1],"textcount { color: red; }\n.",[1],"header .",[1],"before .",[1],"back .",[1],"icon { color: #fff; background-color: rgba(0, 0, 0, 0.2); border-radius: 100%; }\n.",[1],"header .",[1],"before .",[1],"icon-btn .",[1],"icon { color: #fff; background-color: rgba(0, 0, 0, 0.2); border-radius: 100%; }\n",],undefined,{path:"./pages/goods/goodsHeader.wxss"});    
__wxAppCode__['pages/goods/goodsHeader.wxml']=$gwx('./pages/goods/goodsHeader.wxml');

__wxAppCode__['pages/goods/goodsList.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { width: 92%; padding: 0 4%; height: ",[0,79],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; position: fixed; z-index: 10; background-color: #fff; border-bottom: solid ",[0,1]," #eee; }\n.",[1],"header .",[1],"target { width: 20%; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; margin-bottom: ",[0,-2],"; color: #aaa; }\n.",[1],"header .",[1],"target.",[1],"on { color: #555; border-bottom: ",[0,4]," solid #f06c7a; font-weight: 600; font-size: ",[0,30],"; }\n.",[1],"header .",[1],"target .",[1],"icon { font-size: ",[0,26],"; }\n.",[1],"place { background-color: #ffffff; height: ",[0,100],"; }\n.",[1],"goods-list .",[1],"loading-text { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,60],"; color: #979797; font-size: ",[0,24],"; }\n.",[1],"goods-list .",[1],"product-list { width: 92%; padding: 0 4% 3vw 4%; -webkit-column-count: 2; -moz-column-count: 2; column-count: 2; -webkit-column-gap: 1em; -moz-column-gap: 1em; column-gap: 1em; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product { -webkit-column-break-inside: avoid; -moz-column-break-inside: avoid; break-inside: avoid; border-radius: ",[0,20],"; background-color: #fff; margin: 0 0 ",[0,15]," 0; -webkit-box-shadow: ",[0,0]," ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.1); box-shadow: ",[0,0]," ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.1); }\n.",[1],"goods-list .",[1],"product-list .",[1],"product wx-image { width: 100%; border-radius: ",[0,20]," ",[0,20]," 0 0; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"name { width: 92%; padding: ",[0,6]," 4%; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; text-align: justify; overflow: hidden; font-size: ",[0,30],"; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"info { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; width: 92%; padding: ",[0,10]," 4% ",[0,10]," 4%; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"info .",[1],"price { color: #e65339; font-size: ",[0,30],"; font-weight: 600; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"info .",[1],"slogan { color: #807c87; font-size: ",[0,24],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/goods/goodsList.wxss:117:36)",{path:"./pages/goods/goodsList.wxss"});    
__wxAppCode__['pages/goods/goodsList.wxml']=$gwx('./pages/goods/goodsList.wxml');

__wxAppCode__['pages/goods/ratings.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"content { width: 94%; padding: 0 3%; }\n.",[1],"content wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"content .",[1],"label { width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"content .",[1],"label wx-view { padding: 0 ",[0,20],"; height: ",[0,50],"; border-radius: ",[0,40],"; border: solid ",[0,1]," #ddd; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; color: #555; font-size: ",[0,26],"; background-color: #f9f9f9; margin: ",[0,10]," ",[0,20]," ",[0,10]," 0; }\n.",[1],"content .",[1],"label wx-view.",[1],"on { border: solid ",[0,1]," #f06c7a; color: #f06c7a; }\n.",[1],"list { width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,20]," 0; }\n.",[1],"list .",[1],"ratings { width: 100%; margin-top: ",[0,30],"; }\n.",[1],"list .",[1],"ratings .",[1],"left { width: 10vw; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; margin-right: ",[0,10],"; }\n.",[1],"list .",[1],"ratings .",[1],"left .",[1],"face { width: 100%; }\n.",[1],"list .",[1],"ratings .",[1],"left .",[1],"face wx-image { width: 10vw; height: 10vw; border-radius: 100%; }\n.",[1],"list .",[1],"ratings .",[1],"right { width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"name-date { width: 100%; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"name-date .",[1],"username { font-size: ",[0,32],"; color: #555; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"name-date .",[1],"date { font-size: ",[0,28],"; color: #aaa; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"spec { width: 100%; color: #aaa; font-size: ",[0,26],"; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"medias { width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"medias .",[1],"content { font-size: ",[0,30],"; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"medias .",[1],"img-video { width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"medias .",[1],"img-video .",[1],"box { width: calc((84.6vw - ",[0,50],")/4); height: calc((84.6vw - ",[0,50],")/4); margin: ",[0,5]," ",[0,5],"; position: relative; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"medias .",[1],"img-video .",[1],"box wx-image { position: absolute; width: 100%; height: 100%; border-radius: ",[0,10],"; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"medias .",[1],"img-video .",[1],"box .",[1],"playbtn { position: absolute; }\n.",[1],"list .",[1],"ratings .",[1],"right .",[1],"medias .",[1],"img-video .",[1],"box .",[1],"playbtn .",[1],"icon { font-size: ",[0,80],"; color: rgba(255, 255, 255, 0.9); }\n.",[1],"myVideo { position: fixed; top: 50%; right: 100%; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/goods/ratings.wxss:146:47)",{path:"./pages/goods/ratings.wxss"});    
__wxAppCode__['pages/goods/ratings.wxml']=$gwx('./pages/goods/ratings.wxml');

__wxAppCode__['pages/order/confirm.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"buy-list { width: 86%; padding: ",[0,10]," 3%; margin: ",[0,30]," auto ",[0,20]," auto; -webkit-box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); border-radius: ",[0,20],"; }\n.",[1],"buy-list .",[1],"row { margin: ",[0,30]," 0; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"img { width: 22vw; height: 22vw; border-radius: ",[0,10],"; overflow: hidden; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; margin-right: ",[0,10],"; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"img wx-image { width: 22vw; height: 22vw; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info { width: 100%; height: 22vw; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; position: relative; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"title { width: 100%; font-size: ",[0,28],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"spec { font-size: ",[0,22],"; background-color: #f3f3f3; color: #a7a7a7; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,10],"; border-radius: ",[0,20],"; margin-bottom: 20vw; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"price-number { position: absolute; width: 100%; bottom: ",[0,0],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; font-size: ",[0,28],"; height: ",[0,40],"; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"price-number .",[1],"price { color: #f06c7a; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"price-number .",[1],"number { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"detail { width: 86%; padding: ",[0,10]," 3%; margin: ",[0,30]," auto ",[0,20]," auto; -webkit-box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); border-radius: ",[0,20],"; }\n.",[1],"detail .",[1],"row { height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"detail .",[1],"row .",[1],"amount { font-size: ",[0,28],"; }\n.",[1],"detail .",[1],"row .",[1],"content { font-size: ",[0,26],"; color: #f06c7a; }\n.",[1],"position { width: 100%; height: ",[0,100],"; }\n.",[1],"footer { width: 92%; padding: 0 4%; background-color: #fbfbfb; height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; position: fixed; bottom: ",[0,0],"; z-index: 5; }\n.",[1],"footer .",[1],"settlement { width: 80%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"footer .",[1],"settlement .",[1],"sum { width: 50%; font-size: ",[0,28],"; margin-right: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"footer .",[1],"settlement .",[1],"sum .",[1],"money { font-weight: 600; }\n.",[1],"footer .",[1],"settlement .",[1],"btn { padding: 0 ",[0,30],"; height: ",[0,60],"; background-color: #f06c7a; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,30],"; border-radius: ",[0,40],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/order/confirm.wxss:55:33)",{path:"./pages/order/confirm.wxss"});    
__wxAppCode__['pages/order/confirm.wxml']=$gwx('./pages/order/confirm.wxml');

__wxAppCode__['pages/tabBar/cart/cart.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"container .",[1],"checkbox { width: ",[0,35],"; height: ",[0,35],"; border-radius: 100%; border: solid ",[0,2]," #f06c7a; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"container .",[1],"checkbox .",[1],"on { width: ",[0,25],"; height: ",[0,25],"; border-radius: 100%; background-color: #f06c7a; }\n.",[1],"container .",[1],"text { font-size: ",[0,28],"; margin-left: ",[0,10],"; }\n.",[1],"goods-list { width: 100%; padding: ",[0,20]," 0 ",[0,120]," 0; }\n.",[1],"goods-list .",[1],"empty { width: 100%; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,32],"; color: #a7a7a7; }\n.",[1],"goods-list .",[1],"row { width: calc(92%); height: calc(22vw + ",[0,40],"); margin: ",[0,20]," auto; border-radius: ",[0,15],"; -webkit-box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; overflow: hidden; z-index: 4; border: 0; }\n.",[1],"goods-list .",[1],"row .",[1],"menu { position: absolute; width: 30%; height: 100%; right: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background-color: red; color: #fff; z-index: 2; }\n.",[1],"goods-list .",[1],"row .",[1],"menu .",[1],"icon { color: #fff; font-size: ",[0,60],"; }\n.",[1],"goods-list .",[1],"row .",[1],"production { background-color: #fff; position: absolute; width: 100%; padding: 0 0; height: 100%; z-index: 3; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n@-webkit-keyframes showMenu { 0% { -webkit-transform: translateX(0); transform: translateX(0); }\n100% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n}@keyframes showMenu { 0% { -webkit-transform: translateX(0); transform: translateX(0); }\n100% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n}@-webkit-keyframes closeMenu { 0% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n100% { -webkit-transform: translateX(0); transform: translateX(0); }\n}@keyframes closeMenu { 0% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n100% { -webkit-transform: translateX(0); transform: translateX(0); }\n}.",[1],"goods-list .",[1],"row .",[1],"production.",[1],"open { -webkit-animation: showMenu 0.25s linear both; animation: showMenu 0.25s linear both; }\n.",[1],"goods-list .",[1],"row .",[1],"production.",[1],"close { -webkit-animation: closeMenu 0.15s linear both; animation: closeMenu 0.15s linear both; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"container { padding-left: ",[0,20],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; height: 22vw; margin-right: ",[0,20],"; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding-right: ",[0,20],"; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"img { width: 22vw; height: 22vw; border-radius: ",[0,10],"; overflow: hidden; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; margin-right: ",[0,10],"; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"img wx-image { width: 22vw; height: 22vw; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info { width: 100%; height: 22vw; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; position: relative; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info .",[1],"title { width: 100%; font-size: ",[0,28],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info .",[1],"spec { font-size: ",[0,20],"; background-color: #f3f3f3; color: #a7a7a7; height: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,10],"; border-radius: ",[0,15],"; margin-bottom: 20vw; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info .",[1],"price-number { position: absolute; width: 100%; bottom: ",[0,0],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; font-size: ",[0,28],"; height: ",[0,60],"; }\n.",[1],"footer { width: 92%; padding: 0 4%; background-color: #fbfbfb; height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; position: fixed; bottom: ",[0,0],"; z-index: 5; }\n.",[1],"footer .",[1],"delBtn { border: solid ",[0,1]," #f06c7a; color: #f06c7a; padding: 0 ",[0,30],"; height: ",[0,50],"; border-radius: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"footer .",[1],"settlement { width: 60%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"footer .",[1],"settlement .",[1],"sum { width: 50%; font-size: ",[0,28],"; margin-right: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"footer .",[1],"settlement .",[1],"sum .",[1],"money { font-weight: 600; }\n.",[1],"footer .",[1],"settlement .",[1],"btn { padding: 0 ",[0,30],"; height: ",[0,50],"; background-color: #f06c7a; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-radius: ",[0,30],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/tabBar/cart/cart.wxss:222:47)",{path:"./pages/tabBar/cart/cart.wxss"});    
__wxAppCode__['pages/tabBar/cart/cart.wxml']=$gwx('./pages/tabBar/cart/cart.wxml');

__wxAppCode__['pages/tabBar/category/caregort.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"category-list { width: 100%; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"category-list .",[1],"left { width: 24%; background-color: #f2f2f2; }\n.",[1],"category-list .",[1],"left .",[1],"row { width: 100%; height: ",[0,90],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"category-list .",[1],"left .",[1],"row .",[1],"text { width: 100%; position: relative; font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #3c3c3c; }\n.",[1],"category-list .",[1],"left .",[1],"row .",[1],"text .",[1],"block { position: absolute; width: ",[0,0],"; left: 0; }\n.",[1],"category-list .",[1],"left .",[1],"row.",[1],"on { height: ",[0,100],"; background-color: #fff; }\n.",[1],"category-list .",[1],"left .",[1],"row.",[1],"on .",[1],"text { font-size: ",[0,30],"; font-weight: 600; color: #2d2d2d; }\n.",[1],"category-list .",[1],"left .",[1],"row.",[1],"on .",[1],"text .",[1],"block { width: ",[0,10],"; height: 80%; top: 10%; background-color: #f06c7a; }\n.",[1],"category-list .",[1],"right { position: absolute; width: 76%; left: 24%; }\n.",[1],"category-list .",[1],"right .",[1],"category { width: 94%; padding: ",[0,20]," 3%; }\n.",[1],"category-list .",[1],"right .",[1],"category .",[1],"banner { width: 100%; height: 28vw; border-radius: ",[0,10],"; overflow: hidden; -webkit-box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.3); box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.3); }\n.",[1],"category-list .",[1],"right .",[1],"category .",[1],"banner wx-image { width: 100%; height: 100%; }\n.",[1],"category-list .",[1],"right .",[1],"category .",[1],"list { margin-top: ",[0,40],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"category-list .",[1],"right .",[1],"category .",[1],"list .",[1],"box { width: calc(71.44vw / 3); margin-bottom: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"category-list .",[1],"right .",[1],"category .",[1],"list .",[1],"box wx-image { width: 60%; height: calc(71.44vw / 3 * 0.6); }\n.",[1],"category-list .",[1],"right .",[1],"category .",[1],"list .",[1],"box .",[1],"text { margin-top: ",[0,5],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,26],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/tabBar/category/caregort.wxss:136:44)",{path:"./pages/tabBar/category/caregort.wxss"});    
__wxAppCode__['pages/tabBar/category/caregort.wxml']=$gwx('./pages/tabBar/category/caregort.wxml');

__wxAppCode__['pages/tabBar/home/home.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"swiper { width: 100%; margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"swiper .",[1],"swiper-box { width: 92%; height: 30.7vw; overflow: hidden; border-radius: ",[0,15],"; -webkit-box-shadow: ",[0,0]," ",[0,8]," ",[0,25]," rgba(0, 0, 0, 0.2); box-shadow: ",[0,0]," ",[0,8]," ",[0,25]," rgba(0, 0, 0, 0.2); position: relative; z-index: 1; }\n.",[1],"swiper .",[1],"swiper-box wx-swiper { width: 100%; height: 30.7vw; }\n.",[1],"swiper .",[1],"swiper-box wx-swiper wx-swiper-item wx-image { width: 100%; height: 40vw; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator { position: absolute; bottom: ",[0,20],"; left: ",[0,20],"; background-color: rgba(255, 255, 255, 0.4); width: ",[0,150],"; height: ",[0,5],"; border-radius: ",[0,3],"; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator .",[1],"dots { width: ",[0,0],"; background-color: white; -webkit-transition: all 0.3s ease-out; -o-transition: all 0.3s ease-out; transition: all 0.3s ease-out; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator .",[1],"dots.",[1],"on { width: 33.33333%; }\n.",[1],"category-list { width: 92%; margin: 0 4%; padding: 0 0 ",[0,30]," 0; border-bottom: solid ",[0,2]," #f6f6f6; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"category-list .",[1],"category { width: 25%; margin-top: ",[0,50],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"category-list .",[1],"category .",[1],"img { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"category-list .",[1],"category .",[1],"img wx-image { width: 11vw; height: 11vw; }\n.",[1],"category-list .",[1],"category .",[1],"text { margin-top: ",[0,16],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,24],"; color: #3c3c3c; }\n.",[1],"banner { width: 92%; margin: ",[0,40]," 4%; }\n.",[1],"banner wx-image { width: 100%; height: 36vw; border-radius: ",[0,4],"; -webkit-box-shadow: ",[0,0]," ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.3); box-shadow: ",[0,0]," ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.3); }\n.",[1],"promotion { width: 92%; margin: ",[0,10]," 4% ",[0,30]," 4%; }\n.",[1],"promotion .",[1],"text { width: 100%; height: ",[0,60],"; font-size: ",[0,34],"; font-weight: 600; margin: ",[0,10],"; }\n.",[1],"promotion .",[1],"list { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"promotion .",[1],"list .",[1],"column { width: 43%; padding: ",[0,15]," 3%; background-color: #ebf9f9; border-radius: ",[0,10],"; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"promotion .",[1],"list .",[1],"column .",[1],"top { width: 100%; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-bottom: ",[0,5],"; }\n.",[1],"promotion .",[1],"list .",[1],"column .",[1],"top .",[1],"title { font-size: ",[0,30],"; }\n.",[1],"promotion .",[1],"list .",[1],"column .",[1],"left { width: 50%; height: 18.86vw; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-align-content: space-between; -ms-flex-line-pack: justify; align-content: space-between; }\n.",[1],"promotion .",[1],"list .",[1],"column .",[1],"left .",[1],"ad { margin-top: ",[0,5],"; width: 100%; font-size: ",[0,22],"; color: #acb0b0; }\n.",[1],"promotion .",[1],"list .",[1],"column .",[1],"left .",[1],"into { width: 100%; font-size: ",[0,24],"; color: #aaa; margin-bottom: ",[0,5],"; }\n.",[1],"promotion .",[1],"list .",[1],"column .",[1],"right { width: 18.86vw; height: 18.86vw; }\n.",[1],"promotion .",[1],"list .",[1],"column .",[1],"right wx-image { width: 18.86vw; height: 18.86vw; }\n.",[1],"goods-list .",[1],"loading-text { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,60],"; color: #979797; font-size: ",[0,24],"; }\n.",[1],"goods-list .",[1],"product-list { width: 92%; padding: 0 4% 3vw 4%; -webkit-column-count: 2; -moz-column-count: 2; column-count: 2; -webkit-column-gap: 1em; -moz-column-gap: 1em; column-gap: 1em; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product { -webkit-column-break-inside: avoid; -moz-column-break-inside: avoid; break-inside: avoid; border-radius: ",[0,20],"; background-color: #fff; margin: 0 0 ",[0,15]," 0; -webkit-box-shadow: ",[0,0]," ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.1); box-shadow: ",[0,0]," ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.1); }\n.",[1],"goods-list .",[1],"product-list .",[1],"product wx-image { width: 100%; border-radius: ",[0,20]," ",[0,20]," 0 0; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"name { width: 92%; padding: ",[0,6]," 4%; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; text-align: justify; overflow: hidden; font-size: ",[0,30],"; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"info { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; width: 92%; padding: ",[0,10]," 4% ",[0,10]," 4%; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"info .",[1],"price { color: #e65339; font-size: ",[0,30],"; font-weight: 600; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"info .",[1],"slogan { color: #807c87; font-size: ",[0,24],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/tabBar/home/home.wxss:277:36)",{path:"./pages/tabBar/home/home.wxss"});    
__wxAppCode__['pages/tabBar/home/home.wxml']=$gwx('./pages/tabBar/home/home.wxml');

__wxAppCode__['pages/tabBar/user/qrcode.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background-color: #f06c7a; }\n.",[1],"block { width: 100%; height: 30vh; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"QR { width: 60vw; height: 80vw; margin: -40vw auto 0 auto; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"QR wx-image { width: 50vw; height: 50vw; }\n.",[1],"title { width: 100%; margin-top: ",[0,50],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,36],"; color: #fff; }\n.",[1],"btn { width: 50%; height: ",[0,80],"; border-radius: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,20],"; margin: 0 auto; margin-top: ",[0,50],"; background-color: rgba(255, 255, 255, 0.8); }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/tabBar/user/qrcode.wxss:61:5)",{path:"./pages/tabBar/user/qrcode.wxss"});    
__wxAppCode__['pages/tabBar/user/qrcode.wxml']=$gwx('./pages/tabBar/user/qrcode.wxml');

__wxAppCode__['pages/tabBar/user/user.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"user { width: 92%; padding: 0 4%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; top: 0; background-color: #f06c7a; padding-bottom: ",[0,80],"; }\n.",[1],"user .",[1],"left { width: 20vw; height: 20vw; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; margin-right: ",[0,20],"; border: solid ",[0,1]," #fff; border-radius: 100%; }\n.",[1],"user .",[1],"left wx-image { width: 20vw; height: 20vw; border-radius: 100%; }\n.",[1],"user .",[1],"right { width: 100%; }\n.",[1],"user .",[1],"right .",[1],"username { font-size: ",[0,36],"; color: #fff; }\n.",[1],"user .",[1],"erweima { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: 10vw; height: 10vw; margin-left: 5vw; border-radius: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: -webkit-gradient(linear, right top, left top, from(#fbbb37), color-stop(105%, #fcf0d0)); background: -o-linear-gradient(right, #fbbb37 0%, #fcf0d0 105%); background: linear-gradient(to left, #fbbb37 0%, #fcf0d0 105%); }\n.",[1],"user .",[1],"erweima .",[1],"icon { color: #7b6335; font-size: ",[0,42],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/tabBar/user/user.wxss:53:13)",{path:"./pages/tabBar/user/user.wxss"});    
__wxAppCode__['pages/tabBar/user/user.wxml']=$gwx('./pages/tabBar/user/user.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
