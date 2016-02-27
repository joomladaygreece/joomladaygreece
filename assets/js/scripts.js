/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
/* Copyright (c) 2012 HyeonJe Jun (http://github.com/noraesae)
 * Licensed under the MIT License
 */
(function($){var defaultSettings={wheelSpeed:10,wheelPropagation:false};$.fn.perfectScrollbar=function(suppliedSettings,option){var settings=$.extend(true,{},defaultSettings);if(typeof suppliedSettings==="object"){$.extend(true,settings,suppliedSettings)}else{option=suppliedSettings}if(option==="update"){if($(this).data("perfect_scrollbar_update")){$(this).data("perfect_scrollbar_update")()}return $(this)}else if(option==="destroy"){if($(this).data("perfect_scrollbar_destroy")){$(this).data("perfect_scrollbar_destroy")()}return $(this)}if($(this).data("perfect_scrollbar")){return $(this).data("perfect_scrollbar")}var $this=$(this).addClass("ps-container"),$content=$(this).children(),$scrollbar_x=$("<div class='ps-scrollbar-x'></div>").appendTo($this),$scrollbar_y=$("<div class='ps-scrollbar-y'></div>").appendTo($this),container_width,container_height,content_width,content_height,scrollbar_x_width,scrollbar_x_left,scrollbar_x_bottom=parseInt($scrollbar_x.css("bottom"),10),scrollbar_y_height,scrollbar_y_top,scrollbar_y_right=parseInt($scrollbar_y.css("right"),10);var updateContentScrollTop=function(){var scroll_top=parseInt(scrollbar_y_top*content_height/container_height,10);$this.scrollTop(scroll_top);$scrollbar_x.css({bottom:scrollbar_x_bottom-scroll_top})};var updateContentScrollLeft=function(){var scroll_left=parseInt(scrollbar_x_left*content_width/container_width,10);$this.scrollLeft(scroll_left);$scrollbar_y.css({right:scrollbar_y_right-scroll_left})};var updateBarSizeAndPosition=function(){container_width=$this.width();container_height=$this.height();content_width=$content.outerWidth(false);content_height=$content.outerHeight(false);if(container_width<content_width){scrollbar_x_width=parseInt(container_width*container_width/content_width,10);scrollbar_x_left=parseInt($this.scrollLeft()*container_width/content_width,10)}else{scrollbar_x_width=0;scrollbar_x_left=0;$this.scrollLeft(0)}if(container_height<content_height){scrollbar_y_height=parseInt(container_height*container_height/content_height,10);scrollbar_y_top=parseInt($this.scrollTop()*container_height/content_height,10)}else{scrollbar_y_height=0;scrollbar_y_left=0;$this.scrollTop(0)}$scrollbar_x.css({left:scrollbar_x_left+$this.scrollLeft(),bottom:scrollbar_x_bottom-$this.scrollTop(),width:scrollbar_x_width});$scrollbar_y.css({top:scrollbar_y_top+$this.scrollTop(),right:scrollbar_y_right-$this.scrollLeft(),height:scrollbar_y_height})};var moveBarX=function(current_left,delta_x){var new_left=current_left+delta_x,max_left=container_width-scrollbar_x_width;if(new_left<0){scrollbar_x_left=0}else if(new_left>max_left){scrollbar_x_left=max_left}else{scrollbar_x_left=new_left}$scrollbar_x.css({left:scrollbar_x_left+$this.scrollLeft()})};var moveBarY=function(current_top,delta_y){var new_top=current_top+delta_y,max_top=container_height-scrollbar_y_height;if(new_top<0){scrollbar_y_top=0}else if(new_top>max_top){scrollbar_y_top=max_top}else{scrollbar_y_top=new_top}$scrollbar_y.css({top:scrollbar_y_top+$this.scrollTop()})};var bindMouseScrollXHandler=function(){var current_left,current_page_x;$scrollbar_x.bind("mousedown.perfect-scroll",function(e){current_page_x=e.pageX;current_left=$scrollbar_x.position().left;$scrollbar_x.addClass("in-scrolling");e.stopPropagation();e.preventDefault()});$(document).bind("mousemove.perfect-scroll",function(e){if($scrollbar_x.hasClass("in-scrolling")){moveBarX(current_left,e.pageX-current_page_x);updateContentScrollLeft();e.stopPropagation();e.preventDefault()}});$(document).bind("mouseup.perfect-scroll",function(e){if($scrollbar_x.hasClass("in-scrolling")){$scrollbar_x.removeClass("in-scrolling")}})};var bindMouseScrollYHandler=function(){var current_top,current_page_y;$scrollbar_y.bind("mousedown.perfect-scroll",function(e){current_page_y=e.pageY;current_top=$scrollbar_y.position().top;$scrollbar_y.addClass("in-scrolling");e.stopPropagation();e.preventDefault()});$(document).bind("mousemove.perfect-scroll",function(e){if($scrollbar_y.hasClass("in-scrolling")){moveBarY(current_top,e.pageY-current_page_y);updateContentScrollTop();e.stopPropagation();e.preventDefault()}});$(document).bind("mouseup.perfect-scroll",function(e){if($scrollbar_y.hasClass("in-scrolling")){$scrollbar_y.removeClass("in-scrolling")}})};var bindMouseWheelHandler=function(){var shouldPreventDefault=function(deltaX,deltaY){var scrollTop=$this.scrollTop();if(scrollTop===0&&deltaY>0&&deltaX===0){return!settings.wheelPropagation}else if(scrollTop>=content_height-container_height&&deltaY<0&&deltaX===0){return!settings.wheelPropagation}var scrollLeft=$this.scrollLeft();if(scrollLeft===0&&deltaX<0&&deltaY===0){return!settings.wheelPropagation}else if(scrollLeft>=content_width-container_width&&deltaX>0&&deltaY===0){return!settings.wheelPropagation}return true};$this.mousewheel(function(e,delta,deltaX,deltaY){$this.scrollTop($this.scrollTop()-deltaY*settings.wheelSpeed);$this.scrollLeft($this.scrollLeft()+deltaX*settings.wheelSpeed);updateBarSizeAndPosition();if(shouldPreventDefault(deltaX,deltaY)){e.preventDefault()}})};var bindMobileTouchHandler=function(){var applyTouchMove=function(difference_x,difference_y){$this.scrollTop($this.scrollTop()-difference_y);$this.scrollLeft($this.scrollLeft()-difference_x);updateBarSizeAndPosition()};var start_coords={},start_time=0,speed={},breaking_process=null;$this.bind("touchstart.perfect-scroll",function(e){var touch=e.originalEvent.targetTouches[0];start_coords.pageX=touch.pageX;start_coords.pageY=touch.pageY;start_time=(new Date).getTime();if(breaking_process!==null){clearInterval(breaking_process)}});$this.bind("touchmove.perfect-scroll",function(e){var touch=e.originalEvent.targetTouches[0];var current_coords={};current_coords.pageX=touch.pageX;current_coords.pageY=touch.pageY;var difference_x=current_coords.pageX-start_coords.pageX,difference_y=current_coords.pageY-start_coords.pageY;applyTouchMove(difference_x,difference_y);start_coords=current_coords;var current_time=(new Date).getTime();speed.x=difference_x/(current_time-start_time);speed.y=difference_y/(current_time-start_time);start_time=current_time;e.preventDefault()});$this.bind("touchend.perfect-scroll",function(e){breaking_process=setInterval(function(){if(Math.abs(speed.x)<.01&&Math.abs(speed.y)<.01){clearInterval(breaking_process);return}applyTouchMove(speed.x*30,speed.y*30);speed.x*=.8;speed.y*=.8},10)})};var destroy=function(){$scrollbar_x.remove();$scrollbar_y.remove();$this.unbind("mousewheel");$this.unbind("touchstart.perfect-scroll");$this.unbind("touchmove.perfect-scroll");$this.unbind("touchend.perfect-scroll");$(window).unbind("mousemove.perfect-scroll");$(window).unbind("mouseup.perfect-scroll");$this.data("perfect_scrollbar",null);$this.data("perfect_scrollbar_update",null);$this.data("perfect_scrollbar_destroy",null)};var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);var initialize=function(){updateBarSizeAndPosition();bindMouseScrollXHandler();bindMouseScrollYHandler();if(isMobile)bindMobileTouchHandler();if($this.mousewheel)bindMouseWheelHandler();$this.data("perfect_scrollbar",$this);$this.data("perfect_scrollbar_update",updateBarSizeAndPosition);$this.data("perfect_scrollbar_destroy",destroy)};initialize();return $this}})(jQuery);(function($){var types=["DOMMouseScroll","mousewheel"];if($.event.fixHooks){for(var i=types.length;i;){$.event.fixHooks[types[--i]]=$.event.mouseHooks}}$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var i=types.length;i;){this.addEventListener(types[--i],handler,false)}}else{this.onmousewheel=handler}},teardown:function(){if(this.removeEventListener){for(var i=types.length;i;){this.removeEventListener(types[--i],handler,false)}}else{this.onmousewheel=null}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}});function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta){delta=orgEvent.wheelDelta/120}if(orgEvent.detail){delta=-orgEvent.detail/3}deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta}if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120}if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120}args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args)}})(jQuery);

