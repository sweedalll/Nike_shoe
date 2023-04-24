$(document).ready(function () {


    $(".shoes-colors span").click(function () {
        $(".shoes-colors span").removeClass("active");
        $(this).addClass("active");
        $("body").css("background", $(this).attr("data-color"));
        $(".shoes-price").css("color", $(this).attr("data-color"));
        $(".shoes-button").css("color", $(this).attr("data-color"));
        $(".shoes-pic").css("background-image", $(this).attr("data-pic"));
    });
});


// =============================range label ====================
