var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

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
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'popup spec'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideSpecifications']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'spaceInfo']],[3,'showSpace']]])
Z([3,'__l'])
Z(z[0])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[1,'sub']]]]]]]],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]]])
Z([[7],[3,'goodsInfo']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z(z[0])
Z([3,'__e'])
Z(z[5])
Z(z[5])
Z(z[5])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[1,'sub']]]]]]]],[[4],[[5],[[5],[1,'^setSelectSpec']],[[4],[[5],[[4],[[5],[1,'setSelectSpec']]]]]]]],[[4],[[5],[[5],[1,'^hideSpec']],[[4],[[5],[[4],[[5],[1,'hideSpec']]]]]]]]])
Z([[7],[3,'goodsData']])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'spaceInfo']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showback']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods-list'])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'goodsList']])
Z(z[2])
Z([3,'__e'])
Z(z[6])
Z(z[6])
Z([[4],[[5],[[5],[1,'production']],[[2,'?:'],[[2,'=='],[[7],[3,'theIndex']],[[7],[3,'index']]],[1,'open'],[[2,'?:'],[[2,'=='],[[7],[3,'oldIndex']],[[7],[3,'index']]],[1,'close'],[1,'']]]]])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchStart']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchMove']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchEnd']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'goods-info'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleGoodsInfo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'__l'])
Z(z[6])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'add']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sub']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'selectedList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
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
Z([[2,'>'],[[6],[[7],[3,'promotion']],[3,'length']],[1,0]])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/counter.wxml','./components/popupSpec.wxml','./components/status.wxml','./pages/goods/goods.wxml','./pages/goods/goodsHeader.wxml','./pages/goods/goodsList.wxml','./pages/goods/ratings.wxml','./pages/order/confirm.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/category/caregort.wxml','./pages/tabBar/home/home.wxml','./pages/tabBar/home/pageHeader.wxml','./pages/tabBar/user/qrcode.wxml','./pages/tabBar/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hidden',2],[],e,s,gg)
var oD=_mz(z,'counter',['bind:__l',4,'bind:add',1,'bind:sub',2,'data-event-opts',3,'goodsInfo',4,'vueId',5],[],e,s,gg)
_(xC,oD)
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_n('view')
var oH=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(hG,oH)
var cI=_mz(z,'goods-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(hG,cI)
var oJ=_mz(z,'popup-spec',['bind:__l',4,'bind:add',1,'bind:hideSpec',2,'bind:setSelectSpec',3,'bind:sub',4,'data-event-opts',5,'goodsData',6,'goodsInfo',7,'spaceInfo',8,'vueId',9],[],e,s,gg)
_(hG,oJ)
_(r,hG)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aL=_v()
_(r,aL)
if(_oz(z,0,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var xQ=_n('view')
var fS=_n('view')
_rz(z,fS,'class',0,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,1,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
var oV=function(oX,cW,lY,gg){
var t1=_mz(z,'view',['bindtouchend',6,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4],[],oX,cW,gg)
var e2=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],oX,cW,gg)
var b3=_mz(z,'counter',['bind:__l',14,'bind:add',1,'bind:sub',2,'data-event-opts',3,'goodsInfo',4,'vueId',5],[],oX,cW,gg)
_(e2,b3)
_(t1,e2)
_(lY,t1)
return lY
}
hU.wxXCkey=4
_2z(z,4,oV,e,s,gg,hU,'item','index','index')
cT.wxXCkey=1
_(xQ,fS)
var oR=_v()
_(xQ,oR)
if(_oz(z,20,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
_(r,xQ)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var x5=_n('view')
var o6=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(x5,o6)
var f7=_mz(z,'page-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(x5,f7)
_(r,x5)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var h9=_n('view')
var oBB=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(h9,oBB)
var lCB=_mz(z,'page-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(h9,lCB)
var o0=_v()
_(h9,o0)
if(_oz(z,4,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,5,e,s,gg)){cAB.wxVkey=1
}
o0.wxXCkey=1
cAB.wxXCkey=1
_(r,h9)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/home/home","pages/tabBar/category/caregort","pages/tabBar/cart/cart","pages/tabBar/user/user","pages/goods/goodsList","pages/goods/goods","pages/goods/ratings","pages/order/confirm","pages/tabBar/user/qrcode"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"小明","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#bc1904","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/tabBar/home/home","iconPath":"static/img/tabBar/home.png","selectedIconPath":"static/img/tabBar/home-on.png","text":"首页"},{"pagePath":"pages/tabBar/category/caregort","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"分类"},{"pagePath":"pages/tabBar/cart/cart","iconPath":"static/img/tabBar/cart.png","selectedIconPath":"static/img/tabBar/cart-on.png","text":"购物车"},{"pagePath":"pages/tabBar/user/user","iconPath":"static/img/tabBar/user.png","selectedIconPath":"static/img/tabBar/user-on.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-m","compilerVersion":"2.3.7","usingComponents":{"page-status":"/components/status"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/counter.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/counter.wxml']=$gwx('./components/counter.wxml');

__wxAppCode__['components/popupSpec.json']={"usingComponents":{"counter":"/components/counter"},"component":true};
__wxAppCode__['components/popupSpec.wxml']=$gwx('./components/popupSpec.wxml');

__wxAppCode__['components/status.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/status.wxml']=$gwx('./components/status.wxml');

__wxAppCode__['pages/goods/goods.json']={"navigationBarTitleText":"商品","usingComponents":{"page-status":"/components/status","goods-header":"/pages/goods/goodsHeader","popup-spec":"/components/popupSpec"}};
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/goodsHeader.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/goods/goodsHeader.wxml']=$gwx('./pages/goods/goodsHeader.wxml');

__wxAppCode__['pages/goods/goodsList.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"onReac":0,"usingComponents":{}};
__wxAppCode__['pages/goods/goodsList.wxml']=$gwx('./pages/goods/goodsList.wxml');

__wxAppCode__['pages/goods/ratings.json']={"navigationBarTitleText":"商品评论","usingComponents":{}};
__wxAppCode__['pages/goods/ratings.wxml']=$gwx('./pages/goods/ratings.wxml');

__wxAppCode__['pages/order/confirm.json']={"navigationBarTitleText":"确定订单","usingComponents":{}};
__wxAppCode__['pages/order/confirm.wxml']=$gwx('./pages/order/confirm.wxml');

__wxAppCode__['pages/tabBar/cart/cart.json']={"navigationBarTitleText":"购物车","usingComponents":{"counter":"/components/counter"}};
__wxAppCode__['pages/tabBar/cart/cart.wxml']=$gwx('./pages/tabBar/cart/cart.wxml');

__wxAppCode__['pages/tabBar/category/caregort.json']={"navigationBarTitleText":"分类","titleNView":false,"bounce":"none","usingComponents":{"page-status":"/components/status","page-header":"/pages/tabBar/home/pageHeader"}};
__wxAppCode__['pages/tabBar/category/caregort.wxml']=$gwx('./pages/tabBar/category/caregort.wxml');

__wxAppCode__['pages/tabBar/home/home.json']={"navigationBarTitleText":"首页","titleNView":false,"bounce":"none","usingComponents":{"page-status":"/components/status","page-header":"/pages/tabBar/home/pageHeader"}};
__wxAppCode__['pages/tabBar/home/home.wxml']=$gwx('./pages/tabBar/home/home.wxml');

__wxAppCode__['pages/tabBar/home/pageHeader.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/tabBar/home/pageHeader.wxml']=$gwx('./pages/tabBar/home/pageHeader.wxml');

__wxAppCode__['pages/tabBar/user/qrcode.json']={"navigationBarTitleText":"我的二维码","usingComponents":{}};
__wxAppCode__['pages/tabBar/user/qrcode.wxml']=$gwx('./pages/tabBar/user/qrcode.wxml');

__wxAppCode__['pages/tabBar/user/user.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/tabBar/user/user.wxml']=$gwx('./pages/tabBar/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0a20":function(t,n,e){},4653:function(t,n,e){},"50b6":function(t,n,e){"use strict";var u=e("0a20"),r=e.n(u);r.a},"9f01":function(t,n,e){"use strict";(function(t){e("8211"),e("921b");var n=o(e("66fd")),u=o(e("f90e")),r=o(e("6105"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},u=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f=function(){return e.e("components/status").then(e.bind(null,"9b52"))};n.default.config.productionTip=!1,n.default.prototype.request=r.default,n.default.component("page-status",f),u.default.mpType="app";var l=new n.default(a({},u.default));t(l).$mount()}).call(this,e("6e42")["createApp"])},b1ca:function(t,n,e){"use strict";e.r(n);var u=e("4653"),r=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=r.a},f90e:function(t,n,e){"use strict";e.r(n);var u=e("b1ca");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("50b6");var o,a,c=e("2877"),f=Object(c["a"])(u["default"],o,a,!1,null,null,null);n["default"]=f.exports}},[["9f01","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, o, s = t[0], p = t[1], c = t[2], i = 0, l = []; i < s.length; i++) {
      o = s[i], a[o] && l.push(a[o][0]), a[o] = 0;
    }

    for (n in p) {
      Object.prototype.hasOwnProperty.call(p, n) && (e[n] = p[n]);
    }

    f && f(t);

    while (l.length) {
      l.shift()();
    }

    return u.push.apply(u, c || []), r();
  }

  function r() {
    for (var e, t = 0; t < u.length; t++) {
      for (var r = u[t], n = !0, o = 1; o < r.length; o++) {
        var s = r[o];
        0 !== a[s] && (n = !1);
      }

      n && (u.splice(t--, 1), e = p(p.s = r[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      u = [];

  function s(e) {
    return p.p + "" + e + ".js";
  }

  function p(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, p), r.l = !0, r.exports;
  }

  p.e = function (e) {
    var t = [],
        r = {
      "components/status": 1,
      "pages/tabBar/home/pageHeader": 1,
      "components/counter": 1,
      "components/popupSpec": 1,
      "pages/goods/goodsHeader": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise(function (t, r) {
      for (var n = ({
        "components/status": "components/status",
        "pages/tabBar/home/pageHeader": "pages/tabBar/home/pageHeader",
        "components/counter": "components/counter",
        "components/popupSpec": "components/popupSpec",
        "pages/goods/goodsHeader": "pages/goods/goodsHeader"
      }[e] || e) + ".wxss", a = p.p + n, u = document.getElementsByTagName("link"), s = 0; s < u.length; s++) {
        var c = u[s],
            i = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (i === n || i === a)) return t();
      }

      var l = document.getElementsByTagName("style");

      for (s = 0; s < l.length; s++) {
        c = l[s], i = c.getAttribute("data-href");
        if (i === n || i === a) return t();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var n = t && t.target && t.target.src || a,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        u.request = n, delete o[e], f.parentNode.removeChild(f), r(u);
      }, f.href = a;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var n = a[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var u = new Promise(function (t, r) {
        n = a[e] = [t, r];
      });
      t.push(n[2] = u);
      var c,
          i = document.createElement("script");
      i.charset = "utf-8", i.timeout = 120, p.nc && i.setAttribute("nonce", p.nc), i.src = s(e), c = function c(t) {
        i.onerror = i.onload = null, clearTimeout(l);
        var r = a[e];

        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + o + ")");
            u.type = n, u.request = o, r[1](u);
          }

          a[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        c({
          type: "timeout",
          target: i
        });
      }, 12e4);
      i.onerror = i.onload = c, document.head.appendChild(i);
    }
    return Promise.all(t);
  }, p.m = e, p.c = n, p.d = function (e, t, r) {
    p.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, p.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, p.t = function (e, t) {
    if (1 & t && (e = p(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (p.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      p.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, p.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return p.d(t, "a", t), t;
  }, p.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, p.p = "/", p.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      i = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var l = 0; l < c.length; l++) {
    t(c[l]);
  }

  var f = i;
  r();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,n,r){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.map(function(t){var n=Object.prototype.toString.call(t);if("[object object]"===n.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=o(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t}),a="";if(i.length>1){var s=i.pop();a=i.join("---COMMA---"),0===s.indexOf(" at ")?a+=s:a+="---COMMA---"+s}else a=i[0];return a}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},"15d3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__2C002C7"};e.default=r},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"4e2d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/tabBar/home/home":{navigationBarTitleText:"首页",titleNView:!1,bounce:"none"},"pages/tabBar/category/caregort":{navigationBarTitleText:"分类",titleNView:!1,bounce:"none"},"pages/tabBar/cart/cart":{navigationBarTitleText:"购物车"},"pages/tabBar/user/user":{navigationBarTitleText:"我的"},"pages/goods/goodsList":{navigationBarTitleText:"",enablePullDownRefresh:!0,onReac:0},"pages/goods/goods":{navigationBarTitleText:"商品"},"pages/goods/ratings":{navigationBarTitleText:"商品评论"},"pages/order/confirm":{navigationBarTitleText:"确定订单"},"pages/tabBar/user/qrcode":{navigationBarTitleText:"我的二维码"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"小明",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#F8F8F8"}};e.default=r},6105:function(t,n,r){"use strict";(function(n){t.exports=function(t){var r=t.url,o=t.method,i=t.header||{},a=t.data||{};o&&(o=o.toUpperCase(),"POST"==o&&(i={"content-type":"application/x-www-form-urlencoded"})),t.hideLoading||n.showLoading({title:"加载中..."}),n.request({url:r,method:o||"GET",header:i,data:a,success:function(e){e.statusCode&&200!=e.statusCode?n.showModal({content:e.msg}):"function"==typeof t.success&&t.success(e.data)},fail:function(e){n.showModal({content:e.meg}),"function"==typeof t.fail&&t.fail(e.data)},complete:function(){n.hideLoading(),"function"==typeof t.complete&&t.complete(e.data)}})}}).call(this,r("6e42")["default"])},"66fd":function(t,n,r){"use strict";r.r(n),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({});function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function l(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===f?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var g=_("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function $(t,e){return b.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,A=w(function(t){return t.replace(O,function(t,e){return e?e.toUpperCase():""})}),S=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,x=w(function(t){return t.replace(k,"-$1").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var E=Function.prototype.bind?D:j;function T(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function I(t,e,n){}var N=function(t,e,n){return!1},R=function(t){return t};function B(t,n){if(t===n)return!0;var r=c(t),o=c(n);if(!r||!o)return!r&&!o&&String(t)===String(n);try{var i=Array.isArray(t),a=Array.isArray(n);if(i&&a)return t.length===n.length&&t.every(function(t,e){return B(t,n[e])});if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(i||a)return!1;var s=Object.keys(t),u=Object.keys(n);return s.length===u.length&&s.every(function(e){return B(t[e],n[e])})}catch(e){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(B(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var V=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:I,parsePlatformTagName:R,mustUseProp:N,async:!0,_lifecycleHooks:q},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function z(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^"+L.source+".$_\\d]");function W(t){if(!J.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,K="__proto__"in{},X="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=Q&&WXEnvironment.platform.toLowerCase(),Y=X&&window.navigator.userAgent.toLowerCase(),tt=Y&&/msie|trident/.test(Y),et=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),nt=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Z),rt=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(X)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ot)}catch(e){}var it=function(){return void 0===G&&(G=!X&&!Q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},at=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function st(t){return"function"===typeof t&&/native code/.test(t.toString())}var ut,ct="undefined"!==typeof Symbol&&st(Symbol)&&"undefined"!==typeof Reflect&&st(Reflect.ownKeys);ut="undefined"!==typeof Set&&st(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=I,lt=0,pt=function(){this.id=lt++,this.subs=[]};function ht(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function dt(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){m(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},yt={child:{configurable:!0}};yt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,yt);var _t=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function gt(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,$t=Object.create(bt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=bt[t];z($t,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var Ot=Object.getOwnPropertyNames($t),At=!0;function St(t){At=t}var kt=function(t){this.value=t,this.dep=new pt,this.vmCount=0,z(t,"__ob__",this),Array.isArray(t)?(K?t.push!==t.__proto__.push?jt(t,$t,Ot):xt(t,$t):jt(t,$t,Ot),this.observeArray(t)):this.walk(t)};function xt(t,e){t.__proto__=e}function jt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];z(t,i,e[i])}}function Dt(t,e){var n;if(c(t)&&!(t instanceof vt))return $(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:At&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,o){var i=new pt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&Dt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return pt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&Dt(e),i.notify())}})}}function Tt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||$(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e])};var It=F.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,r,o,i=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],$(t,n)?r!==o&&l(r)&&l(o)&&Nt(r,o):Tt(t,n,o));return t}function Rt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Nt(r,o):o}:e?t?function(){return Nt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Mt(n):n}function Mt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,r){var o=Object.create(t||null);return e?P(o,e):o}It.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!==typeof e?t:Rt(t,e)},q.forEach(function(t){It[t]=Bt}),V.forEach(function(t){It[t+"s"]=Ut}),It.watch=function(t,e,n,r){if(t===rt&&(t=void 0),e===rt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in P(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return P(o,t),e&&P(o,e),o},It.provide=Rt;var Vt=function(t,e){return void 0===e?t:e};function qt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=A(o),a[i]={type:null})}else if(l(n))for(var s in n)o=n[s],i=A(s),a[i]=l(o)?o:{type:o};else 0;t.props=a}}function Ft(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(l(n))for(var i in n){var a=n[i];r[i]=l(a)?P({from:i},a):{from:a}}else 0}}function Lt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),qt(e,n),Ft(e,n),Lt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ht(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)$(t,i)||s(i);function s(r){var o=It[r]||Vt;a[r]=o(t[r],e[r],n,r)}return a}function zt(t,e,n,r){if("string"===typeof n){var o=t[e];if($(o,n))return o[n];var i=A(n);if($(o,i))return o[i];var a=S(i);if($(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Jt(t,e,n,r){var o=e[t],i=!$(n,t),a=n[t],s=Xt(Boolean,o.type);if(s>-1)if(i&&!$(o,"default"))a=!1;else if(""===a||a===x(t)){var u=Xt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Wt(r,o,t);var c=At;St(!0),Dt(a),St(c)}return a}function Wt(t,e,n){if($(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Gt(e.type)?r.call(t):r}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Kt(t,e){return Gt(t)===Gt(e)}function Xt(t,e){if(!Array.isArray(e))return Kt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Kt(e[n],t))return n;return-1}function Qt(t,n,r){ht();try{if(n){var o=n;while(o=o.$parent){var i=o.$options.errorCaptured;if(i)for(var a=0;a<i.length;a++)try{var s=!1===i[a].call(o,t,n,r);if(s)return}catch(e){Yt(e,o,"errorCaptured hook")}}}Yt(t,n,r)}finally{dt()}}function Zt(t,n,r,o,i){var a;try{a=r?t.apply(n,r):t.call(n),a&&!a._isVue&&d(a)&&!a._handled&&(a.catch(function(t){return Qt(t,o,i+" (Promise/async)")}),a._handled=!0)}catch(e){Qt(e,o,i)}return a}function Yt(t,n,r){if(F.errorHandler)try{return F.errorHandler.call(null,t,n,r)}catch(e){e!==t&&te(e,null,"config.errorHandler")}te(t,n,r)}function te(t,e,n){if(!X&&!Q||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function oe(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&st(Promise)){var ie=Promise.resolve();ee=function(){ie.then(oe),nt&&setTimeout(I)}}else if(tt||"undefined"===typeof MutationObserver||!st(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&st(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ae=1,se=new MutationObserver(oe),ue=document.createTextNode(String(ae));se.observe(ue,{characterData:!0}),ee=function(){ae=(ae+1)%2,ue.data=String(ae)}}function ce(t,n){var r;if(ne.push(function(){if(t)try{t.call(n)}catch(e){Qt(e,n,"nextTick")}else r&&r(n)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}var fe=new ut;function le(t){pe(t,fe),fe.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var he=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Zt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Zt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,r,i,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=he(u),o(c)||(o(f)?(o(c.fns)&&(c=t[u]=de(c,s)),a(l.once)&&(c=t[u]=i(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)o(t[u])&&(l=he(u),r(l.name,e[u],l.capture))}function ye(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,u=t.props;if(i(s)||i(u))for(var c in r){var f=x(c);_e(a,u,c,f,!0)||_e(a,s,c,f,!1)}return a}}function _e(t,e,n,r,o){if(i(e)){if($(e,n))return t[n]=e[n],o||delete e[n],!0;if($(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return u(t)?[gt(t)]:Array.isArray(t)?$e(t):void 0}function be(t){return i(t)&&i(t.text)&&s(t.isComment)}function $e(t,e){var n,r,s,c,f=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=f.length-1,c=f[s],Array.isArray(r)?r.length>0&&(r=$e(r,(e||"")+"_"+n),be(r[0])&&be(c)&&(f[s]=gt(c.text+r[0].text),r.shift()),f.push.apply(f,r)):u(r)?be(c)?f[s]=gt(c.text+r):""!==r&&f.push(gt(r)):be(r)&&be(c)?f[s]=gt(c.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),f.push(r)));return f}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=Ae(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),St(!0))}function Ae(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&$(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(ke)&&delete n[c];return n}function ke(t){return t.isComment&&!t.asyncFactory||" "===t.text}function xe(t,e,n){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&n&&n!==r&&s===n.$key&&!i&&!n.$hasNormal)return n;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=je(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=De(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),z(o,"$stable",a),z(o,"$key",s),z(o,"$hasNormal",i),o}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function De(t,e){return function(){return t[e]}}function Ee(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),f=u.next();while(!f.done)n.push(e(f.value,n.length)),f=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Te(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=P(P({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Pe(t){return zt(this.$options,"filters",t,!0)||R}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=F.keyCodes[e]||n;return o&&r&&!F.keyCodes[e]?Ce(o,r):i?Ce(i,t):r?x(r)!==e:void 0}function Ne(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||g(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||F.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=A(a),c=x(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Me(r,"__static__"+t,!1),r)}function Be(t,e,n){return Me(t,"__once__"+e+(n?"_"+n:""),!0),t}function Me(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ue(t[r],e+"_"+r,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ve(t,e){if(e)if(l(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function qe(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?qe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Fe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Le(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Be,t._n=y,t._s=v,t._l=Ee,t._t=Te,t._q=B,t._i=M,t._m=Re,t._f=Pe,t._k=Ie,t._b=Ne,t._v=gt,t._e=_t,t._u=qe,t._g=Ve,t._d=Fe,t._p=Le}function ze(t,e,n,o,i){var s,u=this,c=i.options;$(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=a(c._compiled),l=!f;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=Ae(c.inject,o),this.slots=function(){return u.$slots||xe(t.scopedSlots,u.$slots=Se(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xe(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=xe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=on(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(s,t,e,n,r,l)}}function Je(t,e,n,o,a){var s=t.options,u={},c=s.props;if(i(c))for(var f in c)u[f]=Jt(f,c,e||r);else i(n.attrs)&&Ge(u,n.attrs),i(n.props)&&Ge(u,n.props);var l=new ze(n,u,a,o,t),p=s.render.call(null,l._c,l);if(p instanceof vt)return We(p,n,l.parent,s,l);if(Array.isArray(p)){for(var h=me(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=We(h[v],n,l.parent,s,l);return d}}function We(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ge(t,e){for(var n in e)t[A(n)]=e[n]}He(ze.prototype);var Ke={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ke.prepatch(n,n)}else{var r=t.componentInstance=Ze(t,An);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Tn(e,!0):e.$destroy())}},Xe=Object.keys(Ke);function Qe(t,e,n,r,s){if(!o(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=vn(f,u),void 0===t))return dn(f,e,n,r,s);e=e||{},hr(t),i(e.model)&&en(t.options,e);var l=ye(e,t,s);if(a(t.options.functional))return Je(t,l,e,n,r);var p=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ye(e);var d=t.options.name||s,v=new vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:r},f);return v}}}function Ze(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ye(t){for(var e=t.hook||(t.hook={}),n=0;n<Xe.length;n++){var r=Xe[n],o=e[r],i=Ke[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var nn=1,rn=2;function on(t,e,n,r,o,i){return(Array.isArray(n)||u(n))&&(o=r,r=n,n=void 0),a(i)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,o){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===rn?r=me(r):o===nn&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||F.getTagNamespace(e),a=F.isReservedTag(e)?new vt(F.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(u=zt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Qe(u,n,t,r,e)):a=Qe(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&sn(a,s),i(n)&&un(n),a):_t()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var r=0,s=t.children.length;r<s;r++){var u=t.children[r];i(u.tag)&&(o(u.ns)||a(n)&&"svg"!==u.tag)&&sn(u,e,n)}}function un(t){c(t.style)&&le(t.style),c(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,o=n&&n.context;t.$slots=Se(e._renderChildren,o),t.$scopedSlots=r,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=n&&n.data;Et(t,"$attrs",i&&i.attrs||r,null,!0),Et(t,"$listeners",e._parentListeners||r,null,!0)}var fn,ln=null;function pn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,n=this,r=n.$options,o=r.render,i=r._parentVnode;i&&(n.$scopedSlots=xe(i.data.scopedSlots,n.$slots,n.$scopedSlots)),n.$vnode=i;try{ln=n,t=o.call(n._renderProxy,n.$createElement)}catch(e){Qt(e,n,"render"),t=n._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=_t()),t.parent=i,t}}function hn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function dn(t,e,n,r,o){var i=_t();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=ln;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var r=t.owners=[n],s=!0,u=null,f=null;n.$on("hook:destroyed",function(){return m(r,n)});var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==u&&(clearTimeout(u),u=null),null!==f&&(clearTimeout(f),f=null))},p=U(function(n){t.resolved=hn(n,e),s?r.length=0:l(!0)}),h=U(function(e){i(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,h);return c(v)&&(d(v)?o(t.resolved)&&v.then(p,h):d(v.component)&&(v.component.then(p,h),i(v.error)&&(t.errorComp=hn(v.error,e)),i(v.loading)&&(t.loadingComp=hn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),i(v.timeout)&&(f=setTimeout(function(){f=null,o(t.resolved)&&h(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function yn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||yn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function mn(t,e){fn.$on(t,e)}function bn(t,e){fn.$off(t,e)}function $n(t,e){var n=fn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){fn=t,ve(e,n||{},mn,bn,$n,t),fn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?T(n):n;for(var r=T(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Zt(n[i],e,r,e,o)}return e}}var An=null;function Sn(t){var e=An;return An=t,function(){An=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=Sn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,n,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==r&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||r,t.$listeners=n||r,e&&t.$options.props){St(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=Jt(h,d,e,t)}St(!0),t.$options.propsData=e}n=n||r;var v=t.$options._parentListeners;t.$options._parentListeners=n,wn(t,n,v),c&&(t.$slots=Se(i,o.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Pn(t,"activated")}}function Tn(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Tn(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){ht();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Zt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Cn=[],In=[],Nn={},Rn=!1,Bn=!1,Mn=0;function Un(){Mn=Cn.length=In.length=0,Nn={},Rn=Bn=!1}var Vn=Date.now;if(X&&!tt){var qn=window.performance;qn&&"function"===typeof qn.now&&Vn()>document.createEvent("Event").timeStamp&&(Vn=function(){return qn.now()})}function Fn(){var t,e;for(Vn(),Bn=!0,Cn.sort(function(t,e){return t.id-e.id}),Mn=0;Mn<Cn.length;Mn++)t=Cn[Mn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=In.slice(),r=Cn.slice();Un(),zn(n),Ln(r),at&&F.devtools&&at.emit("flush")}function Ln(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Pn(r,"updated")}}function Hn(t){t._inactive=!1,In.push(t)}function zn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function Jn(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,Bn){var n=Cn.length-1;while(n>Mn&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Rn||(Rn=!0,ce(Fn))}}var Wn=0,Gn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Wn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ut,this.newDepIds=new ut,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;ht(this);var n=this.vm;try{t=this.getter.call(n,n)}catch(e){if(!this.user)throw e;Qt(e,n,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),dt(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Jn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var n=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,n)}catch(e){Qt(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,n)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Kn={enumerable:!0,configurable:!0,get:I,set:I};function Xn(t,e,n){Kn.get=function(){return this[e][n]},Kn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Kn)}function Qn(t){t._watchers=[];var e=t.$options;e.props&&Zn(t,e.props),e.methods&&ar(t,e.methods),e.data?Yn(t):Dt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==rt&&sr(t,e.watch)}function Zn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||St(!1);var a=function(i){o.push(i);var a=Jt(i,e,n,t);Et(r,i,a),i in t||Xn(t,"_props",i)};for(var s in e)a(s);St(!0)}function Yn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&$(r,i)||H(i)||Xn(t,"_data",i)}Dt(e,!0)}function tr(t,n){ht();try{return t.call(n,n)}catch(e){return Qt(e,n,"data()"),{}}finally{dt()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Gn(t,a||I,I,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!it();"function"===typeof n?(Kn.get=r?or(e):ir(n),Kn.set=I):(Kn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):I,Kn.set=n.set||I),Object.defineProperty(t,e,Kn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:E(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)ur(t,n,r[o]);else ur(t,n,r)}}function ur(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Tt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return ur(r,t,e,n);n=n||{},n.user=!0;var o=new Gn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Qt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Ht(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),gn(e),cn(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Qn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=dr(t);o&&P(t.extendOptions,o),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=T(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ht(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,V.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Xn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function $r(t){V.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Ar(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=wr(a.componentOptions);s&&!e(s)&&Sr(n,i,r,o)}}}function Sr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,m(n,e)}lr(vr),cr(vr),On(vr),xn(vr),pn(vr);var kr=[String,RegExp,Array],xr={name:"keep-alive",abstract:!0,props:{include:kr,exclude:kr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Sr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Ar(t,function(t){return Or(e,t)})}),this.$watch("exclude",function(e){Ar(t,function(t){return!Or(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Or(i,r))||a&&r&&Or(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,m(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Sr(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:xr};function Dr(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:P,mergeOptions:Ht,defineReactive:Et},t.set=Tt,t.delete=Pt,t.nextTick=ce,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),V.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,jr),yr(t),_r(t),gr(t),$r(t)}Dr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:it}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:ze}),vr.version="2.6.10";var Er="[object Array]",Tr="[object Object]";function Pr(t,e){var n={};return Cr(t,e),Ir(t,e,"",n),n}function Cr(t,e){if(t!==e){var n=Rr(t),r=Rr(e);if(n==Tr&&r==Tr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Cr(i,e[o])}}else n==Er&&r==Er&&t.length>=e.length&&e.forEach(function(e,n){Cr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Rr(t),i=Rr(e);if(o==Tr)if(i!=Tr||Object.keys(t).length<Object.keys(e).length)Nr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Rr(i),u=Rr(a);if(s!=Er&&s!=Tr)i!=e[o]&&Nr(r,(""==n?"":n+".")+o,i);else if(s==Er)u!=Er?Nr(r,(""==n?"":n+".")+o,i):i.length<a.length?Nr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Tr)if(u!=Tr||Object.keys(i).length<Object.keys(a).length)Nr(r,(""==n?"":n+".")+o,i);else for(var c in i)Ir(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Er?i!=Er?Nr(r,n,t):t.length<e.length?Nr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Nr(r,n,t)}}function Nr(t,e,n){t[e]=n}function Rr(t){return Object.prototype.toString.call(t)}function Br(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Mr(t){return Cn.find(function(e){return t._watcher===e})}function Ur(t,n){if(!t.__next_tick_pending&&!Mr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextVueTick")}return ce(n,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var o=t.$scope;console.log("["+ +new Date+"]["+(o.is||o.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(n)try{n.call(t)}catch(e){Qt(e,t,"nextTick")}else i&&i(t)}),!n&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Vr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var qr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Vr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Pr(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Br(n)})):Br(this)}};function Fr(){}function Lr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Fr),t.$options.render||(t.$options.render=Fr),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Gn(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return i(t)||i(e)?zr(t,Jr(e)):""}function zr(t,e){return t?e?t+" "+e:t:e||""}function Jr(t){return Array.isArray(t)?Wr(t):c(t)?Gr(t):"string"===typeof t?t:""}function Wr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Jr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Kr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Xr(t){return Array.isArray(t)?C(t):"string"===typeof t?Kr(t):t}var Qr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Zr(t[r],n.slice(1).join("."))}function Yr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:T(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ur(this,t)},Qr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=Oe,t.prototype.__call_hook=function(t,e){var n=this;ht();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Zt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Zr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Xr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return x(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(c(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=qr,vr.prototype.$mount=function(t,e){return Lr(this,t,e)},eo(vr),Yr(vr),n["default"]=vr}.call(this,r("c8ba"))},"6e42":function(t,n,r){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.createApp=ve,n.createComponent=Se,n.createPage=Ae,n.default=void 0;var o=i(r("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return c(t)||u(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return d(t)||h(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var v=Object.prototype.toString,y=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function g(t){return"string"===typeof t}function m(t){return"[object Object]"===v.call(t)}function b(t,e){return y.call(t,e)}function $(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,A=w(function(t){return t.replace(O,function(t,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],k={},x={};function j(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?D(n):n}function D(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function E(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function T(t,e){Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&_(e[n])&&(t[n]=j(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&_(e[n])&&E(t[n],e[n])})}function C(t,e){"string"===typeof t&&m(e)?T(x[t]||(x[t]={}),e):m(t)&&T(k,t)}function I(t,e){"string"===typeof t?m(e)?P(x[t],e):delete x[t]:m(t)&&P(k,t)}function N(t){return function(e){return t(e)||e}}function R(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function B(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(N(o));else{var i=o(e);if(R(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){B(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function U(t,e){var n=[];Array.isArray(k.returnValue)&&n.push.apply(n,l(k.returnValue));var r=x[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function V(t){var e=Object.create(null);Object.keys(k).forEach(function(t){"returnValue"!==t&&(e[t]=k[t].slice())});var n=x[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function q(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=V(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=B(a.invoke,n);return s.then(function(t){return e.apply(void 0,[M(a,t)].concat(o))})}return e.apply(void 0,[M(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var F={returnValue:function(t){return R(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},L=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,z=/^on/;function J(t){return H.test(t)}function W(t){return L.test(t)}function G(t){return z.test(t)}function K(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function X(t){return!(J(t)||W(t)||G(t))}function Q(t,e){return X(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return _(n.success)||_(n.fail)||_(n.complete)?U(t,q.apply(void 0,[t,e,n].concat(o))):U(t,K(new Promise(function(r,i){q.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Z=1e-4,Y=750,tt=!1,et=0,nt=0;function rt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;et=r,nt=n,tt="ios"===e}function ot(t,e){if(0===et&&rt(),t=Number(t),0===t)return 0;var n=t/Y*(e||et);return n<0&&(n=-n),n=Math.floor(n+Z),0===n?1!==nt&&tt?.5:1:t<0?-n:n}var it={promiseInterceptor:F},at=Object.freeze({upx2px:ot,interceptors:it,addInterceptor:C,removeInterceptor:I}),st={},ut=[],ct=[],ft=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(ht(t,r,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var i=!0===o?e:{};for(var a in _(n)&&(n=n(e,i)||{}),e)if(b(n,a)){var s=n[a];_(s)&&(s=s(e[a],e,i)),s?g(s)?i[s]=e[a]:m(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ft.indexOf(a)?i[a]=lt(t,e[a],r):o||(i[a]=e[a]);return i}return _(e)&&(e=lt(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(st.returnValue)&&(e=st.returnValue(t,e)),pt(t,e,n,{},r)}function dt(t,e){if(b(st,t)){var n=st[t];return n?function(e,r){var o=n;_(n)&&(o=n(e)),e=pt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return W(t)?ht(t,a,o.returnValue,J(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var vt=Object.create(null),yt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(o),_(r)&&r(o)}}yt.forEach(function(t){vt[t]=_t(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new o.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function bt(){return mt(gt(),"$on",Array.prototype.slice.call(arguments))}function $t(){return mt(gt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return mt(gt(),"$once",Array.prototype.slice.call(arguments))}function Ot(){return mt(gt(),"$emit",Array.prototype.slice.call(arguments))}var At=Object.freeze({$on:bt,$off:$t,$once:wt,$emit:Ot});function St(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function kt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;St("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function xt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&kt(e),e}var jt=Object.freeze({getSubNVueById:xt,requireNativePlugin:St}),Dt=Page,Et=Component,Tt=/:/g,Pt=w(function(t){return A(t.replace(Tt,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Pt(n)].concat(o))}}}function It(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),Dt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Et(t)};var Nt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Rt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){b(n,e)&&(t[e]=n[e])})}function Bt(t,e){if(!e)return!0;if(o.default.options&&Array.isArray(o.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Bt(t,e)}):void 0}function Mt(t,e,n){e.forEach(function(e){Bt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ut(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Vt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function qt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ft(t,n){var r=t.data||{},o=t.methods||{};if("function"===typeof r)try{r=r.call(n)}catch(e){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",r)}else try{r=JSON.parse(JSON.stringify(r))}catch(e){}return m(r)||(r={}),Object.keys(o).forEach(function(t){-1!==n.__lifecycle_hooks__.indexOf(t)||b(r,t)||(r[t]=o[t])}),r}var Lt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function zt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&a.push(e({properties:Wt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){m(t)&&t.props&&a.push(e({properties:Wt(t.props,!0)}))}),a}function Jt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var o=r["default"];_(o)&&(o=o()),r.type=Jt(e,r.type),n[e]={type:-1!==Lt.indexOf(r.type)?r.type:null,value:o,observer:Ht(e)}}else{var i=Jt(e,r);n[e]={type:-1!==Lt.indexOf(i)?i:null,observer:Ht(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=$,t.preventDefault=$,t.target=t.target||{},b(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Kt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Xt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Kt(t,e)}),r}function Qt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Zt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Xt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Qt(t)):"string"===typeof t&&b(s,t)?u.push(s[t]):u.push(t)}),u}var Yt="~",te="^";function ee(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ne(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===te;r=s?r.slice(1):r;var u=r.charAt(0)===Yt;r=u?r.slice(1):r,a&&ee(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!_(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Zt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var re=["onShow","onHide","onError","onPageNotFound"];function oe(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(o.default.prototype.$store=t.$options.store),o.default.prototype.mpHost="app-plus",o.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=f({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Rt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Mt(i,re),i}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ae(n[o],e),r)return r}function se(t){return Behavior(t)}function ue(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function fe(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ae(this.$vm,r)),e||(e=this.$vm),o.parent=e}function pe(t){return oe(t,{mocks:ie,initRefs:fe})}var he=["onUniNViewMessage"];function de(t){var e=pe(t);return Mt(e,he),e}function ve(t){return App(de(t)),t}function ye(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,i=Ut(o.default,t),s=a(i,2),u=s[0],c=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Ft(c,o.default.prototype),behaviors:zt(c,se),properties:Wt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};qt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Vt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ne}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,u]}function _e(t){return ye(t,{isPage:ue,initRelation:ce})}function ge(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function be(t,e){e.isPage,e.initRelation;var n=ge(t);return Mt(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function $e(t){return be(t,{isPage:ue,initRelation:ce})}me.push.apply(me,Nt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Oe(t){var e=$e(t);return Mt(e.methods,we),e}function Ae(t){return Component(Oe(t))}function Se(t){return Component(ge(t))}ut.forEach(function(t){st[t]=!1}),ct.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var ke={};Object.keys(at).forEach(function(t){ke[t]=at[t]}),Object.keys(At).forEach(function(t){ke[t]=At[t]}),Object.keys(jt).forEach(function(t){ke[t]=Q(t,jt[t])}),Object.keys(wx).forEach(function(t){(b(wx,t)||b(st,t))&&(ke[t]=Q(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=ke,t.UniEmitter=At),wx.createApp=ve,wx.createPage=Ae,wx.createComponent=Se;var xe=ke,je=xe;n.default=je}).call(this,r("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},8211:function(t,e,n){},"921b":function(t,n,r){"use strict";(function(t){var n=r("8189");function o(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}var p=n.version,h="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",v=1800,y=300,_=10,g="__DC_STAT_UUID",m="__DC_UUID_VALUE";function b(){var n="";if("n"===A()){try{n=plus.runtime.getDCloudId()}catch(e){n=""}return n}try{n=t.getStorageSync(g)}catch(e){n=m}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(g,n)}catch(e){t.setStorageSync(g,m)}}return n}var $=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},O=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var e="";return"wx"!==A()&&"qq"!==A()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},k=function(){return"n"===A()?plus.runtime.version:""},x=function(){var t=A(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(e){var n=A(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},D="First__Visit__Time",E="Last__Visit__Time",T=function(){var e=t.getStorageSync(D),n=0;return e?n=e:(n=O(),t.setStorageSync(D,n),t.removeStorageSync(E)),n},P=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,O()),n},C="__page__residence__time",I=0,N=0,R=function(){return I=O(),"n"===A()&&t.setStorageSync(C,O()),I},B=function(){return N=O(),"n"===A()&&(I=t.getStorageSync(C)),N-I},M="Total__Visit__Count",U=function(){var e=t.getStorageSync(M),n=1;return e&&(n=e,n++),t.setStorageSync(M,n),n},V=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},q=0,F=0,L=function(){var t=(new Date).getTime();return q=t,F=0,t},H=function(){var t=(new Date).getTime();return F=t,t},z=function(t){var e=0;if(0!==q&&(e=F-q),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>y;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>v;return{residenceTime:e,overtime:r}}return{residenceTime:e}},J=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===A()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},W=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===A()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},K=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=r("4e2d").default,Q=r("15d3").default||r("15d3"),Z=t.getSystemInfoSync(),Y=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:b(),ut:A(),mpn:S(),ak:Q.appid,usv:p,v:k(),ch:x(),cn:"",pn:"",ct:"",t:O(),tt:"",p:"android"===Z.platform?"a":"i",brand:Z.brand||"",md:Z.model,sv:Z.system.replace(/(Android|iOS)\s/,""),mpsdk:Z.SDKVersion||"",mpv:Z.version||"",lang:Z.language,pr:Z.pixelRatio,ww:Z.windowWidth,wh:Z.windowHeight,sw:Z.screenWidth,sh:Z.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=z("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var n=z();L();var r=W(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=W(this),e=J();if(this._navigationBarTitle.config=X&&X.pages[e]&&X.pages[e].titleNView&&X.pages[e].titleNView.titleText||X&&X.pages[e]&&X.pages[e].navigationBarTitleText||"",this.__licationShow)return L(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var n=z("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}L()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=z("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=O(),this.statData.sc=j(t.scene),this.statData.fvts=T(),this.statData.lvts=P(),this.statData.tvc=U(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:O(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Q.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=O(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===A()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===A()&&t.setStorageSync("__UNI__STAT__DATA",a),!(B()<_)||n){var s=this._reportingRequestData;"n"===A()&&(s=t.getStorageSync("__UNI__STAT__DATA")),R();var u=[],c=[],f=[],l=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)l(h);u.push.apply(u,c.concat(f));var d={usv:p,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===A()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=$(V(t)).options;e.src=d+"?"+n}},{key:"sendEvent",value:function(t,e){K(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),tt=function(e){function n(){var e;return c(this,n),e=o(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return s(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,R(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(n)}}]),n}(Y),et=tt.getInstance(),nt=!1,rt={onLaunch:function(t){et.report(t,this)},onReady:function(){et.ready(this)},onLoad:function(t){if(et.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return et.interceptShare(!1),e.call(this,t)}}},onShow:function(){nt=!1,et.show(this)},onHide:function(){nt=!0,et.hide(this)},onUnload:function(){nt?nt=!1:et.hide(this)},onError:function(t){et.error(t)}};function ot(){var e=r("66fd");(e.default||e).mixin(rt),t.report=function(t,e){et.sendEvent(t,e)}}ot()}).call(this,r("6e42")["default"])},c8ba:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===typeof window&&(r=window)}t.exports=r}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/counter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/counter.js';

define('components/counter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/counter"], {
  "24b2": function b2(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      methods: {
        sub: function sub() {
          this.$emit("sub");
        },
        add: function add() {
          this.$emit("add");
        }
      },
      props: {
        goodsInfo: Object
      }
    };
    n.default = u;
  },
  "261d": function d(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  "360c": function c(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("24b2"),
        o = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = o.a;
  },
  "567e": function e(t, n, _e) {},
  "7dfe": function dfe(t, n, e) {
    "use strict";

    var u = e("567e"),
        o = e.n(u);
    o.a;
  },
  "896f": function f(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("261d"),
        o = e("360c");

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    e("7dfe");
    var c = e("2877"),
        f = Object(c["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/counter-create-component', {
  'components/counter-create-component': function componentsCounterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("896f"));
  }
}, [['components/counter-create-component']]]);
});
require('components/counter.js');
__wxRoute = 'components/popupSpec';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/popupSpec.js';

define('components/popupSpec.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/popupSpec"], {
  "1ae8": function ae8(t, n, e) {},
  "2cea": function cea(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var c = function c() {
      return e.e("components/counter").then(e.bind(null, "896f"));
    },
        u = {
      components: {
        counter: c
      },
      data: function data() {
        return {};
      },
      methods: {
        hideSpecifications: function hideSpecifications() {
          this.$emit("hideSpec");
        },
        handleSpecification: function handleSpecification(t) {
          this.$emit("setSelectSpec", t);
        },
        sub: function sub() {
          this.$emit("sub");
        },
        add: function add() {
          this.$emit("add");
        }
      },
      props: {
        spaceInfo: Object,
        goodsInfo: Object,
        goodsData: Object
      }
    };

    n.default = u;
  },
  ac6c: function ac6c(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("2cea"),
        u = e.n(c);

    for (var o in c) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  adc9: function adc9(t, n, e) {
    "use strict";

    var c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return c;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  bf74: function bf74(t, n, e) {
    "use strict";

    var c = e("1ae8"),
        u = e.n(c);
    u.a;
  },
  d439: function d439(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("adc9"),
        u = e("ac6c");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("bf74");
    var i = e("2877"),
        a = Object(i["a"])(u["default"], c["a"], c["b"], !1, null, null, null);
    n["default"] = a.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/popupSpec-create-component', {
  'components/popupSpec-create-component': function componentsPopupSpecCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d439"));
  }
}, [['components/popupSpec-create-component']]]);
});
require('components/popupSpec.js');
__wxRoute = 'components/status';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/status.js';

define('components/status.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/status"], {
  7691: function _(n, t, u) {
    "use strict";

    u.r(t);
    var a = u("a5cf"),
        c = u.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    t["default"] = c.a;
  },
  "88ed": function ed(n, t, u) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    u.d(t, "a", function () {
      return a;
    }), u.d(t, "b", function () {
      return c;
    });
  },
  "9b52": function b52(n, t, u) {
    "use strict";

    u.r(t);
    var a = u("88ed"),
        c = u("7691");

    for (var r in c) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return c[n];
        });
      }(r);
    }

    u("a387");
    var e = u("2877"),
        f = Object(e["a"])(c["default"], a["a"], a["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  a387: function a387(n, t, u) {
    "use strict";

    var a = u("c46f"),
        c = u.n(a);
    c.a;
  },
  a5cf: function a5cf(n, t, u) {},
  c46f: function c46f(n, t, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/status-create-component', {
  'components/status-create-component': function componentsStatusCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9b52"));
  }
}, [['components/status-create-component']]]);
});
require('components/status.js');
__wxRoute = 'pages/goods/goodsHeader';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goodsHeader.js';

define('pages/goods/goodsHeader.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goodsHeader"], {
  "3fb1": function fb1(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("fc65"),
        e = a("91d7");

    for (var c in e) {
      "default" !== c && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(c);
    }

    a("a47f");
    var r = a("2877"),
        o = Object(r["a"])(e["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  4029: function _(t, n, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        data: function data() {
          return {
            showback: !0
          };
        },
        onLoad: function onLoad() {},
        methods: {
          back: function back() {
            t.navigateBack();
          },
          showCart: function showCart() {
            t.switchTab({
              url: "../tabBar/cart/cart"
            });
          }
        }
      };
      n.default = a;
    }).call(this, a("6e42")["default"]);
  },
  "91d7": function d7(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("4029"),
        e = a.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    n["default"] = e.a;
  },
  "9d41": function d41(t, n, a) {},
  a47f: function a47f(t, n, a) {
    "use strict";

    var u = a("9d41"),
        e = a.n(u);
    e.a;
  },
  fc65: function fc65(t, n, a) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        e = [];

    a.d(n, "a", function () {
      return u;
    }), a.d(n, "b", function () {
      return e;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/goods/goodsHeader-create-component', {
  'pages/goods/goodsHeader-create-component': function pagesGoodsGoodsHeaderCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3fb1"));
  }
}, [['pages/goods/goodsHeader-create-component']]]);
});
require('pages/goods/goodsHeader.js');
__wxRoute = 'pages/tabBar/home/pageHeader';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/home/pageHeader.js';

