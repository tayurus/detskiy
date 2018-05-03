$(".link_article").click(function() {
    $(".container_article-wrapper").toggleClass("container_article-wrapper_open");
    if ($(".container_article-wrapper").hasClass("container_article-wrapper_open")){
        $(this).text("Свернуть");
        $(".container_article-wrapper").find(".opacity-20").addClass("opacity-100");
    }
    else {
        $(".container_article-wrapper").find(".opacity-20").removeClass("opacity-100");
        $(this).text("Читать далее »");
    }
})
