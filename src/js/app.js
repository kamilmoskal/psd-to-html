/////BG SLIDER
const allimg = $(".slider__item");
let currentimg = 0;
function changeimg(){
    $(allimg[currentimg]).fadeOut(600, "linear", function(){
        if (currentimg == allimg.length - 1) {
            currentimg = 0;
        } else {
            currentimg++;
        }
        $(allimg[currentimg]).fadeIn(600, "linear", function(){

            //setTimeout(changeimg, 3000);  
        });
    });   
}
//setTimeout(changeimg, 3000); 
/////////////

$('.slider__controls__left').on('click', () => {
    changeimg()
})
$('.slider__controls__right').on('click', () => {
    changeimg()
})


//// SEARCH BTN
$(".fas.fa-search").on('click', e => {
    e.preventDefault()
    $(".search-section").slideToggle(500);
});

//// MENU BURGER
$(".nav__burger").on('click', () => {
    $(".nav__list").slideToggle(500);
});

//// FIXED MENU
const navHeight = 61;
const nav = $('.header-section');
$(window).scroll(function () {
    if ($(this).scrollTop() > navHeight ){
        nav.addClass("header-fixed");
    } else {
        nav.removeClass("header-fixed");
    }
});


//// FILTER LIST
const $grid = $('.container.isotope').isotope({
  });
 
$(".filter-list__item").on('click', e => {
    if ( !$(e.target).hasClass("filter-list__number") ){
        if ( !$(e.target).hasClass("active") ) {
            $('.filter-list__item.active').removeClass('active');
            $(e.target).addClass('active');
    
            $('.filter-list__item').children().fadeOut(500);
            $(e.target).children(":first").fadeIn(500);

            const filterValue = $(e.target).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        } 
    }
});

/* $('.product-item.product-item--blue').each(function(){
    if (!$( this ).hasClass(data) ) {
        $( this ).css({"opacity":"0", "display":"none"})
    }
}) */




