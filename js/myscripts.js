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

// $('.myform').submit(function (e) {
//   e = preventDefault();
//   let th = $(this);
//   let mess = $('.mess');

//   $.ajax( {
//     url: "send.php",
//     type: "post",
//     data: th.serialize(),
//     success: function (data) {
//       if( data == 1) {
//         mess.html("Email введен не верно");
//         return false;
//       }
//       mess.html("Спасибо. Ваше сообщение отправлено.");
//     },error: function () {
//       mess.html("Ошибка отправки.");
//     }
//   }
//   )
// }

// function send_email(var1) {
//   var1 = document.getelemementById(var1);
//   alert(var1.innerHTML);
//   alert(var1);
//   // document.addEventListener('click',(event) => event.preventDefault);
// }

// let options = {
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 20, // 10px от правого края окна (по умолчанию 0px)
//   left: 20, // 10px от правого края окна (по умолчанию 0px)
//   html: "Сохранено!", // HTML-уведомление
//   // className: "mess_visible", // дополнительный класс для div (необязательно)
//   className: "btn-outline-success", // дополнительный класс для div (необязательно)
// };
// const elem = document.querySelector(".mess");

// // elem.style = "display:block";
// setTimeout(() => {
//   // elem.style = "display:block";
//   elem.style = "visibility:visible";
// }, 1000);
// // исчезнуть через 2секунды.
// setTimeout(() => {
//   elem.style = "visibility:hidden";
// }, 2000);

// function showNotification(options) {
//   elem.style.top = options["top"] + "px";
//   elem.style.right = options["right"] + "px";
//   elem.style.left = options["left"] + "px";
//   elem.innerHTML = options["html"];
//   // добавление класса
//   elem.classList.add(options["className"]);
//   // исчезнуть через 1,5 секунды.
//   setTimeout(() => {
//     // elem.style = "display:none";
//   }, 2000);
//   setTimeout(() => {
//     elem.style = "color:red";
//   }, 1500);
// }

// showNotification(options);