define('pages/tabBar/home/pageHeader.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/home/pageHeader"], {
  1571: function _(t, e, a) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    a.d(e, "a", function () {
      return n;
    }), a.d(e, "b", function () {
      return u;
    });
  },
  "409e": function e(t, _e, a) {
    "use strict";

    a.r(_e);
    var n = a("1571"),
        u = a("84b8");

    for (var r in u) {
      "default" !== r && function (t) {
        a.d(_e, t, function () {
          return u[t];
        });
      }(r);
    }

    a("aded");
    var c = a("2877"),
        o = Object(c["a"])(u["default"], n["a"], n["b"], !1, null, null, null);
    _e["default"] = o.exports;
  },
  "84b8": function b8(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("af6a"),
        u = a.n(n);

    for (var r in n) {
      "default" !== r && function (t) {
        a.d(e, t, function () {
          return n[t];
        });
      }(r);
    }

    e["default"] = u.a;
  },
  aded: function aded(t, e, a) {
    "use strict";

    var n = a("eb20"),
        u = a.n(n);
    u.a;
  },
  af6a: function af6a(t, e, a) {
    "use strict";

    (function (t, _a) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function data() {
          return {
            city: "北京"
          };
        },
        methods: {
          a: function a() {
            var e = this;
            console.log(t(this.city, " at pages\\tabBar\\home\\pageHeader.vue:35")), _a.chooseLocation({
              success: function success(t) {
                e.city = t.address.substring(t.address.length - 6);
              }
            });
          }
        }
      };
      e.default = n;
    }).call(this, a("0de9")["default"], a("6e42")["default"]);
  },
  eb20: function eb20(t, e, a) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/tabBar/home/pageHeader-create-component', {
  'pages/tabBar/home/pageHeader-create-component': function pagesTabBarHomePageHeaderCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("409e"));
  }
}, [['pages/tabBar/home/pageHeader-create-component']]]);
});
require('pages/tabBar/home/pageHeader.js');

