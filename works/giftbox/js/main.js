
$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
$(window).load(function() {
		$('.choosepresent,.choosepresent-step').addClass('active');
	if(!isMobile.any()){
		$('.choosepresent-decor-item').parallax();
		$('.choosepresent-finish').parallax();
	}
});

$('.choosepresent-buttons__next').click(function(event) {
		var er=0;
		var form=$(this).parents('.choosepresent').find('form');
		var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		//er+=formValidate($(this));
	});
	if(er==0){
			var n=$(this).attr('href');
		$('.choosepresent,.choosepresent-step').addClass('close');
		$('.choosepresent-buttons').addClass('next');
		removeFormError(form);
			var t=2000;
		setTimeout(function(){
			window.location.href=n;
		},t);
	}
	return false;
});

$('.choosepresent-buttons__back').click(function(event) {
		var n=$(this).attr('href');
	$('.choosepresent,.choosepresent-step').addClass('close');
	$('.choosepresent-buttons').addClass('back');
	setTimeout(function(){
		window.location.href=n;
	},2000);
	return false;
});
$(window).load(function() {
	if($('.sector-4').length>0){
			var slider=$('.sector-4-shop-slider');
		slider.slick({
			fade:false,
			dots: false,
			arrows: true,
			accessibility:false,
			//cssEase:'linear',
			slidesToShow:4,
			slidesToScroll:1,
			speed:0,
			waitForAnimate:false,
			autoplaySpeed:0,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 1300,
				settings: {slidesToShow:2}
			},{
				breakpoint: 992,
				settings: {speed:500,slidesToShow:2}
			},{
				breakpoint: 755,
				settings: {speed:500,slidesToShow:1}
			}]
		});
		if(w>992){
				var isPaused = false;
				var autoplay=setInterval(autoplayf,50);
				var lw= false;
				var lwh= false;
				var slw=$('.sector-4-shop-slider-item').outerWidth();
			function autoplayf(){
				if(!isPaused){
						var l=$('.sector-4-shop-slider .slick-track').removeClass('animate').position().left;
					if(!lw){lw=l};
						l=l-1;
						$('.sector-4-shop-slider .slick-track').css('transform','translate3d('+l+'px, 0px, 0px)');
					if(Math.abs(lw-l)>=slw/3 && !lwh){
						$('.sector-4-shop-slider .slick-active').next().addClass('next-slide');
						lwh=true;
					}
					if(Math.abs(lw-l)>=slw){
						$('.sector-4-shop-slider-item').removeClass('next-slide');
						$('.sector-4-shop-slider .slick-track').addClass('lock');
						$('.sector-4-shop-slider').slick('slickNext');
						lw=false;
						lwh=false;
					}
				}
			}
				autoplayf();
			$('.sector-4-shop').hover(function() {
				isPaused = true;
			}, function() {
				isPaused = false;
			});
				var ta;
			$('.sector-4-shop-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$('.sector-4-shop-slider-item').removeClass('next-slide');
				clearTimeout(ta);
					if(!$('.sector-4-shop-slider .slick-track').hasClass('lock')){
						$('.sector-4-shop-slider .slick-track').addClass('animate');
					}
				var ta=setTimeout(function() {
					$('.sector-4-shop-slider .slick-track').removeClass('animate');
				},550);
			});
			$('.sector-4-shop-slider').on('afterChange', function(event, slick, currentSlide){
				$('.sector-4-shop-slider .slick-track').removeClass('lock');
				lw=false;
				lwh=false;
			});
		}
	}
	if($('.sector-5').length>0){
			var slider=$('.sector-5-insta-slider');
		slider.slick({
			//infinite: false,
			autoplay: false,
			fade:false,
			dots: false,
			arrows: true,
			accessibility:false,
			//cssEase:'linear',
			slidesToShow:6,
			slidesToScroll:1,
			speed:0,
			//useCSS:false,
			//useTransform:false,
			//waitForAnimate:false,
			//variableWidth:true,
			pauseOnFocus:false,
			pauseOnHover:false,
			autoplaySpeed:0,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next fa fa-angle-right"></button>',
			prevArrow:'<button type="button" class="slick-prev fa fa-angle-left"></button>',
			responsive: [{
				breakpoint: 1300,
				settings: {slidesToShow:2}
			},{
				breakpoint: 992,
				settings: {speed:500,slidesToShow:2}
			},{
				breakpoint: 755,
				settings: {speed:500,slidesToShow:1}
			}]
		});
		if(w>992){
				var isPaused2 = false;
				var autoplay2=setInterval(autoplayf2,50);
				var lw2= false;
				var lwh2= false;
				var slw2=$('.sector-5-insta-slider-item').outerWidth();
			function autoplayf2(){
				if(!isPaused2){
						var l=$('.sector-5-insta-slider .slick-track').removeClass('animate').position().left;
					if(!lw2){lw2=l};
						l=l-1;
						$('.sector-5-insta-slider .slick-track').css('transform','translate3d('+l+'px, 0px, 0px)');
					if(Math.abs(lw2-l)>=slw2/3 && !lwh2){
						$('.sector-5-insta-slider .slick-active').next().addClass('next-slide');
						lwh2=true;
					}
					if(Math.abs(lw2-l)>=slw2){
						$('.sector-5-insta-slider-item').removeClass('next-slide');
						$('.sector-5-insta-slider .slick-track').addClass('lock');
						$('.sector-5-insta-slider').slick('slickNext');
						lw2=false;
						lwh2=false;
					}
				}
			}
				autoplayf2();
			$('.sector-5-insta').hover(function() {
				isPaused2 = true;
			}, function() {
				isPaused2 = false;
			});
				var ta2;
			$('.sector-5-insta-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$('.sector-5-insta-slider-item').removeClass('next-slide');
				clearTimeout(ta2);
					if(!$('.sector-5-insta-slider .slick-track').hasClass('lock')){
						$('.sector-5-insta-slider .slick-track').addClass('animate');
					}
				var ta2=setTimeout(function() {
					$('.sector-5-insta-slider .slick-track').removeClass('animate');
				},550);
			});
			$('.sector-5-insta-slider').on('afterChange', function(event, slick, currentSlide){
				$('.sector-5-insta-slider .slick-track').removeClass('lock');
				lw2=false;
				lwh2=false;
			});
		}

			var slider2=$('.sector-5-reviews-slider');
		slider2.slick({
			//infinite: false,
			autoplay: false,
			fade:false,
			dots: false,
			arrows: true,
			accessibility:false,
			centerMode:true,
			// /cssEase:'linear',
			speed:500,
			slidesToShow:3,
			slidesToScroll:1,
			//waitForAnimate:false,
			variableWidth:true,
			autoplaySpeed:0,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next fa fa-angle-right"></button>',
			prevArrow:'<button type="button" class="slick-prev fa fa-angle-left"></button>',
			responsive: [{
				//breakpoint: 1300,
				//settings: {slidesToShow:2}
			},{
				//breakpoint: 755,
				//settings: {slidesToShow:1}
			}]
		});
			var slider3=$('.sector-5-partners-slider');
		slider3.slick({
			//infinite: false,
			autoplay: false,
			fade:false,
			dots: false,
			arrows: true,
			accessibility:false,
			// /cssEase:'linear',
			speed:500,
			slidesToShow:5,
			slidesToScroll:1,
			autoplaySpeed:0,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next fa fa-angle-right"></button>',
			prevArrow:'<button type="button" class="slick-prev fa fa-angle-left"></button>',
			responsive: [{
				breakpoint: 1300,
				settings: {slidesToShow:3}
			},{
				breakpoint: 740,
				settings: {slidesToShow:1}
			}]
		});
	}

	if($('.newsmodule-slider').length>0){
		$('.newsmodule-slider').slick({
			//autoplay: true,
			//infinite: false,
			fade:true,
			dots: false,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next fa fa-angle-right"></button>',
			prevArrow:'<button type="button" class="slick-prev fa fa-angle-left"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {	}
			}]
		});
		//Опция
		$('.newsmodule-slider').get(0).slick.options.slidesToShow

		$('.newsmodule-items-item').click(function(event) {
			$('.newsmodule-items-item').removeClass('active');
			$(this).addClass('active');
			$('.newsmodule-slider').slick('goTo',$(this).index());
		});
		$('.newsmodule-navigator-info span').eq(1).html($('.newsmodule-items-item').length);
		
		$('.newsmodule-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
		});
		$('.newsmodule-slider').on('afterChange', function(event, slick, currentSlide){
			$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
		});
		$('.newsmodule-navigator__arrow.fa-angle-left').click(function(event) {
			$('.newsmodule-slider').slick('slickPrev');
		});
		$('.newsmodule-navigator__arrow.fa-angle-right').click(function(event) {
			$('.newsmodule-slider').slick('slickNext');
		});
	}
});

