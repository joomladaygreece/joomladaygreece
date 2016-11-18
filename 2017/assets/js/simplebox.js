/**
 * @version		2.0
 * @package		SimpleBox
 * @author    Fotis Evangelou
 * @copyright	Copyright (c) 2008 - 2013 Fotis Evangelou. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

/*
TO DO:
- check IE6 compatibility
- fix animation
- add option to have img element instead of bg image
- add image navigation
*/

(function(window){

	// Parameters
	var useAnimation = false;
	var sbLoaderSide = 100;
	var resizeHeight = 500;
	var imgDisplayDelay = 600;
	var sbRelTag = "simplebox";
	var sbOverlayId = "jwIVoverlay";
	var sbContainerId = "jwIVcontainer";
	var sbContentId = "jwIVcontent";
	var sbImageId = "jwIVimage";
	var sbImageAlt = "Preview...";
	var sbCaptionId = "sbcaption";
	var sbButtonCloseId = "jwIVclose";
	var sbCloseTitle = "Click anywhere on the screen to close the image...";
	
	//var isIE6 = false /*@cc_on || @_jscript_version < 5.7 @*/;
	var isIE6 = navigator.userAgent.toLowerCase().indexOf('msie 6') != -1;
	
	// Main simpleBox function
	function simpleBox() {
		if(!document.getElementsByTagName) return false;
		if(!document.getElementById) return false;
		
		var modalClass = new RegExp(sbRelTag, "i");
		
		var a = document.getElementsByTagName("a");
		
		var sbCSS = document.createElement('link');
		sbCSS.setAttribute('type', 'text/css');
		sbCSS.setAttribute('rel', 'stylesheet');
		sbCSS.setAttribute('href', '//cdn.nuevvo.net/js/simplebox/simplebox.css');
		document.head.appendChild(sbCSS);
		
		setTimeout(function(){
			for(var i=0; i<a.length; i++){
				if (a[i].getAttribute("rel") == sbRelTag || modalClass.test(a[i].className)) {
					a[i].onclick = function(){
						var imgSource = this.getAttribute("href");
						var imgTitle = this.getAttribute("title");
						buildImgPopup(imgSource,imgTitle);
						return false;
					}
				}
			}
		}, 1000);
	}
	
	function buildImgPopup(sbImg,sbTitle){
		var sbImg;
		var sbTitle;
	
		// For IE6 only
		if(isIE6){
			var htmlTag = document.getElementsByTagName('html')[0];
			htmlTag.className += 'sbIsIE6';
			var IEwidth = screen.width+'px';
			var IEheight = screen.height+'px';
		}
	
		// create and append the HTML
		var jwlbcontainer = document.createElement('div');
		jwlbcontainer.setAttribute("id",sbOverlayId);
		if(isIE6){
			jwlbcontainer.style.height = document.documentElement.clientWidth+'px';
			jwlbcontainer.style.height = document.documentElement.clientHeight+'px';
		}
		jwlbcontainer.innerHTML = '<div id="'+sbContainerId+'" style="width:'+IEwidth+';height:'+IEheight+';"><a href="#" title="'+sbCloseTitle+'">&nbsp;</a></div><div id="'+sbContentId+'"><a id="'+sbImageId+'" href="#" title="'+sbCloseTitle+'"></a><span id="'+sbCaptionId+'">'+sbTitle+'</span><a id="'+sbButtonCloseId+'" href="#" title="'+sbCloseTitle+'">&nbsp;</a></div>';
	
		//<img id="'+sbImageId+'" src="'+sbImg+'" alt="'+sbImageAlt+'" />

		document.getElementsByTagName("body")[0].appendChild(jwlbcontainer);
	
		// container div
		var div = document.getElementById(sbContentId);
		div.style.width = sbLoaderSide+'px';
		div.style.height = sbLoaderSide+'px';
		div.style.margin = '-'+(sbLoaderSide/2)+'px 0 0 -'+(sbLoaderSide/2)+'px';
	
		// define the popup image
		var img = document.getElementById(sbImageId);
		img.style.background = "url("+sbImg+") no-repeat 50% 50%";
		img.style.display = "none";
	
		var imgCaption = document.getElementById(sbCaptionId);
		imgCaption.style.display = "none";
	
		// create the image object
		var image = new Image();
		image.onload = function(){
	
			// Grab image dimensions and do some resizing
			if(resizeHeight){
				if(image.height<resizeHeight){
					imgHeight = image.height;
					imgWidth = image.width;
				} else {
					imgHeight = resizeHeight;
					imgWidth = Math.round(image.width*resizeHeight/image.height);
					img.height = imgHeight;
					img.width = imgWidth;
				}
			} else {
				imgHeight = image.height;
				imgWidth = image.width;
			}
	
			if(useAnimation){
				// Hide the loading icon
				setTimeout(function(){div.style.background = "#060606";},300);
				// Animate the popup
				setTimeout(function(){animate(div,sbLoaderSide,imgWidth,sbLoaderSide,imgHeight);},600);
			} else {
				// Hide the loading icon
				setTimeout(function(){div.style.background = "#060606";},300);
				// provide new dimensions for the container
				setTimeout(function(){
					div.style.width = imgWidth+'px';
					div.style.height = imgHeight+28+'px';
					div.style.margin = '-'+((imgHeight+28)/2)+'px 0 0 -'+(imgWidth/2)+'px';
				},600);
			}
	
			// Display the image - imgDisplayDelay
			setTimeout(function(){
				img.style.display="block";
				imgCaption.style.display="";
			},900);
	
		}
	
		// Append the image source so IE can read image dimensions properly
		image.src = sbImg;
	
		// Destroy HTML created for the popup
		var closeLinks = jwlbcontainer.getElementsByTagName("a");
		for(var j=0; j<closeLinks.length; j++){
			closeLinks[j].onclick = function(){
				jwlbcontainer.style.display='none';
				document.getElementsByTagName("body")[0].removeChild(jwlbcontainer);
				return false;
			}
		}
	}
	
	// --- TO DO ---
	function animate(el,startWidth,endWidth,startHeight,endHeight){
		var steps = 10;
		var interval = 60;
	
		// Starting values
		el.style.width = startWidth+'px';
		el.style.height = startHeight+'px';
		el.style.margin = '-'+((startHeight+28)/2)+'px 0 0 -'+(startWidth/2)+'px';
	
		var increaseWidth = Math.round((endWidth-startWidth)/steps);
		var increaseHeight = Math.round((endHeight-startHeight)/steps);
	
		// Adjustments
		var adjustDimensions = function(){
			el.style.width = parseInt(el.style.width)+increaseWidth+'px';
			el.style.height = parseInt(el.style.height)+increaseHeight+'px';
			el.style.margin = '-'+(parseInt((el.style.height)+28)/2)+'px 0 0 -'+(parseInt(el.style.width)/2)+'px';
		}
	
		// Loop
		for(var i=0; i<steps; i++) {
			setTimeout(adjustDimensions,interval);
		}
	}
	
	if (window.addEventListener) {
		window.addEventListener("load", simpleBox, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", simpleBox);
	} else {
		window.onload = simpleBox;
	}

})(window);