__wxRoute = 'pages/tabBar/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/home/home.js';

define('pages/tabBar/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"155d":function(t,n,e){"use strict";e.r(n);var o=e("9c0d"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},4121:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"6b80":function(t,n,e){"use strict";var o=e("d045"),a=e.n(o);a.a},9748:function(t,n,e){"use strict";(function(t){e("8211"),e("921b");o(e("66fd"));var n=o(e("d9f5"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"9c0d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return Promise.all([e.e("common/vendor"),e.e("pages/tabBar/home/pageHeader")]).then(e.bind(null,"409e"))},a={data:function(){return{swiperList:[],categoryList:[],promotion:[],goodsList:[],filterby:"all",page:1,size:6,loadingText:"正在加载....",currentSwiper:0}},components:{pageHeader:o},onLoad:function(){this.initData(),this.loadData()},methods:{handleGoods:function(n){t.navigateTo({url:"../../goods/goods?goodsInfo="+JSON.stringify(n)})},handlePromotion:function(n){t.showToast({title:n.title,icon:"none"})},handleCategory:function(n){t.navigateTo({url:"../../goods/goodsList?name="+n.name})},initData:function(){var t=this;this.request({url:"http://118.31.61.51:3001/mall_list",success:function(n){t.swiperList=n.data.swiperList,t.categoryList=n.data.categoryList,t.promotion=n.data.promotion}})},swiperChange:function(t){this.currentSwiper=t.detail.current},loadData:function(){var t=this;this.request({url:"http://118.31.61.51:3001/type_list/0/".concat(this.page,"/").concat(this.size),success:function(n){n.data.length>0?n.data.forEach(function(n){t.goodsList.push(n)}):t.loadingText="到底了"}})},onReachBottom:function(){this.page++,this.loadData()}}};n.default=a}).call(this,e("6e42")["default"])},d045:function(t,n,e){},d9f5:function(t,n,e){"use strict";e.r(n);var o=e("4121"),a=e("155d");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("6b80");var r=e("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports}},[["9748","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/home/home.js');
__wxRoute = 'pages/tabBar/category/caregort';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/category/caregort.js';

