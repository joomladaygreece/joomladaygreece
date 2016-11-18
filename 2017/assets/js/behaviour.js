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
	
		
		//uberminimal scrollspy
		uberminimal();
		
		// smooth scrolling (used for the links to the lower tabs)
		$('.lscroll').click(function(event){
			event.preventDefault();
			var target = this.hash;
			$('html, body').stop().animate({
				scrollTop: $(target).offset().top
			}, 500);
		});

		// Initiate the chart and the countdonw clock
		$('.chart').easyPieChart({ 
			size:195, 
			scaleColor: false, 
			trackColor: '#c2c2c2', 
			animate: 5000, 
			barColor:'#1fce6e' 
		});
		 
		$('#clock').countdown('2017/12/31 23:58:00', function(event) {		
			var $this = jQuery(this).html(event.strftime('<ul>'			+ '<li><span class="code">%w</span> <span class="timer-unit">ΕΒΔ</span></li>'			+ '<li class="sepdot">:</li>'			+ '<li class="unit"><span class="code">%d</span> <span class="timer-unit">ΜΕΡΕΣ</span></li>'			+ '<li class="sepdot">:</li>'			+ '<li class="unit"><span class="code">%H</span> <span class="timer-unit">ΩΡΕΣ</span></li>'			+ '<li class="sepdot">:</li>'			+ '<li class="unit"><span class="code">%M</span> <span class="timer-unit">ΛΕΠΤΑ</span></li>'			+ '<li class="sepdot">:</li>'			+ '<li class="unit"><span class="code">%S</span> <span class="timer-unit">ΔΕΥΤ.</span></li></;ul>'));	
		});
		
									
	});
	
	// Window load
	$(window).load(function () {
		// Equal block heights for the "default" view
		var blocks = $('.equal-heights');
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

