/* 18. Contact form */
$("#send_form").on('submit', function(){
    var first_name = $("#first_name").val().trim();
    var last_name = $("#last_name").val().trim();
    var email = $("#email").val().trim();
    var number = $("#number").val().trim();
    var message = $("#message").val().trim();

    $.ajax({
        url: '../mail.php',
        type: 'POST',
        cache: false,
        data: {'first_name': first_name, 'last_name': last_name, 'email': email, 'number': number, 'message': message},
        dataType: 'html',
        beforeSend: function() {
            $("#send").addClass("js-active");
        },
        success: function(data) {
            if(!data || data != "Good"){
                $("#m_err").addClass("js-active");
                $(".form-box").addClass("js-active");
                $("#send").removeClass("js-active");
            }

            else {
                $("#m_sent").addClass("js-active");
                $(".form-box").addClass("js-active");
                $("#send").removeClass("js-active");
                $("#send_form").trigger("reset");
            }
            $('.js-popup-close').click(function() {
                $(this).parents('.js-popup-fade').removeClass("js-active");
                $('.form-box').removeClass("js-active");
                return false;
            });

            $(document).keydown(function(e) {
                if (e.keyCode === 27) {
                    e.stopPropagation();
                    $('.js-popup-fade').removeClass("js-active");
                    $('.form-box').removeClass("js-active");
                }
            });

            $('.js-popup-fade').click(function(e) {
                    if ($(e.target).closest('.js-popup').length == 0) {
                    $('.js-popup-fade').removeClass("js-active");
                    $('.form-box').removeClass("js-active");
                }
            });
        },
    })
    return false;
});