define('pages/tabBar/category/caregort.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/category/caregort"],{"0e82":function(t,e,n){"use strict";n.r(e);var a=n("9880"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"2ba9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},3899:function(t,e,n){"use strict";var a=n("a4a6"),o=n.n(a);o.a},"7d3d":function(t,e,n){"use strict";(function(t){n("8211"),n("921b");a(n("66fd"));var e=a(n("83ea"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"83ea":function(t,e,n){"use strict";n.r(e);var a=n("2ba9"),o=n("0e82");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("3899");var u=n("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},9880:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("pages/tabBar/home/pageHeader")]).then(n.bind(null,"409e"))},o={data:function(){return{categoryList:[],showCategoryIndex:0}},components:{pageHeader:a},onLoad:function(){this.initData()},methods:{handleCategoryList:function(e){t.navigateTo({url:"../../goods/goodsList?name="+e.name})},handleCategory:function(t){this.showCategoryIndex=t},initData:function(){var t=this;this.request({url:"http://118.31.61.51:3001/category",success:function(e){t.categoryList=e.data}})}}};e.default=o}).call(this,n("6e42")["default"])},a4a6:function(t,e,n){}},[["7d3d","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/category/caregort.js');
__wxRoute = 'pages/tabBar/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart/cart.js';

define('pages/tabBar/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{6989:function(e,t,s){"use strict";(function(e){s("8211"),s("921b");n(s("66fd"));var t=n(s("e6cb"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])},"74ca":function(e,t,s){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return s.e("components/counter").then(s.bind(null,"896f"))},c={components:{counter:i},data:function(){return{footerbottom:0,theIndex:null,oldIndex:null,goodsList:[],selectedList:[],isAllSelected:!1,sumPrice:"0.00"}},methods:{add:function(e){e.number++,this.sum()},sub:function(e){e.number<=1||(e.number--,this.sum())},handleCheckbox:function(e){e.selected=!e.selected;var t=this.selectedList.indexOf(e);t>-1?this.selectedList.splice(t,1):this.selectedList.push(e),this.selectedList.length==this.goodsList.length?this.isAllSelected=!0:this.isAllSelected=!1,this.sum()},handleSelectedAll:function(){var e=this;this.isAllSelected=!this.isAllSelected;var t=[];this.goodsList.forEach(function(s,n){s.selected=e.isAllSelected,t.push(s)}),this.selectedList=this.isAllSelected?t:[],this.sum()},sum:function(){var e=this;this.sumPrice=0,this.goodsList.forEach(function(t,s){t.selected&&(e.sumPrice=e.sumPrice+t.number*t.price)}),this.sumPrice=this.sumPrice.toFixed(2)},handleSingleDelete:function(t){e.getStorage({key:"goodsList",success:function(s){s.data.splice(s.data.indexOf(t),1),e.setStorageSync("goodsList",s.data)}}),this.goodsList.splice(this.goodsList.indexOf(t),1),this.selectedList.splice(this.selectedList.indexOf(t),1),this.oldIndex=null,this.theIndex=null,this.sum()},handleMulDelete:function(){while(this.selectedList.length>0)this.handleSingleDelete(this.selectedList[0]);this.selectedList=[],this.isAllSelected=!1,this.sum()},handleGoodsInfo:function(t){e.navigateTo({url:"../../goods/goods?goodsInfo="+JSON.stringify(t)})},handleTouchStart:function(e,t){event.touches.length>1||(this.initXY=[event.touches[0].pageX,event.touches[0].pageY])},handleTouchMove:function(e,t){if(!(event.touches.length>1)){var s=event.touches[0].pageX-this.initXY[0],n=event.touches[0].pageX-this.initXY[1];Math.abs(s)<5||Math.abs(n)>Math.abs(s)||(s<0?this.theIndex=e:(this.oldIndex=this.theIndex,this.theIndex=null))}},handleTouchEnd:function(e,t){console.log(n("end"," at pages\\tabBar\\cart\\cart.vue:211"))},handleConfirm:function(){this.selectedList.length<1?e.showToast({title:"请选择结算的商品",icon:"none"}):e.setStorage({key:"confirmList",data:this.selectedList,success:function(){e.navigateTo({url:"../../order/confirm"})}})}},onShow:function(){var t=this;e.getStorage({key:"goodsList",success:function(e){for(var s=0;s<e.data.length;s++)e.data[s].selected=!1;t.goodsList=e.data,t.selectedList=[],t.isAllSelected=!1,t.sumPrice="0.00"}})},onLoad:function(){}};t.default=c}).call(this,s("6e42")["default"],s("0de9")["default"])},"74ec":function(e,t,s){"use strict";var n=s("9057"),i=s.n(n);i.a},9057:function(e,t,s){},"92b3":function(e,t,s){"use strict";s.r(t);var n=s("74ca"),i=s.n(n);for(var c in n)"default"!==c&&function(e){s.d(t,e,function(){return n[e]})}(c);t["default"]=i.a},"9ecf":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];s.d(t,"a",function(){return n}),s.d(t,"b",function(){return i})},e6cb:function(e,t,s){"use strict";s.r(t);var n=s("9ecf"),i=s("92b3");for(var c in i)"default"!==c&&function(e){s.d(t,e,function(){return i[e]})}(c);s("74ec");var o=s("2877"),l=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports}},[["6989","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/cart/cart.js');
__wxRoute = 'pages/tabBar/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user/user.js';

