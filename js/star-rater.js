// Accessible Star Rating with Font Awesome
// by Greg Lowe
//
// Version 0.1.0
// Full source at https://github.com/lowegreg/Accessible-Star-Rating
// MIT License, https://github.com/lowegreg/Accessible-Star-Rating/LICENSE
(function($) {
    $.fn.rater = function(options) {
        var i;
        var Rater = $(this);
        var settings = $.extend({
            // These are the defaults.
            count: 5,
            color_fill: "#f0ad4e",
            color_outline: "#ccc",
            fa_class_fill: "fa-star",
            fa_class_outline: "fa-star-o",
            defaultValue: 0
        }, options);

        var BuildRating = function() {
            for (i = 0; i < settings.count; i++) {
                Rater.append("<span class='fa " + settings.fa_class_outline + "' data-rating='" + parseInt(i + 1) + "' aria-label='" + parseInt(i + 1) + " " + settings.fa_class_fill.replace("fa-", "") + "'></span>");
            }
            Rater.append("<input type='hidden' class='rating-value' value='" + settings.defaultValue + "'/>");
            SetRating(1);
        };

        var SetRating = function(keyCode) {
            return Rater.children(".fa").each(function() {
                if (keyCode == 1) {
                    $(this).blur()
                }
                if (parseInt($(this).siblings("input.rating-value").val()) == parseInt($(this).data("rating"))) {
                    $(this).attr("tabindex", 0);
                    if (keyCode !== 1) {
                        $(this).focus();
                    }
                    $(this).css("color", settings.color_fill);
                    return $(this).removeClass(settings.fa_class_outline).addClass(settings.fa_class_fill);
                } else if (parseInt($(this).siblings("input.rating-value").val()) > parseInt($(this).data("rating"))) {
                    if ($(this).siblings("input.rating-value").val() == "" && parseInt($(this).data("rating")) == 1) {
                        $(this).attr("tabindex", 0);
                    } else {
                        $(this).attr("tabindex", -1);
                    }
                    $(this).css("color", settings.color_fill);
                    return $(this).removeClass(settings.fa_class_outline).addClass(settings.fa_class_fill);
                } else {
                    if ($(this).siblings("input.rating-value").val() === 0 && parseInt($(this).data("rating")) == 1) {
                        if ($(this).parent().find(":focus").length === 0) {
                            $(this).attr("tabindex", 0);
                        }
                    } else {
                        $(this).attr("tabindex", -1);
                    }
                    $(this).css("color", settings.color_outline);
                    return $(this).removeClass(settings.fa_class_fill).addClass(settings.fa_class_outline);
                }
            });
        };

        Rater.on("click keydown", ".fa", function(event) {
            if (event.which === 0 || event.which === 1 || event.which === 32) {
                event.preventDefault();
                if ($(this).siblings("input.rating-value").val() == $(this).data("rating")) {
                    $(this).siblings("input.rating-value").val(0);
                    return SetRating(event.which);
                } else {
                    $(this).siblings("input.rating-value").val($(this).data("rating"));
                    return SetRating(event.which);
                }
            } else if (event.which === 37 || event.which === 40) {
                if ($(this).siblings("input.rating-value").val() > 0) {
                    $(this).siblings("input.rating-value").val((parseInt($(this).siblings("input.rating-value").val())) - 1);
                    return SetRating(event.which);
                }
            } else if (event.which === 39 || event.which === 38) {
                if ($(this).siblings("input.rating-value").val() < settings.count) {
                    $(this).siblings("input.rating-value").val((parseInt($(this).siblings("input.rating-value").val())) + 1);
                    return SetRating(event.which);
                }
            }
        });

        Rater.on("mousedown", ".fa", function() {
            event.preventDefault();
            $(this).blur();
        });

        Rater.on("focusout", ".fa", function() {
            if ($(this).siblings("input.rating-value").val() == 0) {
                $(this).parent().children(":first").attr("tabindex", 0);
            }
        });

        BuildRating();

    };

}(jQuery));