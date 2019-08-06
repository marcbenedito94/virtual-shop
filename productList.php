<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./components/header/header.css">
    <link rel="stylesheet" type="text/css" href="./components/nav/nav.css">
    <link rel="stylesheet" type="text/css" href="./main/productList/productList.css">
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

    $products_type = [];
    $products_names = [];
    $products_descriptions = [];
    $products_prices = [];
    $products_img = [];

    // Create connection
    $connection = new mysqli($servername, $username, $password, $database);
    // Check connection
    if ($connection) {
        $sql = "select * from product";
        $result = $connection->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                array_push($products_type, $row["type"]);
                array_push($products_names, $row["name"]);
                array_push($products_descriptions, $row["description"]);
                array_push($products_prices, $row["price"]);
                array_push($products_img, $row["img"]);
            }
        } else {
            echo "0 results";
        }
    } else {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    mysqli_close($connection);

    print '<main id="main">';
    
    for ($index = 1; $index <= count($products_names); $index ++) {
        if ($index % 4 != 0) {
            print '<article class="article-class">';
            print '<a href="./productDetails.php"><img class="product-img"src="./assets/images/products/list-rh-armas-hachas/list-rh-armas-hachas-1.jpg" alt=""></a>';
            print '<h3 class="product-text"><a href="#">Cuchillo no afilado con mango de madera</a></h3>';
            print '<h2 class="product-price"><a>20€</a></h2>';
            print '</article>';
        } else {
            print '<article class="article-class">';
            print '<img class="product-img"src="./assets/images/products/list-rh-armas-hachas/list-rh-armas-hachas-1.jpg" alt="">';
            print '<h3 class="product-text"><a href="#">Cuchillo no afilado con mango de madera</a></h3>';
            print '<h2 class="product-price"><a>20€</a></h2>';
            print '</article>';
            print '<br/>';
        }
        
    }

    print '</main>';

    // print '<main id="main">';
    
    // for ($index = 0; $index < 4; $index ++) {
    //     print '<article class="article-class2">';
    //     print '<img class="product-img2"src="./assets/images/products/list-rh-armas-hachas/list-rh-armas-hachas-1.jpg" alt="">';
    //     print '<h3 class="product-text2"><a href="#">Cuchillo no afilado con mango de madera</a></h3>';
    //     print '<h2 class="product-price2"><a>20€</a></h2>';
    //     print '</article>';
    //     print '<br/>';
    // }

    // print '</main>';
?>

<section>
    <div class="container-fluid">
        <p>Hola</p>
    </div>
</section>
</body>
</html>