// jquerytools.org tabs
(function(a){a.tools=a.tools||{version:"dev"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(!d.isDefaultPrevented()){b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.current),i.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);

var $jf = jQuery.noConflict();

// responsive fixed positions
function resOffset() {

	var btmHeight		= $jf('#colophon').height();
	var docHeight		= $jf(document).height();
	var winHeight		= $jf(window).height();
	var docWidth		= $jf(document).width();
	var docWidthEms		= $jf(window).width() / parseFloat($jf("body").css("font-size"));
	var offset			= $jf(window).scrollTop();
	var scrollPercent	= (offset / docHeight) * 100;

	$jf('body').css('margin-bottom', btmHeight + 200 ); // include some paddings

	if( scrollPercent > 50 ) {
		$jf('#colophon').css('z-index', 2);
	} else {
		$jf('#colophon').css('z-index', -1);
	}

	// The following check breaks the site on a Retina MacBook Pro 15"
	/*
	if (docWidth > 1440){
		$jf('body#home').css('padding-top', winHeight ); // include some paddings
	} else {
		$jf('body#home').css('padding-top', '0' ); // remove all paddings
	}
	*/
}

// Custom Checkboxes
function setupLabels() {

	// Checkbox variables
	var checkBox = "label.checkbox";
	var checkBoxInput = checkBox + " input[type='checkbox']";
	var checkBoxChecked = "checked";
	var checkBoxDisabled = "disabled";

	// Checkboxes
	if ($jf(checkBoxInput).length) {

		$jf(checkBox).each(function() {
			$jf(this).removeClass(checkBoxChecked);
			$jf('.eventModal').removeClass('activated');
			$jf('.ebButton').prop("disabled", true);
		});
		$jf(checkBoxInput + ":checked").each(function() {
			$jf(this).parents(checkBox).addClass(checkBoxChecked);
			$jf('.ebButton').removeProp("disabled");
			$jf('.eventModal').toggleClass('activated');
		});
		$jf(checkBoxInput + ":disabled").each(function() {
			$jf(this).parents(checkBox).addClass(checkBoxDisabled);
			$jf('.ebButton').prop("disabled", true);
			$jf('.eventModal').toggleClass('activated');
		});
	}
}

function parallaxBg() {

	if ($jf('.socialLinks').length) {
		var $trueOffset		= $jf(window).scrollTop();
		var $offset 			= $jf('.mediaSponsors').offset();
		var $diffPx				= ($trueOffset - $offset.top);

		$jf(window).scroll(function() {
			if ($diffPx < 1000) {
				$jf('.socialLinks').css('background-position', $diffPx / 2 + 'px 0');
			}
		});
	}
}

// positioning and manipulating the modal
function triggerModal(modalID) {
	var modalOffset;
	if( $jf(window).width() > 650 ) {
		$jf(modalID).css('margin-left', '-' + ($jf('.modal').outerWidth()) / 2 + 'px');
	} else {
		$jf(modalID).css('margin-left', '0');
		$jf(modalID).css('left', '0');
	}
	// horizontal position
	if( $jf(window).height() > 550 ) {
		modalOffset = ($jf(window).height() - $jf('.modal').height()) / 3;
	} else {
		modalOffset = 0;
	}
	$jf(modalID).animate({
		'top' : modalOffset
	}, 'fast');

	$jf(modalID).addClass('activeModal');
}

function closeModal() {
	$jf('.activeModal').css('top','-1000px');
	$jf('.activeModal').removeClass('activeModal');
}

// Presentation Form
$jf('#suggestionFrame').load(function() {
	var response = $jf('#suggestionFrame')[0].contentWindow.document.body.innerHTML;
	if (response === '0') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε το όνομά σας!');
	} else if (response === '1') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε το email σας!');
	} else if (response === '2') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε τη περιγραφή!');
	} else if (response === '3') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε το τηλέφωνο σας!');
	} else if (response === '4') {
		$jf('#formStatus').addClass('notice error').html('Το μήνυμα αναγνωρίστηκε ως κακόβουλο και δεν εστάλει.');
	} else if (response === '5') {
		$jf('#formStatus').addClass('notice success').html('Το μήνυμα σας έχει σταλεί. Ευχαριστούμε!');
		setTimeout(function() {
			$jf('.closeOverlay').trigger('click');
		}, 2000);
	}
});

