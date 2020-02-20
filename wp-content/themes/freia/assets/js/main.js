!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
/*!
 * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function K(r){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},e=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.forEach(function(t){var e,n,a;e=r,a=i[n=t],n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a})}return r}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=function(){},e={},n={},a=null,o={mark:t,measure:t};try{"undefined"!=typeof window&&(e=window),"undefined"!=typeof document&&(n=document),"undefined"!=typeof MutationObserver&&(a=MutationObserver),"undefined"!=typeof performance&&(o=performance)}catch(t){}var c=(e.navigator||{}).userAgent,s=void 0===c?"":c,g=e,v=n,l=a,f=o,u=!!g.document,p=!!v.documentElement&&!!v.head&&"function"==typeof v.addEventListener&&"function"==typeof v.createElement,k=~s.indexOf("MSIE")||~s.indexOf("Trident/"),h="___FONT_AWESOME___",A=16,b="fa",y="svg-inline--fa",G="data-fa-i2svg",w="data-fa-pseudo-element",x="data-fa-pseudo-element-pending",C="data-prefix",O="data-icon",S="fontawesome-i2svg",P="async",N=["HTML","HEAD","STYLE","SCRIPT"],M=function(){try{return!0}catch(t){return!1}}(),z={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fa:"solid"},E={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab"},j="fa-layers-text",L=/Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,R={900:"fas",400:"far",normal:"far",300:"fal"},_=[1,2,3,4,5,6,7,8,9,10],T=_.concat([11,12,13,14,15,16,17,18,19,20]),I=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},F=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",Y.GROUP,Y.SWAP_OPACITY,Y.PRIMARY,Y.SECONDARY].concat(_.map(function(t){return"".concat(t,"x")})).concat(T.map(function(t){return"w-".concat(t)})),H=g.FontAwesomeConfig||{};if(v&&"function"==typeof v.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e,n=d(t,2),a=n[0],r=n[1],i=""===(e=function(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(a))||"false"!==e&&("true"===e||e);null!=i&&(H[r]=i)})}var D=K({},{familyPrefix:b,replacementClass:y,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},H);D.autoReplaceSvg||(D.observeMutations=!1);var J=K({},D);g.FontAwesomeConfig=J;var U=g||{};U[h]||(U[h]={}),U[h].styles||(U[h].styles={}),U[h].hooks||(U[h].hooks={}),U[h].shims||(U[h].shims=[]);var W=U[h],q=[],X=!1;function B(t){p&&(X?setTimeout(t,0):q.push(t))}p&&((X=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState))||v.addEventListener("DOMContentLoaded",function t(){v.removeEventListener("DOMContentLoaded",t),X=1,q.map(function(t){return t()})}));var V,Q="pending",Z="settled",$="fulfilled",tt="rejected",et=function(){},nt="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,at="undefined"==typeof setImmediate?setTimeout:setImmediate,rt=[];function it(){for(var t=0;t<rt.length;t++)rt[t][0](rt[t][1]);V=!(rt=[])}function ot(t,e){rt.push([t,e]),V||(V=!0,at(it,0))}function ct(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=$;try{a=r(a)}catch(t){ut(i,t)}}st(i,a)||(n===$&&lt(i,a),n===tt&&ut(i,a))}function st(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===i(n))){var t=n.then;if("function"==typeof t)return t.call(n,function(t){a||(a=!0,n===t?ft(e,t):lt(e,t))},function(t){a||(a=!0,ut(e,t))}),!0}}catch(t){return a||ut(e,t),!0}return!1}function lt(t,e){t!==e&&st(t,e)||ft(t,e)}function ft(t,e){t._state===Q&&(t._state=Z,t._data=e,ot(mt,t))}function ut(t,e){t._state===Q&&(t._state=Z,t._data=e,ot(pt,t))}function dt(t){t._then=t._then.forEach(ct)}function mt(t){t._state=$,dt(t)}function pt(t){t._state=tt,dt(t),!t._handled&&nt&&global.process.emit("unhandledRejection",t._data,t)}function ht(t){global.process.emit("rejectionHandled",t)}function gt(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof gt==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){ut(e,t)}try{t(function(t){lt(e,t)},n)}catch(t){n(t)}}(t,this)}gt.prototype={constructor:gt,_state:Q,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(et),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===tt&&nt&&ot(ht,this)),this._state===$||this._state===tt?ot(ct,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},gt.all=function(c){if(!Array.isArray(c))throw new TypeError("You must pass an array to Promise.all().");return new gt(function(n,t){var a=[],r=0;function e(e){return r++,function(t){a[e]=t,--r||n(a)}}for(var i,o=0;o<c.length;o++)(i=c[o])&&"function"==typeof i.then?i.then(e(o),t):a[o]=i;r||n(a)})},gt.race=function(r){if(!Array.isArray(r))throw new TypeError("You must pass an array to Promise.race().");return new gt(function(t,e){for(var n,a=0;a<r.length;a++)(n=r[a])&&"function"==typeof n.then?n.then(t,e):t(n)})},gt.resolve=function(e){return e&&"object"===i(e)&&e.constructor===gt?e:new gt(function(t){t(e)})},gt.reject=function(n){return new gt(function(t,e){e(n)})};var vt="function"==typeof Promise?Promise:gt,bt=A,yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wt(t){if(t&&p){var e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=v.head.childNodes,a=null,r=n.length-1;-1<r;r--){var i=n[r],o=(i.tagName||"").toUpperCase();-1<["STYLE","LINK"].indexOf(o)&&(a=i)}return v.head.insertBefore(e,a),t}}var xt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var t=12,e="";0<t--;)e+=xt[62*Math.random()|0];return e}function At(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ct(t){return t.classList?At(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ot(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~F.indexOf(n))?null:i}function St(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pt(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e],";")},"")}function Nt(t){return t.size!==yt.size||t.x!==yt.x||t.y!==yt.y||t.rotate!==yt.rotate||t.flipX||t.flipY}function Mt(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var zt={x:0,y:0,width:"100%",height:"100%"};function Et(t){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jt(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,c=t.symbol,s=t.title,l=t.extra,f=t.watchable,u=void 0!==f&&f,d=a.found?a:n,m=d.width,p=d.height,h="fa-w-".concat(Math.ceil(m/p*16)),g=[J.replacementClass,i?"".concat(J.familyPrefix,"-").concat(i):"",h].filter(function(t){return-1===l.classes.indexOf(t)}).concat(l.classes).join(" "),v={children:[],attributes:K({},l.attributes,{"data-prefix":r,"data-icon":i,class:g,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(p)})};u&&(v.attributes[G]=""),s&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(kt())},children:[s]});var b,y,w,x,k,A,C,O,S,P,N,M,z,E,j,L,R,_,T,I,Y,F,H,D,U,W,q=K({},v,{prefix:r,iconName:i,main:n,mask:a,transform:o,symbol:c,styles:l.styles}),X=a.found&&n.found?(w=(b=q).children,x=b.attributes,k=b.main,A=b.mask,C=b.transform,O=k.width,S=k.icon,P=A.width,N=A.icon,M=Mt({transform:C,containerWidth:P,iconWidth:O}),z={tag:"rect",attributes:K({},zt,{fill:"white"})},E=S.children?{children:S.children.map(Et)}:{},j={tag:"g",attributes:K({},M.inner),children:[Et(K({tag:S.tag,attributes:K({},S.attributes,M.path)},E))]},L={tag:"g",attributes:K({},M.outer),children:[j]},R="mask-".concat(kt()),_="clip-".concat(kt()),T={tag:"mask",attributes:K({},zt,{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,L]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:(y=N,"g"===y.tag?y.children:[y])},T]},w.push(I,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(R,")")},zt)}),{children:w,attributes:x}):function(t){var e=t.children,n=t.attributes,a=t.main,r=t.transform,i=Pt(t.styles);if(0<i.length&&(n.style=i),Nt(r)){var o=Mt({transform:r,containerWidth:a.width,iconWidth:a.width});e.push({tag:"g",attributes:K({},o.outer),children:[{tag:"g",attributes:K({},o.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:K({},a.icon.attributes,o.path)}]}]})}else e.push(a.icon);return{children:e,attributes:n}}(q),B=X.children,V=X.attributes;return q.children=B,q.attributes=V,c?(F=(Y=q).prefix,H=Y.iconName,D=Y.children,U=Y.attributes,W=Y.symbol,[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K({},U,{id:!0===W?"".concat(F,"-").concat(J.familyPrefix,"-").concat(H):W}),children:D}]}]):function(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Nt(o)&&n.found&&!a.found){var c=n.width/n.height/2,s=.5;r.style=Pt(K({},i,{"transform-origin":"".concat(c+o.x/16,"em ").concat(s+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}(q)}function Lt(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,c=t.watchable,s=void 0!==c&&c,l=K({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});s&&(l[G]="");var f,u,d,m,p,h,g,v,b,y=K({},o.styles);Nt(r)&&(y.transform=(u=(f={transform:r,startCentered:!0,width:n,height:a}).transform,d=f.width,m=void 0===d?A:d,p=f.height,h=void 0===p?A:p,g=f.startCentered,b="",b+=(v=void 0!==g&&g)&&k?"translate(".concat(u.x/bt-m/2,"em, ").concat(u.y/bt-h/2,"em) "):v?"translate(calc(-50% + ".concat(u.x/bt,"em), calc(-50% + ").concat(u.y/bt,"em)) "):"translate(".concat(u.x/bt,"em, ").concat(u.y/bt,"em) "),b+="scale(".concat(u.size/bt*(u.flipX?-1:1),", ").concat(u.size/bt*(u.flipY?-1:1),") "),b+="rotate(".concat(u.rotate,"deg) ")),y["-webkit-transform"]=y.transform);var w=Pt(y);0<w.length&&(l.style=w);var x=[];return x.push({tag:"span",attributes:l,children:[e]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}var Rt=function(){},_t=J.measurePerformance&&f&&f.mark&&f.measure?f:{mark:Rt,measure:Rt},Tt='FA "5.11.2"',It=function(t){_t.mark("".concat(Tt," ").concat(t," ends")),_t.measure("".concat(Tt," ").concat(t),"".concat(Tt," ").concat(t," begins"),"".concat(Tt," ").concat(t," ends"))},Yt={begin:function(t){return _t.mark("".concat(Tt," ").concat(t," begins")),function(){return It(t)}},end:It},Ft=function(t,e,n,a){var r,i,o,c,s,l=Object.keys(t),f=l.length,u=void 0!==a?(c=e,s=a,function(t,e,n,a){return c.call(s,t,e,n,a)}):e;for(o=void 0===n?(r=1,t[l[0]]):(r=0,n);r<f;r++)o=u(o,t[i=l[r]],i,t);return o};function Ht(t){for(var e="",n=0;n<t.length;n++){e+=("000"+t.charCodeAt(n).toString(16)).slice(-4)}return e}var Dt=W.styles,Ut=W.shims,Wt={},qt={},Xt={},Bt=function(){var t=function(a){return Ft(Dt,function(t,e,n){return t[n]=Ft(e,a,{}),t},{})};Wt=t(function(t,e,n){return e[3]&&(t[e[3]]=n),t}),qt=t(function(e,t,n){var a=t[2];return e[n]=n,a.forEach(function(t){e[t]=n}),e});var i="far"in Dt;Xt=Ft(Ut,function(t,e){var n=e[0],a=e[1],r=e[2];return"far"!==a||i||(a="fas"),t[n]={prefix:a,iconName:r},t},{})};function Vt(t,e){return(Wt[t]||{})[e]}Bt();var Kt=W.styles,Gt=function(){return{prefix:null,iconName:null,rest:[]}};function Jt(t){return t.reduce(function(t,e){var n=Ot(J.familyPrefix,e);if(Kt[e])t.prefix=e;else if(J.autoFetchSvg&&-1<["fas","far","fal","fad","fab","fa"].indexOf(e))t.prefix=e;else if(n){var a="fa"===t.prefix?Xt[n]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==J.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},Gt())}function Qt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Zt(t){var n,e=t.tag,a=t.attributes,r=void 0===a?{}:a,i=t.children,o=void 0===i?[]:i;return"string"==typeof t?St(t):"<".concat(e," ").concat((n=r,Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(St(n[e]),'" ')},"").trim()),">").concat(o.map(Zt).join(""),"</").concat(e,">")}var $t=function(){};function te(t){return"string"==typeof(t.getAttribute?t.getAttribute(G):null)}var ee={replace:function(t){var e=t[0],n=t[1].map(function(t){return Zt(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(J.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- ".concat(e.outerHTML," --\x3e"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~Ct(e).indexOf(J.replacementClass))return ee.replace(t);var a=new RegExp("".concat(J.familyPrefix,"-.*"));delete n[0].attributes.style,delete n[0].attributes.id;var r=n[0].attributes.class.split(" ").reduce(function(t,e){return e===J.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var i=n.map(function(t){return Zt(t)}).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(G,""),e.innerHTML=i}};function ne(t){t()}function ae(n,t){var a="function"==typeof t?t:$t;if(0===n.length)a();else{var e=ne;J.mutateApproach===P&&(e=g.requestAnimationFrame||ne),e(function(){var t=!0===J.autoReplaceSvg?ee.replace:ee[J.autoReplaceSvg]||ee.replace,e=Yt.begin("mutate");n.map(t),e(),a()})}}var re=!1;function ie(){re=!1}var oe=null;function ce(t){if(l&&J.observeMutations){var r=t.treeCallback,i=t.nodeCallback,o=t.pseudoElementsCallback,e=t.observeMutationsRoot,n=void 0===e?v:e;oe=new l(function(t){re||At(t).forEach(function(t){if("childList"===t.type&&0<t.addedNodes.length&&!te(t.addedNodes[0])&&(J.searchPseudoElements&&o(t.target),r(t.target)),"attributes"===t.type&&t.target.parentNode&&J.searchPseudoElements&&o(t.target.parentNode),"attributes"===t.type&&te(t.target)&&~I.indexOf(t.attributeName))if("class"===t.attributeName){var e=Jt(Ct(t.target)),n=e.prefix,a=e.iconName;n&&t.target.setAttribute("data-prefix",n),a&&t.target.setAttribute("data-icon",a)}else i(t.target)})}),p&&oe.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function se(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Jt(Ct(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&1<i.length?o.iconName=(e=o.prefix,n=t.innerText,(qt[e]||{})[n]):o.prefix&&1===i.length&&(o.iconName=Vt(o.prefix,Ht(t.innerText))),o}var le=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t},e):e};function fe(t){var e,n,a,r,i,o,c,s=se(t),l=s.iconName,f=s.prefix,u=s.rest,d=(e=t.getAttribute("style"),n=[],e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&0<r.length&&(t[a]=r.join(":").trim()),t},{})),n),m=le(t.getAttribute("data-fa-transform")),p=null!==(a=t.getAttribute("data-fa-symbol"))&&(""===a||a),h=(i=At((r=t).attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),o=r.getAttribute("title"),J.autoA11y&&(o?i["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(kt()):(i["aria-hidden"]="true",i.focusable="false")),i),g=(c=t.getAttribute("data-fa-mask"))?Jt(c.split(" ").map(function(t){return t.trim()})):Gt();return{iconName:l,title:t.getAttribute("title"),prefix:f,transform:m,symbol:p,mask:g,extra:{classes:u,styles:d,attributes:h}}}function ue(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}(ue.prototype=Object.create(Error.prototype)).constructor=ue;var de={fill:"currentColor"},me={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},pe={tag:"path",attributes:K({},de,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},he=K({},me,{attributeName:"opacity"}),ge={tag:"g",children:[pe,{tag:"circle",attributes:K({},de,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:K({},me,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K({},he,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:K({},de,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:K({},he,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:K({},de,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K({},he,{values:"0;0;1;1;0;0;"})}]}]},ve=W.styles;function be(t){var e=t[0],n=t[1],a=d(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(J.familyPrefix,"-").concat(Y.GROUP)},children:[{tag:"path",attributes:{class:"".concat(J.familyPrefix,"-").concat(Y.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(J.familyPrefix,"-").concat(Y.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}function ye(a,r){return new vt(function(t,e){var n={found:!1,width:512,height:512,icon:ge};if(a&&r&&ve[r]&&ve[r][a])return t(be(ve[r][a]));"object"===i(g.FontAwesomeKitConfig)&&"string"==typeof window.FontAwesomeKitConfig.token&&g.FontAwesomeKitConfig.token,a&&r&&!J.showMissingIcons?e(new ue("Icon is missing for prefix ".concat(r," with icon name ").concat(a))):t(n)})}var we=W.styles;function xe(t){var i,e,o,c,s,l,f,n,u,a=fe(t);return~a.extra.classes.indexOf(j)?function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(k){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return J.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),vt.resolve([t,Lt({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}(t,a):(i=t,o=(e=a).iconName,c=e.title,s=e.prefix,l=e.transform,f=e.symbol,n=e.mask,u=e.extra,new vt(function(r,t){vt.all([ye(o,s),ye(n.iconName,n.prefix)]).then(function(t){var e=d(t,2),n=e[0],a=e[1];r([i,jt({icons:{main:n,mask:a},prefix:s,iconName:o,transform:l,symbol:f,mask:a,title:c,extra:u,watchable:!0})])})}))}function ke(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(p){var e=v.documentElement.classList,a=function(t){return e.add("".concat(S,"-").concat(t))},r=function(t){return e.remove("".concat(S,"-").concat(t))},i=J.autoFetchSvg?Object.keys(z):Object.keys(we),o=[".".concat(j,":not([").concat(G,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(G,"])")})).join(", ");if(0!==o.length){var c=[];try{c=At(t.querySelectorAll(o))}catch(t){}if(0<c.length){a("pending"),r("complete");var s=Yt.begin("onTree"),l=c.reduce(function(t,e){try{var n=xe(e);n&&t.push(n)}catch(t){M||t instanceof ue&&console.error(t)}return t},[]);return new vt(function(e,t){vt.all(l).then(function(t){ae(t,function(){a("active"),a("complete"),r("pending"),"function"==typeof n&&n(),s(),e()})}).catch(function(){s(),t()})})}}}}function Ae(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;xe(t).then(function(t){t&&ae([t],e)})}function Ce(m,p){var h="".concat(x).concat(p.replace(":","-"));return new vt(function(a,t){if(null!==m.getAttribute(h))return a();var e=At(m.children).filter(function(t){return t.getAttribute(w)===p})[0],n=g.getComputedStyle(m,p),r=n.getPropertyValue("font-family").match(L),i=n.getPropertyValue("font-weight");if(e&&!r)return m.removeChild(e),a();if(r){var o=n.getPropertyValue("content"),c=~["Solid","Regular","Light","Duotone","Brands"].indexOf(r[1])?E[r[1].toLowerCase()]:R[i],s=Ht(3===o.length?o.substr(1,1):o),l=Vt(c,s),f=l;if(!l||e&&e.getAttribute(C)===c&&e.getAttribute(O)===f)a();else{m.setAttribute(h,f),e&&m.removeChild(e);var u={iconName:null,title:null,prefix:null,transform:yt,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}},d=u.extra;d.attributes[w]=p,ye(l,c).then(function(t){var e=jt(K({},u,{icons:{main:t,mask:Gt()},prefix:c,iconName:f,extra:d,watchable:!0})),n=v.createElement("svg");":before"===p?m.insertBefore(n,m.firstChild):m.appendChild(n),n.outerHTML=e.map(function(t){return Zt(t)}).join("\n"),m.removeAttribute(h),a()}).catch(t)}}else a()})}function Oe(t){return vt.all([Ce(t,":before"),Ce(t,":after")])}function Se(t){return!(t.parentNode===document.head||~N.indexOf(t.tagName.toUpperCase())||t.getAttribute(w)||t.parentNode&&"svg"===t.parentNode.tagName)}function Pe(r){if(p)return new vt(function(t,e){var n=At(r.querySelectorAll("*")).filter(Se).map(Oe),a=Yt.begin("searchPseudoElements");re=!0,vt.all(n).then(function(){a(),ie(),t()}).catch(function(){a(),ie(),e()})})}var Ne="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";function Me(){var t=b,e=y,n=J.familyPrefix,a=J.replacementClass,r=Ne;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(a))}return r}function ze(){J.autoAddCss&&!_e&&(wt(Me()),_e=!0)}function Ee(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return Zt(t)})}}),Object.defineProperty(e,"node",{get:function(){if(p){var t=v.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function je(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return Qt(Re.definitions,n,a)||Qt(W.styles,n,a)}var Le,Re=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n,a;return e=t,(n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(t){e.definitions[t]=K({},e.definitions[t]||{},r[t]),function t(e,a){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==n&&n,i=Object.keys(a).reduce(function(t,e){var n=a[e];return n.icon?t[n.iconName]=n.icon:t[e]=n,t},{});"function"!=typeof W.hooks.addPack||r?W.styles[e]=K({},W.styles[e]||{},i):W.hooks.addPack(e,i),"fas"===e&&t("fa",a)}(t,r[t]),Bt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,t){var o=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(o).map(function(t){var e=o[t],n=e.prefix,a=e.iconName,r=e.icon;i[n]||(i[n]={}),i[n][a]=r}),i}}])&&r(e.prototype,n),a&&r(e,a),t}()),_e=!1,Te={i2svg:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(p){ze();var e=t.node,n=void 0===e?v:e,a=t.callback,r=void 0===a?function(){}:a;return J.searchPseudoElements&&Pe(n),ke(n,r)}return vt.reject("Operation requires a DOM of some kind.")},css:Me,insertCss:function(){_e||(wt(Me()),_e=!0)},watch:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===J.autoReplaceSvg&&(J.autoReplaceSvg=!0),J.observeMutations=!0,B(function(){Fe({autoReplaceSvgRoot:e}),ce({treeCallback:ke,nodeCallback:Ae,pseudoElementsCallback:Pe,observeMutationsRoot:n})})}},Ie=(Le=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?yt:n,r=e.symbol,i=void 0!==r&&r,o=e.mask,c=void 0===o?null:o,s=e.title,l=void 0===s?null:s,f=e.classes,u=void 0===f?[]:f,d=e.attributes,m=void 0===d?{}:d,p=e.styles,h=void 0===p?{}:p;if(t){var g=t.prefix,v=t.iconName,b=t.icon;return Ee(K({type:"icon"},t),function(){return ze(),J.autoA11y&&(l?m["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(kt()):(m["aria-hidden"]="true",m.focusable="false")),jt({icons:{main:be(b),mask:c?be(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:K({},yt,a),symbol:i,title:l,extra:{attributes:m,styles:h,classes:u}})})}},function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:je(t||{}),a=e.mask;return a&&(a=(a||{}).icon?a:je(a||{})),Le(n,K({},e,{mask:a}))}),Ye={noAuto:function(){J.autoReplaceSvg=!1,J.observeMutations=!1,oe&&oe.disconnect()},config:J,dom:Te,library:Re,parse:{transform:function(t){return le(t)}},findIconDefinition:je,icon:Ie,text:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?yt:n,r=e.title,i=void 0===r?null:r,o=e.classes,c=void 0===o?[]:o,s=e.attributes,l=void 0===s?{}:s,f=e.styles,u=void 0===f?{}:f;return Ee({type:"text",content:t},function(){return ze(),Lt({content:t,transform:K({},yt,a),title:i,extra:{attributes:l,styles:u,classes:["".concat(J.familyPrefix,"-layers-text")].concat(m(c))}})})},counter:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,i=void 0===r?[]:r,o=e.attributes,c=void 0===o?{}:o,s=e.styles,l=void 0===s?{}:s;return Ee({type:"counter",content:t},function(){return ze(),function(t){var e=t.content,n=t.title,a=t.extra,r=K({},a.attributes,n?{title:n}:{},{class:a.classes.join(" ")}),i=Pt(a.styles);0<i.length&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:t.toString(),title:a,extra:{attributes:c,styles:l,classes:["".concat(J.familyPrefix,"-layers-counter")].concat(m(i))}})})},layer:function(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).classes,n=void 0===e?[]:e;return Ee({type:"layer"},function(){ze();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(J.familyPrefix,"-layers")].concat(m(n)).join(" ")},children:e}]})},toHtml:Zt},Fe=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?v:t;(0<Object.keys(W.styles).length||J.autoFetchSvg)&&p&&J.autoReplaceSvg&&Ye.dom.i2svg({node:e})};!function(t){try{t()}catch(t){if(!M)throw t}}(function(){u&&(g.FontAwesome||(g.FontAwesome=Ye),B(function(){Fe(),ce({treeCallback:ke,nodeCallback:Ae,pseudoElementsCallback:Pe})})),W.hooks=K({},W.hooks,{addPack:function(t,e){W.styles[t]=K({},W.styles[t]||{},e),Bt(),Fe()},addShims:function(t){var e;(e=W.shims).push.apply(e,m(t)),Bt(),Fe()}})})}();
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!

 * fullPage 3.0.7

 * https://github.com/alvarotrigo/fullPage.js

 *

 * @license GPLv3 for open source use only

 * or Fullpage Commercial License for commercial use

 * http://alvarotrigo.com/fullPage/pricing/

 *

 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo

 */