define('pages/tabBar/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{"1fdb":function(t,n,e){"use strict";e.r(n);var a=e("85e7"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=u.a},"43a6":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"652a":function(t,n,e){"use strict";e.r(n);var a=e("43a6"),u=e("1fdb");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("7197");var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},7197:function(t,n,e){"use strict";var a=e("a810"),u=e.n(a);u.a},"7a81":function(t,n,e){"use strict";(function(t){e("8211"),e("921b");a(e("66fd"));var n=a(e("652a"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"85e7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{user:{username:"Wu Dongming",face:"/static/img/home/Avatar.jpg"}}},methods:{handleQRCode:function(){t.navigateTo({url:"./qrcode"})}}};n.default=e}).call(this,e("6e42")["default"])},a810:function(t,n,e){}},[["7a81","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/user/user.js');
__wxRoute = 'pages/goods/goodsList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goodsList.js';

define('pages/goods/goodsList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goodsList"],{"1c2c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"4f78":function(t,e,i){"use strict";(function(t){i("8211"),i("921b");n(i("66fd"));var e=n(i("fbf3"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"76b5":function(t,e,i){},ba04:function(t,e,i){"use strict";var n=i("76b5"),o=i.n(n);o.a},d4eb:function(t,e,i){"use strict";i.r(e);var n=i("e21e"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},e21e:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{goodsList:[],filterby:"all",name:"",page:1,size:6,loadingText:"正在加载....",filterByList:[{text:"全部",selected:!0,filterby:"all"},{text:"好货",selected:!1,filterby:"public"},{text:"热门",selected:!1,filterby:"hot"}]}},methods:{handleGoods:function(e){t.navigateTo({url:"./goods?goodsInfo="+JSON.stringify(e)})},handleSelect:function(t){for(var e=0;e<this.filterByList.length;e++)e!=t&&(this.filterByList[e].selected=!1);this.filterByList[t].selected=!0,this.filterby=this.filterByList[t].filterby,this.page=1,this.loadingText="加载中...",this.goodsList=[],this.loadData()},loadData:function(){var t=this;this.request({url:"http://118.31.61.51:3001/type_list/"+this.name+"/"+this.page+"/"+this.size,success:function(e){if(e.data.length<=6&&(t.loadingText="到底了"),e.data.length>0){if(e.data.forEach(function(e){t.goodsList.push(e)}),"public"==t.filterby){t.goodsList=[];var i=e.data.filter(function(t){return 1==t.public});return void i.forEach(function(e){t.goodsList.push(e)})}if("hot"==t.filterby){t.goodsList=[];i=e.data.filter(function(t){return 1==t.hot});return void i.forEach(function(e){t.goodsList.push(e)})}}else t.loadingText="到底了"}})},onLoad:function(e){this.name=e.name,t.setNavigationBarTitle({title:e.name}),this.loadData()},onPullDownRefresh:function(){var e=this;setTimeout(function(){e.page=1,e.loadingText="加载中...",e.goodsList=[],e.loadData(),t.stopPullDownRefresh()},1e3)},onReachBottom:function(){this.page++,this.loadData()}}};e.default=i}).call(this,i("6e42")["default"])},fbf3:function(t,e,i){"use strict";i.r(e);var n=i("1c2c"),o=i("d4eb");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("ba04");var s=i("2877"),l=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports}},[["4f78","common/runtime","common/vendor"]]]);
});
require('pages/goods/goodsList.js');
__wxRoute = 'pages/goods/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods.js';