// Sponsor Form
$jf('#sponsorFrame').load(function() {
	var response = $jf('#sponsorFrame')[0].contentWindow.document.body.innerHTML;
	$jf('#formStatus').removeClass('notice error success').empty();
	if (response === '0') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε το όνομά σας!');
	} else if (response === '1') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε το email σας!');
	} else if (response === '2') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε τα σχόλια σας!');
	} else if (response === '3') {
		$jf('#formStatus').addClass('notice error').html('Συμπληρώστε το τηλέφωνο σας!');
	} else if (response === '4') {
		$jf('#formStatus').addClass('notice error').html('Το μήνυμα αναγνωρίστηκε ως κακόβουλο και δεν εστάλει.');
	} else if (response === '5') {
		$jf('#formStatus').addClass('notice success').html('Το μήνυμα σας έχει σταλεί. Ευχαριστούμε!');
		setTimeout(function() {
			$jf('.closeOverlay').trigger('click');
		}, 2000);
	}
});

//show the overlays
$jf('.overlayTrigger').click(function(e){
	e.preventDefault();
	$jf('#submitPresOverlay').toggleClass('openOverlay');
});

//close the overlays
$jf('.closeOverlay').click(function(e){
	e.preventDefault();
	$jf(this).parent().toggleClass('openOverlay');
});