(function( root, window, document, factory, undefined) {

    if( typeof define === 'function' && define.amd ) {

        // AMD. Register as an anonymous module.

        define( function() {

            root.fullpage = factory(window, document);

            return root.fullpage;

        } );

    } else if( typeof exports === 'object' ) {

        // Node. Does not work with strict CommonJS.

        module.exports = factory(window, document);

    } else {

        // Browser globals.

        window.fullpage = factory(window, document);

    }

}(this, window, document, function(window, document){

    'use strict';



    // keeping central set of classnames and selectors

    var WRAPPER =               'fullpage-wrapper';

    var WRAPPER_SEL =           '.' + WRAPPER;



    // slimscroll

    var SCROLLABLE =            'fp-scrollable';

    var SCROLLABLE_SEL =        '.' + SCROLLABLE;



    // util

    var RESPONSIVE =            'fp-responsive';

    var NO_TRANSITION =         'fp-notransition';

    var DESTROYED =             'fp-destroyed';

    var ENABLED =               'fp-enabled';

    var VIEWING_PREFIX =        'fp-viewing';

    var ACTIVE =                'active';

    var ACTIVE_SEL =            '.' + ACTIVE;

    var COMPLETELY =            'fp-completely';

    var COMPLETELY_SEL =        '.' + COMPLETELY;



    // section

    var SECTION_DEFAULT_SEL =   '.section';

    var SECTION =               'fp-section';

    var SECTION_SEL =           '.' + SECTION;

    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;

    var TABLE_CELL =            'fp-tableCell';

    var TABLE_CELL_SEL =        '.' + TABLE_CELL;

    var AUTO_HEIGHT =           'fp-auto-height';

    var AUTO_HEIGHT_SEL =       '.' + AUTO_HEIGHT;

    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';

    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;

    var NORMAL_SCROLL =         'fp-normal-scroll';

    var NORMAL_SCROLL_SEL =     '.' + NORMAL_SCROLL;



    // section nav

    var SECTION_NAV =           'fp-nav';

    var SECTION_NAV_SEL =       '#' + SECTION_NAV;

    var SECTION_NAV_TOOLTIP =   'fp-tooltip';

    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;

    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';



    // slide

    var SLIDE_DEFAULT_SEL =     '.slide';

    var SLIDE =                 'fp-slide';

    var SLIDE_SEL =             '.' + SLIDE;

    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;

    var SLIDES_WRAPPER =        'fp-slides';

    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;

    var SLIDES_CONTAINER =      'fp-slidesContainer';

    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;

    var TABLE =                 'fp-table';



    // slide nav

    var SLIDES_NAV =            'fp-slidesNav';

    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;

    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';

    var SLIDES_ARROW =          'fp-controlArrow';

    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;

    var SLIDES_PREV =           'fp-prev';

    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;

    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;

    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;

    var SLIDES_NEXT =           'fp-next';

    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;

    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;

    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;



    function initialise(containerSelector, options) {

        var isOK = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$').test(options['li'+'cen'+'seK' + 'e' + 'y']) || document.domain.indexOf('al'+'varotri' +'go' + '.' + 'com') > -1;

        isOK = true;

        // cache common elements

        var $htmlBody = $('html, body');

        var $html = $('html')[0];

        var $body = $('body')[0];



        //only once my friend!

        if(hasClass($html, ENABLED)){ displayWarnings(); return; }



        var FP = {};



        // Creating some defaults, extending them with any options that were provided

        options = deepExtend({

            //navigation

            menu: false,

            anchors:[],

            lockAnchors: false,

            navigation: false,

            navigationPosition: 'right',

            navigationTooltips: [],

            showActiveTooltip: false,

            slidesNavigation: false,

            slidesNavPosition: 'bottom',

            scrollBar: false,

            hybrid: false,



            //scrolling

            css3: true,

            scrollingSpeed: 700,

            autoScrolling: true,

            fitToSection: true,

            fitToSectionDelay: 1000,

            easing: 'easeInOutCubic',

            easingcss3: 'ease',

            loopBottom: false,

            loopTop: false,

            loopHorizontal: true,

            continuousVertical: false,

            continuousHorizontal: false,

            scrollHorizontally: false,

            interlockedSlides: false,

            dragAndMove: false,

            offsetSections: false,

            resetSliders: false,

            fadingEffect: false,

            normalScrollElements: null,

            scrollOverflow: false,

            scrollOverflowReset: false,

            scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,

            scrollOverflowOptions: null,

            touchSensitivity: 5,

            touchWrapper: typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector,

            bigSectionsDestination: null,



            //Accessibility

            keyboardScrolling: true,

            animateAnchor: true,

            recordHistory: true,



            //design

            controlArrows: true,

            controlArrowColor: '#fff',

            verticalCentered: true,

            sectionsColor : [],

            paddingTop: 0,

            paddingBottom: 0,

            fixedElements: null,

            responsive: 0, //backwards compabitility with responsiveWiddth

            responsiveWidth: 0,

            responsiveHeight: 0,

            responsiveSlides: false,

            parallax: false,

            parallaxOptions: {

                type: 'reveal',

                percentage: 62,

                property: 'translate'

            },

            cards: false,

            cardsOptions: {

                perspective: 100,

                fadeContent: true,

                fadeBackground: true

            },



            //Custom selectors

            sectionSelector: SECTION_DEFAULT_SEL,

            slideSelector: SLIDE_DEFAULT_SEL,



            //events

            v2compatible: false,

            afterLoad: null,

            onLeave: null,

            afterRender: null,

            afterResize: null,

            afterReBuild: null,

            afterSlideLoad: null,

            onSlideLeave: null,

            afterResponsive: null,



            lazyLoading: true

        }, options);



        //flag to avoid very fast sliding for landscape sliders

        var slideMoving = false;



        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);

        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

        var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector;

        var windowsHeight = getWindowHeight();

        var windowsWidth = getWindowWidth();

        var isResizing = false;

        var isWindowFocused = true;

        var lastScrolledDestiny;

        var lastScrolledSlide;

        var canScroll = true;

        var scrollings = [];

        var controlPressed;

        var startingSection;

        var isScrollAllowed = {};

        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };

        isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);

        var MSPointer = getMSPointer();

        var events = {

            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,

            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down

        };

        var scrollBarHandler;



        // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

        var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';



        //cheks for passive event support

        var g_supportsPassive = false;

        try {

          var opts = Object.defineProperty({}, 'passive', {

            get: function() {

              g_supportsPassive = true;

            }

          });

          window.addEventListener("testPassive", null, opts);

          window.removeEventListener("testPassive", null, opts);

        } catch (e) {}



        //timeouts

        var resizeId;

        var resizeHandlerId;

        var afterSectionLoadsId;

        var afterSlideLoadsId;

        var scrollId;

        var scrollId2;

        var keydownId;

        var g_doubleCheckHeightId;

        var originals = deepExtend({}, options); //deep copy

        var activeAnimation;

        var g_initialAnchorsInDom = false;

        var g_canFireMouseEnterNormalScroll = true;

        var g_mediaLoadedId;

        var extensions = [

            'parallax',

            'scrollOverflowReset',

            'dragAndMove',

            'offsetSections',

            'fadingEffect',

            'responsiveSlides',

            'continuousHorizontal',

            'interlockedSlides',

            'scrollHorizontally',

            'resetSliders',

            'cards'

        ];



        displayWarnings();



        //easeInOutCubic animation included in the plugin

        window.fp_easings = deepExtend(window.fp_easings, {

            easeInOutCubic: function (t, b, c, d) {

                if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;

            }

        });



        /**

        * Sets the autoScroll option.

        * It changes the scroll bar visibility and the history of the site as a result.

        */

        function setAutoScrolling(value, type){

            //removing the transformation

            if(!value){

                silentScroll(0);

            }



            setVariableState('autoScrolling', value, type);



            var element = $(SECTION_ACTIVE_SEL)[0];



            if(options.autoScrolling && !options.scrollBar){

                css($htmlBody, {

                    'overflow': 'hidden',

                    'height': '100%'

                });



                setRecordHistory(originals.recordHistory, 'internal');



                //for IE touch devices

                css(container, {

                    '-ms-touch-action': 'none',

                    'touch-action': 'none'

                });



                if(element != null){

                    //moving the container up

                    silentScroll(element.offsetTop);

                }

            }else{

                css($htmlBody, {

                    'overflow' : 'visible',

                    'height' : 'initial'

                });



                var recordHistory = !options.autoScrolling ? false : originals.recordHistory;

                setRecordHistory(recordHistory, 'internal');



                //for IE touch devices

                css(container, {

                    '-ms-touch-action': '',

                    'touch-action': ''

                });



                //scrolling the page to the section with no animation

                if (element != null) {

                    var scrollSettings = getScrollSettings(element.offsetTop);

                    scrollSettings.element.scrollTo(0, scrollSettings.options);

                }

            }

        }



        /**

        * Defines wheter to record the history for each hash change in the URL.

        */

        function setRecordHistory(value, type){

            setVariableState('recordHistory', value, type);

        }



        /**

        * Defines the scrolling speed

        */

        function setScrollingSpeed(value, type){

            setVariableState('scrollingSpeed', value, type);

        }



        /**

        * Sets fitToSection

        */

        function setFitToSection(value, type){

            setVariableState('fitToSection', value, type);

        }



        /**

        * Sets lockAnchors

        */

        function setLockAnchors(value){

            options.lockAnchors = value;

        }



        /**

        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.

        */

        function setMouseWheelScrolling(value){

            if(value){

                addMouseWheelHandler();

                addMiddleWheelHandler();

            }else{

                removeMouseWheelHandler();

                removeMiddleWheelHandler();

            }

        }



        /**

        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.

        * Optionally a second parameter can be used to specify the direction for which the action will be applied.

        *

        * @param directions string containing the direction or directions separated by comma.

        */

        function setAllowScrolling(value, directions){

            if(typeof directions !== 'undefined'){

                directions = directions.replace(/ /g,'').split(',');



                directions.forEach(function (direction){

                    setIsScrollAllowed(value, direction, 'm');

                });

            }

            else{

                setIsScrollAllowed(value, 'all', 'm');

            }

        }



        /**

        * Adds or remove the mouse wheel hijacking

        */

        function setMouseHijack(value){

            if(value){

                setMouseWheelScrolling(true);

                addTouchHandler();

            }else{

                setMouseWheelScrolling(false);

                removeTouchHandler();

            }

        }



        /**

        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys

        */

        function setKeyboardScrolling(value, directions){

            if(typeof directions !== 'undefined'){

                directions = directions.replace(/ /g,'').split(',');



                directions.forEach(function(direction){

                    setIsScrollAllowed(value, direction, 'k');

                });

            }else{

                setIsScrollAllowed(value, 'all', 'k');

                options.keyboardScrolling = value;

            }

        }



        /**

        * Moves the page up one section.

        */

        function moveSectionUp(){

            var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);



            //looping to the bottom if there's no more sections above

            if (!prev && (options.loopTop || options.continuousVertical)) {

                prev = last($(SECTION_SEL));

            }



            if (prev != null) {

                scrollPage(prev, null, true);

            }

        }



        /**

        * Moves the page down one section.

        */

        function moveSectionDown(){

            var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);



            //looping to the top if there's no more sections below

            if(!next &&

                (options.loopBottom || options.continuousVertical)){

                next = $(SECTION_SEL)[0];

            }



            if(next != null){

                scrollPage(next, null, false);

            }

        }



        /**

        * Moves the page to the given section and slide with no animation.

        * Anchors or index positions can be used as params.

        */

        function silentMoveTo(sectionAnchor, slideAnchor){

            setScrollingSpeed (0, 'internal');

            moveTo(sectionAnchor, slideAnchor);

            setScrollingSpeed (originals.scrollingSpeed, 'internal');

        }



        /**

        * Moves the page to the given section and slide.

        * Anchors or index positions can be used as params.

        */

        function moveTo(sectionAnchor, slideAnchor){

            var destiny = getSectionByAnchor(sectionAnchor);



            if (typeof slideAnchor !== 'undefined'){

                scrollPageAndSlide(sectionAnchor, slideAnchor);

            }else if(destiny != null){

                scrollPage(destiny);

            }

        }



        /**

        * Slides right the slider of the active section.

        * Optional `section` param.

        */

        function moveSlideRight(section){

            moveSlide('right', section);

        }



        /**

        * Slides left the slider of the active section.

        * Optional `section` param.

        */

        function moveSlideLeft(section){

            moveSlide('left', section);

        }



        /**

         * When resizing is finished, we adjust the slides sizes and positions

         */

        function reBuild(resizing){

            if(hasClass(container, DESTROYED)){ return; }  //nothing to do if the plugin was destroyed



            isResizing = true;



            //updating global vars

            windowsHeight = getWindowHeight();

            windowsWidth = getWindowWidth();



            var sections = $(SECTION_SEL);

            for (var i = 0; i < sections.length; ++i) {

                var section = sections[i];

                var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];

                var slides = $(SLIDE_SEL, section);



                //adjusting the height of the table-cell for IE and Firefox

                if(options.verticalCentered){

                    css($(TABLE_CELL_SEL, section), {'height': getTableHeight(section) + 'px'});

                }



                css(section, {'height': windowsHeight + 'px'});



                //adjusting the position fo the FULL WIDTH slides...

                if (slides.length > 1) {

                    landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);

                }

            }



            if(options.scrollOverflow){

                scrollBarHandler.createScrollBarForAll();

            }



            var activeSection = $(SECTION_ACTIVE_SEL)[0];

            var sectionIndex = index(activeSection, SECTION_SEL);



            //isn't it the first section?

            if(sectionIndex){

                //adjusting the position for the current section

                silentMoveTo(sectionIndex + 1);

            }



            isResizing = false;

            if(isFunction( options.afterResize ) && resizing){

                options.afterResize.call(container, window.innerWidth, window.innerHeight);

            }

            if(isFunction( options.afterReBuild ) && !resizing){

                options.afterReBuild.call(container);

            }

        }



        /**

        * Determines whether fullpage.js is in responsive mode or not.

        */

        function isResponsiveMode(){

           return hasClass($body, RESPONSIVE);

        }



        /**

        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`

        * are smaller than the set limit values.

        */

        function setResponsive(active){

            var isResponsive = isResponsiveMode();



            if(active){

                if(!isResponsive){

                    setAutoScrolling(false, 'internal');

                    setFitToSection(false, 'internal');

                    hide($(SECTION_NAV_SEL));

                    addClass($body, RESPONSIVE);

                    if(isFunction( options.afterResponsive )){

                        options.afterResponsive.call( container, active);

                    }



                    //when on page load, we will remove scrolloverflow if necessary

                    if(options.scrollOverflow){

                        scrollBarHandler.createScrollBarForAll();

                    }

                }

            }

            else if(isResponsive){

                setAutoScrolling(originals.autoScrolling, 'internal');

                setFitToSection(originals.autoScrolling, 'internal');

                show($(SECTION_NAV_SEL));

                removeClass($body, RESPONSIVE);

                if(isFunction( options.afterResponsive )){

                    options.afterResponsive.call( container, active);

                }

            }

        }



        if(container){

            //public functions

            FP.version = '3.0.5';

            FP.setAutoScrolling = setAutoScrolling;

            FP.setRecordHistory = setRecordHistory;

            FP.setScrollingSpeed = setScrollingSpeed;

            FP.setFitToSection = setFitToSection;

            FP.setLockAnchors = setLockAnchors;

            FP.setMouseWheelScrolling = setMouseWheelScrolling;

            FP.setAllowScrolling = setAllowScrolling;

            FP.setKeyboardScrolling = setKeyboardScrolling;

            FP.moveSectionUp = moveSectionUp;

            FP.moveSectionDown = moveSectionDown;

            FP.silentMoveTo = silentMoveTo;

            FP.moveTo = moveTo;

            FP.moveSlideRight = moveSlideRight;

            FP.moveSlideLeft = moveSlideLeft;

            FP.fitToSection = fitToSection;

            FP.reBuild = reBuild;

            FP.setResponsive = setResponsive;

            FP.getFullpageData = function(){ return options };

            FP.destroy = destroy;

            FP.getActiveSection = getActiveSection;

            FP.getActiveSlide = getActiveSlide;



            FP.test = {

                top: '0px',

                translate3d: 'translate3d(0px, 0px, 0px)',

                translate3dH: (function(){

                    var a = [];

                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){

                        a.push('translate3d(0px, 0px, 0px)');

                    }

                    return a;

                })(),

                left: (function(){

                    var a = [];

                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){

                        a.push(0);

                    }

                    return a;

                })(),

                options: options,

                setAutoScrolling: setAutoScrolling

            };



            //functions we want to share across files but which are not

            //mean to be used on their own by developers

            FP.shared = {

                afterRenderActions: afterRenderActions,

                isNormalScrollElement: false

            };



            window.fullpage_api = FP;



            //using jQuery initialization? Creating the $.fn.fullpage object

            if(options.$){

                Object.keys(FP).forEach(function (key) {    

                    options.$.fn.fullpage[key] = FP[key];   

                });

            }



            init();



            bindEvents();

        }



        function init(){

            //if css3 is not supported, it will use jQuery animations

            if(options.css3){

                options.css3 = support3d();

            }



            options.scrollBar = options.scrollBar || options.hybrid;



            setOptionsFromDOM();

            prepareDom();

            setAllowScrolling(true);

            setMouseHijack(true);

            setAutoScrolling(options.autoScrolling, 'internal');

            responsive();



            //setting the class for the body element

            setBodyClass();



            if(document.readyState === 'complete'){

                scrollToAnchor();

            }

            window.addEventListener('load', scrollToAnchor);



            //if we use scrollOverflow we'll fire afterRender in the scrolloverflow file

            if(!options.scrollOverflow){

                afterRenderActions();

            }



            doubleCheckHeight();

        }



        function bindEvents(){



            //when scrolling...

            window.addEventListener('scroll', scrollHandler);



            //detecting any change on the URL to scroll to the given anchor link

            //(a way to detect back history button as we play with the hashes on the URL)

            window.addEventListener('hashchange', hashChangeHandler);



            //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.

            window.addEventListener('blur', blurHandler);



            //when resizing the site, we adjust the heights of the sections, slimScroll...

            window.addEventListener('resize', resizeHandler);



            //Sliding with arrow keys, both, vertical and horizontal

            document.addEventListener('keydown', keydownHandler);



            //to prevent scrolling while zooming

            document.addEventListener('keyup', keyUpHandler);



            //Scrolls to the section when clicking the navigation bullet

            //simulating the jQuery .on('click') event using delegation

            ['click', 'touchstart'].forEach(function(eventName){

                document.addEventListener(eventName, delegatedEvents);

            });



            /**

            * Applying normalScroll elements.

            * Ignoring the scrolls over the specified selectors.

            */

            if(options.normalScrollElements){

                ['mouseenter', 'touchstart'].forEach(function(eventName){

                    forMouseLeaveOrTouch(eventName, false);

                });



                ['mouseleave', 'touchend'].forEach(function(eventName){

                   forMouseLeaveOrTouch(eventName, true);

                });

            }

        }



        function delegatedEvents(e){

            var target = e.target;



            if(target && closest(target, SECTION_NAV_SEL + ' a')){

                sectionBulletHandler.call(target, e);

            }

            else if(matches(target, SECTION_NAV_TOOLTIP_SEL)){

                tooltipTextHandler.call(target);

            }

            else if(matches(target, SLIDES_ARROW_SEL)){

                slideArrowHandler.call(target, e);

            }

            else if(matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null){

                slideBulletHandler.call(target, e);

            }

            else if(closest(target, options.menu + ' [data-menuanchor]')){

                menuItemsHandler.call(target, e);

            }

        }



        function forMouseLeaveOrTouch(eventName, allowScrolling){

            //a way to pass arguments to the onMouseEnterOrLeave function

            document['fp_' + eventName] = allowScrolling;

            document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase

        }



        function onMouseEnterOrLeave(e) {

            //onMouseLeave will use the destination target, not the one we are moving away from

            var target = event.toElement || e.relatedTarget || e.target;



            var type = e.type;

            var isInsideOneNormalScroll = false;



            //coming from closing a normalScrollElements modal or moving outside viewport?

            if(target == document || !target){

                setMouseHijack(true);

                return;

            }



            if(type === 'touchend'){

                g_canFireMouseEnterNormalScroll = false;

                setTimeout(function(){

                    g_canFireMouseEnterNormalScroll = true;

                }, 800);

            }



            //preventing mouseenter event to do anything when coming from a touchEnd event

            //fixing issue #3576

            if(type === 'mouseenter' && !g_canFireMouseEnterNormalScroll){

                return;

            }



            var normalSelectors = options.normalScrollElements.split(',');



            normalSelectors.forEach(function(normalSelector){

                if(!isInsideOneNormalScroll){

                    var isNormalScrollTarget = matches(target, normalSelector);



                    //leaving a child inside the normalScoll element is not leaving the normalScroll #3661

                    var isNormalScrollChildFocused = closest(target, normalSelector);



                    if(isNormalScrollTarget || isNormalScrollChildFocused){

                        if(!FP.shared.isNormalScrollElement){

                            setMouseHijack(false);

                        }

                        FP.shared.isNormalScrollElement = true;

                        isInsideOneNormalScroll = true;

                    }

                }

            });



            //not inside a single normal scroll element anymore?

            if(!isInsideOneNormalScroll && FP.shared.isNormalScrollElement){

                setMouseHijack(true);

                FP.shared.isNormalScrollElement = false;

            }

        }



        /**

        * Checks the viewport a few times on a define interval of time to 

        * see if it has changed in any of those. If that's the case, it resizes.

        */

        function doubleCheckHeight(){

            for(var i = 1; i < 4; i++){

                g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);

            }

        }



        /**

        * Adjusts a section to the viewport if it has changed.

        */

        function adjustToNewViewport(){

            var newWindowHeight = getWindowHeight();

            var newWindowWidth = getWindowWidth();



            if(windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth){

                windowsHeight = newWindowHeight;

                windowsWidth = newWindowWidth;

                reBuild(true);

            }

        }



        /**

        * Setting options from DOM elements if they are not provided.

        */

        function setOptionsFromDOM(){



            //no anchors option? Checking for them in the DOM attributes

            if(!options.anchors.length){

                var attrName = '[data-anchor]';

                var anchors = $(options.sectionSelector.split(',').join(attrName + ',') + attrName, container);

                if(anchors.length){

                    g_initialAnchorsInDom = true;

                    anchors.forEach(function(item){

                        options.anchors.push(item.getAttribute('data-anchor').toString());

                    });

                }

            }



            //no tooltips option? Checking for them in the DOM attributes

            if(!options.navigationTooltips.length){

                var attrName = '[data-tooltip]';

                var tooltips = $(options.sectionSelector.split(',').join(attrName + ',') + attrName, container);

                if(tooltips.length){

                    tooltips.forEach(function(item){

                        options.navigationTooltips.push(item.getAttribute('data-tooltip').toString());

                    });

                }

            }

        }



        /**

        * Works over the DOM structure to set it up for the current fullpage options.

        */

        function prepareDom(){

            css(container, {

                'height': '100%',

                'position': 'relative'

            });



            //adding a class to recognize the container internally in the code

            addClass(container, WRAPPER);

            addClass($html, ENABLED);



            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502

            windowsHeight = getWindowHeight();



            removeClass(container, DESTROYED); //in case it was destroyed before initializing it again



            addInternalSelectors();



            var sections = $(SECTION_SEL);



            //styling the sections / slides / menu

            for(var i = 0; i<sections.length; i++){

                var sectionIndex = i;

                var section = sections[i];

                var slides = $(SLIDE_SEL, section);

                var numSlides = slides.length;



                //caching the original styles to add them back on destroy('all')

                section.setAttribute('data-fp-styles', section.getAttribute('style'));



                styleSection(section, sectionIndex);

                styleMenu(section, sectionIndex);



                // if there's any slide

                if (numSlides > 0) {

                    styleSlides(section, slides, numSlides);

                }else{

                    if(options.verticalCentered){

                        addTableClass(section);

                    }

                }

            }



            //fixed elements need to be moved out of the plugin container due to problems with CSS3.

            if(options.fixedElements && options.css3){

                $(options.fixedElements).forEach(function(item){

                    $body.appendChild(item);

                });

            }



            //vertical centered of the navigation + active bullet

            if(options.navigation){

                addVerticalNavigation();

            }



            enableYoutubeAPI();



            if(options.scrollOverflow){

                scrollBarHandler = options.scrollOverflowHandler.init(options);

            }

        }



        /**

        * Styles the horizontal slides for a section.

        */

        function styleSlides(section, slides, numSlides){

            var sliderWidth = numSlides * 100;

            var slideWidth = 100 / numSlides;



            var slidesWrapper = document.createElement('div');

            slidesWrapper.className = SLIDES_WRAPPER; //fp-slides

            wrapAll(slides, slidesWrapper);



            var slidesContainer = document.createElement('div');

            slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer

            wrapAll(slides, slidesContainer);



            css($(SLIDES_CONTAINER_SEL, section), {'width': sliderWidth + '%'});



            if(numSlides > 1){

                if(options.controlArrows){

                    createSlideArrows(section);

                }



                if(options.slidesNavigation){

                    addSlidesNavigation(section, numSlides);

                }

            }



            slides.forEach(function(slide) {

                css(slide, {'width': slideWidth + '%'});



                if(options.verticalCentered){

                    addTableClass(slide);

                }

            });



            var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0];



            //if the slide won't be an starting point, the default will be the first one

            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

            if( startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || (index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0))){

                silentLandscapeScroll(startingSlide, 'internal');

            }else{

                addClass(slides[0], ACTIVE);

            }

        }



        /**

        * Styling vertical sections

        */

        function styleSection(section, index){

            //if no active section is defined, the 1st one will be the default one

            if(!index && $(SECTION_ACTIVE_SEL)[0] == null) {

                addClass(section, ACTIVE);

            }

            startingSection = $(SECTION_ACTIVE_SEL)[0];



            css(section, {'height': windowsHeight + 'px'});



            if(options.paddingTop){

                css(section, {'padding-top': options.paddingTop});

            }



            if(options.paddingBottom){

                css(section, {'padding-bottom': options.paddingBottom});

            }



            if (typeof options.sectionsColor[index] !==  'undefined') {

                css(section, {'background-color': options.sectionsColor[index]});

            }



            if (typeof options.anchors[index] !== 'undefined') {

                section.setAttribute('data-anchor', options.anchors[index]);

            }

        }



        /**

        * Sets the data-anchor attributes to the menu elements and activates the current one.

        */

        function styleMenu(section, index){

            if (typeof options.anchors[index] !== 'undefined') {

                //activating the menu / nav element on load

                if(hasClass(section, ACTIVE)){

                    activateMenuAndNav(options.anchors[index], index);

                }

            }



            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)

            if(options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null){

                $(options.menu).forEach(function(menu) {

                    $body.appendChild(menu);

                });

            }

        }



        /**

        * Adds internal classes to be able to provide customizable selectors

        * keeping the link with the style sheet.

        */

        function addInternalSelectors(){

            addClass($(options.sectionSelector, container), SECTION);

            addClass($(options.slideSelector, container), SLIDE);

        }



        /**

        * Creates the control arrows for the given section

        */

        function createSlideArrows(section){

            var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];

            after($(SLIDES_WRAPPER_SEL, section)[0], arrows);



            if(options.controlArrowColor !== '#fff'){

                css($(SLIDES_ARROW_NEXT_SEL, section), {'border-color': 'transparent transparent transparent '+options.controlArrowColor});

                css($(SLIDES_ARROW_PREV_SEL, section), {'border-color': 'transparent '+ options.controlArrowColor + ' transparent transparent'});

            }



            if(!options.loopHorizontal){

                hide($(SLIDES_ARROW_PREV_SEL, section));

            }

        }



        /**

        * Creates a vertical navigation bar.

        */

        function addVerticalNavigation(){

            var navigation = document.createElement('div');

            navigation.setAttribute('id', SECTION_NAV);



            var divUl = document.createElement('ul');

            navigation.appendChild(divUl);



            appendTo(navigation, $body);

            var nav = $(SECTION_NAV_SEL)[0];



            addClass(nav, 'fp-' + options.navigationPosition);



            if(options.showActiveTooltip){

                addClass(nav, SHOW_ACTIVE_TOOLTIP);

            }



            var li = '';



            for (var i = 0; i < $(SECTION_SEL).length; i++) {

                var link = '';

                if (options.anchors.length) {

                    link = options.anchors[i];

                }



                li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, 'Section') + '</span><span></span></a>';



                // Only add tooltip if needed (defined by user)

                var tooltip = options.navigationTooltips[i];



                if (typeof tooltip !== 'undefined' && tooltip !== '') {

                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>';

                }



                li += '</li>';

            }

            $('ul', nav)[0].innerHTML = li;



            //centering it vertically

            css($(SECTION_NAV_SEL), {'margin-top': '-' + ($(SECTION_NAV_SEL)[0].offsetHeight/2) + 'px'});



            //activating the current active section



            var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];

            addClass($('a', bullet), ACTIVE);

        }



        /**

        * Gets the name for screen readers for a section/slide navigation bullet.

        */

        function getBulletLinkName(i, defaultName){

            return options.navigationTooltips[i]

                || options.anchors[i]

                || defaultName + ' ' + (i+1)

        }



        /*

        * Enables the Youtube videos API so we can control their flow if necessary.

        */

        function enableYoutubeAPI(){

            $('iframe[src*="youtube.com/embed/"]', container).forEach(function(item){

                addURLParam(item, 'enablejsapi=1');

            });

        }



        /**

        * Adds a new parameter and its value to the `src` of a given element

        */

        function addURLParam(element, newParam){

            var originalSrc = element.getAttribute('src');

            element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);

        }



        /*

        * Returns the prefix sign to use for a new parameter in an existen URL.

        *

        * @return {String}  ? | &

        */

        function getUrlParamSign(url){

            return ( !/\?/.test( url ) ) ? '?' : '&';

        }



        /**

        * Actions and callbacks to fire afterRender

        */

        function afterRenderActions(){

            var section = $(SECTION_ACTIVE_SEL)[0];



            addClass(section, COMPLETELY);



            lazyLoad(section);

            lazyLoadOthers();

            playMedia(section);



            if(options.scrollOverflow){

                options.scrollOverflowHandler.afterLoad();

            }



            if(isDestinyTheStartingSection() && isFunction(options.afterLoad) ){

                fireCallback('afterLoad', {

                    activeSection: section,

                    element: section,

                    direction: null,



                    //for backwards compatibility callback (to be removed in a future!)

                    anchorLink: section.getAttribute('data-anchor'),

                    sectionIndex: index(section, SECTION_SEL)

                });

            }



            if(isFunction(options.afterRender)){

                fireCallback('afterRender');

            }

        }



        /**

        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)

        */

        function isDestinyTheStartingSection(){

            var anchor = getAnchorsURL();

            var destinationSection = getSectionByAnchor(anchor.section);

            return !anchor.section || !destinationSection || typeof destinationSection !=='undefined' && index(destinationSection) === index(startingSection);

        }



        var isScrolling = false;

        var lastScroll = 0;



        //when scrolling...

        function scrollHandler(){

            var currentSection;



            if(!options.autoScrolling || options.scrollBar){

                var currentScroll = getScrollTop();

                var scrollDirection = getScrollDirection(currentScroll);

                var visibleSectionIndex = 0;

                var screen_mid = currentScroll + (getWindowHeight() / 2.0);

                var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;

                var sections =  $(SECTION_SEL);



                //when using `auto-height` for a small last section it won't be centered in the viewport

                if(isAtBottom){

                    visibleSectionIndex = sections.length - 1;

                }

                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport

                else if(!currentScroll){

                    visibleSectionIndex = 0;

                }



                //taking the section which is showing more content in the viewport

                else{

                    for (var i = 0; i < sections.length; ++i) {

                        var section = sections[i];



                        // Pick the the last section which passes the middle line of the screen.

                        if (section.offsetTop <= screen_mid)

                        {

                            visibleSectionIndex = i;

                        }

                    }

                }



                if(isCompletelyInViewPort(scrollDirection)){

                    if(!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)){

                        addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);

                        removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);

                    }

                }



                //geting the last one, the current one on the screen

                currentSection = sections[visibleSectionIndex];



                //setting the visible section as active when manually scrolling

                //executing only once the first time we reach the section

                if(!hasClass(currentSection, ACTIVE)){

                    isScrolling = true;

                    var leavingSection = $(SECTION_ACTIVE_SEL)[0];

                    var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;

                    var yMovement = getYmovement(currentSection);

                    var anchorLink  = currentSection.getAttribute('data-anchor');

                    var sectionIndex = index(currentSection, SECTION_SEL) + 1;

                    var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];

                    var slideIndex;

                    var slideAnchorLink;

                    var callbacksParams = {

                        activeSection: leavingSection,

                        sectionIndex: sectionIndex -1,

                        anchorLink: anchorLink,

                        element: currentSection,

                        leavingSection: leavingSectionIndex,

                        direction: yMovement

                    };



                    if(activeSlide){

                        slideAnchorLink = activeSlide.getAttribute('data-anchor');

                        slideIndex = index(activeSlide);

                    }



                    if(canScroll){

                        addClass(currentSection, ACTIVE);

                        removeClass(siblings(currentSection), ACTIVE);



                        if(isFunction( options.onLeave )){

                            fireCallback('onLeave', callbacksParams);

                        }

                        if(isFunction( options.afterLoad )){

                            fireCallback('afterLoad', callbacksParams);

                        }



                        stopMedia(leavingSection);

                        lazyLoad(currentSection);

                        playMedia(currentSection);



                        activateMenuAndNav(anchorLink, sectionIndex - 1);



                        if(options.anchors.length){

                            //needed to enter in hashChange event when using the menu with anchor links

                            lastScrolledDestiny = anchorLink;

                        }

                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);

                    }



                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet

                    clearTimeout(scrollId);

                    scrollId = setTimeout(function(){

                        isScrolling = false;

                    }, 100);

                }



                if(options.fitToSection){

                    //for the auto adjust of the viewport to fit a whole section

                    clearTimeout(scrollId2);



                    scrollId2 = setTimeout(function(){

                        //checking it again in case it changed during the delay

                        if(options.fitToSection &&



                            //is the destination element bigger than the viewport?

                            $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight

                        ){

                            fitToSection();

                        }

                    }, options.fitToSectionDelay);

                }

            }

        }



        /**

        * Fits the site to the nearest active section

        */

        function fitToSection(){

            //checking fitToSection again in case it was set to false before the timeout delay

            if(canScroll){

                //allows to scroll to an active section and

                //if the section is already active, we prevent firing callbacks

                isResizing = true;



                scrollPage($(SECTION_ACTIVE_SEL)[0]);

                isResizing = false;

            }

        }



        /**

        * Determines whether the active section has seen in its whole or not.

        */

        function isCompletelyInViewPort(movement){

            var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;

            var bottom = top + getWindowHeight();



            if(movement == 'up'){

                return bottom >= (getScrollTop() + getWindowHeight());

            }

            return top <= getScrollTop();

        }



        /**

        * Determines whether a section is in the viewport or not.

        */

        function isSectionInViewport (el) {

            var rect = el.getBoundingClientRect();

            var top = rect.top;

            var bottom = rect.bottom;



            //sometimes there's a 1px offset on the bottom of the screen even when the 

            //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.

            //using this prevents from lazyLoading the section that is not yet visible 

            //(only 1 pixel offset is)

            var pixelOffset = 2;

            

            var isTopInView = top + pixelOffset < windowsHeight && top > 0;

            var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;



            return isTopInView || isBottomInView;

        }



        /**

        * Gets the directon of the the scrolling fired by the scroll event.

        */

        function getScrollDirection(currentScroll){

            var direction = currentScroll > lastScroll ? 'down' : 'up';



            lastScroll = currentScroll;



            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination

            previousDestTop = currentScroll;



            return direction;

        }



        /**

        * Determines the way of scrolling up or down:

        * by 'automatically' scrolling a section or by using the default and normal scrolling.

        */

        function scrolling(type){

            if (!isScrollAllowed.m[type]){

                return;

            }



            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;



            if(options.scrollOverflow){

                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);

                var check = (type === 'down') ? 'bottom' : 'top';



                if(scrollable != null ){

                    //is the scrollbar at the start/end of the scroll?

                    if(options.scrollOverflowHandler.isScrolled(check, scrollable)){

                        scrollSection();

                    }else{

                        return true;

                    }

                }else{

                    // moved up/down

                    scrollSection();

                }

            }else{

                // moved up/down

                scrollSection();

            }

        }



        /*

        * Preventing bouncing in iOS #2285

        */

        function preventBouncing(e){

            if(options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up){

                //preventing the easing on iOS devices

                preventDefault(e);

            }

        }



        var touchStartY = 0;

        var touchStartX = 0;

        var touchEndY = 0;

        var touchEndX = 0;



        /* Detecting touch events



        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.

        * This way, the touchstart and the touch moves shows an small difference between them which is the

        * used one to determine the direction.

        */

        function touchMoveHandler(e){

            var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];



            if (isReallyTouch(e) ) {



                if(options.autoScrolling){

                    //preventing the easing on iOS devices

                    preventDefault(e);

                }



                var touchEvents = getEventsPage(e);



                touchEndY = touchEvents.y;

                touchEndX = touchEvents.x;



                //if movement in the X axys is greater than in the Y and the currect section has slides...

                if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {



                    //is the movement greater than the minimum resistance to scroll?

                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > (getWindowWidth() / 100 * options.touchSensitivity)) {

                        if (touchStartX > touchEndX) {

                            if(isScrollAllowed.m.right){

                                moveSlideRight(activeSection); //next

                            }

                        } else {

                            if(isScrollAllowed.m.left){

                                moveSlideLeft(activeSection); //prev

                            }

                        }

                    }

                }



                //vertical scrolling (only when autoScrolling is enabled)

                else if(options.autoScrolling && canScroll){



                    //is the movement greater than the minimum resistance to scroll?

                    if (Math.abs(touchStartY - touchEndY) > (window.innerHeight / 100 * options.touchSensitivity)) {

                        if (touchStartY > touchEndY) {

                            scrolling('down');

                        } else if (touchEndY > touchStartY) {

                            scrolling('up');

                        }

                    }

                }

            }

        }



        /**

        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen

        * this way we make sure that is really a touch event what IE is detecting.

        */

        function isReallyTouch(e){

            //if is not IE   ||  IE is detecting `touch` or `pen`

            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';

        }



        /**

        * Handler for the touch start event.

        */

        function touchStartHandler(e){



            //stopping the auto scroll to adjust to a section

            if(options.fitToSection){

                activeAnimation = false;

            }



            if(isReallyTouch(e)){

                var touchEvents = getEventsPage(e);

                touchStartY = touchEvents.y;

                touchStartX = touchEvents.x;

            }

        }



        /**

        * Gets the average of the last `number` elements of the given array.

        */

        function getAverage(elements, number){

            var sum = 0;



            //taking `number` elements from the end to make the average, if there are not enought, 1

            var lastElements = elements.slice(Math.max(elements.length - number, 1));



            for(var i = 0; i < lastElements.length; i++){

                sum = sum + lastElements[i];

            }



            return Math.ceil(sum/number);

        }



        /**

         * Detecting mousewheel scrolling

         *

         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html

         * http://www.sitepoint.com/html5-javascript-mouse-wheel/

         */

        var prevTime = new Date().getTime();



        function MouseWheelHandler(e) {

            var curTime = new Date().getTime();

            var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);



            //is scroll allowed?

            if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {

                preventDefault(e);

                return false;

            }



            //autoscrolling and not zooming?

            if(options.autoScrolling && !controlPressed && !isNormalScroll){

                // cross-browser wheel delta

                e = e || window.event;

                var value = e.wheelDelta || -e.deltaY || -e.detail;

                var delta = Math.max(-1, Math.min(1, value));



                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';

                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);



                //Limiting the array to 150 (lets not waste memory!)

                if(scrollings.length > 149){

                    scrollings.shift();

                }



                //keeping record of the previous scrollings

                scrollings.push(Math.abs(value));



                //preventing to scroll the site on mouse wheel when scrollbar is present

                if(options.scrollBar){

                    preventDefault(e);

                }



                //time difference between the last scroll and the current one

                var timeDiff = curTime-prevTime;

                prevTime = curTime;



                //haven't they scrolled in a while?

                //(enough to be consider a different scrolling action to scroll another section)

                if(timeDiff > 200){

                    //emptying the array, we dont care about old scrollings for our averages

                    scrollings = [];

                }



                if(canScroll){

                    var averageEnd = getAverage(scrollings, 10);

                    var averageMiddle = getAverage(scrollings, 70);

                    var isAccelerating = averageEnd >= averageMiddle;



                    //to avoid double swipes...

                    if(isAccelerating && isScrollingVertically){

                        //scrolling down?

                        if (delta < 0) {

                            scrolling('down');



                        //scrolling up?

                        }else {

                            scrolling('up');

                        }

                    }

                }



                return false;

            }



            if(options.fitToSection){

                //stopping the auto scroll to adjust to a section

                activeAnimation = false;

            }

        }



        /**

        * Slides a slider to the given direction.

        * Optional `section` param.

        */

        function moveSlide(direction, section){

            var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;

            var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0];



            // more than one slide needed and nothing should be sliding

            if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {

                return;

            }



            var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];

            var destiny = null;



            if(direction === 'left'){

                destiny = prevUntil(currentSlide, SLIDE_SEL);

            }else{

                destiny = nextUntil(currentSlide, SLIDE_SEL);

            }



            //isn't there a next slide in the secuence?

            if(destiny == null){

                //respect loopHorizontal settin

                if (!options.loopHorizontal) return;



                var slideSiblings = siblings(currentSlide);

                if(direction === 'left'){

                    destiny = slideSiblings[slideSiblings.length - 1]; //last

                }else{

                    destiny = slideSiblings[0]; //first

                }

            }



            slideMoving = true && !FP.test.isTesting;

            landscapeScroll(slides, destiny, direction);

        }



        /**

        * Maintains the active slides in the viewport

        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)

        */

        function keepSlidesPosition(){

            var activeSlides = $(SLIDE_ACTIVE_SEL);

            for( var i =0; i<activeSlides.length; i++){

                silentLandscapeScroll(activeSlides[i], 'internal');

            }

        }



        var previousDestTop = 0;

        /**

        * Returns the destination Y position based on the scrolling direction and

        * the height of the section.

        */

        function getDestinationPosition(element){

            var elementHeight = element.offsetHeight;

            var elementTop = element.offsetTop;



            //top of the desination will be at the top of the viewport

            var position = elementTop;

            var isScrollingDown =  elementTop > previousDestTop;

            var sectionBottom = position - windowsHeight + elementHeight;

            var bigSectionsDestination = options.bigSectionsDestination;



            //is the destination element bigger than the viewport?

            if(elementHeight > windowsHeight){

                //scrolling up?

                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){

                    position = sectionBottom;

                }

            }



            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section

            else if(isScrollingDown || (isResizing && next(element) == null) ){

                //The bottom of the destination will be at the bottom of the viewport

                position = sectionBottom;

            }



            /*

            Keeping record of the last scrolled position to determine the scrolling direction.

            No conventional methods can be used as the scroll bar might not be present

            AND the section might not be active if it is auto-height and didnt reach the middle

            of the viewport.

            */

            previousDestTop = position;

            return position;

        }



        /**

        * Scrolls the site to the given element and scrolls to the slide if a callback is given.

        */

        function scrollPage(element, callback, isMovementUp){

            if(element == null){ return; } //there's no element to scroll, leaving the function



            var dtop = getDestinationPosition(element);

            var slideAnchorLink;

            var slideIndex;



            //local variables

            var v = {

                element: element,

                callback: callback,

                isMovementUp: isMovementUp,

                dtop: dtop,

                yMovement: getYmovement(element),

                anchorLink: element.getAttribute('data-anchor'),

                sectionIndex: index(element, SECTION_SEL),

                activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],

                activeSection: $(SECTION_ACTIVE_SEL)[0],

                leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,



                //caching the value of isResizing at the momment the function is called

                //because it will be checked later inside a setTimeout and the value might change

                localIsResizing: isResizing

            };



            //quiting when destination scroll is the same as the current one

            if((v.activeSection == element && !isResizing) || (options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT) )){ return; }



            if(v.activeSlide != null){

                slideAnchorLink = v.activeSlide.getAttribute('data-anchor');

                slideIndex = index(v.activeSlide);

            }



            //callback (onLeave) if the site is not just resizing and readjusting the slides

            if(!v.localIsResizing){

                var direction = v.yMovement;



                //required for continousVertical

                if(typeof isMovementUp !== 'undefined'){

                    direction = isMovementUp ? 'up' : 'down';

                }



                //for the callback

                v.direction = direction;



                if(isFunction(options.onLeave)){

                    if(fireCallback('onLeave', v) === false){

                        return;

                    }

                }

            }



            // If continuousVertical && we need to wrap around

            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&

                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or

                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down



                v = createInfiniteSections(v);

            }



            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)

            if(!v.localIsResizing){

                stopMedia(v.activeSection);

            }



            if(options.scrollOverflow){

                options.scrollOverflowHandler.beforeLeave();

            }



            addClass(element, ACTIVE);

            removeClass(siblings(element), ACTIVE);

            lazyLoad(element);



            if(options.scrollOverflow){

                options.scrollOverflowHandler.onLeave();

            }



            //preventing from activating the MouseWheelHandler event

            //more than once if the page is scrolling

            canScroll = false || FP.test.isTesting;



            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);



            performMovement(v);



            //flag to avoid callingn `scrollPage()` twice in case of using anchor links

            lastScrolledDestiny = v.anchorLink;



            //avoid firing it twice (as it does also on scroll)

            activateMenuAndNav(v.anchorLink, v.sectionIndex);

        }



        /**

        * Dispatch events & callbacks making sure it does it on the right format, depending on

        * whether v2compatible is being used or not.

        */

        function fireCallback(eventName, v){

            var eventData = getEventData(eventName, v);



            if(!options.v2compatible){

                trigger(container, eventName, eventData);



                if(options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false){

                    return false;

                }

            }

            else{

                if(options[eventName].apply(eventData[0], eventData.slice(1)) === false){

                    return false;

                }

            }



            return true;

        }



        /**

        * Makes sure to only create a Panel object if the element exist

        */

        function nullOrSection(el){

            return el ? new Section(el) : null;

        }



        function nullOrSlide(el){

            return el ? new Slide(el) : null;

        }



        /**

        * Gets the event's data for the given event on the right format. Depending on whether

        * v2compatible is being used or not.

        */

        function getEventData(eventName, v){

            var paramsPerEvent;



            if(!options.v2compatible){



                //using functions to run only the necessary bits within the object

                paramsPerEvent = {

                    afterRender: function(){

                        return {

                            section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),

                            slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])

                        };

                    },

                    onLeave: function(){

                        return {

                            origin: nullOrSection(v.activeSection),

                            destination: nullOrSection(v.element),

                            direction: v.direction

                        };

                    },



                    afterLoad: function(){

                        return paramsPerEvent.onLeave();

                    },



                    afterSlideLoad: function(){

                        return {

                            section: nullOrSection(v.section),

                            origin: nullOrSlide(v.prevSlide),

                            destination: nullOrSlide(v.destiny),

                            direction: v.direction

                        };

                    },



                    onSlideLeave: function(){

                        return paramsPerEvent.afterSlideLoad();

                    }

                };

            }

            else{

                paramsPerEvent = {

                    afterRender: function(){ return [container]; },

                    onLeave: function(){ return [v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.direction]; },

                    afterLoad: function(){ return [v.element, v.anchorLink, (v.sectionIndex + 1)]; },

                    afterSlideLoad: function(){ return [v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex]; },

                    onSlideLeave: function(){ return [v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex]; },

                };

            }



            return paramsPerEvent[eventName]();

        }



        /**

        * Performs the vertical movement (by CSS3 or by jQuery)

        */

        function performMovement(v){

            // using CSS3 translate functionality

            if (options.css3 && options.autoScrolling && !options.scrollBar) {



                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625

                // that's why we round it to 0.

                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';

                transformContainer(translate3d, true);



                //even when the scrollingSpeed is 0 there's a little delay, which might cause the

                //scrollingSpeed to change in case of using silentMoveTo();

                if(options.scrollingSpeed){

                    clearTimeout(afterSectionLoadsId);

                    afterSectionLoadsId = setTimeout(function () {

                        afterSectionLoads(v);

                    }, options.scrollingSpeed);

                }else{

                    afterSectionLoads(v);

                }

            }



            // using JS to animate

            else{

                var scrollSettings = getScrollSettings(v.dtop);

                FP.test.top = -v.dtop + 'px';



                scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function(){

                    if(options.scrollBar){



                        /* Hack!

                        The timeout prevents setting the most dominant section in the viewport as "active" when the user

                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.



                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.

                        */

                        setTimeout(function(){

                            afterSectionLoads(v);

                        },30);

                    }else{

                        afterSectionLoads(v);

                    }

                });

            }

        }



        /**

        * Gets the scrolling settings depending on the plugin autoScrolling option

        */

        function getScrollSettings(top){

            var scroll = {};



            //top property animation

            if(options.autoScrolling && !options.scrollBar){

                scroll.options = -top;

                scroll.element = $(WRAPPER_SEL)[0];

            }



            //window real scrolling

            else{

                scroll.options = top;

                scroll.element = window;

            }



            return scroll;

        }



        /**

        * Adds sections before or after the current one to create the infinite effect.

        */

        function createInfiniteSections(v){

            // Scrolling down

            if (!v.isMovementUp) {

                // Move all previous sections to after the active section

                after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());

            }

            else { // Scrolling up

                // Move all next sections to before the active section

                before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));

            }



            // Maintain the displayed position (now that we changed the element order)

            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);



            // Maintain the active slides visible in the viewport

            keepSlidesPosition();



            // save for later the elements that still need to be reordered

            v.wrapAroundElements = v.activeSection;



            // Recalculate animation variables

            v.dtop = v.element.offsetTop;

            v.yMovement = getYmovement(v.element);



            return v;

        }



        /**

        * Fix section order after continuousVertical changes have been animated

        */

        function continuousVerticalFixSectionOrder (v) {

            // If continuousVertical is in effect (and autoScrolling would also be in effect then),

            // finish moving the elements around so the direct navigation will function more simply

            if (v.wrapAroundElements == null) {

                return;

            }



            if (v.isMovementUp) {

                before($(SECTION_SEL)[0], v.wrapAroundElements);

            }

            else {

                after($(SECTION_SEL)[$(SECTION_SEL).length-1], v.wrapAroundElements);

            }



            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);



            // Maintain the active slides visible in the viewport

            keepSlidesPosition();

        }



        /**

        * Actions to do once the section is loaded.

        */

        function afterSectionLoads (v){

            continuousVerticalFixSectionOrder(v);



            //callback (afterLoad) if the site is not just resizing and readjusting the slides

            if(isFunction(options.afterLoad) && !v.localIsResizing){

                fireCallback('afterLoad', v);

            }



            if(options.scrollOverflow){

                options.scrollOverflowHandler.afterLoad();

            }



            if(!v.localIsResizing){

                playMedia(v.element);

            }



            addClass(v.element, COMPLETELY);

            removeClass(siblings(v.element), COMPLETELY);

            lazyLoadOthers();



            canScroll = true;



            if(isFunction(v.callback)){

                v.callback();

            }

        }



        /**

        * Sets the value for the given attribute from the `data-` attribute with the same suffix

        * ie: data-srcset ==> srcset  |  data-src ==> src

        */

        function setSrc(element, attribute){

            element.setAttribute(attribute, element.getAttribute('data-' + attribute));

            element.removeAttribute('data-' + attribute);

        }



        /**

        * Makes sure lazyload is done for other sections in the viewport that are not the

        * active one. 

        */

        function lazyLoadOthers(){

            var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0];



            //quitting when it doesn't apply

            if (!options.lazyLoading || !hasAutoHeightSections){

                return;

            }



            //making sure to lazy load auto-height sections that are in the viewport

            $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function(section){

                if(isSectionInViewport(section)){

                    lazyLoad(section);

                }

            });

        }



        /**

        * Lazy loads image, video and audio elements.

        */

        function lazyLoad(destiny){

            if (!options.lazyLoading){

                return;

            }



            var panel = getSlideOrSection(destiny);



            $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element){

                ['src', 'srcset'].forEach(function(type){

                    var attribute = element.getAttribute('data-' + type);

                    if(attribute != null && attribute){

                        setSrc(element, type);

                        element.addEventListener('load', function(){

                            onMediaLoad(destiny);

                        });

                    }

                });



                if(matches(element, 'source')){

                    var elementToPlay =  closest(element, 'video, audio');

                    if(elementToPlay){

                        elementToPlay.load();

                        elementToPlay.onloadeddata = function(){

                            onMediaLoad(destiny);

                        }

                    }

                }

            });

        }



        /**

        * Callback firing when a lazy load media element has loaded.

        * Making sure it only fires one per section in normal conditions (if load time is not huge)

        */

        function onMediaLoad(section){

            if(options.scrollOverflow){

                clearTimeout(g_mediaLoadedId);

                g_mediaLoadedId = setTimeout(function(){

                    scrollBarHandler.createScrollBar(section);

                }, 200);

            }

        }



        /**

        * Plays video and audio elements.

        */

        function playMedia(destiny){

            var panel = getSlideOrSection(destiny);



            //playing HTML5 media elements

            $('video, audio', panel).forEach(function(element){

                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {

                    element.play();

                }

            });



            //youtube videos

            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){

                if ( element.hasAttribute('data-autoplay') ){

                    playYoutube(element);

                }



                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.

                element.onload = function() {

                    if ( element.hasAttribute('data-autoplay') ){

                        playYoutube(element);

                    }

                };

            });

        }



        /**

        * Plays a youtube video

        */

        function playYoutube(element){

            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

        }



        /**

        * Stops video and audio elements.

        */

        function stopMedia(destiny){

            var panel = getSlideOrSection(destiny);



            //stopping HTML5 media elements

            $('video, audio', panel).forEach(function(element){

                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {

                    element.pause();

                }

            });



            //youtube videos

            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){

                if( /youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')){

                    element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');

                }

            });

        }



        /**

        * Gets the active slide (or section) for the given section

        */

        function getSlideOrSection(destiny){

            var slide = $(SLIDE_ACTIVE_SEL, destiny);

            if( slide.length ) {

                destiny = slide[0];

            }



            return destiny;

        }



        /**

        * Scrolls to the anchor in the URL when loading the site

        */

        function scrollToAnchor(){

            var anchors =  getAnchorsURL();

            var sectionAnchor = anchors.section;

            var slideAnchor = anchors.slide;



            if(sectionAnchor){  //if theres any #

                if(options.animateAnchor){

                    scrollPageAndSlide(sectionAnchor, slideAnchor);

                }else{

                    silentMoveTo(sectionAnchor, slideAnchor);

                }

            }

        }



        /**

        * Detecting any change on the URL to scroll to the given anchor link

        * (a way to detect back history button as we play with the hashes on the URL)

        */

        function hashChangeHandler(){

            if(!isScrolling && !options.lockAnchors){

                var anchors = getAnchorsURL();

                var sectionAnchor = anchors.section;

                var slideAnchor = anchors.slide;



                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');

                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);



                if(sectionAnchor && sectionAnchor.length){

                    /*in order to call scrollpage() only once for each destination at a time

                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`

                    event is fired on every scroll too.*/

                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove

                        || isFirstScrollMove

                        || (!slideMoving && lastScrolledSlide != slideAnchor )){



                        scrollPageAndSlide(sectionAnchor, slideAnchor);

                    }

                }

            }

        }



        //gets the URL anchors (section and slide)

        function getAnchorsURL(){

            var section;

            var slide;

            var hash = window.location.hash;



            if(hash.length){

                //getting the anchor link in the URL and deleting the `#`

                var anchorsParts =  hash.replace('#', '').split('/');



                //using / for visual reasons and not as a section/slide separator #2803

                var isFunkyAnchor = hash.indexOf('#/') > -1;



                section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);



                var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

                if(slideAnchor && slideAnchor.length){

                    slide = decodeURIComponent(slideAnchor);

                }

            }



            return {

                section: section,

                slide: slide

            };

        }



        //Sliding with arrow keys, both, vertical and horizontal

        function keydownHandler(e) {

            clearTimeout(keydownId);



            var activeElement = document.activeElement;

            var keyCode = e.keyCode;



            //tab?

            if(keyCode === 9){

                onTab(e);

            }



            else if(!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') &&

                activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' &&

                options.keyboardScrolling && options.autoScrolling){



                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys

                var keyControls = [40, 38, 32, 33, 34];

                if(keyControls.indexOf(keyCode) > -1){

                    preventDefault(e);

                }



                controlPressed = e.ctrlKey;



                keydownId = setTimeout(function(){

                    onkeydown(e);

                },150);

            }

        }



        function tooltipTextHandler(){

            /*jshint validthis:true */

            trigger(prev(this), 'click');

        }



        //to prevent scrolling while zooming

        function keyUpHandler(e){

            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox

                controlPressed = e.ctrlKey;

            }

        }



        //binding the mousemove when the mouse's middle button is released

        function mouseDownHandler(e){

            //middle button

            if (e.which == 2){

                oldPageY = e.pageY;

                container.addEventListener('mousemove', mouseMoveHandler);

            }

        }



        //unbinding the mousemove when the mouse's middle button is released

        function mouseUpHandler(e){

            //middle button

            if (e.which == 2){

                container.removeEventListener('mousemove', mouseMoveHandler);

            }

        }



        /**

        * Makes sure the tab key will only focus elements within the current section/slide

        * preventing this way from breaking the page.

        * Based on "Modals and keyboard traps"

        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex

        */

        function onTab(e){

            var isShiftPressed = e.shiftKey;

            var activeElement = document.activeElement;

            var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));



            function preventAndFocusFirst(e){

                preventDefault(e);

                return focusableElements[0] ? focusableElements[0].focus() : null;

            }



            //outside any section or slide? Let's not hijack the tab!

            if(isFocusOutside(e)){

                return;

            }



            //is there an element with focus?

            if(activeElement){

                if(closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null){

                    activeElement = preventAndFocusFirst(e);

                }

            }



            //no element if focused? Let's focus the first one of the section/slide

            else{

                preventAndFocusFirst(e);

            }



            //when reached the first or last focusable element of the section/slide

            //we prevent the tab action to keep it in the last focusable element

            if(!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] ||

                isShiftPressed && activeElement == focusableElements[0]

            ){

                preventDefault(e);

            }

        }



        /**

        * Gets all the focusable elements inside the passed element.

        */

        function getFocusables(el){

            return [].slice.call($(focusableElementsString, el)).filter(function(item) {

                    return item.getAttribute('tabindex') !== '-1'

                    //are also not hidden elements (or with hidden parents)

                    && item.offsetParent !== null;

            });

        }



        /**

        * Determines whether the focus is outside fullpage.js sections/slides or not.

        */

        function isFocusOutside(e){

            var allFocusables = getFocusables(document);

            var currentFocusIndex = allFocusables.indexOf(document.activeElement);

            var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;

            var focusDestination = allFocusables[focusDestinationIndex];

            var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));

            var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));



            return !destinationItemSlide && !destinationItemSection;

        }



        //Scrolling horizontally when clicking on the slider controls.

        function slideArrowHandler(){

            /*jshint validthis:true */

            var section = closest(this, SECTION_SEL);



            /*jshint validthis:true */

            if (hasClass(this, SLIDES_PREV)) {

                if(isScrollAllowed.m.left){

                    moveSlideLeft(section);

                }

            } else {

                if(isScrollAllowed.m.right){

                    moveSlideRight(section);

                }

            }

        }



        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.

        function blurHandler(){

            isWindowFocused = false;

            controlPressed = false;

        }



        //Scrolls to the section when clicking the navigation bullet

        function sectionBulletHandler(e){

            preventDefault(e);



            /*jshint validthis:true */

            var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));

            scrollPage($(SECTION_SEL)[indexBullet]);

        }



        //Scrolls the slider to the given slide destination for the given section

        function slideBulletHandler(e){

            preventDefault(e);



            /*jshint validthis:true */

            var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];

            var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))];



            landscapeScroll(slides, destiny);

        }



        //Menu item handler when not using anchors or using lockAnchors:true

        function menuItemsHandler(e){

            if($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)){

                preventDefault(e);

                moveTo(this.getAttribute('data-menuanchor'));

            }

        }



        /**

        * Keydown event

        */

        function onkeydown(e){

            var shiftPressed = e.shiftKey;

            var activeElement = document.activeElement;

            var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');



            //do nothing if we can not scroll or we are not using horizotnal key arrows.

            if(!canScroll && [37,39].indexOf(e.keyCode) < 0){

                return;

            }



            switch (e.keyCode) {

                //up

                case 38:

                case 33:

                    if(isScrollAllowed.k.up){

                        moveSectionUp();

                    }

                    break;



                //down

                case 32: //spacebar



                    if(shiftPressed && isScrollAllowed.k.up && !isMediaFocused){

                        moveSectionUp();

                        break;

                    }

                /* falls through */

                case 40:

                case 34:

                    if(isScrollAllowed.k.down){

                        // space bar?

                        if(e.keyCode !== 32 || !isMediaFocused){

                            moveSectionDown();

                        }

                    }

                    break;



                //Home

                case 36:

                    if(isScrollAllowed.k.up){

                        moveTo(1);

                    }

                    break;



                //End

                case 35:

                     if(isScrollAllowed.k.down){

                        moveTo( $(SECTION_SEL).length );

                    }

                    break;



                //left

                case 37:

                    if(isScrollAllowed.k.left){

                        moveSlideLeft();

                    }

                    break;



                //right

                case 39:

                    if(isScrollAllowed.k.right){

                        moveSlideRight();

                    }

                    break;



                default:

                    return; // exit this handler for other keys

            }

        }



        /**

        * Detecting the direction of the mouse movement.

        * Used only for the middle button of the mouse.

        */

        var oldPageY = 0;

        function mouseMoveHandler(e){

            if(!options.autoScrolling){

                return;

            }

            if(canScroll){

                // moving up

                if (e.pageY < oldPageY && isScrollAllowed.m.up){

                    moveSectionUp();

                }



                // moving down

                else if(e.pageY > oldPageY && isScrollAllowed.m.down){

                    moveSectionDown();

                }

            }

            oldPageY = e.pageY;

        }



        /**

        * Scrolls horizontal sliders.

        */

        function landscapeScroll(slides, destiny, direction){

            var section = closest(slides, SECTION_SEL);

            var v = {

                slides: slides,

                destiny: destiny,

                direction: direction,

                destinyPos: {left: destiny.offsetLeft},

                slideIndex: index(destiny),

                section: section,

                sectionIndex: index(section, SECTION_SEL),

                anchorLink: section.getAttribute('data-anchor'),

                slidesNav: $(SLIDES_NAV_SEL, section)[0],

                slideAnchor: getAnchor(destiny),

                prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],

                prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),



                //caching the value of isResizing at the momment the function is called

                //because it will be checked later inside a setTimeout and the value might change

                localIsResizing: isResizing

            };

            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            v.direction = v.direction ? v.direction : v.xMovement;



            //important!! Only do it when not resizing

            if(!v.localIsResizing){

                //preventing from scrolling to the next/prev section when using scrollHorizontally

                canScroll = false;

            }



            if(options.onSlideLeave){



                //if the site is not just resizing and readjusting the slides

                if(!v.localIsResizing && v.xMovement!=='none'){

                    if(isFunction( options.onSlideLeave )){

                        if( fireCallback('onSlideLeave', v) === false){

                            slideMoving = false;

                            return;

                        }

                    }

                }

            }



            addClass(destiny, ACTIVE);

            removeClass(siblings(destiny), ACTIVE);



            if(!v.localIsResizing){

                stopMedia(v.prevSlide);

                lazyLoad(destiny);

            }



            if(!options.loopHorizontal && options.controlArrows){

                //hidding it for the fist slide, showing for the rest

                toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex!==0);



                //hidding it for the last slide, showing for the rest

                toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);

            }



            //only changing the URL if the slides are in the current section (not for resize re-adjusting)

            if(hasClass(section, ACTIVE) && !v.localIsResizing){

                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);

            }



            performHorizontalMove(slides, v, true);

        }





        function afterSlideLoads(v){

            activeSlidesNavigation(v.slidesNav, v.slideIndex);



            //if the site is not just resizing and readjusting the slides

            if(!v.localIsResizing){

                if(isFunction( options.afterSlideLoad )){

                    fireCallback('afterSlideLoad', v);

                }



                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally

                //and to prevent double scroll right after a windows resize

                canScroll = true;



                playMedia(v.destiny);

            }



            //letting them slide again

            slideMoving = false;

        }



        /**

        * Performs the horizontal movement. (CSS3 or jQuery)

        *

        * @param fireCallback {Bool} - determines whether or not to fire the callback

        */

        function performHorizontalMove(slides, v, fireCallback){

            var destinyPos = v.destinyPos;



            if(options.css3){

                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';



                FP.test.translate3dH[v.sectionIndex] = translate3d;

                css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));



                afterSlideLoadsId = setTimeout(function(){

                    if(fireCallback){

                        afterSlideLoads(v);

                    }

                }, options.scrollingSpeed);

            }else{

                FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);



                scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function(){

                    if(fireCallback){

                        afterSlideLoads(v);

                    }

                });

            }

        }



        /**

        * Sets the state for the horizontal bullet navigations.

        */

        function activeSlidesNavigation(slidesNav, slideIndex){

            if(options.slidesNavigation && slidesNav != null){

                removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);

                addClass( $('a', $('li', slidesNav)[slideIndex] ), ACTIVE);

            }

        }



        var previousHeight = windowsHeight;



        /*

        * Resize event handler.

        */        

        function resizeHandler(){

            clearTimeout(resizeId);



            //in order to call the functions only when the resize is finished

            //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    

            resizeId = setTimeout(function(){



                //issue #3336 

                //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)

                //so we check it 3 times with intervals in that case

                for(var i = 0; i< 4; i++){

                    resizeHandlerId = setTimeout(resizeActions, 200 * i);

                }

            }, 200);

        }



        /**

        * When resizing the site, we adjust the heights of the sections, slimScroll...

        */

        function resizeActions(){



            //checking if it needs to get responsive

            responsive();



            // rebuild immediately on touch devices

            if (isTouchDevice) {

                var activeElement = document.activeElement;



                //if the keyboard is NOT visible

                if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {

                    var currentHeight = getWindowHeight();



                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){

                        reBuild(true);

                        previousHeight = currentHeight;

                    }

                }

            }

            else{

                adjustToNewViewport();

            }

        }



        /**

        * Checks if the site needs to get responsive and disables autoScrolling if so.

        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.

        */

        function responsive(){

            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity

            var heightLimit = options.responsiveHeight;



            //only calculating what we need. Remember its called on the resize event.

            var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;

            var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;



            if(widthLimit && heightLimit){

                setResponsive(isBreakingPointWidth || isBreakingPointHeight);

            }

            else if(widthLimit){

                setResponsive(isBreakingPointWidth);

            }

            else if(heightLimit){

                setResponsive(isBreakingPointHeight);

            }

        }



        /**

        * Adds transition animations for the given element

        */

        function addAnimation(element){

            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;



            removeClass(element, NO_TRANSITION);

            return css(element, {

                '-webkit-transition': transition,

                'transition': transition

            });

        }



        /**

        * Remove transition animations for the given element

        */

        function removeAnimation(element){

            return addClass(element, NO_TRANSITION);

        }



        /**

        * Activating the vertical navigation bullets according to the given slide name.

        */

        function activateNavDots(name, sectionIndex){

            if(options.navigation && $(SECTION_NAV_SEL)[0] != null){

                    removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);

                if(name){

                    addClass( $('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);

                }else{

                    addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);

                }

            }

        }



        /**

        * Activating the website main menu elements according to the given slide name.

        */

        function activateMenuElement(name){

            $(options.menu).forEach(function(menu) {

                if(options.menu && menu != null){

                    removeClass($(ACTIVE_SEL, menu), ACTIVE);

                    addClass($('[data-menuanchor="'+name+'"]', menu), ACTIVE);

                }

            });

        }



        /**

        * Sets to active the current menu and vertical nav items.

        */

        function activateMenuAndNav(anchor, index){

            activateMenuElement(anchor);

            activateNavDots(anchor, index);

        }



        /**

        * Retuns `up` or `down` depending on the scrolling movement to reach its destination

        * from the current section.

        */

        function getYmovement(destiny){

            var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            var toIndex = index(destiny, SECTION_SEL);

            if( fromIndex == toIndex){

                return 'none';

            }

            if(fromIndex > toIndex){

                return 'up';

            }

            return 'down';

        }



        /**

        * Retuns `right` or `left` depending on the scrolling movement to reach its destination

        * from the current slide.

        */

        function getXmovement(fromIndex, toIndex){

            if( fromIndex == toIndex){

                return 'none';

            }

            if(fromIndex > toIndex){

                return 'left';

            }

            return 'right';

        }



        function addTableClass(element){

            //In case we are styling for the 2nd time as in with reponsiveSlides

            if(!hasClass(element, TABLE)){

                var wrapper = document.createElement('div');

                wrapper.className = TABLE_CELL;

                wrapper.style.height = getTableHeight(element) + 'px';



                addClass(element, TABLE);

                wrapInner(element, wrapper);

            }

        }



        function getTableHeight(element){

            var sectionHeight = windowsHeight;



            if(options.paddingTop || options.paddingBottom){

                var section = element;

                if(!hasClass(section, SECTION)){

                    section = closest(element, SECTION_SEL);

                }



                var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']);

                sectionHeight = (windowsHeight - paddings);

            }



            return sectionHeight;

        }



        /**

        * Adds a css3 transform property to the container class with or without animation depending on the animated param.

        */

        function transformContainer(translate3d, animated){

            if(animated){

                addAnimation(container);

            }else{

                removeAnimation(container);

            }



            css(container, getTransforms(translate3d));

            FP.test.translate3d = translate3d;



            //syncronously removing the class after the animation has been applied.

            setTimeout(function(){

                removeClass(container, NO_TRANSITION);

            },10);

        }



        /**

        * Gets a section by its anchor / index

        */

        function getSectionByAnchor(sectionAnchor){

            var section = $(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]', container)[0];

            if(!section){

                var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor -1 : 0;

                section = $(SECTION_SEL)[sectionIndex];

            }



            return section;

        }



        /**

        * Gets a slide inside a given section by its anchor / index

        */

        function getSlideByAnchor(slideAnchor, section){

            var slide = $(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]', section)[0];

            if(slide == null){

                slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;

                slide = $(SLIDE_SEL, section)[slideAnchor];

            }



            return slide;

        }



        /**

        * Scrolls to the given section and slide anchors

        */

        function scrollPageAndSlide(sectionAnchor, slideAnchor){

            var section = getSectionByAnchor(sectionAnchor);



            //do nothing if there's no section with the given anchor name

            if(section == null) return;



            var slide = getSlideByAnchor(slideAnchor, section);



            //we need to scroll to the section and then to the slide

            if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)){

                scrollPage(section, function(){

                    scrollSlider(slide);

                });

            }

            //if we were already in the section

            else{

                scrollSlider(slide);

            }

        }



        /**

        * Scrolls the slider to the given slide destination for the given section

        */

        function scrollSlider(slide){

            if(slide != null){

                landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);

            }

        }



        /**

        * Creates a landscape navigation bar with dots for horizontal sliders.

        */

        function addSlidesNavigation(section, numSlides){

            appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);

            var nav = $(SLIDES_NAV_SEL, section)[0];



            //top or bottom

            addClass(nav, 'fp-' + options.slidesNavPosition);



            for(var i=0; i< numSlides; i++){

                appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">'+ getBulletLinkName(i, 'Slide') +'</span><span></span></a></li>'), $('ul', nav)[0] );

            }



            //centering it

            css(nav, {'margin-left': '-' + (nav.innerWidth/2) + 'px'});



            addClass($('a', $('li', nav)[0] ), ACTIVE);

        }





        /**

        * Sets the state of the website depending on the active section/slide.

        * It changes the URL hash when needed and updates the body class.

        */

        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){

            var sectionHash = '';



            if(options.anchors.length && !options.lockAnchors){



                //isn't it the first slide?

                if(slideIndex){

                    if(anchorLink != null){

                        sectionHash = anchorLink;

                    }



                    //slide without anchor link? We take the index instead.

                    if(slideAnchor == null){

                        slideAnchor = slideIndex;

                    }



                    lastScrolledSlide = slideAnchor;

                    setUrlHash(sectionHash + '/' + slideAnchor);



                //first slide won't have slide anchor, just the section one

                }else if(slideIndex != null){

                    lastScrolledSlide = slideAnchor;

                    setUrlHash(anchorLink);

                }



                //section without slides

                else{

                    setUrlHash(anchorLink);

                }

            }



            setBodyClass();

        }



        /**

        * Sets the URL hash.

        */

        function setUrlHash(url){

            if(options.recordHistory){

                location.hash = url;

            }else{

                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)

                if(isTouchDevice || isTouch){

                    window.history.replaceState(undefined, undefined, '#' + url);

                }else{

                    var baseUrl = window.location.href.split('#')[0];

                    window.location.replace( baseUrl + '#' + url );

                }

            }

        }



        /**

        * Gets the anchor for the given slide / section. Its index will be used if there's none.

        */

        function getAnchor(element){

            if(!element){

                return null;

            }

            var anchor = element.getAttribute('data-anchor');

            var elementIndex = index(element);



            //Slide without anchor link? We take the index instead.

            if(anchor == null){

                anchor = elementIndex;

            }



            return anchor;

        }



        /**

        * Sets a class for the body of the page depending on the active section / slide

        */

        function setBodyClass(){

            var section = $(SECTION_ACTIVE_SEL)[0];

            var slide = $(SLIDE_ACTIVE_SEL, section)[0];



            var sectionAnchor = getAnchor(section);

            var slideAnchor = getAnchor(slide);



            var text = String(sectionAnchor);



            if(slide){

                text = text + '-' + slideAnchor;

            }



            //changing slash for dash to make it a valid CSS style

            text = text.replace('/', '-').replace('#','');



            //removing previous anchor classes

            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");

            $body.className = $body.className.replace(classRe, '');



            //adding the current anchor

            addClass($body, VIEWING_PREFIX + '-' + text);

        }



        /**

        * Checks for translate3d support

        * @return boolean

        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support

        */

        function support3d() {

            var el = document.createElement('p'),

                has3d,

                transforms = {

                    'webkitTransform':'-webkit-transform',

                    'OTransform':'-o-transform',

                    'msTransform':'-ms-transform',

                    'MozTransform':'-moz-transform',

                    'transform':'transform'

                };



            //preventing the style p:empty{display: none;} from returning the wrong result

            el.style.display = 'block'



            // Add it to the body to get the computed style.

            document.body.insertBefore(el, null);



            for (var t in transforms) {

                if (el.style[t] !== undefined) {

                    el.style[t] = 'translate3d(1px,1px,1px)';

                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);

                }

            }



            document.body.removeChild(el);



            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');

        }



        /**

        * Removes the auto scrolling action fired by the mouse wheel and trackpad.

        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.

        */

        function removeMouseWheelHandler(){

            if (document.addEventListener) {

                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper

                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox

                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox

            } else {

                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8

            }

        }



        /**

        * Adds the auto scrolling action for the mouse wheel and trackpad.

        * After this function is called, the mousewheel and trackpad movements will scroll through sections

        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel

        */

        function addMouseWheelHandler(){

            var prefix = '';

            var _addEventListener;



            if (window.addEventListener){

                _addEventListener = "addEventListener";

            }else{

                _addEventListener = "attachEvent";

                prefix = 'on';

            }



            // detect available wheel event

            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"

                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"

                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

            var passiveEvent = g_supportsPassive ? {passive: false }: false;



            if(support == 'DOMMouseScroll'){

                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);

            }



            //handle MozMousePixelScroll in older Firefox

            else{

                document[ _addEventListener ](prefix + support, MouseWheelHandler, passiveEvent);

            }

        }



        /**

        * Binding the mousemove when the mouse's middle button is pressed

        */

        function addMiddleWheelHandler(){

            container.addEventListener('mousedown', mouseDownHandler);

            container.addEventListener('mouseup', mouseUpHandler);

        }



        /**

        * Unbinding the mousemove when the mouse's middle button is released

        */

        function removeMiddleWheelHandler(){

            container.removeEventListener('mousedown', mouseDownHandler);

            container.removeEventListener('mouseup', mouseUpHandler);

        }



        /**

        * Adds the possibility to auto scroll through sections on touch devices.

        */

        function addTouchHandler(){

            if(isTouchDevice || isTouch){

                if(options.autoScrolling){

                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});

                    $body.addEventListener(events.touchmove, preventBouncing, {passive: false});

                }



                var touchWrapper = options.touchWrapper;

                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);

                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});



                touchWrapper.addEventListener(events.touchstart, touchStartHandler);

                touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {passive: false});

            }

        }



        /**

        * Removes the auto scrolling for touch devices.

        */

        function removeTouchHandler(){

            if(isTouchDevice || isTouch){

                // normalScrollElements requires it off #2691

                if(options.autoScrolling){

                    $body.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});

                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});

                }



                var touchWrapper = options.touchWrapper;

                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);

                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});

            }

        }



        /*

        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)

        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx

        */

        function getMSPointer(){

            var pointer;



            //IE >= 11 & rest of browsers

            if(window.PointerEvent){

                pointer = { down: 'pointerdown', move: 'pointermove'};

            }



            //IE < 11

            else{

                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};

            }



            return pointer;

        }



        /**

        * Gets the pageX and pageY properties depending on the browser.

        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854

        */

        function getEventsPage(e){

            var events = [];



            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);

            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);



            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008

            if(isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined'){

                events.y = e.touches[0].pageY;

                events.x = e.touches[0].pageX;

            }



            return events;

        }



        /**

        * Slides silently (with no animation) the active slider to the given slide.

        * @param noCallback {bool} true or defined -> no callbacks

        */

        function silentLandscapeScroll(activeSlide, noCallbacks){

            setScrollingSpeed(0, 'internal');



            if(typeof noCallbacks !== 'undefined'){

                //preventing firing callbacks afterSlideLoad etc.

                isResizing = true;

            }



            landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);



            if(typeof noCallbacks !== 'undefined'){

                isResizing = false;

            }



            setScrollingSpeed(originals.scrollingSpeed, 'internal');

        }



        /**

        * Scrolls silently (with no animation) the page to the given Y position.

        */

        function silentScroll(top){

            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625

            // that's why we round it to 0.

            var roundedTop = Math.round(top);



            if (options.css3 && options.autoScrolling && !options.scrollBar){

                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';

                transformContainer(translate3d, false);

            }

            else if(options.autoScrolling && !options.scrollBar){

                css(container, {'top': -roundedTop + 'px'});

                FP.test.top = -roundedTop + 'px';

            }

            else{

                var scrollSettings = getScrollSettings(roundedTop);

                setScrolling(scrollSettings.element, scrollSettings.options);

            }

        }



        /**

        * Returns the cross-browser transform string.

        */

        function getTransforms(translate3d){

            return {

                '-webkit-transform': translate3d,

                '-moz-transform': translate3d,

                '-ms-transform':translate3d,

                'transform': translate3d

            };

        }



        /**

        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)

        * @type  m (mouse) or k (keyboard)

        */

        function setIsScrollAllowed(value, direction, type){

            //up, down, left, right

            if(direction !== 'all'){

                isScrollAllowed[type][direction] = value;

            }



            //all directions?

            else{

                Object.keys(isScrollAllowed[type]).forEach(function(key){

                    isScrollAllowed[type][key] = value;

                });

            }

        }



        /*

        * Destroys fullpage.js plugin events and optinally its html markup and styles

        */

        function destroy(all){

            setAutoScrolling(false, 'internal');

            setAllowScrolling(true);

            setMouseHijack(false);

            setKeyboardScrolling(false);

            addClass(container, DESTROYED);



            [

                afterSlideLoadsId, 

                afterSectionLoadsId,

                resizeId,

                scrollId,

                scrollId2,

                g_doubleCheckHeightId,

                resizeHandlerId

            ].forEach(function(timeoutId){

                clearTimeout(timeoutId);

            });



            window.removeEventListener('scroll', scrollHandler);

            window.removeEventListener('hashchange', hashChangeHandler);

            window.removeEventListener('resize', resizeHandler);



            document.removeEventListener('keydown', keydownHandler);

            document.removeEventListener('keyup', keyUpHandler);



            ['click', 'touchstart'].forEach(function(eventName){

                document.removeEventListener(eventName, delegatedEvents);

            });



            ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName){

                document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!

            });



            //lets make a mess!

            if(all){

                destroyStructure();

            }

        }



        /*

        * Removes inline styles added by fullpage.js

        */

        function destroyStructure(){

            //reseting the `top` or `translate` properties to 0

            silentScroll(0);



            //loading all the lazy load content

            $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function(item){

                setSrc(item, 'src');

            });



            $('img[data-srcset]').forEach(function(item){

                setSrc(item, 'srcset');

            });



            remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL));



            //removing inline styles

            css($(SECTION_SEL), {

                'height': '',

                'background-color' : '',

                'padding': ''

            });



            css($(SLIDE_SEL), {

                'width': ''

            });



            css(container, {

                'height': '',

                'position': '',

                '-ms-touch-action': '',

                'touch-action': ''

            });



            css($htmlBody, {

                'overflow': '',

                'height': ''

            });



            // remove .fp-enabled class

            removeClass($html, ENABLED);



            // remove .fp-responsive class

            removeClass($body, RESPONSIVE);



            // remove all of the .fp-viewing- classes

            $body.className.split(/\s+/).forEach(function (className) {

                if (className.indexOf(VIEWING_PREFIX) === 0) {

                    removeClass($body, className);

                }

            });



            //removing added classes

            $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function(item){

                if(options.scrollOverflowHandler && options.scrollOverflow){

                    options.scrollOverflowHandler.remove(item);

                }

                removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);

                var previousStyles = item.getAttribute('data-fp-styles');

                if(previousStyles){

                    item.setAttribute('style', item.getAttribute('data-fp-styles'));

                }



                //removing anchors if they were not set using the HTML markup

                if(hasClass(item, SECTION) && !g_initialAnchorsInDom){

                    item.removeAttribute('data-anchor');

                }

            });



            //removing the applied transition from the fullpage wrapper

            removeAnimation(container);



            //Unwrapping content

            [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL,SLIDES_WRAPPER_SEL].forEach(function(selector){

                $(selector, container).forEach(function(item){

                    //unwrap not being use in case there's no child element inside and its just text

                    unwrap(item);

                });

            });



            //removing the applied transition from the fullpage wrapper

            css(container, {

                '-webkit-transition': 'none',

                'transition': 'none'

            });



            //scrolling the page to the top with no animation

            window.scrollTo(0, 0);



            //removing selectors

            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];

            usedSelectors.forEach(function(item){

                removeClass($('.' + item), item);

            });

        }



        /*

        * Sets the state for a variable with multiple states (original, and temporal)

        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.

        * This function is used to keep track of both states, the original and the temporal one.

        * If type is not 'internal', then we assume the user is globally changing the variable.

        */

        function setVariableState(variable, value, type){

            options[variable] = value;

            if(type !== 'internal'){

                originals[variable] = value;

            }

        }



        /**

        * Displays warnings

        */

        function displayWarnings(){

            var l = options['li' + 'c' + 'enseK' + 'e' + 'y'];

            var msgStyle = 'font-size: 15px;background:yellow;'



            if(!isOK){

                showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:');

                showError('error', 'https://github.com/alvarotrigo/fullPage.js#options.');

            }

            else if(l && l.length < 20){

                console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);

                console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);

            }



            if(hasClass($html, ENABLED)){

                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');

                return;

            }



            // Disable mutually exclusive settings

            if (options.continuousVertical &&

                (options.loopTop || options.loopBottom)) {

                options.continuousVertical = false;

                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');

            }



            if(options.scrollOverflow &&

               (options.scrollBar || !options.autoScrolling)){

                showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');

            }



            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){

                options.continuousVertical = false;

                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');

            }



            if(options.scrollOverflow && options.scrollOverflowHandler == null){

                options.scrollOverflow = false;

                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');

            }



            //using extensions? Wrong file!

            extensions.forEach(function(extension){

                //is the option set to true?

                if(options[extension]){

                    showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: '+ extension);

                }

            });



            //anchors can not have the same value as any element ID or NAME

            options.anchors.forEach(function(name){



                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)

                var nameAttr = [].slice.call($('[name]')).filter(function(item) {

                    return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase();

                });



                var idAttr = [].slice.call($('[id]')).filter(function(item) {

                    return item.getAttribute('id') && item.getAttribute('id').toLowerCase() == name.toLowerCase();

                });



                if(idAttr.length || nameAttr.length ){

                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');

                    var propertyName = idAttr.length ? 'id' : 'name';



                    if(idAttr.length || nameAttr.length){

                        showError('error', '"' + name + '" is is being used by another element `'+ propertyName +'` property');

                    }

                }

            });

        }



        /**

        * Getting the position of the element to scroll when using jQuery animations

        */

        function getScrolledPosition(element){

            var position;



            //is not the window element and is a slide?

            if(element.self != window && hasClass(element, SLIDES_WRAPPER)){

                position = element.scrollLeft;

            }

            else if(!options.autoScrolling  || options.scrollBar){

                position = getScrollTop();

            }

            else{

                position = element.offsetTop;

            }



            //gets the top property of the wrapper

            return position;

        }



        /**

        * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false

        * http://stackoverflow.com/a/16136789/1081396

        */

        function scrollTo(element, to, duration, callback) {

            var start = getScrolledPosition(element);

            var change = to - start;

            var currentTime = 0;

            var increment = 20;

            activeAnimation = true;



            var animateScroll = function(){

                if(activeAnimation){ //in order to stope it from other function whenever we want

                    var val = to;



                    currentTime += increment;



                    if(duration){

                        val = window.fp_easings[options.easing](currentTime, start, change, duration);

                    }



                    setScrolling(element, val);



                    if(currentTime < duration) {

                        setTimeout(animateScroll, increment);

                    }else if(typeof callback !== 'undefined'){

                        callback();

                    }

                }else if (currentTime < duration){

                    callback();

                }

            };



            animateScroll();

        }



        /**

        * Scrolls the page / slider the given number of pixels.

        * It will do it one or another way dependiong on the library's config.

        */

        function setScrolling(element, val){

            if(!options.autoScrolling || options.scrollBar || (element.self != window && hasClass(element, SLIDES_WRAPPER))){



                //scrolling horizontally through the slides?

                if(element.self != window  && hasClass(element, SLIDES_WRAPPER)){

                    element.scrollLeft = val;

                }

                //vertical scroll

                else{

                    element.scrollTo(0, val);

                }

            }else{

                 element.style.top = val + 'px';

            }

        }



        /**

        * Gets the active slide.

        */

        function getActiveSlide(){

            var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];

            return nullOrSlide(activeSlide);

        }



        /**

        * Gets the active section.

        */

        function getActiveSection(){

            return new Section($(SECTION_ACTIVE_SEL)[0]);

        }



        /**

        * Item. Slide or Section objects share the same properties.

        */

        function Item(el, selector){

            this.anchor = el.getAttribute('data-anchor');

            this.item = el;

            this.index = index(el, selector);

            this.isLast = this.index === el.parentElement.querySelectorAll(selector).length -1;

            this.isFirst = !this.index;

        }



        /**

        * Section object

        */

        function Section(el){

            Item.call(this, el, SECTION_SEL);

        }



        /**

        * Slide object

        */

        function Slide(el){

            Item.call(this, el, SLIDE_SEL);

        }



        return FP;

    } //end of $.fn.fullpage



    //utils

    /**

    * Shows a message in the console of the given type.

    */

    function showError(type, text){

        window.console && window.console[type] && window.console[type]('fullPage: ' + text);

    }



    /**

    * Equivalent or jQuery function $().

    */

    function $(selector, context){

        context = arguments.length > 1 ? context : document;

        return context ? context.querySelectorAll(selector) : null;

    }



    /**

    * Extends a given Object properties and its childs.

    */

    function deepExtend(out) {

        out = out || {};

        for (var i = 1, len = arguments.length; i < len; ++i){

            var obj = arguments[i];



            if(!obj){

              continue;

            }



            for(var key in obj){

              if (!obj.hasOwnProperty(key)){

                continue;

              }



              // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/

              if (Object.prototype.toString.call(obj[key]) === '[object Object]'){

                out[key] = deepExtend(out[key], obj[key]);

                continue;

              }



              out[key] = obj[key];

            }

        }

        return out;

    }



    /**

    * Checks if the passed element contains the passed class.

    */

    function hasClass(el, className){

        if(el == null){

            return false;

        }

        if (el.classList){

            return el.classList.contains(className);

        }

        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);

    }



    /**

    * Gets the window height. Crossbrowser.

    */

    function getWindowHeight(){

        return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;

    }



    /**

    * Gets the window width.

    */

    function getWindowWidth(){

        return window.innerWidth;

    }



    /**

    * Set's the CSS properties for the passed item/s.

    * @param {NodeList|HTMLElement} items

    * @param {Object} props css properties and values.

    */

    function css(items, props) {

        items = getList(items);



        var key;

        for (key in props) {

            if (props.hasOwnProperty(key)) {

                if (key !== null) {

                    for (var i = 0; i < items.length; i++) {

                        var item = items[i];

                        item.style[key] = props[key];

                    }

                }

            }

        }



        return items;

    }



    /**

    * Generic function to get the previous or next element.

    */

    function until(item, selector, fn){

        var sibling = item[fn];

        while(sibling && !matches(sibling, selector)){

            sibling = sibling[fn];

        }



        return sibling;

    }



    /**

    * Gets the previous element to the passed element that matches the passed selector.

    */

    function prevUntil(item, selector){

        return until(item, selector, 'previousElementSibling');

    }



    /**

    * Gets the next element to the passed element that matches the passed selector.

    */

    function nextUntil(item, selector){

        return until(item, selector, 'nextElementSibling');

    }



    /**

    * Gets the previous element to the passed element.

    */

    function prev(item){

        return item.previousElementSibling;

    }



    /**

    * Gets the next element to the passed element.

    */

    function next(item){

        return item.nextElementSibling;

    }



    /**

    * Gets the last element from the passed list of elements.

    */

    function last(item){

        return item[item.length-1];

    }



    /**

    * Gets index from the passed element.

    * @param {String} selector is optional.

    */

    function index(item, selector) {

        item = isArrayOrList(item) ? item[0] : item;

        var children = selector != null? $(selector, item.parentNode) : item.parentNode.childNodes;

        var num = 0;

        for (var i=0; i<children.length; i++) {

             if (children[i] == item) return num;

             if (children[i].nodeType==1) num++;

        }

        return -1;

    }



    /**

    * Gets an iterable element for the passed element/s

    */

    function getList(item){

        return !isArrayOrList(item) ? [item] : item;

    }



    /**

    * Adds the display=none property for the passed element/s

    */

    function hide(el){

        el = getList(el);



        for(var i = 0; i<el.length; i++){

            el[i].style.display = 'none';

        }

        return el;

    }



    /**

    * Adds the display=block property for the passed element/s

    */

    function show(el){

        el = getList(el);



        for(var i = 0; i<el.length; i++){

            el[i].style.display = 'block';

        }

        return el;

    }



    /**

    * Checks if the passed element is an iterable element or not

    */

    function isArrayOrList(el){

        return Object.prototype.toString.call( el ) === '[object Array]' ||

            Object.prototype.toString.call( el ) === '[object NodeList]';

    }



    /**

    * Adds the passed class to the passed element/s

    */

    function addClass(el, className) {

        el = getList(el);



        for(var i = 0; i<el.length; i++){

            var item = el[i];

            if (item.classList){

                item.classList.add(className);

            }

            else{

              item.className += ' ' + className;

            }

        }

        return el;

    }



    /**

    * Removes the passed class to the passed element/s

    * @param {String} `className` can be multiple classnames separated by whitespace

    */

    function removeClass(el, className){

        el = getList(el);



        var classNames = className.split(' ');



        for(var a = 0; a<classNames.length; a++){

            className = classNames[a];

            for(var i = 0; i<el.length; i++){

                var item = el[i];

                if (item.classList){

                    item.classList.remove(className);

                }

                else{

                    item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

                }

            }

        }

        return el;

    }



    /**

    * Appends the given element ot the given parent.

    */

    function appendTo(el, parent){

        parent.appendChild(el);

    }



    /**

    Usage:



    var wrapper = document.createElement('div');

    wrapper.className = 'fp-slides';

    wrap($('.slide'), wrapper);



    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)

    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)

    */

    function wrap(toWrap, wrapper, isWrapAll) {

        var newParent;

        wrapper = wrapper || document.createElement('div');

        for(var i = 0; i < toWrap.length; i++){

            var item = toWrap[i];

            if(isWrapAll && !i || !isWrapAll){

                newParent = wrapper.cloneNode(true);

                item.parentNode.insertBefore(newParent, item);

            }

            newParent.appendChild(item);

        }

        return toWrap;

    }



    /**

    Usage:

    var wrapper = document.createElement('div');

    wrapper.className = 'fp-slides';

    wrap($('.slide'), wrapper);



    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)

    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)

    */

    function wrapAll(toWrap, wrapper) {

        wrap(toWrap, wrapper, true);

    }



    /**

    * Usage:

    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');

    * wrapInner(document.querySelector('#pepe'), element);

    *

    * https://jsfiddle.net/zexxz0tw/6/

    *

    * https://stackoverflow.com/a/21817590/1081396

    */

    function wrapInner(parent, wrapper) {

        if (typeof wrapper === "string"){

            wrapper = createElementFromHTML(wrapper);

        }



        parent.appendChild(wrapper);



        while(parent.firstChild !== wrapper){

            wrapper.appendChild(parent.firstChild);

       }

    }



    /**

    * Usage:

    * unwrap(document.querySelector('#pepe'));

    * unwrap(element);

    *

    * https://jsfiddle.net/szjt0hxq/1/

    *

    */

    function unwrap(wrapper) {

        var wrapperContent = document.createDocumentFragment();

        while (wrapper.firstChild) {

            wrapperContent.appendChild(wrapper.firstChild);

        }



        wrapper.parentNode.replaceChild(wrapperContent, wrapper);

    }



    /**

    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation

    * Returns the element or `false` if there's none

    */

    function closest(el, selector) {

        if(el && el.nodeType === 1){

            if(matches(el, selector)){

                return el;

            }

            return closest(el.parentNode, selector);

        }

        return null;

    }



    /**

    * Places one element (rel) after another one or group of them (reference).

    * @param {HTMLElement} reference

    * @param {HTMLElement|NodeList|String} el

    * https://jsfiddle.net/9s97hhzv/1/

    */

    function after(reference, el) {

        insertBefore(reference, reference.nextSibling, el);

    }



    /**

    * Places one element (rel) before another one or group of them (reference).

    * @param {HTMLElement} reference

    * @param {HTMLElement|NodeList|String} el

    * https://jsfiddle.net/9s97hhzv/1/

    */

    function before(reference, el) {

        insertBefore(reference, reference, el);

    }



    /**

    * Based in https://stackoverflow.com/a/19316024/1081396

    * and https://stackoverflow.com/a/4793630/1081396

    */

    function insertBefore(reference, beforeElement, el){

        if(!isArrayOrList(el)){

            if(typeof el == 'string'){

                el = createElementFromHTML(el);

            }

            el = [el];

        }



        for(var i = 0; i<el.length; i++){

            reference.parentNode.insertBefore(el[i], beforeElement);

        }

    }



    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll

    function getScrollTop(){

        var doc = document.documentElement;

        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    }



    /**

    * Gets the siblings of the passed element

    */

    function siblings(el){

        return Array.prototype.filter.call(el.parentNode.children, function(child){

          return child !== el;

        });

    }



    //for IE 9 ?

    function preventDefault(event){

        if(event.preventDefault){

            event.preventDefault();

        }

        else{

            event.returnValue = false;

        }

    }



    /**

    * Determines whether the passed item is of function type.

    */

    function isFunction(item) {

      if (typeof item === 'function') {

        return true;

      }

      var type = Object.prototype.toString(item);

      return type === '[object Function]' || type === '[object GeneratorFunction]';

    }



    /**

    * Trigger custom events

    */

    function trigger(el, eventName, data){

        var event;

        data = typeof data === 'undefined' ? {} : data;



        // Native

        if(typeof window.CustomEvent === "function" ){

            event = new CustomEvent(eventName, {detail: data});

        }

        else{

            event = document.createEvent('CustomEvent');

            event.initCustomEvent(eventName, true, true, data);

        }



        el.dispatchEvent(event);

    }



    /**

    * Polyfill of .matches()

    */

    function matches(el, selector) {

        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);

    }



    /**

    * Toggles the visibility of the passed element el.

    */

    function toggle(el, value){

        if(typeof value === "boolean"){

            for(var i = 0; i<el.length; i++){

                el[i].style.display = value ? 'block' : 'none';

            }

        }

        //we don't use it in other way, so no else :)



        return el;

    }



    /**

    * Creates a HTMLElement from the passed HTML string.

    * https://stackoverflow.com/a/494348/1081396

    */

    function createElementFromHTML(htmlString) {

        var div = document.createElement('div');

        div.innerHTML = htmlString.trim();



        // Change this to div.childNodes to support multiple top-level nodes

        return div.firstChild;

    }



    /**

    * Removes the passed item/s from the DOM.

    */

    function remove(items){

        items = getList(items);

        for(var i = 0; i<items.length; i++){

            var item = items[i];

            if(item && item.parentElement) {

                item.parentNode.removeChild(item);

            }

        }

    }



    /**

    * Filters an array by the passed filter funtion.

    */

    function filter(el, filterFn){

        Array.prototype.filter.call(el, filterFn);

    }



    //https://jsfiddle.net/w1rktecz/

    function untilAll(item, selector, fn){

        var sibling = item[fn];

        var siblings = [];

        while(sibling){

            if(matches(sibling, selector) || selector == null) {

                siblings.push(sibling);

            }

            sibling = sibling[fn];

        }



        return siblings;

    }



    /**

    * Gets all next elements matching the passed selector.

    */

    function nextAll(item, selector){

        return untilAll(item, selector, 'nextElementSibling');

    }



    /**

    * Gets all previous elements matching the passed selector.

    */

    function prevAll(item, selector){

        return untilAll(item, selector, 'previousElementSibling');

    }



    /**

    * Converts an object to an array.

    */

    function toArray(objectData){

        return Object.keys(objectData).map(function(key) {

           return objectData[key];

        });

    }



    /**

    * forEach polyfill for IE

    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility

    */

    if (window.NodeList && !NodeList.prototype.forEach) {

        NodeList.prototype.forEach = function (callback, thisArg) {

            thisArg = thisArg || window;

            for (var i = 0; i < this.length; i++) {

                callback.call(thisArg, this[i], i, this);

            }

        };

    }



    //utils are public, so we can use it wherever we want

    window.fp_utils = {

        $: $,

        deepExtend: deepExtend,

        hasClass: hasClass,

        getWindowHeight: getWindowHeight,

        css: css,

        until: until,

        prevUntil: prevUntil,

        nextUntil: nextUntil,

        prev: prev,

        next: next,

        last: last,

        index: index,

        getList: getList,

        hide: hide,

        show: show,

        isArrayOrList: isArrayOrList,

        addClass: addClass,

        removeClass: removeClass,

        appendTo: appendTo,

        wrap: wrap,

        wrapAll: wrapAll,

        wrapInner: wrapInner,

        unwrap: unwrap,

        closest: closest,

        after: after,

        before: before,

        insertBefore: insertBefore,

        getScrollTop: getScrollTop,

        siblings: siblings,

        preventDefault: preventDefault,

        isFunction: isFunction,

        trigger: trigger,

        matches: matches,

        toggle: toggle,

        createElementFromHTML: createElementFromHTML,

        remove: remove,

        filter: filter,

        untilAll: untilAll,

        nextAll: nextAll,

        prevAll: prevAll,

        showError: showError

    };



    return initialise;

}));



