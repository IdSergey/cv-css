<?php

$name = trim(htmlspecialchars( $_POST['name']));
$email = trim(htmlspecialchars( $_POST['email']));
$text = trim(htmlspecialchars( $_POST['text']));


$to = "aydimir@ukr.net";
$from = "From: <aydimir@ukr.net>\n\r";


	//	SEND	EMAIL
	$header = "Content-type: text/html; charset=\"utf-8\"\r\n"; //тип и кодировка 
	$header .= "From: ".$email."\r\n"; //from
	$header .= "Reply-to:\r\n"; //Reply
	$messag e= "<html> ";
	$message .= "<head>";

  $message.="<body><table width='100%' border='0' cellpadding='0' cellspacing='0'  class='text_black_11'>";
  $message.="<tr><td> ".$name." </td></tr>";
  $message.="<tr><td> ".$email." </td></tr>";
  $message.="<tr><td> ".$text." </td></tr>";

$message.="</table></body></html>";

$subj="Связаться со мной";
mail($to,$subj,$message,$header);

?>
