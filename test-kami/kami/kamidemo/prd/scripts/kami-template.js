(function(e){var t={id:"541bfb7b549627999e3defd0404b76bf",filename:"arttemplate.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){!function(){function T(e){return e.replace(y,"").replace(b,",").replace(w,"").replace(E,"").replace(S,"").split(x)}function N(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function C(e,t){function C(e){a+=e.split(/\n/).length-1;if(o){e=e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")}if(e){e=c[1]+N(e)+c[2]+"\n"}return e}function k(e){var r=a;if(s){e=s(e,t)}else if(n){e=e.replace(/\n/g,function(){a++;return"$line="+a+";"})}if(e.indexOf("=")===0){var i=/^=[=#]/.test(e);var o=null;if(u){if(i){o=false}else{o=true}}else{if(!i){o=false}else{o=true}}e=e.replace(/^=[=#]?|[\s;]*$/g,"");if(o){var l=e.replace(/\s*\([^\)]+\)/,"");if(!h[l]&&!/^(include|print)$/.test(l)){e="$escape("+e+")"}}else{e="$string("+e+")"}e=c[1]+e+c[2]}if(n){e="$line="+r+";"+e}m(T(e),function(e){if(!e||f[e]){return}var t;if(e==="print"){t=v}else if(e==="include"){t=g}else if(h[e]){t="$utils."+e}else if(p[e]){t="$helpers."+e}else{t="$data."+e}y+=e+"="+t+",";f[e]=true});return e+"\n"}var n=t.debug;var r=t.openTag;var i=t.closeTag;var s=t.parser;var o=t.compress;var u=t.escape;var a=1;var f={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1};var l="".trim;var c=l?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"];var d=l?"$out+=text;return $out;":"$out.push(text);";var v="function(){"+"var text=''.concat.apply('',arguments);"+d+"}";var g="function(filename,data){"+"data=data||$data;"+"var text=$utils.$include(filename,data,$filename);"+d+"}";var y="'use strict';"+"var $utils=this,$helpers=$utils.$helpers,"+(n?"$line=0,":"");var b=c[0];var w="return new String("+c[3]+");";m(e.split(r),function(e){e=e.split(i);var t=e[0];var n=e[1];if(e.length===1){b+=C(t)}else{b+=k(t);if(n){b+=C(n)}}});var E=y+b+w;if(n){E="try{"+E+"}catch(e){"+"throw {"+"filename:$filename,"+"name:'Render Error',"+"message:e.message,"+"line:$line,"+"source:"+N(e)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')"+"};"+"}"}try{var S=new Function("$data","$filename",E);S.prototype=h;return S}catch(x){x.temp="function anonymous($data,$filename) {"+E+"}";throw x}}var n=function(e,t){return typeof t==="string"?v(t,{filename:e}):s(e,t)};n.version="3.0.0";n.config=function(e,t){r[e]=t};var r=n.defaults={openTag:"{{#",closeTag:"}}",escape:true,cache:true,compress:false,parser:null};var i=n.cache={};n.render=function(e,t){return v(e,t)};var s=n.renderFile=function(e,t){var r=n.get(e)||d({filename:e,name:"Render Error",message:"Template not found"});return t?r(t):r};n.get=function(e){var t;if(i[e]){t=i[e]}else if(typeof document==="object"){var n=document.getElementById(e);if(n){var r=(n.value||n.innerHTML).replace(/^\s*|\s*$/g,"");t=v(r,{filename:e})}else{var r=e.replace(/^\s*|\s*$/g,"").replace(/<!--[\s\S]*?-->/g,"");t=v(r,{templateStr:e})}}return t};var o=function(e,t){if(typeof e!=="string"){t=typeof e;if(t==="number"){e+=""}else if(t==="function"){e=o(e.call(e))}else{e=""}}return e};var u={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};var a=function(e){return u[e]};var f=function(e){return o(e).replace(/&(?![\w#]+;)|[<>"']/g,a)};var l=Array.isArray||function(e){return{}.toString.call(e)==="[object Array]"};var c=function(e,t){var n,r;if(l(e)){for(n=0,r=e.length;n<r;n++){t.call(e,e[n],n,e)}}else{for(n in e){t.call(e,e[n],n)}}};var h=n.utils={$helpers:{},$include:s,$string:o,$escape:f,$each:c};n.helper=function(e,t){p[e]=t};var p=n.helpers=h.$helpers;n.onerror=function(e){var t="Template Error\n\n";for(var n in e){t+="<"+n+">\n"+e[n]+"\n\n"}if(typeof console==="object"){console.error(t)}};var d=function(e){n.onerror(e);return function(){return"{Template Error}"}};var v=n.compile=function(e,t){function a(n){try{return new o(n,s)+""}catch(r){if(!t.debug){t.debug=true;return v(e,t)(n)}return d(r)()}}t=t||{};for(var n in r){if(t[n]===undefined){t[n]=r[n]}}var s=t.filename;try{var o=C(e,t)}catch(u){u.filename=s||"anonymous";u.name="Syntax Error";return d(u)}a.prototype=o.prototype;a.toString=function(){return o.toString()};if(s&&t.cache){i[s]=a}return a};var m=h.$each;var g="break,case,catch,continue,debugger,default,delete,do,else,false"+",finally,for,function,if,in,instanceof,new,null,return,switch,this"+",throw,true,try,typeof,var,void,while,with"+",abstract,boolean,byte,char,class,const,double,enum,export,extends"+",final,float,goto,implements,import,int,interface,long,native"+",package,private,protected,public,short,static,super,synchronized"+",throws,transient,volatile"+",arguments,let,yield"+",undefined";var y=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g;var b=/[^\w$]+/g;var w=new RegExp(["\\b"+g.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g");var E=/^\d[^,]*|,\d[^,]*/g;var S=/^,+|,+$/g;var x=/^$|,+/;r.openTag="{{";r.closeTag="}}";var k=function(e,t){var n=t.split(":");var r=n.shift();var i=n.join(":")||"";if(i){i=", "+i}return"$helpers."+r+"("+e+i+")"};r.parser=function(e,t){e=e.replace(/^\s/,"");var r=e.split(" ");var i=r.shift();var s=r.join(" ");switch(i){case"if":e="if("+s+"){";break;case"else":if(r.shift()==="if"){r=" if("+r.join(" ")+")"}else{r=""}e="}else"+r+"{";break;case"/if":e="}";break;case"each":var o=r[0]||"$data";var u=r[1]||"as";var a=r[2]||"$value";var f=r[3]||"$index";var l=a+","+f;if(u!=="as"){o="[]"}e="$each("+o+",function("+l+"){";break;case"/each":e="});";break;case"echo":e="print("+s+");";break;case"print":case"include":e=i+"("+r.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(s)){var c=true;if(e.indexOf("#")===0){e=e.substr(1);c=false}var h=0;var p=e.split("|");var d=p.length;var v=p[h++];for(;h<d;h++){v=k(v,p[h])}e=(c?"=":"=#")+v}else if(n.helpers[i]){e="=#"+i+"("+r.join(",")+");"}else{e="="+e}break}return e};if(typeof define==="function"){define(function(){return n})}else if(typeof e!=="undefined"){t.exports=n}else{this.template=n}}()}(t.exports,t,e);e.____MODULES["541bfb7b549627999e3defd0404b76bf"]=t.exports})(this);(function(e){var t={id:"a7b332e3aae389b1d4ef919d43d23251",filename:"template.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){function s(e,t){e=e.replace(/^\s/,"");var n=e.split(/\s+/);var r=n.shift();var s=n.join(" ");switch(r){case"if":case"#if":e="if("+s+"){";break;case"else":case"#else":if(n.shift()==="if"){n=" if("+n.join(" ")+")"}else{n=""}e="}else"+n+"{";break;case"/if":e="}";break;case"each":case"#each":var o=n[0]||"$data";var u=n[1]||"as";var a=n[2]||"$value";var f=n[3]||"$index";var l=a+","+f;if(u!=="as"){o="[]"}e="$each("+o+",function("+l+"){";break;case"/each":e="});";break;case"echo":case"#echo":e="print("+s+");";break;case"print":case"include":case"#print":case"#include":e=r+"("+n.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(s)){var c=true;if(e.indexOf("#")===0){e=e.substr(1);c=false}var h=0;var p=e.split("|");var d=p.length;var v=p[h++];for(;h<d;h++){v=filtered(v,p[h])}e=(c?"=":"=#")+v}else if(i.helpers[r]){e="=#"+r+"("+n.join(",")+");"}else{e="="+e}break}return e}var i=e.____MODULES["541bfb7b549627999e3defd0404b76bf"];i.config("parser",s);i.config("escape",false);n.exports=i}(t.exports,t,e);e.____MODULES["a7b332e3aae389b1d4ef919d43d23251"]=t.exports})(this);(function(e){var t={id:"9e11d69af7743de93f8c257f13101434",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){n.exports=e.____MODULES["a7b332e3aae389b1d4ef919d43d23251"]}(t.exports,t,e);e.____MODULES["9e11d69af7743de93f8c257f13101434"]=t.exports})(this);(function(e){var t={id:"18bcb38a98b37932ce3c0648dbc6a870",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){var i={};i["template"]=e.____MODULES["9e11d69af7743de93f8c257f13101434"];n.exports=i["template"]}(t.exports,t,e);e.____MODULES["18bcb38a98b37932ce3c0648dbc6a870"]=t.exports})(this);(function(e){var t={id:"16c3fe61ac279dfb4f00330f6f540db7",filename:"kami-template.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){var i=e.____MODULES["18bcb38a98b37932ce3c0648dbc6a870"];var s=window.Kami||{};s.Template=i;window.Kami=s}(t.exports,t,e);e.____MODULES["16c3fe61ac279dfb4f00330f6f540db7"]=t.exports})(this)