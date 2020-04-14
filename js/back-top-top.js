$('.cd-top').fadeOut();

$(window).scroll(function() {
    let height = $(window).scrollTop();
    if (height > 200) {
        $('.cd-top').fadeIn();
    } else {
        $('.cd-top').fadeOut();
    }
});
$(document).ready(function() {
    $(".cd-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});