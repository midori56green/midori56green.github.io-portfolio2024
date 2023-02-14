$(function(){
	
	function randomNum(min, max) {
		max++;
		return Math.floor(Math.random()*(min - max) + max);
	};

	//main-nav_btn
	$('.main-nav_btn').on('click',function(){
		if( $(this).hasClass('close') ) {
			$('.main-nav_btn').removeClass('close').addClass('open').attr('title', 'メニューを閉じます').html('メニューを閉じます');
			$('.header-inner').addClass('on open').removeClass('off close');
		}else if( $(this).hasClass('open') ) {
			$('.main-nav_btn').removeClass('open').addClass('close').attr('title', 'メニューを開きます').html('メニューを開きます');
			$('.header-inner').removeClass('on open').addClass('off close');
		}
	});
	
	//button
	$('button').on('click', function(e) {
		e.preventDefault();
	});
	
	//logo
	$('.logo').mouseover(function(e) {
		let num = randomNum(1,4);
		const logo = $('.logo');
		logo.removeClass();
		logo.addClass('logo logo-' + num);
	}).on('click',function() {
		let num = randomNum(1,4);
		const window_height = $('.header-window').height();
		const top = randomNum(50, window_height - 150);
		const code = `<img src="img/header_window/fly${num}.gif" style="top: ${top}px" class="header-window_img fly${num}" alt="">`;
		$('.header-window').append(code);
		
		$('.header-window_img').on('animationend webkitAnimationEnd', function() {
			$(this).remove();
		});
	});
	
	
	//ufo
	$('.ufo').on('click', function() {
		$(this).addClass('on');
	});
	
	//logo
	$('.logo').on('click',function(e) {
		e.preventDefault();
	});
	
	$('.pagetop').on('click',function(e) {
		e.preventDefault();
		$('body, html').animate({'scrollTop': 0}, 500);
	});
			
});