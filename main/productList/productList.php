<?php    
    $servername = 'localhost:3306';
    $database = 'shop';
    $username = 'root';
    $password = '';

    $products_names = [];
    $products_descriptions = [];
    $products_prices = [];

    // Create connection
    $connection = new mysqli($servername, $username, $password, $database);
    // Check connection
    if ($connection) {
        $sql = "select * from products";
        $result = $connection->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                // echo " - Name: " . $row["name"]. " -  " . $row["description"]. "<br>";
                array_push($products_names, $row['name']);
                array_push($products_descriptions, $row['description']);
                array_push($products_prices, $row['price']);
            }
        } else {
            echo "0 results";
        }
    } else {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    mysqli_close($connection);
?>

<script type="text/javascript">
    var products_names_list = <?= json_encode($products_names); ?>;
    var products_descriptions_list = <?= json_encode($products_descriptions); ?>;
    var products_prices_list = <?= json_encode($products_prices); ?>;
</script>