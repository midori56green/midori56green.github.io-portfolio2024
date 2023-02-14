$(() => {
	
	/* product */
	const url = `js/modal.php`;
	$.getJSON(url,function(data){
		$.each(data,(count,item) => {
			
			let code = `
				<article class="product-cnt">
					<h3 class="product-cnt_title">${item.title}</h3>
					<div class="product-img">
						<img src="img/product_${item.id}.png" width="390" height="594" alt="${item.alt}">
					</div>
					<div class="product-info">
						<p class="product-info_name">カテゴリ</p>
						<button class="product-info_category">${item.category}</button>
						<p class="product-info_name">内容量</p>
						<p class="product-info_text">${item.shape}包入</p>
						<p class="product-info_name">価格</p>
						<p class="product-info_text">${item.price}円&#40;税込み&#41;</p>
						<button class="modal-open product-cnt_btn pc" data-num=${item.id}>詳細を見る</button>
					</div>
					<button class="modal-open product-cnt_btn sp" data-num=${item.id}>詳細を見る</button>
					<div class="product-modal modal-${item.id}">
						<h3 class="product-cnt_title">${item.title}</h3>
						<div class="modal-inner">
							<img src="img/product_${item.id}.png" width="390" height="594" alt="${item.alt}" class="modal-img">
							<div class="modal-info">
								<button class="product-cnt_btn take-btn">購入する</button>
								<p>${item.comment}</p>
								<p class="product-info_name">カテゴリ</p>
								<button class="product-info_category">${item.category}</button>
								<p class="product-info_name">内容量</p>
								<p class="product-info_text">${item.shape}包入</p>
								<p class="product-info_name">価格</p>
								<p class="product-info_text">${item.price}円&#40;税込み&#41;</p>
							</div>
							<button class="modal-close product-cnt_btn">×&ensp;閉じる</button>
						</div>
					</div>
				</article>
			`;
			
			$('#product').append(code);
		});
	});
	
	/** ------ fadeIn ------ **/
	$(window).on('scroll',function() {
		const scroll = $(this);
		let screen_top = scroll.scrollTop();
		let height = screen_top + $(this).height();
		
		const target = $('.cnt_title');
		
		target.each(function() {
			const element = $(this);
			const elm_top = element.offset().top
			if( elm_top < height && !(element.hasClass('.fade-in')) ) {
				element.addClass('fade-in');
			}
		});
	});
	
	/** ------ search-btn ------ */
	$(document).on('click','.search-btn',function(e) {
		e.preventDefault();
		$('.search-btn').toggleClass('active');
		$('.search-cnt').slideToggle(400);
	});
	
	/** ------ nav-btn ------ **/
	$(document).on('click','.nav-btn',function(e) {
		e.preventDefault();
		$('.nav-btn').toggleClass('active');
		$('.main-nav').slideToggle(400);
	});
	
	/** ------ main-nav_link ------ **/
	$(document).on('click','.main-nav_link',function(e) {
		e.preventDefault();
		let href = $(this).attr('href');
		let target = $( href=='#' || href=='' ? 'html':href );
		let position = target.offset().top;
		position = position - 144;
		$('html,body').animate({scrollTop:position}, 600);
	});
	
	/* ------ modal-btn ------ */
	$(document).on('click','.modal-open',function() {
		let id = $(this).data('num');
		$('.modal-'+id).fadeIn(500);
		$('.overlay').fadeIn(500);
	});
	
	$(document).on('click','.overlay,.modal-close',function() {
		$('.product-modal').fadeOut(500);
		$('.overlay').fadeOut(500);
	});
	
	/* ------ pagetop ------ */
	$(document).on('click','.pagetop',function() {
		$('html,body').animate({'scrollTop':0},700);
	});
	
	$(window).on('scroll',function(){
		let num=$(this);
		if(num.scrollTop()>500){
			$('.pagetop').stop(true).fadeIn(200);
		}
		else{
			$('.pagetop').stop(true).fadeOut(200);
		}
	});	
});