//SLIDERS
function sector3slider(){
	$('.sector-3-slider').slick({
		//autoplay: true,
		//infinite: false,
		dots: false,
		arrows: true,
		accessibility:false,
		centerMode:true,
		slidesToShow:1,
		variableWidth:true,
		autoplaySpeed: 3000,
		//asNavFor:'',
		//appendDots:
		//appendArrows:$('.mainslider-arrows .container'),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}
//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_sector_3() {
		var w=$(window).outerWidth();
		var headerMenu=$('.header-menu');
		var headerItem_l=$('.sector-3-images__item_l');
		var headerItem_r=$('.sector-3-images__item_r');

			var ht=$('.sector-3-content-text__value').outerHeight();
		$('.sector-3-content-body,.sector-3-content-text').css({height:ht});

	if(w<992){
		if(!headerItem_l.hasClass('done')){
			headerItem_l.addClass('done').appendTo('.sector-3-slider');
		}
		if(!headerItem_r.hasClass('done')){
			headerItem_r.addClass('done').appendTo('.sector-3-slider');
		}
	}else{
		if(headerItem_l.hasClass('done')){
			headerItem_l.removeClass('done').appendTo('.sector-3-images_l');
		}
		if(headerItem_r.hasClass('done')){
			headerItem_r.removeClass('done').appendTo('.sector-3-images_r');
		}
	}
	if(w<768){
		if(!$('.sector-3-slider').hasClass('slick-initialized')){
			sector3slider();
		}
	}else{
		if($('.sector-3-slider').hasClass('slick-initialized')){
			$('.sector-3-slider').slick('unslick');
		}
	}
}
function adaptive_function() {
	if($('.sector-3').length>0){
		adaptive_sector_3();
	}
}
$(window).load(function() {
	adaptive_function();
});
	scrollpause=600;
if(navigator.appVersion.indexOf("Mac")!=-1){
	scrollpause=1200;
};
$(window).load(function() {
	sectors(1);
});
function sectors(ind){
	if($('.sector-'+ind).length>0){
		$('body').addClass('scrollblock');
			var w=$(window).outerWidth();
			var h=$(window).outerHeight();
		$('.sector').removeClass('active');
		$('.sector-'+ind).addClass('active');
			menulinks(ind);
		if($('.dotts:visible').length>0){
			dotts(ind,0);
		}
		$('header').attr('class','');
		$('header').attr('class','sector_'+ind);

			animatesector(ind);
		setTimeout(function() {
			$('body').removeClass('scrollblock');
				var scr=$('.sector-'+ind).scrollTop();
			if(scr>50){
				$('header').addClass('scroll');
			}else{
				$('header').removeClass('scroll');
			}
		},scrollpause);
	}
}
function animatesector(ind){
	if(ind==1){
		if(!$('.sector-'+ind).hasClass('animate')){
				var sp_1=1.8;
				var r_1=[0.5,-0.5];
				var x_1=[-5,5];
				var y_1=[-2,2];
			if(isMobile.any()){
				var sp_1=2;
				var r_1=[0,0];
				var x_1=[-5,5];
				var y_1=[0,0];
			}
			var sector1column=TweenMax.fromTo($('.sector-1-column').eq(0),sp_1,{rotation:r_1[0], x:x_1[0], y:y_1[0], force3D:true, yoyo:true,repeat:-1,ease:Power1.easeInOut },{rotation:r_1[1], x:x_1[1], y:y_1[1], force3D:true, yoyo:true,repeat:-1,ease:Power1.easeInOut});
			$('.sector-1-column').eq(0).hover(function() {
				sector1column.pause();
			}, function() {
				sector1column.play();
			});
				var sp_2=2;
				var r_2=[0.5,-0.5];
				var x_2=[7,-7];
				var y_2=[-1,1];
			if(isMobile.any()){
				var sp_2=2;
				var r_2=[0,0];
				var x_2=[5,-5];
				var y_2=[0,0];
			}
			var sector2column=TweenMax.fromTo($('.sector-1-column').eq(2),sp_2,{rotation:r_2[0],x:x_2[0],y:y_2[0],force3D:true,yoyo:true,repeat:-1,ease:Power1.easeInOut},{rotation:r_2[1], x:x_2[1], y:y_2[1], force3D:true, yoyo:true,repeat:-1,ease:Power1.easeInOut});
			$('.sector-1-column').eq(2).hover(function() {
				sector2column.pause();
			}, function() {
				sector2column.play();
			});
			$('.sector-'+ind).addClass('animate');
		}
	}
	if(ind==2){
		if(!$('.sector-'+ind).hasClass('animate')){
			setTimeout(function() {
				function gostatanim() {
					$.each($('.numanim i'), function(index, val) {
						$(this).addClass('done').animateNumber({number: $(this).html()},1000);
					});
				}
				gostatanim();
			},2500);
			//setTimeout(function() {
					var sp_1=2;
					var r_1=[0.5,-0.5];
					var x_1=[-5,5];
					var y_1=[-2,2];
				if(isMobile.any()){
					var sp_1=1.8;
					var r_1=[0.5,-0.5];
					var x_1=[-5,5];
					var y_1=[-2,2];
				}
				TweenMax.fromTo($('.sector-2-item-icon__value_1').eq(0),sp_1,{rotation:r_1[0],x:x_1[0],y:y_1[0],force3D:true,yoyo:true,repeat:-1,ease:Power1.easeInOut},{rotation:r_1[1],x:x_1[1],y:y_1[1],force3D:true,yoyo:true,repeat:-1,ease:Power1.easeInOut});
					var sp_2=2;
					var r_2=[-0.5,0.5];
					var x_2=[5,-5];
					var y_2=[2,-2];
				if(isMobile.any()){
					var sp_2=2;
					var r_2=[-0.5,0.5];
					var x_2=[5,-5];
					var y_2=[2,-2];
				}
				TweenMax.fromTo($('.sector-2-item-icon__value_2').eq(0),sp_2,{rotation:r_2[0],x:x_2[0],y:y_2[0],force3D:true,yoyo:true,repeat:-1,ease:Power1.easeInOut},{rotation:r_2[1],x:x_2[1],y:y_2[1],force3D:true,yoyo:true,repeat:-1,ease:Power1.easeInOut});
					var sp_3=2;
					var r_3=[0.5,-0.5];
					var x_3=[-5,5];
					var y_3=[-2,2];
				if(isMobile.any()){
					var sp_3=2;
					var r_3=[0.5,-0.5];
					var x_3=[-5,5];
					var y_3=[-2,2];
				}
				TweenMax.fromTo($('.sector-2-item-icon__value_3').eq(0),sp_3,{rotation:r_3[0],x:x_3[0],y:y_3[0],force3D:true,yoyo:true,repeat:-1,ease:Power1.easeInOut},{rotation:r_3[1],x:x_3[1],y:y_3[1],force3D:true,yoyo:true,repeat:-1,ease:Power1.easeInOut});
			//},3500);
			$('.sector-'+ind).addClass('animate');
		}
	}
	if(ind==3){
		if(w>767){
				var ht=$('.sector-3-content-text__value').outerHeight();
			$('.sector-3-content-body').css({height:ht});
				TweenMax.fromTo($('.sector-3-content-text'),1.5,{height:0,ease:Power1.easeInOut},{height:ht,delay:1,ease:Power1.easeInOut});
			$.each($('.sector-3-images__item'), function(index, val) {
				TweenMax.fromTo($(this),2,{scale:0,ease:Power1.easeInOut},{
					delay:Math.random()+2,
					//randomInteger(0.1, 1),
					scale:1,
					ease:Bounce.easeOut
				});
			});
		}
	}
	if(ind==4){
		if(w>1300){
			TweenMax.fromTo(
				$('.sector-4-who-item_1'),1,{y:-150,x:-250,rotation:-45,ease:Power1.easeInOut},{delay:0.5,y:0,x:0,rotation:0,ease:Power1.easeInOut
			});
			TweenMax.fromTo(
				$('.sector-4-who-item_2'),1,{y:-150,x:250,rotation:45,ease:Power1.easeInOut},{y:0,x:0,rotation:0,ease:Power1.easeInOut
			});
		}else{
			TweenMax.fromTo(
				$('.sector-4-who-column').eq(0),1,{x:'300%'},{delay:0.5,x:'0%',y:0,opacity:1,ease:Power1.easeInOut
			});
			TweenMax.fromTo(
				$('.sector-4-who-column').eq(1),1.2,{x:'300%'},{delay:0.5,x:'0%',y:0,opacity:1,ease:Power1.easeInOut
			});
		}

		TweenMax.fromTo(
			$('.sector-4-shop'),3,{x:w*2},{delay:0,x:'0%',ease:Power2.easeInOut
		});
		TweenMax.fromTo(
			$('.sector-4__text'),2,{y:100,opacity:0},{delay:0,y:0,opacity:1,ease:Power2.easeInOut
		});
		TweenMax.fromTo(
			$('.sector-4-map'),2,{y:100,opacity:0},{delay:0,y:0,opacity:1,ease:Power2.easeInOut
		});
	}
	if(ind==5){
		TweenMax.fromTo(
			$('.sector-5-insta'),3,{x:w*2},{delay:0,x:'0%',ease:Power2.easeInOut
		});
		TweenMax.fromTo(
			$('.sector-5-partners'),3,{x:w*2},{delay:0,x:'0%',ease:Power2.easeInOut
		});
	}
}
function dotts(ind,init){
		ind=ind-1;
	if(init==true){
		$.each($('.sector'), function(index, val) {
			$('.dotts-list').append('<li><span></span></li>');
		});
	}
	$('.dotts-list li').removeClass('active').eq(ind).addClass('active');
}
if($('.dotts').length>0){
	dotts(1,1);
}
$('body').on('click', '.dotts-list li', function(event) {
		var n=$(this).index()+1;
		var offset=0;
	$('.sector-'+n).scrollTop(0);
	sectors(n);
});

function menulinks(ind){
		ind=ind-1;
	$('.header-menu__link').removeClass('active').eq(ind).addClass('active');
}
$('.header-menu__link').click(function(event) {
		var ind=$(this).parent().index()+1;
	$('.sector-'+ind).scrollTop(0);
	sectors(ind);

	$('.header-menu__icon').css({opacity:1});
	$('.header-menu-icon').removeClass('active');
	$('header').removeClass('active');
	$('.header-menu').removeClass('active');
	$('body').removeClass('lock');

	return false;
});

if($('.sector-next').length){
	$('.sector-next__btn').click(function(event) {
			var ind=$('.sector.active').index()+2;
		$('.sector-'+ind).scrollTop(0);
		sectors(ind);
		return false;
	});
	TweenMax.to($('.sector-next__btn'), 1.2, {y:10,force3D:true, yoyo:true,repeat:-1,ease:Power1.easeInOut});
}

$('.logo,.sector__up').click(function(event) {
	sectors(1);
	return false;
});

//==============
function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
  }
//==============
function scrolloptions(){
		var scs=80;
		var mss=30;
		var bns=false;
		var sms=true;
	if(isMobile.any()){
		scs=2;
		mss=1;
		bns=true;
		sms=false;
	}
	var opt={
		cursorcolor:"#fff",
		cursorwidth: "4px",
		background: "",
		smoothscroll:sms,
		autohidemode:true,
		cursoropacitymax: 0.4,
		bouncescroll:bns,
		cursorborderradius: "0px",
		scrollspeed:scs,
		mousescrollstep:mss,
		directionlockdeadzone:6,
		horizrailenabled:false,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
function scroll(){
	$('.sector').niceScroll('.sector-body',scrolloptions());
}
function scrollchoosepresent(){
	$('.choosepresent').niceScroll('.choosepresent-body',scrolloptions());
}
$(window).load(function() {
	if(!isMobile.any()){
	}
	if($('.sector-body').length>0){scroll();}
	if($('.choosepresent').length>0){scrollchoosepresent();}
});

$('.sector').scroll(function(event) {
		var scr=$(this).scrollTop();
	if(scr>20){
		$('header').addClass('scroll');
	}else{
		$('header').removeClass('scroll');
	}
});

if(isMobile.any()){
	$('.sector').scroll(function(event) {
			var scr=$(this).scrollTop();
		mobsectors($(this),scr);
	});
	function mobsectors(el,scr){
			var w=$(window).outerWidth();
			var h=$(window).outerHeight();
			var next=el.next().index()+1;
			var prev=el.prev().index()+1;
			var th=el.find('.sector-body').outerHeight();
			var raz=th-h;
			var block=el.children('.sector-body');
		if(scr-raz>100){
			$('.sector-'+next).scrollTop(0);
			sectors(next);
		}else if(scr<-100){
			sectors(prev);
		}
	}
}


$(window).load(function() {
	if(!isMobile.any() && $('.sectors').length>0){
		//if($('.sector.active>.sector-body').outerHeight()<=h){
			$(document).bind('DOMMouseScroll wheel MozMousePixelScroll onmousewheel touchmove mousewheel keyup', function(event){
					var w=$(window).outerWidth();
					var h=$(window).outerHeight();
					if(!$('.popup').hasClass('active') && !$('body').hasClass('scrollblock') && !$('body').hasClass('scroll')){
							var scl=$(window).scrollTop();
							var active=$('.sector.active');
							var nextslide=active.next('.sector').index()+1;
							var prevslide=active.prev('.sector').index()+1;
							var offset=0;
						if(event.keyCode==40 || event.keyCode==34 || event.deltaX>0 || event.deltaY<0){
							if(nextslide>0){
								$('body').addClass('scrollblock').removeClass('scroll');
								gotoslide(nextslide,offset);
							}
						}else if(event.keyCode==38 || event.keyCode==33 || event.deltaX<0 || event.deltaY>0){
							if(prevslide>0){
								$('body').addClass('scrollblock').removeClass('scroll');
								if($('.sector').eq(prevslide-1).hasClass('normalscroll')){
									offset=$('.sector').eq(prevslide-1).outerHeight()-h;
								}
								gotoslide(prevslide,offset);
							}
						}
					}
					if(!$('body').hasClass('scroll')){
						return false;
					}else if($('body').hasClass('scrollblock')){
						return false;
					}
			});
		//}
	}
});
function gotoslide(n,offset) {
	sectors(n);
}
//FORMS
function forms(){
	//SELECT
	if($('select').length>0){
		function selectscrolloptions(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#36b276",
				cursorwidth: "3px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "0px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
			};
			return opt;
		}

		function select(){
			$.each($('select'), function(index, val) {
					var ind=index;
				$(this).hide();
				if($(this).parent('.select-block').length==0){
					$(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
				}else{
					$(this).parent('.select-block').find('.select').remove();
				}
					var milti='';
					var check='';
					var sblock=$(this).parent('.select-block');
					var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
				if($(this).attr('multiple')=='multiple'){
					milti='multiple';
					check='check';
				}
				$.each($(this).find('option'), function(index, val) {
					if($(this).attr('value')!=''){
						soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value "+$(this).attr('class')+" "+check+"'>"+$(this).html()+"</div>";
					}
				});
					soptions=soptions+"</div></div></div>";
				if($(this).attr('data-type')=='search'){
						sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
												"<div class='select-title'>"+
													"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
													"<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value' />"+
												"</div>"+
												soptions+
											"</div>");
						$('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
							parentSectionClass:'select-options_'+ind,
							parentLookupClass:'select-options__value_'+ind,
							childBlockClass:'select-options__value_'+ind
						});
				}else{
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
											"</div>"+
											soptions+
										"</div>");
				}
				if($(this).find('option[selected="selected"]').val()!=''){
					sblock.find('.select').addClass('focus');
				}
				if($(this).attr('data-req')=='on'){
					$(this).addClass('req');
				}
				$(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
			});
		}
			select();

		$('body').on('keyup','input.select-title__value',function() {
			$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
			$(this).parents('.select').addClass('active');
			$(this).parents('.select').find('.select-options').slideDown(50,function() {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});
			$(this).parents('.select-block').find('select').val('');
		});
		$('body').on('click','.select',function(){
			if(!$(this).hasClass('disabled')){
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50,function() {
					$(this).find(".select-options-scroll").getNiceScroll().resize();
				});

				//	var input=$(this).parent().find('select');
				//removeError(input);

				if($(this).attr('data-type')=='search'){
					if(!$(this).hasClass('active')){
						searchselectreset();
					}
					$(this).find('.select-options__value').show();
				}
			}
		});
		$('body').on('click','.select-options__value',function() {
			if($(this).parents('.select').hasClass('multiple')){
				if($(this).hasClass('active')){
					if($(this).parents('.select').find('.select-title__value span').length>0){
						$(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
					}else{
						$(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
						$(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
					$(this).parents('.select').addClass('focus');
				}else{
					$(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
					if($(this).parents('.select').find('.select-title__value span').length==0){
						$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
						$(this).parents('.select').removeClass('focus');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
				}
				return false;
			}

			if($(this).parents('.select').attr('data-type')=='search'){
				$(this).parents('.select').find('.select-title__value').val($(this).html());
				$(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
			}else{
				$(this).parents('.select').find('.select-title__value').html($(this).html());
			}

				$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
			if($.trim($(this).data('value'))!=''){
				$(this).parents('.select-block').find('select').val($(this).data('value'));
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
			}else{
				$(this).parents('.select-block').find('select').val($(this).html());
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
			}


			if($(this).parents('.select-block').find('select').val()!=''){
				$(this).parents('.select-block').find('.select').addClass('focus');
			}else{
				$(this).parents('.select-block').find('.select').removeClass('focus');
			}
			if(!$(this).parents('.select').data('tags')!=""){
				if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
					$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
				}
			}
			$(this).parents('.select-block').find('select').change();

			//if($(this).parents('.select-block').find('select').data('update')=='on'){
				//select();
			//}
		});
		$(document).on('click touchstart',function(e) {
			if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			};
		});
	}

	//!!! Отримати міста
	$('select[name="region"]').on('change', function(){
	 var regionId = $(this).val();
	 if(regionId) {
	     $.ajax({
	         url: '/cities/get/'+regionId,
	         type:"GET",
	         dataType:"json",
	         beforeSend: function(){
	             $('#file_loader').css("display", "block");
	         },
	         success:function(data) {
	             $('select[name="city"]').empty();
	             $('select[name="city"]').prepend("<option value='' selected='selected'>Виберіть місто</option>");
	             $.each(data, function(key, value){
	                 $('select[name="city"]').append('<option value="'+ key +'">' + value + '</option>');
	             });
	         },
	         complete: function(){
	             $('#file_loader').css("display", "none");
	         }
	     }).done(function(){
	         select();
	     });
	 } else {
	     $('select[name="city"]').empty();
	 }
	});
	//ЕНД отримати міста
	//!!Отримати віділення нової пошти
	$('select[name="city"]').on('change', function(){
	 var cityId = $(this).val();
	 if(cityId) {
	     $.ajax({
	         url: '/warehouses/get/'+cityId,
	         type:"GET",
	         dataType:"json",
	         beforeSend: function(){
	             $('#file_loader').css("display", "block");
	         },
	         success:function(data) {

	             $('select[name="warehouse"]').empty();
	             $('select[name="warehouse"]').prepend("<option value='' selected='selected'>Виберіть відділення Нової пошти</option>");
	             $.each(data, function(key, value){
	                 $('select[name="warehouse"]').append('<option value="'+ key +'">' + value + '</option>');
	             });
	         },
	         complete: function(){
	             $('#file_loader').css("display", "none");
	         }
	     }).done(function(){
	         select();
	     });
	 } else {
	     $('select[name="warehouse"]').empty();
	 }
	});
	//ЕНД отримати віділення нової пошти

	//FIELDS
	$('input,textarea').focus(function(){
		if($(this).val() == $(this).attr('data-value')){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','password');
			};
			$(this).val('');
		};
		removeError($(this));
	});
	$('input[data-value], textarea[data-value]').each(function() {
		if (this.value == '' || this.value == $(this).attr('data-value')) {
			this.value = $(this).attr('data-value');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}
		if(this.value!=$(this).attr('data-value') && this.value!=''){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}

		$(this).click(function() {
			if (this.value == $(this).attr('data-value')) {
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','password');
				};
				this.value = '';
			};
		});
		$(this).blur(function() {
			if (this.value == '') {
				this.value = $(this).attr('data-value');
					$(this).removeClass('focus');
					$(this).parent().removeClass('focus');
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','text');
				};
			};
		});
	});
	$('.form-input__viewpass').click(function(event) {
		if($(this).hasClass('active')){
			$(this).parent().find('input').attr('type','password');
		}else{
			$(this).parent().find('input').attr('type','text');
		}
		$(this).toggleClass('active');
	});

	//$('textarea').autogrow({vertical: true, horizontal: false});
	

	//MASKS//
	//'+7(999) 999 9999'
	//'+38(999) 999 9999'
	//'+375(99)999-99-99'
	//'a{3,1000}' только буквы минимум 3
	//'9{3,1000}' только цифры минимум 3
	$.each($('input.phone'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('+38(999) 999 9999',{
				//placeholder:"",
				clearIncomplete: true,clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));}
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.phone').focusout(function(event) {
		maskclear($(this));
	});
	/*
	$('input.date').datepicker({
		dateFormat : "dd/mm/yy",
		onSelect:function(event){
			if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
				if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
					$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
				}
			}
		}
	});
	*/

	//CHECK
	$.each($('.check'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$('.check').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				$(this).toggleClass('active');
				if($(this).hasClass('active')){
					$(this).find('input').prop('checked', true);
				}else{
					$(this).find('input').prop('checked', false);
				}
			}
		}
	});
	//OPTION
	$.each($('.option.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option').click(function(event) {
		if(!$(this).hasClass('disable')){
			if($(this).hasClass('active') && $(this).hasClass('order') ){
				$(this).toggleClass('orderactive');
			}
				$(this).parents('.options').find('.option').removeClass('active');
				$(this).toggleClass('active');
				$(this).children('input').prop('checked', true);
		}
	});
	//RATING
	$('.rating.edit .star').hover(function() {
			var block=$(this).parents('.rating');
		block.find('.rating__activeline').css({width:'0%'});
			var ind=$(this).index()+1;
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	},function() {
			var block=$(this).parents('.rating');
		block.find('.star').removeClass('active');
			var ind=block.find('input').val();
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	});
	$('.rating.edit .star').click(function(event) {
			var block=$(this).parents('.rating');
			var re=$(this).index()+1;
			block.find('input').val(re);
			var linew=re/block.find('.star').length*100;
		setrating(block,linew);
	});
	$.each($('.rating'), function(index, val) {
			var ind=$(this).find('input').val();
			var linew=ind/$(this).parent().find('.star').length*100;
		setrating($(this),linew);
	});
	function setrating(th,val) {
		th.find('.rating__activeline').css({width:val+'%'});
	}
	//QUANTITY
	$('.quantity__btn').click(function(event) {
			var n=parseInt($(this).parent().find('.quantity__input').val());
		if($(this).hasClass('dwn')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
			$(this).parent().find('.quantity__input').val(n);
		return false;
	});
	//RANGE
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0]+'</span>');
				$(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1]+'</span>');
			},
			change: function( event, ui ){
				if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
					$('#range').addClass('act');
				}else{
					$('#range').removeClass('act');
				}
			}
		});
		$('#rangefrom').val($( "#range" ).slider( "values", 0 ));
		$('#rangeto').val($( "#range" ).slider( "values", 1 ));

		$("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "option","min")+'</span>');
		$("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "option","max")+'</span>');
		
		$( "#rangefrom" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",0,$(this).val());
		});
		$( "#rangeto" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",1,$(this).val());
		});
		$("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
		$("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
	}
}
$(window).load(function() {
	forms();
});