/**

 * jQuery adapter for fullPage.js 3.0.0

 */

if(window.jQuery && window.fullpage){

    (function ($, fullpage) {

        'use strict';



        // No jQuery No Go

        if (!$ || !fullpage) {

            window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');

            return;

        }



        $.fn.fullpage = function(options) {

            options = $.extend({}, options, {'$': $});

            new fullpage(this[0], options);

        };

    })(window.jQuery, window.fullpage);

}


(function($){

	$(document).ready(function(){

		if ($('#fullpage').length) {

			$('#fullpage').fullpage({

				autoScrolling: false,

				fitToSection:false,

				css3: true

			});

		}

		$('.nav-mobile').on('click', function() {

			$('#header').addClass("opa0");

			$('#nav-menu-mobile').addClass('animated');

			$('#nav-menu-mobile').toggleClass('slideInDown');

			$('#nav-menu-mobile').toggleClass('slideOutUp');

			$('body').toggleClass('nav-is-active');

		});

		$('.sub-link').on('click', function() {

			var el = $(this.nextElementSibling);

			if (!$(this).hasClass('_open')) {

				el.slideDown();

			}else{

				el.slideUp();

			}

			$(this).toggleClass('_open');

		});

		$('#nav-menu-mobile').get(0).addEventListener('animationend', function() {

			$('#header').removeClass("opa0");

		});

	});

})(jQuery);