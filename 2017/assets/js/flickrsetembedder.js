/**
 * @version		1.2
 * @package		Flickr Set Embedder
 * @author		Fotis Evangelou
 * @copyright	Copyright (c) 2008 - 2014 Fotis Evangelou. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

/* TO DO:
- add modal callback/custom event
- add templating options
*/

var flickrImgLimit,flickrImgSort,modalClass;

(function(window, flickrApiKey, flickrImgLimit, flickrImgSort, modalClass){
	// Default settings
	if(typeof flickrImgLimit === 'undefined'){
		var flickrImgLimit = 12;
	}
	if(typeof flickrImgSort === 'undefined'){
		var flickrImgSort = 'default';
	}
	if(typeof modalClass === 'undefined'){
		var modalClass = 'lightbox';
	}

	window['flickrGalleryCB'] = function(data){
 		if(data.photoset){
 			var i = 0,
 					link = document.getElementById('flickrGalleryID'+data.photoset.id);
 					photoCount = data.photoset.photo.length,
 					output = [];
			if(flickrImgSort=='random' || (link.getAttribute('data-sort') && link.getAttribute('data-sort')=='random')){
				if(link.getAttribute('data-sort') && link.getAttribute('data-sort')!='random'){
					// do nothing
				} else {
 					photoCount = link.getAttribute('data-limit') || flickrImgLimit;
 					data.photoset.photo.sort(function(){return 0.5 - Math.random();});
 				}
 			}
			for(; i<photoCount; ++i){
				var photo = data.photoset.photo[i];
				var photoUrl = 'https://farm'+photo.farm+'.static.flickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg'; // _m.jpg|_b.jpg
				var photoModalUrl = 'https://farm'+photo.farm+'.static.flickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_b.jpg';
				var photoHref = 'https://www.flickr.com/photos/'+data.photoset.ownername+'/'+photo.id+'/in/set-'+data.photoset.id;

		 		var photoItem = '<li><a target="_blank" rel="'+modalClass+'" class="flickrImageLink '+modalClass+'" title="'+flickrGallery.htmlentities(photo.title)+'" href="'+photoModalUrl+'" style="background-image:url('+photoUrl+');"><span>'+photo.title+'</span></a></li>';
		 		// Inline image: <img src="'+photoUrl+'" alt="'+flickrGallery.htmlentities(photo.title)+'" />
		 		output.push(photoItem);
			}
			link.insertAdjacentHTML('beforebegin', '<ul class="flickrSet">'+output.join('')+'<li class="flickrSetClr"></li></ul>');
 		}
	}
 	var flickrGallery = {
		loadjs: function(url, callback) {
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.async = "true";
			if(callback){
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
			}
			script.src = url;
			document.body.appendChild(script);
		},
		htmlentities: function(str) {
			return str.replace(/&amp;/g, "&").replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
		},
		init: function(){
			var links = document.getElementsByTagName('a');
			var linksCount = links.length;
			var i = 0;
			for(; i<linksCount; ++i){
				var link = links[i];
				if(link.getAttribute('data-source')=='flickr'){
					var flickrSetRegex = new RegExp("http(s|)://(www.|)flickr\.com\/photos\/(.*?)\/sets\/(.*?)\/","g");
					var flickrSetId = flickrSetRegex.exec(link)[4];
					link.setAttribute('id', 'flickrGalleryID'+flickrSetId);
					if(link.getAttribute('data-limit')){
						var flickrSetLimit = link.getAttribute('data-limit');
					} else {
						var flickrSetLimit = flickrImgLimit; // default value
					}
					if(flickrImgSort=='random' || (link.getAttribute('data-sort') && link.getAttribute('data-sort')=='random')){
						if(link.getAttribute('data-sort') && link.getAttribute('data-sort')!='random'){
							// do nothing
						} else {
							var flickrSetLimit = flickrSetLimit*4; // for better randomness
						}
					}
					//var flickrApiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id='+flickrSetId+'&format=json&jsoncallback=flickrGalleryCB&media=photos&per_page='+flickrSetLimit+'&api_key='+flickrApiKey+'&extras=date_upload,date_taken,owner_name,original_format,last_update,tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_m,url_o';
					var flickrApiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id='+flickrSetId+'&format=json&jsoncallback=flickrGalleryCB&media=photos&per_page='+flickrSetLimit+'&api_key='+flickrApiKey+'&extras=date_upload,date_taken,owner_name,original_format,last_update,tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_m,url_o';
					flickrGallery.loadjs(flickrApiUrl);
				}
			}
		}
	}
	if (window.addEventListener) {
		window.addEventListener("load", flickrGallery.init, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", flickrGallery.init);
	} else {
		window.onload = flickrGallery.init;
	}
})(window, flickrApiKey, flickrImgLimit, flickrImgSort, modalClass);
