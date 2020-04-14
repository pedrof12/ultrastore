/* 
*  Menu sroll
*/

$(window).scroll( () => {
    if ($(this).scrollTop() > 50) 
    {
        $("#menu_scroll").addClass("scrolled");
    }else{
        $("#menu_scroll").removeClass("scrolled");
    }
});


