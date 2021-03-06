<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <link rel="stylesheet" type="text/css" href="./components/header/header.css">
    <link rel="stylesheet" type="text/css" href="./components/nav/nav.css">
    <link rel="stylesheet" type="text/css" href="./components/main/main.css">
    <link rel="stylesheet" type="text/css" href="./components/footer/footer.css">
    <script src="./jquery.js"></script>
    <script src="./lodash.js"></script>
</head>
<body>
    <header id="header"></header>

    <nav id="nav"></nav>

    <br/>

    <main id="main"></main>

    <br/>
    
    <footer id="footer"></footer>

    <script src="./constants/Constants.js"></script>
    <script src="./services/links-service.js"></script>
    
    <script src="./components/header/header.js"></script>
    <?php include_once './components/nav/nav.php' ?>
    <!-- <script src="./components/nav/nav.js"></script> -->
</body>
</html>