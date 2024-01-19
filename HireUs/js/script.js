$(".career-buttonX2").css('display','none')
$(".career-buttonX").css('display','none')


$(".career-button").click(function(){
    $(".womans-img").css('display','none')
     $(".pur-people").fadeIn(1000);
    $(".career-buttonX").fadeIn(1000);
    $(".career-button").css('display','none')
});

$(".career-buttonX").click(function(){
    $(".womans-img").fadeIn(2500);
    $(".pur-people").css('display','none')
    $(".career-buttonX").css('display','none')
    $(".career-button").fadeIn(2500);
});

$(".career-buttonX2").click(function(){
    $(".our-purpouse").css('display','none')
    $(".map-new").fadeIn(1000);
    $(".career-buttonX2").css('display','none')
    $(".our-purpouse-btn").css('display','block')
    $(".about-us-btn").fadeIn()
    $(".contact-us-btn").fadeIn()
    $(".about-us").css('display','none')
    $(".contact-us").css('display','none')
});

$(".our-purpouse-btn").click(function(){
    $(".map-new").hide();
    $(".our-purpouse").fadeIn(1000);
    $(".career-buttonX2").fadeIn(1000);
    $(".our-purpouse-btn").css('display','none')
    $(".about-us").css('display','none')
    $(".contact-us").css('display','none')
});

$(".contact-us-btn").click(function(){
    $(".our-purpouse").css('display','none')
    $(".about-us").css('display','none')
    $(".map-new").hide();
    $(".contact-us").fadeIn(1000);
    $(".career-buttonX2").fadeIn(1000);
    $(".contact-us-btn").css('display','none')
});

$(".about-us-btn").click(function(){
    $(".contact-us").css('display','none')
    $(".map-new").hide();
    $(".about-us").fadeIn(1000);
    $(".career-buttonX2").fadeIn(1000);
    $(".about-us-btn").css('display','none')
});



$(".sdbtn ").click(function () {
    // window.scrollBy(0, 5500);
    window.scrollBy({
        top: 5500,
        behavior: 'smooth'
    });
})









