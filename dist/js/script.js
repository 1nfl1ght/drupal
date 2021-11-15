$(document).ready(function() {
$('.item__start').mouseover(function () {
    $(this).addClass('scaled');
    $('.item__business').addClass('business-scale');
});
$('.item__start').mouseout(function () {
    $(this).removeClass('scaled');
    $('.item__business').removeClass('business-scale');
});
$('.item__vip').mouseover(function () {
    $(this).addClass('scaled');
    $('.item__business').addClass('business-scale');
});
$('.item__vip').mouseout(function () {
    $(this).removeClass('scaled');
    $('.item__business').removeClass('business-scale');
});
$('.slider').on(`init reInit`, function(event, slick) {
    $('.slick-slide-num-current').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
})
$('.slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
})
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    appendArrows: '.slick__arrows',
    prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next"></button>',
});
$('.partners-slider-1').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
});
$('.partners-slider-2').slick({
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
});

$('.faq__title').click(function(event) {
    if($('.faq-field').hasClass('one')){
        $('.faq__title').not($(this)).parent().removeClass('active');
        $('.text').not($(this).next()).slideUp(300);
    }
    $(this).next().slideToggle(300); //.toggleClass('active')
    $(this).parent().toggleClass('active');
});
});