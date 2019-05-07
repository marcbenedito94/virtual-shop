var login_div = document.getElementById('login-div');

var login_out_content = `
    <form id="login-form" method="post" action="login.php">
        <label for="name">Username:</label>
        <input id="input-username" name="username" type="text">
        <label for="password">Password:</label>
        <input id="input-password" name="password" type="password">
        <input type="submit" value="Login">
    </form>

    <br/><br/>

    <form id="create-user-form" method="post" action="create-user.php">
        <label for="name">New Username:</label>
        <input id="input-create-username" name="create-username" type="text">
        <label for="password">New Password:</label>
        <input id="input-create-password" name="create-password" type="password">
        <input type="submit" value="Create User">
    </form>`;


login_div.innerHTML = login_out_content;