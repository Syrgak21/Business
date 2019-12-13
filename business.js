$(document).ready(function() {
var prev = $('.back'),
	next = $('.next'),
	item = $('.home_item'),
	slider = $('.home_list'),
	testList = $('.testimonials_list'),
	testItem = $('.testimonials_item'),
	dotsList = $('.dots_list'),
	dotsItem = $('.dots_item'),
	portfolioItem = $('.portfolio_item'),
	content = $('.tab_list'),
	t = 0,
	i = 0;

								// Slider #1

dotsItem.on('click', function() {
	clearInterval(timer);
	$(this).addClass('dotsSelected').siblings().removeClass('dotsSelected');
});

$('.services').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#services').offset().top - 50
	}, 500);
	return false;
});

$('.about').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#about').offset().top - 50
	}, 1000);
	return false;
});

$('.portfolio').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#portfolio').offset().top - offset
	}, 1400);
	return false;
});

$('.testimonials').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#testimonials').offset().top - 100
	}, 1600);
	return false;
});

$('.contacts').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#contact').offset().top
	}, 2000);
	return false;
});

$('.next').on('click', function() {
	slider.css('margin-left', '-=1110px');
	i++;
	if (i >= item.length) {
		i = 0;
		slider.css('margin-left', '155px');
	}
});

$('.back').on('click', function() {
	slider.css('margin-left', '+=1110px');	
	i--;
	if (i < 0) {
		i = item.length - 1;
		slider.css('margin-left', '-2080px');
	}
});

								// Slider #2


var timer = setInterval(feedback, 2000);
function feedback(){
	testList.css({'margin-left' : '-=1330px',
					'transition' : '.8s'
})
	dotsItem[t].classList.remove('dotsSelected');
	t++
	if (t >= testItem.length) {
		testList.css({'margin-left' : '0',
						'transition' : '.9s'
	});
		t = 0;
	}
	dotsItem[t].classList.add('dotsSelected');
}
});

$(".tab_list").not(":first").hide();
$(".portfolio_item").click(function() {
	$(".portfolio_item").removeClass("portfolioActive").eq($(this).index()).addClass("portfolioActive");
	$(".tab_list").hide().eq($(this).index()).fadeIn().addClass('tabActive');
}).eq(0).addClass("portfolioActive");


