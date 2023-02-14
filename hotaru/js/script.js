$(() => {

	$(document).on('click','.nav-btn', function(e) {
		e.preventDefault();
		$('.nav-btn_child').toggleClass('on');
		$('.main-nav.sp').slideToggle(300);
	});

	$('.main-visual_img:not(:first-child)').css('display','none');
	setInterval(function() {
		$('.main-visual_img:first-child').fadeOut(500).next('.main-visual_img').fadeIn(500).end().appendTo('.main-visual');
	},6000);

	function VideoLoad() {
		$.get('js/video.php',function(json) {
			const data = JSON.parse(json);
			if(data.status == 'true') {
				$('.video-true').css('display','inline-block');
				$('.video-false').css('display','none');
			}else if(data.status == 'false') {
				$('.video-true').css('display','none');
				$('.video-false').css('display','inline-block');
			}
		});
	};

	VideoLoad();

	setInterval(function() {
		VideoLoad();
	},60000);

	$(document).on('click','.page-top', function() {
		$('html, body').animate({'scrollTop':0}, 500);
	});

});