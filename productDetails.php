<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./components/header/header.css">
    <link rel="stylesheet" type="text/css" href="./components/nav/nav.css">
    <link rel="stylesheet" type="text/css" href="./main/productDetails/productDetails.css">
    <link rel="stylesheet" type="text/css" href="./components/footer/footer.css">
    <script src="./jquery.js"></script>
    <script src="./lodash.js"></script>
</head>
<body>
    <header id="header"></header>

    <nav id="nav"></nav>

    <br/>
    
    <footer id="footer"></footer>

    <script src="./constants/Constants.js"></script>
    <script src="./services/links-service.js"></script>
    
    <script src="./components/header/header.js"></script>
    <script src="./components/nav/nav.js"></script>

<?php    
    $servername = 'localhost:3306';
    $database = 'shop';
    $username = 'root';
    $password = '';

    $product_img, $product_name, $product_description, $product_price;

    // Create connection
    $connection = new mysqli($servername, $username, $password, $database);
    // Check connection
    if ($connection) {
        $sql = "select * from product";
        $result = $connection->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $product_img = 
                array_push($product_type, $row["type"]);
                array_push($product_name, $row["name"]);
                array_push($product_description, $row["description"]);
                array_push($product_price, $row["price"]);
                array_push($product_img, $row["img"]);
            }
        } else {
            echo "0 results";
        }
    } else {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    mysqli_close($connection);

    print '<main id="main">';   

    print '</main>';
?>

    <section>
    <div class="container-fluid">
        <p>Hola</p>
    </div>
</section>
</body>
</html>