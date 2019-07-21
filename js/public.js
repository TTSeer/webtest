$(function(){
	$(window).scroll(function(){
			viewScroll();
	});

	viewScroll();
	function viewScroll(){
		var _ismobile = false;
		var windowTop = $(window).scrollTop();
		var windowBottom = windowTop + $(window).height();
		var showNum = !_ismobile ? 4 :16;
		$('.ani-view').each(function(){

			var pageQ1 = $(this).offset().top + $(this).height() / showNum;
			var pageQ3 = $(this).offset().top  + $(this).height() / 1;


			if( ( pageQ1 <= windowBottom ) && ( pageQ3 >= windowTop ) ){

				if( $(this).hasClass("fade-in-down"))  $(this).addClass('fadeInDown');
				if( $(this).hasClass("fade-in-up"))  $(this).addClass('fadeInUp');
				if( $(this).hasClass("fade-in-left"))  $(this).addClass('fadeInLeft');
				if( $(this).hasClass("fade-in-right"))  $(this).addClass('fadeInRight');
					
			}
			else {
				if( $(this).hasClass('fadeInUp')) $(this).removeClass('fadeInUp');
				if( $(this).hasClass('fadeInDown')) $(this).removeClass('fadeInDown');
				if( $(this).hasClass('fadeInLeft')) $(this).removeClass('fadeInLeft');
				if( $(this).hasClass('fadeInRight')) $(this).removeClass('fadeInRight');
			}

		});
}
});