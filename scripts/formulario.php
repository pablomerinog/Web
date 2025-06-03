<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars(trim($_POST["nombre"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $mensaje = htmlspecialchars(trim($_POST["mensaje"]));

  $para = "pablomerinog@gmail.com"; // Cambia esto por tu email real
  $asunto = "Nuevo mensaje desde formulario de contacto";

  $contenido = "Nombre: $nombre\n";
  $contenido .= "Email: $email\n\n";
  $contenido .= "Mensaje:\n$mensaje\n";

  $cabeceras = "From: $email\r\n";
  $cabeceras .= "Reply-To: $email\r\n";

  // Enviar el correo
  if (mail($para, $asunto, $contenido, $cabeceras)) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Error al enviar el mensaje.";
  }
}
?>