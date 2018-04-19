$(".feedback__option").click(function() {
    $(".feedback__option").removeClass("feedback__option_active");
    $(this).addClass("feedback__option_active");
    
    $(".feedback__body").removeClass("feedback__body_active");
    $(".feedback__body[data-option=" + $(this).attr('data-option') + "]").addClass("feedback__body_active");
})
