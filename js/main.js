!function($){var t={},e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};$.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){$(this).bxSlider(n)}),this;var s={},o=this;t.el=this;var a=$(window).width(),r=$(window).height(),l=function(){s.settings=$.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"==s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!=s.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"==s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))}),d()},d=function(){o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.loader=$('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"==s.settings.mode?100*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing");var t=v();s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:g()}),s.settings.pager||s.viewport.parent().css({margin:"0 auto 0px"}),s.children.css({"float":"horizontal"==s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",p()),"horizontal"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"==s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=$('<div class="bx-controls" />'),s.settings.captions&&C(),s.active.last=s.settings.startSlide==f()-1,s.settings.video&&o.fitVids();var e=s.children.eq(s.settings.startSlide);"all"==s.settings.preloadImages&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.pager&&y(),s.settings.controls&&w(),s.settings.auto&&s.settings.autoControls&&T(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,u)},c=function(t,e){var i=t.find("img, iframe").length;if(0==i)return void e();var n=0;t.find("img, iframe").each(function(){$(this).one("load",function(){++n==i&&e()}).each(function(){this.complete&&$(this).load()})})},u=function(){if(s.settings.infiniteLoop&&"fade"!=s.settings.mode&&!s.settings.ticker){var t="vertical"==s.settings.mode?s.settings.minSlides:s.settings.maxSlides,e=s.children.slice(0,t).clone().addClass("bx-clone"),i=s.children.slice(-t).clone().addClass("bx-clone");o.append(e).prepend(i)}s.loader.remove(),x(),"vertical"==s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(h()),o.redrawSlider(),s.settings.onSliderLoad(s.active.index),s.initialized=!0,s.settings.responsive&&$(window).bind("resize",j),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&N(),s.settings.pager&&P(s.settings.startSlide),s.settings.controls&&A(),s.settings.touchEnabled&&!s.settings.ticker&&O()},h=function(){var t=0,e=$();if("vertical"==s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var n=1==s.settings.moveSlides?s.active.index:s.active.index*m();for(e=s.children.eq(n),i=1;i<=s.settings.maxSlides-1;i++)e=n+i>=s.children.length?e.add(s.children.eq(i-1)):e.add(s.children.eq(n+i))}else e=s.children.eq(s.active.index);else e=s.children;return"vertical"==s.settings.mode?(e.each(function(e){t+=$(this).outerHeight()}),s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))):t=Math.max.apply(Math,e.map(function(){return $(this).outerHeight(!1)}).get()),"border-box"==s.viewport.css("box-sizing")?t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"==s.viewport.css("box-sizing")&&(t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),t},g=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"==s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},p=function(){var t=s.settings.slideWidth,e=s.viewport.width();return 0==s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"==s.settings.mode?t=e:s.settings.maxSlides>1&&"horizontal"==s.settings.mode&&(e>s.maxThreshold||e<s.minThreshold&&(t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides)),t},v=function(){var t=1;if("horizontal"==s.settings.mode&&s.settings.slideWidth>0)if(s.viewport.width()<s.minThreshold)t=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)t=s.settings.maxSlides;else{var e=s.children.first().width()+s.settings.slideMargin;t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)}else"vertical"==s.settings.mode&&(t=s.settings.minSlides);return t},f=function(){var t=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/m());else for(var e=0,i=0;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else t=Math.ceil(s.children.length/v());return t},m=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},x=function(){if(s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop){if("horizontal"==s.settings.mode){var t=s.children.last(),e=t.position();S(-(e.left-(s.viewport.width()-t.outerWidth())),"reset",0)}else if("vertical"==s.settings.mode){var i=s.children.length-s.settings.minSlides,e=s.children.eq(i).position();S(-e.top,"reset",0)}}else{var e=s.children.eq(s.active.index*m()).position();s.active.index==f()-1&&(s.active.last=!0),void 0!=e&&("horizontal"==s.settings.mode?S(-e.left,"reset",0):"vertical"==s.settings.mode&&S(-e.top,"reset",0))}},S=function(t,e,i,n){if(s.usingCSS){var a="vertical"==s.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(o.css(s.animProp,a),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?o.css(s.animProp,a):"ticker"==e&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,a),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),L()}))}else{var r={};r[s.animProp]=t,"slide"==e?o.animate(r,i,s.settings.easing,function(){D()}):"reset"==e?o.css(s.animProp,t):"ticker"==e&&o.animate(r,speed,"linear",function(){S(n.resetValue,"reset",0),L()})}},b=function(){for(var t="",e=f(),i=0;e>i;i++){var n="";s.settings.buildPager&&$.isFunction(s.settings.buildPager)?(n=s.settings.buildPager(i),s.pagerEl.addClass("bx-custom-pager")):(n=i+1,s.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+n+"</a></div>"}s.pagerEl.html(t)},y=function(){s.settings.pagerCustom?s.pagerEl=$(s.settings.pagerCustom):(s.pagerEl=$('<div class="bx-pager" />'),s.settings.pagerSelector?$(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click","a",z)},w=function(){s.controls.next=$('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=$('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click",E),s.controls.prev.bind("click",I),s.settings.nextSelector&&$(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&$(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=$('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=$('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",k),s.controls.autoEl.on("click",".bx-stop",M),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?$(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),q(s.settings.autoStart?"stop":"start")},C=function(){s.children.each(function(t){var e=$(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&$(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},E=function(t){s.settings.auto&&o.stopAuto(),o.goToNextSlide(),t.preventDefault()},I=function(t){s.settings.auto&&o.stopAuto(),o.goToPrevSlide(),t.preventDefault()},k=function(t){o.startAuto(),t.preventDefault()},M=function(t){o.stopAuto(),t.preventDefault()},z=function(t){s.settings.auto&&o.stopAuto();var e=$(t.currentTarget);if(void 0!==e.attr("data-slide-index")){var i=parseInt(e.attr("data-slide-index"));i!=s.active.index&&o.goToSlide(i),t.preventDefault()}},P=function(t){var e=s.children.length;return"short"==s.settings.pagerType?(s.settings.maxSlides>1&&(e=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(t+1+s.settings.pagerShortSeparator+e)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(e,i){$(i).find("a").eq(t).addClass("active")}))},D=function(){if(s.settings.infiniteLoop){var t="";0==s.active.index?t=s.children.eq(0).position():s.active.index==f()-1&&s.carousel?t=s.children.eq((f()-1)*m()).position():s.active.index==s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"==s.settings.mode?S(-t.left,"reset",0):"vertical"==s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},q=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},A=function(){1==f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0==s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index==f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){if(s.settings.autoDelay>0)var t=setTimeout(o.startAuto,s.settings.autoDelay);else o.startAuto();s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},N=function(){var t=0;if("next"==s.settings.autoDirection)o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var e=s.children.first().position();t="horizontal"==s.settings.mode?-e.left:-e.top}S(t,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&!s.usingCSS&&s.viewport.hover(function(){o.stop()},function(){var t=0;s.children.each(function(e){t+="horizontal"==s.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)});var e=s.settings.speed/t,i="horizontal"==s.settings.mode?"left":"top",n=e*(t-Math.abs(parseInt(o.css(i))));L(n)}),L()},L=function(t){speed=t?t:s.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==s.settings.autoDirection?e=o.find(".bx-clone").first().position():i=s.children.first().position();var n="horizontal"==s.settings.mode?-e.left:-e.top,a="horizontal"==s.settings.mode?-i.left:-i.top,r={resetValue:a};S(n,"ticker",speed,r)},O=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart",W)},W=function(t){if(s.working)t.preventDefault();else{s.touch.originalPos=o.position();var e=t.originalEvent;s.touch.start.x=e.changedTouches[0].pageX,s.touch.start.y=e.changedTouches[0].pageY,s.viewport.bind("touchmove",R),s.viewport.bind("touchend",F)}},R=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-s.touch.start.x),n=Math.abs(e.changedTouches[0].pageY-s.touch.start.y);if(3*i>n&&s.settings.preventDefaultSwipeX?t.preventDefault():3*n>i&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=s.settings.mode&&s.settings.oneToOneTouch){var o=0;if("horizontal"==s.settings.mode){var a=e.changedTouches[0].pageX-s.touch.start.x;o=s.touch.originalPos.left+a}else{var a=e.changedTouches[0].pageY-s.touch.start.y;o=s.touch.originalPos.top+a}S(o,"reset",0)}},F=function(t){s.viewport.unbind("touchmove",R);var e=t.originalEvent,i=0;if(s.touch.end.x=e.changedTouches[0].pageX,s.touch.end.y=e.changedTouches[0].pageY,"fade"==s.settings.mode){var n=Math.abs(s.touch.start.x-s.touch.end.x);n>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())}else{var n=0;"horizontal"==s.settings.mode?(n=s.touch.end.x-s.touch.start.x,i=s.touch.originalPos.left):(n=s.touch.end.y-s.touch.start.y,i=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0==s.active.index&&n>0||s.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=s.settings.swipeThreshold?(0>n?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(i,"reset",200)}s.viewport.unbind("touchend",F)},j=function(t){if(s.initialized){var e=$(window).width(),i=$(window).height();(a!=e||r!=i)&&(a=e,r=i,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}};return o.goToSlide=function(t,e){if(!s.working&&s.active.index!=t)if(s.working=!0,s.oldIndex=s.active.index,0>t?s.active.index=f()-1:t>=f()?s.active.index=0:s.active.index=t,s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index),"next"==e?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index):"prev"==e&&s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index),s.active.last=s.active.index>=f()-1,s.settings.pager&&P(s.active.index),s.settings.controls&&A(),"fade"==s.settings.mode)s.settings.adaptiveHeight&&s.viewport.height()!=h()&&s.viewport.animate({height:h()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){$(this).css("zIndex",s.settings.slideZIndex),D()});else{s.settings.adaptiveHeight&&s.viewport.height()!=h()&&s.viewport.animate({height:h()},s.settings.adaptiveHeightSpeed);var i=0,n={left:0,top:0};if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if("horizontal"==s.settings.mode){var a=s.children.eq(s.children.length-1);n=a.position(),i=s.viewport.width()-a.outerWidth()}else{var r=s.children.length-s.settings.minSlides;n=s.children.eq(r).position()}else if(s.carousel&&s.active.last&&"prev"==e){var l=1==s.settings.moveSlides?s.settings.maxSlides-m():(f()-1)*m()-(s.children.length-s.settings.maxSlides),a=o.children(".bx-clone").eq(l);n=a.position()}else if("next"==e&&0==s.active.index)n=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1;else if(t>=0){var d=t*m();n=s.children.eq(d).position()}if("undefined"!=typeof n){var c="horizontal"==s.settings.mode?-(n.left-i):-n.top;S(c,"slide",s.settings.speed)}}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!=s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"==s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&1!=t&&q("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&1!=t&&q("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideCount=function(){return s.children.length},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).width(p()),s.viewport.css("height",h()),s.settings.ticker||x(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),P(s.active.index))},o.destroySlider=function(){s.initialized&&(s.initialized=!1,$(".bx-clone",this).remove(),s.children.each(function(){void 0!=$(this).data("origStyle")?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")}),void 0!=$(this).data("origStyle")?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style"),$(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&s.pagerEl.remove(),$(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&$(window).unbind("resize",j))},o.reloadSlider=function(t){void 0!=t&&(n=t),o.destroySlider(),l()},l(),this}}(jQuery),function(t){function e(){s=!1;for(var e=0;e<i.length;e++){var n=t(i[e]).filter(function(){return t(this).is(":appeared")});if(n.trigger("appear",[n]),r){var o=r.not(n);o.trigger("disappear",[o])}r=n}}var i=[],n=!1,s=!1,o={interval:250,force_process:!1},a=t(window),r;t.expr[":"].appeared=function(e){var i=t(e);if(!i.is(":visible"))return!1;var n=a.scrollLeft(),s=a.scrollTop(),o=i.offset(),r=o.left,l=o.top;return l+i.height()>=s&&l-(i.data("appear-top-offset")||0)<=s+a.height()&&r+i.width()>=n&&r-(i.data("appear-left-offset")||0)<=n+a.width()?!0:!1},t.fn.extend({appear:function(a){var r=t.extend({},o,a||{}),l=this.selector||this;if(!n){var d=function(){s||(s=!0,setTimeout(e,r.interval))};t(window).scroll(d).resize(d),n=!0}return r.force_process&&setTimeout(e,r.interval),i.push(l),t(l)}}),t.extend({force_appear:function(){return n?(e(),!0):!1}})}(jQuery),function(t){"$:nomunge";function e(e){function n(){e?r.removeData(e):h&&delete i[h]}function o(){l.id=setTimeout(function(){l.fn()},g)}var a=this,r,l={},d=e?t.fn:t,c=arguments,u=4,h=c[1],g=c[2],p=c[3];if("string"!=typeof h&&(u--,h=e=0,g=c[1],p=c[2]),e?(r=a.eq(0),r.data(e,l=r.data(e)||{})):h&&(l=i[h]||(i[h]={})),l.id&&clearTimeout(l.id),delete l.id,p)l.fn=function(t){"string"==typeof p&&(p=d[p]),p.apply(a,s.call(c,u))!==!0||t?n():o()},o();else{if(l.fn)return void 0===g?n():l.fn(g===!1),!0;n()}}var i={},n="doTimeout",s=Array.prototype.slice;t[n]=function(){return e.apply(window,[0].concat(s.call(arguments)))},t.fn[n]=function(){var t=s.call(arguments),i=e.apply(this,[n+t[0]].concat(t));return"number"==typeof t[0]||"number"==typeof t[1]?this:i}}(jQuery),$(".animatedParent").appear(),$(".animatedClick").click(function(){var t=$(this).attr("data-target");if(void 0!=$(this).attr("data-sequence")){var e=$("."+t+":first").attr("data-id"),i=$("."+t+":last").attr("data-id"),n=e;$("."+t+"[data-id="+n+"]").hasClass("go")?($("."+t+"[data-id="+n+"]").addClass("goAway"),$("."+t+"[data-id="+n+"]").removeClass("go")):($("."+t+"[data-id="+n+"]").addClass("go"),$("."+t+"[data-id="+n+"]").removeClass("goAway")),n++,delay=Number($(this).attr("data-sequence")),$.doTimeout(delay,function(){return console.log(i),$("."+t+"[data-id="+n+"]").hasClass("go")?($("."+t+"[data-id="+n+"]").addClass("goAway"),$("."+t+"[data-id="+n+"]").removeClass("go")):($("."+t+"[data-id="+n+"]").addClass("go"),$("."+t+"[data-id="+n+"]").removeClass("goAway")),++n,i>=n?!0:void 0})}else $("."+t).hasClass("go")?($("."+t).addClass("goAway"),$("."+t).removeClass("go")):($("."+t).addClass("go"),$("."+t).removeClass("goAway"))}),$(document.body).on("appear",".animatedParent",function(t,e){var i=$(this).find(".animated"),n=$(this);if(void 0!=n.attr("data-sequence")){var s=$(this).find(".animated:first").attr("data-id"),o=s,a=$(this).find(".animated:last").attr("data-id");$(n).find(".animated[data-id="+o+"]").addClass("go"),o++,delay=Number(n.attr("data-sequence")),$.doTimeout(delay,function(){return $(n).find(".animated[data-id="+o+"]").addClass("go"),++o,a>=o?!0:void 0})}else i.addClass("go")}),$(document.body).on("disappear",".animatedParent",function(t,e){$(this).hasClass("animateOnce")||$(this).find(".animated").removeClass("go")}),$(window).load(function(){$.force_appear()}),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),n=i.data("bs.carousel"),s=$.extend({},e.DEFAULTS,i.data(),"object"==typeof t&&t),o="string"==typeof t?t:s.slide;n||i.data("bs.carousel",n=new e(this,s)),"number"==typeof t?n.to(t):o?n[o]():s.interval&&n.pause().cycle()})}var e=function(t,e){this.$element=$(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",$.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",$.proxy(this.pause,this)).on("mouseleave.bs.carousel",$.proxy(this.cycle,this))};e.VERSION="3.3.5",e.TRANSITION_DURATION=600,e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},e.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},e.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},e.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},e.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),n="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(n&&!this.options.wrap)return e;var s="prev"==t?-1:1,o=(i+s)%this.$items.length;return this.$items.eq(o)},e.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},e.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition&&(this.$element.trigger($.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(t,i){var n=this.$element.find(".item.active"),s=i||this.getItemForDirection(t,n),o=this.interval,a="next"==t?"left":"right",r=this;if(s.hasClass("active"))return this.sliding=!1;var l=s[0],d=$.Event("slide.bs.carousel",{relatedTarget:l,direction:a});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=$(this.$indicators.children()[this.getItemIndex(s)]);c&&c.addClass("active")}var u=$.Event("slid.bs.carousel",{relatedTarget:l,direction:a});return $.support.transition&&this.$element.hasClass("slide")?(s.addClass(t),s[0].offsetWidth,n.addClass(a),s.addClass(a),n.one("bsTransitionEnd",function(){s.removeClass([t,a].join(" ")).addClass("active"),n.removeClass(["active",a].join(" ")),r.sliding=!1,setTimeout(function(){r.$element.trigger(u)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(u)),o&&this.cycle(),this}};var i=$.fn.carousel;$.fn.carousel=t,$.fn.carousel.Constructor=e,$.fn.carousel.noConflict=function(){return $.fn.carousel=i,this};var n=function(e){var i,n=$(this),s=$(n.attr("data-target")||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var o=$.extend({},s.data(),n.data()),a=n.attr("data-slide-to");a&&(o.interval=!1),t.call(s,o),a&&s.data("bs.carousel").to(a),e.preventDefault()}};$(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var e=$(this);t.call(e,e.data())})})}(jQuery),+function($){"use strict";function t(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}$.fn.emulateTransitionEnd=function(t){var e=!1,i=this;$(this).one("bsTransitionEnd",function(){e=!0});var n=function(){e||$(i).trigger($.support.transition.end)};return setTimeout(n,t),this},$(function(){$.support.transition=t(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(t){return $(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function($,t,e,i){"use strict";function n(e,i){return T===!0?!0:void(r[e]&&(I.before(e,l),u=1,I.sectionName&&(t.location.hash=r[e]),i?($(I.target).stop().scrollTop(a[e]),I.after(e,l)):($(I.target).stop().animate({scrollTop:a[e]},I.scrollSpeed,I.easing),$(I.target).promise().done(function(){x=!1,I.after(e,l)}))))}function s(t){if(4>t)return!1;var e=20,i=0,n=t.length-1,s;for(t.length<2*e&&(e=Math.floor(t.length/2)),s=t.length-e;n>=s;n--)i+=t[n];var o=i/e;for(i=0,n=t.length-e-1,s=t.length-2*e;n>=s;n--)i+=t[n];var a=i/e;return o>=a?!0:!1}function o(t,e){for(var i=r.length;i>=0;i--)"string"==typeof t?r[i]===t&&(c=i,n(i,e)):i===t&&(c=i,n(i,e))}var a=[],r=[],l=[],d=[],c=0,u=1,h=t.location.hash,g=!1,p,v,f=$(t).scrollTop(),m=!1,x=!1,S=!1,b,y,w,T=!1,C=[],E=(new Date).getTime(),I={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,axis:"y",target:"html,body",before:function(){},after:function(){},afterResize:function(){}};$.scrollify=function(i){function o(t){$(I.target).stop().animate({scrollTop:t},I.scrollSpeed,I.easing)}function h(){$(I.section).each(function(e){$(this).css("height","auto").outerHeight()<$(t).height()?($(this).css({height:$(t).height()}),d[e]=!1):($(this).css({height:$(this).height()}),d[e]=!0)})}function k(e){$(I.section).each(function(e){e>0?a[e]=parseInt($(this).offset().top)+I.offset:a[e]=parseInt($(this).offset().top),I.sectionName&&$(this).data(I.sectionName)?r[e]="#"+$(this).data(I.sectionName).replace(/ /g,"-"):r[e]="#"+(e+1),l[e]=$(this),t.location.hash===r[e]&&(c=e,g=!0)}),!0===e&&n(c,!1)}function M(){return f=$(t).scrollTop(),f>parseInt(a[c])?!1:!0}function z(){return f=$(t).scrollTop(),f<parseInt(a[c])+(l[c].height()-$(t).height())?!1:!0}$.easing.easeOutExpo=function(t,e,i,n,s){return e==s?i+n:n*(-Math.pow(2,-10*e/s)+1)+i},b={handleMousedown:function(){return T===!0?!0:(m=!1,void(S=!1))},handleMouseup:function(){return T===!0?!0:(m=!0,void(S&&b.calculateNearest()))},handleScroll:function(){return T===!0?!0:(p&&clearTimeout(p),void(p=setTimeout(function(){return S=!0,m===!1?!1:(m=!1,void b.calculateNearest())},200)))},calculateNearest:function(){f=$(t).scrollTop();for(var e=1,i=a.length,s=0,o=Math.abs(a[0]-f),r;i>e;e++)r=Math.abs(a[e]-f),o>r&&(o=r,s=e);(z()||M())&&(c=s,n(s,!1))},wheelHandler:function(t,e){if(T===!0)return!0;d[c]||t.preventDefault();var i=(new Date).getTime();if(e=e||-t.originalEvent.detail/3||t.originalEvent.wheelDelta/120,i-E>1300&&(C=[]),E=i,C.length>=35&&C.shift(),C.push(Math.abs(10*e)),x)return!1;if(0>e){if(c<a.length-1&&z()){if(!s(C))return!1;t.preventDefault(),c++,x=!0,n(c,!1)}}else if(e>0&&c>0&&M()){if(!s(C))return!1;t.preventDefault(),c--,x=!0,n(c,!1)}},keyHandler:function(t){return T===!0?!0:void(38==t.keyCode?c>0&&M()&&(c--,n(c,!1)):40==t.keyCode&&c<a.length-1&&z()&&(c++,n(c,!1)))},init:function(){I.scrollbars?($(t).bind("mousedown",b.handleMousedown),$(t).bind("mouseup",b.handleMouseup),$(t).bind("scroll",b.handleScroll)):$("body").css({overflow:"hidden"}),$(e).bind("DOMMouseScroll mousewheel",b.wheelHandler),$(e).bind("keydown",b.keyHandler)}},y={touches:{touchstart:{y:-1},touchmove:{y:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(t){if(T===!0)return!0;var e;if("undefined"!=typeof t&&"undefined"!=typeof t.touches)switch(e=t.touches[0],t.type){case"touchstart":y.touches.touchstart.y=e.pageY,y.touches.touchmove.y=-1,y.options.timeStamp=(new Date).getTime(),y.touches.touchend=!1;case"touchmove":y.touches.touchmove.y=e.pageY,y.touches.touchstart.y!==y.touches.touchmove.y&&(t.preventDefault(),y.options.timeStamp+y.options.timeGap<(new Date).getTime()&&0==y.touches.touchend&&(y.touches.touchend=!0,y.touches.touchstart.y>-1&&Math.abs(y.touches.touchmove.y-y.touches.touchstart.y)>y.options.distance&&(y.touches.touchstart.y<y.touches.touchmove.y?y.up():y.down())));break;case"touchend":y.touches[t.type]===!1&&(y.touches[t.type]=!0,y.touches.touchstart.y>-1&&y.touches.touchmove.y>-1&&(Math.abs(y.touches.touchmove.y-y.touches.touchstart.y)>y.options.distance&&(y.touches.touchstart.y<y.touches.touchmove.y?y.up():y.down()),y.touches.touchstart.y=-1))}},down:function(){c<=a.length-1&&(z()&&c<a.length-1?(c++,n(c,!1)):Math.floor(l[c].height()/$(t).height())>u?(o(parseInt(a[c])+$(t).height()*u),
u+=1):o(parseInt(a[c])+(l[c].height()-$(t).height())))},up:function(){c>=0&&(M()&&c>0?(c--,n(c,!1)):u>2?(u-=1,o(parseInt(a[c])+$(t).height()*u)):(u=1,o(parseInt(a[c]))))},init:function(){e.addEventListener&&(e.addEventListener("touchstart",y.touchHandler,!1),e.addEventListener("touchmove",y.touchHandler,!1),e.addEventListener("touchend",y.touchHandler,!1))}},w={handleResize:function(){clearTimeout(v),v=setTimeout(function(){h(),k(!0),I.afterResize()},50)}},I=$.extend(I,i),h(),k(!1),g===!1&&I.sectionName?t.location.hash=r[0]:n(c,!1),b.init(),y.init(),$(t).bind("resize",w.handleResize),t.addEventListener("orientationchange",w.handleResize,!1)},$.scrollify.move=function(t){return t===i?!1:void o(t,!1)},$.scrollify.instantMove=function(t){return t===i?!1:void o(t,!0)},$.scrollify.next=function(){c<r.length&&(c+=1,n(c,!1))},$.scrollify.previous=function(){c>0&&(c-=1,n(c,!1))},$.scrollify.instantNext=function(){c<r.length&&(c+=1,n(c,!0))},$.scrollify.instantPrevious=function(){c>0&&(c-=1,n(c,!0))},$.scrollify.destroy=function(){$(I.section).each(function(){$(this).css("height","auto")}),$(t).unbind("resize",w.handleResize),I.scrollbars&&($(t).unbind("mousedown",b.handleMousedown),$(t).unbind("mouseup",b.handleMouseup),$(t).unbind("scroll",b.handleScroll)),$(e).unbind("DOMMouseScroll mousewheel",b.wheelHandler),$(e).unbind("keydown",b.keyHandler),e.addEventListener&&(e.removeEventListener("touchstart",y.touchHandler,!1),e.removeEventListener("touchmove",y.touchHandler,!1),e.removeEventListener("touchend",y.touchHandler,!1)),a=[],r=[],l=[],d=[]},$.scrollify.update=function(){w.handleResize()},$.scrollify.current=function(){return l[c]},$.scrollify.disable=function(){T=!0},$.scrollify.enable=function(){T=!1},$.scrollify.isDisabled=function(){return T}}(jQuery,this,document),function(t,e,$){"use strict";$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})}),$(function(){$(t).load(function(){$("#status").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"}).addClass("is-shown")}),$(".bxslider").bxSlider({auto:!0,autoControls:!1,speed:1e3,mode:"fade",randomStart:!0,pager:!1})}),$(t).scroll(function(){$(this).scrollTop()>1?$(".header").addClass("navbar-animated"):$(".header").removeClass("navbar-animated")})}(window,document,jQuery),$(".grid-product-list .grid-we-do-item:odd .product-content").addClass("text--right"),$(".scroll").click(function(t){t.preventDefault(),$.scrollify.move($(this).attr("href"))});