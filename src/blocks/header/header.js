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
        },50);
    }
});


$(".header__basket-fullScreen").click(function() {
    //без понятия, почему, но работает только с setTimeout
    setTimeout(function() {
        $(".header__basket").hide();
        $(".header__basket-fullScreen").hide();
    },50);
})
