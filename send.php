<?php

$name = trim(htmlspecialchars( $_POST['name']));
$email = trim(htmlspecialchars( $_POST['email']));
$text = trim(htmlspecialchars( $_POST['text']));

if (!$name) {
  echo "<script> alert('Введите имя');  history.back();</script>";
  exit;
}
if (!$email) {
  echo "<script> alert('Введите email');  history.back();</script>";
  exit;
}
if (!$text) {
  echo "<script> alert('Наишите сообщение');  history.back();</script>";
  exit;
}


// $to = "aydimir@ukr.net";
$to = "aydimir@ukr.net";

	//	SEND	EMAIL
	$header = "Content-type: text/html; charset=utf-8\r\n"; //тип и кодировка 
	$header .= "From: <".$email.">\r\n"; //from
	$header .= "Reply-to:\r\n"; //Reply
	$message = "<html>";
	$message .= "<head>";

  $message.="<body><table width='100%' border='0' cellpadding='0' cellspacing='0'  class='text_black_11'>";
  $message.="<tr><td>From: ".$name." </td></tr>";
  $message.="<tr><td>e-mail: ".$email." </td></tr>";
  $message.="<tr><td> ".$text." </td></tr>";

$message.="</table></body></html>";

$subj="Связаться со мной";

if(filter_var($email, FILTER_VALIDATE_EMAIL) ) {
  mail($to,$subj,$message,$header);  
  // echo "OK";
}else {
    echo 1;
}
// header("Location: ".$_SERVER['HTTP_REFERER']);
// exit;

// getmxrr — Получает записи MX, соответствующие переданному доменному имени хоста
// getmxrr(string $hostname, array &$hosts, array &$weights = null): bool


?>
