<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    $servername = 'localhost:3306';
    $database = 'shop';
    $username = 'root';
    $password = '';
    $name = '';
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
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
                        // header('Location: ../../index.html');
                    }
                }
            }
            
        }
        
    } else {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    mysqli_close($conn);
?>
</body>
</html>