//VALIDATE FORMS
$('form button[type=submit]').click(function(){
		var er=0;
		var form=$(this).parents('form');
		var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		er+=formValidate($(this));
	});
	if(er==0){
		removeFormError(form);
		/*
			var messagehtml='';
		if(form.hasClass('editprofile')){
			var messagehtml='';
		}
		formLoad();
		*/

		//ОПТРАВКА ФОРМЫ
		/*
		function showResponse(html){
			if(!form.hasClass('nomessage')){
				showMessage(messagehtml);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		}
		var options={
			success:showResponse
		};
			form.ajaxForm(options);
		

		setTimeout(function(){
			if(!form.hasClass('nomessage')){
				//showMessage(messagehtml);
				showMessageByClass(ms);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		},0);

		return false;
		*/
	}else{
		return false;
	}
});
function formValidate(input){
		var er=0;
		var form=input.parents('form');
	if(input.attr('name')=='email' || input.hasClass('email')){
		if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.val()))){
				er++;
			addError(input);
		}else{
			removeError(input);
		}
	}else{
		if(input.val()=='' || input.val()==input.attr('data-value')){
			er++;
			addError(input);
		}else{
			removeError(input);
		}
	}
	if(input.attr('type')=='checkbox'){
		if(input.prop('checked') == true){
			input.removeClass('err').parent().removeClass('err');
		}else{
			er++;
			input.addClass('err').parent().addClass('err');
		}
	}
	if(input.hasClass('name')){
		if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
				er++;
			addError(input);
		}
	}
	if(input.hasClass('pass-2')){
		if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
			addError(input);
		}else{
			removeError(input);
		}
	}
		return er;
}
function formLoad(){
	$('.popup').hide();
	$('.popup-message-body').hide();
	$('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
	$('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms){
	$('.popup').hide();
	$('.popup-message.'+ms).addClass('active').fadeIn(300);
}
function showMessage(html){
	$('.popup-loading').remove();
	$('.popup-message-body').show().html(html);
}
function clearForm(form){
	$.each(form.find('.input'), function(index, val) {
			$(this).removeClass('focus').val($(this).data('value'));
			$(this).parent().removeClass('focus');
		if($(this).hasClass('phone')){
			maskclear($(this));
		}
	});
}
function addError(input){
		input.addClass('err');
		input.parent().addClass('err');
		input.parent().find('.form__error').remove();
	if(input.hasClass('email')){
			var error='';
		if(input.val()=='' || input.val()==input.attr('data-value')){
			error=input.data('error');
		}else{
			error=input.data('error-2');
		}
		if(error!=null){
			input.parent().append('<div class="form__error">'+error+'</div>');
		}
	}else{
		if(input.data('error')!=null && input.parent().find('.form__error').length==0){
			input.parent().append('<div class="form__error">'+input.data('error')+'</div>');
		}
	}
	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().addClass('err');
		input.parents('.select-block').find('.select').addClass('err');
	}
}
function addErrorByName(form,input__name,error_text){
		var input=form.find('[name="'+input__name+'"]');
	input.attr('data-error',error_text);
	addError(input);
}
function addFormError(form, error_text){
	form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form){
	form.find('.form__generalerror').hide().html('');
}
function removeError(input){
	input.removeClass('err');
	input.parent().removeClass('err');
	input.parent().find('.form__error').remove();

	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().removeClass('err');
		input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
		//input.parents('.select-block').find('.select-options').hide();
	}
}
function removeFormErrors(form){
	form.find('.err').removeClass('err');
	form.find('.form__error').remove();
}
function maskclear(n){
	if(n.val()==""){
		n.inputmask('remove');
		n.val(n.attr('data-value'));
		n.removeClass('focus');
		n.parent().removeClass('focus');
	}
}
function searchselectreset() {
	$.each($('.select[data-type="search"]'), function(index, val){
			var block=$(this).parent();
			var select=$(this).parent().find('select');
		if($(this).find('.select-options__value:visible').length==1){
			$(this).addClass('focus');
			$(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
			$(this).find('.select-title__value').val($('.select-options__value:visible').html());
			$(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
		}else if(select.val()==''){
			$(this).removeClass('focus');
			block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
			block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
		}
	});
}
	var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
if(isMobile.any()){}
	
$(window).load(function() {
	if(location.hash){
			var hsh=location.hash.replace('#','');
		if($('.popup-'+hsh).length>0){
			popupOpen(hsh);
		}else if($('div.'+hsh).length>0){
			$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
		}
	}
	$('.wrapper').addClass('loaded');
});

	var act="click";
if(isMobile.iOS()){
	var act="touchstart";
}

$('.header-menu-icon').click(function(event) {
	$(this).toggleClass('active');
	$('header').toggleClass('active');
	$('.header-menu').toggleClass('active');
	$('body').toggleClass('lock');
});

//ZOOM
$(window).load(function() {
	baguetteBox.run('.sector-4-shop-slider', {
		// Custom options
	});
	baguetteBox.run('.sector-5-insta-slider', {
		// Custom options
	});
});
//POPUP
$('.pl').click(function(event) {
		var pl=$(this).attr('href').replace('#','');
	popupOpen(pl);
	return false;
});
function popupOpen(pl){
		var v=$('a[href="#'+pl+'"]').data('vid');
	$('.popup').removeClass('active').hide();
	$('body').addClass('lock');
	history.pushState('', '', '#'+pl);
	if(v!=''){
		$('.popup-'+pl+' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	}
	$('.popup-'+pl).fadeIn(300).delay(300).addClass('active');
}
function openPopupById(popup_id){
	$('#'+popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose(){
	$('.popup').removeClass('active').fadeOut(300);
	if(!$('.header-menu').hasClass('active')){
		$('body').removeClass('lock');
	}
	$('.popup-video__value').html('');

	history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup').click(function(e) {
	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
$(window).load(function() {
	ibg();
});
//UP
$(window).scroll(function() {
		var w=$(window).width();
	if($(window).scrollTop()>50){
		$('#up').fadeIn(300);
	}else{
		$('#up').fadeOut(300);
	}
});
$('#up').click(function(event) {
	$('body,html').animate({scrollTop:0},300);
});

$('body').on('click','.tab__navitem',function(event) {
			var eq=$(this).index();
		if($(this).hasClass('parent')){
			var eq=$(this).parent().index();
		}
	if(!$(this).hasClass('active')){
			$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
			$(this).addClass('active');
			$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if($(this).closest('.tabs').find('.slick-slider').length>0){
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});
$.each($('.spoller.active'), function(index, val) {
	$(this).next().show();
	$(this).find('input').prop('checked', true);
	if(w>1300){
		$.each($('.choosepresent-step-4-delivery-column'), function(index, val) {
			$(this).css({minHeight:$(this).parent().outerHeight()})
		});
	}
});
$('body').on('click','.spoller',function(event) {
	if($(this).hasClass('mob') && !isMobile.any()){
		return false;
	}
	if($(this).hasClass('closeall') && !$(this).hasClass('active')){
		$.each($(this).closest('.spollers').find('.spoller'), function(index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}

	if(!$(this).hasClass('disable')){
		if($(this).hasClass('active') && $(this).hasClass('order') ){
			$(this).toggleClass('orderactive');
		}
			$(this).parents('.options').find('.option').removeClass('active');
			$(this).toggleClass('active');
			$(this).children('input').prop('checked', true);
	}

	$(this).addClass('active').next().addClass('active').slideDown(300,function(index, val) {
			if($(this).parent().find('.slick-slider').length>0){
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
	});
});
if($('.t,.tip').length>0){
	$(window).load(function() {
		tip();
	});
}
function tip(){
	$('.t,.tip').webuiPopover({
		placement:'top',
		trigger:'hover',
		backdrop: false,
		//selector:true,
		animation:'fade',
		dismissible: true,
		padding:false,
		//hideEmpty: true
		onShow: function($element) {},
		onHide: function($element) {},
	}).on('show.webui.popover hide.webui.popover', function(e){
		$(this).toggleClass('active');
	});
}

$('.sector-5-present__btn').hover(function() {
	$('.sector-5-present__image').addClass('shake');
}, function() {
	$('.sector-5-present__image').removeClass('shake');
});

$('.choosepresent-step-2-form-body-items-check-color__value').click(function(event) {
	$(this).toggleClass('active').parent().toggleClass('active');
});
$('.choosepresent-step-2-form-body-items-color__item').click(function(event) {
	$('.choosepresent-step-2-form-body-items-check-color__value').attr('class','choosepresent-step-2-form-body-items-check-color__value color__value_'+$(this).data('color'));
	$('.choosepresent-step-2-form-body-items-check.color').removeClass('active');
});
if(isMobile.any()){
	$('.href').click(function(event) {
		var n=$(this).attr('href');
		window.location.href=n;
	});
}
});
