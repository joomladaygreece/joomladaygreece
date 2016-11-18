/**
 * @version		1.0.0
 * @package		Ibento
 * @author		Nuevvo - http://nuevvo.com
 * @copyright Copyright (c) 2010 - 2014 Nuevvo Webware Ltd. All rights reserved.
 * @license		http://nuevvo.com/license
 */

/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csscolumns-csstransforms-csstransforms3d-csstransitions-svg-svgclippaths-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.cssanimations=function(){return G("animationName")},r.csscolumns=function(){return G("columnCount")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * rangeinput/rangeinput.js
 * tabs/tabs.js
 * toolbox/toolbox.mousewheel.js
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * http://flowplayer.org/tools/
 * jquery.event.wheel.js - rev 1 
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
  */
(function(a){a.tools=a.tools||{version:"v1.2.7"};var b;b=a.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:undefined,vertical:0,keyboard:!0,progress:!1,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};var c,d;a.fn.drag=function(b){document.ondragstart=function(){return!1},b=a.extend({x:!0,y:!0,drag:!0},b),c=c||a(document).on("mousedown mouseup",function(e){var f=a(e.target);if(e.type=="mousedown"&&f.data("drag")){var g=f.position(),h=e.pageX-g.left,i=e.pageY-g.top,j=!0;c.on("mousemove.drag",function(a){var c=a.pageX-h,e=a.pageY-i,g={};b.x&&(g.left=c),b.y&&(g.top=e),j&&(f.trigger("dragStart"),j=!1),b.drag&&f.css(g),f.trigger("drag",[e,c]),d=f}),e.preventDefault()}else try{d&&d.trigger("dragEnd")}finally{c.off("mousemove.drag"),d=null}});return this.data("drag",!0)};function e(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}function f(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function g(a){var b=a.data("events");return b&&b.onSlide}function h(b,c){var d=this,h=c.css,i=a("<div><div/><a href='#'/></div>").data("rangeinput",d),j,k,l,m,n;b.before(i);var o=i.addClass(h.slider).find("a").addClass(h.handle),p=i.find("div").addClass(h.progress);a.each("min,max,step,value".split(","),function(a,d){var e=b.attr(d);parseFloat(e)&&(c[d]=parseFloat(e,10))});var q=c.max-c.min,r=c.step=="any"?0:c.step,s=c.precision;s===undefined&&(s=r.toString().split("."),s=s.length===2?s[1].length:0);if(b.attr("type")=="range"){var t=b.clone().wrap("<div/>").parent().html(),u=a(t.replace(/type/i,"type=text data-orig-type"));u.val(c.value),b.replaceWith(u),b=u}b.addClass(h.input);var v=a(d).add(b),w=!0;function x(a,f,g,h){g===undefined?g=f/m*q:h&&(g-=c.min),r&&(g=Math.round(g/r)*r);if(f===undefined||r)f=g*m/q;if(isNaN(g))return d;f=Math.max(0,Math.min(f,m)),g=f/m*q;if(h||!j)g+=c.min;j&&(h?f=m-f:g=c.max-g),g=e(g,s);var i=a.type=="click";if(w&&k!==undefined&&!i){a.type="onSlide",v.trigger(a,[g,f]);if(a.isDefaultPrevented())return d}var l=i?c.speed:0,t=i?function(){a.type="change",v.trigger(a,[g])}:null;j?(o.animate({top:f},l,t),c.progress&&p.animate({height:m-f+o.height()/2},l)):(o.animate({left:f},l,t),c.progress&&p.animate({width:f+o.width()/2},l)),k=g,n=f,b.val(g);return d}a.extend(d,{getValue:function(){return k},setValue:function(b,c){y();return x(c||a.Event("api"),undefined,b,!0)},getConf:function(){return c},getProgress:function(){return p},getHandle:function(){return o},getInput:function(){return b},step:function(b,e){e=e||a.Event();var f=c.step=="any"?1:c.step;d.setValue(k+f*(b||1),e)},stepUp:function(a){return d.step(a||1)},stepDown:function(a){return d.step(-a||-1)}}),a.each("onSlide,change".split(","),function(b,e){a.isFunction(c[e])&&a(d).on(e,c[e]),d[e]=function(b){b&&a(d).on(e,b);return d}}),o.drag({drag:!1}).on("dragStart",function(){y(),w=g(a(d))||g(b)}).on("drag",function(a,c,d){if(b.is(":disabled"))return!1;x(a,j?c:d)}).on("dragEnd",function(a){a.isDefaultPrevented()||(a.type="change",v.trigger(a,[k]))}).click(function(a){return a.preventDefault()}),i.click(function(a){if(b.is(":disabled")||a.target==o[0])return a.preventDefault();y();var c=j?o.height()/2:o.width()/2;x(a,j?m-l-c+a.pageY:a.pageX-l-c)}),c.keyboard&&b.keydown(function(c){if(!b.attr("readonly")){var e=c.keyCode,f=a([75,76,38,33,39]).index(e)!=-1,g=a([74,72,40,34,37]).index(e)!=-1;if((f||g)&&!(c.shiftKey||c.altKey||c.ctrlKey)){f?d.step(e==33?10:1,c):g&&d.step(e==34?-10:-1,c);return c.preventDefault()}}}),b.blur(function(b){var c=a(this).val();c!==k&&d.setValue(c,b)}),a.extend(b[0],{stepUp:d.stepUp,stepDown:d.stepDown});function y(){j=c.vertical||f(i,"height")>f(i,"width"),j?(m=f(i,"height")-f(o,"height"),l=i.offset().top+m):(m=f(i,"width")-f(o,"width"),l=i.offset().left)}function z(){y(),d.setValue(c.value!==undefined?c.value:c.min)}z(),m||a(window).load(z)}a.expr[":"].range=function(b){var c=b.getAttribute("type");return c&&c=="range"||a(b).filter("input").data("rangeinput")},a.fn.rangeinput=function(c){if(this.data("rangeinput"))return this;c=a.extend(!0,{},b.conf,c);var d;this.each(function(){var b=new h(a(this),a.extend(!0,{},c)),e=b.getInput().data("rangeinput",b);d=d?d.add(e):e});return d?d:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(d,i){var k=h.eq(d),l=!c.data("tabs");typeof d=="string"&&d.replace("#","")&&(k=h.filter("[href*=\""+d.replace("#","")+"\"]"),d=Math.max(h.index(k),0));if(e.rotate){var m=h.length-1;if(d<0)return f.click(m,i);if(d>m)return f.click(0,i)}if(!k.length){if(j>=0)return f;d=e.initialIndex,k=h.eq(d)}if(d===j)return f;i=i||a.Event(),i.type="onBeforeClick",g.trigger(i,[d]);if(!i.isDefaultPrevented()){var n=l?e.initialEffect&&e.effect||"default":e.effect;b[n].call(f,d,function(){j=d,i.type="onClick",g.trigger(i,[d])}),h.removeClass(e.current),k.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.off(e.event).removeClass(e.current),i.find("a[href^=\"#\"]").off("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).on(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=\"#\"]").on("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href=\""+location.hash+"\"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);

/* Minimit Anima 1.4.2 */
(function(a,k,x,q,u){function b(b){b=b.split(")");var s=a.trim,c=-1,e=b.length-1,h,d,t=v?new Float32Array(6):[],g=v?new Float32Array(6):[],f=v?new Float32Array(6):[1,0,0,1,0,0];t[0]=t[3]=f[0]=f[3]=1;for(t[1]=t[2]=t[4]=t[5]=0;++c<e;){h=b[c].split("(");d=s(h[0]);h=h[1];g[0]=g[3]=1;g[1]=g[2]=g[4]=g[5]=0;switch(d){case n+"X":g[4]=parseInt(h,10);break;case n+"Y":g[5]=parseInt(h,10);break;case n:h=h.split(",");g[4]=parseInt(h[0],10);g[5]=parseInt(h[1]||0,10);break;case G:h=l(h);g[0]=q.cos(h);g[1]=q.sin(h);
g[2]=-q.sin(h);g[3]=q.cos(h);break;case B+"X":g[0]=+h;break;case B+"Y":g[3]=h;break;case B:h=h.split(",");g[0]=h[0];g[3]=1<h.length?h[1]:h[0];break;case F+"X":g[2]=q.tan(l(h));break;case F+"Y":g[1]=q.tan(l(h));break;case H:h=h.split(","),g[0]=h[0],g[1]=h[1],g[2]=h[2],g[3]=h[3],g[4]=parseInt(h[4],10),g[5]=parseInt(h[5],10)}f[0]=t[0]*g[0]+t[2]*g[1];f[1]=t[1]*g[0]+t[3]*g[1];f[2]=t[0]*g[2]+t[2]*g[3];f[3]=t[1]*g[2]+t[3]*g[3];f[4]=t[0]*g[4]+t[2]*g[5]+t[4];f[5]=t[1]*g[4]+t[3]*g[5]+t[5];t=[f[0],f[1],f[2],
f[3],f[4],f[5]]}return f}function e(a){var b,c,e,h=a[0],d=a[1],f=a[2],g=a[3];h*g-d*f?(b=q.sqrt(h*h+d*d),h/=b,d/=b,e=h*f+d*g,f-=h*e,g-=d*e,c=q.sqrt(f*f+g*g),e/=c,h*(g/c)<d*(f/c)&&(h=-h,d=-d,e=-e,b=-b)):b=c=e=0;return[[n,[+a[4],+a[5]]],[G,q.atan2(d,h)],[F+"X",q.atan(e)],[B,[b,c]]]}function c(c,s){var f={start:[],end:[]},l=-1,h,k,t,g;("none"==c||r.test(c))&&(c="");("none"==s||r.test(s))&&(s="");c&&s&&(!s.indexOf("matrix")&&d(c).join()==d(s.split(")")[0]).join())&&(f.origin=c,c="",s=s.slice(s.indexOf(")")+
1));if(c||s){if(c&&s&&c.replace(/(?:\([^)]*\))|\s/g,"")!=s.replace(/(?:\([^)]*\))|\s/g,""))f.start=e(b(c)),f.end=e(b(s));else for(c&&(c=c.split(")"))&&(h=c.length),s&&(s=s.split(")"))&&(h=s.length);++l<h-1;){c[l]&&(k=c[l].split("("));s[l]&&(t=s[l].split("("));g=a.trim((k||t)[0]);for(var n=f.start,m=p(g,k?k[1]:0),q=void 0;q=m.shift();)n.push(q);n=f.end;for(g=p(g,t?t[1]:0);m=g.shift();)n.push(m)}return f}}function p(a,b){var c=+!a.indexOf(B),f,h=a.replace(/e[XY]/,"e");switch(a){case n+"Y":case B+"Y":b=
[c,b?parseFloat(b):c];break;case n+"X":case n:case B+"X":f=1;case B:b=b?(b=b.split(","))&&[parseFloat(b[0]),parseFloat(1<b.length?b[1]:a==B?f||b[0]:c+"")]:[c,c];break;case F+"X":case F+"Y":case G:b=b?l(b):0;break;case H:return e(b?d(b):[1,0,0,1,0,0])}return[[h,b]]}function l(a){return~a.indexOf("deg")?parseInt(a,10)*(2*q.PI/360):~a.indexOf("grad")?parseInt(a,10)*(q.PI/200):parseFloat(a)}function d(a){a=/([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(a);return[a[1],a[2],a[3],
a[4],a[5],a[6]]}x=x.createElement("div").style;var m=["OTransform","msTransform","WebkitTransform","MozTransform"],C=m.length,f,A,v="Float32Array"in k,w,I,y=/Matrix([^)]*)/,r=/^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,n="translate",G="rotate",B="scale",F="skew",H="matrix";for(;C--;)m[C]in x&&(a.support.transform=f=m[C],a.support.transformOrigin=f+"Origin");f||(a.support.matrixFilter=A=""===x.filter);a.cssNumber.transform=a.cssNumber.transformOrigin=!0;f&&"transform"!=
f?(a.cssProps.transform=f,a.cssProps.transformOrigin=f+"Origin","MozTransform"==f?w={get:function(b,c){return c?a.css(b,f).split("px").join(""):b.style[f]},set:function(a,b){a.style[f]=/matrix\([^)p]*\)/.test(b)?b.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,H+"$1$2px,$3px"):b}}:/^1\.[0-5](?:\.|$)/.test(a.fn.jquery)&&(w={get:function(b,c){return c?a.css(b,f.replace(/^ms/,"Ms")):b.style[f]}})):A&&(w={get:function(b,c,e){var d=c&&b.currentStyle?b.currentStyle:b.style;d&&y.test(d.filter)?(c=RegExp.$1.split(","),
c=[c[0].split("=")[1],c[2].split("=")[1],c[1].split("=")[1],c[3].split("=")[1]]):c=[1,0,0,1];a.cssHooks.transformOrigin?(b=a._data(b,"transformTranslate",u),c[4]=b?b[0]:0,c[5]=b?b[1]:0):(c[4]=d?parseInt(d.left,10)||0:0,c[5]=d?parseInt(d.top,10)||0:0);return e?c:H+"("+c+")"},set:function(c,d,e){var f=c.style,h,l;e||(f.zoom=1);d=b(d);e=["Matrix(M11="+d[0],"M12="+d[2],"M21="+d[1],"M22="+d[3],"SizingMethod='auto expand'"].join();l=(h=c.currentStyle)&&h.filter||f.filter||"";f.filter=y.test(l)?l.replace(y,
e):l+" progid:DXImageTransform.Microsoft."+e+")";if(a.cssHooks.transformOrigin)a.cssHooks.transformOrigin.set(c,d);else{if(h=a.transform.centerOrigin)f["margin"==h?"marginLeft":"left"]=-(c.offsetWidth/2)+c.clientWidth/2+"px",f["margin"==h?"marginTop":"top"]=-(c.offsetHeight/2)+c.clientHeight/2+"px";f.left=d[4]+"px";f.top=d[5]+"px"}}});w&&(a.cssHooks.transform=w);I=w&&w.get||a.css;a.fx.step.transform=function(b){var d=b.elem,e=b.start,l=b.end,h=b.pos,k="",p,g,m,r;e&&"string"!==typeof e||(e||(e=I(d,
f)),A&&(d.style.zoom=1),l=l.split("+=").join(e),a.extend(b,c(e,l)),e=b.start,l=b.end);for(p=e.length;p--;)switch(g=e[p],m=l[p],r=0,g[0]){case n:r="px";case B:r||(r="");k=g[0]+"("+q.round(1E5*(g[1][0]+(m[1][0]-g[1][0])*h))/1E5+r+","+q.round(1E5*(g[1][1]+(m[1][1]-g[1][1])*h))/1E5+r+")"+k;break;case F+"X":case F+"Y":case G:k=g[0]+"("+q.round(1E5*(g[1]+(m[1]-g[1])*h))/1E5+"rad)"+k}b.origin&&(k=b.origin+k);w&&w.set?w.set(d,k,1):d.style[f]=k};a.transform={centerOrigin:"margin"}})(jQuery,window,document,
Math);
(function(a){function k(a){return"undefined"!=typeof a}a.anima={partialSupport:null,noSupport:null,uniquePrefixIndex:0,transformProps:[],transformProps1:"x y z translateX translateY translateZ translate translate3d".split(" "),transformProps2:"scale scaleX scaleY scaleZ skew skewX skewY rotate rotateX rotateY rotateZ perspective".split(" "),cssEase:{linear:".25,.25,.75,.75",ease:".25,.1,.25,1",easeIn:".42,0,1,1",easeOut:"0,0,.58,1",easeInOut:".42,0,.58,10",easeInQuad:".55,.085,.68,.53",easeInCubic:".55,.055,.675,.19",easeInQuart:".895,.03,.685,.22",
easeInQuint:".755,.05,.855,.06",easeInSine:".470,0,.745,.715",easeInExpo:".95,.05,.795,.035",easeInCirc:".6,.04,.98,.335",easeInBack:".6,-0.28,.735,.045",easeOutQuad:".25,.46,.45,.94",easeOutCubic:".215,.61,.355,1",easeOutQuart:".165,.84,.44,1",easeOutQuint:".23,1,.32,1",easeOutSine:".39,.575,.565,1",easeOutExpo:".19,1,.22,1",easeOutCirc:".075,.82,.165,1",easeOutBack:".175,.885,.32,1.275",easeInOutQuad:".455,.03,.515,.955",easeInOutCubic:".645,.045,.355,1",easeInOutQuart:".77,0,.175,1",easeInOutQuint:".86,0,.07,10",
easeInOutSine:".445,.05,.55,.95",easeInOutExpo:"1,0,0,1",easeInOutCirc:".785,.135,.15,.86",easeInOutBack:".68,-0.55,.265,1.55"}};a.anima.transformProps=a.anima.transformProps1.concat(a.anima.transformProps2);a.anima.unit=function(a,e){return"string"!==typeof a||a.match(/^[\-0-9\.]+$/)?""+a+e:a};var x=function(a){return a?a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-"):!1}(Modernizr.prefixed("transform"));Modernizr.prefixed("transition");var q=window.Modernizr.csstransforms3d,
u=window.Modernizr.csstransitions;a.anima.noSupport=!window.Modernizr.csstransforms;a.anima.partialSupport=!q||!u;a.fn.anima2d=function(b,e,c,k){return a.anima.partialSupport?a(this).anima(b,e,c,k,"anima2d"):a(this)};a.fn.anima3d=function(b,e,c,k){return a.anima.partialSupport?a(this):a(this).anima(b,e,c,k,"anima3d")};a.fn.anima=function(b,e,c,p,l){"object"===typeof e&&(p=e,e=void 0);"object"===typeof c&&(p=c,c=void 0);k(l)||(l="anima");k(e)||(e=0);k(c)||(c="easeOut");k(p)||(p={});k(p.skipInstant)||
(p.skipInstant=!1);a.anima.cssEase[c]&&(c=a.anima.cssEase[c]);return a(this).each(function(){var d=a(this);d.data("uniquePrefix")||d.data("uniquePrefix","animaPrefix"+ ++a.anima.uniquePrefixIndex);a.anima[d.data("uniquePrefix")]||(a.anima[d.data("uniquePrefix")]={});a.anima.noSupport?d.goAnima(b,e,c,p,l):d.queue(function(a){d.goAnima(b,e,c,p,l);0==e&&d.stopAnima()})})};a.fn.goAnima=function(b,e,c,p,l){var d=this,m=a(this),q=a.bez(c.split(",")),f="cubic-bezier("+c+")",A=e/1E3;if(!a.anima.noSupport){var v=
[];c=[];var w=a.anima.transformProps,u=a.anima.transformProps1,y=a.anima.transformProps2;if(!a.anima.partialSupport&&"anima2d"!=l){l=a.anima[m.data("uniquePrefix")];for(i=0;i<u.length;i++){var r=u[i];k(b[r])&&(-1==r.indexOf("translate")&&(r="translate"+r.toUpperCase()),v.push(r+"("+a.anima.unit(b[u[i]],"px")+")"))}for(i=0;i<y.length;i++)k(b[y[i]])&&(r=y[i],-1==r.indexOf("scale")?v.push(r+"("+a.anima.unit(b[y[i]],"deg")+")"):v.push(r+"("+b[y[i]]+")"));0<v.length&&(m.css(x,v.join(" ")),l[x]=!0,c.push(x+
" "+A+"s "+f));for(var n in b)-1==a.inArray(n,w)&&c.push(n+" "+A+"s "+f);if(m.data("transitions")){f=m.data("transitions");A=[];for(i=0;i<f.length;i++)for(v=f[i].slice(0,f[i].indexOf(" ")),z=0;z<c.length&&(u=c[z].slice(0,c[z].indexOf(" ")),v!=u);z++)z==c.length-1&&A.push(f[i]);c=c.concat(A)}m.data("transitions",c);0<c.length&&m.css("transition",c.join(", "));for(n in b)-1==a.inArray(n,w)&&(m.css(n,b[n]),l[n]=!0)}else if(a.anima.partialSupport&&"anima3d"!=l){for(i=0;i<u.length;i++)r=u[i],k(b[r])&&
-1==r.toLowerCase().indexOf("z")&&(-1==r.indexOf("translate")&&(r="translate"+r.toUpperCase()),v.push(r+"("+a.anima.unit(b[u[i]],"px")+")"));for(i=0;i<y.length;i++)k(b[y[i]])&&(r=y[i],-1==r.indexOf("scale")?v.push(r+"("+a.anima.unit(b[y[i]],"deg")+")"):v.push(r+"("+b[y[i]]+")"));0<v.length&&m.animate({transform:v.join(" ")},{queue:!1,duration:e,specialEasing:{transform:q}});for(n in b)-1==a.inArray(n,w)&&(c=n.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()}),l={},l[c]=b[n],f={},f[c]=q,m.animate(l,
{queue:!1,duration:e,specialEasing:f}))}m.animate({fake:0},{queue:!1,duration:e,specialEasing:{fake:q},complete:function(){k(p.complete)&&p.complete.apply(d);m.dequeue()}})}else if("anima3d"!=l&&!p.skipInstant){k(b.x)&&m.css("marginLeft",b.x);k(b.y)&&m.css("marginTop",b.x);for(n in b)-1==a.inArray(n,w)&&m.css(n,b[n]);k(p.complete)&&p.complete.apply(d)}};a.fn.delayAnima=function(b){return a(this).each(function(){a.anima.noSupport||a(this).delay(b)})};a.fn.clearAnima=function(){return a(this).each(function(){a.anima.noSupport||
a(this).clearQueue()})};a.fn.stopAnima=function(b,e){k(b)||(b=!1);k(e)||(e=!1);return a(this).each(function(){if(!a.anima.noSupport){var c=a(this);if(!a.anima.partialSupport){c.data("transitions","");if(e)c.css("transition","none");else{var k=a.anima[c.data("uniquePrefix")];if(k)for(var l in k)c.css(l,c.css(l));c.css("transition","all 0s")}a.anima[c.data("uniquePrefix")]={}}c.stop(b,e)}})}})(jQuery);


/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);

/**
 * @version		1.0.0 (April 10th, 2013)
 * @author		Nuevvo - http://nuevvo.com
 * @copyright	Copyright (c) 2010 - 2013 Nuevvo Webware Ltd. All rights reserved.
 * @license		http://nuevvo.com/license
 */

var $nuSlider=jQuery.noConflict();(function($){$.nuSlider=function(element,options){var plugin=this;var $element=$(element);plugin.init=function(options){plugin.settings=$.extend({step:1,viewport:1,transitionTime:1000,interval:0,minItemWidth:0,aspectRatio:false,scrollbar:false,orientation:'vertical',itemsWrapperClass:'.itemsWrapper',itemsContainerClass:'.items',itemClass:'.item',scrollbarClass:'.scrollbar',scrollbarHandlerClass:'.handler',scrollbarProgressClass:'.progress',navigationScrolling:false,navigationStep:3,navigationItemWidth:100},options);plugin.settings.InitViewport=plugin.settings.viewport;plugin.settings.InitStep=plugin.settings.step;plugin.items=$element.find(plugin.settings.itemClass);plugin.itemsContainer=$element.find(plugin.settings.itemsContainerClass);plugin.itemsWrapper=$element.find(plugin.settings.itemsWrapperClass);plugin.nextButton=$element.find('.nextButton');plugin.previousButton=$element.find('.previousButton');plugin.navWrapper=$element.find('.navigationWrapper');plugin.nav=$element.find('.navigation');plugin.navNextButton=$element.find('.navigationNextButton');plugin.navPreviousButton=$element.find('.navigationPreviousButton');plugin.navigationButtons=$element.find('.navigationButton');plugin.scrollbar=$element.find(plugin.settings.scrollbarClass);plugin.scrollbarHandler=plugin.scrollbar.find(plugin.settings.scrollbarHandlerClass);plugin.scrollbarProgress=plugin.scrollbar.find(plugin.settings.scrollbarProgressClass);plugin.index=0;plugin.applyStyles();plugin.addEvents();if(plugin.settings.scrollbar){plugin.settings.interval=false;plugin.settings.viewport=parseInt(plugin.itemsWrapper.width()/$(plugin.items[0]).width());}
if(plugin.settings.interval){plugin.loop=setInterval(function(){plugin.setNextItem();plugin.navigate(plugin.index);},plugin.settings.interval);}},plugin.applyStyles=function(){plugin.itemsWrapper.css('position','relative');plugin.itemsWrapper.css('overflow','hidden');if(plugin.settings.aspectRatio){var numbers=plugin.settings.aspectRatio.split('/');plugin.itemsWrapper.css('padding-bottom',100*(numbers[1]/numbers[0])+'%');}
plugin.itemsContainer.css('position','absolute');plugin.itemsContainer.css('display','block');if(plugin.settings.orientation=='horizontal'){plugin.itemWidth=plugin.itemsWrapper.width()/plugin.settings.viewport;if(plugin.settings.minItemWidth){plugin.settings.viewport=plugin.settings.InitViewport;plugin.settings.step=plugin.settings.InitStep;plugin.itemWidth=plugin.itemsWrapper.width()/plugin.settings.viewport;while(plugin.itemWidth<plugin.settings.minItemWidth){if(plugin.settings.viewport===1){break;}
plugin.settings.viewport--;plugin.settings.step=plugin.settings.viewport;plugin.itemWidth=plugin.itemsWrapper.width()/plugin.settings.viewport;}
if(plugin.itemWidth===0){plugin.itemWidth=plugin.settings.minItemWidth;}}
plugin.items.each(function(index){$(this).css({'width':plugin.itemWidth+'px','position':'absolute','top':'0','left':index*plugin.itemWidth+'px','overflow':'hidden'});});plugin.itemsContainer.css({'width':plugin.items.length*plugin.itemWidth+'px'});}else{plugin.itemsWrapperHeight=plugin.itemsWrapper.height()/plugin.settings.viewport;plugin.items.each(function(index){$(this).css({'width':plugin.itemsWrapper.width(),'height':plugin.itemsWrapperHeight+'px','position':'absolute','left':'0','top':index*plugin.itemsWrapperHeight+'px','overflow':'hidden'});});plugin.itemsContainer.css({'height':plugin.items.length*plugin.itemsWrapperHeight+'px'});}
if(plugin.settings.scrollbar){plugin.nextButton.css('display','none');plugin.previousButton.css('display','none');plugin.navigationButtons.parents('ul:first').css('display','none');plugin.scrollbar.css('position','relative');plugin.scrollbarHandler.css('position','absolute');}else{plugin.scrollbar.css('display','none');plugin.navigationButtons.parents('ul:first').css('display','block');plugin.navigationButtons.each(function(index){$(this).parent().css({'display':'inline-block'});if(index>0&&(index)%plugin.settings.step!==0){$(this).parent().css({'display':'none'});}});}
if(plugin.settings.navigationScrolling){plugin.navWrapper.css('position','relative');plugin.navWrapper.css('overflow','hidden');plugin.nav.css('position','absolute');plugin.nav.css('padding','0');plugin.nav.css('margin','0');plugin.nav.css('width',plugin.navigationButtons.length*plugin.settings.navigationItemWidth+'px');}},plugin.addEvents=function(){plugin.nextButton.click(function(event){event.preventDefault();plugin.setNextItem();plugin.navigate(plugin.index);});plugin.previousButton.click(function(event){event.preventDefault();plugin.setPreviousItem();plugin.navigate(plugin.index);});plugin.navigationButtons.click(function(event){event.preventDefault();plugin.index=plugin.navigationButtons.index($(this));plugin.navigate(plugin.index);});var items=plugin.items.hammer();items.on('drag swipe',function(event){if(Hammer.utils.isVertical(event.gesture.direction)){return;}
event.gesture.preventDefault();if(event.type=='swipe'&&event.gesture.direction==='left'){plugin.setNextItem();plugin.navigate(plugin.index);plugin.moveScrollbar();}}).on('drag swipe',function(event){if(Hammer.utils.isVertical(event.gesture.direction)){return;}
event.gesture.preventDefault();if(event.type=='swipe'&&event.gesture.direction==='right'){plugin.setPreviousItem();plugin.navigate(plugin.index);plugin.moveScrollbar();}});var resizeTimer;$(window).resize(function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){var currentWidth=plugin.itemsWrapper.width();if(plugin.settings.orientation=='horizontal'){currentWidth=currentWidth/plugin.settings.viewport;}
if(plugin.itemWidth!==currentWidth){plugin.applyStyles();}},100);});if(plugin.settings.scrollbar){plugin.scrollbarHandler.css('left','0');var handler=plugin.scrollbarHandler.hammer({drag_block_horizontal:true});handler.on('dragstart',function(){$(this).data('nuOffset',parseInt($(this).css('left')));});handler.on('drag',function(e){var range=plugin.scrollbar.outerWidth()-$(this).outerWidth();var nuOffset=$(this).data('nuOffset');var offset=nuOffset+e.gesture.deltaX;if(offset<0){offset=0;}
if(offset>range){offset=range;}
plugin.scrollbarHandler.css({left:offset});plugin.scrollbarProgress.css('width',offset);var percentage=offset/range;var viewportRange=plugin.itemsContainer.outerWidth()-(plugin.itemWidth*plugin.settings.viewport);plugin.itemsContainer.css('left',-viewportRange*percentage);});}
if(plugin.settings.navigationScrolling){plugin.navNextButton.click(function(event){plugin.nav.stop(true,true);event.preventDefault();var width=plugin.nav.width();var increment=plugin.settings.navigationItemWidth*plugin.settings.navigationStep;var offset=Math.abs(plugin.nav.position().left-increment);if(width>=offset){plugin.nav.anima({left:'-='+increment+'px'});}});plugin.navPreviousButton.click(function(event){plugin.nav.stop(true,true);event.preventDefault();var increment=plugin.settings.navigationItemWidth*plugin.settings.navigationStep;var offset=plugin.nav.position().left+increment;if(offset<=0){plugin.nav.anima({left:'+='+increment+'px'});}});}},plugin.navigate=function(index){if(typeof(plugin.loop)!='undefined'){clearInterval(plugin.loop);}
plugin.itemsContainer.stop(true,false);plugin.navigationButtons.removeClass('navigationButtonActive');$(plugin.navigationButtons[plugin.index]).addClass('navigationButtonActive');$element.addClass('nuSliderAnimating');var position=$(plugin.items[plugin.index]).position();var t=-position.top+'px';var l=-position.left+'px';plugin.itemsContainer.anima({'top':t,'left':l},plugin.settings.transitionTime,{complete:function(){$element.removeClass('nuSliderAnimating');}});if(plugin.settings.interval){plugin.loop=setInterval(function(){plugin.setNextItem();plugin.navigate(plugin.index);},plugin.settings.interval,function(){$element.removeClass('nuSliderAnimating');});}},plugin.setNextItem=function(){if(plugin.index<(plugin.items.length-plugin.settings.step)){plugin.index+=plugin.settings.step;if(plugin.items.length<plugin.index+plugin.settings.step){plugin.index=plugin.items.length-plugin.settings.step;}}else{plugin.index=0;}},plugin.setPreviousItem=function(){if(plugin.index>0){plugin.index-=plugin.settings.step;}else{plugin.index=plugin.items.length-plugin.settings.step;}
if(plugin.index<0){plugin.index=0;}},plugin.moveScrollbar=function(){if(plugin.settings.scrollbar){var percentage=plugin.index/(plugin.items.length-plugin.settings.step);var range=plugin.scrollbar.outerWidth()-plugin.scrollbarHandler.outerWidth();var offset=range*percentage;plugin.scrollbarProgress.css('width',offset);plugin.scrollbarHandler.css('left',offset);}}
plugin.init(options);}
$.fn.nuSlider=function(options){return this.each(function(){if(undefined==$(this).data('nuSlider')){var plugin=new $.nuSlider(this,options);$(this).data('nuSlider',plugin);}});}})(jQuery);

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.11
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(a){"use strict";var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return this.deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;this.deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!FastClick.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){"use strict";return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.3
 **/

(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    }
    else if(typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else {
        factory(root.jQuery);
    }
}(this, function($) {
/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.appendChild(canvas);

	if (typeof(G_vmlCanvasManager) !== 'undefined') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.lineWidth, 1);
	};

  /**
    * Canvas accessor
   */
  this.getCanvas = function() {
    return canvas;
  };
  
  /**
    * Canvas 2D context 'ctx' accessor
   */
  this.getCtx = function() {
    return ctx;
  };

	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param {number} percent Percent shown by the chart between -100 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		drawCircle(color, options.lineWidth, percent / 100);
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param {number} from Starting percentage
	 * @param {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#f9f9f9',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		size: 110,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	// detect present renderer
	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
	var init = function() {
		this.el = el;
		this.options = options;

		// merge user options into default options
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function' && i != 'renderer') {
					options[i] = options[i].bind(this);
				}
			}
		}

		// check for jQuery easing
		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		// process earlier animate option to avoid bc breaks
		if (typeof(options.animate) === 'number') {
			options.animate = {
				duration: options.animate,
				enabled: true
			};
		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {
			options.animate = {
				duration: 1000,
				enabled: options.animate
			};
		}

		// create renderer
		this.renderer = new options.renderer(el, options);

		// initial draw
		this.renderer.draw(currentValue);

		// initial update
		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate.enabled) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	/**
	 * Disable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.disableAnimation = function() {
		options.animate.enabled = false;
		return this;
	};

	/**
	 * Enable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.enableAnimation = function() {
		options.animate.enabled = true;
		return this;
	};

	init();
};

$.fn.easyPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
		}
	});
};

}));
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function($,window,document,undefined){'use strict';if($('head').has('.foundation-mq-small').length===0){$('head').append('<meta class="foundation-mq-small">');}
if($('head').has('.foundation-mq-medium').length===0){$('head').append('<meta class="foundation-mq-medium">');}
if($('head').has('.foundation-mq-large').length===0){$('head').append('<meta class="foundation-mq-large">');}
if($('head').has('.foundation-mq-xlarge').length===0){$('head').append('<meta class="foundation-mq-xlarge">');}
if($('head').has('.foundation-mq-xxlarge').length===0){$('head').append('<meta class="foundation-mq-xxlarge">');}
$(function(){if(typeof FastClick!=='undefined'){if(typeof document.body!=='undefined'){FastClick.attach(document.body);}}});var S=function(selector,context){if(typeof selector==='string'){if(context){return $(context.querySelectorAll(selector));}
return $(document.querySelectorAll(selector));}
return $(selector,context);};window.matchMedia=window.matchMedia||(function(doc,undefined){"use strict";var bool,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";fakeBody.appendChild(div);return function(q){div.innerHTML="&shy;<style media=\""+q+"\"> #mq-test-1 { width: 42px; }</style>";docElem.insertBefore(fakeBody,refNode);bool=div.offsetWidth===42;docElem.removeChild(fakeBody);return{matches:bool,media:q};};}(document));
/*
* jquery.requestAnimationFrame
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Requires jQuery 1.8+
*
* Copyright (c) 2012 Corey Frang
* Licensed under the MIT license.
*/
// requestAnimationFrame polyfill adapted from Erik Möller
// fixes from Paul Irish and Tino Zijdel
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
(function( $ ) { var animating,lastTime=0,vendors=['webkit','moz'],requestAnimationFrame=window.requestAnimationFrame,cancelAnimationFrame=window.cancelAnimationFrame;for(;lastTime<vendors.length&&!requestAnimationFrame;lastTime++){requestAnimationFrame=window[vendors[lastTime]+"RequestAnimationFrame"];cancelAnimationFrame=cancelAnimationFrame||window[vendors[lastTime]+"CancelAnimationFrame"]||window[vendors[lastTime]+"CancelRequestAnimationFrame"];}
function raf(){if(animating){requestAnimationFrame(raf);jQuery.fx.tick();}}
if(requestAnimationFrame){window.requestAnimationFrame=requestAnimationFrame;window.cancelAnimationFrame=cancelAnimationFrame;jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)&&!animating){animating=true;raf();}};jQuery.fx.stop=function(){animating=false;};}else{window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};window.cancelAnimationFrame=function(id){clearTimeout(id);};}}(jQuery));function removeQuotes(string){if(typeof string==='string'||string instanceof String){string=string.replace(/^[\\/'"]+|(;\s?})+|[\\/'"]+$/g,'');}
return string;}
window.Foundation={name:'Foundation',version:'5.0.3',media_queries:{small:S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),medium:S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),large:S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),xlarge:S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),xxlarge:S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,'')},stylesheet:$('<style></style>').appendTo('head')[0].sheet,init:function(scope,libraries,method,options,response){var library_arr,args=[scope,method,options,response],responses=[];this.rtl=/rtl/i.test(S('html').attr('dir'));this.scope=scope||this.scope;if(libraries&&typeof libraries==='string'&&!/reflow/i.test(libraries)){if(this.libs.hasOwnProperty(libraries)){responses.push(this.init_lib(libraries,args));}}else{for(var lib in this.libs){responses.push(this.init_lib(lib,libraries));}}
return scope;},init_lib:function(lib,args){if(this.libs.hasOwnProperty(lib)){this.patch(this.libs[lib]);if(args&&args.hasOwnProperty(lib)){return this.libs[lib].init.apply(this.libs[lib],[this.scope,args[lib]]);}
args=args instanceof Array?args:Array(args);return this.libs[lib].init.apply(this.libs[lib],args);}
return function(){};},patch:function(lib){lib.scope=this.scope;lib['data_options']=this.lib_methods.data_options;lib['bindings']=this.lib_methods.bindings;lib['S']=S;lib.rtl=this.rtl;},inherit:function(scope,methods){var methods_arr=methods.split(' ');for(var i=methods_arr.length-1;i>=0;i--){if(this.lib_methods.hasOwnProperty(methods_arr[i])){this.libs[scope.name][methods_arr[i]]=this.lib_methods[methods_arr[i]];}}},random_str:function(length){var chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');if(!length){length=Math.floor(Math.random()*chars.length);}
var str='';for(var i=0;i<length;i++){str+=chars[Math.floor(Math.random()*chars.length)];}
return str;},libs:{},lib_methods:{throttle:function(fun,delay){var timer=null;return function(){var context=this,args=arguments;clearTimeout(timer);timer=setTimeout(function(){fun.apply(context,args);},delay);};},data_options:function(el){var opts={},ii,p,opts_arr,opts_len,data_options=el.data('options');if(typeof data_options==='object'){return data_options;}
opts_arr=(data_options||':').split(';'),opts_len=opts_arr.length;function isNumber(o){return!isNaN(o-0)&&o!==null&&o!==""&&o!==false&&o!==true;}
function trim(str){if(typeof str==='string')return $.trim(str);return str;}
for(ii=opts_len-1;ii>=0;ii--){p=opts_arr[ii].split(':');if(/true/i.test(p[1]))p[1]=true;if(/false/i.test(p[1]))p[1]=false;if(isNumber(p[1]))p[1]=parseInt(p[1],10);if(p.length===2&&p[0].length>0){opts[trim(p[0])]=trim(p[1]);}}
return opts;},delay:function(fun,delay){return setTimeout(fun,delay);},empty:function(obj){if(obj.length&&obj.length>0)return false;if(obj.length&&obj.length===0)return true;for(var key in obj){if(hasOwnProperty.call(obj,key))return false;}
return true;},register_media:function(media,media_class){if(Foundation.media_queries[media]===undefined){$('head').append('<meta class="'+media_class+'">');Foundation.media_queries[media]=removeQuotes($('.'+media_class).css('font-family'));}},addCustomRule:function(rule,media){if(media===undefined){Foundation.stylesheet.insertRule(rule,Foundation.stylesheet.cssRules.length);}else{var query=Foundation.media_queries[media];if(query!==undefined){Foundation.stylesheet.insertRule('@media '+
Foundation.media_queries[media]+'{ '+rule+' }');}}},loaded:function(image,callback){function loaded(){callback(image[0]);}
function bindLoad(){this.one('load',loaded);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var src=this.attr('src'),param=src.match(/\?/)?'&':'?';param+='random='+(new Date()).getTime();this.attr('src',src+param);}}
if(!image.attr('src')){loaded();return;}
if(image[0].complete||image[0].readyState===4){loaded();}else{bindLoad.call(image);}},bindings:function(method,options){var self=this,should_bind_events=!S(this).data(this.name+'-init');if(typeof method==='string'){return this[method].call(this,options);}
if(S(this.scope).is('[data-'+this.name+']')){S(this.scope).data(this.name+'-init',$.extend({},this.settings,(options||method),this.data_options(S(this.scope))));if(should_bind_events){this.events(this.scope);}}else{S('[data-'+this.name+']',this.scope).each(function(){var should_bind_events=!S(this).data(self.name+'-init');S(this).data(self.name+'-init',$.extend({},self.settings,(options||method),self.data_options(S(this))));if(should_bind_events){self.events(this);}});}}}};$.fn.foundation=function(){var args=Array.prototype.slice.call(arguments,0);return this.each(function(){Foundation.init.apply(Foundation,[this].concat(args));return this;});};}(jQuery,this,this.document));;(function($,window,document,undefined){'use strict';Foundation.libs.offcanvas={name:'offcanvas',version:'5.0.3',settings:{},init:function(scope,method,options){this.events();},events:function(){$(this.scope).off('.offcanvas').on('click.fndtn.offcanvas','.left-off-canvas-toggle',function(e){e.preventDefault();$(this).closest('.off-canvas-wrap').toggleClass('move-right');}).on('click.fndtn.offcanvas','.exit-off-canvas',function(e){e.preventDefault();$(".off-canvas-wrap").removeClass("move-right");}).on('click.fndtn.offcanvas','.right-off-canvas-toggle',function(e){e.preventDefault();$(this).closest(".off-canvas-wrap").toggleClass("move-left");}).on('click.fndtn.offcanvas','.exit-off-canvas',function(e){e.preventDefault();$(".off-canvas-wrap").removeClass("move-left");});},reflow:function(){}};}(jQuery,this,this.document));
//
//https://github.com/hilios/jQuery.countdown/blob/master/src/countdown.js
//
// AMD support (Thanks to @FagnerMartinsBrack)
//
;(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}})(function($){'use strict';var PRECISION=100;var instances=[],matchers=[];matchers.push(/^[0-9]*$/.source);matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers.push(/[0-9]{4}(\/[0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers=new RegExp(matchers.join("|"));function parseDateString(dateString){if(dateString instanceof Date){return dateString;}
if(String(dateString).match(matchers)){if(String(dateString).match(/^[0-9]*$/)){dateString=Number(dateString);}
return new Date(dateString);}else{throw new Error("Couldn't cast `"+dateString+"` to a date object.");}}
var DIRECTIVE_KEY_MAP={'Y':'years','m':'months','w':'weeks','d':'days','D':'totalDays','H':'hours','M':'minutes','S':'seconds'};function strftime(offsetObject){return function(format){var directives=format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(directives){for(var i=0,len=directives.length;i<len;++i){var directive=directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),regexp=new RegExp(directive[0]),modifier=directive[1]||'',plural=directive[3]||'',value=null;directive=directive[2];if(DIRECTIVE_KEY_MAP.hasOwnProperty(directive)){value=DIRECTIVE_KEY_MAP[directive];value=Number(offsetObject[value]);}
if(value!==null){if(modifier==='!'){value=pluralize(plural,value);}
if(modifier===''){if(value<10){value='0'+value.toString();}}
format=format.replace(regexp,value.toString());}}}
format=format.replace(/%%/,'%');return format;};}
function pluralize(format,count){var plural='s',singular='';if(format){format=format.replace(/(:|;|\s)/gi,'').split(/\,/);if(format.length===1){plural=format[0];}else{singular=format[0];plural=format[1];}}
if(Math.abs(count)===1){return singular;}else{return plural;}}
var Countdown=function(el,finalDate,callback){this.el=el;this.$el=$(el);this.interval=null;this.offset={};this.setFinalDate(finalDate);this.instanceNumber=instances.length;instances.push(this);this.$el.data('countdown-instance',this.instanceNumber);if(callback){this.$el.on('update.countdown',callback);this.$el.on('stoped.countdown',callback);this.$el.on('finish.countdown',callback);}
this.start();};$.extend(Countdown.prototype,{start:function(){if(this.interval!==null){throw new Error("Countdown is already running!");}
var self=this;this.update();this.interval=setInterval(function(){self.update.call(self);},PRECISION);},stop:function(){clearInterval(this.interval);this.interval=null;this.dispatchEvent('stoped');},pause:function(){this.stop.call(this);},resume:function(){this.start.call(this);},remove:function(){this.stop();delete instances[this.instanceNumber];delete this.$el.data().countdownInstance;},setFinalDate:function(value){this.finalDate=parseDateString(value);},update:function(){if(this.$el.closest('html').length===0){this.remove();return;}
this.totalSecsLeft=this.finalDate.valueOf()-
new Date().valueOf();this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1000);this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft;this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)};if(this.totalSecsLeft===0){this.stop();this.dispatchEvent('finish');}else{this.dispatchEvent('update');}},dispatchEvent:function(eventName){var event=$.Event(eventName+'.countdown');event.finalDate=this.finalDate;event.offset=$.extend({},this.offset);event.strftime=strftime(this.offset);this.$el.trigger(event);}});$.fn.countdown=function(){var argumentsArray=Array.prototype.slice.call(arguments,0);return this.each(function(){var instanceNumber=$(this).data('countdown-instance');if(instanceNumber!==undefined){var instance=instances[instanceNumber],method=argumentsArray[0];if(Countdown.prototype.hasOwnProperty(method)){instance[method].apply(instance,argumentsArray.slice(1));}else if(String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i)===null){instance.setFinalDate.call(instance,method);}else{$.error('Method %s does not exist on jQuery.countdown'.replace(/\%s/gi,method));}}else{new Countdown(this,argumentsArray[0],argumentsArray[1]);}});};});

