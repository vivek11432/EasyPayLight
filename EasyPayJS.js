$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        if ($(document).width() > 768) {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > 20) {
                $("header").css('background-color', '#6E8FD2').fadeIn(1000);
            } else {
                $("header").css('background-color', 'transparent');
            }
        } else {
            $("header").css('background-color', '#6E8FD2').fadeIn(1000);
        }

        if ($(document).width() > 768) {
            if (checkVisible($('#imageOneh1'))) {
                $("#imageOne").addClass("animaImg");
            } else {
                $('#imageOne').removeClass('animaImg');
            }
            if (checkVisible($('#imageTwoh1'))) {
                $("#imageTwo").addClass("animaImg");
            } else {
                $('#imageTwo').removeClass('animaImg');
            }
            if (checkVisible($('#imageThreeh1'))) {
                $("#imageThree").addClass("animaImg");
            } else {
                $('#imageThree').removeClass('animaImg');
            }
        } else {

            if (checkVisible($('#imageOne'))) {
                $("#imageOne").addClass("animaImg");
            } else {
                $('#imageOne').removeClass('animaImg');
            }
            if (checkVisible($('#imageTwo'))) {
                $("#imageTwo").addClass("animaImg");
            } else {
                $('#imageTwo').removeClass('animaImg');
            }
            if (checkVisible($('#imageThree'))) {
                $("#imageThree").addClass("animaImg");
            } else {
                $('#imageThree').removeClass('animaImg');
            }
        }
    });
    $(window).resize(function () {
        if ($(document).width() > 768) {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > 20) {
                $("header").css('background-color', '#6E8FD2').fadeIn(1000);
            } else {
                $("header").css('background-color', 'transparent');
            }
        }
        else {
            $("header").css('background-color', '#6E8FD2').fadeIn(1000);
        }
    });
    function checkVisible(elm, eval) {
        eval = eval || "visible";
        var vpH = $(window).height(), // Viewport Height
            st = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top - 77,
            elementHeight = $(elm).height();
        if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (eval == "above") return ((y < (vpH + st)));
    }
});