<?php
    require_once '../dbconfig.php';

    function closeDatabaseConnection() {
        mysqli_close($conn);
    }

    function checkUserToLogin() {
        if ($conn) {        
            $name = $_REQUEST['username'];
            $password = $_REQUEST['password'];
            
            if ($name){
                $sql = 'select username as user, password as pass from users where username="' . $name . '"';
    
                $obj = $conn->query($sql);
    
                if ($obj) {
                    $aux_obj = $obj -> fetch_assoc();
                    $password_hash = $aux_obj['pass'];
    
                    if ($password_hash) {
                        if (password_verify($password, $password_hash)) {
                            $name = $aux_obj['user'];
    
                            echo "<script>";
                            echo "var name_of_user = '" . $name . "';";
                            echo "localStorage.setItem('user', name_of_user);";
                            echo "window.location.replace('../../index.html');";
                            echo "</script>";
                        }
                    }
                }
                
            }
            
        } else {
            die('Connection failed: ' . mysqli_connect_error());
        }

        closeDatabaseConnection();
    } 
?>