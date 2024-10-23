<?php

    include('./registrar.php');
    
    $nombre=$_POST['txtNombre'];
    $email=$_POST['txtEmail'];
    $persona = new Registrar();
    $persona->setNombreUsuario($nombre);
    $persona->setEmailUsuario($email);
    $persona->registro();


?>