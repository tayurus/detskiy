//обработчик нажатия на превью
$(".constructor__preview").click(function() {

    //удаляем активный класс у предыдущего выбранного превью
    $(this).parent().find('.constructor__preview_active').removeClass("constructor__preview_active");

    //добавляем активный класс тому превью, на которое нажали
    $(this).addClass("constructor__preview_active");

    //устанавливаем выбранное превью в качестве основного изображения товара
    $('.constructor__img img').attr("src", $(this).attr("src"));

    //получаем индекс превью, на которое нажали
    let clickedIndex = $(this).attr("data-index");

    //установить специальный атрибут слайдера, равный текущему индексу
    $('.constructor__img img').attr("data-current", clickedIndex);
});

//обработчик нажатия на стрелку слайдера "влево"
$(".constructor__img-prev").click(function() {
    //узнать, сколько всего картинок в слайдере
    let totalCount = $(".constructor__preview").length;

    //получить индекс текущего выбранного изображения
    let clickedIndex = $('.constructor__img img').attr("data-current");

    //отнять от него единицу
    let newIndex = parseInt(clickedIndex) - 1;

    //если полученное число меньше 0
    if (newIndex < 0)
        //установить эту переменную равной индексу последней картинки (отнимаем 1, потому что нумерация начинается с нуля)
        newIndex = totalCount - 1;

    //получить путь картинки, которую сейчас нужно показать
    let newImgPath = $(".constructor__preview[data-index="+newIndex+"]").attr("src");

    //установить изображение в слайдер
    $('.constructor__img img').attr("src", newImgPath);

    //установить специальный атрибут слайдера, равный текущему индексу
    $('.constructor__img img').attr("data-current", newIndex);

    //установить в списке превью активным тот элемент, который сейчас отображается (черная полоса справа)
    $(".constructor__preview").removeClass("constructor__preview_active");
    $(".constructor__preview[data-index="+newIndex+"]").addClass("constructor__preview_active");
});


//обработчик нажатия на стрелку слайдера "вправо"
$(".constructor__img-next").click(function() {
    //узнать, сколько всего картинок в слайдере
    let totalCount = $(".constructor__preview").length;

    //получить индекс текущего выбранного изображения
    let clickedIndex = $('.constructor__img img').attr("data-current");

    //отнять от него единицу
    let newIndex = parseInt(clickedIndex) + 1;

    //если полученное число меньше 0
    if (newIndex >= totalCount)
        //установить эту переменную равной индексу последней картинки (отнимаем 1, потому что нумерация начинается с нуля)
        newIndex = 0;

    //получить путь картинки, которую сейчас нужно показать
    let newImgPath = $(".constructor__preview[data-index="+newIndex+"]").attr("src");

    //установить изображение в слайдер
    $('.constructor__img img').attr("src", newImgPath);

    //установить специальный атрибут слайдера, равный текущему индексу
    $('.constructor__img img').attr("data-current", newIndex);

    //установить в списке превью активным тот элемент, который сейчас отображается (черная полоса справа)
    $(".constructor__preview").removeClass("constructor__preview_active");
    $(".constructor__preview[data-index="+newIndex+"]").addClass("constructor__preview_active");
});

$(".constructor__option").click(function() {
    $(".constructor__option").removeClass("constructor__option_active");
    $(this).addClass("constructor__option_active");

    $(".constructor__option-body").removeClass("constructor__option-body_active");
    $(".constructor__option-body[data-option=" + $(this).attr('data-option') + "]").addClass("constructor__option-body_active");
})

$(".constructor__sale").click(function() {
    $(".header__basket-fullScreen").show();
    $(".constructor__sale-window").show();
});

$(".constructor__sale-close").click(function() {
    setTimeout(function() {
        $(".header__basket-fullScreen").hide();
        $(".constructor__sale-window").hide();
    },10);
})
