$(".basket-icon").click(function() {
    $(".header__basket-fullScreen").show();
    $(".header__basket").show();
})

$(".header__basket-close").click(function(){
    $(this).parent().remove();

    if (!$(".header__basket-item").length){
        //без понятия, почему, но работает только с setTimeout
        setTimeout(function() {
            $(".header__basket").hide();
            $(".header__basket-fullScreen").hide();
        },10);
    }
});


$(".header__basket-fullScreen").click(function() {
    //без понятия, почему, но работает только с setTimeout
    setTimeout(function() {
        $(".header__basket").hide();
        $(".header__basket-fullScreen").hide();
        $(".constructor__sale-window").hide();
    },10);
})


$(".search-icon").click(function() {
    if ($(".header__search").val() != ""){
        $("#search-form").submit();
    }
    $(this).find(".header__search").toggle();
})

$(".header__search").click(function(event) {
    event.stopPropagation();
})
