function toggle(name) {
  let w = document.getElementById(name);
  if (w.style.display == "none") {
    w.style.display = "block";
  } else {
    w.style.display = "none";
    // w.addClass("opacity");
    //='none';
  }
}

//  Обрботка форсы

$('.myform').submit(function (e) {
  e = preventDefault();
  let th = $(this);
  let mess = $('.myform');

  $.ajax( {

    url: "send.php",
    type: "post",
    data: th.serialize(),
    success: function (data) {
      if( data == 1) {
        mess.html("Email введен не верно");
        return false;

      }
      mess.html("Спасибо. Ваше сообщение отправлено.");
      
    },error: function () {
      mess.html("Ошибка отправки.");
      
    }

  }

  )


}

function () {
    
  })
