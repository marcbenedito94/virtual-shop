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
                        // echo 'Correct';
                        // echo '<script>\n';
                        // echo '\t var name_of_user = "' . '"\n';
                        // echo '</script>\n';
                        $name = $aux_obj['user'];
                        header('Location: ./loginCorrect.php');
                    }
                } 
                else {
                    echo 'InCorrect';
                }
            }
            
        }
        
    } else {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    mysqli_close($conn);
?>

<script>
    var name_of_user = '<?php echo $name; ?>';
    // document.write('Hola ' + name_of_user);
</script>