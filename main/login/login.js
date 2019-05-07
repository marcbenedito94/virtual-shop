var name_of_user = document.getElementById('input-username').value;
localStorage.setItem('login', name_of_user);

window.location.href = '../../index.html';
document.getElementById('login-link').innerHTML = 'Hola ' + name_of_user;