define('pages/goods/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"04ef":function(o,n,t){},"4b43":function(o,n,t){"use strict";var e=t("04ef"),s=t.n(e);s.a},"590d":function(o,n,t){"use strict";(function(o,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=function(){return t.e("pages/goods/goodsHeader").then(t.bind(null,"3fb1"))},i=function(){return t.e("components/popupSpec").then(t.bind(null,"d439"))},c={components:{goodsHeader:s,popupSpec:i},data:function(){return{isKeep:!1,goodsData:{swiperList:[],spec:[],comment:[{face:"",content:"",username:""}],descriptionStr:""},goodsInfo:{name:"",price:"",number:"",spec:""},currentSwiper:0,spaceInfo:{showSpace:!1}}},onLoad:function(o){this.goodsInfo=JSON.parse(o.goodsInfo),this.initData()},methods:{add:function(){this.goodsInfo.number++},sub:function(){this.goodsInfo.number<=1||this.goodsInfo.number--},setSelectSpec:function(o){this.goodsInfo.spec=o},hideSpec:function(){this.spaceInfo.showSpace=!1},initData:function(){var o=this;this.request({url:"http://118.31.61.51:3001/goods",success:function(n){o.goodsData=n.data}})},swiperChange:function(o){this.currentSwiper=o.detail.current},handleRatings:function(){o.setStorageSync("comments",this.goodsData.comment),o.navigateTo({url:"./ratings"})},keep:function(){this.isKeep=!this.isKeep,this.isKeep&&o.showToast({icon:"success",title:"已收藏"})},joinCart:function(){var n=this;o.getStorage({key:"goodsList",success:function(o){var t=o.data,e=!1;t.forEach(function(o){o.goods_id==n.goodsInfo.goods_id&&o.spec==n.goodsInfo.spec&&(o.number+=n.goodsInfo.number,e=!0)}),e||(t.push(n.goodsInfo),n.setGoodsList(t))},fail:function(o){var t=[];t.push(n.goodsInfo),n.setGoodsList(t)}})},setGoodsList:function(n){o.setStorage({key:"goodsList",data:n,success:function(){o.showToast({icon:"success",title:"添加购物车成功"})}})},bandleBuy:function(){console.log(e(this.goodsInfo," at pages\\goods\\goods.vue:237"));var n=[];n.push(this.goodsInfo),o.setStorage({key:"confirmList",data:n,success:function(){o.navigateTo({url:"../order/confirm"})}})}}};n.default=c}).call(this,t("6e42")["default"],t("0de9")["default"])},"5b32":function(o,n,t){"use strict";t.r(n);var e=t("590d"),s=t.n(e);for(var i in e)"default"!==i&&function(o){t.d(n,o,function(){return e[o]})}(i);n["default"]=s.a},"99d9":function(o,n,t){"use strict";var e=function(){var o=this,n=o.$createElement;o._self._c;o._isMounted||(o.e0=function(n){o.spaceInfo.showSpace=!0})},s=[];t.d(n,"a",function(){return e}),t.d(n,"b",function(){return s})},b4d5:function(o,n,t){"use strict";(function(o){t("8211"),t("921b");e(t("66fd"));var n=e(t("f0cf"));function e(o){return o&&o.__esModule?o:{default:o}}o(n.default)}).call(this,t("6e42")["createPage"])},f0cf:function(o,n,t){"use strict";t.r(n);var e=t("99d9"),s=t("5b32");for(var i in s)"default"!==i&&function(o){t.d(n,o,function(){return s[o]})}(i);t("4b43");var c=t("2877"),u=Object(c["a"])(s["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports}},[["b4d5","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods.js');
__wxRoute = 'pages/goods/ratings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/ratings.js';

