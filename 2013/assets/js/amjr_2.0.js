/**
 * @version		2.0
 * @package		AMJR - Asynchronous Multifeed JS Reader
 * @author		Fotis Evangelou - http://nuevvo.com
 * @copyright	Copyright (c) 2010 - 2013 Nuevvo Webware Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

/* domready (c) Dustin Diaz 2012 - License MIT */
!function(a,ctx,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):ctx[a]=b()}("nuready",this,function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}});

var NUAMJR_UTILS = {

	ready: function(cb){
		return nuready(cb);
	},

	loadjs: function(url, callback) {
		var script = document.createElement("script")
		script.type = "text/javascript";
		if (script.readyState) { // IE
			script.onreadystatechange = function() {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else { // Others
			script.onload = function() {
				callback();
			};
		}
		script.src = url;
		document.body.appendChild(script);
	},

	sortByIndex: function(a,b){
		return parseInt(b.order) - parseInt(a.order);
	},

	strip_tags: function(input, allowed) {
		 allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
		 var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
			 commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
		 return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
			 return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
		 });
	},

	trim: function(str,charlist) {
		 var whitespace, l = 0,
			 i = 0;
		 str += '';
		 if (!charlist) {
			 // default list
			 whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
		 } else {
			 // preg_quote custom list
			 charlist += '';
			 whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
		 }
		 l = str.length;
		 for (i = 0; i < l; i++) {
			 if (whitespace.indexOf(str.charAt(i)) === -1) {
				 str = str.substring(i);
				 break;
			 }
		 }
		 l = str.length;
		 for (i = l - 1; i >= 0; i--) {
			 if (whitespace.indexOf(str.charAt(i)) === -1) {
				 str = str.substring(0, i + 1);
				 break;
			 }
		 }
		 return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
	},

	cleanuphtml: function(str){
		 str = str.replace(/&/g, "&amp;");
		 str = str.replace(/>/g, "&gt;");
		 str = str.replace(/</g, "&lt;");
		 str = str.replace(/"/g, "&quot;");
		 str = str.replace(/'/g, "&#039;");
		 return str;
	},

	truncate: function(text, limit, append) {
		if (typeof text !== 'string') return '';
		if (typeof append == 'undefined') append = '...';
		var parts = text.split(' ');
		if (parts.length > limit) {
			for (var i = parts.length - 1; i > -1; --i) {
				if (i+1 > limit) {
					parts.length = i;
				}
			}
			parts.push(append);
		}
		return parts.join(' ');
	},

	getJSONFeed: function(url, count, proxy, cb) {
		if(proxy == 'google'){
			var jsonurl = document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + count + '&callback=' + cb + '&q=' + encodeURIComponent(url);
		} else {
			var jsonurl = document.location.protocol + '//query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from rss where url="' + url + '" limit ' + count) + '&format=json&callback=' + cb;
		}
		var jsonfeedscript = document.createElement('script');
		jsonfeedscript.setAttribute('charset', 'utf-8');
		jsonfeedscript.setAttribute('type', 'text/javascript');
		jsonfeedscript.setAttribute('async', 'true');
		jsonfeedscript.setAttribute('src', jsonurl);
		var h = document.getElementsByTagName('head')[0];
		h.appendChild(jsonfeedscript);
	},

	feedOutput: function(feedsPool, params){

		var container = document.getElementById(params.containerID),
				sortedFeeds = feedsPool.sort(NUAMJR_UTILS.sortByIndex),
				j = 0,
				output = [];

		for (; j < params.totalCount; j++) {
			if(j < sortedFeeds.length){
				var entry = sortedFeeds[j],
						counter = j+1,
						item;

				// Some cleanups [custom, for this site only] - START
				if(entry.title.indexOf("fevangelou: ") >= 0){
					entry.title = entry.title.replace(/fevangelou: /i,'');
				}
				if(entry.content.indexOf("fevangelou: ") >= 0){
					entry.content = entry.content.replace(/fevangelou: /i,'');
				}
				if(entry.content.indexOf("Advertise here with BSA") >= 0){
					entry.content = entry.content.replace(/Advertise here with BSA/i,'');
				}
				// Some cleanups [custom, for this site only] - END

				// Prepare template variables
				var entryCssClass = 'amjrElement_'+ params.containerID +'_'+ counter;
				var entryTime = entry.publishedDate.toLocaleTimeString();
				var entryDate = entry.publishedDate.toLocaleDateString();

				// The template layout - swap entry.contentSnippet with entry.content below for a preview of the feed content
				item = params.entryTheme.replace(/{entryCssClass}/g,entryCssClass)
																.replace(/{entryTitle}/g,entry.title)
																.replace(/{entryLink}/g,entry.link)
																.replace(/{entryTime}/g,entryTime)
																.replace(/{entryDate}/g,entryDate)
																.replace(/{entryImage}/g,entry.image)
																.replace(/{entryAuthor}/g,entry.author)
																.replace(/{entryContentSnippet}/g,entry.contentSnippet)
																.replace(/{entryContent}/g,entry.content)
																.replace(/{entryFeedLink}/g,entry.feedLink)
																.replace(/{entryFeedDescription}/g,entry.feedDescription)
																.replace(/{entryFeedPresetTitle}/g,entry.feedPresetTitle)
																.replace(/{entryFeedTitle}/g,entry.feedTitle)
																.replace(/{entryFeedAuthor}/g,entry.feedAuthor)
																.replace(/{entryOrder}/g,entry.order);
				output.push(item);
			}
		}
		container.innerHTML += output.join('');

	}

};

var NUAMJR = (function(){

	this.init = function(options){

			var container = document.getElementById(options.containerID),
					h = document.getElementsByTagName('head')[0],
					feeds = options.feeds,
					scriptsLoaded = false,
					feedCount = 0,
					feedPool = 'amjrFeedPool_' + options.containerID,
					feedPoolCb = 'amjrFeedPool_' + options.containerID + '_cb';

			window[feedPool] = [];

			window[feedPoolCb] = function(data){
				if(data.responseData){
					var feedContent = data.responseData.feed;
					var feedEntries = feedContent.entries;
					for (var i = 0; i < feedEntries.length; i++) {
						var entry = feedEntries[i];
						var feedDate = new Date(entry.publishedDate);
						var feedIndex = Math.round(feedDate.getTime() / 1000);

						// Date
						var humanDate = new Date(entry.publishedDate); // Some date formatting preparation
						// Title
						var cleanTitle = NUAMJR_UTILS.cleanuphtml(entry.title);
						// Prepate Content
						var theContent = NUAMJR_UTILS.strip_tags(entry.content,'<img>');
						// Image
						var theImage;
						var allImages = theContent.match(/\<img(.*?)\>/i);
						if(allImages){
							theImage = allImages[0];
							theImage = theImage.replace(/ (width|height|style|vspace|hspace|border|title)=".*?"/gi, '').replace(/ alt=".*?"/i, ' alt="'+cleanTitle+'"');
						} else {
							// YouTube
							if(entry.link.match(/youtube\.com/i)){
								theImage = '<img src="http://i.ytimg.com/vi/'+entry.link.replace('http://www.youtube.com/watch?v=', '')+'/hqdefault.jpg" />';
							} else if(entry.link.match(/vimeo\.com/i)){
								theImage = '<img src="/proxies/vimeo.php?id='+entry.link.replace('https://vimeo.com/', '')+'" />';
							} else {
								// Everything else
								theImage = '';
							}
						}
						// Process Content
						theContent = NUAMJR_UTILS.truncate(NUAMJR_UTILS.strip_tags(theContent),20).replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
			      	return '<a target="_blank" href="'+url+'">'+url+'</a>';
				    }).replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(hashtag) {
				      return '<a target="_blank" href="http://twitter.com/'+hashtag.substring(1)+'">@'+hashtag.substring(1)+'</a>';
				    }).replace(/(^|\s+)#(\w+)/gi, ' <a target="_blank" href="http://twitter.com/search?q=%23$2">&#035;$2</a>');
				    theContent = NUAMJR_UTILS.trim(theContent);

						var feedEntry = {
							"order": feedIndex,
							"publishedDate": humanDate,
							"title": entry.title,
							"link": entry.link,
							"author": entry.author,
							"contentSnippet": entry.contentSnippet,
							"content": theContent,
							"image": theImage,
							"feedUrl": feedContent.feedUrl,
							"feedTitle": feedContent.title,
							"feedPresetTitle": feeds[feedContent.feedUrl], // problem?
							"feedLink": (feedContent.link ? feedContent.link : feedContent.feedUrl),
							"feedAuthor": feedContent.author,
							"feedDescription": feedContent.description
						}
						window[feedPool].push(feedEntry);
					}
				}
			}

			// Loader
			container.innerHTML = options.loaderTheme.replace(/{loaderID}/g,options.loaderID)
																							 .replace(/{totalEntriesCount}/g,options.totalCount)
																							 .replace(/{totalFeedsCount}/g,feedCount);

			// Get feeds
			for (url in options.feeds) {
				// replace: NUAMJR_UTILS.getJSONFeed(url, options.count, options.proxy, feedPoolCb);
				scriptsLoaded = false;

				if(options.proxy == 'google'){
					var jsonurl = document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + options.count + '&callback=' + feedPoolCb + '&q=' + encodeURIComponent(url);
				} else {
					var jsonurl = document.location.protocol + '//query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from rss where url="' + url + '" limit ' + options.count) + '&format=json&callback=' + feedPoolCb;
				}

				NUAMJR_UTILS.loadjs(jsonurl,function(){
					scriptsLoaded = true;
				});

				/*
				jsonfeedscript.onload = function(){
					scriptsLoaded = true;
				}


				// New onLoad event to be compatible with IE8
				jsonfeedscript.onload = jsonfeedscript.onreadystatechange = function(){
					if ( !scriptsLoaded && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
						scriptsLoaded = true;
						// Handle memory leak in IE
						jsonfeedscript.onload = jsonfeedscript.onreadystatechange = null;
						if ( h && jsonfeedscript.parentNode ) {
							h.removeChild( jsonfeedscript );
						}
    			}
				};

				h.appendChild(jsonfeedscript);
				*/

				feedCount++;
			}

			// Output
			function initReplacement() {
				if (!scriptsLoaded) {
					window.setTimeout(initReplacement, 800);
				} else {
					NUAMJR_UTILS.feedOutput(window[feedPool],options);
					var loader = document.getElementById(options.loaderID);
					container.removeChild(loader);
				}
			}
			initReplacement();

	};

	return this;

})();
