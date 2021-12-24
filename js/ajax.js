$(document).ready(function () {
  // console.log('Hello World');
  $("button#send").on("click", function () {
    // console.log('Hello World');
    let first_nameValue = $("input#name").val();
    let emailValue = $("input#email").val();
    let messValue = $("input#text").val();
    let mess = $(".mess");

    // console.log(first_name);
    // console.log(last_name);

    //  Отпрравка данных
    $.ajax({
      method: "POST",
      url: "send.php",
      data: { first_name: first_nameValue, email: emailValue, mess: messValue },

      success: function (data) {
        if (data == 1) {
          mess.html("Email введен не верно");
          return false;
        }
        mess.html("Спасибо. Ваше сообщение отправлено.");
        // Обнуляем форму
        $("input#name").val("");
        $("input#email").val("");
        $("input#text").val("");
      },
      error: function () {
        mess.html("Ошибка отправки.");
      },
      // .done(function( msg ) {
      //     // alert( "Сохранено: " + msg );
      //     mess.html("Email введен не верно");
      // });
    });
  });
});
