$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            beforeSend: function() {
                $(".loader").css("display", "block");
                $(".loader").animate({opacity: 1}, 300);
                $(".form__button").css("font-size", "0");
            },
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Мы приняли вашу заявку!");
                }else{
                    alert("Произошла ошибка: " + response.message);
                }
            }
        }).done(function () {
            $(".loader").animate({opacity: 0}, 300 , function() {$(".loader").css("display", "none"); $(".form__button").css("font-size", "12px"); });
        });
    });
});