// CUSTOM scripts
;(function ($, window, document, undefined) {

		var min_w = 300; // minimum video width allowed
		var vid_w_orig;  // original video dimensions
		var vid_h_orig;

	function resizeToCover() {
	    
	    // set the video viewport to the window size
	    //$('.top-header-layer').width($(window).width());
	    //$('.top-header-layer').height($(window).height());
	
	    // use largest scale factor of horizontal/vertical
	    if ($('.top-header-layer').has('iframe')) {
	    	//console.log('found iframe');
			var scale_h = $('.top-header-layer').width() / vid_w_orig;
			var scale_v = $('.top-header-layer').height() / vid_h_orig;
			var scale = scale_h > scale_v ? scale_h : scale_v;
			
			// don't allow scaled width < minimum video width
			if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};
			
			// now scale the video
			$('.top-header-layer iframe').width(scale * vid_w_orig);
			$('.top-header-layer iframe').height(scale * vid_h_orig);
			// and center it by scrolling the video viewport
			$('.top-header-layer').scrollLeft(($('.top-header-layer iframe').width() - $(window).width()) / 2);
			$('.top-header-layer').scrollTop(($('.top-header-layer iframe').height() - $(window).height()) / 2);
		}
	};
	
	//Get the total height with a nice & comfortable offset
	var totalHeight = $(window).height() - 100;
	
	function uberminimal(){
		// Find each animation area
		$('.animArea, .chart').each(function(){
			// and do stuff
			if (($(this).offset().top - $(window).scrollTop() < totalHeight) || ( $(this).offset().top < 150 )  ) {
				$(this).addClass('animatedArea');
			}
		});
		
	}

	$(document).ready(function() {
		
		//responsive video
	    vid_w_orig = parseInt($('.top-header-layer iframe').attr('width'));
	    vid_h_orig = parseInt($('.top-header-layer iframe').attr('height'));
	    
		$(window).resize(function () { resizeToCover(); });
	    $(window).trigger('resize');

		//Adding SVG support
	    if (Modernizr.svg) {
	    // Supports SVG so do nothing

		} else {
		// nope fallback to png
	    	$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
			});
		}
		
		//initiate foundation plugins
		$(document).foundation();
	
		//Menu Action
		var $height = $(document).height();
		var $menu = $('.horizontal-menu');

		//Toggle Menu Visibility
		$("#menu-handler").click(function(event){
			event.preventDefault();
			$menu.toggleClass('menu-open');
			if ($menu.hasClass('menu-open')) {
				$menu.css('height', $height);
			}
		});

		
		//uberminimal scrollspy
		uberminimal();
		
		//helper classes 
		if( $('#k2Container').hasClass('blogItem') ){
			$('body').addClass('blogItemView');
		}
		
		// background on grid items - ONLY FOR THE ITEM VIEW
		if( $('#k2Container').hasClass('gridItemView') ) {
			if ( $('.itemImageBlock').length ) {
				
				$('#k2Container').addClass('pull-up');
				$('.top-header-row').addClass('pulled-up');
				$('.content').addClass('lower-down');
				
				var url = $('.itemImageBlock').find('img').attr('src');
				
				$('#backstretch').attr( "style", "" );
				$('#backstretch').css({
					'background-image': 'url('+url+')', 
					'background-size': 'cover'
				});
			}
		}
		
		// push up the category view as well - the background is done with PHP
		if( $('#k2Container').hasClass('itemListView') ) {
			//check if category details are present and append the appropriate classes.
			if ( $('.itemListCategory').length ) {
				$('#k2Container').addClass('pull-up');
				$('.top-header-row').addClass('pulled-up');
				$('.content').addClass('lower-down');				
			}
		}
		
		// other helper classes
		if( 
			($('body').hasClass('viewIsItem') && $('body').hasClass('no-sidebar') && $('#k2Container').hasClass('gridItemView')) ||  
			($('body').hasClass('viewIsItemlist') && $('body').hasClass('no-sidebar') && $('#k2Container').hasClass('mainGridView'))
		) {
			$('.top-header-row').addClass('extra-padding-bottom');
		}
		
		
		// multiple instances of tabs
		$("ul.tabs").tabs("> .pane",{
			effect: 'fade'
		});
		
		// front end editing tabs
		$("ul.tabsPlain").tabs("> .panePlain",{
			effect: 'fade'
		});
		
		// find the inputs and the textarea elements on the contact page and add these helperclasses.
		$('form#contact-form').find('input[type!="checkbox"]').addClass('inputbox'); //Do not apply the generic class to the checkboxes.
		$('form#contact-form').find('textarea').addClass('inputbox');
		
									
	});
	
	// Window load
	$(window).load(function () {
		// Equal block heights for the "default" view
		var blocks = $('.modEqualHeights, .mapEqualHeights');
		var maxHeight = 0;
		blocks.each(function(){
			maxHeight = Math.max(maxHeight, parseInt($(this).css('height')));
		});
		blocks.css('height', maxHeight);				
	});
	 
	// Bind to scroll
	$(window).scroll(function(){
		setTimeout(function(){
		  uberminimal(), 50
		});
	});
	
}(jQuery, this, this.document));

