<?php
    $servername = 'localhost:3306';
    $database = 'shop';
    $username = 'root';
    $password = '';
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if ($conn) {        
        $name = $_REQUEST['username'];
        $password = $_REQUEST['password'];
        
        if ($name){
            $sql = 'select password as pass from users where username="' . $name . '"';

            $password_hash_obj = $conn->query($sql);

            $aux_password_hash_obj = $password_hash_obj -> fetch_assoc();
            $password_hash = $aux_password_hash_obj['pass'];
            
            echo $password_hash;

            // if ($password_hash_obj -> num_rows > 0) {
            //     // output data of each row
            //     $nroviajenew=mysql_fetch_assoc($maxnroviaje);
            // } 
            // else {
            //     echo 'InCorrect';
            // }
        }
        
    } else {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    mysqli_close($conn);
?>