// smooth scrolling (used for the links to the lower tabs)
$jf('.lScroll').click(function(event){
	event.preventDefault();
	var target = this.hash;
	$jf('html, body').stop().animate({
		scrollTop: $jf(target).offset().top
	}, 500);
});

// the tabs
$jf("ul.tabs").tabs("div.panes > div");

// get handle to the api (must have been constructed before this call)
var api = $jf("ul.tabs").data("tabs");
//open the appropriate tab when clicking on a link
$jf('.tbLink').click(function(){
	var index = $jf(".tbLink").index(this);
	api.click(index);
});

// Eventbrite pseudo modal and form elements
$jf('.attendanceLink').click(function(e){
	e.preventDefault();
	triggerModal('#eventModal');
});

//construct the custom checkboxes
$jf(".eventModal").on("click", "label.checkbox",function() {
	setupLabels();
});
setupLabels();

//navigation button
$jf('.ebButton').on('click', function(e){
	e.preventDefault();
	$jf('.modalClose').trigger('click');
	window.location.href = 'http://joomladaygreece2013.eventbrite.com/';
});

// Sponsors
$jf('.silverSponsors').on('click', '.sponsorInfoLink', function(event){
	event.preventDefault();
	var sponsorID = $jf(this).data('sponsor-id');
	$jf.getJSON('http://joomladay.gr/assets/sponsors.json', function(sponsors) {
		$jf.each(sponsors, function(index, sponsor) {
			if(sponsor.id === sponsorID) {
				triggerModal('#sponsorModal');
				$jf('.sponsorModal .modalBody').html(sponsor.description);
				$jf('.sponsorModal .modalHeader').html(sponsor.name);
				$jf('.sponsorModal .modalHeader').append('<i class="icon-cancel modalClose floatRight"></i>');
			}
		});
	});
});

//close label
$jf('.modal').on('click', '.modalClose', function(){
	closeModal();
});

// Fallback for ie8 - tooltips
$jf('.lt-ie9 .hasTip').hover( function(){
	$jf(this).next().show();
});
$jf('.lt-ie9 .tooltip').on( "mouseleave", function(){
	$jf(this).hide();
});

// Social popup
var openWindowPopup = function(e) {
	if(!e) return;
	e.preventDefault();
	window.open(this.href, "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 50) + ",top=" + 100);
};
var ids = ['tweet','like', 'gplus'];
if( $jf(".eventLinks").length ) {
	for (var i = 0; i < ids.length; i++) {
			document.getElementById(ids[i]).onclick = openWindowPopup;
	}
}

// AMJR
if($jf('#jfNews').length) {
	NUAMJR.init({
		containerID: 'jfNews',			// the id of a UL element to hold feed results
		count: 5,										// maximum number of feed items to process per feed
		loaderID: 'jfNewsLoader',		// the id of the LI element used as the loader
		proxy: 'google',						// google or yql (google is faster)
		totalCount: 5,							// total feed items to output

		// theme for the loader element
		loaderTheme: '<li id="{loaderID}" class="loader"><div>Loading the {totalEntriesCount} most recent feed items from a total of {totalFeedsCount} feed sources...</div></li>',
		// theme for each feed entry
		entryTheme: '<li class="feedIs{entryFeedPresetTitle}"><div class="{entryCssClass} textFeedWrapper"><em>{entryDate} - {entryTime}</em><p class="entryContent"><a class="title amjrIframe" target="_blank" title="{entryTitle}" href="{entryLink}">{entryContentSnippet}</a></p></div></li>',
		// source feeds (must be in RSS or Atom format) and preset feed name
		feeds: {
			'https://www.facebook.com/feeds/page.php?id=178369765543494&format=rss20': 'Facebook'
		}
	});
}

$jf(window).load(function() {
	resOffset();
	// show the footer for more optimal loading
	$jf('#colophon').show();
});

$jf(window).scroll(function() {
	resOffset();
	parallaxBg();
});

$jf(window).resize(function() {
	// set the correct height
	setTimeout( function(){ resOffset(); }, 250);
});
