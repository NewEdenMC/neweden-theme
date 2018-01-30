$(document).ready(function() {

    $("header .banner .menus-toggle").click(function() {
        $(this).children(".menus-icon").toggleClass("open");
        $(this).siblings(".menus").toggleClass("open");
    });

});