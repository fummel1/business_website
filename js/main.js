$(".top-menu .menu-right").on("click", function () {
    if($("header .mobile-menu").is(":visible"))
        $(this).html('<i class="fas fa-bars">');
    else
        $(this).html('<i class="fas fa-times"></i>');

    $("header .mobile-menu").slideToggle();
});