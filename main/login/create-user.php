<?php
    $servername = 'localhost:3306';
    $database = 'shop';
    $username = 'root';
    $password = '';
    // Create connection
    $connection = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if ($connection) {        
        $name_created = $_REQUEST['create-username'];
        $password_created = $_REQUEST['create-password'];
        $password_hash = password_hash($password_created, PASSWORD_BCRYPT);

        $sql = 'insert into users values (null, "' . $name_created . '", "' . $password_hash . '")';
        $result = $connection->query($sql);

        if ($connection->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $connection->error;
        }
    } else {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    mysqli_close($connection);
?>