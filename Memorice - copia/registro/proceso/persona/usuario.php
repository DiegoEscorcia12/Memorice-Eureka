<?php 
class Usuario{
    private $nombreUsuario;
    private $gmailUsuario;

    public function setNombreUsuario($nombreUsuario){
        $this->nombreUsuario=$nombreUsuario;
    }
    public function getNombreUsuario(){
        return $this->nombreUsuario;
    }
    public function setgmailUsuario($gmailUsuario){
        $this->gmailUsuario=$gmailUsuario;
    }
    public function getgmailUsuario(){
        return $this->gmailUsuario;
    }
}

?>