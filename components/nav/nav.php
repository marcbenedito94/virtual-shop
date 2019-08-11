<?php
$list_moros_cristianos = 'list_moroscristianos';

print '<nav>';
print '<ul>';
    print '<li id="list_rh">Recreación Histórica';
        print '<ul>';
            print '<li id="list_rh-armas">Armas';
                print '<ul>';
                    print '<li id="list_rh-armas-hachas">Hachas</li>';
                    print '<li id="list_rh-armas-lanzas">Lanzas</li>';
                    print '<li id="list_rh-armas-mazasmartillos">Mazas y Martillos de Guerra</li>';
                    print '<li id="list_rh-armas-dagas">Dagas</li>';
                    print '<li id="list_rh-armas-espadas">Espadas</li>';
                    print '</ul>';
                    print '</li>';
                    print '<li id="list_rh-arqueria">Arqueria</li>';
                    print '<li id="list_rh-ropa">Ropa</li>';
                    print '<li id="list_rh-competicion">Competición</li>';
                    print '<li id="list_rh-tiendas">Tiendas</li>';
                    print '<li id="list_rh-campamento">Campamento</li>';
                    print '</ul>';
                    print '</li>';
print '<li id="list_cuchillos">Cuchillos';
    print '<ul>';
        print '<li id="list_cuchillos-caza">Caza</li>';
        print '<li id="list_cuchillos-survival">Survival</li>';
        print '<li id="list_cuchillos-complementos">Bushcraft/Complementos</li>';
        print '</ul>';
        print '</li>';
        print '<li id="list_western">Western</li>';
        print '<li id="list_survival">Survival</li>';
        print '<li id="list_moroscristianos" onclick="getProductList($list_moros_cristianos);"><a href="#">Moros y Cristianos</a></li>';
        print '</ul>';
        print '</nav>';

        function getProductList($filter) {
            $servername = 'localhost:3306';
            $database = 'shop';
            $username = 'root';
            $password = '';
        
            $products_names = [];
            $products_descriptions = [];
            $products_prices = [];
            $products_img = [];
        
            // Create connection
            $connection = new mysqli($servername, $username, $password, $database);
            // Check connection
            if ($connection) {
                $sql = "select * from product where route = " . $filter;
                $result = $connection->query($sql);
        
                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
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

            echo 'Hola';
        }
?>