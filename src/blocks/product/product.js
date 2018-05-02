//обработчик нажатия на размер товара
$(".product__size").click(function() {
    //удаляем активный класс у предыдущего выбранного размера
    $(this).parent().find('.product__size_active').removeClass("product__size_active");
    //добавляем активный класс тому размеру, на который нажали
    $(this).addClass("product__size_active");
});

//обработчик нажатия на превью товара
$(".product__previews-item").click(function() {
    //удаляем активный класс у предыдущего выбранного превью
    $(this).parent().find('.product__previews-item_active').removeClass("product__previews-item_active");
    //добавляем активный класс тому превью, на которое нажали
    $(this).addClass("product__previews-item_active");
    //устанавливаем выбранное превью в качестве основного изображения товара
    $(this).parent().parent().find('.product__img').attr("src", $(this).attr("src"));
});


$(".product-carousel").owlCarousel({
    items:1,
    nav:true,
    dots:false,
    responsive:{
        600:{
            items:2
        },
        800:{
            items:3
        },
        950:{
            items:4
        },
        1200:{
            items:6
        }
    }
});