define('pages/goods/ratings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings"],{"3a24":function(t,e,n){},5468:function(t,e,n){"use strict";n.r(e);var i=n("b2b6"),o=n("dc1f");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("ffb9");var r=n("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"95c7":function(t,e,n){"use strict";(function(t){n("8211"),n("921b");i(n("66fd"));var e=i(n("5468"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b2b6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},c4be:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{showVideo:!0,videoSrc:"",videoContext:"",ratingsList:[],labelIndex:0,labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}]}},onLoad:function(){try{var e=t.getStorageSync("comments");e&&(this.ratingsList=e)}catch(i){console.log(n(i," at pages\\goods\\ratings.vue:111"))}},methods:{loadRatings:function(e,n){this.labelIndex=e;var i=t.getStorageSync("comments");i&&(this.ratingsList=i);var o=this.ratingsList.find(function(t){return t.grade==n.type});void 0!=o&&(this.ratingsList=[],this.ratingsList.push(o))},showBigImg:function(e,n){t.previewImage({current:e,urls:n})},playVideo:function(t){var e=this;this.videoSrc=t,this.$nextTick(function(){e.videoContext.requestFullScreen({direction:0})})},viideoControl:function(t){t.detail.fullScreen?this.videoContext.play():this.videoPause()},videoPause:function(){this.videoSrc=""}},onReady:function(){this.videoContext=t.createVideoContext("myVideo")}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},dc1f:function(t,e,n){"use strict";n.r(e);var i=n("c4be"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},ffb9:function(t,e,n){"use strict";var i=n("3a24"),o=n.n(i);o.a}},[["95c7","common/runtime","common/vendor"]]]);
});
require('pages/goods/ratings.js');
__wxRoute = 'pages/order/confirm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/confirm.js';

