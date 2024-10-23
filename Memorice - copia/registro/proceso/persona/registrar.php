<?php 
    include('../conexion/conexion.php');
    include('../persona');

    class Registrar extends Usuario{
        
        private $sqlInsert;
        public function registro(){
            $conexion=new Conexion();
            $this->sqlInsert="INSERT INTO public.persona(nombre, gmail)
	                            VALUES (:nombre, :gmail);";
            $valores=[
                ':nombre' => $this->getNombreUsuario(),
                ':gmail' => $this->getgmailUsuario(),
            ];

            $conexion->ejecutar($this->sqlInsert, $valores);
            //return $this->sqlInsert;                    
        }
    }
?>