define('pages/order/confirm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirm"],{1570:function(t,e,o){"use strict";var n=o("75af"),r=o.n(n);r.a},"3b5b":function(t,e,o){"use strict";o.r(e);var n=o("428c"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},"3f28":function(t,e,o){"use strict";o.r(e);var n=o("433e"),r=o("3b5b");for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);o("1570");var c=o("2877"),s=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"428c":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{goodsList:[],goodsPrice:0,sumPrice:0,freight:12}},onShow:function(){var e=this;t.getStorage({key:"confirmList",success:function(t){e.goodsList=t.data;for(var o=0;o<e.goodsList.length;o++)e.goodsPrice=e.goodsPrice+e.goodsList[o].number*e.goodsList[o].price;e.sumPrice=e.goodsPrice+e.freight}})},filters:{toFixed:function(t){return parseFloat(t).toFixed(2)}},onBackPress:function(){this.clearOrder()},methods:{clearOrder:function(){var e=this;t.removeStorage({key:"confirmList",success:function(t){e.goodsList=[]}})}}};e.default=o}).call(this,o("6e42")["default"])},"433e":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t._f("toFixed")(t.goodsPrice)),n=t._f("toFixed")(t.freight),r=t._f("toFixed")(t.sumPrice);t.$mp.data=Object.assign({},{$root:{f0:o,f1:n,f2:r}})},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},"625f":function(t,e,o){"use strict";(function(t){o("8211"),o("921b");n(o("66fd"));var e=n(o("3f28"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"75af":function(t,e,o){}},[["625f","common/runtime","common/vendor"]]]);
});
require('pages/order/confirm.js');
__wxRoute = 'pages/tabBar/user/qrcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user/qrcode.js';

define('pages/tabBar/user/qrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/qrcode"],{1455:function(t,e,n){},"77bc":function(t,e,n){"use strict";n.r(e);var a=n("8504"),o=n("f9c7");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("babd");var c=n("2877"),r=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},8504:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},afc8:function(t,e,n){"use strict";(function(t){n("8211"),n("921b");a(n("66fd"));var e=a(n("77bc"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},babd:function(t,e,n){"use strict";var a=n("1455"),o=n.n(a);o.a},c623:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{savePhotos:"保存到相册",showBtn:!1}},onLoad:function(){this.showBtn=!0},methods:{handleSavePhotos:function(){var e=this;this.savePhotos="正在保存";var a=this.$mp.page.$getAppWebview(),o=new plus.nativeObj.Bitmap;this.$nextTick(function(){setTimeout(function(){a.draw(o,function(n){o.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(n){plus.gallery.save(n.target,function(n){t.showToast({title:"保存成功"}),e.savePhotos="保存到相册",o.clear()})})},function(t){console.log(n("保存图片失败"," at pages\\tabBar\\user\\qrcode.vue:54"))},function(t){console.log(n("bitmap绘制图片失败"," at pages\\tabBar\\user\\qrcode.vue:56"))})},200)})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},f9c7:function(t,e,n){"use strict";n.r(e);var a=n("c623"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a}},[["afc8","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/user/qrcode.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

